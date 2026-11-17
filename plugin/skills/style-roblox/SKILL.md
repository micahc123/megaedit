---
user-invocable: false
name: megaedit-roblox
description: Write a Megaedit Roblox-style story Short (style id `roblox`), the "in this world, everyone has a number on their chest" kind of video, acted by blocky R6-style avatars with decal faces in Roblox-looking places and rendered in Blender with the Blox kit. Use for any Roblox / Roblox-style / blocky avatar story Short, and when the member names a Roblox story channel's look. Needs Blender (setup installs it, free).
---

# Roblox-style story 3D (Blox kit)

Real 3D, rendered in Blender: R6-style blocky avatars (cylinder heads with drawn decal faces, block bodies, cloth prints),
glowing chest numbers, soft "Future"-style light with real shadows and lens blur, a different Roblox-looking place every
line, and a fast narrator. Megaedit makes the voice (ElevenLabs) and the captions, music and SFX come from the kit.
The style id is `roblox`.

## The episode
- **35 to 45 seconds, about 4.3 words a second** (150 to 190 words). 8 to 12 scenes; every scene is one sentence of VO.
- **18 to 24 shots in total**: cut every 1 to 2.5 seconds. A scene with a comma list gets one shot per clause.
- Formula (it is what the big Roblox story channels run):
  1. **The rule of this world**, one sentence, over a crowd that shows it ("In this world, every person has a glowing number on their chest, telling them how much luck is left in their day.").
  2. **What it means**, two quick shots: a green example and a red example.
  3. **One kid** wakes up with the extreme version (a huge green number).
  4. **Three fast wins**, each in a new place (money found, compliments, a car).
  5. **The turn** at home: the number flips red and drops to an absurd value.
  6. **The catch**, explained in one line ("the numbers never handed out free luck, they took it from someone else").
  7. **The dark last line**, deadpan, on the person it cost.
- Write for the ear, round numbers, no income claims, at most 5 hashtags.

## Two files
1. **`script.json`** (the normal Megaedit script, `new_project` style `roblox`): scenes with `text` and
   `visual.extra.shots`, a list of **kit shots**. The first shot starts with the scene; each later shot has
   `"at": "<the word it starts on>"`. The kit writes the captions from the voice; you don't.
2. **`blox.json`** in the project folder (write the file yourself): the world.
   `{ "cast": {...}, "places": {...}, "things": {...}, "keys": [...], "keycolors": {...}, "music": [[0, "suspense"], [0.25, "playful"], [0.6, "dark"]] }`

Read `example/script.json` and `example/blox.json` before writing: a 22-shot luck story that scored 7.8/10 against the
reference channel. Copy its patterns (lens, eyeline, height, grade per shot), not its story.

## Cast (`blox.json` `cast`, keyed by the Megaedit cast id)
`skin`, `shirt`, `pants`, `shoes`, `hair_color`, `cap_color`, `tie_color`: RGB 0-1. `height` 1.0 adult, 0.78-0.85 kid.
`hair`: `anime` (the orange messy hero hair), `short`, `curly`, `spiky`, `cap`, `long`, `longflow`, `pigtails`, `bald`, `bun`, `grey_old`.
`extras`: `glasses collar tie pocket apron cardigan beard open`. `sleeves`: `short`/`long`.
`print`: `tex:argyle` `tex:hawaii` `tex:goldfloral` `tex:rags` (+ `pants_print`, `print_col`).
`decals`: the face decals this character uses (`kiss smirk sadsweat wow teeth grump scream cry sleepy xeyes`).
**`chest`: `["1000%", [0.12, 1.0, 0.08]]`** the number printed on the chest and its colour (green `[0.12,1,0.08]`, red `[1,0.05,0.04]`).
Use the same id for a character everywhere: `blox.json` `cast`, the shot actors, and any `visual.characters` refs in `script.json`.

