# Asset checklist

Everything the site needs, with the filename to save it under. All screenshots go in
`public/screenshots/`. The site currently runs on placeholders — it is live-able as-is, but every
placeholder is an old build.

**Shoot everything at 2× / HiDPI, PNG** — except the two Steam Deck captures and the photograph,
which are JPEGs (see those sections). Keep the extension truthful to the actual file.
For console shots: browser at **~1600 px wide**.

**Blanking the nav's password field (optional).** There is no logout, and clearing `sl_password`
from localStorage is the wrong move — `/api/overview` is admin-gated, so you would get a clean nav
above a completely empty console. Instead: **click into the password box, select all, delete, and
do not press Enter or click Connect.** The input is controlled React state that is only read from
storage at mount, and `persistPassword` runs solely in `handleConnect` — so the field renders empty
while the password that `authHeaders()` actually sends is untouched. Nothing persists.

Leaving the dots visible is also perfectly acceptable; it reads as a working admin console. Don't
let it hold up the shoot. **Cover art matters far more:** hit *Refresh art* on anything showing a
grey placeholder before shooting #1.

---

## The list

Priority: **P1** = the site looks dated without it · **P2** = a real gap in the story · **P3** = nice to have.

### Console — in a browser

| # | Filename | What's on screen | Pri |
|---|---|---|---|
| 1 | `console-games.png` | **Games view, one game selected.** The hero shot — the site leans on this harder than anything else. Wants **8–12 games with cover art** in the sidebar so the library looks lived-in. Sidebar scrolled to top. | P1 |
| 2 | `console-game-detail.png` | **Game detail**, scrolled so *Machines*, *Save paths per machine* and *Recent remote commands* are all in frame. Three machines, each with a real last-upload time. This is the "one console for the fleet" proof. | P1 |
| 3 | `console-conflict.png` | **A real conflict, mid-resolution.** Nothing we have shows this, and it backs the site's second-biggest claim. Force a divergence between two machines, then capture the resolution UI with both options visible. | P2 |
| 4 | `console-machines.png` | **Configuration → Machines.** Fleet health: online, offline and never-reported all in one frame if you can arrange it, with agent versions and last-seen times. | P2 |
| 5 | `console-enroll.png` | **Configuration → Enroll a machine**, the mint dialog with the machine-name field and the download button. Supports step 2 of the guide. | P3 |

### Windows agent

| # | Filename | What's on screen | Pri |
|---|---|---|---|
| 6 | `agent-win-add-games.png` | **Add Games with the v0.5.4 filter chips visible** — Suggested / All / Steam / Heroic / Needs path. A good spread of detected titles, some with resolved save paths, a few ticked. | P1 |
| 7 | `agent-win-overview.png` | **Overview with non-zero stats.** The current `overview.png` reads "1 game tracked, 0 saves backed up, — last sync", which looks like a dead product. Needs real numbers and a recent sync. | P2 |
| 8 | `agent-win-tray.png` | **Tray menu open**, at 2×. The existing one is 7 KB and unusable. | P3 |
| 9 | `installer-enroll.png` | **The installer's "Enroll this machine" page** — not the final wizard page. It should show the server URL and machine name it's about to join, with a current version in the title bar. | P3 |

### Steam Deck

| # | Filename | What's on screen | Pri |
|---|---|---|---|
| 10 | `deck-overview.jpg` | Game Mode **Overview**: stat tiles, tracked games list, "This device" panel. | P1 |
| 11 | `deck-add-game.jpg` | Game Mode **Add game**, with the gamepad button hints along the bottom edge in frame — those hints are the whole point of the shot. | P1 |

**JPEG is fine for these two, and Steam's capture only produces JPEG.** Do not convert them to PNG —
that bakes the existing artifacts into a larger file and gains nothing. Both land in a `FeatureRow`
visual column that renders ~640 px wide, so a 1280×800 source is downscaled 2×, which suppresses
JPEG ringing rather than exposing it.

If you want lossless later, `savelocker ui --screenshot` writes a PNG straight from the framebuffer:

```sh
savelocker ui --size 1280x800 --screen overview --screenshot ~/deck-overview.png
savelocker ui --size 1280x800 --screen add --autoscan --screenshot ~/deck-add-game.png
```

