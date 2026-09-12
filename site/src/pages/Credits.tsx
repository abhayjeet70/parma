import { Closing } from '../components'
import credits from '../data/credits.json'

export default function Credits() {
  return (
    <>
      <section className="wrap credits-page">
        <h1>Photography credits</h1>
        <p className="statement">Where the pictures come from.</p>
        <p>
          Photographs of Parma itself — the Inn, the spa, the team and the grounds — belong to Parma in Little Washington. Pictures of the
          surrounding county and of general spa settings come from Wikimedia Commons under the licences listed below.
        </p>
        <ul className="credit-list">
          {credits.map((c) => (
            <li key={c.slug}>
              <h2>{c.slug.replace(/-/g, ' ')}</h2>
              <p>
                {c.author ? `${c.author} · ` : ''}
                {c.license}
                <br />
                <a className="text-link" href={c.url} target="_blank" rel="noopener noreferrer">
                  View the original on Wikimedia Commons
                </a>
              </p>
            </li>
          ))}
        </ul>
      </section>
      <Closing />
    </>
  )
}
