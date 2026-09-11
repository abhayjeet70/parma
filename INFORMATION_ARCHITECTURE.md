# Information architecture

```
/              Home (the story)
/about         Vision, experience, founder, facilities, team
/inn           Parma Inn: interiors intro, 4 rooms with galleries
/spa           Ayurveda intro, 6 categories as accordions
/healthcare    Integrative / concierge care, second opinions, physicians
/meditation    Sushila Shanti: yoga lineage and practices
/explore       Town of Washington, Luray, wineries, golf and equestrian, dining
/contact       Address, phone, email, inquiry form
*              404
```

## Navigation
- **Primary:** Sanctuary (/about) · Inn · Spa · Healthcare · Meditation · Explore, plus a Reserve button (/contact).
- **Footer:** all routes, contact details, and the independence disclaimer.

## Data files
Content lives in `site/src/data/content.ts`, kept out of the JSX: rooms, treatments, team, experiences and contact.

## Inquiry form
The source form never actually submitted anywhere. The new form stays inquiry-only with the same fields and composes a `mailto:` to info@parmainlittlewashington.com. It needs no backend and holds no secrets. It can be swapped for a form endpoint later.

## Rendering
- Every route is prerendered to static HTML at build time (`scripts/prerender.mjs`), so the first paint is real content with no blank screen.
- React then hydrates the page.
- All routes ship in one small bundle (~93 kB gzipped JS). Pages are mostly text, and images load per page.
- `dist/404.html` is prerendered for hosts that serve it on unknown URLs.
