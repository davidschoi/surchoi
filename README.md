# DAVID & JEAN Wedding Website

A single-page wedding site built with plain HTML, CSS, and JavaScript. No framework, no build step.

## What's in here

| Path | What it is |
| --- | --- |
| `index.html` | The whole page — header, story, travel, gifts, RSVP, footer, and the photo/video modal |
| `css/style.css` | Custom styles |
| `app.js` | jQuery behavior: full-viewport header, smooth scrolling, scrollspy nav, collapsing mobile menu |
| `img/`, `video/` | Static assets |

Bootstrap 3.2, jQuery 3.1.1, and jQuery Easing load from CDNs; type comes from Google Fonts.

## Run it locally

Serve the repo root over HTTP:

```
git clone https://github.com/davidschoi/surchoi.git
cd surchoi
python3 -m http.server 8000
```

Then open http://localhost:8000.

Don't open `index.html` straight off disk — the vendor scripts use protocol-relative URLs
(`//cdnjs.cloudflare.com/...`), which resolve to `file://` and fail, so Bootstrap and jQuery
never load and the page renders unstyled and inert.

## Deploying

`main` is the primary branch. There is no build step or CI config — both hosts publish the
files as they are on `main`.

- **Production:** https://wedding.choifam.com, served by Vercel
- **GitHub Pages mirror:** https://davidschoi.github.io/surchoi/, built from `main` at the repo root
