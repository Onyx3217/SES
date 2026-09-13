import React, { useState, useMemo } from 'react';
import { auteursSES, AuteurSES } from '../data/auteursData';
import { insertSnippetIntoNotebook } from '../data/notebookHelper';
import { speakText, stopSpeaking } from '../utils/audioHelper';
import { rechercherAuteurs } from '../search';

export default function Auteurs({ onNavigateToNotebook }: { onNavigateToNotebook?: () => void }) {
  const [disciplineFilter, setDisciplineFilter] = useState<'Toutes' | 'Économie' | 'Sociologie et science politique'>('Toutes');
  const [search, setSearch] = useState('');
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const filteredAuteurs = useMemo(() => {
    const trimmed = search.trim();
    const baseList = trimmed ? rechercherAuteurs(trimmed, 50) : auteursSES;
    return baseList.filter((a) => {
      if (disciplineFilter !== 'Toutes' && a.discipline !== disciplineFilter) return false;
      return true;
    });
  }, [disciplineFilter, search]);

  const handleSpeak = (auteur: AuteurSES) => {
    if (speakingId === auteur.id) {
      stopSpeaking();
      setSpeakingId(null);
    } else {
      const text = `${auteur.nom}, ${auteur.courant}. Thèse centrale : ${auteur.theseCentrale}. Citation : ${auteur.citationIncontournable}`;
      speakText(text, () => setSpeakingId(null));
      setSpeakingId(auteur.id);
    }
  };

  const handleCopyCitation = async (citation: string, id: string) => {
    try {
      await navigator.clipboard.writeText(citation);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = citation;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAddToNotebook = (auteur: AuteurSES) => {
    const contenu = `### ${auteur.nom} (${auteur.siecle})\n**Courant :** ${auteur.courant}\n\n**Thèse centrale :**\n${auteur.theseCentrale}\n\n**Concepts clés :** ${auteur.notionsCles.join(', ')}\n\n**Citation pour le bac :**\n${auteur.citationIncontournable}\n\n**Quand le citer :**\n${auteur.contexteUtilisationBac}`;
    insertSnippetIntoNotebook(auteur.nom, contenu, 'Grands Auteurs', 'Auteur');
    setToastMsg(`« ${auteur.nom} » ajouté au dossier`);
    setTimeout(() => setToastMsg(null), 2500);
  };

  return (
    <div style={{ display: 'grid', gap: 18 }}>
      {/* HEADER */}
      <div style={{ marginBottom: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 700, color: '#111827', letterSpacing: '-0.02em' }}>
            Grands Auteurs de SES
          </h2>
          <p style={{ margin: '4px 0 0', color: '#6b7280', fontSize: '0.88rem' }}>
            {filteredAuteurs.length} auteurs · économie, sociologie et science politique pour les épreuves du bac
          </p>
        </div>
      </div>

      {/* TOAST */}
      {toastMsg && (
        <div
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            background: '#111827',
            color: '#ffffff',
            padding: '10px 16px',
            borderRadius: 6,
            fontWeight: 500,
            fontSize: '0.86rem',
            zIndex: 9999,
          }}
        >
          {toastMsg}
        </div>
      )}

      {/* FILTER & SEARCH BAR */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: '1 1 260px' }}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher : Smith, Bourdieu, Keynes, Weber, Olson, Rawls..."
            style={{
              width: '100%',
              padding: '9px 12px 9px 34px',
              borderRadius: 6,
              border: '1px solid #d1d5db',
              background: '#ffffff',
              fontSize: '0.86rem',
              color: '#111827',
              outline: 'none',
            }}
          />
          <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', fontSize: '0.9rem' }}>
            ⌕
          </span>
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              style={{
                position: 'absolute',
                right: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                border: 'none',
                background: 'none',
                color: '#9ca3af',
                fontSize: '0.82rem',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              ✕
            </button>
          )}
        </div>

        {/* Discipline filter */}
        <div style={{ display: 'flex', gap: 2, background: '#f3f4f6', padding: 2, borderRadius: 5 }}>
          {(['Toutes', 'Économie', 'Sociologie et science politique'] as const).map((disc) => (
            <button
              key={disc}
              type="button"
              onClick={() => setDisciplineFilter(disc)}
              style={{
                border: 'none',
                background: disciplineFilter === disc ? '#ffffff' : 'transparent',
                color: disciplineFilter === disc ? '#111827' : '#6b7280',
                padding: '6px 12px',
                borderRadius: 4,
                fontWeight: disciplineFilter === disc ? 600 : 400,
                fontSize: '0.82rem',
                cursor: 'pointer',
                boxShadow: disciplineFilter === disc ? '0 1px 2px rgba(0,0,0,0.07)' : 'none',
              }}
            >
              {disc}
            </button>
          ))}
        </div>
      </div>


      {/* AUTEURS GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 14 }}>
        {filteredAuteurs.length === 0 && (
          <div style={{ padding: '36px 16px', borderRadius: 6, background: '#f9fafb', border: '1px dashed #d1d5db', color: '#6b7280', textAlign: 'center', gridColumn: '1 / -1' }}>
            <div style={{ fontWeight: 500, color: '#374151', fontSize: '0.92rem', marginBottom: 4 }}>
              Aucun auteur ne correspond à votre recherche
            </div>
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                style={{
                  marginTop: 6,
                  border: '1px solid #d1d5db',
                  background: '#ffffff',
                  color: '#111827',
                  borderRadius: 4,
                  padding: '5px 12px',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                }}
              >
                Effacer la recherche
              </button>
            )}
          </div>
        )}

        {filteredAuteurs.map((auteur) => {
          const isSpeakingThis = speakingId === auteur.id;
          const isCopied = copiedId === auteur.id;

          return (
            <article
              key={auteur.id}
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
                <div>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                    <span
                      style={{
                        background: auteur.discipline === 'Économie' ? '#eff6ff' : '#fdf2f8',
                        color: auteur.discipline === 'Économie' ? '#1d4ed8' : '#be185d',
                        border: `1px solid ${auteur.discipline === 'Économie' ? '#bfdbfe' : '#fbcfe8'}`,
                        padding: '1px 6px',
                        borderRadius: 3,
                        fontSize: '0.7rem',
                        fontWeight: 500,
                      }}
                    >
                      {auteur.discipline}
                    </span>
                    <span style={{ color: '#6b7280', fontSize: '0.72rem' }}>
                      {auteur.siecle}
                    </span>
                  </div>
                  <h3 style={{ margin: '4px 0 1px', fontSize: '1.1rem', color: '#111827', fontWeight: 600 }}>
                    {auteur.nom}
                  </h3>
                  <div style={{ color: '#6b7280', fontSize: '0.78rem' }}>
                    {auteur.courant}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 4 }}>
                  <button
                    type="button"
                    onClick={() => handleSpeak(auteur)}
                    title="Écouter"
                    style={{
                      border: '1px solid #e5e7eb',
                      background: isSpeakingThis ? '#1d4ed8' : '#f9fafb',
                      color: isSpeakingThis ? '#ffffff' : '#6b7280',
                      borderRadius: 4,
                      padding: '3px 8px',
                      fontSize: '0.72rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                    }}
                  >
                    {isSpeakingThis ? 'Stop' : '♪'}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAddToNotebook(auteur)}
                    title="Ajouter au dossier"
                    style={{
                      border: '1px solid #e5e7eb',
                      background: '#f9fafb',
                      color: '#6b7280',
                      borderRadius: 4,
                      padding: '3px 8px',
                      fontSize: '0.72rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                    }}
                  >
                    + Dossier
                  </button>
                </div>
              </div>

              {/* Thèse centrale */}
              <div style={{ padding: '8px 11px', borderRadius: 4, background: '#f9fafb', border: '1px solid #e5e7eb' }}>
                <div style={{ color: '#4b5563', fontWeight: 600, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 2 }}>
                  Thèse centrale
                </div>
                <div style={{ color: '#1f2937', fontSize: '0.86rem', lineHeight: 1.55 }}>
                  {auteur.theseCentrale}
                </div>
              </div>

              {/* Citation */}
              <div style={{ padding: '8px 11px', borderRadius: 4, background: '#fffbeb', border: '1px solid #fef3c7' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                  <span style={{ color: '#92400e', fontWeight: 600, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Citation pour le bac
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopyCitation(auteur.citationIncontournable, auteur.id)}
                    style={{
                      border: 'none',
                      background: 'none',
                      color: '#b45309',
                      fontSize: '0.72rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    {isCopied ? 'Copié' : 'Copier'}
                  </button>
                </div>
                <div style={{ color: '#78350f', fontSize: '0.84rem', fontStyle: 'italic', lineHeight: 1.5 }}>
                  « {auteur.citationIncontournable} »
                </div>
              </div>

              {/* Concepts Clés */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {auteur.notionsCles.map((concept) => (
                  <span
                    key={concept}
                    style={{
                      background: '#f3f4f6',
                      color: '#4b5563',
                      border: '1px solid #e5e7eb',
                      borderRadius: 3,
                      padding: '2px 6px',
                      fontSize: '0.72rem',
                    }}
                  >
                    {concept}
                  </span>
                ))}
              </div>

              {/* Quand le mobiliser */}
              {auteur.contexteUtilisationBac && (
                <div style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.5, borderTop: '1px solid #f3f4f6', paddingTop: 6 }}>
                  <strong style={{ color: '#374151', fontWeight: 600 }}>Au bac :</strong> {auteur.contexteUtilisationBac}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
