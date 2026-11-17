// CI: start the plugin's MCP server exactly the way Claude Code does (the .mcp.json command, no shell; on Windows
// that resolves to bin/megaedit.exe) and check the first-run promise: the handshake answers at once while the
// engine installs, then the real tools arrive with notifications/tools/list_changed, no restart.
//   node mcp-first-run.mjs <plugin dir>
import { spawn } from 'node:child_process';
import { join, resolve } from 'node:path';
const plugin = resolve(process.argv[2] ?? 'plugin');
const t0 = Date.now();
const secs = () => ((Date.now() - t0) / 1000).toFixed(1);
const p = spawn(join(plugin, 'bin', 'megaedit'), ['mcp'], { stdio: ['pipe', 'pipe', 'inherit'] });
p.on('error', (e) => { console.error(`spawn failed: ${e.message}`); process.exit(1); });
let done = false;
p.on('exit', (c) => { if (!done) { console.error(`FAIL: the server exited early (${c}) after ${secs()} s`); process.exit(1); } });
let buf = '';
const waiters = [];
const seen = [];
p.stdout.setEncoding('utf8');
p.stdout.on('data', (d) => {
  buf += d;
  let i;
  while ((i = buf.indexOf('\n')) >= 0) {
    const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
    if (!line) continue;
    const m = JSON.parse(line);
    seen.push(m);
    for (const w of [...waiters]) if (w.test(m)) { waiters.splice(waiters.indexOf(w), 1); w.ok(m); }
  }
});
const send = (m) => p.stdin.write(JSON.stringify({ jsonrpc: '2.0', ...m }) + '\n');
const wait = (test, ms, what) => new Promise((ok, no) => {
  const hit = seen.find(test);
  if (hit) return ok(hit);
  const w = { test, ok: (m) => { clearTimeout(t); ok(m); } };
  const t = setTimeout(() => no(new Error(`timed out after ${ms / 1000} s waiting for ${what}`)), ms);
  waiters.push(w);
});
try {
  send({ id: 0, method: 'initialize', params: { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'ci', version: '1' } } });
  const init = await wait((m) => m.id === 0, 30_000, 'initialize');
  console.log(`initialize answered in ${secs()} s: ${init.result.serverInfo.name} ${init.result.serverInfo.version}, listChanged=${init.result.capabilities?.tools?.listChanged ?? false}`);
  send({ method: 'notifications/initialized' });
  send({ id: 1, method: 'tools/list' });
  const l1 = await wait((m) => m.id === 1, 30_000, 'tools/list');
  console.log(`tools/list answered in ${secs()} s: ${l1.result.tools.length} tools`);
  let tools = l1.result.tools;
  if (!tools.length) {
    await wait((m) => m.method === 'notifications/tools/list_changed', 20 * 60_000, 'tools/list_changed');
    console.log(`engine installed, list_changed at ${secs()} s`);
    send({ id: 2, method: 'tools/list' });
    tools = (await wait((m) => m.id === 2, 60_000, 'second tools/list')).result.tools;
    console.log(`tools/list now: ${tools.length} tools (${tools.slice(0, 6).map((t) => t.name).join(', ')}, …)`);
  }
  if (!tools.length) throw new Error('no tools after the engine installed');
  send({ id: 3, method: 'ping' });
  await wait((m) => m.id === 3, 30_000, 'ping');
  done = true;
  p.stdin.end();
  const code = await new Promise((r) => { const t = setTimeout(() => { p.kill(); r('killed'); }, 15_000); p.on('exit', (c) => { clearTimeout(t); r(c); }); });
  console.log(`server exited (${code}) after stdin closed. PASS in ${secs()} s`);
  process.exit(0);
} catch (e) {
  console.error(`FAIL: ${e.message}\nmessages seen: ${JSON.stringify(seen).slice(0, 2000)}`);
  p.kill();
  process.exit(1);
}
