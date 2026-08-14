import React from 'react';
import { createRoot } from 'react-dom/client';
import rawData from './data/calculs.json';
import SearchBar from './components/SearchBar';
import FicheDetail from './components/FicheDetail';
import Programme from './components/Programme';
import Lexique from './components/Lexique';
import Exercices from './components/Exercices';
import { CountUpNumber } from './components/AnimatedNumber';

const firstIds = (rawData as any[]).slice(0, 4).map((fiche) => fiche.id);
const views = [
  { key: 'search', label: 'Recherche' },
  { key: 'programme', label: 'Programme' },
  { key: 'lexique', label: 'Lexique' },
  { key: 'exercices', label: 'Exercices' },
] as const;

type View = (typeof views)[number]['key'];

function App() {
  const [selected, setSelected] = React.useState<string | null>('proportion');
  const [view, setView] = React.useState<View>('search');

  const stats = React.useMemo(() => {
    const items = rawData as any[];
    const chapters = new Set<string>();
    items.forEach((fiche) => {
      (fiche.chapitres || []).forEach((chapitre: string) => chapters.add(chapitre));
    });

    return {
      ficheCount: items.length,
      chapterCount: chapters.size,
      keywordsCount: new Set(items.flatMap((fiche) => fiche.motsCles || [])).size,
    };
  }, []);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html, body, #root { margin: 0; min-height: 100%; font-family: Inter, 'Segoe UI', sans-serif; }
        body {
          background: linear-gradient(135deg, #eff6ff 0%, #f8fafc 35%, #fef3c7 100%);
          color: #0f172a;
        }
        button, input { font: inherit; }
        @keyframes pageEnter {
          from { opacity: 0; transform: translateY(12px) scale(0.995); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes cardEnter {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes answerGlow {
          0% { box-shadow: 0 0 0 rgba(34, 197, 94, 0); }
          45% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0.12); }
          100% { box-shadow: 0 0 0 rgba(34, 197, 94, 0); }
        }
        .page-transition {
          animation: pageEnter 320ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .detail-transition {
          animation: pageEnter 260ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .stat-card, .lift-card {
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }
        .stat-card {
          animation: cardEnter 420ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .stat-card:hover, .lift-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 46px rgba(15, 23, 42, 0.10);
        }
        .nav-button, .chip-button {
          transition: transform 160ms ease, background 160ms ease, color 160ms ease, border-color 160ms ease;
        }
        .nav-button:hover, .chip-button:hover {
          transform: translateY(-1px);
        }
        .result-reveal {
          animation: answerGlow 900ms ease;
        }
        @media (max-width: 860px) {
          .search-layout, .exercise-layout {
            grid-template-columns: 1fr !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 1ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 1ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <div style={{ minHeight: '100vh', padding: 24 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <header style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16, alignItems: 'center', padding: '22px 26px', borderRadius: 28, background: 'linear-gradient(135deg, #1d4ed8 0%, #6d28d9 50%, #0f766e 100%)', color: '#f8fafc', boxShadow: '0 30px 70px rgba(15, 23, 42, 0.25)' }}>
            <div>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fbbf24', fontWeight: 700 }}>Accompagnement SES</div>
              <h1 style={{ margin: '8px 0 0', fontSize: 'clamp(1.9rem, 2.5vw, 2.8rem)', lineHeight: 1.1, background: 'linear-gradient(90deg, #fbbf24 0%, #86efac 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' as any }}>SES Compagnon</h1>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {views.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  className="nav-button"
                  onClick={() => setView(item.key)}
                  style={{
                    border: '1px solid rgba(251, 191, 36, 0.5)',
                    background: view === item.key ? '#fbbf24' : 'rgba(251, 191, 36, 0.15)',
                    color: view === item.key ? '#1d4ed8' : '#fbbf24',
                    borderRadius: 999,
                    padding: '10px 16px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </header>

          <main style={{ paddingTop: 22 }}>
            <div key={view} className="page-transition">
              {view === 'search' && (
                <>
                  <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 22 }}>
                    {[
                      { label: 'Fiches', value: stats.ficheCount, color: '#dbeafe', border: '#1d4ed8', text: '#1e3a8a' },
                      { label: 'Chapitres', value: stats.chapterCount, color: '#c4b5fd', border: '#6d28d9', text: '#4c1d95' },
                      { label: 'Mots-clés', value: stats.keywordsCount, color: '#a7f3d0', border: '#047857', text: '#064e3b' },
                    ].map((card, index) => (
                      <div
                        key={card.label}
                        className="stat-card"
                        style={{
                          padding: 18,
                          borderRadius: 22,
                          background: '#ffffff',
                          border: `2px solid ${card.border}`,
                          boxShadow: `0 18px 40px ${card.color.replace('ff', '20')}`,
                          animationDelay: `${index * 70}ms`,
                        }}
                      >
                        <div style={{ color: card.text, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>{card.label}</div>
                        <div style={{ marginTop: 10, fontSize: '2rem', fontWeight: 800, color: card.text }}>
                          <CountUpNumber value={card.value} />
                        </div>
                      </div>
                    ))}
                  </section>

                  <div className="search-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 380px) minmax(0, 1fr)', gap: 22 }}>
                    <aside className="lift-card" style={{ padding: 16, borderRadius: 26, background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 18px 40px rgba(15, 23, 42, 0.06)' }}>
                      <SearchBar onSelect={(id) => { setSelected(id); setView('search'); }} />
                    </aside>

                    <section className="lift-card" style={{ padding: 18, borderRadius: 26, background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 18px 40px rgba(15, 23, 42, 0.06)' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
                        {firstIds.map((id) => (
                          <button
                            key={id}
                            type="button"
                            className="chip-button"
                            onClick={() => setSelected(id)}
                            style={{
                              border: '1px solid #dbeafe',
                              background: selected === id ? '#dbeafe' : '#f8fafc',
                              color: '#1e3a8a',
                              padding: '8px 12px',
                              borderRadius: 999,
                              cursor: 'pointer',
                              fontWeight: 700
                            }}
                          >
                            {((rawData as any[]).find((fiche) => fiche.id === id) || { nom: 'Fiche' }).nom}
                          </button>
                        ))}
                      </div>
                      <FicheDetail id={selected} />
                    </section>
                  </div>
                </>
              )}

              {view === 'programme' && <Programme />}
              {view === 'lexique' && <Lexique />}
              {view === 'exercices' && <Exercices />}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
