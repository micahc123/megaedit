---
user-invocable: false
name: megaedit-povcomedy
description: Write a Megaedit script.json in the POV Comedy style, two flat cartoon characters in one room acting out "Americans vs Europeans" or "Millennials vs Gen Z", shot / reverse-shot, with a side tag on every beat, expression swaps, a punchline beat and a comment-question ending. Use for light us-versus-them habit comedy and relatable POV sketches.
---

# POV comedy

Two characters, one room, one spoken line per scene. The first cast member is **side A** (stands left, orange tag), the second is **side B** (stands right, blue tag). The camera cuts to whoever speaks, so the whole video is shot / reverse-shot with the listener's shoulder at the edge of the frame. It ends on a question that makes people pick a side in the comments.

## Cast
Exactly two characters in `megaedit.json`, `cast[0]` = side A, `cast[1]` = side B. The cast **name** is the tag on screen ("Americans", "Millennials"), so name each character after the side, not a person. Give each their own ElevenLabs `voiceId` (two different voices) and set the project voice provider to `elevenlabs`. Make the two look different at a glance: different body, hair, shirt colour (A warm, B cool matches the tags).

## Layouts
- **dialogue** (default): one line. Close shot on the speaker. `extra.shot: "wide"` shows both full body (use it for the first beat and once in the middle).
- **split**: the comparison beat. Two stacked panels with a VS badge. `items[0]` = side A's thing, `items[1]` = side B's thing, `props[0]`/`props[1]` = an icon for each (coffee, clock, car, house, phone, microphone, shoe, pizza, sun, umbrella...). Use it once, around beat 6.
- **cta**: the last beat. `headline` = the question (3 to 5 words), `items` = the two answers, `subhead` = "Pick a side in the comments". The speaker says the question out loud.

## Per-scene fields (`visual.extra`)
- `faces`: `{ "<castId>": "<face>" }` starting expression. Faces: neutral, happy, smug, worry, angry, shock, dizzy, deadpan, proud. The listener defaults to deadpan.
- `swap`: `{ "ref": "<castId>", "to": "<face>", "on": "<spoken word>" }` the face pops to a new expression on that word. Use one swap per beat at most; it is the comedy.
- `punch`: `true` on the funniest line (once, sometimes twice): push-in, comic burst, white flash, a reaction inset of the other character. Add `punchWord` (the word the burst lands on), `react` (the listener's face in the inset, default shock) and put `"hold": 0.5` on the scene so the joke has a beat of quiet after it.
- `label`: overrides the speaker's tag for one beat.
- `characters`: `[{ "ref": "<castId>", "pose": "talk|point|shock|cheer|sad|think|shrug|facepalm|wave|idle" }]` the pose for each side. The speaker defaults to `talk` (hands move with the voice), the listener to `idle`.
- `setting` on every scene, the same one all video: cafe, kitchen, living-room, street, office, park.

## Shape (aim for 11 to 13 beats, 30 to 42 s)
1. **Wide**, side A says the opener (a normal request or a "so what do you do about X?"). Title card carries the premise.
2. B answers differently from what A expected. Deadpan.
3. A reacts (swap to worry/shock).
4. B explains their way, proudly.
5. A objects.
6. **split**: B states the contrast out loud, the panels show both sides.
7. A defends their habit with a reason that makes sense to A.
8. A turns it around: asks B a question.
9. B answers, short.
10. **Punch**: A's line that over-reacts to B's answer. Funniest line, last third, with `hold`.
11. B closes the argument kindly (happy faces both).
12. **cta**: A asks the comment question.

## Pacing
About 3.2 words per second, 4 to 14 words a line. The refs run 2.6 s a beat and 19 to 37 beats; keep ours at 11 to 13 beats of 2 to 4 s. No line over 18 words. No narrator: every line is spoken by A or B.

## Captions
`pov` (default): small yellow text with a black outline, lower third. No karaoke.

## Do
- Joke about **habits and things** (coffee size, walking distance, ice, dinner time, texting). Both sides are right from where they stand.
- Affectionate stereotypes only: the audience of either side should laugh and feel seen.
- Plain spoken words, contractions fine, no jargon, no slang that dates in a week.
- Let the listener react with the face, not words, at least twice.

## Don't
- Nothing about race, religion, politics, money struggles, health or anything that makes a group the butt of the joke. `megaedit check` warns on those words.
- No insults ("stupid", "lazy", "dirty"), no "X people are...".
- No income claims, no unsourced stats ("8 out of 10").
- No music bed or ambience; the voices stay dry. At most 5 hashtags.

## script.json (shape)
```json
{
  "title": "Ordering coffee: Americans vs Europeans",
  "hook": "Hi! One coffee, please. The biggest one you have.",
  "scenes": [
    { "id": "s01", "speaker": "usa", "text": "Hi! One coffee, please. The biggest one you have.",
      "visual": { "layout": "dialogue", "setting": "cafe",
        "characters": [{ "ref": "usa", "pose": "cheer" }, { "ref": "eu", "pose": "idle" }],
        "extra": { "shot": "wide", "faces": { "usa": "happy", "eu": "deadpan" } } } },
    { "id": "s10", "speaker": "usa", "hold": 0.55, "text": "One? And you are still awake? I need three just to find my shoes.",
      "visual": { "layout": "dialogue", "setting": "cafe",
        "extra": { "faces": { "usa": "shock" }, "swap": { "ref": "usa", "to": "smug", "on": "three" }, "punch": true, "punchWord": "shoes", "react": "shock" } } },
    { "id": "s12", "speaker": "usa", "text": "So tell me, are you team bucket, or team tiny cup?",
      "visual": { "layout": "cta", "setting": "cafe", "headline": "Bucket or tiny cup?", "items": ["Team Bucket", "Team Tiny Cup"], "subhead": "Pick a side in the comments" } }
  ],
  "cta": "Comment BUCKET or TINY CUP."
}
```
See `example/` (coffee) and `example-2/` (phone calls) for full episodes with voices.
