export type SesDefinition = {
  id: string;
  terme: string;
  sigle?: string;
  categorie: string;
  definition: string;
  formule?: string;
  interpretation: string;
  exemple: string;
  pointsCles: string[];
};

export const sesGlossaire: SesDefinition[] = [
  {
    id: 'ca',
    terme: 'Chiffre d\'affaires',
    sigle: 'CA',
    categorie: 'Entreprise',
    definition: 'Le chiffre d\'affaires correspond au montant total des ventes réalisées par une entreprise sur une période donnée.',
    formule: 'CA = Prix unitaire × Quantité vendue',
    interpretation: 'Il montre la taille de l\'activité commerciale sans tenir compte des coûts de production.',
    exemple: 'Une boutique vend 250 articles à 40 € : son chiffre d\'affaires est de 10 000 €.',
    pointsCles: ['Mesure le volume des ventes', 'Inclut toute la production vendue', 'Ne dit pas si l\'entreprise est rentable']
  },
  {
    id: 'va',
    terme: 'Valeur ajoutée',
    sigle: 'VA',
    categorie: 'Entreprise',
    definition: 'La valeur ajoutée correspond à la richesse créée par une entreprise en transformant des biens ou des services.',
    formule: 'VA = CA − Consommations intermédiaires',
    interpretation: 'Elle mesure la contribution de l\'entreprise à la production nationale.',
    exemple: 'Une entreprise vend 120 000 € avec 80 000 € de matières achetées : la VA est de 40 000 €.',
    pointsCles: ['Indique la richesse créée', 'Sert à mesurer l\'activité productive', 'Diffère du bénéfice']
  },
  {
    id: 'ebe',
    terme: 'Excédent brut d\'exploitation',
    sigle: 'EBE',
    categorie: 'Entreprise',
    definition: 'L\'EBE représente la ressource générée par l\'activité avant les charges financières, fiscales et de dépréciation.',
    formule: 'EBE = VA − Charges de personnel − Autres charges d\'exploitation',
    interpretation: 'Il montre la capacité de l\'entreprise à générer de la trésorerie à partir de son activité.',
    exemple: 'Une entreprise avec 60 000 € de VA et 35 000 € de charges d\'exploitation obtient un EBE de 25 000 €.',
    pointsCles: ['Indicateur de performance opérationnelle', 'Peut être positif ou négatif', 'Très utilisé en SES']
  },
  {
    id: 'benefice',
    terme: 'Bénéfice',
    categorie: 'Entreprise',
    definition: 'Le bénéfice est le résultat positif obtenu après avoir payé toutes les charges de l\'entreprise.',
    formule: 'Bénéfice = CA − Charges totales',
    interpretation: 'C\'est le gain net de l\'entreprise, utile pour mesurer la rentabilité.',
    exemple: 'Si une entreprise réalise 200 000 € de CA et 170 000 € de charges, le bénéfice est de 30 000 €.',
    pointsCles: ['Résultat net', 'Peut être distribué ou réinvesti', 'Important pour la rentabilité']
  },
  {
    id: 'marge',
    terme: 'Marge',
    categorie: 'Entreprise',
    definition: 'La marge représente le profit réalisé sur un produit ou sur l\'activité de l\'entreprise.',
    formule: 'Marge = Prix de vente − Coût de production',
    interpretation: 'Une marge élevée peut être le signe d\'une meilleure rentabilité.',
    exemple: 'Un produit vendu 50 € avec un coût de 30 € a une marge de 20 €.',
    pointsCles: ['Mesure le profit unitaire', 'Peut être exprimée en euros ou en %', 'Aide à évaluer la rentabilité']
  },
  {
    id: 'chomage',
    terme: 'Chômage',
    categorie: 'Emploi',
    definition: 'Le chômage désigne le fait pour une personne de ne pas avoir d\'emploi et d\'en chercher un activement.',
    formule: 'Taux de chômage = (Chômeurs / Population active) × 100',
    interpretation: 'Il mesure la difficulté pour un pays à utiliser les ressources humaines disponibles.',
    exemple: '200 chômeurs sur 2 000 actifs correspondent à un taux de chômage de 10 %.',
    pointsCles: ['Symptôme de sous-emploi', 'Peut être conjoncturel ou structurel', 'Très lié à la demande globale']
  },
  {
    id: 'socialisation',
    terme: 'Socialisation',
    categorie: 'Sociologie',
    definition: 'La socialisation est le processus par lequel un individu acquiert les normes, valeurs et comportements acceptés par sa société.',
    interpretation: 'Elle explique comment nous apprenons à vivre en société et à respecter les règles collectives.',
    exemple: 'Un enfant apprend par sa famille et à l\'école les valeurs de politesse, de respect et de travail.',
    pointsCles: ['Processus d\'apprentissage social', 'Implique famille, école, groupes de pairs', 'Continue tout au long de la vie']
  },
  {
    id: 'norme',
    terme: 'Norme sociale',
    categorie: 'Sociologie',
    definition: 'Une norme est une règle de comportement partagée et acceptée par les membres d\'une société.',
    interpretation: 'Les normes structurent la vie collective et facilitent la cohabitation sociale.',
    exemple: 'Le port de vêtements appropriés selon les circonstances, la ponctualité ou le respect de la file d\'attente sont des normes.',
    pointsCles: ['Règle collective', 'Sanctionnée par la société', 'Peut varier selon la culture']
  },
  {
    id: 'valeur',
    terme: 'Valeur sociale',
    categorie: 'Sociologie',
    definition: 'Une valeur est un principe fondamental jugé important par une société ou un groupe.',
    interpretation: 'Les valeurs guident les choix moraux et les comportements des individus.',
    exemple: 'L\'égalité, la liberté, le travail, la famille sont des valeurs importantes dans nos sociétés.',
    pointsCles: ['Idéal collectif', 'Donne sens aux normes', 'Peut être contestée']
  },
  {
    id: 'classe-sociale',
    terme: 'Classe sociale',
    categorie: 'Stratification',
    definition: 'Une classe sociale est un groupe d\'individus ayant une position sociale similaire et partageant des intérêts communs.',
    interpretation: 'Elle crée des inégalités et des hiérarchies dans la société.',
    exemple: 'On parle souvent de classe ouvrière, classe moyenne et classe bourgeoise selon le statut économique.',
    pointsCles: ['Groupe social homogène', 'Crée des inégalités', 'Peut changer selon les critères']
  },
  {
    id: 'mobilite-sociale',
    terme: 'Mobilité sociale',
    categorie: 'Stratification',
    definition: 'La mobilité sociale est la capacité pour un individu ou sa descendance de changer de classe sociale.',
    interpretation: 'Elle mesure l\'égalité des chances et l\'accès à la réussite.',
    exemple: 'Un enfant d\'ouvrier devenant ingénieur connaît une mobilité sociale ascendante.',
    pointsCles: ['Verticale (ascendante/descendante) ou horizontale', 'Liée à l\'égalité', 'Varie selon les pays']
  },
  {
    id: 'inegalite',
    terme: 'Inégalité',
    categorie: 'Stratification',
    definition: 'L\'inégalité est la situation où des individus ne disposent pas des mêmes ressources, droits ou opportunités.',
    interpretation: 'Elle peut être de revenus, de patrimoine, d\'accès à l\'éducation ou d\'opportunités.',
    exemple: 'Un écart de salaires entre deux travailleurs ou un accès différent à l\'éducation constituent des inégalités.',
    pointsCles: ['Multidimensionnelle', 'Peut être réduite par les politiques publiques', 'Important enjeu de cohésion sociale']
  },
  {
    id: 'facteur-production',
    terme: 'Facteurs de production',
    categorie: 'Production',
    definition: 'Les facteurs de production sont les ressources nécessaires pour produire des biens et services.',
    interpretation: 'Ils comprennent le travail, le capital et les ressources naturelles.',
    exemple: 'Pour fabriquer une voiture, il faut du travail (ouvriers), du capital (machines, usine) et des matières premières.',
    pointsCles: ['Travail, capital, terre/ressources', 'Essentiels à la production', 'Leur combinaison crée la richesse']
  },
  {
    id: 'travail-facteur',
    terme: 'Travail (facteur de production)',
    categorie: 'Production',
    definition: 'Le travail est l\'effort humain déployé pour produire des biens ou services.',
    interpretation: 'C\'est l\'une des sources principales de richesse et d\'innovation.',
    exemple: 'Les compétences d\'un ingénieur, d\'un médecin ou d\'un artisan constituent du travail productif.',
    pointsCles: ['Ressource humaine', 'Peut être qualifié ou non qualifié', 'Rémunéré par le salaire']
  },
  {
    id: 'capital-facteur',
    terme: 'Capital (facteur de production)',
    categorie: 'Production',
    definition: 'Le capital comprend l\'ensemble des biens durables (machines, bâtiments) utilisés pour produire.',
    interpretation: 'C\'est l\'accumulation de richesse investie dans la production.',
    exemple: 'Les machines d\'une usine, les outils d\'un artisan, les ordinateurs d\'une entreprise constituent du capital.',
    pointsCles: ['Bien productif', 'Accumule le long du temps', 'Rémunéré par les profits/intérêts']
  },
  {
    id: 'capital-humain',
    terme: 'Capital humain',
    categorie: 'Production',
    definition: 'Le capital humain correspond aux compétences, connaissances et savoir-faire d\'un individu ou d\'une population.',
    interpretation: 'C\'est un facteur clé de productivité et de croissance économique.',
    exemple: 'L\'éducation, la formation professionnelle et l\'expérience augmentent le capital humain.',
    pointsCles: ['Accumule par l\'éducation', 'Augmente la productivité', 'Inégalement réparti']
  },
  {
    id: 'ressources-naturelles',
    terme: 'Ressources naturelles',
    categorie: 'Production',
    definition: 'Les ressources naturelles sont les éléments de la nature utilisés pour la production (terre, eau, minéraux, énergie).',
    interpretation: 'Elles sont essentielles mais limitées, posant des enjeux de durabilité.',
    exemple: 'Le pétrole, le bois, l\'eau douce, les terres cultivables sont des ressources naturelles exploitées.',
    pointsCles: ['Limitées', 'Essentielles à la production', 'Enjeux de développement durable']
  },
  {
    id: 'productivite-du-travail',
    terme: 'Productivité du travail',
    categorie: 'Production',
    definition: 'La productivité du travail mesure la production par unité de travail (par heure ou par personne).',
    formule: 'Productivité = Production totale / Nombre d\'heures travaillées',
    interpretation: 'Elle montre l\'efficacité du travail et dépend des compétences et de la technologie.',
    exemple: 'Si un salarié produit 100 unités en 8 heures, sa productivité est de 12,5 unités par heure.',
    pointsCles: ['Mesure l\'efficacité', 'Dépend de la formation et de l\'équipement', 'Influence les salaires']
  },
  {
    id: 'division-travail',
    terme: 'Division du travail',
    categorie: 'Organisation',
    definition: 'La division du travail est la spécialisation des tâches entre différents travailleurs ou entreprises.',
    interpretation: 'Elle augmente l\'efficacité mais peut créer une interdépendance.',
    exemple: 'Une usine a une division du travail : montage, soudure, peinture sont des postes séparés.',
    pointsCles: ['Augmente la productivité', 'Crée de l\'interdépendance', 'Peut être source d\'aliénation']
  },
  {
    id: 'rendements',
    terme: 'Rendements d\'échelle',
    categorie: 'Production',
    definition: 'Les rendements d\'échelle mesurent comment la production augmente quand tous les facteurs augmentent dans la même proportion.',
    interpretation: 'Ils peuvent être croissants, constants ou décroissants.',
    exemple: 'Si on double l\'usine (double les ouvriers, machines, surface), la production peut plus que doubler (rendements croissants).',
    pointsCles: ['Croissants = augmentation plus que proportionnelle', 'Décroissants = augmentation moins que proportionnelle', 'Affecte l\'efficacité']
  }
];
