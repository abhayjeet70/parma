You are a senior product designer, creative director, UX architect, frontend engineer and performance engineer.

Your task is to completely redesign and rebuild the Parma website as a premium, modern, responsive React website.

IMPORTANT:

This is NOT a simple restyling exercise.

The existing Parma website is visually outdated and has poor design consistency, hierarchy, spacing, responsiveness and overall digital experience.

We want to preserve the BUSINESS INFORMATION and CONTENT while completely rethinking the DIGITAL EXPERIENCE.

The final website should feel like:

- a luxury wellness sanctuary
- a boutique hospitality property
- a premium medical/wellness destination
- an editorial luxury brand
- calm, sophisticated, trustworthy and timeless

It must NOT look like:

- an old hospital website
- a generic WordPress template
- a generic medical SaaS website
- a Bootstrap template
- an AI-generated website
- an over-animated portfolio
- a generic spa website
- a template copied from another website

==================================================
1. SOURCE WEBSITES
==================================================

Existing websites:

https://parma.avhita.com/
https://parmaheal.avhita.com/

Treat these websites as the PRIMARY SOURCE OF TRUTH for:

- business information
- services
- descriptions
- doctors
- team members
- locations
- contact details
- accommodation information
- spa services
- healthcare information
- meditation information
- local attractions
- existing imagery
- brand references
- logos
- terminology

DO NOT invent business facts.

DO NOT invent doctors.

DO NOT invent services.

DO NOT invent statistics.

DO NOT invent awards.

DO NOT invent testimonials.

DO NOT invent medical claims.

If something is not present in the source website, do not fabricate it.

==================================================
2. FIRST TASK — AUDIT THE EXISTING WEBSITE
==================================================

Before writing the new UI, thoroughly inspect both websites.

Create an internal content inventory.

Identify:

A. Global navigation
B. Homepage sections
C. About content
D. Inn content
E. Room information
F. Spa categories
G. Individual spa treatments
H. Healthcare information
I. Meditation information
J. Local experiences
K. Team members
L. Doctors
M. Contact information
N. Reservation/inquiry information
O. Images
P. Logos
Q. Any downloadable assets
R. Any useful existing icons
S. Existing typography clues
T. Existing brand colors

Build a content map before implementation.

Do NOT immediately start coding after seeing the homepage.

First understand the entire information architecture.

==================================================
3. IMAGE EXTRACTION — VERY IMPORTANT
==================================================

DO NOT hotlink images from the old website.

DO NOT use:

<img src="https://parma.avhita.com/...">

DO NOT use remote image URLs from the old website in production.

All relevant images must become LOCAL PROJECT ASSETS.

The goal is:

OLD WEBSITE
     ↓
inspect
     ↓
capture/extract visual assets
     ↓
local assets
     ↓
optimized assets
     ↓
React website

If direct downloading of an original asset is not appropriate or available, use a screenshot/capture of the relevant visual from the old website.

The new website must NOT depend on the old website being online.

All production images should live inside the project, for example:

/public/images/
/public/images/hero/
/public/images/inn/
/public/images/spa/
/public/images/healthcare/
/public/images/team/
/public/images/locations/
/public/images/gallery/

Prefer appropriately cropped screenshots/captures when recreating imagery from the old website.

DO NOT simply screenshot the entire old webpage and place that screenshot into the new website.

Extract individual visual assets.

Images must visually integrate with the new layout.

==================================================
4. IMAGE OPTIMIZATION
==================================================

This website must be extremely fast.

Do not blindly import massive images.

For every image:

- inspect dimensions
- resize when appropriate
- compress
- use modern formats where practical
- use WebP/AVIF when supported
- preserve visual quality
- avoid unnecessary duplication

Use responsive images where useful.

Implement:

loading="lazy"

for below-the-fold images.

Hero images can use eager loading where justified.

Do NOT lazy-load the primary above-the-fold hero if that causes visible loading delay.

==================================================
5. DESIGN DIRECTION
==================================================

The design language should combine:

Luxury hospitality
+
Wellness
+
Modern healthcare
+
Editorial architecture
+
Natural landscape

Think:

Aman
Six Senses
Aesop
Rosewood
The Well
One Medical
high-end boutique resorts
editorial architecture magazines

BUT:

DO NOT COPY THEIR WEBSITES.

Use them only as design-language references.

The visual identity should feel ORIGINAL to Parma.

==================================================
6. REFERENCE WEBSITES
==================================================

Use these as visual/design research references:

Awwwards Health:
https://awwwards.withseismic.com/category/health

Webflow healthcare examples:
https://webflow.com/made-in-webflow/medical

Webflow healthcare design:
https://webflow.com/made-in-webflow/healthcare%20web%20design

Webflow healthcare websites:
https://webflow.com/made-in-webflow/healthcare%20website

