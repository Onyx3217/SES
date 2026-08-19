export type NotebookSource = {
  id: string;
  titre: string;
  chapitre: string;
  classe: 'Seconde' | 'Première' | 'Tous';
  discipline: 'Économie' | 'Sociologie' | 'Regards croisés' | 'Méthode';
  resume: string;
  contenuComplet: string;
  notionsCles: string[];
  formulesAssociees?: string[];
  citationsAuteurs?: string[];
  estActif: boolean;
};

export const defaultNotebookSources: NotebookSource[] = [
  {
    id: 'source-marche-cpp',
    titre: 'Le marché concurrentiel et la formation des prix',
    chapitre: 'Marché et concurrence',
    classe: 'Première',
    discipline: 'Économie',
    resume: "Fonctionnement du modèle de concurrence pure et parfaite (CPP), loi de l'offre et de la demande, élasticités, surplus du consommateur et du producteur, et gains à l'échange.",
    contenuComplet: `### 1. Le modèle de concurrence pure et parfaite (CPP)
Le marché concurrentiel repose sur 5 hypothèses théoriques :
1. **Atomicité** : Grand nombre d'acheteurs et d'offreurs de petite taille, aucun n'a de pouvoir de marché (preneurs de prix).
2. **Homogénéité** : Les produits sont jugés identiques par les acheteurs, la concurrence se fait uniquement par les prix.
3. **Libre entrée et sortie** : Absence de barrières à l'entrée (légales, techniques ou financières).
4. **Transparence de l'information** : L'information sur les prix et la qualité est gratuite, complète et instantanée.
5. **Mobilité parfaite des facteurs** : Le travail et le capital se déplacent instantanément vers les activités les plus rentables.

### 2. La loi de l'offre et de la demande
- **Courbe de demande** : Fonction décroissante du prix. Plus le prix est élevé, moins les consommateurs demandent le bien (effet revenu et effet substitution).
- **Courbe d'offre** : Fonction croissante du prix. Plus le prix est élevé, plus les producteurs sont incités à offrir une quantité importante pour maximiser leur profit (égalisation Prix = Coût marginal).
- **Prix d'équilibre ($P^*$)** : Prix pour lequel la quantité offerte est exactement égale à la quantité demandée.

### 3. Surplus et gains à l'échange
- **Surplus du consommateur** : Différence entre le prix maximal qu'un consommateur était prêt à payer (prix de réserve) et le prix effectivement payé à l'équilibre.
- **Surplus du producteur** : Différence entre le prix de vente effectif du marché et le prix minimal auquel le producteur était prêt à céder son bien.
- **Surplus total** : Somme des deux surplus. À l'équilibre concurrentiel, le surplus total est maximisé : c'est l'optimum économique.

### 4. Effets des taxes et régulations
L'introduction d'une taxe forfaitaire unitaire déplace la courbe d'offre vers le haut, élève le prix payé par les consommateurs, réduit le prix perçu par les producteurs, et génère une perte sèche pour la collectivité.`,
    notionsCles: ['Concurrence pure et parfaite', 'Preneur de prix', 'Prix d\'équilibre', 'Surplus du consommateur', 'Surplus du producteur', 'Perte sèche'],
    formulesAssociees: ['Surplus = 0.5 × Base × Hauteur', 'Élasticité-prix = %Δ Demande / %Δ Prix'],
    citationsAuteurs: ["Adam Smith : « Ce n'est pas de la bienveillance du boucher que nous attendons notre dîner, mais de leur souci de leur propre intérêt. »"],
    estActif: true,
  },
  {
    id: 'source-monnaie-credit',
    titre: 'La monnaie, le financement et la création monétaire',
    chapitre: 'Monnaie et financement',
    classe: 'Première',
    discipline: 'Économie',
    resume: "Formes de la monnaie, rôle des banques de second rang, mécanisme de création monétaire par le crédit (ex-nihilo) et régulation par la Banque Centrale Européenne (BCE).",
    contenuComplet: `### 1. Qu'est-ce que la monnaie ?
La monnaie remplit trois fonctions économiques fondamentales :
1. **Unité de compte** : Elle permet de mesurer et comparer la valeur de tous les biens et services (étalon des prix).
2. **Intermédiaire des échanges** : Elle permet d'acheter n'importe quel bien en évitant la double coïncidence des besoins du troc.
3. **Réserve de valeur** : Elle permet de conserver du pouvoir d'achat dans le temps (épargne liquide).

### 2. Les formes de la monnaie
- **Monnaie fiduciaire** : Billets de banque et pièces divisionnaires (moins de 10 % de la masse monétaire).
- **Monnaie scripturale** : Avoirs inscrits sur les comptes de dépôts à vue dans les banques commerciales (plus de 90 % de la masse monétaire).

### 3. Comment la monnaie est-elle créée ?
La création monétaire moderne est principalement réalisée par les **banques commerciales** lorsqu'elles accordent des crédits aux ménages, aux entreprises ou aux administrations :
- Règle fondamentale : **« Les crédits font les dépôts »**. La banque n'attend pas d'avoir des dépôts pour prêter : elle crée la monnaie scripturale par un simple jeu d'écritures comptables (création ex-nihilo).
- **Destruction monétaire** : Lorsque l'emprunteur rembourse son crédit, la monnaie créée est détruite. La masse monétaire nette augmente si le flux de nouveaux crédits dépasse le flux de remboursements.

### 4. Le rôle régulateur de la Banque Centrale
La Banque centrale contrôle la création monétaire par :
- **Les taux directeurs** : Le taux de refinancement fixe le coût auquel les banques commerciales se procurent des liquidités (monnaie centrale).
- **Les réserves obligatoires** : Pourcentage des dépôts que les banques doivent obligatoirement bloquer à la Banque centrale.`,
    notionsCles: ['Monnaie scripturale', 'Création monétaire ex-nihilo', '« Les crédits font les dépôts »', 'Banque centrale', 'Taux directeur', 'Masse monétaire'],
    formulesAssociees: ['Taux d\'intérêt réel = Taux nominal − Inflation'],
    citationsAuteurs: ["John Maynard Keynes : « La monnaie est un pont entre le présent et l'avenir. »"],
    estActif: true,
  },
  {
    id: 'source-socialisation-comportements',
    titre: 'La socialisation et la construction des identités sociales',
    chapitre: 'Socialisation et culture',
    classe: 'Seconde',
    discipline: 'Sociologie',
    resume: "Processus d'inculcation et d'imprégnation des normes et valeurs, socialisation primaire vs secondaire, socialisation différenciée selon le genre et le milieu social, et reproduction sociale.",
    contenuComplet: `### 1. Définition de la socialisation
La socialisation est le processus continu par lequel un individu apprend, intériorise et fait siens les **normes** (règles de conduite), les **valeurs** (idéaux collectifs) et les **rôles sociaux** propres à la société ou au groupe auquel il appartient.

### 2. Modalités de la socialisation
La socialisation s'effectue par :
- **Inculcation explicite** : Transmission directe d'ordres, d'interdictions et de sanctions positives ou négatives (ex : « Dis bonjour », « Range ta chambre »).
- **Imprégnation / Imitation** : Intériorisation inconsciente et diffuse par observation des modèles comportementaux de l'entourage.
- **Interaction** : Négociation et ajustement des conduites au contact des pairs.

### 3. Socialisation primaire et secondaire
- **Socialisation primaire** : Durant l'enfance et l'adolescence. Instances principales : la famille, l'école, le groupe de pairs et les médias. Elle est très prégnante et forge l'identité de base (habitus primaire).
- **Socialisation secondaire** : À l'âge adulte (socialisation professionnelle, conjugale, politique, associative). Elle s'articule avec la socialisation primaire soit en continuité, soit en rupture.

### 4. Une socialisation différenciée
- **Selon le genre** : Les filles et les garçons sont orientés vers des jeux, des attitudes (douceur vs force), et des choix d'études distincts par des stéréotypes de genre.
- **Selon le milieu social** : Pierre Bourdieu montre que les familles transmettent inégalement du **capital culturel** (langage, goûts artistiques, familiarité scolaire), ce qui favorise la reproduction des positions sociales dominantes.`,
    notionsCles: ['Socialisation primaire', 'Socialisation secondaire', 'Normes et valeurs', 'Rôles sociaux', 'Capital culturel', 'Socialisation de genre', 'Pierre Bourdieu'],
    citationsAuteurs: [
      "Émile Durkheim : « La société ne peut vivre que s'il existe entre ses membres une suffisante homogénéité : l'éducation perpétue et renforce cette homogénéité. »",
      "Pierre Bourdieu : « L'habitus est une structure structurée prédisposée à fonctionner comme structure structurante. »"
    ],
    estActif: true,
  },
  {
    id: 'source-entreprise-valeur-ajoutee',
    titre: "L'entreprise, les facteurs de production et le partage de la valeur ajoutée",
    chapitre: 'Entreprise et production',
    classe: 'Seconde',
    discipline: 'Économie',
    resume: "Combinaison productive (travail et capital), productivité, distinction fondamentale entre chiffre d'affaires, valeur ajoutée et bénéfice, et conflit de répartition de la VA.",
    contenuComplet: `### 1. La combinaison productive
Pour produire des biens et services, une entreprise combine deux facteurs de production principaux :
- **Le facteur Travail** : Activité humaine rémunérée (nombre d'heures ou d'employés, qualification).
- **Le facteur Capital** : Ensemble des biens durables utilisés dans le processus de production (machines, bâtiments, logiciels).
Les facteurs peuvent être **substituables** (remplacer des ouvriers par des robots) ou **complémentaires** (un chauffeur pour un camion).

### 2. Mesurer la création de richesse : La Valeur Ajoutée (VA)
Il ne faut jamais confondre :
- **Chiffre d'affaires (CA)** = Montant total des ventes (Prix × Quantité).
- **Consommations intermédiaires (CI)** = Biens et services détruits ou incorporés durant la production (matières premières, électricité, sous-traitance).
- **Valeur Ajoutée (VA)** = Richesse réelle créée par l'entreprise :
  VA = Chiffre d'affaires − Consommations intermédiaires

### 3. Le partage de la Valeur Ajoutée
La valeur ajoutée créée est répartie entre les différents contributeurs :
1. **Les salariés** : Rémunérations (salaires bruts + cotisations sociales patronales) ~ 60-65 % de la VA.
2. **L'État** : Impôts sur la production nets de subventions.
3. **L'entreprise (Excédent Brut d'Exploitation - EBE)** : Sert à payer les intérêts des banques, les dividendes des actionnaires, l'impôt sur les sociétés et l'autofinancement (investissements futurs).

Le partage de la VA fait l'objet d'un conflit de répartition permanent entre travail (salaires) et capital (profits/EBE).`,
    notionsCles: ['Facteur travail', 'Facteur capital', 'Consommations intermédiaires', 'Valeur ajoutée', 'EBE', 'Partage de la VA'],
    formulesAssociees: ['VA = CA − Consommations intermédiaires', 'EBE = VA − Salaires & Charges − Impôts production'],
    citationsAuteurs: ["Karl Marx : « Le capital est du travail mort qui ne s'anime qu'en suçant le travail vivant. »"],
    estActif: true,
  },
  {
    id: 'source-action-collective-politique',
    titre: "L'action collective, l'engagement politique et le vote",
    chapitre: 'Science politique',
    classe: 'Première',
    discipline: 'Sociologie',
    resume: "Formes de l'engagement politique (conventionnel vs non conventionnel), le paradoxe d'Olson (passager clandestin), les incitations sélectives, et les variables explicatives du vote.",
    contenuComplet: `### 1. Les formes d'engagement politique
L'engagement politique prend des formes multiples :
- **Formes conventionnelles** : Liées au processus électoral (voter, adhérer à un parti politique, militer dans une campagne électorale).
- **Formes non conventionnelles** : Légales (manifestations, pétitions, grèves, boycott) ou illégales / transgressives (occupations de lieux, désobéissance civile, blocages).

### 2. Le paradoxe de l'action collective (Mancur Olson)
Pourquoi les individus se mobilisent-ils si un mouvement collectif procure un bien public dont tout le monde bénéficiera ?
- Selon **Mancur Olson (1965)**, un individu rationnel calculateur a intérêt à adopter un comportement de **passager clandestin (free rider)** : ne pas supporter les coûts de l'action (temps, perte de salaire, risque juridique) tout en profitant des retombées positives de la victoire du collectif.
- **Conséquence** : En l'absence de mécanismes incitatifs, l'action collective risque de ne jamais voir le jour.

### 3. Les solutions au paradoxe d'Olson
- **Incitations sélectives positives** : Avantages matériels ou professionnels réservés aux seuls membres (ex : mutuelle syndicale, caisse de grève).
- **Incitations sélectives négatives** : Sanctions pour les non-participants (ex : Closed shop anglo-saxon).
- **Rétributions symboliques (Daniel Gaxie)** : Sentiment d'utilité, prestige social, sociabilité et valorisation personnelle.`,
    notionsCles: ['Action collective', 'Passager clandestin', 'Paradoxe d\'Olson', 'Incitations sélectives', 'Rétributions symboliques', 'Vote conventionnel'],
    citationsAuteurs: [
      "Mancur Olson : « Les individus rationnels et calculateurs n'agiront pas pour défendre l'intérêt de leur groupe sans incitations positives ou contraintes. »",
      "Daniel Gaxie : « L'engagement politique procure des rétributions invisibles mais puissantes. »"
    ],
    estActif: true,
  }
];

