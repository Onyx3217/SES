import React, { useState, useMemo, useEffect } from 'react';
import { actualitesEcoList, FicheActualiteEco } from '../data/actualitesData';
import { fetchLiveEconomicNews, getCachedLiveNews, RSS_SOURCES } from '../data/actualitesService';
import { addNote } from '../data/notebookHelper';

interface ActualitesEcoProps {
  onNavigateToLexique?: (terme?: string) => void;
  onNavigateToNotebook?: () => void;
}

export const ActualitesEco: React.FC<ActualitesEcoProps> = ({
  onNavigateToLexique,
  onNavigateToNotebook,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<string>('Tous');
  const [selectedPeriodicite, setSelectedPeriodicite] = useState<string>('Toutes');
  const [selectedNiveau, setSelectedNiveau] = useState<string>('Tous');
  const [feedType, setFeedType] = useState<'all' | 'live' | 'curated'>('all');
  
  // États de chargement en direct
  const [liveArticles, setLiveArticles] = useState<FicheActualiteEco[]>(() => {
    const cached = getCachedLiveNews();
    return cached ? cached.articles : [];
  });
  const [lastUpdated, setLastUpdated] = useState<string | null>(() => {
    const cached = getCachedLiveNews();
    return cached ? cached.lastUpdated : null;
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchMessage, setFetchMessage] = useState<string | null>(null);

  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [activeTabByCard, setActiveTabByCard] = useState<Record<string, 'faits' | 'mecanisme' | 'auteurs' | 'bac'>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [savedId, setSavedId] = useState<string | null>(null);

  // Fonction de rafraîchissement des flux en direct
  const handleRefreshLive = async () => {
    setIsLoading(true);
    setFetchMessage(null);
    try {
      const result = await fetchLiveEconomicNews();
      if (result.articles.length > 0) {
        setLiveArticles(result.articles);
        setLastUpdated(result.lastUpdated);
        setFetchMessage(`${result.articles.length} articles récupérés en direct depuis ${result.sourceCount} journaux !`);
      } else {
        setFetchMessage('Aucun nouvel article récupéré (vérifiez la connexion réseau).');
      }
    } catch (e) {
      console.error(e);
      setFetchMessage('Erreur lors de la récupération des flux en direct.');
    } finally {
      setIsLoading(false);
      setTimeout(() => setFetchMessage(null), 4000);
    }
  };

  // Chargement initial automatique en direct s'il n'y a pas de cache récent
  useEffect(() => {
    if (liveArticles.length === 0) {
      handleRefreshLive();
    }
  }, []);

  // Fusion des articles en direct et des dossiers de fond
  const allMergedArticles = useMemo(() => {
    const liveMap = new Map<string, FicheActualiteEco>();
    // 1. Articles en direct
    liveArticles.forEach((art) => liveMap.set(art.id, art));
    // 2. Dossiers de fond approfondis
    actualitesEcoList.forEach((art) => {
      if (!liveMap.has(art.id)) {
        liveMap.set(art.id, art);
      }
    });

    const combined = Array.from(liveMap.values());
    // On met en premier les articles en direct les plus récents
    return combined.sort((a, b) => {
      if (a.isLive && !b.isLive) return -1;
      if (!a.isLive && b.isLive) return 1;
      return 0;
    });
  }, [liveArticles]);

  // Si aucune carte ouverte, ouvrir la première par défaut
  useEffect(() => {
    if (!expandedCardId && allMergedArticles.length > 0) {
      setExpandedCardId(allMergedArticles[0].id);
    }
  }, [allMergedArticles, expandedCardId]);

  const themes = useMemo(() => {
    const set = new Set<string>();
    allMergedArticles.forEach((a) => set.add(a.theme));
    return ['Tous', ...Array.from(set)];
  }, [allMergedArticles]);

  const filteredActualites = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return allMergedArticles.filter((item) => {
      if (feedType === 'live' && !item.isLive) return false;
      if (feedType === 'curated' && item.isLive) return false;

      if (selectedTheme !== 'Tous' && item.theme !== selectedTheme) return false;
      if (selectedPeriodicite !== 'Toutes' && item.periodicite !== selectedPeriodicite) return false;
      if (selectedNiveau !== 'Tous' && !item.niveau.includes(selectedNiveau)) return false;

      if (!q) return true;

      const inTitre = item.titre.toLowerCase().includes(q);
      const inJournal = item.journal.toLowerCase().includes(q);
      const inChapitre = item.chapitreSES.toLowerCase().includes(q);
      const inResume = item.resume.toLowerCase().includes(q);
      const inNotions = item.notionsProgramme.some((n) => n.toLowerCase().includes(q));
      const inFaits = item.faitsEtChiffres.some((f) => f.toLowerCase().includes(q));
      const inAuteurs = item.auteursMobilisables.some(
        (a) => a.nom.toLowerCase().includes(q) || a.theorie.toLowerCase().includes(q)
      );
      const inBac = item.sujetsBac.some(
        (b) => b.intitule.toLowerCase().includes(q) || b.pistesCorrection.toLowerCase().includes(q)
      );

      return inTitre || inJournal || inChapitre || inResume || inNotions || inFaits || inAuteurs || inBac;
    });
  }, [allMergedArticles, searchTerm, selectedTheme, selectedPeriodicite, selectedNiveau, feedType]);

  const toggleExpand = (id: string) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  const getActiveTab = (id: string): 'faits' | 'mecanisme' | 'auteurs' | 'bac' => {
    return activeTabByCard[id] || 'faits';
  };

  const setCardTab = (id: string, tab: 'faits' | 'mecanisme' | 'auteurs' | 'bac') => {
    setActiveTabByCard((prev) => ({ ...prev, [id]: tab }));
  };

  const handleCopy = (item: FicheActualiteEco) => {
    const content = [
      `# ${item.titre}`,
      `**Source :** ${item.journal} (${item.date} - ${item.periodicite})`,
      item.sourceUrl ? `**Lien source :** ${item.sourceUrl}` : '',
      `**Chapitre SES :** ${item.chapitreSES}`,
      `**Niveau :** ${item.niveau}`,
      `\n## Résumé`,
      item.resume,
      `\n## Faits et chiffres clés`,
      ...item.faitsEtChiffres.map((f) => `- ${f}`),
      `\n## Mécanisme économique causal`,
      item.mecanismeExplication,
      `\n## Auteurs à mobiliser`,
      ...item.auteursMobilisables.map((a) => `- **${a.nom}** (${a.theorie}) : ${a.apport}`),
      `\n## Sujets de Baccalauréat`,
      ...item.sujetsBac.map((b) => `### ${b.type}\n*${b.intitule}*\n> ${b.pistesCorrection}\n`),
    ]
      .filter(Boolean)
      .join('\n');

    navigator.clipboard.writeText(content);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleSaveToDossier = (item: FicheActualiteEco) => {
    try {
      addNote({
        titre: `Actualité : ${item.titre.slice(0, 45)}...`,
        chapitre: item.chapitreSES,
        contenu: `**Source :** ${item.journal} (${item.date} - ${item.periodicite})${item.sourceUrl ? `\n**Lien :** ${item.sourceUrl}` : ''}\n\n### Résumé\n${item.resume}\n\n### Mécanisme économique causal\n${item.mecanismeExplication}\n\n### Faits et chiffres\n${item.faitsEtChiffres.map((f) => `- ${f}`).join('\n')}`,
        tags: ['Actualité', item.theme, item.journal],
      });
      setSavedId(item.id);
      setTimeout(() => setSavedId(null), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={{ maxWidth: 1040, margin: '0 auto', width: '100%' }}>
      {/* En-tête éditorial sobre */}
      <header
        style={{
          borderBottom: '1px solid var(--border-color, #e5e7eb)',
          paddingBottom: 16,
          marginBottom: 20,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#2563eb',
                  background: 'rgba(37, 99, 235, 0.08)',
                  padding: '2px 8px',
                  borderRadius: 4,
                }}
              >
                Veille Éco &amp; SES en Direct
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted, #6b7280)' }}>
                {lastUpdated ? `Mis à jour : ${lastUpdated}` : 'Flux quotidiens & hebdomadaires'}
              </span>
            </div>
            <h1
              style={{
                fontSize: '1.45rem',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                margin: '0 0 6px 0',
                color: 'var(--text-main, #111827)',
              }}
            >
              L'Actualité Économique en Direct décryptée pour le Bac
            </h1>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-muted, #6b7280)',
                margin: 0,
                maxWidth: 780,
                lineHeight: 1.5,
              }}
            >
              Dépêches en temps réel récupérées depuis les grands quotidiens économiques (<em>Les Échos, Le Monde Éco, Alternatives Éco, BFM Business, Banque de France, INSEE</em>) et converties instantanément en fiches de révision SES complètes.
            </p>
          </div>

          {/* Bouton de rafraîchissement des flux en direct */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
            <button
              type="button"
              onClick={handleRefreshLive}
              disabled={isLoading}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: isLoading ? '#93c5fd' : '#2563eb',
                color: '#ffffff',
                border: 'none',
                padding: '7px 13px',
                borderRadius: 6,
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'background 0.15s ease',
              }}
            >
              <span style={{ display: 'inline-block', transform: isLoading ? 'rotate(360deg)' : 'none', transition: 'transform 0.8s linear' }}>
                🔄
              </span>
              {isLoading ? 'Récupération des flux...' : 'Actualiser en direct'}
            </button>

            {fetchMessage && (
              <span style={{ fontSize: '0.75rem', color: '#16a34a', fontWeight: 500 }}>
                {fetchMessage}
              </span>
            )}

            <span
              style={{
                fontSize: '0.76rem',
                color: 'var(--text-muted, #6b7280)',
              }}
            >
              {filteredActualites.length} {filteredActualites.length > 1 ? 'dossiers affichés' : 'dossier affiché'}
            </span>
          </div>
        </div>

        {/* Barre de recherche responsive */}
        <div style={{ marginTop: 14 }}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher par mot-clé, journal, auteur, chiffre, notion (ex: BCE, PIB, Gini, Piketty, dette)..."
            style={{
              width: '100%',
              padding: '10px 14px',
              fontSize: '0.9rem',
              borderRadius: 6,
              border: '1px solid var(--border-color, #e5e7eb)',
              background: 'var(--surface, #ffffff)',
              color: 'var(--text-main, #111827)',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Filtres de navigation en ruban fluide horizontal */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            marginTop: 12,
          }}
        >
          {/* Source / Type de flux */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              overflowX: 'auto',
              paddingBottom: 4,
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <span style={{ fontSize: '0.74rem', color: 'var(--text-muted, #6b7280)', whiteSpace: 'nowrap', fontWeight: 600 }}>
              Origine :
            </span>
            {[
              { key: 'all', label: `Tous (${allMergedArticles.length})` },
              { key: 'live', label: `⚡ En direct (${liveArticles.length})` },
              { key: 'curated', label: `📚 Dossiers approfondis (${actualitesEcoList.length})` },
            ].map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFeedType(f.key as any)}
                style={{
                  padding: '3px 10px',
                  borderRadius: 4,
                  fontSize: '0.78rem',
                  fontWeight: feedType === f.key ? 600 : 400,
                  border: `1px solid ${feedType === f.key ? '#2563eb' : 'var(--border-color, #e5e7eb)'}`,
                  background: feedType === f.key ? 'rgba(37, 99, 235, 0.08)' : 'var(--surface, #ffffff)',
                  color: feedType === f.key ? '#2563eb' : 'var(--text-muted, #4b5563)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {f.label}
              </button>
            ))}

            <span style={{ fontSize: '0.74rem', color: 'var(--text-muted, #6b7280)', marginLeft: 8, whiteSpace: 'nowrap', fontWeight: 600 }}>
              Rythme :
            </span>
            {['Toutes', 'Hebdomadaire', 'Quotidien'].map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setSelectedPeriodicite(p)}
                style={{
                  padding: '3px 10px',
                  borderRadius: 4,
                  fontSize: '0.78rem',
                  fontWeight: selectedPeriodicite === p ? 600 : 400,
                  border: `1px solid ${selectedPeriodicite === p ? '#2563eb' : 'var(--border-color, #e5e7eb)'}`,
                  background: selectedPeriodicite === p ? 'rgba(37, 99, 235, 0.08)' : 'var(--surface, #ffffff)',
                  color: selectedPeriodicite === p ? '#2563eb' : 'var(--text-muted, #4b5563)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {p === 'Toutes' ? 'Tous les rythmes' : p}
              </button>
            ))}

            <span style={{ fontSize: '0.74rem', color: 'var(--text-muted, #6b7280)', marginLeft: 8, whiteSpace: 'nowrap', fontWeight: 600 }}>
              Niveau :
            </span>
            {['Tous', 'Seconde', 'Première', 'Terminale'].map((niv) => (
              <button
                key={niv}
                type="button"
                onClick={() => setSelectedNiveau(niv)}
                style={{
                  padding: '3px 10px',
                  borderRadius: 4,
                  fontSize: '0.78rem',
                  fontWeight: selectedNiveau === niv ? 600 : 400,
                  border: `1px solid ${selectedNiveau === niv ? '#2563eb' : 'var(--border-color, #e5e7eb)'}`,
                  background: selectedNiveau === niv ? 'rgba(37, 99, 235, 0.08)' : 'var(--surface, #ffffff)',
                  color: selectedNiveau === niv ? '#2563eb' : 'var(--text-muted, #4b5563)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {niv}
              </button>
            ))}
          </div>

          {/* Thèmes */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              overflowX: 'auto',
              paddingBottom: 4,
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <span style={{ fontSize: '0.74rem', color: 'var(--text-muted, #6b7280)', whiteSpace: 'nowrap', fontWeight: 600 }}>
              Thème :
            </span>
            {themes.map((th) => (
              <button
                key={th}
                type="button"
                onClick={() => setSelectedTheme(th)}
                style={{
                  padding: '3px 9px',
                  borderRadius: 4,
                  fontSize: '0.76rem',
                  fontWeight: selectedTheme === th ? 600 : 400,
                  border: `1px solid ${selectedTheme === th ? '#2563eb' : 'var(--border-color, #e5e7eb)'}`,
                  background: selectedTheme === th ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
                  color: selectedTheme === th ? '#2563eb' : 'var(--text-muted, #4b5563)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {th}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Liste des dossiers d'actualité */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {filteredActualites.length === 0 ? (
          <div
            style={{
              padding: '36px 20px',
              textAlign: 'center',
              background: 'var(--surface, #ffffff)',
              border: '1px solid var(--border-color, #e5e7eb)',
              borderRadius: 8,
              color: 'var(--text-muted, #6b7280)',
            }}
          >
            <p style={{ margin: 0, fontSize: '0.95rem' }}>Aucun sujet d'actualité ne correspond à vos critères de recherche.</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setSelectedTheme('Tous');
                setSelectedPeriodicite('Toutes');
                setSelectedNiveau('Tous');
                setFeedType('all');
              }}
              style={{
                marginTop: 12,
                padding: '6px 14px',
                fontSize: '0.82rem',
                borderRadius: 5,
                background: '#2563eb',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          filteredActualites.map((item) => {
            const isExpanded = expandedCardId === item.id;
            const currentTab = getActiveTab(item.id);

            return (
              <article
                key={item.id}
                style={{
                  background: 'var(--surface, #ffffff)',
                  border: item.isLive ? '1px solid rgba(37, 99, 235, 0.3)' : '1px solid var(--border-color, #e5e7eb)',
                  borderRadius: 8,
                  padding: 18,
                  boxSizing: 'border-box',
                  transition: 'border-color 0.15s ease',
                }}
              >
                {/* Meta-ligne : Journal, Date, Rythme, Thème */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 10,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    {item.isLive && (
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#16a34a',
                          background: 'rgba(22, 163, 74, 0.1)',
                          padding: '2px 7px',
                          borderRadius: 4,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 4,
                        }}
                      >
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a', display: 'inline-block' }}></span>
                        En direct
                      </span>
                    )}

                    <span
                      style={{
                        fontWeight: 700,
                        fontSize: '0.78rem',
                        color: item.journal.includes('Échos')
                          ? '#c2410c'
                          : item.journal.includes('Monde')
                          ? '#1e3a8a'
                          : item.journal.includes('Alternatives')
                          ? '#047857'
                          : item.journal.includes('Banque')
                          ? '#4338ca'
                          : item.journal.includes('BFM')
                          ? '#0284c7'
                          : '#4b5563',
                        background: 'rgba(0,0,0,0.04)',
                        padding: '2px 7px',
                        borderRadius: 4,
                      }}
                    >
                      {item.journal}
                    </span>
                    <span style={{ fontSize: '0.76rem', color: 'var(--text-muted, #6b7280)' }}>
                      {item.date}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        padding: '1px 6px',
                        borderRadius: 3,
                        background: item.periodicite === 'Hebdomadaire' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                        color: item.periodicite === 'Hebdomadaire' ? '#1d4ed8' : '#047857',
                        fontWeight: 600,
                      }}
                    >
                      {item.periodicite}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        padding: '2px 6px',
                        borderRadius: 3,
                        background: 'var(--bg-subtle, #f3f4f6)',
                        color: 'var(--text-muted, #4b5563)',
                        fontWeight: 500,
                      }}
                    >
                      {item.theme}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        padding: '2px 6px',
                        borderRadius: 3,
                        background: 'rgba(107, 114, 128, 0.1)',
                        color: 'var(--text-muted, #374151)',
                        fontWeight: 500,
                      }}
                    >
                      {item.niveau}
                    </span>
                  </div>
                </div>

                {/* Titre principal */}
                <h2
                  onClick={() => toggleExpand(item.id)}
                  style={{
                    fontSize: '1.12rem',
                    fontWeight: 600,
                    letterSpacing: '-0.015em',
                    lineHeight: 1.4,
                    margin: '0 0 8px 0',
                    color: 'var(--text-main, #111827)',
                    cursor: 'pointer',
                  }}
                >
                  {item.titre}
                </h2>

                {/* Chapitre SES associé */}
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: '#2563eb',
                    marginBottom: 10,
                    fontWeight: 500,
                  }}
                >
                  Chapitre : {item.chapitreSES}
                </div>

                {/* Résumé de l'article */}
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-main, #374151)',
                    lineHeight: 1.55,
                    margin: '0 0 12px 0',
                  }}
                >
                  {item.resume}
                </p>

                {/* Notions du programme en chips */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: 6,
                    marginBottom: 14,
                  }}
                >
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted, #6b7280)', fontWeight: 600 }}>
                    Notions :
                  </span>
                  {item.notionsProgramme.map((notion) => (
                    <button
                      key={notion}
                      type="button"
                      onClick={() => onNavigateToLexique && onNavigateToLexique(notion)}
                      title="Chercher dans le lexique"
                      style={{
                        fontSize: '0.74rem',
                        background: 'var(--bg-subtle, #f9fafb)',
                        border: '1px solid var(--border-color, #e5e7eb)',
                        color: '#2563eb',
                        padding: '2px 8px',
                        borderRadius: 4,
                        cursor: onNavigateToLexique ? 'pointer' : 'default',
                      }}
                    >
                      {notion}
                    </button>
                  ))}
                </div>

                {/* Bouton de déploiement et actions rapides */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 8,
                    borderTop: '1px solid var(--border-color, #f3f4f6)',
                    paddingTop: 10,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '4px 8px',
                      color: '#2563eb',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    {isExpanded ? "Masquer l'analyse détaillée ▲" : "Ouvrir l'analyse complète & Bac ▼"}
                  </button>

                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
                    {item.sourceUrl && (
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: 'none',
                          color: '#2563eb',
                          fontSize: '0.76rem',
                          padding: '4px 8px',
                          borderRadius: 4,
                          border: '1px solid rgba(37, 99, 235, 0.2)',
                          background: 'rgba(37, 99, 235, 0.04)',
                          fontWeight: 500,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4,
                        }}
                      >
                        Source presse ↗
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => handleSaveToDossier(item)}
                      style={{
                        background: savedId === item.id ? '#10b981' : 'transparent',
                        border: '1px solid var(--border-color, #e5e7eb)',
                        color: savedId === item.id ? '#fff' : 'var(--text-muted, #4b5563)',
                        fontSize: '0.76rem',
                        padding: '4px 10px',
                        borderRadius: 4,
                        cursor: 'pointer',
                        fontWeight: 500,
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {savedId === item.id ? 'Ajouté aux notes ✓' : '+ Fiche de révision'}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCopy(item)}
                      style={{
                        background: copiedId === item.id ? '#10b981' : 'transparent',
                        border: '1px solid var(--border-color, #e5e7eb)',
                        color: copiedId === item.id ? '#fff' : 'var(--text-muted, #4b5563)',
                        fontSize: '0.76rem',
                        padding: '4px 10px',
                        borderRadius: 4,
                        cursor: 'pointer',
                        fontWeight: 500,
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {copiedId === item.id ? 'Copié ✓' : 'Copier Markdown'}
                    </button>
                  </div>
                </div>

                {/* ZONE DÉTAILLÉE DÉPLIABLE */}
                {isExpanded && (
                  <div
                    style={{
                      marginTop: 14,
                      paddingTop: 14,
                      borderTop: '1px solid var(--border-color, #e5e7eb)',
                    }}
                  >
                    {/* Onglets de contenu dans la carte */}
                    <div
                      style={{
                        display: 'flex',
                        borderBottom: '1px solid var(--border-color, #e5e7eb)',
                        gap: 4,
                        marginBottom: 14,
                        overflowX: 'auto',
                        WebkitOverflowScrolling: 'touch',
                      }}
                    >
                      {[
                        { key: 'faits', label: '1. Faits & Chiffres clés' },
                        { key: 'mecanisme', label: '2. Mécanisme causal SES' },
                        { key: 'auteurs', label: '3. Auteurs & Théories' },
                        { key: 'bac', label: '4. Sujets type Bac' },
                      ].map((tab) => {
                        const active = currentTab === tab.key;
                        return (
                          <button
                            key={tab.key}
                            type="button"
                            onClick={() => setCardTab(item.id, tab.key as any)}
                            style={{
                              border: 'none',
                              borderBottom: active ? '2px solid #2563eb' : '2px solid transparent',
                              background: 'none',
                              padding: '8px 12px',
                              fontSize: '0.8rem',
                              fontWeight: active ? 600 : 400,
                              color: active ? '#2563eb' : 'var(--text-muted, #6b7280)',
                              cursor: 'pointer',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {tab.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* CONTENU ONGLET 1 : Faits et données chiffrées */}
                    {currentTab === 'faits' && (
                      <div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted, #6b7280)', margin: '0 0 8px 0' }}>
                          Données chiffrées et faits concrets à mémoriser pour illustrer vos devoirs de SES :
                        </p>
                        <ul style={{ margin: 0, paddingLeft: 18, fontSize: '0.86rem', lineHeight: 1.6, color: 'var(--text-main, #1f2937)' }}>
                          {item.faitsEtChiffres.map((f, i) => (
                            <li key={i} style={{ marginBottom: 6 }}>
                              {f}
                            </li>
                          ))}
                        </ul>

                        {item.citationCle && (
                          <div
                            style={{
                              marginTop: 12,
                              padding: '10px 14px',
                              borderRadius: 5,
                              background: 'var(--bg-subtle, #f9fafb)',
                              borderLeft: '3px solid #2563eb',
                              fontSize: '0.84rem',
                              fontStyle: 'italic',
                              color: 'var(--text-main, #374151)',
                            }}
                          >
                            {item.citationCle}
                          </div>
                        )}
                      </div>
                    )}

                    {/* CONTENU ONGLET 2 : Mécanisme causal */}
                    {currentTab === 'mecanisme' && (
                      <div>
                        <div
                          style={{
                            padding: '12px 16px',
                            background: 'var(--bg-subtle, #f8fafc)',
                            border: '1px solid var(--border-color, #e2e8f0)',
                            borderRadius: 6,
                            fontSize: '0.88rem',
                            lineHeight: 1.65,
                            color: 'var(--text-main, #1e293b)',
                          }}
                        >
                          <div style={{ fontWeight: 600, fontSize: '0.78rem', color: '#2563eb', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                            Chaîne logique causale (pour EC1 ou paragraphe d'EC3 / Dissertation) :
                          </div>
                          {item.mecanismeExplication}
                        </div>
                      </div>
                    )}

                    {/* CONTENU ONGLET 3 : Auteurs et théories */}
                    {currentTab === 'auteurs' && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {item.auteursMobilisables.map((auteur, i) => (
                          <div
                            key={i}
                            style={{
                              padding: '10px 14px',
                              background: 'var(--bg-subtle, #f9fafb)',
                              border: '1px solid var(--border-color, #e5e7eb)',
                              borderRadius: 6,
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 6 }}>
                              <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-main, #111827)' }}>
                                {auteur.nom}
                              </span>
                              <span style={{ fontSize: '0.76rem', color: '#2563eb', fontStyle: 'italic' }}>
                                {auteur.theorie}
                              </span>
                            </div>
                            <p style={{ margin: '6px 0 0 0', fontSize: '0.82rem', color: 'var(--text-muted, #4b5563)', lineHeight: 1.5 }}>
                              {auteur.apport}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* CONTENU ONGLET 4 : Sujets type Bac */}
                    {currentTab === 'bac' && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {item.sujetsBac.map((bac, i) => (
                          <div
                            key={i}
                            style={{
                              padding: 12,
                              background: 'var(--bg-subtle, #f9fafb)',
                              border: '1px solid var(--border-color, #e5e7eb)',
                              borderRadius: 6,
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                              <span
                                style={{
                                  fontSize: '0.72rem',
                                  fontWeight: 600,
                                  padding: '2px 7px',
                                  borderRadius: 4,
                                  background: bac.type.includes('Dissertation') ? 'rgba(147, 51, 234, 0.1)' : 'rgba(37, 99, 235, 0.1)',
                                  color: bac.type.includes('Dissertation') ? '#7e22ce' : '#1d4ed8',
                                }}
                              >
                                {bac.type}
                              </span>
                            </div>
                            <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-main, #111827)', marginBottom: 6 }}>
                              « {bac.intitule} »
                            </div>
                            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted, #4b5563)', lineHeight: 1.55 }}>
                              <strong>Pistes d'analyse &amp; arguments :</strong> {bac.pistesCorrection}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ActualitesEco;
