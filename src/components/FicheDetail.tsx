import React from 'react';
import rawData from '../data/calculs.json';
import { AnimatedNumberText } from './AnimatedNumber';
import { pedagogieCalculs } from '../data/calculsPedagogie';

function renderValue(value: unknown): string {
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(item => renderValue(item)).join(', ');
  }

  if (value && typeof value === 'object') {
    return Object.entries(value as Record<string, unknown>)
      .map(([key, entryValue]) => `${key}: ${renderValue(entryValue)}`)
      .join(' • ');
  }

  return '—';
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'Entreprise': { bg: '#dbeafe', text: '#1d4ed8', border: '#0369a1' },
  'Emploi': { bg: '#c4b5fd', text: '#6d28d9', border: '#5b21b6' },
  'Macroéconomie': { bg: '#a7f3d0', text: '#047857', border: '#065f46' },
  'Développement': { bg: '#fecaca', text: '#dc2626', border: '#b91c1c' },
  'Finance': { bg: '#fbbf24', text: '#92400e', border: '#78350f' },
  'Économie': { bg: '#86efac', text: '#15803d', border: '#166534' },
  'Travail': { bg: '#f472b6', text: '#831843', border: '#500724' },
  'Sociologie': { bg: '#d8b4fe', text: '#6b21a8', border: '#4c0519' },
  'Stratification': { bg: '#bae6fd', text: '#0c4a6e', border: '#082f49' },
  'Production': { bg: '#fed7aa', text: '#92400e', border: '#78350f' },
  'Revenus': { bg: '#e9d5ff', text: '#581c87', border: '#3f0f5c' },
  'Organisation': { bg: '#a5f3fc', text: '#0f766e', border: '#164e63' },
  'Consommation': { bg: '#fbcfe8', text: '#831843', border: '#500724' },
  'Finances publiques': { bg: '#fca5a5', text: '#7f1d1d', border: '#5e0e0e' },
  'Commerce international': { bg: '#e0e7ff', text: '#3730a3', border: '#1e1b4b' },
};

function getCategoryColor(category: string) {
  return categoryColors[category] || { bg: '#e5e7eb', text: '#374151', border: '#9ca3af' };
}

const answerNumberPattern = /[+-]?\d+(?:[\s\u00a0]\d{3})*(?:[,.]\d+)?/g;

function extractNumericValues(value: string): number[] {
  return Array.from(value.matchAll(answerNumberPattern))
    .map((match) => Number(match[0].replace(/[\s\u00a0]/g, '').replace(',', '.')))
    .filter((entry) => Number.isFinite(entry));
}

function isCloseEnough(userValue: number, expectedValue: number) {
  const tolerance = Math.max(0.1, Math.abs(expectedValue) * 0.015);
  return Math.abs(userValue - expectedValue) <= tolerance;
}

