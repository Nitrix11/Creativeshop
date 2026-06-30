import { ReactNode, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle, Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react'
import QuoteModal from './QuoteModal'

const WHATSAPP = '263774411867'
const WHATSAPP_DISPLAY = '077 441 1867'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

const LOGO = '/logo.jpg'

function Particles() {
  const items = Array.from({ length: 18 })
  return (
    <div className="particles" aria-hidden>
      {items.map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${(i * 37) % 100}%`,
            animationDuration: `${14 + ((i * 3) % 16)}s`,
            animationDelay: `-${(i * 1.7) % 14}s`,
            width: `${2 + (i % 4)}px`,
            height: `${2 + (i % 4)}px`,
          }}
        />
      ))}
    </div>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [quoteOpen, setQuoteOpen] = useState(false)
  const location = useLocation()

  return (
    <div style={{ minHeight: '100vh' }}>
      <div className="aurora-bg" />
      <Particles />

      {/* NAV */}
      <header className="nav-header">
        <div className="nav-inner">
          <div className="nav-bar glass-strong">
            <Link to="/" className="nav-logo">
              <img src={LOGO} alt="Creative Wing" />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px' }}>
                <span className="text-gradient" style={{ fontWeight: 600 }}>Creative Wing</span>
                <span style={{ marginLeft: 6, fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--muted)' }}>Investments</span>
              </span>
            </Link>
            <nav className="nav-links">
              {nav.map(n => (
                <Link key={n.to} to={n.to} className={`nav-link ${location.pathname === n.to ? 'active' : ''}`}>{n.label}</Link>
              ))}
              <button className="btn-primary" style={{ marginLeft: 8 }} onClick={() => setQuoteOpen(true)}>Get Quote</button>
            </nav>
            <button className="nav-mobile-toggle" onClick={() => setOpen(!open)}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          {open && (
            <div className="nav-mobile-menu glass-strong">
              {nav.map(n => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
                  style={{ display: 'block', padding: '10px 12px', borderRadius: 8, color: 'var(--foreground)', fontSize: 14 }}>
                  {n.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      <main style={{ position: 'relative', zIndex: 1, paddingTop: 96 }}>{children}</main>

      {/* FOOTER */}
      <footer className="footer" style={{ position: 'relative', zIndex: 1 }}>
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src={LOGO} alt="" style={{ height: 40, width: 40, borderRadius: 8, objectFit: 'cover' }} />
              <span className="text-gradient" style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600 }}>Creative Wing</span>
            </div>
            <p style={{ marginTop: 16, fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>Premium vehicles & custom sportswear. Crafted for those who demand excellence.</p>
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <a href="#" className="glass" style={{ width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}><Instagram size={15} /></a>
              <a href="#" className="glass" style={{ width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}><Facebook size={15} /></a>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--primary)' }}>Navigate</h4>
            <ul style={{ marginTop: 16, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {nav.map(n => (
                <li key={n.to}><Link to={n.to} style={{ fontSize: 13, color: 'var(--muted)' }}>{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--primary)' }}>Contact</h4>
            <ul style={{ marginTop: 16, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--muted)' }}><Phone size={13} /> {WHATSAPP_DISPLAY}</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--muted)' }}><Mail size={13} /> hello@creativewing.co</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--muted)' }}><MapPin size={13} /> Harare, Zimbabwe</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--primary)' }}>WhatsApp Us</h4>
            <p style={{ marginTop: 16, fontSize: 13, color: 'var(--muted)' }}>Chat instantly with our concierge.</p>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="btn-primary glow-primary" style={{ marginTop: 16 }}>
              <MessageCircle size={15} /> Chat now
            </a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', padding: '20px', fontSize: 12, color: 'var(--muted)' }}>
          © {new Date().getFullYear()} Creative Wing Investments. All rights reserved.
        </div>
      </footer>

      {/* WhatsApp float */}
      <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="wa-float">
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>

      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
    </div>
  )
}
