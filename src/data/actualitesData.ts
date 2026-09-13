// Base de données actualisée des sujets d'actualité économique pour les SES
// Conforme aux programmes officiels de Seconde, Première et Terminale
// Chaque sujet est relié aux chapitres, mécanismes causaux, auteurs clés et sujets Bac

export interface AuteurActualite {
  nom: string;
  theorie: string;
  apport: string;
}

export interface SujetBacActualite {
  type: 'Dissertation' | 'Épreuve Composée (EC1)' | 'Épreuve Composée (EC3)';
  intitule: string;
  pistesCorrection: string;
}

export interface FicheActualiteEco {
  id: string;
  titre: string;
  journal: 'Les Échos' | 'Le Monde Éco' | 'Alternatives Économiques' | 'Banque de France' | 'INSEE' | 'Financial Times' | 'BFM Business' | string;
  date: string;
  periodicite: 'Quotidien' | 'Hebdomadaire';
  theme: 'Monnaie & Finance' | 'Finances Publiques' | 'Travail & Emploi' | 'Commerce International' | 'Environnement & Climat' | 'Croissance & Productivité' | 'Inégalités & Société';
  niveau: 'Seconde & Première' | 'Première & Terminale';
  chapitreSES: string;
  resume: string;
  faitsEtChiffres: string[];
  notionsProgramme: string[];
  mecanismeExplication: string;
  auteursMobilisables: AuteurActualite[];
  sujetsBac: SujetBacActualite[];
  citationCle: string;
  sourceUrl?: string;
  isLive?: boolean;
}

