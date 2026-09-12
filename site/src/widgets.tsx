import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { experiences, rooms, site, spaCategories } from './data/content'

const WHATSAPP = 'https://wa.me/15409878588'

export function WhatsAppButton() {
  return (
    <a className="fab fab-wa" href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Message Parma on WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.25 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35.99 2.51c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z"
        />
      </svg>
    </a>
  )
}

/** Scroll progress bar. Uses the native scroll timeline where supported; no JS scroll listener. */
export function ScrollProgress() {
  return <div className="scroll-progress" aria-hidden="true" />
}

type Msg = { from: 'bot' | 'you'; text: string; to?: string }

const topics: { label: string; match: RegExp; reply: () => Msg[] }[] = [
  {
    label: 'Rooms at the Inn',
    match: /room|inn|stay|suite|night|book a room/i,
    reply: () => [
      { from: 'bot', text: `The Inn has ${rooms.map((r) => r.name).join(', ')}.` },
      { from: 'bot', text: 'Rates are not published, so send an inquiry and the team will reply with availability.', to: '/inn' },
    ],
  },
  {
    label: 'Spa treatments',
    match: /spa|treatment|massage|ayurved|facial|yoga|therap/i,
    reply: () => [
      { from: 'bot', text: `The spa menu covers ${spaCategories.map((c) => c.name).join(', ')} — ${spaCategories.reduce((n, c) => n + c.treatments.length, 0)} treatments in all.` },
      { from: 'bot', text: 'Each one lists its duration on the Spa page.', to: '/spa' },
    ],
  },
  {
    label: 'Healthcare',
    match: /health|doctor|physician|consult|second opinion|medical/i,
    reply: () => [
      { from: 'bot', text: 'Parma Healthcare in Tysons Corner offers integrative consultations, second opinions and coordination with leading medical centres.' },
      { from: 'bot', text: 'The team is headed by Dr. Thara Kodandaramachandra.', to: '/healthcare' },
    ],
  },
  {
    label: 'Meditation',
    match: /meditat|sushila|shanti|pranayama|class/i,
    reply: () => [
      { from: 'bot', text: 'The Sushila Shanti Meditation Centre teaches asana, pranayama and meditation in the Bihar School of Yoga lineage.', to: '/meditation' },
    ],
  },
  {
    label: 'Where are you?',
    match: /where|address|direction|location|map|drive/i,
    reply: () => [
      { from: 'bot', text: `${site.address.join(', ')} — in Rappahannock County, about an hour from Washington, D.C.` },
      { from: 'bot', text: 'The spa and healthcare practice are at Tysons Corner.', to: '/explore' },
    ],
  },
  {
    label: 'Things to do nearby',
    match: /do nearby|explore|winery|wine|golf|luray|restaurant|dining|eat/i,
    reply: () => [{ from: 'bot', text: `Nearby: ${experiences.map((e) => e.name).join(', ')}.`, to: '/explore' }],
  },
  {
    label: 'Talk to someone',
    match: /contact|call|phone|email|human|someone|reserve|booking|inquiry/i,
    reply: () => [{ from: 'bot', text: `Call ${site.phone} or write to ${site.email}. You can also message us on WhatsApp.`, to: '/contact' }],
  },
]

const GREETING: Msg = { from: 'bot', text: 'Hello. Ask about the Inn, the spa, healthcare, meditation or how to reach us.' }

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([GREETING])
  const [text, setText] = useState('')
  const logRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight
  }, [msgs, open])

  useEffect(() => {
    if (!open) return
    panelRef.current?.querySelector<HTMLInputElement>('input')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function answer(q: string) {
    const hit = topics.find((t) => t.match.test(q))
    const replies: Msg[] = hit
      ? hit.reply()
      : [{ from: 'bot', text: `I can help with the Inn, the spa, healthcare, meditation and directions. For anything else, call ${site.phone} or write to ${site.email}.`, to: '/contact' }]
    setMsgs((m) => [...m, { from: 'you', text: q }, ...replies])
  }

  return (
    <>
      <button
        ref={toggleRef}
        className="fab fab-chat"
        type="button"
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? 'Close chat' : 'Ask Parma'}
        title={open ? 'Close chat' : 'Ask Parma'}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.7 8.7 0 0 1-3.6-.78L3 21l1.9-5.2A8.5 8.5 0 1 1 21 11.5Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <circle cx="8.7" cy="11.6" r="1.05" fill="currentColor" />
            <circle cx="12.5" cy="11.6" r="1.05" fill="currentColor" />
            <circle cx="16.3" cy="11.6" r="1.05" fill="currentColor" />
          </svg>
        )}
      </button>

      <div className="chat" id="chat-panel" ref={panelRef} hidden={!open} role="dialog" aria-label="Ask Parma">
        <div className="chat-head">
          <p>Ask Parma</p>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close chat">
            ✕
          </button>
        </div>

        <div className="chat-log" ref={logRef}>
          {msgs.map((m, i) => (
            <p key={i} className={`bubble bubble-${m.from}`}>
              {m.text}
              {m.to && (
                <Link className="bubble-link" to={m.to} onClick={() => setOpen(false)}>
                  Open the page
                </Link>
              )}
            </p>
          ))}
        </div>

        <div className="chat-chips">
          {topics.map((t) => (
            <button key={t.label} type="button" onClick={() => answer(t.label)}>
              {t.label}
            </button>
          ))}
        </div>

        <form
          className="chat-form"
          onSubmit={(e) => {
            e.preventDefault()
            const q = text.trim()
            if (!q) return
            answer(q)
            setText('')
          }}
        >
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a question" aria-label="Type a question" />
          <button type="submit">Send</button>
        </form>

        <p className="chat-foot">
          Answers come from this website. For anything else,{' '}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            message us on WhatsApp
          </a>
          .
        </p>
      </div>
    </>
  )
}
