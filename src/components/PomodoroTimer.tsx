import React, { useState, useEffect } from 'react';

function playChime() {
  if (typeof window === 'undefined') return;
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15); // A5
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.8);
  } catch {}
}

export default function PomodoroTimer() {
  const [mode, setMode] = useState<'focus' | 'break'>('focus');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setIsExpanded(true);
    setTimeout(() => setToastMsg(null), 5000);
  };

  useEffect(() => {
    let interval: any = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      playChime();
      if (mode === 'focus') {
        showToast('🎉 Session Focus terminée ! Prenez 5 min de pause.');
        setMode('break');
        setTimeLeft(5 * 60);
      } else {
        showToast('⏰ Pause terminée ! Prêt pour réviser ?');
        setMode('focus');
        setTimeLeft(25 * 60);
      }
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, mode]);

  const toggleRun = () => setIsRunning(!isRunning);

  const handleReset = (newMode: 'focus' | 'break') => {
    setMode(newMode);
    setTimeLeft(newMode === 'focus' ? 25 * 60 : 5 * 60);
    setIsRunning(false);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 80,
        right: 20,
        zIndex: 900,
        background: mode === 'focus' ? '#0f172a' : '#065f46',
        color: '#ffffff',
        borderRadius: 20,
        boxShadow: '0 12px 35px rgba(0,0,0,0.25)',
        border: '1.5px solid rgba(255,255,255,0.15)',
        overflow: 'hidden',
        transition: 'all 0.25s ease',
      }}
    >
      {!isExpanded ? (
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          style={{
            border: 'none',
            background: 'none',
            color: '#ffffff',
            padding: '10px 16px',
            fontSize: '0.86rem',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span>{mode === 'focus' ? '⏱️' : '☕'}</span>
          <span>{timeFormatted}</span>
          <span style={{ fontSize: '0.72rem', opacity: 0.7 }}>({mode === 'focus' ? 'Focus' : 'Pause'})</span>
        </button>
      ) : (
        <div style={{ padding: 18, width: 260, display: 'grid', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: mode === 'focus' ? '#38bdf8' : '#6ee7b7' }}>
              Minuteur SES ({mode === 'focus' ? '25 min Focus' : '5 min Pause'})
            </span>
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              style={{ border: 'none', background: 'none', color: '#94a3b8', fontSize: '1rem', cursor: 'pointer' }}
            >
              ✕
            </button>
          </div>

          <div style={{ textAlign: 'center', fontSize: '2.4rem', fontWeight: 900, fontFamily: 'Consolas, monospace' }}>
            {timeFormatted}
          </div>

          {toastMsg && (
            <div style={{ padding: '8px 12px', borderRadius: 10, background: 'rgba(255,255,255,0.15)', fontSize: '0.82rem', fontWeight: 700, textAlign: 'center', lineHeight: 1.4 }}>
              {toastMsg}
            </div>
          )}

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
            <button
              type="button"
              onClick={toggleRun}
              style={{
                border: 'none',
                background: isRunning ? '#ef4444' : '#22c55e',
                color: '#ffffff',
                padding: '8px 18px',
                borderRadius: 12,
                fontWeight: 800,
                fontSize: '0.88rem',
                cursor: 'pointer',
              }}
            >
              {isRunning ? 'Pause' : 'Démarrer'}
            </button>

            <button
              type="button"
              onClick={() => handleReset(mode === 'focus' ? 'break' : 'focus')}
              style={{
                border: '1px solid rgba(255,255,255,0.3)',
                background: 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                padding: '8px 12px',
                borderRadius: 12,
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer',
              }}
            >
              Mode {mode === 'focus' ? 'Pause' : 'Focus'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
