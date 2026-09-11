import { Closing, Img, PageHero } from '../components'
import { spaCategories } from '../data/content'

export default function Spa() {
  return (
    <>
      <PageHero image="spa1" alt="Candlelight at Parma Spa" title="Parma Spa" lead="Ayurveda, the science of life. Tysons Corner." />

      <section className="section wrap split">
        <p className="statement split-wide">
          More than 5,000 years old, Ayurveda holds that body, mind, and environment are forces of energy and intelligence.
        </p>
        <p className="split-narrow">
          Guests may book a comprehensive assessment with an Ayurvedic doctor: pulse, eyes, nails, a brief questionnaire, and a programme of natural
          therapies tailored to your dosha.
        </p>
      </section>

      <section className="wrap menu-cats" aria-label="Treatment menu">
        {spaCategories.map((c) => (
          <details key={c.id} id={c.id} className="cat">
            <summary>
              <h2>{c.name}</h2>
              <span className="cat-count">{c.treatments.length} treatments</span>
            </summary>
            <div className="cat-body">
              <Img k={c.image} alt={c.title} sizes="(min-width: 900px) 30vw, 100vw" className="cat-image" />
              <div>
                {c.intro && <p className="cat-intro">{c.intro}</p>}
                <ul className="treatments">
                  {c.treatments.map((t) => (
                    <li key={t.name}>
                      <h3>{t.name}</h3>
                      <p className="duration">{t.duration}</p>
                      <p>{t.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        ))}
      </section>

      <Closing>Book a treatment or an Ayurvedic assessment.</Closing>
    </>
  )
}