Use these references for:

- layout quality
- typography
- spacing
- editorial composition
- navigation
- responsive behavior
- image treatment
- section transitions
- storytelling
- CTA placement
- visual hierarchy

DO NOT copy any site.

==================================================
7. CORE VISUAL PHILOSOPHY
==================================================

The website should feel:

Quiet
Elegant
Expensive
Warm
Natural
Editorial
Human
Trustworthy

Avoid excessive:

- gradients
- glassmorphism
- neon
- shadows
- rounded cards everywhere
- excessive borders
- excessive animations
- giant pills
- generic blue medical UI
- stock illustrations
- unnecessary icons

The design should breathe.

Large whitespace is intentional.

Typography should do much of the visual work.

==================================================
8. COLOR SYSTEM
==================================================

Do not default to standard medical blue.

Develop a sophisticated palette inspired by:

- warm ivory
- parchment
- stone
- muted olive
- deep forest
- charcoal
- warm brown
- subtle brass/gold accents

However:

DO NOT overuse gold.

Gold should be an accent, not the primary color.

Create CSS variables/design tokens.

Example conceptual system:

--color-background
--color-surface
--color-text
--color-muted
--color-accent
--color-border

The final values should be chosen after inspecting the existing Parma identity and imagery.

==================================================
9. TYPOGRAPHY
==================================================

Use a premium typography system.

Prefer a combination of:

Editorial serif
+
Clean modern sans-serif

Possible references:

Cormorant Garamond
DM Serif Display
Playfair Display
Libre Baskerville

paired with:

Inter
Manrope
DM Sans
Instrument Sans

Do not blindly choose fonts.

Choose a combination that works with Parma's actual visual identity.

Typography hierarchy should be dramatic but controlled.

H1:

large editorial statement

H2:

strong section heading

Body:

comfortable reading width

Labels:

small uppercase / tracking where appropriate

==================================================
10. HOMEPAGE STRUCTURE
==================================================

Do not simply reproduce the old homepage section-by-section.

Rebuild the storytelling.

Suggested structure:

1. Full-screen / large cinematic hero

   Parma in Little Washington

   Strong emotional statement

   Large local image

   Minimal navigation

   Primary CTA:
   Explore Parma

   Secondary CTA:
   Reserve / Contact

2. Introductory brand statement

   Explain Parma as a sanctuary.

3. The four worlds

   Parma Inn
   Parma Spa
   Parma Healthcare
   Sushila Shanti Meditation Centre

   Use large editorial cards/images.

4. The Parma philosophy

   Modern science + ancient therapies.

5. Parma Inn

   Strong visual storytelling.

   Room previews.

6. Parma Spa

   Treatment categories.

7. Healthcare

   Concierge/integrative medical experience.

8. Meditation

   Sushila Shanti.

9. The location

   Blue Ridge / Little Washington / Virginia.

10. Team / physicians

11. Final CTA

12. Footer

==================================================
11. NAVIGATION
==================================================

Create a premium navigation system.

Desktop:

Logo
Sanctuary
Inn
Spa
Healthcare
Meditation
Explore
Reserve

Possible secondary CTA:

Reserve

Navigation should be:

- minimal
- elegant
- sticky
- responsive
- accessible

On scroll:

navigation may transition from transparent → solid background.

Do NOT make the navbar excessively tall.

==================================================
12. HERO
==================================================

Hero is critical.

Use an actual Parma image from the old site.

Do not use generated stock photography.

The hero should have:

- cinematic image
- subtle overlay
- restrained typography
- strong contrast
- clear CTA
- minimal UI

Potential visual hierarchy:

SMALL EYEBROW

PARMA

A Private Wellness Sanctuary

Little Washington · Virginia

CTA

The hero should feel like a luxury editorial cover.

==================================================
13. FOUR WORLDS SECTION
==================================================

Introduce:

PARMA INN

PARMA SPA

PARMA HEALTHCARE

SUSHILA SHANTI

Each should feel like its own world.

Use:

large image
small label
large title
short description
arrow

Avoid card-grid SaaS styling.

Think editorial magazine layout.

==================================================
14. SPA EXPERIENCE
==================================================

The old site contains extensive treatment information.

Do not dump everything onto one giant page.

Organize treatments into categories.

For example:

Ayurvedic
Heat
Traditional
Aqua
Yoga
Beauty

Each category should have:

- image
- introduction
- treatment list
- duration
- description

Use expandable accordions where appropriate.

Do not make every treatment a separate huge card.

==================================================
15. HEALTHCARE
==================================================

Healthcare needs to feel:

premium
private
credible
human

NOT:

hospital corporate

Highlight:

- integrative care
- concierge model
- physicians
- consultation
- second opinions
- medical coordination

Use careful medical language.

Do not make unsupported medical claims.

==================================================
16. TEAM
==================================================

