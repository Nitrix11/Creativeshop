import { useState } from 'react'
import { Star, X, Play } from 'lucide-react'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import Carousel from '../components/Carousel'
import QuoteModal from '../components/QuoteModal'

type Cat = 'All' | 'Cars' | 'Sportswear'

const items = [
  { img: '/IMG-20260628-WA0010.jpg', t: 'GWM POER Premium', cat: 'Cars' as Cat, d: 'Top-spec blue POER with chrome bullbar, LED matrix lights and off-road tyres.' },
  { img: '/IMG-20260628-WA0005.jpg', t: 'GWM POER — Rear', cat: 'Cars' as Cat, d: 'Sports bar, premium tonneau cover and twin chrome tailgate badge.' },
  { img: '/IMG-20260628-WA0009.jpg', t: 'GWM POER — Side', cat: 'Cars' as Cat, d: 'Side profile showing the sports bar, alloy wheels and chrome side steps.' },
  { img: '/IMG-20260628-WA0003.jpg', t: 'Mercedes-Benz A-Class', cat: 'Cars' as Cat, d: 'Red A-Class hatchback, AMG-line wheels, immaculate showroom condition.' },
  { img: '/IMG-20260628-WA0014.jpg', t: 'Toyota Auris Sport', cat: 'Cars' as Cat, d: 'Sport edition Auris with custom alloys and tinted finish. Delivered in Harare.' },
  { img: '/IMG-20260628-WA0016.jpg', t: 'Toyota Auris — Rear', cat: 'Cars' as Cat, d: 'Clean rear lines, dual exhaust tip and full LED tail lamps.' },
  { img: '/IMG-20260628-WA0015.jpg', t: 'Toyota Auris — Side', cat: 'Cars' as Cat, d: 'Three-quarter side view, mint condition throughout, dark plum finish.' },
  { img: '/IMG-20260628-WA0023_1_.jpg', t: 'Toyota Auris — Front 3/4', cat: 'Cars' as Cat, d: 'Front quarter profile showcasing the sport alloy wheel package.' },
  { img: '/IMG-20260628-WA0020.jpg', t: 'Toyota Hilux GR-S', cat: 'Cars' as Cat, d: 'Latest-generation Hilux in matte grey with full GR-Sport body kit.' },
  { img: '/IMG-20260628-WA0007.jpg', t: 'Toyota Interior — Cockpit', cat: 'Cars' as Cat, d: 'Modern digital cockpit, multi-function steering wheel and premium trim.' },
  { img: '/IMG-20260628-WA0030.jpg', t: 'Shumba Lions Kit', cat: 'Sportswear' as Cat, d: 'Custom sublimated basketball jersey with player name and 3D lion artwork.' },
  { img: '/IMG-20260628-WA0033.jpg', t: 'Blue Striker Set', cat: 'Sportswear' as Cat, d: 'Blue & white striped football jersey + matching shorts. Premium dri-fit weave.' },
  { img: '/IMG-20260628-WA0034.jpg', t: 'Yellow Attack Kit', cat: 'Sportswear' as Cat, d: 'Yellow & black football jersey + matching shorts. Tournament grade material.' },
  { img: '/IMG-20260628-WA0026.jpg', t: 'Royal Blue Kit', cat: 'Sportswear' as Cat, d: 'Royal blue kit with gold/white chevron pattern. Bespoke design.' },
  { img: '/IMG-20260628-WA0039.jpg', t: 'Red Goalkeeper Kit', cat: 'Sportswear' as Cat, d: 'Padded keeper top with reinforced trousers — tournament grade.' },
  { img: '/IMG-20260628-WA0040.jpg', t: 'Neon Goalkeeper Kit', cat: 'Sportswear' as Cat, d: 'High-visibility neon green keeper set with foam-padded chest protection.' },
]

const carouselSlides = items.slice(0, 8).map(it => ({ img: it.img, eyebrow: it.cat, title: it.t }))

