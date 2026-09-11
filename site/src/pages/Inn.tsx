import { Closing, Img, PageHero } from '../components'
import { rooms } from '../data/content'

export default function Inn() {
  return (
    <>
      <PageHero
        image="hero18"
        alt="Parma Inn’s stone façade and forecourt at twilight"
        title="Parma Inn"
        lead="Old-world antiques. Contemporary ease. An hour from the city."
      />

      <section className="section wrap split">
        <p className="statement split-wide">
          Parma is furnished in tones of beige and brown. Nancy Corzine and Baker pieces sit beside rich fabrics, velvet brocades, shimmering silk,
          and sterling silver.
        </p>
        <p className="split-narrow">Every room is composed for the discerning traveler.</p>
      </section>

      {rooms.map((r) => (
        <section key={r.id} id={r.id} className="room" aria-labelledby={`${r.id}-title`}>
          <div className="wrap room-head">
            <p className="kicker">{r.kind}</p>
            <h2 id={`${r.id}-title`}>{r.name}</h2>
            <p>{r.copy}</p>
          </div>
          <ul className="strip" aria-label={`${r.name} photographs`} tabIndex={0}>
            {r.images.map((k, i) => (
              <li key={k}>
                <Img k={k} alt={`${r.name}, photograph ${i + 1} of ${r.images.length}`} sizes="(min-width: 900px) 62vw, 88vw" />
              </li>
            ))}
          </ul>
        </section>
      ))}

      <Closing>Reserve a room at Parma Inn.</Closing>
    </>
  )
}
