---
user-invocable: false
name: megaedit-team
description: Write a Megaedit script.json for the Team style, a Day-N series about a scrappy sports team in polished anime 2D. Every episode has a DAY N chip, an OG-fan counter, a team-fund counter, a "Previously" replay, game and training beats, and an ending where the top comment decides what happens next. Use for basketball, soccer, volleyball, boxing or hockey underdog series.
---

# Team (sports team series)

An ongoing story about a team going from the worst club in town toward the big leagues, one small real step per episode. Big anime characters (jerseys with numbers, one team colour) stand on a drawn, run-down home ground with real line markings. Cel shading, ink outlines, speed lines and impact frames. Broadcast graphics (DAY N chip, counters) sit in the top zone; the camera never stops moving.

## Needs series memory
Reads `series.json` (SeriesSchema) next to the project, like Day-N: premise, cast ids, counters (`OG fans`, `Team fund`), rules, past episodes, `next.decidedBy`. The project's `series` field points at it: `{ "id": "ash-lot-hoops", "episode": 2 }`. Counters on screen come only from `series.json`, never from your script. The fund grows by one in-story rule (for example every OG fan puts in a dollar a week). It is story money, never an income claim.

## Choosing the sport
Set `visual.setting` on a scene (keep one sport for the whole series):
- `basketball` (also court, hoop, street): half court, key, three-point arc, hoop and backboard
- `soccer` (also football, pitch, field): pitch with penalty areas, centre circle, goal and net
- `volleyball` (also beach, sand): sand court, net and posts, palms, sea
- `boxing` (also ring, gym, fight): ring with ropes and corner posts, gym wall and bags
- `hockey` (also rink, ice): rink with blue lines, faceoff dots, boards and goal

Cast outfits are recoloured to the team colour (`palette.accent`). Put the jersey number in `personality` as `"#7. ..."`. Rivals: `extra.rivals: ["ref"]` draws those characters in the opposite colour.

## Script hooks (visual.extra)
- `ground`: `rundown` (default) | `patched` | `fresh`. Cracks, weeds and dim lights fade as the ground improves.
- `mood`: `dusk` (default) | `day` | `night` | `dawn`.
- `impact`: a word from the VO. The impact frame (flash, speed lines, punch-in) lands on it. Default is 55 percent through the scene.
- `decision: true` on a quote scene shows the decided comment card. `cliffhanger: true` on the last cta scene.

## Layouts
- **title**: team-photo lineup hero shot (give 2 characters or fewer to get the whole cast)
- **hero**: action beat, ball flying to its target, speed lines, impact frame
- **dialogue**: face-off, bubbles left and right
- **big-number**: the fan or fund counter slams in; fund beats rain coins
- **recap**: "Previously" as a grey broadcast replay
- **process**: training montage, one step per beat, whip pan between steps
- **reveal**: before/after ground swipe; `extra.ground` sets the new state
- **compare**: yesterday's ground vs today's
- **choice**: top comment decides, lanes A and B
- **list**: tactics board; **split**: two sides; **quote**: crowd and the decided comment; **cta**: cliffhanger end card

## Pacing
About 3.3 words per second. 7 to 8 scenes, 28 to 32 seconds of VO, 11 to 16 words a scene. Small wins, setbacks, no early triumphs.

## Captions
`bold-pop` (default), `karaoke`, `bounce`.

## Do
- One problem inside three seconds, one small real step, an open question at the end.
- Plain words, round numbers, "you" and "I".
- At most 5 hashtags anywhere (caption.md).

## Don't
- No real team names, logos or league marks. No income claims. No invented counters.

## Example
`example/` is Day 1 of "Ash Lot Hoops": five friends find their club's court is a cracked parking lot.
