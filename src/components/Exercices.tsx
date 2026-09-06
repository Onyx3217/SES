import React, { useState } from 'react';
import { generateExerciseSet, Exercise, DifficultyLevel } from '../data/exercices';

export default function Exercices({ onNavigateToCalcul }: { onNavigateToCalcul?: (calculId: string) => void }) {
  const [levelFilter, setLevelFilter] = useState<'Tous' | 'Seconde' | 'Première'>('Tous');
  const [modeFilter, setModeFilter] = useState<'tous' | 'calculs' | 'qcm'>('tous');
  const [diffFilter, setDiffFilter] = useState<DifficultyLevel | 'mixte'>('mixte');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [exercises, setExercises] = useState<Exercise[]>(() => generateExerciseSet(10, 'Tous', 'tous', 'mixte'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const current = exercises[currentIndex];

  const handleStartNewSet = (
    count = questionCount,
    lvl = levelFilter,
    m = modeFilter,
    d = diffFilter
  ) => {
    setExercises(generateExerciseSet(count, lvl, m, d));
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
    <div style={{ display: 'grid', gap: 24 }}>
      {/* HEADER */}
      <div
        style={{
          padding: '28px 32px',
          borderRadius: 28,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
          color: '#ffffff',
          boxShadow: '0 20px 45px rgba(15, 23, 42, 0.25)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ color: '#a5b4fc', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 800 }}>
              Générateur Infini • 240+ Notions & 30 Calculs
            </div>
            <h2 style={{ margin: '6px 0', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800 }}>
              Quiz & Entraînement Dynamique
            </h2>
            <p style={{ margin: 0, color: '#c7d2fe', fontSize: '0.96rem', maxWidth: 680, lineHeight: 1.6 }}>
              Des séries adaptées et renouvelées sans répétition : niveaux Débutant, Intermédiaire et BAC avec corrigés complets.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleStartNewSet(questionCount)}
            style={{
              border: 'none',
              background: 'linear-gradient(135deg, #4f46e5, #6366f1)',
              color: '#ffffff',
              borderRadius: 999,
              padding: '14px 26px',
              fontWeight: 800,
              fontSize: '0.92rem',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(79, 70, 229, 0.35)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span>🔄</span> Générer une nouvelle série
          </button>
        </div>
      </div>

      {/* FILTER & CONFIG BAR */}
      <div
        style={{
          padding: '18px 24px',
          borderRadius: 24,
          background: '#ffffff',
          border: '1.5px solid #e2e8f0',
          boxShadow: '0 8px 24px rgba(15, 23, 42, 0.03)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
        }}
      >
        {/* Mode filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#64748b', marginRight: 4 }}>Mode :</span>
          {(['tous', 'calculs', 'qcm'] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => {
                setModeFilter(m);
                handleStartNewSet(questionCount, levelFilter, m, diffFilter);
              }}
              style={{
                border: 'none',
                background: modeFilter === m ? '#1e1b4b' : '#f1f5f9',
                color: modeFilter === m ? '#ffffff' : '#475569',
                padding: '8px 16px',
                borderRadius: 12,
                fontWeight: 800,
                fontSize: '0.84rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {m === 'calculs' ? '🧮 Calculs pratiques' : m === 'qcm' ? '🎓 Notions & Auteurs' : '🌟 Mix complet'}
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
                handleStartNewSet(questionCount, lvl, modeFilter, diffFilter);
              }}
              style={{
                border: 'none',
                background: levelFilter === lvl ? '#4f46e5' : '#f1f5f9',
                color: levelFilter === lvl ? '#ffffff' : '#475569',
                padding: '8px 16px',
                borderRadius: 12,
                fontWeight: 800,
                fontSize: '0.84rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {lvl === 'Seconde' ? '🎓 Seconde' : lvl === 'Première' ? '🏛️ Première' : '🌐 Tous'}
            </button>
          ))}
        </div>

        {/* Difficulty filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#64748b', marginRight: 4 }}>Difficulté :</span>
          {(['mixte', 'debutant', 'intermediaire', 'bac'] as const).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => {
                setDiffFilter(d);
                handleStartNewSet(questionCount, levelFilter, modeFilter, d);
              }}
              style={{
                border: 'none',
                background: diffFilter === d ? '#0f172a' : '#f1f5f9',
                color: diffFilter === d ? '#ffffff' : '#475569',
                padding: '8px 14px',
                borderRadius: 12,
                fontWeight: 800,
                fontSize: '0.84rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {d === 'debutant' ? '⭐ Débutant' : d === 'intermediaire' ? '⭐⭐ Intermédiaire' : d === 'bac' ? '⭐⭐⭐ BAC' : '🎲 Mixte'}
            </button>
          ))}
        </div>

        {/* Count selector */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#64748b', marginRight: 4 }}>Taille :</span>
          {[5, 10, 20].map((cnt) => (
            <button
              key={cnt}
              type="button"
              onClick={() => {
                setQuestionCount(cnt);
                handleStartNewSet(cnt, levelFilter, modeFilter, diffFilter);
              }}
              style={{
                border: 'none',
                background: questionCount === cnt ? '#0f766e' : '#f1f5f9',
                color: questionCount === cnt ? '#ffffff' : '#475569',
                padding: '8px 14px',
                borderRadius: 12,
                fontWeight: 800,
                fontSize: '0.84rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {cnt} questions
            </button>
          ))}
        </div>
      </div>

      {/* MAIN EXERCISE CONTAINER */}
      {!isFinished && current ? (
        <section
          style={{
            padding: '32px 36px',
            borderRadius: 28,
            background: '#ffffff',
            border: '1.5px solid #e2e8f0',
            boxShadow: '0 12px 35px rgba(15, 23, 42, 0.04)',
            display: 'grid',
            gap: 24,
          }}
        >
          {/* TOP BAR WITH PROGRESS */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span
                  style={{
                    background: current.type === 'calcul' ? '#ecfeff' : '#f5f3ff',
                    color: current.type === 'calcul' ? '#0891b2' : '#6d28d9',
                    border: `1px solid ${current.type === 'calcul' ? '#a5f3fc' : '#ddd6fe'}`,
                    padding: '4px 12px',
                    borderRadius: 999,
                    fontSize: '0.78rem',
                    fontWeight: 800,
                  }}
                >
                  {current.type === 'calcul' ? '🧮 Calcul pratique' : '🎓 Notion & Concept'}
                </span>
                {current.difficulte && (
                  <span
                    style={{
                      background: current.difficulte === 'bac' ? '#fee2e2' : current.difficulte === 'debutant' ? '#dcfce7' : '#fef3c7',
                      color: current.difficulte === 'bac' ? '#991b1b' : current.difficulte === 'debutant' ? '#166534' : '#92400e',
                      border: `1px solid ${current.difficulte === 'bac' ? '#fca5a5' : current.difficulte === 'debutant' ? '#86efac' : '#fde68a'}`,
                      padding: '4px 10px',
                      borderRadius: 999,
                      fontSize: '0.76rem',
                      fontWeight: 800,
                    }}
                  >
                    {current.difficulte === 'debutant' ? '⭐ Débutant' : current.difficulte === 'bac' ? '⭐⭐⭐ BAC' : '⭐⭐ Intermédiaire'}
                  </span>
                )}
                <span style={{ fontSize: '0.84rem', color: '#64748b', fontWeight: 700 }}>
                  Thème : {current.theme}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a' }}>
                  Score : <span style={{ color: '#10b981' }}>{score}</span> / {currentIndex}
                </div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#64748b' }}>
                  Question {currentIndex + 1} sur {exercises.length}
                </div>
              </div>
            </div>

            {/* PROGRESS BAR */}
            <div style={{ width: '100%', height: 8, background: '#f1f5f9', borderRadius: 999, overflow: 'hidden' }}>
              <div
                style={{
                  width: `${progressPercent}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #4f46e5, #06b6d4)',
                  borderRadius: 999,
                  transition: 'width 0.3s ease',
                }}
              />
            </div>
          </div>

          {/* CONTEXT (IF ANY) */}
          {current.contexte && (
            <div
              style={{
                padding: '16px 20px',
                borderRadius: 18,
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                color: '#334155',
                fontSize: '0.95rem',
                lineHeight: 1.6,
              }}
            >
              <div style={{ color: '#0284c7', fontWeight: 800, fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                📄 Contexte / Données de l'exercice :
              </div>
              {current.contexte}
            </div>
          )}

          {/* QUESTION */}
          <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a', fontWeight: 800, lineHeight: 1.5, whiteSpace: 'pre-line' }}>
            {current.question}
          </h3>

          {/* CHOICES LIST */}
          <div style={{ display: 'grid', gap: 12 }}>
            {current.choices.map((c) => {
              const isSelected = selectedChoice === c.label;
              const isCorrect = c.label.trim() === current.answer.trim();

              let bg = '#ffffff';
              let border = '1.5px solid #e2e8f0';
              let color = '#1e293b';

              if (showAnswer) {
                if (isCorrect) {
                  bg = '#ecfdf5';
                  border = '2px solid #10b981';
                  color = '#065f46';
                } else if (isSelected && !isCorrect) {
                  bg = '#fef2f2';
                  border = '2px solid #ef4444';
                  color = '#991b1b';
                } else {
                  color = '#94a3b8';
                }
              } else if (isSelected) {
                bg = '#eff6ff';
                border = '2px solid #3b82f6';
                color = '#1d4ed8';
              }

              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => handleSelectChoice(c.label)}
                  disabled={showAnswer}
                  style={{
                    textAlign: 'left',
                    padding: '16px 20px',
                    borderRadius: 18,
                    background: bg,
                    border,
                    color,
                    fontSize: '0.95rem',
                    fontWeight: isSelected || (showAnswer && isCorrect) ? 700 : 500,
                    cursor: showAnswer ? 'default' : 'pointer',
                    transition: 'all 0.15s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 12,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                  }}
                >
                  <span>{c.label}</span>
                  {showAnswer && (
                    <span style={{ fontSize: '1.2rem' }}>
                      {isCorrect ? '✅' : isSelected ? '❌' : ''}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* FEEDBACK & EXPLANATION */}
          {showAnswer && (
            <div
              style={{
                padding: '20px 24px',
                borderRadius: 20,
                background: selectedChoice?.trim() === current.answer.trim() ? '#f0fdf4' : '#fff7ed',
                border: `1.5px solid ${selectedChoice?.trim() === current.answer.trim() ? '#86efac' : '#fed7aa'}`,
                display: 'grid',
                gap: 10,
              }}
            >
              <div style={{ fontWeight: 800, color: selectedChoice?.trim() === current.answer.trim() ? '#15803d' : '#c2410c', fontSize: '1rem' }}>
                {selectedChoice?.trim() === current.answer.trim() ? '🎉 Bravo, excellente réponse !' : '💡 Explication détaillée du corrigé :'}
              </div>
              <p style={{ margin: 0, color: '#334155', fontSize: '0.94rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                {current.explanation}
              </p>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  style={{
                    border: 'none',
                    background: '#0f172a',
                    color: '#ffffff',
                    padding: '12px 28px',
                    borderRadius: 14,
                    fontWeight: 800,
                    fontSize: '0.94rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span>{currentIndex < exercises.length - 1 ? 'Question suivante' : 'Voir mon bilan'}</span>
                  <span>➔</span>
                </button>
              </div>
            </div>
          )}
        </section>
      ) : isFinished ? (
        /* FINISHED SCREEN */
        <div
          style={{
            padding: 48,
            borderRadius: 28,
            background: '#ffffff',
            border: '1.5px solid #e2e8f0',
            textAlign: 'center',
            display: 'grid',
            placeItems: 'center',
            gap: 20,
            boxShadow: '0 20px 45px rgba(15, 23, 42, 0.05)',
          }}
        >
          <div style={{ fontSize: '4rem' }}>
            {score / exercises.length >= 0.8 ? '🏆' : score / exercises.length >= 0.5 ? '👏' : '📚'}
          </div>

          <h3 style={{ margin: 0, fontSize: '2rem', fontWeight: 900, color: '#0f172a' }}>
            Série terminée !
          </h3>

          <div style={{ fontSize: '1.2rem', color: '#475569', fontWeight: 600 }}>
            Votre score : <strong style={{ color: '#2563eb', fontSize: '1.6rem' }}>{score}</strong> sur <strong>{exercises.length}</strong> (
            {Math.round((score / exercises.length) * 100)} %)
          </div>

          <p style={{ margin: 0, color: '#64748b', maxWidth: 500, lineHeight: 1.6 }}>
            {score / exercises.length >= 0.8
              ? 'Excellent niveau ! Vous maîtrisez parfaitement les mécanismes et les calculs testés.'
              : score / exercises.length >= 0.5
              ? 'Bon travail ! Quelques notions méritent d’être revues dans le lexique ou les fiches de calcul.'
              : 'Continuez à vous entraîner ! Relisez les fiches de cours et les schémas causaux pour consolider vos acquis.'}
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 12 }}>
            <button
              type="button"
              onClick={() => handleStartNewSet(questionCount)}
              style={{
                border: 'none',
                background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
                color: '#ffffff',
                padding: '14px 28px',
                borderRadius: 16,
                fontWeight: 800,
                fontSize: '0.96rem',
                cursor: 'pointer',
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
