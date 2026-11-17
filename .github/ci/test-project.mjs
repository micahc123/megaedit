// CI: a short test project from a style's bundled example (its pre-made voice, so no ElevenLabs key is needed).
//   node test-project.mjs <example dir> <out dir> [scenes=3]
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const [src, out, n = '3'] = process.argv.slice(2);
const keep = Number(n);
rmSync(out, { recursive: true, force: true });
mkdirSync(join(out, 'vo'), { recursive: true });
const script = JSON.parse(readFileSync(join(src, 'script.json'), 'utf8'));
script.scenes = script.scenes.slice(0, keep);
const ids = new Set(script.scenes.map((s) => s.id));
writeFileSync(join(out, 'script.json'), JSON.stringify(script, null, 2));
const meta = JSON.parse(readFileSync(join(src, 'megaedit.json'), 'utf8'));
Object.assign(meta, { id: 'ci-test', slug: 'ci-test', title: `CI ${meta.style} test` });
writeFileSync(join(out, 'megaedit.json'), JSON.stringify(meta, null, 2));
const vo = JSON.parse(readFileSync(join(src, 'vo', 'voice.json'), 'utf8'));
vo.scenes = vo.scenes.filter((s) => ids.has(s.id));
writeFileSync(join(out, 'vo', 'voice.json'), JSON.stringify(vo, null, 2));
for (const s of vo.scenes) cpSync(join(src, s.file), join(out, s.file));
for (const f of ['caption.md', 'cover.webp']) if (existsSync(join(src, f))) cpSync(join(src, f), join(out, f));
console.log(`${out}: ${script.scenes.length} scenes, ${vo.scenes.reduce((a, s) => a + s.duration, 0).toFixed(1)} s of voice`);
