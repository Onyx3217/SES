import Fuse from 'fuse.js';
import { calculsCatalog, FicheCalcul } from '../data/calculsData';
import { allGlossaryTerms, EnrichedGlossaryTerm } from '../data/glossaireHelper';
import { auteursSES, AuteurSES } from '../data/auteursData';

/**
 * Normalise une chaîne pour la recherche :
 * - supprime les accents (NFD + regex Unicode)
 * - remplace apostrophes, tirets et signes de ponctuation par des espaces
 * - passe en minuscules et compacte les espaces
 */
export function normalizeForSearch(s: string): string {
  if (!s) return '';
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['’`\-–—/\\.,;:!?()[\]{}<>_=+*#@~|%&$^]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Normalise un token en retirant la terminaison du pluriel courant (s/x) pour les mots de plus de 3 lettres
 */
function stemToken(token: string): string {
  if (token.length > 3 && (token.endsWith('s') || token.endsWith('x'))) {
    return token.slice(0, -1);
  }
  return token;
}

// -------------------------------------------------------------
// RECHERCHE CALCULS
// -------------------------------------------------------------

const fuseCalculs = new Fuse(calculsCatalog, {
  keys: [
    { name: 'nom', weight: 0.5 },
    { name: 'motsCles', weight: 0.3 },
    { name: 'formule', weight: 0.2 },
    { name: 'chapitres', weight: 0.15 },
    { name: 'definitionCourte', weight: 0.1 },
  ],
  threshold: 0.45,
  ignoreLocation: true,
  includeScore: true,
  isCaseSensitive: false,
});

export function rechercherCalculs(query: string, maxResults = 50): FicheCalcul[] {
  const normQuery = normalizeForSearch(query);
  if (!normQuery) return calculsCatalog;

  const tokens = normQuery.split(' ').filter(Boolean);
  const stemmedTokens = tokens.map(stemToken);

  // Score chaque fiche calcul
  const scored: { item: FicheCalcul; score: number }[] = [];

  for (const item of calculsCatalog) {
    const nomNorm = normalizeForSearch(item.nom);
    const motsClesNorm = normalizeForSearch((item.motsCles || []).join(' '));
    const formuleNorm = normalizeForSearch(item.formule || '');
    const chapitresNorm = normalizeForSearch((item.chapitres || []).join(' '));
    const defNorm = normalizeForSearch(item.definitionCourte || '');

    const fullHay = `${nomNorm} ${motsClesNorm} ${formuleNorm} ${chapitresNorm} ${defNorm}`;

    // Correspondance exacte du nom
    if (nomNorm === normQuery) {
      scored.push({ item, score: 1000 });
      continue;
    }

    // Le nom commence par la requête
    if (nomNorm.startsWith(normQuery)) {
      scored.push({ item, score: 800 });
      continue;
    }

    // Le nom contient la requête complète
    if (nomNorm.includes(normQuery)) {
      scored.push({ item, score: 600 });
      continue;
    }

    // Tous les tokens sont présents
    let allTokensMatch = true;
    let tokenScore = 0;
    for (let i = 0; i < tokens.length; i++) {
      const t = tokens[i];
      const st = stemmedTokens[i];
      const inNom = nomNorm.includes(t) || nomNorm.includes(st);
      const inHay = inNom || fullHay.includes(t) || fullHay.includes(st);

      if (!inHay) {
        allTokensMatch = false;
        break;
      }
      tokenScore += inNom ? 120 : 40;
    }

    if (allTokensMatch) {
      scored.push({ item, score: 300 + tokenScore });
    }
  }

  // Si on a des résultats déterministes par tokens, les trier et les retourner
  if (scored.length > 0) {
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, maxResults).map((s) => s.item);
  }

  // Fallback flou avec Fuse.js
  const fuseResults = fuseCalculs.search(normQuery, { limit: maxResults });
  return fuseResults.map((r) => r.item);
}

// -------------------------------------------------------------
// RECHERCHE GLOSSAIRE / LEXIQUE
// -------------------------------------------------------------

const fuseGlossaire = new Fuse(allGlossaryTerms, {
  keys: [
    { name: 'terme', weight: 0.5 },
    { name: 'sigle', weight: 0.35 },
    { name: 'pointsCles', weight: 0.2 },
    { name: 'categorie', weight: 0.15 },
    { name: 'definition', weight: 0.1 },
    { name: 'interpretation', weight: 0.08 },
    { name: 'exemple', weight: 0.05 },
  ],
  threshold: 0.45,
  ignoreLocation: true,
  includeScore: true,
  isCaseSensitive: false,
});

export function rechercherGlossaire(query: string, maxResults = 500): EnrichedGlossaryTerm[] {
  const normQuery = normalizeForSearch(query);
  if (!normQuery) return allGlossaryTerms;

  const tokens = normQuery.split(' ').filter(Boolean);
  const stemmedTokens = tokens.map(stemToken);

  const scored: { item: EnrichedGlossaryTerm; score: number }[] = [];

  for (const term of allGlossaryTerms) {
    const termeNorm = normalizeForSearch(term.terme);
    const sigleNorm = normalizeForSearch(term.sigle || '');
    const catNorm = normalizeForSearch(term.categorie || '');
    const defNorm = normalizeForSearch(term.definition || '');
    const ptsNorm = normalizeForSearch((term.pointsCles || []).join(' '));
    const interpNorm = normalizeForSearch(term.interpretation || '');
    const exNorm = normalizeForSearch(term.exemple || '');
    const formNorm = normalizeForSearch(term.formule || '');

    const fullHay = `${termeNorm} ${sigleNorm} ${catNorm} ${defNorm} ${ptsNorm} ${interpNorm} ${exNorm} ${formNorm}`;

    // 1. Sigle exact (ex: "PIB", "VA", "CPP", "BIT")
    if (sigleNorm && sigleNorm === normQuery) {
      scored.push({ item: term, score: 1000 });
      continue;
    }

    // 2. Terme exact
    if (termeNorm === normQuery) {
      scored.push({ item: term, score: 900 });
      continue;
    }

    // 3. Terme commence par la requête
    if (termeNorm.startsWith(normQuery)) {
      scored.push({ item: term, score: 700 });
      continue;
    }

    // 4. Terme contient la requête contiguë
    if (termeNorm.includes(normQuery)) {
      scored.push({ item: term, score: 500 });
      continue;
    }

    // 5. Recherche multi-tokens (tous les mots de la requête doivent se retrouver)
    let allTokensMatch = true;
    let tokenScore = 0;
    for (let i = 0; i < tokens.length; i++) {
      const t = tokens[i];
      const st = stemmedTokens[i];

      const inTerme = termeNorm.includes(t) || termeNorm.includes(st);
      const inSigle = sigleNorm.includes(t);
      const inPts = ptsNorm.includes(t) || ptsNorm.includes(st);
      const inHay = inTerme || inSigle || inPts || fullHay.includes(t) || fullHay.includes(st);

      if (!inHay) {
        allTokensMatch = false;
        break;
      }

      if (inTerme) tokenScore += 150;
      else if (inSigle) tokenScore += 120;
      else if (inPts) tokenScore += 50;
      else tokenScore += 20;
    }

    if (allTokensMatch) {
      scored.push({ item: term, score: 200 + tokenScore });
    }
  }

  // Si on a des résultats exacts/par tokens, on trie par pertinence
  if (scored.length > 0) {
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, maxResults).map((s) => s.item);
  }

  // Fallback Fuse.js si fautes de frappe
  const fuseResults = fuseGlossaire.search(normQuery, { limit: maxResults });
  return fuseResults.map((r) => r.item);
}

