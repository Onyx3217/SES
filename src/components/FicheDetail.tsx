import React, { useState, useEffect, useMemo } from 'react';
import { getCalculById, generateRandomExerciseFor, FicheCalcul } from '../data/calculsData';
import { AnimatedNumberText, CountUpNumber } from './AnimatedNumber';
import { speakText, stopSpeaking } from '../utils/audioHelper';
import { insertSnippetIntoNotebook } from '../data/notebookHelper';

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'Entreprise et production': { bg: '#dbeafe', text: '#1d4ed8', border: '#93c5fd' },
  'Statistiques appliquées': { bg: '#f3e8ff', text: '#7e22ce', border: '#d8b4fe' },
  'Macroéconomie': { bg: '#dcfce7', text: '#15803d', border: '#86efac' },
  'Marché et concurrence': { bg: '#fee2e2', text: '#b91c1c', border: '#fca5a5' },
  'Finance et monnaie': { bg: '#fef3c7', text: '#b45309', border: '#fcd34d' },
  'Finance': { bg: '#fef3c7', text: '#b45309', border: '#fcd34d' },
  'Finances publiques': { bg: '#ffedd5', text: '#c2410c', border: '#fdba74' },
  'Emploi et travail': { bg: '#ccfbf1', text: '#0f766e', border: '#5eead4' },
  'Science politique': { bg: '#e0e7ff', text: '#4338ca', border: '#a5b4fc' },
  'Sociologie': { bg: '#fce7f3', text: '#be185d', border: '#fbcfe8' },
};

function getCatColor(cat: string) {
  return categoryColors[cat] || { bg: '#f1f5f9', text: '#334155', border: '#cbd5e1' };
}

function parseNumberInput(value: string): number | null {
  const clean = value
    .replace(/[\s\u00a0\u202F]/g, '')
    .replace(/€|%|Md€|k€|points?|pts?/gi, '')
    .replace(',', '.')
    .trim();
  const num = parseFloat(clean);
  return Number.isFinite(num) ? num : null;
}

