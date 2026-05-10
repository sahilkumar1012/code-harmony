import React from 'react';

function GoogleLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function MicrosoftLogo({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 21 21">
      <rect x="1" y="1" width="9" height="9" fill="#f25022"/>
      <rect x="11" y="1" width="9" height="9" fill="#7fba00"/>
      <rect x="1" y="11" width="9" height="9" fill="#00a4ef"/>
      <rect x="11" y="11" width="9" height="9" fill="#ffb900"/>
    </svg>
  );
}

function AmazonLogo({ size = 18, dark }) {
  return (
    <svg width={size * 2.6} height={size} viewBox="0 0 100 30">
      <path d="M39.5 22.4C35.9 25 30.7 26.5 26.2 26.5c-6.4 0-12.2-2.4-16.5-6.3-.3-.3 0-.7.4-.5 4.7 2.7 10.5 4.4 16.5 4.4 4 0 8.5-.8 12.6-2.6.6-.2 1.1.4.5.8z" fill="#FF9900"/>
      <path d="M40.9 20.8c-.5-.6-3.2-.3-4.4-.1-.4 0-.4-.3-.1-.5 2.1-1.5 5.7-1.1 6.1-.6.4.5-.1 4-2.1 5.7-.3.2-.6.1-.5-.2.5-1.1 1.5-3.7 1-4.3z" fill="#FF9900"/>
      <text x="6" y="17" fontFamily="sans-serif" fontWeight="800" fontSize="16" fill={dark ? '#fff' : '#232F3E'}>amazon</text>
    </svg>
  );
}

function MetaLogo({ size = 18, dark }) {
  return (
    <svg width={size * 2.2} height={size} viewBox="0 0 80 28">
      <defs>
        <linearGradient id="meta-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0081FB"/>
          <stop offset="100%" stopColor="#0064E0"/>
        </linearGradient>
      </defs>
      <path d="M10 5c-3 0-5 2.5-6.5 5L2 13c-1.3 2.5-2 4.5-2 6.5C0 22.5 1.5 25 5 25c2 0 3.5-1.2 5.5-4.5l1-1.7c.4-.7.8-1.4 1.2-2.1l.8 1.4.9 1.5C16.2 23 18 25 20.5 25c3.2 0 5-2.5 5-5.5 0-2-.8-4.2-2-6.5l-1.5-3C20 6.5 17.5 5 15 5c-2.5 0-4.5 2-6.5 5.5L8 11.5l-.5-1C5.5 7 4 5 2 5" fill="url(#meta-grad)" opacity="0.9"/>
      <text x="30" y="20" fontFamily="sans-serif" fontWeight="700" fontSize="18" fill={dark ? '#fff' : '#1877F2'}>Meta</text>
    </svg>
  );
}

function AdobeLogo({ size = 18 }) {
  return (
    <svg width={size * 2} height={size} viewBox="0 0 60 24">
      <path d="M0 22h8.5L13 11l-4.5-11H0v22z" fill="#FF0000"/>
      <path d="M22 0h-8.5L9 11l4.5 11H22V0z" fill="#FF0000"/>
      <path d="M11 14h5l2.5 8H15l-1.5-4H11z" fill="#FF0000"/>
      <text x="26" y="18" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill="#FF0000">Adobe</text>
    </svg>
  );
}

function GoldmanLogo({ size = 18, dark }) {
  return (
    <span style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: size * 0.85, color: dark ? '#a8bdd8' : '#1e3a5f', letterSpacing: '-0.5px', whiteSpace: 'nowrap' }}>
      Goldman Sachs
    </span>
  );
}

function PayPalLogo({ size = 18 }) {
  return (
    <svg width={size * 2.5} height={size} viewBox="0 0 100 26">
      <text x="0" y="18" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill="#003087">Pay</text>
      <text x="26" y="18" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill="#0070E0">Pal</text>
    </svg>
  );
}

function AppleLogo({ size = 18, dark }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.99 2.97 12.5 4.7 9.48C5.55 7.99 7.13 7.01 8.84 6.99C10.1 6.97 11.32 7.87 12.11 7.87C12.91 7.87 14.37 6.78 15.92 6.95C16.57 6.98 18.39 7.21 19.56 8.91C19.47 8.97 17.09 10.35 17.12 13.18C17.15 16.59 20.09 17.71 20.12 17.72C20.09 17.79 19.62 19.39 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill={dark ? '#fff' : '#000'}/>
    </svg>
  );
}

export const COMPANIES = [
  { name: 'Google', Logo: GoogleLogo },
  { name: 'Microsoft', Logo: MicrosoftLogo },
  { name: 'Amazon', Logo: AmazonLogo },
  { name: 'Meta', Logo: MetaLogo },
  { name: 'Adobe', Logo: AdobeLogo },
  { name: 'Goldman Sachs', Logo: GoldmanLogo },
  { name: 'PayPal', Logo: PayPalLogo },
  { name: 'Apple', Logo: AppleLogo },
];

export const COMPANY_COLORS = {
  'Google': '#4285F4', 'Microsoft': '#00A4EF', 'Amazon': '#FF9900',
  'Meta': '#0081FB', 'Adobe': '#FF0000', 'Goldman Sachs': '#1e3a5f',
  'PayPal': '#003087', 'Apple': '#555',
};

export function CompanyStrip({ dark }) {
  const doubled = [...COMPANIES, ...COMPANIES];
  return (
    <div style={{ overflow: 'hidden', padding: '40px 0', position: 'relative' }}>
      <p style={{ textAlign: 'center', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-secondary)', marginBottom: 28 }}>
        Our mentors work at
      </p>
      <div style={{ display: 'flex', animation: 'marquee 30s linear infinite', width: 'max-content' }}>
        {doubled.map((c, i) => (
          <div key={i} style={{
            padding: '14px 28px', margin: '0 10px', borderRadius: 14,
            background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
            border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <c.Logo size={20} dark={dark} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function CompanyBadge({ name, small }) {
  const c = COMPANY_COLORS[name] || '#666';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: small ? '3px 8px' : '4px 12px',
      borderRadius: 100, fontSize: small ? 10 : 11, fontWeight: 600,
      background: `${c}12`, color: c, whiteSpace: 'nowrap',
    }}>{name}</span>
  );
}
