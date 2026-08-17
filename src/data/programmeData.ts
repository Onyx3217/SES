export type ChapitreProgramme = {
  id: string;
  titre: string;
  questionOfficielle: string;
  discipline: 'Science économique' | 'Sociologie et science politique' | 'Regards croisés';
  niveau: 'Seconde' | 'Première';
  objectifs: string[];
  notionsCles: string[]; // IDs or terms in glossary
  calculsAssocies: string[]; // IDs in calculsCatalog
};

export const programmeOfficiel: ChapitreProgramme[] = [
  // ================= SECONDE =================
  {
    id: "sec-eco-1",
    titre: "Production et création de richesse",
    questionOfficielle: "Comment produit-on des biens et des services et comment les mesure-t-on ?",
    discipline: "Science économique",
    niveau: "Seconde",
    objectifs: [
      "Distinguer production marchande et non marchande, biens et services.",
      "Connaître les différents acteurs productifs (entreprises privées, publiques, ESS, APU).",
      "Comprendre la combinaison des facteurs de production (travail, capital, ressources).",
      "Calculer et interpréter le chiffre d'affaires, les consommations intermédiaires, la valeur ajoutée et le PIB."
    ],
    notionsCles: ["valeur-ajoutee", "ca", "benefice", "ebe", "facteurs-production", "consommation-intermediaire", "pib", "productivite"],
    calculsAssocies: ["valeur-ajoutee", "pib-approche-production", "pib-par-habitant", "taux-croissance-pib"]
  },
  {
    id: "sec-eco-2",
    titre: "Marché et fixation des prix",
    questionOfficielle: "Comment se forment les prix sur un marché ?",
    discipline: "Science économique",
    niveau: "Seconde",
    objectifs: [
      "Comprendre le fonctionnement d'un marché avec offre et demande.",
      "Analyser comment le prix d'équilibre équilibre les quantités offertes et demandées.",
      "Comprendre les effets d'un choc d'offre, d'un choc de demande ou d'une taxe/subvention.",
      "Mesurer la sensibilité des acheteurs avec l'élasticité-prix."
    ],
    notionsCles: ["marche", "offre", "demande", "prix-equilibre", "elasticite-prix", "preneur-prix", "surplus"],
    calculsAssocies: ["prix-quantite-equilibre", "elasticite-prix-demande", "surplus-consommateur-producteur"]
  },
  {
    id: "sec-socio-1",
    titre: "Socialisation et acteurs sociaux",
    questionOfficielle: "Comment devenons-nous des acteurs sociaux ?",
    discipline: "Sociologie et science politique",
    niveau: "Seconde",
    objectifs: [
      "Comprendre comment la socialisation primaire façonne les manières de penser et d'agir.",
      "Identifier les instances de socialisation (famille, école, pairs, médias).",
      "Analyser les effets de la socialisation différentielle selon le genre et le milieu social.",
      "Étudier les processus d'inculcation, d'imprégnation et d'imitation."
    ],
    notionsCles: ["socialisation-primaire", "normes", "valeurs", "roles-sociaux", "socialisation-differentielle", "reproduction-sociale"],
    calculsAssocies: ["proportion", "taux-de-variation"]
  },
  {
    id: "sec-pol-1",
    titre: "Organisation de la vie politique",
    questionOfficielle: "Comment s'organise la vie politique ?",
    discipline: "Sociologie et science politique",
    niveau: "Seconde",
    objectifs: [
      "Connaître les institutions politiques et le principe de séparation des pouvoirs.",
      "Distinguer les modes de scrutin (majoritaire, proportionnel).",
      "Analyser la participation électorale, l'abstention et l'inscription sur les listes électorales."
    ],
    notionsCles: ["pouvoir-politique", "etat", "democratie-representative", "scrutin-majoritaire", "scrutin-proportionnel", "participation-politique"],
    calculsAssocies: ["taux-de-participation-abstention", "taux-d-inscription"]
  },
  {
    id: "sec-croises-1",
    titre: "Diplôme, emploi et salaire",
    questionOfficielle: "Quelles relations entre le diplôme, l'emploi et le salaire ?",
    discipline: "Regards croisés",
    niveau: "Seconde",
    objectifs: [
      "Comprendre le rôle du capital humain et du niveau de diplôme dans l'accès à l'emploi et au niveau de salaire.",
      "Analyser le risque de chômage et de déclassement selon les qualifications.",
      "Distinguer salaire brut, salaire net et cotisations sociales."
    ],
    notionsCles: ["capital-humain", "qualification", "salaire-brut", "salaire-net", "smic", "chomage", "declassement"],
    calculsAssocies: ["salaire-net-a-partir-du-brut", "taux-de-chomage-bit", "taux-d-emploi", "taux-d-activite"]
  },

  // ================= PREMIÈRE =================
  {
    id: "prem-eco-1",
    titre: "Marché concurrentiel (CPP)",
    questionOfficielle: "Comment un marché concurrentiel fonctionne-t-il ?",
    discipline: "Science économique",
    niveau: "Première",
    objectifs: [
      "Maîtriser les 5 conditions de la Concurrence Pure et Parfaite (atomicité, homogénéité, libre entrée, transparence, mobilité).",
      "Analyser les courbes d'offre et de demande et leurs déterminants.",
      "Comprendre la maximisation du profit par l'égalité Prix = Coût marginal.",
      "Calculer le surplus du consommateur, le surplus du producteur et les gains à l'échange."
    ],
    notionsCles: ["cpp", "atomicite", "cout-marginal", "cout-moyen", "recette-marginale", "surplus", "gains-echange"],
    calculsAssocies: ["cout-marginal", "prix-quantite-equilibre", "surplus-consommateur-producteur", "profit"]
  },
  {
    id: "prem-eco-2",
    titre: "Marchés imparfaitement concurrentiels",
    questionOfficielle: "Comment les marchés imparfaitement concurrentiels fonctionnent-ils ?",
    discipline: "Science économique",
    niveau: "Première",
    objectifs: [
      "Comprendre les structures de marché : monopole (naturel, d'innovation, légal) et oligopole.",
      "Analyser les barrières à l'entrée et le pouvoir de marché (faiseur de prix).",
      "Étudier les ententes illicites (cartels) à l'aide du dilemme du prisonnier.",
      "Comprendre les objectifs de la politique de la concurrence."
    ],
    notionsCles: ["monopole", "oligopole", "cartel", "pouvoir-marche", "barriere-entree", "politique-concurrence", "dilemme-prisonnier"],
    calculsAssocies: ["profit", "elasticite-prix-demande"]
  },
  {
    id: "prem-eco-3",
    titre: "Défaillances du marché",
    questionOfficielle: "Quelles sont les principales défaillances du marché ?",
    discipline: "Science économique",
    niveau: "Première",
    objectifs: [
      "Identifier les externalités positives et négatives et leurs solutions (taxe pigouvienne, quotas, subventions).",
      "Distinguer biens publics / collectifs et biens communs (tragédie des biens communs).",
      "Analyser les asymétries d'information : antisélection (Akerlof) et aléa moral."
    ],
    notionsCles: ["externalite", "bien-collectif", "bien-commun", "passager-clandestin", "asymetrie-information", "antiselection", "alea-moral"],
    calculsAssocies: ["proportion", "taux-de-variation"]
  },
  {
    id: "prem-eco-4",
    titre: "Financement de l'économie",
    questionOfficielle: "Comment les agents économiques se financent-ils ?",
    discipline: "Science économique",
    niveau: "Première",
    objectifs: [
      "Distinguer capacité et besoin de financement chez les ménages, entreprises et administrations.",
      "Comparer financement interne (autofinancement) et financement externe (crédit bancaire vs marché financier : actions, obligations).",
      "Calculer le taux d'épargne, le taux d'intérêt réel et analyser le solde budgétaire et la dette publique."
    ],
    notionsCles: ["capacite-financement", "besoin-financement", "autofinancement", "actions", "obligations", "taux-interet-reel", "deficit-public", "dette-publique"],
    calculsAssocies: ["capacite-besoin-financement", "taux-d-epargne", "taux-interet-reel-nominal", "solde-budgetaire-etat"]
  },
  {
    id: "prem-eco-5",
    titre: "Monnaie et création monétaire",
    questionOfficielle: "Qu'est-ce que la monnaie et comment est-elle créée ?",
    discipline: "Science économique",
    niveau: "Première",
    objectifs: [
      "Connaître les fonctions et formes de la monnaie (divisionnaire, fiduciaire, scripturale).",
      "Comprendre le pouvoir créateur des banques commerciales par le crédit ('les crédits font les dépôts').",
      "Analyser le rôle de la Banque centrale (taux directeur, réserves obligatoires, maîtrise de l'inflation)."
    ],
    notionsCles: ["fonctions-monnaie", "monnaie-scripturale", "creation-monetaire", "banque-centrale", "taux-directeur", "inflation"],
    calculsAssocies: ["creation-monetaire-credit", "valeur-nominale-reelle"]
  },
  {
    id: "prem-socio-1",
    titre: "Socialisation et configurations familiales",
    questionOfficielle: "Comment la socialisation de l'enfant s'effectue-t-elle ?",
    discipline: "Sociologie et science politique",
    niveau: "Première",
    objectifs: [
      "Analyser les effets de la diversité des configurations familiales sur la socialisation de l'enfant.",
      "Comprendre la notion d'habitus et les dispositions durables (Bourdieu).",
      "Étudier les cas de socialisation plurielle, de dissonances culturelles et de transclasses."
    ],
    notionsCles: ["configurations-familiales", "habitus", "socialisation-plurielle", "dissonance-culturelle", "transfuge-classe"],
    calculsAssocies: ["proportion", "moyenne-arithmetique", "mediane"]
  },
  {
    id: "prem-socio-2",
    titre: "Réseaux sociaux et sociabilité",
    questionOfficielle: "Comment les processus de socialisation et de sociabilité contribuent-ils à la structuration sociale ?",
    discipline: "Sociologie et science politique",
    niveau: "Première",
    objectifs: [
      "Comprendre les concepts de réseau social et de capital social.",
      "Distinguer liens forts et liens faibles (Granovetter : force des liens faibles dans l'accès à l'emploi).",
      "Analyser l'impact du numérique sur la sociabilité contemporaine."
    ],
    notionsCles: ["capital-social", "reseau-social", "liens-forts-faibles", "homophilie", "sociabilite-numerique"],
    calculsAssocies: ["proportion", "taux-de-variation"]
  },
  {
    id: "prem-socio-3",
    titre: "Opinion publique et sondages",
    questionOfficielle: "Comment l'opinion publique se forme-t-elle et est-elle mesurée ?",
    discipline: "Sociologie et science politique",
    niveau: "Première",
    objectifs: [
      "Comprendre l'émergence historique de l'opinion publique et de la démocratie d'opinion.",
      "Analyser les techniques de sondage (échantillonnage représentatif, méthode des quotas, marge d'erreur).",
      "Étudier les effets des sondages sur la vie politique et la mise à l'agenda médiatique."
    ],
    notionsCles: ["opinion-publique", "sondages", "methode-quotas", "democratie-opinion", "mise-a-agenda"],
    calculsAssocies: ["proportion", "indice-base-100"]
  },
  {
    id: "prem-pol-1",
    titre: "Engagement politique",
    questionOfficielle: "De quelle manière l'engagement politique prend-il forme aujourd'hui ?",
    discipline: "Sociologie et science politique",
    niveau: "Première",
    objectifs: [
      "Distinguer les formes conventionnelles (vote, adhésion) et non conventionnelles (manifestations, boycott, consommation engagée).",
      "Comprendre le paradoxe d'Olson (passager clandestin) et ses solutions (rétributions symboliques, incitations sélectives).",
      "Analyser les déterminants sociaux de l'engagement (âge, genre, CSP, diplôme)."
    ],
    notionsCles: ["engagement-politique", "militantisme", "paradoxe-olson", "retributions-symboliques", "consommation-engagee"],
    calculsAssocies: ["taux-de-participation-abstention", "taux-d-inscription", "proportion"]
  },
  {
    id: "prem-croises-1",
    titre: "Protection sociale et gestion des risques",
    questionOfficielle: "Comment l'assurance et l'assistance contribuent-elles à la protection sociale ?",
    discipline: "Regards croisés",
    niveau: "Première",
    objectifs: [
      "Connaître les principaux risques sociaux (maladie, retraite/vieillesse, chômage, famille, dépendance).",
      "Distinguer la logique d'assurance (Bismarck) et la logique d'assistance (Beveridge).",
      "Analyser la redistribution verticale (réduction des inégalités) et horizontale (solidarité face aux risques)."
    ],
    notionsCles: ["protection-sociale", "risques-sociaux", "assurance-sociale", "assistance-sociale", "redistribution-verticale", "etat-providence"],
    calculsAssocies: ["salaire-net-a-partir-du-brut", "proportion", "taux-de-variation"]
  },
  {
    id: "prem-croises-2",
    titre: "Organisation et gouvernance d'entreprise",
    questionOfficielle: "Comment les entreprises sont-elles gouvernées et organisées ?",
    discipline: "Regards croisés",
    niveau: "Première",
    objectifs: [
      "Analyser les conflits et coopérations entre les parties prenantes (actionnaires, dirigeants, salariés, clients, fournisseurs).",
      "Comparer gouvernance actionnariale et gouvernance partenariale.",
      "Comprendre les enjeux de la RSE (Responsabilité Sociétale des Entreprises) et du dialogue social."
    ],
    notionsCles: ["gouvernance-entreprise", "parties-prenantes", "actionnaires", "theorie-agence", "rse", "dialogue-social"],
    calculsAssocies: ["profit", "valeur-ajoutee"]
  }
];
