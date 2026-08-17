import React, { useState } from 'react';
import { programmeOfficiel } from '../data/programmeData';
import { getCalculById } from '../data/calculsData';

export default function Programme({ onSelectCalcul, onSelectTerm }: { onSelectCalcul?: (calculId: string) => void; onSelectTerm?: (termId: string) => void }) {
  const [level, setLevel] = useState<'Seconde' | 'Première'>('Première');
  const [activeDiscipline, setActiveDiscipline] = useState<string>('Toutes');

  const filteredChapters = programmeOfficiel.filter((ch) => {
    if (ch.niveau !== level) return false;
    if (activeDiscipline !== 'Toutes' && ch.discipline !== activeDiscipline) return false;
    return true;
  });

  return (
    <div style={{ display: 'grid', gap: 20 }}>
      {/* HEADER BANNER */}
      <div
        style={{
          padding: '24px 22px',
          borderRadius: 24,
          background: 'linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)',
          color: '#ffffff',
          boxShadow: '0 16px 40px rgba(5, 150, 105, 0.20)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ color: '#a7f3d0', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 800 }}>
              Programme Officiel du Ministère
            </div>
            <h2 style={{ margin: '6px 0', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800 }}>
              Programme SES Lycée
            </h2>
            <p style={{ margin: 0, color: '#d1fae5', fontSize: '0.95rem', maxWidth: 650, lineHeight: 1.5 }}>
              Explorez les chapitres officiels, les problématiques directrices, les notions indispensables et les savoir-faire quantitatifs exigibles au baccalauréat.
            </p>
          </div>

          {/* Level Switcher */}
          <div style={{ display: 'flex', gap: 8, background: 'rgba(255, 255, 255, 0.2)', padding: 4, borderRadius: 16 }}>
            <button
              type="button"
              onClick={() => setLevel('Seconde')}
              style={{
                border: 'none',
                background: level === 'Seconde' ? '#ffffff' : 'transparent',
                color: level === 'Seconde' ? '#065f46' : '#ffffff',
                padding: '10px 18px',
                borderRadius: 12,
                fontWeight: 800,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              🎓 Seconde
            </button>
            <button
              type="button"
              onClick={() => setLevel('Première')}
              style={{
                border: 'none',
                background: level === 'Première' ? '#ffffff' : 'transparent',
                color: level === 'Première' ? '#065f46' : '#ffffff',
                padding: '10px 18px',
                borderRadius: 12,
                fontWeight: 800,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              🏛️ Première Spécialité
            </button>
          </div>
        </div>
      </div>

      {/* DISCIPLINE PILLS */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {(['Toutes', 'Science économique', 'Sociologie et science politique', 'Regards croisés'] as const).map((disc) => (
          <button
            key={disc}
            type="button"
            onClick={() => setActiveDiscipline(disc)}
            style={{
              border: `1.5px solid ${activeDiscipline === disc ? '#059669' : '#e2e8f0'}`,
              background: activeDiscipline === disc ? '#ecfdf5' : '#ffffff',
              color: activeDiscipline === disc ? '#065f46' : '#475569',
              borderRadius: 999,
              padding: '8px 16px',
              fontWeight: 800,
              fontSize: '0.84rem',
              cursor: 'pointer',
            }}
          >
            {disc === 'Science économique' ? '📈 ' + disc : disc === 'Sociologie et science politique' ? '👥 ' + disc : disc === 'Regards croisés' ? '🔄 ' + disc : '🌐 ' + disc}
          </button>
        ))}
      </div>

      {/* CHAPTERS ACCORDIONS / CARDS */}
      <div style={{ display: 'grid', gap: 16 }}>
        {filteredChapters.map((ch, idx) => (
          <article
            key={ch.id}
            style={{
              padding: 24,
              borderRadius: 24,
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)',
              display: 'grid',
              gap: 14,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
              <div>
                <span
                  style={{
                    background: ch.discipline === 'Science économique' ? '#dbeafe' : ch.discipline === 'Sociologie et science politique' ? '#fce7f3' : '#fef9c3',
                    color: ch.discipline === 'Science économique' ? '#1d4ed8' : ch.discipline === 'Sociologie et science politique' ? '#be185d' : '#854d0e',
                    padding: '4px 10px',
                    borderRadius: 999,
                    fontSize: '0.76rem',
                    fontWeight: 800,
                  }}
                >
                  Chapitre {idx + 1} • {ch.discipline}
                </span>
                <h3 style={{ margin: '8px 0 4px', fontSize: '1.4rem', color: '#0f172a', fontWeight: 800 }}>
                  {ch.titre}
                </h3>
              </div>
            </div>

            {/* Official Question */}
            <div style={{ padding: '12px 16px', borderRadius: 14, background: '#f8fafc', border: '1px solid #e2e8f0', color: '#1e293b', fontWeight: 700, fontSize: '1.02rem' }}>
              ❓ <span style={{ color: '#059669' }}>Question directrice :</span> {ch.questionOfficielle}
            </div>

            {/* Objectives */}
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                Ce que vous devez savoir faire au bac :
              </div>
              <ul style={{ margin: 0, paddingLeft: 20, color: '#334155', display: 'grid', gap: 6, fontSize: '0.92rem', lineHeight: 1.55 }}>
                {ch.objectifs.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </div>

            {/* Key Notions */}
            {ch.notionsCles && ch.notionsCles.length > 0 && (
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                  📖 Notions clés du chapitre :
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {ch.notionsCles.map((notionId) => (
                    <span
                      key={notionId}
                      style={{
                        background: '#f8fafc',
                        color: '#334155',
                        border: '1px solid #e2e8f0',
                        padding: '4px 10px',
                        borderRadius: 999,
                        fontSize: '0.78rem',
                        fontWeight: 700,
                      }}
                    >
                      • {notionId.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Associated Calculations */}
            {ch.calculsAssocies.length > 0 && (
              <div style={{ padding: '14px 16px', borderRadius: 16, background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#166534', textTransform: 'uppercase', marginBottom: 8 }}>
                  🧮 Savoir-faire quantitatifs & Calculs liés :
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {ch.calculsAssocies.map((calcId) => {
                    const calcObj = getCalculById(calcId);
                    const label = calcObj ? calcObj.nom : calcId;
                    return (
                      <button
                        key={calcId}
                        type="button"
                        onClick={() => onSelectCalcul?.(calcId)}
                        style={{
                          border: '1px solid #86efac',
                          background: '#ffffff',
                          color: '#15803d',
                          padding: '7px 14px',
                          borderRadius: 999,
                          fontWeight: 700,
                          fontSize: '0.82rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                        }}
                      >
                        <span>📐</span> {label} ➔
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
