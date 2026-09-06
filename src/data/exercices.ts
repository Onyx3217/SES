import { calculsCatalog, generateRandomExerciseFor } from './calculsData';
import { allGlossaryTerms } from './glossaireHelper';

export type DifficultyLevel = 'debutant' | 'intermediaire' | 'bac';
export type QuestionType = 'calcul' | 'definition' | 'application' | 'auteur' | 'mecanisme';

export type ExerciseChoice = {
  id: string;
  label: string;
};

export type Exercise = {
  id: string;
  type: 'calcul' | 'qcm';
  questionType?: QuestionType;
  difficulte?: DifficultyLevel;
  theme: string;
  niveau: ('Seconde' | 'Première')[];
  question: string;
  contexte?: string;
  choices: ExerciseChoice[];
  answer: string;
  explanation: string;
  auteur?: string;
  pointsCles?: string[];
};

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ---------------- DYNAMIC CALCULATION EXERCISES ----------------
export function generateCalculationExercise(): Exercise {
  const calculs = calculsCatalog;
  const picked = calculs[Math.floor(Math.random() * calculs.length)];
  const randomData = generateRandomExerciseFor(picked.id);

  if (!randomData) {
    return {
      id: `calc-${Date.now()}-${Math.random()}`,
      type: 'calcul',
      theme: picked.categorie,
      niveau: picked.niveau,
      question: picked.exercicePratique.question,
      contexte: picked.exercicePratique.enonce,
      choices: shuffle([
        `${picked.exercicePratique.reponseAttendue} ${picked.exercicePratique.unite}`,
        `${Number(picked.exercicePratique.reponseAttendue) * 1.2} ${picked.exercicePratique.unite}`,
        `${Math.max(0, Number(picked.exercicePratique.reponseAttendue) * 0.8)} ${picked.exercicePratique.unite}`,
        `${Number(picked.exercicePratique.reponseAttendue) + 10} ${picked.exercicePratique.unite}`,
      ]).map((label, idx) => ({ id: `c-${idx}`, label })),
      answer: `${picked.exercicePratique.reponseAttendue} ${picked.exercicePratique.unite}`,
      explanation: `${picked.exercicePratique.resolutionDetaillee.calculPose} -> Phrase BAC : ${picked.exercicePratique.resolutionDetaillee.phraseLectureBac}`,
    };
  }

  const correctAns = `${randomData.reponseAttendue} ${randomData.unite}`.trim();
  const num = typeof randomData.reponseAttendue === 'number' ? randomData.reponseAttendue : parseFloat(String(randomData.reponseAttendue));

  const wrong1 = `${(num * 1.25).toFixed(1).replace('.0', '')} ${randomData.unite}`.trim();
  const wrong2 = `${(num * 0.75).toFixed(1).replace('.0', '')} ${randomData.unite}`.trim();
  const wrong3 = `${(num + (num >= 0 ? 10 : -10)).toFixed(1).replace('.0', '')} ${randomData.unite}`.trim();

  return {
    id: `calc-${picked.id}-${Date.now()}-${Math.random()}`,
    type: 'calcul',
    theme: picked.categorie,
    niveau: picked.niveau,
    question: randomData.question,
    contexte: randomData.enonce,
    choices: shuffle([correctAns, wrong1, wrong2, wrong3]).map((label, idx) => ({
      id: `c-${idx}-${Date.now()}`,
      label,
    })),
    answer: correctAns,
    explanation: `${randomData.resolution.calculPose} -> « ${randomData.resolution.phraseLectureBac} »`,
  };
}

