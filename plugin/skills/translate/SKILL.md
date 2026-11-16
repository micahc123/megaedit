---
user-invocable: false
name: translate
description: Translate a Megaedit video into another language — script, on-screen words, captions and voice — so it plays like it was made in that language. Use for "make a Spanish version", "translate to 5 languages", or when the app asks for a translation.
---

# Translating an episode

`cli` with `["translate", "<project>", "--to", "es"]` copies the project to `<slug>-es`,
sets the language, and links the two. You then translate inside the copy:

1. Translate every scene's `text`, `headline`, `subhead`, `items`, `choice`, `compare`, `quote`, `characters[].line`, plus `hook`, `cta` and `title`.
2. **Translate the meaning, not the words.** Rewrite jokes so they land in that language. Keep idioms natural. Keep the hook inside 3 seconds; some languages run longer, so trim rather than overflow.
3. Keep each scene's length close to the original. If a scene goes over 8 seconds of talking, cut words.
4. Headlines stay 7 words or fewer and must fit: German and Finnish words are long, so use shorter ones.
5. `emphasis` words must be words that appear in the translated text.
6. Product names and the member's keyword (e.g. "comment MEGA") stay as they are.
7. Numbers: write them the way that language says them; use that language's decimal style in headlines.
8. Translate `caption.md` too; hashtags can be local, still at most 5.
9. Voice with a multilingual voice (pick one if the member's voice isn't multilingual), then `check`.

Right-to-left languages (Arabic, Hebrew, Persian, Urdu) are handled by the engine; just write the text normally.
