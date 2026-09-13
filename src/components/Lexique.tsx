import React, { useState, useMemo, useEffect } from 'react';
import { allGlossaryTerms, EnrichedGlossaryTerm } from '../data/glossaireHelper';
import { speakText, stopSpeaking } from '../utils/audioHelper';
import { insertSnippetIntoNotebook } from '../data/notebookHelper';
import { rechercherGlossaire, normalizeForSearch } from '../search';

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'Entreprise': { bg: '#eff6ff', text: '#1d4ed8', border: '#bfdbfe' },
  'Emploi': { bg: '#f0fdfa', text: '#0f766e', border: '#99f6e4' },
  'Macroéconomie': { bg: '#f0fdf4', text: '#15803d', border: '#bbf7d0' },
  'Marché': { bg: '#f5f3ff', text: '#6d28d9', border: '#ddd6fe' },
  'Concurrence': { bg: '#fef2f2', text: '#b91c1c', border: '#fecaca' },
  'Défaillances de marché': { bg: '#fff7ed', text: '#c2410c', border: '#fed7aa' },
  'Finance': { bg: '#fffbeb', text: '#b45309', border: '#fde68a' },
  'Finances publiques': { bg: '#fff7ed', text: '#c2410c', border: '#fed7aa' },
  'Commerce international': { bg: '#eef2ff', text: '#4338ca', border: '#c7d2fe' },
  'Science économique': { bg: '#eff6ff', text: '#1d4ed8', border: '#bfdbfe' },
  'Croissance': { bg: '#f0fdf4', text: '#15803d', border: '#bbf7d0' },
  'Sociologie': { bg: '#fdf2f8', text: '#be185d', border: '#fbcfe8' },
  'Science politique': { bg: '#eef2ff', text: '#4338ca', border: '#c7d2fe' },
  'Regards croisés': { bg: '#fefce8', text: '#854d0e', border: '#fef08a' },
  'Méthodes': { bg: '#faf5ff', text: '#7e22ce', border: '#e9d5ff' },
  'Statistiques': { bg: '#faf5ff', text: '#7e22ce', border: '#e9d5ff' },
  'Stratification': { bg: '#f0f9ff', text: '#0369a1', border: '#bae6fd' },
  'Justice sociale': { bg: '#fff1f2', text: '#9f1239', border: '#fecdd3' },
  'Organisation': { bg: '#f0fdfa', text: '#0f766e', border: '#99f6e4' },
  'Production': { bg: '#fff7ed', text: '#9a3412', border: '#fed7aa' },
  'Consommation': { bg: '#fdf2f8', text: '#9d174d', border: '#fbcfe8' },
  'Revenus': { bg: '#faf5ff', text: '#6b21a8', border: '#e9d5ff' },
  'Travail': { bg: '#f0fdfa', text: '#0f766e', border: '#99f6e4' },
};

