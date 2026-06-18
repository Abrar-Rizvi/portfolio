import { RESUME_PATH } from "@/lib/constants";

function CopperBlock() {
  return <div style={{ width: 8, height: 14, background: '#B87333', flexShrink: 0 }} />;
}

export default function About() {
  return (
    <>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 1023px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        .about-resume {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          color: #B87333;
          transition: color 150ms ease;
          text-decoration: none;
        }
        .about-resume:hover { color: #C8924A; }
        .about-resume .arr { display: inline-block; transition: transform 180ms ease-out; }
        .about-resume:hover .arr { transform: translateX(4px); }
      `}</style>

      <section id="about" style={{ background: '#111111', padding: '120px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="about-grid">

            {/* Left column — portrait */}
            <div style={{ width: '100%', aspectRatio: '4 / 5', overflow: 'hidden', flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about/abrar.png"
                alt="Muhammad Abrar"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
            </div>

            {/* Right column — content */}
            <div>

              {/* Section label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <CopperBlock />
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.70rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase' as const,
                  color: '#B87333',
                }}>
                  About
                </span>
              </div>

              {/* Editorial headline */}
              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                fontSize: 'clamp(32px, 3.8vw, 54px)',
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                color: '#F4EBD0',
                margin: '0 0 36px',
              }}>
                I build the infrastructure<br />
                that keeps AI systems honest<br />
                when edge cases arrive.
              </h2>

              {/* Body paragraphs */}
              <p style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '1rem',
                lineHeight: 1.85,
                color: 'rgba(244,235,208,0.65)',
                margin: '0 0 20px',
                maxWidth: '52ch',
              }}>
                I&apos;m Muhammad Abrar — an AI Systems Engineer who has been building
                software since 2022 and shifted focus to LLM infrastructure in 2023
                after shipping a production RAG system that held up under real domain queries.
                My work lives at the intersection of reliability engineering and AI product
                development.
              </p>

              <p style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '1rem',
                lineHeight: 1.85,
                color: 'rgba(244,235,208,0.65)',
                margin: '0 0 20px',
                maxWidth: '52ch',
              }}>
                I design failure modes before they reach production — building the tooling
                and architectures that keep agentic systems predictable at scale. I work
                remotely with teams building LLM-powered products, primarily using the
                Anthropic and OpenAI APIs, FastAPI, and Next.js.
              </p>

              <p style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '1rem',
                lineHeight: 1.85,
                color: 'rgba(244,235,208,0.65)',
                margin: '0 0 40px',
                maxWidth: '52ch',
              }}>
                When I&apos;m not shipping agents, I&apos;m reading systems papers and thinking
                about what the next generation of AI infrastructure should look like.
              </p>

              {/* Rule */}
              <div style={{ height: '1px', background: 'rgba(244,235,208,0.08)' }} />

              {/* Fact list */}
              <div style={{ padding: '24px 0 32px' }}>
                {[
                  { label: 'Based in',  value: 'Karachi, Pakistan · Remote-first' },
                  { label: 'Focus',     value: 'Agentic AI · RAG · Full-stack AI' },
                  { label: 'Available', value: 'Immediately · Contract & Full-time' },
                  { label: 'Languages', value: 'English · Urdu' },
                ].map(({ label, value }) => (
                  <div key={label} style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '24px',
                    marginBottom: '14px',
                  }}>
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.62rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase' as const,
                      color: '#B87333',
                      width: '90px',
                      flexShrink: 0,
                    }}>
                      {label}
                    </span>
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.80rem',
                      color: 'rgba(244,235,208,0.55)',
                    }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Rule */}
              <div style={{ height: '1px', background: 'rgba(244,235,208,0.08)' }} />

              {/* Resume CTA */}
              <div style={{ paddingTop: '24px' }}>
                <a href={RESUME_PATH} download className="about-resume">
                  Resume <span className="arr">→</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
