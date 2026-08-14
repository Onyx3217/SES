import React from 'react';
import rawData from '../data/calculs.json';

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

  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <div style={{ padding: 22, borderRadius: 20, background: 'linear-gradient(135deg, #eff6ff, #f8fafc)', border: '1px solid #dbeafe' }}>
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
        <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>{fiche.explication}</p>
      </div>

      <div style={{ display: 'grid', gap: 14 }}>
        <div style={{ padding: 18, borderRadius: 16, background: '#ffffff', border: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: '0 0 10px', color: '#0f172a' }}>Formule</h3>
          <p style={{ margin: 0, fontWeight: 600, color: '#1e293b', fontSize: '1.02rem' }}>{fiche.formule}</p>
        </div>

        {fiche.definitionTermes?.length > 0 && (
          <div style={{ padding: 18, borderRadius: 16, background: '#ffffff', border: '1px solid #e2e8f0' }}>
            <h3 style={{ margin: '0 0 12px', color: '#0f172a' }}>Vocabulaire</h3>
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
          <div style={{ padding: 18, borderRadius: 16, background: '#ffffff', border: '1px solid #e2e8f0' }}>
            <h3 style={{ margin: '0 0 12px', color: '#0f172a' }}>Exemple</h3>
            <div style={{ display: 'grid', gap: 10 }}>
              {exampleData.enonce && <p style={{ margin: 0, color: '#334155' }}><strong>Énoncé :</strong> {exampleData.enonce}</p>}
              {exampleData.donnees && <p style={{ margin: 0, color: '#334155' }}><strong>Données :</strong> {renderValue(exampleData.donnees)}</p>}
              {exampleData.calcul && <p style={{ margin: 0, color: '#334155' }}><strong>Calcul :</strong> {exampleData.calcul}</p>}
              {exampleData.resultat && <p style={{ margin: 0, color: '#0f766e', fontWeight: 700 }}><strong>Résultat :</strong> {exampleData.resultat}</p>}
            </div>
          </div>
        )}

        {fiche.pieges?.length > 0 && (
          <div style={{ padding: 18, borderRadius: 16, background: '#fff7ed', border: '1px solid #fed7aa' }}>
            <h3 style={{ margin: '0 0 12px', color: '#9a4d00' }}>Pièges à éviter</h3>
            <ul style={{ margin: 0, paddingLeft: 18, color: '#7c2d12', display: 'grid', gap: 6 }}>
              {fiche.pieges.map((piège: string, index: number) => (
                <li key={`${piège}-${index}`}>{piège}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
