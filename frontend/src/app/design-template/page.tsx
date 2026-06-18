"use client";

import { useState } from "react";

// =============================================================================
// DESIGN TEMPLATE — Visual design review page. Not for production.
// Renders all portfolio sections with final design system tokens.
// =============================================================================

const darkC = {
  bg:          '#111111',
  surface:     '#1A1A1A',
  surfaceHov:  '#202020',
  navBg:       'rgba(17,17,17,0.96)',
  copper:      '#B87333',
  copperHov:   '#C8924A',
  copperGhost: 'rgba(184,115,51,0.04)',
  ivory:       '#F4EBD0',
  baseRgb:     '244,235,208',
  i90: 'rgba(244,235,208,0.90)',
  i80: 'rgba(244,235,208,0.80)',
  i75: 'rgba(244,235,208,0.75)',
  i65: 'rgba(244,235,208,0.65)',
  i60: 'rgba(244,235,208,0.60)',
  i55: 'rgba(244,235,208,0.55)',
  i50: 'rgba(244,235,208,0.50)',
  i45: 'rgba(244,235,208,0.45)',
  i40: 'rgba(244,235,208,0.40)',
  i35: 'rgba(244,235,208,0.35)',
  i30: 'rgba(244,235,208,0.30)',
  i20: 'rgba(244,235,208,0.20)',
  i10: 'rgba(244,235,208,0.10)',
  i08: 'rgba(244,235,208,0.08)',
  i06: 'rgba(244,235,208,0.06)',
  i03: 'rgba(244,235,208,0.03)',
  display: "'Cormorant Garamond', Georgia, serif",
  body:    "'Lora', Georgia, serif",
  mono:    "'Space Mono', 'Courier New', monospace",
};

const lightC = {
  ...darkC,
  bg:         '#F5F0E8',
  surface:    '#EDE8DF',
  surfaceHov: '#E4DED4',
  navBg:      'rgba(245,240,232,0.96)',
  ivory:      '#1C1C1A',
  baseRgb:    '28,28,26',
  i90: 'rgba(28,28,26,0.90)',
  i80: 'rgba(28,28,26,0.80)',
  i75: 'rgba(28,28,26,0.75)',
  i65: 'rgba(28,28,26,0.65)',
  i60: 'rgba(28,28,26,0.60)',
  i55: 'rgba(28,28,26,0.55)',
  i50: 'rgba(28,28,26,0.50)',
  i45: 'rgba(28,28,26,0.45)',
  i40: 'rgba(28,28,26,0.40)',
  i35: 'rgba(28,28,26,0.35)',
  i30: 'rgba(28,28,26,0.30)',
  i20: 'rgba(28,28,26,0.20)',
  i10: 'rgba(28,28,26,0.10)',
  i08: 'rgba(28,28,26,0.08)',
  i06: 'rgba(28,28,26,0.06)',
  i03: 'rgba(28,28,26,0.03)',
};

