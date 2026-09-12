import { Fragment, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import images from './data/images.json'
import { nav, pages, site, team, type ImageKey } from './data/content'

type ImgProps = { k: ImageKey; alt: string; sizes?: string; eager?: boolean; className?: string }

/** Local WebP with srcset and reserved dimensions (no layout shift). */
export function Img({ k, alt, sizes = '100vw', eager, className }: ImgProps) {
  const i = images[k]
  const max = i.widths[i.widths.length - 1]
  return (
    <img
      className={className}
      src={`${i.path}-${max}.webp`}
      srcSet={i.widths.map((w) => `${i.path}-${w}.webp ${w}w`).join(', ')}
      sizes={sizes}
      width={i.w}
      height={i.h}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding={eager ? 'sync' : 'async'}
      fetchPriority={eager ? 'high' : undefined}
    />
  )
}

/** Title + description on client-side navigation; scroll to top or to #hash. */
export function RouteEffects() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const meta = pages[pathname] ?? pages['*']
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
    const target = hash && document.getElementById(hash.slice(1))
    if (target) {
      if (target instanceof HTMLDetailsElement) target.open = true
      target.scrollIntoView()
    } else window.scrollTo(0, 0)
  }, [pathname, hash])

  // Scroll reveal: only below-the-fold elements, so prerendered content never flickers.
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const els = [...document.querySelectorAll<HTMLElement>(REVEAL)].filter((el) => el.getBoundingClientRect().top > innerHeight)
    const io = new IntersectionObserver(
      (entries) => {
        entries
          // also reveal anything a fast scroll carried past (now above the viewport)
          .filter((e) => e.isIntersecting || e.boundingClientRect.top < 0)
          .forEach((e, i) => {
            const el = e.target as HTMLElement
            el.style.transitionDelay = `${Math.min(i, 5) * 90}ms`
            el.dataset.reveal = 'in'
            setTimeout(() => (el.style.transitionDelay = ''), 1600) // so hover effects aren't delayed
            io.unobserve(el)
          })
      },
      { rootMargin: '0px 0px 10% 0px' }, // reveals just before entering, so page-bottom content (the footer) never stays hidden
    )
    els.forEach((el) => {
      el.dataset.reveal = ''
      io.observe(el)
    })
    return () => io.disconnect()
  }, [pathname])
  return null
}

const REVEAL = [
  'main :is(h2, h3, .statement, dt, dd, summary, address, figcaption, label, .kicker, .text-link, .button, .portrait-name, .portrait-role, .duration, .world-place, .world-text)',
  'main p:not(.hero *, .page-hero *)',
  'main li:not(:has(img))',
  'main :is(.pair img, .portraits img, .collage img, .strip img, .cat-image, .explore-panels img, .mosaic img, .world-thumb, .team-lead img)',
  '.footer :is(p, address, nav)',
].join(', ')

/** Letters animate in one by one; the parent heading carries the accessible text via aria-label. */
export function SplitText({ text }: { text: string }) {
  let n = 0
  return (
    <span aria-hidden="true">
      {text.split(' ').map((w, wi) => (
        <Fragment key={wi}>
          {wi > 0 && ' '}
          <span className="split-word">
            {[...w].map((c, ci) => (
              <span key={ci} className="split-char" style={{ '--i': n++ } as CSSProperties}>
                {c}
              </span>
            ))}
          </span>
        </Fragment>
      ))}
    </span>
  )
}

const marqueeImages: ImageKey[] = ['lounge2', 'panther3', 'tapestry2', 'spa1', 'red-room1', 'hero19', 'lounge4', 'panther1']
const marqueeRows = [marqueeImages, [...marqueeImages].reverse(), [...marqueeImages.slice(4), ...marqueeImages.slice(0, 4)]]

