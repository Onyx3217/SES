import React from 'react';
import { generateExerciseSet, getQuickConcepts } from '../data/exercices';

const themeColors: Record<string, { bg: string; text: string; border: string }> = {
  'Statistiques': { bg: '#dbeafe', text: '#1d4ed8', border: '#0369a1' },
  'Taux de variation': { bg: '#c4b5fd', text: '#6d28d9', border: '#5b21b6' },
  'Moyennes et indices': { bg: '#a7f3d0', text: '#047857', border: '#065f46' },
  'Coefficients': { bg: '#fecaca', text: '#dc2626', border: '#b91c1c' },
  'Calculs économiques': { bg: '#fbbf24', text: '#92400e', border: '#78350f' },
};

function getThemeColor(theme: string) {
  return themeColors[theme] || { bg: '#e0e7ff', text: '#3730a3', border: '#1e1b4b' };
}

export default function Exercices() {
  const [exercises, setExercises] = React.useState(() => generateExerciseSet(5));
  const [index, setIndex] = React.useState(0);
  const [selectedChoice, setSelectedChoice] = React.useState<string | null>(null);
  const [score, setScore] = React.useState(0);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [sessionFinished, setSessionFinished] = React.useState(false);

  const current = exercises[index];
  const concepts = getQuickConcepts();

  const handleChoice = (choiceLabel: string) => {
    if (selectedChoice || showAnswer) return;

    setSelectedChoice(choiceLabel);
    setShowAnswer(true);

    if (choiceLabel === current.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (index < exercises.length - 1) {
      setIndex((prev) => prev + 1);
      setSelectedChoice(null);
      setShowAnswer(false);
      return;
    }

    setSessionFinished(true);
  };

  const handleGenerate = () => {
    setExercises(generateExerciseSet(5));
    setIndex(0);
    setSelectedChoice(null);
    setScore(0);
    setShowAnswer(false);
    setSessionFinished(false);
  };

  const progress = ((index + (sessionFinished ? 1 : 0)) / exercises.length) * 100;

  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <div style={{ padding: 22, borderRadius: 24, background: 'linear-gradient(135deg, #ecfeff, #f8fafc)', border: '1px solid #a7f3d0', boxShadow: '0 20px 46px rgba(45, 212, 191, 0.15)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#0f766e', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.72rem' }}>Entraînement</div>
            <h2 style={{ margin: '8px 0 0', color: '#0f172a', fontSize: '2rem' }}>Exercices interactifs</h2>
          </div>
          <button
            type="button"
            onClick={handleGenerate}
            style={{
              border: 'none',
              background: 'linear-gradient(135deg, #0f172a, #1d4ed8)',
              color: '#ffffff',
              borderRadius: 999,
              padding: '12px 18px',
              fontWeight: 800,
              cursor: 'pointer',
              boxShadow: '0 18px 35px rgba(29, 78, 216, 0.28)',
            }}
          >
            Générer d’autres exercices
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(260px, 0.7fr)', gap: 18 }}>
        <section style={{ padding: 20, borderRadius: 24, background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 18px 40px rgba(15, 23, 42, 0.06)' }}>
          {!sessionFinished ? (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, gap: 12, flexWrap: 'wrap' }}>
                <div style={{ color: '#64748b', fontWeight: 700 }}>Question {index + 1} / {exercises.length}</div>
                <div style={{ color: '#0f172a', fontWeight: 800, background: '#f8fafc', borderRadius: 999, padding: '8px 12px', border: '1px solid #e2e8f0' }}>
                  Score : {score} / {exercises.length}
                </div>
              </div>

              <div style={{ height: 10, background: '#e2e8f0', borderRadius: 999, overflow: 'hidden', marginBottom: 20 }}>
                <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(135deg, #22c55e, #38bdf8)', transition: 'width 0.25s ease' }} />
              </div>

              <div style={{ marginBottom: 18 }}>
                <div style={{ display: 'inline-block', ...getThemeColor(current.theme), borderRadius: 999, padding: '7px 10px', fontWeight: 700, fontSize: '0.8rem', marginBottom: 10, border: `1px solid ${getThemeColor(current.theme).border}` }}>
                  {current.theme}
                </div>
                <h3 style={{ margin: 0, fontSize: '1.45rem', color: '#0f172a', lineHeight: 1.5 }}>{current.question}</h3>
              </div>

              <div style={{ display: 'grid', gap: 12 }}>
                {current.choices.map((choice) => {
                  const isCorrect = choice.label === current.answer;
                  const isSelected = selectedChoice === choice.label;
                  const shouldHighlight = showAnswer && isCorrect;
                  const shouldWrong = showAnswer && isSelected && !isCorrect;

                  return (
                    <button
                      key={choice.id}
                      type="button"
                      onClick={() => handleChoice(choice.label)}
                      disabled={showAnswer}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        borderRadius: 16,
                        padding: '14px 16px',
                        border: `1px solid ${shouldHighlight ? '#22c55e' : shouldWrong ? '#fca5a5' : '#dbeafe'}`,
                        background: shouldHighlight ? '#dcfce7' : shouldWrong ? '#fee2e2' : '#f8fafc',
                        color: '#0f172a',
                        fontWeight: 700,
                        cursor: showAnswer ? 'default' : 'pointer',
                        transition: 'all 0.2s ease',
                        fontSize: '1rem',
                      }}
                    >
                      {choice.label}
                    </button>
                  );
                })}
              </div>

              {showAnswer && (
                <div style={{ marginTop: 18, padding: 16, borderRadius: 16, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 800, marginBottom: 8, color: selectedChoice === current.answer ? '#166534' : '#991b1b' }}>
                    {selectedChoice === current.answer ? 'Bonne réponse !' : `Réponse correcte : ${current.answer}`}
                  </div>
                  <div style={{ color: '#475569', lineHeight: 1.6 }}>{current.explanation}</div>
                  <button
                    type="button"
                    onClick={handleNext}
                    style={{
                      marginTop: 16,
                      border: 'none',
                      background: '#0f172a',
                      color: '#ffffff',
                      borderRadius: 12,
                      padding: '10px 14px',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    {index === exercises.length - 1 ? 'Terminer la série' : 'Question suivante'}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div style={{ display: 'grid', gap: 18, placeItems: 'center', minHeight: 260, textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '3rem' }}>🎉</div>
                <h3 style={{ margin: '10px 0 6px', fontSize: '1.8rem', color: '#0f172a' }}>Série terminée</h3>
                <div style={{ fontSize: '1.1rem', color: '#475569' }}>
                  Tu as obtenu <strong>{score}</strong> bonne(s) réponse(s) sur <strong>{exercises.length}</strong>.
                </div>
              </div>
              <button
                type="button"
                onClick={handleGenerate}
                style={{
                  border: 'none',
                  background: 'linear-gradient(135deg, #22c55e, #0ea5e9)',
                  color: '#ffffff',
                  padding: '12px 18px',
                  borderRadius: 999,
                  fontWeight: 800,
                  cursor: 'pointer',
                }}
              >
                Relancer une nouvelle série
              </button>
            </div>
          )}
        </section>

        <aside style={{ display: 'grid', gap: 16 }}>
          <div style={{ padding: 18, borderRadius: 20, background: '#ffffff', border: '1px solid #e2e8f0' }}>
            <h4 style={{ margin: '0 0 12px', color: '#0f172a' }}>Raccourcis de révision</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {concepts.map((concept) => (
                <span key={concept.id} style={{ padding: '8px 10px', borderRadius: 999, background: '#eff6ff', color: '#1d4ed8', fontSize: '0.82rem', fontWeight: 700 }}>
                  {concept.nom}
                </span>
              ))}
            </div>
          </div>

          <div style={{ padding: 18, borderRadius: 20, background: 'linear-gradient(135deg, #fef3c7, #fff7ed)', border: '1px solid #fed7aa' }}>
            <h4 style={{ margin: '0 0 8px', color: '#9a4d00' }}>Conseil</h4>
            <p style={{ margin: 0, color: '#7c2d12', lineHeight: 1.6 }}>
              Reviens toujours sur la formule, puis vérifie le sens de la question avant de répondre.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
