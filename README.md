# Riovic Matthew G. Susas — Portfolio

A static, responsive portfolio site. Plain HTML/CSS/JS — no build step, so it drops straight into GitHub Pages.

## Structure

```
index.html          → all page content (Home / Projects / About / Contact)
css/style.css        → design tokens, layout, responsive rules
js/main.js           → mobile menu, dark mode, active-nav highlighting,
                        the daily-drivers marquee, card tilt animation,
                        contact form handler
```

## Run it locally

No build tools needed. Either:
- Open `index.html` directly in a browser, or
- Serve it (recommended, avoids font/icon CORS quirks):
  ```bash
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo.
2. Repo → **Settings → Pages → Source** → select the branch (e.g. `main`) and `/ (root)`.
3. Your site will be live at `https://<username>.github.io/<repo>/`.

## What to customize before publishing

- **Social links** — `Facebook`, `LinkedIn`, `Discord`, `Upwork`, and `OnlineJobs.ph` are all placeholders (`href="#"`, labelled `TBA`) in both the sidebar and the Contact section of `index.html`. Swap in real URLs and remove the `<em>TBA</em>` tags once you have them.
- **Tool logos** — `js/main.js` (`initDriversMarquee`) renders each "daily driver" as a colored badge + Phosphor icon rather than an official brand logo, to avoid using trademarked artwork without a license. If you'd rather use real logos, drop SVGs in an `assets/logos/` folder and swap the `<i>` icon markup for an `<img>` tag per tool.
- **Projects, testimonials, "Latest" feed** — the copy in these sections (in `index.html`) is placeholder content written to match your tool stack (Shopify, Flow, Klaviyo, DSers, Gorgias, Slack). Replace with your real projects and client testimonials.
- **Profile photo** — the circular avatar currently shows initials ("RS"). Replace `.avatar` in `index.html` with an `<img>` once you have a headshot.
- **Contact form** — `js/main.js` (`initContactForm`) currently only shows a confirmation message; there's no backend. Wire the `<form>` in `index.html` to a service like Formspree, Getform, or your own endpoint to actually receive messages.

## Design notes

- **Palette**: navy `#060070` (primary/accent), stone `#C9C8BF` / `#BDBBB2` (neutrals), plus a light warm-grey background and white cards for contrast.
- **Type**: Poppins throughout, weight is doing the hierarchy work (300–800) rather than switching typefaces.
- **Icons**: Phosphor Icons via CDN (`regular` + `bold` weights).
- **Dark mode**: toggle in the sidebar footer, persisted via `localStorage`, also respects the OS preference on first load.
- **Card motion**: a lightweight vanilla-JS mousemove tilt (`initCardTilt` in `main.js`) — a CSS/JS equivalent of the animated 3D card effect, without pulling in React/Tailwind/framer-motion, since this is meant to run as a plain static site on GitHub Pages. Automatically disabled on touch devices and when the OS "reduce motion" setting is on.
- **Responsive**: single codebase, three breakpoints (desktop / tablet ≤1080px / mobile ≤780px). Below 780px the sidebar becomes a slide-in drawer behind a top bar.
