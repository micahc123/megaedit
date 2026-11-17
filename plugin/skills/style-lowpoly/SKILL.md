---
user-invocable: false
name: megaedit-lowpoly
description: Write a Megaedit script.json plus lowpoly.json in the Low-poly style, a PS1-era 3D "odd tale of an everyday object" Short rendered in real Blender: a stack of rooms (break room, office, lab, lobby) with real props, four rigged low-poly people, price tags that pop in, hard-cut cameras and yellow two-word captions. Use when the user wants a "what if / how did this cost so much / the day a mug broke the office" story about an object, a price, a chain of small mistakes with a payoff.
---

# Low-poly: the odd tale of an everyday object

A 35 to 45 s vertical Short that looks like a PlayStation 1 game: a cross-section of one building (the rooms are stacked like a doll's house), real furniture, and a tiny cast who act the line out. A narrator tells the story; the picture lands on the words. The kit renders it with Blender on the Mac mini or a GPU pod (never the laptop), about 12 minutes for 40 s.

Kit reference (every shot and world key, the verbs and faces): `styles/lowpoly/kit/API.md`. Worked example: `styles/lowpoly/example/` (script.json, lowpoly.json, megaedit.json). Read both before you write.

## The story (6 to 9 scenes, 35 to 45 s, about 3 words a second)
1. **Hook** (scene 1): one calm sentence that sets a small thing going wrong. "Monday morning, Dan opens the cupboard, and his mug is gone."
2. **Escalate** (3 to 5 scenes): each scene hands the problem one room further (break room, office, lobby, lab) and one number bigger. Every scene has one person, one room, one beat. Use a price tag for each number.
3. **Turn**: the last line flips what we think we know. The mug was in his hand the whole time. Plant it in scene 1 (the thing is visible in his hand), so the payoff is a re-look, not a new fact.
4. **Community line**: the exact closing line from the common brief, over two scenes if it is long (a scene longer than 8 s loses people).

Write it like you would tell it to a friend. No jargon, no "honestly". One idea per sentence. Numbers are spoken and shown as tags ("$4", "$40,000").

## Files
- `script.json`: scenes with `visual.setting` (the room the scene opens in: break, office, lab, lobby, storage) and `visual.extra.shots[]`.
- `lowpoly.json` (in the project folder, the world): `stack` (rooms top floor first), `cast` (`{ id: { body, room, at, yaw } }`, bodies male / cop / secretary / scientist), `things` (the hero object: `mug`, `ball`, `crate`, a prop id...).
- `megaedit.json`: the narrator voice and the `cast` list (ids must match the world cast). Voice speed 1.05 to 1.12.

## Shots (the part that makes it look right)
- One scene, 1 to 3 shots. A cut about every 3 s. `at: "<word>"` puts the cut on a spoken word.
- Start a room on a `wide`, then cut in to a `cu` on the face on the key word. Face swaps (`face`) and a verb (`do`) on every close-up.
- Use `ins` on the hero thing, `cut` (the whole building) when the story changes floors or ends. `tag` pops a price tag; `fx` and `sfx` add a hit.
- `yaw 0` faces the camera. Place people at `[x, y]` inside x -2.5..2.5, y -2..2.
- Light shifts on every cut by itself; set `lit` to `dim`, `cold`, `warm`, `green` for a mood.
- Never leave one picture on screen for more than 4 s.

## Rules
- Run `megaedit check`, then `megaedit still` (a contact sheet from the kit, low-res, 2 minutes): look at every frame before the final render. Fix wrong faces, cut-off heads and blank walls here, not after a 12 minute render.
- Captions are made for you: yellow, two or three words, at 69 % of the height. Sound is the voice, coded SFX and nothing else (no music bed unless the user adds one).
- Render 9:16 only. Set `MEGAEDIT_BLENDER` to a wrapper that runs Blender on the mini or a pod.
- The characters (assets/cast) are Sketchfab Standard-licence models: see `kit/NOTICE.md` before a public release.

The old three.js caveman format (a `bible` on scene 1) still renders through the engine: see `legacy/`.
