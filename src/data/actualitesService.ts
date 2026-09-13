import { FicheActualiteEco, actualitesEcoList } from "./actualitesData";

export interface LiveNewsState {
  articles: FicheActualiteEco[];
  lastUpdated: string | null;
  isLoading: boolean;
  error: string | null;
}

const CACHE_KEY = "ses_live_actualites_cache_v2";

interface RawRssItem {
  title: string;
  pubDate: string;
  link: string;
  guid?: string;
  description?: string;
  content?: string;
}

interface RssSource {
  name: string;
  journalTag: string;
  url: string;
}

export const RSS_SOURCES: RssSource[] = [
  {
    name: "Le Monde Éco",
    journalTag: "Le Monde Éco",
    url: "https://www.lemonde.fr/economie/rss_full.xml",
  },
  {
    name: "Les Échos",
    journalTag: "Les Échos",
    url: "https://news.google.com/rss/search?q=site:lesechos.fr+economie&hl=fr&gl=FR&ceid=FR:fr",
  },
  {
    name: "Alternatives Économiques",
    journalTag: "Alternatives Économiques",
    url: "https://www.alternatives-economiques.fr/rss.xml",
  },
  {
    name: "BFM Business Éco",
    journalTag: "BFM Business",
    url: "https://www.bfmtv.com/rss/economie/",
  },
  {
    name: "Banque de France & INSEE",
    journalTag: "Banque de France",
    url: "https://news.google.com/rss/search?q=%22Banque+de+France%22+OR+%22INSEE%22+economie&hl=fr&gl=FR&ceid=FR:fr",
  },
];

function stripHtml(html: string): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&laquo;|&raquo;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function formatDateFr(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "Récemment";
    return d.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "Récemment";
  }
}

/**
 * Moteur d'analyse pédagogique SES :
 * Transforme une dépêche brute de presse en fiche d'analyse pédagogique SES complète
 */
