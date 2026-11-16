---
user-invocable: false
name: megaedit-youpick
description: Write a Megaedit script.json in the You Pick style, a glow-up comedy where a hapless hero faces an A or B choice the viewers vote on, with comic panels, reaction faces, big A/B cards and a before/after reveal. Use for comedic story reels with a comment-to-decide ending.
---

# You pick

Loud, funny, comic-panel energy. A hapless hero, a problem, a vote, a payoff. Thick ink outlines, pill corners, halftone dots, outlined Lilita-style type that pops.

## Layouts that work
- **choice**: two big cards A and B with a VS burst, tally bar and a crown on the winner. Signature, once or twice per episode.
- **compare**: before and after slider, the hero goes from sad to smug. Signature.
- **reveal**: card flip plus flash for the twist.
- **dialogue**: speech bubbles with reaction faces, 2 characters.
- Also fine: title, hero, split, list, process, big-number, recap, quote, cta.

## Settings
bedroom (default), bathroom, kitchen, street, cafe, gym, party, office, park, mall. Pick the room that matches the joke and change it every beat or two; never five scenes in one place.
Optional per scene: `extra.counters` ({ "Jacket": 412, "Own it": 388 }, up to two chips top left that count up) and `extra.comments` ([{ "author": "@mika", "text": "...", "likes": 2310 }], up to two cards that pop in low on the frame).

## Pacing
About 3.8 words per second. 7 to 8 scenes, 26 to 30 seconds of VO, 11 to 17 words a scene. Short setup, fast vote, bigger payoff.

## Captions
`bold-pop` (default), `bounce` or `karaoke`. Big, 2 to 3 words, outlined.

## Do
- Open on the problem in the first line, with a clock or stakes ("a date in ten minutes").
- Directly address the viewer: "you have to help".
- Choice options short, both tempting, both bad: under 5 words each.
- Reaction faces: use poses `shock`, `sad`, `cheer`, `think`, `facepalm`.
- End by asking for the next vote in the cta.

## Don't
- No mean jokes about real groups; the hero is the joke, not a victim.
- No income claims; at most 5 hashtags.
- Don't put a vote in every scene; one or two.
- No numbers the ear cannot hold; round everything.

## script.json example
```json
{
  "title": "Pip and the stain",
  "hook": "Pip has a date in ten minutes and a huge stain on his shirt.",
  "scenes": [
    { "id": "s03", "text": "So you have to help. Does he wear a jacket over it, or just own it?",
      "visual": { "layout": "choice", "headline": "You pick",
        "choice": { "a": "Hide it with a jacket", "b": "Own the stain" },
        "setting": "bedroom", "camera": "whip" } },
    { "id": "s04", "text": "Most of you picked the jacket, so on it goes. And it is two sizes too big.",
      "visual": { "layout": "compare", "compare": { "before": "Stained and sad", "after": "Jacket on, still sad" },
        "characters": [{ "ref": "pip", "pose": "sad", "position": "center" }] } }
  ],
  "cta": "Comment A or B and I will tell you what happened."
}
```
See `example/` for the whole episode.
