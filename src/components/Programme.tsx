import React from 'react';
import rawData from '../data/calculs.json';

export default function Programme() {
  const data = rawData as any[];
  const byChapitre: Record<string, any[]> = {};

  data.forEach((f) => {
    const chs = Array.isArray(f.chapitres) ? f.chapitres : [f.chapitres];
    chs.forEach((c: string) => {
      byChapitre[c] = byChapitre[c] || [];
      byChapitre[c].push(f);
    });
  });

  const chapters = Object.entries(byChapitre).sort(([a], [b]) => a.localeCompare(b, 'fr'));

  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={{ padding: 18, borderRadius: 18, background: 'linear-gradient(135deg, #ecfeff, #f8fafc)', border: '1px solid #ccfbf1' }}>
        <h2 style={{ margin: 0, color: '#0f172a' }}>Programme</h2>
        <p style={{ margin: '8px 0 0', color: '#475569' }}>Les fiches classées par chapitre pour un repérage plus rapide.</p>
      </div>

      {chapters.map(([chapter, fiches]) => (
        <section key={chapter} style={{ padding: 18, borderRadius: 18, background: '#ffffff', border: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: '0 0 12px', color: '#0f172a' }}>{chapter} <span style={{ color: '#64748b', fontSize: '0.9rem' }}>({fiches.length})</span></h3>
          <div style={{ display: 'grid', gap: 8 }}>
            {fiches.map((f: any) => (
              <div key={f.id} style={{ padding: 10, borderRadius: 12, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <strong>{f.nom}</strong>
                <div style={{ color: '#64748b', marginTop: 4 }}>{(f.niveau || []).join(', ')}</div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
