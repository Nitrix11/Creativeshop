import { X } from 'lucide-react'
import { useState } from 'react'

export default function QuoteModal({ onClose, title = 'Request a Quote' }: { onClose: () => void; title?: string }) {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value
    const interest = (form.elements.namedItem('interest') as HTMLSelectElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value
    const text = encodeURIComponent(`Hi Creative Wing! My name is ${name}.\nInterest: ${interest}\nPhone: ${phone}\nMessage: ${message}`)
    window.open(`https://wa.me/263774411867?text=${text}`, '_blank')
    setSent(true)
  }

  return (
    <div className="dialog-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="dialog-box glass-strong quote-modal">
        <button className="dialog-close" onClick={onClose}><X size={16} /></button>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 20 }} className="text-gradient">{title}</h2>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <p style={{ color: 'var(--muted)' }}>Opening WhatsApp... We'll be in touch shortly.</p>
            <button className="btn-primary" style={{ marginTop: 24 }} onClick={onClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input name="name" required placeholder="Tendai Moyo" />
            </div>
            <div className="form-group">
              <label>Phone / WhatsApp</label>
              <input name="phone" required placeholder="+263 7XX XXX XXX" />
            </div>
            <div className="form-group">
              <label>I'm interested in</label>
              <select name="interest">
                <option>Vehicles</option>
                <option>Custom Sportswear / Kits</option>
                <option>Both</option>
              </select>
            </div>
            <div className="form-group">
              <label>Tell us more (optional)</label>
              <textarea name="message" placeholder="Any specific requirements..." />
            </div>
            <button type="submit" className="btn-primary glow-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send via WhatsApp
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