export const actualitesEcoList: FicheActualiteEco[] = [
  {
    "id": "bce-baisse-taux-2024",
    "titre": "La BCE poursuit l'assouplissement monétaire : quel impact sur le crédit et l'investissement ?",
    "journal": "Les Échos",
    "date": "12 septembre 2024",
    "periodicite": "Hebdomadaire",
    "theme": "Monnaie & Finance",
    "niveau": "Première & Terminale",
    "chapitreSES": "Comment la monnaie est-elle créée et régulée ? / Politiques économiques européennes",
    "resume": "Face au ralentissement de l'inflation dans la zone euro (2,2 % en août) et aux signaux de stagnation économique notamment en Allemagne, le Conseil des gouverneurs de la Banque centrale européenne a décidé d'abaisser son taux de facilité de dépôt de 25 points de base, le portant à 3,50 %. Cette baisse vise à détendre les conditions de financement bancaire.",
    "faitsEtChiffres": [
      "Taux de facilité de dépôt abaissé de 3,75 % à 3,50 % (deuxième baisse après celle de juin 2024).",
      "Taux d'inflation en zone euro retombé à 2,2 % en août 2024, contre un pic historique de 10,6 % en octobre 2022.",
      "Croissance du crédit bancaire aux entreprises ralentie à +0,6 % en rythme annuel au deuxième trimestre 2024 contre +5,8 % en 2022.",
      "Le spread France-Allemagne (écart de taux à 10 ans sur les OAT vs Bunds) a grimpé autour de 75-80 points de base suite aux incertitudes politiques."
    ],
    "notionsProgramme": [
      "Taux d'intérêt directeur",
      "Canaux de transmission de la politique monétaire",
      "Taux d'intérêt réel",
      "Création monétaire ex nihilo",
      "Investissement",
      "Demande globale",
      "Inflation sous-jacente"
    ],
    "mecanismeExplication": "Baisse du taux directeur de la BCE (taux de rémunération des dépôts et taux refi) ➔ Réduction du coût de refinancement des banques commerciales sur le marché interbancaire ➔ Baisse des taux d'intérêt débiteurs proposés aux ménages (crédit immo/conso) et aux entreprises (crédit d'investissement) ➔ Augmentation de la valeur actuelle nette (VAN) des projets d'investissement et désincitation à l'épargne ➔ Relance de la composante Investissement (I) et Consommation (C) de la demande globale ➔ Effet multiplicateur d'investissement (Keynes) sur la production et l'emploi.",
    "auteursMobilisables": [
      {
        "nom": "John Maynard Keynes",
        "theorie": "Théorie générale de l'emploi, de l'intérêt et de la monnaie (1936)",
        "apport": "L'investissement dépend de l'efficacité marginale du capital comparée au taux d'intérêt. Cependant, en cas de pessimisme des entrepreneurs sur leurs débouchés anticipés (« animal spirits »), une baisse des taux peut échouer à relancer l'économie (trappe à liquidité)."
      },
      {
        "nom": "Milton Friedman",
        "theorie": "Monétarisme & Règle d'or (1968)",
        "apport": "L'inflation est toujours et partout un phénomène monétaire. Friedman préconise une croissance constante de la masse monétaire plutôt que des ajustements discrétionnaires des taux directeurs qui risquent d'engendrer des décalages temporels (time lags) déstabilisateurs."
      },
      {
        "nom": "Knut Wicksell",
        "theorie": "Taux d'intérêt naturel et taux monétaire (1898)",
        "apport": "Lorsque le taux monétaire fixé par le système bancaire est inférieur au taux de rendement naturel du capital, il en résulte une sur-accumulation de crédit et des tensions inflationnistes."
      }
    ],
    "sujetsBac": [
      {
        "type": "Épreuve Composée (EC1)",
        "intitule": "Présentez les canaux par lesquels la politique monétaire influence l'activité économique.",
        "pistesCorrection": "Expliquer le canal du taux d'intérêt (baisse des taux ➔ coût du crédit allégé ➔ hausse I et C), le canal du crédit bancaire (offre de prêts accrue) et le canal du prix des actifs/taux de change."
      },
      {
        "type": "Dissertation",
        "intitule": "Dans quelle mesure la politique monétaire est-elle efficace pour stimuler la croissance économique ?",
        "pistesCorrection": "I. Une politique monétaire accommodante permet de soutenir l'activité (baisse du loyer de l'argent, desserrement de la contrainte de crédit, effet richesse). II. Ses limites contemporaines : incertitude des agents (anticipations négatives selon Keynes), risque d'effet d'éviction ou de bulles spéculatives, et contraintes du Pacte de stabilité."
      }
    ],
    "citationCle": "« La politique monétaire ne peut à elle seule créer une croissance durable si la confiance des entrepreneurs et des ménages fait défaut. »"
  },
  {
    "id": "dette-publique-france-pacte-stabilite",
    "titre": "Déficit à 5,5 % du PIB et procédure européenne pour déficit excessif : l'équation budgétaire française",
    "journal": "Le Monde Éco",
    "date": "10 septembre 2024",
    "periodicite": "Hebdomadaire",
    "theme": "Finances Publiques",
    "niveau": "Première & Terminale",
    "chapitreSES": "Comment l'action publique s'exerce-t-elle ? / Les politiques macroéconomiques dans l'UE",
    "resume": "Avec un déficit public notifié à 5,5 % du PIB pour 2023 et une dette publique dépassant 110 % du PIB (3 150 milliards d'euros), la France a été formellement placée sous le coup d'une procédure de déficit excessif par la Commission européenne. Le gouvernement fait face au dilemme de la consolidation budgétaire sans étouffer la faible croissance.",
    "faitsEtChiffres": [
      "Déficit public 2023 à 5,5 % du PIB (contre 4,9 % initialement prévu par la loi de finances).",
      "Dette publique brute au sens de Maastricht à 110,6 % du PIB, soit 3 159,7 milliards d'euros fin 2023.",
      "Charge de la dette (intérêts payés par l'État) estimée à 52 milliards d'euros en 2024, en passe de devenir le 1er ou 2e poste du budget avant l'Éducation nationale.",
      "Pacte de stabilité et de croissance révisé imposant une trajectoire de réduction structurelle du déficit d'au moins 0,5 point de PIB par an."
    ],
    "notionsProgramme": [
      "Déficit budgétaire",
      "Dette publique soutenable",
      "Effet d'éviction",
      "Politique de rigueur / d'austérité",
      "Multiplicateur keynésien",
      "Stabilisateurs automatiques",
      "Équivalence ricardienne"
    ],
    "mecanismeExplication": "Ralentissement conjoncturel ➔ Baisse des recettes fiscales (TVA, IS) et hausse mécanique des dépenses d'indemnisation (stabilisateurs automatiques) ➔ Creusement du déficit budgétaire ➔ Recours à l'emprunt via l'émission d'OAT ➔ Augmentation du stock de dette publique. À court terme, la réduction des dépenses publiques (politique de rigueur) comprime la demande effective (G baisse) ➔ Baisse du revenu national multipliée par le multiplicateur keynésien ➔ Risque de récession autoréalisatrice.",
    "auteursMobilisables": [
      {
        "nom": "Robert Barro",
        "theorie": "Théorème d'équivalence ricardienne (1974)",
        "apport": "Un déficit public financé par l'emprunt n'a aucun effet de relance car les ménages anticipent de futures hausses d'impôts et augmentent leur épargne de précaution au lieu de consommer."
      },
      {
        "nom": "Olivier Blanchard",
        "theorie": "Rôle du multiplicateur en période de consolidation (2013)",
        "apport": "L'ancien chef économiste du FMI a démontré que les multiplicateurs budgétaires en période de faible croissance dépassent souvent 1, ce qui rend l'austérité contre-productive pour assainir le ratio Dette/PIB."
      },
      {
        "nom": "Paul Krugman",
        "theorie": "Austérité et dépression (2012)",
        "apport": "Défend une politique de relance tant que les taux réels sont bas, arguant que couper les dépenses en pleine atonie affaiblit l'assiette fiscale et aggrave la charge relative de la dette."
      }
    ],
    "sujetsBac": [
      {
        "type": "Dissertation",
        "intitule": "Une politique de réduction des dépenses publiques est-elle souhaitable en période de faible croissance ?",
        "pistesCorrection": "I. La rigueur budgétaire répond à un impératif de solvabilité et de crédibilité financière (éviter la hausse des primes de risque, respecter les règles européennes, limiter l'effet d'éviction). II. Mais elle comporte de lourds coûts macroéconomiques (dépression de la demande globale par le multiplicateur, fragilisation des services publics, trappe à déflation)."
      },
      {
        "type": "Épreuve Composée (EC3)",
        "intitule": "À l'aide des données et de vos connaissances, vous montrerez comment les stabilisateurs automatiques amortissent les chocs économiques.",
        "pistesCorrection": "Exposer le rôle de l'impôt progressif et des prestations sociales lors d'un ralentissement (maintien du revenu disponible des ménages)."
      }
    ],
    "citationCle": "« Le vrai coût d'une dette ne se mesure pas seulement à son montant nominal, mais au différentiel entre le taux d'intérêt et le taux de croissance (r - g). »"
  },
  {
    "id": "chomage-emploi-reforme-insee",
    "titre": "Chômage stable à 7,5 % mais nette hausse du sous-emploi : que révèle le marché du travail français ?",
    "journal": "INSEE & Alternatives Économiques",
    "date": "08 septembre 2024",
    "periodicite": "Quotidien",
    "theme": "Travail & Emploi",
    "niveau": "Seconde & Première",
    "chapitreSES": "Comment s'organise le marché du travail ? / Quelles politiques pour l'emploi ?",
    "resume": "Selon la dernière enquête emploi de l'INSEE, le taux de chômage au sens du BIT s'établit à 7,5 % de la population active au deuxième trimestre 2024. Cependant, le halo du chômage s'élargit et le sous-emploi (temps partiel subi) progresse, soulignant la persistance d'un chômage structurel et d'inadéquations de compétences.",
    "faitsEtChiffres": [
      "Taux de chômage BIT à 7,5 % (environ 2,3 millions de personnes en France métropolitaine).",
      "Halo autour du chômage : 2,0 millions de personnes souhaitent travailler sans être comptabilisées comme chômeurs BIT.",
      "Taux de chômage des jeunes de 15 à 24 ans : 17,7 %, près du double de la moyenne nationale.",
      "Part des emplois à durée déterminée (CDD et intérim) dans les embauches : plus de 82 %.",
      "Taux d'emploi des 55-64 ans à 58,4 % en France, inférieur à la moyenne de l'Union européenne (63,9 %)."
    ],
    "notionsProgramme": [
      "Chômage au sens du BIT",
      "Halo du chômage",
      "Sous-emploi",
      "Chômage frictionnel",
      "Chômage structurel",
      "Salaire d'efficience",
      "Dualisme du marché du travail (Insiders / Outsiders)"
    ],
    "mecanismeExplication": "Asymétrie d'information sur la productivité des salariés ➔ L'employeur fixe un salaire supérieur au salaire d'équilibre de marché (salaire d'efficience) pour motiver et fidéliser ➔ L'offre de travail augmente tandis que la demande de travail des entreprises diminue ➔ Apparition d'un rationnement de l'emploi et d'un chômage involontaire d'équilibre. Par ailleurs, les coûts de rotation de la main d'œuvre protègent les CDI (insiders) et reportent la flexibilité sur les contrats courts (outsiders).",
    "auteursMobilisables": [
      {
        "nom": "George Akerlof & Janet Yellen",
        "theorie": "Théorie du salaire d'efficience (1986)",
        "apport": "Le salaire ne joue pas seulement un rôle d'égalisation de l'offre et de la demande, mais aussi d'incitation à l'effort et de sélection des candidats les plus compétents."
      },
      {
        "nom": "Assar Lindbeck & Dennis Snower",
        "theorie": "Modèle Insiders-Outsiders (1988)",
        "apport": "Les salariés en place disposent d'un pouvoir de négociation élevé qui leur permet d'obtenir des hausses de rémunération sans craindre d'être immédiatement remplacés par les chômeurs en raison des coûts de rotation (turnover)."
      },
      {
        "nom": "Peter Diamond, Dale Mortensen & Christopher Pissarides",
        "theorie": "Théorie de l'appariement et des frictions (2010)",
        "apport": "Le chômage s'explique par le temps et le coût nécessaires pour faire correspondre les offres et demandes d'emploi en raison de disparités géographiques et de compétences (courbe de Beveridge)."
      }
    ],
    "sujetsBac": [
      {
        "type": "Épreuve Composée (EC1)",
        "intitule": "Distinguez le chômage au sens du BIT du halo du chômage.",
        "pistesCorrection": "Rappeler les 3 critères BIT (sans emploi, disponible sous 15 jours, démarche active de recherche) et montrer que le halo regroupe les personnes sans emploi qui souhaitent travailler mais ne remplissent pas tous les critères (découragement, indisponibilité immédiate)."
      },
      {
        "type": "Dissertation",
        "intitule": "Comment expliquer la persistance d'un niveau élevé de chômage en France ?",
        "pistesCorrection": "I. Des déterminants structurels : coût du travail non qualifié, inadéquations spatiales et de qualification, rigidités institutionnelles et dualisme. II. Des composantes conjoncturelles : atonie de la demande globale, incertitudes géopolitiques pesant sur l'investissement et l'embauche."
      }
    ],
    "citationCle": "« Le taux de chômage officiel ne donne qu'une vision tronquée de la sous-utilisation de la main-d'œuvre : le halo et le sous-emploi en révèlent la face cachée. »"
  },
  {
    "id": "macf-taxe-carbone-frontieres-ue",
    "titre": "Le Mécanisme d'Ajustement Carbone aux Frontières (MACF) : arme anti-fuite de carbone ou protectionnisme vert ?",
    "journal": "Financial Times & Les Échos",
    "date": "05 septembre 2024",
    "periodicite": "Hebdomadaire",
    "theme": "Environnement & Climat",
    "niveau": "Première & Terminale",
    "chapitreSES": "Quelle politique climatique ? / Commerce international et mondialisation",
    "resume": "Entré dans sa phase transitoire de déclaration, le MACF européen vise à faire payer aux importateurs d'acier, d'aluminium, d'engrais et de ciment le même prix du carbone que celui acquitté par les industriels européens via le marché des quotas (ETS). Cette mesure suscite de vives protestations des partenaires commerciaux (Chine, Inde, États-Unis).",
    "faitsEtChiffres": [
      "Prix du quota de CO2 sur le marché européen ETS fluctuant entre 65 € et 75 € par tonne de CO2.",
      "Périmètre du MACF : acier, fer, aluminium, ciment, engrais, électricité et hydrogène.",
      "Entrée en vigueur financière définitive prévue pour le 1er janvier 2026 avec suppression progressive des quotas gratuits alloués aux industriels de l'UE.",
      "Risque de fuites de carbone : les délocalisations industrielles d'Europe vers des pays à normes environnementales plus laxistes représentaient jusqu'à 20 % des émissions évitées."
    ],
    "notionsProgramme": [
      "Internalisation des externalités négatives",
      "Taxe pigouvienne",
      "Marché de quotas d'émission (ETS)",
      "Fuite de carbone",
      "Protectionnisme vert",
      "Compétitivité-prix",
      "Passager clandestin (Olson)"
    ],
    "mecanismeExplication": "Production industrielle polluante ➔ Génération d'émissions de gaz à effet de serre (externalité négative non prise en compte par le marché) ➔ L'UE impose un prix du carbone (marché ETS) ➔ Hausse des coûts de production des firmes européennes ➔ Risque de perte de compétitivité-prix face aux concurrents étrangers et délocalisations (« fuite de carbone ») ➔ Le MACF impose un certificat carbone à la frontière égal au prix ETS ➔ Rétablissement d'une concurrence équitable (« level playing field ») et incitation des producteurs mondiaux à décarboner.",
    "auteursMobilisables": [
      {
        "nom": "Arthur Cecil Pigou",
        "theorie": "L'Économie du bien-être (1920)",
        "apport": "L'instauration d'une taxe sur les activités polluantes permet d'égaliser le coût marginal privé et le coût marginal social, obligeant le pollueur à payer pour les dommages causés."
      },
      {
        "nom": "Ronald Coase",
        "theorie": "Le Problème du coût social (1960)",
        "apport": "Précurseur des marchés de droits à polluer : dès lors que des droits de propriété sont clairement assignés et que les coûts de transaction sont faibles, les agents peuvent marchander pour aboutir à une allocation optimale."
      },
      {
        "nom": "Mancur Olson",
        "theorie": "Logique de l'action collective (1965)",
        "apport": "Le climat mondial étant un bien public planétaire, chaque État est tenté d'adopter un comportement de passager clandestin (free rider) en laissant les autres consentir les efforts d'atténuation."
      }
    ],
    "sujetsBac": [
      {
        "type": "Dissertation",
        "intitule": "Les instruments économiques fondés sur le marché sont-ils suffisants pour lutter contre le dérèglement climatique ?",
        "pistesCorrection": "I. Les instruments de prix et de marché (taxe carbone, marché ETS, MACF) sont efficaces pour modifier les signaux-prix et inciter à l'innovation verte. II. Leurs limites imposent la complémentarité : réglementation impérative (normes d'émissions), subventions massives à la R&D verte, et enjeux de justice sociale (lutte contre le caractère régressif des taxes écologiques)."
      },
      {
        "type": "Épreuve Composée (EC1)",
        "intitule": "Expliquez comment le marché des quotas d'émission permet de réduire les émissions polluantes.",
        "pistesCorrection": "Plafond d'émissions fixé par l'autorité ➔ Rareté organisée ➔ Prix du quota ➔ Arbitrage des firmes : dépolluer si le coût marginal d'abattement est inférieur au prix du quota, ou acheter des quotas dans le cas inverse."
      }
    ],
    "citationCle": "« Le MACF ne constitue pas une entrave commerciale arbitraire, mais le prolongement logique de l'internalisation des coûts écologiques sur un marché mondialisé. »"
  },
  {
    "id": "inegalites-patrimoine-transmission-france",
    "titre": "La concentration du patrimoine s'accentue : la France redevient-elle une société d'héritiers ?",
    "journal": "Le Monde Éco & Banque de France",
    "date": "03 septembre 2024",
    "periodicite": "Hebdomadaire",
    "theme": "Inégalités & Société",
    "niveau": "Première & Terminale",
    "chapitreSES": "Comment la structure sociale s'est-elle transformée ? / Justice sociale et redistribution",
    "resume": "Les statistiques de l'INSEE et de la Banque de France révèlent que les 10 % des ménages les plus fortunés détiennent 47 % du patrimoine total en France, tandis que la moitié la moins bien dotée n'en possède que 7 %. Le flux successoral annuel représente désormais près de 20 % du revenu national, contre 5 % dans les années 1950.",
    "faitsEtChiffres": [
      "Les 10 % les plus aisés possèdent 47 % du patrimoine brut des ménages français (les 1 % les plus riches en détiennent 16 %).",
      "Le patrimoine net médian des ménages s'établit à 124 800 euros, tandis que le patrimoine moyen s'élève à 257 000 euros (signe d'une forte asymétrie à droite).",
      "Âge moyen auquel on hérite en France : 51 ans aujourd'hui, contre 30 ans au début du XXe siècle.",
      "Le volume des successions et donations annuelles dépasse 300 milliards d'euros par an.",
      "Plus de 55 % des successions en ligne directe ne paient aucun droit de mutation grâce aux abattements fiscaux (100 000 € par parent et par enfant)."
    ],
    "notionsProgramme": [
      "Patrimoine et revenu",
      "Coefficient de Gini",
      "Courbe de Lorenz",
      "Redistribution verticale",
      "Mobilité sociale intergénérationnelle",
      "Égalité des chances vs Égalité des situations",
      "Rente économique"
    ],
    "mecanismeExplication": "Rendement du capital (r) supérieur au taux de croissance économique (g) ➔ Les patrimoines anciens s'accumulent plus vite que les revenus du travail ➔ Prépondérance du capital hérité sur l'effort individuel ➔ Transmission intrafamiliale du capital financier et immobilier ➔ Réduction de la mobilité sociale ascendante pour les enfants des classes populaires ➔ Reproduction sociale amplifiée.",
    "auteursMobilisables": [
      {
        "nom": "Thomas Piketty",
        "theorie": "Le Capital au XXIe siècle (2013)",
        "apport": "Formalise l'inégalité fondamentale r > g : dès lors que le rendement du capital surpasse la croissance du PIB, la richesse héritée domine structurellement la richesse accumulée par le travail individuel."
      },
      {
        "nom": "Pierre Bourdieu",
        "theorie": "La Distinction & Les formes de capital (1979)",
        "apport": "Le capital économique se conjugue au capital culturel et social pour verrouiller la reproduction des positions dominantes et la transmission du statut social."
      },
      {
        "nom": "John Rawls",
        "theorie": "Théorie de la justice (1971)",
        "apport": "Le principe de juste égalité des chances exige que les perspectives de vie ne soient pas déterminées par la loterie de la naissance ou l'héritage familial."
      }
    ],
    "sujetsBac": [
      {
        "type": "Dissertation",
        "intitule": "La fiscalité sur le patrimoine permet-elle de garantir l'égalité des chances ?",
        "pistesCorrection": "I. L'impôt successoral et foncier finance la redistribution, limite l'accumulation dynastique et rétablit une égalité de départ méritocratique. II. Limites : niches fiscales nombreuses, exil fiscal potentiel, et prépondérance des inégalités de capital culturel et scolaire dès l'enfance."
      },
      {
        "type": "Épreuve Composée (EC1)",
        "intitule": "Distinguez les inégalités de revenus des inégalités de patrimoine.",
        "pistesCorrection": "Flux annuel de ressources perçues (revenus du travail, du capital et de transfert) vs stock accumulé d'actifs financiers, immobiliers et professionnels. Montrer que le patrimoine est bien plus concentré que les revenus (Gini patrimoine ~ 0,65 vs Gini revenus ~ 0,29)."
      }
    ],
    "citationCle": "« Le passé dévore l'avenir : lorsque le rendement du capital dépasse la croissance, l'héritage prime sur le mérite individuel. »"
  },
  {
    "id": "productivite-pgf-ia-croissance",
    "titre": "L'énigme de la productivité française : choc d'apprentissage ou panne d'innovation ?",
    "journal": "Note de Conjoncture INSEE & Les Échos",
    "date": "02 septembre 2024",
    "periodicite": "Quotidien",
    "theme": "Croissance & Productivité",
    "niveau": "Première & Terminale",
    "chapitreSES": "Quelles sont les sources de la croissance économique ?",
    "resume": "Depuis 2019, la productivité horaire apparente du travail a reculé de près de 3 % en France, un décrochage inédit alors même que l'emploi a fortement progressé. Les économistes débattent des causes : essor sans précédent de l'apprentissage, rétention de main d'œuvre post-crise, ou stagnation de la productivité globale des facteurs (PGF).",
    "faitsEtChiffres": [
      "Perte de productivité estimée à environ -3 % par rapport à sa tendance pré-Covid en France.",
      "Forte expansion de l'apprentissage : près de 1 million d'apprentis en 2023 grâce aux primes à l'embauche (environ 1/3 de la perte mesurée de productivité moyenne selon l'OFCE).",
      "Dépenses intérieures de R&D en France stagnantes autour de 2,2 % du PIB, en deçà de l'objectif européen des 3 % et des États-Unis (3,4 %).",
      "Hausse des créations d'entreprises tirée majoritairement par les micro-entreprises à faible intensité capitalistique."
    ],
    "notionsProgramme": [
      "Productivité horaire du travail",
      "Productivité globale des facteurs (PGF)",
      "Intensité capitalistique",
      "Innovation et Progrès technique",
      "Croissance extensive vs intensive",
      "Destruction créatrice (Schumpeter)"
    ],
    "mecanismeExplication": "Recrutement massif de jeunes en formation (alternants) à coût réduit par subventions ➔ Salariés temporairement moins expérimentés et productifs ➔ Baisse mécanique de la productivité apparente par tête à court terme. À moyen-long terme, le manque d'investissement dans les équipements numériques, l'IA et la R&D bride les gains de productivité globale des facteurs (PGF) ➔ Risque de ralentissement durable de la croissance potentielle et des hausses de salaires réels.",
    "auteursMobilisables": [
      {
        "nom": "Robert Solow",
        "theorie": "Paradoxe de la productivité (1987) & Modèle néoclassique (1956)",
        "apport": "« On voit des ordinateurs partout, sauf dans les statistiques de productivité ». Montre le décalage entre la diffusion d'une technologie de rupture et son appropriation efficace par les organisations."
      },
      {
        "nom": "Joseph Schumpeter",
        "theorie": "Théorie de l'évolution économique (1911)",
        "apport": "L'innovation de procédé et de produit génère un processus de destruction créatrice qui élimine les entreprises zombies obsolètes au profit de firmes innovantes à forte productivité."
      },
      {
        "nom": "Paul Romer & Robert Lucas",
        "theorie": "Théories de la croissance endogène (années 1980-1990)",
        "apport": "La productivité globale des facteurs dépend d'investissements cumulatifs dans le capital humain (formation), le capital technologique (R&D) et le capital public (infrastructures)."
      }
    ],
    "sujetsBac": [
      {
        "type": "Dissertation",
        "intitule": "Dans quelle mesure l'innovation est-elle la principale source des gains de productivité ?",
        "pistesCorrection": "I. Le progrès technique et l'innovation (procédés, organisation, R&D) élèvent l'efficacité des facteurs (PGF) et repoussent les rendements décroissants. II. Mais d'autres facteurs sont indispensables : la qualité du capital humain, la modernisation du capital physique, et un cadre institutionnel propice à la diffusion technologique."
      },
      {
        "type": "Épreuve Composée (EC1)",
        "intitule": "Montrez comment l'augmentation du capital humain contribue à la croissance économique.",
        "pistesCorrection": "Définir le capital humain (savoirs, savoir-faire, santé) ➔ Salariés plus efficients et adaptables ➔ Hausse de la productivité du travail et capacité accrue à adopter des innovations technologiques de pointe."
      }
    ],
    "citationCle": "« La productivité n'est pas tout, mais sur le long terme, elle est presque tout : le niveau de vie d'un pays en dépend directement. » — Paul Krugman"
  },
  {
    "id": "commerce-mondial-droits-douane-omc",
    "titre": "Montée des barrières douanières et rivalités sino-américaines : la fin du libre-échange multilatéral ?",
    "journal": "Financial Times & Alternatives Économiques",
    "date": "28 août 2024",
    "periodicite": "Hebdomadaire",
    "theme": "Commerce International",
    "niveau": "Première & Terminale",
    "chapitreSES": "Quels sont les fondements du commerce international et de l'internationalisation de la production ?",
    "resume": "Multiplication des surtaxes sur les véhicules électriques chinois, relèvement des droits de douane aux États-Unis et durcissement des règles de subventions industrielles : le commerce international s'éloigne de la logique multilatérale de l'OMC pour basculer dans un découplage stratégique (friendshoring, de-risking).",
    "faitsEtChiffres": [
      "Droits de douane américains portés jusqu'à 100 % sur les véhicules électriques chinois et 50 % sur les cellules photovoltaïques.",
      "Union européenne appliquant des droits compensateurs provisoires allant jusqu'à 38 % sur les importations de voitures électriques chinoises subventionnées.",
      "Ralentissement du commerce mondial de biens : croissance de seulement +1,2 % en volume en 2023 selon l'OMC, inférieure à la croissance du PIB mondial.",
      "Fragmentation géoéconomique : le FMI estime qu'un éclatement du commerce mondial en blocs rivaux pourrait coûter jusqu'à 7 % du PIB mondial à long terme."
    ],
    "notionsProgramme": [
      "Avantage comparatif (Ricardo)",
      "Dotations factorielles et technologiques (HOS)",
      "Protectionnisme éducateur (List)",
      "Barrières tarifaires et non tarifaires",
      "Chaînes de valeur mondiales (CVM)",
      "Guerre commerciale",
      "Compétitivité-prix vs hors-prix"
    ],
    "mecanismeExplication": "Un État subventionne massivement sa filière nationale émergente ➔ Baisse artificielle des prix d'exportation (dumping) ➔ Les partenaires commerciaux subissent un afflux d'importations bon marché qui menace leurs producteurs locaux ➔ Réaction par l'application de droits de douane compensateurs (protectionnisme stratégique) ➔ Hausse des prix pour le consommateur final, représailles commerciales réciproques et dislocation des chaînes de valeur mondiales.",
    "auteursMobilisables": [
      {
        "nom": "David Ricardo",
        "theorie": "Théorie des avantages comparatifs (1817)",
        "apport": "Démontre mathématiquement que chaque pays a intérêt à se spécialiser dans la production où son avantage comparatif est le plus grand (ou désavantage le plus faible), permettant un jeu à somme positive pour le bien-être mondial."
      },
      {
        "nom": "Friedrich List",
        "theorie": "Système national d'économie politique (1841)",
        "apport": "Théoricien du protectionnisme éducateur : les industries naissantes doivent être temporairement protégées de la concurrence internationale pour acquérir l'échelle et la technologie suffisantes avant de s'ouvrir."
      },
      {
        "nom": "Paul Krugman",
        "theorie": "Nouvelle théorie du commerce international (1979)",
        "apport": "Met en évidence le rôle des rendements d'échelle croissants et de la concurrence imparfaite, justifiant sous certaines conditions une politique commerciale stratégique pour capter des rentes monopolistiques mondiales."
      }
    ],
    "sujetsBac": [
      {
        "type": "Dissertation",
        "intitule": "Le protectionnisme est-il nécessairement néfaste pour la croissance économique ?",
        "pistesCorrection": "I. Les dangers avérés du protectionnisme : renchérissement du coût de la vie pour les ménages, hausse des coûts des intrants pour les entreprises, risque de guerre commerciale et perte des gains à l'échange ricardiens. II. Ses justifications économiques contemporaines : protection des industries naissantes et stratégiques, sauvegarde de l'emploi local, souveraineté industrielle et transition écologique."
      },
      {
        "type": "Épreuve Composée (EC1)",
        "intitule": "Présentez la distinction entre barrières tarifaires et barrières non tarifaires.",
        "pistesCorrection": "Définir les barrières tarifaires (droits de douane ad valorem ou spécifiques) et les barrières non tarifaires (quotas d'importation, normes techniques, sanitaires ou environnementales)."
      }
    ],
    "citationCle": "« Le protectionnisme est notre voie, le libre-échange est notre but : une nation ne peut s'ouvrir sans avoir au préalable développé ses forces productives. » — Friedrich List"
  }
];
