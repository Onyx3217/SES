import Fuse from 'fuse.js';
import rawData from '../data/calculs.json';

type Fiche = typeof rawData[number];

function normalize(s: string): string {
  return s
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/["'`.,;:!?()\[\]{}<>\/\\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const fuse = new Fuse(rawData as Fiche[], {
  keys: [
    { name: 'nom', weight: 0.5 },
    { name: 'motsCles', weight: 0.35 },
    { name: 'chapitres', weight: 0.1 },
    { name: 'definitionCourte', weight: 0.05 }
  ],
  threshold: 0.38,
  ignoreLocation: true,
  includeScore: true,
  useExtendedSearch: true,
  isCaseSensitive: false
});

export function rechercher(query: string, maxResults = 8) {
  const q = normalize(query);
  if (!q) return [] as Fiche[];
  const results = fuse.search(q, { limit: maxResults });
  return results.map(r => r.item);
}

export function getAll() {
  return rawData as Fiche[];
}
