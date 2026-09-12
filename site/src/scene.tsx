import { useEffect, useRef, type CSSProperties } from 'react'

/**
 * Hand-drawn meditation landscape used as a section background.
 *
 * Every path carries pathLength="1", so one CSS rule (dashoffset 1 -> 0) draws any
 * path regardless of its real length. An IntersectionObserver flips data-draw once
 * the section is ~25% visible, and disconnects, so it draws once per page load.
 */
export function MeditationScene() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      el.dataset.draw = 'done' // completed artwork, no drawing
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

  const at = (delay: number, dur: number): CSSProperties => ({ '--d': `${delay}s`, '--dur': `${dur}s` }) as CSSProperties

  return (
    <div className="scene" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid meet" fill="none">
        {/* horizon and hills */}
        <path
          className="scene-mountain-back"
          style={at(0, 1.9)}
          pathLength={1}
          d="M40 352c118-74 196-104 274-62 78 42 130 66 206 26 76-40 138-92 220-58 82 34 136 84 214 62 52-15 88-34 206-44"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="scene-mountain-front"
          style={at(0.35, 2)}
          pathLength={1}
          d="M0 436c142-58 236-8 338-30 102-22 168-96 268-72 100 24 150 104 258 92 108-12 196-64 336-40"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* river */}
        <path
          className="scene-river"
          style={at(0.9, 2.1)}
          pathLength={1}
          d="M108 566c122-34 204 6 300-26 96-32 148-70 248-58 100 12 168 62 268 44 62-11 106-28 168-56"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="scene-river-2"
          style={at(1.15, 1.7)}
          pathLength={1}
          d="M232 606c108-26 178 2 268-22 90-24 150-52 238-44"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* sacred geometry around the figure */}
        <path
          className="scene-geometry"
          style={at(1.9, 1.6)}
          pathLength={1}
          d="M600 356a112 112 0 1 1-0.1 0"
          strokeLinecap="round"
        />
        <path
          className="scene-geometry-2"
          style={at(2.15, 1.4)}
          pathLength={1}
          d="M528 470a92 92 0 0 1 144-108"
          strokeLinecap="round"
        />
        {/* meditating figure, small and set into the landscape */}
        <path
          className="scene-body"
          style={at(1.45, 1.5)}
          pathLength={1}
          d="M600 462c-26 0-47-7-53-16 6-28 22-48 53-48s47 20 53 48c-6 9-27 16-53 16z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="scene-arms"
          style={at(1.65, 1.2)}
          pathLength={1}
          d="M566 432c10 14 24 20 34 20s24-6 34-20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path className="scene-head" style={at(1.8, 1)} pathLength={1} d="M600 374a13 13 0 1 1-0.1 0" strokeLinecap="round" />
        {/* sun */}
        <path className="scene-sun" style={at(2.3, 1.3)} pathLength={1} d="M902 186a62 62 0 1 1-0.1 0" strokeLinecap="round" />
        {/* botanicals */}
        <path
          className="scene-botanical-1"
          style={at(2.5, 1.4)}
          pathLength={1}
          d="M214 556c32-44 44-84 38-124m0 0c-26 10-36 32-32 56m32-56c24 12 32 34 28 58"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="scene-botanical-2"
          style={at(2.7, 1.4)}
          pathLength={1}
          d="M1006 574c-26-36-36-68-31-100m0 0c21 8 29 26 26 46m-26-46c-19 10-26 27-23 47"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
