---
user-invocable: false
name: megaedit-blocky
description: Write a Megaedit script.json in the Block World 3D style, a fast narrated story acted by chunky block-toy characters in real 3D rooms. A new room every beat, a moving camera, drawn faces that react, numbers or names floating over heads, two-line captions at the top. Use for "in this world…" stories, what-if rules, school and family comedy, anything with a twist ending. Needs a WebGL render.
---

# Block World 3D

Toy-figure characters (cube heads with drawn faces, mitten hands, big shoes) act out a narrated story in fully dressed 3D rooms. It is the same director as Cartoon 3D (shot lists, light per beat, lens blur, ink) with a 3D cast, top captions and **head tags**: a number, name or price that floats over a character and can change mid-scene.

## The shape of an episode
- **40 to 50 seconds at about 4.2 words a second** (170 to 200 words), 12 to 16 short scenes of 8 to 16 words. One sentence, one picture.
- **The rule first.** Open on the world's one strange rule in a single sentence ("In this town, everyone can see how many days they have left to be late."). Then one named kid, an ordinary day, the rule going right for them, then the catch, then a deadpan last line that shows where they ended up.
- A new place almost every scene: bedroom → classroom → office → hallway → kitchen.
- Captions: `block` (up to 5 words, white with a dark outline, at the top). The cast is framed lower to leave room.

## Head tags
`"tag"` on a shot puts a label over a head from that word on. Give one string for the focus, or one per character. When a number replaces a number it rolls and pops.
```json
{ "size": "two", "tag": { "kai": "400", "teacher": "112" } },
{ "at": "dropped", "size": "close", "focus": "kai", "expr": "shock", "tag": "12" }
```
Use tags for whatever the rule measures. `""` clears one.

## Places (`visual.setting`)
`bedroom`, `living`, `kitchen`, `office`, `classroom`, `shop`, `cafe`, `hospital`, `gym`, `garage`, `lab`, `studio`, `warehouse`, `cell`, and outdoors `town-square`, `night-street`, `harbour`, `forest-road`. Dress a room with `visual.extra`: `"sign"` (wall sign text), `"wall"` (hex colour), `"time"` (`day`, `dusk`, `night`).

## Shots (`visual.extra.shots`, up to 8 a scene)
| field | values |
| --- | --- |
| `at` | the word or phrase the shot starts on |
| `size` | `wide`, `full`, `two`, `medium`, `close`, `extreme`, `insert` |
| `focus` | cast id |
| `expr` | `neutral happy grin laugh excited shock scared worried sad angry smug deadpan tired think` |
| `pose` | `idle talk point shock cheer sad think walk run wave facepalm shrug` |
| `holds` / `insert` | a prop in the hand / shown close |
| `move` | `push pull pan-left pan-right tilt-up tilt-down orbit rise dutch shake hold` |
| `light` | `base bright warm gold sunset pink cool blue green night dark red lamp`: a different one on every shot |
| `place` | this shot and the ones after it happen somewhere else (any place name) |
| `fx` | `sparkle sweat dust coins confetti burst rays hearts flash smoke rain snow shake`, or `none`; left out, the engine picks |
| `cut` | `travel` (default) or `cut` |
| `tag` | head label, see above |

Most scenes are one or two shots at this pace. Start `medium` on the person the line is about, go `close` on the reaction. Use `cool` or `dark` when the catch lands.

## Cast
Any CharacterSpec works; the block body ignores `body`. Hair (`short spiky bun long bob curly cap beanie mohawk none`), accessory (`glasses sunglasses headphones scarf bowtie chain backpack`), eyes (`dot oval sleepy wide anime`), outfit colours and pattern all show. Give the hero one loud feature (a bright beanie, a scarf) so they read in a crowd. Up to 3 a scene.

## Do
- Original characters and worlds only. This is our own block-toy look.
- Let faces do the jokes: `deadpan` after chaos, `smug` before the fall.
- Say it the way you would say it out loud; round every number.

## Don't
- No game names, logos, avatars or UI from any real game.
- No text cards; a word on screen is a wall sign or a head tag.
- No income claims. At most 5 hashtags.

## Render note
WebGL. `megaedit still <dir> --scene s04 --scale 0.5` first, then render with `--gl=angle`.
