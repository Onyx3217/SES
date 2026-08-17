export type StepByStepResolution = {
  formuleRappel: string;
  donneesIdentifiees: { label: string; valeur: string }[];
  calculPose: string;
  resultatExact: string;
  phraseLectureBac: string;
  piegeEvite: string;
};

export type SimulatorField = {
  id: string;
  label: string;
  unit?: string;
  defaultValue: number;
  min?: number;
  max?: number;
  step?: number;
};

export type FicheCalcul = {
  id: string;
  nom: string;
  categorie: string;
  chapitres: string[];
  niveau: ('Seconde' | 'Première')[];
  formule: string;
  definitionCourte: string;
  explicationPedagogique: {
    definition: string;
    enClair: string;
    uniteEtSens: string;
  };
  termesFormule: { symbole: string; sens: string }[];
  exempleCours: {
    titre: string;
    enonce: string;
    donnees: Record<string, string | number>;
    calcul: string;
    resultat: string;
    phraseLecture: string;
  };
  exercicePratique: {
    titre: string;
    enonce: string;
    donnees: Record<string, string | number>;
    question: string;
    reponseAttendue: number | string;
    unite: string;
    indice: string;
    resolutionDetaillee: StepByStepResolution;
  };
  simulateur: {
    champs: SimulatorField[];
    calculer: (valeurs: Record<string, number>) => {
      valeur: number;
      unite: string;
      calculTexte: string;
      phraseInterpretation: string;
    };
  };
  pieges: string[];
  motsCles: string[];
};

