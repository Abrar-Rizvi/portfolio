"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

function Rule({ opacity = '0.08' }: { opacity?: string }) {
  return (
    <div style={{ height: '1px', background: `rgba(244,235,208,${opacity})`, flexShrink: 0 }} />
  );
}

function CopperBlock({ w = 7, h = 12 }: { w?: number; h?: number }) {
  return <div style={{ width: w, height: h, background: '#B87333', flexShrink: 0 }} />;
}

const directLinks = [
  { label: 'EMAIL',    value: 'abrarrizvi1999@gmail.com',             href: 'mailto:abrarrizvi1999@gmail.com' },
  { label: 'GITHUB',   value: 'github.com/Abrar-Rizvi',               href: 'https://github.com/Abrar-Rizvi' },
  { label: 'LINKEDIN', value: 'linkedin.com/in/abrar-rizvi',          href: 'https://www.linkedin.com/in/abrar-rizvi/' },
];

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <style>{`
        .ct-row {
          display: flex;
          align-items: center;
          padding: 20px 0;
          cursor: pointer;
          transition: background 150ms ease, padding 150ms ease, margin 150ms ease;
          text-decoration: none;
        }
        .ct-row:hover {
          background: rgba(184,115,51,0.04);
          padding-left: 8px;
          padding-right: 8px;
          margin-left: -8px;
          margin-right: -8px;
        }
        .ct-arr {
          display: inline-block;
          color: #B87333;
          font-family: 'Space Mono', monospace;
          font-size: 0.9rem;
          transition: transform 180ms ease-out;
        }
        .ct-row:hover .ct-arr { transform: translateX(5px); }
        .ct-input {
          display: block;
          width: 100%;
          background: transparent;
          border: 1px solid rgba(244,235,208,0.10);
          border-radius: 0;
          color: rgba(244,235,208,0.85);
          font-family: 'Lora', Georgia, serif;
          font-size: 1rem;
          padding: 14px 16px;
          outline: none;
          transition: border-color 150ms ease;
        }
        .ct-input:focus { border-color: rgba(184,115,51,0.50); }
        .ct-input.error { border-color: rgba(184,115,51,0.60); }
        textarea.ct-input { resize: vertical; min-height: 140px; }
        .ct-submit {
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
        .ct-submit:hover { background: rgba(184,115,51,0.08); }
        .ct-submit:disabled { opacity: 0.5; cursor: not-allowed; }
        .ct-submit .arr { display: inline-block; transition: transform 180ms ease-out; }
        .ct-submit:not(:disabled):hover .arr { transform: translateX(4px); }
        .ct-success {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          border: 1px solid rgba(184,115,51,0.30);
          background: rgba(184,115,51,0.04);
          margin-bottom: 32px;
        }
      `}</style>

      <section
        id="contact"
        style={{
          background: '#1A1A1A',
          borderTop: '1px solid rgba(244,235,208,0.06)',
          padding: '120px 0',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 48px' }}>

          {/* Section label — copper block */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '64px' }}>
            <CopperBlock />
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.70rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#B87333',
            }}>
              Contact
            </span>
          </div>

          {/* Headline */}
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 400,
            fontSize: 'clamp(34px, 5vw, 60px)',
            lineHeight: 1.0,
            color: '#F4EBD0',
            margin: '0 0 24px',
          }}>
            I&apos;m between engagements.<br />
            If the project is right,<br />
            I can start immediately.
          </h2>

          {/* Availability body */}
          <p style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'rgba(244,235,208,0.60)',
            margin: '0 0 56px',
            maxWidth: '52ch',
          }}>
            I&apos;m looking for work in agentic AI, RAG systems, or full-stack
            AI applications. I respond within 48 hours.
          </p>

          {/* Direct-access rows */}
          <div style={{ marginBottom: '56px' }}>
            <Rule />
            {directLinks.map((row) => (
              <div key={row.label}>
                <a href={row.href} className="ct-row" target={row.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '140px', flexShrink: 0 }}>
                    <CopperBlock />
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.68rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#B87333',
                    }}>
                      {row.label}
                    </span>
                  </div>
                  <span style={{ flex: 1, fontFamily: "'Lora', Georgia, serif", fontSize: '0.95rem', color: 'rgba(244,235,208,0.80)' }}>
                    {row.value}
                  </span>
                  <span className="ct-arr">→</span>
                </a>
                <Rule />
              </div>
            ))}
          </div>

          {/* Form intro */}
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.70rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(244,235,208,0.45)',
            margin: '0 0 24px',
          }}>
            Or send a message directly —
          </p>

          {/* Success message */}
          {isSubmitted && (
            <div className="ct-success">
              <span style={{ color: '#B87333', fontFamily: "'Space Mono', monospace", fontSize: '0.8rem', marginTop: '1px' }}>✓</span>
              <div>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.9rem', color: 'rgba(244,235,208,0.80)', margin: '0 0 4px' }}>
                  Message sent.
                </p>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.06em', color: 'rgba(244,235,208,0.40)', margin: 0 }}>
                  I&apos;ll respond within 48 hours.
                </p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Name */}
            <div>
              <label style={{
                display: 'block',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(244,235,208,0.45)',
                marginBottom: '8px',
              }}>
                Your Name
              </label>
              <input
                type="text"
                className={`ct-input${errors.name ? ' error' : ''}`}
                {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'At least 2 characters' } })}
              />
              {errors.name && (
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.60rem', letterSpacing: '0.06em', color: 'rgba(184,115,51,0.80)', margin: '6px 0 0' }}>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label style={{
                display: 'block',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(244,235,208,0.45)',
                marginBottom: '8px',
              }}>
                Email Address
              </label>
              <input
                type="email"
                className={`ct-input${errors.email ? ' error' : ''}`}
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Enter a valid email' },
                })}
              />
              {errors.email && (
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.60rem', letterSpacing: '0.06em', color: 'rgba(184,115,51,0.80)', margin: '6px 0 0' }}>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label style={{
                display: 'block',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(244,235,208,0.45)',
                marginBottom: '8px',
              }}>
                Message
              </label>
              <textarea
                rows={5}
                className={`ct-input${errors.message ? ' error' : ''}`}
                {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'At least 10 characters' } })}
              />
              {errors.message && (
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.60rem', letterSpacing: '0.06em', color: 'rgba(184,115,51,0.80)', margin: '6px 0 0' }}>
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <div>
              <button type="submit" disabled={isSubmitting} className="ct-submit">
                {isSubmitting ? 'Sending…' : <>Send Message <span className="arr">→</span></>}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
