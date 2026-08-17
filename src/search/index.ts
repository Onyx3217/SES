import Fuse from 'fuse.js';
import { calculsCatalog, FicheCalcul } from '../data/calculsData';
import { allGlossaryTerms, EnrichedGlossaryTerm } from '../data/glossaireHelper';

function normalize(s: string): string {
  return s
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/["'`.,;:!?()\[\]{}<>\/\\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const fuseCalculs = new Fuse(calculsCatalog, {
  keys: [
    { name: 'nom', weight: 0.4 },
    { name: 'motsCles', weight: 0.3 },
    { name: 'formule', weight: 0.15 },
    { name: 'chapitres', weight: 0.1 },
    { name: 'definitionCourte', weight: 0.05 },
  ],
  threshold: 0.38,
  ignoreLocation: true,
  includeScore: true,
  isCaseSensitive: false,
});

const fuseGlossaire = new Fuse(allGlossaryTerms, {
  keys: [
    { name: 'terme', weight: 0.45 },
    { name: 'sigle', weight: 0.25 },
    { name: 'pointsCles', weight: 0.15 },
    { name: 'categorie', weight: 0.1 },
    { name: 'definition', weight: 0.05 },
  ],
  threshold: 0.38,
  ignoreLocation: true,
  includeScore: true,
  isCaseSensitive: false,
});

export function rechercherCalculs(query: string, maxResults = 8): FicheCalcul[] {
  const q = normalize(query);
  if (!q) return [];
  const results = fuseCalculs.search(q, { limit: maxResults });
  return results.map((r) => r.item);
}

export function rechercherGlossaire(query: string, maxResults = 8): EnrichedGlossaryTerm[] {
  const q = normalize(query);
  if (!q) return [];
  const results = fuseGlossaire.search(q, { limit: maxResults });
  return results.map((r) => r.item);
}

export function rechercher(query: string, maxResults = 8) {
  return rechercherCalculs(query, maxResults);
}

export function getAllCalculs() {
  return calculsCatalog;
}
