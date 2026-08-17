import React, { useState } from 'react';
import { mecanismesData, SchemaCausal } from '../data/mecanismesData';
import { insertSnippetIntoNotebook } from '../data/notebookHelper';
import { speakText, stopSpeaking } from '../utils/audioHelper';

export default function Mecanismes() {
  const [selectedSchemaId, setSelectedSchemaId] = useState<string>(mecanismesData[0].id);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [speaking, setSpeaking] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const currentSchema = mecanismesData.find((s) => s.id === selectedSchemaId) || mecanismesData[0];

  const handleSelectSchema = (id: string) => {
    setSelectedSchemaId(id);
    setActiveStep(0);
    stopSpeaking();
    setSpeaking(false);
  };

  const handleSpeak = () => {
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
    } else {
      const fullText = `${currentSchema.titre}. Problème : ${currentSchema.problemePose}. Les étapes sont : ${currentSchema.etapes.map((e) => `Étape ${e.ordre} : ${e.titre}, ${e.explication}`).join('. ')}. Conséquence finale : ${currentSchema.consequenceFinale}`;
      speakText(fullText, () => setSpeaking(false));
      setSpeaking(true);
    }
  };

  const handleAddToNotebook = () => {
    const etapesStr = currentSchema.etapes
      .map((e) => `${e.ordre}. **${e.titre}** : ${e.explication} *(Impact : ${e.impact})*`)
      .join('\n');
    const contenu = `### ${currentSchema.titre}\n*Chapitre : ${currentSchema.chapitre}*\n\n**Problématique :** ${currentSchema.problemePose}\n\n**Enchaînement causal :**\n${etapesStr}\n\n**Bilan :** ${currentSchema.consequenceFinale}\n\n**Exemple concret :** ${currentSchema.exempleConcret}`;
    insertSnippetIntoNotebook(currentSchema.titre, contenu, currentSchema.chapitre, 'Schéma');
    setToastMsg(`« ${currentSchema.titre} » ajouté à votre Notebook !`);
    setTimeout(() => setToastMsg(null), 2500);
  };

  return (
    <div style={{ display: 'grid', gap: 20 }}>
      {/* HEADER */}
      <div
        style={{
          padding: '24px 22px',
          borderRadius: 24,
          background: 'linear-gradient(135deg, #047857 0%, #059669 50%, #10b981 100%)',
          color: '#ffffff',
          boxShadow: '0 16px 40px rgba(5, 150, 105, 0.22)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ color: '#a7f3d0', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 800 }}>
              Chaînes Logiques & Causalité
            </div>
            <h2 style={{ margin: '6px 0', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800 }}>
              Schémas & Mécanismes Interactifs
            </h2>
            <p style={{ margin: 0, color: '#d1fae5', fontSize: '0.95rem', maxWidth: 650, lineHeight: 1.5 }}>
              Visualisez pas-à-pas les boucles économiques et sociologiques indispensables pour expliquer les phénomènes aux devoirs.
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
            color: '#34d399',
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

      {/* SELECTOR PILLS */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: 14, background: '#ffffff', borderRadius: 20, border: '1px solid #e2e8f0' }}>
        {mecanismesData.map((schema) => {
          const isSel = selectedSchemaId === schema.id;
          return (
            <button
              key={schema.id}
              type="button"
              onClick={() => handleSelectSchema(schema.id)}
              style={{
                border: `1.5px solid ${isSel ? '#059669' : '#e2e8f0'}`,
                background: isSel ? '#059669' : '#f8fafc',
                color: isSel ? '#ffffff' : '#1e293b',
                padding: '8px 14px',
                borderRadius: 999,
                fontWeight: 800,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              🔄 {schema.titre}
            </button>
          );
        })}
      </div>

      {/* MAIN INTERACTIVE SCHEMA CARD */}
      <div style={{ padding: 24, borderRadius: 24, background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)', display: 'grid', gap: 20 }}>
        {/* Title Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10, borderBottom: '1px solid #f1f5f9', paddingBottom: 14 }}>
          <div>
            <span style={{ background: '#ecfdf5', color: '#065f46', border: '1px solid #a7f3d0', padding: '4px 10px', borderRadius: 999, fontSize: '0.76rem', fontWeight: 800 }}>
              {currentSchema.discipline} • {currentSchema.chapitre}
            </span>
            <h3 style={{ margin: '8px 0 4px', fontSize: '1.5rem', color: '#0f172a', fontWeight: 800 }}>
              {currentSchema.titre}
            </h3>
            <div style={{ color: '#059669', fontSize: '0.94rem', fontWeight: 700 }}>
              ❓ {currentSchema.problemePose}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <button
              type="button"
              onClick={handleSpeak}
              style={{
                border: '1px solid #a7f3d0',
                background: speaking ? '#059669' : '#ecfdf5',
                color: speaking ? '#ffffff' : '#065f46',
                borderRadius: 10,
                padding: '8px 14px',
                fontWeight: 800,
                fontSize: '0.84rem',
                cursor: 'pointer',
              }}
            >
              🔊 {speaking ? 'Arrêter' : 'Écouter'}
            </button>

            <button
              type="button"
              onClick={handleAddToNotebook}
              style={{
                border: '1px solid #cbd5e1',
                background: '#f8fafc',
                color: '#0f172a',
                borderRadius: 10,
                padding: '8px 14px',
                fontWeight: 800,
                fontSize: '0.84rem',
                cursor: 'pointer',
              }}
            >
              📥 Ajouter au Notebook
            </button>
          </div>
        </div>

        {/* INTERACTIVE CAUSAL CHAIN STEPPER */}
        <div style={{ display: 'grid', gap: 12 }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Chaîne de causalité (Cliquez sur une étape pour voir le détail) :
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${currentSchema.etapes.length}, 1fr)`, gap: 10 }} className="calculs-layout">
            {currentSchema.etapes.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.ordre}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    padding: 16,
                    borderRadius: 18,
                    border: `2px solid ${isSelected ? '#059669' : '#e2e8f0'}`,
                    background: isSelected ? '#ecfdf5' : '#f8fafc',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'grid',
                    gap: 6,
                    position: 'relative',
                    boxShadow: isSelected ? '0 6px 18px rgba(5, 150, 105, 0.15)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span
                      style={{
                        background: isSelected ? '#059669' : '#cbd5e1',
                        color: '#ffffff',
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        display: 'grid',
                        placeItems: 'center',
                        fontSize: '0.78rem',
                        fontWeight: 900,
                      }}
                    >
                      {step.ordre}
                    </span>
                    <strong style={{ color: isSelected ? '#065f46' : '#0f172a', fontSize: '0.9rem' }}>
                      {step.titre}
                    </strong>
                  </div>
                  <div style={{ color: '#475569', fontSize: '0.82rem', lineHeight: 1.4 }}>
                    {step.impact}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ACTIVE STEP DEEP-DIVE BANNER */}
        <div style={{ padding: 20, borderRadius: 20, background: '#f0fdf4', border: '1.5px solid #86efac', display: 'grid', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: '1.3rem' }}>🎯</span>
            <h4 style={{ margin: 0, fontSize: '1.15rem', color: '#166534', fontWeight: 800 }}>
              Étape {currentSchema.etapes[activeStep].ordre} : {currentSchema.etapes[activeStep].titre}
            </h4>
          </div>
          <p style={{ margin: 0, color: '#14532d', fontSize: '1rem', lineHeight: 1.6, fontWeight: 500 }}>
            {currentSchema.etapes[activeStep].explication}
          </p>
          <div style={{ color: '#15803d', fontWeight: 700, fontSize: '0.9rem' }}>
            ⚡ <strong>Conséquence immédiate :</strong> {currentSchema.etapes[activeStep].impact}
          </div>
        </div>

        {/* BILAN & EXEMPLE */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
          <div style={{ padding: 16, borderRadius: 16, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
            <div style={{ color: '#059669', fontWeight: 800, fontSize: '0.76rem', textTransform: 'uppercase', marginBottom: 4 }}>
              🏁 Bilan / Consequence finale
            </div>
            <div style={{ color: '#1e293b', fontSize: '0.92rem', lineHeight: 1.6 }}>
              {currentSchema.consequenceFinale}
            </div>
          </div>

          <div style={{ padding: 16, borderRadius: 16, background: '#fffbeb', border: '1px solid #fde68a' }}>
            <div style={{ color: '#b45309', fontWeight: 800, fontSize: '0.76rem', textTransform: 'uppercase', marginBottom: 4 }}>
              ⚠️ Piège ou Nuance à apporter
            </div>
            <div style={{ color: '#78350f', fontSize: '0.92rem', lineHeight: 1.6 }}>
              {currentSchema.piegeOuNuance}
            </div>
          </div>
        </div>

        {/* Real world example */}
        <div style={{ padding: 14, borderRadius: 14, background: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e40af', fontSize: '0.92rem', lineHeight: 1.5 }}>
          <strong>📌 Exemple concret à citer :</strong> {currentSchema.exempleConcret}
        </div>
      </div>
    </div>
  );
}
