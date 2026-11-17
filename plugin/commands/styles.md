---
description: "See every Megaedit style with its example cover"
argument-hint: "[style id to read about]"
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/bin/megaedit:*), mcp__plugin_megaedit_megaedit
---
Member key: !`"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" gate`

If the member-key line above starts with "Megaedit needs a member key", reply with exactly that line, word for word, and nothing else. Do not run any tool. Stop here.
If it shows an install problem instead, tell the member that problem in one line and suggest /megaedit:setup.

Styles. $ARGUMENTS

If a style id was given, call `style_guide` with it and sum up its look, pace and the layouts that work, in under 120 words.
Otherwise call `styles` and list them in its two groups, **Styles** first, then **Series** (roadto, team, dayn: casts you follow episode after episode): name, id, one line on its look, words per second. Offer to `open` an example cover. Custom styles (custom:<id>) go at the end under Your styles.
