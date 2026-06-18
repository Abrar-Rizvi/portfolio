const links = [
  { label: 'GitHub',   href: 'https://github.com/Abrar-Rizvi' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abrar-rizvi/' },
  { label: 'X',        href: 'https://x.com/abrar8949' },
  { label: 'Email',    href: 'mailto:abrarrizvi1999@gmail.com' },
];

export const Footer = () => (
  <footer style={{
    background: '#111111',
    borderTop: '1px solid rgba(244,235,208,0.08)',
    minHeight: '72px',
    display: 'flex',
    alignItems: 'center',
  }}>
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '16px 48px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
    }}>
      <span style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '0.72rem',
        color: 'rgba(244,235,208,0.30)',
      }}>
        Muhammad Abrar — 2026
      </span>

      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="footer-link"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);
