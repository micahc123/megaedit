---
description: "The characters: the starter cast and your own"
argument-hint: "[who you want]"
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/bin/megaedit:*), mcp__plugin_megaedit_megaedit
---
Member key: !`"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" gate`

If the member-key line above starts with "Megaedit needs a member key", reply with exactly that line, word for word, and nothing else. Do not run any tool. Stop here.
If it shows an install problem instead, tell the member that problem in one line and suggest /megaedit:setup.

Cast. $ARGUMENTS

Call `cast` and show the characters with one line each (look, personality). If the member described someone new, read guide "character" and make them with the `cli` tool (`characters` …), then show them in a `look` of a scene that uses them.
