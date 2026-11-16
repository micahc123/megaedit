---
description: "QA before you render: script checks, stills, last QA report"
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/bin/megaedit:*), mcp__plugin_megaedit_megaedit
---
Member key: !`"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" gate`

If the member-key line above starts with "Megaedit needs a member key", reply with exactly that line, word for word, and nothing else. Do not run any tool. Stop here.
If it shows an install problem instead, tell the member that problem in one line and suggest /megaedit:setup.

QA the current Megaedit project.

`check`; `storyboard`; and if there is a render in out/, `qa_report`. List problems in plain words, most serious first (safe zones, pace, transcript, loudness, whistle tones, glitches). Fix the ones that only need a script edit, `check` again, and say what is left.
