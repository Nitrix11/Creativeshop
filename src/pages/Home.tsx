import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Truck, Headphones, Award, Sparkles, Gem, Car, Shirt, Star } from 'lucide-react'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import Carousel from '../components/Carousel'
import QuoteModal from '../components/QuoteModal'

// All images from /public — will work on Vercel
const IMGS = {
  car1: '/IMG-20260628-WA0010.jpg',   // GWM POER front
  car2: '/IMG-20260628-WA0005.jpg',   // GWM POER rear
  car3: '/IMG-20260628-WA0014.jpg',   // Toyota Auris front
  car4: '/IMG-20260628-WA0003.jpg',   // Mercedes A-Class
  car5: '/IMG-20260628-WA0020.jpg',   // Toyota Hilux
  car6: '/IMG-20260628-WA0016.jpg',   // Toyota Auris rear
  kit1: '/IMG-20260628-WA0030.jpg',    // Shumba basketball jersey
  kit2: '/IMG-20260628-WA0033.jpg',    // Blue/white football kit
  kit3: '/IMG-20260628-WA0034.jpg',    // Yellow/black football kit
  kit4: '/IMG-20260628-WA0026.jpg',    // Blue kit with pattern
  gk1:  '/IMG-20260628-WA0039.jpg',   // Red goalkeeper kit
  gk2:  '/IMG-20260628-WA0040.jpg',   // Green goalkeeper kit
}

const heroSlides = [
  { img: IMGS.car1, eyebrow: 'GWM POER', title: 'Built for ambition', sub: 'Power, presence and performance — delivered.' },
  { img: IMGS.car4, eyebrow: 'Mercedes-Benz A-Class', title: 'Engineered to thrill', sub: 'Premium European imports, ready to drive.' },
  { img: IMGS.kit1, eyebrow: 'Shumba Lions Kit', title: 'Wear your legacy', sub: 'Bespoke kits designed to dominate.' },
]

const features = [
  { Icon: Shield, t: 'Verified Quality', s: 'Every product inspected' },
  { Icon: Truck, t: 'Fast Delivery', s: 'Nationwide in 48 hrs' },
  { Icon: Headphones, t: '24/7 Concierge', s: 'We pick up. Always.' },
  { Icon: Award, t: '6-mo Warranty', s: 'Backed by our promise' },
]

const collection = [
  { img: IMGS.car1, t: 'GWM POER Premium', c: 'Off-road Ready' },
  { img: IMGS.car4, t: 'Mercedes A-Class', c: 'Executive Hatchback' },
  { img: IMGS.car5, t: 'Toyota Hilux GR-S', c: 'GR-Sport Pickup' },
  { img: IMGS.car3, t: 'Toyota Auris Sport', c: 'Daily Drive Lux' },
  { img: IMGS.kit1, t: 'Shumba Lions Kit', c: 'Custom Basketball' },
  { img: IMGS.kit2, t: 'Blue Striker Set', c: 'Football Bundle' },
]

const testimonials = [
  { name: 'Tendai M.', role: 'Business Owner', rating: 5, quote: 'Creative Wing delivered my dream car with a process so smooth it felt like luxury concierge.' },
  { name: 'Coach Rumbi', role: 'Team Manager', rating: 5, quote: 'Our custom kits arrived flawless. The detail, fit and turnaround were world-class.' },
  { name: 'Kuda N.', role: 'Entrepreneur', rating: 5, quote: 'From inquiry to delivery — every touchpoint screamed premium. Genuinely impressed.' },
  { name: 'Sarah O.', role: 'Club President', rating: 5, quote: 'These guys know luxury. Our entire squad is now in Creative Wing kits and we look unreal.' },
]

const steps = [
  { n: '01', t: 'Consult', d: 'Tell us what you envision. We listen, then advise.' },
  { n: '02', t: 'Curate', d: 'We source or design specifically for your brief.' },
  { n: '03', t: 'Confirm', d: 'Review, refine, and approve every detail.' },
  { n: '04', t: 'Deliver', d: 'Concierge-grade handover, anywhere you are.' },
]

