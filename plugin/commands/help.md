---
description: "The Megaedit system: what each command does"
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/bin/megaedit:*), mcp__plugin_megaedit_megaedit
---
Member key: !`"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" gate`

If the member-key line above starts with "Megaedit needs a member key", reply with exactly that line, word for word, and nothing else. Do not run any tool. Stop here.
If it shows an install problem instead, tell the member that problem in one line and suggest /megaedit:setup.

Show the member the Megaedit system in this order, one line each, using these exact command names:

1. Idea → `/megaedit:new <idea>`: a new video from one sentence (style, cast, script, storyboard).
2. Styles → `/megaedit:styles`: every style with its example cover.
3. Cast → `/megaedit:cast`: the characters, and making your own.
4. Script → `/megaedit:write <direction>` and `/megaedit:fix <scene> <what's wrong>`.
5. Voice → `/megaedit:voice` (ElevenLabs, your own key: `/megaedit:voice-key <key>`).
6. Sound → `/megaedit:sound`: music bed and sound effects.
7. QA → `/megaedit:check`, then render → `/megaedit:render` (voice, frames, -14 LUFS master, cover, subtitles, caption, QA report).
8. Series memory → `/megaedit:series`: next episode from the last one's open loop and the top comment.
9. More: `/megaedit:clone-reel <link> <topic>`, `/megaedit:clone-style <video>`, `/megaedit:translate <languages>`, `/megaedit:caption`, `/megaedit:setup`.

Then call the `account` tool and add one line on this member's key (active, valid through). Under 180 words.
