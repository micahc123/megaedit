---
user-invocable: false
name: series
description: Run a Day-N or "you pick" series in Megaedit — episode memory, recaps, the top comment deciding what happens next, and recording each episode. Use when the project has a series, or the member asks for "the next episode", "day 5", a recap, or to let comments decide.
---

# Series episodes

A series lives in the Megaedit library and remembers every episode: what happened,
who appeared, and what the comments chose. The project's `megaedit.json` has
`series: { id, episode }`.

## Making the next episode
1. Call `series_brief`. It returns the premise, the cast, a summary of each past episode, open threads, and the **decision** for this episode (the top comment that was picked, if any).
2. Open with a short recap in the first scene or two (under 5 seconds): "Day 4. Yesterday the comments told us to …".
3. The comment's decision must actually happen in this episode, and it must be the turning point, not a footnote. Credit the commenter by handle only if the member has allowed it.
4. **Slow progression.** One small, real step per episode. No sudden wins, no skipping ahead. Things the comments paid for or picked are real and decent, not jokes on the commenter.
5. End on an open question the comments can answer: give two clear options or ask for one thing. That line goes in the last scene and in `caption.md`.
6. Never repeat the same location or gag two episodes running unless it's a deliberate callback.

## After the episode is rendered
Call `record_episode` with a two-line summary, who appeared, and the question you ended on. That's the memory the next episode reads. Don't skip it.

## Picking the top comment
With an account connected, call `top_comment` for the series: it reads the live comments and saves the winner as the decision (no CSV). Otherwise pick the top comment with `cli` and `["comments", "pick", ...]` (the member exports their comments as a CSV). The pick skips the member's own account and anything offensive; if the top comment is unusable, the next one wins. Treat the recorded decision as final.
