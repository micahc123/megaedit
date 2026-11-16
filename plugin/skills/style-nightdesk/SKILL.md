---
user-invocable: false
name: megaedit-nightdesk
description: Write a Megaedit script.json in the Night Desk style. A maker and a tiny AI sidekick talk at a desk at night in chibi close-ups, with a dusk city behind them in bokeh and a phrase-card caption at the top. The sidekick takes a normal request too literally, a tool shows up ("I know a tool for that"), and the sidekick gets far too human about it. The tool beat is a SPONSOR SLOT that a member fills with their own brand deal. Use it for AI and builder comedy skits, app and tool features, and brand deals woven into a story.
---

# Night desk

Two characters at one desk at night, with one spoken line per scene. **cast[0] is the maker** (a human, seen as a chibi bust), and **cast[1] is the sidekick** (a small desk AI). The camera cuts to whoever speaks:
- the maker's close-up has the window blurred to bokeh behind her;
- the sidekick's close-up sits low on the desk, with the maker as a soft blur behind it.

Dialogue only. There is no narrator, no music, and no on-screen title. The whole joke is the back-and-forth.

## Cast
Exactly two characters in `megaedit.json`. Give each their own voice (`voiceId`, or a file per scene).

**Maker** (cast[0]):
- `skin` and `hair.color`
- `outfit.top`, the hoodie
- `outfit.bottom`, the tee at the neck
- `accessory: "glasses"` for the chunky glasses

**Sidekick** (cast[1]):
- `outfit.top` is its body colour. Keep it soft (mint, lilac, peach) and never neon.
- Its eyes glow on a dark visor and carry every mood. It has no mouth.
- Its antenna bulb uses the project accent and glows while it talks.

Name them like people ("Juno", "Pip"). The maker says the sidekick's name in the hook.

## Shots (`visual.extra.shot`)
Default: a close-up on whoever speaks.
- `host`: maker close-up. Add `phone: true` to have her hold up her phone.
- `ai`: sidekick close-up.
- `two`: both at the desk, with the monitor, mug, notebook and keyboard. Use it for the turn ("I know a tool for that.") and at most once more.
- `screen`: the monitor fills the frame. It shows `extra.screen` (`title` plus up to 4 `lines`, such as a chat, an error or an app) and the sidekick peeks in from the corner.

## Camera (`extra.move`)
Options: `hold`, `push-in`, `pull-out`, `tilt`.
- Default: a rotation that matches the reference: about 1/3 of shots move, and most of those pull out.
- Never shake, flash or whip. Cuts are plain cuts.

## Faces (`extra.faces`, `extra.swap`)
- Faces for both characters: neutral, smile, deadpan, shock, smug, worry, sulk, hearts, sleepy.
- `swap: { ref, to, on }` changes a face on a spoken word. Use one per beat at most. The sidekick's swaps carry the comedy (deadpan → smug, shock → hearts).

## THE SPONSOR SLOT (`extra.sponsor`)
This is the money beat. Put it on the line where the maker names the tool:

```json
{ "id": "s08", "speaker": "juno", "hold": 1.1,
  "text": "It's called Nudgebird. You tell your AI, it pings your phone.",
  "visual": { "layout": "reveal", "setting": "dusk",
    "extra": { "sponsor": { "brand": "Nudgebird", "line": "Your AI writes the reminder. Your phone rings it.",
      "steps": ["Tell your AI what to remember", "It lands on your lock screen", "It nudges you right on time"],
      "code": "NIGHTDESK", "paid": true, "color": "#5f86c9" },
      "swap": { "ref": "pip", "to": "hearts", "on": "phone" } } } }
```

- **What appears on screen:** the monitor fills the frame. A card slides up with the logo mark (`mark`, or the first letter), the brand and the one-liner. The `steps` tick in one by one, then the `code` appears.
- **Disclosure:** `paid` (default `true`) draws a **"Paid partnership"** chip. That chip is required for any paid or gifted deal. Also turn on Instagram's Paid-partnership label and put `#ad` in the caption. For a tool you're not paid for, set `paid: false` and write "not sponsored" in the caption.
- **Rules:**
  - Say the brand out loud in the line, so the card lands on the word.
  - Use one sponsor slot per video.
  - Give it `hold` 0.8–1.2 so the steps can be read.
- **Where it goes:** about 45–60 % through. The problem has to be funny first, and the product is the fix.
- **After it:** the sidekick's next 2–3 lines show the product *working* by making it very human about it (addicted, smug, organizing the maker's life). This is the ad. Never list features out loud after the card.

## Shape (aim for 12 to 16 beats, 35 to 50 s)
1. **Hook (maker):** "<Name>, <do a normal human thing>." No intro, and the first word comes inside 0.4 s.
2. **Sidekick:** a literal or too-honest answer. Deadpan.
3. **Maker:** a short correction (2–6 words).
4. **Sidekick:** a sharper version of the limit, with a swap to smug.
5. **Maker:** gives up, or tries a human workaround.
6. **Sidekick:** a callback that roasts the maker gently, using a specific detail ("your laundry. On Tuesday.").
7. **Maker, `two`:** "Okay. I know a tool for that."
8. **SPONSOR SLOT:** the maker names the tool and says in one breath what it does.
9. **Sidekick:** realizes what this unlocks (shock → hearts).
10–11. **Sidekick:** takes it too far. The product works too well.
12. **Maker:** a dry reaction ("<Name>, it's been ten minutes.").
13. **Sidekick:** a one-liner in its new identity.
14. **Button:** a callback to the hook, 3–8 words. End on the sidekick's face holding (`hold` 0.4–0.6).

No sponsor this week? Make beat 8 a free tool (`paid: false`), a feature of the member's own product, or cut it and let beats 7–9 turn on a human trick instead.

## Pacing
- **Delivery:** about 2.2–2.5 words per second, which is slow, deadpan and conversational.
- **Lines:** 2 to 12 words.
- **Pauses:** between lines short (the voice files carry about 0.1 s), with no gaps longer than half a second except after the button.

## Captions
Use `nightdesk` (the default): a white sentence on one dark plum card at the top of the frame, one line or two, no karaoke and no word pop. The card always sits above the faces.

## Post caption (not in the video)
```
<one-line what happened>.
<the twist, lowercase>.

made with <Brand> (@brand): <what it does in one line>. code <CODE>. #ad
comment LINK and we'll send you every tool from our videos.

#aitools #techhumor + 3 niche tags (5 max)
```

## Do
- Make the sidekick wrong in a loveable way. Both characters are smart, and the joke is the literal-mindedness.
- Use specific, small, real details (the laundry, Tuesday, "text your mom back").
- Show the product changing the story. Don't explain it.

## Don't
- Use real AI brand mascots or names for the sidekick. It's your own character.
- Use income claims, unsourced stats, or "this tool will make you $X".
- Run a sponsor slot without a disclosure (`paid: false` only when it truly isn't paid).
- Add music, shake, flashes, or more than 5 hashtags.

See `example/` for the full episode with voices: "Pip can't remind me to drink water", with demo sponsor Nudgebird.