Use real information from the existing site.

Create elegant editorial team cards.

Prioritize:

portrait
name
role
short bio

Avoid generic LinkedIn-style cards.

==================================================
17. LOCAL EXPERIENCE
==================================================

Create a visually rich Explore section.

Examples from existing site include:

- Little Washington
- Luray Caverns
- wineries
- golf
- equestrian
- dining

Use local imagery extracted from the existing website where available.

==================================================
18. RESERVATION / CONTACT
==================================================

Create a very clean final CTA.

Include existing contact details from the source website.

Do not invent booking functionality if the old website does not provide it.

If the existing form is only an inquiry form:

keep it as an inquiry form.

Fields should remain minimal.

==================================================
19. RESPONSIVE DESIGN
==================================================

This is extremely important.

Design mobile FIRST.

Target:

iPhone SE
iPhone 13/14
iPhone 15/16
Android phones
tablet
laptop
desktop
large desktop

Do not simply shrink the desktop layout.

Mobile should be intentionally designed.

Pay special attention to:

- hero height
- image cropping
- typography
- navbar
- buttons
- horizontal overflow
- accordion behavior
- treatment lists
- team cards
- footer
- forms

==================================================
20. MOBILE PERFORMANCE
==================================================

The previous website has mobile loading problems.

Treat mobile performance as a first-class requirement.

Avoid:

- huge JS bundles
- unnecessary libraries
- blocking animations
- massive hero assets
- unnecessary video
- heavy carousels
- large third-party scripts

The first render must show useful UI quickly.

Do NOT show a blank white screen while the application initializes.

==================================================
21. SKELETON / LOADING STATE
==================================================

Use skeleton loading ONLY where it genuinely helps.

Do NOT put a giant skeleton over the entire website.

For a static marketing website:

prefer:

HTML/CSS-first rendering
+
optimized assets
+
minimal JavaScript

instead of:

global loading screen
+
spinner
+
fake skeleton

For image-heavy sections:

use lightweight image placeholders or reserved aspect-ratio containers.

The hero should have a stable layout immediately.

Never allow layout shift.

==================================================
22. ANIMATIONS
==================================================

Animations should be subtle.

Use:

- fade
- reveal
- slight translate
- image scale
- hover movement
- smooth navigation

Avoid:

- excessive parallax
- scroll-jacking
- huge text animations
- long entrance animations
- animation on every element

Animation duration generally:

300–800ms

Use stagger carefully.

Respect:

prefers-reduced-motion.

==================================================
23. TECH STACK
==================================================

Build a SIMPLE React application.

Preferred:

React
Vite
TypeScript

Use:

Tailwind CSS if it improves consistency and speed.

Use CSS variables/design tokens.

Use Lucide icons if icons are necessary.

Use Framer Motion ONLY where justified.

Do not install huge UI frameworks.

Do not use unnecessary dependencies.

Keep architecture understandable.

==================================================
24. COMPONENT ARCHITECTURE
==================================================

Create reusable components.

Suggested:

src/
  components/
    Navbar.tsx
    Footer.tsx
    Button.tsx
    SectionHeading.tsx
    ImageReveal.tsx
    EditorialCard.tsx
    TreatmentList.tsx
    TeamCard.tsx
    Gallery.tsx
    Accordion.tsx
    CTA.tsx

  pages/
    Home.tsx
    About.tsx
    Inn.tsx
    Spa.tsx
    Healthcare.tsx
    Meditation.tsx
    Explore.tsx
    Contact.tsx

  data/
    treatments.ts
    team.ts
    rooms.ts
    locations.ts

  assets/
    images/

Keep content separate from UI whenever practical.

==================================================
25. DATA ARCHITECTURE
==================================================

Do NOT hardcode huge amounts of repeated content directly inside JSX.

Create structured data.

Example:

const treatments = [
 {
   category: "Ayurvedic",
   name: "Abhyanga",
   duration: "1 hr 20 min",
   description: "..."
 }
]

Likewise:

rooms
team
doctors
locations
experiences

This makes future maintenance easy.

==================================================
26. SEO
==================================================

Implement:

semantic HTML
proper H1/H2 hierarchy
page titles
meta descriptions
Open Graph metadata
descriptive alt text
canonical URLs where appropriate

Do not stuff keywords.

==================================================
27. ACCESSIBILITY
==================================================

Target WCAG-friendly implementation.

Include:

- semantic buttons
- keyboard navigation
- visible focus states
- accessible accordions
- proper labels
- alt text
- sufficient contrast
- reduced motion support

==================================================
28. PERFORMANCE TARGETS
==================================================

Target excellent Lighthouse performance.

Priorities:

LCP
CLS
INP

Avoid layout shifts.

Reserve image dimensions.

Use proper image sizing.

Avoid unnecessary JavaScript.