export type AudioHostLine = {
  speaker: 'Alex' | 'Sarah';
  texte: string;
  conceptCite?: string;
};

// Generate an interactive podcast dialogue based on the active sources (Gemini Notebook Audio Overview style)
export function generatePodcastBriefing(activeSources: NotebookSource[]): AudioHostLine[] {
  if (activeSources.length === 0) {
    return [
      { speaker: 'Alex', texte: "Bienvenue dans le studio Audio Overview ! Pour démarrer un briefing audio, activez au moins une source documentaire dans le panneau de gauche." }
    ];
  }

  const themes = activeSources.map(s => s.titre).join(' et ');
  const notions = activeSources.flatMap(s => s.notionsCles.slice(0, 3)).slice(0, 6).join(', ');

  const dialogue: AudioHostLine[] = [
    {
      speaker: 'Alex',
      texte: `Salut et bienvenue dans ce briefing SES Gemini Notebook ! Aujourd'hui, on explore notre corpus de révision qui aborde ${themes}.`,
      conceptCite: activeSources[0].chapitre
    },
    {
      speaker: 'Sarah',
      texte: `Exactement Alex ! Et ce qui est passionnant dans ces documents, c'est la façon dont tout s'articule pour les épreuves du bac. On y retrouve des concepts fondamentaux comme ${notions}.`,
      conceptCite: notions.split(',')[0]
    },
    {
      speaker: 'Alex',
      texte: `Commençons par le cœur du premier document : ${activeSources[0].resume}`,
      conceptCite: activeSources[0].titre
    },
    {
      speaker: 'Sarah',
      texte: `Oui ! Et attention à l'erreur classique des élèves au bac : ne pas expliciter les mécanismes ! Quand on traite un sujet, il faut toujours appliquer la règle AEI : Affirmer, Expliciter et Illustrer avec des données chiffrées précises.`,
      conceptCite: 'Méthode AEI'
    }
  ];

  if (activeSources.length > 1) {
    dialogue.push({
      speaker: 'Alex',
      texte: `Et regarde le lien direct avec notre deuxième source sur « ${activeSources[1].titre} » : ${activeSources[1].resume}`,
      conceptCite: activeSources[1].titre
    });
    dialogue.push({
      speaker: 'Sarah',
      texte: `Absolument ! Les grands auteurs de référence comme ${activeSources[1].citationsAuteurs?.[0] || 'les théoriciens du programme'} montrent bien comment ces mécanismes s'appliquent concrètement dans l'économie réelle.`,
      conceptCite: 'Théorie SES'
    });
  }

  dialogue.push({
    speaker: 'Alex',
    texte: `En résumé pour vos devoirs et le bac : définissez précisément chaque terme officiel, appliquez la lecture statistique aux 4 critères, et construisez des chaînes causales logiques.`,
    conceptCite: 'Conseil Bac'
  });
  dialogue.push({
    speaker: 'Sarah',
    texte: `Vous avez un dossier complet et solide. Vous pouvez aussi poser des questions directes dans l'onglet Chat pour tester vos connaissances sur ces sources !`,
    conceptCite: 'Conclusion'
  });

  return dialogue;
}

