import React from 'react';
import { sesGlossaire } from '../data/sesGlossaire';

const categoryOrder = [
  'Science économique',
  'Production',
  'Entreprise',
  'Macroéconomie',
  'Croissance',
  'Développement',
  'Marché',
  'Concurrence',
  'Défaillances de marché',
  'Finance',
  'Finances publiques',
  'Commerce international',
  'Consommation',
  'Revenus',
  'Redistribution',
  'Travail',
  'Sociologie',
  'Science politique',
  'Regards croisés',
  'Méthodes',
  'Statistiques',
  'Stratification',
  'Culture',
  'Justice sociale',
  'Organisation'
];

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
  'Science économique': { bg: '#ccfbf1', text: '#0f766e', border: '#0f766e' },
  'Croissance': { bg: '#dcfce7', text: '#166534', border: '#15803d' },
  'Marché': { bg: '#ede9fe', text: '#5b21b6', border: '#6d28d9' },
  'Concurrence': { bg: '#dbeafe', text: '#1e40af', border: '#2563eb' },
  'Défaillances de marché': { bg: '#fee2e2', text: '#991b1b', border: '#dc2626' },
  'Science politique': { bg: '#cffafe', text: '#155e75', border: '#0891b2' },
  'Regards croisés': { bg: '#fef9c3', text: '#854d0e', border: '#ca8a04' },
  'Méthodes': { bg: '#e0f2fe', text: '#075985', border: '#0284c7' },
  'Statistiques': { bg: '#f3e8ff', text: '#6b21a8', border: '#9333ea' },
  'Culture': { bg: '#fae8ff', text: '#86198f', border: '#c026d3' },
  'Justice sociale': { bg: '#ffe4e6', text: '#9f1239', border: '#e11d48' },
};

const fallbackColors = [
  { bg: '#f1f5f9', text: '#334155', border: '#94a3b8' },
  { bg: '#ecfccb', text: '#3f6212', border: '#65a30d' },
  { bg: '#ffedd5', text: '#9a3412', border: '#ea580c' },
  { bg: '#f5f3ff', text: '#5b21b6', border: '#7c3aed' }
];

function getCategoryColor(category: string) {
  if (categoryColors[category]) return categoryColors[category];

  const hash = category.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return fallbackColors[hash % fallbackColors.length];
}

function normalizeSearch(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();
}

export default function Lexique() {
  const [selected, setSelected] = React.useState<string>('Toutes');
  const [search, setSearch] = React.useState('');

  const categories = React.useMemo(() => {
    const available = Array.from(new Set(sesGlossaire.map((item) => item.categorie)));
    const ordered = available.sort((a, b) => {
      const aIndex = categoryOrder.indexOf(a);
      const bIndex = categoryOrder.indexOf(b);

      if (aIndex === -1 && bIndex === -1) return a.localeCompare(b, 'fr');
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });

    return ['Toutes', ...ordered];
  }, []);

  const filtered = sesGlossaire.filter((item) => {
    const normalized = normalizeSearch(search);
    const matchesCategory = selected === 'Toutes' || item.categorie === selected;
    const searchable = normalizeSearch([
      item.terme,
      item.sigle,
      item.categorie,
      item.definition,
      item.formule,
      item.interpretation,
      item.exemple,
      ...item.pointsCles
    ].filter(Boolean).join(' '));
    const matchesSearch = !normalized || searchable.includes(normalized);

    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <div style={{ padding: 20, borderRadius: 24, background: 'linear-gradient(135deg, #fef3c7 0%, #ecfeff 50%, #f8fafc 100%)', border: '1px solid #facc15', boxShadow: '0 18px 40px rgba(250, 204, 21, 0.15)' }}>
        <div style={{ color: '#a16207', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.72rem' }}>Lexique SES</div>
        <h2 style={{ margin: '10px 0 8px', color: '#0f172a', fontSize: '2rem' }}>Définitions, formules et exemples</h2>
        <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>Tout le vocabulaire utile de Seconde et Première SES : économie, sociologie, marché, travail, justice sociale, méthodes et notions chiffrées.</p>
      </div>

      <div style={{ display: 'grid', gap: 12, padding: 18, borderRadius: 22, background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 16px 30px rgba(15, 23, 42, 0.04)' }}>
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Recherche : chômage, PIB, socialisation, marché, externalité, justice sociale..."
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