## Shot keys (`visual.extra.shots[]`)
| key | values |
|---|---|
| `set` | a place name from `blox.json` `places`, or a ready one: `Street Kitchen Gym MusicRow TownPool Bedroom Hallway Classroom LivingRoom Store Office Bathroom Park Backyard Playground` |
| `cam` | `ews ws mls ms two mcu cu ecu ots low worm ground high top pov ins` |
| `subject` | cast id the camera frames |
| `mood` | `sunny sunset dusk night nightlit storm redsky` |
| `move` | `pushin pull creep push reveal_push crash_in drift lock`; `amt` 0.3-0.7 |
| framing | `fw` (frame width in studs, 2.6 tight to 13 wide), `eyeline` 0.2-0.5, `height` (camera z offset, `"ground:0.7"`), `angle` (deg around the subject), `aim` `[x,y,z]`, `lens` mm, `fstop` 0.8-2.4 (blur) |
| `grade` | `warm cold red pop` (per shot colour grade) |
| `actors` | list of actors (below); a later shot in the same scene keeps the previous actors if you leave it out |
| `pass` | prop names the camera may look through (a fence, a table) |
| `focus` | a prop name, with `cam: "ins"` an insert of that object |

Actor: `who`, `at` `[x, y]` (clear zone `|x|<7, -4<y<3`, keep people 2.5 apart), `z` (stand on something), `walkTo`,
`yaw` (0 faces camera), `anim` (`idle talk walk run point shrug shock scared cheer eat cross_arms think sad angry wave sit
facepalm lie kneel sob sit_legs hands_head arms_wide kneel_sob`), `animAt` `[[t, anim]]`,
`face` (`neutral smile grin laugh shock scared sad worried angry smug think blink cry dead scream whistle sadtear whiteeye`,
or a decal `d:smirk`), `faceAt`, `talk` `[t0, t1]`, `look` `[x, y]`, **`chest`** (override), **`chestAt` `[[t, "text", rgb]]`**
(the number changes mid-shot: the money shot of the genre).

## Places and things (`blox.json`)
Every location the story names gets its own place: `{"Dealership": {"kind": "outdoor", "ground": "asphalt", "backdrop": "city", "props": [["lamp_post", -14, 8, 0], ...]}}`.
Rooms: `wall`, `lower`, `floor` (`wood woodlight tiles carpet concrete checker`), `floor_color`, `windows`, `light` (`warm`/`panel`).
Outdoor: `ground` (`grass pavers asphalt sand dirt`), `backdrop` (`houses trees city fence none`). `base` builds on a ready place.
Props: `bed desk chair sofa table tv door lockers counter store_shelf fridge stove plant tree bush rock fence house bench car
lamp_post trash_can wheelie_bin hydrant box crate bleachers hoop umbrella` and more; options in a 5th element (`{"color": "#c84a6a", "in_clear": true}`).
Anything the script names that isn't a prop is a **thing**: 3-12 chunky parts (`block`, `tube`, `cone`, `ball`), bright flat colours.

## Captions and music
`keys` + `keycolors` colour the words that matter (the number word green, "red" red, the hero's name yellow).
`music`: `[[fraction_of_video, mood]]` with `suspense playful dark sad triumph hit none`.

## Workflow
1. `new_project` (style `roblox`, 9:16), then write `script.json` and `blox.json` in the project folder. Skip `cast`
   (the cast lives in `blox.json`), and skip `sfx_auto` and the `library` music: the kit scores and foleys the video itself.
2. `check`, then `voice` (ElevenLabs), then **`storyboard`**: one still per shot from Blender plus the clash count
   (characters overlapping; 0 is the goal). Look at every still: the place reads, the face is visible, the chest number is
   readable and **whole** (not cut by the frame edge, not hidden by hair, arms or props), nobody inside a wall, nothing too
   dark. The twist shots matter most: the number the story turns on must be the clearest thing in its frame. On a close
   shot (`mcu`/`cu`) that crops the number, widen `fw` or lower `eyeline`. Fix and storyboard again.
3. `render` (9x16-1080). A 40 s Short is about 1,200 frames: 10 to 25 minutes depending on the Mac. Tell the member first.
   `draft` in this style returns the stills sheet, not a video.

## Don't
- No real game names, logos or UI on screen, and no real creators' characters. Original cast and stories only.
- No text cards: a word on screen is a caption or a chest number.