const projects = [
  {
    n: '01', type: 'AGENT', year: '2025',
    title: 'Spec-Driven RAG System for Physical AI & Humanoid Robotics',
    decision: 'Built on Qdrant over Pinecone to control domain-specific chunking for physical AI documentation — a domain where off-the-shelf strategies fail.',
    desc: 'A production-grade Retrieval-Augmented Generation system built entirely with Claude Code CLI. Combines a Docusaurus educational book on Physical AI with an intelligent chatbot powered by Cohere Embeddings and Qdrant vector search. FastAPI serves context-aware responses generated through carefully engineered prompts.',
    tech: ['Docusaurus', 'Python', 'FastAPI', 'Cohere', 'Qdrant'],
    live: 'https://physical-ai-humanoid-robotics-book-lime.vercel.app/',
    image: '/images/cards/rag.png',
  },
  {
    n: '02', type: 'PLATFORM', year: '2024',
    title: 'Smart Banking System',
    decision: 'Chose Next.js App Router for server-side auth flows and real-time balance streaming without a separate WebSocket layer.',
    desc: 'A comprehensive banking platform enabling secure login, fund transfers, deposits, withdrawals, and balance management. Built for production with a multi-account dashboard designed around daily financial operations and a seamless auth flow.',
    tech: ['Next.js', 'FastAPI', 'Tailwind CSS'],
    live: 'https://banking-system-fronted-nextjs.vercel.app/',
    image: '/images/cards/banking.jpg',
  },
  {
    n: '03', type: 'AGENT', year: '2025',
    title: 'AI Chatbot with RAG Pipeline',
    decision: 'Used OpenAI Agent SDK because it handles tool call loops and structured retries natively — removing 200+ lines of orchestration boilerplate.',
    desc: 'An intelligent conversational agent built on the OpenAI Agent SDK with an integrated RAG pipeline. Designed for domain-specific Q&A with context-aware responses, structured fallback behavior, and transparent reasoning traces for debugging.',
    tech: ['OpenAI Agent SDK', 'Python', 'Next.js'],
    live: null,
    image: '/images/cards/agent.jpg',
  },
  {
    n: '04', type: 'PLATFORM', year: '2024',
    title: 'E-Commerce Store',
    decision: 'Stripe Checkout over a custom payment flow to avoid PCI compliance scope at the MVP stage.',
    desc: 'A full-featured online store with product filters, shopping cart, and Stripe-powered checkout. Fully responsive across all devices with a clean product browsing experience built for conversion.',
    tech: ['Next.js', 'Stripe', 'Tailwind CSS'],
    live: 'https://functional-hackathon-rizvi.vercel.app/',
    image: '/images/cards/ecommerce.jpg',
  },
  {
    n: '05', type: 'TOOL', year: '2024',
    title: 'AI-Powered Resume Builder',
    decision: 'Used streaming responses over batch generation for perceived performance in the live preview panel — users see output in under 800ms.',
    desc: 'Resume builder using the OpenAI API to generate professional layouts instantly. Multiple templates, live preview, and PDF export. The streaming architecture makes generation feel instant.',
    tech: ['React', 'Tailwind CSS', 'OpenAI API'],
    live: null,
    image: '/images/cards/resume.png',
  },
  {
    n: '06', type: 'INTERFACE', year: '2023',
    title: 'Furniture Catalog Website',
    decision: 'Framer Motion over CSS transitions for product-reveal sequences that required precise timeline and stagger control.',
    desc: 'A responsive furniture catalog with smooth reveal animations, product detail pages, and a wishlist feature. Built for a boutique furniture brand with a focus on visual quality and browsing feel.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://furniro-rizvi.netlify.app/',
    image: '/images/cards/furniture.jpg',
  },
  {
    n: '07', type: 'INTERFACE', year: '2024',
    title: 'Portfolio Website',
    decision: 'Chose ShadCN UI for consistent component primitives without the overhead of designing a custom system from scratch.',
    desc: 'Personal portfolio showcasing projects, skills, and a functional contact form. Built with React and TypeScript, designed with a clean minimalist aesthetic. EmailJS powers the contact form without a backend.',
    tech: ['React', 'TypeScript', 'ShadCN UI'],
    live: null,
    image: '/images/cards/portfolio.png',
  },
  {
    n: '08', type: 'INTERFACE', year: '2024',
    title: 'Restaurant Website',
    decision: 'Framer Motion scroll-triggered animations guide user attention through the menu sequence without relying on manual scroll events.',
    desc: 'A modern restaurant landing page with menu highlights, gallery, and smooth scroll-triggered animations. Dynamically generated menu sections with high-quality imagery and a mobile-first responsive layout.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://restaurant-rizvi.netlify.app/',
    image: '/images/cards/resturant.jpg',
  },
];

