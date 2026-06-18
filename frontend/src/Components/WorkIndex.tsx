import { projects } from '@/data/projects';

const allWork = projects.slice(3);

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

export default function WorkIndex() {
  return (
    <>
      <style>{`
        .wi-row {
          display: flex;
          align-items: center;
          height: 64px;
          gap: 16px;
          background: #1A1A1A;
          cursor: pointer;
          transition: background 150ms ease;
          text-decoration: none;
        }
        .wi-row:hover { background: #202020; }
        .wi-name {
          flex: 1;
          font-family: 'Lora', serif;
          font-size: 1.05rem;
          color: rgba(244,235,208,0.90);
          transition: color 150ms ease;
        }
        .wi-row:hover .wi-name { color: #F4EBD0; }
        .wi-arr {
          width: 48px;
          text-align: right;
          font-family: 'Space Mono', monospace;
          color: #B87333;
          display: inline-block;
          transition: transform 180ms ease-out;
          flex-shrink: 0;
        }
        .wi-row:hover .wi-arr { transform: translateX(5px); }
        .wi-col-type { }
        .wi-col-year { }
        .wi-cta {
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
        .wi-cta:hover { color: #C8924A; }
        .wi-cta .arr { display: inline-block; transition: transform 180ms ease-out; }
        .wi-cta:hover .arr { transform: translateX(5px); }
        @media (max-width: 767px) {
          .wi-col-type { display: none !important; }
          .wi-col-year { display: none !important; }
        }
      `}</style>

      <section
        id="work-index"
        style={{
          background: '#1A1A1A',
          borderTop: '1px solid rgba(244,235,208,0.06)',
          padding: '80px 0',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
          <SectionLabel>All Work</SectionLabel>

          {/* Column headers */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingBottom: '12px' }}>
            <div style={{ width: '56px', textAlign: 'right' as const, flexShrink: 0, fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'rgba(244,235,208,0.35)' }}>№</div>
            <div style={{ flex: 1, fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'rgba(244,235,208,0.35)' }}>Project Name</div>
            <div className="wi-col-type" style={{ width: '160px', flexShrink: 0, fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'rgba(244,235,208,0.35)' }}>Type</div>
            <div className="wi-col-year" style={{ width: '80px', textAlign: 'right' as const, flexShrink: 0, fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'rgba(244,235,208,0.35)' }}>Year</div>
            <div style={{ width: '48px', flexShrink: 0 }} />
          </div>

          <Rule opacity="0.08" />

          {allWork.map((p) => {
            const n = String(p.id).padStart(2, '0');
            return (
              <div key={p.id}>
                <a href={`/project/${p.id}`} className="wi-row">
                  <div style={{ width: '56px', textAlign: 'right' as const, flexShrink: 0, fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: '0.8rem', color: '#B87333' }}>{n}</div>
                  <div className="wi-name">{p.title}</div>
                  <div className="wi-col-type" style={{ width: '160px', flexShrink: 0, fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: 'rgba(244,235,208,0.55)' }}>{p.type}</div>
                  <div className="wi-col-year" style={{ width: '80px', textAlign: 'right' as const, flexShrink: 0, fontFamily: "'Space Mono', monospace", fontSize: '0.70rem', color: 'rgba(244,235,208,0.45)' }}>{p.year}</div>
                  <div style={{ width: '48px', flexShrink: 0, textAlign: 'right' as const }}>
                    <span className="wi-arr">→</span>
                  </div>
                </a>
                <Rule opacity="0.08" />
              </div>
            );
          })}

          {/* Mid-page CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingTop: '48px', flexWrap: 'wrap' as const }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.70rem', letterSpacing: '0.06em', color: 'rgba(244,235,208,0.35)' }}>
              Have a project that needs an AI systems engineer?
            </span>
            <a href="#contact" className="wi-cta">
              Get in touch <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
