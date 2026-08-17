export type EtapeMecanisme = {
  ordre: number;
  titre: string;
  explication: string;
  impact: string;
};

export type SchemaCausal = {
  id: string;
  titre: string;
  discipline: 'Science économique' | 'Sociologie et science politique' | 'Regards croisés';
  chapitre: string;
  problemePose: string;
  etapes: EtapeMecanisme[];
  consequenceFinale: string;
  piegeOuNuance: string;
  exempleConcret: string;
};

export const mecanismesData: SchemaCausal[] = [
  {
    id: 'boucle-productivite',
    titre: 'La boucle vertueuse des gains de productivité',
    discipline: 'Science économique',
    chapitre: 'Production et création de richesse',
    problemePose: 'Comment les gains de productivité stimulent-ils la croissance économique et le pouvoir d\'achat ?',
    etapes: [
      {
        ordre: 1,
        titre: 'Innovation & Progrès technique',
        explication: 'L\'entreprise modernise son capital ou forme ses salariés (hausse de la productivité du travail et du capital).',
        impact: 'Baisse du coût unitaire de production.'
      },
      {
        ordre: 2,
        titre: 'Partage des gains de productivité',
        explication: 'La richesse supplémentaire est répartie entre : baisse des prix de vente, hausse des salaires, et hausse des profits d\'entreprise.',
        impact: 'Triple effet positif sur les agents économiques.'
      },
      {
        ordre: 3,
        titre: 'Hausse de la demande globale',
        explication: 'La baisse des prix et la hausse des salaires augmentent le pouvoir d\'achat (consommation) ; les profits permettent l\'autofinancement (investissement).',
        impact: 'Stimulation des carnets de commandes.'
      },
      {
        ordre: 4,
        titre: 'Augmentation de la production et de l\'emploi',
        explication: 'Pour répondre à cette hausse de la demande, les entreprises accroissent leur volume de production (hausse du PIB).',
        impact: 'Croissance économique durable.'
      }
    ],
    consequenceFinale: 'La productivité est le moteur à long terme de l\'élévation du niveau de vie et de la croissance économique.',
    piegeOuNuance: 'À court terme, les gains de productivité peuvent détruire certains emplois peu qualifiés avant d\'en créer de nouveaux plus qualifiés (thèse du déversement d\'Alfred Sauvy).',
    exempleConcret: 'L\'automatisation de la fabrication automobile a réduit le prix des véhicules tout en augmentant les salaires ouvriers sous le fordisme.'
  },
  {
    id: 'creation-monetaire-credit',
    titre: 'Le circuit de la création et destruction monétaire',
    discipline: 'Science économique',
    chapitre: 'Monnaie et création monétaire',
    problemePose: 'Comment la monnaie apparaît-elle et disparaît-elle dans le système bancaire ?',
    etapes: [
      {
        ordre: 1,
        titre: 'Demande de crédit par un agent',
        explication: 'Un ménage ou une entreprise sollicite un prêt pour financer un investissement ou un achat immobilier.',
        impact: 'Besoin de financement externe exprimé.'
      },
      {
        ordre: 2,
        titre: 'Création monétaire ex nihilo par la banque',
        explication: 'La banque commerciale crédite le compte du client par un simple jeu d\'écriture (« les crédits font les dépôts »).',
        impact: 'Augmentation de la masse monétaire en circulation.'
      },
      {
        ordre: 3,
        titre: 'Utilisation de la monnaie dans l\'économie',
        explication: 'L\'emprunteur dépense les fonds pour acheter des biens d\'équipement, payer des salaires ou construire un logement.',
        impact: 'Activité économique réelle stimulée.'
      },
      {
        ordre: 4,
        titre: 'Remboursement du capital et destruction',
        explication: 'Au fur et à mesure des mensualités remboursées, le capital emprunté est détruit au bilan de la banque (seuls les intérêts sont conservés comme chiffre d\'affaires).',
        impact: 'Destruction monétaire compensatrice.'
      }
    ],
    consequenceFinale: 'La masse monétaire s\'accroît tant que le flux de nouveaux crédits dépasse le flux des remboursements.',
    piegeOuNuance: 'Ce ne sont pas les dépôts préalables des épargnants qui permettent les crédits, mais l\'inverse : les banques créent la monnaie scripturale à partir de rien lors du prêt.',
    exempleConcret: 'Un prêt immobilier de 200 000 € injecte immédiatement 200 000 € de monnaie scripturale neuve sur le compte du vendeur de la maison.'
  },
  {
    id: 'choc-offre-negatif-spirale',
    titre: 'Choc d\'offre négatif et spirale inflationniste',
    discipline: 'Science économique',
    chapitre: 'Marché et fixation des prix',
    problemePose: 'Comment une flambée du coût de l\'énergie ou des matières premières se propage-t-elle à l\'ensemble de l\'économie ?',
    etapes: [
      {
        ordre: 1,
        titre: 'Hausse brutale des coûts de production (Choc d\'offre)',
        explication: 'Augmentation imprévue du prix du pétrole, du gaz ou des matières premières importées.',
        impact: 'Déplacement de la courbe d\'offre vers la gauche.'
      },
      {
        ordre: 2,
        titre: 'Répercussion sur les prix de vente',
        explication: 'Pour préserver leurs marges, les entreprises augmentent leurs prix de vente aux consommateurs.',
        impact: 'Hausse de l\'indice des prix à la consommation (Inflation).'
      },
      {
        ordre: 3,
        titre: 'Revendications salariales (Boucle Prix-Salaires)',
        explication: 'Face à la perte de pouvoir d\'achat, les salariés négocient des augmentations de salaire.',
        impact: 'Nouvelle hausse des coûts salariaux pour les entreprises.'
      },
      {
        ordre: 4,
        titre: 'Réaction de la Banque Centrale',
        explication: 'La Banque centrale relève ses taux d\'intérêt directeurs pour freiner le crédit et ralentir la demande.',
        impact: 'Ralentissement de l\'activité économique pour stabiliser les prix.'
      }
    ],
    consequenceFinale: 'Le choc d\'offre entraîne un risque de « stagflation » (inflation élevée combinée à une faible croissance).',
    piegeOuNuance: 'Une hausse ponctuelle d\'un prix n\'est pas de l\'inflation : l\'inflation est une hausse cumulative et auto-entretenue du niveau général des prix.',
    exempleConcret: 'Le choc énergétique européen de 2022 consécutif aux tensions géopolitiques sur le gaz naturel.'
  },
  {
    id: 'reproduction-sociale-habitus',
    titre: 'La reproduction sociale par l\'habitus et le capital culturel',
    discipline: 'Sociologie et science politique',
    chapitre: 'Socialisation et configurations familiales',
    problemePose: 'Comment les inégalités scolaires et sociales se perpétuent-elles d\'une génération à la suivante ?',
    etapes: [
      {
        ordre: 1,
        titre: 'Socialisation primaire et dotation en capital culturel',
        explication: 'Au sein de la famille, l\'enfant intériorise dès le plus jeune âge un habitus (façons de parler, goûts, posture) et un capital culturel incorporé.',
        impact: 'Acquisition inconsciente de dispositions culturelles distinctes selon le milieu.'
      },
      {
        ordre: 2,
        titre: 'L\'école comme instance de sélection',
        explication: 'L\'institution scolaire évalue tous les élèves selon les normes de la culture légitime des classes dominantes, sous couvert de neutralité méritocratique.',
        impact: 'Avantage comparatif implicite pour les enfants des milieux favorisés.'
      },
      {
        ordre: 3,
        titre: 'Démultiplication des réussites et des diplômes',
        explication: 'Les élèves dotés du capital culturel requis réussissent mieux les épreuves d\'abstraction et s\'orientent vers les filières les plus prestigieuses.',
        impact: 'Obtention de diplômes de haut rang.'
      },
      {
        ordre: 4,
        titre: 'Accès aux positions sociales supérieures',
        explication: 'Les diplômes et le capital social familial ouvrent l\'accès aux postes de cadres et de dirigeants.',
        impact: 'Reproduction de la structure sociale hiérarchique.'
      }
    ],
    consequenceFinale: 'L\'école transforme des privilèges sociaux hérités en « mérites scolaires » individuels (théorie de Bourdieu et Passeron).',
    piegeOuNuance: 'La reproduction n\'est pas mécanique à 100 % : il existe des « transfuges de classe » ou des parcours de mobilité sociale ascendante grâce à l\'effort ou des configurations familiales atypiques.',
    exempleConcret: 'La surreprésentation des enfants de cadres et d\'enseignants dans les grandes écoles (Polytechnique, ENS, ENA/INSP).'
  },
  {
    id: 'paradoxe-olson-action-collective',
    titre: 'Le paradoxe de l\'action collective et ses solutions',
    discipline: 'Sociologie et science politique',
    chapitre: 'Engagement politique',
    problemePose: 'Pourquoi les individus rationnels s\'abstiennent-ils souvent de militer, et comment les mouvements sociaux réussissent-ils néanmoins à émerger ?',
    etapes: [
      {
        ordre: 1,
        titre: 'Calcul coût / avantage individuel',
        explication: 'Participer à une grève coûte du temps et de l\'argent (perte de salaire), avec un risque de sanctions.',
        impact: 'Coût individuel certain.'
      },
      {
        ordre: 2,
        titre: 'Caractère de bien public de la victoire',
        explication: 'Si le mouvement gagne (ex: hausse de salaire générale), tous les salariés en profitent, qu\'ils aient fait grève ou non.',
        impact: 'Tentation rationnelle du passager clandestin (Free rider).'
      },
      {
        ordre: 3,
        titre: 'Mise en place d\'incitations sélectives',
        explication: 'Le syndicat réserve certains avantages matériels ou services juridiques uniquement à ses membres cotisants.',
        impact: 'Compensation du coût de l\'adhésion.'
      },
      {
        ordre: 4,
        titre: 'Mobilisation des rétributions symboliques',
        explication: 'L\'engagement procure un sentiment d\'appartenance, de dignité, de fierté collective et de reconnaissance sociale.',
        impact: 'Dépassement du calcul égoïste strict.'
      }
    ],
    consequenceFinale: 'Les organisations qui durent sont celles qui savent combiner incitations matérielles et sociabilité valorisante.',
    piegeOuNuance: 'La théorie du choix rationnel d\'Olson sous-estime parfois la force des convictions morales, de l\'indignation et des émotions dans le passage à l\'acte politique.',
    exempleConcret: 'Dans les pays scandinaves (système de Gand), l\'assurance chômage est gérée par les syndicats, ce qui pousse plus de 70 % des salariés à se syndiquer (incitation sélective forte).'
  }
];
