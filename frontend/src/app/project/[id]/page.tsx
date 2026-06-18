"use client";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.id === Number(params.id));

  if (!project) {
    return (
      <div style={{
        minHeight: 'calc(100vh - 64px)',
        background: '#111111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.75rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(244,235,208,0.35)',
        }}>
          Project not found
        </p>
      </div>
    );
  }

  const n = String(project.id).padStart(2, '0');
  const hasLive = project.live && project.live.trim() !== '' && project.live.trim() !== '#';

  return (
    <>
      <style>{`
        .case-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.10em;
          color: rgba(244,235,208,0.45);
          transition: color 150ms ease;
          text-decoration: none;
        }
        .case-back:hover { color: #B87333; }
        .case-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          color: #B87333;
          border: 1px solid #B87333;
          padding: 10px 24px;
          transition: background 150ms ease;
          text-decoration: none;
        }
        .case-cta:hover { background: rgba(184,115,51,0.08); }
        .case-cta .arr { display: inline-block; transition: transform 180ms ease-out; }
        .case-cta:hover .arr { transform: translateX(5px); }
        .case-next {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          color: rgba(244,235,208,0.35);
          transition: color 150ms ease;
          text-decoration: none;
        }
        .case-next:hover { color: rgba(244,235,208,0.70); }
        .case-next .arr { display: inline-block; transition: transform 180ms ease-out; }
        .case-next:hover .arr { transform: translateX(5px); }
      `}</style>

      <div style={{ minHeight: 'calc(100vh - 64px)', background: '#111111', color: '#F4EBD0' }}>

        {/* Back nav */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 48px 0' }}>
          <Link href="/#work" className="case-back">
            ← Back to Work
          </Link>
        </div>

        {/* Hero image */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 48px 0' }}>
          <div style={{
            width: '100%',
            aspectRatio: '16 / 7',
            position: 'relative',
            background: '#1A1A1A',
            overflow: 'hidden',
          }}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ objectFit: 'cover', filter: 'brightness(0.85)' }}
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 48px 120px' }}>

          {/* Metadata */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontWeight: 700,
              fontSize: '0.78rem',
              color: '#B87333',
            }}>
              {n}
            </span>
            <span style={{ color: 'rgba(244,235,208,0.20)', fontFamily: "'Space Mono', monospace" }}>·</span>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.70rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(244,235,208,0.55)',
            }}>
              {project.type}
            </span>
            <span style={{ color: 'rgba(244,235,208,0.20)', fontFamily: "'Space Mono', monospace" }}>·</span>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.70rem',
              color: 'rgba(244,235,208,0.45)',
            }}>
              {project.year}
            </span>
          </div>

          {/* Decision note */}
          <p style={{
            fontFamily: "'Lora', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '0.9rem',
            color: 'rgba(244,235,208,0.45)',
            margin: '0 0 16px',
            lineHeight: 1.65,
            maxWidth: '72ch',
          }}>
            {project.decision}
          </p>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 400,
            fontSize: 'clamp(38px, 5.5vw, 68px)',
            lineHeight: 1.0,
            color: '#F4EBD0',
            margin: '0 0 28px',
          }}>
            {project.title}
          </h1>

          {/* Rule */}
          <div style={{
            height: '1px',
            background: 'rgba(244,235,208,0.08)',
            marginBottom: '32px',
            maxWidth: '680px',
          }} />

          {/* Description */}
          <p style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: '1.05rem',
            lineHeight: 1.85,
            color: 'rgba(244,235,208,0.65)',
            maxWidth: '65ch',
            margin: '0 0 36px',
          }}>
            {project.description}
          </p>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '48px' }}>
            {project.tech.map((t) => (
              <span key={t} style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.62rem',
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: 'rgba(244,235,208,0.35)',
                border: '1px solid rgba(244,235,208,0.10)',
                padding: '4px 10px',
              }}>
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          {hasLive && (
            <a
              href={project.live.trim()}
              target="_blank"
              rel="noopener noreferrer"
              className="case-cta"
            >
              Live Site <span className="arr">↗</span>
            </a>
          )}

          {/* Bottom divider + next project */}
          <div style={{ marginTop: '96px' }}>
            <div style={{ height: '1px', background: 'rgba(244,235,208,0.08)', marginBottom: '32px' }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <Link href="/#work" className="case-back">
                ← All Projects
              </Link>
              {project.id < projects.length && (
                <a href={`/project/${project.id + 1}`} className="case-next">
                  Next Project <span className="arr">→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
