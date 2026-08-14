import React, { useMemo, useState } from 'react';
import { rechercher } from '../search';

const suggestions = ['proportion', 'moyenne', 'indice', 'taux de variation', 'coefficient multiplicateur'];

export default function SearchBar({ onSelect }: { onSelect?: (id: string) => void }) {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const popular = useMemo(() => suggestions, []);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value;
    setQ(v);
    if (v.trim().length === 0) return setResults([]);
    const r = rechercher(v, 8);
    setResults(r);
  }

  return (
    <div style={{ display: 'grid', gap: 14 }}>
      <div style={{ position: 'relative' }}>
        <input
          value={q}
          onChange={onChange}
          placeholder="Cherche une fiche..."
          style={{
            width: '100%',
            padding: '14px 16px 14px 42px',
            borderRadius: 14,
            border: '1px solid #dbeafe',
            background: '#f8fbff',
            fontSize: '0.98rem',
            outline: 'none',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)'
          }}
        />
        <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#64748b', fontSize: '1.1rem' }}>⌕</span>
      </div>

      {popular.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {popular.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => {
                setQ(term);
                setResults(rechercher(term, 6));
              }}
              style={{
                border: '1px solid #dbeafe',
                background: '#eff6ff',
                color: '#1d4ed8',
                borderRadius: 999,
                padding: '7px 12px',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              {term}
            </button>
          ))}
        </div>
      )}

      <div style={{ display: 'grid', gap: 10 }}>
        {results.length === 0 && q.trim() !== '' ? (
          <div style={{ padding: 14, borderRadius: 12, background: '#f8fafc', border: '1px dashed #cbd5e1', color: '#475569' }}>
            Aucune fiche ne correspond à cette recherche.
          </div>
        ) : null}

        {results.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => onSelect?.(f.id)}
            style={{
              textAlign: 'left',
              width: '100%',
              padding: 14,
              borderRadius: 14,
              border: '1px solid #e2e8f0',
              background: '#ffffff',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 10px 24px rgba(15, 23, 42, 0.03)'
            }}
          >
            <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>{f.nom}</div>
            <div style={{ color: '#64748b', fontSize: '0.86rem' }}>{f.categorie} • {(f.niveau || []).join(', ')}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