// ---------------- OFFICIAL CURRICULUM QCM QUESTIONS ----------------
export const qcmBank: Exercise[] = [
  // SECONDE
  {
    id: 'qcm-sec-1',
    type: 'qcm',
    theme: 'Production et entreprise',
    niveau: ['Seconde', 'Première'],
    question: "Quelle est la différence fondamentale entre le chiffre d'affaires et la valeur ajoutée ?",
    choices: [
      { id: '1', label: "La valeur ajoutée retire les consommations intermédiaires du chiffre d'affaires." },
      { id: '2', label: "Le chiffre d'affaires retire les impôts de la valeur ajoutée." },
      { id: '3', label: "C'est la même chose exprimée en pourcentages." },
      { id: '4', label: "La valeur ajoutée est toujours supérieure au chiffre d'affaires." },
    ],
    answer: "La valeur ajoutée retire les consommations intermédiaires du chiffre d'affaires.",
    explanation: "La valeur ajoutée mesure la richesse réellement créée par l'entreprise : VA = CA − Consommations intermédiaires.",
  },
  {
    id: 'qcm-sec-2',
    type: 'qcm',
    theme: 'Socialisation',
    niveau: ['Seconde', 'Première'],
    question: "Qu'appelle-t-on la 'socialisation primaire' en sociologie ?",
    choices: [
      { id: '1', label: "La socialisation qui se déroule pendant l'enfance et l'adolescence, principalement via la famille et l'école." },
      { id: '2', label: "La socialisation professionnelle qui a lieu au travail à l'âge adulte." },
      { id: '3', label: "L'apprentissage des règles de droit au tribunal." },
      { id: '4', label: "La première inscription sur les listes électorales à 18 ans." },
    ],
    answer: "La socialisation qui se déroule pendant l'enfance et l'adolescence, principalement via la famille et l'école.",
    explanation: "La socialisation primaire s'effectue durant l'enfance. Elle structure durablement les normes, valeurs et dispositions de l'individu.",
  },
  {
    id: 'qcm-sec-3',
    type: 'qcm',
    theme: 'Marché et prix',
    niveau: ['Seconde', 'Première'],
    question: "Sur un marché de biens, si la demande des consommateurs augmente alors que l'offre reste inchangée, que devient le prix d'équilibre ?",
    choices: [
      { id: '1', label: "Le prix d'équilibre augmente." },
      { id: '2', label: "Le prix d'équilibre diminue." },
      { id: '3', label: "Le prix d'équilibre reste strictement identique." },
      { id: '4', label: "L'offre disparaît immédiatement." },
    ],
    answer: "Le prix d'équilibre augmente.",
    explanation: "Une hausse de la demande crée une tension sur les quantités disponibles : pour rétablir l'équilibre, le prix de marché augmente.",
  },
  {
    id: 'qcm-sec-4',
    type: 'qcm',
    theme: 'Science politique',
    niveau: ['Seconde', 'Première'],
    question: "Qu'est-ce qu'un scrutin majoritaire à deux tours ?",
    choices: [
      { id: '1', label: "Un mode de scrutin où le candidat obtenant la majorité des voix au second tour remporte le siège." },
      { id: '2', label: "Un système qui distribue les sièges proportionnellement au pourcentage de voix." },
      { id: '3', label: "Un vote obligatoire sous peine d'amende." },
      { id: '4', label: "Un tirage au sort parmi les citoyens majeurs." },
    ],
    answer: "Un mode de scrutin où le candidat obtenant la majorité des voix au second tour remporte le siège.",
    explanation: "Le scrutin majoritaire favorise le dégagement d'une majorité claire en attribuant le siège au candidat arrivé en tête.",
  },
  {
    id: 'qcm-sec-5',
    type: 'qcm',
    theme: 'Emploi et travail',
    niveau: ['Seconde', 'Première'],
    question: "Qui fait partie de la 'population active' selon l'INSEE et le BIT ?",
    choices: [
      { id: '1', label: "Les personnes occupant un emploi rémunéré ET les personnes au chômage en recherche active." },
      { id: '2', label: "Uniquement les salariés en contrat à durée indéterminée (CDI)." },
      { id: '3', label: "L'ensemble de tous les habitants d'un pays y compris les retraités et les enfants." },
      { id: '4', label: "Uniquement les travailleurs indépendants et chefs d'entreprise." },
    ],
    answer: "Les personnes occupant un emploi rémunéré ET les personnes au chômage en recherche active.",
    explanation: "Population active = Actifs occupés (en emploi) + Chômeurs (sans emploi à la recherche d'un travail).",
  },

  // PREMIÈRE
  {
    id: 'qcm-prem-1',
    type: 'qcm',
    theme: 'Marché concurrentiel',
    niveau: ['Première'],
    question: "En Concurrence Pure et Parfaite (CPP), à quelle condition une entreprise maximise-t-elle son profit à court terme ?",
    choices: [
      { id: '1', label: "Lorsque le Prix de marché est égal au Coût marginal (P = Cm)." },
      { id: '2', label: "Lorsque le Prix de marché est égal au Chiffre d'affaires." },
      { id: '3', label: "Lorsque les coûts fixes sont nuls." },
      { id: '4', label: "Lorsque le coût moyen est au maximum." },
    ],
    answer: "Lorsque le Prix de marché est égal au Coût marginal (P = Cm).",
    explanation: "Tant que le prix est supérieur au coût de la dernière unité (P > Cm), produire rapporte plus qu'elle ne coûte. Le profit est maximal pour Prix = Coût marginal.",
  },
  {
    id: 'qcm-prem-2',
    type: 'qcm',
    theme: 'Défaillances de marché',
    niveau: ['Première'],
    question: "Qu'est-ce qu'une 'externalité négative' en économie ?",
    choices: [
      { id: '1', label: "L'impact négatif de l'activité d'un agent sur le bien-être d'un tiers sans compensation financière marchande." },
      { id: '2', label: "Une amende infligée par un tribunal de commerce." },
      { id: '3', label: "Une perte comptable déclarée au bilan de l'entreprise." },
      { id: '4', label: "Une hausse générale des taux d'intérêt par la banque centrale." },
    ],
    answer: "L'impact négatif de l'activité d'un agent sur le bien-être d'un tiers sans compensation financière marchande.",
    explanation: "La pollution est l'exemple type : l'usine pollue la rivière sans payer le coût infligé aux riverains, d'où la nécessité d'une taxe pigouvienne pour l'internaliser.",
  },
  {
    id: 'qcm-prem-3',
    type: 'qcm',
    theme: 'Monnaie et financement',
    niveau: ['Première'],
    question: "Comment la majeure partie de la monnaie en circulation est-elle créée dans l'économie moderne ?",
    choices: [
      { id: '1', label: "Par les banques commerciales lorsqu'elles accordent des crédits aux ménages et entreprises." },
      { id: '2', label: "Uniquement par l'impression de billets de banque à l'imprimerie de la Banque centrale." },
      { id: '3', label: "Par l'extraction d'or dans les mines." },
      { id: '4', label: "Par la collecte des impôts par le Trésor public." },
    ],
    answer: "Par les banques commerciales lorsqu'elles accordent des crédits aux ménages et entreprises.",
    explanation: "C'est le principe 'les crédits font les dépôts' : la monnaie scripturale est créée ex nihilo lors d'un prêt et détruite lors du remboursement du capital.",
  },
  {
    id: 'qcm-prem-4',
    type: 'qcm',
    theme: 'Engagement politique',
    niveau: ['Première'],
    question: "Qu'explique le 'paradoxe de l'action collective' mis en évidence par Mancur Olson ?",
    choices: [
      { id: '1', label: "Un individu rationnel a intérêt à se comporter en 'passager clandestin' en profitant des gains de l'action sans en supporter le coût." },
      { id: '2', label: "Les citoyens votent toujours contre leurs intérêts économiques." },
      { id: '3', label: "Plus un groupe est grand, plus ses membres sont solidaires." },
      { id: '4', label: "Les grèves augmentent toujours le pouvoir d'achat immédiatement." },
    ],
    answer: "Un individu rationnel a intérêt à se comporter en 'passager clandestin' en profitant des gains de l'action sans en supporter le coût.",
    explanation: "Pour surmonter ce paradoxe, les organisations utilisent des incitations sélectives ou procurent des rétributions symboliques aux militants.",
  },
  {
    id: 'qcm-prem-5',
    type: 'qcm',
    theme: 'Sociologie des réseaux',
    niveau: ['Première'],
    question: "Selon le sociologue Mark Granovetter, pourquoi les 'liens faibles' sont-ils particulièrement efficaces pour trouver un emploi ?",
    choices: [
      { id: '1', label: "Parce qu'ils servent de ponts vers des réseaux sociaux différents et apportent des informations nouvelles et inédites." },
      { id: '2', label: "Parce que les amis proches refusent souvent d'aider." },
      { id: '3', label: "Parce qu'ils coûtent moins cher à entretenir." },
      { id: '4', label: "Parce qu'ils garantissent un contrat en CDI." },
    ],
    answer: "Parce qu'ils servent de ponts vers des réseaux sociaux différents et apportent des informations nouvelles et inédites.",
    explanation: "Les liens forts (famille, amis très proches) partagent souvent les mêmes informations, alors que les connaissances éloignées (liens faibles) ouvrent des opportunités professionnelles nouvelles.",
  },
  {
    id: 'qcm-prem-6',
    type: 'qcm',
    theme: 'Protection sociale',
    niveau: ['Première'],
    question: "Quelle est la caractéristique principale d'une protection sociale reposant sur une logique d'assurance (modèle bismarckien) ?",
    choices: [
      { id: '1', label: "Les prestations sont financées par des cotisations sur le travail et réservées aux travailleurs cotisants." },
      { id: '2', label: "Les aides sont financées par l'impôt et versées sous conditions de ressources sans avoir cotisé." },
      { id: '3', label: "Tous les soins sont gratuits sans aucune condition." },
      { id: '4', label: "Chaque citoyen doit obligatoirement souscrire une assurance privée à but lucratif." },
    ],
    answer: "Les prestations sont financées par des cotisations sur le travail et réservées aux travailleurs cotisants.",
    explanation: "La logique d'assurance (Bismarck) protège contre la perte de revenu liée aux risques sociaux en contrepartie du paiement de cotisations.",
  },
  {
    id: 'qcm-rawls-1',
    type: 'qcm',
    theme: 'Justice sociale',
    niveau: ['Première'],
    question: "Selon John Rawls (Théorie de la justice, 1971), qu'implique le « principe de différence » issu du voile d'ignorance ?",
    choices: [
      { id: '1', label: "Les inégalités économiques ne sont justifiées que si elles améliorent le sort des membres les plus défavorisés de la société (maximin)." },
      { id: '2', label: "Tous les revenus et patrimoines doivent être strictement égalisés sans exception." },
      { id: '3', label: "L'État ne doit jamais intervenir dans la répartition des richesses pour préserver la liberté absolue." },
      { id: '4', label: "Le mérite individuel mesuré par le diplôme est le seul critère légitime de distribution." },
    ],
    answer: "Les inégalités économiques ne sont justifiées que si elles améliorent le sort des membres les plus défavorisés de la société (maximin).",
    explanation: "Derrière le voile d'ignorance, ne sachant pas sa position future, un individu rationnel choisit de protéger le sort du moins bien loti (maximin). Le principe de différence admet les inégalités seulement si elles stimulent l'économie au bénéfice des plus défavorisés.",
  },
  {
    id: 'qcm-piketty-1',
    type: 'qcm',
    theme: 'Justice sociale',
    niveau: ['Première'],
    question: "Quelle est la signification de la relation « r > g » mise en évidence par l'économiste Thomas Piketty ?",
    choices: [
      { id: '1', label: "Quand le rendement du capital (r) dépasse la croissance économique (g), les patrimoines hérités se concentrent plus vite que les revenus du travail." },
      { id: '2', label: "Le taux d'intérêt réel (r) contraint la dépense publique (g) à diminuer." },
      { id: '3', label: "La rentabilité des entreprises (r) chute automatiquement en période d'inflation (g)." },
      { id: '4', label: "Le ratio de redistribution (r) stabilise la dette publique (g)." },
    ],
    answer: "Quand le rendement du capital (r) dépasse la croissance économique (g), les patrimoines hérités se concentrent plus vite que les revenus du travail.",
    explanation: "Dans 'Le Capital au XXIe siècle', Thomas Piketty montre que lorsque le rendement du capital (r ≈ 4-5%) est durablement supérieur à la croissance (g ≈ 1-2%), les patrimoines passés prennent une importance démesurée par rapport aux revenus du travail, creusant les inégalités.",
  },
  {
    id: 'qcm-schumpeter-1',
    type: 'qcm',
    theme: 'Marchés et concurrence',
    niveau: ['Première'],
    question: "Selon Joseph Schumpeter, pourquoi le monopole issu d'une innovation n'est-il que temporaire ?",
    choices: [
      { id: '1', label: "Parce que l'innovation attire des imitateurs en grappe, érodant la rente de monopole jusqu'à la prochaine innovation majeure." },
      { id: '2', label: "Parce que la loi interdit tout brevet d'une durée supérieure à un an." },
      { id: '3', label: "Parce que les consommateurs finissent toujours par boycotter les entreprises en position dominante." },
      { id: '4', label: "Parce que le coût marginal d'une innovation devient infini à moyen terme." },
    ],
    answer: "Parce que l'innovation attire des imitateurs en grappe, érodant la rente de monopole jusqu'à la prochaine innovation majeure.",
    explanation: "C'est le processus de destruction créatrice : l'innovateur jouit d'une rente de monopole temporaire, qui incite d'autres entrepreneurs à imiter ou perfectionner le procédé en 'grappes d'innovations', banalisant le produit et éliminant la survaleur.",
  },
  {
    id: 'qcm-sen-1',
    type: 'qcm',
    theme: 'Justice sociale',
    niveau: ['Première'],
    question: "Selon Amartya Sen (Prix Nobel 1998), pourquoi le revenu seul est-il insuffisant pour évaluer le bien-être d'un individu ?",
    choices: [
      { id: '1', label: "Parce que ce qui importe, ce sont les « capabilités », c'est-à-dire les libertés réelles et capacités concrètes de convertir les ressources en réalisations." },
      { id: '2', label: "Parce que le revenu ne tient pas compte des cours de la bourse." },
      { id: '3', label: "Parce que seul le patrimoine immobilier reflète la véritable richesse." },
      { id: '4', label: "Parce que le bonheur est strictement indépendant des conditions matérielles d'existence." },
    ],
    answer: "Parce que ce qui importe, ce sont les « capabilités », c'est-à-dire les libertés réelles et capacités concrètes de convertir les ressources en réalisations.",
    explanation: "L'approche par les capabilités montre qu'un même niveau de revenu ne confère pas les mêmes libertés réelles : une personne en situation de handicap a besoin de davantage de ressources pour accomplir les mêmes fonctionnements fondamentaux (se déplacer, s'éduquer, participer à la vie sociale).",
  },
  {
    id: 'qcm-fisher-1',
    type: 'qcm',
    theme: 'Finance',
    niveau: ['Première'],
    question: "Selon la formule d'Irving Fisher, si un emprunt bancaire affiche un taux nominal de 4,5 % et que l'inflation annuelle est de 2,5 %, quel est le taux d'intérêt réel ?",
    choices: [
      { id: '1', label: "2,0 % (Taux réel ≈ Taux nominal − Inflation)" },
      { id: '2', label: "7,0 % (Taux réel ≈ Taux nominal + Inflation)" },
      { id: '3', label: "1,8 % (Taux réel ≈ Taux nominal / Inflation)" },
      { id: '4', label: "−2,0 % (Taux réel inversé)" },
    ],
    answer: "2,0 % (Taux réel ≈ Taux nominal − Inflation)",
    explanation: "Formule d'Irving Fisher : Taux d'intérêt réel ≈ Taux d'intérêt nominal − Taux d'inflation. Ici : 4,5 % − 2,5 % = 2,0 %. Le taux réel mesure le coût ou gain effectif en pouvoir d'achat net.",
  },
];

