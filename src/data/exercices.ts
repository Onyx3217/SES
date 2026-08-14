import rawData from './calculs.json';

const fiches = rawData as any[];

type ExerciseChoice = {
  id: string;
  label: string;
};

export type Exercise = {
  id: string;
  theme: string;
  question: string;
  choices: ExerciseChoice[];
  answer: string;
  explanation: string;
};

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function formatNumber(value: number): string {
  return Number.isInteger(value) ? String(value) : value.toFixed(1).replace('.', ',');
}

function buildProportionExercise(): Exercise {
  const total = 180 + Math.floor(Math.random() * 520);
  const part = Math.floor(total * (0.2 + Math.random() * 0.45));
  const percent = Math.round((part / total) * 100);
  const answer = `${percent} %`;

  return {
    id: `proportion-${Date.now()}-${Math.random()}`,
    theme: 'Statistiques',
    question: `Dans un groupe de ${total} élèves, ${part} sont en filière générale. Quelle est la proportion en % ?`,
    choices: shuffle([
      `${percent} %`,
      `${Math.max(5, percent - 10)} %`,
      `${percent + 15} %`,
      `${Math.max(5, percent - 20)} %`,
    ]).map((label, index) => ({ id: `p-${index}`, label })),
    answer,
    explanation: `On calcule : (${part} / ${total}) × 100 = ${percent} %.`,
  };
}

function buildVariationExercise(): Exercise {
  const depart = 60 + Math.floor(Math.random() * 250);
  const arrivee = Math.round(depart * (1 + (0.08 + Math.random() * 0.35)));
  const taux = Math.round(((arrivee - depart) / depart) * 100);

  return {
    id: `variation-${Date.now()}-${Math.random()}`,
    theme: 'Taux de variation',
    question: `Une valeur passe de ${depart} à ${arrivee}. Quel est le taux de variation ?`,
    choices: shuffle([
      `+${taux} %`,
      `+${Math.max(5, taux - 10)} %`,
      `-${taux} %`,
      `+${taux + 10} %`,
    ]).map((label, index) => ({ id: `v-${index}`, label })),
    answer: `+${taux} %`,
    explanation: `Taux = ((${arrivee} - ${depart}) / ${depart}) × 100 = ${taux} %.`,
  };
}

function buildMoyenneExercise(): Exercise {
  const values = [10, 12, 13, 15, 9, 11, 14, 16].sort(() => Math.random() - 0.5).slice(0, 5);
  const moyenne = values.reduce((sum, value) => sum + value, 0) / values.length;
  const rounded = Number(moyenne.toFixed(1));
  const answer = formatNumber(rounded);

  return {
    id: `moyenne-${Date.now()}-${Math.random()}`,
    theme: 'Moyenne',
    question: `Calculer la moyenne des notes : ${values.join(', ')}.`,
    choices: shuffle([
      answer,
      formatNumber(Number((rounded + 1.2).toFixed(1))),
      formatNumber(Number((rounded - 1.2).toFixed(1))),
      formatNumber(Number((rounded + 2.8).toFixed(1))),
    ]).map((label, index) => ({ id: `m-${index}`, label })),
    answer,
    explanation: `La moyenne est : (${values.join(' + ')}) / ${values.length} = ${answer}.`,
  };
}

function buildCoefficientExercise(): Exercise {
  const depart = 40 + Math.floor(Math.random() * 90);
  const arrivee = Math.round(depart * (1.1 + Math.random() * 0.9));
  const coeff = (arrivee / depart).toFixed(2).replace('.', ',');

  return {
    id: `coeff-${Date.now()}-${Math.random()}`,
    theme: 'Coefficient multiplicateur',
    question: `Un prix passe de ${depart} € à ${arrivee} €. Quel est le coefficient multiplicateur ?`,
    choices: shuffle([
      coeff,
      (Number(coeff.replace(',', '.')) * 0.9).toFixed(2).replace('.', ','),
      (Number(coeff.replace(',', '.')) + 0.5).toFixed(2).replace('.', ','),
      (Number(coeff.replace(',', '.')) / 2).toFixed(2).replace('.', ','),
    ]).map((label, index) => ({ id: `c-${index}`, label })),
    answer: coeff,
    explanation: `Coefficient = ${arrivee} / ${depart} = ${coeff}.`,
  };
}

function buildIndiceExercise(): Exercise {
  const ref = 100 + Math.floor(Math.random() * 120);
  const valeur = Math.round(ref * (1.1 + Math.random() * 0.5));
  const indice = Math.round((valeur / ref) * 100);

  return {
    id: `indice-${Date.now()}-${Math.random()}`,
    theme: 'Indice',
    question: `Un indice de référence vaut ${ref}. La valeur actuelle vaut ${valeur}. Quel est l’indice en base 100 ?`,
    choices: shuffle([
      `${indice}`,
      `${indice + 10}`,
      `${Math.max(50, indice - 15)}`,
      `${indice - 10}`,
    ]).map((label, index) => ({ id: `i-${index}`, label })),
    answer: `${indice}`,
    explanation: `Indice = (${valeur} / ${ref}) × 100 = ${indice}.`,
  };
}

export function generateExerciseSet(count = 5): Exercise[] {
  const builders = [
    buildProportionExercise,
    buildVariationExercise,
    buildMoyenneExercise,
    buildCoefficientExercise,
    buildIndiceExercise,
  ];

  const exercises = shuffle(builders).slice(0, Math.min(count, builders.length)).map((builder) => builder());

  while (exercises.length < count) {
    const builder = builders[Math.floor(Math.random() * builders.length)];
    exercises.push(builder());
  }

  return exercises.slice(0, count);
}

export function getQuickConcepts() {
  return fiches.slice(0, 8).map((fiche: any) => ({
    id: fiche.id,
    nom: fiche.nom,
    categorie: fiche.categorie,
    niveau: fiche.niveau,
  }));
}
