import { Closing, Img, Mosaic, PageHero } from '../components'
import { ExperienceCards } from '../cards'

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

      <section className="section wrap">
        <div className="section-head">
          <p className="kicker">Beyond the gates</p>
          <h2>Rappahannock, within an easy drive.</h2>
        </div>
        <ExperienceCards />
      </section>

      <figure className="plate wrap">
        <Img k="heal-slide-1" alt="Storm clouds breaking over mountain peaks at sunset" sizes="(min-width: 1360px) 1360px, 100vw" />
      </figure>

      <Closing />
    </>
  )
}
