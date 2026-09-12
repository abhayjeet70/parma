import { useEffect, useRef, type CSSProperties } from 'react'

/**
 * Soft landscape used as a section background: layered hills, a winding river,
 * a sun ring and botanical sprays in the corners.
 *
 * Every path carries pathLength="1", so one CSS rule (dashoffset 1 -> 0) draws it
 * regardless of real length; filled shapes fade their wash in behind the line.
 * An IntersectionObserver flips data-draw once, so it draws once per page load.
 */

type Pt = [number, number]

// Point and tangent on a quadratic curve, used to hang leaves along a branch.
const quad = (p0: Pt, c: Pt, p1: Pt, t: number): { p: Pt; a: number } => {
  const u = 1 - t
  const p: Pt = [u * u * p0[0] + 2 * u * t * c[0] + t * t * p1[0], u * u * p0[1] + 2 * u * t * c[1] + t * t * p1[1]]
  const d: Pt = [2 * u * (c[0] - p0[0]) + 2 * t * (p1[0] - c[0]), 2 * u * (c[1] - p0[1]) + 2 * t * (p1[1] - c[1])]
  return { p, a: Math.atan2(d[1], d[0]) }
}

const leaf = (x: number, y: number, a: number, len: number) => {
  const dx = Math.cos(a) * len
  const dy = Math.sin(a) * len
  const nx = -Math.sin(a) * len * 0.32
  const ny = Math.cos(a) * len * 0.32
  const f = (n: number) => n.toFixed(1)
  return (
    `M${f(x)} ${f(y)}` +
    `C${f(x + nx + dx * 0.2)} ${f(y + ny + dy * 0.2)} ${f(x + nx + dx * 0.72)} ${f(y + ny + dy * 0.72)} ${f(x + dx)} ${f(y + dy)}` +
    `C${f(x - nx + dx * 0.72)} ${f(y - ny + dy * 0.72)} ${f(x - nx + dx * 0.2)} ${f(y - ny + dy * 0.2)} ${f(x)} ${f(y)}Z`
  )
}

const stem = (p0: Pt, c: Pt, p1: Pt) => `M${p0[0]} ${p0[1]}Q${c[0]} ${c[1]} ${p1[0]} ${p1[1]}`

const leaves = (p0: Pt, c: Pt, p1: Pt, count: number, size: number) =>
  Array.from({ length: count }, (_, i) => {
    const t = 0.16 + (i / (count - 1)) * 0.82
    const { p, a } = quad(p0, c, p1, t)
    const tilt = (i % 2 ? 1 : -1) * 0.72
    const grow = 1 - Math.abs(t - 0.5) * 0.5
    return leaf(p[0], p[1], a + tilt, size * grow)
  }).join('')

const branches: { id: string; p0: Pt; c: Pt; p1: Pt; n: number; size: number; delay: number }[] = [
  { id: 'tl', p0: [-10, 40], c: [150, 60], p1: [330, 150], n: 9, size: 34, delay: 1.9 },
  { id: 'bl', p0: [-10, 560], c: [110, 470], p1: [230, 380], n: 8, size: 30, delay: 2.15 },
  { id: 'br', p0: [1210, 520], c: [1080, 470], p1: [960, 560], n: 8, size: 30, delay: 2.35 },
]

export function MeditationScene() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      el.dataset.draw = 'done'
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        el.dataset.draw = 'in'
        io.disconnect()
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const at = (delay: number, dur: number): CSSProperties =>
    ({ '--d': `${delay}s`, '--dur': `${dur}s`, '--fd': `${delay + dur * 0.6}s` }) as CSSProperties

  return (
    <div className="scene" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid slice" fill="none">
        <path className="scene-sun" style={at(1.5, 1.4)} pathLength={1} d="M1040 232a70 70 0 1 0-140 0 70 70 0 1 0 140 0Z" />

        <path
          className="scene-hill scene-hill-back is-filled"
          style={at(0, 2.2)}
          pathLength={1}
          d="M-400 380c116-70 196-100 272-62 76 38 122 26 190-30 68-56 132-56 208 6 76 62 142 68 216 18 74-50 152-50 234 24H1700V760H-400z"
        />
        <path
          className="scene-hill scene-hill-mid is-filled"
          style={at(0.4, 2.2)}
          pathLength={1}
          d="M-400 452c132-58 214-18 292 10 78 28 142-8 214-56 72-48 142-32 222 26 80 58 172 64 268 12 68-36 206-38 324 6H1700V760H-400z"
        />

        <path className="scene-water-1" style={at(1.05, 1.5)} pathLength={1} d="M120 502c46-12 92-12 138 0" strokeLinecap="round" />
        <path className="scene-water-2" style={at(1.2, 1.5)} pathLength={1} d="M878 486c50-13 100-13 150 0" strokeLinecap="round" />
        <path className="scene-water-3" style={at(1.35, 1.5)} pathLength={1} d="M932 520c38-10 76-10 114 0" strokeLinecap="round" />

        <path
          className="scene-river"
          style={at(0.85, 2.4)}
          pathLength={1}
          d="M486 620c34-58 108-74 148-108 40-34 18-64-22-84-40-20-44-48-6-66 26-12 54-16 86-12"
          strokeLinecap="round"
        />
        <path
          className="scene-river-2"
          style={at(1, 2.4)}
          pathLength={1}
          d="M566 620c30-46 96-62 130-92 34-30 14-54-20-72-34-18-36-40-4-54 20-9 42-13 66-11"
          strokeLinecap="round"
        />

        {branches.map((b) => (
          <g key={b.id} className={`scene-branch scene-branch-${b.id}`}>
            <path className="scene-stem" style={at(b.delay, 1.5)} pathLength={1} d={stem(b.p0, b.c, b.p1)} strokeLinecap="round" />
            <path className="scene-leaves is-filled" style={at(b.delay + 0.25, 1.6)} pathLength={1} d={leaves(b.p0, b.c, b.p1, b.n, b.size)} />
          </g>
        ))}
      </svg>
    </div>
  )
}
