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
  { key: 'notebook', label: 'Dossier', shortLabel: 'Dossier', badge: 'Export' },
  { key: 'calculs', label: 'Calculs & Formules', shortLabel: 'Calculs' },
  { key: 'lexique', label: 'Lexique', shortLabel: 'Lexique' },
  { key: 'auteurs', label: 'Auteurs', shortLabel: 'Auteurs' },
  { key: 'mecanismes', label: 'Schémas causaux', shortLabel: 'Schémas' },
  { key: 'methodeBac', label: 'Méthode Bac', shortLabel: 'Méthode' },
  { key: 'exercices', label: 'Exercices', shortLabel: 'Exercices' },
  { key: 'programme', label: 'Programme', shortLabel: 'Prog.' },
  { key: 'dashboard', label: 'Tableau de bord', shortLabel: 'Bilan' },
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
  const [currentView, setCurrentView] = useState<View>('notebook');
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

  const dk = isDarkMode;
  const bg = dk ? '#0d1117' : '#f9fafb';
  const surface = dk ? '#161b22' : '#ffffff';
  const borderClr = dk ? '#30363d' : '#e5e7eb';
  const txt = dk ? '#e6edf3' : '#111827';
  const muted = dk ? '#8b949e' : '#6b7280';
  const accent = '#2563eb';

  return (
    <div style={{ background: bg, color: txt, minHeight: '100vh', transition: 'background 0.2s' }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        html, body, #root { margin: 0; min-height: 100%; }
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 15px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }
        button, input, textarea, select { font-family: inherit; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(5px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .view-container { animation: fadeUp 200ms ease both; }

        .nav-item {
          border: none;
          background: none;
          padding: 6px 11px;
          border-radius: 5px;
          font-size: 0.83rem;
          font-weight: 500;
          cursor: pointer;
          color: ${dk ? '#8b949e' : '#4b5563'};
          transition: background 0.1s, color 0.1s;
          white-space: nowrap;
        }
        .nav-item:hover { background: ${dk ? '#21262d' : '#f3f4f6'}; color: ${dk ? '#e6edf3' : '#111827'}; }
        .nav-item.active { background: ${dk ? '#1d2d44' : '#eff6ff'}; color: ${accent}; font-weight: 600; }

        .qchip {
          border: 1px solid ${borderClr};
          background: ${surface};
          color: ${muted};
          padding: 4px 11px;
          border-radius: 4px;
          font-size: 0.78rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.1s;
        }
        .qchip:hover { border-color: ${accent}; color: ${accent}; }
        .qchip.active { border-color: ${accent}; background: ${dk ? '#1d2d44' : '#eff6ff'}; color: ${accent}; font-weight: 600; }

        .bottom-nav {
          display: none;
          position: fixed; bottom: 0; left: 0; right: 0;
          background: ${dk ? 'rgba(13,17,23,0.97)' : 'rgba(255,255,255,0.97)'};
          backdrop-filter: blur(10px);
          border-top: 1px solid ${borderClr};
          padding: 6px 4px calc(6px + env(safe-area-inset-bottom, 0px));
          z-index: 999; overflow-x: auto; gap: 2px;
        }
        .bottom-nav-item {
          display: flex; flex-direction: column; align-items: center; gap: 2px;
          border: none; background: none; color: ${muted};
          font-size: 0.65rem; font-weight: 500; cursor: pointer;
          padding: 5px 9px; border-radius: 5px; white-space: nowrap; flex: 0 0 auto;
          transition: all 0.1s;
        }
        .bottom-nav-item.active { color: ${accent}; background: ${dk ? '#1d2d44' : '#eff6ff'}; }
        .bottom-nav-item .icon { font-size: 1rem; line-height: 1; }

        .desktop-nav { display: flex; }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .bottom-nav { display: flex; }
          .main-pad { padding: 16px 14px 90px !important; }
          .calculs-layout { grid-template-columns: 1fr !important; }
        }
        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${borderClr}; border-radius: 3px; }
      `}</style>

      <div className="main-pad" style={{ minHeight: '100vh', padding: '0 0 60px' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto' }}>

          {/* HEADER */}
          <header style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
            gap: 12, alignItems: 'center', padding: '13px 22px',
            borderBottom: `1px solid ${borderClr}`, background: surface,
            position: 'sticky', top: 0, zIndex: 100,
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.02em', color: txt }}>
                SES Compagnon
              </span>
              <span style={{ fontSize: '0.7rem', color: muted, fontWeight: 400 }}>
                Seconde &amp; Première
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav" style={{ flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
              {views.map((item) => {
                const isActive = currentView === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    className={`nav-item ${isActive ? 'active' : ''}`}
                    onClick={() => setCurrentView(item.key)}
                  >
                    {item.label}
                    {(item as any).badge && (
                      <span style={{
                        marginLeft: 5, background: dk ? '#21262d' : '#e5e7eb',
                        color: muted, padding: '1px 5px', borderRadius: 3,
                        fontSize: '0.62rem', fontWeight: 600,
                      }}>
                        {(item as any).badge}
                      </span>
                    )}
                  </button>
                );
              })}

              {/* Dark mode toggle */}
              <button
                type="button"
                onClick={() => setIsDarkMode(!isDarkMode)}
                title={isDarkMode ? 'Mode clair' : 'Mode sombre'}
                style={{
                  marginLeft: 8, border: `1px solid ${borderClr}`, background: 'none',
                  color: muted, borderRadius: 5, padding: '5px 10px', fontSize: '0.78rem', cursor: 'pointer',
                }}
              >
                {isDarkMode ? 'Clair' : 'Sombre'}
              </button>
            </nav>
          </header>

          {/* MAIN VIEW AREA */}
          <main style={{ padding: '24px 22px' }}>
            <div key={currentView} className="view-container">
              {/* NOTEBOOK */}
              {currentView === 'notebook' && <Notebook onNavigateToCalcul={handleSelectCalcul} />}

              {/* CALCULS */}
              {currentView === 'calculs' && (
                <>
                  {/* Stats row */}
                  <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 10, marginBottom: 18 }}>
                    {[
                      { label: 'Calculs', value: stats.calculsCount },
                      { label: 'Notions', value: stats.vocabCount },
                      { label: 'Notes', value: stats.notesCount },
                      { label: 'Chapitres', value: stats.chapitresCount },
                    ].map((card) => (
                      <div
                        key={card.label}
                        style={{
                          padding: '14px 18px',
                          borderRadius: 8,
                          background: surface,
                          border: `1px solid ${borderClr}`,
                        }}
                      >
                        <div style={{ color: muted, fontSize: '0.71rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>
                          {card.label}
                        </div>
                        <div style={{ fontSize: '1.6rem', fontWeight: 700, color: accent, lineHeight: 1.1, marginTop: 3 }}>
                          <CountUpNumber value={card.value} />
                        </div>
                      </div>
                    ))}
                  </section>

                  {/* Quick chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center', marginBottom: 18, padding: '10px 14px', background: surface, borderRadius: 8, border: `1px solid ${borderClr}` }}>
                    <span style={{ fontSize: '0.74rem', fontWeight: 500, color: muted, marginRight: 4 }}>Accès rapide :</span>
                    {popularQuickIds.map((cid) => {
                      const cObj = calculsCatalog.find((c) => c.id === cid);
                      return (
                        <button
                          key={cid}
                          type="button"
                          className={`qchip ${selectedCalculId === cid ? 'active' : ''}`}
                          onClick={() => setSelectedCalculId(cid)}
                        >
                          {cObj ? cObj.nom : cid}
                        </button>
                      );
                    })}
                  </div>

                  {/* 2-column layout */}
                  <div className="calculs-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 330px) minmax(0, 1fr)', gap: 18 }}>
                    <aside style={{ padding: 18, borderRadius: 8, background: surface, border: `1px solid ${borderClr}`, height: 'fit-content' }}>
                      <div style={{ marginBottom: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ margin: 0, fontSize: '0.9rem', color: txt, fontWeight: 600 }}>Calculs du programme</h3>
                        <span style={{ fontSize: '0.7rem', background: dk ? '#21262d' : '#f3f4f6', color: muted, padding: '2px 7px', borderRadius: 3, fontWeight: 500 }}>
                          {calculsCatalog.length}
                        </span>
                      </div>
                      <SearchBar onSelect={(id) => setSelectedCalculId(id)} selectedId={selectedCalculId} />
                    </aside>
                    <section>
                      <FicheDetail id={selectedCalculId} onNavigateTo={(id) => setSelectedCalculId(id)} />
                    </section>
                  </div>
                </>
              )}

              {currentView === 'lexique' && <Lexique onSelectCalcul={handleSelectCalcul} />}
              {currentView === 'auteurs' && <Auteurs onNavigateToNotebook={() => setCurrentView('notebook')} />}
              {currentView === 'mecanismes' && <Mecanismes />}
              {currentView === 'methodeBac' && <MethodeBac />}
              {currentView === 'exercices' && <Exercices onNavigateToCalcul={handleSelectCalcul} />}
              {currentView === 'programme' && <Programme onSelectCalcul={handleSelectCalcul} />}
              {currentView === 'dashboard' && (
                <DashboardSRS onNavigateToCalcul={handleSelectCalcul} onNavigateToLexique={() => setCurrentView('lexique')} />
              )}
            </div>
          </main>
        </div>
      </div>

      <PomodoroTimer />

      {/* MOBILE BOTTOM NAV */}
      <nav className="bottom-nav">
        {views.map((v) => (
          <button
            key={v.key}
            type="button"
            className={`bottom-nav-item ${currentView === v.key ? 'active' : ''}`}
            onClick={() => {
              setCurrentView(v.key);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="icon">
              {v.key === 'notebook' ? '▣' : v.key === 'calculs' ? '∑' : v.key === 'lexique' ? 'A' : v.key === 'auteurs' ? '§' : v.key === 'mecanismes' ? '→' : v.key === 'methodeBac' ? '✓' : v.key === 'exercices' ? '?' : v.key === 'programme' ? '≡' : '◎'}
            </span>
            <span>{(v as any).shortLabel}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: any }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch(error: any, info: any) {
    console.error('SES Compagnon runtime error:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, fontFamily: 'system-ui, sans-serif', textAlign: 'center', background: '#f9fafb', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontSize: '1.6rem', marginBottom: 12, color: '#9ca3af' }}>⚠</div>
          <h2 style={{ color: '#111827', margin: '0 0 8px', fontWeight: 600, fontSize: '1.1rem' }}>Erreur d'affichage</h2>
          <p style={{ color: '#6b7280', maxWidth: 500, margin: '0 0 20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
            {String(this.state.error?.message || this.state.error || 'Erreur inattendue')}
          </p>
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem('ses_dossier_selection_v2');
              window.location.reload();
            }}
            style={{ background: '#2563eb', color: '#ffffff', border: 'none', padding: '9px 20px', borderRadius: 6, fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer' }}
          >
            Réinitialiser et recharger
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
