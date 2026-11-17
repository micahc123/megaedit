---
description: "Make a new video from an idea: style, cast, script, storyboard (then render)"
argument-hint: "<your idea> [style: cartoon3d|roblox|zackd|lowpoly|whatif|fern|kurzgesagt|vox|pixel · series: roadto|team|dayn] [length]"
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/bin/megaedit:*), mcp__plugin_megaedit_megaedit
---
Member key: !`"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" gate`

If the member-key line above starts with "Megaedit needs a member key", reply with exactly that line, word for word, and nothing else. Do not run any tool. Stop here.
If it shows an install problem instead, tell the member that problem in one line and suggest /megaedit:setup.

New video. The member's idea: $ARGUMENTS

Megaedit's tools are the `megaedit` MCP tools (mcp__plugin_megaedit_megaedit__*). If they are missing in this session, the same commands run in Bash as `"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" <command> --json` (see `megaedit help`).

1. Read guide "megaedit" (once per session), then call `styles` (two groups: Styles, then Series). Pick the style: the one the member named ("… zackd style" means `zackd`), else the one that suits the idea best; say why in one line. A Series style (roadto, team, dayn) is an episode of a running series: use /megaedit:series to start one.
2. `new_project` with a short title, the style, the idea as `topic`, aspect 9:16 unless they asked for another shape.
3. `cast`: use the style's starter cast unless the idea needs someone specific.
4. Read guide "write" and `style_guide` for the style, then write `script.json`: a hook inside 3 seconds, plain spoken words, the length the member asked for (default 20 to 40 seconds).
5. `check` and fix every error. `look` at the hook scene, then `storyboard`. Fix anything cramped, empty or overlapping.
6. If the member asked for the finished video in their message, go on: `sfx_auto`, pick a music bed from `library` (music) that fits and set `music.trackId` in megaedit.json, then `voice`, `render`, read `qa_report`, fix and re-render anything that failed, and `open` the video. Otherwise stop after the storyboard and ask if it's good to render.
7. End with: the hook line, scenes and seconds, and where the files are.
