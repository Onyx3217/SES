import React, { useState, useMemo, useEffect } from 'react';
import { allGlossaryTerms, EnrichedGlossaryTerm } from '../data/glossaireHelper';
import { speakText, stopSpeaking } from '../utils/audioHelper';
import { insertSnippetIntoNotebook } from '../data/notebookHelper';

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'Entreprise': { bg: '#dbeafe', text: '#1d4ed8', border: '#93c5fd' },
  'Emploi': { bg: '#ccfbf1', text: '#0f766e', border: '#5eead4' },
  'Macroéconomie': { bg: '#dcfce7', text: '#15803d', border: '#86efac' },
  'Marché': { bg: '#ede9fe', text: '#6d28d9', border: '#c4b5fd' },
  'Concurrence': { bg: '#fee2e2', text: '#b91c1c', border: '#fca5a5' },
  'Défaillances de marché': { bg: '#ffedd5', text: '#c2410c', border: '#fdba74' },
  'Finance': { bg: '#fef3c7', text: '#b45309', border: '#fcd34d' },
  'Finances publiques': { bg: '#ffedd5', text: '#c2410c', border: '#fdba74' },
  'Commerce international': { bg: '#e0e7ff', text: '#4338ca', border: '#a5b4fc' },
  'Science économique': { bg: '#dbeafe', text: '#1d4ed8', border: '#93c5fd' },
  'Croissance': { bg: '#dcfce7', text: '#15803d', border: '#86efac' },
  'Sociologie': { bg: '#fce7f3', text: '#be185d', border: '#fbcfe8' },
  'Science politique': { bg: '#e0e7ff', text: '#4338ca', border: '#a5b4fc' },
  'Regards croisés': { bg: '#fef9c3', text: '#854d0e', border: '#fde047' },
  'Méthodes': { bg: '#f3e8ff', text: '#7e22ce', border: '#d8b4fe' },
  'Statistiques': { bg: '#f3e8ff', text: '#7e22ce', border: '#d8b4fe' },
  'Stratification': { bg: '#bae6fd', text: '#0369a1', border: '#7dd3fc' },
  'Justice sociale': { bg: '#ffe4e6', text: '#9f1239', border: '#fda4af' },
  'Organisation': { bg: '#ccfbf1', text: '#0f766e', border: '#5eead4' },
  'Production': { bg: '#fed7aa', text: '#9a3412', border: '#fdba74' },
  'Consommation': { bg: '#fbcfe8', text: '#9d174d', border: '#f472b6' },
  'Revenus': { bg: '#e9d5ff', text: '#6b21a8', border: '#d8b4fe' },
  'Travail': { bg: '#ccfbf1', text: '#0f766e', border: '#5eead4' },
};

function getCatColor(cat: string) {
  return categoryColors[cat] || { bg: '#f1f5f9', text: '#334155', border: '#cbd5e1' };
}

function normalizeSearch(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();
}

