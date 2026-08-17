import React, { useState } from 'react';
import { rechercherCalculs } from '../search';
import { calculsCatalog } from '../data/calculsData';

const popularKeywords = [
  'Proportion',
  'Taux de variation',
  'Valeur ajoutée',
  'PIB',
  'Coefficient multiplicateur',
  'Élasticité',
  'Chômage',
  'Surplus',
  'Indice base 100',
  'Profit',
];

export default function SearchBar({ onSelect, selectedId }: { onSelect?: (id: string) => void; selectedId?: string | null }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(calculsCatalog);

  const handleSearch = (q: string) => {
    setQuery(q);
    if (!q.trim()) {
      setResults(calculsCatalog);
      return;
    }
    const r = rechercherCalculs(q, 12);
    setResults(r);
  };

  return (
    <div style={{ display: 'grid', gap: 14 }}>
      {/* Input */}
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Rechercher un calcul : PIB, variation, VA..."
          style={{
            width: '100%',
            padding: '13px 16px 13px 40px',
            borderRadius: 16,
            border: '1.5px solid #dbeafe',
            background: '#f8fbff',
            fontSize: '0.92rem',
            color: '#0f172a',
            outline: 'none',
            boxShadow: '0 4px 12px rgba(15, 23, 42, 0.02)',
          }}
        />
        <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#3b82f6', fontSize: '1.1rem' }}>
          🔍
        </span>
        {query && (
          <button
            type="button"
            onClick={() => handleSearch('')}
            style={{
              position: 'absolute',
              right: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              border: 'none',
              background: 'none',
              color: '#94a3b8',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
        )}
      </div>

      {/* Suggested chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {popularKeywords.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => handleSearch(tag)}
            style={{
              border: '1px solid #dbeafe',
              background: query.toLowerCase() === tag.toLowerCase() ? '#1d4ed8' : '#f0fdf4',
              color: query.toLowerCase() === tag.toLowerCase() ? '#ffffff' : '#15803d',
              borderRadius: 999,
              padding: '5px 10px',
              fontSize: '0.76rem',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Results List */}
      <div style={{ display: 'grid', gap: 8, maxHeight: 520, overflowY: 'auto', paddingRight: 4 }}>
        {results.length === 0 && (
          <div style={{ padding: 18, borderRadius: 14, background: '#f8fafc', border: '1px dashed #cbd5e1', color: '#64748b', textAlign: 'center', fontSize: '0.88rem' }}>
            Aucun calcul ne correspond à votre recherche.
          </div>
        )}

        {results.map((f) => {
          const isSelected = selectedId === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => onSelect?.(f.id)}
              style={{
                textAlign: 'left',
                width: '100%',
                padding: '12px 14px',
                borderRadius: 14,
                border: `1.5px solid ${isSelected ? '#2563eb' : '#e2e8f0'}`,
                background: isSelected ? '#eff6ff' : '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                boxShadow: isSelected ? '0 4px 14px rgba(37, 99, 235, 0.12)' : '0 2px 6px rgba(0,0,0,0.02)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 6, marginBottom: 4 }}>
                <div style={{ fontWeight: 800, color: isSelected ? '#1e40af' : '#0f172a', fontSize: '0.92rem' }}>
                  {f.nom}
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
                <span style={{ color: '#64748b', fontSize: '0.76rem', fontWeight: 600 }}>
                  {f.categorie}
                </span>
                <span style={{ color: '#94a3b8', fontSize: '0.7rem' }}>•</span>
                {f.niveau.map((lvl) => (
                  <span key={lvl} style={{ fontSize: '0.72rem', color: '#0284c7', fontWeight: 700 }}>
                    {lvl}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