Avoid render-blocking assets.

Do not load every page's image at initial load.

==================================================
29. SECURITY / ROBUSTNESS
==================================================

Do not expose unnecessary API keys.

Do not embed secret information.

Do not rely on the old website at runtime.

If an external link is required, make it explicit.

==================================================
30. NO OLD-SITE DEPENDENCY
==================================================

This is NON-NEGOTIABLE.

After migration:

THE NEW WEBSITE MUST CONTINUE WORKING IF:

https://parma.avhita.com/

AND

https://parmaheal.avhita.com/

GO OFFLINE.

No production UI should depend on those domains.

No old image URL.

No old CSS.

No old JavaScript.

No iframe.

No external page embedding.

No hotlinked assets.

==================================================
31. DESIGN QUALITY BAR
==================================================

Before considering the project complete, compare every major section against premium modern editorial websites.

Ask:

Does this look expensive?

Does this look intentional?

Does the typography feel premium?

Does the whitespace feel intentional?

Does the image selection feel cinematic?

Does the page tell a story?

Does the website feel like Parma?

Does it look like a template?

If it looks like a template, redesign it.

==================================================
32. AVOID GENERIC AI DESIGN
==================================================

Do NOT use:

- 3-column cards everywhere
- identical rounded cards
- excessive pills
- generic gradients
- stock AI illustrations
- random blobs
- meaningless statistics
- generic "Transform Your Health" copy
- fake testimonials
- fake reviews
- fake trust badges
- fake awards
- fake numbers

Use the actual Parma identity.

==================================================
33. IMPLEMENTATION PROCESS
==================================================

Follow this exact workflow.

PHASE 1 — DISCOVERY

Inspect both old websites.

Create:

CONTENT_MAP.md

containing:

- pages
- sections
- services
- people
- locations
- images
- contact details

PHASE 2 — ASSET MIGRATION

Create local image asset library.

Document:

assets

source
category
dimensions
usage

PHASE 3 — DESIGN SYSTEM

Create:

DESIGN_SYSTEM.md

containing:

colors
typography
spacing
buttons
cards
navigation
image ratios
breakpoints
animation principles

PHASE 4 — INFORMATION ARCHITECTURE

Build page hierarchy.

PHASE 5 — HOMEPAGE

Build homepage first.

Make it visually excellent before building secondary pages.

PHASE 6 — SECONDARY PAGES

Build:

About
Inn
Spa
Healthcare
Meditation
Explore
Contact

PHASE 7 — RESPONSIVE

Test:

mobile
tablet
desktop

PHASE 8 — PERFORMANCE

Run production build.

Analyze bundle.

Optimize images.

Remove unnecessary dependencies.

PHASE 9 — QA

Test:

navigation
links
images
forms
mobile menu
accordion
responsive layouts
404 behavior
page loading
console errors

==================================================
34. BROWSER TESTING
==================================================

Test at minimum:

375px
390px
430px
768px
1024px
1440px
1920px

Pay special attention to iPhone-sized screens.

The website must NEVER display:

blank white screen
horizontal overflow
broken images
FOUC
unstyled content
layout jumping
overlapping text

==================================================
35. FINAL ACCEPTANCE CRITERIA
==================================================

The project is complete only when:

[ ] React application runs cleanly
[ ] Production build succeeds
[ ] No old-site runtime dependencies
[ ] All required content migrated
[ ] Images are local
[ ] Images optimized
[ ] Mobile responsive
[ ] Desktop responsive
[ ] Navigation works
[ ] Forms work
[ ] No console errors
[ ] No horizontal overflow
[ ] No major layout shifts
[ ] Hero loads quickly
[ ] Lighthouse performance is strong
[ ] Accessibility is reasonable
[ ] Typography is consistent
[ ] Design system is consistent
[ ] Animations are restrained
[ ] Website feels premium
[ ] Website does not look like an AI template

==================================================
36. MOST IMPORTANT DESIGN PRINCIPLE
==================================================

DO NOT TRY TO MAKE THE WEBSITE "FANCY".

Make it:

QUIET.

PREMIUM.

EDITORIAL.

HUMAN.

FAST.

TRUSTWORTHY.

The quality should come from:

typography
photography
spacing
composition
hierarchy
content
micro-interactions

—not from excessive effects.

==================================================
37. FINAL COMMAND
==================================================

Start by auditing both source websites.

Do not immediately build the UI.

First produce:

1. CONTENT_MAP.md
2. ASSET_INVENTORY.md
3. DESIGN_DIRECTION.md
4. INFORMATION_ARCHITECTURE.md

Then implement the website.

Do not ask unnecessary questions.

When information exists on the old website, use it.

When information does not exist, do not invent it.

Build a production-quality React website that feels like a completely new digital identity for Parma while preserving the factual content and visual assets of the original business.