function getCatColor(cat: string) {
  return categoryColors[cat] || { bg: '#f9fafb', text: '#374151', border: '#e5e7eb' };
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
    const trimmed = search.trim();
    // 1. Recherche lexicale et sémantique via le moteur optimisé
    const baseList = trimmed ? rechercherGlossaire(trimmed, 500) : allGlossaryTerms;

    return baseList.filter((term) => {
      // Filtre de niveau
      if (levelFilter !== 'Tous' && !term.niveaux.includes(levelFilter)) {
        return false;
      }
      // Filtre de catégorie
      if (selectedCat !== 'Toutes' && term.categorie !== selectedCat) {
        return false;
      }
      // Filtre de favoris
      if (showOnlyFavs && !favorites.includes(term.id)) {
        return false;
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

      {/* HEADER */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 700, color: '#111827', letterSpacing: '-0.02em' }}>
              Lexique SES
            </h2>
            <p style={{ margin: '4px 0 0', color: '#6b7280', fontSize: '0.88rem' }}>
              {filteredTerms.length} définitions · programme Seconde &amp; Première
            </p>
          </div>

          <div style={{ display: 'flex', gap: 4, background: '#f3f4f6', padding: 3, borderRadius: 6 }}>
            <button
              type="button"
              onClick={() => setMode('liste')}
              style={{
                border: 'none',
                background: mode === 'liste' ? '#ffffff' : 'transparent',
                color: mode === 'liste' ? '#111827' : '#6b7280',
                padding: '6px 14px',
                borderRadius: 4,
                fontWeight: mode === 'liste' ? 600 : 400,
                fontSize: '0.84rem',
                cursor: 'pointer',
                boxShadow: mode === 'liste' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              Liste ({filteredTerms.length})
            </button>
            <button
              type="button"
              onClick={() => setMode('flashcards')}
              style={{
                border: 'none',
                background: mode === 'flashcards' ? '#ffffff' : 'transparent',
                color: mode === 'flashcards' ? '#111827' : '#6b7280',
                padding: '6px 14px',
                borderRadius: 4,
                fontWeight: mode === 'flashcards' ? 600 : 400,
                fontSize: '0.84rem',
                cursor: 'pointer',
                boxShadow: mode === 'flashcards' ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              Flashcards
            </button>
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <div style={{ display: 'grid', gap: 10, marginBottom: 20 }}>
        {/* Search + Level + Favs row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: '1 1 260px' }}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher : valeur ajoutée, socialisation, PIB..."
              style={{
                width: '100%',
                padding: '9px 14px 9px 36px',
                borderRadius: 6,
                border: '1px solid #d1d5db',
                background: '#ffffff',
                fontSize: '0.88rem',
                color: '#111827',
                outline: 'none',
              }}
            />
            <span style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', fontSize: '0.9rem' }}>⌕</span>
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                style={{
                  position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
                  border: 'none', background: 'none', color: '#9ca3af', fontSize: '0.85rem', cursor: 'pointer', padding: 0,
                }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Level tabs */}
          <div style={{ display: 'flex', gap: 2, background: '#f3f4f6', padding: 2, borderRadius: 5 }}>
            {(['Tous', 'Seconde', 'Première'] as const).map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => setLevelFilter(lvl)}
                style={{
                  border: 'none',
                  background: levelFilter === lvl ? '#ffffff' : 'transparent',
                  color: levelFilter === lvl ? '#111827' : '#6b7280',
                  padding: '6px 12px',
                  borderRadius: 4,
                  fontWeight: levelFilter === lvl ? 600 : 400,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  boxShadow: levelFilter === lvl ? '0 1px 2px rgba(0,0,0,0.07)' : 'none',
                }}
              >
                {lvl}
              </button>
            ))}
          </div>

          {/* Favorites toggle */}
          <button
            type="button"
            onClick={() => setShowOnlyFavs(!showOnlyFavs)}
            style={{
              border: `1px solid ${showOnlyFavs ? '#f59e0b' : '#d1d5db'}`,
              background: showOnlyFavs ? '#fffbeb' : '#ffffff',
              color: showOnlyFavs ? '#92400e' : '#6b7280',
              padding: '7px 12px',
              borderRadius: 6,
              fontWeight: showOnlyFavs ? 600 : 400,
              fontSize: '0.82rem',
              cursor: 'pointer',
            }}
          >
            {showOnlyFavs ? 'Favoris' : 'Favoris'} ({favorites.length})
          </button>
        </div>

        {/* Category chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, maxHeight: 96, overflowY: 'auto', paddingBottom: 2 }}>
          {categories.map((cat) => {
            const isSel = selectedCat === cat;
            const cColor = cat === 'Toutes' ? { bg: '#f3f4f6', text: '#374151', border: '#d1d5db' } : getCatColor(cat);
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                style={{
                  border: `1px solid ${isSel ? cColor.border : '#e5e7eb'}`,
                  background: isSel ? cColor.bg : '#ffffff',
                  color: isSel ? cColor.text : '#4b5563',
                  borderRadius: 4,
                  padding: '4px 10px',
                  fontWeight: isSel ? 600 : 400,
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  transition: 'all 0.1s',
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
            <div style={{ padding: '36px 16px', textAlign: 'center', color: '#6b7280', background: '#f9fafb', borderRadius: 8, border: '1px dashed #d1d5db' }}>
              <div style={{ fontWeight: 600, color: '#374151', fontSize: '0.95rem', marginBottom: 4 }}>
                Aucune notion ne correspond à votre recherche
              </div>
              <p style={{ margin: '0 0 12px', fontSize: '0.84rem' }}>
                {search ? `Aucun résultat pour « ${search} »` : 'Aucun élément ne correspond aux filtres actifs'}
                {selectedCat !== 'Toutes' ? ` dans la catégorie « ${selectedCat} »` : ''}
              </p>
              {(search || selectedCat !== 'Toutes' || levelFilter !== 'Tous' || showOnlyFavs) && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch('');
                    setSelectedCat('Toutes');
                    setLevelFilter('Tous');
                    setShowOnlyFavs(false);
                  }}
                  style={{
                    border: '1px solid #d1d5db',
                    background: '#ffffff',
                    color: '#111827',
                    borderRadius: 6,
                    padding: '6px 14px',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  Réinitialiser tous les filtres
                </button>
              )}
            </div>
          ) : null}

          {filteredTerms.map((term) => {
            const catC = getCatColor(term.categorie);
            const isFav = favorites.includes(term.id);

            return (
              <article
                key={term.id}
                style={{
                  padding: '16px 18px',
                  borderRadius: 8,
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  display: 'grid',
                  gap: 10,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
                    <h3 style={{ margin: 0, fontSize: '1.05rem', color: '#111827', fontWeight: 600 }}>
                      {term.terme}
                    </h3>
                    {term.sigle && (
                      <span style={{ background: catC.bg, color: catC.text, border: `1px solid ${catC.border}`, borderRadius: 3, padding: '2px 6px', fontWeight: 600, fontSize: '0.74rem' }}>
                        {term.sigle}
                      </span>
                    )}
                    <span style={{ background: catC.bg, color: catC.text, border: `1px solid ${catC.border}`, borderRadius: 3, padding: '2px 8px', fontWeight: 500, fontSize: '0.72rem' }}>
                      {term.categorie}
                    </span>
                    {term.niveaux.map((lvl) => (
                      <span key={lvl} style={{ background: '#f3f4f6', color: '#6b7280', border: '1px solid #e5e7eb', borderRadius: 3, padding: '2px 6px', fontSize: '0.7rem', fontWeight: 400 }}>
                        {lvl}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <button
                      type="button"
                      onClick={() => handleSpeak(term)}
                      title="Écouter"
                      style={{
                        border: '1px solid #e5e7eb',
                        background: speakingId === term.id ? '#1d4ed8' : '#f9fafb',
                        color: speakingId === term.id ? '#ffffff' : '#6b7280',
                        borderRadius: 5,
                        padding: '3px 8px',
                        fontSize: '0.74rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                      }}
                    >
                      {speakingId === term.id ? 'Stop' : '♪'}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAddToNotebook(term)}
                      title="Ajouter au Dossier"
                      style={{
                        border: '1px solid #e5e7eb',
                        background: '#f9fafb',
                        color: '#6b7280',
                        borderRadius: 5,
                        padding: '3px 8px',
                        fontSize: '0.74rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                      }}
                    >
                      + Dossier
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleFavorite(term.id)}
                      title={isFav ? 'Retirer des favoris' : 'Favoris'}
                      style={{
                        border: 'none',
                        background: 'transparent',
                        color: isFav ? '#f59e0b' : '#d1d5db',
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        padding: 2,
                        lineHeight: 1,
                      }}
                    >
                      ★
                    </button>
                  </div>
                </div>

                {/* Definition */}
                <p style={{ margin: 0, color: '#374151', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  {term.definition}
                </p>

                {/* Formule */}
                {term.formule && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, padding: '8px 12px', borderRadius: 5, background: '#f0fdfa', border: '1px solid #ccfbf1' }}>
                    <code style={{ fontFamily: 'Consolas, Monaco, monospace', color: '#0f766e', fontWeight: 600, fontSize: '0.88rem' }}>
                      {term.formule}
                    </code>
                    {term.relatedCalculId && onSelectCalcul && (
                      <button
                        type="button"
                        onClick={() => onSelectCalcul(term.relatedCalculId!)}
                        style={{
                          border: 'none', background: '#0f766e', color: '#ffffff',
                          borderRadius: 5, padding: '4px 10px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer',
                        }}
                      >
                        Pratiquer →
                      </button>
                    )}
                  </div>
                )}

                {/* Interpretation & Example */}
                <div style={{ display: 'grid', gap: 5, fontSize: '0.87rem', lineHeight: 1.6 }}>
                  {term.interpretation && (
                    <div style={{ color: '#374151' }}>
                      <strong style={{ color: '#111827', fontWeight: 600 }}>Interprétation :</strong> {term.interpretation}
                    </div>
                  )}
                  {term.exemple && (
                    <div style={{ color: '#2563eb', fontSize: '0.85rem' }}>
                      <strong style={{ color: '#1d4ed8', fontWeight: 600 }}>Exemple :</strong> {term.exemple}
                    </div>
                  )}
                </div>

                {/* Key points */}
                {term.pointsCles && term.pointsCles.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 2 }}>
                    {term.pointsCles.map((pt, i) => (
                      <span
                        key={i}
                        style={{
                          background: '#f9fafb', color: '#6b7280', border: '1px solid #e5e7eb',
                          borderRadius: 3, padding: '3px 8px', fontSize: '0.72rem', fontWeight: 400,
                        }}
                      >
                        {pt}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}

      {mode === 'flashcards' && (
        <div style={{ display: 'grid', gap: 16 }}>
          {filteredTerms.length === 0 ? (
            <div style={{ padding: '24px 0', textAlign: 'center', color: '#6b7280', fontSize: '0.9rem' }}>
              Aucun terme disponible avec ces filtres.
            </div>
          ) : (
            <div style={{ display: 'grid', placeItems: 'center', gap: 16 }}>
              {/* Counter */}
              <div style={{ color: '#6b7280', fontSize: '0.82rem' }}>
                {flashcardIndex + 1} / {filteredTerms.length}
              </div>

              {/* Card */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                style={{
                  width: '100%',
                  maxWidth: 580,
                  minHeight: 280,
                  padding: '28px 32px',
                  borderRadius: 8,
                  background: isFlipped ? '#ffffff' : '#1d4ed8',
                  color: isFlipped ? '#111827' : '#ffffff',
                  border: `1px solid ${isFlipped ? '#e5e7eb' : '#1d4ed8'}`,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'background 0.25s, color 0.25s',
                  userSelect: 'none',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <span style={{
                      background: isFlipped ? '#f3f4f6' : 'rgba(255,255,255,0.18)',
                      color: isFlipped ? '#374151' : '#ffffff',
                      padding: '3px 9px', borderRadius: 4,
                      fontSize: '0.74rem', fontWeight: 500,
                    }}>
                      {currentFlashcard.categorie}
                    </span>
                    <span style={{ fontSize: '0.76rem', opacity: 0.7 }}>
                      {isFlipped ? 'Définition' : 'Notion'}
                    </span>
                  </div>

                  {!isFlipped ? (
                    <div style={{ textAlign: 'center', padding: '32px 0' }}>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
                        Que signifie ce concept ?
                      </div>
                      <h3 style={{ margin: 0, fontSize: '2rem', fontWeight: 700, lineHeight: 1.2 }}>
                        {currentFlashcard.terme}
                      </h3>
                      {currentFlashcard.sigle && (
                        <div style={{ marginTop: 8, fontSize: '1rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                          ({currentFlashcard.sigle})
                        </div>
                      )}
                    </div>
                  ) : (
                    <div style={{ display: 'grid', gap: 10 }}>
                      <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#111827', fontWeight: 600 }}>
                        {currentFlashcard.terme}
                      </h3>
                      <p style={{ margin: 0, color: '#374151', fontSize: '0.92rem', lineHeight: 1.65 }}>
                        {currentFlashcard.definition}
                      </p>
                      {currentFlashcard.interpretation && (
                        <div style={{ padding: '7px 11px', borderRadius: 5, background: '#f9fafb', border: '1px solid #e5e7eb', color: '#4b5563', fontSize: '0.84rem' }}>
                          <strong style={{ fontWeight: 600 }}>Interprétation :</strong> {currentFlashcard.interpretation}
                        </div>
                      )}
                      {currentFlashcard.exemple && (
                        <div style={{ color: '#2563eb', fontSize: '0.84rem' }}>
                          <strong style={{ fontWeight: 600 }}>Exemple :</strong> {currentFlashcard.exemple}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div style={{ textAlign: 'center', fontSize: '0.76rem', opacity: 0.55, marginTop: 16 }}>
                  {isFlipped ? 'Cliquer pour masquer' : 'Cliquer pour révéler'}
                </div>
              </div>

              {/* Nav buttons */}
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <button
                  type="button"
                  disabled={flashcardIndex === 0}
                  onClick={() => { setFlashcardIndex((p) => Math.max(0, p - 1)); setIsFlipped(false); }}
                  style={{
                    border: '1px solid #d1d5db', background: '#ffffff', color: '#374151',
                    borderRadius: 6, padding: '8px 16px', fontWeight: 500, fontSize: '0.84rem',
                    cursor: flashcardIndex === 0 ? 'not-allowed' : 'pointer',
                    opacity: flashcardIndex === 0 ? 0.4 : 1,
                  }}
                >
                  ← Précédente
                </button>

                <button
                  type="button"
                  onClick={() => setIsFlipped(!isFlipped)}
                  style={{
                    border: 'none', background: '#111827', color: '#ffffff',
                    borderRadius: 6, padding: '8px 18px', fontWeight: 600, fontSize: '0.84rem', cursor: 'pointer',
                  }}
                >
                  Retourner
                </button>

                <button
                  type="button"
                  disabled={flashcardIndex >= filteredTerms.length - 1}
                  onClick={() => { setFlashcardIndex((p) => Math.min(filteredTerms.length - 1, p + 1)); setIsFlipped(false); }}
                  style={{
                    border: '1px solid #d1d5db', background: '#ffffff', color: '#374151',
                    borderRadius: 6, padding: '8px 16px', fontWeight: 500, fontSize: '0.84rem',
                    cursor: flashcardIndex >= filteredTerms.length - 1 ? 'not-allowed' : 'pointer',
                    opacity: flashcardIndex >= filteredTerms.length - 1 ? 0.4 : 1,
                  }}
                >
                  Suivante →
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
