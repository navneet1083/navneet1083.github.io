# Navneet Singh — Portfolio Website

Modern, lightweight portfolio built with pure HTML/CSS/JS. No frameworks, no build tools.

## Quick Start

```bash
cd portfolio-new
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

**Alternatives:**
- VS Code: Install "Live Server" extension, right-click `index.html` → "Open with Live Server"
- Node.js: `npx serve .`

## Deploy to GitHub Pages

Copy the contents of `portfolio-new/` to the root of your `navneet1083.github.io` repo and push.

## Adding a Blog Post

1. Copy `blog/template.html` to a new file (e.g., `blog/my-post.html`)
2. Update the title, date, category, and content
3. Add a card entry in `blog/index.html`
4. Push to GitHub — done!

## Architecture

```
css/
  variables.css    → Design tokens (colors, spacing, fonts)
  base.css         → Reset, typography, layout primitives
  components.css   → Reusable: glass cards, buttons, tags, timeline
  sections.css     → Section-specific layouts (hero, nav, footer)
  animations.css   → Keyframes, scroll animations, transitions
  responsive.css   → Mobile/tablet breakpoints

js/
  theme.js         → Theme configuration
  navigation.js    → Sticky nav, mobile menu, active section tracking
  animations.js    → Typewriter, particles, counters, filtering, tabs
  main.js          → App initialization

blog/
  index.html       → Blog listing with category filters
  template.html    → Copy-paste template for new posts
  *.html           → Individual blog posts
```

## Tech Stack

- Pure HTML5, CSS3, Vanilla JavaScript
- Google Fonts (Inter)
- Font Awesome 6.4 (icons)
- Prism.js (code syntax highlighting, blog pages only)
- Zero build dependencies
