# Vyson-Site-maintenance

# Maintenance page for the official site

# Vyson Technologies — Maintenance / Upgrade Page

A clean, premium, deployment-ready maintenance page built with:

- HTML5
- CSS3
- Vanilla JavaScript

## Included features

- Responsive hero layout
- Progress bar
- Live countdown
- Upgrade milestones
- Vyson Labs teaser
- CTA buttons
- Glassmorphism cards
- Animated gradient headline
- Subtle parallax
- Reveal-on-scroll animations
- SEO meta tags
- SVG favicon

## Project window

- Upgrade starts: **10th August 2026**
- Estimated completion: **10th September 2026**

## Run locally

Open `index.html` in any browser, or serve the folder with a static server.

Example:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

This folder can be deployed directly to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Customization

Edit these files for quick changes:

- `index.html` for content
- `css/styles.css` for styling
- `js/app.js` for the countdown and live status

## Contact

Update the email and website links in `index.html` to match your live support channels.

### SSH Keys Configuration cmds (bash)

ssh-keygen -t ed25519 -C "your_email@example.com"
git config --global gpg.format ssh
git config --global user.signingkey "~/.ssh/id_ed25519.pub"
git config --global commit.gpgsign true

git config --global gpg.ssh.program "C:/Program Files/OpenSSH/ssh-keygen.exe"
