# Asset inventory

All images were downloaded once from the source sites, then converted by `site/scripts/optimize_images.py`.

- **Output format:** WebP (quality 74) at widths 640 / 1280 / 1920, never upscaled.
- **Location:** `site/public/images/<category>/`.
- **Manifest:** dimensions are recorded in `site/src/data/images.json`. The `<Img>` component reads it to set width/height and srcset.
- **Total size:** 3.6 MB of WebP (the sources were ~15 MB of JPEG).

Sources: P = parma.avhita.com/images/, H = parmaheal.avhita.com/images/landing-page/

| Category | Asset(s) | Source | Original px | Usage |
|---|---|---|---|---|
| hero | hero13 (vineyard, autumn ridges) | P | 1536×1024 | Home hero (LCP) |
| hero | hero12, hero14, hero17 | P | 1536×1024 | Philosophy band, location, Explore hero, CTA |
| hero | hero18, hero19 (the house at dusk) | P | 1024×683 | About, Inn hero |
| hero | heal-slide-1…5 (landscapes) | H | 990×470 | Meditation, About, Explore |
| hero | vision | P | 780×436 | About |
| inn | parma-inn, tapestry1-2, red-room1-2, panther1-5, lounge1-4 | P | 780×436 | Inn page, home previews |
| spa | spa1, ayurveda-therapi-main, aqua-experiences, yoga, beauty-main | P | 780×436 / 290×451 | Spa categories |
| healthcare | health1, health2, health3 | P | 780×436 | Healthcare |
| team | nickey-singh, thara, prahbu, anne, kendra | P | 290×451 | Team |
| locations | wineries, golf, pubs | P | 290×451 | Explore |
| brand | metal_logo, new-logo, new-logo-white (PNG) | P | resized to ≤400px | Header, footer |
| — | favicon.png | P | 32×32 | Favicon |

## Notes
- **Duplicates collapsed:**
  - heat-therapy and traditional-therapy are byte-identical to aqua-experiences. One file serves the Heat, Traditional and Aqua categories.
  - things-to-do is identical to yoga.
- **Mismatched imagery:**
  - golf.jpg, wineries.jpg and pubs.jpg are chinoiserie wallpaper panels, not photographs of golf, wine or dining. They are used as decorative panels only, never captioned as the activity.
  - The source has no photograph of Luray Caverns, so none is shown.
- **Source resolution:** most images are 780px wide. The new site only uses them at sizes they support, and full-bleed treatment is reserved for the 1536px landscapes.
- **Not migrated:** audio/water.mp3.

## Licensed photographs added later (not Parma's own)

The source sites had no usable pictures of the local attractions, and three spa
categories shared one file. These gaps are filled with freely licensed photographs
from Wikimedia Commons, downloaded once and optimized into `public/images/stock/`
(WebP at 640 / 1280 / 1600). Nothing is hotlinked.

Full attribution is published on the site at `/credits`, and the raw data is in
`site/src/data/credits.json`.

| Asset | Subject | Author | Licence |
|---|---|---|---|
| town-washington | Washington, Virginia | Doug Kerr | CC BY-SA 2.0 |
| luray-caverns | Luray Caverns | Famartin | CC BY-SA 4.0 |
| vineyard-va | Virginia vineyard | Nyttend | Public domain |
| golf-course | Golf fairway | Chris Heaton | CC BY-SA 2.0 |
| equestrian | Riding in open country | ITookSomePhotos | CC BY-SA 4.0 |
| dining-table | Restaurant table setting | Krisztina.Konczos | CC BY-SA 2.0 |
| skyline-drive | Skyline Drive in autumn | Shenandoah National Park | Public domain |
| hammam-bath | Bath house interior | seier+seier | CC BY 2.0 |
| spa-pool | Indoor spa pool | Basile Morin | CC BY-SA 4.0 |
| treatment-room | Treatment room | Harrison Keely | CC BY 4.0 |

**Note for the client:** these are illustrative stock photographs, not pictures of
Parma or of the named businesses. Replace them with the client's own photography
when it is available, and the credits page can then be removed.
