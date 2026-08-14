import React from 'react';
import { sesGlossaire } from '../data/sesGlossaire';

const categories = ['Toutes', 'Entreprise', 'Emploi', 'Macroéconomie', 'Finances publiques', 'Développement', 'Commerce international', 'Consommation', 'Finance', 'Économie', 'Travail', 'Sociologie', 'Stratification', 'Production', 'Revenus', 'Organisation'];

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

export default function Lexique() {
  const [selected, setSelected] = React.useState<string>('Toutes');
  const [search, setSearch] = React.useState('');

  const filtered = sesGlossaire.filter((item) => {
    const normalized = search.trim().toLowerCase();
    const matchesCategory = selected === 'Toutes' || item.categorie === selected;
    const matchesSearch = !normalized ||
      item.terme.toLowerCase().includes(normalized) ||
      item.definition.toLowerCase().includes(normalized) ||
      item.exemple.toLowerCase().includes(normalized) ||
      item.interpretation.toLowerCase().includes(normalized) ||
      (item.sigle || '').toLowerCase().includes(normalized);

    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <div style={{ padding: 20, borderRadius: 24, background: 'linear-gradient(135deg, #fef3c7 0%, #ecfeff 50%, #f8fafc 100%)', border: '1px solid #facc15', boxShadow: '0 18px 40px rgba(250, 204, 21, 0.15)' }}>
        <div style={{ color: '#a16207', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.72rem' }}>Lexique SES</div>
        <h2 style={{ margin: '10px 0 8px', color: '#0f172a', fontSize: '2rem' }}>Définitions, formules et exemples</h2>
        <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>Tout le vocabulaire utile pour comprendre le chômage, le PIB, le CA, la VA, l’EBE, le bénéfice, les investissements et le développement.</p>
      </div>

      <div style={{ display: 'grid', gap: 12, padding: 18, borderRadius: 22, background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 16px 30px rgba(15, 23, 42, 0.04)' }}>
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Recherche : chômage, CA, VA, EBE, croissance, pays en développement..."
          style={{
            width: '100%',
            padding: '14px 16px',
            borderRadius: 14,
            border: '1px solid #bfdbfe',
            background: '#f8fbff',
            fontSize: '0.98rem',
            outline: 'none'
          }}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelected(category)}
              style={{
                border: category === 'Toutes' ? '1px solid #9ca3af' : `1px solid ${getCategoryColor(category).border}`,
                background: selected === category ? (category === 'Toutes' ? '#d1d5db' : getCategoryColor(category).bg) : (category === 'Toutes' ? '#f3f4f6' : getCategoryColor(category).bg + '40'),
                color: category === 'Toutes' ? '#374151' : getCategoryColor(category).text,
                borderRadius: 999,
                padding: '8px 12px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 200ms'
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gap: 14 }}>
        {filtered.length === 0 ? (
          <div style={{ padding: 18, borderRadius: 18, background: '#f8fafc', border: '1px dashed #cbd5e1', color: '#475569' }}>
            Aucun terme ne correspond à cette recherche.
          </div>
        ) : null}

        {filtered.map((term) => (
          <article key={term.id} style={{ padding: 18, borderRadius: 20, background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 16px 32px rgba(15, 23, 42, 0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>{term.terme}</h3>
              {term.sigle && (
                <span style={{ ...getCategoryColor(term.categorie), borderRadius: 999, padding: '5px 8px', fontWeight: 800, fontSize: '0.8rem', border: `1px solid ${getCategoryColor(term.categorie).border}` }}>
                  {term.sigle}
                </span>
              )}
              <span style={{ ...getCategoryColor(term.categorie), borderRadius: 999, padding: '5px 8px', fontSize: '0.8rem', fontWeight: 700, border: `1px solid ${getCategoryColor(term.categorie).border}` }}>{term.categorie}</span>
            </div>

            <p style={{ color: '#334155', lineHeight: 1.7, margin: '12px 0 10px' }}>{term.definition}</p>

            {term.formule && (
              <div style={{ display: 'inline-block', background: '#ecfeff', color: '#0f766e', borderRadius: 12, padding: '8px 12px', fontWeight: 700, marginBottom: 12 }}>
                {term.formule}
              </div>
            )}

            <p style={{ margin: '0 0 8px', color: '#0f172a', lineHeight: 1.6 }}><strong>Interprétation :</strong> {term.interpretation}</p>
            <p style={{ margin: 0, color: '#0f766e', lineHeight: 1.6 }}><strong>Exemple :</strong> {term.exemple}</p>

            <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {term.pointsCles.map((point) => (
                <span key={`${term.id}-${point}`} style={{ background: '#fff7ed', color: '#9a4d00', border: '1px solid #fdba74', borderRadius: 999, padding: '6px 10px', fontWeight: 700, fontSize: '0.8rem' }}>
                  {point}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
