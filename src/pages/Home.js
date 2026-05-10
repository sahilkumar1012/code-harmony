import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeIn, AnimCounter } from '../components/Animations';
import { CompanyStrip } from '../components/Companies';
import { TypingAnimation, CodeBackground } from '../components/CodeAnimation';
import Footer from '../components/Footer';
import reviewsData from '../data/reviews.json';

/* ── Hero ── */
function HeroSection() {
  const navigate = useNavigate();
  return (
    <section style={{ paddingTop: 110, position: 'relative', overflow: 'hidden' }}>
      <CodeBackground />
      <div className="ch-section ch-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center', padding: '60px 24px 40px' }}>
        <FadeIn>
          <div className="ch-hero-left" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(232,81,61,0.08)', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite', display: 'inline-block' }}></span>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)', fontFamily: 'var(--font)' }}>500+ developers placed at top companies</span>
            </div>
            <h1 className="ch-hero-h1" style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: 20, marginTop: 0, fontFamily: 'var(--font)' }}>
              Land Your Dream Job<br/>
              <span style={{ background: 'linear-gradient(135deg, var(--accent), #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                In Big Tech
              </span>
            </h1>
            <p style={{ fontSize: 18, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 36, maxWidth: 460, fontFamily: 'var(--font)' }}>
              Expert mentorship from engineers at Google, Amazon, and Microsoft. Curated DSA problems. Mock interviews. Everything you need.
            </p>
            <div style={{ display: 'flex', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
              <button className="btn-accent" onClick={() => navigate('/mentorship')}>Our Mentors <span>→</span></button>
              <button className="btn-glass" onClick={() => navigate('/dsasheet')}>DSA Essentials Sheet</button>
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <div style={{ display: 'flex' }}>
                {['#f59e0b','#3b82f6','#10b981','#8b5cf6'].map((c,i) => (
                  <div key={i} style={{ width: 36, height: 36, borderRadius: '50%', background: `linear-gradient(135deg, ${c}, ${c}cc)`, border: '2.5px solid #fff', marginLeft: i > 0 ? -10 : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 700 }}>
                    {['S','P','A','M'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, fontFamily: 'var(--font)' }}>Trusted by 500+ developers</div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)', fontFamily: 'var(--font)' }}>⭐ 4.9/5 mentor rating</div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="ch-hero-right">
            <div className="glass-dark" style={{ padding: 24, position: 'relative' }}>
              <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }}></span>
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }}></span>
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840', display: 'inline-block' }}></span>
                <span style={{ marginLeft: 'auto', fontSize: 11, color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--mono)' }}>terminal</span>
              </div>
              <TypingAnimation />
              <div style={{ marginTop: 16, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['Arrays','Graphs','DP','Trees','Strings'].map(t => (
                  <span key={t} style={{ padding: '5px 12px', borderRadius: 100, fontSize: 11, fontWeight: 600, background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.06)', fontFamily: 'var(--font)' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Services ── */
function ServicesSection() {
  const navigate = useNavigate();
  const items = [
    { icon: '🎯', title: '1:1 Mentorship', desc: 'Personalized guidance from engineers at top companies. Career advice, resume reviews, and roadmap planning.', cta: 'Find Mentor', path: '/mentorship' },
    { icon: '📊', title: 'DSA Essentials', desc: '63 hand-picked problems from Google, Amazon, Microsoft & Meta interviews. Organized by topic with video explanations.', cta: 'Start Practicing', path: '/dsasheet' },
    { icon: '💬', title: 'Mock Interviews', desc: 'Realistic technical interviews with detailed feedback. Behavioral + coding rounds with experienced interviewers.', cta: 'Book Session', path: '/mentorship' },
  ];
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="ch-section">
        <FadeIn><h2 className="ch-section-title">Everything You Need to Crack Big Tech</h2></FadeIn>
        <FadeIn delay={0.1}><p className="ch-section-subtitle" style={{ maxWidth: 500, margin: '8px auto 0' }}>A complete toolkit designed by engineers who've been through the process</p></FadeIn>
        <div className="ch-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 48 }}>
          {items.map((s, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="glass" style={{ padding: 36, height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.35s, box-shadow 0.35s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, rgba(232,81,61,0.12), rgba(147,51,234,0.08))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 20 }}>{s.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, marginTop: 0, fontFamily: 'var(--font)' }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1, marginBottom: 20, fontFamily: 'var(--font)' }}>{s.desc}</p>
                <button onClick={() => navigate(s.path)} style={{
                  alignSelf: 'flex-start', padding: '9px 20px', borderRadius: 100,
                  background: 'rgba(232,81,61,0.08)', border: 'none', cursor: 'pointer',
                  fontSize: 13, fontWeight: 600, color: 'var(--accent)', fontFamily: 'var(--font)',
                  transition: 'background 0.2s',
                }}>{s.cta} →</button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Stats ── */
function StatsSection() {
  return (
    <section style={{ padding: '20px 0 80px' }}>
      <div className="ch-section">
        <FadeIn>
          <div className="glass-strong ch-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, overflow: 'hidden' }}>
            {[
              { n: 9, s: '+', l: 'Expert Mentors' },
              { n: 63, s: '', l: 'DSA Problems' },
              { n: 50, s: '+', l: 'Target Companies' },
              { n: 500, s: '+', l: 'Success Stories' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '36px 16px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
                <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-1px', background: 'linear-gradient(135deg, var(--accent), #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'var(--font)' }}>
                  <AnimCounter target={s.n} />{s.s}
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-secondary)', fontWeight: 500, marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font)' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Resources ── */
function ResourcesSection() {
  const videos = [
    { title: 'Two Sum — Most Asked Coding Interview Problem', topic: 'Arrays', views: '12K', href: 'https://www.youtube.com/@CodeHarmony-Dev' },
    { title: 'How My Friend Got Into Amazon as SDE-1', topic: 'Career', views: '8.5K', href: 'https://www.youtube.com/@CodeHarmony-Dev' },
    { title: 'Dynamic Programming — Fibonacci to Advanced', topic: 'DP', views: '6.2K', href: 'https://www.youtube.com/@CodeHarmony-Dev' },
  ];
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="ch-section">
        <FadeIn><h2 className="ch-section-title">Educational Resources</h2></FadeIn>
        <FadeIn delay={0.1}><p className="ch-section-subtitle">Free video tutorials on DSA, system design, and career growth</p></FadeIn>
        <div className="ch-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 48 }}>
          {videos.map((v, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="glass" style={{ overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s, box-shadow 0.3s' }}
                onClick={() => window.open(v.href, '_blank')}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                <div style={{ height: 160, background: `linear-gradient(135deg, hsl(${i * 40 + 10}, 70%, 55%), hsl(${i * 40 + 40}, 80%, 65%))`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <span style={{ position: 'absolute', top: 12, right: 12, padding: '4px 10px', borderRadius: 6, background: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: 11, fontWeight: 600, fontFamily: 'var(--font)' }}>{v.topic}</span>
                </div>
                <div style={{ padding: '20px 24px' }}>
                  <h4 style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.4, marginBottom: 8, marginTop: 0, fontFamily: 'var(--font)' }}>{v.title}</h4>
                  <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontFamily: 'var(--font)' }}>{v.views} views · Code Harmony</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.4}>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <button className="btn-glass" style={{ padding: '12px 28px' }} onClick={() => window.open('https://www.youtube.com/@CodeHarmony-Dev', '_blank')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" fill="#FF0000"/><path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" fill="#fff"/></svg>
              Visit YouTube Channel
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
function TestimonialsSection() {
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="ch-section">
        <FadeIn><h2 className="ch-section-title">Loved by Developers</h2></FadeIn>
        <FadeIn delay={0.1}><p className="ch-section-subtitle">Real stories from people who transformed their careers</p></FadeIn>
        <div className="ch-two-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20, marginTop: 48 }}>
          {reviewsData.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="glass" style={{ padding: 32, display: 'flex', gap: 20 }}>
                <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: '50%', background: `linear-gradient(135deg, hsl(${i*70+20},60%,60%), hsl(${i*70+50},70%,70%))`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 18, fontFamily: 'var(--font)' }}>
                  {t.mentee[0]}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{ fontWeight: 700, fontSize: 15, fontFamily: 'var(--font)' }}>{t.mentee}</span>
                    <span style={{ color: '#f59e0b', fontSize: 13 }}>{'★★★★★'}</span>
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, fontFamily: 'var(--font)' }}>"{t.review}"</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FAQSection() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: 'What is DSA and why is it important?', a: 'Data Structures and Algorithms form the foundation of problem-solving in software development and are the primary focus in technical interviews at companies like Google, Amazon, and Microsoft.' },
    { q: 'What does problem solving mean in coding?', a: 'Problem solving means breaking down complex challenges into smaller steps using efficient data structures and algorithms — the core skill every tech company tests for.' },
    { q: 'Is DSA enough to get into Tier-1 companies?', a: 'DSA is essential but not sufficient alone. You also need system design knowledge, strong CS fundamentals, behavioral prep, and good communication skills.' },
    { q: "What's the right strategy to prepare?", a: 'Start with fundamentals, then practice topic-by-topic. Use our DSA sheet as your guide, do mock interviews, and focus on understanding patterns rather than memorizing solutions.' },
    { q: 'How many problems should I solve?', a: 'Quality over quantity. 150–200 well-chosen problems covering all major patterns is a strong benchmark. Our 63-problem essential sheet covers the most critical patterns.' },
    { q: 'How can Code Harmony help me?', a: 'We connect you with mentors from top companies, provide a curated DSA sheet with video explanations, offer mock interviews, and guide your complete preparation journey.' },
  ];
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="ch-section" style={{ maxWidth: 720 }}>
        <FadeIn><h2 className="ch-section-title">Frequently Asked Questions</h2></FadeIn>
        <FadeIn delay={0.15}>
          <div className="glass" style={{ marginTop: 48, overflow: 'hidden' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderBottom: i < faqs.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font)', fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', textAlign: 'left',
                }}>
                  {f.q}
                  <span style={{ fontSize: 20, transition: 'transform 0.3s', transform: open === i ? 'rotate(45deg)' : '', color: 'var(--text-secondary)', flexShrink: 0, marginLeft: 12 }}>+</span>
                </button>
                <div style={{ maxHeight: open === i ? 200 : 0, overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                  <p style={{ padding: '0 24px 20px', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, fontFamily: 'var(--font)' }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── CTA ── */
function CTASection() {
  const navigate = useNavigate();
  return (
    <section style={{ padding: '40px 0 80px' }}>
      <div className="ch-section">
        <FadeIn>
          <div style={{
            background: 'linear-gradient(135deg, rgba(232,81,61,0.9), rgba(147,51,234,0.85))',
            borderRadius: 'var(--radius)', padding: '64px 48px', textAlign: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'relative' }}>
              <h2 style={{ fontSize: 36, fontWeight: 800, color: '#fff', marginBottom: 12, marginTop: 0, letterSpacing: '-0.5px', fontFamily: 'var(--font)' }}>
                Ready to Start Your Journey?
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', marginBottom: 32, maxWidth: 480, margin: '0 auto 32px', fontFamily: 'var(--font)' }}>
                Join hundreds of developers who've landed their dream jobs with Code Harmony.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => navigate('/mentorship')} style={{
                  padding: '14px 32px', borderRadius: 100, fontSize: 15, fontWeight: 700,
                  background: '#fff', border: 'none', cursor: 'pointer', color: 'var(--accent)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)', transition: 'transform 0.3s', fontFamily: 'var(--font)',
                }}>Find a Mentor →</button>
                <button onClick={() => navigate('/mentorship/onboard')} style={{
                  padding: '14px 32px', borderRadius: 100, fontSize: 15, fontWeight: 700,
                  background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
                  cursor: 'pointer', color: '#fff', backdropFilter: 'blur(8px)', transition: 'all 0.3s', fontFamily: 'var(--font)',
                }}>Become a Mentor</button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Home Page ── */
export default function Home() {
  return (
    <div>
      <HeroSection />
      <CompanyStrip />
      <ServicesSection />
      <StatsSection />
      <ResourcesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
