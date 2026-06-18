import Image from 'next/image';
import { projects } from '@/data/projects';

const selected = projects.slice(0, 3);

function Rule({ opacity = '0.10' }: { opacity?: string }) {
  return (
    <div style={{ height: '1px', background: `rgba(244,235,208,${opacity})`, flexShrink: 0 }} />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '64px' }}>
      <span style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '0.70rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase' as const,
        color: 'rgba(244,235,208,0.55)',
      }}>
        {children}
      </span>
    </div>
  );
}

function ProjectImage({ src, ratio, alt }: { src: string; ratio: string; alt: string }) {
  return (
    <div style={{
      width: '100%',
      aspectRatio: ratio,
      background: '#1A1A1A',
      overflow: 'hidden',
      flexShrink: 0,
      position: 'relative',
    }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        style={{ objectFit: 'cover', filter: 'brightness(0.85)' }}
      />
    </div>
  );
}

function MetaStrip({ n, type, year, large = false }: { n: string; type: string; year: string; large?: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: large ? '28px 0 8px' : '20px 0 8px' }}>
      <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: large ? '0.78rem' : '0.75rem', color: '#B87333' }}>
        {n}
      </span>
      <span style={{ color: 'rgba(244,235,208,0.20)', fontFamily: "'Space Mono', monospace" }}>·</span>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: large ? '0.70rem' : '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'rgba(244,235,208,0.55)' }}>
        {type}
      </span>
      <span style={{ color: 'rgba(244,235,208,0.20)', fontFamily: "'Space Mono', monospace" }}>·</span>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: large ? '0.70rem' : '0.68rem', color: 'rgba(244,235,208,0.45)' }}>
        {year}
      </span>
    </div>
  );
}

export default function Work() {
  return (
    <>
      <style>{`
        .work-cta {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          color: #B87333;
          transition: color 150ms ease;
          text-decoration: none;
        }
        .work-cta:hover { color: #C8924A; }
        .work-cta .arr { display: inline-block; transition: transform 180ms ease-out; }
        .work-cta:hover .arr { transform: translateX(5px); }
        .work-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          color: rgba(244,235,208,0.40);
          transition: color 150ms ease;
          text-decoration: none;
        }
        .work-cta-secondary:hover { color: rgba(244,235,208,0.70); }
        .secondary-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        @media (max-width: 767px) {
          .secondary-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── Selected Work ── */}
      <section id="work" style={{ background: '#111111', padding: '120px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel>Featured Projects</SectionLabel>

          {/* Featured project (01) */}
          <ProjectImage src={selected[0].image} ratio="16 / 7" alt={selected[0].title} />

          <MetaStrip
            n={String(selected[0].id).padStart(2, '0')}
            type={selected[0].type}
            year={selected[0].year}
            large
          />

          <p style={{
            fontFamily: "'Lora', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '0.9rem',
            color: 'rgba(244,235,208,0.45)',
            margin: '0 0 12px',
            lineHeight: 1.65,
          }}>
            {selected[0].decision}
          </p>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 400,
            fontSize: 'clamp(38px, 5.5vw, 68px)',
            lineHeight: 1.0,
            color: '#F4EBD0',
            margin: '0 0 20px',
          }}>
            {selected[0].title}
          </h2>

          <p style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: '1rem',
            lineHeight: 1.85,
            color: 'rgba(244,235,208,0.60)',
            maxWidth: '62ch',
            margin: '0 0 20px',
          }}>
            {selected[0].description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px', marginBottom: '28px' }}>
            {selected[0].tech.map((t) => (
              <span key={t} style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.62rem',
                letterSpacing: '0.10em',
                textTransform: 'uppercase' as const,
                color: 'rgba(244,235,208,0.35)',
                border: '1px solid rgba(244,235,208,0.10)',
                padding: '4px 10px',
              }}>
                {t}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <a href={`/project/${selected[0].id}`} className="work-cta">
              View Case Study <span className="arr">→</span>
            </a>
            {selected[0].live && (
              <a href={selected[0].live} target="_blank" rel="noopener noreferrer" className="work-cta-secondary">
                Live Site ↗
              </a>
            )}
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(244,235,208,0.08)', margin: '80px 0' }} />

          {/* Secondary projects (02 & 03) */}
          <div className="secondary-grid">
            {selected.slice(1).map((p) => {
              const n = String(p.id).padStart(2, '0');
              return (
                <div key={p.id}>
                  <ProjectImage src={p.image} ratio="16 / 10" alt={p.title} />

                  <MetaStrip n={n} type={p.type} year={p.year} />

                  <p style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontStyle: 'italic',
                    fontSize: '0.85rem',
                    color: 'rgba(244,235,208,0.40)',
                    margin: '0 0 10px',
                    lineHeight: 1.6,
                  }}>
                    {p.decision}
                  </p>

                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 400,
                    fontSize: 'clamp(22px, 2.5vw, 32px)',
                    lineHeight: 1.1,
                    color: '#F4EBD0',
                    margin: '0 0 14px',
                  }}>
                    {p.title}
                  </h3>

                  <p style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.9rem',
                    lineHeight: 1.8,
                    color: 'rgba(244,235,208,0.60)',
                    margin: '0 0 20px',
                  }}>
                    {p.description.substring(0, 160)}…
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' as const }}>
                    <a href={`/project/${p.id}`} className="work-cta">
                      View Case Study <span className="arr">→</span>
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="work-cta-secondary">
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Work CTA */}
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '64px' }}>
            <a href="#work-index" className="work-cta">
              View All Work <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Positioning Strip ── */}
      <section style={{ background: '#111111', padding: '80px 48px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Rule />
          <div style={{ padding: '64px 0 64px 40px', position: 'relative' }}>
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '0',
                top: '28px',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: '5.5rem',
                lineHeight: 1,
                color: 'rgba(244,235,208,0.12)',
                userSelect: 'none' as const,
                pointerEvents: 'none' as const,
              }}
            >
              &ldquo;
            </span>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
              lineHeight: 1.75,
              color: 'rgba(244,235,208,0.80)',
              margin: 0,
            }}>
              The most expensive mistake in AI engineering is building the
              agent before designing the failure mode.
            </p>
          </div>
          <Rule />
        </div>
      </section>
    </>
  );
}
