import { useNavigate } from 'react-router-dom';
import logoLight from '../assets/header/logo-light.png';
import logoDark from '../assets/header/logo-dark.png';

export default function Footer() {
  const navigate = useNavigate();

  const cols = [
    { title: 'Product', links: [{ label: 'DSA Sheet', path: '/dsasheet' }, { label: 'Mentors', path: '/mentorship' }, { label: 'Mock Interviews', path: '/mentorship' }, { label: 'Resources', path: '/' }] },
    { title: 'Company', links: [{ label: 'About', path: '/about' }, { label: 'Contact', path: '/contact' }, { label: 'Become a Mentor', path: '/mentorship/onboard' }] },
    { title: 'Connect', links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/code-harmony-dev' },
      { label: 'YouTube', href: 'https://www.youtube.com/@CodeHarmony-Dev' },
      { label: 'Discord', href: 'https://discord.gg/codeharmony' },
      { label: 'X (Twitter)', href: 'https://twitter.com/codeharmonydev' },
    ]},
  ];

  return (
    <footer style={{ padding: '48px 24px', maxWidth: 1120, margin: '0 auto' }}>
      <div className="ch-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 40 }}>
        <div>
          <div style={{ marginBottom: 12 }}>
            <img src={logoDark} alt="Code Harmony" style={{ height: 100, width: 'auto' }} />
          </div>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 280, margin: 0, fontFamily: 'var(--font)' }}>
            Learn, grow, and succeed with the best coding resources and expert mentorship.
          </p>
        </div>
        {cols.map(col => (
          <div key={col.title}>
            <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 14, marginTop: 0, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)', fontFamily: 'var(--font)' }}>
              {col.title}
            </h4>
            {col.links.map(l => (
              <div key={l.label}
                style={{ fontSize: 14, color: 'var(--text-secondary)', padding: '4px 0', cursor: 'pointer', transition: 'color 0.2s', fontFamily: 'var(--font)' }}
                onClick={() => l.path ? navigate(l.path) : window.open(l.href, '_blank')}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                {l.label}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--text-secondary)', fontFamily: 'var(--font)' }}>
        <span>© 2025 Code Harmony. All rights reserved.</span>
        <span>Privacy Policy · Terms of Service</span>
      </div>
    </footer>
  );
}
