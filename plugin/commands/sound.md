---
description: "Music bed and sound effects for the current video"
argument-hint: "[mood, or \"no music\"]"
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/bin/megaedit:*), mcp__plugin_megaedit_megaedit
---
Member key: !`"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" gate`

If the member-key line above starts with "Megaedit needs a member key", reply with exactly that line, word for word, and nothing else. Do not run any tool. Stop here.
If it shows an install problem instead, tell the member that problem in one line and suggest /megaedit:setup.

Sound for the current Megaedit project: $ARGUMENTS

1. `library` with kind music: pick the bed that fits the style and the member's mood (or none if they said so) and set `music.trackId` in megaedit.json (keep gainDb about -22 under a voice).
2. `sfx_auto` to place effects on every shot without one; use `sfx_search` for anything specific they asked for and add it to that scene's `sfxCues`.
3. `check`. Tell the member the bed and how many effects landed, in two lines. Everything in the library is cleared for any video, monetised included.
