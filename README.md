# AFT — Advanced Future Technology

**Official website:** https://24712.github.io/AFT/  
**Repository:** https://github.com/24712/AFT

AFT is a multidisciplinary technology initiative focused on engineering, electronics, digital manufacturing, robotics, energy systems and software development.

## Current website
The repository root is the GitHub Pages website. It uses semantic HTML, modular CSS and vanilla JavaScript.

Included features:
- Responsive layout for mobile, tablet and desktop.
- Arabic and English interface with RTL/LTR direction switching.
- Dark and light themes with system preference detection.
- Accessible navigation, reduced-motion support and keyboard skip link.
- Capability overview, engineering workflow, project archive placeholder and AFT Lab section.
- SEO metadata, Open Graph metadata and a custom 404 page.

## Run locally
Language files load through fetch, so use a local HTTP server instead of opening index.html directly.

Run: python -m http.server 8000  
Then open: http://localhost:8000

## Project structure
- index.html — website entry point
- 404.html — not-found page
- assets/css/main.css — design system and responsive styles
- assets/js/ — theme, language and interface behavior
- assets/i18n/ — Arabic and English dictionaries
- Logo/ — existing AFT brand assets
- basics/ and AFT_* — previous concepts retained during migration

## Engineering notes
- Contact actions currently link to GitHub. No fake form submission, account system, payment flow or database operation is presented as functional.
- Service areas describe AFT's technical direction; they are not a claim that every service is currently commercially available.
- Backend features should be introduced only with a real API, authentication, data storage, validation and deployment configuration.

## Status
The website is evolving. Add portfolio items only after their implementation and test evidence are documented.
