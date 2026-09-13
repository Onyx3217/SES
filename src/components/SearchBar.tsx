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
    const r = rechercherCalculs(q, 50);
    setResults(r);
  };

  return (
    <div style={{ display: 'grid', gap: 12 }}>
      {/* Input */}
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Rechercher : PIB, variation, VA..."
          style={{
            width: '100%',
            padding: '9px 12px 9px 34px',
            borderRadius: 6,
            border: '1px solid #d1d5db',
            background: '#ffffff',
            fontSize: '0.86rem',
            color: '#111827',
            outline: 'none',
          }}
        />
        <span style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', fontSize: '0.9rem' }}>
          ⌕
        </span>
        {query && (
          <button
            type="button"
            onClick={() => handleSearch('')}
            style={{
              position: 'absolute',
              right: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              border: 'none',
              background: 'none',
              color: '#9ca3af',
              fontSize: '0.82rem',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            ✕
          </button>
        )}
      </div>

      {/* Suggested chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
        {popularKeywords.map((tag) => {
          const isAct = query.toLowerCase() === tag.toLowerCase();
          return (
            <button
              key={tag}
              type="button"
              onClick={() => handleSearch(isAct ? '' : tag)}
              style={{
                border: `1px solid ${isAct ? '#2563eb' : '#e5e7eb'}`,
                background: isAct ? '#eff6ff' : '#f9fafb',
                color: isAct ? '#1d4ed8' : '#4b5563',
                borderRadius: 4,
                padding: '3px 8px',
                fontSize: '0.74rem',
                fontWeight: isAct ? 600 : 400,
                cursor: 'pointer',
                transition: 'all 0.1s',
              }}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Results List */}
      <div style={{ display: 'grid', gap: 6, maxHeight: 540, overflowY: 'auto', paddingRight: 2 }}>
        {results.length === 0 && (
          <div style={{ padding: '20px 12px', borderRadius: 6, background: '#f9fafb', border: '1px dashed #d1d5db', color: '#6b7280', textAlign: 'center', fontSize: '0.84rem' }}>
            Aucun calcul ne correspond.
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
                padding: '10px 12px',
                borderRadius: 6,
                border: `1px solid ${isSelected ? '#2563eb' : '#e5e7eb'}`,
                background: isSelected ? '#eff6ff' : '#ffffff',
                cursor: 'pointer',
                transition: 'border-color 0.1s, background 0.1s',
              }}
            >
              <div style={{ fontWeight: isSelected ? 600 : 500, color: isSelected ? '#1e40af' : '#111827', fontSize: '0.86rem', marginBottom: 3 }}>
                {f.nom}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
                <span style={{ color: '#6b7280', fontSize: '0.72rem' }}>
                  {f.categorie}
                </span>
                <span style={{ color: '#d1d5db', fontSize: '0.65rem' }}>•</span>
                {f.niveau.map((lvl) => (
                  <span key={lvl} style={{ fontSize: '0.7rem', color: '#2563eb' }}>
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
