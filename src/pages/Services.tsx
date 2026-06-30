import { useState } from 'react'
import { ArrowRight, Car, Shirt, Shield, Truck, Award, Palette, Zap, Users } from 'lucide-react'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import QuoteModal from '../components/QuoteModal'

export default function Services() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [quoteTitle, setQuoteTitle] = useState('Request a Quote')

  const openQuote = (title?: string) => { setQuoteTitle(title || 'Request a Quote'); setQuoteOpen(true) }

  return (
    <Layout>
      <section className="container" style={{ paddingTop: 32 }}>
        <Reveal>
          <p className="eyebrow">What we offer</p>
          <h1 style={{ fontSize: '4.5rem', marginTop: 12 }}>Services built for <span className="text-gradient">excellence</span></h1>
          <p style={{ marginTop: 16, color: 'var(--muted)', maxWidth: 540 }}>Two worlds, one standard — premium imported vehicles and championship-grade custom sportswear, delivered with concierge precision.</p>
        </Reveal>
      </section>

      {/* VEHICLES */}
      <section className="container" style={{ marginTop: 80 }}>
        <div className="hero-grid">
          <Reveal>
            <div className="glass-strong" style={{ borderRadius: 24, padding: 6 }}>
              <img src="/IMG-20260628-WA0010.jpg" alt="Vehicles" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 18 }} />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <div style={{ width: 48, height: 48, background: 'var(--navy)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Car size={24} color="#ffffff" />
              </div>
              <p className="eyebrow">Service 01</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', marginTop: 8 }}>Premium <span className="text-gradient">Vehicles</span></h2>
              <p style={{ color: 'var(--muted)', marginTop: 16, lineHeight: 1.7 }}>
                Hand-picked imported vehicles sourced from verified dealers across the region. Every car is inspected, documented, and prepared to our exacting standards before it reaches you.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
                {[
                  { Icon: Shield, t: 'Pre-delivery inspection on every vehicle' },
                  { Icon: Truck, t: 'Nationwide delivery & SADC export' },
                  { Icon: Award, t: '6-month mechanical warranty included' },
                  { Icon: Users, t: 'Financing options via banking partners' },
                ].map(({ Icon, t }) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
                    <div className="glass" style={{ width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={14} color="var(--primary)" />
                    </div>
                    {t}
                  </div>
                ))}
              </div>
              <button className="btn-primary glow-primary" style={{ marginTop: 28 }} onClick={() => openQuote('Inquire: Vehicles')}>
                Inquire about vehicles <ArrowRight size={15} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SPORTSWEAR */}
      <section className="container" style={{ marginTop: 96 }}>
        <div className="hero-grid">
          <Reveal delay={100}>
            <div>
              <div style={{ width: 48, height: 48, background: 'var(--navy)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Shirt size={24} color="#ffffff" />
              </div>
              <p className="eyebrow">Service 02</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', marginTop: 8 }}>Custom <span className="text-gradient">Sportswear</span></h2>
              <p style={{ color: 'var(--muted)', marginTop: 16, lineHeight: 1.7 }}>
                From football kits and basketball jerseys to goalkeeper sets — fully bespoke designs with your team's colors, names, numbers, and logos. Championship-grade dri-fit materials.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
                {[
                  { Icon: Palette, t: 'Fully custom design, any colors' },
                  { Icon: Zap, t: 'Fast turnaround — express options available' },
                  { Icon: Shield, t: 'Stitching quality guarantee on all kits' },
                  { Icon: Users, t: 'Team orders from 5 to 500 units' },
                ].map(({ Icon, t }) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14 }}>
                    <div className="glass" style={{ width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={14} color="var(--primary)" />
                    </div>
                    {t}
                  </div>
                ))}
              </div>
              <button className="btn-primary glow-primary" style={{ marginTop: 28 }} onClick={() => openQuote('Inquire: Custom Sportswear')}>
                Order custom kits <ArrowRight size={15} />
              </button>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid-2" style={{ gap: 12 }}>
              {['/IMG-20260628-WA0030.jpg', '/IMG-20260628-WA0033.jpg', '/IMG-20260628-WA0034.jpg', '/IMG-20260628-WA0026.jpg'].map((src, i) => (
                <div key={i} className="glass-strong" style={{ borderRadius: 16, padding: 4 }}>
                  <img src={src} alt="" style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: 12 }} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GOALKEEPER KITS */}
      <section className="container" style={{ marginTop: 80 }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p className="eyebrow">Specialist</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', marginTop: 8 }}>Goalkeeper <span className="text-gradient">Kits</span></h2>
          </div>
        </Reveal>
        <div className="grid-2">
          {[
            { img: '/IMG-20260628-WA0039.jpg', t: 'Red Goalkeeper Set', d: 'Padded keeper top + reinforced trousers. Tournament grade protection.' },
            { img: '/IMG-20260628-WA0040.jpg', t: 'Neon Goalkeeper Set', d: 'High-visibility keeper set with foam chest padding for maximum protection.' },
          ].map((k, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="glass-strong card-tilt" style={{ borderRadius: 24, overflow: 'hidden' }}>
                <img src={k.img} alt={k.t} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
                <div style={{ padding: '20px 24px 24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24 }}>{k.t}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 6, lineHeight: 1.6 }}>{k.d}</p>
                  <button className="btn-ghost" style={{ marginTop: 16, fontSize: 13, padding: '10px 20px' }} onClick={() => openQuote(`Order: ${k.t}`)}>
                    Order now
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container" style={{ marginTop: 96, marginBottom: 96 }}>
        <Reveal>
          <div className="glass-strong shimmer-border" style={{ borderRadius: 32, padding: '64px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <p className="eyebrow">Ready?</p>
            <h2 style={{ fontSize: '3rem', marginTop: 12 }}>Let's build something <span className="text-gradient">remarkable</span></h2>
            <p style={{ maxWidth: 440, margin: '16px auto 0', color: 'var(--muted)' }}>Contact our concierge team and receive a tailored proposal today.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <button className="btn-primary glow-primary" onClick={() => openQuote()}>Get a Quote</button>
              <a href="https://wa.me/263774411867" target="_blank" rel="noreferrer" className="btn-ghost">WhatsApp Us</a>
            </div>
          </div>
        </Reveal>
      </section>

      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} title={quoteTitle} />}
    </Layout>
  )
}
