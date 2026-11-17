---
user-invocable: false
name: megaedit-kurzgesagt
description: Write a Megaedit script.json in the Kurzgesagt style, a calm flat-vector science explainer Short told in illustrated worlds in layered depth (ocean, land, space, micro), cute rim-lit characters with big eyes, lots of small animated life, a camera that never stops travelling, and shot changes that zoom through, iris, wipe or dissolve
---

# Kurzgesagt explainer

A 55–65 s science Short with one surprising true fact and a calm narrator, for example "Corals spawn on the same night", "Why the Moon drifts away" or "Your gut has its own nervous system". Every picture is data in `script.json`: worlds, shots, cameras and characters. The engine draws all of it from shapes, so any science topic works.

## Shape (10–12 scenes, about 2.9–3.1 words a second, one or two sentences a scene)
1. **Hook.** The strange fact in one sentence. Scene 1 carries the title (`extra.title`) and a wide establishing shot of the world.
2. **The hero.** Meet the character the fact happens to (a coral polyp, a cell, a planet with a face). Give it a close-up and a feeling.
3. **The setup.** Two or three scenes on how it works. Each scene gets 1–3 shots, a new composition and a new palette.
4. **The number.** One scene with a gauge, a thermometer, a globe or a counter, plus a yellow `tag`.
5. **The payoff.** The big moment (the spawn, the explosion, the match), with the busiest world.
6. **The quiet end.** Pull out wide. Finish on a line that makes the viewer feel small and lucky.

Write in short, calm sentences, with one number per sentence. Verify every fact before you write it.

## Worlds (`visual.setting` sets the default; `shot.world` overrides it)
| world | what it is | where the ground is | a good camera |
|---|---|---|---|
| `ocean` | reef floor, water column, surface, sky above | floor at y 2300; heroes at y 2150–2350 | `{x:540,y:1900,z:0.9}` wide, `{x:540,y:2240,z:2}` close |
| `land` | sky, sun with a face, mountains, hills, trees, flowers, birds | ground at y 1500 | `{x:540,y:1150,z:1}` |
| `space` | stars, nebula glows, planets, asteroids, dust | anywhere | `{x:540,y:960,z:1}` |
| `micro` | bokeh, floating cells and particles (inside a body, a drop of water) | anywhere | `{x:540,y:960,z:1}` |
| `plain` | a clean complementary gradient with a soft burst: for a diagram, a number or one big hero | anywhere | `{x:540,y:960,z:1}` |

`tint` picks the palette:
- ocean: `cyan`, `teal`, `violet`, `magenta`, `deep`, `warm`;
- land: `day`, `sunset`, `night`;
- space: `violet`, `navy`, `teal`;
- micro: `pink`, `cyan`, `violet`;
- plain: any of these, or `warm` for #f6b50e→#3e1060.

All coordinates are pixels on a 1080×1920 sheet. Wide frames show a wider slice of the same world.

## Shots (`visual.extra.shots`, 1–4 per scene)
`{ at, in, inAt, world, tint, sky, spawn, near, calm, seed, cam[], actors[], pill, tag, inset, punch[], flash }`
- `at`: the cue the shot starts on. Leave it off for the first shot.
- `in`: how the shot enters:
  - `cut` (the default, about half of all changes);
  - `zoom`, a zoom-through: the old shot rushes past the camera into point `inAt`;
  - `iris`, a circle that opens at `inAt` (use it once or twice per Short);
  - `wipe`, a rising wall of pink bubbles;
  - `dissolve`.

  The first shot of a scene uses `in` too: it transitions from the last shot of the scene before. Set every scene's `visual.transition` to `cut` and let the shots do the work.
- `cam`: 2–4 keys `{ at, x, y, z, ease }`. Keys without `at` spread evenly over the shot. The engine adds a steady push, a drift and a punch-in on every pop-in, so the camera is never still. **Every shot must travel:** push in on the hero, pull out to reveal, or pan across the world. Never key a pull that only cancels the push.
- `calm` (0..1): softens the busy background so the hero reads; use it for close-ups.
- Ocean only:
  - `sky` (0 = sunset, 1 = night);
  - `spawn` (0..1 pink bundles rising);
  - `near` (the crisp dark foreground).

