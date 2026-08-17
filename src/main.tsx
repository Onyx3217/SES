import React, { useState, useMemo, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { calculsCatalog } from './data/calculsData';
import { allGlossaryTerms } from './data/glossaireHelper';
import { programmeOfficiel } from './data/programmeData';
import { getStoredNotes } from './data/notebookHelper';
import SearchBar from './components/SearchBar';
import FicheDetail from './components/FicheDetail';
import Programme from './components/Programme';
import Lexique from './components/Lexique';
import Exercices from './components/Exercices';
import Notebook from './components/Notebook';
import Auteurs from './components/Auteurs';
import Mecanismes from './components/Mecanismes';
import MethodeBac from './components/MethodeBac';
import DashboardSRS from './components/DashboardSRS';
import PomodoroTimer from './components/PomodoroTimer';
import { CountUpNumber } from './components/AnimatedNumber';

const views = [
  { key: 'calculs', label: 'Calculs & Méthodes', icon: '🧮' },
  { key: 'notebook', label: 'Mon Notebook', icon: '📓' },
  { key: 'lexique', label: 'Lexique SES', icon: '📖' },
  { key: 'auteurs', label: 'Grands Auteurs', icon: '🏛️' },
  { key: 'mecanismes', label: 'Schémas Causaux', icon: '🔄' },
  { key: 'methodeBac', label: 'Méthode Bac', icon: '🧭' },
  { key: 'exercices', label: 'Exercices & QCM', icon: '🎯' },
  { key: 'programme', label: 'Programme', icon: '📋' },
  { key: 'dashboard', label: 'Tableau de Bord', icon: '📊' },
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
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('ses_dark_mode') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ses_dark_mode', String(isDarkMode));
    } catch {}
  }, [isDarkMode]);

  const stats = useMemo(() => {
    return {
      calculsCount: calculsCatalog.length,
      vocabCount: allGlossaryTerms.length,
      chapitresCount: programmeOfficiel.length,
      notesCount: getStoredNotes().length,
    };
  }, [currentView]);

  const handleSelectCalcul = (calculId: string) => {
    setSelectedCalculId(calculId);
    setCurrentView('calculs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ background: isDarkMode ? '#090d16' : '#f8fafc', color: isDarkMode ? '#f1f5f9' : '#0f172a', minHeight: '100vh', transition: 'background 0.25s ease' }}>
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
        button, input, textarea {
          font-family: inherit;
        }
        @keyframes pageFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .view-container {
          animation: pageFadeIn 260ms cubic-bezier(0.2, 0.9, 0.3, 1);
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
          background: ${isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid ${isDarkMode ? '#1e293b' : '#e2e8f0'};
          padding: 8px 10px calc(8px + env(safe-area-inset-bottom, 0px));
          z-index: 1000;
          overflow-x: auto;
          gap: 6px;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
        }

        .bottom-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          border: none;
          background: none;
          color: ${isDarkMode ? '#94a3b8' : '#64748b'};
          font-size: 0.7rem;
          font-weight: 800;
          cursor: pointer;
          padding: 6px 10px;
          border-radius: 12px;
          white-space: nowrap;
          transition: all 0.15s ease;
          flex: 0 0 auto;
        }
        .bottom-nav-item.active {
          color: ${isDarkMode ? '#38bdf8' : '#1d4ed8'};
          background: ${isDarkMode ? '#1e293b' : '#eff6ff'};
        }
        .bottom-nav-item .icon {
          font-size: 1.2rem;
        }

        .desktop-nav {
          display: flex;
        }

        @media (max-width: 960px) {
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
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* TOP HEADER */}
          <header
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: 14,
              alignItems: 'center',
              padding: '16px 22px',
              borderRadius: 24,
              background: isDarkMode ? 'linear-gradient(135deg, #020617 0%, #0f172a 60%, #1e1b4b 100%)' : 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #0369a1 100%)',
              color: '#f8fafc',
              border: isDarkMode ? '1px solid #1e293b' : 'none',
              boxShadow: '0 20px 45px rgba(15, 23, 42, 0.22)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#38bdf8', fontWeight: 800 }}>
                    Lycée SES
                  </span>
                  <span style={{ background: '#38bdf8', color: '#0f172a', borderRadius: 999, padding: '2px 8px', fontSize: '0.66rem', fontWeight: 800 }}>
                    Seconde & Première
                  </span>
                </div>
                <h1 style={{ margin: '4px 0 0', fontSize: 'clamp(1.5rem, 2.2vw, 2.1rem)', lineHeight: 1.1, fontWeight: 900, color: '#ffffff' }}>
                  SES <span style={{ color: '#38bdf8' }}>Compagnon</span>
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav" style={{ flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
              {views.map((item) => {
                const isActive = currentView === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    className="chip-nav"
                    onClick={() => setCurrentView(item.key)}
                    style={{
                      border: isActive ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.12)',
                      background: isActive ? '#38bdf8' : 'rgba(255, 255, 255, 0.07)',
                      color: isActive ? '#0f172a' : '#ffffff',
                      borderRadius: 999,
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '0.82rem',
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

              {/* Dark mode button */}
              <button
                type="button"
                onClick={() => setIsDarkMode(!isDarkMode)}
                title={isDarkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  borderRadius: 999,
                  padding: '8px 12px',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  marginLeft: 4,
                }}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
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
                      { label: 'Notes créées', value: stats.notesCount, icon: '📓', color: '#4338ca', bg: '#eef2ff', border: '#c7d2fe' },
                      { label: 'Chapitres officiels', value: stats.chapitresCount, icon: '🏛️', color: '#059669', bg: '#ecfdf5', border: '#a7f3d0' },
                    ].map((card) => (
                      <div
                        key={card.label}
                        style={{
                          padding: '14px 18px',
                          borderRadius: 20,
                          background: isDarkMode ? '#131c2e' : '#ffffff',
                          border: `1.5px solid ${isDarkMode ? '#1e293b' : card.border}`,
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
                          <div style={{ color: isDarkMode ? '#94a3b8' : '#64748b', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 800 }}>
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
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 18, padding: '12px 16px', background: isDarkMode ? '#131c2e' : '#ffffff', borderRadius: 20, border: `1px solid ${isDarkMode ? '#1e293b' : '#e2e8f0'}` }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: isDarkMode ? '#94a3b8' : '#64748b', marginRight: 4 }}>
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
                            border: `1px solid ${isSel ? '#2563eb' : isDarkMode ? '#1e293b' : '#e2e8f0'}`,
                            background: isSel ? '#2563eb' : isDarkMode ? '#0f172a' : '#f8fafc',
                            color: isSel ? '#ffffff' : isDarkMode ? '#cbd5e1' : '#1e293b',
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
                    <aside style={{ padding: 18, borderRadius: 24, background: isDarkMode ? '#131c2e' : '#ffffff', border: `1px solid ${isDarkMode ? '#1e293b' : '#e2e8f0'}`, boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)', height: 'fit-content' }}>
                      <div style={{ marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ margin: 0, fontSize: '1.05rem', color: isDarkMode ? '#f8fafc' : '#0f172a' }}>Calculs du programme</h3>
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

              {/* VIEW 2: NOTEBOOK */}
              {currentView === 'notebook' && (
                <Notebook onNavigateToCalcul={handleSelectCalcul} />
              )}

              {/* VIEW 3: LEXIQUE */}
              {currentView === 'lexique' && (
                <Lexique onSelectCalcul={handleSelectCalcul} />
              )}

              {/* VIEW 4: AUTEURS */}
              {currentView === 'auteurs' && (
                <Auteurs onNavigateToNotebook={() => setCurrentView('notebook')} />
              )}

              {/* VIEW 5: MECANISMES */}
              {currentView === 'mecanismes' && (
                <Mecanismes />
              )}

              {/* VIEW 6: METHODE BAC */}
              {currentView === 'methodeBac' && (
                <MethodeBac />
              )}

              {/* VIEW 7: EXERCICES */}
              {currentView === 'exercices' && (
                <Exercices onNavigateToCalcul={handleSelectCalcul} />
              )}

              {/* VIEW 8: PROGRAMME */}
              {currentView === 'programme' && (
                <Programme onSelectCalcul={handleSelectCalcul} />
              )}

              {/* VIEW 9: DASHBOARD SRS */}
              {currentView === 'dashboard' && (
                <DashboardSRS onNavigateToCalcul={handleSelectCalcul} onNavigateToLexique={() => setCurrentView('lexique')} />
              )}
            </div>
          </main>
        </div>
      </div>

      {/* FLOATING POMODORO TIMER WIDGET */}
      <PomodoroTimer />

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
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
