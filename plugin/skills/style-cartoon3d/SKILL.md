---
user-invocable: false
name: megaedit-cartoon3d
description: Write a Megaedit script.json in the Cartoon 3D style, a directed 60 second story short. Flat inked paper-head characters act in dressed 3D places, the story moves through four to six of them, real 3D objects sit in their hands, the camera never stops moving, the light changes on every beat, effects land on the action, and one or two caption words sit low on the frame. Use for narrated stories, "what happened to X", history and science tales, fables. Needs a WebGL render.
---

# Cartoon 3D

A narrated story, shot like a film. Every scene is a **shot list**: who the camera is on, how close, what face they make, what they hold, how the camera moves and what the light does. No text cards. The captions carry the words and the picture carries the story.

## The shape of an episode
- **55 to 65 seconds, about 3.6 words a second** (200 to 230 words), 10 to 14 scenes of 12 to 22 words.
- **Move the story through 4 to 6 places.** A new place every one or two scenes, and a scene can move in the middle of a sentence with `place` on a shot. The place is half the picture: pick the one the line happens in. A story told in one room looks like a slideshow.
- Script formula: a person and a problem in the first sentence → three or four tries that each go wrong in a specific way → the turn ("Then…", "Until…") → the payoff → one dry last line. Real details, no morals.
- Captions: `story` (1 to 2 words, white with a black outline, low on the frame). Never put the same words on screen twice.

## Places (`visual.setting`)
Rooms, each fully dressed with its own wall colour, lamp and window light: `bedroom`, `living`, `kitchen`, `office`, `classroom`, `shop`, `cafe`, `hospital`, `gym`, `garage`, `lab`, `studio`, `warehouse`, `cell`.
Outdoors: `town-square`, `harbour`, `forest-road`, `castle-hill`, `night-street`, `workshop`.
Many plain words map to these (school, jail, store, bank, diner, clinic, basement, dorm, factory…).
Leave `setting` out and the engine picks: a place named in the line if there is one, otherwise a new one every two scenes. Write it anyway; your pick is better.

Dress a room from the script with `visual.extra`:
- `"sign": "LOST & FOUND"` a sign on the wall (28 characters at most)
- `"wall": "#7a5cc4"` the wall colour
- `"time": "day" | "dusk" | "night"` what the window shows

## Shots (`visual.extra.shots`, up to 8 a scene)
Each shot starts on a spoken word. Leave `shots` out and the engine cuts on sentence breaks for you, but a written list is always better.

| field | values |
| --- | --- |
| `at` | the word or phrase the shot starts on (the first shot starts at 0) |
| `type` | `story` (default), `insert`, `establishing`, `aerial`, `pov-scope`, `pov`, `closeup`, `crowd`, `action`, `twist-light` (see Shot types). Sets the size, move and camera; `size`/`move` still override |
| `twist` | a lighting preset that holds from this shot on (and into the next two scenes, until a morning): `night`, `sunset`, `lamp`, `alarm` |
| `label` | text printed on a hero object in its insert (≤12 chars): a clock's `9:00`, a door's number, a button's `PUSH`, a letter's heading |
| `size` | `wide`, `full`, `two`, `medium`, `close`, `extreme`, `insert` |
| `focus` | cast id the camera is on |
| `expr` | `neutral happy grin laugh excited shock scared worried sad angry smug deadpan tired think`; one for the focus, or `{ "id": "expr" }` |
| `pose` | `idle talk point shock cheer sad think walk run wave facepalm shrug` |
| `place` | this shot and the ones after it happen somewhere else: any place name above |
| `holds` | an object the focus has from here on (see Objects) |
| `insert` | the object filmed close, right where it is, glowing, the cast blurred behind |
| `move` | `push pull pan-left pan-right tilt-up tilt-down orbit rise dutch shake hold` |
| `light` | `base bright warm gold sunset pink cool blue green night dark red lamp`: a different one on every shot |
| `fx` | one or several of `sparkle sweat dust coins confetti burst rays hearts flash smoke rain snow shake debris`, or `none` |
| `cut` | `travel` (the camera glides there, default) or `cut`. A new place and an object shot always cut |
| `tag` | a label floating over a head: a number, a name, a price. `""` clears it |

Rules of thumb: about one shot every 2 to 3 seconds. Mostly `medium` and `full` so the room reads; one `close` in five; `extreme` once an episode, on the biggest reaction. `push` is the default move.

