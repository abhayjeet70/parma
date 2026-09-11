import { useState, type FormEvent } from 'react'
import { interests, site } from '../data/content'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // Inquiry only (as on the source site): compose an email; no backend, no secrets.
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const get = (k: string) => String(f.get(k) ?? '').trim()
    const body = [
      `Name: ${get('name')}`,
      `Email: ${get('email')}`,
      `Phone: ${get('phone')}`,
      `Preferred dates: ${get('dates')}`,
      `Interested in: ${get('interest')}`,
      '',
      get('message'),
    ].join('\n')
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Inquiry: ${get('interest')}`)}&body=${encodeURIComponent(body)}`
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
          <label>
            Phone <span className="optional">(optional)</span>
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label>
            Preferred dates <span className="optional">(optional)</span>
            <input name="dates" placeholder="Arrival to departure" />
          </label>
        </div>
        <label>
          I am interested in
          <select name="interest">
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </label>
        <label>
          Message <span className="optional">(optional)</span>
          <textarea name="message" rows={4} />
        </label>
        <button className="button" type="submit">
          Send inquiry
        </button>
        <p className="form-status" role="status">
          {sent && `Your email app should now open with the inquiry ready to send. If it doesn’t, write to ${site.email}.`}
        </p>
      </form>
    </section>
  )
}
