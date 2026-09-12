import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import { Img } from './components'
import { experiences, rooms, spaCategories, type ImageKey } from './data/content'

/** Cursor-tracked spotlight on a grid of cards; one listener per grid, none on scroll. */
function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia('(hover: none)').matches) return
    let raf = 0
    const onMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('.card')
      if (!card) return
      const r = card.getBoundingClientRect()
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        card.style.setProperty('--px', `${((e.clientX - r.left) / r.width) * 100}%`)
        card.style.setProperty('--py', `${((e.clientY - r.top) / r.height) * 100}%`)
      })
    }
    el.addEventListener('pointermove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', onMove)
    }
  }, [])
  return ref
}

type CardProps = { image: ImageKey; label: string; title: string; text: string; i: number }

function Card({ image, label, title, text, i }: CardProps) {
  return (
    <article className="card" style={{ '--i': i } as CSSProperties}>
      <div className="card-media">
        <Img k={image} alt={title} sizes="(min-width: 900px) 33vw, 92vw" />
      </div>
      <div className="card-body">
        <p className="card-label">{label}</p>
        <h3>{title}</h3>
        <p className="card-text">{text}</p>
      </div>
    </article>
  )
}

export function ExperienceCards() {
  const ref = useSpotlight<HTMLDivElement>()
  return (
    <div className="cards" ref={ref}>
      {experiences.map((e, i) => (
        <Card key={e.name} image={e.image} label={e.label} title={e.name} text={e.text} i={i} />
      ))}
    </div>
  )
}

export function SpaCards() {
  const ref = useSpotlight<HTMLDivElement>()
  return (
    <div className="cards cards-spa" ref={ref}>
      {spaCategories.map((c, i) => (
        <Card
          key={c.id}
          image={c.image}
          label={`${c.treatments.length} treatments`}
          title={c.title}
          text={c.intro ?? c.treatments.map((t) => t.name).slice(0, 3).join(' · ')}
          i={i}
        />
      ))}
    </div>
  )
}

/** Figures counted from the site's own content, never invented. */
const glance: { value: string; label: string; note: string }[] = [
  { value: String(rooms.length), label: 'Rooms and suites', note: 'Tapestry, Red Room, Panther, Lounge' },
  { value: String(spaCategories.length), label: 'Spa menus', note: spaCategories.map((c) => c.name).join(' · ') },
  { value: String(spaCategories.reduce((n, c) => n + c.treatments.length, 0)), label: 'Treatments', note: 'From 30 minutes to 3 hr 20 min' },
  { value: '1769', label: 'Town founded', note: 'Washington, Virginia' },
]

export function Glance({ children }: { children?: ReactNode }) {
  const ref = useSpotlight<HTMLDivElement>()
  return (
    <section className="section wrap glance-section">
      {children}
      <div className="glance" ref={ref}>
        {glance.map((g, i) => (
          <article className="card glance-card" key={g.label} style={{ '--i': i } as CSSProperties}>
            <p className="glance-value">{g.value}</p>
            <p className="glance-label">{g.label}</p>
            <p className="glance-note">{g.note}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
