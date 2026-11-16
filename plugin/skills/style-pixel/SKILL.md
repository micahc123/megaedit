---
user-invocable: false
name: megaedit-pixel
description: Write a Megaedit script.json in the Pixel style, chunky 16-bit RPG art with sprites generated from the cast, tile-built settings, Press Start 2P type, dialogue boxes and stepped 5 fps motion. Use for games, gamer-adjacent explainers, "how it works" stories, retro nostalgia and anything that should feel like a save screen.
---

# Pixel

A little RPG world. Every character is a 16x24 pixel sprite built from the cast spec (body, skin, hair, outfit, accessory), so any starter cast works with no art. Settings are tile maps. Text sits in retro dialog windows, typed out as the voice speaks. Motion steps at about five frames a second and the camera snaps to the pixel grid.

## Layouts that work
- **dialogue**: the signature. Two sprites, each `line` appears in an RPG box with a name tag. Keep each line under 10 words.
- **list**: a menu window with a cursor, 3 to 4 short items.
- **process**: a quest log, 3 to 4 steps that tick as the VO reaches them.
- **big-number**: a score counter. One number, rounded.
- **reveal**: a treasure chest pops open on the emphasis word; give it one `props` icon.
- **choice**: two buttons, A and B, with `props` icons.
- Also fine: title, hero, split, recap, compare, quote, cta. Every layout is drawn.

## Settings
bedroom, town (default), dungeon, arcade, space, forest. Aliases: garage and workshop map to dungeon, office to arcade, street to town, beach to forest. Use arcade for tech, dungeon for "inside the machine", space for big ideas.

## Pacing
About 3.4 words per second. 7 to 8 scenes, 26 to 30 seconds of VO, 12 to 16 words a scene. Steady, like text in a game.

## Captions
`pixel` (default): Press Start 2P, chunky and square. `bold-pop` or `boxed` also work.

## Do
- Headlines 2 to 4 words, they render in capitals.
- Alternate a text window scene with a two-sprite dialogue scene.
- Give most scenes one prop; props are pixelated to match.
- Plain English, "you" and "I". Explain the term the first time.
- One number per scene, rounded.

## Don't
- No long paragraphs in a window; three lines at most.
- No smooth motion ideas (blurs, slow fades); the style steps.
- No income claims, no unsourced stats. At most 5 hashtags.
- Don't use another game's characters, names or music.

## script.json example
```json
{
  "title": "How a game save file works",
  "scenes": [
    { "id": "s05", "text": "Pip asked where it goes, and Juno said it sits on your drive until the game reads it back.",
      "visual": { "layout": "dialogue", "setting": "town",
        "characters": [
          { "ref": "pip", "pose": "shrug", "position": "left", "line": "So where does it go?" },
          { "ref": "juno", "pose": "talk", "position": "right", "line": "Your drive. The game reads it back later." } ],
        "camera": "static" } }
  ],
  "cta": "Comment the game you would never risk."
}
```
See `example/` for the full episode.

## Micro-story mode (`format: "micro"`)
A silent 15-second pixel loop in the "The X Nobody Y" shorts style: a household object with a face has a small
bad day, gets one good moment, and the last shot is the first shot again. No voice, no captions, no text on
screen (the title is the hook). Music is written in code (chiptune bed, soft low leads, bass bounce, brushed
snare, tiny hats, 12.5%-pulse arp) and loops exactly, so the replay is seamless.

Set at the top of script.json: `"format": "micro", "bpm": 128, "song": { "mood": "warm", "seed": 7 }`.
Moods: `warm`, `sleepy`, `bright`, `tender`. The seed changes the melody; the same seed is the same song.
The renderer writes `media/micro-bed.wav` itself when the project has no music track. Do not add a voice,
`headline`, `subhead` or `cta`; the check warns if you do.

### Timing is in beats
Each scene has `beats` (whole numbers; 2 or 4 mostly). 32 beats at 128 bpm = 15.0 s. 28 = 13.1 s, 36 = 16.9 s.
Total must be 12 to 18 s and a multiple of 4 beats. Cuts land on the beat. Shots are mostly 2 beats (0.94 s),
one or two 4-beat holds for the moment that matters. Aim for 11 to 14 shots.

### A shot is `visual.micro`
```json
{ "id": "s03", "text": "Rain on the window.", "beats": 2,
  "visual": { "layout": "hero", "camera": "static", "transition": "cut",
    "micro": {
      "set": "hall", "time": "storm",
      "cam": { "x": -34, "y": -18, "zoom": 2.0, "to": { "zoom": 2.4 } },
      "actors": [
        { "kind": "window", "x": -50, "y": -66, "s": 1.2, "pose": "rain" },
        { "kind": "umbrella", "x": -14, "y": 70, "face": "wow", "color": "yellow",
          "keys": [ { "b": 0, "face": "neutral" }, { "b": 0.6, "face": "wow", "ly": -1 } ] } ],
      "fx": [ { "kind": "flash", "from": 0.2 } ] } } }
```
`text` is only a note to yourself (it is never shown). World units are art pixels at zoom 1; the view is 180 wide.
The floor line is y 72 to 80; stand things on it with their `y`. x 0 is the middle, the wall is about -150 to 72.
- **set**: hall, bedroom, street, desk, kitchen, sky, void.
- **time**: day, dusk, night, dawn, storm. The palette grade does the mood; there is no gradient or blur.
- **cam**: `x, y, zoom` and an optional `to` glide. Whole-pixel steps, so pushes look stepped like the refs.
  Zoom 1.15 to 1.4 for wides, 2 to 3.4 for close-ups. Faces keep the same pixel grain at every zoom.
- **actors** (draw order = `z`, then list order): umbrella, nightlight, kid, hand, hat, coat, stand, door, window,
  cloud, sun, moon, star, heart, sparkle, puddle, bed, sock, mug, plush, marks, crayon, box.
  Fields: `x y rot s flip color face pose open anim z lit keys`. `color` is a palette name or #hex.
  `face`: neutral happy joy sad worried scared sleep wow hopeful cry proud none. `anim`: none bob sway shiver hop breathe.
  `open` is a 0..1 state (umbrella open, door open, nightlight glow, sitting up in bed). Kid `pose`: stand run hold reach wave point cheer.
  `keys` move an actor: `{ "b": beat, x, y, rot, s, face, pose, open, lx, ly, show }`, tweened between keys.
- **fx**: rain, stars, sparkles, hearts, confetti, dust, glow, flash, drops, zzz (`from`/`to` in beats, `x y r n`).

### The loop rule
The last shot must be the first picture again: same set, same time of day, same props and camera. Change one
tiny thing (a face, a glow) so it reads as a beat later. `megaedit check` warns when the last shot's set or time differs.

### Story shape (15 s, 12 shots)
1. Wide (4 beats): the object and its world. 2. Close (2): its face, the small sadness. 3-4. The trigger (2+2):
something changes (rain, a sound, a person). 5-9. The turn (about 10 beats): hope, the grab, the use, the joy.
10. Payoff close (2 to 4). 11. Pull back toward the wide (4). 12. The first picture again (4).

### Rules
No text cards, no voice, no ambience bed. Every shot is original art drawn in code. At most ~35 colours on screen.
Render with `megaedit render <dir> --preset 9x16-1080`; the micro samples are `example-micro/` (the umbrella nobody borrows)
and `example-micro-2/` (the night light nobody thanks). Heavy renders go on the Mac mini: `bash scripts/micro-mini.sh`.