function enrichRssItem(item: RawRssItem, source: RssSource, index: number): FicheActualiteEco {
  const cleanTitle = stripHtml(item.title)
    .replace(/ - Les Echos$/i, "")
    .replace(/ - Le Monde$/i, "")
    .replace(/ - BFM Business$/i, "");
  const cleanDesc = stripHtml(item.description || item.content || "");
  const fullText = (cleanTitle + " " + cleanDesc).toLowerCase();

  // Détection du Thème & Chapitre SES
  let theme: FicheActualiteEco["theme"] = "Croissance & Productivité";
  let chapitreSES = "Quelles sont les sources de la croissance économique ?";
  let niveau: FicheActualiteEco["niveau"] = "Première & Terminale";
  let notions: string[] = ["Croissance économique", "PIB", "Investissement"];
  let faits: string[] = [];
  let mecanisme = "";
  let auteurs: FicheActualiteEco["auteursMobilisables"] = [];
  let bac: FicheActualiteEco["sujetsBac"] = [];

  // 1. Monnaie & Finance / BCE
  if (
    fullText.includes("bce") ||
    fullText.includes("taux directeur") ||
    fullText.includes("banque") ||
    fullText.includes("crédit") ||
    fullText.includes("inflation") ||
    fullText.includes("bourse") ||
    fullText.includes("action") ||
    fullText.includes("obligation") ||
    fullText.includes("prêt")
  ) {
    theme = "Monnaie & Finance";
    chapitreSES = "Comment la monnaie est-elle créée et régulée ? / Système financier";
    niveau = "Première & Terminale";
    notions = ["Taux d'intérêt directeur", "Création monétaire", "Inflation sous-jacente", "Masse monétaire", "Financement de l'économie", "Crédit bancaire"];
    faits = [
      "Taux directeur de la BCE ajusté pour guider le coût du crédit bancaire dans la zone euro.",
      "Objectif statutaire de la BCE : stabilité des prix avec une cible d'inflation à 2,0 % à moyen terme.",
      "Évolution des taux d'intérêt réels (taux nominal corrigé de l'inflation) impactant directement les décisions d'investissement.",
    ];
    mecanisme = "Modification des taux directeurs de la banque centrale ➔ Répercussion sur les taux d'intérêt du marché interbancaire ➔ Variation du coût du crédit pour les banques de second rang ➔ Hausse ou baisse des taux de prêt aux ménages et entreprises ➔ Ajustement de l'Investissement (I) et de la Consommation (C) ➔ Régulation de la demande globale et de l'inflation.";
    auteurs = [
      {
        nom: "John Maynard Keynes",
        theorie: "Théorie générale (1936)",
        apport: "L'investissement dépend du taux d'intérêt et de l'efficacité marginale du capital (anticipations des entrepreneurs).",
      },
      {
        nom: "Milton Friedman",
        theorie: "Monétarisme (1968)",
        apport: "L'inflation est d'origine monétaire ; la politique de relance monétaire engendre une illusion monétaire temporaire.",
      },
    ];
    bac = [
      {
        type: "Épreuve Composée (EC1)",
        intitule: "Présentez le rôle d'une banque centrale dans la régulation de la création monétaire.",
        pistesCorrection: "Expliquer l'action sur les taux directeurs, les opérations d'open market et les réserves obligatoires.",
      },
      {
        type: "Dissertation",
        intitule: "Dans quelle mesure la politique monétaire permet-elle de stabiliser l'activité économique ?",
        pistesCorrection: "I. La politique monétaire régule efficacement la demande globale et l'inflation. II. Ses limites contemporaines : trappe à liquidité, contraintes extérieures et risques financiers.",
      },
    ];
  }
  // 2. Finances publiques / Dette / Déficit / Budget
  else if (
    fullText.includes("dette") ||
    fullText.includes("déficit") ||
    fullText.includes("budget") ||
    fullText.includes("impôt") ||
    fullText.includes("fiscal") ||
    fullText.includes("dépense publique") ||
    fullText.includes("bercy") ||
    fullText.includes("taxe")
  ) {
    theme = "Finances Publiques";
    chapitreSES = "Les politiques économiques dans le cadre européen / Action publique";
    niveau = "Première & Terminale";
    notions = ["Déficit budgétaire", "Dette publique", "Pacte de stabilité", "Stabilisateurs automatiques", "Multiplicateur budgétaire", "Effet d'éviction"];
    faits = [
      "Dette publique en France supérieure à 110 % du PIB (plus de 3 100 milliards d'euros).",
      "Pacte de stabilité européen exigeant un déficit public sous 3 % et une dette sous 60 % du PIB.",
      "Charge de la dette pesant lourdement sur les marges de manœuvre budgétaires de l'État.",
    ];
    mecanisme = "Ralentissement conjoncturel ➔ Diminution des rentrées fiscales et augmentation des dépenses sociales ➔ Creusement du déficit budgétaire ➔ Émission de titres de dette publique (OAT) ➔ Nécessité de concilier consolidation budgétaire et soutien à l'activité par l'investissement public.";
    auteurs = [
      {
        nom: "Robert Barro",
        theorie: "Équivalence ricardienne (1974)",
        apport: "Les agents anticipent que le déficit d'aujourd'hui implique les impôts de demain, neutralisant le stimulus budgétaire.",
      },
      {
        nom: "Olivier Blanchard",
        theorie: "Soutenabilité de la dette et multiplicateur (2019)",
        apport: "Quand le taux d'intérêt est inférieur au taux de croissance (r < g), le coût d'endettement reste gérable.",
      },
    ];
    bac = [
      {
        type: "Dissertation",
        intitule: "Une politique budgétaire de rigueur est-elle efficace pour réduire l'endettement public ?",
        pistesCorrection: "I. L'assainissement budgétaire rétablit la crédibilité financière et réduit le risque souverain. II. Mais un multiplicateur keynésien élevé risque de contracter le PIB et d'aggraver le ratio Dette/PIB.",
      },
      {
        type: "Épreuve Composée (EC3)",
        intitule: "Montrez comment les stabilisateurs automatiques permettent d'amortir les chocs économiques.",
        pistesCorrection: "Expliquer l'effet amortisseur des impôts progressifs et des allocations chômage en phase de récession.",
      },
    ];
  }
  // 3. Travail, Emploi & Chômage
  else if (
    fullText.includes("emploi") ||
    fullText.includes("chômage") ||
    fullText.includes("salari") ||
    fullText.includes("travail") ||
    fullText.includes("smic") ||
    fullText.includes("embauche") ||
    fullText.includes("cdd") ||
    fullText.includes("cdi") ||
    fullText.includes("grève") ||
    fullText.includes("syndicat")
  ) {
    theme = "Travail & Emploi";
    chapitreSES = "Comment s'organise le marché du travail ? / Politiques de l'emploi";
    niveau = "Seconde & Première";
    notions = ["Chômage au sens du BIT", "Halo du chômage", "Sous-emploi", "Salaire d'efficience", "Chômage structurel", "Dualisme du travail"];
    faits = [
      "Taux de chômage BIT oscillant autour de 7,5 % en France métropolitaine.",
      "Le halo du chômage compte près de 2 millions de personnes en bordure de la population active.",
      "Taux de chômage des jeunes de 15 à 24 ans historiquement plus de deux fois supérieur à la moyenne nationale.",
    ];
    mecanisme = "Asymétrie d'information et coûts de turnover ➔ Fixation d'un salaire d'efficience au-dessus du salaire d'équilibre ➔ Augmentation de l'offre de travail et réduction de la demande des entreprises ➔ Persistance d'un chômage d'équilibre involontaire et segmentation du marché (CDI protégés vs contrats courts précaires).";
    auteurs = [
      {
        nom: "George Akerlof & Janet Yellen",
        theorie: "Théorie du salaire d'efficience (1986)",
        apport: "Un salaire élevé stimule l'effort, évite la fuite des compétences et réduit les coûts de rotation de la main-d'œuvre.",
      },
      {
        nom: "Peter Diamond & Dale Mortensen",
        theorie: "Théorie des frictions et de l'appariement (2010)",
        apport: "Le chômage dépend de la rapidité et de l'efficacité de la rencontre entre demandeurs d'emploi et postes vacants.",
      },
    ];
    bac = [
      {
        type: "Épreuve Composée (EC1)",
        intitule: "Distinguez le chômage structurel du chômage conjoncturel.",
        pistesCorrection: "Définir les deux composantes : inadéquation des compétences/rigidités (structurel) vs baisse temporaire de la demande effective (conjoncturel).",
      },
      {
        type: "Dissertation",
        intitule: "Comment les politiques publiques peuvent-elles lutter efficacement contre le chômage ?",
        pistesCorrection: "I. Politiques de relance de la demande globale et soutiens ciblés. II. Politiques structurelles de l'offre : allègements de cotisations, formation professionnelle et flexisécurité.",
      },
    ];
  }
  // 4. Climat & Transition écologique
  else if (
    fullText.includes("climat") ||
    fullText.includes("carbone") ||
    fullText.includes("écolog") ||
    fullText.includes("énergie") ||
    fullText.includes("vert") ||
    fullText.includes("pollution") ||
    fullText.includes("co2") ||
    fullText.includes("renouvelable")
  ) {
    theme = "Environnement & Climat";
    chapitreSES = "Quelle politique climatique ? / Défaillances de marché";
    niveau = "Première & Terminale";
    notions = ["Externalité négative", "Taxe pigouvienne", "Marché de quotas (ETS)", "MACF", "Réglementation environnementale", "Biens communs"];
    faits = [
      "Prix de la tonne de CO2 sur le marché européen ETS fluctuant entre 65 € et 80 €.",
      "Le mécanisme d'ajustement carbone aux frontières (MACF) européen vise à égaliser les coûts écologiques des importations.",
      "Les investissements de décarbonation nécessitent plusieurs dizaines de milliards d'euros annuels selon le rapport Pisani-Ferry.",
    ];
    mecanisme = "Activité productive émettrice de gaz à effet de serre ➔ Coût social supérieur au coût privé (externalité négative non marchande) ➔ Intervention publique par la taxe carbone ou le marché de quotas ➔ Modification du signal-prix ➔ Incitation des firmes à investir dans des technologies bas-carbone (internalisation).";
    auteurs = [
      {
        nom: "Arthur Cecil Pigou",
        theorie: "L'Économie du bien-être (1920)",
        apport: "Taxer le pollueur à hauteur du dommage marginal social pour rétablir l'efficacité allocative de l'économie.",
      },
      {
        nom: "Ronald Coase",
        theorie: "Le Problème du coût social (1960)",
        apport: "L'attribution de droits de propriété négociables permet une dépollution au moindre coût économique.",
      },
    ];
    bac = [
      {
        type: "Dissertation",
        intitule: "Les instruments économiques fondés sur le marché sont-ils suffisants pour préserver l'environnement ?",
        pistesCorrection: "I. Efficacité des instruments de prix (taxe, quotas ETS) pour orienter l'innovation. II. Nécessité indispensable de normes réglementaires strictes et d'investissements publics dans les infrastructures vertes.",
      },
      {
        type: "Épreuve Composée (EC1)",
        intitule: "Montrez comment une taxe carbone permet d'internaliser une externalité négative.",
        pistesCorrection: "Expliquer le principe pollueur-payeur et l'égalisation du coût marginal privé avec le coût marginal social.",
      },
    ];
  }
  // 5. Commerce international & Mondialisation
  else if (
    fullText.includes("commerce") ||
    fullText.includes("douane") ||
    fullText.includes("export") ||
    fullText.includes("import") ||
    fullText.includes("chine") ||
    fullText.includes("mondialisation") ||
    fullText.includes("tarif")
  ) {
    theme = "Commerce International";
    chapitreSES = "Fondements du commerce international et internationalisation de la production";
    niveau = "Première & Terminale";
    notions = ["Avantage comparatif", "Protectionnisme éducateur", "Chaîne de valeur mondiale", "Barrières tarifaires", "Compétitivité-prix / hors-prix"];
    faits = [
      "Mesures protectionnistes et surtaxes douanières croissantes entre les États-Unis, l'UE et la Chine.",
      "Plus de 70 % du commerce mondial constitué de biens intermédiaires intégrés aux chaînes de valeur mondiales.",
      "Part de l'industrie dans le PIB français stabilisée autour de 10-12 %, alimentant les débats sur la réindustrialisation.",
    ];
    mecanisme = "Différences de dotations factorielles et technologiques ➔ Spécialisation des pays selon leur avantage comparatif ➔ Échange international de composants industriels ➔ Fragmentation de la chaîne de valeur mondiale. En cas de tensions géopolitiques ➔ Hausse des droits de douane ➔ Augmentation des coûts d'approvisionnement et relocalisation stratégique.";
    auteurs = [
      {
        nom: "David Ricardo",
        theorie: "Avantages comparatifs (1817)",
        apport: "Chaque nation gagne à l'échange en se spécialisant dans la production où son coût relatif est le plus avantageux.",
      },
      {
        nom: "Friedrich List",
        theorie: "Protectionnisme éducateur (1841)",
        apport: "Protéger temporairement les industries naissantes pour leur permettre d'atteindre une taille critique avant l'ouverture.",
      },
    ];
    bac = [
      {
        type: "Dissertation",
        intitule: "Le libre-échange favorise-t-il toujours la croissance économique ?",
        pistesCorrection: "I. Les gains à l'échange : économies d'échelle, baisse des prix, transfert technologique. II. Les risques : destruction d'emplois industriels locaux, dépendance stratégique et inégalités accrues.",
      },
      {
        type: "Épreuve Composée (EC1)",
        intitule: "Distinguez la compétitivité-prix de la compétitivité hors-prix.",
        pistesCorrection: "Capacité à produire à moindre coût (salaires, productivité) vs capacité à différencier ses produits par la qualité, la marque et l'innovation.",
      },
    ];
  }
  // 6. Inégalités, Société & Structure sociale
  else if (
    fullText.includes("inégalité") ||
    fullText.includes("pauvreté") ||
    fullText.includes("patrimoine") ||
    fullText.includes("social") ||
    fullText.includes("classe") ||
    fullText.includes("femme") ||
    fullText.includes("jeune") ||
    fullText.includes("famille")
  ) {
    theme = "Inégalités & Société";
    chapitreSES = "Comment est structurée la société française actuelle ? / Justice sociale";
    niveau = "Seconde & Première";
    notions = ["Structure sociale", "Inégalités économiques et sociales", "Gini", "Mobilité sociale", "Redistribution", "Reproduction sociale"];
    faits = [
      "Le coefficient de Gini des niveaux de vie en France s'établit autour de 0,29 après redistribution (contre 0,40 avant transferts).",
      "Les 10 % des ménages les plus riches détiennent près de 47 % du patrimoine total.",
      "Le taux de pauvreté monétaire (seuil à 60 % du revenu médian) concerne environ 14,5 % de la population.",
    ];
    mecanisme = "Dispersion initiale des revenus primaires (salaires, dividendes) ➔ Prélèvements obligatoires progressifs (impôt sur le revenu) et versements de prestations sociales (minima sociaux, allocations) ➔ Réduction de l'écart interdécile D9/D1 ➔ Amortissement des inégalités de niveau de vie.";
    auteurs = [
      {
        nom: "Thomas Piketty",
        theorie: "Le Capital au XXIe siècle (2013)",
        apport: "Lorsque le taux de rendement du capital excède le taux de croissance (r > g), les patrimoines s'accumulent plus vite que les salaires.",
      },
      {
        nom: "Pierre Bourdieu",
        theorie: "La Reproduction (1970)",
        apport: "Les capitaux économique, culturel et social se transmettent au sein de la famille, perpétuant la structure de classe.",
      },
    ];
    bac = [
      {
        type: "Dissertation",
        intitule: "La redistribution permet-elle de réduire efficacement les inégalités ?",
        pistesCorrection: "I. La protection sociale et l'impôt progressif réduisent fortement la pauvreté et les inégalités de niveau de vie. II. Les limites : persistance de la concentration patrimoniale et non-recours aux droits sociaux.",
      },
      {
        type: "Épreuve Composée (EC1)",
        intitule: "Montrez que les inégalités économiques et sociales ont un caractère cumulatif.",
        pistesCorrection: "Expliquer comment les inégalités de revenu engendrent des inégalités de logement, de santé, de réussite scolaire et de patrimoine.",
      },
    ];
  }
  // 7. Défaut : Croissance & Entreprise
  else {
    theme = "Croissance & Productivité";
    chapitreSES = "Quelles sont les sources de la croissance économique ? / L'entreprise";
    niveau = "Seconde & Première";
    notions = ["PIB", "Productivité globale des facteurs (PGF)", "Progrès technique", "Investissement", "Destruction créatrice", "Valeur ajoutée"];
    faits = [
      "Croissance du PIB français projetée autour de 0,8 % à 1,1 % sur l'année en cours.",
      "Dépenses de recherche et développement (R&D) représentant environ 2,2 % du PIB national.",
      "Ralentissement des gains de productivité horaire mesurés post-crise sanitaire en France.",
    ];
    mecanisme = "Investissement en capital physique et immatériel (R&D, logiciels) ➔ Hausse de l'efficacité combinée du travail et du capital (PGF) ➔ Déplacement de la frontière technologique ➔ Baisse des coûts unitaires de production ➔ Hausse de la valeur ajoutée et des revenus distribuables.";
    auteurs = [
      {
        nom: "Joseph Schumpeter",
        theorie: "Théorie de l'évolution économique (1911)",
        apport: "L'entrepreneur-innovateur impulse la destruction créatrice qui renouvelle l'appareil productif.",
      },
      {
        nom: "Robert Solow",
        theorie: "Modèle de croissance néoclassique (1956)",
        apport: "Le progrès technique exogène constitue le moteur exclusif de la croissance économique de long terme.",
      },
    ];
    bac = [
      {
        type: "Dissertation",
        intitule: "Dans quelle mesure l'innovation est-elle le moteur fondamental de la croissance économique ?",
        pistesCorrection: "I. Le progrès technique repousse les rendements décroissants et augmente la PGF. II. L'innovation requiert des institutions stables (brevets, formation, infrastructures publiques).",
      },
      {
        type: "Épreuve Composée (EC1)",
        intitule: "Présentez la distinction entre croissance extensive et croissance intensive.",
        pistesCorrection: "Augmentation du volume des facteurs travail et capital (extensive) vs hausse de l'efficacité globale des facteurs (intensive/PGF).",
      },
    ];
  }

  // Faits personnalisés extraits du texte
  if (cleanDesc && cleanDesc.length > 20) {
    const snippet = cleanDesc.length > 180 ? cleanDesc.slice(0, 180) + "..." : cleanDesc;
    faits.unshift(`Faits rapportés : "${snippet}"`);
  }

  const pubDateFormatted = formatDateFr(item.pubDate);
  const isRecent = (() => {
    try {
      const diffHours = (Date.now() - new Date(item.pubDate).getTime()) / (1000 * 3600);
      return diffHours <= 48;
    } catch {
      return false;
    }
  })();

  return {
    id: `live-${source.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${index}-${Date.parse(item.pubDate) || Date.now()}`,
    titre: cleanTitle,
    journal: source.journalTag,
    date: pubDateFormatted,
    periodicite: isRecent ? "Quotidien" : "Hebdomadaire",
    theme,
    niveau,
    chapitreSES,
    resume: cleanDesc || cleanTitle,
    faitsEtChiffres: faits.slice(0, 4),
    notionsProgramme: notions,
    mecanismeExplication: mecanisme,
    auteursMobilisables: auteurs,
    sujetsBac: bac,
    citationCle: "L'actualité économique du moment décryptée par la science économique.",
    sourceUrl: item.link,
    isLive: true,
  };
}