`--size 1280x800` makes the windowed Desktop Mode render pixel-identical to Game Mode, and
`--nav down,down` places the selection ring deliberately. **Unverified on current `main`** — under
WSLg an older build rendered fine but crashed on teardown (`You cannot call Reset inside of the
render loop`) and wrote no file. Not worth blocking the shoot on.

### The photograph

| # | Filename | Pri |
|---|---|---|
| 12 | `deck-in-hands.jpg` | P1 |

**Full brief below** — it's the highest-value image on this list and the only one that can't be
produced any other way.

---

## The Deck photo — brief

**Which screen: the Game Mode Overview** (`savelocker ui` → Overview). Not Add game.

The reason is legibility at thumbnail size. Overview leads with three big stat tiles — *Games
Tracked*, *Saves Backed Up*, *Last Sync* — and large numbers survive being shrunk into a feature row
or a Reddit preview. Add game is a list of small rows; it turns to mush.

**Before you shoot, get the state right.** This matters more than the photography:

- **Games Tracked:** 4 or more.
- **Saves Backed Up:** a healthy number — three figures reads as "this has been running a while".
- **Last Sync:** recent. "6h ago" is fine; a dash is not.
- **Status:** `CONNECTED`, green dot lit.
- The tracked-games list should show **real, recognisable titles** — it sells the product better
  than anything in the copy.

**Privacy note:** the Overview's "This device" panel shows your server address. A private LAN IP is
harmless to publish, but if you'd rather not have it in a marketing photo, point the agent at a
placeholder host for the shot.

**The photograph itself:**

- **Hands on the grips**, thumbs near the sticks, as though you're mid-session. Hands make it a real
  device rather than a product render — that's the entire reason to take a photo instead of using
  the clean PNG.
- **Slight angle**, maybe 15–20° off straight-on. Dead-on looks like a stock render; too oblique and
  the screen becomes unreadable.
- **Screen is the brightest thing in frame.** Turn the Deck's brightness up, keep the room dim-ish.
  The site is a dark page and a dark photo with a glowing screen will sit on it beautifully.
- **Soft window light from the side**, no flash, no overhead ceiling light — both blow out the
  glossy screen.
- **Dark, plain, uncluttered background.** A dark sofa, a desk, a wall. Nothing with branding.
- **Landscape**, and leave room around the device so it can be cropped to different aspect ratios.
- **Shoot a dozen.** Vary the angle and hand position. Screen glare is the thing that kills these
  and you won't spot it until you're looking at them large.
- Wipe the screen first. Fingerprints are invisible to you and enormous in a photo.

It goes at the top of the "Built for the couch" row, replacing `deck-add-game.png` there — that
screenshot then moves down or into a secondary slot.

---

## Once you've shot them

Drop the files into `public/screenshots/` under exactly these names and I'll rewire the components
in one pass. The old files can then be deleted:

`dashboard.png` · `addGames.png` · `overview.png` · `installer.png` · `health.png` · `tray.png` ·
`enrollment.png` · `steam-agent1.jpeg` · `steam-agent2.jpeg`

---

## Generated art

Only two things should ever be image-generated, and neither contains text or UI:

- **OG card** — already done in code (`scripts/make-og.mjs`), which beats generating it: exact,
  reproducible, and it re-renders when the tagline changes.
- **Optional hero background texture** — abstract, very dark, palette-only. The site works fine
  without one; only add it if it stays subtle enough to read text over.

**Never generate:** anything with a device in it, anything with words in it, any UI. It will produce
almost-right buttons and misspelled labels, and it cannot draw the actual product. The diagram, the
browser frame and every icon are hand-built SVG for exactly this reason.

Retire `packaging/linux/artwork/hero.png` for site use — the AI circuit-board background is fine as
a Steam library capsule but reads as generic on a landing page.

---

## Rights notes

- The cover art in the console screenshots is third-party key art. Incidental in a screenshot of
  your own product is normal and fine. **Don't build the OG card or any hero graphic around someone
  else's artwork.**
- No Valve logos, no official-looking Steam Deck hardware renders, nothing that implies endorsement.
  The footer disclaimer covers descriptive use; imagery shouldn't undercut it.
