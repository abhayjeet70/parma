import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Closing, Img, Marquee, Mosaic, SplitText, TeamCollage, useTilt } from '../components'
import { MeditationScene } from '../scene'
import { Glance } from '../cards'
import { rooms, spaCategories, visionPoints, worlds, type ImageKey } from '../data/content'

const slides: { k: ImageKey; alt: string }[] = [
  { k: 'hero13', alt: 'Autumn vineyards and the Blue Ridge foothills around Little Washington' },
  { k: 'hero12', alt: '' },
  { k: 'hero17', alt: '' },
  { k: 'hero14', alt: '' },
  { k: 'hero19', alt: '' },
]

/** First slide renders immediately (LCP); the rest mount after hydration and crossfade every 6s. */
function HeroSlides() {
  const [active, setActive] = useState(0)
  const [all, setAll] = useState(false)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setAll(true)
    const t = setInterval(() => setActive((a) => (a + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="hero-slides">
      {(all ? slides : slides.slice(0, 1)).map((s, i) => (
        <Img key={s.k} k={s.k} alt={s.alt} eager={i === 0} className={i === active ? 'is-active' : undefined} />
      ))}
    </div>
  )
}

export default function Home() {
  const [active, setActive] = useState(0)
  const heroRef = useTilt<HTMLElement>()
  return (
    <>
      <section className="hero is-3d" ref={heroRef}>
        <HeroSlides />
        <div className="wrap hero-copy">
          <h1 aria-label="Parma">
            <SplitText text="Parma" />
          </h1>
          <p className="hero-sub">A private wellness sanctuary in Little Washington, Virginia</p>
          <p className="actions">
            <a className="button button-light" href="#worlds">
              Explore Parma
            </a>
            <Link className="text-link" to="/contact">
              Reserve or contact
            </Link>
          </p>
        </div>
      </section>

      <Marquee />

      <section className="section wrap intro has-scene">
        <MeditationScene />
        <p className="statement">
          In scenic Little Washington, unspoiled by time, nature, spa, and spiritual wellness work together.
        </p>
        <p className="intro-aside">
          Meandering rivers, tranquil mountains, and lush forest create a place where perfection still feels possible. An oasis an hour from
          Washington, D.C.
        </p>
      </section>

      <Mosaic
        items={[
          { k: 'hero19', alt: 'The house at Parma at dusk, windows lit' },
          { k: 'lounge2', alt: 'The Lounge, with a piano and stone wall' },
          { k: 'panther3', alt: 'A brocade settee and lamplight in the Panther Suite' },
        ]}
      />

      <section className="section wrap worlds" id="worlds" aria-labelledby="worlds-title">
        <div className="worlds-list">
          <h2 id="worlds-title" className="kicker">
            Four worlds, one estate
          </h2>
          {worlds.map((w, i) => (
            <Link
              key={w.to}
              to={w.to}
              className="world"
              data-active={i === active || undefined}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <Img k={w.image} alt="" sizes="100vw" className="world-thumb" />
              <span className="world-place">{w.place}</span>
              <span className="world-name">{w.name}</span>
              <span className="world-text">{w.text}</span>
            </Link>
          ))}
        </div>
        <figure className="worlds-stage" aria-hidden="true">
          {worlds.map((w, i) => (
            <Img key={w.to} k={w.image} alt="" sizes="(min-width: 900px) 55vw, 1px" className={i === active ? 'is-active' : undefined} />
          ))}
        </figure>
      </section>

      <Glance>
        <div className="section-head">
          <p className="kicker">At a glance</p>
          <h2>What Parma holds.</h2>
        </div>
      </Glance>

      <section className="philosophy">
        <Img k="hero12" alt="Morning mist over autumn forest in the Blue Ridge" />
        <div className="wrap philosophy-copy">
          <h2>A place that blends modern science with ancient therapies.</h2>
          <p>
            First there was a dream: to create a sanctuary of natural beauty and tranquility, and to offer an experience that does not merely
            rejuvenate for a moment, but creates a shift toward lasting wellness.
          </p>
          <ul>
            {visionPoints.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section wrap feature">
        <div className="feature-media">
          <Img k="parma-inn" alt="The sitting room and a gilt mirror at Parma Inn" sizes="(min-width: 900px) 58vw, 100vw" />
        </div>
        <div className="feature-copy">
          <p className="kicker">Parma Inn</p>
          <h2>Old-world antiques. Contemporary ease.</h2>
          <p>
            Parma is furnished in tones of beige and brown. Nancy Corzine and Baker pieces sit beside rich fabrics, velvet brocades, shimmering
            silk, and sterling silver.
          </p>
          <ul className="index-list">
            {rooms.map((r) => (
              <li key={r.id}>
                <Link to={`/inn#${r.id}`}>{r.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section spa-band">
        <div className="wrap spa-band-grid">
          <div>
            <p className="kicker">Parma Spa, Tysons Corner</p>
            <h2>Ayurveda, the science of life.</h2>
            <p>
              More than 5,000 years old, Ayurveda holds that body, mind, and environment are forces of energy and intelligence. Treatments begin
              with an assessment by an Ayurvedic doctor.
            </p>
          </div>
          <ul className="spa-words">
            {spaCategories.map((c) => (
              <li key={c.id}>
                <Link to={`/spa#${c.id}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section wrap pair">
        <article>
          <Img k="health1" alt="A physician holding a patient’s hands" sizes="(min-width: 900px) 45vw, 100vw" />
          <p className="kicker">Parma Healthcare, Tysons Corner</p>
          <h2>When life arrives at a fork, chart a quieter course.</h2>
          <p>
            An integrative team headed by Dr. Thara Kodandaramachandra. Bring a specific concern or seek a second opinion; Parma’s physicians
            will liaise for you.
          </p>
          <Link className="text-link" to="/healthcare">
            About Parma Healthcare
          </Link>
        </article>
        <article>
          <Img k="heal-slide-3" alt="Layered ridges in golden morning light" sizes="(min-width: 900px) 45vw, 100vw" />
          <p className="kicker">Sushila Shanti Meditation Centre</p>
          <h2>Connect with the inner life force.</h2>
          <p>Yoga here is not performance. A healthy body, a creative mind, an evolving spirit.</p>
          <Link className="text-link" to="/meditation">
            About the Meditation Centre
          </Link>
        </article>
      </section>

      <section className="place">
        <Img k="hero17" alt="The estate and its vineyard beneath the Blue Ridge at dusk" />
        <div className="wrap place-copy">
          <h2>Washington, Virginia</h2>
          <ul>
            <li>Rappahannock County</li>
            <li>Foothills of the Blue Ridge</li>
            <li>An hour from Washington, D.C.</li>
            <li>A town founded in 1769</li>
          </ul>
          <Link className="text-link" to="/explore">
            Things to do nearby
          </Link>
        </div>
      </section>

      <section className="section wrap people">
        <div className="people-head">
          <p className="kicker">Little Washington &amp; Tysons Corner</p>
          <h2>An international team, chosen with care.</h2>
          <p>Licensed physicians blend conventional medicine with alternative therapies, so the complete individual is seen.</p>
          <Link className="text-link" to="/about#team">
            Meet the team
          </Link>
        </div>
        <TeamCollage />
      </section>

      <Closing />
    </>
  )
}
