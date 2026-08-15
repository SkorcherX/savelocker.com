# savelocker.com — copy deck

Draft 1, 2026-08-14. **This file is for red-penning, not for shipping.** Once it's approved the
words get poured into Astro components and this file stays as the source of record for the wording.

Review it like an editor: strike anything that sounds like a press release, and challenge any claim
you don't think we can back. Claims I couldn't verify from the repo are flagged **[CHECK]** and are
not to go live as written.

---

## Voice rules

Five rules, all of them load-bearing.

1. **Never the words "open source."** The licence is PolyForm Noncommercial 1.0.0 — source-available,
   not OSI. The GitHub button says **Source on GitHub**. Approved phrasings: *free for personal use*,
   *source available*, *self-hosted*, *no account, no subscription, no telemetry*.
2. **No numbers we haven't counted.** No "thousands of games", no percentages, no user counts.
3. **Say what it doesn't do**, on the page, in our own words — before a commenter says it for us.
   The SmartScreen warning, no macOS, no emulator saves. Every one of these is in the FAQ.
4. **Second person, present tense, short sentences.** "You beat the boss." Not "users are able to."
5. **No implied Valve endorsement.** "Steam Deck" is descriptive use only. No Valve logos, no
   official-looking hardware art.

---

# Page 1 — Home (`/`)

## 1. Hero

> # No Cloud Sync? No Problem.
>
> Stop manually transferring files for older titles, indie gems, and non-Steam games. SaveLocker
> effortlessly brings modern cross-progression to your PC and Steam Deck, all entirely self-hosted.
>
> **[ Get started ]**  **[ Source on GitHub ]**
>
> _Free for personal use · Windows and Steam Deck · No account, ever_

*Visual: console Games view in a CSS browser frame, bleeding off the bottom of the section.*

*Optional tighter tagline if you want one — your call, the original is fine as written:*
*"Stop hand-copying save files for older titles, indie gems, and non-Steam games. SaveLocker gives
your PC and Steam Deck real cross-progression, on your own hardware."*

## 2. The problem

> ### You already know the feeling.
>
> You beat the boss on the Deck. You sit down at the PC. The game loads you in three hours ago.
>
> Steam Cloud only covers games whose publisher switched it on. Older titles, indie games, anything
> you bought on GOG or Epic, anything you added to Steam yourself — you're on your own. So you copy
> a folder to a USB stick, or you just play the game on one machine and stop pretending.

*Visual: none, or a very small "before" sketch. Let the words carry it.*

## 3. How it works

> ### Three steps, then you forget it exists.
>
> **1 — Run the locker.**
> One container on whatever's always on: a NAS, an unRAID box, a mini PC. It holds your saves and
> nothing else. There's no service to sign up for and no data leaving your house.
>
> **2 — Join your machines.**
> The console hands you a file. You open it on your PC and your Deck. That's the whole enrollment —
> there's no key to copy, nothing to paste, and the file stops working after fifteen minutes.
>
> **3 — Play.**
> SaveLocker pulls your latest save before the game launches and pushes it back after you quit. You
> don't press anything.

*Visual: one hand-built SVG — PC and Deck either side, locker in the middle, arrows labelled "pull
before launch" and "push after you quit". Palette colours only.*

## 4. Feature grid

*Eight tiles. Headline is a benefit; body is one sentence. Lucide icons, matching the console.*

> **It finds your games for you**
> Scans your Steam library, your non-Steam shortcuts and your Heroic games, then looks up where each
> one keeps its saves. Most of the time you just tick a box.
>
> **Nothing gets overwritten by accident**
> While a game is running on one machine, the others know about it. If two machines change the same
> save anyway, SaveLocker flags it and asks you — it never silently picks a winner.
>
> **Rewind to any earlier save**
> Every sync is kept as its own version. Corrupted your file, or made a choice you regret? Roll back
> to any point in the history from the console.
>
> **Built for the couch**
> The Deck agent has a full gamepad-driven interface that works in Game Mode. Add a game and check
> your sync status without ever reaching for a keyboard.
>
> **Keeps working when the server doesn't**
> Take the Deck out of the house and it keeps playing. Saves queue up on the device and sync
> themselves the moment you're home.
>
> **Self-hosted, not home-only**
> Put Tailscale, WireGuard or any tunnel between your Deck and your locker and it syncs from
> anywhere — a hotel, a train, your parents' house. Your saves travel through your own tunnel, not
> through anybody's relay.
>
> **One file to add a machine**
> Enrollment is a single-use file that expires in about fifteen minutes. No API key is ever copied by
> hand, on any platform.
>
> **Stays out of the way**
> A tray icon on Windows, a background service on the Deck. It waits for the game to finish writing
> before it touches anything, and it tells you when something's wrong instead of failing quietly.
>
> **It's yours**
> Your saves sit on your hardware, in plain zip files, under your own admin password. No account, no
> subscription, no telemetry, nothing phoning home.

