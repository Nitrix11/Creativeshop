import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  img: string
  eyebrow?: string
  title?: string
  sub?: string
}

export default function Carousel({ slides, aspectRatio = '4/3', autoplay = 5000 }: { slides: Slide[]; aspectRatio?: string; autoplay?: number }) {
  const [idx, setIdx] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = (i: number) => setIdx((i + slides.length) % slides.length)

  useEffect(() => {
    timerRef.current = setInterval(() => setIdx(p => (p + 1) % slides.length), autoplay)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [slides.length, autoplay])

  return (
    <div style={{ position: 'relative' }}>
      <div className="carousel-wrap glass-strong" style={{ padding: 6 }}>
        <div style={{ overflow: 'hidden', borderRadius: 20 }}>
          <div className="carousel-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
            {slides.map((s, i) => (
              <div key={i} className="carousel-slide">
                <div style={{ position: 'relative', aspectRatio, overflow: 'hidden' }}>
                  <img src={s.img} alt={s.eyebrow || ''} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)' }} />
                  {(s.eyebrow || s.title) && (
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24 }}>
                      {s.eyebrow && <p className="eyebrow">{s.eyebrow}</p>}
                      {s.title && <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginTop: 4 }}>{s.title}</h3>}
                      {s.sub && <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', marginTop: 4 }}>{s.sub}</p>}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {slides.length > 1 && (
        <>
          <button onClick={() => go(idx - 1)} className="glass" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', color: 'var(--foreground)' }}>
            <ChevronLeft size={16} />
          </button>
          <button onClick={() => go(idx + 1)} className="glass" style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', color: 'var(--foreground)' }}>
            <ChevronRight size={16} />
          </button>
          <div className="carousel-dots">
            {slides.map((_, i) => (
              <button key={i} className={`carousel-dot ${i === idx ? 'active' : ''}`} onClick={() => go(i)} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
