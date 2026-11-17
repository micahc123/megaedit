---
user-invocable: false
name: megaedit-fern
description: Write a Megaedit Fern-style documentary Short (style id `fern`), a dark, realistic 3D true-crime / true-history reconstruction narrated like a documentary - faceless mannequins in moody lit sets, slow cameras, RECONSTRUCTION documents with a highlighter, dark maps with a red route, a red tag at the top, a date-and-place stamp, low drones and foley. Rendered in Blender with the Fern kit. Use for any true story told "Fern style", any true-crime / heist / disappearance / history reconstruction Short, and when the member names a dark 3D documentary channel's look. Needs Blender (setup installs it, free).
---

# Fern documentary 3D (Fern kit)

Real 3D, rendered in Blender: a true story rebuilt as a quiet reconstruction. Faceless ivory mannequins in dark suits and
coats, lit by one practical source in a dark set (a desk lamp, a street lamp, a window), slow push-ins, shallow focus,
rain and fog, then 2D inserts: typed documents swept by a yellow highlighter and dark terrain maps with a red route and a
pulsing ring. A small red tag at the top (`THE CASE · YEAR`), a date-and-place stamp when time or place jumps, white caps
captions one beat at a time. Low drones under the voice, foley on the cuts. The style id is `fern`.
(`cartoon3d` is a bright cartoon look; never use it for a Fern ask.)

## The episode
- **40 to 55 seconds, about 2.4 words a second** (95 to 130 words). 7 to 10 scenes; every scene is one or two sentences.
- **9 to 13 shots**: 3D holds 3.5-7 s, inserts (doc, map, `ins`) 2.5-4 s; one shot carries several caption lines. Slow,
  never frantic. Most 3D shots are close on a part of the thing at the centre of the story (for a plane: `focus: "jet.tail"`,
  `jet.engine`, `jet.gear`, `jet.stairs`...), so the frame falls into black around it. People are rare: from behind or in shadow.
- Formula:
  1. **Cold open, present tense, date + place**: "November 24, 1971. Portland, Oregon. A man in a dark suit buys a ticket."
     First shot carries a `stamp`.
  2. **The setup**: who, what is at stake, one concrete number (the amount, the minutes, the floors).
  3. **The act**, step by step, each step a new shot; one `doc` (the note, the report, the ransom demand) with the key
     phrase highlighted.
  4. **The escape / the turn**: a `map` with the route and the ring on where it ends.
  5. **The aftermath**: what was found, years later (say the year in the voice; no second stamp).
  6. **The open question**, one quiet line. Then the end card (`kind: title`).
- True stories only, real dates and places, no invented quotes presented as real. Write for the ear; round numbers.

## Two files
1. **`script.json`** (the normal Megaedit script, `new_project` style `fern`, aspect 9:16): scenes with `text` and
   `visual.extra.shots`, a list of **kit shots**. The first shot starts with the scene; each later shot has
   `"at": "<the word it starts on>"`. The kit writes the captions from the voice; you don't.
2. **`fern.json`** in the project folder (write the file yourself): the world.
   `{ "tag": "FLIGHT 305 · 1971", "title": "Flight 305", "subtitle": "The only unsolved hijacking in American aviation", "music": "tense", "cast": {...}, "places": {...} }`

Read `example/script.json` and `example/fern.json` before writing. Copy their patterns (framing, light, stamps, inserts),
not their story. The full key reference is `kit/API.md`.

## Cast (`fern.json` `cast`)
`{id: {"outfit": "suit|coat|shirt|uniform|worker|dress", "color": "#1d2230", "hat": "fedora|cap", "height": 1.0}}`.
Keep clothes dark and muted (`#14161c`, `#2a2622`, `#1d2a3a`); one figure may wear a lighter coat to stand out.
Mannequins are faceless on purpose: the story is in the light, the pose and the object, never a face.

## Places (`fern.json` `places`)
Every location the story names gets a place: `room` (office, apartment, vault, cabin, gallery), `street`, `open`
(tarmac, field, forest), `shore`, `sky` (in flight at night: a `jet` with `lit`, `stairs`, `gear`), and a `table` for
object inserts. Give each room a practical light (a `desk_lamp`,
`pendant`, a `window` with night or dawn outside) and 3-8 props placed where the shots look. Name the props a shot frames
(`{"name": "note"}`).

## Shot keys (`visual.extra.shots[]`)
| key | values |
|---|---|
| `set` | a place name from `fern.json` |
| `cam` | `ews ws mls ms two mcu cu ecu ots low high top ins pov aerial` |
| `subject` / `focus` | a cast id, a named prop, or a part of a jet/plane prop: `jet.tail` `jet.fin` `jet.engine` `jet.wing` `jet.gear` `jet.stairs` `jet.nose` `jet.windows` (use `cu`/`ecu`; the kit picks a low side angle) |
| `move` | `push` (default, the look) `pull` `truck_l` `truck_r` `crane_up` `crane_down` `orbit` `tilt_up` `pan` `drift`; `amt` 0.12-0.22 (slow, never still) |
| `light` | `night dusk dawn overcast interior` |
| `weather` | `rain fog snow` |
| `actors` | `[{"who", "at": [x, y], "yaw", "pose", "walkTo": [x, y]}]` (`pose`: `stand sit sit_desk type phone point look_down read carry hands_up kneel crouch lie cross_arms hands_pockets walk run talk`) |
| framing | `fh` (frame height m), `angle`, `height`, `lens`, `fstop` (1.4-2.8 shallow), `aim`, `key` (subject light, 0-2) |
| `stamp` | `["NOVEMBER 24, 1971", "Portland, Oregon"]` |
| `hit` / `sfx` | `thump boom door shutter` on the cut / `rain steps engine typewriter wind water` over the shot |
| 2D `kind` | `doc` (`sub`, `title`, `lines`, `highlight`, `label`), `map` (`points` with real `lat`/`lon`, `ring`, `label`), `title` (end card), `black` |

## Workflow
1. `new_project` (style `fern`, 9:16), then write `script.json` and `fern.json` in the project folder. Skip `cast`
   (the cast lives in `fern.json`), and skip `sfx_auto` and the `library` music: the kit scores and foleys the video itself.
2. `voices`: pick a deep, calm narrator (ElevenLabs if the member has a key) at speed 1.0-1.05. `check`, then `voice`.
3. **`storyboard`**: one draft still per 3D shot from Blender, the docs and maps drawn by the kit, plus the clash count
   (mannequins overlapping; 0 is the goal). Look at every still: the subject is lit and whole, the place reads, nobody
   inside a wall or a desk, the doc's highlight is on the phrase the voice says, the map's ring is where the story ends.
   Too dark: raise `key` or add a practical prop light. Fix and storyboard again.
4. `render` (9x16-1080). A 45 s Short is about 1,100 frames: 30 to 90 minutes in Blender depending on the Mac. Tell the
   member first. `draft` in this style returns the stills sheet, not a video.

## Don't
- No faces, no gore, no real people's photos or logos; the mannequins stand in for everyone.
- No bright daylight colour, no saturated palettes, no fast cutting, no music bed that fights the voice.
- Don't use `cartoon3d` or `lowpoly` for this look.
