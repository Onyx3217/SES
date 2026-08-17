export type SujetTypeBac = {
  id: string;
  typeEpreuve: 'EC1 (Mobilisation des connaissances)' | 'EC2 (Étude de document)' | 'EC3 (Raisonnement documentaire)' | 'Dissertation';
  chapitre: string;
  intituleSujet: string;
  dureeConseillee: string;
  bareme: string;
  consignesOfficielles: string[];
  etapesMethode: {
    etape: string;
    description: string;
    conseils: string;
  }[];
  exempleRedige: {
    plan?: string[];
    introduction?: string;
    developpement: string;
    conclusion?: string;
  };
  piegesAEviter: string[];
};

export const sujetsBacOfficiels: SujetTypeBac[] = [
  {
    id: 'ec1-sources-croissance',
    typeEpreuve: 'EC1 (Mobilisation des connaissances)',
    chapitre: 'Production et création de richesse',
    intituleSujet: 'Montrez comment les gains de productivité favorisent la croissance économique.',
    dureeConseillee: '45 minutes',
    bareme: '4 points',
    consignesOfficielles: [
      'Il est demandé au candidat de répondre à la question posée en mobilisant les connaissances acquises dans le cadre du programme.',
      'Pas d\'introduction formelle ni de plan en deux parties obligatoire : une réponse structurée en 1 à 2 paragraphes argumentés suffit.',
      'Définir impérativement les termes clés dès le début de la réponse.'
    ],
    etapesMethode: [
      {
        etape: '1. Définition des termes clés',
        description: 'Définir clairement la « productivité » (rapport entre la production et les facteurs mis en œuvre) et la « croissance économique » (hausse soutenue du PIB).',
        conseils: 'Prendre 2 lignes au début pour poser le cadre conceptuel.'
      },
      {
        etape: '2. Explicitation des canaux de transmission',
        description: 'Expliquer comment les gains de productivité réduisent les coûts unitaires de production et se diffusent dans l\'économie (salaires, prix, profits).',
        conseils: 'Utiliser des connecteurs logiques de causalité : « par conséquent », « ce qui stimule », « dès lors ».'
      },
      {
        etape: '3. Lien direct avec la croissance',
        description: 'Montrer que la hausse du pouvoir d\'achat et des capacités d\'investissement stimule la demande globale et donc le PIB.',
        conseils: 'Illustrer brièvement par un exemple canonique (fordisme, automatisation).'
      }
    ],
    exempleRedige: {
      developpement: `La productivité mesure l'efficacité de la combinaison productive : les gains de productivité correspondent à une augmentation de la production plus rapide que celle des facteurs de production utilisés (travail et capital). La croissance économique désigne l'augmentation durable de la production globale de biens et services d'un pays, mesurée par le taux de variation du PIB.

Les gains de productivité favorisent la croissance économique à travers trois mécanismes principaux :
1. D'une part, ils réduisent le coût unitaire de production, ce qui permet aux entreprises de baisser leurs prix de vente. Cette baisse des prix accroît le pouvoir d'achat des ménages et stimule la consommation de masse.
2. D'autre part, une partie de la valeur ajoutée supplémentaire peut être redistribuée sous forme de hausses de salaires (ce qui soutient également la demande) et de hausse des profits (excédent brut d'exploitation).
3. Enfin, la hausse des profits permet aux entreprises d'autofinancer de nouveaux investissements productifs et de moderniser leur outil de production. 

La hausse conjointe de la consommation et de l'investissement tire la demande globale, ce qui incite les entreprises à accroître leur niveau de production, générant ainsi de la croissance économique.`
    },
    piegesAEviter: [
      'Oublier de définir les termes centraux du sujet.',
      'Confondre productivité (efficacité par unité de facteur) et production totale (quantité totale produite).',
      'Ne citer qu\'un seul canal (ex: seulement la hausse des salaires) en oubliant la baisse des prix et les profits d\'investissement.'
    ]
  },
  {
    id: 'ec2-lecture-statistique',
    typeEpreuve: 'EC2 (Étude de document)',
    chapitre: 'Diplôme, emploi et salaire',
    intituleSujet: 'À l\'aide du document, vous comparerez le taux de chômage selon le niveau de diplôme et vous présenterez les données pour les non-diplômés et les diplômés du supérieur.',
    dureeConseillee: '45 minutes',
    bareme: '4 points (2 pts pour la question de lecture / 2 pts pour l\'analyse)',
    consignesOfficielles: [
      'Comporter impérativement une phrase de lecture complète pour au moins 2 données significatives du document.',
      'La phrase de lecture doit respecter la règle des 4 éléments : Qui/Où, Quand, Quoi, Valeur avec unité.',
      'Pour la partie analyse : faire des comparaisons chiffrées pertinentes (calculs de coefficients multiplicateurs, écarts en points de %, taux de variation).'
    ],
    etapesMethode: [
      {
        etape: '1. Identifier la nature et les sources du document',
        description: 'Titre, source (ex: INSEE), champ géographique (ex: France métropolitaine), date (ex: 2022) et unité (% de la population active).',
        conseils: 'Ne jamais commencer sans avoir vérifié si les données sont en %, en milliers ou en indice.'
      },
      {
        etape: '2. Rédiger la phrase de lecture type BAC (Question 1)',
        description: 'Rédiger une phrase intégrant : Lieu + Date + Population étudiée + Grandeur + Valeur.',
        conseils: 'Modèle : « Selon l\'INSEE, en France en 2022, sur 100 actifs non diplômés, 16,5 étaient au chômage (soit un taux de chômage de 16,5 %). »'
      },
      {
        etape: '3. Réaliser des calculs statistiques pour l\'analyse (Question 2)',
        description: 'Ne pas se contenter de paraphraser le tableau : calculer un écart en points de % et un coefficient multiplicateur.',
        conseils: 'Ex : « Le taux de chômage des non-diplômés (16,5 %) est 3,3 fois supérieur à celui des diplômés du supérieur (5,0 %), soit un écart de 11,5 points de pourcentage. »'
      }
    ],
    exempleRedige: {
      developpement: `1. Question de lecture des données chiffrées :
Selon l'INSEE, en France en 2022, le taux de chômage des personnes sans diplôme s'élevait à 16,5 % de la population active de cette catégorie (soit environ 17 personnes sur 100 au chômage). À l'inverse, pour les diplômés de l'enseignement supérieur (Bac+2 ou plus), ce taux n'était que de 5,0 %.

2. Analyse et comparaison :
Le document met en évidence une relation inversement proportionnelle très nette entre le niveau de diplôme et l'exposition au chômage :
- Le taux de chômage décroît de manière continue avec l'élévation des qualifications : il passe de 16,5 % pour les sans-diplôme à 9,2 % pour les titulaires d'un CAP/BEP, 7,8 % pour les bacheliers, et enfin 5,0 % pour les diplômés du supérieur.
- Pour mesurer l'ampleur de cette inégalité face à l'emploi, on peut calculer que le taux de chômage des non-diplômés est 3,3 fois supérieur à celui des diplômés du supérieur (16,5 / 5,0 = 3,3), ce qui représente un écart massif de 11,5 points de pourcentage (16,5 − 5,0).

Le diplôme constitue donc un puissant bouclier protecteur contre la privation d'emploi.`
    },
    piegesAEviter: [
      'Dire « 16,5 % des Français sont au chômage » au lieu de préciser « 16,5 % des actifs non-diplômés » (erreur de champ).',
      'Confondre % et points de pourcentage (ex : « il y a 11,5 % d\'écart » est faux, c\'est 11,5 points de %).',
      'Recopier tous les chiffres du tableau sans faire aucun calcul statistique (CM ou écart).'
    ]
  },
  {
    id: 'ec3-raisonnement-cpp',
    typeEpreuve: 'EC3 (Raisonnement documentaire)',
    chapitre: 'Marché concurrentiel (CPP)',
    intituleSujet: 'À l\'aide de vos connaissances et du dossier documentaire, vous montrerez comment le marché concurrentiel alloue efficacement les ressources à travers la formation du prix d\'équilibre.',
    dureeConseillee: '2 heures',
    bareme: '10 points',
    consignesOfficielles: [
      'Le raisonnement doit comporter une brève introduction, un développement structuré en 2 à 3 paragraphes appliquant la règle AEI, et une conclusion.',
      'Obligation d\'utiliser et de citer précisément les documents du dossier en intégrant des données chiffrées traitées.',
      'Appliquer rigoureusement la règle AEI : Affirmer (thèse), Expliciter (mécanisme économique), Illustrer (chiffre du document ou exemple de cours).'
    ],
    etapesMethode: [
      {
        etape: '1. Analyse du sujet et problématique',
        description: 'Dégager les notions (concurrence pure et parfaite, prix d\'équilibre, allocation des ressources, surplus).',
        conseils: 'Problématique type : « En quoi la flexibilité des prix sur un marché concurrentiel permet-elle de maximiser le bien-être collectif et d\'équilibrer l\'offre et la demande ? »'
      },
      {
        etape: '2. Construction des axes (Règle AEI)',
        description: 'Axe 1 : Le mécanisme d\'ajustement par les prix (la loi de l\'offre et de la demande). Axe 2 : La maximisation des gains à l\'échange (surplus du consommateur et du producteur).',
        conseils: 'Chaque paragraphe doit débuter par une affirmation claire.'
      },
      {
        etape: '3. Utilisation obligatoire des documents',
        description: 'Citer les données chiffrées des documents en les reformulant avec la phrase de lecture et des calculs.',
        conseils: 'Ne jamais faire un paragraphe purement documentaire et un paragraphe purement théorique : croiser les deux.'
      }
    ],
    exempleRedige: {
      plan: [
        'I. La formation du prix d\'équilibre comme mécanisme auto-régulateur de l\'offre et de la demande',
        'II. L\'allocation optimale des ressources et la maximisation du bien-être collectif (surplus)'
      ],
      introduction: `Sur un marché en concurrence pure et parfaite où les agents sont « preneurs de prix », la confrontation de l'offre et de la demande détermine spontanément un prix d'équilibre. En quoi ce mécanisme assure-t-il une allocation optimale des ressources rares au sein de l'économie ?`,
      developpement: `I. L'ajustement par les prix permet l'apurement continu des marchés (Règle AEI) :
[Affirmer] Lorsque le marché est libre et flexible, les fluctuations de prix résorbent automatiquement les situations de pénurie ou de surproduction.
[Expliciter] La fonction de demande est décroissante par rapport au prix en raison de la décroissance de l'utilité marginale, tandis que la fonction d'offre est croissante car les entreprises augmentent leur production tant que le prix couvre leur coût marginal croissant. Si le prix est supérieur au prix d'équilibre, il y a un excès d'offre : pour écouler leurs stocks, les offreurs consentent des baisses de prix, ce qui attire de nouveaux demandeurs jusqu'au rétablissement de l'équilibre (P*, Q*).
[Illustrer] Comme le montre le document 1 sur le marché agricole, une hausse temporaire des récoltes entraîne une baisse de 15 % du prix d'équilibre, stimulant la quantité demandée de 12 %, apurant ainsi le marché sans intervention extérieure.

II. L'équilibre concurrentiel maximise le bien-être global et les gains à l'échange :
[Affirmer] Le marché concurrentiel réalise une allocation optimale des ressources au sens de Pareto en maximisant le surplus total.
[Expliciter] Le surplus du consommateur correspond à la différence entre son consentement maximal à payer et le prix de marché effectif. De même, le surplus du producteur mesure la différence entre le prix de vente perçu et le prix minimal auquel il était prêt à céder son bien (son coût marginal). À l'équilibre concurrentiel, la somme de ces deux surplus (le surplus collectif) atteint son niveau maximal possible.
[Illustrer] D'après le graphique du document 2, à l'équilibre fixé à 40 € pour 1 000 unités, le surplus total s'élève à 25 000 €, garantissant des gains mutuels à l'échange pour l'ensemble des participants.`,
      conclusion: `En conclusion, le marché concurrentiel assure une allocation efficace des ressources grâce au signal-prix qui oriente la production vers les besoins solvables et maximise le bien-être collectif.`
    },
    piegesAEviter: [
      'Oublier d\'exploiter les documents ou les citer sans interprétation statistique.',
      'Ne pas faire de transition entre les deux grandes parties.',
      'Oublier de mentionner les hypothèses de la CPP (atomicité, homogénéité, transparence).'
    ]
  }
];
