import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import { FadeIn } from '../../components/Animations';
import { CompanyBadge } from '../../components/Companies';
import { useUser } from '../../UserContext';
import problemsData from '../../data/problems.json';

const db = getFirestore(app);

const ALL_TOPICS = ['All', 'Array', 'String', 'Binary Search', 'Dynamic Programming', 'Two Pointers', 'Sliding Window', 'Stack', 'Hash Table', 'Tree', 'Linked List', 'Graph'];

const diffColor = d => d === 'Easy' ? '#22c55e' : d === 'Medium' ? '#f59e0b' : '#ef4444';

export default function DSASheet() {
  const navigate = useNavigate();
  const { user, storeRedirectUrl } = useUser();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [done, setDone] = useState({});

  useEffect(() => {
    if (user) {
      const fetchCompleted = async () => {
        const userDoc = doc(db, 'users', user.id);
        const snap = await getDoc(userDoc);
        if (snap.exists()) {
          const arr = snap.data().completedProblems || [];
          const map = {};
          arr.forEach(id => { map[id] = true; });
          setDone(map);
        }
      };
      fetchCompleted();
    } else {
      try {
        const stored = JSON.parse(localStorage.getItem('ch-dsa-done') || '{}');
        setDone(stored);
      } catch { setDone({}); }
    }
  }, [user]);

  const toggleDone = async (problemId) => {
    if (!user) {
      const next = { ...done, [problemId]: !done[problemId] };
      if (!next[problemId]) delete next[problemId];
      setDone(next);
      localStorage.setItem('ch-dsa-done', JSON.stringify(next));
      return;
    }
    const userDoc = doc(db, 'users', user.id);
    if (done[problemId]) {
      await updateDoc(userDoc, { completedProblems: arrayRemove(problemId) });
      setDone(prev => { const n = { ...prev }; delete n[problemId]; return n; });
    } else {
      await updateDoc(userDoc, { completedProblems: arrayUnion(problemId) });
      setDone(prev => ({ ...prev, [problemId]: true }));
    }
  };

  const filtered = problemsData.filter(p => {
    const topics = p.topics || p.tags || [];
    const matchesTopic = filter === 'All' || topics.includes(filter);
    const matchesSearch = !search || p.title.toLowerCase().includes(search.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  const doneCount = Object.keys(done).length;
  const pct = Math.round((doneCount / problemsData.length) * 100);

  return (
    <div style={{ paddingTop: 100 }}>
      <div className="ch-section" style={{ padding: '40px 24px 80px' }}>
        <FadeIn>
          <h1 style={{ fontSize: 38, fontWeight: 800, textAlign: 'center', marginBottom: 10, marginTop: 0, fontFamily: 'var(--font)' }}>
            DSA Essentials Sheet
          </h1>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto 12px', fontSize: 15, lineHeight: 1.6, fontFamily: 'var(--font)' }}>
            Problems frequently asked at <strong style={{ color: 'var(--text-primary)' }}>Google, Amazon, Microsoft, and Meta</strong> — build a strong problem-solving foundation.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
            {['Google','Microsoft','Amazon','Meta','Adobe'].map(c => <CompanyBadge key={c} name={c} />)}
          </div>
        </FadeIn>

        {/* Progress bar */}
        <FadeIn delay={0.1}>
          <div className="glass" style={{ borderRadius: 100, padding: 5, maxWidth: 500, margin: '0 auto 28px', height: 34, position: 'relative' }}>
            <div style={{
              height: '100%', borderRadius: 100,
              background: 'linear-gradient(90deg, var(--accent), #9333ea)',
              width: `${pct}%`, transition: 'width 0.5s ease',
              minWidth: doneCount > 0 ? 34 : 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {doneCount > 0 && <span style={{ color: '#fff', fontSize: 11, fontWeight: 700, fontFamily: 'var(--font)' }}>{doneCount}/{problemsData.length}</span>}
            </div>
            <span style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', fontFamily: 'var(--font)' }}>{pct}%</span>
          </div>
        </FadeIn>

        {/* Topic filters */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          {ALL_TOPICS.map(t => (
            <button key={t} onClick={() => setFilter(t)} style={{
              padding: '7px 14px', borderRadius: 100, border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font)', fontSize: 12, fontWeight: 600,
              background: filter === t ? 'linear-gradient(135deg, var(--accent), #9333ea)' : 'rgba(255,255,255,0.45)',
              color: filter === t ? '#fff' : 'var(--text-secondary)',
              backdropFilter: 'blur(8px)', transition: 'all 0.2s',
            }}>{t}</button>
          ))}
        </div>

        {/* Search */}
        <div style={{ maxWidth: 420, margin: '0 auto 24px' }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search problems..."
            style={{
              width: '100%', padding: '11px 20px', borderRadius: 100,
              border: '1px solid rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.4)',
              backdropFilter: 'blur(12px)', fontFamily: 'var(--font)', fontSize: 14, outline: 'none',
              color: 'var(--text-primary)',
            }}
          />
        </div>

        {/* Login prompt for Firebase sync */}
        {!user && (
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <span style={{ fontSize: 13, color: 'var(--text-secondary)', fontFamily: 'var(--font)' }}>
              <button onClick={() => { storeRedirectUrl('/dsasheet'); navigate('/login'); }} style={{ background: 'none', border: 'none', color: 'var(--accent)', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font)', fontSize: 13 }}>
                Sign in
              </button>
              {' '}to sync your progress across devices
            </span>
          </div>
        )}

        {/* Table */}
        <div className="glass" style={{ overflow: 'hidden' }}>
          {/* Header row */}
          <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 90px 1fr 48px', padding: '12px 20px', fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid rgba(0,0,0,0.06)', fontFamily: 'var(--font)' }}>
            <span>#</span>
            <span>Problem</span>
            <span>Difficulty</span>
            <span className="ch-dsa-header-tags">Tags</span>
            <span style={{ textAlign: 'center' }}>✓</span>
          </div>

          {filtered.length === 0 && (
            <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-secondary)', fontFamily: 'var(--font)' }}>
              No problems match your search.
            </div>
          )}

          {filtered.map((p, idx) => {
            const id = p.leetcodeId || String(p.id);
            const isDone = !!done[id];
            const tags = p.tags || p.topics || [];
            return (
              <div key={id} style={{
                display: 'grid', gridTemplateColumns: '60px 1fr 90px 1fr 48px',
                padding: '13px 20px', alignItems: 'center',
                borderBottom: '1px solid rgba(0,0,0,0.03)',
                transition: 'background 0.15s',
                background: isDone ? 'rgba(34,197,94,0.04)' : 'transparent',
                animation: `slideInLeft 0.3s ease ${idx * 0.01}s both`,
              }}
                onMouseEnter={e => { if (!isDone) e.currentTarget.style.background = 'rgba(255,255,255,0.3)'; }}
                onMouseLeave={e => { if (!isDone) e.currentTarget.style.background = 'transparent'; }}>
                <span style={{ fontSize: 13, color: 'var(--text-secondary)', fontFamily: 'var(--mono)' }}>{p.leetcodeId}</span>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent)', textDecoration: isDone ? 'line-through' : 'none', opacity: isDone ? 0.6 : 1, fontFamily: 'var(--font)' }}
                >
                  {p.title}
                </a>
                <span style={{ fontSize: 12, fontWeight: 700, color: diffColor(p.difficulty), fontFamily: 'var(--font)' }}>{p.difficulty}</span>
                <div className="ch-dsa-tags" style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                  {tags.slice(0, 2).map(t => (
                    <span key={t} style={{ fontSize: 10, padding: '2px 8px', borderRadius: 100, background: 'rgba(0,0,0,0.04)', fontWeight: 500, color: 'var(--text-secondary)', fontFamily: 'var(--font)' }}>{t}</span>
                  ))}
                </div>
                <label style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => toggleDone(id)}
                    style={{ width: 18, height: 18, accentColor: 'var(--accent)', cursor: 'pointer' }}
                  />
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
