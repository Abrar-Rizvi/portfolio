import { RESUME_PATH } from "@/lib/constants";

function Rule({ opacity = '0.08' }: { opacity?: string }) {
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

export default function Experience() {
  return (
    <>
      <style>{`
        .exp-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 4px;
        }
        @media (max-width: 767px) {
          .exp-row { flex-direction: column !important; gap: 2px !important; align-items: flex-start !important; }
          #experience { padding: 80px 24px !important; }
        }
        .exp-cta {
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
        .exp-cta:hover { color: #C8924A; }
        .exp-cta .arr { display: inline-block; transition: transform 180ms ease-out; }
        .exp-cta:hover .arr { transform: translateX(5px); }
      `}</style>

      <section id="experience" style={{ background: '#111111', padding: '120px 48px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SectionLabel>Experience</SectionLabel>

          {/* Entry 01 */}
          <div style={{ marginBottom: '56px' }}>
            <div className="exp-row">
              <span style={{
                fontFamily: "'Lora', Georgia, serif",
                fontWeight: 500,
                fontSize: '1.1rem',
                color: 'rgba(244,235,208,0.90)',
              }}>
                AI Systems Engineer
              </span>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.75rem',
                color: 'rgba(244,235,208,0.35)',
                flexShrink: 0,
                marginLeft: '16px',
              }}>
                2023 – Present
              </span>
            </div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.75rem',
              letterSpacing: '0.06em',
              color: 'rgba(244,235,208,0.40)',
              marginBottom: '16px',
            }}>
              Remote · Multiple Clients
            </div>
            <div style={{ height: '1px', background: 'rgba(244,235,208,0.08)', marginBottom: '20px' }} />
            <p style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: '1rem',
              lineHeight: 1.85,
              color: 'rgba(244,235,208,0.65)',
              maxWidth: '62ch',
              margin: 0,
            }}>
              Built agentic AI systems and RAG pipelines for software companies
              developing LLM-powered products. Designed MCP server architectures
              and automation workflows for distributed AI teams. Primary stack:
              FastAPI, Next.js, Anthropic and OpenAI APIs.
            </p>
          </div>

          {/* Entry 02 */}
          <div style={{ marginBottom: '56px' }}>
            <div className="exp-row">
              <span style={{
                fontFamily: "'Lora', Georgia, serif",
                fontWeight: 500,
                fontSize: '1.1rem',
                color: 'rgba(244,235,208,0.90)',
              }}>
                Full-Stack Developer
              </span>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.75rem',
                color: 'rgba(244,235,208,0.35)',
                flexShrink: 0,
                marginLeft: '16px',
              }}>
                2022 – 2023
              </span>
            </div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.75rem',
              letterSpacing: '0.06em',
              color: 'rgba(244,235,208,0.40)',
              marginBottom: '16px',
            }}>
              Remote · Freelance
            </div>
            <div style={{ height: '1px', background: 'rgba(244,235,208,0.08)', marginBottom: '20px' }} />
            <p style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: '1rem',
              lineHeight: 1.85,
              color: 'rgba(244,235,208,0.65)',
              maxWidth: '62ch',
              margin: 0,
            }}>
              Developed full-stack web applications with Next.js and FastAPI.
              Transitioned focus to AI-powered features and LLM integrations
              mid-year after shipping a production RAG prototype that performed
              well under real domain queries.
            </p>
          </div>

          <Rule />

          {/* Resume download */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '24px' }}>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.70rem',
              color: 'rgba(244,235,208,0.35)',
            }}>
              Full curriculum vitae
            </span>
            <a href={RESUME_PATH} download className="exp-cta">
              Download <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
