# Third-party software and assets

The Megaedit engine (the release asset the plugin downloads on first run) ships or downloads the components below.
Their licences apply to them. Megaedit's own code and the synthesised library music are © Megamedia Labs.

## In the engine download

| Component | Licence | Notes |
|---|---|---|
| Node.js | MIT (plus the licences in `node/LICENSE`) | Runs the engine, so members don't need Node installed. |
| Remotion 4 (`remotion`, `@remotion/*`) | Remotion License | Free for individuals and companies of up to 3 people; larger companies need a Remotion company licence (remotion.dev/license). Members render on their own machines under Remotion's terms. |
| FFmpeg via `ffmpeg-static` 5.3.0 (release b6.1.1) | GPL-3.0 (static build) | Unmodified binary. Licence and build notes ship next to it (`ffmpeg.LICENSE`, `ffmpeg.README` in `cli/node_modules/ffmpeg-static/`). Source: https://ffmpeg.org/download.html; the macOS builds come from https://osxexperts.net/ (Apple silicon) and https://evermeet.cx/ffmpeg/ (Intel), as listed at https://github.com/eugeneware/ffmpeg-static/releases/tag/b6.1.1. |
| FFprobe via `@ffprobe-installer/ffprobe` | LGPL-2.1 | |
| React, React DOM, three.js, @react-three/fiber, @remotion/three, zod | MIT | |
| @huggingface/transformers, onnxruntime-node | Apache-2.0 / MIT | Local Whisper transcription for the QA transcript check. |
| Fonts: Archivo Black, Bricolage Grotesque, Caveat, Fraunces, Instrument Serif, Inter, JetBrains Mono, Lilita One, Plus Jakarta Sans, Press Start 2P, Unbounded | SIL Open Font License 1.1 | Each font's OFL text sits next to it in the engine bundle. |

## Downloaded on first use (not in the engine download)

- Remotion's Chrome Headless Shell (BSD-3 plus Chromium component licences), on the first render.
- Whisper model weights `onnx-community/whisper-*` (MIT, OpenAI Whisper), on the first QA.

## Audio

- **Music beds and the core SFX** in `library/music` and `library/sfx` are original, synthesised in code, licensed
  `megaedit-original`: members can use them in any video, commercial or not, without credit.
- **The 1,500-sound library** in `library/sounds` comes only from packs published as **CC0 / public domain**
  (Kenney, OpenGameArt authors). Pack, author, licence and source URL for every sound: `library/SOURCES.md` and
  `library/sounds/index.json`.
- No third-party or copyrighted music ships.

## Not bundled, used if present

- **Claude Code**: your own install and login. Megaedit never signs in to Claude for you.
- **ElevenLabs**: your own API key, called straight from your computer.