export default function FicheDetail({ id, onNavigateTo }: { id: string | null; onNavigateTo?: (ficheId: string) => void }) {
  const fiche: FicheCalcul | undefined = useMemo(() => (id ? getCalculById(id) : undefined), [id]);

  // Simulator state
  const [simulatorValues, setSimulatorValues] = useState<Record<string, number>>({});
  
  // Exercise state
  const [userAnswer, setUserAnswer] = useState('');
  const [exerciseFeedback, setExerciseFeedback] = useState<'idle' | 'correct' | 'partial' | 'incorrect' | 'revealed'>('idle');
  const [showHint, setShowHint] = useState(false);
  const [showDetailedSolution, setShowDetailedSolution] = useState(false);
  const [dynamicExercise, setDynamicExercise] = useState<any>(null);
  const [speaking, setSpeaking] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Initialize values when fiche changes
  useEffect(() => {
    if (fiche) {
      const initVals: Record<string, number> = {};
      fiche.simulateur.champs.forEach((f) => {
        initVals[f.id] = f.defaultValue;
      });
      setSimulatorValues(initVals);
      setUserAnswer('');
      setExerciseFeedback('idle');
      setShowHint(false);
      setShowDetailedSolution(false);
      setDynamicExercise(null);
      stopSpeaking();
      setSpeaking(false);
    }
  }, [id, fiche]);

  if (!fiche) {
    return (
      <div style={{ padding: 32, borderRadius: 24, background: '#ffffff', border: '1px dashed #cbd5e1', textAlign: 'center', color: '#64748b' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>🔍</div>
        <h3 style={{ margin: '0 0 8px', color: '#0f172a' }}>Sélectionnez une fiche de calcul</h3>
        <p style={{ margin: 0, fontSize: '0.95rem' }}>Choisissez un calcul dans la liste ou effectuez une recherche pour afficher la formule, les exemples et les exercices détaillés.</p>
      </div>
    );
  }

  // Active exercise (default or dynamically generated)
  const currentExo = dynamicExercise || {
    enonce: fiche.exercicePratique.enonce,
    donnees: fiche.exercicePratique.donnees,
    question: fiche.exercicePratique.question,
    reponseAttendue: fiche.exercicePratique.reponseAttendue,
    unite: fiche.exercicePratique.unite,
    resolution: {
      calculPose: fiche.exercicePratique.resolutionDetaillee.calculPose,
      resultatExact: fiche.exercicePratique.resolutionDetaillee.resultatExact,
      phraseLectureBac: fiche.exercicePratique.resolutionDetaillee.phraseLectureBac
    }
  };

  const checkExerciseAnswer = () => {
    if (!userAnswer.trim()) {
      setExerciseFeedback('idle');
      return;
    }

    const parsedUser = parseNumberInput(userAnswer);
    const expected = typeof currentExo.reponseAttendue === 'number'
      ? currentExo.reponseAttendue
      : parseNumberInput(String(currentExo.reponseAttendue));

    if (parsedUser === null || expected === null) {
      setExerciseFeedback('revealed');
      return;
    }

    const tolerance = Math.max(0.05, Math.abs(expected) * 0.02);
    const isCorrect = Math.abs(parsedUser - expected) <= tolerance;

    if (isCorrect) {
      setExerciseFeedback('correct');
      setShowDetailedSolution(true);
    } else {
      const isOpposite = Math.abs(parsedUser + expected) <= tolerance;
      if (isOpposite) {
        setExerciseFeedback('partial');
      } else {
        setExerciseFeedback('incorrect');
      }
    }
  };

  const handleGenerateNewExercise = () => {
    const newExo = generateRandomExerciseFor(fiche.id);
    if (newExo) {
      setDynamicExercise(newExo);
      setUserAnswer('');
      setExerciseFeedback('idle');
      setShowHint(false);
      setShowDetailedSolution(false);
    }
  };

  const handleSpeak = () => {
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
    } else {
      const text = `${fiche.nom}. Définition : ${fiche.definitionCourte}. Formule : ${fiche.formule}. Phrase type bac : ${fiche.exempleCours.phraseLecture}`;
      speakText(text, () => setSpeaking(false));
      setSpeaking(true);
    }
  };

  const handleAddToNotebook = () => {
    const contenu = `### ${fiche.nom}\n*Catégorie : ${fiche.categorie}*\n\n**Formule :** \`${fiche.formule}\`\n\n**Définition :** ${fiche.explicationPedagogique.definition}\n\n**Phrase type BAC :**\n« ${fiche.exempleCours.phraseLecture} »\n\n**Pièges à éviter :**\n${fiche.pieges.map((p) => `- ${p}`).join('\n')}`;
    insertSnippetIntoNotebook(fiche.nom, contenu, fiche.chapitres[0] || 'Calculs', 'Calcul');
    setToastMsg(`« ${fiche.nom} » ajouté à votre Notebook !`);
    setTimeout(() => setToastMsg(null), 2500);
  };

  // Compute simulator result
  const simResult = fiche.simulateur.calculer(simulatorValues);
  const catColor = getCatColor(fiche.categorie);

  return (
    <div key={fiche.id} style={{ display: 'grid', gap: 20 }}>
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

      {/* HEADER CARD */}
      <div
        style={{
          padding: '24px 22px',
          borderRadius: 24,
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          border: `1.5px solid ${catColor.border}`,
          boxShadow: '0 12px 30px rgba(15, 23, 42, 0.04)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
            <span
              style={{
                background: catColor.bg,
                color: catColor.text,
                border: `1px solid ${catColor.border}`,
                padding: '5px 12px',
                borderRadius: 999,
                fontWeight: 800,
                fontSize: '0.78rem',
                letterSpacing: '0.04em',
              }}
            >
              {fiche.categorie}
            </span>
            {fiche.niveau.map((lvl) => (
              <span
                key={lvl}
                style={{
                  background: lvl === 'Seconde' ? '#ecfeff' : '#f5f3ff',
                  color: lvl === 'Seconde' ? '#0891b2' : '#6d28d9',
                  border: `1px solid ${lvl === 'Seconde' ? '#a5f3fc' : '#ddd6fe'}`,
                  padding: '5px 10px',
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: '0.76rem',
                }}
              >
                🎓 {lvl}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 6 }}>
            <button
              type="button"
              onClick={handleSpeak}
              style={{
                border: '1px solid #cbd5e1',
                background: speaking ? '#0284c7' : '#ffffff',
                color: speaking ? '#ffffff' : '#0f172a',
                borderRadius: 10,
                padding: '6px 12px',
                fontSize: '0.8rem',
                fontWeight: 700,
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
                background: '#ffffff',
                color: '#0f172a',
                borderRadius: 10,
                padding: '6px 12px',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              📥 Notebook
            </button>
          </div>
        </div>

        <h2 style={{ margin: '0 0 10px', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#0f172a', fontWeight: 800 }}>
          {fiche.nom}
        </h2>
        <p style={{ margin: '0 0 16px', color: '#475569', fontSize: '1.02rem', lineHeight: 1.6 }}>
          {fiche.definitionCourte}
        </p>

        {/* Pédagogie En clair & Unité */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
          <div style={{ padding: 14, borderRadius: 16, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
            <div style={{ color: '#2563eb', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
              💡 Définition officielle
            </div>
            <div style={{ color: '#334155', fontSize: '0.92rem', lineHeight: 1.6 }}>
              {fiche.explicationPedagogique.definition}
            </div>
          </div>
          <div style={{ padding: 14, borderRadius: 16, background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
            <div style={{ color: '#16a34a', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
              🎯 En clair
            </div>
            <div style={{ color: '#166534', fontSize: '0.92rem', lineHeight: 1.6 }}>
              {fiche.explicationPedagogique.enClair}
            </div>
          </div>
        </div>
      </div>

      {/* FORMULE ET TERMES */}
      <div style={{ padding: 22, borderRadius: 24, background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(15, 23, 42, 0.03)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: '1.2rem' }}>📐</span>
          <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#0f172a' }}>Formule mathématique</h3>
        </div>

        <div
          style={{
            padding: '16px 18px',
            borderRadius: 16,
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            color: '#38bdf8',
            fontFamily: 'Consolas, Monaco, "Courier New", monospace',
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
            fontWeight: 700,
            overflowX: 'auto',
            marginBottom: 16,
            boxShadow: '0 8px 20px rgba(15, 23, 42, 0.15)',
          }}
        >
          {fiche.formule}
        </div>

        {fiche.termesFormule.length > 0 && (
          <div style={{ display: 'grid', gap: 8 }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Comprendre chaque terme :
            </div>
            <div style={{ display: 'grid', gap: 8 }}>
              {fiche.termesFormule.map((t, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'baseline',
                    gap: 8,
                    padding: '8px 12px',
                    borderRadius: 12,
                    background: '#f8fafc',
                    border: '1px solid #f1f5f9',
                    fontSize: '0.9rem',
                  }}
                >
                  <strong style={{ color: '#0f172a', minWidth: 140 }}>{t.symbole} :</strong>
                  <span style={{ color: '#475569' }}>{t.sens}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 1. EXEMPLE DU COURS */}
      <div style={{ padding: 22, borderRadius: 24, background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(15, 23, 42, 0.03)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: '1.2rem' }}>📖</span>
            <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#0f172a' }}>{fiche.exempleCours.titre}</h3>
          </div>
          <span style={{ background: '#dbeafe', color: '#1e40af', padding: '4px 10px', borderRadius: 999, fontSize: '0.76rem', fontWeight: 700 }}>
            Exemple du cours
          </span>
        </div>

        <div style={{ display: 'grid', gap: 12 }}>
          <div style={{ padding: '12px 14px', borderRadius: 14, background: '#f8fafc', border: '1px solid #e2e8f0', color: '#334155', lineHeight: 1.6 }}>
            <strong>Énoncé :</strong> {fiche.exempleCours.enonce}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {Object.entries(fiche.exempleCours.donnees).map(([k, v]) => (
              <span key={k} style={{ padding: '6px 12px', borderRadius: 999, background: '#eff6ff', color: '#1d4ed8', fontSize: '0.82rem', fontWeight: 700 }}>
                {k} : {String(v)}
              </span>
            ))}
          </div>

          <div style={{ padding: '12px 14px', borderRadius: 14, background: '#ecfeff', border: '1px solid #a5f3fc' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0e7490', textTransform: 'uppercase', marginBottom: 4 }}>
              Calcul & Résultat :
            </div>
            <div style={{ fontFamily: 'Consolas, Monaco, monospace', color: '#0f766e', fontWeight: 700, fontSize: '1.02rem', marginBottom: 6 }}>
              {fiche.exempleCours.calcul}
            </div>
            <div style={{ color: '#047857', fontWeight: 800, fontSize: '1.1rem' }}>
              Résultat : <AnimatedNumberText text={fiche.exempleCours.resultat} />
            </div>
          </div>

          {/* Phrase type BAC */}
          <div style={{ padding: '14px 16px', borderRadius: 16, background: '#fdf4ff', border: '1px solid #f0abfc' }}>
            <div style={{ color: '#a21caf', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>📝</span> Phrase de lecture type BAC (Attendus officiels)
            </div>
            <p style={{ margin: 0, color: '#701a75', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.6 }}>
              « {fiche.exempleCours.phraseLecture} »
            </p>
          </div>
        </div>
      </div>

      {/* 2. SIMULATEUR INTERACTIF EN TEMPS RÉEL */}
      <div
        style={{
          padding: 22,
          borderRadius: 24,
          background: 'linear-gradient(135deg, #f0fdfa 0%, #f8fafc 100%)',
          border: '1.5px solid #5eead4',
          boxShadow: '0 12px 30px rgba(13, 148, 136, 0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: '1.3rem' }}>⚡</span>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Calculateur instantané sur mesure</h3>
              <div style={{ color: '#0f766e', fontSize: '0.82rem', marginTop: 2 }}>Entrez les chiffres de vos exercices pour calculer et rédiger automatiquement</div>
            </div>
          </div>
          <span style={{ background: '#14b8a6', color: '#ffffff', padding: '5px 12px', borderRadius: 999, fontSize: '0.76rem', fontWeight: 800 }}>
            Mode Simulateur
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 16 }}>
          {fiche.simulateur.champs.map((ch) => (
            <div key={ch.id} style={{ display: 'grid', gap: 6 }}>
              <label htmlFor={`sim-${ch.id}`} style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>
                {ch.label} {ch.unit ? `(${ch.unit})` : ''}
              </label>
              <input
                id={`sim-${ch.id}`}
                type="number"
                inputMode="decimal"
                value={simulatorValues[ch.id] ?? ch.defaultValue}
                onChange={(e) => {
                  const v = parseFloat(e.target.value);
                  setSimulatorValues((prev) => ({
                    ...prev,
                    [ch.id]: Number.isFinite(v) ? v : 0,
                  }));
                }}
                style={{
                  padding: '12px 14px',
                  borderRadius: 14,
                  border: '1.5px solid #99f6e4',
                  background: '#ffffff',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  outline: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                }}
              />
            </div>
          ))}
        </div>

        <div style={{ padding: 18, borderRadius: 18, background: '#ffffff', border: '1px solid #99f6e4', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
            <span style={{ color: '#0f766e', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase' }}>Résultat calculé :</span>
            <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0f766e' }}>
              <CountUpNumber value={simResult.valeur} decimals={2} /> {simResult.unite}
            </span>
          </div>
          <div style={{ fontFamily: 'Consolas, Monaco, monospace', color: '#475569', fontSize: '0.92rem', marginBottom: 10, padding: '8px 12px', background: '#f8fafc', borderRadius: 10 }}>
            {simResult.calculTexte}
          </div>
          <div style={{ color: '#134e4a', fontSize: '0.95rem', lineHeight: 1.5, fontWeight: 600 }}>
            💬 <strong>Interprétation rédigée :</strong> {simResult.phraseInterpretation}
          </div>
        </div>
      </div>

      {/* 3. EXERCICE D'APPLICATION DÉDIÉ (DIFFÉRENT DE L'EXEMPLE ET DÉTAILLÉ) */}
      <div
        style={{
          padding: 24,
          borderRadius: 24,
          background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)',
          border: '1.5px solid #bfdbfe',
          boxShadow: '0 14px 35px rgba(37, 99, 235, 0.08)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: '1.3rem' }}>🎯</span>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>Exercice d'application (Inédit)</h3>
              <div style={{ color: '#2563eb', fontSize: '0.82rem', marginTop: 2 }}>Situation concrète différente de l'exemple du cours</div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleGenerateNewExercise}
            style={{
              border: '1px solid #93c5fd',
              background: '#ffffff',
              color: '#1d4ed8',
              borderRadius: 999,
              padding: '8px 14px',
              fontSize: '0.82rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.08)',
              transition: 'all 0.2s ease',
            }}
          >
            <span>🔄</span> Générer un nouvel exercice
          </button>
        </div>

        {/* Énoncé de l'exercice */}
        <div style={{ padding: '16px 18px', borderRadius: 16, background: '#ffffff', border: '1px solid #dbeafe', marginBottom: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <p style={{ margin: '0 0 10px', color: '#1e293b', fontSize: '1rem', lineHeight: 1.6 }}>
            {currentExo.enonce}
          </p>
          <p style={{ margin: 0, color: '#1d4ed8', fontWeight: 700, fontSize: '1.02rem' }}>
            ❓ {currentExo.question}
          </p>
        </div>

        {/* Saisie utilisateur */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', marginBottom: 14 }}>
          <div style={{ position: 'relative', flex: '1 1 220px', minWidth: 0 }}>
            <input
              type="text"
              inputMode="decimal"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') checkExerciseAnswer();
              }}
              placeholder={`Votre réponse ${currentExo.unite ? `(en ${currentExo.unite})` : ''}...`}
              style={{
                width: '100%',
                padding: '13px 16px',
                borderRadius: 14,
                border: `1.5px solid ${exerciseFeedback === 'correct' ? '#22c55e' : exerciseFeedback === 'incorrect' ? '#ef4444' : '#93c5fd'}`,
                background: '#ffffff',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#0f172a',
                outline: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
              }}
            />
          </div>

          <button
            type="button"
            onClick={checkExerciseAnswer}
            style={{
              border: 'none',
              background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
              color: '#ffffff',
              borderRadius: 14,
              padding: '13px 20px',
              fontWeight: 800,
              fontSize: '0.95rem',
              cursor: 'pointer',
              boxShadow: '0 8px 18px rgba(37, 99, 235, 0.25)',
              transition: 'transform 0.15s ease',
            }}
          >
            Vérifier ma réponse
          </button>

          <button
            type="button"
            onClick={() => setShowHint(!showHint)}
            style={{
              border: '1px solid #bfdbfe',
              background: showHint ? '#dbeafe' : '#ffffff',
              color: '#1e40af',
              borderRadius: 14,
              padding: '12px 16px',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
            }}
          >
            💡 {showHint ? 'Masquer l’indice' : 'Besoin d’un indice ?'}
          </button>
        </div>

        {/* Indice dépliable */}
        {showHint && (
          <div style={{ padding: 14, borderRadius: 14, background: '#fef3c7', border: '1px solid #fde68a', color: '#92400e', marginBottom: 14, fontSize: '0.92rem', lineHeight: 1.6 }}>
            <strong>💡 Indice méthodologique :</strong> {fiche.exercicePratique.indice}
          </div>
        )}

        {/* Feedback après vérification */}
        {exerciseFeedback !== 'idle' && (
          <div
            style={{
              padding: '14px 16px',
              borderRadius: 16,
              marginBottom: 16,
              background: exerciseFeedback === 'correct' ? '#f0fdf4' : exerciseFeedback === 'partial' ? '#fffbeb' : '#fef2f2',
              border: `1.5px solid ${exerciseFeedback === 'correct' ? '#86efac' : exerciseFeedback === 'partial' ? '#fde68a' : '#fca5a5'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: '1.4rem' }}>
                {exerciseFeedback === 'correct' ? '🎉' : exerciseFeedback === 'partial' ? '⚠️' : '❌'}
              </span>
              <div>
                <strong style={{ color: exerciseFeedback === 'correct' ? '#15803d' : exerciseFeedback === 'partial' ? '#b45309' : '#b91c1c' }}>
                  {exerciseFeedback === 'correct'
                    ? 'Excellent travail ! Réponse exacte.'
                    : exerciseFeedback === 'partial'
                    ? 'Attention au signe ou à l’arrondi !'
                    : 'Pas tout à fait. Consultez la résolution détaillée ci-dessous.'}
                </strong>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowDetailedSolution(!showDetailedSolution)}
              style={{
                border: 'none',
                background: exerciseFeedback === 'correct' ? '#16a34a' : '#0f172a',
                color: '#ffffff',
                borderRadius: 10,
                padding: '8px 14px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
              }}
            >
              {showDetailedSolution ? 'Masquer la correction' : '📖 Voir la correction détaillée'}
            </button>
          </div>
        )}

        {/* Bouton pour afficher la solution même sans répondre */}
        {exerciseFeedback === 'idle' && (
          <div style={{ textAlign: 'right', marginBottom: 12 }}>
            <button
              type="button"
              onClick={() => setShowDetailedSolution(!showDetailedSolution)}
              style={{
                border: 'none',
                background: 'transparent',
                color: '#2563eb',
                fontWeight: 700,
                fontSize: '0.88rem',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              {showDetailedSolution ? 'Masquer la correction complète' : 'Afficher la correction détaillée pas-à-pas'}
            </button>
          </div>
        )}

        {/* RÉSOLUTION ULTRA DÉTAILLÉE EN 6 ÉTAPES */}
        {showDetailedSolution && (
          <div
            style={{
              padding: 20,
              borderRadius: 20,
              background: '#ffffff',
              border: '2px solid #3b82f6',
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.12)',
              display: 'grid',
              gap: 14,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid #e2e8f0', paddingBottom: 10 }}>
              <span style={{ fontSize: '1.2rem' }}>📋</span>
              <h4 style={{ margin: 0, fontSize: '1.15rem', color: '#1e3a8a' }}>
                Correction détaillée pas-à-pas (Méthode officielle SES)
              </h4>
            </div>

            {/* Étape 1 : Formule */}
            <div style={{ padding: 12, borderRadius: 12, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <div style={{ color: '#2563eb', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: 4 }}>
                Étape 1 : Rappel de la formule
              </div>
              <div style={{ color: '#0f172a', fontWeight: 700 }}>
                {fiche.exercicePratique.resolutionDetaillee.formuleRappel}
              </div>
            </div>

            {/* Étape 2 : Données */}
            <div style={{ padding: 12, borderRadius: 12, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <div style={{ color: '#2563eb', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: 6 }}>
                Étape 2 : Identification des données de l’énoncé
              </div>
              <div style={{ display: 'grid', gap: 4 }}>
                {Object.entries(currentExo.donnees).map(([label, valeur], i) => (
                  <div key={i} style={{ color: '#334155', fontSize: '0.92rem' }}>
                    • <strong>{label} :</strong> {String(valeur)}
                  </div>
                ))}
              </div>
            </div>

            {/* Étape 3 & 4 : Calcul posé & Résultat */}
            <div style={{ padding: 12, borderRadius: 12, background: '#ecfeff', border: '1px solid #a5f3fc' }}>
              <div style={{ color: '#0e7490', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: 4 }}>
                Étape 3 & 4 : Calcul mathématique intermédiaire & Résultat
              </div>
              <div style={{ fontFamily: 'Consolas, Monaco, monospace', color: '#0f766e', fontWeight: 700, fontSize: '1rem', marginBottom: 6 }}>
                {currentExo.resolution.calculPose}
              </div>
              <div style={{ color: '#047857', fontWeight: 800, fontSize: '1.15rem' }}>
                🎯 Résultat exact : {currentExo.resolution.resultatExact}
              </div>
            </div>

            {/* Étape 5 : Phrase type BAC */}
            <div style={{ padding: 14, borderRadius: 14, background: '#fdf4ff', border: '1.5px solid #f0abfc' }}>
              <div style={{ color: '#a21caf', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                Étape 5 : Phrase de lecture / interprétation type BAC
              </div>
              <p style={{ margin: 0, color: '#701a75', fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.6 }}>
                « {currentExo.resolution.phraseLectureBac} »
              </p>
              <div style={{ marginTop: 6, color: '#86198f', fontSize: '0.78rem' }}>
                (Rappel des 4 éléments obligatoires au bac : <strong>Qui / Où</strong>, <strong>Quand</strong>, <strong>Quoi</strong>, <strong>Donnée avec unité</strong>).
              </div>
            </div>

            {/* Étape 6 : Piège évité */}
            <div style={{ padding: 12, borderRadius: 12, background: '#fff7ed', border: '1px solid #fed7aa' }}>
              <div style={{ color: '#c2410c', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', marginBottom: 4 }}>
                Étape 6 : Piège fréquent à éviter
              </div>
              <div style={{ color: '#9a3412', fontSize: '0.9rem', lineHeight: 1.5 }}>
                {fiche.exercicePratique.resolutionDetaillee.piegeEvite}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* PIÈGES À ÉVITER DANS LE CHAPITRE */}
      {fiche.pieges.length > 0 && (
        <div style={{ padding: 20, borderRadius: 24, background: '#fff7ed', border: '1.5px solid #fed7aa', boxShadow: '0 8px 24px rgba(234, 88, 12, 0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: '1.2rem' }}>⚠️</span>
            <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#9a3412' }}>Pièges fréquents aux devoirs & au bac</h3>
          </div>
          <ul style={{ margin: 0, paddingLeft: 20, color: '#7c2d12', display: 'grid', gap: 8, fontSize: '0.92rem', lineHeight: 1.6 }}>
            {fiche.pieges.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