export default function Lexique({ onSelectCalcul }: { onSelectCalcul?: (calculId: string) => void }) {
  const [levelFilter, setLevelFilter] = useState<'Tous' | 'Seconde' | 'Première'>('Tous');
  const [selectedCat, setSelectedCat] = useState<string>('Toutes');
  const [search, setSearch] = useState('');
  const [mode, setMode] = useState<'liste' | 'flashcards'>('liste');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ses_glossary_favs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [showOnlyFavs, setShowOnlyFavs] = useState(false);

  const handleSpeak = (term: EnrichedGlossaryTerm) => {
    if (speakingId === term.id) {
      stopSpeaking();
      setSpeakingId(null);
    } else {
      const text = `${term.terme}. ${term.sigle ? `Sigle : ${term.sigle}.` : ''} Définition : ${term.definition}. ${term.interpretation ? `Interprétation : ${term.interpretation}.` : ''} ${term.exemple ? `Exemple : ${term.exemple}.` : ''}`;
      speakText(text, () => setSpeakingId(null));
      setSpeakingId(term.id);
    }
  };

  const handleAddToNotebook = (term: EnrichedGlossaryTerm) => {
    const contenu = `### ${term.terme} ${term.sigle ? `(${term.sigle})` : ''}\n*Catégorie : ${term.categorie}*\n\n**Définition officielle :**\n${term.definition}\n\n${term.formule ? `**Formule :** \`${term.formule}\`\n\n` : ''}${term.interpretation ? `**Interprétation SES :**\n${term.interpretation}\n\n` : ''}${term.exemple ? `**Exemple concret :**\n${term.exemple}\n\n` : ''}**Points clés :**\n${term.pointsCles.map((p) => `- ${p}`).join('\n')}`;
    insertSnippetIntoNotebook(term.terme, contenu, term.categorie, 'Vocabulaire');
    setToastMsg(`« ${term.terme} » ajouté à votre Notebook !`);
    setTimeout(() => setToastMsg(null), 2500);
  };

  // Save favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ses_glossary_favs', JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  const toggleFavorite = (termId: string) => {
    setFavorites((prev) =>
      prev.includes(termId) ? prev.filter((id) => id !== termId) : [...prev, termId]
    );
  };

  const categories = useMemo(() => {
    const list = Array.from(new Set(allGlossaryTerms.map((t) => t.categorie))).sort((a, b) => a.localeCompare(b, 'fr'));
    return ['Toutes', ...list];
  }, []);

  const filteredTerms = useMemo(() => {
    const normSearch = normalizeSearch(search);
    return allGlossaryTerms.filter((term) => {
      // Level filter
      if (levelFilter !== 'Tous' && !term.niveaux.includes(levelFilter)) {
        return false;
      }
      // Category filter
      if (selectedCat !== 'Toutes' && term.categorie !== selectedCat) {
        return false;
      }
      // Favorites filter
      if (showOnlyFavs && !favorites.includes(term.id)) {
        return false;
      }
      // Search filter
      if (normSearch) {
        const hay = normalizeSearch([
          term.terme,
          term.sigle,
          term.categorie,
          term.definition,
          term.formule,
          term.interpretation,
          term.exemple,
          ...term.pointsCles,
        ].filter(Boolean).join(' '));
        if (!hay.includes(normSearch)) return false;
      }
      return true;
    });
  }, [levelFilter, selectedCat, search, showOnlyFavs, favorites]);

  // Reset flashcard index when filter changes
  useEffect(() => {
    setFlashcardIndex(0);
    setIsFlipped(false);
  }, [levelFilter, selectedCat, search, showOnlyFavs]);

  const currentFlashcard = filteredTerms[flashcardIndex];

  return (
    <div style={{ display: 'grid', gap: 20 }}>
      {/* TOAST NOTIFICATION */}
      {toastMsg && (
        <div
          style={{
            position: 'fixed',
            top: 24,
            right: 24,
            background: '#0f172a',
            color: '#38bdf8',
            padding: '12px 20px',
            borderRadius: 14,
            boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
            fontWeight: 800,
            fontSize: '0.9rem',
            zIndex: 9999,
          }}
        >
          📥 {toastMsg}
        </div>
      )}

      {/* HEADER BANNER */}
      <div
        style={{
          padding: '24px 22px',
          borderRadius: 24,
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #0284c7 100%)',
          color: '#ffffff',
          boxShadow: '0 16px 40px rgba(37, 99, 235, 0.20)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ color: '#93c5fd', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 800 }}>
              Lexique Officiel SES
            </div>
            <h2 style={{ margin: '6px 0', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800 }}>
              Vocabulaire Seconde & Première
            </h2>
            <p style={{ margin: 0, color: '#dbeafe', fontSize: '0.95rem', maxWidth: 650, lineHeight: 1.5 }}>
              Toutes les définitions, formules, interprétations sociologiques & économiques et exemples concrets conformes au programme du lycée.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 8, background: 'rgba(255, 255, 255, 0.15)', padding: 4, borderRadius: 16 }}>
            <button
              type="button"
              onClick={() => setMode('liste')}
              style={{
                border: 'none',
                background: mode === 'liste' ? '#ffffff' : 'transparent',
                color: mode === 'liste' ? '#1e3a8a' : '#ffffff',
                padding: '8px 16px',
                borderRadius: 12,
                fontWeight: 800,
                fontSize: '0.86rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              📋 Liste ({filteredTerms.length})
            </button>
            <button
              type="button"
              onClick={() => setMode('flashcards')}
              style={{
                border: 'none',
                background: mode === 'flashcards' ? '#ffffff' : 'transparent',
                color: mode === 'flashcards' ? '#1e3a8a' : '#ffffff',
                padding: '8px 16px',
                borderRadius: 12,
                fontWeight: 800,
                fontSize: '0.86rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              ⚡ Flashcards Révision
            </button>
          </div>
        </div>
      </div>

      {/* CONTROLS (SEARCH & FILTERS) */}
      <div style={{ padding: 18, borderRadius: 22, background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 8px 24px rgba(15, 23, 42, 0.03)', display: 'grid', gap: 14 }}>
        {/* Search input + Level filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: '1 1 280px' }}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher : valeur ajoutée, socialisation, CPP, PIB, externalité, habitus..."
              style={{
                width: '100%',
                padding: '13px 16px 13px 42px',
                borderRadius: 14,
                border: '1.5px solid #dbeafe',
                background: '#f8fbff',
                fontSize: '0.98rem',
                color: '#0f172a',
                outline: 'none',
              }}
            />
            <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#3b82f6', fontSize: '1.1rem' }}>
              🔍
            </span>
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  border: 'none',
                  background: 'none',
                  color: '#94a3b8',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Level tabs */}
          <div style={{ display: 'flex', gap: 6, background: '#f1f5f9', padding: 4, borderRadius: 14 }}>
            {(['Tous', 'Seconde', 'Première'] as const).map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => setLevelFilter(lvl)}
                style={{
                  border: 'none',
                  background: levelFilter === lvl ? '#ffffff' : 'transparent',
                  color: levelFilter === lvl ? '#0f172a' : '#64748b',
                  padding: '8px 14px',
                  borderRadius: 10,
                  fontWeight: 800,
                  fontSize: '0.84rem',
                  cursor: 'pointer',
                  boxShadow: levelFilter === lvl ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
                }}
              >
                {lvl === 'Seconde' ? '🎓 Seconde' : lvl === 'Première' ? '🏛️ Première' : '🌐 Tous niveaux'}
              </button>
            ))}
          </div>

          {/* Favorites toggle */}
          <button
            type="button"
            onClick={() => setShowOnlyFavs(!showOnlyFavs)}
            style={{
              border: `1.5px solid ${showOnlyFavs ? '#f59e0b' : '#e2e8f0'}`,
              background: showOnlyFavs ? '#fef3c7' : '#ffffff',
              color: showOnlyFavs ? '#b45309' : '#64748b',
              padding: '10px 14px',
              borderRadius: 14,
              fontWeight: 800,
              fontSize: '0.84rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span>⭐</span> {showOnlyFavs ? 'Mes favoris' : 'Favoris'} ({favorites.length})
          </button>
        </div>

        {/* Category chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, maxHeight: 110, overflowY: 'auto', paddingBottom: 4 }}>
          {categories.map((cat) => {
            const isSel = selectedCat === cat;
            const cColor = cat === 'Toutes' ? { bg: '#f1f5f9', text: '#334155', border: '#cbd5e1' } : getCatColor(cat);
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                style={{
                  border: `1px solid ${isSel ? cColor.border : '#e2e8f0'}`,
                  background: isSel ? cColor.bg : '#ffffff',
                  color: isSel ? cColor.text : '#475569',
                  borderRadius: 999,
                  padding: '6px 12px',
                  fontWeight: isSel ? 800 : 600,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* MODE 1: LISTE DE FICHES DE VOCABULAIRE */}
      {mode === 'liste' && (
        <div style={{ display: 'grid', gap: 14 }}>
          {filteredTerms.length === 0 ? (
            <div style={{ padding: 32, borderRadius: 20, background: '#ffffff', border: '1px dashed #cbd5e1', textAlign: 'center', color: '#64748b' }}>
              <div style={{ fontSize: '2rem', marginBottom: 8 }}>🧐</div>
              <h4 style={{ margin: '0 0 6px', color: '#0f172a' }}>Aucun terme ne correspond à ces critères</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Essayez d'ajuster votre recherche ou de réinitialiser les filtres.</p>
            </div>
          ) : null}

          {filteredTerms.map((term) => {
            const catC = getCatColor(term.categorie);
            const isFav = favorites.includes(term.id);

            return (
              <article
                key={term.id}
                style={{
                  padding: '20px 22px',
                  borderRadius: 22,
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)',
                  display: 'grid',
                  gap: 12,
                  transition: 'transform 0.18s ease, box-shadow 0.18s ease',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                    <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#0f172a', fontWeight: 800 }}>
                      {term.terme}
                    </h3>
                    {term.sigle && (
                      <span style={{ background: catC.bg, color: catC.text, border: `1px solid ${catC.border}`, borderRadius: 999, padding: '3px 8px', fontWeight: 800, fontSize: '0.78rem' }}>
                        {term.sigle}
                      </span>
                    )}
                    <span style={{ background: catC.bg, color: catC.text, border: `1px solid ${catC.border}`, borderRadius: 999, padding: '3px 10px', fontWeight: 700, fontSize: '0.76rem' }}>
                      {term.categorie}
                    </span>
                    {term.niveaux.map((lvl) => (
                      <span key={lvl} style={{ background: '#f8fafc', color: '#475569', border: '1px solid #e2e8f0', borderRadius: 999, padding: '3px 8px', fontSize: '0.74rem', fontWeight: 700 }}>
                        🎓 {lvl}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <button
                      type="button"
                      onClick={() => handleSpeak(term)}
                      title="Écouter la définition"
                      style={{
                        border: '1px solid #cbd5e1',
                        background: speakingId === term.id ? '#1e3a8a' : '#ffffff',
                        color: speakingId === term.id ? '#ffffff' : '#0f172a',
                        borderRadius: 8,
                        padding: '4px 8px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      🔊 {speakingId === term.id ? 'Stop' : 'Écouter'}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAddToNotebook(term)}
                      title="Ajouter à mon Notebook"
                      style={{
                        border: '1px solid #cbd5e1',
                        background: '#f8fafc',
                        color: '#0f172a',
                        borderRadius: 8,
                        padding: '4px 8px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      📥 Dossier
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleFavorite(term.id)}
                      title={isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                      style={{
                        border: 'none',
                        background: 'transparent',
                        color: isFav ? '#f59e0b' : '#cbd5e1',
                        fontSize: '1.3rem',
                        cursor: 'pointer',
                        padding: 2,
                      }}
                    >
                      ★
                    </button>
                  </div>
                </div>

                {/* Definition */}
                <p style={{ margin: 0, color: '#1e293b', fontSize: '0.98rem', lineHeight: 1.65, fontWeight: 500 }}>
                  {term.definition}
                </p>

                {/* Formule if exists */}
                {term.formule && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, padding: '10px 14px', borderRadius: 12, background: '#ecfeff', border: '1px solid #a5f3fc' }}>
                    <div style={{ fontFamily: 'Consolas, Monaco, monospace', color: '#0f766e', fontWeight: 800, fontSize: '0.95rem' }}>
                      📐 {term.formule}
                    </div>
                    {term.relatedCalculId && onSelectCalcul && (
                      <button
                        type="button"
                        onClick={() => onSelectCalcul(term.relatedCalculId!)}
                        style={{
                          border: 'none',
                          background: '#0f766e',
                          color: '#ffffff',
                          borderRadius: 8,
                          padding: '6px 12px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        Pratiquer ce calcul ➔
                      </button>
                    )}
                  </div>
                )}

                {/* Interpretation & Example */}
                <div style={{ display: 'grid', gap: 6, fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {term.interpretation && (
                    <div style={{ color: '#334155' }}>
                      <strong style={{ color: '#0f172a' }}>💡 Interprétation SES :</strong> {term.interpretation}
                    </div>
                  )}
                  {term.exemple && (
                    <div style={{ color: '#0369a1' }}>
                      <strong style={{ color: '#0c4a6e' }}>📌 Exemple concret :</strong> {term.exemple}
                    </div>
                  )}
                </div>

                {/* Key points */}
                {term.pointsCles && term.pointsCles.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
                    {term.pointsCles.map((pt, i) => (
                      <span
                        key={i}
                        style={{
                          background: '#f8fafc',
                          color: '#475569',
                          border: '1px solid #e2e8f0',
                          borderRadius: 999,
                          padding: '4px 10px',
                          fontSize: '0.76rem',
                          fontWeight: 700,
                        }}
                      >
                        ✓ {pt}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}

      {/* MODE 2: FLASHCARDS INTERACTIVES */}
      {mode === 'flashcards' && (
        <div style={{ display: 'grid', gap: 16 }}>
          {filteredTerms.length === 0 ? (
            <div style={{ padding: 32, borderRadius: 20, background: '#ffffff', border: '1px dashed #cbd5e1', textAlign: 'center' }}>
              Aucun terme disponible pour les flashcards avec ces filtres.
            </div>
          ) : (
            <div style={{ display: 'grid', placeItems: 'center', gap: 16 }}>
              {/* Counter */}
              <div style={{ color: '#64748b', fontWeight: 800, fontSize: '0.9rem' }}>
                Carte {flashcardIndex + 1} sur {filteredTerms.length}
              </div>

              {/* Card component */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                style={{
                  width: '100%',
                  maxWidth: 620,
                  minHeight: 320,
                  padding: 28,
                  borderRadius: 24,
                  background: isFlipped ? '#ffffff' : 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                  color: isFlipped ? '#0f172a' : '#ffffff',
                  border: `2px solid ${isFlipped ? '#3b82f6' : '#60a5fa'}`,
                  boxShadow: '0 20px 45px rgba(37, 99, 235, 0.18)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                  position: 'relative',
                  userSelect: 'none',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <span
                      style={{
                        background: isFlipped ? '#eff6ff' : 'rgba(255,255,255,0.2)',
                        color: isFlipped ? '#1d4ed8' : '#ffffff',
                        padding: '4px 10px',
                        borderRadius: 999,
                        fontSize: '0.78rem',
                        fontWeight: 800,
                      }}
                    >
                      {currentFlashcard.categorie} • {currentFlashcard.niveaux.join(', ')}
                    </span>
                    <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                      {isFlipped ? '📖 Définition' : '❓ Notion à définir'}
                    </span>
                  </div>

                  {!isFlipped ? (
                    <div style={{ textAlign: 'center', padding: '40px 0' }}>
                      <div style={{ fontSize: '0.9rem', color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800, marginBottom: 8 }}>
                        Que signifie ce concept ?
                      </div>
                      <h3 style={{ margin: 0, fontSize: '2.2rem', fontWeight: 800 }}>
                        {currentFlashcard.terme}
                      </h3>
                      {currentFlashcard.sigle && (
                        <div style={{ marginTop: 8, fontSize: '1.2rem', color: '#facc15', fontWeight: 800 }}>
                          ({currentFlashcard.sigle})
                        </div>
                      )}
                    </div>
                  ) : (
                    <div style={{ display: 'grid', gap: 12 }}>
                      <h3 style={{ margin: 0, fontSize: '1.4rem', color: '#1e3a8a', fontWeight: 800 }}>
                        {currentFlashcard.terme}
                      </h3>
                      <p style={{ margin: 0, color: '#334155', fontSize: '1.02rem', lineHeight: 1.6 }}>
                        {currentFlashcard.definition}
                      </p>
                      {currentFlashcard.interpretation && (
                        <div style={{ padding: '8px 12px', borderRadius: 10, background: '#f8fafc', border: '1px solid #e2e8f0', color: '#475569', fontSize: '0.88rem' }}>
                          💡 <strong>Interprétation :</strong> {currentFlashcard.interpretation}
                        </div>
                      )}
                      {currentFlashcard.exemple && (
                        <div style={{ color: '#0369a1', fontSize: '0.88rem' }}>
                          📌 <strong>Exemple :</strong> {currentFlashcard.exemple}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div style={{ textAlign: 'center', fontSize: '0.82rem', opacity: 0.7, marginTop: 16 }}>
                  {isFlipped ? 'Cliquez pour masquer la réponse' : 'Cliquez pour afficher la définition et les exemples ➔'}
                </div>
              </div>

              {/* Navigation controls */}
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <button
                  type="button"
                  disabled={flashcardIndex === 0}
                  onClick={() => {
                    setFlashcardIndex((prev) => Math.max(0, prev - 1));
                    setIsFlipped(false);
                  }}
                  style={{
                    border: '1px solid #cbd5e1',
                    background: '#ffffff',
                    color: '#0f172a',
                    borderRadius: 14,
                    padding: '10px 18px',
                    fontWeight: 800,
                    cursor: flashcardIndex === 0 ? 'not-allowed' : 'pointer',
                    opacity: flashcardIndex === 0 ? 0.5 : 1,
                  }}
                >
                  ⬅ Précédente
                </button>

                <button
                  type="button"
                  onClick={() => setIsFlipped(!isFlipped)}
                  style={{
                    border: 'none',
                    background: '#0f172a',
                    color: '#ffffff',
                    borderRadius: 14,
                    padding: '10px 20px',
                    fontWeight: 800,
                    cursor: 'pointer',
                  }}
                >
                  🔄 Retourner
                </button>

                <button
                  type="button"
                  disabled={flashcardIndex >= filteredTerms.length - 1}
                  onClick={() => {
                    setFlashcardIndex((prev) => Math.min(filteredTerms.length - 1, prev + 1));
                    setIsFlipped(false);
                  }}
                  style={{
                    border: '1px solid #cbd5e1',
                    background: '#ffffff',
                    color: '#0f172a',
                    borderRadius: 14,
                    padding: '10px 18px',
                    fontWeight: 800,
                    cursor: flashcardIndex >= filteredTerms.length - 1 ? 'not-allowed' : 'pointer',
                    opacity: flashcardIndex >= filteredTerms.length - 1 ? 0.5 : 1,
                  }}
                >
                  Suivante ➔
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
