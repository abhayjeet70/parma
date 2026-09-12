import { useState, type FormEvent } from 'react'
import { interests, site } from '../data/content'

const WHATSAPP_NUMBER = '15409878588'

// Country dialling codes, most likely first.
const codes = ['+1', '+44', '+91', '+61', '+971', '+33', '+49', '+39', '+34', '+81', '+65', '+86']

const today = new Date().toISOString().slice(0, 10)

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [arrival, setArrival] = useState('')

  // The whole inquiry goes as one WhatsApp message. No backend, no keys.
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const get = (k: string) => String(f.get(k) ?? '').trim()
    const dates = [get('arrival'), get('departure')].filter(Boolean).join(' to ')
    const message = [
      'New inquiry from parmainlittlewashington.com',
      '',
      `Name: ${get('name')}`,
      `Email: ${get('email')}`,
      `Phone: ${get('code')} ${get('phone')}`,
      dates && `Preferred dates: ${dates}`,
      `Interested in: ${get('interest')}`,
      get('message') && `Message: ${get('message')}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener')
    setSent(true)
  }

  return (
    <section className="contact wrap">
      <div className="contact-copy">
        <h1>Reserve and contact</h1>
        <p className="statement">Arrive when the mountains are quietest.</p>
        <address>
          <strong>{site.name}</strong>
          <br />
          {site.address[0]}
          <br />
          {site.address[1]}
        </address>
        <p>
          <a className="text-link" href={site.phoneHref}>
            {site.phone}
          </a>
          <br />
          <a className="text-link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
        <p className="fine">{site.disclaimer}</p>
      </div>

      <form className="form" onSubmit={submit}>
        <h2>Send an inquiry</h2>

        <div className="form-row">
          <label>
            Name
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
        </div>

        <div className="form-row">
          <div className="field">
            <label htmlFor="phone">Mobile number</label>
            <div className="phone-field">
              <select name="code" aria-label="Country code" defaultValue="+1">
                {codes.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                required
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="10-digit number"
                title="Enter a 10-digit mobile number"
              />
            </div>
          </div>
          <label>
            I am interested in
            <select name="interest">
              {interests.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-row">
          <label>
            Arrival <span className="optional">(optional)</span>
            <input name="arrival" type="date" min={today} value={arrival} onChange={(e) => setArrival(e.target.value)} />
          </label>
          <label>
            Departure <span className="optional">(optional)</span>
            <input name="departure" type="date" min={arrival || today} />
          </label>
        </div>

        <label>
          Message <span className="optional">(optional)</span>
          <textarea name="message" rows={4} />
        </label>

        <button className="button" type="submit">
          Send on WhatsApp
        </button>

        <p className="form-status" role="status">
          {sent && 'WhatsApp should now open with your inquiry ready to send.'}
        </p>
        <p className="fine">
          Prefer email? Write to{' '}
          <a className="text-link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </form>
    </section>
  )
}
