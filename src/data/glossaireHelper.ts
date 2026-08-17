import { sesGlossaire, SesDefinition } from './sesGlossaire';

// Mapping categories & terms to Seconde vs Première
const secondeCategories = new Set([
  'Entreprise',
  'Production',
  'Science économique',
  'Consommation',
  'Revenus',
  'Statistiques',
  'Méthodes',
]);

const secondeTermIds = new Set([
  'ca',
  'valeur-ajoutee',
  'ebe',
  'benefice',
  'marge',
  'entreprise',
  'statut-juridique',
  'entreprise-individuelle',
  'societe',
  'association',
  'administration-publique',
  'bien-economique',
  'rarete',
  'bien-libre',
  'bien-prive',
  'bien-collectif',
  'bien-commun',
  'utilite',
  'valeur-usage',
  'valeur-echange',
  'production-marchande',
  'production-non-marchande',
  'consommation-intermediaire',
  'facteurs-production',
  'travail-facteur',
  'capital-facteur',
  'capital-physique',
  'capital-technique',
  'capital-humain',
  'ressources-naturelles',
  'qualification',
  'productivite',
  'productivite-travail',
  'division-travail',
  'pib',
  'croissance-economique',
  'marche',
  'offre',
  'demande',
  'prix-equilibre',
  'quantite-equilibre',
  'loi-offre-demande',
  'surplus-consommateur',
  'surplus-producteur',
  'gains-echange',
  'socialisation',
  'socialisation-primaire',
  'instances-socialisation',
  'normes',
  'normes-formelles',
  'normes-informelles',
  'valeurs',
  'roles-sociaux',
  'statut-social',
  'socialisation-differentielle',
  'socialisation-genre',
  'inculcation',
  'impregnation',
  'reproduction-sociale',
  'pouvoir-politique',
  'etat',
  'democratie-representative',
  'scrutin-majoritaire',
  'scrutin-proportionnel',
  'separation-pouvoirs',
  'vote',
  'abstention',
  'taux-participation',
  'taux-abstention',
  'taux-inscription',
  'salaire-brut',
  'salaire-net',
  'cotisations-sociales',
  'smic',
  'chomage',
  'taux-chomage',
  'taux-emploi',
  'taux-activite',
  'population-active',
  'population-inactive',
  'declassement',
  'proportion',
  'taux-de-variation',
  'coefficient-multiplicateur',
  'indice-base-100',
  'moyenne-arithmetique',
  'mediane',
]);

export type EnrichedGlossaryTerm = SesDefinition & {
  niveaux: ('Seconde' | 'Première')[];
  discipline: 'Science économique' | 'Sociologie et science politique' | 'Regards croisés' | 'Méthodes';
  relatedCalculId?: string;
};

// Map calculation IDs to terms
const termToCalculMap: Record<string, string> = {
  'ca': 'profit',
  'valeur-ajoutee': 'valeur-ajoutee',
  'ebe': 'profit',
  'benefice': 'profit',
  'pib': 'pib-approche-production',
  'croissance-economique': 'taux-croissance-pib',
  'taux-chomage': 'taux-de-chomage-bit',
  'taux-emploi': 'taux-d-emploi',
  'taux-activite': 'taux-d-activite',
  'salaire-net': 'salaire-net-a-partir-du-brut',
  'surplus-consommateur': 'surplus-consommateur-producteur',
  'surplus-producteur': 'surplus-consommateur-producteur',
  'cout-marginal': 'cout-marginal',
  'profit': 'profit',
  'taux-epargne': 'taux-d-epargne',
  'deficit-public': 'solde-budgetaire-etat',
  'creation-monetaire': 'creation-monetaire-credit',
  'abstention': 'taux-de-participation-abstention',
  'vote': 'taux-de-participation-abstention',
  'taux-inscription': 'taux-d-inscription',
  'proportion': 'proportion',
  'taux-de-variation': 'taux-de-variation',
  'coefficient-multiplicateur': 'coefficient-multiplicateur',
  'indice-base-100': 'indice-base-100',
  'moyenne-arithmetique': 'moyenne-arithmetique',
  'mediane': 'mediane',
  'inflation': 'valeur-nominale-reelle',
  'taux-interet-reel': 'taux-interet-reel-nominal',
};

export const allGlossaryTerms: EnrichedGlossaryTerm[] = sesGlossaire.map((term) => {
  const isSec = secondeTermIds.has(term.id) || secondeCategories.has(term.categorie);
  // Almost all terms are useful for Première, and some specifically for Seconde
  const niveaux: ('Seconde' | 'Première')[] = isSec ? ['Seconde', 'Première'] : ['Première'];

  let discipline: EnrichedGlossaryTerm['discipline'] = 'Science économique';
  if (['Sociologie', 'Science politique', 'Stratification', 'Culture'].includes(term.categorie)) {
    discipline = 'Sociologie et science politique';
  } else if (['Regards croisés', 'Justice sociale', 'Organisation'].includes(term.categorie)) {
    discipline = 'Regards croisés';
  } else if (['Méthodes', 'Statistiques'].includes(term.categorie)) {
    discipline = 'Méthodes';
  }

  return {
    ...term,
    niveaux,
    discipline,
    relatedCalculId: termToCalculMap[term.id],
  };
});
