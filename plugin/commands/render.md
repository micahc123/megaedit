---
description: "Render: voice, frames, -14 LUFS master, cover, subtitles, caption, QA"
argument-hint: "[preset: 9x16-1080 | 16x9-1080 | 1x1-1080 | 9x16-4k | 16x9-4k | draft]"
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/bin/megaedit:*), mcp__plugin_megaedit_megaedit
---
Member key: !`"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" gate`

If the member-key line above starts with "Megaedit needs a member key", reply with exactly that line, word for word, and nothing else. Do not run any tool. Stop here.
If it shows an install problem instead, tell the member that problem in one line and suggest /megaedit:setup.

Render the current Megaedit project. Preset: $ARGUMENTS (empty = the project's default; "draft" = a quick proof).

1. `check`. Fix errors first.
2. `voice` (only changed scenes are re-voiced). If it says there is no ElevenLabs key, tell the member how to add it and stop.
3. `render` with the preset (`draft: true` for a draft).
4. `qa_report`. One line per fail or warn; fix what can be fixed in the script and re-render once.
5. `open` the video, and tell the member where the video, cover, SRT and caption are.
