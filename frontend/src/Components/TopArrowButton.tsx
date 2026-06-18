"use client"
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      suppressHydrationWarning
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        zIndex: 50,
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        border: '1px solid rgba(184,115,51,0.50)',
        color: '#B87333',
        cursor: 'pointer',
        transition: 'background 150ms ease, border-color 150ms ease',
        animation: 'fadeInUp 0.25s ease-out',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(184,115,51,0.08)';
        e.currentTarget.style.borderColor = '#B87333';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.borderColor = 'rgba(184,115,51,0.50)';
      }}
    >
      <ArrowUp size={16} strokeWidth={2} />
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </button>
  );
};