const faqs = [
  { q: 'How quickly can you deliver a vehicle?', a: 'Most in-stock vehicles are ready within 48 hours. Imports take 21–35 days.' },
  { q: 'Do you offer financing?', a: 'Yes — we partner with leading banks for tailored financing. Talk to our team for options.' },
  { q: 'What is your warranty?', a: 'Every vehicle comes with a 6-month mechanical warranty. Custom sportswear has a stitching guarantee.' },
  { q: 'Can you ship outside Harare?', a: 'Absolutely. Nationwide delivery and SADC export available — handled door to door.' },
  { q: 'Do you do custom team kits?', a: 'Yes. Fully custom design, colors, names, numbers, logos — minimum orders apply.' },
]

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [quoteTitle, setQuoteTitle] = useState('Request a Quote')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [tIdx, setTIdx] = useState(0)

  const openQuote = (title?: string) => {
    setQuoteTitle(title || 'Request a Quote')
    setQuoteOpen(true)
  }

  return (
    <Layout>
      {/* HERO */}
      <section className="container" style={{ paddingTop: 32 }}>
        <div className="hero-grid">
          <Reveal>
            <p className="eyebrow">Creative Wing Investments</p>
            <h1 style={{ fontSize: '5rem', lineHeight: 1.05, marginTop: 16 }}>
              The pursuit of <span className="text-gradient">perfection</span>, delivered.
            </h1>
            <p style={{ marginTop: 24, maxWidth: 520, fontSize: 17, color: 'var(--muted)', lineHeight: 1.7 }}>
              Premium imported vehicles and bespoke custom sportswear — meticulously sourced, beautifully presented, and ready for those who refuse the ordinary.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
              <Link to="/gallery" className="btn-primary glow-primary">View Gallery <ArrowRight size={15} /></Link>
              <button className="btn-ghost" onClick={() => openQuote()}>Request Quote</button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, marginTop: 40 }}>
              {[['500+', 'Vehicles delivered'], ['1.2k', 'Custom kits made'], ['99%', 'Client satisfaction']].map(([n, l]) => (
                <div key={l}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 600 }}>{n}</span>
                  <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <Carousel slides={heroSlides} aspectRatio="4/3" />
          </Reveal>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="container" style={{ marginTop: 96 }}>
        <Reveal>
          <div className="grid-4">
            {features.map(({ Icon, t, s }) => (
              <div key={t} className="glass card-tilt" style={{ borderRadius: 20, padding: 24 }}>
                <Icon color="var(--primary)" size={22} />
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginTop: 16 }}>{t}</h4>
                <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>{s}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section className="container" style={{ marginTop: 96 }}>
        <div className="hero-grid">
          <Reveal>
            <div style={{ position: 'relative' }}>
              <div className="glass-strong" style={{ borderRadius: 24, padding: 6 }}>
                <img src={IMGS.car2} alt="Brand story" style={{ width: '100%', borderRadius: 18, objectFit: 'cover', aspectRatio: '4/5' }} />
              </div>
              <div className="glass-strong" style={{ position: 'absolute', bottom: -24, right: -24, borderRadius: 16, padding: 20, display: 'none' }}>
                <Gem color="var(--secondary)" />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, marginTop: 8 }}>Crafted, not assembled</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-strong" style={{ borderRadius: 24, padding: 40 }}>
              <p className="eyebrow">Our story</p>
              <h2 style={{ fontSize: '3rem', marginTop: 12 }}>A standard above <span className="text-gradient">standards</span></h2>
              <p style={{ marginTop: 20, color: 'var(--muted)', lineHeight: 1.7 }}>
                Creative Wing Investments was founded on a simple belief: people who pursue excellence deserve to be served by it. From sourcing imported vehicles to stitching championship-grade sportswear, every detail is treated as the only detail.
              </p>
              <p style={{ marginTop: 12, color: 'var(--muted)', lineHeight: 1.7 }}>
                We do not sell products. We deliver presence — the kind that opens rooms, wins games, and turns heads.
              </p>
              <div className="grid-2" style={{ marginTop: 24 }}>
                {['Hand-picked inventory', 'Bespoke design', 'End-to-end logistics', 'Lifetime relationships'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
                    <Sparkles size={13} color="var(--primary)" /> {t}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="container" style={{ marginTop: 96 }}>
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40 }}>
            <div>
              <p className="eyebrow">Highlights</p>
              <h2 style={{ fontSize: '3rem', marginTop: 12 }}>Popular <span className="text-gradient">collections</span></h2>
            </div>
            <Link to="/gallery" style={{ fontSize: 14, color: 'var(--primary)' }}>View all →</Link>
          </div>
        </Reveal>
        <div className="grid-3">
          {collection.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="glass-strong card-tilt" style={{ borderRadius: 24, overflow: 'hidden' }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img src={item.img} alt={item.t} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20 }}>{item.t}</h3>
                    <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{item.c}</p>
                  </div>
                  <button className="glass" onClick={() => openQuote(`Inquire: ${item.t}`)}
                    style={{ width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', border: 'none' }}>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container" style={{ marginTop: 96 }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="eyebrow">Voices</p>
            <h2 style={{ fontSize: '3rem', marginTop: 12 }}>What clients <span className="text-gradient">say</span></h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="grid-3" style={{ gap: 16 }}>
            {testimonials.slice(0, 3).map((t, i) => (
              <div key={i} className="glass-strong" style={{ borderRadius: 24, padding: 32 }}>
                <div style={{ display: 'flex', gap: 3 }}>
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={15} fill="#fbbf24" color="#fbbf24" />)}
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 19, lineHeight: 1.5, marginTop: 16 }}>"{t.quote}"</p>
                <div style={{ marginTop: 20, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 16 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section className="container" style={{ marginTop: 96, paddingBottom: 24 }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p className="eyebrow">Process</p>
            <h2 style={{ fontSize: '3rem', marginTop: 12 }}>How we work, <span className="text-gradient">step by step</span></h2>
          </div>
        </Reveal>
        <div className="grid-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="glass card-tilt" style={{ borderRadius: 24, padding: 24, height: '100%' }}>
                <div className="text-gradient" style={{ fontFamily: 'var(--font-display)', fontSize: 52, fontWeight: 600 }}>{s.n}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, marginTop: 12 }}>{s.t}</h3>
                <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 8, lineHeight: 1.6 }}>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DUAL CATEGORY */}
      <section className="container" style={{ marginTop: 48 }}>
        <div className="grid-2">
          {[
            { Icon: Car, t: 'Vehicles', d: 'Hand-picked imports, ready to drive.', link: '/services' },
            { Icon: Shirt, t: 'Custom Sportswear', d: 'Championship-grade kits, your design.', link: '/services' },
          ].map(({ Icon, t, d, link }, i) => (
            <Reveal key={t} delay={i * 100}>
              <Link to={link}>
                <div className="glass-strong card-tilt" style={{ borderRadius: 24, padding: 40 }}>
                  <Icon size={36} color="var(--primary)" />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginTop: 20 }}>{t}</h3>
                  <p style={{ color: 'var(--muted)', marginTop: 8 }}>{d}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--primary)', marginTop: 24 }}>
                    Explore <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container" style={{ marginTop: 96, marginBottom: 96 }}>
        <Reveal>
          <div className="glass-strong shimmer-border" style={{ borderRadius: 32, padding: '64px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)', width: '60%', height: 200, borderRadius: '50%', background: 'rgba(22,163,149,0.2)', filter: 'blur(60px)', pointerEvents: 'none' }} />
            <p className="eyebrow">Start now</p>
            <h2 style={{ fontSize: '3.5rem', marginTop: 12 }}>Ready to live the <span className="text-gradient">upgrade</span></h2>
            <p style={{ maxWidth: 480, margin: '16px auto 0', color: 'var(--muted)' }}>Speak with our concierge — receive a tailored proposal within the hour.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginTop: 32 }}>
              <button className="btn-primary glow-primary" onClick={() => openQuote()}>Request a Quote <ArrowRight size={15} /></button>
              <a href="https://wa.me/263774411867" target="_blank" rel="noreferrer" className="btn-ghost">WhatsApp Us</a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="container" style={{ marginBottom: 96 }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p className="eyebrow">FAQ</p>
            <h2 style={{ fontSize: '3rem', marginTop: 12 }}>Questions, <span className="text-gradient">answered</span></h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="glass-strong" style={{ borderRadius: 24, padding: '8px 24px', maxWidth: 800, margin: '0 auto' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', textAlign: 'left', padding: '20px 0', background: 'none', border: 'none', color: 'var(--foreground)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-display)', fontSize: 19, cursor: 'pointer' }}>
                  {f.q}
                  <span style={{ fontSize: 22, color: 'var(--primary)', transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                {openFaq === i && (
                  <p style={{ paddingBottom: 20, color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} title={quoteTitle} />}
    </Layout>
  )
}