export const calculsCatalog: FicheCalcul[] = [
  {
    id: "proportion",
    nom: "Proportion / Part en %",
    categorie: "Statistiques appliquées",
    chapitres: ["Statistiques appliquées", "Entreprise et production", "Sociologie"],
    niveau: ["Seconde", "Première"],
    formule: "Proportion (%) = (Effectif de la sous-population / Effectif de la population totale) × 100",
    definitionCourte: "Mesure la part relative d'un sous-ensemble dans un ensemble global.",
    explicationPedagogique: {
      definition: "Une proportion (ou pourcentage de répartition) mesure la part d'un sous-ensemble dans un ensemble total, le plus souvent exprimée en pourcentage.",
      enClair: "On répond à la question : 'Si le total valait 100 individus ou 100 euros, combien représenteraient ceux de la catégorie étudiée ?'",
      uniteEtSens: "S'exprime toujours en % (pourcentage de répartition). Comprise entre 0 % et 100 %."
    },
    termesFormule: [
      { symbole: "Effectif sous-population (A)", sens: "Nombre d'individus ou valeur de la catégorie particulière étudiée" },
      { symbole: "Effectif total (T)", sens: "Nombre total d'individus ou montant total de l'ensemble de référence" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Répartition des élèves dans un lycée",
      enonce: "Dans un lycée comptant 800 élèves, 320 ont choisi la spécialité SES en classe de Première.",
      donnees: { "Effectif SES": "320 élèves", "Total élèves": "800 élèves" },
      calcul: "(320 / 800) × 100 = 0,40 × 100 = 40 %",
      resultat: "40 %",
      phraseLecture: "En France, dans ce lycée, 40 % des élèves de Première sont inscrits en spécialité SES (soit 40 élèves sur 100)."
    },
    exercicePratique: {
      titre: "Exercice d'application : Part des femmes cadres dans une entreprise",
      enonce: "Une entreprise du secteur numérique compte au total 450 salariés. La direction des ressources humaines indique que 198 de ces salariés sont des femmes.",
      donnees: { "Nombre de salariées femmes": 198, "Nombre total de salariés": 450 },
      question: "Calculez la proportion de femmes parmi l'ensemble des salariés de cette entreprise.",
      reponseAttendue: 44,
      unite: "%",
      indice: "Identifiez bien le sous-ensemble (les femmes) et le total (l'ensemble des salariés), puis posez la division avant de multiplier par 100.",
      resolutionDetaillee: {
        formuleRappel: "Proportion (%) = (Effectif du sous-ensemble / Effectif total) × 100",
        donneesIdentifiees: [
          { label: "Sous-ensemble (Femmes)", valeur: "198 salariées" },
          { label: "Total de référence (Salariés)", valeur: "450 salariés" }
        ],
        calculPose: "Proportion = (198 / 450) × 100 = 0,44 × 100 = 44 %",
        resultatExact: "44 %",
        phraseLectureBac: "Dans cette entreprise en 2024, les femmes représentent 44 % de l'effectif total des salariés (ou : sur 100 salariés de l'entreprise, 44 sont des femmes).",
        piegeEvite: "Ne jamais inverser le numérateur et le dénominateur (ne pas faire 450/198) et ne pas confondre avec un taux de variation dans le temps."
      }
    },
    simulateur: {
      champs: [
        { id: "sous", label: "Effectif de la sous-catégorie", defaultValue: 198, min: 0 },
        { id: "total", label: "Effectif total de référence", defaultValue: 450, min: 1 }
      ],
      calculer: ({ sous, total }) => {
        const t = total > 0 ? total : 1;
        const res = (sous / t) * 100;
        return {
          valeur: Number(res.toFixed(2)),
          unite: "%",
          calculTexte: `(${sous} / ${t}) × 100 = ${res.toFixed(2)} %`,
          phraseInterpretation: `La sous-catégorie représente ${res.toFixed(2)} % du total étudié (soit environ ${Math.round(res)} sur 100).`
        };
      }
    },
    pieges: [
      "Confondre proportion (répartition statique à une date donnée) et taux de variation (évolution d'une grandeur entre deux dates).",
      "Oublier de multiplier par 100 ou omettre le symbole % dans la phrase réponse.",
      "Ne pas préciser l'ensemble de référence dans la phrase de lecture type BAC (ex: '40 % des élèves du lycée', pas juste '40 %')."
    ],
    motsCles: ["proportion", "part", "pourcentage de repartition", "poids", "part en %", "fraction"]
  },
  {
    id: "taux-de-variation",
    nom: "Taux de variation (Évolution %)",
    categorie: "Statistiques appliquées",
    chapitres: ["Statistiques appliquées", "Croissance et PIB", "Marché"],
    niveau: ["Seconde", "Première"],
    formule: "Taux de variation (%) = [(Valeur d'arrivée (VA) − Valeur de départ (VD)) / Valeur de départ (VD)] × 100",
    definitionCourte: "Mesure l'évolution relative (hausse ou baisse en %) d'une grandeur dans le temps.",
    explicationPedagogique: {
      definition: "Le taux de variation mesure l'évolution relative d'une grandeur entre une valeur initiale (date 0) et une valeur finale (date 1).",
      enClair: "Il indique le pourcentage de gain ou de perte par rapport au niveau où l'on se trouvait au départ.",
      uniteEtSens: "S'exprime en % (signe + pour une hausse, signe − pour une baisse)."
    },
    termesFormule: [
      { symbole: "VD (Valeur de départ)", sens: "Valeur initiale de la grandeur à la période de début" },
      { symbole: "VA (Valeur d'arrivée)", sens: "Valeur finale de la grandeur à la période de fin" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Évolution du PIB national",
      enonce: "Le PIB réel d'un pays passe de 2 500 milliards d'euros en 2023 à 2 625 milliards d'euros en 2024.",
      donnees: { "PIB 2023 (VD)": "2 500 Md€", "PIB 2024 (VA)": "2 625 Md€" },
      calcul: "[(2 625 − 2 500) / 2 500] × 100 = (125 / 2 500) × 100 = +5 %",
      resultat: "+5 %",
      phraseLecture: "Entre 2023 et 2024, le PIB de ce pays a augmenté de 5 % en volume."
    },
    exercicePratique: {
      titre: "Exercice d'application : Évolution du prix du baril de pétrole",
      enonce: "Sur les marchés internationaux, le prix d'un baril de pétrole brut est passé de 80 dollars en janvier à 92 dollars au mois de juin.",
      donnees: { "Prix en janvier (VD)": 80, "Prix en juin (VA)": 92 },
      question: "Calculez le taux de variation du prix du baril de pétrole entre janvier et juin.",
      reponseAttendue: 15,
      unite: "%",
      indice: "Appliquez la formule [(VA − VD) / VD] × 100. La valeur de départ au dénominateur est 80 $.",
      resolutionDetaillee: {
        formuleRappel: "Taux de variation (%) = [(VA − VD) / VD] × 100",
        donneesIdentifiees: [
          { label: "Valeur de départ (Janvier)", valeur: "80 $" },
          { label: "Valeur d'arrivée (Juin)", valeur: "92 $" }
        ],
        calculPose: "Taux = [(92 − 80) / 80] × 100 = (12 / 80) × 100 = 0,15 × 100 = +15 %",
        resultatExact: "+15 %",
        phraseLectureBac: "Entre janvier et juin, le prix du baril de pétrole brut a augmenté de 15 % sur le marché mondial.",
        piegeEvite: "Ne jamais diviser par la valeur d'arrivée (92). Le dénominateur doit impérativement être la valeur initiale de départ (80)."
      }
    },
    simulateur: {
      champs: [
        { id: "vd", label: "Valeur de départ (VD)", defaultValue: 80, min: 0.001 },
        { id: "va", label: "Valeur d'arrivée (VA)", defaultValue: 92 }
      ],
      calculer: ({ vd, va }) => {
        const base = vd !== 0 ? vd : 1;
        const res = ((va - base) / base) * 100;
        const signe = res >= 0 ? "+" : "";
        return {
          valeur: Number(res.toFixed(2)),
          unite: "%",
          calculTexte: `[(${va} − ${base}) / ${base}] × 100 = ${signe}${res.toFixed(2)} %`,
          phraseInterpretation: `La grandeur a ${res >= 0 ? 'augmenté' : 'diminué'} de ${Math.abs(res).toFixed(2)} % entre la période initiale et la période finale.`
        };
      }
    },
    pieges: [
      "Confondre % de variation et points de pourcentage (passer de 10 % à 12 % est une hausse de 2 points mais de +20 %).",
      "Diviser par la valeur d'arrivée au lieu de la valeur de départ.",
      "Oublier le signe négatif en cas de baisse."
    ],
    motsCles: ["taux de variation", "evolution", "croissance", "hausse", "baisse", "variation relative"]
  },
  {
    id: "taux-de-variation-cumule",
    nom: "Taux de variation cumulé",
    categorie: "Statistiques appliquées",
    chapitres: ["Statistiques appliquées", "Croissance et PIB"],
    niveau: ["Seconde", "Première"],
    formule: "Taux cumulé (%) = [(1 + t1) × (1 + t2) × ... × (1 + tn) − 1] × 100  (avec t en décimal)",
    definitionCourte: "Calcule la variation globale après plusieurs hausses ou baisses successives.",
    explicationPedagogique: {
      definition: "Le taux de variation cumulé permet de calculer l'évolution totale d'une grandeur soumise à plusieurs variations successives.",
      enClair: "Chaque nouvelle variation s'applique sur le montant déjà modifié de l'étape précédente. On multiplie les coefficients multiplicateurs, ON N'ADDITIONNE JAMAIS LES TAUX !",
      uniteEtSens: "S'exprime en %."
    },
    termesFormule: [
      { symbole: "t1, t2", sens: "Taux de variation de chaque sous-période exprimés sous forme décimale (ex: +10% -> 0,10 ; -5% -> -0,05)" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Évolution d'un salaire sur 2 ans",
      enonce: "Un salaire augmente de 3 % la première année, puis de 2 % la deuxième année.",
      donnees: { "Taux année 1 (t1)": "+3 % (0,03)", "Taux année 2 (t2)": "+2 % (0,02)" },
      calcul: "[(1 + 0,03) × (1 + 0,02) − 1] × 100 = [1,03 × 1,02 − 1] × 100 = [1,0506 − 1] × 100 = +5,06 %",
      resultat: "+5,06 %",
      phraseLecture: "Sur l'ensemble des deux années, le salaire a augmenté au total de 5,06 % (et non pas de 5 %)."
    },
    exercicePratique: {
      titre: "Exercice d'application : Chiffre d'affaires d'une PME avec hausse puis baisse",
      enonce: "Le chiffre d'affaires d'une entreprise a augmenté de 10 % en 2023, puis a reculé de 5 % en 2024 en raison d'un ralentissement économique.",
      donnees: { "Taux 2023": "+10 %", "Taux 2024": "-5 %" },
      question: "Calculez le taux de variation cumulé du chiffre d'affaires sur l'ensemble de ces deux années.",
      reponseAttendue: 4.5,
      unite: "%",
      indice: "Transformez les taux en coefficients multiplicateurs : 1 + 0,10 = 1,10 et 1 - 0,05 = 0,95. Multipliez-les entre eux puis retirez 1.",
      resolutionDetaillee: {
        formuleRappel: "Taux cumulé (%) = [(1 + t1) × (1 + t2) − 1] × 100",
        donneesIdentifiees: [
          { label: "Variation année 1 (t1)", valeur: "+10 % soit +0,10 (CM1 = 1,10)" },
          { label: "Variation année 2 (t2)", valeur: "-5 % soit -0,05 (CM2 = 0,95)" }
        ],
        calculPose: "CM global = 1,10 × 0,95 = 1,045. Taux cumulé = (1,045 − 1) × 100 = +4,5 %",
        resultatExact: "+4,5 %",
        phraseLectureBac: "Sur l'ensemble des deux années (2023-2024), le chiffre d'affaires de l'entreprise a augmenté globalement de 4,5 %.",
        piegeEvite: "NE JAMAIS faire 10 % − 5 % = 5 % ! Une baisse de 5 % s'applique sur la base déjà augmentée de 10 %, ce qui donne +4,5 %."
      }
    },
    simulateur: {
      champs: [
        { id: "t1", label: "Variation période 1 (en %)", defaultValue: 10 },
        { id: "t2", label: "Variation période 2 (en %)", defaultValue: -5 }
      ],
      calculer: ({ t1, t2 }) => {
        const cm1 = 1 + t1 / 100;
        const cm2 = 1 + t2 / 100;
        const cmGlobal = cm1 * cm2;
        const res = (cmGlobal - 1) * 100;
        const signe = res >= 0 ? "+" : "";
        return {
          valeur: Number(res.toFixed(2)),
          unite: "%",
          calculTexte: `[(1 + ${t1 / 100}) × (1 + ${t2 / 100}) − 1] × 100 = ${cmGlobal.toFixed(4)} − 1 = ${signe}${res.toFixed(2)} %`,
          phraseInterpretation: `Sur les deux périodes combinées, la variation globale s'élève à ${signe}${res.toFixed(2)} %.`
        };
      }
    },
    pieges: [
      "Additionner ou soustraire directement les taux de variation successifs (grave erreur au bac).",
      "Oublier de convertir les pourcentages en décimaux (ex: +3% = 0,03 et non 3)."
    ],
    motsCles: ["taux cumule", "variations successives", "coefficient global", "evolution globale"]
  },
  {
    id: "coefficient-multiplicateur",
    nom: "Coefficient multiplicateur (CM)",
    categorie: "Statistiques appliquées",
    chapitres: ["Statistiques appliquées", "Croissance et PIB"],
    niveau: ["Seconde", "Première"],
    formule: "CM = Valeur d'arrivée (VA) / Valeur de départ (VD)   |   Lien : Taux (%) = (CM − 1) × 100",
    definitionCourte: "Indique par combien une valeur a été multipliée entre deux dates.",
    explicationPedagogique: {
      definition: "Le coefficient multiplicateur mesure le rapport entre la valeur finale et la valeur initiale d'une grandeur.",
      enClair: "Il répond à la question : 'Par combien a été multipliée la valeur de départ pour obtenir la valeur d'arrivée ?'",
      uniteEtSens: "Nombre sans unité. Si CM > 1 : hausse ; si CM < 1 : baisse ; si CM = 1 : stagnation."
    },
    termesFormule: [
      { symbole: "VA", sens: "Valeur finale" },
      { symbole: "VD", sens: "Valeur initiale" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Évolution du prix d'un bien",
      enonce: "Le prix d'un produit passe de 20 € à 25 €.",
      donnees: { "Prix initial": "20 €", "Prix final": "25 €" },
      calcul: "CM = 25 / 20 = 1,25 (Taux = (1,25 − 1) × 100 = +25 %)",
      resultat: "1,25",
      phraseLecture: "Le prix du produit a été multiplié par 1,25 entre les deux dates (ce qui correspond à une hausse de 25 %)."
    },
    exercicePratique: {
      titre: "Exercice d'application : Abonnés à un service numérique",
      enonce: "Le nombre d'abonnés d'une plateforme de streaming est passé de 15 millions en 2020 à 42 millions en 2024.",
      donnees: { "Abonnés 2020 (VD)": 15, "Abonnés 2024 (VA)": 42 },
      question: "Calculez le coefficient multiplicateur du nombre d'abonnés entre 2020 et 2024.",
      reponseAttendue: 2.8,
      unite: "",
      indice: "Divisez simplement la valeur d'arrivée (42) par la valeur de départ (15).",
      resolutionDetaillee: {
        formuleRappel: "CM = Valeur d'arrivée (VA) / Valeur de départ (VD)",
        donneesIdentifiees: [
          { label: "Valeur de départ (2020)", valeur: "15 millions" },
          { label: "Valeur d'arrivée (2024)", valeur: "42 millions" }
        ],
        calculPose: "CM = 42 / 15 = 2,80",
        resultatExact: "2,8",
        phraseLectureBac: "Entre 2020 et 2024, le nombre d'abonnés de la plateforme a été multiplié par 2,8 (soit une augmentation de 180 %).",
        piegeEvite: "Ne pas ajouter de '%' au CM (le CM est sans unité). Si on demande le taux de variation : (2,8 − 1) × 100 = +180 %."
      }
    },
    simulateur: {
      champs: [
        { id: "vd", label: "Valeur de départ (VD)", defaultValue: 15, min: 0.001 },
        { id: "va", label: "Valeur d'arrivée (VA)", defaultValue: 42 }
      ],
      calculer: ({ vd, va }) => {
        const base = vd !== 0 ? vd : 1;
        const cm = va / base;
        const taux = (cm - 1) * 100;
        return {
          valeur: Number(cm.toFixed(2)),
          unite: "",
          calculTexte: `CM = ${va} / ${base} = ${cm.toFixed(2)}  (Taux = ${taux >= 0 ? '+' : ''}${taux.toFixed(2)} %)`,
          phraseInterpretation: `La grandeur a été multipliée par ${cm.toFixed(2)}, ce qui équivaut à une ${taux >= 0 ? 'hausse' : 'baisse'} de ${Math.abs(taux).toFixed(2)} %.`
        };
      }
    },
    pieges: [
      "Mettre un signe % au coefficient multiplicateur (un CM est un nombre pur sans unité).",
      "Interpréter à tort un CM < 1 : un CM de 0,5 signifie une division par 2 (baisse de 50 %), et non une baisse de 100% !"
    ],
    motsCles: ["coefficient multiplicateur", "CM", "multiplié par", "fois plus", "fois moins"]
  },
  {
    id: "indice-base-100",
    nom: "Indice simple en base 100",
    categorie: "Statistiques appliquées",
    chapitres: ["Statistiques appliquées", "Croissance et PIB"],
    niveau: ["Seconde", "Première"],
    formule: "Indice_t = (Valeur_t / Valeur_référence) × 100   |   Variation (%) = Indice_t − 100",
    definitionCourte: "Compare une grandeur à une période de référence fixée conventionnellement à 100.",
    explicationPedagogique: {
      definition: "L'indice en base 100 permet de suivre l'évolution d'une série temporelle en ramenant la valeur de l'année de référence à 100.",
      enClair: "Si l'indice vaut 117, la grandeur est 17 % plus élevée que l'année de base. S'il vaut 92, elle a baissé de 8 %.",
      uniteEtSens: "Nombre sans unité (base 100)."
    },
    termesFormule: [
      { symbole: "Valeur_t", sens: "Valeur observée à l'année t" },
      { symbole: "Valeur_référence", sens: "Valeur prise comme point de départ (base 100)" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Indice du prix d'un panier de consommation",
      enonce: "Un panier de biens valait 100 € en 2015 (base 100) et coûte 118 € en 2024.",
      donnees: { "Prix 2015 (base)": "100 €", "Prix 2024": "118 €" },
      calcul: "(118 / 100) × 100 = 118",
      resultat: "118",
      phraseLecture: "En 2024, l'indice des prix est de 118 (base 100 en 2015), ce qui signifie que les prix ont augmenté de 18 % depuis 2015."
    },
    exercicePratique: {
      titre: "Exercice d'application : Indice du salaire moyen",
      enonce: "Dans une branche professionnelle, le salaire mensuel moyen était de 2 200 € en 2018 (année choisie comme base 100). En 2024, il atteint 2 574 €.",
      donnees: { "Salaire 2018 (base 100)": 2200, "Salaire 2024": 2574 },
      question: "Calculez l'indice du salaire moyen en 2024 en prenant 2018 comme base 100.",
      reponseAttendue: 117,
      unite: "",
      indice: "Divisez la valeur de 2024 par la valeur de référence de 2018, puis multipliez par 100.",
      resolutionDetaillee: {
        formuleRappel: "Indice = (Valeur_2024 / Valeur_2018) × 100",
        donneesIdentifiees: [
          { label: "Année de référence (2018)", valeur: "2 200 € (base 100)" },
          { label: "Année courante (2024)", valeur: "2 574 €" }
        ],
        calculPose: "Indice = (2 574 / 2 200) × 100 = 1,17 × 100 = 117",
        resultatExact: "117",
        phraseLectureBac: "En 2024, l'indice du salaire moyen dans cette branche s'élève à 117 (base 100 en 2018). Le salaire moyen a ainsi progressé de 17 % entre 2018 et 2024.",
        piegeEvite: "Ne pas ajouter de '%' à l'indice. Parler de 'base 100 en 2018' dans la phrase type BAC."
      }
    },
    simulateur: {
      champs: [
        { id: "ref", label: "Valeur de référence (base 100)", defaultValue: 2200, min: 0.001 },
        { id: "val", label: "Valeur de l'année étudiée", defaultValue: 2574 }
      ],
      calculer: ({ ref, val }) => {
        const base = ref !== 0 ? ref : 1;
        const ind = (val / base) * 100;
        const diff = ind - 100;
        return {
          valeur: Number(ind.toFixed(2)),
          unite: "",
          calculTexte: `Indice = (${val} / ${base}) × 100 = ${ind.toFixed(2)}`,
          phraseInterpretation: `L'indice est de ${ind.toFixed(2)} (base 100 à la période de référence), traduisant une ${diff >= 0 ? 'hausse' : 'baisse'} de ${Math.abs(diff).toFixed(2)} %.`
        };
      }
    },
    pieges: [
      "Confondre la valeur de l'indice (ex: 117) et la variation en pourcentage (+17 %).",
      "Comparer deux indices entre eux sans recalculer le taux de variation si l'un n'est pas l'année de base."
    ],
    motsCles: ["indice base 100", "indice simple", "indice de prix", "serie temporelle"]
  },
  {
    id: "moyenne-arithmetique",
    nom: "Moyenne arithmétique simple",
    categorie: "Statistiques appliquées",
    chapitres: ["Statistiques appliquées"],
    niveau: ["Seconde", "Première"],
    formule: "Moyenne = (Somme de toutes les valeurs) / (Nombre d'observations N)",
    definitionCourte: "Valeur centrale obtenue en divisant le total par le nombre d'individus.",
    explicationPedagogique: {
      definition: "La moyenne arithmétique représente la valeur unique que chacun recevrait si le total était réparti équitablement entre toutes les observations.",
      enClair: "On additionne toutes les valeurs et on divise par le nombre d'éléments.",
      uniteEtSens: "Même unité que les grandeurs de départ (euros, années, etc.). Sensible aux valeurs extrêmes."
    },
    termesFormule: [
      { symbole: "Σ x_i", sens: "Somme des valeurs observées" },
      { symbole: "N", sens: "Nombre total d'observations (effectif)" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Notes d'un groupe d'élèves",
      enonce: "Cinq élèves obtiennent les notes suivantes : 12, 14, 9, 16, 15 sur 20.",
      donnees: { "Notes": "12, 14, 9, 16, 15", "Effectif": "5 élèves" },
      calcul: "(12 + 14 + 9 + 16 + 15) / 5 = 66 / 5 = 13,2",
      resultat: "13,2 / 20",
      phraseLecture: "La note moyenne obtenue par ce groupe de 5 élèves est de 13,2 sur 20."
    },
    exercicePratique: {
      titre: "Exercice d'application : Salaire moyen dans une TPE",
      enonce: "Une petite entreprise compte 6 salariés dont les salaires mensuels nets sont : 1 800 €, 2 100 €, 2 400 €, 1 950 €, 3 200 € et 2 750 €.",
      donnees: { "Salaires": "1800, 2100, 2400, 1950, 3200, 2750 €", "Nombre de salariés": 6 },
      question: "Calculez le salaire mensuel net moyen des salariés de cette entreprise.",
      reponseAttendue: 2366.67,
      unite: "€",
      indice: "Faites la somme des 6 salaires, puis divisez par l'effectif total (6).",
      resolutionDetaillee: {
        formuleRappel: "Moyenne = (x1 + x2 + ... + xN) / N",
        donneesIdentifiees: [
          { label: "Masse salariale totale", valeur: "1800 + 2100 + 2400 + 1950 + 3200 + 2750 = 14 200 €" },
          { label: "Nombre de salariés", valeur: "6 salariés" }
        ],
        calculPose: "Salaire moyen = 14 200 / 6 ≈ 2 366,67 €",
        resultatExact: "2 366,67 €",
        phraseLectureBac: "Dans cette entreprise en 2024, le salaire mensuel net moyen est de 2 366,67 €.",
        piegeEvite: "Attention à ne pas oublier une valeur lors de l'addition et à bien arrondir à 2 décimales pour les montants en euros."
      }
    },
    simulateur: {
      champs: [
        { id: "v1", label: "Valeur 1", defaultValue: 1800 },
        { id: "v2", label: "Valeur 2", defaultValue: 2100 },
        { id: "v3", label: "Valeur 3", defaultValue: 2400 },
        { id: "v4", label: "Valeur 4", defaultValue: 1950 },
        { id: "v5", label: "Valeur 5", defaultValue: 3200 }
      ],
      calculer: (vals) => {
        const arr = Object.values(vals);
        const sum = arr.reduce((acc, v) => acc + v, 0);
        const avg = sum / arr.length;
        return {
          valeur: Number(avg.toFixed(2)),
          unite: "",
          calculTexte: `(${arr.join(' + ')}) / ${arr.length} = ${avg.toFixed(2)}`,
          phraseInterpretation: `La moyenne arithmétique de cette série est de ${avg.toFixed(2)}.`
        };
      }
    },
    pieges: [
      "Confondre moyenne (sensible aux très hauts revenus) et médiane (partage la population en deux parts égales).",
      "Oublier que la moyenne ne renseigne pas sur les inégalités de répartition."
    ],
    motsCles: ["moyenne", "moyenne arithmetique", "somme divisee", "statistiques"]
  },
  {
    id: "moyenne-ponderee",
    nom: "Moyenne pondérée",
    categorie: "Statistiques appliquées",
    chapitres: ["Statistiques appliquées"],
    niveau: ["Seconde", "Première"],
    formule: "Moyenne pondérée = Σ (Valeur_i × Coefficient_i) / Σ (Coefficients)",
    definitionCourte: "Moyenne prenant en compte l'importance relative (poids ou coefficient) de chaque valeur.",
    explicationPedagogique: {
      definition: "La moyenne pondérée accorde un poids (coefficient) différent à chaque observation selon son importance.",
      enClair: "Une note ou un prix avec un coefficient plus élevé compte davantage dans le résultat final.",
      uniteEtSens: "Même unité que les grandeurs analysées."
    },
    termesFormule: [
      { symbole: "Valeur_i", sens: "Valeur de chaque élément i" },
      { symbole: "Coefficient_i", sens: "Poids ou effectif associé à la valeur i" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Moyenne de devoirs avec coefficients",
      enonce: "Un devoir maison (coeff 1) a reçu la note de 10/20 et un devoir sur table (coeff 2) a reçu 14/20.",
      donnees: { "Note 1": "10/20 (coeff 1)", "Note 2": "14/20 (coeff 2)" },
      calcul: "(10×1 + 14×2) / (1 + 2) = (10 + 28) / 3 = 38 / 3 ≈ 12,67",
      resultat: "12,67 / 20",
      phraseLecture: "La moyenne pondérée de l'élève est de 12,67 sur 20."
    },
    exercicePratique: {
      titre: "Exercice d'application : Note finale du baccalauréat blanc",
      enonce: "Un élève passe trois épreuves : une dissertation (note 15/20, coefficient 4), un QCM de notions (note 11/20, coefficient 1) et un devoir de synthèse (note 13/20, coefficient 3).",
      donnees: { "Dissertation": "15 (coeff 4)", "QCM": "11 (coeff 1)", "Synthèse": "13 (coeff 3)" },
      question: "Calculez la moyenne pondérée obtenue par cet élève.",
      reponseAttendue: 13.75,
      unite: "/ 20",
      indice: "Multipliez chaque note par son coefficient, faites la somme, puis divisez par la somme des coefficients (4 + 1 + 3 = 8).",
      resolutionDetaillee: {
        formuleRappel: "Moyenne pondérée = (Note1×Coeff1 + Note2×Coeff2 + Note3×Coeff3) / (Coeff1 + Coeff2 + Coeff3)",
        donneesIdentifiees: [
          { label: "Points cumulés", valeur: "(15 × 4) + (11 × 1) + (13 × 3) = 60 + 11 + 39 = 110 points" },
          { label: "Total des coefficients", valeur: "4 + 1 + 3 = 8" }
        ],
        calculPose: "Moyenne pondérée = 110 / 8 = 13,75 / 20",
        resultatExact: "13,75 / 20",
        phraseLectureBac: "L'élève obtient une moyenne pondérée de 13,75 sur 20 à cette série d'épreuves.",
        piegeEvite: "Ne pas diviser par 3 (nombre d'épreuves), mais bien par 8 (la somme des coefficients)."
      }
    },
    simulateur: {
      champs: [
        { id: "n1", label: "Valeur 1", defaultValue: 15 },
        { id: "c1", label: "Coefficient 1", defaultValue: 4, min: 0.1 },
        { id: "n2", label: "Valeur 2", defaultValue: 11 },
        { id: "c2", label: "Coefficient 2", defaultValue: 1, min: 0.1 },
        { id: "n3", label: "Valeur 3", defaultValue: 13 },
        { id: "c3", label: "Coefficient 3", defaultValue: 3, min: 0.1 }
      ],
      calculer: ({ n1, c1, n2, c2, n3, c3 }) => {
        const sumCoeff = c1 + c2 + c3;
        const totalPoints = (n1 * c1) + (n2 * c2) + (n3 * c3);
        const res = totalPoints / (sumCoeff > 0 ? sumCoeff : 1);
        return {
          valeur: Number(res.toFixed(2)),
          unite: "",
          calculTexte: `[(${n1}×${c1}) + (${n2}×${c2}) + (${n3}×${c3})] / (${c1}+${c2}+${c3}) = ${totalPoints} / ${sumCoeff} = ${res.toFixed(2)}`,
          phraseInterpretation: `La moyenne pondérée s'élève à ${res.toFixed(2)}.`
        };
      }
    },
    pieges: [
      "Diviser par le nombre de matières au lieu de la somme totale des coefficients.",
      "Oublier de multiplier chaque valeur par son coefficient respectif."
    ],
    motsCles: ["moyenne ponderee", "coefficient", "poids", "notes avec coefficient"]
  },
  {
    id: "mediane",
    nom: "Médiane",
    categorie: "Statistiques appliquées",
    chapitres: ["Statistiques appliquées", "Sociologie"],
    niveau: ["Seconde", "Première"],
    formule: "Valeur qui coupe une série ordonnée en deux groupes d'effectifs égaux (50% en dessous, 50% au-dessus)",
    definitionCourte: "Valeur centrale qui sépare la population ordonnée en deux moitiés égales.",
    explicationPedagogique: {
      definition: "La médiane est la valeur de la variable telle qu'au moins 50 % des observations lui sont inférieures ou égales et au moins 50 % lui sont supérieures ou égales.",
      enClair: "Contrairement à la moyenne, la médiane n'est pas faussée par quelques valeurs extrêmement élevées.",
      uniteEtSens: "Même unité que la grandeur étudiée (ex: euros pour le revenu médian)."
    },
    termesFormule: [
      { symbole: "Série ordonnée", sens: "Données rangées du plus petit au plus grand" },
      { symbole: "Position", sens: "(N + 1) / 2 pour un effectif impair ; moyenne des 2 valeurs centrales pour un effectif pair" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Salaires dans une petite structure",
      enonce: "Cinq salaires ordonnés : 1 200 €, 1 400 €, 1 500 €, 1 800 €, 3 500 €.",
      donnees: { "Salaires ordonnés": "1200, 1400, 1500, 1800, 3500 €" },
      calcul: "Effectif = 5 (impair). La valeur centrale est la 3ème : 1 500 €.",
      resultat: "1 500 €",
      phraseLecture: "Le salaire médian est de 1 500 € : 50 % des salariés gagnent 1 500 € ou moins, et 50 % gagnent 1 500 € ou plus."
    },
    exercicePratique: {
      titre: "Exercice d'application : Salaire médian d'une start-up",
      enonce: "Voici la liste des salaires mensuels nets de 7 employés d'une jeune entreprise : 1 900 €, 2 200 €, 2 500 €, 2 800 €, 3 100 €, 4 500 € et 7 000 €.",
      donnees: { "Salaires triés": "1900, 2200, 2500, 2800, 3100, 4500, 7000 €", "Effectif N": 7 },
      question: "Déterminez le salaire médian de cette entreprise et rédigez sa signification.",
      reponseAttendue: 2800,
      unite: "€",
      indice: "La série est déjà triée par ordre croissant. Avec 7 salariés (impair), repérez la 4ème valeur.",
      resolutionDetaillee: {
        formuleRappel: "Pour N impair (N=7), la médiane se situe au rang (N+1)/2 = (7+1)/2 = 4ème rang.",
        donneesIdentifiees: [
          { label: "Série ordonnée", valeur: "1900 < 2200 < 2500 < [2800] < 3100 < 4500 < 7000 €" },
          { label: "Position centrale", valeur: "4ème valeur = 2 800 €" }
        ],
        calculPose: "Médiane = 2 800 €",
        resultatExact: "2 800 €",
        phraseLectureBac: "Dans cette entreprise, le salaire médian est de 2 800 € net par mois : la moitié des salariés (50 %) perçoit 2 800 € ou moins, tandis que l'autre moitié perçoit 2 800 € ou plus.",
        piegeEvite: "Ne pas oublier de trier les valeurs si elles ne le sont pas déjà, et ne pas confondre avec la moyenne (qui vaut 3 428 € à cause du salaire de 7 000 €)."
      }
    },
    simulateur: {
      champs: [
        { id: "s1", label: "Salaire 1", defaultValue: 1900 },
        { id: "s2", label: "Salaire 2", defaultValue: 2200 },
        { id: "s3", label: "Salaire 3", defaultValue: 2500 },
        { id: "s4", label: "Salaire 4", defaultValue: 2800 },
        { id: "s5", label: "Salaire 5", defaultValue: 3100 },
        { id: "s6", label: "Salaire 6", defaultValue: 4500 },
        { id: "s7", label: "Salaire 7", defaultValue: 7000 }
      ],
      calculer: (vals) => {
        const sorted = Object.values(vals).sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        const med = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
        return {
          valeur: Number(med.toFixed(2)),
          unite: "€",
          calculTexte: `Série ordonnée : [${sorted.join(', ')}] -> Médiane = ${med}`,
          phraseInterpretation: `50 % des observations sont inférieures ou égales à ${med}, et 50 % lui sont supérieures ou égales.`
        };
      }
    },
    pieges: [
      "Calculer la médiane sans avoir préalablement rangé les valeurs par ordre croissant.",
      "Dire 'la médiane est le salaire moyen' (faux : la médiane coupe en deux parts égales, elle ne fait pas la moyenne)."
    ],
    motsCles: ["mediane", "revenu median", "salaire median", "50%", "valeur centrale"]
  },
  {
    id: "valeur-nominale-reelle",
    nom: "Valeur nominale (prix courants) vs Valeur réelle (prix constants / volume)",
    categorie: "Macroéconomie",
    chapitres: ["Croissance et PIB", "Statistiques appliquées", "Monnaie et inflation"],
    niveau: ["Seconde", "Première"],
    formule: "Grandeur réelle (en volume) = [Grandeur nominale (en valeur) / Indice des prix] × 100",
    definitionCourte: "Corrige l'effet de l'inflation pour mesurer l'évolution réelle du pouvoir d'achat ou de la production.",
    explicationPedagogique: {
      definition: "Une grandeur nominale est exprimée en monnaie courante (avec l'inflation) ; une grandeur réelle est déflatée par l'indice des prix pour mesurer le pouvoir d'achat réel.",
      enClair: "Si votre salaire augmente de 5 % mais que les prix augmentent de 5 %, votre salaire réel (votre panier de courses possible) n'a pas bougé !",
      uniteEtSens: "Exprimée en euros constants ou en volume."
    },
    termesFormule: [
      { symbole: "Grandeur nominale", sens: "Montant en euros affichés sur la fiche de paie ou au PIB courant" },
      { symbole: "Indice des prix (IPC)", sens: "Indice mesurant le niveau général des prix (base 100)" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Évolution d'un salaire déflaté",
      enonce: "Un salaire nominal passe de 2 000 € à 2 200 € (+10 %), mais l'indice des prix atteint 110 (+10 % d'inflation).",
      donnees: { "Salaire nominal": "2 200 €", "Indice prix": 110 },
      calcul: "Salaire réel = (2 200 / 110) × 100 = 2 000 €",
      resultat: "2 000 € constants",
      phraseLecture: "En euros constants, le salaire réel est resté à 2 000 € : le pouvoir d'achat du salarié est demeuré strictement stable."
    },
    exercicePratique: {
      titre: "Exercice d'application : Pouvoir d'achat d'un ménage après inflation",
      enonce: "En 2020, un ménage percevait un revenu mensuel de 3 000 €. En 2024, son revenu nominal atteint 3 450 €. Durant cette même période, l'indice des prix à la consommation est passé de 100 à 115.",
      donnees: { "Revenu nominal 2024": 3450, "Indice des prix 2024 (base 100 en 2020)": 115 },
      question: "Calculez le revenu réel de ce ménage en 2024 exprimé en euros constants de 2020.",
      reponseAttendue: 3000,
      unite: "€ constants",
      indice: "Divisez le revenu nominal (3 450 €) par l'indice des prix (115), puis multipliez par 100 pour déflater la valeur.",
      resolutionDetaillee: {
        formuleRappel: "Revenu réel = (Revenu nominal / Indice des prix) × 100",
        donneesIdentifiees: [
          { label: "Revenu nominal 2024", valeur: "3 450 € courants" },
          { label: "Indice des prix 2024", valeur: "115 (soit +15 % d'inflation depuis 2020)" }
        ],
        calculPose: "Revenu réel = (3 450 / 115) × 100 = 30 × 100 = 3 000 € constants",
        resultatExact: "3 000 € constants",
        phraseLectureBac: "En 2024, mesuré en euros constants de 2020, le revenu réel du ménage s'établit à 3 000 €. Bien que le revenu affiché ait augmenté de 450 €, son pouvoir d'achat réel n'a pas varié par rapport à 2020 en raison de la hausse des prix.",
        piegeEvite: "Ne pas confondre euros courants (prix de l'année) et euros constants (corrigés de l'inflation)."
      }
    },
    simulateur: {
      champs: [
        { id: "nom", label: "Grandeur nominale (€ courants)", defaultValue: 3450, min: 0 },
        { id: "ipc", label: "Indice des prix (base 100)", defaultValue: 115, min: 1 }
      ],
      calculer: ({ nom, ipc }) => {
        const base = ipc > 0 ? ipc : 100;
        const reel = (nom / base) * 100;
        return {
          valeur: Number(reel.toFixed(2)),
          unite: "€ constants",
          calculTexte: `(${nom} / ${base}) × 100 = ${reel.toFixed(2)} €`,
          phraseInterpretation: `Aux prix de l'année de base, la grandeur réelle équivaut à ${reel.toFixed(2)} € constants.`
        };
      }
    },
    pieges: [
      "Croire qu'une augmentation du salaire nominal garantit une hausse du pouvoir d'achat (il faut vérifier le taux d'inflation).",
      "Oublier de multiplier par 100 dans la formule de déflation."
    ],
    motsCles: ["valeur nominale", "valeur reelle", "euros constants", "euros courants", "deflaté", "pouvoir d'achat"]
  },
  {
    id: "taux-interet-reel-nominal",
    nom: "Taux d'intérêt réel vs Taux d'intérêt nominal (Équation de Fisher)",
    categorie: "Finance",
    chapitres: ["Financement de l'économie", "Monnaie et inflation"],
    niveau: ["Première"],
    formule: "Taux d'intérêt réel (%) ≈ Taux d'intérêt nominal (%) − Taux d'inflation (%)",
    definitionCourte: "Mesure le coût ou le rendement réel d'un prêt après déduction de l'inflation.",
    explicationPedagogique: {
      definition: "Le taux d'intérêt nominal est le taux contractuel affiché par la banque. Le taux d'intérêt réel corrige ce taux de la hausse générale des prix pour mesurer le gain ou coût réel.",
      enClair: "Si une banque vous prête à 4 % mais que l'inflation est de 3 %, son gain réel de pouvoir d'achat n'est que de 1 %.",
      uniteEtSens: "S'exprime en % (peut devenir négatif si l'inflation dépasse le taux nominal)."
    },
    termesFormule: [
      { symbole: "Taux nominal (i)", sens: "Taux d'intérêt affiché dans le contrat de prêt ou de placement" },
      { symbole: "Taux d'inflation (π)", sens: "Taux de hausse des prix sur la période" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Prêt bancaire",
      enonce: "Un crédit affiche un taux nominal de 5 % alors que l'inflation prévisionnelle est de 2 %.",
      donnees: { "Taux nominal": "5 %", "Inflation": "2 %" },
      calcul: "5 % − 2 % = 3 %",
      resultat: "3 %",
      phraseLecture: "Le taux d'intérêt réel de l'emprunt est de 3 % par an."
    },
    exercicePratique: {
      titre: "Exercice d'application : Crédit immobilier d'un ménage",
      enonce: "Un couple souscrit un emprunt immobilier à taux fixe nominal de 4,2 % sur 20 ans. Durant l'année, l'INSEE enregistre une inflation de 2,6 %.",
      donnees: { "Taux nominal de l'emprunt": 4.2, "Taux d'inflation": 2.6 },
      question: "Calculez le taux d'intérêt réel supporté par le couple emprunteur.",
      reponseAttendue: 1.6,
      unite: "%",
      indice: "Soustrayez le taux d'inflation du taux d'intérêt nominal.",
      resolutionDetaillee: {
        formuleRappel: "Taux d'intérêt réel ≈ Taux nominal − Taux d'inflation",
        donneesIdentifiees: [
          { label: "Taux d'intérêt nominal", valeur: "4,2 %" },
          { label: "Taux d'inflation", valeur: "2,6 %" }
        ],
        calculPose: "Taux d'intérêt réel = 4,2 % − 2,6 % = 1,6 %",
        resultatExact: "1,6 %",
        phraseLectureBac: "Pour les emprunteurs, le coût réel du crédit s'établit à 1,6 % par an après prise en compte de la dépréciation monétaire liée à l'inflation.",
        piegeEvite: "Ne pas additionner les deux grandeurs : l'inflation allège la dette de l'emprunteur, donc on la soustrait du taux nominal."
      }
    },
    simulateur: {
      champs: [
        { id: "nom", label: "Taux nominal (en %)", defaultValue: 4.2 },
        { id: "inf", label: "Taux d'inflation (en %)", defaultValue: 2.6 }
      ],
      calculer: ({ nom, inf }) => {
        const reel = nom - inf;
        return {
          valeur: Number(reel.toFixed(2)),
          unite: "%",
          calculTexte: `${nom} % − ${inf} % = ${reel.toFixed(2)} %`,
          phraseInterpretation: `Le taux d'intérêt réel est de ${reel.toFixed(2)} %. ${reel < 0 ? 'Le taux réel est négatif (favorable aux emprunteurs).' : 'Le taux réel est positif.'}`
        };
      }
    },
    pieges: [
      "Oublier qu'un taux d'intérêt réel peut être négatif si l'inflation est supérieure au taux nominal.",
      "Confondre le point de vue du prêteur (qui perd du pouvoir d'achat si l'inflation monte) et de l'emprunteur (qui voit sa dette s'alléger)."
    ],
    motsCles: ["taux d'interet reel", "taux nominal", "inflation", "Fisher", "cout du credit"]
  },
  {
    id: "contribution-a-la-variation",
    nom: "Contribution à la variation (en points de %)",
    categorie: "Statistiques appliquées",
    chapitres: ["Statistiques appliquées", "Croissance et PIB"],
    niveau: ["Première"],
    formule: "Contribution = [Part de l'élément dans le total (%) × Taux d'évolution de l'élément (%)] / 100",
    definitionCourte: "Mesure la part de la croissance globale d'un ensemble imputable à un élément précis.",
    explicationPedagogique: {
      definition: "La contribution à la variation indique combien de points de pourcentage de la croissance totale sont apportés par une composante donnée.",
      enClair: "Elle permet de dire quel moteur (consommation, investissement, exportations) a tiré ou freiné la croissance économique.",
      uniteEtSens: "S'exprime en points de pourcentage (et non en %)."
    },
    termesFormule: [
      { symbole: "Poids de la composante", sens: "Part de cette composante dans le PIB ou le total (en %)" },
      { symbole: "Taux de croissance de la composante", sens: "Évolution propre de cet élément (en %)" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Moteur de la croissance économique",
      enonce: "La consommation représente 50 % du PIB et progresse de 4 %.",
      donnees: { "Poids": "50 %", "Croissance": "4 %" },
      calcul: "(50 × 4) / 100 = 2 points de %",
      resultat: "2 points",
      phraseLecture: "La consommation des ménages contribue pour 2 points de pourcentage à la croissance du PIB."
    },
    exercicePratique: {
      titre: "Exercice d'application : Contribution de la consommation des ménages",
      enonce: "Dans une économie où le PIB croît de 2,0 % en un an, la consommation des ménages représente 60 % du PIB total et progresse de 2,5 % cette même année.",
      donnees: { "Poids de la consommation": "60 %", "Hausse de la consommation": "+2,5 %" },
      question: "Calculez la contribution de la consommation des ménages à la croissance du PIB en points de pourcentage.",
      reponseAttendue: 1.5,
      unite: "point(s) de %",
      indice: "Multipliez le poids de la consommation (60) par son taux de croissance (2,5) puis divisez par 100.",
      resolutionDetaillee: {
        formuleRappel: "Contribution = (Part de la composante dans le total × Taux de la composante) / 100",
        donneesIdentifiees: [
          { label: "Poids de la consommation dans le PIB", valeur: "60 % (soit 0,60)" },
          { label: "Taux de variation de la consommation", valeur: "+2,5 %" }
        ],
        calculPose: "Contribution = (60 × 2,5) / 100 = 150 / 100 = 1,5 point de pourcentage",
        resultatExact: "1,5 point de %",
        phraseLectureBac: "En France, la consommation des ménages a contribué pour 1,5 point de pourcentage aux 2,0 % de croissance globale du PIB (elle explique donc 75 % de la croissance totale).",
        piegeEvite: "Exprimer impérativement le résultat en 'points de pourcentage' et JAMAIS en '%' !"
      }
    },
    simulateur: {
      champs: [
        { id: "poids", label: "Poids dans le total (en %)", defaultValue: 60, min: 0, max: 100 },
        { id: "taux", label: "Taux de variation de l'élément (en %)", defaultValue: 2.5 }
      ],
      calculer: ({ poids, taux }) => {
        const c = (poids * taux) / 100;
        return {
          valeur: Number(c.toFixed(2)),
          unite: "pt(s) de %",
          calculTexte: `(${poids} × ${taux}) / 100 = ${c.toFixed(2)} point(s)`,
          phraseInterpretation: `Cet élément apporte une contribution de ${c.toFixed(2)} point(s) de pourcentage à la variation globale.`
        };
      }
    },
    pieges: [
      "Confondre '%' et 'points de pourcentage' (erreur sanctionnée au bac).",
      "Oublier qu'une contribution peut être négative (frein à la croissance)."
    ],
    motsCles: ["contribution a la variation", "points de pourcentage", "moteur de croissance", "PIB"]
  },
  {
    id: "valeur-ajoutee",
    nom: "Valeur ajoutée (VA)",
    categorie: "Entreprise et production",
    chapitres: ["Entreprise et production", "Croissance et PIB"],
    niveau: ["Seconde", "Première"],
    formule: "Valeur ajoutée (VA) = Chiffre d'affaires (CA) − Consommations intermédiaires (CI)",
    definitionCourte: "Mesure la richesse nouvelle réellement créée par l'activité productive d'une entreprise.",
    explicationPedagogique: {
      definition: "La valeur ajoutée est la richesse nette créée par une organisation productive après déduction des biens et services détruits ou incorporés lors de la production (consommations intermédiaires).",
      enClair: "Elle ne mesure pas seulement ce qu'on vend (le CA), mais la vraie transformation apportée par le travail et les machines de l'entreprise.",
      uniteEtSens: "Exprimée en euros (€). Sert de base au calcul du PIB et rémunère les salariés, l'État et l'entreprise."
    },
    termesFormule: [
      { symbole: "CA (Chiffre d'affaires)", sens: "Production vendue (Prix × Quantité)" },
      { symbole: "CI (Consommations intermédiaires)", sens: "Achats de matières premières, énergie, fournitures et services extérieurs détruits ou transformés" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Atelier de confection de vêtements",
      enonce: "Une entreprise vend des vêtements pour 120 000 € (CA). Elle a acheté 80 000 € de tissu, boutons et électricité (CI).",
      donnees: { "Chiffre d'affaires": "120 000 €", "Consommations intermédiaires": "80 000 €" },
      calcul: "VA = 120 000 € − 80 000 € = 40 000 €",
      resultat: "40 000 €",
      phraseLecture: "L'atelier a créé 40 000 € de valeur ajoutée (richesse nette) au cours de la période."
    },
    exercicePratique: {
      titre: "Exercice d'application : Valeur ajoutée d'une boulangerie artisanale",
      enonce: "Une boulangerie artisanale réalise un chiffre d'affaires annuel de 250 000 €. Pour fabriquer ses produits, elle achète 65 000 € de farine, beurre et levure, et règle 20 000 € d'électricité, emballages et assurances.",
      donnees: { "Chiffre d'affaires (CA)": 250000, "Matières premières": 65000, "Électricité et services": 20000 },
      question: "Calculez le montant total des consommations intermédiaires puis la valeur ajoutée créée par la boulangerie.",
      reponseAttendue: 165000,
      unite: "€",
      indice: "Additionnez d'abord toutes les consommations intermédiaires (matières + électricité + services), puis soustrayez-les du chiffre d'affaires.",
      resolutionDetaillee: {
        formuleRappel: "Valeur ajoutée (VA) = Chiffre d'affaires (CA) − Consommations intermédiaires (CI)",
        donneesIdentifiees: [
          { label: "Chiffre d'affaires (CA)", valeur: "250 000 €" },
          { label: "Consommations intermédiaires (CI)", valeur: "65 000 + 20 000 = 85 000 €" }
        ],
        calculPose: "VA = 250 000 − 85 000 = 165 000 €",
        resultatExact: "165 000 €",
        phraseLectureBac: "En 2024, cette boulangerie artisanale a créé 165 000 € de valeur ajoutée (richesse propre) grâce à son activité de transformation productive.",
        piegeEvite: "Ne pas confondre valeur ajoutée et bénéfice ! La VA sert encore à payer les salaires (travail), les impôts (État) et l'EBE/profit."
      }
    },
    simulateur: {
      champs: [
        { id: "ca", label: "Chiffre d'affaires (€)", defaultValue: 250000, min: 0 },
        { id: "ci", label: "Consommations intermédiaires (€)", defaultValue: 85000, min: 0 }
      ],
      calculer: ({ ca, ci }) => {
        const va = ca - ci;
        return {
          valeur: Number(va.toFixed(2)),
          unite: "€",
          calculTexte: `VA = ${ca} € − ${ci} € = ${va.toFixed(2)} €`,
          phraseInterpretation: `La valeur ajoutée créée est de ${va.toFixed(2)} €.`
        };
      }
    },
    pieges: [
      "Confondre valeur ajoutée et chiffre d'affaires (le CA inclut la valeur produite par les fournisseurs).",
      "Confondre valeur ajoutée et bénéfice (la VA ne retire pas les salaires ni les impôts)."
    ],
    motsCles: ["valeur ajoutee", "VA", "consommations intermediaires", "chiffre d'affaires", "richesse creee"]
  },
  {
    id: "pib-approche-production",
    nom: "PIB (Approche par la production)",
    categorie: "Macroéconomie",
    chapitres: ["Croissance et PIB", "Entreprise et production"],
    niveau: ["Seconde", "Première"],
    formule: "PIB = Somme des valeurs ajoutées brutes (Σ VAB) + Impôts sur les produits − Subventions sur les produits",
    definitionCourte: "Mesure la richesse totale créée sur le territoire national en un an.",
    explicationPedagogique: {
      definition: "Le Produit Intérieur Brut mesure la valeur de l'ensemble des biens et services finaux produits par les unités résidentes au cours d'une année.",
      enClair: "On additionne la valeur ajoutée de toutes les entreprises, administrations et associations d'un pays, puis on ajoute les taxes sur les produits.",
      uniteEtSens: "Exprimé en milliards d'euros (Md€)."
    },
    termesFormule: [
      { symbole: "Σ VAB", sens: "Somme des valeurs ajoutées des secteurs marchand et non marchand" },
      { symbole: "Impôts − Subventions", sens: "TVA, droits de douane nets des aides publiques sur les produits" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Agrégation nationale",
      enonce: "La somme des valeurs ajoutées s'élève à 2 000 Md€, les impôts nets de subventions à 200 Md€.",
      donnees: { "Somme VA": "2 000 Md€", "Impôts nets": "200 Md€" },
      calcul: "2 000 + 200 = 2 200 Md€",
      resultat: "2 200 Md€",
      phraseLecture: "Le PIB du pays s'élève à 2 200 milliards d'euros pour cette année."
    },
    exercicePratique: {
      titre: "Exercice d'application : Calcul du PIB d'une économie développée",
      enonce: "Dans un pays, la valeur ajoutée des entreprises marchandes est de 1 850 milliards d'euros, celle des administrations publiques de 450 milliards et celle des associations de 50 milliards. Les impôts sur les produits nets de subventions s'élèvent à 180 milliards d'euros.",
      donnees: { "VA Entreprises": 1850, "VA Administrations": 450, "VA Associations": 50, "Impôts nets": 180 },
      question: "Calculez le montant total de la valeur ajoutée brute puis le Produit Intérieur Brut (PIB) de ce pays.",
      reponseAttendue: 2530,
      unite: "Milliards d'€",
      indice: "Additionnez toutes les valeurs ajoutées sectorielles, puis ajoutez le solde impôts moins subventions sur les produits.",
      resolutionDetaillee: {
        formuleRappel: "PIB = Σ Valeurs Ajoutées + (Impôts sur les produits − Subventions)",
        donneesIdentifiees: [
          { label: "Somme des valeurs ajoutées", valeur: "1 850 + 450 + 50 = 2 350 Md€" },
          { label: "Impôts nets de subventions", valeur: "180 Md€" }
        ],
        calculPose: "PIB = 2 350 + 180 = 2 530 milliards d'euros",
        resultatExact: "2 530 Md€",
        phraseLectureBac: "En 2024, le Produit Intérieur Brut (PIB) de ce pays s'établit à 2 530 milliards d'euros.",
        piegeEvite: "Ne jamais additionner les chiffres d'affaires des entreprises (ce qui compterait plusieurs fois les mêmes consommations intermédiaires)."
      }
    },
    simulateur: {
      champs: [
        { id: "va", label: "Somme des VA (en Md€)", defaultValue: 2350, min: 0 },
        { id: "tax", label: "Impôts nets de subventions (en Md€)", defaultValue: 180 }
      ],
      calculer: ({ va, tax }) => {
        const pib = va + tax;
        return {
          valeur: Number(pib.toFixed(2)),
          unite: "Md€",
          calculTexte: `PIB = ${va} + ${tax} = ${pib.toFixed(2)} Md€`,
          phraseInterpretation: `Le PIB calculé s'élève à ${pib.toFixed(2)} milliards d'euros.`
        };
      }
    },
    pieges: [
      "Additionner les chiffres d'affaires au lieu des valeurs ajoutées (erreur de double compte).",
      "Oublier que le PIB comptabilise aussi la production non marchande des administrations publiques."
    ],
    motsCles: ["PIB", "produit interieur brut", "somme des valeurs ajoutees", "croissance", "richesse nationale"]
  },
  {
    id: "pib-par-habitant",
    nom: "PIB par habitant",
    categorie: "Macroéconomie",
    chapitres: ["Croissance et PIB", "Entreprise et production"],
    niveau: ["Seconde", "Première"],
    formule: "PIB par habitant = PIB total / Population totale",
    definitionCourte: "Rapporte la richesse produite au nombre d'habitants pour comparer les niveaux de vie.",
    explicationPedagogique: {
      definition: "Le PIB par habitant mesure la quantité moyenne de richesse produite par personne dans un pays.",
      enClair: "Il permet de comparer le niveau économique de pays de tailles démographiques différentes.",
      uniteEtSens: "Exprimé en euros par habitant (€/hab)."
    },
    termesFormule: [
      { symbole: "PIB total", sens: "Richesse produite totale en euros" },
      { symbole: "Population totale", sens: "Nombre d'habitants du territoire" }
    ],
    exempleCours: {
      titre: "Exemple du cours : PIB par habitant d'un grand pays",
      enonce: "Un PIB de 2 500 milliards d'euros pour une population de 67 millions d'habitants.",
      donnees: { "PIB": "2 500 Md€", "Population": "67 millions" },
      calcul: "2 500 000 000 000 / 67 000 000 ≈ 37 313 €/habitant",
      resultat: "37 313 €/hab",
      phraseLecture: "Le PIB par habitant est d'environ 37 313 € par personne et par an."
    },
    exercicePratique: {
      titre: "Exercice d'application : Niveau de vie moyen d'un pays nordique",
      enonce: "Un pays européen affiche un PIB annuel total de 540 milliards d'euros pour une population recensée de 12 millions d'habitants.",
      donnees: { "PIB total": "540 milliards d'€", "Population": "12 millions d'habitants" },
      question: "Calculez le PIB par habitant de ce pays.",
      reponseAttendue: 45000,
      unite: "€ / habitant",
      indice: "Divisez 540 milliards (540 000 000 000) par 12 millions (12 000 000). Astuce : 540 / 12 = 45 milliers d'€.",
      resolutionDetaillee: {
        formuleRappel: "PIB par habitant = PIB total / Nombre d'habitants",
        donneesIdentifiees: [
          { label: "PIB total", valeur: "540 milliards d'euros = 540 000 M€" },
          { label: "Population totale", valeur: "12 millions d'habitants" }
        ],
        calculPose: "PIB par hab = 540 000 / 12 = 45 000 € / habitant",
        resultatExact: "45 000 € / hab",
        phraseLectureBac: "Dans ce pays en 2024, le PIB par habitant s'élève à 45 000 € par an.",
        piegeEvite: "Ne pas oublier que le PIB par habitant est une moyenne : il ne renseigne ni sur les inégalités de revenus ni sur le bien-être effectif."
      }
    },
    simulateur: {
      champs: [
        { id: "pibMd", label: "PIB total (en Md€)", defaultValue: 540, min: 0.1 },
        { id: "popM", label: "Population (en millions d'habitants)", defaultValue: 12, min: 0.001 }
      ],
      calculer: ({ pibMd, popM }) => {
        const res = (pibMd * 1000) / popM;
        return {
          valeur: Number(res.toFixed(0)),
          unite: "€ / hab",
          calculTexte: `(${pibMd} Md€ × 1000) / ${popM} M hab = ${res.toFixed(0)} € / hab`,
          phraseInterpretation: `Le PIB par habitant s'établit à ${Math.round(res).toLocaleString('fr-FR')} € par personne et par an.`
        };
      }
    },
    pieges: [
      "Confondre PIB par habitant (moyenne brute) et revenu disponible réel des ménages.",
      "Croire que tous les habitants perçoivent ce montant."
    ],
    motsCles: ["PIB par habitant", "niveau de vie", "richesse par tete", "comparaison internationale"]
  },
  {
    id: "taux-croissance-pib",
    nom: "Taux de croissance du PIB (Croissance économique)",
    categorie: "Macroéconomie",
    chapitres: ["Croissance et PIB"],
    niveau: ["Seconde", "Première"],
    formule: "Taux de croissance (%) = [(PIB_volume_N − PIB_volume_N-1) / PIB_volume_N-1] × 100",
    definitionCourte: "Mesure l'augmentation de la production réelle (en volume) d'une année sur l'autre.",
    explicationPedagogique: {
      definition: "Le taux de croissance économique est la variation en pourcentage du Produit Intérieur Brut réel (en volume) sur une période donnée.",
      enClair: "Il mesure si l'économie produit plus de biens et services réels sans être faussée par la hausse des prix.",
      uniteEtSens: "S'exprime en %."
    },
    termesFormule: [
      { symbole: "PIB_volume_N", sens: "PIB déflaté de l'année en cours" },
      { symbole: "PIB_volume_N-1", sens: "PIB déflaté de l'année précédente" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Croissance annuelle",
      enonce: "Le PIB en volume passe de 2 400 Md€ à 2 448 Md€.",
      donnees: { "PIB N-1": "2 400 Md€", "PIB N": "2 448 Md€" },
      calcul: "[(2 448 − 2 400) / 2 400] × 100 = (48 / 2 400) × 100 = +2 %",
      resultat: "+2 %",
      phraseLecture: "La croissance économique a été de 2 % sur l'année."
    },
    exercicePratique: {
      titre: "Exercice d'application : Croissance économique de la France",
      enonce: "En volume (euros constants), le PIB de la France passe de 2 450 milliards d'euros en année N-1 à 2 499 milliards d'euros en année N.",
      donnees: { "PIB année N-1": 2450, "PIB année N": 2499 },
      question: "Calculez le taux de croissance économique du pays entre l'année N-1 et l'année N.",
      reponseAttendue: 2.0,
      unite: "%",
      indice: "Faites (PIB_N − PIB_N-1) / PIB_N-1 puis multipliez par 100.",
      resolutionDetaillee: {
        formuleRappel: "Croissance (%) = [(PIB_N − PIB_N-1) / PIB_N-1] × 100",
        donneesIdentifiees: [
          { label: "PIB année N-1 (VD)", valeur: "2 450 Md€" },
          { label: "PIB année N (VA)", valeur: "2 499 Md€" }
        ],
        calculPose: "Taux = [(2 499 − 2 450) / 2 450] × 100 = (49 / 2 450) × 100 = +2,0 %",
        resultatExact: "+2,0 %",
        phraseLectureBac: "En France, entre l'année N-1 et l'année N, le PIB en volume a progressé de 2,0 % (la croissance économique s'élève donc à 2,0 %).",
        piegeEvite: "Toujours utiliser le PIB en volume (euros constants) et non le PIB en valeur pour éliminer l'effet de l'inflation."
      }
    },
    simulateur: {
      champs: [
        { id: "pib1", label: "PIB volume année N-1 (Md€)", defaultValue: 2450, min: 0.1 },
        { id: "pib2", label: "PIB volume année N (Md€)", defaultValue: 2499, min: 0.1 }
      ],
      calculer: ({ pib1, pib2 }) => {
        const tx = ((pib2 - pib1) / pib1) * 100;
        const signe = tx >= 0 ? "+" : "";
        return {
          valeur: Number(tx.toFixed(2)),
          unite: "%",
          calculTexte: `[(${pib2} − ${pib1}) / ${pib1}] × 100 = ${signe}${tx.toFixed(2)} %`,
          phraseInterpretation: `Le taux de croissance économique est de ${signe}${tx.toFixed(2)} %.`
        };
      }
    },
    pieges: [
      "Calculer la croissance à partir du PIB en valeur nominale sans le corriger de l'inflation.",
      "Confondre ralentissement de la croissance (ex: passer de +3% à +1%) et récession (croissance négative)."
    ],
    motsCles: ["croissance economique", "taux de croissance", "PIB reel", "expansion", "recession"]
  },
  {
    id: "prix-quantite-equilibre",
    nom: "Prix et Quantité d'équilibre de marché",
    categorie: "Marché et concurrence",
    chapitres: ["Marché et prix", "Marché concurrentiel"],
    niveau: ["Seconde", "Première"],
    formule: "À l'équilibre : Offre(P) = Demande(P) -> On résout l'équation pour trouver le prix d'équilibre P* puis la quantité Q*",
    definitionCourte: "Prix et quantité pour lesquels l'offre globale égale la demande globale sur un marché.",
    explicationPedagogique: {
      definition: "Le prix d'équilibre est le prix unique pour lequel la quantité offerte par les producteurs est exactement égale à la quantité demandée par les consommateurs.",
      enClair: "À ce prix, il n'y a ni pénurie (demande supérieure à l'offre) ni surproduction (offre supérieure à la demande).",
      uniteEtSens: "Prix en euros (€) et quantité en unités."
    },
    termesFormule: [
      { symbole: "Offre Qo(P)", sens: "Fonction croissante du prix P" },
      { symbole: "Demande Qd(P)", sens: "Fonction décroissante du prix P" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Marché de la pomme",
      enonce: "Qo = 2P et Qd = -P + 30.",
      donnees: { "Offre": "2P", "Demande": "-P + 30" },
      calcul: "2P = -P + 30 => 3P = 30 => P* = 10 €. Q* = 2×10 = 20 kg.",
      resultat: "P* = 10 €, Q* = 20",
      phraseLecture: "Le prix d'équilibre est de 10 € le kilo et la quantité échangée à l'équilibre est de 20 kg."
    },
    exercicePratique: {
      titre: "Exercice d'application : Marché des vélos à assistance électrique",
      enonce: "Sur le marché local des vélos électriques, la fonction d'offre est Qo = 20P − 2 000 et la fonction de demande est Qd = −10P + 10 000, où P représente le prix unitaire d'un vélo en euros.",
      donnees: { "Offre Qo": "20P − 2 000", "Demande Qd": "−10P + 10 000" },
      question: "Déterminez le prix d'équilibre P* et la quantité d'équilibre Q* de vélos échangés sur ce marché.",
      reponseAttendue: 400,
      unite: "€ (Prix d'équilibre)",
      indice: "Écrivez l'égalité Qo = Qd : 20P − 2 000 = −10P + 10 000. Rassemblez les P à gauche et les nombres à droite.",
      resolutionDetaillee: {
        formuleRappel: "À l'équilibre : Offre (Qo) = Demande (Qd)",
        donneesIdentifiees: [
          { label: "Équation d'offre", valeur: "Qo = 20P − 2 000" },
          { label: "Équation de demande", valeur: "Qd = −10P + 10 000" }
        ],
        calculPose: "20P − 2 000 = −10P + 10 000 => 30P = 12 000 => P* = 400 €. Q* = 20(400) − 2 000 = 8 000 − 2 000 = 6 000 vélos.",
        resultatExact: "P* = 400 € et Q* = 6 000 vélos",
        phraseLectureBac: "À l'équilibre du marché, le prix du vélo électrique se fixe à 400 € et 6 000 vélos sont échangés entre acheteurs et vendeurs.",
        piegeEvite: "Vérifier la quantité en remplaçant P* dans les deux fonctions : Qd = −10(400) + 10 000 = 6 000 (le compte est bon !)."
      }
    },
    simulateur: {
      champs: [
        { id: "a", label: "Pente offre a (Qo = aP - b)", defaultValue: 20, min: 1 },
        { id: "b", label: "Constante offre b", defaultValue: 2000 },
        { id: "c", label: "Pente demande c (Qd = -cP + d)", defaultValue: 10, min: 1 },
        { id: "d", label: "Constante demande d", defaultValue: 10000 }
      ],
      calculer: ({ a, b, c, d }) => {
        const pStar = (b + d) / (a + c);
        const qStar = a * pStar - b;
        return {
          valeur: Number(pStar.toFixed(2)),
          unite: "€",
          calculTexte: `P* = (${b} + ${d}) / (${a} + ${c}) = ${pStar.toFixed(2)} € | Q* = ${qStar.toFixed(0)} unités`,
          phraseInterpretation: `Prix d'équilibre : ${pStar.toFixed(2)} € pour une quantité échangée de ${Math.round(qStar)} unités.`
        };
      }
    },
    pieges: [
      "Inverser l'offre (croissante du prix) et la demande (décroissante du prix).",
      "Oublier de calculer la quantité d'équilibre une fois le prix trouvé."
    ],
    motsCles: ["prix d'equilibre", "quantite d'equilibre", "loi offre demande", "marche concurrentiel"]
  },
  {
    id: "elasticite-prix-demande",
    nom: "Élasticité-prix de la demande",
    categorie: "Marché et concurrence",
    chapitres: ["Marché et prix", "Marché concurrentiel"],
    niveau: ["Seconde", "Première"],
    formule: "e_(d/p) = Taux de variation de la demande (%) / Taux de variation du prix (%)",
    definitionCourte: "Mesure la sensibilité de la demande des consommateurs suite à une variation du prix.",
    explicationPedagogique: {
      definition: "L'élasticité-prix de la demande mesure le pourcentage de variation de la quantité demandée pour une variation de 1 % du prix du bien.",
      enClair: "Si le prix monte de 10 % et que les ventes chutent de 15 %, l'élasticité vaut -1,5 (demande très sensible / élastique).",
      uniteEtSens: "Nombre généralement négatif (car la demande baisse quand le prix monte)."
    },
    termesFormule: [
      { symbole: "% Δ Demande", sens: "Taux de variation de la quantité demandée en %" },
      { symbole: "% Δ Prix", sens: "Taux de variation du prix de vente en %" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Hausse de prix d'un produit classique",
      enonce: "Le prix d'un bien augmente de 10 % et la quantité demandée diminue de 15 %.",
      donnees: { "Variation prix": "+10 %", "Variation demande": "-15 %" },
      calcul: "e = -15 % / +10 % = -1,5",
      resultat: "-1,5",
      phraseLecture: "L'élasticité-prix est de -1,5 : quand le prix augmente de 1 %, la demande baisse de 1,5 %."
    },
    exercicePratique: {
      titre: "Exercice d'application : Sensibilité au prix des billets de train",
      enonce: "À la suite de la hausse des coûts de l'énergie, les tarifs des billets de train augmentent de 8 %. L'opérateur ferroviaire constate que le nombre de voyages achetés diminue de 12 % sur la ligne.",
      donnees: { "Taux variation prix": "+8 %", "Taux variation demande": "-12 %" },
      question: "Calculez l'élasticité-prix de la demande et interprétez sa valeur.",
      reponseAttendue: -1.5,
      unite: "",
      indice: "Divisez le taux d'évolution de la demande (-12 %) par le taux d'évolution du prix (+8 %).",
      resolutionDetaillee: {
        formuleRappel: "Élasticité-prix = (% variation de la quantité demandée) / (% variation du prix)",
        donneesIdentifiees: [
          { label: "Variation de la demande", valeur: "-12 %" },
          { label: "Variation du prix", valeur: "+8 %" }
        ],
        calculPose: "e_(d/p) = (-12 %) / (+8 %) = -1,5",
        resultatExact: "-1,5",
        phraseLectureBac: "L'élasticité-prix de la demande de billets de train est de -1,5. Lorsque le prix augmente de 1 %, la quantité demandée recule de 1,5 %. Comme |e| > 1, la demande est dite élastique par rapport au prix.",
        piegeEvite: "Ne pas inverser le numérateur et le dénominateur : c'est toujours la Demande (effet) divisée par le Prix (cause)."
      }
    },
    simulateur: {
      champs: [
        { id: "varQ", label: "Variation de la Demande (%)", defaultValue: -12 },
        { id: "varP", label: "Variation du Prix (%)", defaultValue: 8, min: 0.001 }
      ],
      calculer: ({ varQ, varP }) => {
        const e = varQ / (varP !== 0 ? varP : 1);
        return {
          valeur: Number(e.toFixed(2)),
          unite: "",
          calculTexte: `e = ${varQ} % / ${varP} % = ${e.toFixed(2)}`,
          phraseInterpretation: `L'élasticité-prix est de ${e.toFixed(2)}. Quand le prix augmente de 1 %, la demande varie de ${e.toFixed(2)} %.`
        };
      }
    },
    pieges: [
      "Inverser le prix et la demande dans la division (mettre le prix en haut est l'erreur la plus fréquente).",
      "Oublier le signe négatif."
    ],
    motsCles: ["elasticite prix", "demande elastique", "sensibilite au prix", "loi de la demande"]
  },
  {
    id: "taux-de-chomage-bit",
    nom: "Taux de chômage (Définition BIT / INSEE)",
    categorie: "Emploi et travail",
    chapitres: ["Emploi et travail", "Sociologie du travail"],
    niveau: ["Seconde", "Première"],
    formule: "Taux de chômage (%) = (Nombre de chômeurs au sens du BIT / Population active totale) × 100",
    definitionCourte: "Mesure la part des personnes sans emploi en recherche active au sein de la population active.",
    explicationPedagogique: {
      definition: "Le taux de chômage est le pourcentage de chômeurs au sens du Bureau International du Travail (sans emploi, disponibles sous 15 jours et recherchant activement) dans la population active.",
      enClair: "On rapporte les chômeurs UNIQUEMENT aux actifs (personnes en emploi + chômeurs), et JAMAIS à la population totale.",
      uniteEtSens: "S'exprime en %."
    },
    termesFormule: [
      { symbole: "Chômeurs", sens: "Personnes sans emploi en recherche active" },
      { symbole: "Population active", sens: "Actifs occupés (en emploi) + Chômeurs" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Économie nationale",
      enonce: "Dans un pays, on compte 3 millions de chômeurs pour une population active de 30 millions de personnes.",
      donnees: { "Chômeurs": "3 millions", "Population active": "30 millions" },
      calcul: "(3 / 30) × 100 = 10 %",
      resultat: "10 %",
      phraseLecture: "Le taux de chômage est de 10 % de la population active."
    },
    exercicePratique: {
      titre: "Exercice d'application : Taux de chômage en France métropolitaine",
      enonce: "Dans un pays, la population active s'élève à 28,5 millions de personnes. Parmi elles, 2,1 millions d'individus répondent aux critères du chômage au sens du BIT.",
      donnees: { "Population active": 28.5, "Nombre de chômeurs BIT": 2.1 },
      question: "Calculez le taux de chômage de cette économie.",
      reponseAttendue: 7.37,
      unite: "%",
      indice: "Divisez le nombre de chômeurs (2,1 M) par la population active (28,5 M) puis multipliez par 100.",
      resolutionDetaillee: {
        formuleRappel: "Taux de chômage (%) = (Nombre de chômeurs / Population active) × 100",
        donneesIdentifiees: [
          { label: "Nombre de chômeurs au sens du BIT", valeur: "2,1 millions" },
          { label: "Population active (emploi + chômage)", valeur: "28,5 millions" }
        ],
        calculPose: "Taux de chômage = (2,1 / 28,5) × 100 ≈ 0,07368 × 100 ≈ 7,37 % (ou 7,4 %)",
        resultatExact: "7,37 %",
        phraseLectureBac: "Selon l'INSEE et le BIT, en 2024, 7,37 % de la population active est au chômage dans ce pays (soit environ 7 actifs sur 100 sont sans emploi et en recherche active).",
        piegeEvite: "NE JAMAIS diviser par la population totale de 68 millions d'habitants : les inactifs (retraités, enfants, étudiants) ne font pas partie du dénominateur !"
      }
    },
    simulateur: {
      champs: [
        { id: "chom", label: "Nombre de chômeurs (en millions)", defaultValue: 2.1, min: 0 },
        { id: "act", label: "Population active (en millions)", defaultValue: 28.5, min: 0.1 }
      ],
      calculer: ({ chom, act }) => {
        const tx = (chom / act) * 100;
        return {
          valeur: Number(tx.toFixed(2)),
          unite: "%",
          calculTexte: `(${chom} / ${act}) × 100 = ${tx.toFixed(2)} %`,
          phraseInterpretation: `Le taux de chômage s'élève à ${tx.toFixed(2)} % de la population active.`
        };
      }
    },
    pieges: [
      "Diviser par la population totale au lieu de la population active (erreur classique).",
      "Confondre chômeurs BIT et demandeurs d'emploi inscrits à France Travail (catégories administratives différentes)."
    ],
    motsCles: ["taux de chomage", "chomeur BIT", "population active", "INSEE", "emploi"]
  },
  {
    id: "taux-d-emploi",
    nom: "Taux d'emploi",
    categorie: "Emploi et travail",
    chapitres: ["Emploi et travail"],
    niveau: ["Seconde", "Première"],
    formule: "Taux d'emploi (%) = (Nombre de personnes en emploi / Population totale en âge de travailler [15-64 ans]) × 100",
    definitionCourte: "Mesure la proportion des personnes en âge de travailler qui occupent effectivement un emploi.",
    explicationPedagogique: {
      definition: "Le taux d'emploi rapporte le nombre d'actifs occupés à l'ensemble de la population en âge de travailler (15-64 ans).",
      enClair: "Il mesure la capacité d'une économie à mobiliser ses ressources humaines dans l'emploi.",
      uniteEtSens: "S'exprime en %."
    },
    termesFormule: [
      { symbole: "Actifs occupés", sens: "Personnes ayant un travail rémunéré" },
      { symbole: "Population 15-64 ans", sens: "Ensemble de la population en âge de travailler (actifs + inactifs)" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Taux d'emploi global",
      enonce: "Sur 40 millions de personnes âgées de 15 à 64 ans, 27 millions occupent un emploi.",
      donnees: { "En emploi": "27 millions", "15-64 ans": "40 millions" },
      calcul: "(27 / 40) × 100 = 67,5 %",
      resultat: "67,5 %",
      phraseLecture: "Le taux d'emploi des 15-64 ans est de 67,5 %."
    },
    exercicePratique: {
      titre: "Exercice d'application : Taux d'emploi d'une région",
      enonce: "Dans une région, on recense 1 200 000 habitants âgés de 15 à 64 ans. Parmi eux, 816 000 personnes exercent un emploi rémunéré.",
      donnees: { "Population en âge de travailler (15-64 ans)": 1200000, "Personnes en emploi": 816000 },
      question: "Calculez le taux d'emploi des 15-64 ans dans cette région.",
      reponseAttendue: 68.0,
      unite: "%",
      indice: "Divisez le nombre de personnes ayant un emploi par la population totale des 15-64 ans.",
      resolutionDetaillee: {
        formuleRappel: "Taux d'emploi (%) = (Actifs ayant un emploi / Population 15-64 ans) × 100",
        donneesIdentifiees: [
          { label: "Personnes en emploi", valeur: "816 000" },
          { label: "Population 15-64 ans", valeur: "1 200 000" }
        ],
        calculPose: "Taux d'emploi = (816 000 / 1 200 000) × 100 = 0,68 × 100 = 68,0 %",
        resultatExact: "68,0 %",
        phraseLectureBac: "Dans cette région, 68 % des personnes âgées de 15 à 64 ans occupent un emploi rémunéré.",
        piegeEvite: "Ne pas confondre avec le taux d'activité (qui inclut aussi les chômeurs au numérateur)."
      }
    },
    simulateur: {
      champs: [
        { id: "emp", label: "Personnes en emploi (millions)", defaultValue: 27.2, min: 0 },
        { id: "pop", label: "Population 15-64 ans (millions)", defaultValue: 40, min: 0.1 }
      ],
      calculer: ({ emp, pop }) => {
        const tx = (emp / pop) * 100;
        return {
          valeur: Number(tx.toFixed(2)),
          unite: "%",
          calculTexte: `(${emp} / ${pop}) × 100 = ${tx.toFixed(2)} %`,
          phraseInterpretation: `Le taux d'emploi est de ${tx.toFixed(2)} % de la tranche d'âge 15-64 ans.`
        };
      }
    },
    pieges: [
      "Confondre taux d'emploi (personnes avec un travail / 15-64 ans) et taux d'activité (actifs / 15-64 ans).",
      "Oublier que le dénominateur comprend les inactifs (étudiants, personnes au foyer)."
    ],
    motsCles: ["taux d'emploi", "actifs occupes", "15-64 ans", "mobilisation du travail"]
  },
  {
    id: "taux-d-activite",
    nom: "Taux d'activité",
    categorie: "Emploi et travail",
    chapitres: ["Emploi et travail"],
    niveau: ["Seconde", "Première"],
    formule: "Taux d'activité (%) = (Population active [Emploi + Chômage] / Population totale en âge de travailler [15-64 ans]) × 100",
    definitionCourte: "Mesure la part des 15-64 ans qui participent ou souhaitent participer au marché du travail.",
    explicationPedagogique: {
      definition: "Le taux d'activité rapporte la population active (qui travaille ou cherche à travailler) à l'ensemble des personnes en âge de travailler.",
      enClair: "Il mesure le désir d'insertion professionnelle de la population.",
      uniteEtSens: "S'exprime en %."
    },
    termesFormule: [
      { symbole: "Population active", sens: "Personnes en emploi + chômeurs" },
      { symbole: "Population 15-64 ans", sens: "Total des personnes en âge de travailler" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Activité globale",
      enonce: "Sur 40 millions de personnes de 15 à 64 ans, 30 millions sont actives (27 M en emploi + 3 M chômeurs).",
      donnees: { "Actifs": "30 millions", "15-64 ans": "40 millions" },
      calcul: "(30 / 40) × 100 = 75 %",
      resultat: "75 %",
      phraseLecture: "Le taux d'activité des 15-64 ans est de 75 %."
    },
    exercicePratique: {
      titre: "Exercice d'application : Taux d'activité national",
      enonce: "Dans un pays, la population en âge de travailler (15-64 ans) compte 38 millions d'individus. On y dénombre 26,6 millions d'actifs en emploi et 2,28 millions de chômeurs.",
      donnees: { "Population 15-64 ans": 38, "Actifs occupés": 26.6, "Chômeurs": 2.28 },
      question: "Calculez la population active totale puis le taux d'activité des 15-64 ans.",
      reponseAttendue: 76.0,
      unite: "%",
      indice: "Additionnez les actifs occupés et les chômeurs pour trouver la population active, puis divisez par 38 millions.",
      resolutionDetaillee: {
        formuleRappel: "Taux d'activité (%) = [(Emploi + Chômage) / Population 15-64 ans] × 100",
        donneesIdentifiees: [
          { label: "Population active totale", valeur: "26,6 + 2,28 = 28,88 millions" },
          { label: "Population en âge de travailler (15-64 ans)", valeur: "38 millions" }
        ],
        calculPose: "Taux d'activité = (28,88 / 38) × 100 = 0,76 × 100 = 76,0 %",
        resultatExact: "76,0 %",
        phraseLectureBac: "Dans ce pays en 2024, 76 % des personnes âgées de 15 à 64 ans sont actives (soit en emploi, soit en recherche active d'emploi).",
        piegeEvite: "Ne pas oublier d'inclure les chômeurs dans la population active au numérateur."
      }
    },
    simulateur: {
      champs: [
        { id: "act", label: "Population active (millions)", defaultValue: 28.88, min: 0 },
        { id: "pop", label: "Population 15-64 ans (millions)", defaultValue: 38, min: 0.1 }
      ],
      calculer: ({ act, pop }) => {
        const tx = (act / pop) * 100;
        return {
          valeur: Number(tx.toFixed(2)),
          unite: "%",
          calculTexte: `(${act} / ${pop}) × 100 = ${tx.toFixed(2)} %`,
          phraseInterpretation: `Le taux d'activité s'élève à ${tx.toFixed(2)} % des 15-64 ans.`
        };
      }
    },
    pieges: [
      "Oublier les chômeurs dans le calcul des actifs.",
      "Confondre inactifs (retraités, étudiants) et chômeurs (qui sont des actifs)."
    ],
    motsCles: ["taux d'activite", "population active", "15-64 ans", "inactifs"]
  },
  {
    id: "salaire-net-a-partir-du-brut",
    nom: "Salaire brut vs Salaire net et Cotisations sociales",
    categorie: "Emploi et travail",
    chapitres: ["Emploi et travail", "Protection sociale"],
    niveau: ["Seconde", "Première"],
    formule: "Salaire net ≈ Salaire brut − Cotisations sociales salariales (environ 22 % du brut dans le privé)",
    definitionCourte: "Calcul du montant effectivement versé au salarié après déduction des cotisations de sécurité sociale.",
    explicationPedagogique: {
      definition: "Le salaire brut est la rémunération fixée au contrat. Le salaire net est ce que touche le travailleur après prélèvement des cotisations sociales salariales finançant la protection sociale (retraite, maladie, chômage).",
      enClair: "Sur 100 € de salaire brut, environ 22 € partent en cotisations salariales et 78 € arrivent sur le compte bancaire du salarié.",
      uniteEtSens: "Exprimé en euros (€)."
    },
    termesFormule: [
      { symbole: "Salaire brut", sens: "Rémunération totale contractuelle avant cotisations" },
      { symbole: "Taux de cotisations", sens: "Environ 20 à 25 % (22 % en moyenne dans le secteur privé)" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Salarié débutant",
      enonce: "Un contrat propose un salaire brut de 2 500 € par mois (taux de cotisations estimé à 22 %).",
      donnees: { "Salaire brut": "2 500 €", "Cotisations": "22 %" },
      calcul: "Cotisations = 2 500 × 0,22 = 550 €. Net = 2 500 − 550 = 1 950 €",
      resultat: "1 950 € net",
      phraseLecture: "Le salaire net mensuel perçu par le travailleur s'élève à 1 950 €."
    },
    exercicePratique: {
      titre: "Exercice d'application : Salaire net d'un cadre",
      enonce: "Un jeune diplômé signe un contrat de travail avec un salaire mensuel brut de 3 200 €. Les cotisations sociales salariales s'élèvent à 22 % du salaire brut.",
      donnees: { "Salaire brut": 3200, "Taux de cotisations salariales": "22 %" },
      question: "Calculez le montant des cotisations salariales retenues puis le salaire mensuel net versé au salarié.",
      reponseAttendue: 2496,
      unite: "€",
      indice: "Calculez 22 % de 3 200 € (3 200 × 0,22), puis soustrayez ce montant de 3 200 € (ou faites 3 200 × 0,78).",
      resolutionDetaillee: {
        formuleRappel: "Salaire net = Salaire brut × (1 − Taux de cotisations)",
        donneesIdentifiees: [
          { label: "Salaire brut", valeur: "3 200 €" },
          { label: "Montant des cotisations salariales", valeur: "3 200 × 0,22 = 704 €" }
        ],
        calculPose: "Salaire net = 3 200 − 704 = 2 496 € (ou 3 200 × 0,78 = 2 496 €)",
        resultatExact: "2 496 €",
        phraseLectureBac: "Le salarié percevra un salaire mensuel net avant impôt sur le revenu de 2 496 € sur son compte bancaire.",
        piegeEvite: "Ne pas confondre cotisations salariales (déduites du brut) et cotisations patronales (payées par l'employeur en plus du brut pour former le coût total du travail / salaire superbrut)."
      }
    },
    simulateur: {
      champs: [
        { id: "brut", label: "Salaire brut mensuel (€)", defaultValue: 3200, min: 0 },
        { id: "taux", label: "Taux cotisations salariales (%)", defaultValue: 22, min: 0, max: 50 }
      ],
      calculer: ({ brut, taux }) => {
        const cotis = brut * (taux / 100);
        const net = brut - cotis;
        return {
          valeur: Number(net.toFixed(2)),
          unite: "€ net",
          calculTexte: `${brut} € − (${brut} × ${taux}%) = ${brut} − ${cotis.toFixed(2)} = ${net.toFixed(2)} €`,
          phraseInterpretation: `Le salaire net versé est de ${net.toFixed(2)} € (cotisations retenues : ${cotis.toFixed(2)} €).`
        };
      }
    },
    pieges: [
      "Confondre salaire net (reçu par le salarié), salaire brut (contrat) et salaire superbrut (coût total employeur).",
      "Oublier que les cotisations sociales ne sont pas des 'taxes perdues' mais du salaire différé ouvrant des droits sociaux."
    ],
    motsCles: ["salaire brut", "salaire net", "cotisations sociales", "salaire indirect", "cout du travail"]
  },
  {
    id: "surplus-consommateur-producteur",
    nom: "Surplus du consommateur et du producteur (Gains à l'échange)",
    categorie: "Marché et concurrence",
    chapitres: ["Marché concurrentiel", "Marché et prix"],
    niveau: ["Première"],
    formule: "Surplus conso = Prix de réserve acheteur − Prix de marché   |   Surplus prod = Prix de marché − Prix minimum vendeur",
    definitionCourte: "Mesure le gain économique net tiré de la participation à l'échange marchand.",
    explicationPedagogique: {
      definition: "Le surplus mesure l'écart entre ce qu'un agent était prêt à payer (ou accepter) et le prix d'équilibre réel du marché.",
      enClair: "Pour le consommateur, c'est l'économie réalisée par rapport à son consentement à payer maximal. Pour le producteur, c'est le gain au-dessus de son coût minimum.",
      uniteEtSens: "Exprimé en euros (€)."
    },
    termesFormule: [
      { symbole: "Prix de réserve acheteur", sens: "Prix maximum qu'un acheteur accepte de payer" },
      { symbole: "Prix de marché", sens: "Prix d'équilibre constaté" },
      { symbole: "Prix minimum vendeur", sens: "Coût marginal de production" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Achat d'une place de concert",
      enonce: "Un acheteur était prêt à payer 50 € pour un billet vendu à 35 € au prix de marché.",
      donnees: { "Prix de réserve": "50 €", "Prix marché": "35 €" },
      calcul: "50 € − 35 € = 15 €",
      resultat: "15 € de surplus",
      phraseLecture: "Le consommateur réalise un surplus (gain à l'échange) de 15 €."
    },
    exercicePratique: {
      titre: "Exercice d'application : Surplus sur le marché du jeu vidéo",
      enonce: "Un joueur était prêt à dépenser jusqu'à 70 € pour un jeu vidéo neuf. Il l'achète finalement en boutique au prix d'équilibre de 45 €. Le commerçant, quant à lui, était disposé à le vendre pour un seuil minimum de 30 €.",
      donnees: { "Prix de réserve acheteur": 70, "Prix de marché P*": 45, "Prix minimum vendeur": 30 },
      question: "Calculez le surplus du consommateur, le surplus du producteur, et le surplus total de cet échange.",
      reponseAttendue: 40,
      unite: "€ (Surplus total)",
      indice: "Surplus conso = 70 − 45. Surplus prod = 45 − 30. Surplus total = Surplus conso + Surplus prod.",
      resolutionDetaillee: {
        formuleRappel: "Surplus total = (Prix max acheteur − Prix marché) + (Prix marché − Prix min vendeur)",
        donneesIdentifiees: [
          { label: "Surplus consommateur", valeur: "70 € − 45 € = 25 €" },
          { label: "Surplus producteur", valeur: "45 € − 30 € = 15 €" }
        ],
        calculPose: "Surplus total = 25 € + 15 € = 40 € (ou 70 − 30 = 40 €)",
        resultatExact: "Surplus total = 40 € (Conso: 25 €, Prod: 15 €)",
        phraseLectureBac: "L'acheteur réalise un gain à l'échange de 25 €, le vendeur dégage un surplus de 15 €, ce qui génère un surplus global de 40 € pour l'économie grâce à cet échange marchand.",
        piegeEvite: "Ne pas inverser les soustractions (un surplus est toujours positif ou nul pour un échange volontaire)."
      }
    },
    simulateur: {
      champs: [
        { id: "pMax", label: "Prix max acheteur (€)", defaultValue: 70 },
        { id: "pMarche", label: "Prix de marché (€)", defaultValue: 45 },
        { id: "pMin", label: "Prix min vendeur (€)", defaultValue: 30 }
      ],
      calculer: ({ pMax, pMarche, pMin }) => {
        const sc = pMax - pMarche;
        const sp = pMarche - pMin;
        const total = sc + sp;
        return {
          valeur: Number(total.toFixed(2)),
          unite: "€",
          calculTexte: `Surplus conso = ${pMax} − ${pMarche} = ${sc} € | Surplus prod = ${pMarche} − ${pMin} = ${sp} € | Total = ${total} €`,
          phraseInterpretation: `Surplus total généré par l'échange : ${total.toFixed(2)} € (Conso : ${sc} €, Prod : ${sp} €).`
        };
      }
    },
    pieges: [
      "Confondre le surplus avec le chiffre d'affaires ou le profit comptable.",
      "Oublier que sur un graphique, le surplus correspond à l'aire des triangles sous la courbe de demande et au-dessus de l'offre."
    ],
    motsCles: ["surplus", "surplus du consommateur", "surplus du producteur", "gains a l'echange", "efficacite"]
  },
  {
    id: "cout-marginal",
    nom: "Coût marginal (Cm) et Coût moyen (CM)",
    categorie: "Entreprise et production",
    chapitres: ["Marché concurrentiel", "Entreprise et production"],
    niveau: ["Première"],
    formule: "Coût marginal (Cm) = Coût total(Q) − Coût total(Q−1)   |   Coût moyen (CM) = Coût total(Q) / Q",
    definitionCourte: "Le coût marginal est le coût de la dernière unité supplémentaire produite.",
    explicationPedagogique: {
      definition: "Le coût marginal mesure le surcroît de dépense entraîné par la production d'une unité supplémentaire de bien ou de service.",
      enClair: "Une entreprise en concurrence pure et parfaite produit jusqu'à ce que son Coût marginal devienne égal au Prix de marché (Prix = Cm pour maximiser son profit).",
      uniteEtSens: "Exprimé en euros par unité (€/unité)."
    },
    termesFormule: [
      { symbole: "CT(Q)", sens: "Coût total pour Q unités" },
      { symbole: "CT(Q−1)", sens: "Coût total pour Q−1 unités" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Fabrication de chaises",
      enonce: "Produire 10 chaises coûte 100 € au total ; produire 11 chaises coûte 115 €.",
      donnees: { "CT(10)": "100 €", "CT(11)": "115 €" },
      calcul: "Cm(11) = 115 − 100 = 15 €",
      resultat: "15 €",
      phraseLecture: "La 11ème chaise coûte 15 € supplémentaires à fabriquer (son coût marginal est de 15 €)."
    },
    exercicePratique: {
      titre: "Exercice d'application : Coût marginal dans une menuiserie",
      enonce: "Une menuiserie industrielle produit 50 tables pour un coût total de 4 500 €. Lorsqu'elle décide de porter sa production à 51 tables, son coût total passe à 4 570 €.",
      donnees: { "Coût total 50 tables": 4500, "Coût total 51 tables": 4570 },
      question: "Calculez le coût marginal de la 51ème table et le coût moyen pour 51 tables.",
      reponseAttendue: 70,
      unite: "€ (Coût marginal)",
      indice: "Soustrayez le coût total pour 50 tables du coût total pour 51 tables.",
      resolutionDetaillee: {
        formuleRappel: "Coût marginal (Cm) = CT(51) − CT(50)",
        donneesIdentifiees: [
          { label: "Coût total pour 51 unités", valeur: "4 570 €" },
          { label: "Coût total pour 50 unités", valeur: "4 500 €" }
        ],
        calculPose: "Cm(51) = 4 570 € − 4 500 € = 70 €  (et Coût moyen = 4 570 / 51 ≈ 89,61 € / table)",
        resultatExact: "70 €",
        phraseLectureBac: "La production d'une 51ème table génère un coût supplémentaire de 70 € pour l'entreprise (coût marginal = 70 €).",
        piegeEvite: "Ne pas confondre coût moyen (coût par table en moyenne = 89,61 €) et coût marginal (coût de la dernière = 70 €)."
      }
    },
    simulateur: {
      champs: [
        { id: "ct1", label: "Coût total pour Q unités (€)", defaultValue: 4500, min: 0 },
        { id: "ct2", label: "Coût total pour Q+1 unités (€)", defaultValue: 4570, min: 0 }
      ],
      calculer: ({ ct1, ct2 }) => {
        const cm = ct2 - ct1;
        return {
          valeur: Number(cm.toFixed(2)),
          unite: "€",
          calculTexte: `Cm = ${ct2} € − ${ct1} € = ${cm.toFixed(2)} €`,
          phraseInterpretation: `Le coût marginal de la dernière unité produite est de ${cm.toFixed(2)} €.`
        };
      }
    },
    pieges: [
      "Confondre coût marginal (dernière unité) et coût moyen (toutes les unités).",
      "Oublier que le profit est maximal quand le Prix = Coût marginal (sur la phase croissante du Cm)."
    ],
    motsCles: ["cout marginal", "cout moyen", "maximisation du profit", "rendements decroissants"]
  },
  {
    id: "profit",
    nom: "Profit (Bénéfice économique)",
    categorie: "Entreprise et production",
    chapitres: ["Entreprise et production", "Marché concurrentiel"],
    niveau: ["Seconde", "Première"],
    formule: "Profit (π) = Recette totale (CA) − Coût total (CT) = (Prix × Quantité) − (Coûts fixes + Coûts variables)",
    definitionCourte: "Mesure le gain net restant à l'entreprise après paiement de l'ensemble de ses charges.",
    explicationPedagogique: {
      definition: "Le profit est la différence positive entre le chiffre d'affaires et l'ensemble des coûts de production (fixes et variables).",
      enClair: "C'est ce qui reste aux propriétaires de l'entreprise une fois que tous les fournisseurs, salariés et impôts ont été réglés.",
      uniteEtSens: "Exprimé en euros (€)."
    },
    termesFormule: [
      { symbole: "Recette totale (RT / CA)", sens: "Prix de vente unitaire × Quantité vendue" },
      { symbole: "Coût total (CT)", sens: "Coûts fixes (loyer, machines) + Coûts variables (matières premières, heures)" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Entreprise commerciale",
      enonce: "Une entreprise vend 1 000 articles à 50 € (CA = 50 000 €) pour un coût total de 38 000 €.",
      donnees: { "CA": "50 000 €", "Coût total": "38 000 €" },
      calcul: "50 000 − 38 000 = 12 000 €",
      resultat: "12 000 €",
      phraseLecture: "L'entreprise réalise un profit net de 12 000 €."
    },
    exercicePratique: {
      titre: "Exercice d'application : Rentabilité d'un atelier de céramique",
      enonce: "Un artisan céramiste fabrique et vend 800 vases au prix de 45 € l'unité. Ses coûts fixes s'élèvent à 12 000 € par an et son coût variable unitaire est de 18 € par vase fabriqué.",
      donnees: { "Quantité vendue": 800, "Prix unitaire": 45, "Coûts fixes": 12000, "Coût variable unitaire": 18 },
      question: "Calculez le chiffre d'affaires, le coût total et le profit réalisé par l'artisan.",
      reponseAttendue: 9600,
      unite: "€",
      indice: "Recette = 800 × 45. Coût total = 12 000 + (800 × 18). Profit = Recette − Coût total.",
      resolutionDetaillee: {
        formuleRappel: "Profit = Recette totale − Coût total = (P × Q) − [CF + (CV_unitaire × Q)]",
        donneesIdentifiees: [
          { label: "Chiffre d'affaires (Recette)", valeur: "800 × 45 € = 36 000 €" },
          { label: "Coût total (Fixes + Variables)", valeur: "12 000 + (800 × 18) = 12 000 + 14 400 = 26 400 €" }
        ],
        calculPose: "Profit = 36 000 € − 26 400 € = +9 600 €",
        resultatExact: "9 600 €",
        phraseLectureBac: "L'artisan réalise un profit économique positif de 9 600 € sur cette production.",
        piegeEvite: "Ne pas oublier les coûts fixes dans le calcul du coût total."
      }
    },
    simulateur: {
      champs: [
        { id: "prix", label: "Prix unitaire (€)", defaultValue: 45, min: 0 },
        { id: "q", label: "Quantité vendue", defaultValue: 800, min: 0 },
        { id: "cf", label: "Coûts fixes (€)", defaultValue: 12000, min: 0 },
        { id: "cvu", label: "Coût variable unitaire (€)", defaultValue: 18, min: 0 }
      ],
      calculer: ({ prix, q, cf, cvu }) => {
        const ca = prix * q;
        const ct = cf + (cvu * q);
        const pi = ca - ct;
        return {
          valeur: Number(pi.toFixed(2)),
          unite: "€",
          calculTexte: `CA = ${ca} € | CT = ${ct} € | Profit = ${ca} − ${ct} = ${pi.toFixed(2)} €`,
          phraseInterpretation: `L'entreprise réalise un profit de ${pi.toFixed(2)} € (${pi >= 0 ? 'bénéfice' : 'perte'}).`
        };
      }
    },
    pieges: [
      "Confondre chiffre d'affaires (ce qui rentre) et profit (ce qui reste après paiement des coûts).",
      "Oublier que si le profit est négatif, il s'agit d'une perte."
    ],
    motsCles: ["profit", "benefice", "recette totale", "cout fixe", "cout variable"]
  },
  {
    id: "capacite-besoin-financement",
    nom: "Capacité ou Besoin de financement",
    categorie: "Finance et monnaie",
    chapitres: ["Financement de l'économie"],
    niveau: ["Première"],
    formule: "Solde de financement = Épargne brute − Investissement (FBCF)   |   Si > 0 : Capacité ; Si < 0 : Besoin",
    definitionCourte: "Indique si un agent économique dégage un excédent d'épargne ou doit recourir à un financement externe.",
    explicationPedagogique: {
      definition: "La capacité de financement correspond à la situation d'un agent dont l'épargne est supérieure à ses dépenses d'investissement. Le besoin de financement apparaît lorsque l'investissement dépasse l'épargne.",
      enClair: "Les ménages ont généralement une capacité de financement (ils prêtent), alors que les entreprises et l'État ont un besoin de financement (ils empruntent).",
      uniteEtSens: "Exprimé en euros (€)."
    },
    termesFormule: [
      { symbole: "Épargne brute (S)", sens: "Part du revenu non consommée (ou autofinancement pour une entreprise)" },
      { symbole: "Investissement (FBCF / I)", sens: "Formation Brute de Capital Fixe (achats de machines, locaux, équipements)" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Situation d'un ménage",
      enonce: "Un ménage épargne 30 000 € et réalise 22 000 € de travaux d'aménagement.",
      donnees: { "Épargne": "30 000 €", "Investissement": "22 000 €" },
      calcul: "30 000 − 22 000 = +8 000 €",
      resultat: "+8 000 € (Capacité)",
      phraseLecture: "Le ménage dégage une capacité de financement de 8 000 €."
    },
    exercicePratique: {
      titre: "Exercice d'application : Financement d'une entreprise industrielle",
      enonce: "Une entreprise industrielle dispose d'une épargne brute (autofinancement) de 450 000 €. Pour moderniser son usine, elle engage un programme d'investissement (FBCF) de 620 000 € sur l'année.",
      donnees: { "Épargne brute": 450000, "Investissement (FBCF)": 620000 },
      question: "Calculez le solde de financement de cette entreprise et qualifiez sa situation.",
      reponseAttendue: -170000,
      unite: "€",
      indice: "Faites Épargne brute − Investissement. Comme le résultat est négatif, il s'agit d'un besoin de financement.",
      resolutionDetaillee: {
        formuleRappel: "Solde de financement = Épargne brute − Investissement (FBCF)",
        donneesIdentifiees: [
          { label: "Épargne brute disponible", valeur: "450 000 €" },
          { label: "Dépenses d'investissement (FBCF)", valeur: "620 000 €" }
        ],
        calculPose: "Solde = 450 000 € − 620 000 € = −170 000 €",
        resultatExact: "Besoin de financement de 170 000 €",
        phraseLectureBac: "L'entreprise enregistre un besoin de financement de 170 000 € en 2024. Elle doit solliciter un financement externe (emprunt bancaire, émission d'actions ou d'obligations) pour réaliser son projet.",
        piegeEvite: "Préciser clairement le terme 'Besoin de financement' (et ne pas écrire seulement un nombre négatif sans commentaire)."
      }
    },
    simulateur: {
      champs: [
        { id: "ep", label: "Épargne brute (€)", defaultValue: 450000, min: 0 },
        { id: "inv", label: "Investissement / FBCF (€)", defaultValue: 620000, min: 0 }
      ],
      calculer: ({ ep, inv }) => {
        const solde = ep - inv;
        const nature = solde >= 0 ? "Capacité de financement" : "Besoin de financement";
        return {
          valeur: Number(solde.toFixed(2)),
          unite: "€",
          calculTexte: `${ep} € − ${inv} € = ${solde >= 0 ? '+' : ''}${solde.toFixed(2)} €`,
          phraseInterpretation: `L'agent présente une ${nature} de ${Math.abs(solde).toFixed(2)} €.`
        };
      }
    },
    pieges: [
      "Inverser l'épargne et l'investissement dans la soustraction.",
      "Oublier que les banques et les marchés financiers permettent de mettre en relation les agents à capacité et ceux à besoin de financement."
    ],
    motsCles: ["capacite de financement", "besoin de financement", "epargne", "FBCF", "autofinancement"]
  },
  {
    id: "taux-d-epargne",
    nom: "Taux d'épargne des ménages",
    categorie: "Finance et monnaie",
    chapitres: ["Financement de l'économie", "Revenus et consommation"],
    niveau: ["Première"],
    formule: "Taux d'épargne (%) = (Épargne brute / Revenu Disponible Brut [RDB]) × 100",
    definitionCourte: "Mesure la part du revenu disponible des ménages qui n'est pas consacrée à la consommation finale.",
    explicationPedagogique: {
      definition: "Le taux d'épargne est la part du revenu disponible brut des ménages qui est épargnée (pour des projets futurs, l'achat d'un logement ou des placements financiers).",
      enClair: "Rappel fondamental : Revenu disponible = Consommation + Épargne.",
      uniteEtSens: "S'exprime en % (en France, il se situe généralement autour de 15 à 18 %)."
    },
    termesFormule: [
      { symbole: "Épargne brute", sens: "Revenu disponible brut − Dépenses de consommation finale" },
      { symbole: "RDB", sens: "Revenu disponible brut total" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Épargne d'un foyer",
      enonce: "Un ménage gagne 35 000 € de revenu disponible et épargne 6 000 €.",
      donnees: { "Épargne": "6 000 €", "RDB": "35 000 €" },
      calcul: "(6 000 / 35 000) × 100 ≈ 17,14 %",
      resultat: "17,14 %",
      phraseLecture: "Le taux d'épargne du ménage est de 17,14 %."
    },
    exercicePratique: {
      titre: "Exercice d'application : Taux d'épargne d'une famille",
      enonce: "Un ménage français perçoit un Revenu Disponible Brut (RDB) annuel de 42 000 €. Il consacre 34 860 € à ses dépenses de consommation courante et met le reste de côté sur des livrets bancaires.",
      donnees: { "Revenu disponible brut (RDB)": 42000, "Consommation finale": 34860 },
      question: "Calculez le montant de l'épargne brute puis le taux d'épargne de ce ménage.",
      reponseAttendue: 17.0,
      unite: "%",
      indice: "Épargne = RDB − Consommation = 42 000 − 34 860. Taux d'épargne = (Épargne / RDB) × 100.",
      resolutionDetaillee: {
        formuleRappel: "Taux d'épargne (%) = (Épargne brute / Revenu disponible brut) × 100",
        donneesIdentifiees: [
          { label: "Montant épargné", valeur: "42 000 € − 34 860 € = 7 140 €" },
          { label: "Revenu disponible brut (RDB)", valeur: "42 000 €" }
        ],
        calculPose: "Taux d'épargne = (7 140 / 42 000) × 100 = 0,17 × 100 = 17,0 %",
        resultatExact: "17,0 %",
        phraseLectureBac: "En 2024, le taux d'épargne de ce ménage est de 17,0 % (ce qui signifie que sur 100 € de revenu disponible, le ménage met 17 € en réserve et en consomme 83 €).",
        piegeEvite: "Ne pas diviser par la consommation : le dénominateur est toujours le Revenu Disponible Brut total (42 000 €)."
      }
    },
    simulateur: {
      champs: [
        { id: "rdb", label: "Revenu disponible brut RDB (€)", defaultValue: 42000, min: 1 },
        { id: "conso", label: "Consommation finale (€)", defaultValue: 34860, min: 0 }
      ],
      calculer: ({ rdb, conso }) => {
        const ep = Math.max(0, rdb - conso);
        const tx = (ep / rdb) * 100;
        return {
          valeur: Number(tx.toFixed(2)),
          unite: "%",
          calculTexte: `Épargne = ${rdb} − ${conso} = ${ep} € | Taux = (${ep} / ${rdb}) × 100 = ${tx.toFixed(2)} %`,
          phraseInterpretation: `Le taux d'épargne est de ${tx.toFixed(2)} % du revenu disponible.`
        };
      }
    },
    pieges: [
      "Diviser par la consommation au lieu du revenu disponible brut.",
      "Confondre taux d'épargne financière (placements) et taux d'épargne globale (qui inclut les remboursements de prêts immobiliers)."
    ],
    motsCles: ["taux d'epargne", "revenu disponible brut", "consommation finale", "menages", "RDB"]
  },
  {
    id: "solde-budgetaire-etat",
    nom: "Solde budgétaire de l'État (Déficit / Excédent public)",
    categorie: "Finances publiques",
    chapitres: ["Financement de l'économie", "Finances publiques"],
    niveau: ["Première"],
    formule: "Solde budgétaire = Recettes publiques − Dépenses publiques   |   Si < 0 : Déficit ; Si > 0 : Excédent",
    definitionCourte: "Différence entre les recettes de l'État (impôts, taxes) et ses dépenses annuelles.",
    explicationPedagogique: {
      definition: "Le solde budgétaire mesure l'équilibre entre les entrées d'argent public et les dépenses de l'État au cours d'un exercice budgétaire annuel.",
      enClair: "Un solde négatif signifie que l'État dépense plus qu'il ne gagne : il doit emprunter sur les marchés financiers, ce qui alimente la dette publique.",
      uniteEtSens: "Exprimé en milliards d'euros (Md€) ou en % du PIB."
    },
    termesFormule: [
      { symbole: "Recettes publiques", sens: "Impôts directs/indirects (IR, TVA, IS) et recettes non fiscales" },
      { symbole: "Dépenses publiques", sens: "Salaires des fonctionnaires, investissements publics, charges de la dette, transferts" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Budget national",
      enonce: "Recettes de 320 Md€ pour 410 Md€ de dépenses publiques.",
      donnees: { "Recettes": "320 Md€", "Dépenses": "410 Md€" },
      calcul: "320 − 410 = −90 Md€",
      resultat: "−90 Md€ (Déficit)",
      phraseLecture: "L'État enregistre un déficit budgétaire de 90 milliards d'euros sur l'année."
    },
    exercicePratique: {
      titre: "Exercice d'application : Solde budgétaire annuel",
      enonce: "Sur une année civile, les recettes fiscales et non fiscales perçues par l'État atteignent 340 milliards d'euros, tandis que le montant total de ses dépenses s'élève à 465 milliards d'euros.",
      donnees: { "Recettes publiques": 340, "Dépenses publiques": 465 },
      question: "Calculez le solde budgétaire de l'État et indiquez s'il s'agit d'un déficit ou d'un excédent.",
      reponseAttendue: -125,
      unite: "Md€",
      indice: "Faites Recettes − Dépenses. Un signe négatif désigne un déficit budgétaire.",
      resolutionDetaillee: {
        formuleRappel: "Solde budgétaire = Recettes publiques − Dépenses publiques",
        donneesIdentifiees: [
          { label: "Recettes de l'État", valeur: "340 milliards d'euros" },
          { label: "Dépenses de l'État", valeur: "465 milliards d'euros" }
        ],
        calculPose: "Solde budgétaire = 340 − 465 = −125 milliards d'euros",
        resultatExact: "Déficit budgétaire de 125 Md€",
        phraseLectureBac: "En 2024, l'État enregistre un solde budgétaire négatif, c'est-à-dire un déficit public de 125 milliards d'euros (les dépenses surpassent les recettes de 125 Md€).",
        piegeEvite: "Ne pas confondre déficit budgétaire (flux annuel : dépenses > recettes) et dette publique (stock cumulé des emprunts passés)."
      }
    },
    simulateur: {
      champs: [
        { id: "rec", label: "Recettes publiques (Md€)", defaultValue: 340, min: 0 },
        { id: "dep", label: "Dépenses publiques (Md€)", defaultValue: 465, min: 0 }
      ],
      calculer: ({ rec, dep }) => {
        const solde = rec - dep;
        const type = solde >= 0 ? "Excédent budgétaire" : "Déficit budgétaire";
        return {
          valeur: Number(solde.toFixed(2)),
          unite: "Md€",
          calculTexte: `${rec} − ${dep} = ${solde >= 0 ? '+' : ''}${solde.toFixed(2)} Md€`,
          phraseInterpretation: `L'État enregistre un ${type} de ${Math.abs(solde).toFixed(2)} milliards d'euros.`
        };
      }
    },
    pieges: [
      "Confondre déficit budgétaire (le flux annuel) et dette publique (le stock total d'emprunts accumulés au fil des années).",
      "Oublier la charge de la dette (intérêts payés chaque année) dans les dépenses publiques."
    ],
    motsCles: ["deficit public", "excedent budgetaire", "dette publique", "recettes fiscales", "politique budgetaire"]
  },
  {
    id: "creation-monetaire-credit",
    nom: "Création et Destruction monétaire par le crédit bancaire",
    categorie: "Finance et monnaie",
    chapitres: ["Monnaie et création monétaire"],
    niveau: ["Première"],
    formule: "Variation nette de la masse monétaire = Crédits accordés (Création) − Crédits remboursés (Destruction)",
    definitionCourte: "Mesure l'augmentation nette de monnaie scripturale en circulation issue des prêts bancaires.",
    explicationPedagogique: {
      definition: "Les banques commerciales créent de la monnaie scripturale 'ex nihilo' par simple jeu d'écritures lorsqu'elles accordent un crédit ('Les crédits font les dépôts'). Le remboursement du crédit détruit cette monnaie.",
      enClair: "Quand une banque vous prête 200 000 €, elle crée 200 000 € de nouvelle monnaie. Quand vous remboursez le capital, cette monnaie disparaît.",
      uniteEtSens: "Exprimé en euros (€)."
    },
    termesFormule: [
      { symbole: "Crédits nouveaux", sens: "Création monétaire brute par inscription au compte du client" },
      { symbole: "Remboursements de capital", sens: "Destruction monétaire" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Octroi d'un prêt",
      enonce: "Une banque prête 150 000 € pour l'achat d'un logement.",
      donnees: { "Montant du prêt": "150 000 €" },
      calcul: "+150 000 € créés sur le compte du client",
      resultat: "+150 000 €",
      phraseLecture: "L'octroi du prêt engendre une création monétaire brute de 150 000 €."
    },
    exercicePratique: {
      titre: "Exercice d'application : Flux monétaires mensuels d'une agence bancaire",
      enonce: "Au cours du mois de mars, un réseau bancaire accorde pour 220 000 € de nouveaux crédits immobiliers. Au cours du même mois, les anciens emprunteurs remboursent au total 140 000 € de capital d'emprunts précédents.",
      donnees: { "Nouveaux crédits octroyés": 220000, "Remboursements de prêts": 140000 },
      question: "Calculez la création monétaire brute, la destruction monétaire et la variation nette de la masse monétaire.",
      reponseAttendue: 80000,
      unite: "€ (Variation nette)",
      indice: "Variation nette = Nouveaux crédits accordés − Remboursements de capital.",
      resolutionDetaillee: {
        formuleRappel: "Variation nette de la monnaie = Crédits accordés (Création) − Capital remboursé (Destruction)",
        donneesIdentifiees: [
          { label: "Création monétaire brute", valeur: "+220 000 € (nouveaux prêts)" },
          { label: "Destruction monétaire", valeur: "−140 000 € (remboursements)" }
        ],
        calculPose: "Variation nette = +220 000 € − 140 000 € = +80 000 €",
        resultatExact: "+80 000 €",
        phraseLectureBac: "Sur le mois de mars, l'activité de crédit bancaire a entraîné une création monétaire nette de 80 000 € dans l'économie ('les crédits font les dépôts').",
        piegeEvite: "Seul le remboursement du capital détruit la monnaie (les intérêts payés représentent la rémunération du service bancaire)."
      }
    },
    simulateur: {
      champs: [
        { id: "prets", label: "Nouveaux crédits accordés (€)", defaultValue: 220000, min: 0 },
        { id: "remb", label: "Remboursements de capital (€)", defaultValue: 140000, min: 0 }
      ],
      calculer: ({ prets, remb }) => {
        const net = prets - remb;
        return {
          valeur: Number(net.toFixed(2)),
          unite: "€",
          calculTexte: `+${prets} € − ${remb} € = ${net >= 0 ? '+' : ''}${net.toFixed(2)} €`,
          phraseInterpretation: `Variation nette de la masse monétaire : ${net >= 0 ? '+' : ''}${net.toFixed(2)} € (${net >= 0 ? 'création nette' : 'destruction nette'}).`
        };
      }
    },
    pieges: [
      "Croire que les banques prêtent l'épargne déjà déposée par d'autres clients (en réalité, les crédits font les dépôts).",
      "Oublier que le remboursement d'un emprunt détruit la monnaie scripturale créée."
    ],
    motsCles: ["creation monetaire", "destruction monetaire", "credit bancaire", "monnaie scripturale", "banque centrale"]
  },
  {
    id: "taux-de-participation-abstention",
    nom: "Taux de participation et Taux d'abstention",
    categorie: "Science politique",
    chapitres: ["Science politique", "Engagement politique"],
    niveau: ["Seconde", "Première"],
    formule: "Participation (%) = (Nombre de votants / Nombre d'inscrits) × 100   |   Abstention (%) = 100 − Participation (%)",
    definitionCourte: "Mesure la proportion des citoyens inscrits sur les listes électorales qui participent ou non à un scrutin.",
    explicationPedagogique: {
      definition: "Le taux de participation mesure la part des personnes inscrites sur les listes électorales qui ont voté lors d'une élection. Le taux d'abstention mesure la part des inscrits qui ne sont pas allés voter.",
      enClair: "La somme des deux taux fait toujours exactement 100 % (Participation + Abstention = 100 %).",
      uniteEtSens: "S'exprime en % des inscrits."
    },
    termesFormule: [
      { symbole: "Votants", sens: "Électeurs s'étant déplacés au bureau de vote (bulletins exprimés + blancs + nuls)" },
      { symbole: "Inscrits", sens: "Citoyens figurant sur les listes électorales" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Élection nationale",
      enonce: "Sur 48 millions d'électeurs inscrits, 35 millions ont voté.",
      donnees: { "Votants": "35 millions", "Inscrits": "48 millions" },
      calcul: "(35 / 48) × 100 ≈ 72,92 % (Abstention = 100 − 72,92 = 27,08 %)",
      resultat: "72,92 % de participation",
      phraseLecture: "Le taux de participation a été de 72,92 % et le taux d'abstention de 27,08 %."
    },
    exercicePratique: {
      titre: "Exercice d'application : Participation aux élections législatives",
      enonce: "Lors d'une élection législative, 49,5 millions de citoyens sont inscrits sur les listes électorales. Les résultats indiquent que 32,67 millions d'électeurs ont voté.",
      donnees: { "Nombre d'inscrits": 49.5, "Nombre de votants": 32.67 },
      question: "Calculez le taux de participation et le taux d'abstention à ce scrutin.",
      reponseAttendue: 66.0,
      unite: "% (Participation)",
      indice: "Participation = (32,67 / 49,5) × 100. Abstention = 100 − Participation.",
      resolutionDetaillee: {
        formuleRappel: "Taux de participation (%) = (Votants / Inscrits) × 100 et Taux d'abstention = 100 % − Participation",
        donneesIdentifiees: [
          { label: "Nombre de votants", valeur: "32,67 millions" },
          { label: "Nombre d'inscrits sur les listes", valeur: "49,5 millions" }
        ],
        calculPose: "Participation = (32,67 / 49,5) × 100 = 66,0 %. Abstention = 100 % − 66,0 % = 34,0 %.",
        resultatExact: "Participation : 66,0 % ; Abstention : 34,0 %",
        phraseLectureBac: "En France, lors de cette élection, 66,0 % des personnes inscrites sur les listes électorales ont voté, tandis que 34,0 % des inscrits se sont abstenus (soit 34 électeurs inscrits sur 100).",
        piegeEvite: "Ne pas diviser par la population totale : les non-inscrits et les mineurs ne font pas partie de la base des inscrits."
      }
    },
    simulateur: {
      champs: [
        { id: "vot", label: "Nombre de votants (millions)", defaultValue: 32.67, min: 0 },
        { id: "insc", label: "Nombre d'inscrits (millions)", defaultValue: 49.5, min: 0.1 }
      ],
      calculer: ({ vot, insc }) => {
        const part = (vot / insc) * 100;
        const abst = 100 - part;
        return {
          valeur: Number(part.toFixed(2)),
          unite: "%",
          calculTexte: `Participation = (${vot} / ${insc}) × 100 = ${part.toFixed(2)} % | Abstention = ${abst.toFixed(2)} %`,
          phraseInterpretation: `Taux de participation : ${part.toFixed(2)} % | Taux d'abstention : ${abst.toFixed(2)} %.`
        };
      }
    },
    pieges: [
      "Confondre abstentionnistes (inscrits qui ne votent pas) et non-inscrits (personnes non inscrites sur les listes).",
      "Oublier que les votes blancs et nuls sont comptabilisés dans les votants (ils font partie de la participation)."
    ],
    motsCles: ["participation", "abstention", "vote", "elections", "engagement politique"]
  },
  {
    id: "taux-d-inscription",
    nom: "Taux d'inscription sur les listes électorales",
    categorie: "Science politique",
    chapitres: ["Science politique", "Engagement politique"],
    niveau: ["Seconde", "Première"],
    formule: "Taux d'inscription (%) = (Nombre de personnes inscrites / Population en âge de voter [18 ans et +]) × 100",
    definitionCourte: "Mesure la part des citoyens majeurs ayant accès effectif au droit de vote via les listes électorales.",
    explicationPedagogique: {
      definition: "Le taux d'inscription mesure la proportion de citoyens en âge légal de voter (18 ans et plus) qui sont administrativement inscrits sur les listes électorales.",
      enClair: "La non-inscription (les personnes non inscrites) est une forme d'exclusion ou d'éloignement civique distincte de l'abstention.",
      uniteEtSens: "S'exprime en %."
    },
    termesFormule: [
      { symbole: "Inscrits", sens: "Personnes figurant sur les registres de vote" },
      { symbole: "Population en âge de voter", sens: "Nombre total de citoyens de 18 ans et plus" }
    ],
    exempleCours: {
      titre: "Exemple du cours : Inscription civique nationale",
      enonce: "Sur 52 millions de personnes en âge de voter, 48 millions sont inscrites.",
      donnees: { "Inscrits": "48 millions", "Population 18+": "52 millions" },
      calcul: "(48 / 52) × 100 ≈ 92,31 %",
      resultat: "92,31 %",
      phraseLecture: "92,31 % des personnes en âge de voter sont inscrites sur les listes électorales."
    },
    exercicePratique: {
      titre: "Exercice d'application : Inscription électorale dans une agglomération",
      enonce: "Dans une commune, 24 500 résidents de nationalité française ont l'âge légal pour voter (18 ans et plus). Parmi eux, 21 070 personnes figurent sur les listes électorales tenues par la mairie.",
      donnees: { "Population en âge de voter (18+)": 24500, "Nombre d'inscrits": 21070 },
      question: "Calculez le taux d'inscription sur les listes électorales dans cette commune.",
      reponseAttendue: 86.0,
      unite: "%",
      indice: "Divisez le nombre d'inscrits (21 070) par la population en âge de voter (24 500), puis multipliez par 100.",
      resolutionDetaillee: {
        formuleRappel: "Taux d'inscription (%) = (Inscrits / Population en âge de voter) × 100",
        donneesIdentifiees: [
          { label: "Personnes inscrites", valeur: "21 070" },
          { label: "Population en âge de voter (18+)", valeur: "24 500" }
        ],
        calculPose: "Taux d'inscription = (21 070 / 24 500) × 100 = 0,86 × 100 = 86,0 %",
        resultatExact: "86,0 %",
        phraseLectureBac: "Dans cette commune, 86,0 % des personnes en âge de voter sont inscrites sur les listes électorales (ce qui signifie que 14,0 % sont non-inscrites et ne peuvent pas participer aux votes).",
        piegeEvite: "Ne pas confondre la non-inscription (ne pas être sur la liste) et la mal-inscription (être inscrit dans une ancienne commune de résidence)."
      }
    },
    simulateur: {
      champs: [
        { id: "insc", label: "Nombre d'inscrits (milliers)", defaultValue: 21.07, min: 0 },
        { id: "pop18", label: "Population 18 ans et + (milliers)", defaultValue: 24.5, min: 0.1 }
      ],
      calculer: ({ insc, pop18 }) => {
        const tx = (insc / pop18) * 100;
        const nonInsc = 100 - tx;
        return {
          valeur: Number(tx.toFixed(2)),
          unite: "%",
          calculTexte: `(${insc} / ${pop18}) × 100 = ${tx.toFixed(2)} %`,
          phraseInterpretation: `Taux d'inscription : ${tx.toFixed(2)} % (taux de non-inscription : ${nonInsc.toFixed(2)} %).`
        };
      }
    },
    pieges: [
      "Confondre non-inscription (pas le droit de voter car absent des listes) et abstention (droit de vote existant mais non utilisé).",
      "Oublier les jeunes majeurs qui bénéficient de l'inscription automatique."
    ],
    motsCles: ["taux d'inscription", "listes electorales", "non-inscription", "citoyennete", "vote"]
  }
];

export function getCalculById(id: string): FicheCalcul | undefined {
  return calculsCatalog.find((c) => c.id === id);
}

export function generateRandomExerciseFor(ficheId: string) {
  switch (ficheId) {
    case 'proportion': {
      const total = 200 + Math.floor(Math.random() * 800);
      const part = Math.floor(total * (0.15 + Math.random() * 0.55));
      const pct = Number(((part / total) * 100).toFixed(1));
      return {
        enonce: `Dans un lycée de ${total} élèves, ${part} étudient la spécialité SES.`,
        donnees: { "Effectif partiel (Élèves SES)": `${part} élèves`, "Effectif total": `${total} élèves` },
        question: `Quelle est la proportion d'élèves étudiant les SES en % ?`,
        reponseAttendue: pct,
        unite: "%",
        resolution: {
          calculPose: `(${part} / ${total}) × 100 = ${pct} %`,
          resultatExact: `${pct} %`,
          phraseLectureBac: `Dans ce lycée, ${pct} % des élèves étudient la spécialité SES (soit environ ${Math.round(pct)} élèves sur 100).`
        }
      };
    }
    case 'taux-de-variation': {
      const vd = 50 + Math.floor(Math.random() * 300);
      const mult = 1 + (Math.random() > 0.35 ? 0.05 + Math.random() * 0.45 : -(0.05 + Math.random() * 0.35));
      const va = Math.round(vd * mult);
      const tx = Number((((va - vd) / vd) * 100).toFixed(1));
      return {
        enonce: `Le prix d'un équipement passe de ${vd} € en 2023 à ${va} € en 2024.`,
        donnees: { "Valeur de départ (2023)": `${vd} €`, "Valeur d'arrivée (2024)": `${va} €` },
        question: `Calculez le taux de variation du prix en % entre 2023 et 2024.`,
        reponseAttendue: tx,
        unite: "%",
        resolution: {
          calculPose: `[(${va} − ${vd}) / ${vd}] × 100 = ${tx >= 0 ? '+' : ''}${tx} %`,
          resultatExact: `${tx >= 0 ? '+' : ''}${tx} %`,
          phraseLectureBac: `Entre 2023 et 2024, le prix de cet équipement a ${tx >= 0 ? 'augmenté' : 'diminué'} de ${Math.abs(tx)} %.`
        }
      };
    }
    case 'taux-de-variation-cumule': {
      const t1 = Math.floor(Math.random() * 15) + 2;
      const t2 = Math.random() > 0.4 ? Math.floor(Math.random() * 10) + 1 : -(Math.floor(Math.random() * 8) + 1);
      const cm1 = 1 + t1 / 100;
      const cm2 = 1 + t2 / 100;
      const cumule = Number(((cm1 * cm2 - 1) * 100).toFixed(2));
      return {
        enonce: `Le chiffre d'affaires d'une entreprise augmente de ${t1} % la première année, puis varie de ${t2 >= 0 ? '+' : ''}${t2} % la deuxième année.`,
        donnees: { "Variation Année 1": `+${t1} %`, "Variation Année 2": `${t2 >= 0 ? '+' : ''}${t2} %` },
        question: `Calculez le taux de variation cumulé en % sur l'ensemble des deux années.`,
        reponseAttendue: cumule,
        unite: "%",
        resolution: {
          calculPose: `[(1 + ${t1 / 100}) × (1 + ${t2 / 100}) − 1] × 100 = ${(cm1 * cm2).toFixed(4)} − 1 = ${cumule >= 0 ? '+' : ''}${cumule} %`,
          resultatExact: `${cumule >= 0 ? '+' : ''}${cumule} %`,
          phraseLectureBac: `Sur l'ensemble des deux années, le chiffre d'affaires a varié globalement de ${cumule >= 0 ? '+' : ''}${cumule} %.`
        }
      };
    }
    case 'coefficient-multiplicateur': {
      const vd = 10 + Math.floor(Math.random() * 90);
      const mult = 1.2 + Math.random() * 2.5;
      const va = Math.round(vd * mult);
      const cm = Number((va / vd).toFixed(2));
      return {
        enonce: `Le nombre d'adhérents d'une association passe de ${vd} à ${va} personnes.`,
        donnees: { "Effectif initial (VD)": `${vd} adhérents`, "Effectif final (VA)": `${va} adhérents` },
        question: `Calculez le coefficient multiplicateur (arrondi à 2 décimales).`,
        reponseAttendue: cm,
        unite: "",
        resolution: {
          calculPose: `CM = ${va} / ${vd} = ${cm}`,
          resultatExact: `${cm}`,
          phraseLectureBac: `Le nombre d'adhérents a été multiplié par ${cm} sur la période (soit une hausse de ${((cm - 1) * 100).toFixed(0)} %).`
        }
      };
    }
    case 'indice-base-100': {
      const ref = 1500 + Math.floor(Math.random() * 1500);
      const pct = Math.floor(Math.random() * 30) + 5;
      const val = Math.round(ref * (1 + pct / 100));
      const ind = Number(((val / ref) * 100).toFixed(1));
      return {
        enonce: `Le prix d'un abonnement valait ${ref} € en 2019 (base 100) et coûte ${val} € en 2024.`,
        donnees: { "Prix 2019 (base 100)": `${ref} €`, "Prix 2024": `${val} €` },
        question: `Calculez l'indice du prix en 2024 par rapport à 2019.`,
        reponseAttendue: ind,
        unite: "",
        resolution: {
          calculPose: `(${val} / ${ref}) × 100 = ${ind}`,
          resultatExact: `${ind}`,
          phraseLectureBac: `En 2024, l'indice du prix s'établit à ${ind} (base 100 en 2019), soit une hausse de ${(ind - 100).toFixed(1)} %.`
        }
      };
    }
    case 'valeur-ajoutee': {
      const ca = 100000 + Math.floor(Math.random() * 400000);
      const ci = Math.round(ca * (0.3 + Math.random() * 0.4));
      const va = ca - ci;
      return {
        enonce: `Une entreprise réalise ${ca.toLocaleString('fr-FR')} € de chiffre d'affaires avec ${ci.toLocaleString('fr-FR')} € de consommations intermédiaires.`,
        donnees: { "Chiffre d'affaires (CA)": `${ca.toLocaleString('fr-FR')} €`, "Consommations intermédiaires (CI)": `${ci.toLocaleString('fr-FR')} €` },
        question: `Calculez la valeur ajoutée (VA) créée par cette entreprise en euros.`,
        reponseAttendue: va,
        unite: "€",
        resolution: {
          calculPose: `VA = ${ca.toLocaleString('fr-FR')} € − ${ci.toLocaleString('fr-FR')} € = ${va.toLocaleString('fr-FR')} €`,
          resultatExact: `${va.toLocaleString('fr-FR')} €`,
          phraseLectureBac: `L'entreprise a créé ${va.toLocaleString('fr-FR')} € de valeur ajoutée (richesse nette).`
        }
      };
    }
    case 'taux-de-chomage-bit': {
      const act = 20 + Math.floor(Math.random() * 15);
      const chom = Number((act * (0.05 + Math.random() * 0.06)).toFixed(2));
      const tx = Number(((chom / act) * 100).toFixed(1));
      return {
        enonce: `Dans un pays, la population active compte ${act} millions de personnes dont ${chom} millions de chômeurs au sens du BIT.`,
        donnees: { "Population active": `${act} millions`, "Nombre de chômeurs": `${chom} millions` },
        question: `Calculez le taux de chômage en % de la population active.`,
        reponseAttendue: tx,
        unite: "%",
        resolution: {
          calculPose: `(${chom} / ${act}) × 100 = ${tx} %`,
          resultatExact: `${tx} %`,
          phraseLectureBac: `Selon le BIT, ${tx} % de la population active est au chômage dans ce pays.`
        }
      };
    }
    case 'taux-d-epargne': {
      const rdb = 30000 + Math.floor(Math.random() * 30000);
      const tauxVoulu = Math.floor(Math.random() * 10) + 12;
      const ep = Math.round(rdb * (tauxVoulu / 100));
      const conso = rdb - ep;
      const tx = Number(((ep / rdb) * 100).toFixed(1));
      return {
        enonce: `Un ménage perçoit un revenu disponible brut de ${rdb.toLocaleString('fr-FR')} € et consacre ${conso.toLocaleString('fr-FR')} € à la consommation.`,
        donnees: { "Revenu disponible brut (RDB)": `${rdb.toLocaleString('fr-FR')} €`, "Consommation": `${conso.toLocaleString('fr-FR')} €`, "Épargne": `${ep.toLocaleString('fr-FR')} €` },
        question: `Calculez le taux d'épargne de ce ménage en %.`,
        reponseAttendue: tx,
        unite: "%",
        resolution: {
          calculPose: `Épargne = ${rdb} − ${conso} = ${ep} € | Taux = (${ep} / ${rdb}) × 100 = ${tx} %`,
          resultatExact: `${tx} %`,
          phraseLectureBac: `Le taux d'épargne du ménage est de ${tx} % (sur 100 € de revenu, il épargne ${tx} €).`
        }
      };
    }
    case 'solde-budgetaire-etat': {
      const rec = 250 + Math.floor(Math.random() * 150);
      const dep = rec + Math.floor(Math.random() * 80) + 20;
      const solde = rec - dep;
      return {
        enonce: `Sur une année, les recettes de l'État s'élèvent à ${rec} Md€ et ses dépenses publiques à ${dep} Md€.`,
        donnees: { "Recettes publiques": `${rec} Md€`, "Dépenses publiques": `${dep} Md€` },
        question: `Calculez le solde budgétaire en milliards d'euros (indiquez le signe négatif si déficit).`,
        reponseAttendue: solde,
        unite: "Md€",
        resolution: {
          calculPose: `${rec} Md€ − ${dep} Md€ = ${solde} Md€`,
          resultatExact: `${solde} Md€ (Déficit)`,
          phraseLectureBac: `L'État enregistre un déficit budgétaire de ${Math.abs(solde)} milliards d'euros.`
        }
      };
    }
    default: {
      const calcul = getCalculById(ficheId);
      if (!calcul) return null;
      return {
        enonce: calcul.exercicePratique.enonce,
        donnees: calcul.exercicePratique.donnees,
        question: calcul.exercicePratique.question,
        reponseAttendue: calcul.exercicePratique.reponseAttendue,
        unite: calcul.exercicePratique.unite,
        resolution: {
          calculPose: calcul.exercicePratique.resolutionDetaillee.calculPose,
          resultatExact: calcul.exercicePratique.resolutionDetaillee.resultatExact,
          phraseLectureBac: calcul.exercicePratique.resolutionDetaillee.phraseLectureBac
        }
      };
    }
  }
}
