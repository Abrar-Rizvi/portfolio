"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { RESUME_PATH } from "@/lib/constants";

const navLinks = [
  { label: 'Projects',   href: '#work' },
  { label: 'About',      href: '#about' },
  { label: 'Craft',      href: '#craft' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-resume { display: inline-flex; align-items: center; gap: 6px; }
        .nav-resume .arr { display: inline-block; transition: transform 180ms ease-out; }
        .nav-resume:hover .arr { transform: translateX(4px); }
        .nav-link.is-active { color: #F4EBD0; border-bottom: 1px solid #B87333; padding-bottom: 3px; }
      `}</style>
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        background: 'rgba(17,17,17,0.96)',
        borderBottom: '1px solid rgba(244,235,208,0.08)',
      }}>
        {/* Logo */}
        <a href="#" style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 600,
          fontSize: '1.2rem',
          letterSpacing: '-0.01em',
          color: '#F4EBD0',
          textDecoration: 'none',
        }}>
          Muhammad Abrar
        </a>

        {/* Center links — desktop only */}
        <ul className="hidden lg:flex" style={{
          alignItems: 'center',
          gap: '40px',
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="nav-link">{label}</a>
            </li>
          ))}
        </ul>

        {/* Right: Resume (desktop) + Hamburger (mobile) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a href={RESUME_PATH} download className="nav-resume hidden lg:block">
            Resume <span className="arr">→</span>
          </a>
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              color: '#F4EBD0',
              lineHeight: 0,
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          background: 'rgba(17,17,17,0.98)',
          borderBottom: '1px solid rgba(244,235,208,0.08)',
          zIndex: 49,
        }}>
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav-link"
              style={{ display: 'block', padding: '16px 24px', borderBottom: '1px solid rgba(244,235,208,0.06)' }}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