// -------------------------------------------------------------
// RECHERCHE AUTEURS
// -------------------------------------------------------------

export function rechercherAuteurs(query: string, maxResults = 50): AuteurSES[] {
  const normQuery = normalizeForSearch(query);
  if (!normQuery) return auteursSES;

  const tokens = normQuery.split(' ').filter(Boolean);
  const stemmedTokens = tokens.map(stemToken);

  const scored: { item: AuteurSES; score: number }[] = [];

  for (const auteur of auteursSES) {
    const nomNorm = normalizeForSearch(auteur.nom);
    const courantNorm = normalizeForSearch(auteur.courant);
    const theseNorm = normalizeForSearch(auteur.theseCentrale);
    const notionsNorm = normalizeForSearch((auteur.notionsCles || []).join(' '));
    const citationNorm = normalizeForSearch(auteur.citationIncontournable);
    const contexteNorm = normalizeForSearch(auteur.contexteUtilisationBac || '');

    const fullHay = `${nomNorm} ${courantNorm} ${theseNorm} ${notionsNorm} ${citationNorm} ${contexteNorm}`;

    if (nomNorm === normQuery) {
      scored.push({ item: auteur, score: 1000 });
      continue;
    }

    if (nomNorm.includes(normQuery)) {
      scored.push({ item: auteur, score: 800 });
      continue;
    }

    let allTokensMatch = true;
    let tokenScore = 0;
    for (let i = 0; i < tokens.length; i++) {
      const t = tokens[i];
      const st = stemmedTokens[i];
      const inNom = nomNorm.includes(t) || nomNorm.includes(st);
      const inNotions = notionsNorm.includes(t) || notionsNorm.includes(st);
      const inHay = inNom || inNotions || fullHay.includes(t) || fullHay.includes(st);

      if (!inHay) {
        allTokensMatch = false;
        break;
      }

      if (inNom) tokenScore += 150;
      else if (inNotions) tokenScore += 80;
      else tokenScore += 25;
    }

    if (allTokensMatch) {
      scored.push({ item: auteur, score: 200 + tokenScore });
    }
  }

  if (scored.length > 0) {
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, maxResults).map((s) => s.item);
  }

  return [];
}

export function rechercher(query: string, maxResults = 50) {
  return rechercherCalculs(query, maxResults);
}

export function getAllCalculs() {
  return calculsCatalog;
}