### Actors (`shot.actors`, drawn in order)
`{ kind, x, y, s, c, mood, dir, at, to{x,y,until}, v, label, face, ring, p, seed, act[] }`
- **Characters** (`s` is a scale, about 1 at a normal size): `critter`, `polyp`, `fish`, `school`, `turtle`, `jelly`, `manta`, `whale`, `diver`, `sperm`, `larva`, `tree`, `bird`, `coral`.
- **Round things** (`s` is a radius in px): `egg`, `cell`, `sun`, `moon`, `globe`, `planet` (`ring`, `face`), `bundle`, `burst`, `glow`.
- **Instruments:**
  - `thermo` (`s` scale, `v` 0..1 fills after `at`);
  - `gauge` and `clock` (`s` radius, `v`, `label` up to 14 characters);
  - `rock` and `cloud` (`s` scale).
- `mood`: `calm`, `happy`, `worried`, `shock`, `sleepy`. Change a hero's mood on the words. The same character in two shots, worried then happy, is the cheapest acting there is.
- `at`: pops in with an overshoot on that cue. `to`: glides to a point by `until`.
- `act`: whole-body acting on a word, up to 4 per actor: `{ do, at, n }` with `do` = `hop`, `squash`, `spin`, `shake`, `nod`, `wave` (rocks side to side) or `grow` (swells and stays bigger). `n` repeats it. **Give the hero of at least every other shot an act on its key word** (a hop on "jumps", a squash on "pulls", a shake on "no", a grow on "huge"). Faces alone are not acting. Every character also breathes (a soft squash-and-stretch) by itself.
- `p`: the depth plane. 1 is the hero plane (the default); 0.3–0.9 is farther and slower; above 1 is nearer and faster.
- One big hero per shot (30–60 % of the frame width), with a `glow` behind it. Then 5–15 smaller things: fish, birds, cells.
- **Size:** measure the hero at the shot's closest `cam` zoom. It fills 30–60 % of the width, never more than the frame (a turtle at `s` 2 with `z` 1.5 is a blob covering the shot). `check` warns.
- **Staging:** never put two faces on top of each other. If one thing stands for a part of another (a tidal bulge on the Earth, a cell inside a body), use an `inset` or set it back with `p` 0.6. `check` warns when two faces overlap.

### Camera and pacing (the judges' main notes)
- **Vary the camera.** At most 6 in 10 shots are slow push-ins. Hold some still (one `cam` key), pan others sideways or follow a moving actor, pull out on a reveal, and punch in fast (two keys 0.3 s apart) on the key word.
- **The `plain` stage at most twice per Short.** Put numbers and diagrams inside a real world: a `gauge` floating in `space`, a `thermo` on the reef.
- **Change the colour family every 2–3 shots** (violet space → teal ocean → sunset land), not purple all the way through. At most half the shots in dark space or violet/navy, even for a space story: put the Earth's side of it on `land` or in the `ocean`.
- Use a real transition (`zoom`, `iris`, `wipe` or `dissolve`) on about half the scene changes, and land them on a phrase boundary, not mid-sentence.

### Text (sparse)
- **Title:** `extra.title { l1, l2, hi }` on scene 1. White, with one hot-pink word (`hi`).
- **Pill:** `shot.pill { text, sub, at }`. Purple, near the top, at most one per scene.
- **Tag:** `shot.tag { text, at }`. Yellow and tilted, for a number.
- **Inset:** `shot.inset { at, until, x, y, r, ring, bg, actors[] }`. A magnifier circle; its actors are positioned relative to its centre.
- Captions are drawn for you: 2–3 words per card at about 80 % of the frame height. Keep heroes out of that band.

### Cues
A cue is seconds from the start of the scene, or a spoken word: `"moon"`, `"moon#2"` (the second match), `"moon+0.3"`. Cut on the word that names the picture.

## Sound
Light synth SFX: pops on pop-ins, whooshes on zoom-throughs. No music bed and no ambience: leave `music` out of megaedit.json, even for a finished video (`check` warns if it is set). Use a calm documentary voice at speed 1.0–1.1.

Run `megaedit check` before rendering. It flags cue words that are not in the line and broken shots.
