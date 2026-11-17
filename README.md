# Megaedit for Claude Code

**The whole system for animated short videos and series, inside your own Claude Code.**
Idea → cast → style → script → voice → sound → QA → render → series memory. It all runs on your Mac.

Megaedit needs a **Megamedia Labs member key**. Join Megamedia Labs to get yours:
https://www.skool.com/mega-media-labs-6489/about

## Install

In Claude Code:

```
/plugin marketplace add micahc123/megaedit
/plugin install megaedit@megamedia-labs
```

Restart Claude Code (or run `/reload-plugins`), then unlock it with your key and get your Mac ready:

```
/megaedit:login <your key>
/megaedit:setup
```

Make your first video:

```
/megaedit:new what if the moon disappeared for one night, 30 seconds, finished video
```

The first run downloads the Megaedit engine for your Mac (renderer, styles, sound library) from this repo's
releases and checks its SHA-256 before installing it in `~/.megaedit/plugin-engine/`.

## What it does

| Step | Command | What happens |
|---|---|---|
| Idea | `/megaedit:new <idea> [style]`, e.g. `/megaedit:new why we yawn zackd style` | Picks the style, sets the cast, writes the script, shows the storyboard. Say "finished video" and it renders too. |
| Styles | `/megaedit:styles` | Every style with its example cover, in two groups. **Styles:** cartoon 3D, Roblox (Blox Studio), Zack D-style 3D, low-poly 3D, what-if, fern, kurzgesagt, vox, pixel art. **Series:** road-to, sports team, Day-N. The 3D styles render in Blender, which setup installs. |
| Cast | `/megaedit:cast` | The starter characters, and your own. |
| Script | `/megaedit:write`, `/megaedit:fix s03 <what's wrong>` | Write or rewrite; fix one scene and see it as a still. |
| Voice | `/megaedit:voice`, `/megaedit:voice-key <key>` | ElevenLabs voices with your own ElevenLabs key. |
| Sound | `/megaedit:sound` | Music bed and sound effects from a cleared library (1,500+ sounds). |
| QA | `/megaedit:check` | Script checks, storyboard, safe zones, pace, transcript, loudness. |
| Render | `/megaedit:render [preset]` | Voice, frames, -14 LUFS master, cover, subtitles, caption and a QA report. 9:16, 16:9 or 1:1, up to 4K. |
| Series | `/megaedit:series` | Series memory: the next episode picks up the last one's open loop and the top comment. |
| More | `/megaedit:clone-reel`, `/megaedit:clone-style`, `/megaedit:translate`, `/megaedit:caption`, `/megaedit:help` | Copy a reel's structure (never its content), learn a style, translate, write the post. |

Claude also gets the Megaedit tools (stills, storyboard, voice, render, QA, series) and a guide for every style,
so you can just talk to it: "make the hook punchier", "show me scene 4", "render it in 4K".

## Needs

- A Mac (Apple silicon or Intel) with Claude Code.
- A Megamedia Labs member key.
- Your own ElevenLabs API key for the voice (a free ElevenLabs account works).
- About 1 GB of disk for the engine, the render browser and the speech model.

Videos are saved in `~/Megaedit`. Keys stay on your computer.

## Update

```
/plugin marketplace update megamedia-labs
/plugin update megaedit@megamedia-labs
```

---

Megaedit © Megamedia Labs. For Megamedia Labs members. Third-party components: [THIRD_PARTY.md](THIRD_PARTY.md).
