function Rule({ opacity = '0.08' }: { opacity?: string }) {
  return (
    <div style={{ height: '1px', background: `rgba(244,235,208,${opacity})`, flexShrink: 0 }} />
  );
}

function CopperBlock({ w = 6, h = 12 }: { w?: number; h?: number }) {
  return <div style={{ width: w, height: h, background: '#B87333', flexShrink: 0 }} />;
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

const techStack: Record<string, string[]> = {
  DESIGN: [
    'Claude / Anthropic SDK',
    'OpenAI Agent SDK',
    'RAG Architecture',
    'MCP Server Design',
    'Prompt Engineering',
  ],
  BUILD: [
    'Next.js / React',
    'FastAPI / Python',
    'TypeScript',
    'Qdrant',
    'Cohere Embeddings',
    'ShadCN UI',
  ],
  SHIP: [
    'Docker',
    'Vercel',
    'Netlify',
    'GitHub Actions',
    'Git',
  ],
};

export default function Craft() {
  return (
    <>
      <style>{`
        .craft-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 48px;
          margin-top: 64px;
        }
        @media (max-width: 767px) {
          .craft-grid { grid-template-columns: 1fr !important; }
          #craft { padding: 80px 24px !important; }
        }
      `}</style>

      <section id="craft" style={{ background: '#111111', padding: '120px 48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionLabel>Craft</SectionLabel>

          {/* Philosophy paragraph */}
          <div style={{ maxWidth: '65ch', margin: '0 auto 80px', textAlign: 'center' as const }}>
            <p style={{
              fontFamily: "'Lora', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              lineHeight: 1.9,
              color: 'rgba(244,235,208,0.80)',
              margin: 0,
            }}>
              I approach AI systems the way a relay engineer approaches a
              network — every component must handle the case where the
              component upstream of it fails. I have built agent pipelines
              that degraded gracefully when the model returned garbage
              because I designed them to expect it.
            </p>
          </div>

          <Rule />

          {/* Three-column tech inventory */}
          <div className="craft-grid">
            {(Object.entries(techStack) as [string, string[]][]).map(([stage, items]) => (
              <div key={stage}>
                {/* Stage header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                  <CopperBlock />
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.68rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase' as const,
                    color: '#B87333',
                  }}>
                    {stage}
                  </span>
                </div>
                {/* Items */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {items.map((item) => (
                    <li key={item} style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.84rem',
                      color: 'rgba(244,235,208,0.55)',
                      lineHeight: 1.95,
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
