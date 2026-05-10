import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { arrayUnion, doc, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { app } from '../firebaseConfig';
import { FadeIn } from '../components/Animations';

const db = getFirestore(app);

const fieldStyle = {
  width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-xs)',
  border: '1px solid rgba(0,0,0,0.08)', background: 'rgba(255,255,255,0.5)',
  backdropFilter: 'blur(8px)', fontFamily: 'var(--font)', fontSize: 14, outline: 'none',
  transition: 'border 0.2s', boxSizing: 'border-box',
};

export default function OnboardMentorForm() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', linkedin: '', company: '', experience: '', motivation: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const ref = doc(db, 'mentorRequests', form.email);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        await updateDoc(ref, { requests: arrayUnion({ ...form, submittedAt: new Date().toISOString() }) });
      } else {
        await setDoc(ref, { requests: [{ ...form, submittedAt: new Date().toISOString() }] });
      }
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ paddingTop: 110, minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <FadeIn>
          <div className="glass-strong" style={{ padding: 48, textAlign: 'center', maxWidth: 420 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8, marginTop: 0, fontFamily: 'var(--font)' }}>Application Submitted!</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.6, marginBottom: 24, fontFamily: 'var(--font)' }}>
              Thanks for your interest. We'll review your application and get back to you soon.
            </p>
            <button className="btn-accent" onClick={() => navigate('/')}>Back to Home</button>
          </div>
        </FadeIn>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 110, minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '110px 24px 60px' }}>
      <FadeIn>
        <div className="glass-strong" style={{ padding: 48, maxWidth: 520, width: '100%' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 6, marginTop: 0, fontFamily: 'var(--font)' }}>Become a Mentor</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.6, marginBottom: 32, fontFamily: 'var(--font)' }}>
            Share your expertise and guide aspiring developers. Fill out this form to apply.
          </p>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { key: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
              { key: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com' },
              { key: 'linkedin', label: 'LinkedIn', type: 'url', placeholder: 'https://linkedin.com/in/...' },
              { key: 'company', label: 'Current Company', type: 'text', placeholder: 'e.g., Google, Amazon' },
            ].map(f => (
              <div key={f.key}>
                <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6, fontFamily: 'var(--font)' }}>{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  required
                  value={form[f.key]}
                  onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                  style={fieldStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.08)'}
                />
              </div>
            ))}
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6, fontFamily: 'var(--font)' }}>Experience & Expertise</label>
              <textarea
                placeholder="e.g., 5+ years in Backend, DSA, System Design..."
                required
                rows={3}
                value={form.experience}
                onChange={e => setForm(prev => ({ ...prev, experience: e.target.value }))}
                style={{ ...fieldStyle, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.08)'}
              />
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, display: 'block', marginBottom: 6, fontFamily: 'var(--font)' }}>Motivation</label>
              <textarea
                placeholder="Why do you want to mentor?"
                rows={3}
                value={form.motivation}
                onChange={e => setForm(prev => ({ ...prev, motivation: e.target.value }))}
                style={{ ...fieldStyle, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.08)'}
              />
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <button type="submit" className="btn-accent" style={{ flex: 1, justifyContent: 'center' }} disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
              <button type="button" className="btn-glass" onClick={() => navigate('/')} style={{ justifyContent: 'center' }}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </FadeIn>
    </div>
  );
}
