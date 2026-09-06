export type AuteurSES = {
  id: string;
  nom: string;
  siecle: string;
  discipline: 'Économie' | 'Sociologie et science politique' | 'Regards croisés';
  courant: string;
  theseCentrale: string;
  notionsCles: string[];
  citationIncontournable: string;
  contexteUtilisationBac: string;
  explicationDetaillee: string;
  chapitresAssocies: string[];
};

export const auteursSES: AuteurSES[] = [
  // ================= ÉCONOMISTES =================
  {
    id: 'adam-smith',
    nom: 'Adam Smith',
    siecle: 'XVIIIe siècle (1723-1790)',
    discipline: 'Économie',
    courant: 'École classique (Père fondateur du libéralisme économique)',
    theseCentrale: 'La recherche de l’intérêt individuel conduit, grâce à la « main invisible » du marché, à l’intérêt général et à la prospérité collective. La division du travail est le moteur fondamental des gains de productivité.',
    notionsCles: ['Main invisible', 'Division du travail', 'Avantages absolus', 'Marché auto-régulateur', 'Gains de productivité'],
    citationIncontournable: '« Ce n\'est pas de la bienveillance du boucher, du brasseur ou du boulanger que nous attendons notre dîner, mais de leur souci de leur propre intérêt. » (*La Richesse des nations*, 1776)',
    contexteUtilisationBac: 'À mobiliser pour illustrer l’efficacité allocative du marché concurrentiel, les gains de la spécialisation et de la division du travail, et la justification du libre-échange.',
    explicationDetaillee: 'Smith montre avec son célèbre exemple de la manufacture d’épingles comment la parcellisation des tâches décuple la productivité. Il défend le mécanisme de marché libre tout en reconnaissant à l\'État des fonctions régaliennes et la prise en charge des infrastructures indispensables non rentables pour le privé.',
    chapitresAssocies: ['Production et création de richesse', 'Marché concurrentiel (CPP)', 'Commerce international']
  },
  {
    id: 'david-ricardo',
    nom: 'David Ricardo',
    siecle: 'XIXe siècle (1772-1823)',
    discipline: 'Économie',
    courant: 'École classique anglaise',
    theseCentrale: 'La loi des avantages comparatifs : chaque pays a intérêt à se spécialiser dans la production où il est le plus avantagé ou le moins désavantagé, favorisant les gains mutuels à l’échange.',
    notionsCles: ['Avantages comparatifs', 'Rendements décroissants', 'Spécialisation internationale', 'Valeur-travail'],
    citationIncontournable: '« Dans un système d\'entière liberté de commerce, chaque pays consacre son capital et son travail aux emplois qui lui sont les plus avantageux. » (*Des principes de l\'économie politique et de l\'impôt*, 1817)',
    contexteUtilisationBac: 'À citer systématiquement sur la justification théorique du libre-échange et des gains à l’échange dans les modèles de spécialisation.',
    explicationDetaillee: 'Même si un pays est moins productif qu’un autre dans toutes les productions (exemple classique du vin au Portugal et du drap en Angleterre), le commerce international reste mutuellement profitable dès lors que les coûts d’opportunité relatifs diffèrent.',
    chapitresAssocies: ['Marché concurrentiel (CPP)', 'Commerce international']
  },
  {
    id: 'karl-marx',
    nom: 'Karl Marx',
    siecle: 'XIXe siècle (1818-1883)',
    discipline: 'Économie',
    courant: 'Matérialisme historique / Économie marxiste critique',
    theseCentrale: 'Le capitalisme repose sur l’exploitation de la force de travail salariée par les propriétaires des moyens de production. L\'extorsion de la plus-value et la baisse tendancielle du taux de profit mènent à des crises chroniques de surproduction.',
    notionsCles: ['Plus-value', 'Exploitation', 'Lutte des classes', 'Aliénation', 'Baisse tendancielle du taux de profit'],
    citationIncontournable: '« L\'histoire de toute société jusqu\'à nos jours n\'a été que l\'histoire de luttes de classes. » (*Manifeste du parti communiste*, 1848)',
    contexteUtilisationBac: 'Idéal pour analyser les conflits de répartition de la valeur ajoutée (partage salaires/profits), les inégalités et les limites structurelles du marché.',
    explicationDetaillee: 'Pour Marx, le capitaliste achète la force de travail à sa valeur de reproduction mais en tire une valeur supérieure : la différence constitue la plus-value (bénéfice du capitaliste issu du surtravail non rémunéré).',
    chapitresAssocies: ['Production et création de richesse', 'Marché et concurrence', 'Stratification et structure sociale']
  },
  {
    id: 'john-maynard-keynes',
    nom: 'John Maynard Keynes',
    siecle: 'XXe siècle (1883-1946)',
    discipline: 'Économie',
    courant: 'Macroéconomie keynésienne',
    theseCentrale: 'L’économie peut durablement s’installer dans un équilibre de sous-emploi car les marchés ne sont pas auto-régulateurs. C’est la demande effective (anticipée par les entrepreneurs) qui détermine le niveau de production et de l’emploi.',
    notionsCles: ['Demande effective', 'Multiplicateur keynésien', 'Équilibre de sous-emploi', 'Politique de relance', 'Propension à consommer'],
    citationIncontournable: '« À long terme, nous serons tous morts. » (*A Tract on Monetary Reform*, 1923 - justification de l’intervention publique conjoncturelle immédiate)',
    contexteUtilisationBac: 'À mobiliser pour expliquer les politiques budgétaires de relance, le rôle stabilisateur de l’État face aux crises, le déficit public vertueux et le chômage involontaire.',
    explicationDetaillee: 'Keynes réfute la loi de Say (« toute offre crée sa propre demande »). Pour sortir de la récession, l\'État doit injecter des dépenses publiques ou réduire les taux d\'intérêt pour stimuler la consommation et l\'investissement.',
    chapitresAssocies: ['Financement de l\'économie', 'Monnaie et création monétaire', 'Emploi et travail']
  },
  {
    id: 'joseph-schumpeter',
    nom: 'Joseph Schumpeter',
    siecle: 'XXe siècle (1883-1950)',
    discipline: 'Économie',
    courant: 'Théorie de l’évolution économique et de l’innovation',
    theseCentrale: 'Le moteur fondamental de la dynamique capitaliste est l’innovation, incarnée par l’entrepreneur. Le processus de « destruction créatrice » élimine continuellement les structures dépassées au profit d’activités nouvelles à forte valeur ajoutée.',
    notionsCles: ['Destruction créatrice', 'Entrepreneur innovateur', 'Rente de monopole d\'innovation', 'Grappes d\'innovations'],
    citationIncontournable: '« Le processus de mutation industrielle (...) révolutionne incessamment de l\'intérieur la structure économique, en détruisant continuellement ses éléments vieillis et en créant continuellement des éléments neufs. » (*Capitalisme, Socialisme et Démocratie*, 1942)',
    contexteUtilisationBac: 'Indispensable pour expliquer les monopoles d’innovation, les gains de productivité, la croissance endogène et la compétitivité hors-prix.',
    explicationDetaillee: 'L’entrepreneur innovateur prend des risques en lançant une nouvelle combinaison productive (produit, procédé, matière première, débouché, organisation). En échange, il bénéficie d\'un monopole temporaire et de profits élevés, attirant des imitateurs en grappe.',
    chapitresAssocies: ['Production et création de richesse', 'Marchés imparfaitement concurrentiels']
  },
  {
    id: 'george-akerlof',
    nom: 'George Akerlof',
    siecle: 'XXe-XXIe siècle (1940-présent, Prix Nobel 2001)',
    discipline: 'Économie',
    courant: 'Économie de l’information / Néo-keynésianisme',
    theseCentrale: 'Sur les marchés caractérisés par des asymétries d’information préalables à la transaction, le mécanisme des prix peut échouer et provoquer une antisélection (sélection adverse) éliminant les biens de bonne qualité.',
    notionsCles: ['Asymétrie d\'information', 'Antisélection (sélection adverse)', 'Marché des citrons (Lemons problem)', 'Signal de qualité'],
    citationIncontournable: '« La présence de biens de mauvaise qualité chasse les biens de bonne qualité du marché. » (*The Market for Lemons*, 1970)',
    contexteUtilisationBac: 'À mobiliser absolument sur le chapitre des défaillances de marché et la nécessité des labels, garanties ou réglementations publiques pour rétablir la confiance.',
    explicationDetaillee: 'Sur le marché des voitures d\'occasion, les acheteurs ignorent si le véhicule est bon ou défectueux (« un citron »). Ils refusent donc de payer le prix fort : les vendeurs de bonnes voitures se retirent du marché, ne laissant que les mauvaises.',
    chapitresAssocies: ['Défaillances du marché', 'Protection sociale et gestion des risques']
  },
  {
    id: 'elinor-ostrom',
    nom: 'Elinor Ostrom',
    siecle: 'XXe-XXIe siècle (1933-2012, Prix Nobel 2009)',
    discipline: 'Économie',
    courant: 'Économie institutionnelle et gouvernance des biens communs',
    theseCentrale: 'Réfutation de la « tragédie des biens communs » inéluctable : les communautés locales d’usagers sont capables d’établir des règles de gouvernance collective auto-organisées et durables, sans privatisation ni étatisation.',
    notionsCles: ['Biens communs', 'Rivalité et non-exclusion', 'Gouvernance polycentrique', 'Auto-organisation locale'],
    citationIncontournable: '« Il n\'existe pas de panacée unique pour gérer les ressources communes : la coopération locale auto-régulée est souvent plus efficace que le tout-marché ou le tout-État. » (*Governing the Commons*, 1990)',
    contexteUtilisationBac: 'À citer sur la gestion des ressources naturelles partagées (pêche, forêts, eau, climat) et la typologie des biens en économie.',
    explicationDetaillee: 'Contrairement à la vision pessimiste de Garrett Hardin, Ostrom a documenté des centaines de cas réels où les usagers ont su préserver leurs pâturages ou nappes phréatiques par des sanctions graduées et une surveillance mutuelle.',
    chapitresAssocies: ['Défaillances du marché', 'Marché et fixation des prix']
  },

  // ================= SOCIOLOGUES & POLITISTES =================
  {
    id: 'emile-durkheim',
    nom: 'Émile Durkheim',
    siecle: 'XIXe-XXe siècle (1858-1917)',
    discipline: 'Sociologie et science politique',
    courant: 'Fondateur de la sociologie française / Holisme méthodologique',
    theseCentrale: 'Les faits sociaux doivent être traités « comme des choses » : ils sont extérieurs à l’individu et s’imposent à lui par une contrainte sociale. L\'intégration et la régulation sociale préviennent l\'anomie.',
    notionsCles: ['Fait social', 'Holisme', 'Socialisation', 'Solidarité mécanique et organique', 'Anomie'],
    citationIncontournable: '« Un fait social est toute manière de faire, fixée ou non, susceptible d\'exercer sur l\'individu une contrainte extérieure. » (*Les Règles de la méthode sociologique*, 1895)',
    contexteUtilisationBac: 'À mobiliser sur la puissance de la socialisation, l\'apprentissage des normes et valeurs, et les risques de rupture du lien social.',
    explicationDetaillee: 'Durkheim démontre que même un acte intime comme le suicide varie selon le degré d’intégration religieuse, familiale ou politique du groupe social, prouvant l\'existence d\'une force sociale supra-individuelle.',
    chapitresAssocies: ['Socialisation et acteurs sociaux', 'Socialisation et configurations familiales']
  },
  {
    id: 'max-weber',
    nom: 'Max Weber',
    siecle: 'XIXe-XXe siècle (1864-1920)',
    discipline: 'Sociologie et science politique',
    courant: 'Sociologie compréhensive / Individualisme méthodologique',
    theseCentrale: 'La sociologie doit comprendre le sens que les acteurs donnent à leurs actions (action sociale). La société moderne se caractérise par un processus de rationalisation des activités (bureaucratie, désenchantement du monde).',
    notionsCles: ['Action sociale', 'Idéal-type', 'Compréhension', 'Domination légitime (traditionnelle, charismatique, légale-rationnelle)', 'Éthique protestante'],
    citationIncontournable: '« L\'État est cette communauté humaine qui revendique avec succès le monopole de la violence physique légitime. » (*Le Savant et le Politique*, 1919)',
    contexteUtilisationBac: 'Indispensable pour définir le pouvoir politique et l’État, les modes d’autorité et l\'analyse compréhensive des choix individuels.',
    explicationDetaillee: 'Dans *L\'Éthique protestante et l\'esprit du capitalisme*, Weber montre comment l\'ascétisme calviniste a favorisé l\'épargne réinvestie systématiquement, donnant naissance à la dynamique capitaliste moderne.',
    chapitresAssocies: ['Organisation de la vie politique', 'Socialisation et acteurs sociaux']
  },
  {
    id: 'pierre-bourdieu',
    nom: 'Pierre Bourdieu',
    siecle: 'XXe siècle (1930-2002)',
    discipline: 'Sociologie et science politique',
    courant: 'Sociologie critique / Théorie de la reproduction et des capitaux',
    theseCentrale: 'L’espace social est structuré par la possession de différents capitaux (économique, culturel, social, symbolique). L’habitus, système de dispositions durables intériorisé dès l’enfance, engendre la reproduction des hiérarchies sociales.',
    notionsCles: ['Habitus', 'Capital culturel', 'Capital social', 'Violence symbolique', 'Reproduction sociale', 'Dissonance culturelle'],
    citationIncontournable: '« L\'habitus est un système de dispositions durables et transposables, structures structurées prédisposées à fonctionner comme structures structurantes. » (*Le Sens pratique*, 1980)',
    contexteUtilisationBac: 'À citer sur la socialisation primaire, les inégalités scolaires, les pratiques culturelles, le genre et la reproduction sociale.',
    explicationDetaillee: 'Bourdieu montre que l’école ne valorise pas des compétences neutres mais la culture des classes dominantes (capital culturel incorporé), transformant ainsi les privilèges sociaux en « mérites scolaires » apparents.',
    chapitresAssocies: ['Socialisation et acteurs sociaux', 'Socialisation et configurations familiales', 'Diplôme, emploi et salaire']
  },
  {
    id: 'mark-granovetter',
    nom: 'Mark Granovetter',
    siecle: 'XXe-XXIe siècle (1943-présent)',
    discipline: 'Sociologie et science politique',
    courant: 'Sociologie des réseaux sociaux et nouvelle sociologie économique',
    theseCentrale: 'La « force des liens faibles » : les opportunités décisives (comme trouver un emploi) proviennent principalement des relations distantes (connaissances, anciens camarades) plutôt que du cercle des amis intimes.',
    notionsCles: ['Liens forts', 'Liens faibles', 'Réseau social', 'Encastrement social (embeddedness)', 'Capital social'],
    citationIncontournable: '« Les liens faibles constituent des ponts indispensables reliant des cercles sociaux autrement isolés. » (*The Strength of Weak Ties*, 1973)',
    contexteUtilisationBac: 'À mobiliser pour analyser la sociabilité, le rôle des réseaux dans l’accès au marché du travail et la structuration sociale.',
    explicationDetaillee: 'Les proches (liens forts) partagent la même information que nous. Au contraire, les liens faibles apportent des informations inédites et ouvrent des passerelles vers d\'autres milieux professionnels.',
    chapitresAssocies: ['Réseaux sociaux et sociabilité', 'Diplôme, emploi et salaire']
  },
  {
    id: 'mancur-olson',
    nom: 'Mancur Olson',
    siecle: 'XXe siècle (1932-1998)',
    discipline: 'Sociologie et science politique',
    courant: 'Choix rationnel appliqué à l’action collective',
    theseCentrale: 'Le « paradoxe de l’action collective » : un individu rationnel a intérêt à adopter un comportement de passager clandestin (free rider) en laissant les autres militer tout en bénéficiant des acquis obtenus.',
    notionsCles: ['Paradoxe d\'Olson', 'Passager clandestin (Free rider)', 'Incitations sélectives', 'Rétributions symboliques'],
    citationIncontournable: '« Les individus rationnels et égoïstes n\'agiront pas pour atteindre leur intérêt commun à moins qu\'il n\'y ait une incitation sélective. » (*The Logic of Collective Action*, 1965)',
    contexteUtilisationBac: 'Indispensable pour expliquer pourquoi les citoyens s’engagent ou non, les syndicats, les grèves et les mouvements sociaux.',
    explicationDetaillee: 'Pour surmonter le paradoxe du passager clandestin, les organisations politiques et syndicales mettent en place des incitations sélectives (aides juridiques, avantages matériels) ou des rétributions symboliques (prestige, valorisation).',
    chapitresAssocies: ['Engagement politique', 'Organisation de la vie politique']
  },
  {
    id: 'alexis-de-tocqueville',
    nom: 'Alexis de Tocqueville',
    siecle: 'XIXe siècle (1805-1859)',
    discipline: 'Sociologie et science politique',
    courant: 'Philosophie politique / Sociologie de la démocratie',
    theseCentrale: 'La démocratie est un mouvement historique d’égalisation des conditions. Elle favorise le développement d’une vaste classe moyenne mais comporte des risques : la tyrannie de la majorité, l’individualisme et le despotisme doux.',
    notionsCles: ['Égalisation des conditions', 'Démocratie', 'Individualisme', 'Despotisme démocratique', 'Vie associative'],
    citationIncontournable: '« Dans les pays démocratiques, la science de l\'association est la science mère ; le progrès de toutes les autres dépend des progrès de celle-là. » (*De la démocratie en Amérique*, 1835-1840)',
    contexteUtilisationBac: 'À mobiliser sur la citoyenneté, l\'engagement civique, la stratification sociale et le rôle des corps intermédiaires / associations.',
    explicationDetaillee: 'Tocqueville observe aux États-Unis que la vitalité des associations civiles constitue le meilleur rempart contre le repli individualiste et la tentation de confier tout le pouvoir à un État tutélaire.',
    chapitresAssocies: ['Organisation de la vie politique', 'Engagement politique']
  },
  // ================= PHILOSOPHES POLITIQUES =================
  {
    id: 'john-rawls',
    nom: 'John Rawls',
    siecle: 'XXe siècle (1921-2002)',
    discipline: 'Sociologie et science politique',
    courant: 'Philosophie politique libérale-égalitaire',
    theseCentrale: 'La justice comme équité : derrière le « voile d\'ignorance », des individus rationnels choisiraient deux principes — liberté égale pour tous et principe de différence (les inégalités ne sont acceptables que si elles profitent aux plus défavorisés).',
    notionsCles: ['Voile d\'ignorance', 'Position originelle', 'Principe de différence', 'Maximin', 'Justice procédurale'],
    citationIncontournable: '« Les inégalités sociales et économiques doivent être à l\'avantage des membres les plus désavantagés de la société. » (*Théorie de la justice*, 1971)',
    contexteUtilisationBac: 'Indispensable sur les chapitres justice sociale, inégalités et redistribution. À opposer à Nozick (libertarien) et à utiliser pour justifier une redistribution progressive.',
    explicationDetaillee: 'Derrière le voile d\'ignorance, ignorant sa position future dans la société, chaque individu rationnel choisit de protéger les plus défavorisés (logique maximin = maximiser le bien-être du moins bien loti).',
    chapitresAssocies: ['Justice sociale et inégalités', 'État-providence et protection sociale']
  },
  {
    id: 'amartya-sen',
    nom: 'Amartya Sen',
    siecle: 'XXe-XXIe siècle (1933-présent, Prix Nobel 1998)',
    discipline: 'Économie',
    courant: 'Économie du bien-être / Approche par les capabilités',
    theseCentrale: 'Le développement ne doit pas se mesurer uniquement au revenu mais aux libertés réelles (capabilités) que les individus ont d\'accomplir ce à quoi ils tiennent. L\'IDH est inspiré de cette vision multidimensionnelle.',
    notionsCles: ['Capabilités', 'Libertés réelles', 'IDH', 'Développement humain', 'Agentivité'],
    citationIncontournable: '« Le développement peut être conçu comme un processus d\'expansion des libertés réelles dont jouissent les individus. » (*Un nouveau modèle économique*, 1999)',
    contexteUtilisationBac: 'À mobiliser pour critiquer le PIB comme seul indicateur de richesse et défendre une conception multidimensionnelle du bien-être et du développement.',
    explicationDetaillee: 'Un revenu identique ne garantit pas les mêmes capabilités : une personne handicapée ou malade a besoin de plus de ressources pour disposer des mêmes libertés réelles qu\'une personne valide. Cela justifie des transferts différenciés selon les besoins.',
    chapitresAssocies: ['Justice sociale et inégalités', 'Mondialisation et développement']
  },
  // ================= ÉCONOMISTES SUPPLÉMENTAIRES =================
  {
    id: 'milton-friedman',
    nom: 'Milton Friedman',
    siecle: 'XXe siècle (1912-2006, Prix Nobel 1976)',
    discipline: 'Économie',
    courant: 'Monétarisme / École de Chicago',
    theseCentrale: 'L\'inflation est toujours et partout un phénomène monétaire. La politique monétaire discrétionnaire nuit à la stabilité car les anticipations des agents neutralisent l\'effet des politiques keynésiennes (taux de chômage naturel).',
    notionsCles: ['Monétarisme', 'Taux de chômage naturel (NAIRU)', 'Courbe de Phillips verticale à long terme', 'Anticipations adaptatives', 'Règle de Friedman'],
    citationIncontournable: '« L\'inflation est toujours et partout un phénomène monétaire. » (*A Monetary History of the United States*, 1963)',
    contexteUtilisationBac: 'À mobiliser pour expliquer les limites des politiques keynésiennes de relance et la politique de ciblage d\'inflation de la BCE.',
    explicationDetaillee: 'Friedman démontre que la courbe de Phillips (arbitrage inflation-chômage) ne tient qu\'à court terme. À long terme, les agents anticipent l\'inflation et la neutralisent, rendant le chômage revenir à son niveau naturel structurel.',
    chapitresAssocies: ['Monnaie et financement', 'Politiques macroéconomiques et conjoncture']
  },
  {
    id: 'friedrich-hayek',
    nom: 'Friedrich Hayek',
    siecle: 'XXe siècle (1899-1992, Prix Nobel 1974)',
    discipline: 'Économie',
    courant: 'Libéralisme autrichien / Ordre spontané',
    theseCentrale: 'Le mécanisme des prix est un système extraordinairement efficace de traitement de l\'information dispersée dans la société. Toute planification centralisée est condamnée à l\'échec faute de pouvoir agréger ce savoir local.',
    notionsCles: ['Information dispersée', 'Ordre spontané (catallaxie)', 'Prix comme signal', 'Critique de la planification', 'Concurrence comme processus de découverte'],
    citationIncontournable: '« Le système des prix est l\'un des mécanismes par lesquels l\'homme arrive à utiliser une connaissance aussi vaste et dispersée qu\'aucun individu ne pourrait la traiter. » (*L\'utilisation de la connaissance dans la société*, 1945)',
    contexteUtilisationBac: 'À opposer à Keynes sur le rôle de l\'État et à citer sur l\'efficacité informationnelle du marché concurrentiel.',
    explicationDetaillee: 'Pour Hayek, le prix d\'un bien reflète des millions d\'informations locales (offre, demande, préférences) qu\'aucune autorité centrale ne pourrait collecter et traiter. La régulation par les prix est donc supérieure à toute planification étatique.',
    chapitresAssocies: ['Marché concurrentiel', 'Politiques macroéconomiques']
  },
  {
    id: 'thomas-piketty',
    nom: 'Thomas Piketty',
    siecle: 'XXIe siècle (1971-présent)',
    discipline: 'Économie',
    courant: 'Économie des inégalités et du patrimoine',
    theseCentrale: 'Lorsque le taux de rendement du capital (r) dépasse durablement le taux de croissance économique (g), les inégalités de patrimoine et de revenus s\'accroissent mécaniquement, menaçant la cohésion démocratique.',
    notionsCles: ['Loi r > g', 'Capital au XXIe siècle', 'Concentration du patrimoine', 'Impôt progressif mondial sur le capital', 'Courbe en U des inégalités'],
    citationIncontournable: '« Quand le taux de rendement du capital dépasse durablement le taux de croissance de la production et du revenu, le capitalisme produit mécaniquement des inégalités insoutenables. » (*Le Capital au XXIe siècle*, 2013)',
    contexteUtilisationBac: 'Incontournable pour expliquer la montée des inégalités patrimoniales depuis 1980 et les débats sur la fiscalité du capital.',
    explicationDetaillee: 'Piketty montre à partir de données fiscales historiques (1700-2010) que la règle r > g a prévalu sur le long terme, concentrant le patrimoine. Les Trente Glorieuses (1945-1975) constituent une exception liée aux destructions de guerre et à la fiscalité élevée.',
    chapitresAssocies: ['Justice sociale et inégalités', 'Revenus, pouvoir d\'achat et protection sociale']
  },
  {
    id: 'gary-becker',
    nom: 'Gary Becker',
    siecle: 'XXe siècle (1930-2014, Prix Nobel 1992)',
    discipline: 'Économie',
    courant: 'Impérialisme économique / École de Chicago',
    theseCentrale: 'L\'analyse économique (maximisation, coûts-bénéfices, capital humain) peut s\'appliquer à tous les comportements humains y compris non marchands : éducation, mariage, discrimination, criminalité.',
    notionsCles: ['Capital humain', 'Discrimination statistique', 'Économie de la famille', 'Coût d\'opportunité', 'Rendement de l\'éducation'],
    citationIncontournable: '« L\'éducation est un investissement en capital humain : son rendement s\'évalue en termes de gains salariaux futurs actualisés. » (*Human Capital*, 1964)',
    contexteUtilisationBac: 'À mobiliser sur le rendement de l\'éducation, la théorie du capital humain et la discrimination sur le marché du travail.',
    explicationDetaillee: 'Becker formalise l\'idée que les individus investissent en éducation et formation car ils anticipent un rendement salarial futur. Les entreprises pratiquant la discrimination (Becker, 1957) subissent un coût compétitif à long terme.',
    chapitresAssocies: ['Diplôme, emploi et salaire', 'Justice sociale et inégalités']
  },
  {
    id: 'irving-fisher',
    nom: 'Irving Fisher',
    siecle: 'XIXe-XXe siècle (1867-1947)',
    discipline: 'Économie',
    courant: 'Néoclassicisme / Théorie quantitative de la monnaie',
    theseCentrale: 'La monnaie est neutre à long terme : une augmentation de la masse monétaire ne fait qu\'augmenter les prix sans affecter la production réelle. Le taux d\'intérêt réel = taux nominal − inflation anticipée.',
    notionsCles: ['Équation de Fisher (taux réel ≈ taux nominal − inflation)', 'Théorie quantitative de la monnaie (MV = PT)', 'Illusion monétaire', 'Déflation par la dette'],
    citationIncontournable: '« Le taux d\'intérêt réel est approximativement égal au taux nominal diminué du taux d\'inflation anticipé. » (*The Rate of Interest*, 1907)',
    contexteUtilisationBac: 'Formule de Fisher incontournable dans tous les chapitres sur la monnaie, l\'inflation et le financement de l\'économie.',
    explicationDetaillee: 'Fisher développe aussi la théorie de la déflation par la dette : quand les prix baissent, la valeur réelle des dettes augmente, amplifiant la crise (spirale déflationniste de 1929). Il préfigure ainsi la trappe à liquidité keynésienne.',
    chapitresAssocies: ['Monnaie et financement', 'Politiques macroéconomiques']
  },
  // ================= SOCIOLOGUES SUPPLÉMENTAIRES =================
  {
    id: 'robert-putnam',
    nom: 'Robert Putnam',
    siecle: 'XXe-XXIe siècle (1941-présent)',
    discipline: 'Sociologie et science politique',
    courant: 'Sociologie du capital social et de la démocratie participative',
    theseCentrale: 'Le « capital social » — réseaux de confiance, normes de réciprocité et associations civiques — est un facteur essentiel de la prospérité économique et de la bonne gouvernance démocratique.',
    notionsCles: ['Capital social', 'Confiance interpersonnelle', 'Réseaux civiques', 'Bridging capital', 'Bonding capital'],
    citationIncontournable: '« Le capital social améliore l\'efficience de la société en facilitant les actions coordonnées. » (*Bowling Alone*, 2000)',
    contexteUtilisationBac: 'À mobiliser sur les liens entre cohésion sociale, participation associative et performance économique ou démocratique.',
    explicationDetaillee: 'Putnam montre que les régions italiennes du nord (riches en associations) fonctionnent économiquement et politiquement mieux que le sud. Aux États-Unis, le déclin de la participation associative depuis les années 1960 affaiblit la démocratie.',
    chapitresAssocies: ['Réseaux sociaux et sociabilité', 'Organisation de la vie politique']
  },
  {
    id: 'erving-goffman',
    nom: 'Erving Goffman',
    siecle: 'XXe siècle (1922-1982)',
    discipline: 'Sociologie et science politique',
    courant: 'Interactionnisme symbolique / Sociologie de la vie quotidienne',
    theseCentrale: 'La vie sociale est analogue à une pièce de théâtre : les individus jouent des rôles en modulant leur « présentation de soi » selon le contexte (scène vs coulisses), gérant l\'impression qu\'ils produisent sur les autres.',
    notionsCles: ['Présentation de soi', 'Stigmate', 'Interaction en face-à-face', 'Cadre de l\'interaction', 'Scène / coulisses'],
    citationIncontournable: '« La vie quotidienne est une scène sur laquelle chacun joue un rôle pour gérer l\'impression qu\'il produit sur autrui. » (*La Mise en scène de la vie quotidienne*, 1959)',
    contexteUtilisationBac: 'À mobiliser sur la socialisation, les normes d\'interaction, les rôles sociaux et les processus de stigmatisation sociale.',
    explicationDetaillee: 'Goffman décrit dans *Stigmate* comment les individus portant une caractéristique dévalorisée (handicap, maladie mentale, ethnie) gèrent leur identité abîmée et les techniques de normalisation en interaction.',
    chapitresAssocies: ['Socialisation et acteurs sociaux', 'Stratification et structure sociale']
  },
  {
    id: 'robert-castel',
    nom: 'Robert Castel',
    siecle: 'XXe-XXIe siècle (1933-2013)',
    discipline: 'Sociologie et science politique',
    courant: 'Sociologie des inégalités et de la désaffiliation sociale',
    theseCentrale: 'La cohésion sociale repose sur deux axes : l\'intégration par le travail (emploi stable) et les liens relationnels (famille, communauté). Leur affaiblissement crée des « zones de vulnérabilité » menant à la désaffiliation.',
    notionsCles: ['Désaffiliation', 'Zone d\'intégration / vulnérabilité / désaffiliation', 'Salariat', 'Propriété sociale', 'Précarité'],
    citationIncontournable: '« La précarité est un processus de désaffiliation qui s\'installe quand l\'individu perd ses ancrages dans le travail et dans les liens sociaux. » (*Les Métamorphoses de la question sociale*, 1995)',
    contexteUtilisationBac: 'Indispensable pour analyser l\'exclusion sociale, la précarité du travail et la fragilisation des liens sociaux dans les sociétés contemporaines.',
    explicationDetaillee: 'Castel distingue trois zones : intégration (emploi stable + réseau dense), vulnérabilité (emploi précaire + réseau fragile) et désaffiliation (sans emploi + isolé). La montée de la flexibilité depuis 1980 a gonflé la zone de vulnérabilité.',
    chapitresAssocies: ['Stratification et structure sociale', 'Emploi et travail']
  },
  {
    id: 'francois-de-singly',
    nom: 'François de Singly',
    siecle: 'XXe-XXIe siècle (1948-présent)',
    discipline: 'Sociologie et science politique',
    courant: 'Sociologie de la famille et de l\'individu contemporain',
    theseCentrale: 'La famille contemporaine évolue vers un modèle d\'« individualisme relationnel » : les individus cherchent à la fois à s\'affirmer comme personnes autonomes et à maintenir des liens affectifs forts.',
    notionsCles: ['Individualisme relationnel', 'Famille contemporaine', 'Décohabitation', 'Pluralité des formes familiales', 'Double contrainte identitaire'],
    citationIncontournable: '« La famille est un espace de tension entre le besoin d\'appartenance et la nécessité de s\'individualiser. » (*Sociologie de la famille contemporaine*, 1993)',
    contexteUtilisationBac: 'À mobiliser pour analyser les mutations des structures familiales, la socialisation dans un contexte de recomposition familiale et l\'individualisation des trajectoires.',
    explicationDetaillee: 'De Singly montre que les formes familiales se diversifient (familles monoparentales, recomposées, homoparentales) sans que la famille perde son rôle de socialisation primaire fondamental.',
    chapitresAssocies: ['Socialisation et configurations familiales', 'Réseaux sociaux et sociabilité']
  }
];

