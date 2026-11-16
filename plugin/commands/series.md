---
description: "Series memory: start a series, make the next episode, record what happened"
argument-hint: "[new <name> | next | record | status]"
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/bin/megaedit:*), mcp__plugin_megaedit_megaedit
---
Member key: !`"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" gate`

If the member-key line above starts with "Megaedit needs a member key", reply with exactly that line, word for word, and nothing else. Do not run any tool. Stop here.
If it shows an install problem instead, tell the member that problem in one line and suggest /megaedit:setup.

Megaedit series: $ARGUMENTS

Read guide "series".
- "new <name>": make the series with the `cli` tool (`series new <id> --title … --premise … --style …`), then the first episode with /megaedit:new.
- "next" (or empty): `series_brief` for the series of the current project, `cli` `series next <id>` to make the episode project, then write it (recap → the comment's decision → one small step → open question), check, look, storyboard.
- "record": after the member approves the final render, `record_episode` with the summary and the open loop.
- "status": `cli` `series list` and the brief of the current one.