/** Tilted rows of photographs drifting in alternate directions (background for the closing CTA). */
export function DiagonalMarquee() {
  return (
    <div className="dmarquee" aria-hidden="true">
      <div className="dmarquee-rows">
        {marqueeRows.map((row, ri) => (
          <div key={ri} className="dmarquee-row" data-dir={ri % 2 ? 'right' : 'left'} style={{ '--speed': `${80 + ri * 15}s` } as CSSProperties}>
            {[...row, ...row].map((k, i) => (
              <Img key={i} k={k} alt="" sizes="300px" className="dmarquee-card" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function TeamCollage() {
  return (
    <ul className="collage">
      {team.map((p, i) => (
        <li key={p.name}>
          <Img k={p.image} alt={p.name} sizes={i === 0 ? '(min-width: 900px) 34vw, 100vw' : '(min-width: 900px) 30vw, 50vw'} />
          <p className="collage-cap">
            <span className="portrait-name">{p.name}</span>
            <span className="portrait-role">{p.role}</span>
          </p>
        </li>
      ))}
    </ul>
  )
}

const band = ['A private wellness sanctuary', 'Parma Inn', 'Parma Spa', 'Parma Healthcare', 'Sushila Shanti', 'Little Washington, Virginia']

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...band, ...band].map((t, i) => (
          <span key={i}>
            {t}
            <span className="marquee-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Mosaic({ items }: { items: { k: ImageKey; alt: string }[] }) {
  return (
    <section className="mosaic wrap" aria-label="Photographs">
      {items.map((m, i) => (
        <figure key={m.k}>
          <Img k={m.k} alt={m.alt} sizes={i === 0 ? '(min-width: 900px) 58vw, 100vw' : '(min-width: 900px) 40vw, 50vw'} />
        </figure>
      ))}
    </section>
  )
}

export function Header({ overImage }: { overImage: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open)
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const light = overImage && !scrolled && !open
  return (
    <header className="header" data-light={light || undefined} data-solid={(!overImage || scrolled) && !open ? '' : undefined}>
      <Link className="brand" to="/" aria-label="Parma in Little Washington, home">
        <img src={`/images/brand/${light || open ? 'new-logo-white' : 'new-logo'}.png`} width={349} height={129} alt="" />
        <img className="brand-mark" src="/images/brand/metal_logo.png" width={172} height={328} alt="" />
      </Link>
      <nav className="nav" aria-label="Primary">
        {nav.map((n) => (
          <NavLink key={n.to} to={n.to}>
            {n.label}
          </NavLink>
        ))}
      </nav>
      <Link className="nav-reserve" to="/contact">
        Reserve
      </Link>
      <button
        ref={toggle}
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="menu"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Close' : 'Menu'}
      </button>
      <div className="menu" id="menu" hidden={!open}>
        <nav aria-label="Mobile">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to}>
              {n.label}
            </NavLink>
          ))}
          <NavLink to="/contact">Reserve</NavLink>
        </nav>
        <p className="menu-contact">
          <a href={site.phoneHref}>{site.phone}</a>
          <br />
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <img className="footer-mark" src="/images/brand/metal_logo.png" width={172} height={328} alt="" loading="lazy" />
          <img className="footer-logo" src="/images/brand/new-logo-white.png" width={349} height={129} alt="Parma in Little Washington" loading="lazy" />
        </div>
        <address>
          {site.address.map((l) => (
            <span key={l}>
              {l}
              <br />
            </span>
          ))}
          <a href={site.phoneHref}>{site.phone}</a>
          <br />
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </address>
        <nav aria-label="Footer">
          {nav.map((n) => (
            <Link key={n.to} to={n.to}>
              {n.label}
            </Link>
          ))}
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <div className="wrap footer-base">
        <p>{site.disclaimer}</p>
        <p>© {new Date().getFullYear()} Parma in Little Washington</p>
        <p className="credit">
          Designed and maintained by{' '}
          <a href="https://webnxt.co/" target="_blank" rel="noopener noreferrer">
            WebNxt
          </a>
          {' · '}
          <Link to="/credits">Photography credits</Link>
        </p>
      </div>
    </footer>
  )
}

/** Pointer-driven 3D tilt. Skipped on touch devices and for reduced-motion visitors. */
export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia('(prefers-reduced-motion: reduce), (hover: none)').matches) return
    let raf = 0
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', String(x))
        el.style.setProperty('--my', String(y))
      })
    }
    const reset = () => {
      el.style.setProperty('--mx', '0')
      el.style.setProperty('--my', '0')
    }
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', reset)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', reset)
    }
  }, [])
  return ref
}

export function PageHero({ image, title, lead, alt }: { image: ImageKey; title: string; lead?: string; alt: string }) {
  const ref = useTilt<HTMLElement>()
  return (
    <section className="page-hero is-3d" ref={ref}>
      <Img k={image} alt={alt} eager />
      <div className="wrap page-hero-copy">
        <h1 aria-label={title}>
          <SplitText text={title} />
        </h1>
        {lead && <p>{lead}</p>}
      </div>
    </section>
  )
}

export function Closing({ children = 'Arrive when the mountains are quietest.' }: { children?: ReactNode }) {
  return (
    <section className="closing">
      <DiagonalMarquee />
      <div className="wrap">
        <h2>{children}</h2>
        <p>
          <Link className="button" to="/contact">
            Send an inquiry
          </Link>
          <a className="text-link" href={site.phoneHref}>
            Call {site.phone}
          </a>
        </p>
      </div>
    </section>
  )
}