// ---------------- DYNAMIC NOTION QCM (240+ DÉFINITIONS DU GLOSSAIRE) ----------------
export function generateDynamicNotionQcm(
  filterNiveau: 'Tous' | 'Seconde' | 'Première' = 'Tous',
  difficulte: DifficultyLevel = 'intermediaire'
): Exercise {
  const eligible = allGlossaryTerms.filter((t) =>
    filterNiveau === 'Tous' ? true : t.niveaux.includes(filterNiveau)
  );
  const term = eligible[Math.floor(Math.random() * eligible.length)] || allGlossaryTerms[0];
  const sameCat = allGlossaryTerms.filter((t) => t.id !== term.id && t.categorie === term.categorie);
  const diffCat = allGlossaryTerms.filter((t) => t.id !== term.id && t.categorie !== term.categorie);
  const pool = difficulte === 'debutant' ? diffCat : sameCat.length >= 3 ? sameCat : allGlossaryTerms;
  const distractors = shuffle(pool.filter((t) => t.id !== term.id)).slice(0, 3);

  if (difficulte === 'debutant') {
    const correctChoice = term.definition;
    const wrongChoices = distractors.map((d) => d.definition);
    return {
      id: `notion-def-${term.id}-${Date.now()}`,
      type: 'qcm',
      questionType: 'definition',
      difficulte: 'debutant',
      theme: term.categorie,
      niveau: term.niveaux,
      question: `⭐ Définition : quelle est la définition officielle de « ${term.terme} » ?`,
      choices: shuffle([correctChoice, ...wrongChoices]).map((label, idx) => ({ id: `c-${idx}`, label })),
      answer: correctChoice,
      explanation: `✅ ${term.terme} : ${term.definition}${term.exemple ? `\n\n📌 Exemple : ${term.exemple}` : ''}`,
    };
  } else if (difficulte === 'intermediaire') {
    const correctChoice = `${term.terme}${term.sigle ? ` (${term.sigle})` : ''}`;
    const wrongChoices = distractors.map((d) => `${d.terme}${d.sigle ? ` (${d.sigle})` : ''}`);
    return {
      id: `notion-concept-${term.id}-${Date.now()}`,
      type: 'qcm',
      questionType: 'definition',
      difficulte: 'intermediaire',
      theme: term.categorie,
      niveau: term.niveaux,
      question: `⭐⭐ À quel concept de SES (${term.categorie}) correspond cette définition ?\n\n« ${term.definition} »`,
      choices: shuffle([correctChoice, ...wrongChoices]).map((label, idx) => ({ id: `c-${idx}`, label })),
      answer: correctChoice,
      explanation: `✅ Il s'agit de « ${term.terme} ».\n\n${term.definition}${term.pointsCles?.length ? `\n\nPoints clés : ${term.pointsCles.join(' ; ')}` : ''}`,
    };
  } else {
    const correctChoice = `${term.terme}${term.sigle ? ` (${term.sigle})` : ''}`;
    const wrongChoices = distractors.map((d) => `${d.terme}${d.sigle ? ` (${d.sigle})` : ''}`);
    return {
      id: `notion-bac-${term.id}-${Date.now()}`,
      type: 'qcm',
      questionType: 'application',
      difficulte: 'bac',
      theme: term.categorie,
      niveau: term.niveaux,
      question: `⭐⭐⭐ Application BAC : identifiez la notion mobilisée dans la situation suivante.`,
      contexte: term.exemple || term.interpretation || term.definition,
      choices: shuffle([correctChoice, ...wrongChoices]).map((label, idx) => ({ id: `c-${idx}`, label })),
      answer: correctChoice,
      explanation: `✅ Concept : « ${term.terme} ».\nDéfinition : ${term.definition}${term.interpretation ? `\n\nAnalyse : ${term.interpretation}` : ''}`,
    };
  }
}