export default function Gallery() {
  const [filter, setFilter] = useState<Cat>('All')
  const [active, setActive] = useState<typeof items[0] | null>(null)
  const [quoteOpen, setQuoteOpen] = useState(false)

  const visible = filter === 'All' ? items : items.filter(x => x.cat === filter)

  return (
    <Layout>
      {/* HERO */}
      <section className="container" style={{ paddingTop: 32 }}>
        <Reveal>
          <p className="eyebrow">Gallery</p>
          <h1 style={{ fontSize: '4.5rem', marginTop: 12 }}>Work that speaks <span className="text-gradient">for itself</span></h1>
          <p style={{ marginTop: 16, color: 'var(--muted)', maxWidth: 540 }}>A selection of vehicles delivered and kits crafted. Tap any tile to see the story.</p>
        </Reveal>
      </section>

      {/* CAROUSEL */}
      <section className="container" style={{ marginTop: 48 }}>
        <Reveal>
          <Carousel slides={carouselSlides} aspectRatio="16/7" autoplay={4500} />
        </Reveal>
      </section>

      {/* FILTERS + MASONRY */}
      <section className="container" style={{ marginTop: 64 }}>
        <Reveal>
          <div className="filter-pills">
            {(['All', 'Cars', 'Sportswear'] as Cat[]).map(f => (
              <button key={f} className={`pill ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
        </Reveal>

        <div className="masonry">
          {visible.map((it, k) => (
            <Reveal key={k} delay={k * 40}>
              <button onClick={() => setActive(it)}
                style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', display: 'block', marginBottom: 16 }}>
                <div className="glass-strong card-tilt" style={{ borderRadius: 20, overflow: 'hidden', textAlign: 'left' }}>
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img src={it.img} alt={it.t} style={{ width: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.7s' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', opacity: 0, transition: 'opacity 0.3s' }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '0')}>
                      <div style={{ position: 'absolute', bottom: 0, left: 0, padding: 16 }}>
                        <p className="eyebrow">{it.cat}</p>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, marginTop: 4 }}>{it.t}</h3>
                        <p style={{ fontSize: 12, color: 'var(--primary)', marginTop: 4 }}>View details →</p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VIDEO PLACEHOLDER */}
      <section className="container" style={{ marginTop: 64, marginBottom: 64 }}>
        <Reveal>
          <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', borderRadius: 24 }}>
            <img src="/IMG-20260628-WA0010.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
            <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
              <button className="glass-strong glow-primary" style={{ width: 80, height: 80, borderRadius: '50%', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Play size={28} color="var(--primary)" style={{ marginLeft: 3 }} />
              </button>
            </div>
            <div style={{ position: 'absolute', bottom: 24, left: 24 }}>
              <p className="eyebrow">Showcase reel</p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginTop: 4 }}>Behind the brand</h3>
            </div>
          </div>
        </Reveal>
      </section>

      {/* TESTIMONIAL STRIP */}
      <section className="container" style={{ marginBottom: 96 }}>
        <div className="grid-3">
          {[
            { q: 'Smoothest car purchase of my life.', n: 'Tatenda' },
            { q: 'Our kits arrived perfect — the squad loves them.', n: 'Coach Brian' },
            { q: 'Real luxury, real service.', n: 'Faith K.' },
          ].map((t, k) => (
            <Reveal key={k} delay={k * 80}>
              <div className="glass" style={{ borderRadius: 24, padding: 24 }}>
                <div style={{ display: 'flex', gap: 3 }}>
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={13} fill="#fbbf24" color="#fbbf24" />)}
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, lineHeight: 1.5, marginTop: 12 }}>"{t.q}"</p>
                <div style={{ marginTop: 12, fontSize: 13, color: 'var(--muted)' }}>— {t.n}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="glass-strong shimmer-border" style={{ borderRadius: 32, padding: '64px 40px', textAlign: 'center', marginTop: 64, position: 'relative', overflow: 'hidden' }}>
            <p className="eyebrow">Start now</p>
            <h2 style={{ fontSize: '3rem', marginTop: 12 }}>Book your <span className="text-gradient">appointment</span></h2>
            <p style={{ maxWidth: 440, margin: '16px auto 0', color: 'var(--muted)' }}>Ready to take ownership? Let's talk.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <button className="btn-primary glow-primary" onClick={() => setQuoteOpen(true)}>Schedule visit</button>
              <a href="https://wa.me/263774411867" target="_blank" rel="noreferrer" className="btn-ghost">WhatsApp Us</a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ITEM DETAIL MODAL */}
      {active && (
        <div className="dialog-overlay" onClick={() => setActive(null)}>
          <div className="dialog-box glass-strong" onClick={e => e.stopPropagation()}>
            <button className="dialog-close" onClick={() => setActive(null)}><X size={15} /></button>
            <p className="eyebrow" style={{ marginBottom: 8 }}>{active.cat}</p>
            <h2 className="text-gradient" style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 16 }}>{active.t}</h2>
            <div style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 16 }}>
              <img src={active.img} alt={active.t} style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }} />
            </div>
            <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 20, lineHeight: 1.7 }}>{active.d}</p>
            <a href="https://wa.me/263774411867" target="_blank" rel="noreferrer" className="btn-primary glow-primary" style={{ display: 'inline-flex', justifyContent: 'center', width: '100%' }}>
              Inquire on WhatsApp
            </a>
          </div>
        </div>
      )}

      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} title="Schedule a Visit" />}
    </Layout>
  )
}
