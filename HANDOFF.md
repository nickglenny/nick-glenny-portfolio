# Portfolio site — working notes (as of 2026-08-28)

Live: https://main.d1n3tc2o4jtlqt.amplifyapp.com/ (AWS Amplify auto-deploys `main`, ~1-2 min).
Push: classic GitHub PAT is in the macOS keychain; `git push origin main` just works.
No Node/brew/gh on the Mac. Static ffmpeg is at `python3 -c "import imageio_ffmpeg; print(imageio_ffmpeg.get_ffmpeg_exe())"`.

## Stack
One `index.html`: inline React via Babel-standalone, no build step. Tokens ~line 389, custom
CSS block `#work-grid-css` before the babel script, data arrays (`WORK`, `SKILLS`, `FAQS`) and
components (`SkillNav`, `PhoneReel`, `MediaTile`, `PhotoVideo`, `SocialContent`, `BrandWeb`)
sit just above `function App()`.

Preview: `python3 -m http.server 8942` in the repo root. Playwright checks must use
`p.chromium.launch(channel='chrome')` (bundled Chromium has no H.264).

## Page structure
Hero (centered, Decalotype display font, Google Sans eyebrow, three-lane video `assets/hero-triptych.mp4`: Picklr pros / Carrie reformers / AudioToyz lot, right lane = audiotoyz-lot.mp4 overlaid at x=1280)
→ client logo strip (`LogoStrip`, assets/logos/, single-ink PNG/SVG; old Marquee kept) → Work intro + 3 skill cards → 01 Photo + Video (4 phone mockups w/ reels + photo grid)
→ 02 Social Content (graphics grid) → 03 Brand + Web (laptop before/after + SimpleShots deck iframe
`simpleshots-rebrand/index.html`) → marquee → FAQ (5) → About → Contact → footer.

## Media
`assets/work/` photos, graphics, reels (720p mp4 + poster jpg). `assets/fonts/` Decalotype.
Reels: picklr-coach-dylan, picklr-how-players-describe, picklr-fv-grand-opening (15s trim),
audiotoyz-lot (24s montage of 7 raw car clips, no audio; source ~/Desktop/AudioToyz + VNTR, C6230-C6241 are cars, C6242-45 are the VNTR gym).
Removed reel picklr-what-players-work-on is restorable from git history.
Sources: ~/Desktop/Agency/Clients/Picklr/01-footage.

## Removed / restorable
- Marketing Systems (Services) section: `archive/services-section.jsx` + tag `pre-remove-services-2026-08-26`.
- Pre-humanize copy: tag `pre-humanize-2026-08-26`.
- Old fictional PROJECTS + CaseStudyPanel code still in file, unused.

## Open items
- About section copy is mostly Nick's own; only lightly edited.
- SimpleShots deck page copy (`simpleshots-rebrand/`) not yet run through humanizer.
- Faces/minors in Picklr tiles are Nick's call; 85s FV event cut left out (52 MB).
- Voice sample for humanizer: ~/.claude/skills/humanizer/nick-voice-sample.md
