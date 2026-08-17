import React, { useState } from 'react';
import { sujetsBacOfficiels, SujetTypeBac } from '../data/methodeBacData';
import { insertSnippetIntoNotebook } from '../data/notebookHelper';
import { speakText, stopSpeaking } from '../utils/audioHelper';

export default function MethodeBac() {
  const [tab, setTab] = useState<'generateur' | 'epreuves' | 'aei'>('generateur');
  const [selectedSujetId, setSelectedSujetId] = useState<string>(sujetsBacOfficiels[0].id);
  const [speaking, setSpeaking] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Generator form state
  const [genTypeDoc, setGenTypeDoc] = useState('Tableau statistique (INSEE)');
  const [genChamp, setGenChamp] = useState('en France');
  const [genAnnee, setGenAnnee] = useState('en 2023');
  const [genPopulation, setGenPopulation] = useState('des actifs âgés de 15 à 64 ans');
  const [genGrandeur, setGenGrandeur] = useState('le taux de chômage');
  const [genValeur, setGenValeur] = useState('7,2');
  const [genUnite, setGenUnite] = useState('%');
  const [genCopied, setGenCopied] = useState(false);

  // AEI Builder state
  const [aeiAffirmer, setAeiAffirmer] = useState('La hausse des gains de productivité favorise la baisse des prix de vente.');
  const [aeiExpliciter, setAeiExpliciter] = useState('En effet, lorsque la productivité du travail et du capital augmente, le coût moyen de production unitaire diminue pour l’entreprise.');
  const [aeiIllustrer, setAeiIllustrer] = useState('Par exemple, sous le modèle fordiste, la division du travail a permis de diviser par deux le prix de vente de la Ford T en quelques années.');

  const currentSujet = sujetsBacOfficiels.find((s) => s.id === selectedSujetId) || sujetsBacOfficiels[0];

  // Generated sentence with 4 mandatory BAC components
  const generatedSentence = `Selon ${genTypeDoc}, ${genChamp} ${genAnnee}, ${genGrandeur} ${genPopulation} s'élevait à ${genValeur} ${genUnite} (soit ${genUnite === '%' ? `environ ${Math.round(parseFloat(genValeur.replace(',', '.')) || 0)} personnes sur 100` : `${genValeur} ${genUnite}`}).`;

  const handleCopySentence = () => {
    navigator.clipboard.writeText(`« ${generatedSentence} »`);
    setGenCopied(true);
    setTimeout(() => setGenCopied(false), 2000);
  };

  const handleAddSentenceToNotebook = () => {
    insertSnippetIntoNotebook('Phrase de lecture statistique', `### Phrase de lecture type BAC :\n« ${generatedSentence} »\n\n- **Où / Source :** ${genChamp} (${genTypeDoc})\n- **Quand :** ${genAnnee}\n- **Quoi :** ${genGrandeur}\n- **Valeur :** ${genValeur} ${genUnite}`, 'Méthodologie', 'Statistiques');
    setToastMsg('Phrase de lecture ajoutée à votre Notebook !');
    setTimeout(() => setToastMsg(null), 2500);
  };

  const handleAddAeiToNotebook = () => {
    const contenu = `### Paragraphe argumenté (Règle AEI) :\n- **[A - Affirmer]** ${aeiAffirmer}\n- **[E - Expliciter]** ${aeiExpliciter}\n- **[I - Illustrer]** ${aeiIllustrer}\n\n**Texte rédigé :**\n${aeiAffirmer} ${aeiExpliciter} ${aeiIllustrer}`;
    insertSnippetIntoNotebook('Paragraphe AEI', contenu, 'Méthodologie', 'AEI');
    setToastMsg('Paragraphe AEI ajouté à votre Notebook !');
    setTimeout(() => setToastMsg(null), 2500);
  };

  const handleSpeak = (text: string) => {
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
    } else {
      speakText(text, () => setSpeaking(false));
      setSpeaking(true);
    }
  };

  return (
    <div style={{ display: 'grid', gap: 20 }}>
      {/* HEADER BANNER */}
      <div
        style={{
          padding: '24px 22px',
          borderRadius: 24,
          background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #075985 100%)',
          color: '#ffffff',
          boxShadow: '0 16px 40px rgba(3, 105, 161, 0.22)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ color: '#bae6fd', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 800 }}>
              Boîte à Outils & Réussite aux Épreuves
            </div>
            <h2 style={{ margin: '6px 0', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800 }}>
              Méthodologie Bac SES
            </h2>
            <p style={{ margin: 0, color: '#e0f2fe', fontSize: '0.95rem', maxWidth: 650, lineHeight: 1.5 }}>
              Générez des phrases de lecture statistique parfaites, appliquez la règle AEI et maîtrisez les épreuves (EC1, EC2, EC3, Dissertation).
            </p>
          </div>

          <div style={{ display: 'flex', gap: 6, background: 'rgba(255, 255, 255, 0.2)', padding: 4, borderRadius: 16 }}>
            <button
              type="button"
              onClick={() => setTab('generateur')}
              style={{
                border: 'none',
                background: tab === 'generateur' ? '#ffffff' : 'transparent',
                color: tab === 'generateur' ? '#0369a1' : '#ffffff',
                padding: '8px 14px',
                borderRadius: 12,
                fontWeight: 800,
                fontSize: '0.84rem',
                cursor: 'pointer',
              }}
            >
              📝 Phrase de Lecture
            </button>
            <button
              type="button"
              onClick={() => setTab('aei')}
              style={{
                border: 'none',
                background: tab === 'aei' ? '#ffffff' : 'transparent',
                color: tab === 'aei' ? '#0369a1' : '#ffffff',
                padding: '8px 14px',
                borderRadius: 12,
                fontWeight: 800,
                fontSize: '0.84rem',
                cursor: 'pointer',
              }}
            >
              📐 Règle AEI
            </button>
            <button
              type="button"
              onClick={() => setTab('epreuves')}
              style={{
                border: 'none',
                background: tab === 'epreuves' ? '#ffffff' : 'transparent',
                color: tab === 'epreuves' ? '#0369a1' : '#ffffff',
                padding: '8px 14px',
                borderRadius: 12,
                fontWeight: 800,
                fontSize: '0.84rem',
                cursor: 'pointer',
              }}
            >
              🎓 Sujets Types & Corrigés
            </button>
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

      {/* TAB 1: GÉNÉRATEUR DE PHRASE DE LECTURE STATISTIQUE */}
      {tab === 'generateur' && (
        <div style={{ display: 'grid', gap: 18 }}>
          <div style={{ padding: 22, borderRadius: 24, background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)', display: 'grid', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: '1.4rem' }}>⚡</span>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>
                  Générateur de Phrase de Lecture Statistique Officielle
                </h3>
                <div style={{ color: '#64748b', fontSize: '0.84rem' }}>
                  Intègre automatiquement les 4 critères obligatoires au Bac : <strong>Qui/Où</strong>, <strong>Quand</strong>, <strong>Quoi</strong>, <strong>Valeur avec unité</strong>.
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#475569' }}>Source / Document :</label>
                <input
                  type="text"
                  value={genTypeDoc}
                  onChange={(e) => setGenTypeDoc(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: 12, border: '1.5px solid #cbd5e1', fontSize: '0.9rem', marginTop: 4 }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#475569' }}>Où (Champ géographique) :</label>
                <input
                  type="text"
                  value={genChamp}
                  onChange={(e) => setGenChamp(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: 12, border: '1.5px solid #cbd5e1', fontSize: '0.9rem', marginTop: 4 }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#475569' }}>Quand (Date ou Période) :</label>
                <input
                  type="text"
                  value={genAnnee}
                  onChange={(e) => setGenAnnee(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: 12, border: '1.5px solid #cbd5e1', fontSize: '0.9rem', marginTop: 4 }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#475569' }}>Qui (Population / Champ) :</label>
                <input
                  type="text"
                  value={genPopulation}
                  onChange={(e) => setGenPopulation(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: 12, border: '1.5px solid #cbd5e1', fontSize: '0.9rem', marginTop: 4 }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#475569' }}>Quoi (Grandeur étudiée) :</label>
                <input
                  type="text"
                  value={genGrandeur}
                  onChange={(e) => setGenGrandeur(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: 12, border: '1.5px solid #cbd5e1', fontSize: '0.9rem', marginTop: 4 }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#475569' }}>Valeur :</label>
                  <input
                    type="text"
                    value={genValeur}
                    onChange={(e) => setGenValeur(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: 12, border: '1.5px solid #cbd5e1', fontSize: '0.9rem', marginTop: 4 }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 800, color: '#475569' }}>Unité :</label>
                  <input
                    type="text"
                    value={genUnite}
                    onChange={(e) => setGenUnite(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: 12, border: '1.5px solid #cbd5e1', fontSize: '0.9rem', marginTop: 4 }}
                  />
                </div>
              </div>
            </div>

            {/* RESULTING SENTENCE DISPLAY */}
            <div style={{ padding: 20, borderRadius: 18, background: '#f0fdf4', border: '2px solid #86efac', display: 'grid', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                <span style={{ color: '#166534', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  🎯 Phrase type BAC générée :
                </span>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    type="button"
                    onClick={handleCopySentence}
                    style={{
                      border: 'none',
                      background: '#16a34a',
                      color: '#ffffff',
                      borderRadius: 8,
                      padding: '6px 12px',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                    }}
                  >
                    {genCopied ? '✅ Copié !' : '📋 Copier'}
                  </button>
                  <button
                    type="button"
                    onClick={handleAddSentenceToNotebook}
                    style={{
                      border: '1px solid #86efac',
                      background: '#ffffff',
                      color: '#166534',
                      borderRadius: 8,
                      padding: '6px 12px',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                    }}
                  >
                    📥 Notebook
                  </button>
                </div>
              </div>

              <p style={{ margin: 0, color: '#14532d', fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.6 }}>
                « {generatedSentence} »
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: RÈGLE AEI (AFFIRMER, EXPLICITER, ILLUSTRER) */}
      {tab === 'aei' && (
        <div style={{ display: 'grid', gap: 18 }}>
          <div style={{ padding: 22, borderRadius: 24, background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)', display: 'grid', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: '1.4rem' }}>📐</span>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>
                  Constructeur de Paragraphe Argumenté (Règle AEI)
                </h3>
                <div style={{ color: '#64748b', fontSize: '0.84rem' }}>
                  La méthode absolue attendue par tous les correcteurs de SES pour chaque sous-partie de dissertation ou EC3.
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gap: 14 }}>
              {/* A */}
              <div style={{ padding: 14, borderRadius: 16, background: '#eff6ff', border: '1.5px solid #93c5fd' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#1e40af', textTransform: 'uppercase' }}>
                  1. [A] Affirmer (L'idée principale / Thèse du paragraphe)
                </label>
                <input
                  type="text"
                  value={aeiAffirmer}
                  onChange={(e) => setAeiAffirmer(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: 10, border: '1px solid #93c5fd', fontSize: '0.92rem', fontWeight: 600, marginTop: 6 }}
                />
              </div>

              {/* E */}
              <div style={{ padding: 14, borderRadius: 16, background: '#fdf4ff', border: '1.5px solid #f0abfc' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#a21caf', textTransform: 'uppercase' }}>
                  2. [E] Expliciter (Le mécanisme économique ou sociologique théorique)
                </label>
                <textarea
                  rows={3}
                  value={aeiExpliciter}
                  onChange={(e) => setAeiExpliciter(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: 10, border: '1px solid #f0abfc', fontSize: '0.92rem', marginTop: 6, fontFamily: 'inherit' }}
                />
              </div>

              {/* I */}
              <div style={{ padding: 14, borderRadius: 16, background: '#f0fdf4', border: '1.5px solid #86efac' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 800, color: '#166534', textTransform: 'uppercase' }}>
                  3. [I] Illustrer (Donnée chiffrée issue du dossier documentaire ou exemple historique)
                </label>
                <textarea
                  rows={3}
                  value={aeiIllustrer}
                  onChange={(e) => setAeiIllustrer(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: 10, border: '1px solid #86efac', fontSize: '0.92rem', marginTop: 6, fontFamily: 'inherit' }}
                />
              </div>
            </div>

            {/* RESULT */}
            <div style={{ padding: 18, borderRadius: 18, background: '#f8fafc', border: '1px solid #e2e8f0', display: 'grid', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.86rem' }}>
                  📝 Résultat assemblé pour votre copie :
                </span>
                <button
                  type="button"
                  onClick={handleAddAeiToNotebook}
                  style={{
                    border: 'none',
                    background: '#0369a1',
                    color: '#ffffff',
                    borderRadius: 8,
                    padding: '6px 12px',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                  }}
                >
                  📥 Sauvegarder dans Notebook
                </button>
              </div>
              <p style={{ margin: 0, color: '#1e293b', fontSize: '0.98rem', lineHeight: 1.7 }}>
                {aeiAffirmer} {aeiExpliciter} {aeiIllustrer}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SUJETS TYPES ET CORRIGÉS */}
      {tab === 'epreuves' && (
        <div style={{ display: 'grid', gap: 18 }}>
          {/* Sujet selector pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: 14, background: '#ffffff', borderRadius: 20, border: '1px solid #e2e8f0' }}>
            {sujetsBacOfficiels.map((s) => {
              const isSel = selectedSujetId === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedSujetId(s.id)}
                  style={{
                    border: `1.5px solid ${isSel ? '#0284c7' : '#e2e8f0'}`,
                    background: isSel ? '#0284c7' : '#f8fafc',
                    color: isSel ? '#ffffff' : '#1e293b',
                    padding: '8px 14px',
                    borderRadius: 999,
                    fontWeight: 800,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                  }}
                >
                  {s.typeEpreuve.split(' ')[0]} : {s.intituleSujet.slice(0, 32)}...
                </button>
              );
            })}
          </div>

          {/* Detailed Sujet View */}
          <div style={{ padding: 24, borderRadius: 24, background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)', display: 'grid', gap: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
              <div>
                <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '4px 10px', borderRadius: 999, fontSize: '0.76rem', fontWeight: 800 }}>
                  {currentSujet.typeEpreuve} • {currentSujet.bareme}
                </span>
                <h3 style={{ margin: '8px 0 4px', fontSize: '1.4rem', color: '#0f172a', fontWeight: 800 }}>
                  {currentSujet.intituleSujet}
                </h3>
                <div style={{ color: '#64748b', fontSize: '0.85rem' }}>
                  Chapitre : {currentSujet.chapitre} | Durée conseillée : {currentSujet.dureeConseillee}
                </div>
              </div>

              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  type="button"
                  onClick={() => handleSpeak(`${currentSujet.intituleSujet}. Corrigé : ${currentSujet.exempleRedige.developpement}`)}
                  style={{
                    border: '1px solid #bae6fd',
                    background: speaking ? '#0284c7' : '#f0f9ff',
                    color: speaking ? '#ffffff' : '#0369a1',
                    borderRadius: 10,
                    padding: '8px 14px',
                    fontWeight: 800,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                  }}
                >
                  🔊 {speaking ? 'Arrêter' : 'Écouter'}
                </button>
              </div>
            </div>

            {/* Étapes Méthodologiques */}
            <div style={{ display: 'grid', gap: 10 }}>
              <div style={{ color: '#0369a1', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>
                Étapes de résolution :
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 10 }}>
                {currentSujet.etapesMethode.map((e, idx) => (
                  <div key={idx} style={{ padding: 14, borderRadius: 14, background: '#f8fafc', border: '1px solid #e2e8f0', display: 'grid', gap: 4 }}>
                    <strong style={{ color: '#0f172a', fontSize: '0.9rem' }}>{e.etape}</strong>
                    <div style={{ color: '#475569', fontSize: '0.84rem' }}>{e.description}</div>
                    <div style={{ color: '#0284c7', fontSize: '0.8rem', fontStyle: 'italic' }}>💡 {e.conseils}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exemple Rédigé */}
            <div style={{ padding: 18, borderRadius: 18, background: '#f0fdf4', border: '1.5px solid #86efac', display: 'grid', gap: 10 }}>
              <div style={{ color: '#166534', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>
                📖 Proposition de rédaction intégrale type BAC :
              </div>
              <div style={{ color: '#14532d', fontSize: '0.95rem', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
                {currentSujet.exempleRedige.developpement}
              </div>
            </div>

            {/* Pièges à éviter */}
            <div style={{ padding: 14, borderRadius: 14, background: '#fff7ed', border: '1px solid #fed7aa', color: '#9a3412', fontSize: '0.9rem' }}>
              <strong>⚠️ Pièges fréquents au Bac :</strong>
              <ul style={{ margin: '6px 0 0', paddingLeft: 20 }}>
                {currentSujet.piegesAEviter.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
