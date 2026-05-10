import { useState, useEffect } from 'react';

const CODE_SNIPPETS = [
  {
    code: 'function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    if (map.has(target - nums[i]))\n      return [map.get(target-nums[i]), i];\n    map.set(nums[i], i);\n  }\n}',
    lang: 'JavaScript',
  },
  {
    code: 'def maxSubArray(nums):\n    max_sum = curr = nums[0]\n    for n in nums[1:]:\n        curr = max(n, curr + n)\n        max_sum = max(max_sum, curr)\n    return max_sum',
    lang: 'Python',
  },
  {
    code: 'class ListNode {\n  int val;\n  ListNode next;\n  ListNode(int x) { val = x; }\n}\n// reverse linked list\nListNode prev = null;\nwhile (head != null) {\n  ListNode tmp = head.next;\n  head.next = prev;\n  prev = head;\n  head = tmp;\n}',
    lang: 'Java',
  },
];

const TYPING_LINES = [
  '> solving Two Sum...',
  '> approach: HashMap O(n)',
  '> all test cases passed ✓',
  '> ready for Google interview',
];

export function TypingAnimation() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    if (lineIdx >= TYPING_LINES.length) {
      const t = setTimeout(() => { setLines([]); setLineIdx(0); setCharIdx(0); }, 2000);
      return () => clearTimeout(t);
    }
    const line = TYPING_LINES[lineIdx];
    if (charIdx < line.length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), 40 + Math.random() * 30);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLines(prev => [...prev, line]);
      setLineIdx(i => i + 1);
      setCharIdx(0);
    }, 400);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx]);

  const currentLine = lineIdx < TYPING_LINES.length ? TYPING_LINES[lineIdx].slice(0, charIdx) : '';

  return (
    <div style={{
      fontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
      fontSize: 13, lineHeight: 1.8,
      color: 'rgba(255,255,255,0.7)', padding: '20px 24px',
      background: 'rgba(0,0,0,0.4)', borderRadius: 12, backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.08)', minHeight: 140,
    }}>
      {lines.map((l, i) => (
        <div key={i} style={{ color: l.includes('✓') ? '#4ade80' : l.includes('>') ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.7)' }}>
          {l}
        </div>
      ))}
      {lineIdx < TYPING_LINES.length && (
        <div>
          {currentLine}<span style={{ animation: 'blink 1s step-end infinite', borderRight: '2px solid #4ade80' }}></span>
        </div>
      )}
    </div>
  );
}

function FloatingCodeCard({ snippet, style }) {
  return (
    <div style={{
      position: 'absolute', ...style,
      background: 'rgba(15,15,25,0.7)', backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14,
      padding: '14px 18px', maxWidth: 280, fontSize: 11, lineHeight: 1.6,
      fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
      color: 'rgba(255,255,255,0.5)', overflow: 'hidden',
      animation: 'floatCode 8s ease-in-out infinite',
      pointerEvents: 'none',
    }}>
      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        {snippet.lang}
      </div>
      <pre style={{ margin: 0, whiteSpace: 'pre-wrap', color: 'rgba(167,139,250,0.6)' }}>
        {snippet.code.slice(0, 120)}...
      </pre>
    </div>
  );
}

export function CodeBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <FloatingCodeCard snippet={CODE_SNIPPETS[0]} style={{ top: '8%', right: '5%', animationDelay: '0s' }} />
      <FloatingCodeCard snippet={CODE_SNIPPETS[1]} style={{ bottom: '15%', left: '3%', animationDelay: '2.5s' }} />
      <FloatingCodeCard snippet={CODE_SNIPPETS[2]} style={{ top: '55%', right: '8%', animationDelay: '5s' }} />
    </div>
  );
}
