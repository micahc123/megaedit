---
description: "Save your own ElevenLabs API key (Megaedit voices every video with it)"
argument-hint: "<your ElevenLabs API key>"
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/bin/megaedit:*)
---
Member key: !`"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" gate`

If the member-key line above starts with "Megaedit needs a member key", reply with exactly that line, word for word, and nothing else. Do not run any tool. Stop here.
If it shows an install problem instead, tell the member that problem in one line and suggest /megaedit:setup.

Result: !`"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" voice-key "$ARGUMENTS"`

Reply with the result line above exactly as written. Never repeat the key back.
