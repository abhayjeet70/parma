import { Closing, Img, Mosaic, PageHero, TeamCollage } from '../components'
import { team, teamMore, visionPoints } from '../data/content'

export default function About() {
  const founder = team[0]
  return (
    <>
      <PageHero
        image="hero19"
        alt="The house at Parma at dusk, lit from within"
        title="The sanctuary"
        lead="A place that blends modern science with ancient therapies."
      />

      <section className="section wrap split">
        <p className="statement split-wide">
          First there was a dream: to create a sanctuary of natural beauty and tranquility, and an experience that does not merely rejuvenate for a
          moment, but creates a shift toward lasting wellness.
        </p>
        <ul className="rule-list split-narrow">
          {visionPoints.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </section>

      <Mosaic
        items={[
          { k: 'heal-slide-4', alt: 'A rainbow over green hills' },
          { k: 'red-room1', alt: 'A velvet chair beside the stone wall in the Red Room' },
          { k: 'lounge4', alt: 'Flowers and fruit on a table in the Lounge' },
        ]}
      />

      <section className="section wrap columns">
        <article>
          <h2>The Parma experience</h2>
          <p>
            Time waits for you here. Spa therapies unfold as mountains, clouds, and sun envelope you with lasting warmth. Escape the city. Revel in
            the views. Relax in the Panther Suite or the Tapestry Room. Explore wild herbs, mineral-rich clays, and local elements in restorative
            concierge spa treatments.
          </p>
        </article>
        <article>
          <h2>The founder</h2>
          <p>
            Dr. Sadhna Nicky Singh founded Parma Center and Parma in Little Washington with a single aim: that every guest feel at the top of the
            world physically, spiritually, and aesthetically, on a foundation of good health. The Tysons Corner concierge med spa has been
            recognized by DC Luxury, Washingtonian, and Capital File.
          </p>
        </article>
        <article>
          <h2>Facilities</h2>
          <p>
            Immerse yourself in well-being with consults that include Dr. Thara, of Deepak Chopra’s center in New York, in surroundings still
            untouched by modernization.
          </p>
        </article>
      </section>

      <figure className="plate wrap">
        <Img k="vision" alt="Lamplight, a warm-oil therapy and a facial treatment at Parma" sizes="(min-width: 1360px) 1360px, 100vw" />
      </figure>

      <section className="section wrap" id="team">
        <div className="section-head">
          <h2>An international team, chosen with care.</h2>
          <p>
            Spa technicians know every product and benefit. Licensed physicians blend conventional medicine with alternative therapies so the
            complete individual is seen.
          </p>
        </div>
        <TeamCollage />
        <div className="founder-note">
          <h3>{founder.name}</h3>
          <p>{founder.bio}</p>
        </div>
        <p className="team-more">Also with us: {teamMore.join(', ')}.</p>
      </section>

      <Closing />
    </>
  )
}
