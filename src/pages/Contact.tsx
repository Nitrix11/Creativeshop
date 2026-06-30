import { MapPin, Phone, Mail, MessageCircle, Clock, Instagram, Facebook } from 'lucide-react'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value
    const interest = (form.elements.namedItem('interest') as HTMLSelectElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value
    const text = encodeURIComponent(`Hi Creative Wing!\n\nName: ${name}\nPhone: ${phone}\nInterest: ${interest}\n\nMessage: ${message}`)
    window.open(`https://wa.me/263774411867?text=${text}`, '_blank')
    setSent(true)
  }

  return (
    <Layout>
      <section className="container" style={{ paddingTop: 32 }}>
        <Reveal>
          <p className="eyebrow">Get in touch</p>
          <h1 style={{ fontSize: '4.5rem', marginTop: 12 }}>We'd love to <span className="text-gradient">hear from you</span></h1>
          <p style={{ marginTop: 16, color: 'var(--muted)', maxWidth: 540 }}>Reach out via WhatsApp, email, or this form. Our concierge team responds within the hour.</p>
        </Reveal>
      </section>

      <section className="container" style={{ marginTop: 80, marginBottom: 96 }}>
        <div className="hero-grid">
          {/* FORM */}
          <Reveal>
            <div className="glass-strong" style={{ borderRadius: 24, padding: 40 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 24 }}>Send a message</h2>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24 }}>Message sent!</h3>
                  <p style={{ color: 'var(--muted)', marginTop: 8 }}>We've opened WhatsApp for you. Expect a reply shortly.</p>
                  <button className="btn-primary" style={{ marginTop: 24 }} onClick={() => setSent(false)}>Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input name="name" required placeholder="Tendai Moyo" />
                  </div>
                  <div className="form-group">
                    <label>Phone / WhatsApp *</label>
                    <input name="phone" required placeholder="+263 7XX XXX XXX" />
                  </div>
                  <div className="form-group">
                    <label>I'm interested in</label>
                    <select name="interest">
                      <option>Vehicles</option>
                      <option>Custom Sportswear / Kits</option>
                      <option>Both</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" placeholder="Tell us what you're looking for..." style={{ minHeight: 100 }} />
                  </div>
                  <button type="submit" className="btn-primary glow-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <MessageCircle size={16} /> Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* CONTACT INFO */}
          <Reveal delay={100}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { Icon: Phone, label: 'Phone / WhatsApp', value: '077 441 1867', href: 'https://wa.me/263774411867' },
                { Icon: Mail, label: 'Email', value: 'hello@creativewing.co', href: 'mailto:hello@creativewing.co' },
                { Icon: MapPin, label: 'Location', value: 'Harare, Zimbabwe', href: '#' },
                { Icon: Clock, label: 'Hours', value: 'Mon–Sat, 8am – 6pm', href: '#' },
              ].map(({ Icon, label, value, href }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                  className="glass-strong card-tilt" style={{ borderRadius: 20, padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, background: 'var(--navy)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} color="#ffffff" />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
                    <div style={{ fontSize: 15, fontWeight: 500, marginTop: 2 }}>{value}</div>
                  </div>
                </a>
              ))}

              <div className="glass-strong" style={{ borderRadius: 20, padding: '20px 24px' }}>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 12 }}>Follow us</div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <a href="#" className="glass" style={{ width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}><Instagram size={18} /></a>
                  <a href="#" className="glass" style={{ width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}><Facebook size={18} /></a>
                </div>
              </div>

              <a href="https://wa.me/263774411867" target="_blank" rel="noreferrer" className="btn-primary glow-primary" style={{ justifyContent: 'center', marginTop: 8 }}>
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
