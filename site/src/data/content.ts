// All copy is taken from parma.avhita.com / parmaheal.avhita.com. See CONTENT_MAP.md.
import images from './images.json'

export type ImageKey = keyof typeof images

const srcset = (k: ImageKey) => {
  const i = images[k]
  return i.widths.map((w) => `${i.path}-${w}.webp ${w}w`).join(', ')
}

export const site = {
  name: 'Parma in Little Washington',
  url: 'https://parmainlittlewashington.com',
  address: ['105 Christmas Tree Lane', 'Washington, VA 22747'],
  phone: '540 987 8588',
  phoneHref: 'tel:+15409878588',
  email: 'info@parmainlittlewashington.com',
  disclaimer: 'Parma Group is independent and not affiliated with The Inn at Little Washington.',
}

type Meta = { title: string; description: string; preload?: string }
export const pages: Record<string, Meta> = {
  '/': {
    title: 'Parma in Little Washington | Inn, Spa & Wellness Sanctuary',
    description:
      'A private sanctuary in the Blue Ridge foothills of Washington, Virginia. Parma Inn, Ayurvedic spa, concierge healthcare, and the Sushila Shanti Meditation Centre.',
    preload: srcset('hero13'),
  },
  '/about': {
    title: 'The sanctuary | Parma in Little Washington',
    description: 'A place that blends modern science with ancient therapies, founded by Dr. Sadhna Nicky Singh in the foothills of the Blue Ridge.',
    preload: srcset('hero19'),
  },
  '/inn': {
    title: 'Parma Inn | Parma in Little Washington',
    description: 'Old-world antiques and contemporary ease: the Tapestry Room, the Red Room, the Panther Suite and the Lounge, an hour from Washington, D.C.',
    preload: srcset('hero18'),
  },
  '/spa': {
    title: 'Parma Spa | Ayurveda, heat, aqua, yoga and beauty',
    description: 'Ayurvedic, heat, traditional and aqua therapies, yoga in the Bihar School lineage, and beauty and aesthetics at Parma Spa, Tysons Corner.',
    preload: srcset('spa1'),
  },
  '/healthcare': {
    title: 'Parma Healthcare | Integrative concierge care',
    description: 'An integrative team headed by Dr. Thara Kodandaramachandra: consultations, second opinions and coordination with leading medical centres.',
    preload: srcset('hero12'),
  },
  '/meditation': {
    title: 'Sushila Shanti Meditation Centre | Parma',
    description: 'Yoga and meditation in the lineage of the Bihar School of Yoga: asana, pranayama, Yoga Nidra and more.',
    preload: srcset('heal-slide-3'),
  },
  '/explore': {
    title: 'Explore Rappahannock | Parma in Little Washington',
    description: 'The town of Washington, Luray Caverns, Virginia wineries, golf, riding and dining near Parma.',
    preload: srcset('hero14'),
  },
  '/contact': {
    title: 'Reserve and contact | Parma in Little Washington',
    description: 'Send an inquiry to Parma in Little Washington, 105 Christmas Tree Lane, Washington, VA 22747. 540 987 8588.',
  },
  '*': { title: 'Page not found | Parma in Little Washington', description: 'This page could not be found.' },
}

export const nav = [
  { to: '/about', label: 'Sanctuary' },
  { to: '/inn', label: 'Inn' },
  { to: '/spa', label: 'Spa' },
  { to: '/healthcare', label: 'Healthcare' },
  { to: '/meditation', label: 'Meditation' },
  { to: '/explore', label: 'Explore' },
]

export const worlds: { to: string; name: string; place: string; text: string; image: ImageKey }[] = [
  { to: '/inn', name: 'Parma Inn', place: 'Little Washington', text: 'The Tapestry Room, the Red Room and the Panther Suite, furnished with old-world antiques.', image: 'parma-inn' },
  { to: '/spa', name: 'Parma Spa', place: 'Tysons Corner', text: 'Ayurveda, heat and aqua therapies, yoga, and aesthetics.', image: 'spa1' },
  { to: '/healthcare', name: 'Parma Healthcare', place: 'Tysons Corner', text: 'Integrative, concierge medicine and second opinions.', image: 'health1' },
  { to: '/meditation', name: 'Sushila Shanti', place: 'Meditation Centre', text: 'Asana, pranayama and meditation in the Bihar School lineage.', image: 'yoga' },
]

export const visionPoints = [
  'Modern innovation alongside Ayurveda and acupuncture',
  'Healing energies where nature, spa, and spirit inspire one another',
  'Therapies given amidst real birdsong, herbal teas, and mountain light',
]