function MiniTest({ fiche, exampleData }: { fiche: any; exampleData: any }) {
  const [answer, setAnswer] = React.useState('');
  const [feedback, setFeedback] = React.useState<'idle' | 'correct' | 'partial' | 'incorrect' | 'revealed'>('idle');

  React.useEffect(() => {
    setAnswer('');
    setFeedback('idle');
  }, [fiche.id]);

  const expected = String(exampleData?.resultat || '');
  const expectedValues = React.useMemo(() => extractNumericValues(expected), [expected]);
  const correctionLines = [
    exampleData?.calcul ? `Calcul : ${exampleData.calcul}` : null,
    expected ? `Résultat : ${expected}` : null,
  ].filter((line): line is string => Boolean(line));

  const checkAnswer = () => {
    if (!answer.trim()) {
      setFeedback('idle');
      return;
    }

    const userValues = extractNumericValues(answer);

    if (expectedValues.length === 0 || userValues.length === 0) {
      setFeedback('revealed');
      return;
    }

    const matched = expectedValues.filter((expectedValue) =>
      userValues.some((userValue) => isCloseEnough(userValue, expectedValue)),
    );

    if (matched.length === expectedValues.length) {
      setFeedback('correct');
      return;
    }

    setFeedback(matched.length > 0 ? 'partial' : 'incorrect');
  };

  const feedbackCopy = {
    idle: '',
    correct: "Oui, c'est cohérent avec le résultat attendu.",
    partial: 'Tu as une partie de la réponse : vérifie les autres valeurs ou les unités.',
    incorrect: 'Pas encore : reprends la formule étape par étape.',
    revealed: 'Compare ta réponse avec la correction.',
  }[feedback];

  const feedbackColor = {
    idle: '#475569',
    correct: '#166534',
    partial: '#92400e',
    incorrect: '#991b1b',
    revealed: '#1d4ed8',
  }[feedback];

  return (
    <div className="lift-card" style={{ padding: 18, borderRadius: 16, background: '#f8fafc', border: '1px solid #cbd5e1' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 12 }}>
        <h3 style={{ margin: 0, color: '#0f172a' }}>Mini-test</h3>
        <span style={{ background: '#ecfeff', color: '#0f766e', border: '1px solid #99f6e4', borderRadius: 999, padding: '6px 10px', fontWeight: 800, fontSize: '0.78rem' }}>
          À toi de jouer
        </span>
      </div>

      <p style={{ margin: '0 0 10px', color: '#334155', lineHeight: 1.6 }}>
        Reprends la fiche sans regarder le résultat : <strong>{fiche.nom}</strong>.
      </p>
      {exampleData?.enonce && (
        <p style={{ margin: '0 0 12px', color: '#475569', lineHeight: 1.6 }}>
          {exampleData.enonce}
        </p>
      )}

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
        <input
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') checkAnswer();
          }}
          placeholder="Ta réponse avec l'unité si besoin"
          style={{
            flex: '1 1 220px',
            minWidth: 0,
            padding: '12px 14px',
            borderRadius: 12,
            border: '1px solid #bfdbfe',
            background: '#ffffff',
            color: '#0f172a',
            outline: 'none',
          }}
        />
        <button
          type="button"
          className="chip-button"
          onClick={checkAnswer}
          style={{
            border: 'none',
            background: '#0f172a',
            color: '#ffffff',
            borderRadius: 12,
            padding: '12px 14px',
            fontWeight: 800,
            cursor: 'pointer',
          }}
        >
          Vérifier
        </button>
        <button
          type="button"
          className="chip-button"
          onClick={() => setFeedback('revealed')}
          style={{
            border: '1px solid #bfdbfe',
            background: '#eff6ff',
            color: '#1d4ed8',
            borderRadius: 12,
            padding: '11px 14px',
            fontWeight: 800,
            cursor: 'pointer',
          }}
        >
          Correction
        </button>
      </div>

      {feedback !== 'idle' && (
        <div className="result-reveal" style={{ marginTop: 14, padding: 14, borderRadius: 14, background: '#ffffff', border: '1px solid #e2e8f0' }}>
          <div style={{ color: feedbackColor, fontWeight: 800, marginBottom: correctionLines.length > 0 ? 8 : 0 }}>
            {feedbackCopy}
          </div>
          {correctionLines.length > 0 && (
            <div style={{ display: 'grid', gap: 6, color: '#475569', lineHeight: 1.6 }}>
              {correctionLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function FicheDetail({ id }: { id: string | null }) {
  if (!id) {
    return (
      <div style={{ padding: 24, borderRadius: 18, background: '#f8fafc', border: '1px solid #e2e8f0', color: '#475569' }}>
        Sélectionnez une fiche pour afficher son contenu.
      </div>
    );
  }

  const fiche = (rawData as any[]).find((f) => f.id === id);
  if (!fiche) {
    return <div style={{ padding: 24 }}>Fiche introuvable.</div>;
  }

  const example = fiche.exemple;
  const exampleData = example && typeof example === 'object' ? example : null;
  const pedagogie = pedagogieCalculs[fiche.id] || {
    definition: fiche.explication,
    enClair: "Identifie les grandeurs de la formule, remplace-les par les données, puis interprète l'unité du résultat.",
  };

  return (
    <div key={fiche.id} className="detail-transition" style={{ display: 'grid', gap: 18 }}>
      <div className="lift-card" style={{ padding: 22, borderRadius: 20, background: 'linear-gradient(135deg, #eff6ff, #f8fafc)', border: '1px solid #dbeafe' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
          {(() => {
            const color = getCategoryColor(fiche.categorie);
            return <span style={{ background: color.bg, color: color.text, padding: '6px 10px', borderRadius: 999, fontWeight: 600, border: `1px solid ${color.border}` }}>{fiche.categorie}</span>;
          })()}
          {(fiche.niveau || []).map((niveau: string) => (
            <span key={niveau} style={{ background: '#ecfeff', color: '#0f766e', padding: '6px 10px', borderRadius: 999, fontWeight: 600 }}>{niveau}</span>
          ))}
        </div>
        <h2 style={{ margin: '0 0 8px', fontSize: '2rem', color: '#0f172a' }}>{fiche.nom}</h2>
        <div style={{ display: 'grid', gap: 12 }}>
          <div style={{ padding: 14, borderRadius: 14, background: '#ffffff', border: '1px solid #dbeafe' }}>
            <div style={{ color: '#1d4ed8', fontWeight: 800, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>Définition</div>
            <p style={{ margin: 0, color: '#334155', lineHeight: 1.65 }}>{pedagogie.definition}</p>
          </div>
          <div style={{ padding: 14, borderRadius: 14, background: '#ecfeff', border: '1px solid #99f6e4' }}>
            <div style={{ color: '#0f766e', fontWeight: 800, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>En clair</div>
            <p style={{ margin: 0, color: '#115e59', lineHeight: 1.65 }}>{pedagogie.enClair}</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gap: 14 }}>
        <div className="lift-card" style={{ padding: 18, borderRadius: 16, background: '#ffffff', border: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: '0 0 10px', color: '#0f172a' }}>Formule</h3>
          <p style={{ margin: 0, fontWeight: 600, color: '#1e293b', fontSize: '1.02rem' }}>{fiche.formule}</p>
        </div>

        {fiche.definitionTermes?.length > 0 && (
          <div className="lift-card" style={{ padding: 18, borderRadius: 16, background: '#ffffff', border: '1px solid #e2e8f0' }}>
            <h3 style={{ margin: '0 0 12px', color: '#0f172a' }}>Termes de la formule</h3>
            <div style={{ display: 'grid', gap: 10 }}>
              {fiche.definitionTermes.map((terme: any, index: number) => (
                <div key={`${terme.symbole}-${index}`} style={{ padding: 10, borderRadius: 12, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <strong>{terme.symbole}</strong>
                  <div style={{ color: '#475569', marginTop: 4 }}>{terme.sens}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {exampleData && (
          <div className="lift-card" style={{ padding: 18, borderRadius: 16, background: '#ffffff', border: '1px solid #e2e8f0' }}>
            <h3 style={{ margin: '0 0 12px', color: '#0f172a' }}>Exemple</h3>
            <div style={{ display: 'grid', gap: 10 }}>
              {exampleData.enonce && <p style={{ margin: 0, color: '#334155' }}><strong>Énoncé :</strong> {exampleData.enonce}</p>}
              {exampleData.donnees && <p style={{ margin: 0, color: '#334155' }}><strong>Données :</strong> {renderValue(exampleData.donnees)}</p>}
              {exampleData.calcul && <p style={{ margin: 0, color: '#334155' }}><strong>Calcul :</strong> {exampleData.calcul}</p>}
              {exampleData.resultat && (
                <p className="result-reveal" style={{ margin: 0, color: '#0f766e', fontWeight: 700 }}>
                  <strong>Résultat :</strong> <AnimatedNumberText text={String(exampleData.resultat)} />
                </p>
              )}
            </div>
          </div>
        )}

        {fiche.pieges?.length > 0 && (
          <div className="lift-card" style={{ padding: 18, borderRadius: 16, background: '#fff7ed', border: '1px solid #fed7aa' }}>
            <h3 style={{ margin: '0 0 12px', color: '#9a4d00' }}>Pièges à éviter</h3>
            <ul style={{ margin: 0, paddingLeft: 18, color: '#7c2d12', display: 'grid', gap: 6 }}>
              {fiche.pieges.map((piège: string, index: number) => (
                <li key={`${piège}-${index}`}>{piège}</li>
              ))}
            </ul>
          </div>
        )}

        {exampleData && <MiniTest fiche={fiche} exampleData={exampleData} />}
      </div>
    </div>
  );
}
