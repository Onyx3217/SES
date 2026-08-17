import React, { useState, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { calculsCatalog } from './data/calculsData';
import { allGlossaryTerms } from './data/glossaireHelper';
import { programmeOfficiel } from './data/programmeData';
import SearchBar from './components/SearchBar';
import FicheDetail from './components/FicheDetail';
import Programme from './components/Programme';
import Lexique from './components/Lexique';
import Exercices from './components/Exercices';
import { CountUpNumber } from './components/AnimatedNumber';

const views = [
  { key: 'calculs', label: 'Calculs & Méthodes', icon: '🧮' },
  { key: 'lexique', label: 'Lexique & Vocabulaire', icon: '📖' },
  { key: 'exercices', label: 'Exercices & QCM', icon: '🎯' },
  { key: 'programme', label: 'Programme Officiel', icon: '🏛️' },
] as const;

type View = (typeof views)[number]['key'];

const popularQuickIds = [
  'proportion',
  'taux-de-variation',
  'valeur-ajoutee',
  'pib-approche-production',
  'coefficient-multiplicateur',
  'elasticite-prix-demande',
  'taux-de-chomage-bit',
  'profit',
];

function App() {
  const [selectedCalculId, setSelectedCalculId] = useState<string | null>('proportion');
  const [currentView, setCurrentView] = useState<View>('calculs');

  const stats = useMemo(() => {
    return {
      calculsCount: calculsCatalog.length,
      vocabCount: allGlossaryTerms.length,
      chapitresCount: programmeOfficiel.length,
    };
  }, []);

  const handleSelectCalcul = (calculId: string) => {
    setSelectedCalculId(calculId);
    setCurrentView('calculs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }
        html, body, #root {
          margin: 0;
          min-height: 100%;
          font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        body {
          background: #f8fafc;
          color: #0f172a;
          line-height: 1.5;
        }
        button, input {
          font-family: inherit;
        }
        @keyframes pageFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .view-container {
          animation: pageFadeIn 280ms cubic-bezier(0.2, 0.9, 0.3, 1);
        }
        .lift-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .lift-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(15, 23, 42, 0.08);
        }
        .chip-nav {
          transition: all 0.18s ease;
        }
        .chip-nav:active {
          transform: scale(0.96);
        }

        /* Mobile bottom nav */
        .bottom-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid #e2e8f0;
          padding: 8px 12px calc(8px + env(safe-area-inset-bottom, 0px));
          z-index: 1000;
          justify-content: space-around;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.05);
        }

        .bottom-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          border: none;
          background: none;
          color: #64748b;
          font-size: 0.72rem;
          font-weight: 700;
          cursor: pointer;
          padding: 6px 10px;
          border-radius: 12px;
          transition: all 0.15s ease;
        }
        .bottom-nav-item.active {
          color: #1d4ed8;
          background: #eff6ff;
        }
        .bottom-nav-item .icon {
          font-size: 1.25rem;
        }

        .desktop-nav {
          display: flex;
        }

        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .bottom-nav {
            display: flex;
          }
          .main-content-wrapper {
            padding-bottom: 84px !important;
          }
          .calculs-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div className="main-content-wrapper" style={{ minHeight: '100vh', padding: '16px 16px 40px' }}>
        <div style={{ maxWidth: 1260, margin: '0 auto' }}>
          {/* TOP HEADER */}
          <header
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: 16,
              alignItems: 'center',
              padding: '18px 24px',
              borderRadius: 24,
              background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #0369a1 100%)',
              color: '#f8fafc',
              boxShadow: '0 20px 45px rgba(15, 23, 42, 0.20)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#38bdf8', fontWeight: 800 }}>
                  Lycée Général
                </span>
                <span style={{ background: '#38bdf8', color: '#0f172a', borderRadius: 999, padding: '2px 8px', fontSize: '0.68rem', fontWeight: 800 }}>
                  Seconde & Première
                </span>
              </div>
              <h1 style={{ margin: '6px 0 0', fontSize: 'clamp(1.7rem, 2.5vw, 2.4rem)', lineHeight: 1.1, fontWeight: 900, color: '#ffffff' }}>
                SES <span style={{ color: '#38bdf8' }}>Compagnon</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav" style={{ flexWrap: 'wrap', gap: 8 }}>
              {views.map((item) => {
                const isActive = currentView === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    className="chip-nav"
                    onClick={() => setCurrentView(item.key)}
                    style={{
                      border: isActive ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.15)',
                      background: isActive ? '#38bdf8' : 'rgba(255, 255, 255, 0.08)',
                      color: isActive ? '#0f172a' : '#ffffff',
                      borderRadius: 999,
                      padding: '9px 16px',
                      fontWeight: 800,
                      fontSize: '0.86rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </header>

          {/* MAIN VIEW AREA */}
          <main style={{ paddingTop: 20 }}>
            <div key={currentView} className="view-container">
              {/* VIEW 1: CALCULS & METHODES */}
              {currentView === 'calculs' && (
                <>
                  {/* STATS STRIP */}
                  <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 12, marginBottom: 20 }}>
                    {[
                      { label: 'Calculs officiels', value: stats.calculsCount, icon: '🧮', color: '#1d4ed8', bg: '#eff6ff', border: '#bfdbfe' },
                      { label: 'Notions & Vocabulaire', value: stats.vocabCount, icon: '📖', color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe' },
                      { label: 'Chapitres au programme', value: stats.chapitresCount, icon: '🏛️', color: '#059669', bg: '#ecfdf5', border: '#a7f3d0' },
                    ].map((card) => (
                      <div
                        key={card.label}
                        style={{
                          padding: '14px 18px',
                          borderRadius: 20,
                          background: '#ffffff',
                          border: `1.5px solid ${card.border}`,
                          boxShadow: '0 8px 24px rgba(15, 23, 42, 0.03)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 14,
                        }}
                      >
                        <div style={{ fontSize: '1.8rem', background: card.bg, padding: 10, borderRadius: 16 }}>
                          {card.icon}
                        </div>
                        <div>
                          <div style={{ color: '#64748b', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 800 }}>
                            {card.label}
                          </div>
                          <div style={{ fontSize: '1.6rem', fontWeight: 900, color: card.color, lineHeight: 1.1, marginTop: 2 }}>
                            <CountUpNumber value={card.value} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </section>

                  {/* QUICK CHIP BAR */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 18, padding: '12px 16px', background: '#ffffff', borderRadius: 20, border: '1px solid #e2e8f0' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', marginRight: 4 }}>
                      ⚡ Raccourcis fréquents :
                    </span>
                    {popularQuickIds.map((cid) => {
                      const cObj = calculsCatalog.find((c) => c.id === cid);
                      const isSel = selectedCalculId === cid;
                      return (
                        <button
                          key={cid}
                          type="button"
                          className="chip-nav"
                          onClick={() => setSelectedCalculId(cid)}
                          style={{
                            border: `1px solid ${isSel ? '#2563eb' : '#e2e8f0'}`,
                            background: isSel ? '#2563eb' : '#f8fafc',
                            color: isSel ? '#ffffff' : '#1e293b',
                            padding: '6px 12px',
                            borderRadius: 999,
                            cursor: 'pointer',
                            fontWeight: 700,
                            fontSize: '0.78rem',
                          }}
                        >
                          {cObj ? cObj.nom : cid}
                        </button>
                      );
                    })}
                  </div>

                  {/* 2-COLUMN LAYOUT */}
                  <div className="calculs-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 340px) minmax(0, 1fr)', gap: 20 }}>
                    {/* Left sidebar: Search & full list */}
                    <aside style={{ padding: 18, borderRadius: 24, background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)', height: 'fit-content' }}>
                      <div style={{ marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ margin: 0, fontSize: '1.05rem', color: '#0f172a' }}>Calculs du programme</h3>
                        <span style={{ fontSize: '0.76rem', background: '#eff6ff', color: '#1d4ed8', padding: '3px 8px', borderRadius: 999, fontWeight: 800 }}>
                          {calculsCatalog.length} fiches
                        </span>
                      </div>
                      <SearchBar onSelect={(id) => setSelectedCalculId(id)} selectedId={selectedCalculId} />
                    </aside>

                    {/* Right area: FicheDetail */}
                    <section>
                      <FicheDetail id={selectedCalculId} onNavigateTo={(id) => setSelectedCalculId(id)} />
                    </section>
                  </div>
                </>
              )}

              {/* VIEW 2: LEXIQUE */}
              {currentView === 'lexique' && (
                <Lexique onSelectCalcul={handleSelectCalcul} />
              )}

              {/* VIEW 3: EXERCICES */}
              {currentView === 'exercices' && (
                <Exercices onNavigateToCalcul={handleSelectCalcul} />
              )}

              {/* VIEW 4: PROGRAMME */}
              {currentView === 'programme' && (
                <Programme onSelectCalcul={handleSelectCalcul} />
              )}
            </div>
          </main>
        </div>
      </div>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <nav className="bottom-nav">
        {views.map((v) => {
          const isActive = currentView === v.key;
          return (
            <button
              key={v.key}
              type="button"
              className={`bottom-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => {
                setCurrentView(v.key);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="icon">{v.icon}</span>
              <span>{v.label.split(' ')[0]}</span>
            </button>
          );
        })}
      </nav>
    </>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
