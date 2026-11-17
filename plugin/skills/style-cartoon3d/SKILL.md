---
user-invocable: false
name: megaedit-cartoon3d
description: Write a Megaedit script.json in the Cartoon 3D style, a directed 50 to 65 second story short. Flat stick-cartoon characters stand in a real lit 3D world (lamps, fires, sun, soft shadows, textured walls, haze, lens blur, filmic grade), the camera is keyed on every shot with punch-ins on spoken words, cuts are hard, and captions are big sentence-case words. Use for narrated stories, "what happened to X", history and science tales, fables. Needs a WebGL render.
---

# Cartoon 3D (lit)

A narrated story shot like a film. Every scene is a **shot list** in `visual.extra.lit`: the place, who stands where, what they do and feel, where the camera sits, how it moves and which spoken word it cuts or punches in on. The captions carry the words; the picture carries the story. No text cards.

**Old scripts still render.** A scene that has `extra.lit` is drawn by the lit renderer. A scene without it falls back to the older ink-outline drawer (`extra.time`, `extra.shots[{size,move,light,fx}]`, `visual.setting`). Do not mix the two looks in one episode; write `extra.lit` on every scene. `check` tells you which scenes are on the fallback.

## The shape of an episode
- 50 to 65 seconds, about 3.3 words a second (160 to 200 words), 10 to 13 scenes of 8 to 22 words.
- Move through 4 to 6 places (`set`). A story told in one room is a slideshow.
- Formula: a person and a problem in the first sentence, three tries that each fail in a specific way, the turn, the payoff, one dry last line. Real details, no morals.
- Two or three characters. Put each in `cast` (megaedit.json) and, if you want a hat, glasses or a dress, in `bible.looks`.
- Captions: leave the style on `story`.
- Per scene: 1 to 3 shots, so a cut about every 2.5 to 4 seconds. Hard cuts only (`xfade` is for dreams). Never two shots of the same `frame` in a row.

## Shape of a scene
```json
{ "id": "s05", "text": "At seven past three, the tower door creaked open. Someone tiny crept up the stairs.",
  "visual": { "layout": "hero", "headline": "x", "setting": "workshop", "characters": [{ "ref": "ada" }], "camera": "push-in", "transition": "cut",
    "extra": { "lit": {
      "bible": { ... },                         // scene 1 only
      "set": "tower",                           // preset, bible set, or an inline set
      "shots": [
        { "frame": "wide", "move": "push", "fx": ["dust"], "actors": [{ "ref": "ada", "at": [-1.4, -1.2], "face": "worry" }] },
        { "at": "Someone", "frame": "low", "on": [0.4, 0.8, 0], "actors": [{ "ref": "pip", "at": [0.6, 1.0], "to": [0.4, -0.5], "act": "walk" }] }
      ] } } } }
```
`layout`, `headline`, `setting`, `characters` are required by the schema but unused by lit scenes (give them any valid value). `at` is a spoken word.

**Cues** are seconds from the scene start, or spoken words: `"furnace"` (first match), `"stick#2"` (second match), `"stick+0.3"` (0.3 s later). `check` warns when a cue is not in the line.

World units are metres, y up, the camera looks down -z, the stage is around x 0, z 0, a character is about 1.5 m tall, a table is 0.78 m. Keep two characters about 1.1 m apart, the frame is a narrow vertical slice. Back wall at -z, camera at +z.

