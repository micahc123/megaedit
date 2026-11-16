---
description: "Fix one scene (e.g. /megaedit:fix s03 the chart looks empty)"
argument-hint: "<scene> <what is wrong>"
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/bin/megaedit:*), mcp__plugin_megaedit_megaedit
---
Member key: !`"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" gate`

If the member-key line above starts with "Megaedit needs a member key", reply with exactly that line, word for word, and nothing else. Do not run any tool. Stop here.
If it shows an install problem instead, tell the member that problem in one line and suggest /megaedit:setup.

Fix one scene of the current Megaedit project: $ARGUMENTS

Read guide "fix-scene". `look` at that scene, change only that scene in script.json (keep its id), `check`, `look` again. If its words changed, `voice` with `only` set to it. Reply in two lines: what was wrong, what changed.