export type Room = { id: string; name: string; kind: string; copy: string; images: ImageKey[] }
export const rooms: Room[] = [
  {
    id: 'tapestry',
    name: 'The Tapestry Room',
    kind: 'Suite',
    copy: 'Woven textiles, warm lamplight, and a quieter corner of the house for guests who prefer a classical, collected atmosphere.',
    images: ['tapestry1', 'tapestry2'],
  },
  {
    id: 'red-room',
    name: 'The Red Room',
    kind: 'Suite',
    copy: 'A richer register of the house — vermilion, gilt, and candlelight for evenings that should feel ceremonial.',
    images: ['red-room1', 'red-room2'],
  },
  {
    id: 'panther',
    name: 'The Panther Suite',
    kind: 'Suite',
    copy: 'The most expansive stay: layered fabrics, mountain light, and room enough to disappear from the week.',
    images: ['panther2', 'panther3', 'panther1', 'panther4', 'panther5'],
  },
  {
    id: 'lounge',
    name: 'The Lounge',
    kind: 'Common room',
    copy: 'Where the day gathers — antique and contemporary pieces, silk, and a fire-warmed place to sit with tea.',
    images: ['lounge1', 'lounge2', 'lounge3', 'lounge4'],
  },
]

export type Treatment = { name: string; duration: string; description: string }
export type SpaCategory = { id: string; name: string; title: string; image: ImageKey; intro?: string; treatments: Treatment[] }
export const spaCategories: SpaCategory[] = [
  {
    id: 'ayurvedic',
    name: 'Ayurvedic',
    title: 'Ayurvedic therapies',
    image: 'ayurveda-therapi-main',
    treatments: [
      { name: 'Abhyanga', duration: '1 hr 20 min', description: 'A light herbal-oil massage that elicits deep nervous-system rest and balances all three doshas.' },
      { name: 'Kathi Basti', duration: '1 hr 20 min', description: 'Warm Ayurvedic oils poured along the spine, then a gentle back massage and herbal compresses.' },
      { name: 'Oshadhi / Oshadi Wrap', duration: '1 hr 20 min / 30 min', description: 'Pitta-calming oils and cooling herbs to clear blockages and draw heat from the body.' },
      { name: 'Vishesh / Vishesh Scrub', duration: '1 hr 20 min / 30 min', description: 'Deep-tissue friction with warm oil, or herbal powders to lift heaviness and water retention.' },
      { name: 'Mardanam', duration: '1 hr 20 min', description: 'Synchronized deep-tissue massage by two therapists, using detoxifying powders and warm oil.' },
      { name: 'Sheetala', duration: '50 min', description: 'Head, neck, and shoulder massage with cooling herbs for the sensory organs.' },
    ],
  },
  {
    id: 'heat',
    name: 'Heat',
    title: 'Heat therapies',
    image: 'spa1',
    treatments: [
      { name: 'Hammam', duration: '30 min', description: 'A milk-and-rose or eucalyptus soak, finished with a body polish.' },
      { name: 'Kuti Swedhana', duration: '30 min', description: 'Herbal mud wrap and steam, then a warm-water rinse.' },
      { name: 'Calming Radiance', duration: '2 hr 20 min', description: 'Ancient steam, a chosen body scrub, and an 80-minute massage in mosaic splendour.' },
    ],
  },
  {
    id: 'traditional',
    name: 'Traditional',
    title: 'Traditional therapies',
    image: 'aqua-experiences',
    treatments: [
      { name: 'Royal Thai Massage', duration: '1 hr 20–50 min', description: 'Palace-born acupressure along energy lines to release blockages.' },
      { name: 'Traditional Thai / Lanna Tok Sen', duration: '1 hr 20–50 min', description: 'Meridian stretching, or rhythmic tamarind-stick tapping followed by herbal compresses.' },
      { name: 'Swedish & Lymphatic Drainage', duration: '1 hr 20 min / 2 hr', description: 'Invigorating long strokes, or Vodder’s light rhythms to quiet puffiness.' },
      { name: 'Aromatherapy & Reflexology', duration: '1 hr 20 min', description: 'Flower and wood essences, Ingham-style foot work, or Chinese hand-and-foot meridians.' },
      { name: 'Lanna / Indian Ceremony', duration: '3 hr 20 min', description: 'Full rituals: honey steam, Tok Sen, ubtan, shirobhyanga, and abhyanga.' },
    ],
  },
  {
    id: 'aqua',
    name: 'Aqua',
    title: 'Aqua experiences',
    image: 'vision',
    treatments: [
      { name: 'Vichy Shower', duration: '45 min', description: 'A five-head shower table with a herbal scrub.' },
      { name: 'Hydrotherapy', duration: '30 min', description: 'One of the oldest water treatments, for muscular tension and circulation.' },
      { name: 'Aquatic Yoga', duration: '60 min', description: 'The buoyancy of water with the harmony of yoga. No prior experience required.' },
    ],
  },
  {
    id: 'yoga',
    name: 'Yoga',
    title: 'Yoga and the inner life',
    image: 'yoga',
    intro:
      'Group and private classes in the lineage of the Bihar School of Yoga. Each session weaves asana, pranayama, and a short meditation. Private work is designed after a general class with your teacher.',
    treatments: [
      { name: 'General, Dynamic & Advanced', duration: '90 min', description: 'From foundational asana to static classic postures, mudra, and bandha.' },
      { name: 'Surya Namaskar', duration: '90 min', description: 'Twelve sun salutations, then pranayama and rest.' },
      { name: 'Gentle, Relaxation & Pranayama', duration: '60 min', description: 'Pawanmuktasana, body-and-breath awareness, and the art of the breath.' },
      { name: 'Meditation', duration: 'By arrangement', description: 'Yoga Nidra, Ajapa Japa, Antar Mouna, and Hirdayakasha Dharana.' },
    ],
  },
  {
    id: 'beauty',
    name: 'Beauty',
    title: 'Beauty and aesthetics',
    image: 'beauty-main',
    intro: 'Signature facials, medical-grade skincare, waxing, and injectables.',
    treatments: [
      { name: 'Jewel Facial', duration: 'Signature', description: 'Diamond, gold, and pearl masques with Marma point therapy.' },
      { name: 'Fire and Ice / Vitamin C / Acne', duration: 'Custom', description: 'Exfoliation, antioxidant brightness, or enzyme clearing for inflamed skin.' },
      { name: 'Epicurean, Men’s & Teen', duration: 'Custom', description: 'Collagen-minded facials, a men’s executive cleanse, and youthful-skin consultations.' },
      { name: 'Peels, Obagi, Forest Essentials', duration: 'Series', description: 'From fruit acids to medical-grade lines including IS Clinical, Image, MD Forte, and Derma Blend.' },
      { name: 'Botox, Dysport, Restylane, Juvederm', duration: 'Physician', description: 'Fine-line prevention, fillers, and hyperhidrosis care, administered by a physician.' },
    ],
  },
]

