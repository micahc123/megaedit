---
user-invocable: false
name: megaedit
description: How to build a short video with Megaedit — the files, the tools, the order of work and the rules every episode follows. Read once per session before making or changing a video.
---

# Making a video with Megaedit

Megaedit runs on the member's own computer. You talk to it through the Megaedit
tools. Each video is one project folder; `new_project` makes one and makes it the
current project, and every other tool works on the current project unless you
pass `project`. You write; the engine draws, voices, renders and checks.

The member can't see a preview window, so show them things: `storyboard` for the
whole video, `look` for one scene, and `open` to put a still, cover or finished
video on their screen.

## The files

| File | What it is | Who edits it |
|---|---|---|
| `megaedit.json` | Project settings: style, language, voice, captions, music, cast, series, aspect | You, carefully |
| `script.json` | The video: title, hook, scenes. Each scene = what is said + what is shown | **You, mostly** |
| `brief.md` | What the member wants this video to be | `new_project` writes it from their topic |
| `caption.md` | The post caption, max 5 hashtags | You (`cli` with `caption`) |
| `vo/` | Voice files + word timings | The engine. Never hand-edit |
| `out/` | Renders, cover, SRT, QA report | The engine |

Call the `schema` tool once per session if you're unsure of a field. Don't guess field names.

## Starting a video

1. If this is a new install, run `setup` with `fix` on first.
2. Ask what the video is about if the member didn't say. Call `styles`; if they haven't picked one, suggest the style that suits the topic in one line and `open` its example cover so they can see it. Only offer styles their plan unlocks (`unlocked: true`), unless they just want to try a draft.
3. `new_project` with their title, style and topic.

## The order of work

1. **Read** `brief.md`, `megaedit.json`, then `style_guide` for this project's style. The style guide says which layouts, settings and cameras look good in this style. Follow it.
2. **Write** `script.json` (read `guide` "write" first). Save it, then run `check` straight away and fix every error in the same turn.
3. **Look** at what you made: `look` with a scene id returns a picture of the middle of that scene. Look at the hook scene and at least two more. If something is cut off, overlapping or empty, fix the script and look again. Then `storyboard` with `open` on so the member sees the whole video.
4. **Voice**: `voice` makes the voiceover (only scenes whose text changed). After voicing, `check` again: real timings replace estimates.
   Then `sfx_auto` for sound effects (it needs the real scene lengths, so run it after voicing).
5. **Render** with `render`. Use `draft` first if the member is still deciding: it's fast and half size. Every full export runs the QA gate.
6. **Read the QA report** (`qa_report`). Fix any `fail`, explain any `warn` to the member in one line each. Then `open` the finished video for them and tell them the folder has the cover, subtitles and caption.

## Rules every episode follows (the QA gate enforces most of them)

- **Length**: about 30 seconds unless the member or the style says otherwise. A scene can be at most 8 seconds of talking (the check fails at 8.5 s).
- **Hook**: the first scene has to be funny or emotional inside 3 seconds. No "In this video…", no "Hey guys".
- **Talk like a person.** Read every line out loud in your head. If a friend wouldn't say it at dinner, rewrite it. Plain words, one idea a sentence, round numbers ("about four million", never "4,128,302"). Exact figures go in the caption.
- **Headlines** are the few big words on screen: 7 words or fewer. They don't repeat the voiceover word for word; they're the bit you'd underline.
- **No income claims.** Never promise or imply earnings ("make $5k a month", "quit your job"). The check flags them and the member's account is the one that pays for it.
- **At most 5 hashtags** on any caption.
- **Original only.** No characters, logos, names, music or catchphrases from other people's shows, games or creators. Brand names only when the video is actually about that product.
- **Audio**: no whistles or high held tones. Only use music and SFX from `library` (everything there is cleared for use). Never download music.
- **Sound effects**: the library has 1000+ sounds (whooshes, paper, clicks, impacts, footsteps, crowd, cartoon, retro game, sci-fi and more). Never guess an id.
  - Find one with `sfx_search`. Ids look like `whoosh/swishes-sound-pack-swish-3`. Results show `peakMs`, the loudest moment.
  - Place them: `sfx_auto` puts the right sounds on every shot for this style: a whoosh on transitions, paper for paper2d, pixel blips for pixel, impacts and crowd for team, cartoon pops for cartoon3d and youpick. It writes `sfxCues` into `script.json`. Run it after the script is voiced, then look at what it chose (`dryRun` previews, `overwrite` redoes shots that already have sounds).
  - By hand: `"sfxCues": [{ "id": "<id>", "at": 0.4, "volume": 0.5 }]`, `at` in seconds from the start of the shot. Start the sound `peakMs` early plus about 2 frames (0.07 s) so its loudest point lands just before the visual hit.
  - At most about one sound a second. A sound on every beat is noise; leave the quiet parts quiet. Never pick a sound the check marks as a whistle risk.
- **Don't touch** `vo/`, `out/` or anything outside this project folder unless asked.

## Fixing one scene

When the member says "fix scene 3", change only that scene (read `guide` "fix-scene").
Keep its `id`. Re-voice only if the text changed. `look` at it and show them.

## When something fails

- `check` errors: they name the scene and field. Fix exactly that.
- Render fails with a licence message: the member's plan doesn't include that style, preset or language. Tell them in one line; don't try to work around it. `account` shows what their API key unlocks.
- No API key, or the key didn't work: the member adds `MEGAEDIT_API_KEY` to their Megaedit MCP config and restarts Claude Code. Drafts work without one.
- Voice fails: usually a missing or out-of-credit ElevenLabs key. The member can add `ELEVENLABS_API_KEY` to the Megaedit MCP config; until then the built-in system voice works for a draft.
- Anything else: run `setup` and read the failing check to the member in plain words.

## The full loop (Lab membership)
find an idea (`find_accounts`) → make it → approve → it posts (`post`, preview first) → it reads the comments and stats (`stats`, `top_comment`) → the next episode builds overnight (routines queue it for approval). `dashboard` shows all of it. Guides: `finder`, `post`, `stats`, `dashboard`. Never post without the member's yes.

Copy a viral reel: `clone_structure` (or `/megaedit:clone-reel <link> <topic>`) measures a reel's beats, cuts and pace into `structure.md`; then write an original script that follows it. It copies the structure, not the content.