export function generateExerciseSet(
  count = 10,
  filterNiveau: 'Tous' | 'Seconde' | 'Première' = 'Tous',
  modeFilter: 'tous' | 'calculs' | 'qcm' = 'tous',
  difficulte: DifficultyLevel | 'mixte' = 'mixte'
): Exercise[] {
  const result: Exercise[] = [];
  const usedKeys = new Set<string>();

  const getDiff = (): DifficultyLevel => {
    if (difficulte !== 'mixte') return difficulte;
    const r = Math.random();
    return r < 0.33 ? 'debutant' : r < 0.66 ? 'intermediaire' : 'bac';
  };

  const maxAttempts = count * 8;
  let attempts = 0;

  while (result.length < count && attempts < maxAttempts) {
    attempts++;
    let exo: Exercise;
    const d = getDiff();

    if (modeFilter === 'calculs') {
      exo = generateCalculationExercise();
      exo.difficulte = d;
      exo.questionType = 'calcul';
    } else if (modeFilter === 'qcm') {
      const dice = Math.random();
      if (dice < 0.5) {
        exo = generateDynamicNotionQcm(filterNiveau, d);
      } else {
        const eligibleQcm = qcmBank.filter((q) => {
          if (filterNiveau === 'Tous') return true;
          return q.niveau.includes(filterNiveau);
        });
        exo = eligibleQcm.length > 0
          ? eligibleQcm[Math.floor(Math.random() * eligibleQcm.length)]
          : generateDynamicNotionQcm(filterNiveau, d);
        exo.difficulte = d;
      }
    } else {
      const dice = Math.random();
      if (dice < 0.3) {
        exo = generateCalculationExercise();
        exo.difficulte = d;
        exo.questionType = 'calcul';
      } else if (dice < 0.65) {
        exo = generateDynamicNotionQcm(filterNiveau, d);
      } else {
        const eligibleQcm = qcmBank.filter((q) => {
          if (filterNiveau === 'Tous') return true;
          return q.niveau.includes(filterNiveau);
        });
        exo = eligibleQcm.length > 0
          ? eligibleQcm[Math.floor(Math.random() * eligibleQcm.length)]
          : generateDynamicNotionQcm(filterNiveau, d);
        exo.difficulte = d;
      }
    }

    const key = exo.question.slice(0, 60);
    if (!usedKeys.has(key)) {
      usedKeys.add(key);
      result.push(exo);
    }
  }

  return result;
}
