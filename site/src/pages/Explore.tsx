import { Closing, Img, Mosaic, PageHero } from '../components'
import { experiences } from '../data/content'

export default function Explore() {
  return (
    <>
      <PageHero
        image="hero14"
        alt="A lake among autumn vineyards and forest in Rappahannock County"
        title="Beyond the gates"
        lead="Things to do in Rappahannock."
      />

      <Mosaic
        items={[
          { k: 'hero17', alt: 'Vineyard and estate beneath the Blue Ridge at dusk' },
          { k: 'heal-slide-5', alt: 'Autumn trees along a ridge' },
          { k: 'hero10', alt: 'Autumn colour across the Rappahannock hills' },
        ]}
      />

      <section className="section wrap explore">
        <ol className="explore-list">
          {experiences.map((e) => (
            <li key={e.name}>
              <h2>{e.name}</h2>
              <p>{e.text}</p>
            </li>
          ))}
        </ol>
        <figure className="explore-panels" aria-hidden="true">
          <Img k="wineries" alt="" sizes="(min-width: 900px) 18vw, 33vw" />
          <Img k="pubs" alt="" sizes="(min-width: 900px) 18vw, 33vw" />
          <Img k="golf" alt="" sizes="(min-width: 900px) 18vw, 33vw" />
        </figure>
      </section>

      <figure className="plate wrap">
        <Img k="heal-slide-1" alt="Storm clouds breaking over mountain peaks at sunset" sizes="(min-width: 1360px) 1360px, 100vw" />
      </figure>

      <Closing />
    </>
  )
}
