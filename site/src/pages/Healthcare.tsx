import { Closing, Img, PageHero } from '../components'
import { team } from '../data/content'

const offers = [
  { name: 'Consultation', text: 'Bring a specific medical concern to an integrative team headed by Dr. Thara Kodandaramachandra.' },
  { name: 'Second opinions', text: 'If you need a second opinion, Parma’s physicians will liaise for you.' },
  {
    name: 'Teleconsultation',
    text: 'Teleconsult with experts at Mayo Clinic, Cleveland Clinic, or a leading physician for your case, from the comfort of the Parma setting.',
  },
  { name: 'Coordination', text: 'Travel to the concierge expert, or stay local with the confidence that the country’s top medical minds concur.' },
]

export default function Healthcare() {
  const physicians = team.filter((p) => p.name.startsWith('Dr.'))
  return (
    <>
      <PageHero
        image="hero12"
        alt="Mist lifting over autumn forest in the Blue Ridge"
        title="Parma Healthcare"
        lead="Integrative, concierge medicine. Tysons Corner."
      />

      <section className="section wrap split">
        <p className="statement split-wide">When life arrives at a fork, chart a quieter course.</p>
        <p className="split-narrow">
          Our holistic integrative team helps you leave frenzy behind. Licensed physicians blend conventional medicine with alternative therapies so
          the complete individual is seen.
        </p>
      </section>

      <section className="section-tight wrap feature">
        <div className="feature-media">
          <Img k="health1" alt="A physician holding a patient’s hands" sizes="(min-width: 900px) 58vw, 100vw" />
        </div>
        <dl className="offers feature-copy">
          {offers.map((o) => (
            <div key={o.name}>
              <dt>{o.name}</dt>
              <dd>{o.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <figure className="plate wrap">
        <Img k="hero14" alt="A lake among autumn vineyards and forest" sizes="(min-width: 1360px) 1360px, 100vw" />
      </figure>

      <section className="section wrap">
        <div className="section-head">
          <h2>Physicians</h2>
        </div>
        <ul className="portraits portraits-row">
          {physicians.map((p) => (
            <li key={p.name}>
              <Img k={p.image} alt={p.name} sizes="(min-width: 900px) 22vw, 45vw" />
              <h3 className="portrait-name">{p.name}</h3>
              <p className="portrait-role">{p.role}</p>
            </li>
          ))}
        </ul>
      </section>

      <Closing>Request a consultation.</Closing>
    </>
  )
}
