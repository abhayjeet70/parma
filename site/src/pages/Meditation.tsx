import { Closing, Img, PageHero } from '../components'
import { MeditationScene } from '../scene'
import { spaCategories } from '../data/content'

const yoga = spaCategories.find((c) => c.id === 'yoga')!

export default function Meditation() {
  return (
    <>
      <PageHero
        image="heal-slide-3"
        alt="Layered ridges in golden morning light"
        title="Sushila Shanti"
        lead="The Sushila Shanti Meditation Centre. Connect with the inner life force."
      />

      <section className="section wrap split has-scene">
        <MeditationScene />
        <p className="statement split-wide">
          Yoga here is not performance. It is the old desire to evolve past worldly limitation — a healthy body, a creative mind, an evolving spirit.
        </p>
        <p className="split-narrow">
          Classes include asana, pranayama, and a short relaxation meditation. Teachers are committed to the science and ideals of this Indian
          treasure, in the lineage of the Bihar School of Yoga.
        </p>
      </section>

      <section className="section-tight wrap feature feature-reverse">
        <div className="feature-media">
          <Img k="yoga" alt="Water drops, a meditating hand in mudra, and a lotus" sizes="(min-width: 900px) 58vw, 100vw" />
        </div>
        <div className="feature-copy">
          <h2>Classes</h2>
          <ul className="treatments">
            {yoga.treatments.map((t) => (
              <li key={t.name}>
                <h3>{t.name}</h3>
                <p className="duration">{t.duration}</p>
                <p>{t.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <figure className="plate wrap">
        <Img k="heal-slide-2" alt="A deer on a hillside above valley mist" sizes="(min-width: 1360px) 1360px, 100vw" />
      </figure>

      <Closing>Arrange a class or a private session.</Closing>
    </>
  )
}
