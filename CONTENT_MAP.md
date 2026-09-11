# Content map — Parma in Little Washington

Audited 2026-09-11.

- **parma.avhita.com**: a single long page with anchor navigation. Nearly all business content lives here. Room gallery data comes from `js/site.js`.
- **parmaheal.avhita.com**: a splash page (`index.html`) plus `home.html`. `home.html` is a slider shell holding 5 landscape slides and the labels "parma inn", "parma spa Tysons Corner" and "parma healthcare Tysons Corner". It has no other pages (inn/spa/about/… all return 404).

## Global navigation (old)
Sanctuary · About · Inn · Spa · Healthcare · Meditation · Explore · Reserve. Tagline: "A Private Wellness Sanctuary".

## Homepage sections (old, in order)
1. Hero slider (7 images) with captions, a lead paragraph, the CTAs "Enter the sanctuary" / "Reserve a stay", and a "Sound of water" audio toggle.
2. Four worlds: "Choose how you arrive." Inn, Spa, Healthcare, Sushila Shanti.
3. About / Vision, The Parma experience, The founder, Facilities.
4. Inn intro and room explorer (4 rooms).
5. Spa: Ayurveda intro and 6 treatment tabs.
6. Healthcare.
7. Sushila Shanti Meditation Centre.
8. Explore: things to do in Rappahannock.
9. Team.
10. Reservation inquiry form and contact details.
11. Footer.

## About
- Vision: "A place that blends modern science with ancient therapies." There was first a dream of a sanctuary of natural beauty and tranquility, offering a shift toward lasting wellness.
- Vision points: modern innovation alongside Ayurveda and acupuncture; healing energies where nature, spa and spirit inspire one another; therapies given amid birdsong, herbal teas and mountain light.
- Washington, Virginia was founded in 1769 and sits in the foothills of the Blue Ridge, an hour from Washington, D.C.
- Founder: Dr. Sadhna Nicky Singh founded Parma Center and Parma in Little Washington. The Tysons Corner concierge med spa has been recognized by DC Luxury, Washingtonian and Capital File (stated on the source site).
- Facilities: consults include Dr. Thara, of Deepak Chopra's center in New York.

## Inn
- Furnished in beige and brown: Nancy Corzine and Baker pieces, velvet brocades, silk and sterling silver.
- Rooms:
  - The Tapestry Room (Suite 01)
  - The Red Room (Suite 02)
  - The Panther Suite (Suite 03)
  - The Lounge (common room)
- Room copy is taken verbatim from site.js.
- No rates, capacity or amenity list are published, so none are shown.

## Spa (Tysons Corner)
- Intro: Ayurveda is more than 5,000 years old. A dosha assessment with an Ayurvedic doctor covers pulse, eyes, nails and a questionnaire.
- Treatment categories (full lists are in `site/src/data/content.ts`):
  - Ayurvedic: 6 treatments
  - Heat: 3
  - Traditional: 5
  - Aqua: 3
  - Yoga: 4, in the Bihar School of Yoga lineage
  - Beauty: 5

## Healthcare (Tysons Corner)
- Integrative team headed by Dr. Thara Kodandaramachandra.
- Second opinions, with Parma's physicians acting as liaison.
- Teleconsults with experts at Mayo Clinic, Cleveland Clinic or a leading physician for the case.

## Meditation — Sushila Shanti Meditation Centre
- Asana, pranayama and a short relaxation meditation.
- Meditation practices: Yoga Nidra, Ajapa Japa, Antar Mouna, Hirdayakasha Dharana.

## Explore (Rappahannock)
- Town of Washington: galleries, shops and a theatre. The visitor center on Route 211, beside the town library, is open Fri–Sun, 10 AM–5 PM.
- Luray Caverns.
- Local wineries.
- Golf and equestrian: Stonewall Golf Club, Lake Manassas, and a riding center next to the property.
- Dining: Blue Rock Inn, The Inn at Little Washington, Griffin Tavern, Thornton River Grille.

## People
| Name | Role (as stated on source) | Portrait |
|---|---|---|
| Dr. Sadhna Nicky Singh | Founder & Medical Director. Bio: 25 years in women's health; fellow of the ASLMS | nickey-singh |
| Dr. Thara Kodandaramachandra | Integrative Medicine | thara |
| Dr. P.R. Prabhu | Physician | prahbu |
| Anne Merrigan | Spa team | anne |
| Kendra | Spa team | kendra |

Also named on the source, without portraits: Dr. Sally McFarland, Elsie Fisher, Danielle, Dianna, Gina, Sara, Marietta.

## Contact
- Parma in Little Washington, 105 Christmas Tree Lane, Washington, VA 22747
- Phone: 540 987 8588
- Email: info@parmainlittlewashington.com
- Disclaimer: "Parma Group is independent and not affiliated with The Inn at Little Washington."
- Canonical domain: parmainlittlewashington.com
- Discrepancy: the hero captions mention "106 Christmas Tree Ln" and "26 Mitchells Mountain Ln". The contact block's 105 Christmas Tree Lane is used as the official address. **Confirm with the client.**

## Reservation
- The source has an inquiry-only form (no booking engine). Fields: name, email, phone, preferred dates, interest, message.
- The source form only showed a status message and sent nothing. The new form opens a pre-filled email to info@ instead. See [INFORMATION_ARCHITECTURE.md](INFORMATION_ARCHITECTURE.md).

## Deliberately NOT migrated
- Hero captions making claims: "Gauranteed Results", "help with Cancer Rehab", "Results Oriented". These are unsupported medical claims.
- The "Sound of water" audio, which weighs on performance.
- Icons: none worth keeping (only a calendar SVG on the Reserve button).
- Downloadable assets: none found.

## Typography / colour clues (old)
- Fonts: Cinzel, Cormorant Garamond, Outfit (parma); Lora, Niconne, Open Sans (parmaheal).
- Colours: gold buttons, a brass "metal" P monogram, and warm beige interiors.