/**
 * Récupère les actualités économiques en direct depuis les flux RSS publics
 */
export async function fetchLiveEconomicNews(): Promise<{
  articles: FicheActualiteEco[];
  lastUpdated: string;
  sourceCount: number;
}> {
  const allArticles: FicheActualiteEco[] = [];
  let successfulSources = 0;

  for (const source of RSS_SOURCES) {
    try {
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(source.url)}`;
      const res = await fetch(apiUrl, { cache: "no-cache" });
      if (!res.ok) continue;

      const data = await res.json();
      if (data.status === "ok" && Array.isArray(data.items) && data.items.length > 0) {
        successfulSources++;
        // On prend les 6 articles les plus récents de chaque source
        const topItems: RawRssItem[] = data.items.slice(0, 6);
        topItems.forEach((item, idx) => {
          allArticles.push(enrichRssItem(item, source, idx));
        });
      }
    } catch (e) {
      console.warn(`Échec du chargement du flux ${source.name}:`, e);
    }
  }

  const now = new Date();
  const lastUpdated = now.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  // Si des flux en direct ont répondu, on sauvegarde dans le cache local
  if (allArticles.length > 0) {
    try {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          articles: allArticles,
          lastUpdated,
        })
      );
    } catch (e) {
      console.warn("Erreur de sauvegarde dans le cache localStorage:", e);
    }
  }

  return {
    articles: allArticles,
    lastUpdated,
    sourceCount: successfulSources,
  };
}

/**
 * Récupère les articles en cache local s'ils existent
 */
export function getCachedLiveNews(): { articles: FicheActualiteEco[]; lastUpdated: string } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed.articles) && parsed.articles.length > 0) {
      return parsed;
    }
  } catch {
    return null;
  }
  return null;
}