## 5. Screenshots

> ### Have a look.

*Tabbed: **Console** / **Windows** / **Steam Deck**. Three or four shots each, captions below.*

Captions:
- Console → *"Every game, every machine, every version — in one place."*
- Console → *"When two machines disagree, you decide which one wins."*
- Windows → *"The tray app. Tick the games you want; it works out the rest."*
- Steam Deck → *"The Deck interface is built for a gamepad, not a mouse."*
- Steam Deck → *"Adding a game in Game Mode, without leaving the couch."*

## 6. Is this for you?

*The honesty section. It converts better than any feature tile, and it filters out the people who'd
open a disappointed issue on day one.*

> ### Is this for you?
>
> **You'll get on with SaveLocker if** you've already got something running at home that can host a
> Docker container — a NAS, an unRAID server, a spare mini PC — and you play the same games on more
> than one machine.
>
> **You won't** if you want something that just works with nothing of your own to run. SaveLocker is
> self-hosted by design — that's the point of it, and it's the price of it. If you'd rather not host
> anything, [OpenSave](https://www.opensave.org/) does peer-to-peer save sync and does it well.
>
> **Away from home is fine.** Self-hosted doesn't mean home-only: put Tailscale or any tunnel
> between your machines and your locker follows you.
>
> **Right now it runs on Windows and on Linux, including the Steam Deck.** There's no macOS agent
> yet, and emulator saves aren't supported yet either.

## 7. How it compares

> ### How it compares
>
> | | Steam Cloud | Syncthing | Ludusavi | OpenSave | SaveLocker |
> |---|---|---|---|---|---|
> | Works with games that have no cloud save | ✗ | ✓ | ✓ | ✓ | ✓ |
> | Runs without a server of your own | ✓ | ✓ | ✓ | ✓ | ✗ |
> | Pulls the newest save **before** the game starts | ✓ | ✗ | ✗ | Deck only, via plugin | ✓ |
> | Warns you before two machines clash | ✓ | ✗ | ✗ | ✗ | ✓ |
> | Version history you can roll back | ✗ | partly | ✓ | ✓ | ✓ |
> | One console for every machine you own | ✗ | partly | ✗ | ✗ | ✓ |
> | Push, pull or re-scan another machine remotely | ✗ | ✗ | ✗ | ✗ | ✓ |
> | Emulator saves | ✗ | ✓ | partly | ✓ | not yet |
> | Saves never pass through anyone else's machine | ✗ | ✓ | ✓ | on a LAN | ✓ |
>
> **OpenSave** is the closest thing to SaveLocker and it's good — free, MIT-licensed, peer-to-peer,
> and it handles emulators, which we don't yet. If you want save sync with nothing to host, install
> it instead; you'll be happy. SaveLocker is a different shape on purpose. It puts a server you own
> at the centre and gives you a console over the top of it: every machine's health in one page, a
> version history you can browse, an audit log, and the ability to tell your Deck to pull a save
> while you're sat at your desktop. That's worth having if you already run a home server and think
> of your machines as a fleet. If you don't, it's overhead.
>
> **Ludusavi** is a genuinely excellent backup tool, and SaveLocker leans on its community save-path
> manifest to find your games — we owe it. The difference is what happens next: Ludusavi backs your
> saves up, and you decide when and where to restore them. SaveLocker moves them between machines on
> its own and arbitrates when two of them disagree.
>
> **Syncthing** will sync any folder you point it at, but it doesn't know what a game is. It can't
> wait for a save to finish being written, it can't stop the Deck pulling a file mid-write, and when
> two copies diverge you get a conflict file rather than a decision.

*The "before the game starts" row was **checked and corrected on 2026-08-14**. It first read ✗ for
OpenSave, which was wrong: their Decky plugin does sync when a game starts and exits. But their
README confirms the plugin is **SteamOS-only and an optional separate install** (on top of Decky
Loader itself), and that the desktop app and CLI have **no launch hook at all** — filesystem
watching is the only trigger on Windows and desktop Linux. Hence "Deck only, via plugin". A ✓ would
be as misleading as the ✗ was.*

*The Syncthing and Ludusavi rows are read off their published documentation rather than tested.
**Maintainer decision, 2026-08-14: accepted as-is** — the documentation is trusted for these two.
Both are "partly" wherever the honest answer is nuanced (Syncthing does have file versioning and a
per-device web GUI; Ludusavi does keep multiple backups), so neither row overstates our position.
If either turns out wrong, correct it rather than defend it — that is what happened with the
OpenSave row above, and correcting it cost nothing.*

*Note the two rows we deliberately lose — "runs without a server of your own" and "emulator saves".
Leaving those out would be more flattering and much less credible, and the second someone spots an
omission the whole table stops counting. See the strategy note at the bottom of this file.*

## 8. Closing CTA

> ### Fifteen minutes to your first sync.
>
> One container, one file per machine, and you're done.
>
> **[ Get started ]**  **[ Source on GitHub ]**

---

# Page 2 — Get started (`/start`)

> # Get started
>
> Three steps. The first one is the only one that takes any thought.

## Step 1 — Run the locker

> ### 1. Run the locker
>
> SaveLocker's server is a single container. Put it on whatever's always on at home — a NAS, an
> unRAID box, a Raspberry Pi, a spare machine in a cupboard. It needs one folder to keep your saves
> in.
>
> ```yaml
> services:
>   savelocker:
>     image: ghcr.io/skorcherx/savelocker:latest
>     container_name: savelocker-server
>     ports:
>       - "5080:8080"
>     volumes:
>       - ./savelocker-data:/data
>     restart: unless-stopped
> ```
>
> ```sh
> docker compose up -d
> ```
>
> Open `http://<your-server-ip>:5080`. That's the console, and it's where everything else happens.
>
> **Set an admin password now.** Configuration → it's the first card. Until you do, anyone on your
> network can open it.
>
> *unRAID users: there's a template in the repo, and `/mnt/user/appdata/savelocker` is the volume
> path you want.*

## Step 2 — Join your machines

> ### 2. Join your machines
>
> In the console: **Configuration → Enroll a machine**. Name the machine if you like, then download
> the file it gives you and get it onto the machine you're joining.
>
> The file works exactly once and expires in about fifteen minutes. If it expires, make another —
> they're free.

*Then the platform tabs. Both tabs live under step 2 and continue into step 3.*

### Tab: Windows

> Download the installer from [Releases](https://github.com/SkorcherX/SaveLocker/releases) and run
> it. On the **Enroll this machine** page, point it at the file you just downloaded — it'll show you
> which server and which machine name it's about to join. The machine shows up in your console
> before the installer has finished closing.
>
> **Windows will warn you about the installer.** It isn't code-signed yet, so SmartScreen throws up a
> blue box. Click **More info → Run anyway**. Signing is on the roadmap.

### Tab: Steam Deck

> Do this bit in Desktop Mode.
>
> ```sh
> tar -xzf savelocker-x.x.x-linux-x64.tar.gz
> ./SaveLocker/install.sh
> savelocker enroll --file ~/Downloads/policy.json
> ```
>
> It installs to your home folder, never to the system — a SteamOS update wipes the system partition
> and would take SaveLocker with it.
>
> If anything looks off, at any point, ever:
>
> ```sh
> savelocker doctor
> ```
>
> That's the command to remember. It checks the whole chain and tells you which link is broken.

## Step 3 — Add your games

> ### 3. Add your games
>
> Open the SaveLocker window — the tray icon on Windows, or SaveLocker from your apps list on the
> Deck — and go to **Add game**. It scans and shows you what it found: your Steam library, anything
> you've added to Steam yourself, and your Heroic games. Tick the ones you want and hit Enroll.
>
> Most games already have their save folder filled in. For the ones that don't, point it at the
> folder yourself, once.

> #### On the Deck, there's one more step per game
>
> Steam has to tell SaveLocker when a game starts and stops. In Steam, right-click the game →
> **Properties → Launch Options**, and paste this in:
>
> ```
> savelocker run -- %command%
> ```
>
> **This is the step people miss.** Without it the game still runs, and SaveLocker just never hears
> about it — so nothing syncs. Once per game, then you're done with it forever.

## Close

> ### That's it
>
> Play something. Quit. Check the console — your save is there, with a timestamp and a size.
>
> Then go do the same on your other machine, and stop thinking about it.
>
> Something not working? `savelocker doctor` on the Deck, and the **Help** tab in the console
> covers the rest. If you're stuck, [open an issue](https://github.com/SkorcherX/SaveLocker/issues).

*Once the interactive console walkthrough ships (Backlog, medium priority), this closing section
becomes "open the console and it'll take you the rest of the way" and gets a lot shorter.*

---

# Page 3 — FAQ (`/faq`)

> # Questions

**Do I need my own server?**
> Yes. That's the trade: nothing is stored by anyone else, so something of yours has to hold it.
> Anything that runs Docker will do — a NAS, an unRAID box, a mini PC, a Pi. It doesn't need to be
> fast; it needs to be on.

**Does it work outside my house?**
> Yes. Install [Tailscale](https://tailscale.com/) on your locker and on your machines — it's free
> for personal use and takes about five minutes — and your Deck syncs from anywhere in the world as
> though it were sat on your sofa. WireGuard, Netbird, ZeroTier or a Cloudflare Tunnel all work the
> same way. Point the agent at the tunnel address and there's nothing else to configure.
>
> Nothing needs opening up on your router either way: the agents only ever make outgoing
> connections, so there's no port forward and no inbound hole in your firewall.
>
> And if you're somewhere with no connection at all, the Deck just keeps playing. Saves queue up on
> the device and sync themselves the moment you're back in reach.

**So my saves never touch anyone else's server?**
> Correct, and this is the part worth understanding. There's no relay in the middle and no service
> brokering your connection — your agents talk to your locker and to nothing else. Over a tunnel
> like Tailscale, that traffic is encrypted end to end between your own devices, and there is no
> third party anywhere in the path who could read a save even if they wanted to.

**Does it only work with Steam games?**
> No. It reads your Steam library, but it also picks up non-Steam games you've added to Steam, and
> games staged in Heroic Games Launcher — Epic, GOG, Amazon and sideloaded titles. Anything else,
> you can point it at the save folder by hand.

**What about emulator saves?**
> Not yet. RetroArch, Dolphin, PCSX2 and the rest keep saves in their own layouts that nothing in
> the automatic detection understands today. It's on the list.

**Is there a macOS version?**
> Not yet. Windows and Linux, including the Steam Deck.

**What happens if I play the same game on two machines at once?**
> While a game is running, that machine holds it — the others get told before they can stomp on it.
> If two machines change the same save anyway (you were offline, say), SaveLocker notices that the
> saves have diverged, flags it as a conflict, and hands you both options in the console. It won't
> pick for you, and it won't quietly throw one away.

**Can I get an old save back?**
> Yes. Every sync is kept as a version — ten per game by default, and you can change that. Roll back
> to any of them from the console.

**Is it safe? What are my saves stored as?**
> Ordinary zip files on your own disk, in a folder you chose. Nothing proprietary — if you ever bin
> SaveLocker, your saves are still sitting right there. The console is behind an admin password, the
> agents authenticate with a per-machine key you never see, and the server takes a backup of its
> database nightly.

**Is it free? What's the catch?**
> It's free for personal use and the source is on GitHub. It's licensed under PolyForm
> Noncommercial, which means you can use it, read it and modify it for yourself — you just can't
> sell it or build a commercial product on it. There's no paid tier, no account and no telemetry.

**Why does Windows warn me about the installer?**
> Because it isn't code-signed yet — a certificate costs money and we haven't bought one. SmartScreen
> throws that warning at every unsigned installer regardless of what's in it. **More info → Run
> anyway**. If you'd rather not, you can build it yourself from source.

**Is this an official Valve or Steam thing?**
> No. It's an independent project with no connection to Valve.

**Something's broken.**
> On the Deck, run `savelocker doctor` — it diagnoses the whole chain and names the broken link. In
> the console, the **Help** tab has the reference material and the machine health page will show you
> which agent has stopped reporting. Beyond that,
> [open an issue](https://github.com/SkorcherX/SaveLocker/issues).

---

# Microcopy

**Nav:** SaveLocker (logo) · How it works · Features · Get started · FAQ · Source on GitHub

**Footer:**
> SaveLocker — self-hosted game save sync for PC and Steam Deck.
> Source on GitHub · Licensed under PolyForm Noncommercial 1.0.0 · Releases
> Not affiliated with Valve Corporation. Steam and Steam Deck are trademarks of Valve Corporation.
> Save path detection uses the [Ludusavi manifest](https://github.com/mtkennerly/ludusavi-manifest).
> Cover art from [SteamGridDB](https://www.steamgriddb.com/).

**Buttons, used consistently everywhere:** `Get started` · `Source on GitHub` · `Download for
Windows` · `Download for Steam Deck`

**Page titles and meta descriptions**

| Page | `<title>` | Description |
|---|---|---|
| `/` | SaveLocker — Self-hosted game save sync for PC and Steam Deck | Sync game saves between your PC and Steam Deck, even for games with no cloud save. Self-hosted, free for personal use, no account. |
| `/start` | Get started — SaveLocker | Run one container, join your machines with a single file, add your games. Set up SaveLocker on Windows and Steam Deck in about fifteen minutes. |
| `/faq` | Questions — SaveLocker | Do you need your own server? Does it work with non-Steam games? What happens in a conflict? Answers about self-hosted save sync. |

**Social card (OG image, 1200×630):** logo, `No Cloud Sync? No Problem.`, and
`Self-hosted game save sync · PC ⇄ Steam Deck` underneath. Palette background, no screenshot — it
gets rendered at thumbnail size in Discord and a screenshot turns to mush.

---

# Strategy note — positioning against OpenSave

Added 2026-08-14 after reviewing [opensave.org](https://www.opensave.org/) and its README.

**Do not fight them on ease of setup or on game count. We lose both, and pretending otherwise is
the fastest way to get taken apart in a comment thread.** They need no server, they're MIT, they
index against PCGamingWiki, they do block-level delta sync, they support nine emulators, they ship
a Flatpak and a Decky plugin, and they self-update on every platform. All of that is true and some
of it is in our backlog.

**Fight on shape instead.** OpenSave is a mesh of peers. SaveLocker is a home server with a control
plane over it. Everything we have that they don't comes from that one decision:

- the launch wrapper that pulls **before** the game reads the save, rather than syncing after a file
  change is noticed. **State this carefully** — OpenSave's Decky plugin does the same thing on a
  Deck. The defensible version is that ours works on Windows as well as the Deck, is part of the
  agent, and needs no Decky Loader and no second install. Do not claim they cannot do it;
- the lease — one machine holds a game while it's running and the others are told, so the clash is
  prevented rather than resolved afterwards;
- a console: fleet health, audit log, browsable version history, and remote push/pull/scan against
  any machine from a browser;
- no relay anywhere in the path, on a LAN or across the internet.

That last one is worth stating plainly but **never snidely** — OpenSave documents its own relay
limitation honestly and self-hosting their relay closes it. We say what our path is; we don't
characterise theirs.

**Our user is the person who already runs unRAID, Synology or Proxmox** and thinks of their machines
as infrastructure. That's a narrower audience than OpenSave's, and it's the one that will actually
deploy this and stick with it. The copy should sound like it was written for that person, and the
site should look like an admin console, because theirs looks like a game launcher.

**Reframe the weakness honestly:** the fact is "you need a server." The frame is "you own the
server." Same sentence, and it happens to be the true one.

# Open items

1. **[CHECK] the comparison table** — the Syncthing and Ludusavi rows need verifying against current
   behaviour before launch.
2. **No stats anywhere.** If you want "works with N,000 games" in the hero, we need to count the
   manifest entries our resolver actually handles and cite the number honestly. The detection suite
   can produce that figure — it's the sweep number — but 90.9% of a 300-game sample is not a
   sentence to put on a landing page without care.
3. **Version and download links** should come from the GitHub Releases API at build time, so the site
   can't advertise a stale version.
4. **Screenshot captions** assume the shots on the capture list. They'll need adjusting to whatever
   you actually get.
