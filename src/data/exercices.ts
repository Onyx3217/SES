import { calculsCatalog, generateRandomExerciseFor } from './calculsData';
import { allGlossaryTerms } from './glossaireHelper';

export type ExerciseChoice = {
  id: string;
  label: string;
};

export type Exercise = {
  id: string;
  type: 'calcul' | 'qcm';
  theme: string;
  niveau: ('Seconde' | 'Première')[];
  question: string;
  contexte?: string;
  choices: ExerciseChoice[];
  answer: string;
  explanation: string;
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
];

export function generateExerciseSet(count = 5, filterNiveau: 'Tous' | 'Seconde' | 'Première' = 'Tous', modeFilter: 'tous' | 'calculs' | 'qcm' = 'tous'): Exercise[] {
  const pool: Exercise[] = [];

  if (modeFilter === 'calculs' || modeFilter === 'tous') {
    // Add dynamic calculation exercises
    for (let i = 0; i < count; i++) {
      pool.push(generateCalculationExercise());
    }
  }

  if (modeFilter === 'qcm' || modeFilter === 'tous') {
    // Add QCM exercises
    const eligibleQcm = qcmBank.filter((q) => {
      if (filterNiveau === 'Tous') return true;
      return q.niveau.includes(filterNiveau);
    });
    pool.push(...shuffle(eligibleQcm));
  }

  return shuffle(pool).slice(0, count);
}