const techStack = {
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

// ─── Main component ───────────────────────────────────────────────────────────

export default function DesignTemplate() {
  const [isDark, setIsDark] = useState(true);
  const C = isDark ? darkC : lightC;

  // Helpers defined as closures so they capture the reactive C
  function Rule({ opacity = '0.10' }: { opacity?: string }) {
    return <div style={{ height: '1px', background: `rgba(${C.baseRgb},${opacity})`, flexShrink: 0 }} />;
  }
  function CopperBlock({ w = 8, h = 14 }: { w?: number; h?: number }) {
    return <div style={{ width: w, height: h, background: C.copper, flexShrink: 0 }} />;
  }
  function SectionLabel({ children, copper = false }: { children: React.ReactNode; copper?: boolean }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '64px' }}>
        {copper && <CopperBlock />}
        <span style={{ fontFamily: C.mono, fontSize: '0.70rem', letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: copper ? C.copper : C.i55 }}>
          {children}
        </span>
      </div>
    );
  }
  function ProjectImage({ src, ratio, alt }: { src: string; ratio: string; alt: string }) {
    return (
      <div style={{ width: '100%', aspectRatio: ratio, background: C.surface, overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.85)' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
      </div>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Global resets for this page ── */
        .dt * { box-sizing: border-box; }
        .dt a { text-decoration: none; }
        .dt, .dt section, .dt nav, .dt footer { transition: background 200ms ease; }

        /* ── Navbar links ── */
        .dt-nav-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          letter-spacing: 0.10em;
          color: ${C.i55};
          transition: color 150ms ease;
        }
        .dt-nav-link:hover { color: ${C.ivory}; }
        .dt-nav-link.is-active {
          color: ${C.ivory};
          border-bottom: 1px solid #B87333;
          padding-bottom: 3px;
        }
        .dt-resume {
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          color: #B87333;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 150ms ease;
        }
        .dt-resume:hover { color: #C8924A; }
        .dt-resume .arr { display: inline-block; transition: transform 180ms ease-out; }
        .dt-resume:hover .arr { transform: translateX(4px); }

        /* ── CTA links ── */
        .dt-cta {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          color: #B87333;
          transition: color 150ms ease;
          cursor: pointer;
        }
        .dt-cta:hover { color: #C8924A; }
        .dt-cta .arr { display: inline-block; transition: transform 180ms ease-out; }
        .dt-cta:hover .arr { transform: translateX(5px); }

        .dt-cta-muted {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Space Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          color: ${C.i35};
          transition: color 150ms ease;
          cursor: pointer;
        }
        .dt-cta-muted:hover { color: ${C.i65}; }

        .dt-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          color: ${C.i40};
          transition: color 150ms ease;
          cursor: pointer;
        }
        .dt-cta-secondary:hover { color: ${C.i75}; }

        /* ── Work Index rows ── */
        .wi-row {
          display: flex;
          align-items: center;
          height: 64px;
          gap: 16px;
          background: ${C.surface};
          cursor: pointer;
          transition: background 150ms ease;
        }
        .wi-row:hover { background: ${C.surfaceHov}; }
        .wi-name {
          flex: 1;
          font-family: 'Lora', serif;
          font-size: 1.05rem;
          color: ${C.i90};
          transition: color 150ms ease;
        }
        .wi-row:hover .wi-name { color: ${C.ivory}; }
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

        /* ── Contact direct rows ── */
        .ct-row {
          display: flex;
          align-items: center;
          padding: 20px 0;
          cursor: pointer;
          transition: background 150ms ease;
        }
        .ct-row:hover { background: rgba(184,115,51,0.04); padding-left: 8px; padding-right: 8px; margin-left: -8px; margin-right: -8px; }
        .ct-arr {
          display: inline-block;
          color: #B87333;
          font-family: 'Space Mono', monospace;
          transition: transform 180ms ease-out;
        }
        .ct-row:hover .ct-arr { transform: translateX(5px); }

        /* ── Form inputs ── */
        .dt-input {
          display: block;
          width: 100%;
          background: transparent;
          border: 1px solid ${C.i10};
          border-radius: 0;
          color: ${C.i90};
          font-family: 'Lora', serif;
          font-size: 1rem;
          padding: 14px 16px;
          outline: none;
          transition: border-color 150ms ease;
        }
        .dt-input:focus { border-color: rgba(184,115,51,0.50); }
        textarea.dt-input { resize: vertical; min-height: 140px; }

        /* ── Submit button ── */
        .dt-submit {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid #B87333;
          background: transparent;
          color: #B87333;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          padding: 10px 24px;
          cursor: pointer;
          transition: background 150ms ease;
        }
        .dt-submit:hover { background: rgba(184,115,51,0.08); }

        /* ── Footer links ── */
        .dt-footer-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          color: ${C.i30};
          transition: color 150ms ease;
        }
        .dt-footer-link:hover { color: #B87333; }

        /* ── Theme toggle button ── */
        .dt-theme-btn {
          font-family: 'Space Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: ${C.i45};
          background: transparent;
          border: 1px solid ${C.i20};
          padding: 4px 10px;
          cursor: pointer;
          transition: color 150ms ease, border-color 150ms ease;
        }
        .dt-theme-btn:hover { color: #B87333; border-color: #B87333; }

        /* ── Responsive ── */
        @media (max-width: 1023px) {
          .dt-nav-links { display: none !important; }
          .dt-hero-inner { grid-template-columns: 1fr !important; }
          .dt-about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 767px) {
          .dt-secondary-grid { grid-template-columns: 1fr !important; }
          .dt-craft-grid { grid-template-columns: 1fr !important; }
          .dt-exp-row { flex-direction: column !important; gap: 2px !important; align-items: flex-start !important; }
          .dt-wi-type { display: none !important; }
          .dt-wi-year { display: none !important; }
          .dt-footer-inner { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .dt-footer-links { flex-wrap: wrap !important; gap: 16px !important; }
        }
      `}} />

      {/* ── Page wrapper: fixed full-screen overlay so the root layout doesn't interfere ── */}
      <div
        className="dt"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          overflowY: 'auto',
          overflowX: 'hidden',
          background: C.bg,
          color: C.ivory,
          fontFamily: C.body,
        }}
      >

        {/* ================================================================
            01 — NAVBAR
        ================================================================ */}
        <nav style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 48px',
          background: C.navBg,
          borderBottom: `1px solid ${C.i08}`,
        }}>
          {/* Logo */}
          <a href="#" style={{
            fontFamily: C.display,
            fontWeight: 600,
            fontSize: '1.2rem',
            letterSpacing: '-0.01em',
            color: C.ivory,
          }}>
            Muhammad Abrar
          </a>

          {/* Center nav links — desktop */}
          <ul
            className="dt-nav-links"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '40px',
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}
          >
            {[
              { label: 'Work',       href: '#work' },
              { label: 'About',      href: '/about' },
              { label: 'Craft',      href: '#craft' },
              { label: 'Experience', href: '#experience' },
              { label: 'Contact',    href: '#contact' },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="dt-nav-link">{label}</a>
              </li>
            ))}
          </ul>

          {/* Right: theme toggle + resume */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>

            {/* Theme toggle */}
            <button
              className="dt-theme-btn"
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? 'Light' : 'Dark'}
            </button>

            <a href="#" className="dt-resume">
              Resume <span className="arr">→</span>
            </a>
          </div>
        </nav>


        {/* ================================================================
            02 — HERO
        ================================================================ */}
        <section
          id="home"
          style={{
            position: 'relative',
            minHeight: 'calc(100vh - 64px)',
            background: C.bg,
            padding: '56px 48px 80px',
            overflow: 'hidden',
          }}
        >
          {/* Ghost text — "ABRAR" — right side, barely visible */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: '-40px',
              top: '50%',
              transform: 'translateY(-58%)',
              fontFamily: C.display,
              fontWeight: 300,
              fontSize: 'clamp(180px, 22vw, 320px)',
              lineHeight: 1,
              color: C.i03,
              userSelect: 'none',
              pointerEvents: 'none',
              letterSpacing: '-0.04em',
              whiteSpace: 'nowrap',
            }}
          >
            ABRAR
          </div>

          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
            <div
              className="dt-hero-inner"
              style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '48px', alignItems: 'start' }}
            >
              {/* Text column */}
              <div>
                {/* Pre-label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <CopperBlock />
                  <span style={{
                    fontFamily: C.mono,
                    fontSize: '0.70rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: C.i55,
                  }}>
                    AI Systems Engineer
                  </span>
                </div>

                {/* Display headline */}
                <h1 style={{
                  fontFamily: C.display,
                  fontWeight: 300,
                  fontSize: 'clamp(54px, 7.5vw, 108px)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.02em',
                  color: C.ivory,
                  margin: '0 0 14px',
                }}>
                  I build the<br />
                  systems that<br />
                  make <span style={{ color: C.copper }}>agents</span><br />
                  rel<span style={{ color: C.copper }}>i</span>able.
                </h1>

                {/* Name */}
                <div style={{ marginBottom: '14px' }}>
                  <p style={{
                    fontFamily: C.body,
                    fontWeight: 500,
                    fontSize: '1.05rem',
                    color: C.i80,
                    margin: 0,
                  }}>
                    Muhammad Abrar
                  </p>
                </div>

                {/* Rule */}
                <div style={{ height: '1px', background: C.i10, marginBottom: '14px', maxWidth: '560px' }} />

                {/* Bio */}
                <p style={{
                  fontFamily: C.body,
                  fontSize: '1.05rem',
                  lineHeight: 1.75,
                  color: C.i60,
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
                  <a href="#work" className="dt-cta" style={{ fontSize: '0.8rem', letterSpacing: '0.10em' }}>
                    See My Work <span className="arr">→</span>
                  </a>
                  <a href="#contact" className="dt-cta-muted">
                    or get in touch ↓
                  </a>
                </div>
              </div>
              {/* Right column — intentional negative space (ghost text handles visual mass) */}
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position: 'absolute',
            bottom: '28px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: C.mono,
            fontSize: '0.62rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: C.i30,
            userSelect: 'none',
          }}>
            ↓ scroll
          </div>
        </section>


        {/* ================================================================
            03 — SELECTED WORK
        ================================================================ */}
        <section id="work" style={{ background: C.bg, padding: '120px 48px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <SectionLabel>Selected Work — 03</SectionLabel>

            {/* ── Featured Project (01) ── */}
            <ProjectImage src={projects[0].image} ratio="16 / 7" alt={projects[0].title} />

            {/* Metadata strip */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '28px 0 8px' }}>
              <span style={{ fontFamily: C.mono, fontWeight: 700, fontSize: '0.78rem', color: C.copper }}>
                {projects[0].n}
              </span>
              <span style={{ color: C.i20, fontFamily: C.mono }}>·</span>
              <span style={{ fontFamily: C.mono, fontSize: '0.70rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.i55 }}>
                {projects[0].type}
              </span>
              <span style={{ color: C.i20, fontFamily: C.mono }}>·</span>
              <span style={{ fontFamily: C.mono, fontSize: '0.70rem', color: C.i45 }}>{projects[0].year}</span>
            </div>

            {/* Decision note */}
            <p style={{
              fontFamily: C.body,
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: C.i45,
              margin: '0 0 12px',
              lineHeight: 1.65,
            }}>
              {projects[0].decision}
            </p>

            {/* Title */}
            <h2 style={{
              fontFamily: C.display,
              fontWeight: 400,
              fontSize: 'clamp(38px, 5.5vw, 68px)',
              lineHeight: 1.0,
              color: C.ivory,
              margin: '0 0 20px',
            }}>
              {projects[0].title}
            </h2>

            {/* Description */}
            <p style={{
              fontFamily: C.body,
              fontSize: '1rem',
              lineHeight: 1.85,
              color: C.i60,
              maxWidth: '62ch',
              margin: '0 0 20px',
            }}>
              {projects[0].desc}
            </p>

            {/* Tech tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              {projects[0].tech.map((t) => (
                <span key={t} style={{
                  fontFamily: C.mono,
                  fontSize: '0.62rem',
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                  color: C.i35,
                  border: `1px solid ${C.i10}`,
                  padding: '4px 10px',
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <a href={`/project/1`} className="dt-cta">View Case Study <span className="arr">→</span></a>
              {projects[0].live && (
                <a href={projects[0].live} target="_blank" rel="noopener noreferrer" className="dt-cta-secondary">Live Site ↗</a>
              )}
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: C.i08, margin: '80px 0' }} />

            {/* ── Secondary Projects (02 & 03) ── */}
            <div
              className="dt-secondary-grid"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}
            >
              {projects.slice(1, 3).map((p) => (
                <div key={p.n}>
                  <ProjectImage src={p.image} ratio="16 / 10" alt={p.title} />

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '20px 0 8px' }}>
                    <span style={{ fontFamily: C.mono, fontWeight: 700, fontSize: '0.75rem', color: C.copper }}>{p.n}</span>
                    <span style={{ color: C.i20, fontFamily: C.mono }}>·</span>
                    <span style={{ fontFamily: C.mono, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.i55 }}>{p.type}</span>
                    <span style={{ color: C.i20, fontFamily: C.mono }}>·</span>
                    <span style={{ fontFamily: C.mono, fontSize: '0.68rem', color: C.i45 }}>{p.year}</span>
                  </div>

                  <p style={{
                    fontFamily: C.body,
                    fontStyle: 'italic',
                    fontSize: '0.85rem',
                    color: C.i40,
                    margin: '0 0 10px',
                    lineHeight: 1.6,
                  }}>
                    {p.decision}
                  </p>

                  <h3 style={{
                    fontFamily: C.display,
                    fontWeight: 400,
                    fontSize: 'clamp(22px, 2.5vw, 32px)',
                    lineHeight: 1.1,
                    color: C.ivory,
                    margin: '0 0 14px',
                  }}>
                    {p.title}
                  </h3>

                  <p style={{
                    fontFamily: C.body,
                    fontSize: '0.9rem',
                    lineHeight: 1.8,
                    color: C.i60,
                    margin: '0 0 20px',
                  }}>
                    {p.desc.substring(0, 160)}…
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                    <a href={`/project/${parseInt(p.n)}`} className="dt-cta">View Case Study <span className="arr">→</span></a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="dt-cta-secondary">Live ↗</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ================================================================
            04 — POSITIONING STRIP
        ================================================================ */}
        <section style={{ background: C.bg, padding: '80px 48px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Rule />

            <div style={{ padding: '64px 0 64px 40px', position: 'relative' }}>
              {/* Decorative opening quote */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '28px',
                  fontFamily: C.display,
                  fontWeight: 300,
                  fontSize: '5.5rem',
                  lineHeight: 1,
                  color: 'rgba(244,235,208,0.12)',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                &ldquo;
              </span>

              <p style={{
                fontFamily: C.display,
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
                lineHeight: 1.75,
                color: C.i80,
                margin: 0,
              }}>
                The most expensive mistake in AI engineering is building the
                agent before designing the failure mode.
              </p>
            </div>

            <Rule />
          </div>
        </section>


        {/* ================================================================
            05 — CRAFT
        ================================================================ */}
        <section id="craft" style={{ background: C.bg, padding: '120px 48px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <SectionLabel>Craft</SectionLabel>

            {/* Philosophy paragraph — centered reading column */}
            <div style={{ maxWidth: '65ch', margin: '0 auto 80px', textAlign: 'center' }}>
              <p style={{
                fontFamily: C.body,
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                lineHeight: 1.9,
                color: C.i80,
                margin: 0,
              }}>
                I approach AI systems the way a relay engineer approaches a
                network — every component must handle the case where the
                component upstream of it fails. I have built agent pipelines
                that degraded gracefully when the model returned garbage
                because I designed them to expect it.
              </p>
            </div>

            <Rule opacity="0.08" />

            {/* Three-column tech inventory */}
            <div
              className="dt-craft-grid"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px', marginTop: '64px' }}
            >
              {(Object.entries(techStack) as [string, string[]][]).map(([stage, items]) => (
                <div key={stage}>
                  {/* Stage header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                    <CopperBlock w={6} h={12} />
                    <span style={{
                      fontFamily: C.mono,
                      fontSize: '0.68rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: C.copper,
                    }}>
                      {stage}
                    </span>
                  </div>
                  {/* Items */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {items.map((item) => (
                      <li key={item} style={{
                        fontFamily: C.mono,
                        fontSize: '0.84rem',
                        color: C.i55,
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


        {/* ================================================================
            06 — WORK INDEX
        ================================================================ */}
        <section
          id="work-index"
          style={{
            background: C.surface,
            borderTop: `1px solid ${C.i06}`,
            padding: '80px 0',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
            <SectionLabel>All Work</SectionLabel>

            {/* Column headers */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              paddingBottom: '12px',
            }}>
              <div style={{ width: '56px', textAlign: 'right', flexShrink: 0, fontFamily: C.mono, fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.i35 }}>№</div>
              <div style={{ flex: 1, fontFamily: C.mono, fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.i35 }}>Project Name</div>
              <div className="dt-wi-type" style={{ width: '160px', flexShrink: 0, fontFamily: C.mono, fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.i35 }}>Type</div>
              <div className="dt-wi-year" style={{ width: '80px', textAlign: 'right', flexShrink: 0, fontFamily: C.mono, fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.i35 }}>Year</div>
              <div style={{ width: '48px', flexShrink: 0 }} />
            </div>

            <Rule opacity="0.08" />

            {/* Rows — projects 04–08 */}
            {projects.slice(3).map((p) => (
              <div key={p.n}>
                <a href={`/project/${parseInt(p.n)}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="wi-row">
                    <div style={{ width: '56px', textAlign: 'right', flexShrink: 0, fontFamily: C.mono, fontWeight: 700, fontSize: '0.8rem', color: C.copper }}>{p.n}</div>
                    <div className="wi-name">{p.title}</div>
                    <div className="dt-wi-type" style={{ width: '160px', flexShrink: 0, fontFamily: C.mono, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.i55 }}>{p.type}</div>
                    <div className="dt-wi-year" style={{ width: '80px', textAlign: 'right', flexShrink: 0, fontFamily: C.mono, fontSize: '0.70rem', color: C.i45 }}>{p.year}</div>
                    <div style={{ width: '48px', flexShrink: 0, textAlign: 'right' }}>
                      <span className="wi-arr">→</span>
                    </div>
                  </div>
                </a>
                <Rule opacity="0.08" />
              </div>
            ))}

            {/* Mid-page soft CTA */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              paddingTop: '48px',
              flexWrap: 'wrap',
            }}>
              <span style={{ fontFamily: C.mono, fontSize: '0.70rem', letterSpacing: '0.06em', color: C.i35 }}>
                Have a project that needs an AI systems engineer?
              </span>
              <a href="#contact" className="dt-cta">Get in touch <span className="arr">→</span></a>
            </div>
          </div>
        </section>


        {/* ================================================================
            07 — EXPERIENCE
        ================================================================ */}
        <section id="experience" style={{ background: C.bg, padding: '120px 48px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <SectionLabel>Experience</SectionLabel>

            {/* Entry 01 */}
            <div style={{ marginBottom: '56px' }}>
              <div className="dt-exp-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <span style={{ fontFamily: C.body, fontWeight: 500, fontSize: '1.1rem', color: C.i90 }}>
                  AI Systems Engineer
                </span>
                <span style={{ fontFamily: C.mono, fontSize: '0.75rem', color: C.i35, flexShrink: 0, marginLeft: '16px' }}>
                  2023 – Present
                </span>
              </div>
              <div style={{ fontFamily: C.mono, fontSize: '0.75rem', letterSpacing: '0.06em', color: C.i40, marginBottom: '16px' }}>
                Remote · Multiple Clients
              </div>
              <div style={{ height: '1px', background: C.i08, marginBottom: '20px' }} />
              <p style={{ fontFamily: C.body, fontSize: '1rem', lineHeight: 1.85, color: C.i65, maxWidth: '62ch', margin: 0 }}>
                Built agentic AI systems and RAG pipelines for software companies
                developing LLM-powered products. Designed MCP server architectures
                and automation workflows for distributed AI teams. Primary stack:
                FastAPI, Next.js, Anthropic and OpenAI APIs.
              </p>
            </div>

            {/* Entry 02 */}
            <div style={{ marginBottom: '56px' }}>
              <div className="dt-exp-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <span style={{ fontFamily: C.body, fontWeight: 500, fontSize: '1.1rem', color: C.i90 }}>
                  Full-Stack Developer
                </span>
                <span style={{ fontFamily: C.mono, fontSize: '0.75rem', color: C.i35, flexShrink: 0, marginLeft: '16px' }}>
                  2022 – 2023
                </span>
              </div>
              <div style={{ fontFamily: C.mono, fontSize: '0.75rem', letterSpacing: '0.06em', color: C.i40, marginBottom: '16px' }}>
                Remote · Freelance
              </div>
              <div style={{ height: '1px', background: C.i08, marginBottom: '20px' }} />
              <p style={{ fontFamily: C.body, fontSize: '1rem', lineHeight: 1.85, color: C.i65, maxWidth: '62ch', margin: 0 }}>
                Developed full-stack web applications with Next.js and FastAPI.
                Transitioned focus to AI-powered features and LLM integrations
                mid-year after shipping a production RAG prototype that performed
                well under real domain queries.
              </p>
            </div>

            <Rule opacity="0.08" />

            {/* Resume download */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '24px' }}>
              <span style={{ fontFamily: C.mono, fontSize: '0.70rem', color: C.i35 }}>
                Full curriculum vitae
              </span>
              <a href="#" className="dt-cta">Download <span className="arr">→</span></a>
            </div>
          </div>
        </section>


        {/* ================================================================
            08 — INTERSTITIAL QUOTE
        ================================================================ */}
        <section style={{ background: C.bg, padding: '80px 48px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{
              fontFamily: C.display,
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(24px, 3.5vw, 44px)',
              lineHeight: 1.2,
              color: C.i75,
              margin: 0,
              maxWidth: '680px',
            }}>
              The next system I build starts with a conversation about what fails first.
            </p>
          </div>
        </section>


        {/* ================================================================
            09 — ABOUT
        ================================================================ */}
        <section id="about" style={{ background: C.bg, padding: '120px 48px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
              className="dt-about-grid"
              style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '80px', alignItems: 'start' }}
            >

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
                    fontFamily: C.mono,
                    fontSize: '0.70rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: C.copper,
                  }}>
                    About
                  </span>
                </div>

                {/* Editorial headline */}
                <h2 style={{
                  fontFamily: C.display,
                  fontWeight: 400,
                  fontSize: 'clamp(32px, 3.8vw, 54px)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.01em',
                  color: C.ivory,
                  margin: '0 0 36px',
                }}>
                  I build the infrastructure<br />
                  that keeps AI systems honest<br />
                  when edge cases arrive.
                </h2>

                {/* Body paragraphs */}
                <p style={{
                  fontFamily: C.body,
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  color: C.i65,
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
                  fontFamily: C.body,
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  color: C.i65,
                  margin: '0 0 20px',
                  maxWidth: '52ch',
                }}>
                  I design failure modes before they reach production — building the tooling
                  and architectures that keep agentic systems predictable at scale. I work
                  remotely with teams building LLM-powered products, primarily using the
                  Anthropic and OpenAI APIs, FastAPI, and Next.js.
                </p>

                <p style={{
                  fontFamily: C.body,
                  fontSize: '1rem',
                  lineHeight: 1.85,
                  color: C.i65,
                  margin: '0 0 40px',
                  maxWidth: '52ch',
                }}>
                  When I&apos;m not shipping agents, I&apos;m reading systems papers and thinking
                  about what the next generation of AI infrastructure should look like.
                </p>

                <Rule opacity="0.08" />

                {/* Fact list */}
                <div style={{ padding: '24px 0 32px' }}>
                  {[
                    { label: 'Based in',   value: 'Lahore, Pakistan · Remote-first' },
                    { label: 'Focus',      value: 'Agentic AI · RAG · Full-stack AI' },
                    { label: 'Available',  value: 'Immediately · Contract & Full-time' },
                    { label: 'Languages',  value: 'English · Urdu' },
                  ].map(({ label, value }) => (
                    <div key={label} style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '24px',
                      marginBottom: '14px',
                    }}>
                      <span style={{
                        fontFamily: C.mono,
                        fontSize: '0.62rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: C.copper,
                        width: '90px',
                        flexShrink: 0,
                      }}>
                        {label}
                      </span>
                      <span style={{
                        fontFamily: C.mono,
                        fontSize: '0.80rem',
                        color: C.i55,
                      }}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <Rule opacity="0.08" />

                {/* Resume CTA */}
                <div style={{ paddingTop: '24px' }}>
                  <a href="#" className="dt-resume">
                    Resume <span className="arr">→</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* ================================================================
            10 — CONTACT
        ================================================================ */}
        <section
          id="contact"
          style={{
            background: C.surface,
            borderTop: `1px solid ${C.i06}`,
            padding: '120px 0',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 48px' }}>

            {/* Section label — copper block (only section that uses this) */}
            <SectionLabel copper>Contact</SectionLabel>

            {/* Invitation headline */}
            <h2 style={{
              fontFamily: C.display,
              fontWeight: 400,
              fontSize: 'clamp(34px, 5vw, 60px)',
              lineHeight: 1.0,
              color: C.ivory,
              margin: '0 0 24px',
            }}>
              I&apos;m between engagements.<br />
              If the project is right,<br />
              I can start immediately.
            </h2>

            {/* Availability body */}
            <p style={{
              fontFamily: C.body,
              fontSize: '1rem',
              lineHeight: 1.8,
              color: C.i60,
              margin: '0 0 56px',
              maxWidth: '52ch',
            }}>
              I&apos;m looking for work in agentic AI, RAG systems, or full-stack
              AI applications. I respond within 48 hours.
            </p>

            {/* Direct access rows */}
            <div style={{ marginBottom: '56px' }}>
              <Rule opacity="0.08" />

              {[
                { label: 'EMAIL',    value: 'abrarrizvi1999@gmail.com',              href: 'mailto:abrarrizvi1999@gmail.com' },
                { label: 'GITHUB',   value: 'github.com/Abrar-Rizvi',               href: 'https://github.com/Abrar-Rizvi' },
                { label: 'LINKEDIN', value: 'linkedin.com/in/abrar-rizvi',          href: 'https://www.linkedin.com/in/abrar-rizvi/' },
              ].map((row) => (
                <div key={row.label}>
                  <a href={row.href} className="ct-row">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '140px', flexShrink: 0 }}>
                      <CopperBlock w={7} h={12} />
                      <span style={{
                        fontFamily: C.mono,
                        fontSize: '0.68rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: C.copper,
                      }}>
                        {row.label}
                      </span>
                    </div>
                    <span style={{ flex: 1, fontFamily: C.body, fontSize: '0.95rem', color: C.i80 }}>
                      {row.value}
                    </span>
                    <span className="ct-arr">→</span>
                  </a>
                  <Rule opacity="0.08" />
                </div>
              ))}
            </div>

            {/* Optional message form */}
            <p style={{
              fontFamily: C.mono,
              fontSize: '0.70rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: C.i45,
              margin: '0 0 24px',
            }}>
              Or send a message directly —
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: C.mono,
                  fontSize: '0.62rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: C.i45,
                  marginBottom: '8px',
                }}>
                  Your Name
                </label>
                <input type="text" className="dt-input" />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontFamily: C.mono,
                  fontSize: '0.62rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: C.i45,
                  marginBottom: '8px',
                }}>
                  Email Address
                </label>
                <input type="email" className="dt-input" />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontFamily: C.mono,
                  fontSize: '0.62rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: C.i45,
                  marginBottom: '8px',
                }}>
                  Message
                </label>
                <textarea className="dt-input" rows={5} />
              </div>

              <div>
                <button type="submit" className="dt-submit">
                  Send Message →
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* ================================================================
            10 — FOOTER
        ================================================================ */}
        <footer style={{
          background: C.bg,
          borderTop: '1px solid rgba(244,235,208,0.08)',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <div
            className="dt-footer-inner"
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 48px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontFamily: C.mono, fontSize: '0.72rem', color: C.i30 }}>
              Muhammad Abrar — 2026
            </span>

            <div
              className="dt-footer-links"
              style={{ display: 'flex', gap: '32px' }}
            >
              {[
                { label: 'GitHub',   href: 'https://github.com/Abrar-Rizvi' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abrar-rizvi/' },
                { label: 'X',        href: 'https://x.com/abrar8949' },
                { label: 'Email',    href: 'mailto:abrarrizvi1999@gmail.com' },
              ].map(({ label, href }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="dt-footer-link">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </footer>

      </div>{/* end .dt */}
    </>
  );
}
