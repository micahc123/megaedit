---
description: "Make translated versions of the current video"
argument-hint: "<language codes, e.g. es pt-BR de>"
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/bin/megaedit:*), mcp__plugin_megaedit_megaedit
---
Member key: !`"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" gate`

If the member-key line above starts with "Megaedit needs a member key", reply with exactly that line, word for word, and nothing else. Do not run any tool. Stop here.
If it shows an install problem instead, tell the member that problem in one line and suggest /megaedit:setup.

Translate the current Megaedit project into: $ARGUMENTS

Read guide "translate". For each language use the `cli` tool (`translate <project> --to <code>`), translate the copy, `check` it and `voice` it. One line per language: done, or what is blocking it.
