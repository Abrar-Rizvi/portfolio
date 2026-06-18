function CopperBlock() {
  return (
    <div style={{ width: 8, height: 14, background: '#B87333', flexShrink: 0 }} />
  );
}

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          letter-spacing: 0.10em;
          color: #B87333;
          transition: color 150ms ease;
          text-decoration: none;
        }
        .hero-cta:hover { color: #C8924A; }
        .hero-cta .arr { display: inline-block; transition: transform 180ms ease-out; }
        .hero-cta:hover .arr { transform: translateX(5px); }
        .hero-cta-muted {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Space Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          color: rgba(244,235,208,0.35);
          transition: color 150ms ease;
          text-decoration: none;
        }
        .hero-cta-muted:hover { color: rgba(244,235,208,0.65); }
        .hero-grid {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 1023px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 767px) {
          #home { padding: 40px 24px 60px !important; }
        }
      `}</style>

      <section
        id="home"
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - 64px)',
          background: '#111111',
          padding: '56px 48px 80px',
          overflow: 'hidden',
        }}
      >
        {/* Ghost watermark */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-40px',
            top: '50%',
            transform: 'translateY(-58%)',
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontSize: 'clamp(180px, 22vw, 320px)',
            lineHeight: 1,
            color: 'rgba(244,235,208,0.03)',
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '-0.04em',
            whiteSpace: 'nowrap',
          }}
        >
          ABRAR
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <div className="hero-grid">

            {/* Text column */}
            <div>
              {/* Pre-label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <CopperBlock />
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.70rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase' as const,
                  color: 'rgba(244,235,208,0.55)',
                }}>
                  AI Systems Engineer
                </span>
              </div>

              {/* Headline */}
              <h1 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: 'clamp(54px, 7.5vw, 108px)',
                lineHeight: 0.92,
                letterSpacing: '-0.02em',
                color: '#F4EBD0',
                margin: '0 0 14px',
              }}>
                I build the<br />
                systems that<br />
                make <span style={{ color: '#B87333' }}>agents</span><br />
                rel<span style={{ color: '#B87333' }}>i</span>able.
              </h1>

              {/* Name */}
              <div style={{ marginBottom: '14px' }}>
                <p style={{
                  fontFamily: "'Lora', Georgia, serif",
                  fontWeight: 500,
                  fontSize: '1.05rem',
                  color: 'rgba(244,235,208,0.80)',
                  margin: 0,
                }}>
                  Muhammad Abrar
                </p>
              </div>

              {/* Rule */}
              <div style={{
                height: '1px',
                background: 'rgba(244,235,208,0.10)',
                marginBottom: '14px',
                maxWidth: '560px',
              }} />

              {/* Bio */}
              <p style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'rgba(244,235,208,0.60)',
                maxWidth: '56ch',
                margin: '0 0 24px',
              }}>
                I design and ship agentic AI systems, RAG pipelines, and automation
                workflows. Two years of remote work building AI infrastructure with
                software teams taught me that most agents fail from poor architecture,
                not poor models.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
                <a href="#work" className="hero-cta">
                  See My Work <span className="arr">→</span>
                </a>
                <a href="#contact" className="hero-cta-muted">
                  or get in touch ↓
                </a>
              </div>
            </div>

            {/* Right column — intentional negative space (ghost text provides visual mass) */}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.62rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase' as const,
          color: 'rgba(244,235,208,0.30)',
          userSelect: 'none' as const,
          whiteSpace: 'nowrap',
        }}>
          ↓ scroll
        </div>
      </section>
    </>
  );
}
