import { useNavigate } from 'react-router-dom';
import { FadeIn } from '../components/Animations';
import { CompanyBadge } from '../components/Companies';
import Footer from '../components/Footer';

import sahilPic from '../assets/mentors/sahil.jpeg';
import piyushGiriPic from '../assets/mentors/piyushgiri.jpeg';
import mkvPic from '../assets/mentors/mkv.jpeg';
import asmaPic from '../assets/mentors/Asma.jpeg';
import shyamPic from '../assets/mentors/Shyam.jpeg';
import abhishekPic from '../assets/mentors/abhishek.jpeg';
import siddarthPic from '../assets/mentors/siddarth.png';
import chiragPic from '../assets/mentors/chirag.jpeg';
import manikyaPic from '../assets/mentors/manikya.jpeg';

const mentors = [
  {
    name: 'Sahil Kumar',
    pic: sahilPic,
    companies: ['Google', 'Amazon', 'Adobe'],
    expertise: 'DSA, Backend, System Design',
    sessions: 120,
    linkedin: 'https://www.linkedin.com/in/sahil1012/',
    topmate: 'https://topmate.io/hisahil',
  },
  {
    name: 'Piyush Giri',
    pic: piyushGiriPic,
    companies: ['Microsoft', 'Adobe'],
    expertise: 'Backend, DSA, Databases',
    sessions: 85,
    linkedin: 'https://www.linkedin.com/in/piyushgiri/',
    topmate: 'https://topmate.io/piyushgiri',
  },
  {
    name: 'Mohit Kumar Verma',
    pic: mkvPic,
    companies: ['Amazon'],
    expertise: 'System Design, Leadership',
    sessions: 60,
    linkedin: 'https://www.linkedin.com/in/mohitkumarverma/',
    topmate: 'https://topmate.io/mohitkumarverma',
  },
  {
    name: 'Asma Shaikh',
    pic: asmaPic,
    companies: ['Goldman Sachs', 'PayPal'],
    expertise: 'Backend, DSA, Finance',
    sessions: 45,
    linkedin: 'https://www.linkedin.com/in/asmashaikh/',
    topmate: 'https://topmate.io/asmashaikh',
  },
  {
    name: 'Shyam Vaghela',
    pic: shyamPic,
    companies: ['Amazon', 'Goldman Sachs'],
    expertise: 'Backend, DSA, Cloud',
    sessions: 55,
    linkedin: 'https://www.linkedin.com/in/shyamvaghela/',
    topmate: 'https://topmate.io/shyamvaghela',
  },
  {
    name: 'Abhishek Malviya',
    pic: abhishekPic,
    companies: ['Microsoft', 'Amazon'],
    expertise: 'DSA, Fullstack, React',
    sessions: 70,
    linkedin: 'https://www.linkedin.com/in/abhishekmalviya/',
    topmate: 'https://topmate.io/abhishekmalviya',
  },
  {
    name: 'Siddarth',
    pic: siddarthPic,
    companies: ['Google'],
    expertise: 'DSA, Backend, Interviews',
    sessions: 40,
    linkedin: 'https://www.linkedin.com/in/siddarth/',
    topmate: 'https://topmate.io/siddarth',
  },
  {
    name: 'Chirag',
    pic: chiragPic,
    companies: ['Amazon'],
    expertise: 'Backend, DSA, Cloud',
    sessions: 35,
    linkedin: 'https://www.linkedin.com/in/chirag/',
    topmate: 'https://topmate.io/chirag',
  },
  {
    name: 'Manikya',
    pic: manikyaPic,
    companies: ['Microsoft'],
    expertise: 'Frontend, DSA, System Design',
    sessions: 30,
    linkedin: 'https://www.linkedin.com/in/manikya/',
    topmate: 'https://topmate.io/manikya',
  },
];

export default function MentorshipPage() {
  const navigate = useNavigate();

  return (
    <div style={{ paddingTop: 100 }}>
      <div className="ch-section" style={{ padding: '40px 24px 60px' }}>
        <FadeIn>
          <h1 style={{ fontSize: 38, fontWeight: 800, textAlign: 'center', marginBottom: 8, marginTop: 0, fontFamily: 'var(--font)' }}>
            Expert Mentors
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="ch-section-subtitle">Engineers from the world's top tech companies, ready to guide you</p>
        </FadeIn>

        <div className="ch-three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 48 }}>
          {mentors.map((m, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="glass" style={{ overflow: 'hidden', transition: 'transform 0.3s, box-shadow 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 56px rgba(0,0,0,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                {/* Header gradient */}
                <div style={{ height: 100, background: `linear-gradient(135deg, hsl(${i*45+200},55%,60%), hsl(${i*45+240},65%,70%))`, position: 'relative' }}>
                  <div style={{ position: 'absolute', bottom: -28, left: 24, width: 56, height: 56, borderRadius: 16, overflow: 'hidden', border: '3px solid #fff', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                    {m.pic ? (
                      <img src={m.pic} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', background: `hsl(${i*45+220},55%,55%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 22, fontWeight: 800, fontFamily: 'var(--font)' }}>
                        {m.name.split(' ').map(w => w[0]).join('')}
                      </div>
                    )}
                  </div>
                </div>
                <div style={{ padding: '40px 24px 24px' }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6, marginTop: 0, fontFamily: 'var(--font)' }}>{m.name}</h3>
                  <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 10 }}>
                    {m.companies.map(c => <CompanyBadge key={c} name={c} small />)}
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 6, marginTop: 0, fontFamily: 'var(--font)' }}>{m.expertise}</p>
                  <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 16, marginTop: 0, fontFamily: 'var(--font)' }}>{m.sessions}+ sessions completed</p>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button className="btn-accent" style={{ flex: 1, padding: '10px 0', fontSize: 13, justifyContent: 'center' }}
                      onClick={() => window.open(m.topmate, '_blank')}>
                      Book Session
                    </button>
                    <button className="btn-glass" style={{ flex: 1, padding: '10px 0', fontSize: 13, justifyContent: 'center' }}
                      onClick={() => window.open(m.linkedin, '_blank')}>
                      Profile
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Become a mentor CTA */}
        <FadeIn delay={0.5}>
          <div className="glass-strong ch-mentor-cta-row" style={{ padding: '40px 48px', marginTop: 48, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 6, marginTop: 0, fontFamily: 'var(--font)' }}>Want to Give Back?</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 15, margin: 0, fontFamily: 'var(--font)' }}>Share your expertise and guide aspiring developers on their journey.</p>
            </div>
            <button className="btn-accent" onClick={() => navigate('/mentorship/onboard')}>Become a Mentor →</button>
          </div>
        </FadeIn>
      </div>
      <Footer />
    </div>
  );
}
