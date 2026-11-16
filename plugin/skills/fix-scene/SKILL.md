---
user-invocable: false
name: fix-scene
description: Change exactly one scene of a Megaedit script ("fix scene 3", "make s05 punchier", "the chart scene looks empty") without touching the rest. Use whenever the member names a scene.
---

# Fixing one scene

1. Find the scene by id (`s03`) or number ("scene 3" = `s03`). If unclear which scene, `look` at the candidates and pick the one that matches the complaint.
2. `look` at it first so you see what the member sees.
3. Change only that scene object in `script.json`. Keep the `id`. Keep the text if the complaint is visual-only (that keeps the voiceover and timing as they are).
4. If you change the text, keep it close to the old length (±20%) so the video's length barely moves, and make sure it still hands off to the next scene.
5. Save, then `look` again. If the text changed, run `voice` with `only: ["s03"]`.
6. Tell the member in one or two lines what you changed.

Never reorder, renumber or delete other scenes in a fix. If the fix really needs more than one scene, say so and ask.

## When the request comes from a quality-check finding

The prompt names a check, a shot and a time ("pacing (shot 8, at 0:24)"). Work in at most a handful of steps:

- **The time wins over the id.** If the report is a save old the scene id may have moved: `look` at the scene whose time range contains that moment.
- **Only change this project.** Edit `script.json`, `caption.md` and the project's own files. Never open, search or edit Megaedit's own code, the QA checks, the plugin or anything outside this project folder. If the finding can only be fixed there, say so in one line and stop.
- **Pacing** (`N words/s against about M`): too fast = cut words or merge the line into a longer one; too slow = add a beat. Keep the meaning. Then `voice` with `only` for that scene. If voice fails (no key), say the words are fixed and the clip still needs re-voicing.
- **Safe zones** (text-like detail in the top or bottom bar): move or shrink the headline, label or on-screen text, or change that scene's layout or camera. If what trips it is the style's own background art, say so and leave the scene as it is.
- **Glitches / voice mismatch**: re-voice the scene, or simplify the text that was misheard.
- **Loudness and the true peak** are handled by the master pass when the video is exported. There is nothing to change in the script: say that and stop.
- Finish by saying what changed, or why nothing could.
