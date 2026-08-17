import React, { useState, useMemo } from 'react';
import { auteursSES, AuteurSES } from '../data/auteursData';
import { insertSnippetIntoNotebook } from '../data/notebookHelper';
import { speakText, stopSpeaking } from '../utils/audioHelper';

export default function Auteurs({ onNavigateToNotebook }: { onNavigateToNotebook?: () => void }) {
  const [disciplineFilter, setDisciplineFilter] = useState<'Toutes' | 'Économie' | 'Sociologie et science politique'>('Toutes');
  const [search, setSearch] = useState('');
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const filteredAuteurs = useMemo(() => {
    const q = search.toLowerCase().trim();
    return auteursSES.filter((a) => {
      if (disciplineFilter !== 'Toutes' && a.discipline !== disciplineFilter) return false;
      if (q) {
        const hay = `${a.nom} ${a.courant} ${a.theseCentrale} ${a.notionsCles.join(' ')} ${a.citationIncontournable}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
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
      // Fallback for non-HTTPS / older browsers
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
    setToastMsg(`« ${auteur.nom} » ajouté à votre Notebook !`);
    setTimeout(() => setToastMsg(null), 2500);
  };

  return (
    <div style={{ display: 'grid', gap: 20 }}>
      {/* HEADER BANNER */}
      <div
        style={{
          padding: '24px 22px',
          borderRadius: 24,
          background: 'linear-gradient(135deg, #78350f 0%, #b45309 50%, #d97706 100%)',
          color: '#ffffff',
          boxShadow: '0 16px 40px rgba(180, 83, 9, 0.22)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ color: '#fef3c7', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 800 }}>
              Répertoire Théorique & Auteurs Clés
            </div>
            <h2 style={{ margin: '6px 0', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800 }}>
              Les Grands Auteurs de SES
            </h2>
            <p style={{ margin: 0, color: '#fef3c7', fontSize: '0.95rem', maxWidth: 650, lineHeight: 1.5 }}>
              Les 20+ économistes et sociologues indispensables pour enrichir vos dissertations, épreuves composées et devoirs surveillés.
            </p>
          </div>
        </div>
      </div>

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

      {/* FILTER & SEARCH BAR */}
      <div style={{ padding: 18, borderRadius: 22, background: '#ffffff', border: '1px solid #e2e8f0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12, boxShadow: '0 8px 24px rgba(15, 23, 42, 0.03)' }}>
        <div style={{ position: 'relative', flex: '1 1 280px' }}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un auteur : Smith, Bourdieu, Keynes, Weber, Olson..."
            style={{
              width: '100%',
              padding: '12px 14px 12px 38px',
              borderRadius: 14,
              border: '1.5px solid #fed7aa',
              background: '#fffdfa',
              fontSize: '0.92rem',
              color: '#0f172a',
              outline: 'none',
            }}
          />
          <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#b45309' }}>
            🔍
          </span>
        </div>

        {/* Discipline Filters */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {(['Toutes', 'Économie', 'Sociologie et science politique'] as const).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDisciplineFilter(d)}
              style={{
                border: 'none',
                background: disciplineFilter === d ? '#b45309' : '#f1f5f9',
                color: disciplineFilter === d ? '#ffffff' : '#475569',
                borderRadius: 12,
                padding: '8px 14px',
                fontWeight: 800,
                fontSize: '0.82rem',
                cursor: 'pointer',
              }}
            >
              {d === 'Économie' ? '📈 Économie' : d === 'Sociologie et science politique' ? '👥 Sociologie' : '🌐 Tous'}
            </button>
          ))}
        </div>
      </div>

      {/* AUTEURS GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 18 }}>
        {filteredAuteurs.map((auteur) => {
          const isSpeakingThis = speakingId === auteur.id;
          const isCopied = copiedId === auteur.id;

          return (
            <article
              key={auteur.id}
              style={{
                padding: 22,
                borderRadius: 24,
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)',
                display: 'grid',
                gap: 14,
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
                <div>
                  <span
                    style={{
                      background: auteur.discipline === 'Économie' ? '#fef3c7' : '#fce7f3',
                      color: auteur.discipline === 'Économie' ? '#92400e' : '#be185d',
                      padding: '4px 10px',
                      borderRadius: 999,
                      fontSize: '0.74rem',
                      fontWeight: 800,
                    }}
                  >
                    {auteur.discipline} • {auteur.siecle}
                  </span>
                  <h3 style={{ margin: '6px 0 2px', fontSize: '1.4rem', color: '#0f172a', fontWeight: 900 }}>
                    {auteur.nom}
                  </h3>
                  <div style={{ color: '#64748b', fontSize: '0.82rem', fontWeight: 600 }}>
                    {auteur.courant}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 6 }}>
                  <button
                    type="button"
                    onClick={() => handleSpeak(auteur)}
                    title="Écouter la synthèse audio"
                    style={{
                      border: '1px solid #fed7aa',
                      background: isSpeakingThis ? '#b45309' : '#fffbeb',
                      color: isSpeakingThis ? '#ffffff' : '#b45309',
                      borderRadius: 10,
                      padding: '6px 10px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    🔊 {isSpeakingThis ? 'Stop' : 'Écouter'}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAddToNotebook(auteur)}
                    title="Insérer dans mon Notebook"
                    style={{
                      border: '1px solid #cbd5e1',
                      background: '#f8fafc',
                      color: '#0f172a',
                      borderRadius: 10,
                      padding: '6px 10px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    📥 Notebook
                  </button>
                </div>
              </div>

              {/* Thèse centrale */}
              <div style={{ padding: '12px 14px', borderRadius: 14, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <div style={{ color: '#b45309', fontWeight: 800, fontSize: '0.76rem', textTransform: 'uppercase', marginBottom: 4 }}>
                  💡 Thèse centrale
                </div>
                <div style={{ color: '#1e293b', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {auteur.theseCentrale}
                </div>
              </div>

              {/* Citation incontournable */}
              <div style={{ padding: '12px 14px', borderRadius: 14, background: '#fffbeb', border: '1px solid #fde68a', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <div style={{ color: '#92400e', fontWeight: 800, fontSize: '0.76rem', textTransform: 'uppercase' }}>
                    📝 Citation pour le BAC
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCitation(auteur.citationIncontournable, auteur.id)}
                    style={{
                      border: 'none',
                      background: 'none',
                      color: '#b45309',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                  >
                    {isCopied ? '✅ Copié !' : 'Copier'}
                  </button>
                </div>
                <div style={{ color: '#78350f', fontSize: '0.88rem', fontStyle: 'italic', lineHeight: 1.5 }}>
                  {auteur.citationIncontournable}
                </div>
              </div>

              {/* Concepts Clés */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {auteur.notionsCles.map((concept) => (
                  <span
                    key={concept}
                    style={{
                      background: '#f1f5f9',
                      color: '#334155',
                      border: '1px solid #e2e8f0',
                      borderRadius: 999,
                      padding: '3px 8px',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                    }}
                  >
                    • {concept}
                  </span>
                ))}
              </div>

              {/* Quand le mobiliser */}
              <div style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.5, borderTop: '1px solid #f1f5f9', paddingTop: 8 }}>
                <strong>🎯 Au bac :</strong> {auteur.contexteUtilisationBac}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
