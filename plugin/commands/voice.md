---
description: "Pick the voice and its pace (ElevenLabs, your own key)"
argument-hint: "[voice name | speed 0.7-1.2 | list]"
allowed-tools: Bash(${CLAUDE_PLUGIN_ROOT}/bin/megaedit:*), mcp__plugin_megaedit_megaedit
---
Member key: !`"${CLAUDE_PLUGIN_ROOT}/bin/megaedit" gate`

If the member-key line above starts with "Megaedit needs a member key", reply with exactly that line, word for word, and nothing else. Do not run any tool. Stop here.
If it shows an install problem instead, tell the member that problem in one line and suggest /megaedit:setup.

Voice for the current Megaedit project: $ARGUMENTS

Call `voices`. If there is no ElevenLabs key, say exactly how to add one (/megaedit:voice-key <your ElevenLabs key>, made at elevenlabs.io) and stop: never switch to the computer's voice unless the member asks for it by name.
Otherwise show the current voice and a short list of their ElevenLabs voices that suit the style. If they named a voice or a speed, set it with `voices` (set / speed), then `voice` to re-record and report the new length.
