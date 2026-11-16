---
description: "Write the post caption, hashtags and cover text"
argument-hint: "[keyword or angle]"
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/bin/megaedit:*), mcp__plugin_megaedit_megaedit
---
Member key: !`"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" gate`

If the member-key line above starts with "Megaedit needs a member key", reply with exactly that line, word for word, and nothing else. Do not run any tool. Stop here.
If it shows an install problem instead, tell the member that problem in one line and suggest /megaedit:setup.

Write caption.md for the current Megaedit project with guide "captions-and-post". Direction: $ARGUMENTS
At most 5 hashtags. No income claims.