## Sets
`set` = a preset name: `cellar tavern study workshop hall alley market harbour meadow forest ruins`, or a name from `bible.sets`, or an inline set. An inline set may start from one: `{ "base": "cellar", "mood": "dawn", "props": [...] }` (its props are added to the base's).

| field | values |
| --- | --- |
| `kind` | `room` `hall` (vaulted) `street` `field` (open air) |
| `mood` | indoors: `candle fire window cold`; outdoors: `day dusk dawn night overcast` (an indoor mood on a field maps to its nearest outdoor one and the other way round) |
| `wall` / `floor` | walls `brick stone plaster wood iron`; floors `wood stone cobble dirt grass sand cloth` |
| `size` | width, depth, height in metres |
| `wallCol` `floorCol` `sky` | `#rrggbb` trims |
| `windows` `door` `beams` `hearth` `water` | counts and switches |
| `fog` | 0 clear to 1 thick |
| `dust` | air dust 0 to 1.5 |
| `props` | up to 80, see below |

Lighting follows the mood, you do not place lights: candle and lantern props are real point lights, a hearth is a fire light, windows throw a shaft, outdoors has a sun or a moon. Dark scenes need a light prop (`lantern`, `candle`, `fire`) near the action.

**Props** `{ "k", "at": [x, z], "y", "on": "<prop id>", "id", "s" (size), "rot" (deg), "n" + "area": [x0, z0, x1, z1] (scatter n copies), "k2" (brightness / radius), "text", "col", "hang" (lantern height), "shadow" }`.
Kinds: `crate barrel table stool bench chest sack shelf pillar cart haystack well fence lantern candle fire lamppost sticks coal rock tree bush bottle mug book bell coins sign banner door window bed key sword`. Put small things `on` a table by its `id`.

## Characters
`actors[]`: `ref` (a cast id, a `bible.looks` id, or `extra1`..`extra6` for a passer-by), `at` ([x, z] or `far-left left center right far-right back-left back back-right front`), `to` (walks there, `go`/`until` cues bound the walk), `dir` (`left` / `right`, which way it faces), `face`, `faces: [[cue, face]]`, `act`, `acts: [[cue, act]]`, `held`, `scale`, `tint` (`silhouette dark cool`), `look` ([x,y] eyes), `from` / `hide` cues.
- `face`: `neutral happy joy worry shock angry smug sleepy sad talk grit evil flat`
- `act`: `idle talk point shrug cheer scared walk run think slump reach wave carry dig hold-up bow sit laugh`. The mouth moves by itself while the scene's `speaker` is that actor.
- `held`: `shovel tally knife lantern mug paper cane bundle keys half`
- `bible.looks.<id>`: `{ body, body2, trim, skin, style (plain vest coat apron robe dress tunic), hat (flat bowler top mob coif straw crown hood wig), hatCol, band, hair, hairStyle, moustache, beard, glasses, scale, wide, legs }`. `beard` is a colour (`"#5a4030"`), `moustache` is `true` or a colour; use only the listed `style` / `hat` values. A bad look value silently drops the whole video to the old flat renderer, so look at a still of scene 1 after editing the bible. Characters not in the bible are derived from `cast.json`.

- Every character is a **rigged 3D toon** (the inkbeat character system: lit meshes with an ink outline, a drawn face with ringed eyes that blink and lip-flap on the voice, two-bone arms, a walk cycle, sitting, held props): big cream-white round head, bean torso, thin dark stick limbs, ball hands. `act` drives the body (`idle talk point shrug cheer scared think slump reach wave carry dig hold-up bow sit laugh walk run`), `face` the expression. Hats: `flat bowler top straw cap` and cloth `mob coif hood` caps.
- `bible.chars: "card"` switches back to flat drawn cards (only for a deliberately 2D look).

## Shots
| field | values |
| --- | --- |
| `at` | the spoken word the shot starts on (first shot starts at 0) |
| `set` | cut away to another set for this shot: a preset name or a name from `bible.sets` (define `{ base, mood }` variants there; an inline object here is not supported) |
| `frame` | `wide full medium close macro low high top two ots dutch` |
| `on` | an actor ref, a prop id, or `[x, y, z]` |
| `move` | `still push pull orbit orbit-back pan-left pan-right crane-up crane-down dive rise dolly-left dolly-right` (default `push`, `wide` defaults to `still`) |
| `az` `dist` `height` `fov` `roll` | override the framing (degrees / metres) |
| `keys` | raw camera keys `[{ f, p, t, fov, e }]` for full control |
| `punch` | words where the camera pushes in over 3 frames (and stays) |
| `shake` `flash` | words where the camera shakes / the frame flashes (a slam, a blast, a spark) |
| `fx` | `dust embers smoke sparks rain snow fireflies steam leaves` |
| `grade` | `warm cold sick dream dark bright mono blood` for the turn of the story |
| `exposure` `fire` `dof` `drift` `pan` `xfade` | numeric trims |

Rules of thumb: open on a `wide` to show the place, then `medium` / `full` for the story, `close` at most twice per video, on the biggest reaction (a face filling the frame reads as a mistake), `macro` on an object in the hand, `low` for a threat, `two` for a conversation. `punch` on the word that lands. One `grade` per episode turn, not per shot. Vary `move`.

Vary the places like the Ricks refs: at least 4 different-looking sets per video, including a daylight exterior (`bible.sets.street = { base: "alley", mood: "day" }`), and a prop insert every 4-6 shots. Inserts: put the story objects on a table in a `bible.sets` entry (`{ k: "table", at: [0, -1.2], id: "tb1" }`, then `{ k: "key", at: [-0.15, -1.2], on: "tb1", s: 1.8 }`; kinds: key coins candle book mug bottle sword sticks coal sack lantern bell sign), and shoot it with `frame: "macro"`, `actors: []` and raw `keys` looking down onto the tabletop, e.g. `[{ f: 0, p: [-0.35, 1.6, -0.25], t: [0, 0.84, -1.2], fov: 38 }, { f: 60, p: [-0.15, 1.45, -0.5], t: [0.05, 0.84, -1.2], fov: 36 }]` (see the example's `bench` / `desk` sets).

Fill the frame like the Ricks refs: most shots have **2 or 3 people** (the lead, who they talk to, or `extra1`..`extra6` reacting in the back), never one figure alone on an empty stage unless the line is about being alone. Put people next to a prop, not inside it (a sitting or standing actor needs ~0.6 m clear of a bed, table or counter). Leave `dof` alone: the set stays sharp behind the cast by default.

## Episode bible (scene 1 only)
`bible`: `sets` (your own named places), `looks` (characters), `exposure` / `sat` / `vig` (episode-wide grade trim), `pan` (sideways drift, default 5), `act` (idle acting, default 1).

## Workflow
1. `megaedit new "<title>" --style cartoon3d`, write `brief.md`, then `script.json` and the `cast` in `megaedit.json`.
2. `megaedit check <dir>`: fix every error and read the warnings (cues that are not spoken words, unknown refs).
3. `megaedit voice <dir>`, then `megaedit still <dir> --scene s03 --frame 40` for every scene (look at them: dark, empty or off-centre frames are fixed with `frame`, `on`, a lantern prop, or a different `at`).
4. `megaedit render <dir> --preset 9x16-1080`. Rendering needs a GL browser; it takes several minutes, run it on the mini if you have one.
See `example/` for a finished 12-scene script.
