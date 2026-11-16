---
user-invocable: false
name: megaedit-roadto
description: Write a Megaedit script.json in the Road-to style, a Day-N episode where a flat inked 2D cast stands in a painted 3D world (football stadium, stands, fence, locker room, ball close-up, plus field, gym, street, office) under a gliding camera, with a DAY chip and a vote card to end on. Use for underdog "road to" series in any field. Needs a WebGL render and an ElevenLabs key.
---

# Road-to

A Day-N series episode: flat ink-outlined cut-out characters stand in a painted 3D place with fog, depth-of-field blur and a gliding camera. A DAY chip rides top-left, the comment that decided the episode drops in first, and the last scene is a vote card ("Top comment decides").

## Voice (required)
ElevenLabs only. Use `voice.provider: "elevenlabs"`, a natural storyteller voice, `speed` about 0.83 to 0.9, stability 0.45. Pace lands near 3.3 words per second, one continuous take across scenes. New roadto projects default to this voice, and megaedit trims any held vowel that would trip the whistle gate (a narrow cut inside the flagged run only, same duration). A scene that is already voiced renders without a key; voicing a new one without a key stops with "This project uses an ElevenLabs voice but no key is set"; it never falls back to the system voice. Check held vowels with `whistle.py --strict` before shipping.

## Settings
Football: stadium (gridiron with yard lines and numbers, grandstands full of fans, floodlights, goalposts, team bench), stands (close bleachers and a team banner), fence (chain-link fence and the practice field behind it), lockers (locker room: lockers, jerseys, helmets, play board), ball (a hero football on the turf). Generic: field, gym, street, office, plus field-dusk and street-night. Aliases: endzone/sideline/gridiron to stadium, bleachers/crowd to stands, gate/practice to fence, locker-room/tunnel to lockers, court/dojo to gym, garage/shop to office. The look is dusky (purple and pink sunset). The series `accent` is the team colour (maroon for the reference series) and the series title is painted into the end zone and banners.

## Cast, captions, cards
Outfit pattern `stripe` draws a team jersey (shoulder pads, number, sleeve stripes) in the outfit top colour, so set `outfit.top` to the team colour. Poses `cheer`, `shock` and `wave` put the arms up. Captions use the `roadto` style: uppercase, thick black outline, 1 to 3 words, and the `emphasis` words in red, so give every scene 1 or 2 emphasis words. A `big-number` scene with `visual.extra.scoreboard` = `{home, away, homeScore, awayScore, homeFrom, awayFrom, quarter, clock}` draws the scoreboard card. The `choice` layout draws two icon tiles with OR between them and the "Top comment decides" pill; the camera kicks in on every emphasis word and sentence end.

## Layouts
recap (open on last episode's vote, one short line), title, hero, dialogue, choice (the ending vote: `choice.a` / `choice.b`). Also drawn: list, process, split, big-number, reveal, compare, quote, cta.

## Shape of an episode (45 to 55 s, 8 scenes, about 165 words)
1. recap of what the comments chose, under 4 seconds. 2. the new problem. 3 to 7. one small, real step in a new place each time, camera gliding (push-in, pull-out, pan, orbit). 8. a concrete either/or and "Top comment decides Day N+1".
Plain words, round every number, no early wins. At most 5 hashtags.

## Render
WebGL: `--gl=angle`, or swangle with no GPU. Render on a render machine, check one still first.
