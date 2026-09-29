# Riovic Matthew G. Susas — Portfolio

A personal portfolio website built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools — just open and ship.

## ✨ Features

- **Bento grid** home layout with animated tool conveyor belt
- **Left sidebar** with profile, social links, and navigation
- **Responsive** — Desktop & Mobile with slide-in hamburger menu
- **4 pages:** Home, Projects, About, Contact
- **Smooth page transitions** (single-page app feel, no reload)
- **Font:** [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts
- **Icons:** [Phosphor Icons](https://phosphoricons.com/)
- **Color Palette:** `#060070` · `#C9C8BF` · `#BDBBB2`

## 🛠 Daily Drivers (Tool Belt)

Shopify · Shopify Flow · Matrixify · Klaviyo · DSers · Slack · Gorgias · Claude

## 📁 Structure

```
portfolio/
└── index.html   ← Single file, everything included
```

## 🚀 Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your site will be live at `https://<username>.github.io/<repo-name>/`

## 🖼 Adding Your Profile Photo

Inside `index.html`, find the profile section and replace the placeholder icon with your image:

```html
<!-- Find this block: -->
<div class="profile-pic-placeholder">
  <i class="ph ph-user"></i>
</div>

<!-- Replace with: -->
<img src="photo.jpg" alt="Riovic Matthew G. Susas" />
```

Place your `photo.jpg` in the same folder as `index.html`.

## 🔗 Updating Social Links

Search for `href="#"` near the social icons in the sidebar and replace `#` with your actual URLs once available.

---

&copy; 2026 Riovic Matthew G. Susas