// Generate contextual AI response based on active sources
export function generateContextualAnswer(question: string, activeSources: NotebookSource[]): { reponse: string; sourcesCitees: string[] } {
  const q = question.toLowerCase().trim();
  const sourcesCitees: string[] = [];

  if (activeSources.length === 0) {
    return {
      reponse: "⚠️ **Aucune source documentaire n'est actuellement activée.** Veuillez cocher au moins une source dans le panneau de gauche pour que je puisse générer une réponse sourcée et fiable.",
      sourcesCitees: []
    };
  }

  // Check matching sources
  const relevantSources = activeSources.filter(s => {
    const hay = `${s.titre} ${s.resume} ${s.contenuComplet} ${s.notionsCles.join(' ')}`.toLowerCase();
    return q.split(' ').some(word => word.length > 3 && hay.includes(word));
  });

  const targetSources = relevantSources.length > 0 ? relevantSources : activeSources.slice(0, 2);
  targetSources.forEach(s => sourcesCitees.push(s.titre));

  let answer = `### 💡 Analyse sourcée (Gemini Notebook)\n\n`;

  if (q.includes('difference') || q.includes('différence') || q.includes('vs') || q.includes('distinguer')) {
    answer += `D'après vos sources (**${targetSources.map(s => s.titre).join('** et **')}**), voici la distinction rigoureuse exigée au baccalauréat :\n\n`;
    answer += `1. **Premier concept d'analyse** : S'appuie sur les mécanismes décrits dans *[${targetSources[0].titre}]*. Il s'agit d'une notion structurelle qui mesure ou encadre l'activité.\n`;
    answer += `2. **Second concept d'analyse** : Se différencie par son champ d'application ou son mode de calcul, comme explicité dans vos documents de référence.\n\n`;
    answer += `> **📌 Piège à éviter au Bac** : Ne confondez jamais une grandeur brute (ex: Chiffre d'affaires) avec une grandeur de création nette (ex: Valeur ajoutée ou Bénéfice).\n\n`;
  } else if (q.includes('pourquoi') || q.includes('comment') || q.includes('mecanisme') || q.includes('mécanisme')) {
    answer += `Voici la chaîne de causalité complète issue du corpus (**${targetSources[0].titre}**) :\n\n`;
    answer += `1. **Point de départ** : Constat initial et mécanisme déclencheur identifié dans la source.\n`;
    answer += `2. **Étape intermédiaire** : Modification des comportements des agents économiques ou sociaux (incitations, intériorisation des normes ou variation des prix relatifs).\n`;
    answer += `3. **Aboutissement** : Impact final sur l'équilibre global (surplus, création monétaire, reproduction sociale ou équilibre de marché).\n\n`;
  } else {
    answer += `Voici la synthèse des éléments clés trouvés dans vos sources à propos de votre question :\n\n`;
    targetSources.forEach(s => {
      answer += `#### 📖 Dans « ${s.titre} » :\n`;
      answer += `- **Notions centrales** : ${s.notionsCles.slice(0, 4).join(', ')}.\n`;
      answer += `- **Contenu clé** : ${s.resume}\n`;
      if (s.citationsAuteurs && s.citationsAuteurs.length > 0) {
        answer += `- **Citation de référence** : *${s.citationsAuteurs[0]}*\n`;
      }
      answer += `\n`;
    });
  }

  answer += `\n*Source(s) mobilisée(s) :* ${targetSources.map(s => `\`${s.titre}\``).join(', ')}`;

  return { reponse: answer, sourcesCitees };
}
