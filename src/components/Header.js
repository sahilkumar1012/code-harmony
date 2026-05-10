import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../UserContext';
import logoDark from '../assets/header/logo-dark.png';
import logoLight from '../assets/header/logo-light.png';

export default function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useUser();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/dsasheet', label: 'DSA Sheet' },
    { path: '/mentorship', label: 'Mentors' },
  ];

  const active = links.find(l => l.path === location.pathname)?.path || '/';

  return (
    <nav style={{
      position: 'fixed', top: 14, left: '50%', transform: 'translateX(-50%)',
      width: 'min(94%, 880px)', zIndex: 200, borderRadius: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '10px 10px 10px 22px',
      background: scrolled ? 'var(--glass-bg-strong)' : 'var(--glass-bg)',
      backdropFilter: `blur(${scrolled ? 32 : 20}px)`,
      WebkitBackdropFilter: `blur(${scrolled ? 32 : 20}px)`,
      border: `1px solid var(--glass-border)`,
      boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.1)' : '0 4px 20px rgba(0,0,0,0.05)',
      transition: 'all 0.35s ease',
    }}>
      <div
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => navigate('/')}
      >
        <img
          src={theme === 'dark' ? logoLight : logoDark}
          alt="Code Harmony"
          style={{ height: 36, width: 'auto' }}
        />
      </div>

      <div className="ch-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {links.map(l => (
          <button key={l.path} onClick={() => navigate(l.path)} style={{
            background: active === l.path ? 'rgba(232,81,61,0.1)' : 'transparent',
            border: 'none', padding: '8px 16px', borderRadius: 100, cursor: 'pointer',
            fontWeight: active === l.path ? 600 : 500, fontSize: 14, fontFamily: 'var(--font)',
            color: active === l.path ? 'var(--accent)' : 'var(--text-secondary)',
            transition: 'all 0.2s',
          }}>
            {l.label}
          </button>
        ))}
        <button onClick={toggleTheme} title="Toggle theme" style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: '8px', borderRadius: 100,
          fontSize: 16, lineHeight: 1, color: 'var(--text-secondary)', transition: 'color 0.2s',
          display: 'flex', alignItems: 'center',
        }}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <div style={{ width: 1, height: 20, background: 'rgba(0,0,0,0.08)', margin: '0 6px' }} />
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)', fontFamily: 'var(--font)' }}>
              {user.name?.split(' ')[0]}
            </span>
            <button onClick={logout} style={{
              background: 'rgba(0,0,0,0.06)', border: 'none', padding: '8px 16px', borderRadius: 100,
              cursor: 'pointer', fontWeight: 600, fontSize: 13, fontFamily: 'var(--font)',
              color: 'var(--text-secondary)', transition: 'all 0.25s',
            }}>
              Sign out
            </button>
          </div>
        ) : (
          <button onClick={() => navigate('/mentorship')} style={{
            background: 'linear-gradient(135deg, var(--accent), #c44dff)',
            border: 'none', padding: '8px 20px', borderRadius: 100, cursor: 'pointer',
            fontWeight: 600, fontSize: 13, fontFamily: 'var(--font)', color: '#fff',
            boxShadow: '0 2px 12px var(--accent-glow)', transition: 'all 0.25s',
          }}>
            Find Mentor →
          </button>
        )}
      </div>
    </nav>
  );
}
