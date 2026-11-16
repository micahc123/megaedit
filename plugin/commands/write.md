---
description: "Write or rewrite the script of the current video"
argument-hint: "[direction, e.g. funnier, 30 seconds]"
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/bin/megaedit:*), mcp__plugin_megaedit_megaedit
---
Member key: !`"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" gate`

If the member-key line above starts with "Megaedit needs a member key", reply with exactly that line, word for word, and nothing else. Do not run any tool. Stop here.
If it shows an install problem instead, tell the member that problem in one line and suggest /megaedit:setup.

Write the script for the current Megaedit project. Direction: $ARGUMENTS

Megaedit's tools are the `megaedit` MCP tools (mcp__plugin_megaedit_megaedit__*). If they are missing in this session, the same commands run in Bash as `"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" <command> --json` (see `megaedit help`).

Read guide "write" and the project's `style_guide`. If a script exists and the direction is a tweak ("funnier", "shorter"), keep what works and change only what was asked. Then `check` (fix every error) and `look` at the hook scene. Reply with the hook line, scene count and estimated seconds.