export type Person = { name: string; role: string; bio?: string; image: ImageKey }
export const team: Person[] = [
  {
    name: 'Dr. Sadhna Nicky Singh',
    role: 'Founder & Medical Director',
    bio: 'Twenty-five years in women’s health and a fellow of the American Society for Laser Medicine and Surgery. Her dream is Parma: a name you can trust.',
    image: 'nickey-singh',
  },
  { name: 'Dr. Thara Kodandaramachandra', role: 'Integrative Medicine', image: 'thara' },
  { name: 'Dr. P.R. Prabhu', role: 'Physician', image: 'prahbu' },
  { name: 'Anne Merrigan', role: 'Spa team', image: 'anne' },
  { name: 'Kendra', role: 'Spa team', image: 'kendra' },
]
export const teamMore = ['Dr. Sally McFarland', 'Elsie Fisher', 'Danielle', 'Dianna', 'Gina', 'Sara', 'Marietta']

export const experiences: { name: string; text: string }[] = [
  {
    name: 'The town of Washington',
    text: 'A couple of miles from Parma, founded in 1769, with galleries, shops, and its own theatre. The visitor center on Route 211, beside the town library, is open Friday–Sunday, 10 AM–5 PM.',
  },
  { name: 'Luray Caverns', text: 'Natural underground splendour. A visit to this area is incomplete without them.' },
  { name: 'Local wineries', text: 'Virginia is becoming a mecca after Napa. Several estates nearby offer distinctive tastings.' },
  { name: 'Golf and equestrian', text: 'Tee times at Stonewall Golf Club and Lake Manassas, and riding lessons at a center next to the property.' },
  {
    name: 'Tables nearby',
    text: 'Blue Rock Inn deserves a special mention. Also: The Inn at Little Washington, Griffin Tavern, Thornton River Grille, and more.',
  },
]

export const interests = ['Parma Inn', 'Parma Spa', 'Healthcare consult', 'Meditation Centre', 'A combination stay']
