import React, { useState } from 'react';
import { generateExerciseSet, Exercise } from '../data/exercices';

export default function Exercices({ onNavigateToCalcul }: { onNavigateToCalcul?: (calculId: string) => void }) {
  const [levelFilter, setLevelFilter] = useState<'Tous' | 'Seconde' | 'Première'>('Tous');
  const [modeFilter, setModeFilter] = useState<'tous' | 'calculs' | 'qcm'>('tous');
  const [exercises, setExercises] = useState<Exercise[]>(() => generateExerciseSet(5, 'Tous', 'tous'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const current = exercises[currentIndex];

  const handleStartNewSet = (count = 5, lvl = levelFilter, m = modeFilter) => {
    setExercises(generateExerciseSet(count, lvl, m));
    setCurrentIndex(0);
    setSelectedChoice(null);
    setShowAnswer(false);
    setScore(0);
    setIsFinished(false);
  };

  const handleSelectChoice = (choiceLabel: string) => {
    if (showAnswer || selectedChoice) return;

    setSelectedChoice(choiceLabel);
    setShowAnswer(true);

    if (choiceLabel.trim() === current.answer.trim()) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedChoice(null);
      setShowAnswer(false);
    } else {
      setIsFinished(true);
    }
  };

  const progressPercent = ((currentIndex + (isFinished ? 1 : 0)) / exercises.length) * 100;

  return (
    <div style={{ display: 'grid', gap: 20 }}>
      {/* HEADER */}
      <div
        style={{
          padding: '24px 22px',
          borderRadius: 24,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
          color: '#ffffff',
          boxShadow: '0 16px 40px rgba(15, 23, 42, 0.25)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ color: '#a5b4fc', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 800 }}>
              Entraînement & Évaluation
            </div>
            <h2 style={{ margin: '6px 0', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800 }}>
              Exercices & QCM Interactifs
            </h2>
            <p style={{ margin: 0, color: '#c7d2fe', fontSize: '0.95rem', maxWidth: 650, lineHeight: 1.5 }}>
              Testez vos compétences sur les calculs de base et les notions clés du programme de Seconde et Première.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleStartNewSet(5)}
            style={{
              border: 'none',
              background: 'linear-gradient(135deg, #4f46e5, #6366f1)',
              color: '#ffffff',
              borderRadius: 999,
              padding: '12px 22px',
              fontWeight: 800,
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(79, 70, 229, 0.35)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span>🔄</span> Nouvelle série
          </button>
        </div>
      </div>

      {/* FILTER BAR */}
      <div style={{ padding: 16, borderRadius: 20, background: '#ffffff', border: '1px solid #e2e8f0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        {/* Mode filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#64748b', marginRight: 4 }}>Mode :</span>
          {(['tous', 'calculs', 'qcm'] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => {
                setModeFilter(m);
                handleStartNewSet(5, levelFilter, m);
              }}
              style={{
                border: 'none',
                background: modeFilter === m ? '#1e1b4b' : '#f1f5f9',
                color: modeFilter === m ? '#ffffff' : '#475569',
                padding: '8px 14px',
                borderRadius: 12,
                fontWeight: 800,
                fontSize: '0.82rem',
                cursor: 'pointer',
              }}
            >
              {m === 'calculs' ? '🧮 Calculs pratiques' : m === 'qcm' ? '🎓 QCM Notions' : '🌟 Mix complet'}
            </button>
          ))}
        </div>

        {/* Level filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#64748b', marginRight: 4 }}>Niveau :</span>
          {(['Tous', 'Seconde', 'Première'] as const).map((lvl) => (
            <button
              key={lvl}
              type="button"
              onClick={() => {
                setLevelFilter(lvl);
                handleStartNewSet(5, lvl, modeFilter);
              }}
              style={{
                border: 'none',
                background: levelFilter === lvl ? '#4f46e5' : '#f1f5f9',
                color: levelFilter === lvl ? '#ffffff' : '#475569',
                padding: '8px 14px',
                borderRadius: 12,
                fontWeight: 800,
                fontSize: '0.82rem',
                cursor: 'pointer',
              }}
            >
              {lvl === 'Seconde' ? '🎓 Seconde' : lvl === 'Première' ? '🏛️ Première' : '🌐 Tous'}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN EXERCISE CONTAINER */}
      {!isFinished && current ? (
        <section
          style={{
            padding: '24px 22px',
            borderRadius: 24,
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            boxShadow: '0 12px 35px rgba(15, 23, 42, 0.04)',
            display: 'grid',
            gap: 18,
          }}
        >
          {/* Header question status */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span
                style={{
                  background: current.type === 'calcul' ? '#e0e7ff' : '#fef3c7',
                  color: current.type === 'calcul' ? '#4338ca' : '#b45309',
                  padding: '4px 10px',
                  borderRadius: 999,
                  fontWeight: 800,
                  fontSize: '0.78rem',
                }}
              >
                {current.type === 'calcul' ? '🧮 Calcul' : '🎓 QCM'} • {current.theme}
              </span>
              <span style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 700 }}>
                Question {currentIndex + 1} / {exercises.length}
              </span>
            </div>

            <div
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: 999,
                padding: '6px 14px',
                fontWeight: 800,
                color: '#0f172a',
                fontSize: '0.9rem',
              }}
            >
              Score : <strong style={{ color: '#4f46e5' }}>{score}</strong> / {exercises.length}
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ height: 8, background: '#f1f5f9', borderRadius: 999, overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                width: `${progressPercent}%`,
                background: 'linear-gradient(90deg, #4f46e5 0%, #06b6d4 100%)',
                transition: 'width 0.3s ease',
              }}
            />
          </div>

          {/* Context if any */}
          {current.contexte && (
            <div style={{ padding: '14px 16px', borderRadius: 16, background: '#f8fafc', border: '1px solid #e2e8f0', color: '#334155', lineHeight: 1.6, fontSize: '0.98rem' }}>
              <strong>Mise en situation :</strong> {current.contexte}
            </div>
          )}

          {/* Question title */}
          <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.35rem', lineHeight: 1.5, fontWeight: 800 }}>
            {current.question}
          </h3>

          {/* Choices list */}
          <div style={{ display: 'grid', gap: 10 }}>
            {current.choices.map((choice) => {
              const isSelected = selectedChoice === choice.label;
              const isCorrect = choice.label.trim() === current.answer.trim();
              const showCorrectGlow = showAnswer && isCorrect;
              const showWrongGlow = showAnswer && isSelected && !isCorrect;

              return (
                <button
                  key={choice.id}
                  type="button"
                  onClick={() => handleSelectChoice(choice.label)}
                  disabled={showAnswer}
                  style={{
                    textAlign: 'left',
                    padding: '16px 18px',
                    borderRadius: 16,
                    border: `2px solid ${
                      showCorrectGlow
                        ? '#22c55e'
                        : showWrongGlow
                        ? '#ef4444'
                        : isSelected
                        ? '#4f46e5'
                        : '#e2e8f0'
                    }`,
                    background: showCorrectGlow
                      ? '#f0fdf4'
                      : showWrongGlow
                      ? '#fef2f2'
                      : '#ffffff',
                    color: '#0f172a',
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: showAnswer ? 'default' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 12,
                    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.02)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span>{choice.label}</span>
                  {showAnswer && (
                    <span style={{ fontSize: '1.2rem' }}>
                      {isCorrect ? '✅' : isSelected ? '❌' : ''}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Answer explanation banner */}
          {showAnswer && (
            <div
              style={{
                padding: 18,
                borderRadius: 18,
                background: selectedChoice?.trim() === current.answer.trim() ? '#f0fdf4' : '#fffbeb',
                border: `1.5px solid ${selectedChoice?.trim() === current.answer.trim() ? '#86efac' : '#fde68a'}`,
                display: 'grid',
                gap: 10,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: '1.3rem' }}>
                  {selectedChoice?.trim() === current.answer.trim() ? '🎉' : '💡'}
                </span>
                <strong style={{ color: selectedChoice?.trim() === current.answer.trim() ? '#15803d' : '#b45309', fontSize: '1.05rem' }}>
                  {selectedChoice?.trim() === current.answer.trim()
                    ? 'Bravo, c’est la bonne réponse !'
                    : `Réponse attendue : ${current.answer}`}
                </strong>
              </div>

              <div style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.6 }}>
                <strong>Explication détaillée :</strong> {current.explanation}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 6 }}>
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  style={{
                    border: 'none',
                    background: '#0f172a',
                    color: '#ffffff',
                    borderRadius: 12,
                    padding: '12px 20px',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.15)',
                  }}
                >
                  {currentIndex === exercises.length - 1 ? 'Voir le bilan final ➔' : 'Question suivante ➔'}
                </button>
              </div>
            </div>
          )}
        </section>
      ) : isFinished ? (
        /* FINISHED SUMMARY SCREEN */
        <div
          style={{
            padding: '40px 24px',
            borderRadius: 24,
            background: '#ffffff',
            border: '2px solid #86efac',
            boxShadow: '0 20px 50px rgba(34, 197, 94, 0.12)',
            textAlign: 'center',
            display: 'grid',
            placeItems: 'center',
            gap: 18,
          }}
        >
          <div style={{ fontSize: '3.5rem' }}>
            {score >= 4 ? '🏆' : score >= 2 ? '👏' : '📚'}
          </div>

          <div>
            <h3 style={{ margin: '0 0 8px', fontSize: '2rem', color: '#0f172a', fontWeight: 800 }}>
              Série terminée !
            </h3>
            <p style={{ margin: 0, fontSize: '1.2rem', color: '#475569' }}>
              Vous avez obtenu <strong style={{ color: '#16a34a', fontSize: '1.4rem' }}>{score}</strong> bonne(s) réponse(s) sur <strong>{exercises.length}</strong>.
            </p>
          </div>

          <div style={{ padding: '14px 20px', borderRadius: 16, background: '#f8fafc', border: '1px solid #e2e8f0', maxWidth: 450, color: '#334155', lineHeight: 1.6 }}>
            {score === 5
              ? '🥇 Performance parfaite ! Vous maîtrisez parfaitement les mécanismes et calculs de cette série.'
              : score >= 3
              ? '👍 Bon score ! Relisez les fiches de calcul ou le lexique pour perfectionner les détails.'
              : '💪 Ne vous découragez pas ! Révisez la fiche correspondante et réessayez avec de nouvelles valeurs.'}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={() => handleStartNewSet(5)}
              style={{
                border: 'none',
                background: 'linear-gradient(135deg, #16a34a, #22c55e)',
                color: '#ffffff',
                padding: '14px 24px',
                borderRadius: 999,
                fontWeight: 800,
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(22, 163, 74, 0.3)',
              }}
            >
              🔄 Relancer une nouvelle série
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