**Shot types.** Never more than two shots of one type in a row (the engine enforces it on auto shots, counting the end of the scene before).
- `insert`: the object fills the frame. Eight hero models stand on their own little set for it, filmed at a three-quarter, a low or a top-down angle: `button clock phone envelope trophy money map door` (they move: the button presses, the clock ticks, the letter slides out, the door opens, a brick of money drops in). Other objects get their in-hand close shot.
- `establishing`: the whole place from high and far, pulling out or rising. First shot of a new place.
- `aerial`: the drone over farmland, river, villages and clouds; nobody in it. For a valley, a country, the whole world.
- `pov-scope` / `pov`: through a rifle scope (circle + crosshair) or binoculars, a long lens on the focus from far off, with hand-held drift. For aiming, spotting, watching.
- `closeup`: a face, on a shock or a realisation.
- `crowd`: the cast with a seeded crowd of extras around them, cheering or shocked by the words.
- `action`: low, close, canted, pushing in hard, with `burst debris shake`.
- `twist-light`: the shot where the story turns; it changes the lighting preset (`twist`) and the preset holds.
Left out, the engine reads the words: "valley/farms/the world" → aerial, "crowd/everyone/the whole town" → crowd, "crashed/exploded/burned" → action, "aimed/target/spotted" → pov-scope, "watched/stared" → pov, a gasp or a shock → closeup, a line naming a hero object → its insert, "then/suddenly/one day" → a sunset (outdoors) or lamp-lit (indoors) turn, "that night" → night, "alarm/crash/emergency" → alarm-red; "the next morning/dawn" ends the twist.

**Light.** Never the same light two shots running. `warm`, `gold`, `bright` for hope and wins, `cool` and `blue` for doubt, `pink` for love and daydreams, `green` for sick, greedy or strange, `sunset` for endings, `lamp` or `dark` for the low point, `red` for danger, `night` for night. Left out, the engine picks from the words.

**Effects.** They belong to an action, never decoration. `sparkle` and `rays` on the thing that matters, `coins` for money, `sweat` on a worried head, `dust` under running feet, `confetti` for a win, `burst` plus `shake` on an impact or a shock, `hearts`, `smoke`, `rain`, `snow`, `flash` on a sudden reveal. Two at most on a shot. Left out, the engine picks from the pose, the face and the words; write `"fx": "none"` for a quiet shot.

## Objects (`holds`, `insert`, `visual.props`)
Objects are real 3D models with the same ink line as the set. Where one lives depends on what it is:
- **In the hand:** `coin cash card key phone envelope coffee laptop trophy plant book pencil bell gift box battery camera microphone magnifier umbrella tool pizza ball` and most small things.
- **On the ground beside or behind them:** `car house rocket door cart flag target fire robot`. The shot widens to hold it.
- **Over the head:** `lightbulb heart star cloud sun moon chat music-note check cross clock calendar brain gear chart-up chart-down map-pin arrow`. Use for an idea, a feeling, a deadline.
- **On the head:** `crown`.

List an object in `visual.props` with the word that names it (`{ "kind": "coin", "label": "coin" }`) and it gets its own close shot on that word, then stays in the hand. In a written shot list, `insert` shows it and `holds` keeps it. One object a scene, two at most.

## Cast
Up to 3 in a scene (4 fits in a `wide`). Everyone is drawn in one family: a big cream paper head, a pill body, thin ink limbs, ring hands. Tell them apart with `body` (`bean`, `tall`, `round`, `stick`), hair (`short`, `long`, `bun`, `curly`, `spiky`, `cap`), `eyes`, one `accessory` and a shirt colour nobody else has. Two characters face each other; in a close-up the other steps out of frame on their own.

## Do
- Give every scene a different shot than the one before it.
- Name what is in the hand (`holds`) and show it once (`insert`).
- Change the place when the story moves, and the light on every shot.
- Plain English, said the way you would say it out loud.

## Don't
- No headlines or lists on screen. If it has to be read, it is a sign on the wall or a tag over a head.
- No income claims, no unsourced facts. At most 5 hashtags.
- Do not describe the camera in the text.
- No "!" or "?" over heads and no speed lines: a face and an effect say it.

## script.json example
```json
{ "id": "s03", "text": "So he walked into the bank with a shoebox and asked for a loan. The teller laughed so hard she had to sit down.",
  "visual": { "layout": "dialogue", "setting": "office",
    "characters": [{ "ref": "walt", "pose": "idle", "position": "left" }, { "ref": "teller", "pose": "talk", "position": "right" }],
    "extra": { "sign": "FIRST TOWN BANK", "time": "day", "shots": [
      { "size": "two", "move": "push", "light": "warm" },
      { "at": "shoebox", "insert": "box", "focus": "walt" },
      { "at": "asked", "size": "medium", "focus": "walt", "expr": "happy", "holds": "box", "light": "gold" },
      { "at": "laughed", "size": "close", "focus": "teller", "expr": "laugh", "move": "shake", "light": "pink", "fx": "burst" } ] } } }
```
A scene that moves:
```json
{ "id": "s04", "text": "He ran all the way home, sat down on the bed, and counted it again.",
  "visual": { "layout": "hero", "setting": "town-square", "characters": [{ "ref": "walt", "pose": "run", "position": "center" }],
    "extra": { "shots": [
      { "size": "full", "pose": "run", "expr": "scared", "light": "sunset", "fx": "dust" },
      { "at": "sat down", "place": "bedroom", "size": "medium", "pose": "sad", "expr": "tired", "light": "lamp" },
      { "at": "counted", "insert": "cash", "light": "green" } ] } } }
```
The older information layouts (list, process, big-number, split, choice, compare, recap) still draw as sticker cards over the world when you need them; a story does not.

## Render note
WebGL. Check stills first, one per shot: `megaedit still <dir> --scene s03 --frame 40 --scale 0.5` (`--frame` counts from the start of that scene). Then render with `--gl=angle`.
