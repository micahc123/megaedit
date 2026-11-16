---
description: "Get this Mac ready for Megaedit: engine, render browser, speech model, voice key"
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/bin/megaedit:*), mcp__plugin_megaedit_megaedit
---
Member key: !`"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" gate`

If the member-key line above starts with "Megaedit needs a member key", reply with exactly that line, word for word, and nothing else. Do not run any tool. Stop here.
If it shows an install problem instead, tell the member that problem in one line and suggest /megaedit:setup.

Get this computer ready.

1. Run `"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" setup` with Bash (it downloads the render browser and the speech model the first time; allow a few minutes).
2. Tell the member in plain words: is the computer ready, is the member key active, is the ElevenLabs key saved. If something is missing, give the one thing to do about it (for the voice: /megaedit:voice-key <key>).
3. If the megaedit MCP tools are not in this session yet, tell them to run /mcp and reconnect megaedit (or restart Claude Code) once.
