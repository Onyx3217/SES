import React, { useState, useEffect, useMemo } from 'react';
import { allGlossaryTerms } from '../data/glossaireHelper';
import { calculsCatalog } from '../data/calculsData';
import { programmeOfficiel } from '../data/programmeData';

const SRS_KEY = 'ses_srs_mastery_v1';

export default function DashboardSRS({ onNavigateToCalcul, onNavigateToLexique }: { onNavigateToCalcul?: (id: string) => void; onNavigateToLexique?: () => void }) {
  // Mastery state: { [id: string]: { level: number, nextReview: number } }
  const [masteryData, setMasteryData] = useState<Record<string, { level: number; lastReview: number }>>(() => {
    try {
      const raw = localStorage.getItem(SRS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(SRS_KEY, JSON.stringify(masteryData));
    } catch {}
  }, [masteryData]);

  const handleMarkMastered = (id: string, isMastered: boolean) => {
    setMasteryData((prev) => ({
      ...prev,
      [id]: {
        level: isMastered ? (prev[id]?.level || 0) + 1 : 0,
        lastReview: Date.now(),
      },
    }));
  };

  const stats = useMemo(() => {
    const totalTerms = allGlossaryTerms.length;
    const totalCalculs = calculsCatalog.length;
    const totalItems = totalTerms + totalCalculs;

    const masteredCount = Object.values(masteryData).filter((v) => v.level >= 1).length;
    const percent = Math.round((masteredCount / totalItems) * 100);

    return { totalItems, masteredCount, percent };
  }, [masteryData]);

  // Today's suggested reviews (items marked 0 or unreviewed)
  const suggestedReviews = useMemo(() => {
    return allGlossaryTerms
      .filter((t) => !masteryData[t.id] || masteryData[t.id].level === 0)
      .slice(0, 5);
  }, [masteryData]);

  return (
    <div style={{ display: 'grid', gap: 20 }}>
      {/* HEADER BANNER */}
      <div
        style={{
          padding: '24px 22px',
          borderRadius: 24,
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
          color: '#ffffff',
          boxShadow: '0 16px 40px rgba(49, 46, 129, 0.25)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ color: '#a5b4fc', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 800 }}>
              Suivi Personnel & Répétition Espacée
            </div>
            <h2 style={{ margin: '6px 0', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800 }}>
              Tableau de Bord de Révision
            </h2>
            <p style={{ margin: 0, color: '#c7d2fe', fontSize: '0.95rem', maxWidth: 650, lineHeight: 1.5 }}>
              Suivez votre taux de maîtrise du programme et révisez les notions prioritaires chaque jour.
            </p>
          </div>
        </div>
      </div>

      {/* STATS CARDS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
        <div style={{ padding: 20, borderRadius: 20, background: '#ffffff', border: '1.5px solid #e2e8f0', display: 'grid', gap: 4 }}>
          <span style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>Progression globale</span>
          <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#4338ca' }}>{stats.percent} %</div>
          <div style={{ height: 6, background: '#f1f5f9', borderRadius: 999, overflow: 'hidden', marginTop: 4 }}>
            <div style={{ height: '100%', width: `${stats.percent}%`, background: '#4338ca' }} />
          </div>
        </div>

        <div style={{ padding: 20, borderRadius: 20, background: '#ffffff', border: '1.5px solid #86efac', display: 'grid', gap: 4 }}>
          <span style={{ color: '#166534', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>Notions maîtrisées</span>
          <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#15803d' }}>{stats.masteredCount}</div>
          <div style={{ fontSize: '0.82rem', color: '#64748b' }}>sur {stats.totalItems} concepts et calculs</div>
        </div>

        <div style={{ padding: 20, borderRadius: 20, background: '#ffffff', border: '1.5px solid #fed7aa', display: 'grid', gap: 4 }}>
          <span style={{ color: '#9a3412', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase' }}>À réviser en priorité</span>
          <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#c2410c' }}>{stats.totalItems - stats.masteredCount}</div>
          <div style={{ fontSize: '0.82rem', color: '#64748b' }}>notions à consolider</div>
        </div>
      </div>

      {/* TODAY'S PRIORITY REVIEWS */}
      <div style={{ padding: 24, borderRadius: 24, background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)', display: 'grid', gap: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a', fontWeight: 800 }}>
            ⚡ Session du jour : 5 notions recommandées
          </h3>
        </div>

        <div style={{ display: 'grid', gap: 10 }}>
          {suggestedReviews.map((term) => (
            <div
              key={term.id}
              style={{
                padding: '14px 18px',
                borderRadius: 16,
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 10,
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <strong style={{ color: '#0f172a', fontSize: '1.05rem' }}>{term.terme}</strong>
                  <span style={{ background: '#e0e7ff', color: '#4338ca', padding: '2px 8px', borderRadius: 999, fontSize: '0.72rem', fontWeight: 700 }}>
                    {term.categorie}
                  </span>
                </div>
                <div style={{ color: '#475569', fontSize: '0.88rem', marginTop: 4 }}>
                  {term.definition}
                </div>
              </div>

              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  type="button"
                  onClick={() => handleMarkMastered(term.id, true)}
                  style={{
                    border: 'none',
                    background: '#16a34a',
                    color: '#ffffff',
                    padding: '8px 14px',
                    borderRadius: 10,
                    fontWeight: 800,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                  }}
                >
                  ✓ Maîtrisé
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CHAPTER MASTERY OVERVIEW */}
      <div style={{ padding: 24, borderRadius: 24, background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)', display: 'grid', gap: 14 }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a', fontWeight: 800 }}>
          🏛️ Maîtrise par Chapitre du Programme
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 12 }}>
          {programmeOfficiel.map((ch) => {
            const related = [...ch.notionsCles, ...ch.calculsAssocies];
            const masteredInCh = related.filter((id) => (masteryData[id]?.level || 0) >= 1).length;
            const pct = related.length > 0 ? Math.round((masteredInCh / related.length) * 100) : 0;

            return (
              <div key={ch.id} style={{ padding: 16, borderRadius: 16, background: '#f8fafc', border: '1px solid #e2e8f0', display: 'grid', gap: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.74rem', background: '#eff6ff', color: '#1d4ed8', padding: '2px 8px', borderRadius: 999, fontWeight: 800 }}>
                    {ch.niveau} • {ch.discipline}
                  </span>
                  <span style={{ fontWeight: 800, color: pct >= 80 ? '#15803d' : pct >= 40 ? '#b45309' : '#64748b', fontSize: '0.86rem' }}>
                    {pct} %
                  </span>
                </div>
                <strong style={{ color: '#0f172a', fontSize: '0.95rem' }}>{ch.titre}</strong>
                <div style={{ height: 6, background: '#e2e8f0', borderRadius: 999, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${pct}%`, background: pct >= 80 ? '#16a34a' : '#3b82f6' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
