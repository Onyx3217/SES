export type SesDefinition = {
  id: string;
  terme: string;
  sigle?: string;
  categorie: string;
  niveau?: ('Seconde' | 'Première' | 'Tous')[];
  discipline?: 'Science économique' | 'Sociologie et science politique' | 'Regards croisés' | 'Méthodes';
  definition: string;
  formule?: string;
  interpretation: string;
  exemple: string;
  pointsCles: string[];
  liens?: string[];
};

export const sesGlossaire: SesDefinition[] = [
  {
    id: "ca",
    terme: "Chiffre d'affaires",
    sigle: "CA",
    categorie: "Entreprise",
    definition: "Le chiffre d'affaires correspond au montant total des ventes réalisées par une entreprise sur une période donnée.",
    formule: "CA = Prix unitaire × Quantité vendue",
    interpretation: "Il indique la taille de l'activité commerciale, mais ne dit pas si l'entreprise gagne réellement de l'argent.",
    exemple: "Une boutique vend 250 articles à 40 € : son chiffre d'affaires est de 10 000 €.",
    pointsCles: ["Mesure les ventes", "Ne tient pas compte des coûts", "Diffère du bénéfice"]
  },
  {
    id: "valeur-ajoutee",
    terme: "Valeur ajoutée",
    sigle: "VA",
    categorie: "Production",
    definition: "La valeur ajoutée mesure la richesse réellement créée par une unité de production après avoir retiré les consommations intermédiaires.",
    formule: "VA = Production − Consommations intermédiaires",
    interpretation: "Elle permet de savoir quelle contribution une entreprise, une administration ou une association apporte à la production nationale.",
    exemple: "Une entreprise vend pour 120 000 € et utilise 80 000 € de matières et services : sa valeur ajoutée est de 40 000 €.",
    pointsCles: ["Mesure la richesse créée", "Sert au calcul du PIB", "Ne se confond pas avec le bénéfice"]
  },
  {
    id: "ebe",
    terme: "Excédent brut d'exploitation",
    sigle: "EBE",
    categorie: "Entreprise",
    definition: "L'EBE représente la ressource dégagée par l'exploitation avant les charges financières, les impôts sur les bénéfices et les amortissements.",
    formule: "EBE = VA − Rémunérations − Impôts sur la production + Subventions",
    interpretation: "Il mesure la performance de l'activité courante avant les choix de financement et de comptabilité.",
    exemple: "Avec 60 000 € de valeur ajoutée et 35 000 € de charges d'exploitation, l'EBE est de 25 000 €.",
    pointsCles: ["Indicateur de rentabilité opérationnelle", "Peut être positif ou négatif", "Très utilisé pour analyser l'entreprise"]
  },
  {
    id: "benefice",
    terme: "Bénéfice",
    categorie: "Entreprise",
    definition: "Le bénéfice est le résultat positif obtenu lorsqu'une entreprise a payé l'ensemble de ses charges.",
    formule: "Bénéfice = Produits − Charges",
    interpretation: "Il indique le gain net de l'entreprise et peut être distribué, mis en réserve ou réinvesti.",
    exemple: "Si une entreprise réalise 200 000 € de ventes et supporte 170 000 € de charges, son bénéfice est de 30 000 €.",
    pointsCles: ["Résultat final positif", "Mesure la rentabilité", "Peut financer l'investissement"]
  },
  {
    id: "marge",
    terme: "Marge",
    categorie: "Entreprise",
    definition: "La marge correspond à l'écart entre le prix de vente et le coût associé à un produit ou à une activité.",
    formule: "Marge = Prix de vente − Coût",
    interpretation: "Elle aide à comprendre combien l'entreprise conserve sur chaque vente avant ou après certaines charges selon le calcul retenu.",
    exemple: "Un produit vendu 50 € et coûtant 30 € génère une marge de 20 €.",
    pointsCles: ["Peut être unitaire ou globale", "Souvent exprimée en euros ou en %", "Renseigne sur la rentabilité"]
  },
  {
    id: "entreprise",
    terme: "Entreprise",
    categorie: "Entreprise",
    definition: "Une entreprise est une organisation productive qui vend des biens ou des services sur un marché.",
    interpretation: "Elle combine du travail, du capital et des consommations intermédiaires pour créer de la valeur ajoutée.",
    exemple: "Un garage, une boulangerie ou une plateforme numérique sont des entreprises si elles produisent pour vendre.",
    pointsCles: ["Produit pour le marché", "Recherche souvent un profit", "Peut prendre plusieurs statuts juridiques"]
  },
  {
    id: "statut-juridique",
    terme: "Statut juridique",
    categorie: "Entreprise",
    definition: "Le statut juridique est le cadre légal qui organise une entreprise et détermine les droits, obligations et responsabilités de ses propriétaires.",
    interpretation: "Il influence la responsabilité financière, la fiscalité, la gouvernance et la manière de prendre des décisions.",
    exemple: "Une entreprise individuelle et une société n'impliquent pas les mêmes règles pour le patrimoine de l'entrepreneur.",
    pointsCles: ["Cadre légal", "Fixe les responsabilités", "Structure la gouvernance"]
  },
  {
    id: "entreprise-individuelle",
    terme: "Entreprise individuelle",
    categorie: "Entreprise",
    definition: "Une entreprise individuelle est une entreprise détenue et dirigée par une seule personne.",
    interpretation: "Elle est simple à créer mais repose fortement sur la responsabilité et les ressources de l'entrepreneur.",
    exemple: "Un artisan qui exerce seul peut choisir le statut d'entreprise individuelle.",
    pointsCles: ["Un seul propriétaire", "Gestion simplifiée", "Activité souvent de petite taille"]
  },
  {
    id: "societe",
    terme: "Société",
    categorie: "Entreprise",
    definition: "Une société est une entreprise dotée d'une personnalité juridique distincte de celle de ses associés.",
    interpretation: "Elle permet de séparer l'organisation de l'entreprise des personnes qui apportent le capital.",
    exemple: "Une SARL ou une SA peut posséder des biens, signer des contrats et employer des salariés en son nom.",
    pointsCles: ["Personnalité juridique", "Associés ou actionnaires", "Responsabilité encadrée"]
  },
  {
    id: "association",
    terme: "Association",
    categorie: "Entreprise",
    definition: "Une association est une organisation à but non lucratif qui réunit des personnes autour d'un projet commun.",
    interpretation: "Elle peut produire des services, mais son objectif principal n'est pas la distribution d'un profit.",
    exemple: "Un club sportif ou une association d'aide aux devoirs peut rendre des services sans chercher de bénéfice.",
    pointsCles: ["But non lucratif", "Projet collectif", "Peut employer des salariés"]
  },
  {
    id: "administration-publique",
    terme: "Administration publique",
    sigle: "APU",
    categorie: "Production",
    definition: "Une administration publique est une organisation qui produit principalement des services non marchands financés par des prélèvements obligatoires.",
    interpretation: "Elle répond à des besoins collectifs que le marché ne prend pas toujours en charge de façon suffisante.",
    exemple: "Un lycée public, une mairie ou un hôpital public produisent des services non marchands.",
    pointsCles: ["Services non marchands", "Financement collectif", "État, collectivités et sécurité sociale"]
  },
  {
    id: "bien-economique",
    terme: "Bien économique",
    categorie: "Science économique",
    definition: "Un bien économique est un bien produit en quantité limitée, qui nécessite du travail ou des ressources pour satisfaire un besoin.",
    interpretation: "Il existe parce que les ressources sont rares et que les agents doivent faire des choix.",
    exemple: "Un ordinateur, un repas ou un logement sont des biens économiques car ils nécessitent une production.",
    pointsCles: ["Quantité limitée", "Répond à un besoin", "Suppose une production"]
  },
  {
    id: "rarete",
    terme: "Rareté",
    categorie: "Science économique",
    definition: "La rareté désigne l'insuffisance des ressources disponibles par rapport aux besoins ou aux désirs des individus.",
    interpretation: "Elle est au cœur du raisonnement économique car elle oblige à arbitrer entre plusieurs usages possibles.",
    exemple: "Le temps disponible pour réviser est rare : il faut choisir entre plusieurs matières.",
    pointsCles: ["Ressources limitées", "Besoins nombreux", "Impose des choix"]
  },
  {
    id: "bien-libre",
    terme: "Bien libre",
    categorie: "Science économique",
    definition: "Un bien libre est disponible en abondance dans la nature et ne nécessite pas de production pour être consommé.",
    interpretation: "Comme il n'est pas rare dans la situation étudiée, il n'a pas de prix économique direct.",
    exemple: "L'air respirable est souvent présenté comme un bien libre, même si sa qualité peut devenir un enjeu économique.",
    pointsCles: ["Disponible en abondance", "Sans production directe", "Opposé au bien économique"]
  },
  {
    id: "bien-prive",
    terme: "Bien privé",
    categorie: "Science économique",
    definition: "Un bien privé est un bien dont la consommation est rivale et dont l'accès peut être réservé à ceux qui paient.",
    interpretation: "Le marché peut généralement organiser sa production car on peut identifier qui consomme le bien.",
    exemple: "Un sandwich est un bien privé : si une personne le mange, une autre ne peut pas le consommer.",
    pointsCles: ["Rival", "Excluable", "Souvent vendu sur un marché"]
  },
  {
    id: "bien-collectif",
    terme: "Bien collectif",
    categorie: "Science économique",
    definition: "Un bien collectif, ou bien public, est non rival et non excluable : chacun peut en bénéficier sans empêcher les autres d'en profiter.",
    interpretation: "Il peut être difficile à financer par le seul marché, car certains agents peuvent vouloir en profiter sans payer.",
    exemple: "L'éclairage public ou la défense nationale sont des exemples classiques de biens collectifs.",
    pointsCles: ["Non rival", "Non excluable", "Risque de passager clandestin"]
  },
  {
    id: "bien-commun",
    terme: "Bien commun",
    categorie: "Défaillances de marché",
    definition: "Un bien commun est un bien rival mais difficilement excluable, ce qui l'expose à la surexploitation.",
    interpretation: "Comme chacun peut être tenté de l'utiliser pour son intérêt personnel, une régulation collective devient souvent nécessaire.",
    exemple: "Une ressource halieutique peut être surexploitée si chaque pêcheur prélève trop de poissons.",
    pointsCles: ["Rival", "Non ou peu excluable", "Risque de surexploitation"]
  },
  {
    id: "utilite",
    terme: "Utilité",
    categorie: "Consommation",
    definition: "L'utilité désigne la satisfaction qu'un individu retire de la consommation d'un bien ou d'un service.",
    interpretation: "Elle explique pourquoi les consommateurs comparent les choix possibles selon leurs préférences.",
    exemple: "Un manteau a une forte utilité pour une personne qui a froid, mais moins pour quelqu'un qui n'en a pas besoin.",
    pointsCles: ["Satisfaction individuelle", "Dépend des préférences", "Guide les choix de consommation"]
  },
  {
    id: "valeur-usage",
    terme: "Valeur d'usage",
    categorie: "Consommation",
    definition: "La valeur d'usage correspond à l'utilité concrète qu'un bien procure à celui qui le consomme.",
    interpretation: "Elle ne se confond pas toujours avec le prix : un bien très utile peut être peu cher, et inversement.",
    exemple: "L'eau a une valeur d'usage très élevée car elle est indispensable à la vie.",
    pointsCles: ["Utilité concrète", "Dépend du besoin", "Distincte du prix"]
  },
  {
    id: "valeur-echange",
    terme: "Valeur d'échange",
    categorie: "Marché",
    definition: "La valeur d'échange désigne ce qu'un bien permet d'obtenir en échange, généralement exprimé par son prix.",
    interpretation: "Elle dépend de la rareté, de la demande, de l'offre et des conditions du marché.",
    exemple: "Un smartphone a une valeur d'échange élevée si les consommateurs sont prêts à payer cher pour l'acheter.",
    pointsCles: ["S'exprime par le prix", "Dépend du marché", "Diffère de l'utilité"]
  },
  {
    id: "production-marchande",
    terme: "Production marchande",
    categorie: "Production",
    definition: "La production marchande regroupe les biens et services destinés à être vendus sur un marché à un prix couvrant au moins une grande partie de leur coût.",
    interpretation: "Elle est principalement réalisée par les entreprises et vise à obtenir des recettes commerciales.",
    exemple: "Un restaurant qui vend des repas réalise une production marchande.",
    pointsCles: ["Vendue sur un marché", "Prix économiquement significatif", "Souvent produite par les entreprises"]
  },
  {
    id: "production-non-marchande",
    terme: "Production non marchande",
    categorie: "Production",
    definition: "La production non marchande regroupe les services fournis gratuitement ou à un prix inférieur à leur coût de production.",
    interpretation: "Elle est souvent financée par les prélèvements obligatoires ou par des ressources associatives.",
    exemple: "Un cours dans un lycée public est une production non marchande.",
    pointsCles: ["Gratuite ou quasi gratuite", "Prix non significatif", "Souvent produite par les administrations"]
  },
  {
    id: "consommation-intermediaire",
    terme: "Consommation intermédiaire",
    categorie: "Production",
    definition: "Les consommations intermédiaires sont les biens et services détruits ou transformés pendant le processus de production.",
    interpretation: "Elles sont retirées de la production pour calculer la valeur ajoutée, afin d'éviter de compter deux fois la même richesse.",
    exemple: "La farine utilisée par une boulangerie pour fabriquer du pain est une consommation intermédiaire.",
    pointsCles: ["Utilisée dans la production", "Détruite ou transformée", "Retirée dans le calcul de la VA"]
  },
  {
    id: "facteurs-production",
    terme: "Facteurs de production",
    categorie: "Production",
    definition: "Les facteurs de production sont les ressources mobilisées pour produire des biens et des services.",
    interpretation: "Les SES distinguent surtout le travail, le capital et parfois les ressources naturelles.",
    exemple: "Pour produire une voiture, il faut des salariés, des machines, une usine et des matières premières.",
    pointsCles: ["Travail", "Capital", "Ressources naturelles"]
  },
  {
    id: "travail-facteur",
    terme: "Travail (facteur de production)",
    categorie: "Production",
    definition: "Le travail est l'activité humaine, physique ou intellectuelle, utilisée pour produire des biens ou des services.",
    interpretation: "Il est rémunéré par un salaire lorsqu'il est réalisé dans le cadre d'un emploi salarié.",
    exemple: "Le travail d'un mécanicien, d'une infirmière ou d'un développeur participe à la production.",
    pointsCles: ["Ressource humaine", "Qualifié ou non qualifié", "Rémunéré par le salaire"]
  },
  {
    id: "capital-facteur",
    terme: "Capital (facteur de production)",
    categorie: "Production",
    definition: "Le capital désigne l'ensemble des biens durables utilisés pour produire d'autres biens ou services.",
    interpretation: "Il augmente les capacités productives et peut rendre le travail plus efficace.",
    exemple: "Les machines, bâtiments, logiciels et véhicules professionnels constituent du capital productif.",
    pointsCles: ["Bien productif", "Durable", "Complète le travail"]
  },
  {
    id: "capital-physique",
    terme: "Capital physique",
    categorie: "Production",
    definition: "Le capital physique regroupe les biens matériels durables utilisés dans la production.",
    interpretation: "Il correspond à la partie visible du capital productif : machines, équipements et bâtiments.",
    exemple: "Une chaîne de montage ou un four professionnel sont du capital physique.",
    pointsCles: ["Biens matériels", "Utilisés durablement", "Accroît la capacité productive"]
  },
  {
    id: "capital-technique",
    terme: "Capital technique",
    categorie: "Production",
    definition: "Le capital technique regroupe les biens d'équipement et les moyens matériels utilisés pour produire.",
    interpretation: "Il inclut le capital fixe durable et, selon les usages, les éléments circulants nécessaires à la production.",
    exemple: "Les robots d'une usine et les outils d'un artisan relèvent du capital technique.",
    pointsCles: ["Équipements productifs", "Capital fixe et parfois circulant", "Support du progrès technique"]
  },
  {
    id: "capital-humain",
    terme: "Capital humain",
    categorie: "Production",
    definition: "Le capital humain correspond aux connaissances, compétences, qualifications et savoir-faire incorporés dans les individus.",
    interpretation: "Il est un facteur important de productivité, d'innovation et de croissance économique.",
    exemple: "L'éducation, la formation professionnelle et l'expérience augmentent le capital humain.",
    pointsCles: ["Compétences", "Formation et expérience", "Favorise la productivité"]
  },
  {
    id: "ressources-naturelles",
    terme: "Ressources naturelles",
    categorie: "Production",
    definition: "Les ressources naturelles sont les éléments fournis par la nature et utilisés dans la production.",
    interpretation: "Elles posent des enjeux de rareté, de coût et de soutenabilité lorsqu'elles sont limitées ou dégradées.",
    exemple: "L'eau, le pétrole, le bois, les minerais ou les terres agricoles sont des ressources naturelles.",
    pointsCles: ["Issues de la nature", "Souvent limitées", "Enjeu de développement durable"]
  },
  {
    id: "qualification",
    terme: "Qualification",
    categorie: "Travail",
    definition: "La qualification désigne l'ensemble des compétences et savoir-faire nécessaires pour occuper un emploi.",
    interpretation: "Elle peut être obtenue par l'école, la formation, l'expérience ou reconnue par un diplôme.",
    exemple: "Un technicien de laboratoire doit maîtriser des protocoles précis : cela relève de sa qualification.",
    pointsCles: ["Compétences requises", "Diplômes et expérience", "Influence le salaire"]
  },
  {
    id: "productivite",
    terme: "Productivité",
    categorie: "Production",
    definition: "La productivité mesure l'efficacité avec laquelle des facteurs de production permettent d'obtenir une certaine quantité produite.",
    formule: "Productivité = Production / Quantité de facteur utilisé",
    interpretation: "Une hausse de productivité signifie que l'on produit plus avec autant de ressources, ou autant avec moins de ressources.",
    exemple: "Si une équipe produit 500 unités au lieu de 400 avec les mêmes moyens, sa productivité augmente.",
    pointsCles: ["Mesure l'efficacité", "Peut porter sur le travail ou le capital", "Soutient la croissance"]
  },
  {
    id: "productivite-travail",
    terme: "Productivité du travail",
    categorie: "Production",
    definition: "La productivité du travail mesure la quantité produite par travailleur ou par heure travaillée.",
    formule: "Productivité du travail = Production / Quantité de travail",
    interpretation: "Elle dépend notamment de la qualification, de l'organisation, du capital utilisé et du progrès technique.",
    exemple: "Si un salarié produit 100 unités en 8 heures, sa productivité est de 12,5 unités par heure.",
    pointsCles: ["Production par travailleur ou par heure", "Dépend de la technologie", "Peut soutenir les salaires"]
  },
  {
    id: "division-travail",
    terme: "Division du travail",
    categorie: "Organisation",
    definition: "La division du travail est la répartition des tâches entre différents travailleurs, entreprises ou secteurs.",
    interpretation: "Elle peut augmenter l'efficacité grâce à la spécialisation, mais rend les acteurs plus interdépendants.",
    exemple: "Dans une usine, une personne assemble, une autre contrôle et une autre emballe : les tâches sont divisées.",
    pointsCles: ["Spécialisation", "Hausse possible de productivité", "Interdépendance accrue"]
  },
  {
    id: "rendements-echelle",
    terme: "Rendements d'échelle",
    categorie: "Production",
    definition: "Les rendements d'échelle indiquent comment la production évolue quand tous les facteurs de production augmentent dans la même proportion.",
    interpretation: "Ils peuvent être croissants, constants ou décroissants selon que la production augmente plus, autant ou moins que les facteurs.",
    exemple: "Si une entreprise double tous ses facteurs et triple sa production, elle connaît des rendements d'échelle croissants.",
    pointsCles: ["Lien facteurs-production", "Croissants, constants ou décroissants", "Aide à analyser la taille efficace"]
  },
  {
    id: "pib",
    terme: "Produit intérieur brut",
    sigle: "PIB",
    categorie: "Macroéconomie",
    definition: "Le PIB mesure la valeur totale des richesses produites sur un territoire pendant une période donnée.",
    formule: "PIB = Somme des valeurs ajoutées + TVA + Droits de douane − Subventions sur les produits",
    interpretation: "Il sert à mesurer la production d'un pays, mais il ne résume ni le bien-être ni la répartition des richesses.",
    exemple: "Une hausse du PIB indique que la production mesurée sur le territoire a augmenté.",
    pointsCles: ["Mesure la production", "Calculé sur un territoire", "Limité pour mesurer le bien-être"]
  },
  {
    id: "croissance-economique",
    terme: "Croissance économique",
    categorie: "Macroéconomie",
    definition: "La croissance économique correspond à l'augmentation durable de la production d'une économie, généralement mesurée par le PIB réel.",
    formule: "Taux de croissance = ((PIB final − PIB initial) / PIB initial) × 100",
    interpretation: "Elle signale une hausse des richesses produites, mais ne garantit pas une meilleure répartition ou une réduction des inégalités.",
    exemple: "Une croissance de 2 % signifie que le PIB réel a augmenté de 2 % par rapport à la période précédente.",
    pointsCles: ["Mesurée par le PIB réel", "Phénomène de long terme", "Ne dit pas tout du bien-être"]
  },
  {
    id: "croissance-endogene",
    terme: "Croissance endogène",
    categorie: "Croissance",
    definition: "La croissance endogène explique la croissance par des mécanismes internes à l'économie, comme l'innovation, l'éducation et les infrastructures.",
    interpretation: "Elle insiste sur le rôle des choix d'investissement et des politiques publiques dans l'accumulation de capital.",
    exemple: "Un pays qui investit dans la recherche et la formation peut renforcer durablement sa croissance.",
    pointsCles: ["Moteurs internes", "Innovation et capital humain", "Rôle des institutions"]
  },
  {
    id: "croissance-exogene",
    terme: "Croissance exogène",
    categorie: "Croissance",
    definition: "La croissance exogène explique une partie de la croissance par des facteurs extérieurs au modèle, notamment le progrès technique.",
    interpretation: "Dans cette approche, la productivité progresse grâce à un facteur considéré comme donné plutôt que produit par les agents.",
    exemple: "Une invention venue d'un autre pays peut stimuler la production sans provenir des investissements locaux.",
    pointsCles: ["Moteur extérieur", "Progrès technique donné", "Approche des modèles classiques de croissance"]
  },
  {
    id: "progres-technique",
    terme: "Progrès technique",
    categorie: "Croissance",
    definition: "Le progrès technique regroupe les innovations qui améliorent les méthodes de production, les produits ou l'organisation du travail.",
    interpretation: "Il permet souvent d'augmenter la productivité et peut transformer l'emploi, les marchés et les modes de vie.",
    exemple: "L'automatisation d'une chaîne de production peut accroître la quantité produite par heure.",
    pointsCles: ["Innovations", "Hausse de productivité", "Effets sur l'emploi"]
  },
  {
    id: "pgf",
    terme: "Productivité globale des facteurs",
    sigle: "PGF",
    categorie: "Croissance",
    definition: "La productivité globale des facteurs mesure l'efficacité combinée du travail et du capital dans la production.",
    interpretation: "Elle capte ce qui n'est pas expliqué par la simple augmentation des quantités de travail et de capital.",
    exemple: "Une meilleure organisation ou une nouvelle technologie peut faire progresser la PGF.",
    pointsCles: ["Efficacité globale", "Liée au progrès technique", "Explique une partie de la croissance"]
  },
  {
    id: "investissement",
    terme: "Investissement",
    categorie: "Entreprise",
    definition: "L'investissement est une dépense destinée à accroître, renouveler ou améliorer le capital productif.",
    interpretation: "Il prépare la production future et peut soutenir la croissance, l'innovation et la productivité.",
    exemple: "Acheter une machine, un logiciel ou un bâtiment productif constitue un investissement.",
    pointsCles: ["Dépense productive", "Augmente ou renouvelle le capital", "Prépare l'activité future"]
  },
  {
    id: "innovation",
    terme: "Innovation",
    categorie: "Croissance",
    definition: "L'innovation est la mise en œuvre économique d'une invention, d'une nouvelle méthode ou d'une nouvelle organisation.",
    interpretation: "Elle devient importante en SES lorsqu'elle transforme la production, les marchés ou les comportements.",
    exemple: "La vente en ligne est une innovation commerciale qui a changé les modes de distribution.",
    pointsCles: ["Application concrète", "Peut être technique ou organisationnelle", "Source de croissance"]
  },
  {
    id: "institutions-economiques",
    terme: "Institutions",
    categorie: "Science économique",
    definition: "Les institutions sont les règles formelles et informelles qui encadrent les comportements économiques et sociaux.",
    interpretation: "Elles rendent les échanges plus prévisibles et peuvent favoriser ou freiner la croissance.",
    exemple: "Le droit des contrats, la monnaie ou les normes de confiance sont des institutions.",
    pointsCles: ["Règles du jeu", "Formelles ou informelles", "Encadrent les comportements"]
  },
  {
    id: "droits-propriete",
    terme: "Droits de propriété",
    categorie: "Science économique",
    definition: "Les droits de propriété sont les droits reconnus à un individu ou à une organisation sur l'usage, le revenu ou la cession d'un bien.",
    interpretation: "Ils sécurisent les échanges et encouragent l'investissement en protégeant ce que les agents possèdent.",
    exemple: "Un brevet donne à son détenteur un droit sur l'exploitation d'une innovation pendant une durée donnée.",
    pointsCles: ["Droit d'utiliser", "Droit de vendre", "Protège l'investissement"]
  },
  {
    id: "idh",
    terme: "Indice de développement humain",
    sigle: "IDH",
    categorie: "Développement",
    definition: "L'IDH est un indicateur qui mesure le développement à partir de la santé, de l'éducation et du niveau de vie.",
    interpretation: "Il complète le PIB en montrant que produire plus ne suffit pas toujours à mieux vivre.",
    exemple: "Deux pays peuvent avoir un PIB par habitant proche mais des IDH différents si l'éducation ou la santé ne sont pas au même niveau.",
    pointsCles: ["Santé", "Éducation", "Niveau de vie"]
  },
  {
    id: "developpement-durable",
    terme: "Développement durable",
    categorie: "Développement",
    definition: "Le développement durable vise à répondre aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs.",
    interpretation: "Il articule les dimensions économique, sociale et environnementale du développement.",
    exemple: "Développer les transports publics peut réduire la pollution tout en facilitant l'accès au travail.",
    pointsCles: ["Long terme", "Environnement et société", "Besoins des générations futures"]
  },
  {
    id: "pays-developpement",
    terme: "Pays en développement",
    categorie: "Développement",
    definition: "Un pays en développement est un pays dont les niveaux de revenu, d'équipement, de santé ou d'éducation restent relativement faibles.",
    interpretation: "La notion souligne des besoins de transformation économique et sociale, mais elle recouvre des situations très diverses.",
    exemple: "Un pays peut connaître une forte croissance tout en ayant encore des difficultés d'accès à l'éducation ou aux soins.",
    pointsCles: ["Revenus souvent plus faibles", "Indicateurs sociaux à améliorer", "Situations très variées"]
  },
  {
    id: "pays-developpe",
    terme: "Pays développé",
    categorie: "Développement",
    definition: "Un pays développé dispose généralement de revenus élevés, d'infrastructures avancées et d'indicateurs sociaux favorables.",
    interpretation: "Cette catégorie ne signifie pas absence de problèmes : inégalités, pauvreté ou enjeux écologiques peuvent rester importants.",
    exemple: "Un pays peut être développé tout en connaissant des inégalités de patrimoine élevées.",
    pointsCles: ["Niveau de vie élevé", "Infrastructures développées", "Indicateurs sociaux favorables"]
  },
  {
    id: "empreinte-ecologique",
    terme: "Empreinte écologique",
    categorie: "Développement",
    definition: "L'empreinte écologique mesure la pression exercée par les activités humaines sur les ressources naturelles et les écosystèmes.",
    interpretation: "Elle aide à évaluer si un mode de vie ou une économie est soutenable à long terme.",
    exemple: "Une consommation forte d'énergie fossile augmente l'empreinte écologique d'un pays.",
    pointsCles: ["Pression sur la nature", "Mesure de soutenabilité", "Liée aux modes de consommation"]
  },
  {
    id: "inflation",
    terme: "Inflation",
    categorie: "Macroéconomie",
    definition: "L'inflation désigne la hausse générale et durable du niveau des prix dans une économie.",
    interpretation: "Elle réduit le pouvoir d'achat si les revenus n'augmentent pas au même rythme que les prix.",
    exemple: "Si les prix augmentent de 5 % et que le salaire reste stable, le salaire réel diminue.",
    pointsCles: ["Hausse générale des prix", "Phénomène durable", "Effet sur le pouvoir d'achat"]
  },
  {
    id: "demande-globale",
    terme: "Demande globale",
    categorie: "Macroéconomie",
    definition: "La demande globale désigne la demande totale adressée aux producteurs d'une économie.",
    interpretation: "Elle regroupe notamment la consommation, l'investissement, les dépenses publiques et la demande extérieure nette.",
    exemple: "Une hausse de la consommation des ménages peut soutenir la demande globale et donc la production.",
    pointsCles: ["Demande totale", "Soutient l'activité", "Liée à l'emploi"]
  },
  {
    id: "deficit-public",
    terme: "Déficit public",
    categorie: "Finances publiques",
    definition: "Le déficit public apparaît lorsque les dépenses des administrations publiques dépassent leurs recettes sur une année.",
    formule: "Déficit public = Dépenses publiques − Recettes publiques",
    interpretation: "Il doit être financé par l'emprunt et peut accroître la dette publique.",
    exemple: "Si l'État dépense 120 milliards et reçoit 110 milliards, le déficit est de 10 milliards.",
    pointsCles: ["Dépenses supérieures aux recettes", "Flux annuel", "Alimente la dette publique"]
  },
  {
    id: "dette-publique",
    terme: "Dette publique",
    categorie: "Finances publiques",
    definition: "La dette publique est l'ensemble des emprunts accumulés par les administrations publiques pour financer leurs déficits passés.",
    interpretation: "Elle représente un stock, à distinguer du déficit qui est un flux mesuré sur une période.",
    exemple: "Un État qui enchaîne plusieurs déficits doit souvent émettre de nouvelles obligations publiques.",
    pointsCles: ["Stock d'emprunts", "Résulte des déficits passés", "Génère des intérêts"]
  },
  {
    id: "exportations",
    terme: "Exportations",
    categorie: "Commerce international",
    definition: "Les exportations sont les biens et services produits sur le territoire national puis vendus à l'étranger.",
    interpretation: "Elles constituent une demande extérieure adressée aux producteurs nationaux.",
    exemple: "Une entreprise française qui vend du vin en Allemagne réalise une exportation.",
    pointsCles: ["Ventes à l'étranger", "Entrée de revenus", "Composante du commerce extérieur"]
  },
  {
    id: "importations",
    terme: "Importations",
    categorie: "Commerce international",
    definition: "Les importations sont les biens et services produits à l'étranger puis achetés par les agents du territoire national.",
    interpretation: "Elles permettent de consommer ou produire avec des biens venus d'ailleurs, mais elles sortent de la production nationale.",
    exemple: "Acheter du pétrole produit à l'étranger constitue une importation.",
    pointsCles: ["Achats à l'étranger", "Répondent à la demande intérieure", "Entrent dans la balance commerciale"]
  },
  {
    id: "revenus-primaires",
    terme: "Revenus primaires",
    categorie: "Revenus",
    definition: "Les revenus primaires sont les revenus reçus en contrepartie d'une participation directe à la production.",
    interpretation: "Ils rémunèrent principalement le travail, le capital ou l'activité indépendante avant redistribution.",
    exemple: "Un salaire, un dividende ou un loyer sont des revenus primaires.",
    pointsCles: ["Avant redistribution", "Travail et capital", "Issus de la production"]
  },
  {
    id: "revenus-travail",
    terme: "Revenus du travail",
    categorie: "Revenus",
    definition: "Les revenus du travail sont les rémunérations perçues en échange d'une activité professionnelle.",
    interpretation: "Ils prennent surtout la forme de salaires pour les salariés, mais peuvent aussi concerner certains revenus d'activité.",
    exemple: "Le salaire mensuel d'un employé est un revenu du travail.",
    pointsCles: ["Rémunèrent l'activité", "Principalement salaires", "Font partie des revenus primaires"]
  },
  {
    id: "revenus-capital",
    terme: "Revenus du capital",
    categorie: "Revenus",
    definition: "Les revenus du capital rémunèrent la possession d'un patrimoine financier, immobilier ou productif.",
    interpretation: "Ils montrent que les revenus ne proviennent pas seulement du travail, mais aussi de la détention d'actifs.",
    exemple: "Des dividendes, des intérêts ou des loyers sont des revenus du capital.",
    pointsCles: ["Rémunèrent le patrimoine", "Dividendes, intérêts, loyers", "Source d'inégalités économiques"]
  },
  {
    id: "revenu-mixte",
    terme: "Revenu mixte",
    categorie: "Revenus",
    definition: "Le revenu mixte est le revenu des travailleurs indépendants, mêlant rémunération du travail et du capital engagé.",
    interpretation: "Il est difficile de distinguer ce qui rémunère l'effort de l'indépendant et ce qui rémunère ses outils ou son entreprise.",
    exemple: "Le revenu d'un agriculteur indépendant combine son travail et le capital de son exploitation.",
    pointsCles: ["Concerne les indépendants", "Travail + capital", "Revenu primaire"]
  },
  {
    id: "epargne",
    terme: "Épargne",
    categorie: "Revenus",
    definition: "L'épargne est la partie du revenu disponible qui n'est pas consommée immédiatement.",
    formule: "Épargne = Revenu disponible − Consommation",
    interpretation: "Elle peut servir à financer un projet, faire face à un risque ou être placée pour obtenir un revenu.",
    exemple: "Un ménage qui gagne 2 000 € et dépense 1 800 € épargne 200 €.",
    pointsCles: ["Revenu non consommé", "Peut être placée", "Source de financement"]
  },
  {
    id: "pouvoir-achat",
    terme: "Pouvoir d'achat",
    categorie: "Consommation",
    definition: "Le pouvoir d'achat mesure la quantité de biens et services qu'un revenu permet d'acheter.",
    interpretation: "Il dépend à la fois du niveau des revenus et du niveau des prix.",
    exemple: "Si les prix augmentent plus vite que les salaires, le pouvoir d'achat diminue.",
    pointsCles: ["Revenu réel", "Dépend des prix", "Lié à l'inflation"]
  },
  {
    id: "salaire-reel",
    terme: "Salaire réel",
    categorie: "Travail",
    definition: "Le salaire réel est le salaire corrigé de l'évolution des prix, c'est-à-dire son pouvoir d'achat.",
    interpretation: "Il permet de distinguer une hausse du salaire nominal d'une vraie amélioration du niveau de vie.",
    exemple: "Un salaire augmente de 2 %, mais les prix de 5 % : le salaire réel baisse.",
    pointsCles: ["Corrigé de l'inflation", "Mesure le pouvoir d'achat", "Diffère du salaire nominal"]
  },
  {
    id: "redistribution",
    terme: "Redistribution",
    categorie: "Redistribution",
    definition: "La redistribution consiste à prélever une partie des revenus primaires pour les reverser sous forme de revenus de transfert ou de services publics.",
    interpretation: "Elle vise à réduire certaines inégalités et à protéger les individus face aux risques sociaux.",
    exemple: "Les cotisations sociales financent des prestations comme les allocations chômage ou les retraites.",
    pointsCles: ["Impôts et cotisations", "Prestations et services publics", "Réduit certaines inégalités"]
  },
  {
    id: "revenus-transfert",
    terme: "Revenus de transfert",
    categorie: "Redistribution",
    definition: "Les revenus de transfert sont des revenus versés par les administrations publiques sans contrepartie productive immédiate.",
    interpretation: "Ils augmentent le revenu disponible des ménages et participent à la protection sociale.",
    exemple: "Les allocations familiales, les pensions de retraite ou les allocations chômage sont des revenus de transfert.",
    pointsCles: ["Versés par les administrations", "Sans production immédiate", "Prestations sociales"]
  },
  {
    id: "prelevements-obligatoires",
    terme: "Prélèvements obligatoires",
    categorie: "Redistribution",
    definition: "Les prélèvements obligatoires regroupent les impôts, taxes et cotisations sociales versés aux administrations publiques.",
    interpretation: "Ils financent les services publics, la protection sociale et l'action publique.",
    exemple: "La TVA, l'impôt sur le revenu et les cotisations sociales sont des prélèvements obligatoires.",
    pointsCles: ["Impôts et cotisations", "Financement public", "Obligatoires par la loi"]
  },
  {
    id: "protection-sociale",
    terme: "Protection sociale",
    categorie: "Redistribution",
    definition: "La protection sociale regroupe les mécanismes collectifs qui protègent les individus contre les risques sociaux.",
    interpretation: "Elle limite les conséquences financières de la maladie, du chômage, de la vieillesse ou de la pauvreté.",
    exemple: "L'assurance maladie rembourse une partie des soins : c'est un mécanisme de protection sociale.",
    pointsCles: ["Risques sociaux", "Prestations sociales", "Solidarité collective"]
  },
  {
    id: "etat-providence",
    terme: "État-providence",
    categorie: "Redistribution",
    definition: "L'État-providence désigne l'État lorsqu'il intervient pour protéger les individus et réduire les risques économiques et sociaux.",
    interpretation: "Il s'appuie sur la protection sociale, les services publics et les politiques de redistribution.",
    exemple: "Le financement des retraites et de l'assurance maladie illustre le rôle de l'État-providence.",
    pointsCles: ["Intervention sociale de l'État", "Protection collective", "Réduction des risques"]
  },
  {
    id: "inegalites-economiques",
    terme: "Inégalités économiques",
    categorie: "Stratification",
    definition: "Les inégalités économiques désignent les différences d'accès aux ressources économiques, notamment les revenus et le patrimoine.",
    interpretation: "Elles deviennent un enjeu social lorsqu'elles structurent les conditions de vie et les chances de réussite.",
    exemple: "Un écart important de patrimoine entre ménages est une inégalité économique.",
    pointsCles: ["Revenus", "Patrimoine", "Conditions de vie"]
  },
  {
    id: "inegalite",
    terme: "Inégalité",
    categorie: "Stratification",
    definition: "Une inégalité est une différence d'accès à une ressource socialement valorisée, comme le revenu, la santé, l'éducation ou le pouvoir.",
    interpretation: "Toutes les différences ne sont pas des inégalités : elles le deviennent lorsqu'elles donnent des avantages ou des désavantages.",
    exemple: "Deux élèves n'ayant pas le même accès aux cours particuliers peuvent connaître une inégalité scolaire.",
    pointsCles: ["Différence socialement située", "Accès inégal aux ressources", "Peut être économique ou sociale"]
  },
  {
    id: "courbe-lorenz",
    terme: "Courbe de Lorenz",
    categorie: "Statistiques",
    definition: "La courbe de Lorenz représente graphiquement la concentration d'une variable comme le revenu ou le patrimoine.",
    interpretation: "Plus la courbe s'éloigne de la diagonale d'égalité parfaite, plus la répartition est inégalitaire.",
    exemple: "Si 10 % des ménages possèdent 50 % du patrimoine, la courbe de Lorenz montre une forte concentration.",
    pointsCles: ["Graphique des inégalités", "Compare à l'égalité parfaite", "Sert à lire la concentration"]
  },
  {
    id: "indice-gini",
    terme: "Indice de Gini",
    categorie: "Statistiques",
    definition: "L'indice de Gini est un indicateur synthétique d'inégalité compris entre 0 et 1.",
    interpretation: "0 correspond à une égalité parfaite et 1 à une concentration maximale de la variable étudiée.",
    exemple: "Un pays avec un Gini de revenu plus élevé qu'un autre connaît une répartition plus inégalitaire.",
    pointsCles: ["Entre 0 et 1", "Mesure l'inégalité", "Utilisé pour revenus ou patrimoine"]
  },
  {
    id: "deciles",
    terme: "Déciles",
    categorie: "Statistiques",
    definition: "Les déciles sont les valeurs qui partagent une population ordonnée en dix groupes de même effectif.",
    interpretation: "Ils permettent de comparer le bas, le milieu et le haut d'une distribution.",
    exemple: "Le neuvième décile de revenu indique le revenu au-dessus duquel se trouvent les 10 % les plus aisés.",
    pointsCles: ["Dix groupes égaux", "Lecture d'une distribution", "Utile pour comparer les inégalités"]
  },
  {
    id: "mediane",
    terme: "Médiane",
    categorie: "Statistiques",
    definition: "La médiane est la valeur qui partage une population ordonnée en deux groupes de même effectif.",
    interpretation: "Elle est moins sensible aux valeurs extrêmes que la moyenne.",
    exemple: "Un salaire médian de 2 000 € signifie que la moitié des salariés gagne moins et l'autre moitié gagne plus.",
    pointsCles: ["Partage en deux moitiés", "Résiste aux valeurs extrêmes", "Diffère de la moyenne"]
  },
  {
    id: "socialisation",
    terme: "Socialisation",
    categorie: "Sociologie",
    definition: "La socialisation est le processus par lequel un individu apprend et intériorise les normes, valeurs et façons d'agir de sa société.",
    interpretation: "Elle explique comment les comportements individuels se construisent au contact des groupes et des institutions.",
    exemple: "Un enfant apprend la politesse, la langue et certains rôles sociaux dans sa famille et à l'école.",
    pointsCles: ["Apprentissage social", "Normes et valeurs", "Processus continu"]
  },
  {
    id: "norme-sociale",
    terme: "Norme sociale",
    categorie: "Sociologie",
    definition: "Une norme sociale est une règle de conduite partagée qui indique ce qu'il est attendu de faire dans une situation donnée.",
    interpretation: "Les normes organisent la vie collective et peuvent être sanctionnées positivement ou négativement.",
    exemple: "Dire bonjour, respecter une file d'attente ou arriver à l'heure sont des normes sociales.",
    pointsCles: ["Règle de comportement", "Partagée par un groupe", "Sanction sociale possible"]
  },
  {
    id: "valeur-sociale",
    terme: "Valeur sociale",
    categorie: "Sociologie",
    definition: "Une valeur sociale est un idéal ou un principe jugé important par une société ou un groupe.",
    interpretation: "Les valeurs donnent du sens aux normes : elles expliquent pourquoi certains comportements sont valorisés.",
    exemple: "La liberté, l'égalité, le mérite ou la solidarité sont des valeurs sociales.",
    pointsCles: ["Idéal collectif", "Oriente les comportements", "Peut varier selon les groupes"]
  },
  {
    id: "role-social",
    terme: "Rôle social",
    categorie: "Sociologie",
    definition: "Un rôle social est l'ensemble des comportements attendus d'un individu occupant une position sociale donnée.",
    interpretation: "Il montre que les attentes envers une personne dépendent du contexte et du statut qu'elle occupe.",
    exemple: "On n'attend pas les mêmes comportements d'un élève, d'un professeur ou d'un parent.",
    pointsCles: ["Comportements attendus", "Lié au statut", "Varie selon le contexte"]
  },
  {
    id: "agent-socialisation",
    terme: "Agent de socialisation",
    categorie: "Sociologie",
    definition: "Un agent de socialisation est une personne, un groupe ou une institution qui transmet des normes et des valeurs.",
    interpretation: "Les agents de socialisation façonnent les manières de penser, d'agir et de se comporter.",
    exemple: "La famille, l'école, les médias et le groupe de pairs sont des agents de socialisation.",
    pointsCles: ["Transmet normes et valeurs", "Famille, école, pairs", "Influence les comportements"]
  },
  {
    id: "socialisation-primaire",
    terme: "Socialisation primaire",
    categorie: "Sociologie",
    definition: "La socialisation primaire est la socialisation qui a lieu pendant l'enfance, principalement dans la famille et à l'école.",
    interpretation: "Elle pose les premières bases de l'identité sociale et des habitudes de comportement.",
    exemple: "Apprendre sa langue maternelle ou les règles de vie familiale relève de la socialisation primaire.",
    pointsCles: ["Pendant l'enfance", "Famille et école", "Fondatrice pour l'individu"]
  },
  {
    id: "socialisation-secondaire",
    terme: "Socialisation secondaire",
    categorie: "Sociologie",
    definition: "La socialisation secondaire désigne les apprentissages sociaux qui se poursuivent à l'âge adulte dans de nouveaux contextes.",
    interpretation: "Elle montre que l'identité sociale peut se transformer avec les études, le travail, le couple ou les engagements.",
    exemple: "Entrer dans une entreprise oblige à apprendre de nouvelles règles professionnelles.",
    pointsCles: ["Après l'enfance", "Nouveaux groupes", "Peut transformer les pratiques"]
  },
  {
    id: "habitus",
    terme: "Habitus",
    categorie: "Sociologie",
    definition: "L'habitus désigne un ensemble de dispositions durables acquises par la socialisation, qui orientent les pratiques et les goûts.",
    interpretation: "Chez Bourdieu, il explique pourquoi les individus agissent souvent de manière liée à leur trajectoire sociale.",
    exemple: "Des habitudes de langage, de loisirs ou de rapport à l'école peuvent refléter un habitus.",
    pointsCles: ["Dispositions durables", "Produit de la socialisation", "Concept de Bourdieu"]
  },
  {
    id: "capital-culturel",
    terme: "Capital culturel",
    categorie: "Sociologie",
    definition: "Le capital culturel regroupe les ressources culturelles d'un individu, comme les diplômes, les savoirs, le langage et les pratiques culturelles.",
    interpretation: "Il peut donner des avantages scolaires et sociaux, car toutes les ressources culturelles ne sont pas également reconnues.",
    exemple: "Avoir des parents diplômés qui transmettent des habitudes de lecture peut augmenter le capital culturel.",
    pointsCles: ["Diplômes et savoirs", "Pratiques culturelles", "Ressource socialement valorisée"]
  },
  {
    id: "capital-social",
    terme: "Capital social",
    categorie: "Sociologie",
    definition: "Le capital social désigne les ressources qu'un individu peut mobiliser grâce à son réseau de relations.",
    interpretation: "Il montre que les relations sociales peuvent faciliter l'accès à l'information, aux opportunités ou au soutien.",
    exemple: "Connaître quelqu'un qui informe d'une offre de stage peut être une ressource de capital social.",
    pointsCles: ["Réseau relationnel", "Ressources mobilisables", "Peut créer des avantages"]
  },
  {
    id: "capital-economique",
    terme: "Capital économique",
    categorie: "Sociologie",
    definition: "Le capital économique regroupe les ressources financières et matérielles dont dispose un individu ou un groupe.",
    interpretation: "Il comprend les revenus, le patrimoine et les biens possédés, et influence fortement les positions sociales.",
    exemple: "Posséder un logement, de l'épargne et des actions constitue du capital économique.",
    pointsCles: ["Revenus", "Patrimoine", "Ressources matérielles"]
  },
  {
    id: "groupe-social",
    terme: "Groupe social",
    categorie: "Sociologie",
    definition: "Un groupe social est un ensemble d'individus qui partagent des caractéristiques communes et un sentiment d'appartenance.",
    interpretation: "Il se distingue d'une simple catégorie statistique par l'existence de relations ou d'une identité collective.",
    exemple: "Une équipe sportive, une classe d'élèves ou un groupe d'amis peuvent former des groupes sociaux.",
    pointsCles: ["Caractéristiques communes", "Relations sociales", "Sentiment d'appartenance"]
  },
  {
    id: "groupe-pairs",
    terme: "Groupe de pairs",
    categorie: "Sociologie",
    definition: "Un groupe de pairs réunit des individus d'âge, de statut ou de situation proche qui interagissent régulièrement.",
    interpretation: "Il joue un rôle important dans la socialisation, surtout à l'adolescence.",
    exemple: "Un groupe d'amis au lycée influence les goûts musicaux, vestimentaires ou les manières de parler.",
    pointsCles: ["Individus semblables", "Socialisation horizontale", "Influence forte à l'adolescence"]
  },
  {
    id: "lien-social",
    terme: "Lien social",
    categorie: "Sociologie",
    definition: "Le lien social désigne l'ensemble des relations, protections et reconnaissances qui attachent les individus les uns aux autres.",
    interpretation: "Il permet de comprendre comment une société tient ensemble malgré les différences entre individus.",
    exemple: "La famille, le travail, les associations et la citoyenneté créent différentes formes de lien social.",
    pointsCles: ["Relations entre individus", "Protection et reconnaissance", "Base de la cohésion sociale"]
  },
  {
    id: "sociabilite",
    terme: "Sociabilité",
    categorie: "Sociologie",
    definition: "La sociabilité regroupe les relations qu'un individu entretient avec les autres dans sa vie quotidienne.",
    interpretation: "Elle permet d'étudier l'intensité, la fréquence et la forme des contacts sociaux.",
    exemple: "Voir régulièrement ses amis, discuter avec des voisins ou participer à un club relève de la sociabilité.",
    pointsCles: ["Relations quotidiennes", "Contacts formels ou informels", "Varie selon les milieux"]
  },
  {
    id: "solidarite-mecanique",
    terme: "Solidarité mécanique",
    categorie: "Sociologie",
    definition: "La solidarité mécanique est une forme de cohésion sociale fondée sur la ressemblance entre les individus.",
    interpretation: "Chez Durkheim, elle caractérise surtout les sociétés où les individus partagent fortement les mêmes croyances et activités.",
    exemple: "Une petite communauté très homogène peut reposer sur une solidarité mécanique.",
    pointsCles: ["Cohésion par ressemblance", "Conscience collective forte", "Concept de Durkheim"]
  },
  {
    id: "solidarite-organique",
    terme: "Solidarité organique",
    categorie: "Sociologie",
    definition: "La solidarité organique est une forme de cohésion sociale fondée sur la complémentarité entre individus spécialisés.",
    interpretation: "Elle se développe avec la division du travail, car chacun dépend du travail des autres.",
    exemple: "Dans une société moderne, médecins, enseignants, agriculteurs et ingénieurs sont interdépendants.",
    pointsCles: ["Cohésion par complémentarité", "Division du travail", "Interdépendance"]
  },
  {
    id: "integration-sociale",
    terme: "Intégration sociale",
    categorie: "Sociologie",
    definition: "L'intégration sociale est le processus par lequel un individu trouve une place dans un groupe ou dans la société.",
    interpretation: "Elle repose sur des liens, des normes communes, une reconnaissance et une participation à la vie collective.",
    exemple: "Avoir un emploi, des relations amicales et participer à une association peut favoriser l'intégration sociale.",
    pointsCles: ["Insertion dans un groupe", "Participation sociale", "Reconnaissance"]
  },
  {
    id: "cohesion-sociale",
    terme: "Cohésion sociale",
    categorie: "Sociologie",
    definition: "La cohésion sociale désigne le degré de solidarité, de confiance et de consensus qui unit les membres d'une société.",
    interpretation: "Elle est fragilisée lorsque les inégalités, l'isolement ou les conflits deviennent trop importants.",
    exemple: "Des politiques de lutte contre la pauvreté peuvent renforcer la cohésion sociale.",
    pointsCles: ["Solidarité collective", "Confiance", "Limite les tensions sociales"]
  },
  {
    id: "institution-sociale",
    terme: "Institution",
    categorie: "Sociologie",
    definition: "Une institution est un ensemble durable de règles et d'organisations qui encadrent la vie sociale.",
    interpretation: "Elle stabilise les comportements et donne des repères communs aux individus.",
    exemple: "La famille, l'école, la monnaie ou la justice sont des institutions.",
    pointsCles: ["Règles durables", "Organisation sociale", "Stabilise les comportements"]
  },
  {
    id: "opinion-publique",
    terme: "Opinion publique",
    categorie: "Science politique",
    definition: "L'opinion publique désigne l'ensemble des jugements et attitudes exprimés dans une population sur des questions d'intérêt collectif.",
    interpretation: "Elle est souvent mesurée par les sondages, mais ne se réduit pas à un chiffre unique.",
    exemple: "Les opinions sur une réforme des retraites peuvent être étudiées par enquête d'opinion.",
    pointsCles: ["Jugements collectifs", "Questions publiques", "Mesurée mais construite"]
  },
  {
    id: "sondage-opinion",
    terme: "Sondage d'opinion",
    categorie: "Science politique",
    definition: "Un sondage d'opinion est une enquête menée auprès d'un échantillon pour estimer les opinions d'une population.",
    interpretation: "Sa qualité dépend de la représentativité de l'échantillon, de la formulation des questions et de la méthode utilisée.",
    exemple: "Interroger 1 000 personnes représentatives peut donner une estimation des intentions de vote.",
    pointsCles: ["Échantillon", "Représentativité", "Marge d'erreur"]
  },
  {
    id: "democratie-opinion",
    terme: "Démocratie d'opinion",
    categorie: "Science politique",
    definition: "La démocratie d'opinion désigne une situation où les sondages et les réactions de l'opinion influencent fortement la vie politique.",
    interpretation: "Elle interroge le rapport entre décision politique, médias, popularité et temps long de l'action publique.",
    exemple: "Un gouvernement peut modifier sa communication après la publication de sondages défavorables.",
    pointsCles: ["Poids des sondages", "Influence médiatique", "Décision politique sous pression"]
  },
  {
    id: "individualisme-methodologique",
    terme: "Individualisme méthodologique",
    categorie: "Regards croisés",
    definition: "L'individualisme méthodologique est une démarche qui explique les phénomènes sociaux à partir des actions et choix des individus.",
    interpretation: "Elle ne dit pas que les individus sont égoïstes, mais qu'il faut comprendre leurs raisons d'agir pour expliquer le collectif.",
    exemple: "Une file d'attente peut s'expliquer par les décisions individuelles de personnes poursuivant chacune leur objectif.",
    pointsCles: ["Part des individus", "Raisons d'agir", "Explique le collectif par le micro"]
  },
  {
    id: "holisme",
    terme: "Holisme",
    categorie: "Regards croisés",
    definition: "Le holisme est une démarche qui explique les comportements individuels par les structures sociales et les contraintes collectives.",
    interpretation: "Elle insiste sur le poids des institutions, des normes, des classes sociales ou des cultures.",
    exemple: "Les choix d'orientation peuvent être analysés à partir du milieu social et des attentes familiales.",
    pointsCles: ["Part du collectif", "Structures sociales", "Contraintes et normes"]
  },
  {
    id: "rationalite",
    terme: "Rationalité",
    categorie: "Regards croisés",
    definition: "La rationalité est la capacité d'un agent à choisir les moyens qui lui semblent les plus adaptés pour atteindre ses objectifs.",
    interpretation: "En SES, elle peut être limitée par l'information disponible, les habitudes, les émotions ou les contraintes sociales.",
    exemple: "Comparer les prix avant un achat relève d'un comportement rationnel, même si la comparaison reste imparfaite.",
    pointsCles: ["Choix de moyens", "Objectifs", "Peut être limitée"]
  },
  {
    id: "homo-economicus",
    terme: "Homo economicus",
    categorie: "Regards croisés",
    definition: "L'homo economicus est une représentation théorique d'un individu rationnel qui cherche à maximiser son intérêt.",
    interpretation: "C'est un modèle utile pour raisonner, mais simplifié par rapport aux comportements réels.",
    exemple: "Un consommateur qui choisit toujours le produit au meilleur rapport qualité-prix se rapproche de ce modèle.",
    pointsCles: ["Modèle théorique", "Rationalité maximisatrice", "Simplification du réel"]
  },
  {
    id: "comportement-social",
    terme: "Comportement social",
    categorie: "Regards croisés",
    definition: "Un comportement social est une action individuelle influencée par la présence, les attentes ou les normes d'un groupe.",
    interpretation: "Il montre que les choix ne sont pas seulement personnels : ils sont situés socialement.",
    exemple: "Choisir une tenue pour un entretien dépend de normes sociales sur ce qui est jugé approprié.",
    pointsCles: ["Action influencée par autrui", "Normes et attentes", "Contexte social"]
  },
  {
    id: "modelisation",
    terme: "Modélisation",
    categorie: "Regards croisés",
    definition: "La modélisation consiste à construire une représentation simplifiée de la réalité pour mieux l'analyser.",
    interpretation: "Un modèle ne reproduit pas tout : il sélectionne certains mécanismes pour comprendre un phénomène.",
    exemple: "Le modèle de l'offre et de la demande simplifie le fonctionnement d'un marché pour analyser le prix.",
    pointsCles: ["Simplification", "Outil d'analyse", "Ne confond pas modèle et réalité"]
  },
  {
    id: "financement",
    terme: "Financement",
    categorie: "Finance",
    definition: "Le financement désigne l'opération par laquelle un agent économique obtient les ressources nécessaires pour consommer, produire ou investir.",
    interpretation: "Il relie les agents qui ont une capacité de financement à ceux qui ont un besoin de financement.",
    exemple: "Une entreprise peut financer l'achat d'une machine par un crédit bancaire ou par l'émission d'actions.",
    pointsCles: ["Obtention de capitaux", "Consommation ou investissement", "Direct ou indirect"]
  },
  {
    id: "autofinancement",
    terme: "Autofinancement",
    categorie: "Finance",
    definition: "L'autofinancement consiste à financer un investissement avec les ressources propres de l'agent économique.",
    interpretation: "Il évite de dépendre d'un prêteur, mais suppose d'avoir déjà dégagé une épargne ou des bénéfices suffisants.",
    exemple: "Une entreprise utilise ses bénéfices non distribués pour acheter de nouveaux équipements.",
    pointsCles: ["Ressources propres", "Pas d'emprunt direct", "Dépend de l'épargne disponible"]
  },
  {
    id: "financement-direct",
    terme: "Financement direct",
    categorie: "Finance",
    definition: "Le financement direct met directement en relation les agents qui ont besoin de capitaux et ceux qui peuvent en apporter.",
    interpretation: "Il passe souvent par les marchés financiers, sans intermédiaire bancaire qui transforme l'épargne en crédit.",
    exemple: "Une entreprise qui émet des actions ou des obligations sur un marché recourt au financement direct.",
    pointsCles: ["Marchés financiers", "Relation directe prêteur-emprunteur", "Actions ou obligations"]
  },
  {
    id: "financement-indirect",
    terme: "Financement indirect",
    categorie: "Finance",
    definition: "Le financement indirect, ou intermédié, passe par un intermédiaire financier comme une banque.",
    interpretation: "La banque collecte des ressources et accorde des crédits aux agents qui ont besoin de financement.",
    exemple: "Un ménage qui emprunte auprès d'une banque pour acheter un logement utilise un financement indirect.",
    pointsCles: ["Intermédiaire bancaire", "Crédit", "Transformation de l'épargne"]
  },
  {
    id: "marche-financier",
    terme: "Marché financier",
    categorie: "Finance",
    definition: "Le marché financier est le lieu, souvent dématérialisé, où s'échangent des capitaux à long terme.",
    interpretation: "Il permet aux entreprises et aux États de se financer, et aux épargnants de placer leur argent.",
    exemple: "L'achat d'une action cotée en bourse se fait sur un marché financier.",
    pointsCles: ["Capitaux de long terme", "Actions et obligations", "Financement direct"]
  },
  {
    id: "action",
    terme: "Action",
    categorie: "Finance",
    definition: "Une action est un titre de propriété qui représente une part du capital d'une entreprise.",
    interpretation: "Détenir une action donne certains droits, mais expose aussi au risque de baisse de sa valeur.",
    exemple: "Un actionnaire peut recevoir un dividende si l'entreprise décide de distribuer une partie de ses bénéfices.",
    pointsCles: ["Titre de propriété", "Droit au dividende possible", "Risque de perte"]
  },
  {
    id: "obligation",
    terme: "Obligation",
    categorie: "Finance",
    definition: "Une obligation est un titre de créance représentant un prêt accordé à une entreprise ou à un État.",
    interpretation: "L'émetteur s'engage à rembourser le montant emprunté et à verser des intérêts.",
    exemple: "Un État peut émettre des obligations pour financer son déficit public.",
    pointsCles: ["Titre de dette", "Remboursement prévu", "Versement d'intérêts"]
  },
  {
    id: "taux-interet",
    terme: "Taux d'intérêt",
    categorie: "Finance",
    definition: "Le taux d'intérêt est le prix du temps et du risque : il rémunère le prêteur et représente le coût de l'emprunt pour l'emprunteur.",
    interpretation: "Plus il est élevé, plus emprunter coûte cher et plus épargner peut être rémunérateur.",
    exemple: "Un crédit de 10 000 € à 5 % coûte plus cher qu'un crédit au même montant à 2 %.",
    pointsCles: ["Coût du crédit", "Rémunération du prêteur", "Influence l'investissement"]
  },
  {
    id: "intermediation-bancaire",
    terme: "Intermédiation bancaire",
    categorie: "Finance",
    definition: "L'intermédiation bancaire désigne le rôle des banques qui collectent l'épargne et accordent des crédits.",
    interpretation: "Elle permet de transformer des dépôts et de l'épargne disponible en financement pour les ménages, entreprises ou administrations.",
    exemple: "Une banque utilise les dépôts de ses clients et sa capacité de crédit pour financer un prêt immobilier.",
    pointsCles: ["Rôle des banques", "Collecte et crédit", "Financement indirect"]
  },
  {
    id: "creation-monetaire",
    terme: "Création monétaire",
    categorie: "Finance",
    definition: "La création monétaire est le processus par lequel les banques créent de la monnaie, notamment lorsqu'elles accordent des crédits.",
    interpretation: "Un crédit accordé fait apparaître un dépôt sur le compte de l'emprunteur, ce qui augmente la quantité de monnaie en circulation.",
    exemple: "Quand une banque accorde un prêt à une entreprise, elle crédite son compte : de la monnaie est créée.",
    pointsCles: ["Liée au crédit", "Réalisée par les banques", "Monnaie détruite au remboursement"]
  },
  {
    id: "risque-credit",
    terme: "Risque de crédit",
    categorie: "Finance",
    definition: "Le risque de crédit est le risque qu'un emprunteur ne rembourse pas tout ou partie de son prêt.",
    interpretation: "Il explique pourquoi les banques évaluent la solvabilité des emprunteurs et peuvent demander un taux plus élevé.",
    exemple: "Une entreprise fragile financièrement présente un risque de crédit plus élevé.",
    pointsCles: ["Risque de non-remboursement", "Influence le taux d'intérêt", "Analyse de solvabilité"]
  },
  {
    id: "marche",
    terme: "Marché",
    categorie: "Marché",
    definition: "Un marché est un lieu réel ou fictif où se rencontrent une offre et une demande pour échanger un bien ou un service.",
    interpretation: "Le prix joue un rôle central pour coordonner les décisions des producteurs et des consommateurs.",
    exemple: "Le marché des smartphones met en relation des entreprises qui vendent et des consommateurs qui achètent.",
    pointsCles: ["Offre et demande", "Échange", "Formation d'un prix"]
  },
  {
    id: "offre",
    terme: "Offre",
    categorie: "Marché",
    definition: "L'offre est la quantité d'un bien ou d'un service que les producteurs sont prêts à vendre pour un prix donné.",
    interpretation: "En général, plus le prix augmente, plus les producteurs sont incités à offrir une quantité importante.",
    exemple: "Si le prix des fraises augmente, certains producteurs peuvent accroître les quantités mises en vente.",
    pointsCles: ["Quantité proposée", "Côté producteurs", "Dépend du prix"]
  },
  {
    id: "demande",
    terme: "Demande",
    categorie: "Marché",
    definition: "La demande est la quantité d'un bien ou d'un service que les consommateurs sont prêts à acheter pour un prix donné.",
    interpretation: "En général, plus le prix augmente, plus la quantité demandée diminue, toutes choses égales par ailleurs.",
    exemple: "Si le prix d'un abonnement augmente fortement, certains consommateurs peuvent renoncer à l'acheter.",
    pointsCles: ["Quantité souhaitée", "Côté consommateurs", "Dépend du prix et du revenu"]
  },
  {
    id: "prix-equilibre",
    terme: "Prix d'équilibre",
    categorie: "Marché",
    definition: "Le prix d'équilibre est le prix pour lequel la quantité offerte est égale à la quantité demandée.",
    interpretation: "À ce prix, le marché ne connaît ni excès d'offre ni excès de demande dans le modèle simple.",
    exemple: "Si 1 000 places de concert sont offertes et 1 000 demandées à 30 €, 30 € est le prix d'équilibre.",
    pointsCles: ["Offre = demande", "Équilibre du marché", "Modèle simplifié"]
  },
  {
    id: "surplus-consommateur",
    terme: "Surplus du consommateur",
    categorie: "Marché",
    definition: "Le surplus du consommateur est l'écart entre le prix maximum qu'un consommateur était prêt à payer et le prix réellement payé.",
    interpretation: "Il mesure le gain tiré de l'échange du point de vue du consommateur.",
    exemple: "Si un consommateur était prêt à payer 80 € mais paie 50 €, son surplus est de 30 €.",
    pointsCles: ["Gain du consommateur", "Prix maximal moins prix payé", "Mesure l'intérêt de l'échange"]
  },
  {
    id: "surplus-producteur",
    terme: "Surplus du producteur",
    categorie: "Marché",
    definition: "Le surplus du producteur est l'écart entre le prix reçu et le prix minimum auquel le producteur acceptait de vendre.",
    interpretation: "Il mesure le gain tiré de l'échange du point de vue du producteur.",
    exemple: "Si un producteur était prêt à vendre à 40 € mais vend à 55 €, son surplus est de 15 €.",
    pointsCles: ["Gain du producteur", "Prix reçu moins prix minimum", "Lié à la rentabilité de l'échange"]
  },
  {
    id: "elasticite-prix",
    terme: "Élasticité-prix",
    categorie: "Marché",
    definition: "L'élasticité-prix mesure la sensibilité d'une quantité demandée ou offerte à une variation du prix.",
    interpretation: "Elle indique si les agents réagissent fortement ou faiblement aux changements de prix.",
    exemple: "Si le prix augmente de 10 % et que la demande baisse de 20 %, la demande est très sensible au prix.",
    pointsCles: ["Sensibilité au prix", "Demande ou offre", "Réaction plus ou moins forte"]
  },
  {
    id: "concurrence-pure-parfaite",
    terme: "Concurrence pure et parfaite",
    sigle: "CPP",
    categorie: "Concurrence",
    definition: "La concurrence pure et parfaite est une structure de marché théorique reposant sur cinq conditions : atomicité, homogénéité, libre entrée, transparence et mobilité des facteurs.",
    interpretation: "Ce modèle sert de référence pour comprendre comment un marché concurrentiel pourrait fonctionner dans des conditions idéales.",
    exemple: "Un marché agricole très ouvert peut se rapprocher de certaines conditions de la concurrence pure et parfaite.",
    pointsCles: ["Modèle théorique", "Cinq conditions", "Prix imposé aux agents"]
  },
  {
    id: "atomicite",
    terme: "Atomicité",
    categorie: "Concurrence",
    definition: "L'atomicité désigne une situation où les acheteurs et vendeurs sont si nombreux qu'aucun ne peut influencer seul le prix du marché.",
    interpretation: "Chaque agent est preneur de prix : il doit accepter le prix qui résulte du marché.",
    exemple: "Un petit producteur de blé ne peut généralement pas fixer seul le prix mondial du blé.",
    pointsCles: ["Nombreux agents", "Aucun pouvoir individuel", "Condition de CPP"]
  },
  {
    id: "homogeneite",
    terme: "Homogénéité",
    categorie: "Concurrence",
    definition: "L'homogénéité signifie que les produits échangés sur un marché sont considérés comme identiques par les acheteurs.",
    interpretation: "Si les produits sont identiques, les vendeurs ne peuvent pas justifier facilement un prix plus élevé.",
    exemple: "Deux litres d'essence de même qualité sont souvent perçus comme homogènes.",
    pointsCles: ["Produits identiques", "Comparaison facile", "Condition de CPP"]
  },
  {
    id: "libre-entree",
    terme: "Libre entrée",
    categorie: "Concurrence",
    definition: "La libre entrée signifie qu'aucun obstacle majeur n'empêche de nouvelles entreprises d'entrer sur un marché.",
    interpretation: "Elle limite le pouvoir des entreprises déjà présentes, car de nouveaux concurrents peuvent apparaître.",
    exemple: "Un marché sans licence coûteuse ni brevet bloquant facilite l'arrivée de nouveaux producteurs.",
    pointsCles: ["Absence de barrières", "Entrée possible", "Renforce la concurrence"]
  },
  {
    id: "transparence",
    terme: "Transparence",
    categorie: "Concurrence",
    definition: "La transparence désigne une information parfaite des agents sur les prix et les caractéristiques des produits.",
    interpretation: "Elle permet aux acheteurs et vendeurs de prendre des décisions éclairées.",
    exemple: "Un comparateur de prix peut améliorer la transparence d'un marché.",
    pointsCles: ["Information disponible", "Prix connus", "Condition de CPP"]
  },
  {
    id: "mobilite-facteurs",
    terme: "Mobilité des facteurs",
    categorie: "Concurrence",
    definition: "La mobilité des facteurs désigne la capacité du travail et du capital à se déplacer librement entre les secteurs ou les entreprises.",
    interpretation: "Elle permet aux ressources d'aller vers les usages les plus rémunérateurs ou productifs.",
    exemple: "Des salariés qui changent facilement de secteur rendent le facteur travail plus mobile.",
    pointsCles: ["Déplacement du travail et du capital", "Ajustement du marché", "Condition de CPP"]
  },
  {
    id: "monopole",
    terme: "Monopole",
    categorie: "Concurrence",
    definition: "Un monopole est une structure de marché dans laquelle un seul offreur vend un bien ou un service.",
    interpretation: "L'entreprise peut disposer d'un pouvoir de marché important, surtout si les consommateurs n'ont pas de substitut.",
    exemple: "Une entreprise seule à exploiter un brevet essentiel peut être en situation de monopole temporaire.",
    pointsCles: ["Un seul offreur", "Pouvoir de marché", "Barrières possibles"]
  },
  {
    id: "oligopole",
    terme: "Oligopole",
    categorie: "Concurrence",
    definition: "Un oligopole est une structure de marché dominée par un petit nombre d'offreurs.",
    interpretation: "Les entreprises y surveillent fortement les décisions de leurs concurrents, car chaque choix peut modifier l'équilibre du marché.",
    exemple: "Le marché des opérateurs mobiles est souvent analysé comme un oligopole.",
    pointsCles: ["Peu d'offreurs", "Interdépendance stratégique", "Risque d'entente"]
  },
  {
    id: "barrieres-entree",
    terme: "Barrières à l'entrée",
    categorie: "Concurrence",
    definition: "Les barrières à l'entrée sont les obstacles qui empêchent ou découragent de nouvelles entreprises d'entrer sur un marché.",
    interpretation: "Elles protègent les entreprises déjà présentes et peuvent renforcer leur pouvoir de marché.",
    exemple: "Un brevet, un coût de départ très élevé ou une réglementation stricte peuvent être des barrières à l'entrée.",
    pointsCles: ["Obstacles à l'arrivée", "Protègent les firmes installées", "Limitent la concurrence"]
  },
  {
    id: "differenciation-produits",
    terme: "Différenciation des produits",
    categorie: "Concurrence",
    definition: "La différenciation des produits consiste à rendre un produit distinct de ceux des concurrents par ses caractéristiques, son image ou ses services associés.",
    interpretation: "Elle permet à une entreprise d'échapper partiellement à la concurrence par les prix.",
    exemple: "Une marque peut différencier ses chaussures par le design, la qualité perçue ou la publicité.",
    pointsCles: ["Produit rendu distinct", "Marque ou qualité", "Réduit la comparaison par le prix"]
  },
  {
    id: "pouvoir-marche",
    terme: "Pouvoir de marché",
    categorie: "Concurrence",
    definition: "Le pouvoir de marché est la capacité d'une entreprise à influencer le prix ou les conditions de vente sur un marché.",
    interpretation: "Il apparaît lorsque la concurrence est limitée, par exemple en monopole, oligopole ou grâce à une différenciation forte.",
    exemple: "Une entreprise très dominante peut augmenter ses prix sans perdre immédiatement tous ses clients.",
    pointsCles: ["Influence sur le prix", "Concurrence limitée", "Source de profits plus élevés"]
  },
  {
    id: "externalite",
    terme: "Externalité",
    categorie: "Défaillances de marché",
    definition: "Une externalité est l'effet de l'activité d'un agent sur le bien-être d'autres agents sans compensation par un prix.",
    interpretation: "Elle montre que le marché ne prend pas toujours en compte tous les coûts ou bénéfices sociaux.",
    exemple: "La pollution d'une usine impose un coût aux riverains sans que ce coût soit inclus dans le prix du produit.",
    pointsCles: ["Effet sur autrui", "Hors prix de marché", "Peut être positive ou négative"]
  },
  {
    id: "externalite-positive",
    terme: "Externalité positive",
    categorie: "Défaillances de marché",
    definition: "Une externalité positive est un effet bénéfique produit par l'activité d'un agent sans rémunération directe.",
    interpretation: "Elle peut conduire le marché à produire moins que ce qui serait souhaitable collectivement.",
    exemple: "La vaccination protège aussi des personnes non vaccinées en réduisant la circulation d'une maladie.",
    pointsCles: ["Bénéfice pour autrui", "Non rémunéré", "Production parfois insuffisante"]
  },
  {
    id: "externalite-negative",
    terme: "Externalité négative",
    categorie: "Défaillances de marché",
    definition: "Une externalité négative est un effet nuisible imposé à d'autres agents sans compensation financière suffisante.",
    interpretation: "Elle peut conduire le marché à produire trop par rapport à l'intérêt collectif.",
    exemple: "Les émissions de CO2 d'une activité économique contribuent au changement climatique.",
    pointsCles: ["Coût pour autrui", "Non compensé", "Production parfois excessive"]
  },
  {
    id: "asymetrie-information",
    terme: "Asymétrie d'information",
    categorie: "Défaillances de marché",
    definition: "L'asymétrie d'information est une situation où les agents d'un échange ne disposent pas du même niveau d'information.",
    interpretation: "Elle peut empêcher le marché de fonctionner efficacement car certains agents prennent des décisions avec une information incomplète.",
    exemple: "Un vendeur de voiture d'occasion connaît souvent mieux l'état réel du véhicule que l'acheteur.",
    pointsCles: ["Information inégale", "Risque de mauvaise décision", "Défaillance de marché"]
  },
  {
    id: "selection-adverse",
    terme: "Sélection adverse",
    categorie: "Défaillances de marché",
    definition: "La sélection adverse apparaît lorsqu'une asymétrie d'information fait disparaître ou décourage les bons produits ou les bons profils d'un marché.",
    interpretation: "Les agents mal informés se protègent en baissant leur prix ou en refusant l'échange, ce qui peut dégrader la qualité moyenne.",
    exemple: "Sur un marché de voitures d'occasion, les bons véhicules peuvent être retirés si les acheteurs proposent tous un prix trop bas.",
    pointsCles: ["Avant l'échange", "Qualité difficile à observer", "Peut réduire les bons produits"]
  },
  {
    id: "alea-moral",
    terme: "Aléa moral",
    categorie: "Défaillances de marché",
    definition: "L'aléa moral est un comportement plus risqué adopté par un agent lorsqu'il sait qu'il ne supportera pas entièrement les conséquences de ses actes.",
    interpretation: "Il apparaît après la signature d'un contrat ou d'une assurance, lorsque le comportement devient difficile à contrôler.",
    exemple: "Une personne très assurée peut être moins prudente si elle pense que les dommages seront pris en charge.",
    pointsCles: ["Après l'échange", "Comportement difficile à observer", "Risque accru"]
  },
  {
    id: "defaillance-marche",
    terme: "Défaillance de marché",
    categorie: "Défaillances de marché",
    definition: "Une défaillance de marché est une situation où le marché ne conduit pas spontanément à une allocation efficace ou souhaitable des ressources.",
    interpretation: "Elle justifie souvent une intervention publique, par exemple face aux externalités, aux biens collectifs ou aux asymétries d'information.",
    exemple: "La pollution peut nécessiter une taxe, une réglementation ou un marché de quotas.",
    pointsCles: ["Marché inefficace", "Externalités, biens collectifs, information", "Peut justifier l'État"]
  },
  {
    id: "regulation-publique",
    terme: "Régulation publique",
    categorie: "Défaillances de marché",
    definition: "La régulation publique désigne les interventions des pouvoirs publics pour encadrer les marchés ou corriger leurs défaillances.",
    interpretation: "Elle peut prendre la forme de taxes, subventions, normes, interdictions ou production publique.",
    exemple: "Une taxe carbone vise à faire payer une partie du coût social des émissions polluantes.",
    pointsCles: ["Intervention de l'État", "Corrige les défaillances", "Taxes, normes, subventions"]
  },
  {
    id: "demarche-scientifique",
    terme: "Démarche scientifique",
    categorie: "Méthodes",
    definition: "La démarche scientifique est une méthode rigoureuse qui repose sur l'observation, la formulation d'hypothèses et leur vérification empirique.",
    interpretation: "Elle distingue l'analyse scientifique de l'opinion personnelle en s'appuyant sur des preuves discutables et contrôlables.",
    exemple: "Un sociologue peut formuler une hypothèse sur les pratiques culturelles puis la tester avec une enquête.",
    pointsCles: ["Observation", "Hypothèses", "Vérification empirique"]
  },
  {
    id: "objectivation",
    terme: "Objectivation",
    categorie: "Méthodes",
    definition: "L'objectivation est l'effort du chercheur pour prendre de la distance avec ses préjugés et transformer un phénomène social en objet d'étude.",
    interpretation: "Elle permet d'analyser les faits sociaux avec méthode plutôt qu'à partir d'impressions personnelles.",
    exemple: "Étudier statistiquement les inégalités scolaires aide à dépasser les jugements individuels sur les élèves.",
    pointsCles: ["Distance critique", "Méthode", "Lutte contre les préjugés"]
  },
  {
    id: "enquete-sociologique",
    terme: "Enquête sociologique",
    categorie: "Méthodes",
    definition: "Une enquête sociologique est une démarche de collecte et d'analyse de données pour comprendre un phénomène social.",
    interpretation: "Elle peut combiner des méthodes quantitatives et qualitatives selon la question étudiée.",
    exemple: "Enquêter sur les usages des réseaux sociaux peut mêler questionnaire, entretiens et observation.",
    pointsCles: ["Collecte de données", "Analyse sociale", "Méthodes variées"]
  },
  {
    id: "methodes-quantitatives",
    terme: "Méthodes quantitatives",
    categorie: "Méthodes",
    definition: "Les méthodes quantitatives reposent sur la collecte et le traitement statistique de données chiffrées.",
    interpretation: "Elles permettent de mesurer des régularités, de comparer des groupes et d'établir des ordres de grandeur.",
    exemple: "Un questionnaire auprès de 2 000 personnes peut mesurer la fréquence d'une pratique culturelle.",
    pointsCles: ["Données chiffrées", "Statistiques", "Comparaisons"]
  },
  {
    id: "methodes-qualitatives",
    terme: "Méthodes qualitatives",
    categorie: "Méthodes",
    definition: "Les méthodes qualitatives analysent des discours, des observations ou des entretiens pour comprendre le sens des pratiques sociales.",
    interpretation: "Elles permettent d'entrer dans les logiques des acteurs et de saisir des mécanismes difficiles à réduire à des chiffres.",
    exemple: "Des entretiens avec des étudiants peuvent éclairer leur rapport à l'orientation.",
    pointsCles: ["Discours et observations", "Compréhension fine", "Sens donné par les acteurs"]
  },
  {
    id: "entretien",
    terme: "Entretien",
    categorie: "Méthodes",
    definition: "Un entretien est une technique d'enquête qualitative fondée sur un échange direct entre l'enquêteur et l'enquêté.",
    interpretation: "Il permet de recueillir des récits, représentations et explications détaillées.",
    exemple: "Un sociologue interroge un salarié sur son parcours professionnel et son expérience du travail.",
    pointsCles: ["Échange direct", "Données qualitatives", "Récit détaillé"]
  },
  {
    id: "observation",
    terme: "Observation",
    categorie: "Méthodes",
    definition: "L'observation est une technique d'enquête qui consiste à étudier un phénomène social en le regardant se dérouler.",
    interpretation: "Elle permet de comparer ce que les individus disent faire avec ce qu'ils font effectivement.",
    exemple: "Observer une salle de classe peut aider à étudier les interactions entre élèves et professeurs.",
    pointsCles: ["Regarder les pratiques", "Terrain", "Peut être participante ou non"]
  },
  {
    id: "statistique-publique",
    terme: "Statistique publique",
    categorie: "Méthodes",
    definition: "La statistique publique regroupe les données chiffrées produites par les organismes publics pour décrire la société et l'économie.",
    interpretation: "Elle fournit des repères fiables pour analyser l'emploi, les revenus, la population ou les prix.",
    exemple: "L'INSEE produit des données sur le chômage, l'inflation ou les niveaux de vie.",
    pointsCles: ["Données officielles", "Organismes publics", "Repères pour l'analyse"]
  },
  {
    id: "classe-sociale",
    terme: "Classe sociale",
    categorie: "Stratification",
    definition: "Une classe sociale est un groupe d'individus occupant une position proche dans la société, souvent liée aux ressources économiques, au travail et au mode de vie.",
    interpretation: "Elle aide à comprendre les inégalités, les intérêts communs et les différences de pratiques entre groupes.",
    exemple: "On parle souvent de classes populaires, de classes moyennes et de classes supérieures.",
    pointsCles: ["Position sociale proche", "Ressources et mode de vie", "Peut nourrir des intérêts communs"]
  },
  {
    id: "pcs",
    terme: "Catégorie socioprofessionnelle",
    sigle: "PCS",
    categorie: "Stratification",
    definition: "Les PCS sont une classification statistique qui regroupe les individus selon leur profession et leur position sociale.",
    interpretation: "Elles permettent de comparer les comportements, revenus, diplômes ou pratiques selon les groupes sociaux.",
    exemple: "Les cadres, employés, ouvriers et professions intermédiaires sont des catégories socioprofessionnelles.",
    pointsCles: ["Classification statistique", "Profession et statut", "Outil de comparaison sociale"]
  },
  {
    id: "stratification-sociale",
    terme: "Stratification sociale",
    categorie: "Stratification",
    definition: "La stratification sociale désigne l'organisation hiérarchisée d'une société en groupes occupant des positions inégales.",
    interpretation: "Elle montre que les ressources, le prestige et le pouvoir ne sont pas répartis de façon uniforme.",
    exemple: "Les différences entre ouvriers, employés, cadres et indépendants illustrent une stratification sociale.",
    pointsCles: ["Hiérarchie sociale", "Groupes inégaux", "Ressources et prestige"]
  },
  {
    id: "mobilite-sociale",
    terme: "Mobilité sociale",
    categorie: "Stratification",
    definition: "La mobilité sociale désigne le changement de position sociale d'un individu ou d'un groupe par rapport à une situation de référence.",
    interpretation: "Elle permet d'étudier l'égalité des chances et la capacité d'une société à rendre les trajectoires moins dépendantes de l'origine sociale.",
    exemple: "Un enfant d'ouvrier qui devient cadre connaît une mobilité sociale ascendante.",
    pointsCles: ["Changement de position", "Ascendante ou descendante", "Liée à l'égalité des chances"]
  },
  {
    id: "mobilite-intergenerationnelle",
    terme: "Mobilité intergénérationnelle",
    categorie: "Stratification",
    definition: "La mobilité intergénérationnelle compare la position sociale des individus à celle de leurs parents.",
    interpretation: "Elle mesure dans quelle mesure l'origine sociale influence la destinée sociale.",
    exemple: "Comparer la PCS d'un fils ou d'une fille avec celle de son père permet d'étudier cette mobilité.",
    pointsCles: ["Entre générations", "Parents et enfants", "Mesure les chances sociales"]
  },
  {
    id: "mobilite-intragenerationnelle",
    terme: "Mobilité intragénérationnelle",
    categorie: "Stratification",
    definition: "La mobilité intragénérationnelle désigne le changement de position sociale au cours de la vie d'un même individu.",
    interpretation: "Elle analyse les trajectoires professionnelles et sociales à l'intérieur d'une génération.",
    exemple: "Un employé qui devient cadre après plusieurs promotions connaît une mobilité intragénérationnelle.",
    pointsCles: ["Au cours d'une vie", "Trajectoire individuelle", "Promotions ou déclassements"]
  },
  {
    id: "mobilite-structurelle",
    terme: "Mobilité structurelle",
    categorie: "Stratification",
    definition: "La mobilité structurelle est la mobilité sociale provoquée par les transformations de la structure des emplois.",
    interpretation: "Elle ne dépend pas seulement des efforts individuels, mais aussi de l'évolution de l'économie et des métiers.",
    exemple: "La baisse du nombre d'agriculteurs et la hausse des emplois de services créent de la mobilité structurelle.",
    pointsCles: ["Transformation des emplois", "Effet de structure", "Indépendante des seuls parcours individuels"]
  },
  {
    id: "table-mobilite",
    terme: "Table de mobilité",
    categorie: "Stratification",
    definition: "Une table de mobilité est un tableau statistique qui croise la position sociale des parents et celle des enfants.",
    interpretation: "Elle permet de mesurer la mobilité, l'immobilité sociale et les trajectoires ascendantes ou descendantes.",
    exemple: "Une table peut indiquer la proportion d'enfants d'ouvriers devenus cadres.",
    pointsCles: ["Tableau statistique", "Origine et position sociale", "Mesure la mobilité"]
  },
  {
    id: "fluidite-sociale",
    terme: "Fluidité sociale",
    categorie: "Stratification",
    definition: "La fluidité sociale mesure la mobilité nette des effets de transformation de la structure des emplois.",
    interpretation: "Elle sert à évaluer l'égalité des chances entre individus d'origines sociales différentes.",
    exemple: "Une société très fluide permet plus facilement à deux individus de milieux différents d'accéder aux mêmes positions.",
    pointsCles: ["Mobilité nette", "Égalité des chances", "Corrige l'effet de structure"]
  },
  {
    id: "structure-sociale",
    terme: "Structure sociale",
    categorie: "Stratification",
    definition: "La structure sociale est l'organisation durable des groupes sociaux et des positions hiérarchisées dans une société.",
    interpretation: "Elle donne un cadre pour analyser les classes, les PCS, les inégalités et les rapports sociaux.",
    exemple: "La répartition entre cadres, employés, ouvriers et indépendants participe à la structure sociale.",
    pointsCles: ["Organisation durable", "Groupes sociaux", "Hiérarchies"]
  },
  {
    id: "moyennisation",
    terme: "Moyennisation",
    categorie: "Stratification",
    definition: "La moyennisation est le processus par lequel les écarts entre groupes sociaux se réduisent et les classes moyennes se développent.",
    interpretation: "Elle interroge l'affaiblissement possible des frontières de classe, sans signifier la disparition des inégalités.",
    exemple: "La diffusion de certains biens de consommation dans toutes les catégories sociales peut être interprétée comme un signe de moyennisation.",
    pointsCles: ["Réduction des écarts", "Développement des classes moyennes", "Débat sociologique"]
  },
  {
    id: "culture",
    terme: "Culture",
    categorie: "Culture",
    definition: "La culture regroupe les manières de penser, d'agir, de sentir et de créer partagées par un groupe.",
    interpretation: "Elle se transmet par la socialisation et donne des repères communs aux membres d'une société ou d'un groupe.",
    exemple: "La langue, les fêtes, les goûts musicaux ou les habitudes alimentaires font partie de la culture.",
    pointsCles: ["Manières de vivre", "Transmise socialement", "Variable selon les groupes"]
  },
  {
    id: "sous-culture",
    terme: "Sous-culture",
    categorie: "Culture",
    definition: "Une sous-culture est un ensemble de normes, valeurs et pratiques propres à un groupe à l'intérieur d'une culture plus large.",
    interpretation: "Elle montre qu'une société n'est pas culturellement uniforme.",
    exemple: "Certaines pratiques vestimentaires ou musicales peuvent caractériser une sous-culture juvénile.",
    pointsCles: ["Groupe particulier", "Au sein d'une culture", "Normes et pratiques propres"]
  },
  {
    id: "pratiques-culturelles",
    terme: "Pratiques culturelles",
    categorie: "Culture",
    definition: "Les pratiques culturelles désignent les activités liées à la consommation, la production ou la fréquentation de biens et services culturels.",
    interpretation: "Elles varient selon l'âge, le diplôme, le milieu social et les ressources disponibles.",
    exemple: "Lire, aller au musée, regarder des séries ou jouer d'un instrument sont des pratiques culturelles.",
    pointsCles: ["Activités culturelles", "Variables socialement", "Liées au capital culturel"]
  },
  {
    id: "legitimite-culturelle",
    terme: "Légitimité culturelle",
    categorie: "Culture",
    definition: "La légitimité culturelle désigne la reconnaissance sociale inégale accordée aux différentes pratiques et goûts culturels.",
    interpretation: "Certaines pratiques sont valorisées comme plus nobles ou savantes, ce qui peut renforcer les hiérarchies sociales.",
    exemple: "L'opéra peut être jugé plus légitime que certaines cultures populaires, selon les normes dominantes.",
    pointsCles: ["Hiérarchie des goûts", "Reconnaissance sociale", "Lien avec les inégalités"]
  },
  {
    id: "distinction",
    terme: "Distinction",
    categorie: "Culture",
    definition: "La distinction est le processus par lequel des groupes sociaux affirment leur position et leur identité par leurs goûts et pratiques culturelles.",
    interpretation: "Chez Bourdieu, les goûts ne sont pas seulement personnels : ils participent aussi aux hiérarchies sociales.",
    exemple: "Des choix de loisirs, de langage ou d'alimentation peuvent servir à se distinguer socialement.",
    pointsCles: ["Concept de Bourdieu", "Goûts socialement situés", "Affirme une position sociale"]
  },
  {
    id: "marche-travail",
    terme: "Marché du travail",
    categorie: "Travail",
    definition: "Le marché du travail est le lieu réel ou théorique où se rencontrent l'offre de travail des salariés et la demande de travail des employeurs.",
    interpretation: "Il permet d'analyser l'emploi, les salaires, le chômage et les conditions de recrutement.",
    exemple: "Une entreprise qui recrute rencontre des candidats qui offrent leur travail.",
    pointsCles: ["Offre de travail des salariés", "Demande de travail des employeurs", "Formation des salaires"]
  },
  {
    id: "salaire",
    terme: "Salaire",
    categorie: "Travail",
    definition: "Le salaire est la rémunération versée à un salarié en contrepartie de son travail.",
    interpretation: "Il constitue un revenu du travail pour le salarié et un coût de production pour l'employeur.",
    exemple: "Un employé reçoit chaque mois un salaire pour les heures travaillées.",
    pointsCles: ["Rémunération du travail", "Revenu pour le salarié", "Coût pour l'entreprise"]
  },
  {
    id: "salaire-equilibre",
    terme: "Salaire d'équilibre",
    categorie: "Travail",
    definition: "Le salaire d'équilibre est le salaire pour lequel l'offre de travail est égale à la demande de travail dans le modèle de marché.",
    interpretation: "Il sert de repère théorique, même si les salaires réels dépendent aussi des règles, négociations et rapports de force.",
    exemple: "Dans un modèle simple, si entreprises et travailleurs s'accordent à 12 € de l'heure, ce salaire équilibre le marché.",
    pointsCles: ["Offre = demande", "Modèle théorique", "Peut différer du salaire observé"]
  },
  {
    id: "chomage",
    terme: "Chômage",
    categorie: "Travail",
    definition: "Le chômage désigne la situation d'une personne sans emploi, disponible pour travailler et recherchant activement un emploi.",
    interpretation: "Il mesure une difficulté d'accès à l'emploi et peut avoir des causes économiques, sociales et institutionnelles.",
    exemple: "Une personne inscrite comme demandeuse d'emploi et disponible pour travailler est considérée comme chômeuse selon les critères usuels.",
    pointsCles: ["Sans emploi", "Recherche active", "Disponible pour travailler"]
  },
  {
    id: "taux-chomage",
    terme: "Taux de chômage",
    categorie: "Travail",
    definition: "Le taux de chômage mesure la part des chômeurs dans la population active.",
    formule: "Taux de chômage = (Chômeurs / Population active) × 100",
    interpretation: "Il permet de comparer la situation du marché du travail entre pays, périodes ou catégories de population.",
    exemple: "S'il y a 200 chômeurs pour 2 000 actifs, le taux de chômage est de 10 %.",
    pointsCles: ["Chômeurs / actifs", "Indicateur en %", "Ne mesure pas toute la précarité"]
  },
  {
    id: "population-active",
    terme: "Population active",
    categorie: "Travail",
    definition: "La population active regroupe les personnes en emploi et les chômeurs qui cherchent un emploi.",
    formule: "Population active = Actifs occupés + Chômeurs",
    interpretation: "Elle mesure les personnes qui participent ou souhaitent participer au marché du travail.",
    exemple: "Un salarié et une personne au chômage font partie de la population active.",
    pointsCles: ["Actifs occupés", "Chômeurs", "Exclut les inactifs"]
  },
  {
    id: "chomage-structurel",
    terme: "Chômage structurel",
    categorie: "Travail",
    definition: "Le chômage structurel est un chômage durable lié aux caractéristiques profondes du marché du travail ou de l'économie.",
    interpretation: "Il peut venir d'une inadéquation des qualifications, de rigidités, de transformations technologiques ou de localisation des emplois.",
    exemple: "Des emplois disponibles dans le numérique peuvent coexister avec des chômeurs qui n'ont pas les compétences demandées.",
    pointsCles: ["Durable", "Inadéquation ou rigidités", "Peu sensible à la conjoncture immédiate"]
  },
  {
    id: "chomage-conjoncturel",
    terme: "Chômage conjoncturel",
    categorie: "Travail",
    definition: "Le chômage conjoncturel est lié aux fluctuations de l'activité économique, notamment aux périodes de ralentissement ou de récession.",
    interpretation: "Quand la demande globale baisse, les entreprises produisent moins et peuvent réduire leurs embauches.",
    exemple: "Une crise économique qui fait chuter les commandes peut provoquer des suppressions d'emplois.",
    pointsCles: ["Lié au cycle économique", "Hausse en récession", "Dépend de la demande globale"]
  },
  {
    id: "salaire-minimum",
    terme: "Salaire minimum",
    categorie: "Travail",
    definition: "Le salaire minimum est un salaire plancher fixé par la loi, en dessous duquel un salarié ne peut normalement pas être rémunéré.",
    interpretation: "Il protège les bas salaires mais fait débat sur ses effets possibles sur l'emploi.",
    exemple: "En France, le SMIC est le principal salaire minimum légal.",
    pointsCles: ["Salaire plancher", "Fixé par la loi", "Protège les bas revenus"]
  },
  {
    id: "syndicat",
    terme: "Syndicat",
    categorie: "Travail",
    definition: "Un syndicat est une organisation qui représente et défend les intérêts collectifs des travailleurs.",
    interpretation: "Il participe aux négociations, porte des revendications et peut organiser des actions collectives.",
    exemple: "Un syndicat peut négocier une hausse de salaire ou de meilleures conditions de travail.",
    pointsCles: ["Représentation des travailleurs", "Négociation", "Action collective"]
  },
  {
    id: "negociation-collective",
    terme: "Négociation collective",
    categorie: "Travail",
    definition: "La négociation collective est le processus de discussion entre employeurs et représentants des salariés pour fixer des règles de travail.",
    interpretation: "Elle permet de produire des accords sur les salaires, le temps de travail ou les conditions d'emploi.",
    exemple: "Une branche professionnelle peut négocier une grille de salaires avec les syndicats.",
    pointsCles: ["Employeurs et salariés", "Accords collectifs", "Conditions de travail"]
  },
  {
    id: "conventions-collectives",
    terme: "Conventions collectives",
    categorie: "Travail",
    definition: "Les conventions collectives sont des accords négociés qui fixent les règles applicables aux salariés d'une branche ou d'une entreprise.",
    interpretation: "Elles complètent le droit du travail en adaptant les règles à un secteur d'activité.",
    exemple: "Une convention collective peut prévoir des primes, des classifications ou des congés spécifiques.",
    pointsCles: ["Accords négociés", "Branche ou entreprise", "Complètent la loi"]
  },
  {
    id: "dualisme-marche-travail",
    terme: "Dualisme du marché du travail",
    categorie: "Travail",
    definition: "Le dualisme du marché du travail désigne la segmentation entre un marché primaire d'emplois stables et un marché secondaire d'emplois plus précaires.",
    interpretation: "Il explique pourquoi tous les travailleurs ne sont pas exposés aux mêmes risques d'instabilité ou de faibles salaires.",
    exemple: "Les salariés en CDI qualifiés sont souvent mieux protégés que des travailleurs en contrats courts répétés.",
    pointsCles: ["Segmentation", "Emplois stables et précaires", "Inégalités face à l'emploi"]
  },
  {
    id: "justice-sociale",
    terme: "Justice sociale",
    categorie: "Justice sociale",
    definition: "La justice sociale regroupe les principes qui permettent de juger si la répartition des ressources, droits et opportunités est équitable.",
    interpretation: "Elle peut s'appuyer sur l'égalité, l'équité, le mérite, la solidarité ou la lutte contre les discriminations.",
    exemple: "Un débat sur la progressivité de l'impôt est un débat de justice sociale.",
    pointsCles: ["Répartition juste", "Égalité ou équité", "Droits et opportunités"]
  },
  {
    id: "egalite",
    terme: "Égalité",
    categorie: "Justice sociale",
    definition: "L'égalité désigne l'absence de différence de traitement ou de situation entre individus selon le critère étudié.",
    interpretation: "Elle peut concerner les droits, les chances ou les situations, ce qui conduit à des objectifs différents.",
    exemple: "Donner le droit de vote à tous les citoyens adultes relève de l'égalité des droits.",
    pointsCles: ["Absence de différence", "Plusieurs dimensions", "Principe de justice"]
  },
  {
    id: "equite",
    terme: "Équité",
    categorie: "Justice sociale",
    definition: "L'équité consiste à rechercher un traitement juste en tenant compte des situations différentes des individus.",
    interpretation: "Elle peut justifier des aides ciblées pour réduire un désavantage initial.",
    exemple: "Accorder une bourse plus élevée aux étudiants modestes relève d'une logique d'équité.",
    pointsCles: ["Traitement juste", "Tient compte des différences", "Peut corriger des désavantages"]
  },
  {
    id: "egalite-droits",
    terme: "Égalité des droits",
    categorie: "Justice sociale",
    definition: "L'égalité des droits signifie que les individus disposent des mêmes droits reconnus par la loi.",
    interpretation: "Elle est fondamentale en démocratie, mais ne garantit pas à elle seule des conditions de vie identiques.",
    exemple: "Le droit d'accès à l'école pour tous relève de l'égalité des droits.",
    pointsCles: ["Même cadre juridique", "Principe démocratique", "N'efface pas toutes les inégalités"]
  },
  {
    id: "egalite-situations",
    terme: "Égalité des situations",
    categorie: "Justice sociale",
    definition: "L'égalité des situations vise à rapprocher les conditions de vie réelles des individus.",
    interpretation: "Elle porte sur les revenus, le patrimoine, l'accès aux soins, au logement ou à l'éducation.",
    exemple: "Réduire fortement les écarts de revenus relève d'un objectif d'égalité des situations.",
    pointsCles: ["Conditions de vie", "Réduction des écarts", "Objectif redistributif"]
  },
  {
    id: "egalite-chances",
    terme: "Égalité des chances",
    categorie: "Justice sociale",
    definition: "L'égalité des chances signifie que chacun devrait avoir les mêmes possibilités de réussite indépendamment de son origine sociale ou de ses caractéristiques personnelles.",
    interpretation: "Elle ne garantit pas les mêmes résultats, mais cherche à rendre la compétition sociale plus équitable.",
    exemple: "Des dispositifs d'aide scolaire peuvent viser à réduire l'effet de l'origine sociale sur la réussite.",
    pointsCles: ["Même possibilité de réussir", "Indépendance vis-à-vis de l'origine", "N'assure pas l'égalité des résultats"]
  },
  {
    id: "discrimination",
    terme: "Discrimination",
    categorie: "Justice sociale",
    definition: "La discrimination est un traitement défavorable fondé sur un critère interdit par la loi, comme l'origine, le sexe, l'âge, le handicap ou la religion.",
    interpretation: "Elle produit des inégalités injustes car elle pénalise des individus pour des caractéristiques sans rapport avec leurs compétences.",
    exemple: "Refuser un emploi à une personne en raison de son origine constitue une discrimination.",
    pointsCles: ["Traitement défavorable", "Critère prohibé", "Inégalité illégitime"]
  },
  {
    id: "fiscalite-redistributive",
    terme: "Fiscalité redistributive",
    categorie: "Justice sociale",
    definition: "La fiscalité redistributive regroupe les prélèvements conçus pour réduire les inégalités de revenus ou de patrimoine.",
    interpretation: "Elle repose souvent sur une contribution plus forte des ménages ayant les ressources les plus élevées.",
    exemple: "Un impôt progressif sur le revenu peut réduire les écarts de revenus disponibles.",
    pointsCles: ["Réduit les inégalités", "Impôts et transferts", "Souvent progressive"]
  },
  {
    id: "impot-progressif",
    terme: "Impôt progressif",
    categorie: "Justice sociale",
    definition: "Un impôt progressif est un impôt dont le taux augmente lorsque le revenu ou le patrimoine imposé augmente.",
    interpretation: "Il fait contribuer proportionnellement davantage les ménages les plus aisés et peut réduire les inégalités après impôts.",
    exemple: "L'impôt sur le revenu en France fonctionne par tranches avec des taux croissants.",
    pointsCles: ["Taux croissant", "Contribution selon les ressources", "Outil redistributif"]
  },
  {
    id: "cout-marginal",
    terme: "Coût marginal",
    sigle: "Cm",
    categorie: "Production",
    definition: "Le coût marginal est le supplément de coût engendré par la production d'une unité supplémentaire de bien ou de service.",
    formule: "Cm = Δ Coût total / Δ Quantité produite",
    interpretation: "Tant que le prix de vente (recette marginale) est supérieur au coût marginal, l'entreprise a intérêt à continuer de produire.",
    exemple: "Produire 100 vélos coûte 10 000 €, en produire 101 coûte 10 080 € : le coût marginal du 101e vélo est de 80 €.",
    pointsCles: ["Coût de la dernière unité", "Règle de maximisation du profit (Prix = Cm en CPP)", "Guide les décisions de production"]
  },
  {
    id: "recette-marginale",
    terme: "Recette marginale",
    sigle: "Rm",
    categorie: "Production",
    definition: "La recette marginale est le revenu supplémentaire généré par la vente d'une unité supplémentaire.",
    formule: "Rm = Δ Recette totale / Δ Quantité vendue",
    interpretation: "En concurrence pure et parfaite, la recette marginale est égale au prix du marché (l'entreprise est preneuse de prix).",
    exemple: "Si vendre une unité de plus rapporte 50 €, la recette marginale est de 50 €.",
    pointsCles: ["Revenu de la dernière unité", "Égale au prix en CPP", "Permet de déterminer la quantité optimale"]
  },
  {
    id: "prix-plafond",
    terme: "Prix plafond",
    categorie: "Marché",
    definition: "Un prix plafond est un niveau de prix maximal fixé par l'État en dessous du prix d'équilibre pour protéger le pouvoir d'achat des consommateurs.",
    interpretation: "Fixé sous l'équilibre, il engendre une pénurie (demande supérieure à l'offre) et peut créer un marché noir.",
    exemple: "Le plafonnement des loyers dans certaines zones tendues ou le blocage du prix de produits de première nécessité.",
    pointsCles: ["Régulation publique", "Inférieur au prix d'équilibre", "Risque de pénurie"]
  },
  {
    id: "prix-plancher",
    terme: "Prix plancher",
    categorie: "Marché",
    definition: "Un prix plancher est un niveau de prix minimal garanti par l'État au-dessus du prix d'équilibre pour assurer un revenu minimum aux producteurs.",
    interpretation: "Fixé au-dessus de l'équilibre, il engendre un excédent de production (offre supérieure à la demande).",
    exemple: "Le SMIC sur le marché du travail ou les prix agricoles garantis dans la PAC historique.",
    pointsCles: ["Prix minimum obligatoire", "Supérieur au prix d'équilibre", "Risque d'excédent"]
  },
  {
    id: "asymetrie-information",
    terme: "Asymétrie d'information",
    categorie: "Défaillances de marché",
    definition: "Situation de marché dans laquelle l'un des participants à l'échange dispose de plus d'informations ou de meilleures informations que l'autre partie.",
    interpretation: "Elle empêche le marché concurrentiel d'aboutir à un résultat efficace et peut conduire à la disparition du marché (Akerlof).",
    exemple: "Un vendeur de voiture d'occasion connaît les défauts cachés de son véhicule, contrairement à l'acheteur potentiel.",
    pointsCles: ["Information imparfaite et inégale", "Défaillance de marché", "Engendre antisélection et aléa moral"]
  },
  {
    id: "selection-adverse",
    terme: "Sélection adverse",
    sigle: "Antisélection",
    categorie: "Défaillances de marché",
    definition: "Défaillance de marché précontractuelle où l'asymétrie d'information sur la qualité d'un bien conduit à évincer les bons produits au profit des mauvais.",
    interpretation: "Théorisée par George Akerlof (1970) avec le marché des « tacots » (lemons), elle peut justifier des labels, garanties ou réglementations.",
    exemple: "Sur le marché de l'assurance santé, si les primes sont moyennes, seuls les individus à haut risque souscrivent, faisant fuir les bien-portants.",
    pointsCles: ["Avant la signature du contrat", "Porte sur une caractéristique cachée", "Éviction des biens de bonne qualité"]
  },
  {
    id: "alea-moral",
    terme: "Aléa moral",
    sigle: "Risque moral",
    categorie: "Défaillances de marché",
    definition: "Défaillance post-contractuelle où un individu, sachant qu'il est couvert contre un risque, modifie son comportement et prend plus de risques au détriment de l'autre partie.",
    interpretation: "Elle survient car les actions de l'agent ne sont pas parfaitement observables (comportement opportuniste non surveillé).",
    exemple: "Un automobiliste entièrement assuré « tous risques » et sans franchise peut être moins vigilant lors de ses stationnements.",
    pointsCles: ["Après la signature du contrat", "Porte sur une action cachée", "Nécessite franchises ou incitations"]
  },
  {
    id: "pouvoir-marche",
    terme: "Pouvoir de marché",
    categorie: "Concurrence",
    definition: "Capacité d'une entreprise à fixer un prix de vente supérieur au coût marginal sans perdre la totalité de sa clientèle (faiseur de prix).",
    interpretation: "Le pouvoir de marché s'oppose à la concurrence parfaite et découle des barrières à l'entrée, des monopoles/oligopoles ou de la différenciation.",
    exemple: "Une grande marque de smartphones peut vendre ses modèles à plus de 1 000 € grâce à son image et ses brevets technologiques.",
    pointsCles: ["Fixation du prix (Price Maker)", "Marge au-dessus du coût marginal", "Surveillé par les autorités de la concurrence"]
  },
  {
    id: "faiseur-de-prix",
    terme: "Faiseur de prix",
    sigle: "Price Maker",
    categorie: "Concurrence",
    definition: "Entreprise disposant d'un pouvoir de marché suffisant pour influencer ou fixer le prix auquel elle vend ses biens.",
    interpretation: "Contrairement au preneur de prix en CPP, elle choisit son couple prix/quantité sur sa courbe de demande.",
    exemple: "Une entreprise pharmaceutique détenant le brevet exclusif d'un médicament essentiel.",
    pointsCles: ["Pouvoir de marché", "Prix supérieur au coût marginal", "Monopole ou oligopole"]
  },
  {
    id: "preneur-de-prix",
    terme: "Preneur de prix",
    sigle: "Price Taker",
    categorie: "Concurrence",
    definition: "Agent économique (producteur ou consommateur) qui ne peut pas influencer le prix du marché et doit l'accepter comme une donnée.",
    interpretation: "Hypothèse centrale du modèle de concurrence pure et parfaite due à l'atomicité des intervenants.",
    exemple: "Un producteur de blé individuel qui vend sa récolte au cours mondial fixé sur le marché à terme.",
    pointsCles: ["Atomicité du marché", "Aucun pouvoir individuel sur le prix", "Prix fixé par l'équilibre global"]
  },
  {
    id: "monopole-naturel",
    terme: "Monopole naturel",
    categorie: "Concurrence",
    definition: "Situation où la présence d'une seule entreprise sur le marché est plus efficace que plusieurs, en raison de coûts fixes initiaux gigantesques et de rendements d'échelle croissants.",
    interpretation: "Le coût moyen unitaire diminue continuellement avec les volumes, rendant toute concurrence sous-optimale ou impossible.",
    exemple: "Le réseau ferré national (SNCF Réseau), les réseaux de distribution d'eau ou d'électricité (Enedis).",
    pointsCles: ["Coûts fixes colossaux", "Rendements d'échelle croissants", "Nécessite souvent régulation ou service public"]
  },
  {
    id: "monopole-legal",
    terme: "Monopole légal / institutionnel",
    categorie: "Concurrence",
    definition: "Monopole garanti et protégé par la loi ou par une décision de la puissance publique qui interdit l'entrée de concurrents.",
    interpretation: "Mis en place pour des raisons d'ordre public, de sécurité nationale, de santé publique ou pour amortir des investissements.",
    exemple: "La Française des Jeux (tirages historiques), les pharmacies pour la vente de médicaments sur ordonnance.",
    pointsCles: ["Barrière légale / réglementaire", "Protection de l'État", "Droits exclusifs octroyés"]
  },
  {
    id: "monopole-innovation",
    terme: "Monopole d'innovation",
    sigle: "Monopole Schumpetérien",
    categorie: "Concurrence",
    definition: "Monopole temporaire obtenu par une entreprise grâce à une innovation majeure protégée par brevet ou secret de fabrication.",
    interpretation: "Théorisé par Joseph Schumpeter, ce monopole génère une rente d'innovation qui récompense et stimule la recherche-développement avant d'être imité.",
    exemple: "Le premier laboratoire à commercialiser un vaccin ARN messager ou un fabricant lançant une rupture technologique.",
    pointsCles: ["Rente temporaire", "Moteur de la destruction créatrice", "Incitations à l'innovation"]
  },
  {
    id: "oligopole",
    terme: "Oligopole",
    categorie: "Concurrence",
    definition: "Structure de marché caractérisée par un petit nombre de grands offreurs face à une multitude de demandeurs.",
    interpretation: "Les entreprises sont interdépendantes stratégiquement : chaque décision de prix ou de quantité d'une firme affecte directement ses rivales.",
    exemple: "Le marché de la téléphonie mobile en France (Orange, SFR, Bouygues, Free) ou de la construction aéronautique civile (Airbus, Boeing).",
    pointsCles: ["Quelques vendeurs", "Interdépendance stratégique", "Risque d'entente ou guerre des prix"]
  },
  {
    id: "cartel",
    terme: "Cartel / Entente illicite",
    categorie: "Concurrence",
    definition: "Accord formel ou secret entre entreprises concurrentes sur un marché oligopolistique pour fixer les prix, se partager les parts de marché ou limiter la production.",
    interpretation: "Le cartel vise à neutraliser la concurrence pour maximiser le profit joint des membres au détriment du surplus des consommateurs.",
    exemple: "Le cartel de l'OPEP sur le pétrole (légal car entre États) ou les ententes sanctionnées sur les produits d'hygiène et la téléphonie.",
    pointsCles: ["Entente sur les prix ou quotas", "Illégal et sanctionné", "Réduit le surplus du consommateur"]
  },
  {
    id: "politique-concurrence",
    terme: "Politique de la concurrence",
    categorie: "Concurrence",
    definition: "Ensemble des règles et actions mises en œuvre par les autorités publiques pour maintenir un degré suffisant de concurrence sur les marchés.",
    interpretation: "Elle lutte contre les cartels, les abus de position dominante, contrôle les fusions-acquisitions et encadre les aides d'État.",
    exemple: "L'Autorité de la Concurrence en France et la Commission Européenne infligeant des amendes record aux géants du numérique.",
    pointsCles: ["Contrôle des concentrations", "Répression des ententes et abus", "Protection du bien-être des consommateurs"]
  },
  {
    id: "barriere-entree",
    terme: "Barrières à l'entrée",
    categorie: "Concurrence",
    definition: "Obstacles économiques, techniques, juridiques ou stratégiques qui empêchent ou dissuadent de nouvelles entreprises d'entrer sur un marché.",
    interpretation: "Elles protègent le pouvoir de marché et les surprofits des firmes installées.",
    exemple: "Brevets, coûts d'investissement géants, contrôle d'une ressource rare, fortes dépenses publicitaires.",
    pointsCles: ["Protection des entreprises en place", "Naturelles, légales ou stratégiques", "Contredit la fluidité de la CPP"]
  },
  {
    id: "dilemme-du-prisonnier",
    terme: "Dilemme du prisonnier",
    categorie: "Concurrence",
    definition: "Modèle de théorie des jeux montrant que des individus rationnels poursuivant leur intérêt personnel aboutissent à une situation sous-optimale pour tous en l'absence de coopération.",
    interpretation: "Appliqué aux oligopoles, il explique pourquoi deux entreprises ont intérêt à baisser leurs prix plutôt que coopérer, diminuant leurs profits mutuels.",
    exemple: "Deux stations-service voisines qui baissent chacune leurs prix pour attirer les clients au lieu de s'entendre tacitement.",
    pointsCles: ["Théorie des jeux", "Équilibre de Nash sous-optimal", "Plaidoyer pour la coopération institutionnelle"]
  },
  {
    id: "differenciation-produit",
    terme: "Différenciation des produits",
    categorie: "Concurrence",
    definition: "Stratégie par laquelle une entreprise confère à son produit des caractéristiques réelles ou perçues qui le distinguent de ses concurrents.",
    interpretation: "Elle permet d'échapper à la concurrence par les prix (homogénéité de la CPP) et d'acquérir un pouvoir de marché local (concurrence monopolistique).",
    exemple: "Une marque de vêtements utilisant un design unique, une démarche écoresponsable ou un label bio.",
    pointsCles: ["Horizontale (goûts/couleurs) ou Verticale (qualité)", "Échappe à la guerre des prix", "Fidélise la clientèle"]
  },
  {
    id: "concurrence-monopolistique",
    terme: "Concurrence monopolistique",
    categorie: "Concurrence",
    definition: "Structure de marché où de nombreuses entreprises vendent des produits différenciés mais substituables (Edward Chamberlin).",
    interpretation: "Chaque entreprise dispose d'un quasi-monopole sur sa variété de produit spécifique tout en subissant la concurrence des autres variétés.",
    exemple: "Le marché de la restauration : chaque restaurant propose son ambiance et sa cuisine propre tout en étant entouré de concurrents.",
    pointsCles: ["Nombreux offreurs", "Produits différenciés", "Chamberlin (1933)"]
  },
  {
    id: "socialisation-primaire",
    terme: "Socialisation primaire",
    categorie: "Sociologie",
    definition: "Processus d'apprentissage et d'intériorisation des normes, valeurs et rôles sociaux qui se déroule durant l'enfance et l'adolescence.",
    interpretation: "Elle est particulièrement durable et structurante pour l'identité de l'individu car elle s'opère dans un contexte affectif intense.",
    exemple: "L'apprentissage du langage, des règles de politesse et de l'hygiène au sein de la famille et à l'école maternelle.",
    pointsCles: ["Durant l'enfance", "Instances : famille, école, pairs", "Fondatrice de l'habitus et de l'identité"]
  },
  {
    id: "socialisation-secondaire",
    terme: "Socialisation secondaire",
    categorie: "Sociologie",
    definition: "Processus de socialisation qui intervient à l'âge adulte et se poursuit tout au long de la vie lors de l'entrée dans de nouveaux sous-mondes sociaux.",
    interpretation: "Elle s'articule avec la socialisation primaire soit en la renforçant (continuité), soit en la transformant ou la remettant en cause (rupture).",
    exemple: "L'apprentissage des codes professionnels dans une nouvelle entreprise, la socialisation conjugale ou l'engagement politique.",
    pointsCles: ["À l'âge adulte", "Instances : travail, conjoint, syndicat", "Renforcement ou transformation de l'identité"]
  },
  {
    id: "socialisation-anticipatrice",
    terme: "Socialisation anticipatrice",
    categorie: "Sociologie",
    definition: "Processus par lequel un individu intériorise par avance les normes et valeurs d'un groupe de référence auquel il souhaite appartenir.",
    interpretation: "Concept forgé par Robert K. Merton, elle facilite l'intégration future dans le groupe visé mais peut créer une marginalité dans son groupe d'origine.",
    exemple: "Un étudiant d'origine modeste adoptant le langage, les vêtements et les habitudes culturelles de la bourgeoisie d'affaires.",
    pointsCles: ["Robert K. Merton", "Adoption des codes d'un groupe convoité", "Favorise la mobilité sociale"]
  },
  {
    id: "groupe-appartenance",
    terme: "Groupe d'appartenance",
    categorie: "Sociologie",
    definition: "Groupe social auquel un individu appartient objectivement en raison de sa position sociale, familiale ou professionnelle.",
    interpretation: "L'individu y a acquis ses premiers repères de socialisation et y partage des conditions d'existence concrètes.",
    exemple: "La classe sociale d'origine d'un ouvrier ou le groupe des étudiants d'une même promotion.",
    pointsCles: ["Appartenance de fait", "Base de la socialisation initiale", "Merton"]
  },
  {
    id: "groupe-reference",
    terme: "Groupe de référence",
    categorie: "Sociologie",
    definition: "Groupe social dont un individu adopte les valeurs, les normes et les comportements pour orienter ses actions et jugements, sans forcément en faire partie.",
    interpretation: "Il peut être identique au groupe d'appartenance (conformisme) ou différent (socialisation anticipatrice et désir de mobilité).",
    exemple: "Un cadre débutant qui prend pour modèle le style de vie et les codes du comité exécutif de son entreprise.",
    pointsCles: ["Groupe modèle", "Guide les aspirations", "Robert K. Merton"]
  },
  {
    id: "normes-sociales",
    terme: "Normes sociales",
    categorie: "Sociologie",
    definition: "Règles de conduite implicites (coutumes, usages) ou explicites (lois, règlements) qui guident le comportement des individus en société.",
    interpretation: "Leur non-respect entraîne des sanctions sociales (réprobation, moquerie) ou juridiques (amende, emprisonnement).",
    exemple: "Faire la queue dans un commerce (norme informelle) ou respecter le code de la route (norme formelle juridique).",
    pointsCles: ["Règles de conduite", "Associées à des sanctions", "Traduction concrète des valeurs"]
  },
  {
    id: "valeurs-sociales",
    terme: "Valeurs sociales",
    categorie: "Sociologie",
    definition: "Principes et idéaux moraux partagés par un groupe social ou une société, qui définissent ce qui est estimable, désirable ou juste.",
    interpretation: "Les valeurs inspirent et légitiment les normes sociales qui en sont l'application pratique au quotidien.",
    exemple: "La liberté, la solidarité, l'honnêteté, l'égalité, le respect d'autrui.",
    pointsCles: ["Idéaux et principes partagés", "Fondement des normes", "Varient selon les époques et cultures"]
  },
  {
    id: "role-social",
    terme: "Rôle social",
    categorie: "Sociologie",
    definition: "Ensemble des comportements et attitudes attendus d'un individu en fonction de la position (statut) qu'il occupe dans un groupe social.",
    interpretation: "Un même individu cumule plusieurs rôles (rôle de parent, d'élève, de collègue, de citoyen), ce qui peut engendrer des conflits de rôles.",
    exemple: "Du médecin, on attend écoute, compétence et secret professionnel ; de l'élève, assiduité et respect des consignes.",
    pointsCles: ["Attentes de comportement", "Lié au statut", "Appris lors de la socialisation"]
  },
  {
    id: "statut-social",
    terme: "Statut social",
    categorie: "Sociologie",
    definition: "Position occupée par un individu au sein d'une structure sociale donnée, assortie de droits et de devoirs.",
    interpretation: "Il peut être assigné (hérité à la naissance) ou acquis (obtenu par l'effort, les diplômes ou la trajectoire professionnelle).",
    exemple: "Statut de cadre dirigeant, statut d'artisan, statut d'étudiant boursier.",
    pointsCles: ["Position dans la hiérarchie", "Assorti de droits et devoirs", "Statut assigné vs statut acquis"]
  },
  {
    id: "capital-culturel",
    terme: "Capital culturel",
    categorie: "Sociologie",
    definition: "Ensemble des ressources culturelles dont dispose un individu sous trois formes : incorporé (habitus, langage), objectivé (livres, œuvres) et institutionnalisé (diplômes).",
    interpretation: "Concept central de Pierre Bourdieu, son inégale transmission familiale explique largement la reproduction des inégalités scolaires.",
    exemple: "La maîtrise du langage soutenu valorisé par l'école, la fréquentation régulière des musées et la possession de diplômes prestigieux.",
    pointsCles: ["Pierre Bourdieu", "3 formes (incorporé, objectivé, institutionnalisé)", "Moteur de la réussite scolaire et sociale"]
  },
  {
    id: "capital-social",
    terme: "Capital social",
    categorie: "Sociologie",
    definition: "Ensemble des relations et réseaux de relations durables et mobilisables qu'un individu ou une famille peut activer à son profit.",
    interpretation: "Selon Bourdieu ou Granovetter, un capital social étendu facilite l'accès aux stages, aux emplois de prestige et aux informations stratégiques.",
    exemple: "Le réseau d'anciens élèves d'une grande école ou les relations professionnelles activées pour décrocher un entretien d'embauche.",
    pointsCles: ["Réseau relationnel utile", "Transmissible et entretenu", "Pierre Bourdieu / Mark Granovetter"]
  },
  {
    id: "capital-economique",
    terme: "Capital économique",
    categorie: "Sociologie",
    definition: "Ensemble des ressources financières et patrimoniales (revenus, biens immobiliers, actifs financiers) détenues par un individu ou un ménage.",
    interpretation: "Il se combine aux capitaux culturel et social pour déterminer la position dans l'espace social (Bourdieu).",
    exemple: "Posséder un patrimoine immobilier locatif et un portefeuille d'actions en bourse.",
    pointsCles: ["Revenus et patrimoine", "Convertible en d'autres capitaux", "Pierre Bourdieu"]
  },
  {
    id: "habitus",
    terme: "Habitus",
    categorie: "Sociologie",
    definition: "Système de dispositions durables et transposables, intériorisé par les individus lors de leur socialisation, qui oriente leurs manières de penser, d'agir et de percevoir le monde.",
    interpretation: "Forgé par Pierre Bourdieu, il explique pourquoi les membres d'une même classe sociale adoptent spontanément des pratiques et goûts similaires.",
    exemple: "Les préférences artistiques, alimentaires, sportives ou vestimentaires spontanées liées à l'origine sociale.",
    pointsCles: ["Pierre Bourdieu", "Structure structurée et structurante", "Matrice des goûts et conduites"]
  },
  {
    id: "reproduction-sociale",
    terme: "Reproduction sociale",
    categorie: "Sociologie",
    definition: "Phénomène par lequel la position sociale des individus au sein de la hiérarchie sociale a tendance à être identique à celle de leurs parents.",
    interpretation: "Elle met en évidence la faible mobilité sociale et le rôle des capitaux familiaux et de l'école dans le maintien de l'ordre établi (Bourdieu & Passeron).",
    exemple: "Un fils d'ouvrier qui devient lui-même ouvrier, ou un enfant de cadre supérieur qui intègre une école d'ingénieurs.",
    pointsCles: ["Maintien des positions sociales", "Héritage des capitaux", "Opposition à la méritocratie pure"]
  },
  {
    id: "mobilite-sociale",
    terme: "Mobilité sociale",
    categorie: "Sociologie",
    definition: "Changement de position sociale d'un individu par rapport à celle de ses parents (mobilité intergénérationnelle) ou au cours de sa propre vie (intragénérationnelle).",
    interpretation: "Elle est mesurée à l'aide des tables de mobilité de l'Insee pour évaluer la perméabilité de la société.",
    exemple: "Une fille d'agriculteur devenant professeure certifiée de sciences économiques et sociales.",
    pointsCles: ["Intergénérationnelle vs Intragénérationnelle", "Mesurée par l'Insee", "Indicateur d'ouverture de la société"]
  },
  {
    id: "mobilite-ascendante",
    terme: "Mobilité sociale ascendante",
    sigle: "Promotion sociale",
    categorie: "Sociologie",
    definition: "Trajectoire d'un individu accédant à une position sociale plus élevée dans la hiérarchie sociale que celle de ses parents.",
    interpretation: "Synonyme de promotion sociale, elle est favorisée par la démocratisation scolaire et la tertiarisation de l'économie.",
    exemple: "Le fils d'un employé non qualifié devenant médecin ou magistrat.",
    pointsCles: ["Élévation dans la hiérarchie", "Promotion sociale", "Rôle du diplôme et de la structure des emplois"]
  },
  {
    id: "mobilite-descendante",
    terme: "Mobilité sociale descendante",
    sigle: "Déclassement social",
    categorie: "Sociologie",
    definition: "Trajectoire d'un individu occupant une position sociale inférieure à celle de ses parents.",
    interpretation: "Étudiée par Camille Peugny, elle suscite souvent un sentiment de frustration relative chez les individus concernés.",
    exemple: "L'enfant de cadres supérieurs occupant un emploi d'employé précaire.",
    pointsCles: ["Chute dans la hiérarchie", "Déclassement social", "Camille Peugny"]
  },
  {
    id: "fluidite-sociale",
    terme: "Fluidité sociale",
    sigle: "Mobilité nette / Relative",
    categorie: "Sociologie",
    definition: "Mesure des chances relatives d'accéder à une position sociale donnée pour des individus issus de milieux sociaux différents, indépendamment de l'évolution de la structure des emplois.",
    interpretation: "Mesurée par les odds ratios (rapports de chances relatives), elle évalue l'égalité réelle des chances dans une société.",
    exemple: "Calculer si les enfants de cadres ont 5 fois ou 10 fois plus de chances de devenir cadres que les enfants d'ouvriers.",
    pointsCles: ["Indépendante de la structure des emplois", "Mesurée par les odds ratios", "Véritable mesure de l'égalité des chances"]
  },
  {
    id: "taux-interet-nominal",
    terme: "Taux d'intérêt nominal",
    categorie: "Finance",
    definition: "Taux d'intérêt affiché et stipulé dans un contrat de prêt ou d'épargne, sans correction de l'effet de l'inflation.",
    interpretation: "Il rémunère le prêteur pour le renoncement à la liquidité et le risque de crédit, mais ne reflète pas le gain réel de pouvoir d'achat.",
    exemple: "Un crédit immobilier souscrit au taux nominal de 3,5 % par an.",
    pointsCles: ["Taux affiché au contrat", "Ne prend pas en compte l'inflation", "Diffère du taux d'intérêt réel"]
  },
  {
    id: "taux-interet-reel",
    terme: "Taux d'intérêt réel",
    categorie: "Finance",
    definition: "Taux d'intérêt corrigé de l'inflation, mesurant la variation réelle du pouvoir d'achat du capital prêté ou emprunté.",
    formule: "Taux d'intérêt réel ≈ Taux d'intérêt nominal − Taux d'inflation",
    interpretation: "Si l'inflation est supérieure au taux nominal, le taux réel est négatif : l'emprunteur s'enrichit en termes réels au détriment de l'épargnant (équation de Fisher).",
    exemple: "Avec un taux nominal de 4 % et une inflation de 3 %, le taux réel est de 1 %.",
    pointsCles: ["Équation de Fisher", "Pouvoir d'achat effectif", "Détermine le coût réel du crédit"]
  },
  {
    id: "politique-monetaire",
    terme: "Politique monétaire",
    categorie: "Finance",
    definition: "Action par laquelle la banque centrale régule la quantité de monnaie en circulation et le coût du crédit pour stabiliser les prix et soutenir l'activité économique.",
    interpretation: "Elle utilise principalement ses taux directeurs : une hausse freine l'inflation mais ralentit l'activité, une baisse stimule l'investissement et la consommation.",
    exemple: "La Banque Centrale Européenne (BCE) ajustant ses taux pour viser une cible d'inflation de 2 % à moyen terme.",
    pointsCles: ["Banque centrale (BCE)", "Taux directeurs et opérations de refinancement", "Stabilité des prix"]
  },
  {
    id: "taux-directeur",
    terme: "Taux directeur",
    categorie: "Finance",
    definition: "Taux d'intérêt fixé par la banque centrale auquel les banques commerciales peuvent lui emprunter des liquidités (monnaie banque centrale).",
    interpretation: "Le taux directeur détermine le coût des ressources pour les banques, qui le répercutent ensuite sur les taux des crédits accordés aux ménages et entreprises.",
    exemple: "Si la BCE relève son taux de refinancement à 4 %, les crédits immobiliers et d'investissement deviennent plus chers.",
    pointsCles: ["Outil principal de la politique monétaire", "Influence tous les taux du marché", "Transmis par le canal du crédit"]
  },
  {
    id: "creation-monetaire",
    terme: "Création monétaire",
    categorie: "Finance",
    definition: "Processus par lequel les banques commerciales créent de la monnaie scripturale ex-nihilo en accordant des crédits ou en achetant des actifs.",
    interpretation: "« Les crédits font les dépôts » : une banque n'a pas besoin de dépôts préalables pour prêter, elle crée la monnaie en créditant le compte de l'emprunteur.",
    exemple: "Une banque accorde un prêt de 20 000 € à un particulier : la masse monétaire en circulation augmente de 20 000 €.",
    pointsCles: ["« Les crédits font les dépôts »", "Création ex-nihilo par les banques commerciales", "Destruction lors du remboursement"]
  },
  {
    id: "masse-monetaire",
    terme: "Masse monétaire",
    categorie: "Finance",
    definition: "Quantité totale de monnaie en circulation dans une économie, regroupée en agrégats selon leur degré de liquidité (M1, M2, M3).",
    interpretation: "M1 regroupe les pièces, billets et dépôts à vue. M2 ajoute les livrets d'épargne. M3 inclut les placements monétaires à court terme.",
    exemple: "Les ménages de la zone euro détiennent plusieurs milliers de milliards d'euros en dépôts à vue (M1).",
    pointsCles: ["Agrégats M1, M2, M3", "Mesure des liquidités disponibles", "Surveillée par la banque centrale"]
  },
  {
    id: "desinflation",
    terme: "Désinflation",
    categorie: "Macroéconomie",
    definition: "Ralentissement du rythme de hausse des prix : les prix continuent d'augmenter, mais à une vitesse moins rapide qu'auparavant.",
    interpretation: "À ne jamais confondre avec la déflation : le taux d'inflation reste positif (ex : passage de 6 % à 2 % par an).",
    exemple: "Une inflation qui passe de 5,2 % en 2022 à 2,1 % en 2024 correspond à une phase de désinflation.",
    pointsCles: ["Baisse du taux d'inflation", "Les prix continuent de monter", "Diffère fondamentalement de la déflation"]
  },
  {
    id: "deflation",
    terme: "Déflation",
    categorie: "Macroéconomie",
    definition: "Baisse générale, continue et auto-entretenue du niveau général des prix et de l'activité économique.",
    interpretation: "Phénomène dangereux car les agents reportent leurs achats en attendant des prix plus bas, ce qui plonge l'économie dans la récession et alourdit la dette réelle.",
    exemple: "La grande crise des années 1930 aux États-Unis ou la longue stagnation japonaise des années 1990-2000.",
    pointsCles: ["Baisse généralisée des prix", "Taux d'inflation négatif", "Spirale déflationniste redoutable"]
  },
  {
    id: "stagflation",
    terme: "Stagflation",
    categorie: "Macroéconomie",
    definition: "Situation économique conjuguant simultanément une stagnation de l'activité économique (faible croissance et chômage élevé) et une forte inflation.",
    interpretation: "Apparue lors des chocs pétroliers des années 1970, elle invalide temporairement la courbe de Phillips et complique les politiques économiques.",
    exemple: "L'économie des pays occidentaux entre 1973 et 1979 après le premier choc pétrolier.",
    pointsCles: ["Stagnation + Inflation", "Chocs d'offre négatifs", "Dilemme pour les banques centrales"]
  },
  {
    id: "pouvoir-achat",
    terme: "Pouvoir d'achat",
    categorie: "Revenus",
    definition: "Quantité de biens et de services qu'un ménage peut acquérir grâce à son revenu disponible, compte tenu du niveau des prix.",
    formule: "Évolution du pouvoir d'achat ≈ Évolution du revenu disponible − Taux d'inflation",
    interpretation: "Si les revenus augmentent de 3 % alors que l'inflation est de 5 %, le pouvoir d'achat diminue d'environ 2 %.",
    exemple: "Un ménage disposant de 2 500 € par mois voit son pouvoir d'achat augmenter si son salaire progresse plus vite que l'indice des prix à la consommation.",
    pointsCles: ["Rapport entre revenus et prix", "Mesure du niveau de vie réel", "Calculé par l'Insee"]
  },
  {
    id: "paradoxe-olson",
    terme: "Paradoxe d'Olson",
    sigle: "Passager clandestin / Free rider",
    categorie: "Science politique",
    definition: "Paradoxe selon lequel un individu rationnel a intérêt à ne pas participer à une action collective tout en espérant bénéficier des retombées positives de celle-ci si d'autres se mobilisent.",
    interpretation: "Forgé par Mancur Olson (1965), il explique pourquoi les groupes nombreux ont du mal à se mobiliser sans incitations sélectives ou contraintes.",
    exemple: "Un salarié qui ne fait pas grève (ne perd pas de salaire) mais profite des augmentations obtenues par les syndicats grévistes.",
    pointsCles: ["Mancur Olson (1965)", "Comportement de passager clandestin", "Résolu par les incitations sélectives"]
  },
  {
    id: "incitations-selectives",
    terme: "Incitations sélectives",
    categorie: "Science politique",
    definition: "Mécanismes par lesquels une organisation réserve des avantages matériels, juridiques ou financiers uniquement à ses membres actifs pour surmonter le paradoxe d'Olson.",
    interpretation: "Elles récompensent les participants et pénalisent les passagers clandestins.",
    exemple: "Une caisse de grève qui indemnise uniquement les adhérents syndiqués ou l'accès exclusif à des services juridiques.",
    pointsCles: ["Réponse au passager clandestin", "Avantages réservés aux membres", "Mancur Olson"]
  },
  {
    id: "retributions-symboliques",
    terme: "Rétributions symboliques",
    categorie: "Science politique",
    definition: "Récompenses non matérielles (prestige social, sentiment d'utilité, liens d'amitié, valorisation de soi) retirées par les individus de leur engagement militant.",
    interpretation: "Concept forgé par Daniel Gaxie pour expliquer pourquoi les individus s'engagent même sans gain financier immédiat.",
    exemple: "La fierté de militer pour une cause écologique, la reconnaissance par ses pairs au sein d'une association caritative.",
    pointsCles: ["Daniel Gaxie", "Gains moraux et sociaux de l'engagement", "Complément aux incitations matérielles"]
  },
  {
    id: "volatilite-electorale",
    terme: "Volatilité électorale",
    categorie: "Science politique",
    definition: "Tendance des électeurs à modifier leur comportement électoral d'un scrutin à l'autre (changement de parti ou alternance entre vote et abstention).",
    interpretation: "Elle traduit l'affaiblissement des loyautés partisanes traditionnelles et l'essor de l'électeur rationnel ou intermittent.",
    exemple: "Un électeur votant pour un parti écologiste aux européennes, puis pour un parti centriste à la présidentielle, ou s'abstenant aux législatives.",
    pointsCles: ["Instabilité du vote", "Déclin des allégeances partisanes", "Électeur stratège / intermittent"]
  },

  // ================================================================
  // FINANCE
  // ================================================================
  {
    id: "marche-financier",
    terme: "Marché financier",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Lieu (réel ou virtuel) où s'échangent des titres financiers (actions, obligations) entre agents à besoin et à capacité de financement.",
    interpretation: "Il assure la transformation de l'épargne en investissement à long terme et permet aux entreprises de se financer sans recourir uniquement au crédit bancaire.",
    exemple: "Euronext Paris est la bourse où les grandes entreprises françaises (TotalEnergies, LVMH) lèvent des capitaux en émettant des actions.",
    pointsCles: ["Financement direct", "Cotation des titres", "Rôle d'allocation de l'épargne"]
  },
  {
    id: "action",
    terme: "Action",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Titre de propriété représentant une part du capital d'une société et donnant droit à un dividende et à une voix aux assemblées générales.",
    interpretation: "L'actionnaire est copropriétaire de l'entreprise ; il assume le risque de perte en capital en contrepartie d'un rendement potentiellement élevé.",
    exemple: "Acheter une action Apple, c'est devenir copropriétaire à hauteur de sa part du capital de la société.",
    pointsCles: ["Titre de propriété", "Dividende", "Droit de vote", "Risque de marché"]
  },
  {
    id: "obligation",
    terme: "Obligation",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Titre de créance émis par une entreprise ou l'État donnant droit à un remboursement du capital et au versement d'intérêts (coupon) à échéance fixe.",
    interpretation: "Moins risquée qu'une action, l'obligation est un instrument de dette : le porteur est créancier et non propriétaire.",
    exemple: "L'État français émet des OAT (Obligations Assimilables du Trésor) pour financer son déficit ; les investisseurs perçoivent un coupon annuel fixe.",
    pointsCles: ["Titre de créance", "Coupon (intérêt)", "Remboursement à l'échéance", "Risque plus faible que l'action"]
  },
  {
    id: "dividende",
    terme: "Dividende",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Part du bénéfice net distribuée aux actionnaires en rémunération de leur apport en capital, décidée en assemblée générale.",
    interpretation: "Le dividende est un revenu du capital ; la politique de distribution influence l'attractivité du titre en bourse.",
    exemple: "TotalEnergies verse un dividende trimestriel : un actionnaire possédant 100 actions perçoit un revenu régulier sans vendre ses titres.",
    pointsCles: ["Revenu du capital", "Distribution du bénéfice", "Décision en AG", "À distinguer de la plus-value"]
  },
  {
    id: "plus-value-financiere",
    terme: "Plus-value financière",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Gain réalisé lors de la cession d'un actif financier (action, obligation) correspondant à la différence positive entre le prix de vente et le prix d'achat.",
    formule: "Plus-value = Prix de vente − Prix d'achat",
    interpretation: "Elle constitue un revenu du patrimoine et est soumise à la flat tax de 30 % (PFU) en France depuis 2018.",
    exemple: "Un investisseur achète une action 40 € et la revend 55 € : il réalise une plus-value de 15 €.",
    pointsCles: ["Gain en capital", "Flat tax 30 % (PFU)", "À distinguer du dividende"]
  },
  {
    id: "taux-interet",
    terme: "Taux d'intérêt",
    sigle: "i",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Prix du crédit, exprimé en pourcentage du capital emprunté par unité de temps, rémunérant le prêteur pour le service rendu et le risque supporté.",
    formule: "Taux réel ≈ Taux nominal − Taux d'inflation (équation de Fisher)",
    interpretation: "Un taux élevé freine l'investissement et la consommation à crédit ; un taux bas stimule l'économie mais peut alimenter des bulles.",
    exemple: "Un emprunt immobilier à taux fixe de 3,5 % sur 20 ans : l'emprunteur rembourse le capital augmenté des intérêts calculés à ce taux.",
    pointsCles: ["Prix du crédit", "Taux nominal vs réel", "Instrument de politique monétaire"]
  },
  {
    id: "bulle-speculative",
    terme: "Bulle spéculative",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Écart durable et auto-entretenu entre le prix de marché d'un actif et sa valeur fondamentale, alimenté par des anticipations haussières.",
    interpretation: "Lorsque la bulle éclate, les prix chutent brutalement, provoquant des pertes patrimoniales massives et souvent une crise financière systémique.",
    exemple: "La bulle internet des années 2000 (dot-com crash) : des start-up sans bénéfices étaient valorisées en milliards avant l'effondrement des cours.",
    pointsCles: ["Surévaluation des actifs", "Anticipations auto-réalisatrices", "Risque systémique", "Krach lors du retournement"]
  },
  {
    id: "krach-boursier",
    terme: "Krach boursier",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Chute soudaine et massive des cours boursiers, généralement d'au moins 20 % en quelques jours, provoquée par un mouvement de panique vendeur.",
    interpretation: "Il amplifie les effets de la crise financière via l'effet de richesse négatif (perte de patrimoine → baisse de la consommation et de l'investissement).",
    exemple: "Le krach de 1929 (Black Thursday) a vu l'indice Dow Jones perdre 90 % de sa valeur entre 1929 et 1932, plongeant l'économie mondiale en Grande Dépression.",
    pointsCles: ["Effondrement des cours", "Effet de richesse négatif", "Contagion économique"]
  },
  {
    id: "risque-systemique",
    terme: "Risque systémique",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Risque que la défaillance d'un ou plusieurs acteurs financiers provoque une crise généralisée de l'ensemble du système financier (effet domino).",
    interpretation: "L'interconnexion des banques (interbancaire) signifie que la faillite de l'une peut déclencher une cascade de défaillances : c'est l'effet 'too big to fail'.",
    exemple: "La faillite de Lehman Brothers en 2008 a déclenché un gel total du crédit interbancaire mondial, illustrant le risque systémique.",
    pointsCles: ["Effet domino", "Interconnexion financière", "Too big to fail", "Prêteur en dernier ressort"]
  },
  {
    id: "titrisation",
    terme: "Titrisation",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Technique financière consistant à regrouper des créances dans un véhicule ad hoc qui émet des titres vendus aux investisseurs, permettant aux banques de sortir des risques de leur bilan.",
    interpretation: "Elle diffuse le risque de crédit à l'ensemble des marchés financiers mais peut opacifier le risque total supporté par le système (crise des subprimes).",
    exemple: "Les MBS (Mortgage-Backed Securities) regroupaient des prêts hypothécaires américains ; leur effondrement en 2007-2008 a déclenché la crise des subprimes.",
    pointsCles: ["Transfert du risque", "Hors bilan bancaire", "Crise des subprimes", "Régulation prudentielle"]
  },
  {
    id: "effet-levier",
    terme: "Effet de levier",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Mécanisme par lequel l'endettement amplifie la rentabilité des capitaux propres quand le taux de rendement économique est supérieur au coût de la dette.",
    formule: "Rentabilité CP = Rentabilité éco + (Rent. éco − Coût dette) × Dettes / CP",
    interpretation: "L'effet de levier est positif en croissance mais se retourne violemment en cas de choc économique (effet de massue).",
    exemple: "Un fonds investit 10 M€ en fonds propres et emprunte 90 M€ : si le projet rapporte 10 %, la rentabilité des fonds propres est démultipliée (avant intérêts).",
    pointsCles: ["Amplification par la dette", "Retournement en récession", "LBO", "Risque financier"]
  },
  {
    id: "taux-change",
    terme: "Taux de change",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Prix d'une monnaie exprimé en unités d'une autre monnaie, déterminé sur le marché des changes (Forex).",
    interpretation: "Une appréciation du taux de change rend les exportations plus chères et les importations moins chères ; c'est l'inverse pour une dépréciation.",
    exemple: "Si 1 € = 1,10 $, une voiture française vendue 30 000 € coûte 33 000 $ aux États-Unis. Si l'euro monte à 1,20 $, elle vaut 36 000 $, ce qui pénalise les exportateurs.",
    pointsCles: ["Compétitivité prix", "Appréciation / dépréciation", "Marché des changes (Forex)"]
  },
  {
    id: "marche-changes",
    terme: "Marché des changes",
    sigle: "Forex",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Marché mondial décentralisé sur lequel s'échangent les devises 24h/24, avec un volume de transactions d'environ 7 500 milliards de dollars par jour (BRI 2022).",
    interpretation: "Les taux de change fluctuent en fonction des flux commerciaux, des différentiels de taux d'intérêt et des anticipations des acteurs financiers.",
    exemple: "La BCE intervient parfois sur le Forex pour éviter une appréciation excessive de l'euro préjudiciable aux exportateurs de la zone euro.",
    pointsCles: ["Plus grand marché mondial", "Change flottant", "Spéculation et arbitrage"]
  },
  {
    id: "intermediation-financiere",
    terme: "Intermédiation financière",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Fonction des banques consistant à collecter l'épargne des agents à capacité de financement pour la prêter aux agents à besoin de financement, en transformant les échéances.",
    interpretation: "L'intermédiaire financier supporte le risque de crédit et le risque de taux en cas de mismatch entre la durée des dépôts et des prêts.",
    exemple: "La Caisse d'Épargne collecte les dépôts à vue de ses clients (court terme) et accorde des crédits immobiliers sur 20 ans (long terme).",
    pointsCles: ["Collecte de l'épargne", "Transformation d'échéances", "Financement indirect"]
  },
  {
    id: "financement-direct",
    terme: "Financement direct (désintermédiation)",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Mode de financement dans lequel les agents à besoin de financement se procurent des ressources directement auprès des épargnants via les marchés financiers, sans intermédiaire bancaire.",
    interpretation: "Le financement direct a progressé depuis la déréglementation financière des années 1980 (règle des 3D : Déréglementation, Désintermédiation, Décloisonnement).",
    exemple: "TotalEnergies émet des obligations sur le marché obligataire pour lever 2 milliards d'euros directement auprès de fonds de pension.",
    pointsCles: ["Marché financier", "Règle des 3D", "Financement sans banque"]
  },
  {
    id: "autofinancement",
    terme: "Autofinancement",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Financement de l'investissement par les ressources propres générées par l'activité de l'entreprise (bénéfices mis en réserve et dotations aux amortissements).",
    formule: "CAF ≈ Résultat net + Dotations aux amortissements",
    interpretation: "L'autofinancement évite la dépendance vis-à-vis des créanciers et des actionnaires, mais limite le recours au levier financier.",
    exemple: "Une PME dégage 200 000 € de bénéfice net et ne distribue pas de dividende, gardant ces fonds pour acheter une nouvelle machine.",
    pointsCles: ["Ressources internes", "Indépendance financière", "Bénéfices mis en réserve"]
  },
  {
    id: "politique-monetaire",
    terme: "Politique monétaire",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Ensemble des décisions prises par la banque centrale visant à influencer la masse monétaire et les taux d'intérêt directeurs pour atteindre ses objectifs (stabilité des prix, soutien à la croissance).",
    interpretation: "La BCE cible une inflation proche de 2 % ; elle utilise le taux directeur et des outils non conventionnels (QE) pour y parvenir.",
    exemple: "Face à une inflation de 10 % en 2022, la BCE a relevé ses taux directeurs de 0 % à 4,5 % pour freiner le crédit et la demande.",
    pointsCles: ["Taux directeurs", "Stabilité des prix", "BCE", "Conventionnel vs non conventionnel"]
  },
  {
    id: "quantitative-easing",
    terme: "Assouplissement quantitatif",
    sigle: "QE",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Politique monétaire non conventionnelle consistant pour la banque centrale à acheter massivement des actifs financiers pour injecter des liquidités et faire baisser les taux longs.",
    interpretation: "Le QE est utilisé quand les taux directeurs ont atteint leur plancher zéro (Zero Lower Bound) et que la politique conventionnelle est inefficace.",
    exemple: "La BCE a acheté plus de 3 000 milliards d'euros d'obligations entre 2015 et 2022 (programme PSPP) pour relancer une inflation trop basse.",
    pointsCles: ["Outil non conventionnel", "Création monétaire", "Taux plancher zéro", "Trappe à liquidité"]
  },
  {
    id: "trappe-liquidite",
    terme: "Trappe à liquidité",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Situation dans laquelle les taux d'intérêt sont si bas que les agents préfèrent détenir de la monnaie liquide plutôt que des actifs financiers, rendant la politique monétaire expansive inefficace.",
    interpretation: "Décrite par Keynes, la trappe à liquidité justifie le recours à la politique budgétaire pour relancer la demande.",
    exemple: "Au Japon des années 1990-2000, les taux proches de zéro n'ont pas relancé l'investissement car les entreprises anticipaient une stagnation prolongée.",
    pointsCles: ["Inefficacité de la monnaie", "Taux zéro", "Keynes", "Justification de la relance budgétaire"]
  },
  {
    id: "oat",
    terme: "Obligations assimilables du Trésor",
    sigle: "OAT",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Titres de dette souveraine émis par l'État français sur les marchés financiers pour financer son déficit budgétaire, avec une durée allant généralement de 2 à 50 ans.",
    interpretation: "Le taux des OAT à 10 ans est la référence du financement de l'État : une hausse de ce taux augmente la charge de la dette et contraint les marges de manœuvre budgétaires.",
    exemple: "En 2024, la France emprunte à environ 3,5 % sur 10 ans via des OAT ; si ce taux monte à 5 %, le coût de la dette publique augmente de plusieurs milliards d'euros.",
    pointsCles: ["Dette souveraine française", "Taux de référence à 10 ans", "Charge de la dette", "Agences de notation"]
  },
  {
    id: "spread",
    terme: "Spread (prime de risque souverain)",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Écart entre le taux d'intérêt exigé par les marchés pour financer un État et le taux de référence considéré sans risque (généralement l'OAT allemande à 10 ans — Bund).",
    interpretation: "Un spread élevé signale que les marchés jugent l'État plus risqué : c'est un signal de méfiance sur la soutenabilité de la dette publique.",
    exemple: "En 2012, le spread grec atteignait 3 500 points de base (35 % d'écart avec l'Allemagne), indiquant un risque de défaut quasi certain.",
    pointsCles: ["Prime de risque", "Écart avec le Bund allemand", "Crise des dettes souveraines", "Signal de marché"]
  },
  {
    id: "fonds-propres",
    terme: "Fonds propres (capitaux propres)",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Ressources appartenant aux actionnaires : capital apporté à la création, bénéfices mis en réserve et résultats non distribués, représentant la richesse nette de l'entreprise.",
    formule: "Fonds propres = Actif total − Dettes totales",
    interpretation: "Ils constituent le coussin d'absorption des pertes ; les exigences en fonds propres bancaires (Bâle III : ratio CET1 ≥ 4,5 %) visent à prévenir les crises systémiques.",
    exemple: "BNP Paribas doit maintenir un ratio de fonds propres d'au moins 11-13 % de ses actifs pondérés du risque pour satisfaire aux exigences réglementaires de Bâle III.",
    pointsCles: ["Actif − Dettes", "Coussin d'absorption", "Ratio Bâle III", "Exigences prudentielles"]
  },

  // ================================================================
  // FINANCES PUBLIQUES
  // ================================================================
  {
    id: "budget-etat",
    terme: "Budget de l'État",
    categorie: "Finances publiques",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Document comptable et politique présenté en loi de finances votée par le Parlement, retraçant l'ensemble des recettes (impôts, taxes) et des dépenses prévisionnelles de l'État pour une année.",
    interpretation: "Il est l'acte principal de la politique budgétaire et incarne les priorités politiques du gouvernement.",
    exemple: "La loi de finances 2024 prévoyait environ 490 milliards d'euros de dépenses pour l'État, financées par les impôts et partiellement par le déficit public.",
    pointsCles: ["Recettes et dépenses de l'État", "Voté par le Parlement", "Instrument de politique économique"]
  },
  {
    id: "deficit-public",
    terme: "Déficit public",
    categorie: "Finances publiques",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Situation dans laquelle les dépenses publiques (État, collectivités territoriales, sécurité sociale) dépassent les recettes publiques sur une année.",
    formule: "Déficit = Recettes publiques − Dépenses publiques (résultat négatif)",
    interpretation: "Un déficit se finance par emprunt, augmentant la dette publique. Le Pacte de stabilité européen fixe un plafond de 3 % du PIB.",
    exemple: "En 2023, le déficit public français représentait 5,5 % du PIB, au-dessus de la limite du Pacte de stabilité et de croissance de l'UE.",
    pointsCles: ["Dépenses > Recettes", "3 % du PIB (Maastricht)", "Financement par emprunt"]
  },
  {
    id: "dette-publique",
    terme: "Dette publique",
    categorie: "Finances publiques",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Stock cumulé des emprunts contractés par les administrations publiques pour financer les déficits passés.",
    formule: "Dette (n) = Dette (n-1) + Déficit (n)",
    interpretation: "Elle est mesurée en % du PIB (critère de Maastricht : plafond à 60 %). Une dette élevée peut menacer la souveraineté budgétaire si les taux augmentent.",
    exemple: "La dette publique française dépasse 110 % du PIB en 2024 ; son service est devenu le premier poste de dépense de l'État.",
    pointsCles: ["Stock vs flux (déficit)", "60 % du PIB (Maastricht)", "Charge de la dette", "Soutenabilité"]
  },
  {
    id: "impot-progressif",
    terme: "Impôt progressif",
    categorie: "Finances publiques",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Impôt dont le taux marginal augmente avec la base imposable : plus les revenus sont élevés, plus la proportion prélevée est forte.",
    interpretation: "L'impôt progressif est un outil de redistribution verticale visant à réduire les inégalités de revenus. Il constitue aussi un stabilisateur automatique.",
    exemple: "L'impôt sur le revenu français comporte 5 tranches allant de 0 % à 45 % : un revenu élevé est taxé à 45 % sur la fraction excédentaire.",
    pointsCles: ["Taux marginal croissant", "Outil de redistribution", "Stabilisateur automatique", "IRPP"]
  },
  {
    id: "impot-proportionnel",
    terme: "Impôt proportionnel (flat tax)",
    categorie: "Finances publiques",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Impôt dont le taux est constant quel que soit le niveau de la base imposable.",
    interpretation: "La flat tax favorise la simplicité administrative mais est généralement jugée moins redistributive que l'impôt progressif.",
    exemple: "Le prélèvement forfaitaire unique (PFU) de 30 % sur les revenus du capital est une flat tax appliquée en France depuis 2018.",
    pointsCles: ["Taux unique", "Moins redistributif", "PFU 30 % sur les revenus du capital"]
  },
  {
    id: "stabilisateurs-automatiques",
    terme: "Stabilisateurs automatiques",
    categorie: "Finances publiques",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Mécanismes budgétaires qui atténuent automatiquement les fluctuations conjoncturelles sans décision politique discrétionnaire (hausse des allocations chômage en récession, baisse de l'IRPP).",
    interpretation: "Ils opèrent via l'effet contra-cyclique : en récession, les dépenses sociales augmentent et les recettes fiscales baissent, soutenant la demande automatiquement.",
    exemple: "Pendant la crise Covid, le nombre de chômeurs indemnisés a automatiquement augmenté, injectant des milliards dans l'économie sans vote du Parlement.",
    pointsCles: ["Automatique (sans décision)", "Contra-cyclique", "Allocations chômage + IRPP"]
  },
  {
    id: "multiplicateur-budgetaire",
    terme: "Multiplicateur budgétaire",
    categorie: "Finances publiques",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Coefficient mesurant l'effet sur le PIB d'une variation de dépenses publiques ou de recettes fiscales : un multiplicateur de 1,5 signifie qu'une hausse de G de 1 Md€ augmente le PIB de 1,5 Md€.",
    formule: "k = 1 / (1 − c(1 − t))   où c = propension marginale à consommer, t = taux d'imposition",
    interpretation: "Le multiplicateur est plus fort en récession et en économie fermée ; il peut être inférieur à 1 si l'effet d'éviction joue fortement.",
    exemple: "Le FMI a reconnu avoir sous-estimé le multiplicateur à 1,5-1,7 lors des plans d'austérité grecs de 2010-2012, aggravant la récession.",
    pointsCles: ["Effet sur le PIB", "Propension à consommer", "Effet d'éviction possible", "Multiplicateur keynésien"]
  },
  {
    id: "effet-eviction",
    terme: "Effet d'éviction",
    categorie: "Finances publiques",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Phénomène par lequel une augmentation des dépenses publiques financée par emprunt fait monter les taux d'intérêt, réduisant l'investissement privé et atténuant l'effet de relance.",
    interpretation: "L'effet d'éviction est au cœur du débat keynésien vs libéral : les libéraux estiment qu'il annule les plans de relance, les keynésiens qu'il est faible en sous-emploi.",
    exemple: "Si l'État emprunte massivement, la concurrence sur le marché obligataire fait monter les taux, renchérissant le crédit pour les entreprises.",
    pointsCles: ["Hausse des taux d'intérêt", "Réduction de l'investissement privé", "Argument contre la relance budgétaire"]
  },
  {
    id: "politique-austerite",
    terme: "Politique d'austérité",
    categorie: "Finances publiques",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Ensemble de mesures budgétaires visant à réduire le déficit public par une hausse des prélèvements obligatoires et/ou une baisse des dépenses publiques.",
    interpretation: "L'austérité peut créer un cercle vicieux si elle comprime la demande et donc la croissance, réduisant les recettes fiscales et aggravant le déficit (paradoxe de l'austérité).",
    exemple: "La Grèce (2010-2015) a appliqué une austérité sévère sous pression de la Troïka (FMI, BCE, UE), réduisant son PIB de 25 % sur la période.",
    pointsCles: ["Réduction du déficit", "Risque de récession", "Paradoxe de l'austérité", "Consolidation budgétaire"]
  },
  {
    id: "prelevements-obligatoires",
    terme: "Prélèvements obligatoires",
    sigle: "PO",
    categorie: "Finances publiques",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Ensemble des impôts, taxes et cotisations sociales versés obligatoirement par les ménages et entreprises aux administrations publiques.",
    formule: "Taux de PO = Prélèvements obligatoires / PIB × 100",
    interpretation: "La France affiche un des taux de PO les plus élevés d'Europe (environ 46 % du PIB) pour financer un État social étendu.",
    exemple: "La TVA, l'IRPP, les cotisations retraite et maladie constituent les prélèvements obligatoires payés par un salarié français.",
    pointsCles: ["Impôts + cotisations sociales", "Mesurés en % du PIB", "Financement de la protection sociale"]
  },
  {
    id: "recettes-fiscales",
    terme: "Recettes fiscales",
    categorie: "Finances publiques",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Ensemble des ressources financières perçues par l'État et les administrations publiques via les impôts directs (IRPP, IS) et indirects (TVA, TIPP) sur les revenus, bénéfices et dépenses.",
    interpretation: "La TVA est la principale source de recettes fiscales de l'État français (environ 160 Md€/an) car elle frappe toute la consommation finale.",
    exemple: "L'État perçoit la TVA à chaque étape de la chaîne de production : un consommateur achetant un téléphone à 600 € paye environ 100 € de TVA (20 %).",
    pointsCles: ["Impôts directs et indirects", "TVA principale recette", "Élasticité fiscale au PIB", "Loi de finances"]
  },
  {
    id: "solde-primaire",
    terme: "Solde primaire",
    categorie: "Finances publiques",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Solde budgétaire de l'État calculé en excluant le paiement des intérêts de la dette publique : il indique si l'État couvre ses dépenses hors intérêts par ses recettes.",
    formule: "Solde primaire = Recettes − (Dépenses − Intérêts de la dette)",
    interpretation: "Un solde primaire positif (excédent primaire) signifie que l'État peut stabiliser sa dette même si elle est très élevée, à condition que le taux d'intérêt soit proche du taux de croissance.",
    exemple: "La Grèce a réalisé un excédent primaire en 2016 malgré un déficit nominal important : sans la charge des intérêts, ses recettes dépassaient ses dépenses.",
    pointsCles: ["Hors intérêts de la dette", "Indicateur de soutenabilité", "Différent du déficit nominal", "Stabilisation de la dette"]
  },

  // ================================================================
  // COMMERCE INTERNATIONAL
  // ================================================================
  {
    id: "avantage-comparatif",
    terme: "Avantage comparatif",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Selon David Ricardo, un pays a intérêt à se spécialiser dans la production pour laquelle il a le coût d'opportunité relatif le plus faible, même s'il est moins efficace que ses partenaires dans toutes les productions.",
    interpretation: "Il démontre que le libre-échange est mutuellement bénéfique, même pour les pays les moins productifs (différence avec l'avantage absolu d'Adam Smith).",
    exemple: "Si l'Angleterre produit le drap moins cher en termes relatifs et le Portugal le vin, les deux gagnent à se spécialiser et à échanger.",
    pointsCles: ["Ricardo (1817)", "Coût d'opportunité", "Spécialisation internationale", "Libre-échange mutuellement bénéfique"]
  },
  {
    id: "avantage-absolu",
    terme: "Avantage absolu",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Selon Adam Smith, un pays dispose d'un avantage absolu s'il peut produire un bien avec moins de ressources (moins de travail) qu'un autre pays.",
    interpretation: "Moins général que l'avantage comparatif de Ricardo : un pays sans aucun avantage absolu peut quand même bénéficier du commerce international.",
    exemple: "Si la France produit du vin avec 10 heures de travail et l'Allemagne avec 15 heures, la France a un avantage absolu dans la viticulture.",
    pointsCles: ["Adam Smith (1776)", "Moins de ressources pour produire", "Moins général que le comparatif"]
  },
  {
    id: "libre-echange",
    terme: "Libre-échange",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Doctrine économique et politique commerciale prônant la suppression de toutes les barrières aux échanges internationaux (droits de douane, quotas, normes discriminatoires).",
    interpretation: "Le libre-échange favorise la spécialisation et les gains d'efficacité mais peut accentuer les inégalités et exposer les économies à la concurrence déloyale.",
    exemple: "L'OMC (1995) promeut le libre-échange via des accords de réduction tarifaire multilatéraux.",
    pointsCles: ["Suppression des barrières commerciales", "Gains de l'échange", "Risques sociaux", "OMC"]
  },
  {
    id: "protectionnisme",
    terme: "Protectionnisme",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Politique commerciale visant à protéger les producteurs nationaux de la concurrence étrangère par des droits de douane, quotas d'importation, subventions à l'exportation ou normes techniques.",
    interpretation: "Il peut être justifié pour protéger les industries naissantes ou les emplois, mais risque de provoquer des guerres commerciales et des inefficacités.",
    exemple: "Les droits de douane américains de 25 % sur l'acier importé en 2018 ont suscité des représailles commerciales chinoises et européennes.",
    pointsCles: ["Droits de douane", "Quotas", "Industries naissantes", "Risque de guerre commerciale"]
  },
  {
    id: "dumping",
    terme: "Dumping",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Pratique commerciale déloyale consistant à exporter un bien à un prix inférieur à son coût de production ou à son prix sur le marché intérieur, visant à conquérir des parts de marché étrangères.",
    interpretation: "Le dumping peut être social (bas salaires), fiscal (paradis fiscaux) ou monétaire (dévaluation compétitive) ; il est condamnable par l'OMC.",
    exemple: "Des producteurs chinois de panneaux solaires vendus sous le coût de revient en Europe ont fait l'objet d'une enquête antidumping de la Commission européenne.",
    pointsCles: ["Prix < coût de production", "Pratique déloyale", "Droits antidumping", "OMC"]
  },
  {
    id: "balance-commerciale",
    terme: "Balance commerciale",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Document comptable enregistrant la différence entre la valeur des exportations et des importations de biens d'un pays sur une période donnée.",
    formule: "Solde commercial = Exportations − Importations (de biens)",
    interpretation: "Un excédent signifie que le pays vend plus qu'il n'achète à l'étranger. Elle ne comprend pas les services (voir balance des paiements).",
    exemple: "L'Allemagne affiche structurellement un excédent commercial, tandis que la France est en déficit commercial depuis 2004.",
    pointsCles: ["Exportations − Importations", "Biens uniquement", "Excédent / Déficit commercial"]
  },
  {
    id: "balance-paiements",
    terme: "Balance des paiements",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Document statistique enregistrant l'ensemble des flux économiques (biens, services, revenus, transferts, capitaux) entre les résidents d'un pays et le reste du monde sur une année.",
    interpretation: "Elle est toujours équilibrée en comptabilité ; un déficit du compte courant est compensé par un excédent du compte financier (entrées de capitaux).",
    exemple: "Si la France importe plus qu'elle n'exporte, elle doit attirer des capitaux étrangers (IDE, achats d'obligations) pour financer ce déficit.",
    pointsCles: ["Compte courant + compte financier", "Toujours équilibrée", "Flux résidents / non-résidents"]
  },
  {
    id: "delocalisations",
    terme: "Délocalisations",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Transfert de tout ou partie d'une activité productive vers un pays étranger où les coûts (surtout salariaux) sont plus bas, tout en réimportant la production dans le pays d'origine.",
    interpretation: "Elles créent des emplois dans les pays d'accueil mais en détruisent dans les pays d'origine ; elles participent au processus de désindustrialisation des économies avancées.",
    exemple: "Renault a délocalisé une partie de la production de la Sandero en Roumanie pour réduire les coûts de main-d'œuvre et maintenir un prix compétitif.",
    pointsCles: ["Arbitrage sur les coûts salariaux", "Désindustrialisation", "IDE vers les pays à bas salaires"]
  },
  {
    id: "chaines-valeur-mondiales",
    terme: "Chaînes de valeur mondiales",
    sigle: "CVM",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Fragmentation internationale du processus de production : chaque étape (R&D, fabrication, assemblage, distribution) est réalisée dans le pays offrant le meilleur avantage comparatif.",
    interpretation: "Elles reflètent le commerce de tâches plutôt que le commerce de produits finis ; leur vulnérabilité a été révélée par la crise Covid (pénurie de semi-conducteurs).",
    exemple: "Un iPhone est conçu aux États-Unis, fabriqué avec des composants japonais et coréens, assemblé en Chine et vendu dans le monde entier.",
    pointsCles: ["Fragmentation de la production", "Commerce de tâches", "Spécialisation par étape", "Risque de rupture"]
  },
  {
    id: "ide",
    terme: "Investissements directs à l'étranger",
    sigle: "IDE",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Investissements réalisés par des entreprises résidentes dans des entreprises étrangères avec l'intention d'exercer une influence durable sur leur gestion (seuil conventionnel : 10 % du capital).",
    interpretation: "Ils diffèrent des investissements de portefeuille (spéculatifs) car ils impliquent un contrôle stratégique ; ils transfèrent aussi savoir-faire et technologies.",
    exemple: "Toyota a investi massivement en France (usine de Valenciennes) pour produire directement dans la zone euro et éviter les droits de douane.",
    pointsCles: ["10 % du capital minimum", "Contrôle durable", "Transfert de technologie"]
  },
  {
    id: "mondialisation",
    terme: "Mondialisation",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Processus d'intégration croissante des économies nationales par la libre circulation des biens, services, capitaux et, dans une moindre mesure, des personnes à l'échelle planétaire.",
    interpretation: "Elle produit des gains d'efficacité et accroît le niveau de vie moyen mais peut creuser les inégalités entre et au sein des nations.",
    exemple: "Le commerce mondial de marchandises a été multiplié par 30 depuis les années 1970, sous l'effet de la baisse des coûts de transport et des droits de douane.",
    pointsCles: ["Intégration des marchés", "Gains d'efficacité", "Inégalités", "OMC / GATT"]
  },

  // ================================================================
  // CONCURRENCE
  // ================================================================
  {
    id: "monopole",
    terme: "Monopole",
    categorie: "Concurrence",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Structure de marché dans laquelle un seul offreur fait face à de nombreux demandeurs, lui conférant un pouvoir de marché lui permettant de fixer le prix au-dessus du coût marginal.",
    interpretation: "Le monopole génère une perte sèche sociale (deadweight loss) car la production est inférieure à l'optimum concurrentiel ; il peut être naturel ou légal.",
    exemple: "La SNCF est un monopole légal sur les grandes lignes françaises ; EDF l'était pour l'électricité jusqu'en 2007.",
    pointsCles: ["Un seul offreur", "Pouvoir de marché", "Perte sèche sociale", "Monopole naturel / légal"]
  },
  {
    id: "oligopole",
    terme: "Oligopole",
    categorie: "Concurrence",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Structure de marché caractérisée par un petit nombre de vendeurs détenant ensemble une part importante du marché, avec interdépendance stratégique entre eux.",
    interpretation: "Les oligopoleurs peuvent être tentés de s'entendre (cartel) ou de s'engager dans une guerre des prix (concurrence à la Bertrand).",
    exemple: "Le marché français de la téléphonie mobile est un oligopole : Orange, SFR, Bouygues et Free se partagent plus de 95 % des abonnés.",
    pointsCles: ["Peu d'offreurs", "Interdépendance stratégique", "Risque de collusion", "Jeux non coopératifs"]
  },
  {
    id: "cartel",
    terme: "Cartel",
    categorie: "Concurrence",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Accord explicite ou tacite entre des entreprises concurrentes pour fixer les prix, partager les marchés ou limiter la production, en violation du droit de la concurrence.",
    interpretation: "Le cartel permet aux membres de se comporter collectivement comme un monopole, mais il est instable car chaque membre a intérêt à tricher (dilemme du prisonnier).",
    exemple: "L'OPEP fonctionne comme un cartel : ses membres s'accordent sur des quotas de production pétrolière pour maintenir des prix élevés.",
    pointsCles: ["Entente illicite", "Fixation des prix", "Autorité de la concurrence", "Dilemme du prisonnier"]
  },
  {
    id: "concurrence-monopolistique",
    terme: "Concurrence monopolistique",
    categorie: "Concurrence",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Structure de marché avec de nombreuses entreprises vendant des produits différenciés substituables imparfaitement, donnant à chacune un certain pouvoir de marché sur sa variété.",
    interpretation: "La différenciation peut être horizontale (goût, design) ou verticale (qualité) ; elle permet de pratiquer un prix légèrement supérieur au coût marginal.",
    exemple: "Le marché de la restauration rapide ou des shampoings illustre la concurrence monopolistique : nombreuses marques, produits proches mais différenciés.",
    pointsCles: ["Différenciation des produits", "Nombreuses entreprises", "Pouvoir de marché limité", "Chamberlin / Robinson"]
  },
  {
    id: "barriere-entree",
    terme: "Barrières à l'entrée",
    categorie: "Concurrence",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Obstacles (économiques, technologiques, réglementaires, stratégiques) empêchant ou rendant très coûteuse l'entrée de nouveaux concurrents sur un marché.",
    interpretation: "Elles permettent aux firmes en place de maintenir un pouvoir de marché et un profit supérieur à la normale à long terme.",
    exemple: "Le marché des moteurs d'avion est protégé par d'énormes barrières : coûts de R&D de dizaines de milliards, brevets et certifications de sécurité strictes.",
    pointsCles: ["Coûts irrécupérables (sunk costs)", "Brevets", "Économies d'échelle", "Maintien du pouvoir de marché"]
  },
  {
    id: "pouvoir-marche",
    terme: "Pouvoir de marché",
    categorie: "Concurrence",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Capacité d'une entreprise à fixer un prix supérieur à son coût marginal sans perdre l'intégralité de ses clients, mesuré par l'indice de Lerner.",
    formule: "Indice de Lerner = (P − Cm) / P",
    interpretation: "Il est d'autant plus fort que la demande est inélastique (peu de substituts) et que les barrières à l'entrée sont élevées.",
    exemple: "Pfizer détient un fort pouvoir de marché sur un médicament sous brevet exclusif : aucun générique ne pouvant entrer, il peut maintenir un prix très élevé.",
    pointsCles: ["Prix > Coût marginal", "Indice de Lerner", "Demande inélastique", "Barrières à l'entrée"]
  },
  {
    id: "dilemme-prisonnier",
    terme: "Dilemme du prisonnier",
    categorie: "Concurrence",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Jeu non coopératif dans lequel deux joueurs rationnels choisissent une stratégie individuellement dominante aboutissant à un équilibre sous-optimal collectivement, faute de coordination.",
    interpretation: "Il explique l'instabilité des cartels (tentation de tricherie) et justifie la régulation publique pour forcer la coopération quand le marché génère de mauvais équilibres.",
    exemple: "Deux entreprises peuvent baisser leurs prix pour gagner des parts de marché, aboutissant à une guerre des prix perdante pour les deux.",
    pointsCles: ["Équilibre de Nash sous-optimal", "Stratégie dominante", "Instabilité des cartels", "Théorie des jeux"]
  },
  {
    id: "equilibre-nash",
    terme: "Équilibre de Nash",
    categorie: "Concurrence",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Situation dans un jeu stratégique où aucun joueur n'a intérêt à modifier unilatéralement sa stratégie, étant donné la stratégie des autres joueurs.",
    interpretation: "Il peut exister des équilibres de Nash qui ne sont pas efficaces au sens de Pareto (dilemme du prisonnier) : la rationalité individuelle ne garantit pas l'optimum collectif.",
    exemple: "Dans une guerre des prix entre deux opérateurs télécom, chacun maintient des prix bas même si tous deux auraient préféré les maintenir élevés.",
    pointsCles: ["John Nash (Prix Nobel 1994)", "Aucun intérêt à dévier seul", "Peut être sous-optimal", "Théorie des jeux"]
  },
  {
    id: "monopsone",
    terme: "Monopsone",
    categorie: "Concurrence",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Structure de marché dans laquelle il n'existe qu'un seul acheteur (demandeur) face à de nombreux vendeurs, conférant à cet acheteur unique un fort pouvoir de négociation.",
    interpretation: "Le monopsone sur le marché du travail justifie théoriquement le salaire minimum : l'employeur unique peut imposer un salaire inférieur au produit marginal du travail.",
    exemple: "Dans certaines régions, un seul employeur dominant (mine, usine textile) peut fixer les salaires à la baisse, illustrant le monopsone sur le marché local du travail.",
    pointsCles: ["Un seul acheteur", "Pouvoir de négociation de l'acheteur", "Marché du travail local", "Justifie le salaire minimum"]
  },

  // ================================================================
  // DÉFAILLANCES DE MARCHÉ
  // ================================================================
  {
    id: "bien-public",
    terme: "Bien public",
    categorie: "Défaillances de marché",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Bien à la fois non rival (la consommation par un agent ne diminue pas celle des autres) et non excluable (on ne peut pas exclure quelqu'un de sa consommation sans coût prohibitif).",
    interpretation: "Le marché ne peut pas fournir efficacement les biens publics car le problème du passager clandestin empêche leur financement marchand.",
    exemple: "La défense nationale, l'éclairage public et la météorologie sont des biens publics.",
    pointsCles: ["Non rival + Non excluable", "Défaillance de marché", "Passager clandestin", "Financement par l'impôt"]
  },
  {
    id: "externalite-positive",
    terme: "Externalité positive",
    categorie: "Défaillances de marché",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Effet bénéfique non compensé par un paiement marchand qu'une activité économique procure à des tiers extérieurs à la transaction.",
    interpretation: "Elle entraîne une sous-production par rapport à l'optimum social ; cela justifie une subvention publique pour ramener la production à l'optimum.",
    exemple: "La vaccination protège aussi les non-vaccinés (immunité collective), générant un bénéfice social non payé par les bénéficiaires indirects.",
    pointsCles: ["Sous-production", "Subvention ou réglementation", "Bénéfice non rémunéré", "Immunité collective"]
  },
  {
    id: "taxe-pigouvienne",
    terme: "Taxe pigouvienne",
    categorie: "Défaillances de marché",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Taxe égale au coût marginal externe d'une activité polluante, visant à internaliser l'externalité négative en faisant payer au pollueur le coût infligé à la société.",
    interpretation: "Elle corrige le signal-prix défaillant : en augmentant le coût privé au niveau du coût social, l'entreprise réduit spontanément sa pollution.",
    exemple: "La taxe carbone fait payer aux émetteurs de CO₂ le coût de la tonne de carbone pour internaliser les dommages climatiques.",
    pointsCles: ["Arthur Cecil Pigou (1920)", "Coût = Coût marginal externe", "Internalisation", "Taxe carbone"]
  },
  {
    id: "alea-moral",
    terme: "Aléa moral",
    sigle: "AM",
    categorie: "Défaillances de marché",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Modification du comportement (plus risquée, moins prudente) d'un agent après avoir souscrit un contrat d'assurance, car il ne supporte plus entièrement les conséquences négatives de ses actes.",
    interpretation: "L'aléa moral est un problème d'information postcontractuelle ; il est atténué par la franchise, le bonus-malus ou la co-assurance.",
    exemple: "Un conducteur couvert par une assurance tous risques peut conduire plus imprudemment car l'assureur remboursera les dommages.",
    pointsCles: ["Information postcontractuelle", "Comportement risqué", "Franchise / bonus-malus", "Assurance"]
  },
  {
    id: "regulation-publique",
    terme: "Régulation publique",
    categorie: "Défaillances de marché",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Ensemble des interventions de l'État ou d'autorités indépendantes pour corriger les défaillances de marché (externalités, bien public, asymétrie d'information, position dominante).",
    interpretation: "Elle peut prendre la forme d'une réglementation, d'une taxation, d'une subvention ou d'une nationalisation. Sa légitimité est débattue (risque de capture réglementaire).",
    exemple: "L'Autorité de la concurrence française peut sanctionner les ententes anticoncurrentielles et interdire certaines fusions-acquisitions.",
    pointsCles: ["Correcteur des défaillances", "Réglementation / taxe / subvention", "Capture réglementaire", "Autorité de la concurrence"]
  },
  {
    id: "bien-commun-tragédie",
    terme: "Tragédie des communs",
    categorie: "Défaillances de marché",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Phénomène décrit par Garrett Hardin (1968) par lequel des ressources communes rivales mais non excluables sont surexploitées par des individus rationnels agissant dans leur intérêt personnel.",
    interpretation: "Elinor Ostrom (Prix Nobel 2009) a nuancé cette vision en montrant que des communautés peuvent gérer durablement les communs par des règles endogènes.",
    exemple: "La surpêche dans les eaux internationales illustre la tragédie des communs : chaque pêcheur maximise sa prise individuelle jusqu'à épuisement des stocks.",
    pointsCles: ["Garrett Hardin (1968)", "Rival + Non excluable", "Elinor Ostrom (2009)", "Surexploitation"]
  },

  // ================================================================
  // JUSTICE SOCIALE
  // ================================================================
  {
    id: "principe-difference-rawls",
    terme: "Principe de différence",
    categorie: "Justice sociale",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Principe formulé par John Rawls selon lequel les inégalités sociales et économiques ne sont justifiées que si elles profitent aux membres les plus défavorisés de la société.",
    interpretation: "Il fonde une conception libérale-égalitaire de la justice : on peut accepter des inégalités si elles créent des incitations bénéfiques à terme pour les plus pauvres.",
    exemple: "Des salaires d'ingénieurs plus élevés peuvent être justes si la dynamique d'innovation qu'ils génèrent améliore à terme le niveau de vie des plus pauvres.",
    pointsCles: ["John Rawls (1971)", "Inégalités justifiables", "Bénéfice pour les plus défavorisés", "Maximin"]
  },
  {
    id: "voile-ignorance",
    terme: "Voile d'ignorance",
    categorie: "Justice sociale",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Expérience de pensée de Rawls dans laquelle des individus choisissent les principes de justice en ignorant leur position future dans la société (sexe, origine, talents).",
    interpretation: "Derrière le voile, des individus rationnels et avers au risque choisiraient le principe de différence : protéger les plus démunis au cas où ils le deviendraient.",
    exemple: "Si vous ne saviez pas si vous naîtriez riche ou pauvre, vous choisiriez probablement un système garantissant un niveau de vie décent même aux plus défavorisés.",
    pointsCles: ["John Rawls", "Position originelle", "Aversion au risque", "Fondement du principe de différence"]
  },
  {
    id: "capabilites-sen",
    terme: "Capabilités (approche par les capacités)",
    categorie: "Justice sociale",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Concept d'Amartya Sen désignant les libertés réelles qu'un individu a de mener la vie qu'il souhaite, en tenant compte non seulement des ressources mais aussi des conditions permettant d'en faire usage.",
    interpretation: "Un revenu égal ne garantit pas les mêmes capabilités : une personne handicapée a besoin de plus de ressources pour avoir les mêmes libertés réelles.",
    exemple: "Un enfant très malade peut avoir le même revenu qu'un enfant en bonne santé mais des capabilités très inférieures pour s'éduquer.",
    pointsCles: ["Amartya Sen (Prix Nobel 1998)", "Libertés réelles", "Au-delà du revenu", "IDH inspiré de cette approche"]
  },
  {
    id: "idh",
    terme: "Indice de développement humain",
    sigle: "IDH",
    categorie: "Justice sociale",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Indicateur composite mesurant le niveau de développement humain d'un pays selon trois dimensions : longévité (espérance de vie), savoir (éducation) et niveau de vie (revenu par habitant).",
    formule: "IDH = (Indice santé × Indice éducation × Indice revenu)^(1/3)",
    interpretation: "L'IDH corrige les limites du PIB/habitant en intégrant des dimensions non monétaires du bien-être ; il a été créé par le PNUD en 1990.",
    exemple: "La Norvège affiche régulièrement l'IDH le plus élevé (>0,95), combinant haute espérance de vie, excellent système éducatif et revenu élevé.",
    pointsCles: ["PNUD (1990)", "Trois dimensions", "Au-delà du PIB", "Classement mondial des pays"]
  },
  {
    id: "discrimination",
    terme: "Discrimination",
    categorie: "Justice sociale",
    discipline: "Sociologie et science politique",
    niveau: ["Première"],
    definition: "Traitement inégal et injustifié fondé sur un critère prohibé (origine, sexe, âge, handicap, religion) entraînant un désavantage illégitime pour les personnes concernées.",
    interpretation: "La discrimination peut être directe (explicite) ou indirecte (règle neutre mais à effet défavorable disproportionné) ; elle est sanctionnée par le droit du travail et pénal.",
    exemple: "Un recruteur écartant systématiquement les CV avec un prénom d'origine étrangère pratique une discrimination directe à l'embauche.",
    pointsCles: ["Directe / Indirecte", "Critères prohibés par la loi", "Testing (méthode de mesure)", "Défenseur des droits"]
  },
  {
    id: "coefficient-gini",
    terme: "Coefficient de Gini",
    categorie: "Justice sociale",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Mesure statistique des inégalités de distribution d'un revenu ou d'une richesse, compris entre 0 (égalité parfaite) et 1 (inégalité maximale).",
    formule: "G = Aire entre la diagonale d'égalité parfaite et la courbe de Lorenz / Aire totale du triangle",
    interpretation: "Plus le Gini est proche de 1, plus les inégalités sont fortes. Il est généralement calculé avant et après redistribution.",
    exemple: "Le Gini américain (~0,39) est plus élevé que le Gini danois (~0,28), reflétant des inégalités plus marquées aux États-Unis.",
    pointsCles: ["0 = égalité parfaite", "1 = inégalité totale", "Courbe de Lorenz", "Comparaison internationale"]
  },
  {
    id: "redistribution",
    terme: "Redistribution",
    categorie: "Justice sociale",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Ensemble des mécanismes par lesquels l'État prélève des ressources (impôts, cotisations) et les réalloue (transferts, services publics) pour réduire les inégalités et protéger contre les risques sociaux.",
    interpretation: "La redistribution verticale réduit les inégalités entre revenus ; la redistribution horizontale transfère des ressources entre groupes à risques différents.",
    exemple: "Les allocations familiales, le RSA, l'impôt progressif et les soins remboursés constituent les principaux outils de redistribution en France.",
    pointsCles: ["Verticale (inégalités) / Horizontale (risques)", "Transferts et services publics", "Prélèvements obligatoires"]
  },
  {
    id: "discrimination-positive",
    terme: "Discrimination positive",
    categorie: "Justice sociale",
    discipline: "Sociologie et science politique",
    niveau: ["Première"],
    definition: "Politique visant à rétablir l'égalité des chances en accordant des avantages temporaires à des groupes sous-représentés ou historiquement désavantagés (femmes, minorités ethniques).",
    interpretation: "Controversée, elle s'oppose à la méritocratie pure (égalité formelle) pour aller vers une égalité réelle ; elle peut créer des effets de stigmatisation.",
    exemple: "Les quotas de femmes dans les conseils d'administration (loi Copé-Zimmermann, 40 %) constituent une mesure de discrimination positive visant à corriger l'inégalité de représentation.",
    pointsCles: ["Égalité réelle vs formelle", "Quotas", "Affirmative action (États-Unis)", "ZEP (éducation)"]
  },

  // ================================================================
  // ORGANISATION
  // ================================================================
  {
    id: "cout-transaction",
    terme: "Coût de transaction",
    categorie: "Organisation",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Coût lié à l'organisation d'un échange marchand : coûts de recherche d'information, de négociation, de rédaction et d'exécution des contrats, et de surveillance des partenaires.",
    interpretation: "Coase (1937) explique l'existence des firmes : internaliser une transaction dans une hiérarchie coûte moins cher que d'y recourir via le marché quand les coûts de transaction sont élevés.",
    exemple: "Embaucher un salarié peut être moins coûteux que de passer un contrat pour chaque tâche avec des free-lances sur un marché.",
    pointsCles: ["Ronald Coase (1937, Prix Nobel 1991)", "Frontières de la firme", "Make or buy", "Hiérarchie vs marché"]
  },
  {
    id: "relation-principal-agent",
    terme: "Relation principal-agent",
    categorie: "Organisation",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Cadre théorique analysant la relation entre un principal (employeur, actionnaire) qui délègue une tâche à un agent (salarié, dirigeant) dont les actions sont imparfaitement observables.",
    interpretation: "L'asymétrie d'information pousse le principal à concevoir des contrats incitatifs (prime, intéressement) pour aligner les intérêts de l'agent sur les siens.",
    exemple: "Les stock-options accordées aux PDG les rendent actionnaires de leur propre entreprise, alignant leur intérêt (hausse du cours) sur celui des actionnaires.",
    pointsCles: ["Principal / Agent", "Aléa moral intraorganisationnel", "Contrat incitatif", "Jensen & Meckling (1976)"]
  },
  {
    id: "economies-echelle",
    terme: "Économies d'échelle",
    categorie: "Organisation",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Réduction du coût unitaire moyen de production obtenue en augmentant la quantité produite, liée à la dilution des coûts fixes sur un plus grand nombre d'unités.",
    formule: "Coût moyen = Coût total / Quantité (décroissant en cas d'éco. d'échelle)",
    interpretation: "Elles constituent une barrière à l'entrée naturelle et expliquent les monopoles naturels (réseaux ferroviaires, télécommunications).",
    exemple: "Airbus peut produire un A320 avec un coût unitaire décroissant : les dépenses de R&D se diluent sur chaque avion supplémentaire.",
    pointsCles: ["Coût fixe dilué", "Seuil de rentabilité", "Monopole naturel", "Barrière à l'entrée"]
  },
  {
    id: "integration-verticale",
    terme: "Intégration verticale",
    categorie: "Organisation",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Stratégie par laquelle une entreprise internalise des étapes en amont (fournisseurs) ou en aval (distributeurs) de sa chaîne de valeur pour réduire les coûts de transaction ou sécuriser l'approvisionnement.",
    interpretation: "Elle réduit la dépendance vis-à-vis des partenaires mais alourdit la structure et peut réduire la flexibilité.",
    exemple: "Amazon est à la fois plateforme de vente, gestionnaire d'entrepôts logistiques et producteur de contenu streaming.",
    pointsCles: ["Internalisation de la chaîne de valeur", "Réduction des coûts de transaction", "Amont / Aval", "Opposé à l'externalisation"]
  },

  // ================================================================
  // TRAVAIL
  // ================================================================
  {
    id: "salaire-minimum",
    terme: "Salaire minimum interprofessionnel de croissance",
    sigle: "SMIC",
    categorie: "Travail",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Plancher légal en-dessous duquel un employeur ne peut rémunérer un salarié, fixé par l'État et revalorisé chaque 1er janvier et automatiquement en cas d'inflation supérieure à 2 %.",
    interpretation: "En théorie concurrentielle, le SMIC crée du chômage ; en pratique (monopsone), les économistes débattent de son effet (Card & Krueger 1994).",
    exemple: "En 2024, le SMIC est d'environ 11,65 €/h brut en France. Sa revalorisation automatique protège le pouvoir d'achat des travailleurs non qualifiés.",
    pointsCles: ["Plancher légal", "Revalorisation automatique à l'inflation", "Débat emploi vs pouvoir d'achat", "Card & Krueger"]
  },
  {
    id: "fordisme",
    terme: "Fordisme",
    categorie: "Travail",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Mode d'organisation industrielle fondé sur la chaîne de montage, la standardisation des produits, la parcellisation des tâches et des salaires élevés permettant aux ouvriers de consommer les produits qu'ils fabriquent.",
    interpretation: "Il a organisé la croissance des Trente Glorieuses (1945-1973) en articulant production de masse et consommation de masse.",
    exemple: "Henry Ford a introduit la chaîne de montage en 1913 à Detroit, multipliant la production de la Model T tout en doublant les salaires.",
    pointsCles: ["Taylorisme + salaires élevés", "Chaîne de montage", "Consommation de masse", "Trente Glorieuses"]
  },
  {
    id: "taylorisme",
    terme: "Taylorisme",
    categorie: "Travail",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Organisation scientifique du travail (OST) de Frederick Taylor visant à maximiser la productivité par la parcellisation des tâches, la standardisation des gestes et la séparation conception/exécution.",
    interpretation: "Le taylorisme augmente la productivité mais génère déshumanisation, maladies professionnelles et aliénation ; il est progressivement remplacé par des modes plus flexibles.",
    exemple: "Dans une usine tayloriste, un ouvrier ne fait qu'une seule opération répétitive (visser un boulon) au rythme imposé par la cadence de production.",
    pointsCles: ["Frederick W. Taylor (1911)", "OST", "Parcellisation des tâches", "One best way"]
  },
  {
    id: "taux-activite",
    terme: "Taux d'activité",
    categorie: "Travail",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Proportion de la population active (en emploi + chômeurs BIT) au sein de la population en âge de travailler (15-64 ans).",
    formule: "Taux d'activité = Population active / Population en âge de travailler × 100",
    interpretation: "Un taux d'activité élevé signifie qu'une grande part de la population participe au marché du travail ; il a fortement augmenté pour les femmes depuis les années 1960.",
    exemple: "En France, le taux d'activité des 15-64 ans est d'environ 73 % en 2023.",
    pointsCles: ["Population active / Population en âge de travailler", "En hausse pour les femmes", "Varie selon l'âge et le sexe"]
  },
  {
    id: "sous-emploi",
    terme: "Sous-emploi",
    categorie: "Travail",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Situation des personnes qui occupent un emploi mais souhaitent et sont disponibles pour travailler davantage (temps partiel subi, chômage partiel).",
    interpretation: "Le sous-emploi est un halo autour du chômage officiel (BIT) qui ne saisit pas toute l'ampleur du non-emploi.",
    exemple: "Une caissière en CDI à temps partiel (20h/semaine) qui cherche activement un temps plein est en situation de sous-emploi.",
    pointsCles: ["Temps partiel subi", "Halo du chômage", "Indicateurs larges du non-emploi"]
  },
  {
    id: "qualification",
    terme: "Qualification professionnelle",
    categorie: "Travail",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Reconnaissance institutionnelle et sociale de compétences, savoirs et savoir-faire d'un travailleur, attestée par un diplôme, un titre ou une convention collective.",
    interpretation: "La qualification permet d'accéder à des emplois du marché primaire mieux rémunérés ; elle protège contre le chômage et le déclassement professionnel.",
    exemple: "Un baccalauréat professionnel chaudronnerie qualifie son titulaire à un niveau reconnu par les grilles de salaires de la branche métallurgique.",
    pointsCles: ["Diplôme / titre / convention collective", "Marché primaire", "Protection contre le chômage", "Capital humain"]
  },
  {
    id: "precarite-emploi",
    terme: "Précarité de l'emploi",
    categorie: "Travail",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Situation d'instabilité et d'insécurité au travail caractérisée par des contrats à durée limitée (CDD, intérim, auto-entrepreneuriat subi), des faibles salaires et une faible protection sociale.",
    interpretation: "La montée de la précarité depuis les années 1980 a fragmenté le marché du travail et limité la couverture des droits sociaux pour les travailleurs atypiques.",
    exemple: "Un chauffeur Uber indépendant qui n'a pas de garantie de revenus, pas de congés payés et pas de couverture chômage est dans une situation de précarité professionnelle.",
    pointsCles: ["CDD / intérim / auto-entrepreneuriat subi", "Faible protection sociale", "Dualisme du marché du travail", "Ubérisation"]
  },

  // ================================================================
  // CROISSANCE
  // ================================================================
  {
    id: "croissance-endogene",
    terme: "Croissance endogène",
    categorie: "Croissance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Théorie selon laquelle les facteurs qui stimulent la croissance à long terme (progrès technique, capital humain, capital public) sont produits à l'intérieur même du système économique, sans rendement nécessairement décroissant.",
    interpretation: "Romer (1990) et Lucas (1988) soulignent le rôle des externalités positives du savoir et du capital humain.",
    exemple: "L'investissement dans l'enseignement supérieur génère des externalités positives qui soutiennent la croissance sans que le rendement décroisse comme pour le capital physique.",
    pointsCles: ["Romer / Lucas / Barro", "Savoir et capital humain non rivaux", "Externalités positives", "Justifie l'investissement public en R&D"]
  },
  {
    id: "destruction-creatrice",
    terme: "Destruction créatrice",
    categorie: "Croissance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Processus décrit par Schumpeter selon lequel l'innovation fait émerger de nouvelles activités et entreprises tout en détruisant les activités et emplois qui leur sont devenus obsolètes.",
    interpretation: "La destruction créatrice explique le dynamisme capitaliste : les entreprises qui n'innovent pas sont éliminées par de nouveaux entrants plus innovants.",
    exemple: "Le développement du streaming (Spotify, Netflix) a détruit le marché du CD et du DVD mais créé de nouveaux emplois dans le numérique.",
    pointsCles: ["Joseph Schumpeter (1942)", "Innovation = moteur du capitalisme", "Nouveaux marchés / vieux secteurs détruits", "Disruption"]
  },
  {
    id: "progres-technique",
    terme: "Progrès technique",
    categorie: "Croissance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Ensemble des innovations de produits et de procédés permettant de produire plus ou mieux avec les mêmes ressources, ou les mêmes biens avec moins de ressources.",
    interpretation: "Solow (1957) a montré que le progrès technique (résidu de Solow) explique la majeure partie de la croissance à long terme.",
    exemple: "L'automatisation robotisée d'une chaîne automobile permet de produire le même nombre de véhicules avec 30 % de main-d'œuvre en moins.",
    pointsCles: ["Résidu de Solow", "Innovation de produit / de procédé", "Exogène (Solow) → Endogène (Romer)", "Productivité globale des facteurs"]
  },
  {
    id: "developpement-durable",
    terme: "Développement durable",
    categorie: "Croissance",
    discipline: "Regards croisés",
    niveau: ["Première"],
    definition: "Mode de développement répondant aux besoins du présent sans compromettre la capacité des générations futures à satisfaire les leurs (rapport Brundtland, ONU, 1987).",
    interpretation: "Il articule trois piliers : économique (efficacité), social (équité) et environnemental (soutenabilité).",
    exemple: "Les énergies renouvelables permettent de maintenir un niveau de production électrique sans épuiser les ressources fossiles ni accumuler du CO₂.",
    pointsCles: ["Rapport Brundtland (1987)", "Trois piliers", "Équité intergénérationnelle", "ODD (ONU)"]
  },
  {
    id: "soutenabilite-forte",
    terme: "Soutenabilité forte",
    categorie: "Croissance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Conception du développement durable selon laquelle le capital naturel (ressources non renouvelables, biodiversité) ne peut être substitué par du capital physique ou humain.",
    interpretation: "S'oppose à la soutenabilité faible (substitution possible) ; implique une contrainte de non-dépassement des limites planétaires.",
    exemple: "La disparition d'une espèce de pollinisateur est irréversible : aucun capital humain ou physique ne peut remplacer la pollinisation.",
    pointsCles: ["Capital naturel non substituable", "Limites planétaires", "Irréversibilité", "Opposé à la soutenabilité faible"]
  },
  {
    id: "innovation",
    terme: "Innovation",
    categorie: "Croissance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Mise sur le marché d'un produit ou d'un procédé nouveau ou amélioré, ou d'une nouvelle forme d'organisation. Schumpeter distingue 5 types : produit, procédé, marché, source d'approvisionnement, organisation.",
    interpretation: "L'innovation est le moteur de la destruction créatrice : elle génère des rentes temporaires (brevet) qui incitent les entreprises à investir en R&D.",
    exemple: "L'iPhone (2007) est une innovation de produit radicale qui a créé le marché des smartphones et détruit l'industrie des téléphones classiques.",
    pointsCles: ["Schumpeter : 5 types", "Moteur de la croissance", "Rente temporaire du brevet", "Destruction créatrice"]
  },

  // ================================================================
  // REGARDS CROISÉS
  // ================================================================
  {
    id: "etat-providence",
    terme: "État-providence",
    categorie: "Regards croisés",
    discipline: "Regards croisés",
    niveau: ["Première"],
    definition: "Système dans lequel l'État garantit un niveau minimal de bien-être à tous les citoyens en organisant la protection contre les principaux risques sociaux (maladie, vieillesse, chômage, pauvreté).",
    interpretation: "Gøsta Esping-Andersen (1990) distingue trois régimes : libéral (États-Unis), conservateur-corporatiste (France/Allemagne) et social-démocrate (Scandinavie).",
    exemple: "En France, la Sécurité sociale (1945) couvre les risques maladie, retraite, famille et accidents du travail.",
    pointsCles: ["Esping-Andersen (3 régimes)", "Risques sociaux", "Bismarck (assurance) vs Beveridge (assistance)", "Crise de financement"]
  },
  {
    id: "anomie",
    terme: "Anomie",
    categorie: "Regards croisés",
    discipline: "Sociologie et science politique",
    niveau: ["Première"],
    definition: "État de dérèglement social caractérisé par l'affaiblissement ou l'inadaptation des normes collectives qui régulent les comportements individuels, décrit par Émile Durkheim.",
    interpretation: "L'anomie survient lors de transformations sociales rapides (crises économiques, mutations technologiques) qui désynchronisent aspirations individuelles et normes sociales.",
    exemple: "Durkheim a montré dans Le Suicide (1897) que le suicide anomique augmentait lors des crises économiques soudaines.",
    pointsCles: ["Émile Durkheim (1893, 1897)", "Déficit de régulation normative", "Suicide anomique", "Transformations sociales rapides"]
  },
  {
    id: "lien-social",
    terme: "Lien social",
    categorie: "Regards croisés",
    discipline: "Sociologie et science politique",
    niveau: ["Première"],
    definition: "Ensemble des relations et appartenances qui unissent les individus à une société (famille, travail, associations, religion, nation) et les protègent contre la désaffiliation et la marginalisation.",
    interpretation: "Robert Castel distingue une zone d'intégration (liens forts), une zone de vulnérabilité et une zone de désaffiliation (rupture des liens).",
    exemple: "Un retraité isolé dont les enfants vivent loin et sans activité bénévole risque une rupture du lien social pouvant mener à la solitude.",
    pointsCles: ["Robert Castel", "Zone d'intégration / vulnérabilité / désaffiliation", "Travail et famille", "Cohésion sociale"]
  },
  {
    id: "cohesion-sociale",
    terme: "Cohésion sociale",
    categorie: "Regards croisés",
    discipline: "Sociologie et science politique",
    niveau: ["Première"],
    definition: "Qualité d'une société caractérisée par des liens sociaux forts, un sentiment d'appartenance commune et un niveau faible d'inégalités et d'exclusion sociales.",
    interpretation: "La cohésion sociale est à la fois un produit de l'intégration (Durkheim) et une condition de la coopération économique (capital social de Putnam).",
    exemple: "Les pays nordiques présentent une forte cohésion sociale liée à des inégalités faibles, une haute confiance interpersonnelle et des institutions inclusives.",
    pointsCles: ["Solidarité organique / mécanique (Durkheim)", "Capital social (Putnam)", "Confiance", "Lutte contre l'exclusion"]
  },

  // ================================================================
  // MACROÉCONOMIE (compléments)
  // ================================================================
  {
    id: "pib-approche-depense",
    terme: "PIB par l'approche dépenses",
    categorie: "Macroéconomie",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Méthode de calcul du PIB par la somme des dépenses finales : consommation des ménages (C), investissement des entreprises (I), dépenses publiques (G) et exportations nettes (X − M).",
    formule: "PIB = C + I + G + (X − M)",
    interpretation: "Cette identité keynésienne est fondamentale pour analyser les politiques de demande : relancer C, I ou G stimule le PIB.",
    exemple: "En 2023, la consommation des ménages représente environ 55 % du PIB français, l'investissement privé 25 %, les dépenses publiques 22 %.",
    pointsCles: ["C + I + G + (X − M)", "Demande agrégée", "Identité comptable", "Approche keynésienne"]
  },
  {
    id: "recession",
    terme: "Récession",
    categorie: "Macroéconomie",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Contraction du PIB réel pendant au moins deux trimestres consécutifs ou fort ralentissement de l'activité économique accompagné d'une hausse du chômage.",
    interpretation: "Elle active les stabilisateurs automatiques et peut nécessiter une relance budgétaire discrétionnaire.",
    exemple: "La France a connu une récession historique au printemps 2020 (−13,7 % du PIB au T2), liée aux confinements Covid.",
    pointsCles: ["2 trimestres de baisse du PIB", "Stabilisateurs automatiques", "Chômage cyclique", "Creux du cycle économique"]
  },
  {
    id: "desinflation",
    terme: "Désinflation",
    categorie: "Macroéconomie",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Ralentissement du taux d'inflation (l'inflation reste positive mais diminue), à distinguer de la déflation (baisse du niveau général des prix).",
    interpretation: "La désinflation peut résulter d'une politique monétaire restrictive (hausse des taux) ou d'un choc d'offre positif.",
    exemple: "L'inflation française est passée de 6 % en 2022 à 2,5 % en 2024 : c'est une désinflation (l'inflation ralentit) mais les prix continuent de monter.",
    pointsCles: ["Inflation positive mais qui diminue", "≠ Déflation", "Politique monétaire restrictive", "Courbe de Phillips"]
  },
  {
    id: "demande-agregee",
    terme: "Demande agrégée",
    categorie: "Macroéconomie",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Somme de toutes les dépenses finales réelles dans une économie à un niveau de prix donné : consommation, investissement, dépenses publiques et exportations nettes.",
    interpretation: "Dans le modèle keynésien à court terme, la demande agrégée détermine le niveau de production et d'emploi.",
    exemple: "Quand le gouvernement augmente ses dépenses publiques de 10 Md€, la demande agrégée augmente directement, puis se multiplie via le multiplicateur.",
    pointsCles: ["C + I + G + XN", "Détermine l'activité à court terme (Keynes)", "Courbe à pente négative", "Politiques de demande"]
  },
  {
    id: "choc-offre",
    terme: "Choc d'offre",
    categorie: "Macroéconomie",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Modification soudaine et imprévue des conditions de production (coûts, capacités productives) affectant l'offre agrégée et l'équilibre macroéconomique.",
    interpretation: "Un choc d'offre négatif (hausse des coûts de l'énergie) provoque une stagflation (moins de croissance + plus d'inflation) ; un choc positif (baisse du pétrole) stimule l'économie.",
    exemple: "Le quadruplement du prix du pétrole en 1973 (premier choc pétrolier) est un choc d'offre négatif majeur qui a mis fin aux Trente Glorieuses.",
    pointsCles: ["Positif (favorable) / Négatif (défavorable)", "Stagflation si choc négatif", "1973-1979 (chocs pétroliers)", "Offre agrégée"]
  },

  // ================================================================
  // EXTENSION PROGRAMME : FINANCE DE MARCHÉ & BANQUES
  // ================================================================
  {
    id: "spread-taux",
    terme: "Spread de taux",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Écart de rendement (taux d'intérêt) entre deux emprunts obligataires de même maturité, généralement mesuré entre une dette souveraine jugée sûre (le Bund allemand) et un autre emprunteur plus risqué.",
    interpretation: "Le spread reflète la prime de risque exigée par les investisseurs face au risque de défaut de l'émetteur : plus le spread augmente, plus l'emprunteur subit une défiance du marché.",
    exemple: "En 2024, le spread OAT française - Bund allemand 10 ans est passé de 50 points de base (0,5 %) à plus de 80 points de base suite aux incertitudes budgétaires.",
    pointsCles: ["Écart de rendement", "Mesure de la prime de risque", "Référence : Bund allemand", "Point de base (1 pb = 0,01 %)"]
  },
  {
    id: "courbe-des-taux",
    terme: "Courbe des taux",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Représentation graphique de la relation entre le niveau des taux d'intérêt et la durée des emprunts (maturité) pour un même émetteur à un instant donné.",
    interpretation: "Normalement ascendante (les taux longs rémunèrent le risque d'illiquidité et d'inflation), une courbe plate ou inversée signale généralement une anticipation de récession économique.",
    exemple: "Une obligation d'État à 2 ans offrant 2,5 % et à 10 ans offrant 3,2 % décrit une courbe normale et positive.",
    pointsCles: ["Relation taux / maturité", "Prime de terme", "Normalement ascendante", "Indicateur macroéconomique clé"]
  },
  {
    id: "inversion-courbe-taux",
    terme: "Inversion de la courbe des taux",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Situation atypique où les taux d'intérêt à court terme deviennent supérieurs aux taux d'intérêt à long terme.",
    interpretation: "Elle traduit l'anticipation par les investisseurs d'une baisse future des taux directeurs face à une récession imminente, faisant de ce phénomène un prédicteur historique fiable des crises.",
    exemple: "Aux États-Unis en 2022-2023, le taux à 2 ans des emprunts d'État a dépassé le taux à 10 ans, annonçant un ralentissement conjoncturel marqué.",
    pointsCles: ["Taux courts > Taux longs", "Signal avancé de récession", "Attente de baisse des taux futurs", "Anomalie de marché"]
  },
  {
    id: "obligation-souveraine",
    terme: "Obligation souveraine",
    sigle: "OAT",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Titre de dette émis par un État pour financer son déficit budgétaire, assorti d'un taux d'intérêt (coupon) et d'un remboursement à échéance.",
    interpretation: "En France, les Obligations Assimilables du Trésor (OAT) constituent l'actif de référence servant d'étalon à l'ensemble du système financier.",
    exemple: "Une OAT à 10 ans émise par l'Agence France Trésor (AFT) permet à l'État d'emprunter 10 milliards d'euros auprès des investisseurs institutionnels.",
    pointsCles: ["Financement de la dette publique", "Coupon annuel", "Agence France Trésor", "Actif sans risque ou à faible risque"]
  },
  {
    id: "bon-du-tresor",
    terme: "Bon du Trésor",
    sigle: "BTF",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Titre de dette publique émis par l'État à court terme (moins d'un an) pour gérer la trésorerie quotidienne de l'administration.",
    interpretation: "Les BTF permettent à l'État de financer les décalages temporaires entre encaissements d'impôts et décaissements des dépenses publiques.",
    exemple: "L'État français émet des BTF à 3 mois pour couvrir les dépenses de fonctionnement en attendant la collecte des impôts.",
    pointsCles: ["Court terme (< 1 an)", "Gestion de trésorerie", "Intérêts précomptés", "Sécurité maximale"]
  },
  {
    id: "titrisation",
    terme: "Titrisation",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Technique financière consistant à regrouper des créances illiquides (crédits immobiliers, prêts à la consommation) pour les transformer en titres financiers négociables sur les marchés.",
    interpretation: "Elle permet aux banques de sortir des crédits de leur bilan pour prêter à nouveau, mais dissémine les risques dans le système financier (au cœur de la crise des subprimes de 2008).",
    exemple: "Une banque regroupe 5 000 crédits immobiliers dans un véhicule financier qui émet des obligations achetées par des fonds de pension.",
    pointsCles: ["Transformation de créances en titres", "Sortie du bilan bancaire", "Crise des subprimes (2008)", "Dispersion du risque de crédit"]
  },
  {
    id: "effet-levier-financier",
    terme: "Effet de levier financier",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Utilisation de l'endettement pour augmenter la rentabilité des capitaux propres d'une entreprise ou d'un investisseur.",
    interpretation: "L'effet est positif tant que le rendement économique de l'investissement dépasse le coût de la dette ; en cas de retournement, il amplifie les pertes jusqu'à la faillite.",
    exemple: "Une entreprise emprunte à 3 % pour financer un projet rapportant 7 % : le bénéfice net supplémentaire revient intégralement aux actionnaires.",
    pointsCles: ["Rentabilité des capitaux propres", "Taux de rentabilité > Coût de la dette", "Amplificateur de gains et de pertes", "Risque de surendettement"]
  },
  {
    id: "private-equity",
    terme: "Capital-investissement",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Activité financière consistant à investir dans le capital de sociétés non cotées en bourse pour financer leur développement, leur restructuration ou leur transmission.",
    interpretation: "Ce mode de financement direct offre des capitaux patients en contrepartie d'une participation active aux décisions stratégiques de l'entreprise.",
    exemple: "Un fonds de capital-investissement apporte 20 M€ à une PME familiale industrielle pour lui permettre d'ouvrir des filiales en Europe.",
    pointsCles: ["Entreprises non cotées", "Financement en fonds propres", "Accompagnement stratégique", "Horizon moyen/long terme"]
  },
  {
    id: "capital-risque",
    terme: "Capital-risque",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Segment du capital-investissement dédié au financement de jeunes entreprises innovantes (start-ups) à fort potentiel de croissance mais à risque d'échec élevé.",
    interpretation: "Indispensable au financement de l'innovation (Schumpeter), le capital-risque accepte de financer 10 projets dont 8 échoueront, pour que 1 ou 2 succès couvrent largement les pertes.",
    exemple: "Les débuts de Google, Moderna ou Doctolib ont été financés par des investisseurs en capital-risque (Venture Capital).",
    pointsCles: ["Start-ups / Jeunes pousses", "Financement de l'innovation", "Risque d'échec élevé", "Moteur de la destruction créatrice"]
  },
  {
    id: "rachat-lbo",
    terme: "Rachat avec effet de levier",
    sigle: "LBO",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Technique d'acquisition d'une entreprise financée en grande majorité par de la dette bancaire et obligataire, remboursée grâce aux flux de trésorerie de l'entreprise rachetée.",
    interpretation: "Le LBO permet à des repreneurs de racheter de grandes sociétés avec un apport personnel minime, mais fragilise l'entreprise en lui imposant un lourd service de la dette.",
    exemple: "Un fonds rachète une chaîne de magasins à 80 % par endettement, en prélevant chaque année des dividendes pour payer les échéances d'emprunt.",
    pointsCles: ["Leveraged Buy-Out", "Endettement massif", "Remboursement sur bénéfices futurs", "Risque de fragilisation de la cible"]
  },
  {
    id: "produits-derives",
    terme: "Produits dérivés",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Instruments financiers dont la valeur découle (dérive) de celle d'un actif sous-jacent (action, matière première, devise, taux d'intérêt, indice boursier).",
    interpretation: "Conçus initialement pour couvrir les risques de prix (assurance), ils sont massivement utilisés à des fins spéculatives pour démultiplier les profits.",
    exemple: "Un contrat à terme (futures) garantissant à un agriculteur de vendre son blé à 220 € la tonne dans six mois, quel que soit le cours futur.",
    pointsCles: ["Actif sous-jacent", "Instruments de couverture (hedging)", "Outils de spéculation", "Swaps, options, futures"]
  },
  {
    id: "credit-default-swap",
    terme: "Credit Default Swap",
    sigle: "CDS",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Contrat de couverture contre le risque de défaut de paiement d'un emprunteur (entreprise ou État), fonctionnant comme une police d'assurance financière.",
    interpretation: "Le prix d'un CDS sert de baromètre instantané de la solvabilité perçue d'un emprunteur : plus la prime de CDS monte, plus le marché craint la faillite.",
    exemple: "Une banque détenant 100 M€ d'obligations d'une entreprise achète un CDS pour être remboursée intégralement si l'entreprise dépose le bilan.",
    pointsCles: ["Assurance contre le défaut", "Baromètre du risque de faillite", "Rôle lors de la crise des dettes souveraines", "Dérivé de crédit"]
  },
  {
    id: "vente-a-decouvert",
    terme: "Vente à découvert",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Opération consistant à vendre un titre que l'on ne possède pas encore (en l'empruntant temporairement) dans l'espoir de le racheter plus tard à un cours inférieur.",
    interpretation: "Elle permet de spéculer sur la baisse d'une action ou d'un marché, mais comporte un risque de perte potentiellement illimité si le cours s'envole.",
    exemple: "Emprunter une action cotée 100 €, la vendre immédiatement, puis la racheter une semaine plus tard à 70 € pour la restituer : gain de 30 €.",
    pointsCles: ["Spéculation à la baisse", "Emprunt préalable de titres", "Risque asymétrique illimité", "Short selling"]
  },
  {
    id: "hedge-fund",
    terme: "Fonds spéculatif (Hedge Fund)",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Fonds d'investissement non coordonné utilisant des stratégies de placement agressives (levier d'endettement élevé, vente à découvert, dérivés) pour générer une performance absolue.",
    interpretation: "Réservés aux investisseurs fortunés et institutionnels, les hedge funds apportent de la liquidité mais peuvent amplifier les mouvements de panique boursière.",
    exemple: "Un hedge fund parie sur la baisse d'un secteur immobilier surévalué en utilisant 5 fois plus de capitaux empruntés que de fonds propres.",
    pointsCles: ["Stratégies non conventionnelles", "Fort effet de levier", "Performance décorrélée des marchés", "Risque systémique potentiel"]
  },
  {
    id: "teneur-de-marche",
    terme: "Teneur de marché (Market Maker)",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Intermédiaire financier qui s'engage en permanence à acheter et à vendre des titres financiers à des prix annoncés pour assurer la liquidité continue du marché.",
    interpretation: "Il fluidifie les échanges en garantissant qu'un vendeur trouvera toujours un acheteur, se rémunérant sur l'écart entre le prix d'achat et le prix de vente (bid-ask spread).",
    exemple: "Sur Euronext, une grande banque agit comme market maker sur les actions moyennes pour éviter les blocages de cotation.",
    pointsCles: ["Fournisseur de liquidité", "Fourchette de prix achat/vente", "Réduction de la volatilité", "Présence permanente au carnet d'ordres"]
  },
  {
    id: "collatéral",
    terme: "Collatéral (Garantie financière)",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Actif financier (généralement des obligations souveraines ou des liquidités) remis en garantie par un emprunteur pour sécuriser un prêt.",
    interpretation: "Le collatéral protège le prêteur en cas de faillite de l'emprunteur : il peut saisir et liquider le gage pour récupérer ses fonds.",
    exemple: "Pour emprunter auprès de la Banque centrale européenne, les banques commerciales doivent déposer en collatéral des obligations d'État bien notées.",
    pointsCles: ["Garantie réelle de prêt", "Atténuation du risque de crédit", "Opérations de refinancement", "Condition d'accès aux liquidités"]
  },
  {
    id: "decote-haircut",
    terme: "Décote financière (Haircut)",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Pourcentage de réduction appliqué à la valeur marchande d'un actif lorsqu'il est déposé en collatéral, afin de couvrir le risque de baisse de son cours.",
    interpretation: "Plus un actif est jugé risqué ou volatil, plus la décote est forte, ce qui oblige l'emprunteur à apporter davantage de garanties pour obtenir un même montant de crédit.",
    exemple: "Sur une obligation d'entreprise valant 100 € sur le marché avec une décote de 10 %, la banque centrale ne prêtera que 90 €.",
    pointsCles: ["Marge de sécurité du prêteur", "Variable selon la qualité du titre", "Impact direct sur le refinancement bancaire", "Resserrement des conditions de crédit"]
  },
  {
    id: "defaut-souverain",
    terme: "Défaut souverain",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Incapacité ou refus d'un État souverain d'honorer tout ou partie du remboursement de sa dette publique ou du versement des intérêts aux échéances prévues.",
    interpretation: "Un défaut entraîne une coupure immédiate de l'accès aux marchés financiers internationaux, une dévaluation de la monnaie et une crise économique prolongée.",
    exemple: "La faillite financière de l'Argentine en 2001 ou la restructuration de la dette grecque en 2012 avec une perte de plus de 50 % pour les créanciers privés.",
    pointsCles: ["Non-remboursement de la dette publique", "Restructuration de dette", "Crise de confiance majeure", "Intervention du FMI"]
  },
  {
    id: "agence-notation",
    terme: "Agence de notation financière",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Entreprise privée spécialisée (S&P, Moody's, Fitch) évaluant le risque de défaut de paiement des émetteurs de titres de dette (États, collectivités, entreprises).",
    interpretation: "Leurs notes (de AAA pour les emprunteurs les plus sûrs à C ou D pour les emprunteurs en faillite) déterminent directement le taux d'intérêt auquel les États et entreprises peuvent emprunter.",
    exemple: "Si une agence dégrade la note souveraine de la France de AA à AA-, les investisseurs peuvent exiger un taux d'intérêt légèrement supérieur.",
    pointsCles: ["Évaluation de la solvabilité", "Échelle de notation (AAA à D)", "Oligopole des 'Big Three'", "Impact direct sur le coût d'emprunt"]
  },
  {
    id: "obligation-verte",
    terme: "Obligation verte (Green Bond)",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Emprunt obligataire émis par une entreprise ou une entité publique dont les fonds levés sont exclusivement fléchés vers le financement de projets de transition écologique.",
    interpretation: "Elle permet de canaliser l'épargne privée vers la décarbonation, sous réserve d'un audit indépendant strict pour éviter le verdissement de façade (greenwashing).",
    exemple: "La France a émis son premier emprunt souverain vert ('OAT verte') pour financer le réseau ferroviaire et la recherche sur les énergies renouvelables.",
    pointsCles: ["Fléchage écologique des fonds", "Transition énergétique", "Certification indépendante", "Finance durable"]
  },
  {
    id: "quantitative-easing",
    terme: "Assouplissement quantitatif",
    sigle: "QE",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Politique monétaire non conventionnelle par laquelle une banque centrale crée massivement de la monnaie pour acheter des titres financiers (obligations d'État) sur le marché secondaire.",
    interpretation: "L'objectif est d'abaisser les taux d'intérêt à long terme, de stimuler le crédit bancaire et de relancer l'inflation lorsque les taux directeurs sont déjà proches de zéro.",
    exemple: "Entre 2015 et 2022, la BCE a racheté plus de 3 000 milliards d'euros d'obligations d'État pour éviter la déflation dans la zone euro.",
    pointsCles: ["Politique non conventionnelle", "Achats massifs de titres", "Baisse des taux longs", "Lutte contre le risque de déflation"]
  },
  {
    id: "quantitative-tightening",
    terme: "Resserrement quantitatif",
    sigle: "QT",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Processus inverse du QE où la banque centrale réduit la taille de son bilan en cessant de réinvestir les montants des obligations qui arrivent à échéance, voire en les revendant.",
    interpretation: "Cette mesure retire des liquidités excédentaires du système financier pour lutter contre une inflation trop élevée et durcir les conditions de financement.",
    exemple: "En 2023, la Réserve fédérale américaine et la BCE ont réduit leur bilan de plusieurs centaines de milliards de dollars pour freiner la surchauffe des prix.",
    pointsCles: ["Réduction du bilan de la banque centrale", "Absorption des liquidités", "Lutte contre l'inflation", "Durcissement monétaire"]
  },
  {
    id: "forward-guidance",
    terme: "Guidage prospectif",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Communication officielle par laquelle une banque centrale annonce à l'avance la trajectoire future probable de ses taux d'intérêt et de sa politique monétaire.",
    interpretation: "En ancrant les anticipations des acteurs économiques et des marchés financiers, elle réduit l'incertitude et améliore l'efficacité des décisions d'investissement.",
    exemple: "La BCE déclare que les taux resteront à leur niveau actuel 'pendant une période prolongée' pour rassurer les emprunteurs.",
    pointsCles: ["Gestion des anticipations", "Transparence de la banque centrale", "Ancrage des taux longs", "Outil de politique monétaire moderne"]
  },
  {
    id: "trappe-a-liquidite",
    terme: "Trappe à liquidité",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Situation théorique (Keynes) où le taux d'intérêt est si bas que les agents économiques préfèrent conserver toute liquidité supplémentaire sous forme d'encaisses oisives plutôt que de l'investir.",
    interpretation: "Dans cette trappe, la politique monétaire devient totalement inefficace : seule la politique budgétaire de relance par les dépenses publiques peut relancer l'activité.",
    exemple: "Le Japon durant les années 1990-2000, où des taux directeurs à 0 % n'ont pas réussi à stimuler l'investissement privé.",
    pointsCles: ["Concept keynésien", "Taux d'intérêt plancher", "Préférence absolue pour la liquidité", "Inefficacité de la politique monétaire"]
  },
  {
    id: "ratio-bale-3",
    terme: "Ratio de solvabilité (Bâle III)",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Règle prudentielle internationale obligeant les banques à détenir un montant minimal de fonds propres proportionnel au risque pondéré de leurs actifs.",
    interpretation: "Instauré après la crise de 2008, ce ratio vise à garantir que les banques disposent d'un coussin de sécurité suffisant pour absorber des pertes sans faire faillite.",
    exemple: "Une banque doit détenir au moins 8 % (voire 10,5 % avec les coussins additionnels) de fonds propres durs (CET1) face à l'ensemble de ses crédits distribués.",
    pointsCles: ["Réglementation prudentielle", "Coussin de fonds propres", "Comité de Bâle", "Prévention des crises bancaires"]
  },
  {
    id: "ratio-liquidite-lcr",
    terme: "Ratio de liquidité court terme",
    sigle: "LCR",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Norme imposant aux banques de détenir suffisamment d'actifs liquides de haute qualité pour résister à une crise de liquidité aiguë de 30 jours sans aide extérieure.",
    interpretation: "Il empêche qu'une banque solvable fasse faillite simplement parce que ses déposants retirent massivement leur argent en quelques jours.",
    exemple: "Détenir des obligations d'État et des dépôts en banque centrale immédiatement mobilisables pour faire face aux retraits des clients.",
    pointsCles: ["Liquidity Coverage Ratio", "Horizon de 30 jours", "Actifs liquides de haute qualité (HQLA)", "Protection contre le bank run"]
  },
  {
    id: "panique-bancaire",
    terme: "Panique bancaire (Bank Run)",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Mouvement de foule au cours duquel un grand nombre de déposants tentent simultanément de retirer leurs fonds d'une banque par crainte de sa faillite prochaine.",
    interpretation: "Comme les banques transforment les dépôts à court terme en crédits à long terme (fractional reserve), aucune banque ne peut rembourser tous ses déposants en même temps : la panique crée la faillite (prophétie autoréalisatrice).",
    exemple: "La faillite éclair de la Silicon Valley Bank (SVB) en mars 2023, où 42 milliards de dollars ont été retirés en une seule journée via internet.",
    pointsCles: ["Retraits massifs simultanés", "Crise d'illiquidité", "Prophétie autoréalisatrice", "Nécessité de la garantie des dépôts"]
  },
  {
    id: "preteur-dernier-ressort",
    terme: "Prêteur en dernier ressort",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Rôle joué par la banque centrale consistant à fournir des liquidités d'urgence à des banques solvables mais confrontées à une crise de liquidité, pour éviter un effondrement systémique.",
    interpretation: "Théorisé par Walter Bagehot au XIXe siècle, ce principe pose que la banque centrale doit prêter librement mais à un taux pénalisant et contre de solides garanties.",
    exemple: "Les injections massives de liquidités de la BCE et de la FED lors de la crise financière de 2008 et du choc Covid de 2020.",
    pointsCles: ["Règle de Bagehot", "Sauvetage des banques illiquides", "Stabilité du système bancaire", "Risque d'aléa moral"]
  },
  {
    id: "alea-moral-bancaire",
    terme: "Aléa moral bancaire (Too big to fail)",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Comportement d'une institution financière qui prend des risques excessifs en sachant qu'en cas de crise, l'État ou la banque centrale sera contraint de la renflouer pour éviter un krach global.",
    interpretation: "Le statut de banque systémique ('trop grande pour faire faillite') privatise les profits en période de croissance et socialise les pertes en cas de crise.",
    exemple: "Le sauvetage par l'argent public des grandes banques américaines et européennes en 2008 pour éviter la contagion mondiale.",
    pointsCles: ["Prise de risque excessive", "Protection implicite de l'État", "Socialisation des pertes", "Banques systémiques"]
  },
  {
    id: "taux-facilite-depot",
    terme: "Taux de facilité de dépôt",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Taux d'intérêt que la banque centrale verse aux banques commerciales qui placent leurs liquidités excédentaires auprès d'elle pour une durée de 24 heures.",
    interpretation: "Ce taux constitue le véritable plancher des taux d'intérêt du marché monétaire en période d'excédent de liquidité, guidant le coût du crédit pour toute l'économie.",
    exemple: "Quand la BCE relève son taux de dépôt de 0 % à 4 % entre 2022 et 2023, la rémunération des comptes bancaires et le coût des crédits augmentent mécaniquement.",
    pointsCles: ["Taux plancher de la BCE", "Rémunération des liquidités bancaires", "Pilotage du marché monétaire", "Impact direct sur l'économie"]
  },
  {
    id: "taux-refi",
    terme: "Taux de refinancement",
    sigle: "Refi",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Principal taux d'intérêt directeur de la Banque centrale européenne appliqué aux banques commerciales lorsqu'elles lui empruntent des liquidités pour une semaine.",
    interpretation: "C'est l'instrument classique de la politique monétaire : le relever renchérit le coût du crédit pour les ménages et les entreprises afin de refroidir l'inflation.",
    exemple: "Une hausse du taux Refi se traduit par une hausse des taux des crédits immobiliers proposés aux particuliers.",
    pointsCles: ["Principal taux directeur", "Opérations principales de refinancement (MRO)", "Arbitrage inflation / croissance", "Transmission à l'économie réelle"]
  },
  {
    id: "reserves-obligatoires",
    terme: "Réserves obligatoires",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Fraction minimale des dépôts de leurs clients que les banques commerciales sont légalement tenues de bloquer sur leur compte auprès de la banque centrale.",
    interpretation: "Cet instrument permet à la banque centrale d'exercer un contrôle sur la création monétaire et de réguler la demande de monnaie centrale.",
    exemple: "Dans la zone euro, le taux de réserve obligatoire est fixé à 1 % des dépôts à vue des clients.",
    pointsCles: ["Pourcentage des dépôts bloqués", "Monnaie centrale non prêtée", "Outil réglementaire de la BCE", "Stabilisation du marché interbancaire"]
  },

  // ================================================================
  // EXTENSION PROGRAMME : ÉPARGNE, REVENUS, PATRIMOINE & MONNAIE
  // ================================================================
  {
    id: "epargne-financiere",
    terme: "Épargne financière",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Part de l'épargne d'un agent économique placée dans des actifs financiers : comptes sur livret, obligations, actions, assurance-vie ou OPCVM.",
    interpretation: "Elle s'oppose à l'épargne non financière (essentiellement investie dans l'immobilier ou les biens durables) et finance directement ou indirectement les entreprises et l'État.",
    exemple: "Placer 5 000 € sur un Livret A et 3 000 € dans un plan d'épargne en actions (PEA) constitue une épargne financière.",
    pointsCles: ["Placements bancaires et boursiers", "Distinction avec l'épargne immobilière", "Financement de l'économie", "Liquidité et rendement"]
  },
  {
    id: "epargne-de-precaution",
    terme: "Épargne de précaution",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Épargne constituée par les ménages en vue de faire face à des aléas futurs imprévus (perte d'emploi, maladie, dépenses de réparation urgentes).",
    interpretation: "Elle augmente en période d'incertitude économique et de chômage élevé, ce qui peut paradoxalement freiner la consommation et aggraver un ralentissement (paradoxe de l'épargne de Keynes).",
    exemple: "Pendant les confinements de 2020, les ménages français ont accumulé plus de 100 milliards d'euros d'épargne de précaution supplémentaire.",
    pointsCles: ["Protection contre l'imprévu", "Sensible au sentiment d'incertitude", "Alimente les livrets liquides", "Composante du paradoxe de l'épargne"]
  },
  {
    id: "epargne-forcee",
    terme: "Épargne forcée",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Épargne réalisée involontairement par les agents économiques sous l'effet de contraintes réglementaires, de pénuries ou d'une hausse soudaine de l'inflation.",
    interpretation: "Elle survient par exemple lors de fermetures administratives de commerces ou par des cotisations obligatoires de retraite par capitalisation.",
    exemple: "L'impossibilité de voyager ou de fréquenter les restaurants lors des confinements sanitaires a généré une épargne forcée massive.",
    pointsCles: ["Épargne involontaire", "Consommation contrainte", "Rôle des restrictions ou de l'inflation", "Report de dépenses"]
  },
  {
    id: "taux-epargne-menages",
    terme: "Taux d'épargne des ménages",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Rapport entre le montant total de l'épargne brute des ménages et leur revenu disponible brut (RDB), exprimé en pourcentage.",
    formule: "Taux d'épargne = (Épargne / RDB) × 100",
    interpretation: "En France, ce taux est structurellement l'un des plus élevés d'Europe (autour de 15 à 17 % du revenu disponible), traduisant une forte aversion au risque.",
    exemple: "Un ménage disposant de 40 000 € de revenu annuel qui en épargne 6 800 € a un taux d'épargne de 17 %.",
    pointsCles: ["Épargne / Revenu disponible", "Structurellement ~16 % en France", "Arbitrage consommation / épargne", "Composante logement + financière"]
  },
  {
    id: "propension-marginale-epargner",
    terme: "Propension marginale à épargner",
    sigle: "PmE",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Part de chaque euro de revenu disponible supplémentaire qu'un agent économique choisit de consacrer à l'épargne plutôt qu'à la consommation.",
    formule: "PmE = ΔÉpargne / ΔRevenu = 1 − PmC",
    interpretation: "Elle est généralement plus élevée chez les ménages les plus aisés, dont les besoins fondamentaux de consommation sont déjà largement satisfaits.",
    exemple: "Si le revenu augmente de 1 000 € et que l'épargne augmente de 300 €, la propension marginale à épargner est de 0,3 (30 %).",
    pointsCles: ["Part épargnée du revenu additionnel", "Somme PmC + PmE = 1", "Plus forte chez les hauts revenus", "Concept keynésien"]
  },
  {
    id: "cycle-de-vie-modigliani",
    terme: "Théorie du cycle de vie",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Modèle économique (Franco Modigliani) montrant que les individus ajustent leur épargne tout au long de leur vie pour lisser leur niveau de consommation.",
    interpretation: "Les agents s'endettent jeunes pour s'installer, épargnent massivement durant leur vie active, puis désépargnent à la retraite pour maintenir leur niveau de vie.",
    exemple: "Un actif de 45 ans épargne pour rembourser sa résidence principale et préparer sa future pension de retraite.",
    pointsCles: ["Franco Modigliani", "Lissage de la consommation", "Dette (jeunesse) / Épargne (activité) / Désépargne (retraite)", "Impact du vieillissement démographique"]
  },
  {
    id: "equivalence-ricardienne",
    terme: "Équivalence ricardienne",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Théorie (développée par Robert Barro d'après David Ricardo) selon laquelle un déficit public financé par l'emprunt n'a aucun effet de relance sur l'économie.",
    interpretation: "Les ménages rationnels anticipent que la dette d'aujourd'hui sera remboursée par des hausses d'impôts demain : ils épargnent immédiatement le surplus au lieu de le consommer.",
    exemple: "Une prime de 500 € versée par l'État et financée par la dette est immédiatement mise de côté sur un livret par un ménage prévoyant ses futurs impôts.",
    pointsCles: ["Robert Barro / David Ricardo", "Neutralité de la relance par la dette", "Anticipation des impôts futurs", "Critique de la relance keynésienne"]
  },
  {
    id: "illusion-monetaire",
    terme: "Illusion monétaire",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Erreur d'appréciation d'un agent économique qui raisonne sur les valeurs nominales (les montants en euros affichés) au lieu des valeurs réelles (le pouvoir d'achat corrigé de l'inflation).",
    interpretation: "Théorisée par Irving Fisher et reprise par Keynes, elle explique pourquoi les salariés acceptent plus facilement une perte de pouvoir d'achat par l'inflation qu'une baisse de salaire nominal.",
    exemple: "Se réjouir d'une hausse de salaire de 3 % alors que l'inflation est à 5 % : le pouvoir d'achat a en réalité baissé de 2 %.",
    pointsCles: ["Irving Fisher / J.M. Keynes", "Confusion nominal vs réel", "Pouvoir d'achat masqué par l'inflation", "Biais cognitif économique"]
  },
  {
    id: "revenu-disponible-brut",
    terme: "Revenu disponible brut",
    sigle: "RDB",
    categorie: "Revenus",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Revenu effectif dont dispose un ménage pour consommer et épargner, après perception des revenus primaires et transferts sociaux et paiement des impôts directs et cotisations.",
    formule: "RDB = Revenus primaires + Prestations sociales − Prélèvements obligatoires directs",
    interpretation: "C'est l'indicateur central du pouvoir d'achat des ménages mesuré par la comptabilité nationale de l'INSEE.",
    exemple: "Salaires (3 500 €) + allocations familiales (150 €) − impôt sur le revenu (300 €) = 3 350 € de RDB mensuel.",
    pointsCles: ["Revenus d'activité + patrimoine", "Prestations sociales incluses", "Impôts directs déduits", "RDB = Consommation + Épargne"]
  },
  {
    id: "revenu-de-transfert",
    terme: "Prestation sociale (Revenu de transfert)",
    categorie: "Revenus",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Versement en espèces ou en nature effectué par les organismes de protection sociale à un ménage sans contrepartie productive immédiate.",
    interpretation: "Ces transferts couvrent les risques sociaux (maladie, vieillesse, chômage, maternité, famille) et réduisent les inégalités de niveau de vie.",
    exemple: "Les pensions de retraite, les indemnités chômage, le RSA et les allocations familiales sont des revenus de transfert.",
    pointsCles: ["Protection sociale", "Redistribution des revenus", "Couverture des risques sociaux", "Pas de contrepartie directe immédiate"]
  },
  {
    id: "assurance-vie",
    terme: "Assurance-vie",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Contrat d'épargne de moyen et long terme souscrit auprès d'un assureur permettant de valoriser un capital et de le transmettre avec une fiscalité allégée.",
    interpretation: "Premier placement financier des Français en volume (plus de 1 900 milliards d'euros), il se compose de fonds en euros garantis et d'unités de compte boursières plus rémunératrices.",
    exemple: "Placer 20 000 € sur un contrat d'assurance-vie pour faire fructifier son épargne en vue de la retraite ou de la transmission à ses enfants.",
    pointsCles: ["Placement n°1 en France", "Fonds euros (capital garanti)", "Unités de compte (marché actions/obligations)", "Cadre fiscal avantageux"]
  },
  {
    id: "livret-reglemente",
    terme: "Livret d'épargne réglementée",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Compte d'épargne bancaire dont le taux d'intérêt, le plafond de versement et les conditions sont fixés par l'État, totalement exonéré d'impôt et de prélèvements sociaux.",
    interpretation: "Le Livret A et le LDDS garantissent une sécurité et une liquidité totale ; une partie des fonds est centralisée par la Caisse des Dépôts pour financer le logement social.",
    exemple: "Le Livret A rémunéré à 3 % net permet à chaque citoyen d'épargner jusqu'à 22 950 € sans aucun impôt.",
    pointsCles: ["Livret A / LDDS / LEP", "Exonération fiscale totale", "Financement du logement social", "Liquidité immédiate garantie"]
  },
  {
    id: "plus-value-latente",
    terme: "Plus-value latente",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Gain théorique constaté sur un actif (action, bien immobilier) dont le prix de marché actuel est supérieur au prix d'achat, mais qui n'a pas encore été vendu.",
    interpretation: "Elle ne devient une plus-value réelle et imposable qu'au moment de la cession effective de l'actif ; elle peut disparaître si le cours rechute.",
    exemple: "Des actions achetées 1 000 € qui valent 1 400 € en bourse affichent une plus-value latente de 400 € tant qu'elles ne sont pas vendues.",
    pointsCles: ["Gain non matérialisé", "Actif non vendu", "Sensible aux fluctuations de cours", "Devient réelle lors de la cession"]
  },
  {
    id: "rente-economique",
    terme: "Rente économique",
    categorie: "Revenus",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Revenu perçu par le détenteur d'une ressource rare ou d'une position privilégiée, supérieur au montant strictement nécessaire pour maintenir cette ressource en activité.",
    interpretation: "Étudiée par David Ricardo (rente foncière), elle désigne aujourd'hui les surprofits tirés de barrières à l'entrée ou de brevets sans effort productif proportionnel.",
    exemple: "Le propriétaire d'un terrain agricole particulièrement fertile qui perçoit un fermage supérieur grâce aux rendements naturels exceptionnels de sa terre.",
    pointsCles: ["David Ricardo", "Revenu lié à la rareté", "Surprofit sans contrepartie productive", "Recherche de rente (rent-seeking)"]
  },
  {
    id: "monnaie-marchandise",
    terme: "Monnaie marchandise",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Forme primitive de monnaie constituée d'un bien matériel possédant une valeur d'usage propre en dehors de sa fonction monétaire (bétail, sel, métaux précieux).",
    interpretation: "Historiquement, les métaux précieux (or et argent) se sont imposés en raison de leur divisibilité, inaltérabilité et forte valeur sous un faible volume.",
    exemple: "Dans l'Antiquité romaine, le sel servait d'instrument d'échange et de paiement (origine étymologique du mot 'salaire').",
    pointsCles: ["Valeur intrinsèque", "Or et argent", "Transition vers la monnaie métallique", "Début de l'histoire monétaire"]
  },
  {
    id: "monnaie-fiduciaire",
    terme: "Monnaie fiduciaire",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Monnaie matérielle sous forme de billets de banque et de pièces de monnaie dont la valeur faciale est largement supérieure à leur coût intrinsèque de fabrication.",
    interpretation: "Elle repose entièrement sur la confiance (du latin 'fiducia') que les utilisateurs accordent à l'autorité émettrice (la banque centrale) pour garantir son pouvoir libératoire.",
    exemple: "Un billet de 50 euros ne coûte que quelques centimes à imprimer, mais permet d'acquérir 50 euros de biens car tout le monde l'accepte.",
    pointsCles: ["Billets et pièces", "Fondée sur la confiance (fiducia)", "Pouvoir libératoire légal", "Émise par la banque centrale"]
  },
  {
    id: "monnaie-scripturale",
    terme: "Monnaie scripturale",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Monnaie immatérielle inscrite sous forme d'écritures sur les comptes bancaires (dépôts à vue), circulant par carte bancaire, virement, chèque ou prélèvement.",
    interpretation: "Elle représente aujourd'hui plus de 90 % de la masse monétaire en circulation dans les économies développées et est créée par les banques commerciales lors de l'octroi de crédits.",
    exemple: "Le solde créditeur affiché sur votre application bancaire est de la monnaie scripturale immédiatement utilisable pour régler des achats.",
    pointsCles: ["Écritures sur comptes bancaires", ">90 % de la monnaie en circulation", "Instruments : carte, virement, chèque", "Créée par les banques de second rang"]
  },
  {
    id: "agregat-monetaire-m1",
    terme: "Agrégat monétaire M1",
    sigle: "M1",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Ensemble des actifs monétaires les plus liquides immédiatement disponibles pour effectuer des règlements : pièces, billets et dépôts à vue.",
    interpretation: "C'est la mesure au sens strict de la monnaie de transaction ; son évolution rapide signale souvent une accélération de la demande de biens et services.",
    exemple: "Le total de vos billets dans votre portefeuille et de l'argent sur votre compte courant constitue votre appartenance à M1.",
    pointsCles: ["Monnaie fiduciaire + Dépôts à vue", "Liquidité parfaite immédiate", "Agrégat le plus étroit", "Moyen direct de paiement"]
  },
  {
    id: "agregat-monetaire-m3",
    terme: "Agrégat monétaire M3",
    sigle: "M3",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Mesure au sens large de la masse monétaire comprenant M1, les placements à court terme (livrets, dépôts à terme < 2 ans) et les instruments négociables (OPCVM monétaires, titres de créance courts).",
    interpretation: "C'est l'indicateur privilégié par la Banque centrale européenne pour surveiller les tensions inflationnistes à moyen terme et piloter sa stratégie monétaire.",
    exemple: "Quand M3 croît à un rythme nettement supérieur à celui du PIB réel, la BCE craint une future dérive des prix.",
    pointsCles: ["Masse monétaire au sens large", "Indicateur de référence de la BCE", "Comprend quasi-monnaie et OPCVM monétaires", "Surveillance du risque inflationniste"]
  },
  {
    id: "creation-monetaire-credit",
    terme: "Création monétaire ex nihilo",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Mécanisme par lequel une banque commerciale crée de la nouvelle monnaie scripturale à partir de rien ('ex nihilo') par un simple jeu d'écritures lorsqu'elle accorde un crédit.",
    interpretation: "Contrairement à l'idée reçue, 'les crédits font les dépôts' : la banque ne prête pas l'argent d'autres épargnants, elle crédite le compte de l'emprunteur d'une somme nouvelle.",
    exemple: "Une banque accorde un prêt immobilier de 200 000 € : elle inscrit 200 000 € à l'actif (sa créance) et 200 000 € au passif (le compte du client), créant 200 000 € de monnaie.",
    pointsCles: ["Les crédits font les dépôts", "Création ex nihilo", "Destruction monétaire au remboursement", "Rôle central des banques commerciales"]
  },
  {
    id: "destruction-monetaire",
    terme: "Destruction monétaire",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Disparition définitive de monnaie scripturale qui se produit lorsqu'un emprunteur rembourse le capital d'un crédit auprès d'une banque.",
    interpretation: "La masse monétaire n'augmente que si le flux de nouveaux crédits accordés est supérieur au flux de remboursement des anciens crédits (création nette positive).",
    exemple: "Chaque mensualité de prêt remboursée (hors intérêts) détruit la portion correspondante de monnaie scripturale en circulation.",
    pointsCles: ["Remboursement du capital emprunté", "Opération inverse de la création", "Variation nette de la masse monétaire", "Les intérêts restent du profit bancaire"]
  },
  {
    id: "inflation-sous-jacente",
    terme: "Inflation sous-jacente (Core Inflation)",
    categorie: "Macroéconomie",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Indice des prix à la consommation corrigé des composantes les plus volatiles (prix de l'énergie et des produits alimentaires non transformés) et des tarifs publics.",
    interpretation: "Elle permet aux banques centrales de mesurer la tendance de fond de l'inflation liée aux pressions domestiques (salaires, services) sans être polluée par des chocs ponctuels.",
    exemple: "Si le pétrole flambe mais que les prix des services restent stables, l'inflation globale monte mais l'inflation sous-jacente reste modérée.",
    pointsCles: ["Hors énergie et alimentation", "Tendance de fond des prix", "Baromètre clé des banques centrales", "Reflet des tensions salariales"]
  },
  {
    id: "spirale-prix-salaires",
    terme: "Spirale prix-salaires",
    categorie: "Macroéconomie",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Processus auto-entretenu d'inflation où une hausse initiale des prix pousse les salariés à exiger des hausses de salaires, que les entreprises répercutent ensuite sur leurs prix de vente.",
    interpretation: "Cette boucle rétroactive peut enclencher une hyperinflation si la banque centrale ne durcit pas sa politique monétaire pour briser les anticipations d'inflation.",
    exemple: "Dans les années 1970 en France, l'indexation automatique des salaires sur les prix a alimenté une inflation à deux chiffres jusqu'au tournant de la rigueur en 1983.",
    pointsCles: ["Boucle de rétroaction", "Revendications salariales vs marges des entreprises", "Désindexation des salaires", "Risque de surchauffe inflationniste"]
  },
  {
    id: "deflation-par-la-dette",
    terme: "Déflation par la dette (Fisher)",
    categorie: "Macroéconomie",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Théorie d'Irving Fisher (1933) montrant qu'en période de baisse générale des prix (déflation), le poids réel des dettes passées s'alourdit, provoquant faillites et récession.",
    interpretation: "Pour rembourser leurs dettes, les agents vendent des actifs en catastrophe, ce qui fait chuter encore plus les prix et aggrave leur endettement réel : 'plus les débiteurs paient, plus ils doivent'.",
    exemple: "La Grande Dépression des années 1930 aux États-Unis, où la spirale déflationniste a ruiné des millions d'agriculteurs et fait chuter le PIB de 30 %.",
    pointsCles: ["Irving Fisher (1933)", "Hausse de la valeur réelle des dettes", "Ventes d'actifs en détresse", "Cercle vicieux de la Grande Dépression"]
  },
  {
    id: "stagflation",
    terme: "Stagflation",
    categorie: "Macroéconomie",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Situation économique conjuguant simultanément une stagnation de la production (faible croissance et chômage élevé) et une forte inflation des prix.",
    interpretation: "Ce phénomène a pris en défaut la théorie keynésienne traditionnelle (courbe de Phillips) lors des chocs pétroliers des années 1970, ouvrant la voie aux théories monétaristes.",
    exemple: "La période 1974-1981 en Europe, caractérisée par une croissance économique proche de zéro et une inflation supérieure à 12 % par an.",
    pointsCles: ["Stagnation + Inflation", "Échec de la courbe de Phillips", "Chocs pétroliers de 1973 et 1979", "Dilemme pour les banques centrales"]
  },
  {
    id: "effet-eviction",
    terme: "Effet d'éviction",
    categorie: "Macroéconomie",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Phénomène économique où une augmentation des emprunts de l'État pour financer son déficit entraîne une hausse des taux d'intérêt, réduisant l'investissement privé.",
    interpretation: "Les libéraux mobilisent ce concept pour affirmer que les dépenses publiques ne créent pas d'activité supplémentaire, mais se substituent simplement à l'initiative privée plus efficace.",
    exemple: "L'État émet 50 Md€ d'obligations : la demande de capitaux augmente, les taux d'intérêt montent, et plusieurs PME renoncent à emprunter pour investir.",
    pointsCles: ["Déficit public et taux d'intérêt", "Éviction de l'investissement privé", "Critique néoclassique de la relance", "Rareté de l'épargne disponible"]
  },
  {
    id: "stabilisateurs-automatiques",
    terme: "Stabilisateurs automatiques",
    categorie: "Macroéconomie",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Mécanismes budgétaires passifs qui amortissent mécaniquement les fluctuations conjoncturelles sans intervention politique nouvelle de l'État.",
    interpretation: "En récession, les recettes fiscales chutent et les dépenses sociales (chômage) augmentent automatiquement, ce qui soutient le pouvoir d'achat et freine la chute de l'activité.",
    exemple: "Lors du choc de 2020, le déficit public français s'est creusé à 9 % du PIB sans plan d'austérité, amortissant le choc social pour les salariés.",
    pointsCles: ["Amortisseur conjoncturel passif", "Impôts progressifs + allocations chômage", "Creusement automatique du déficit en crise", "Frein aux emballements en surchauffe"]
  },
  {
    id: "soutenabilite-dette",
    terme: "Soutenabilité de la dette",
    categorie: "Macroéconomie",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Capacité durable d'un État à assurer le service de sa dette publique (remboursement du capital et paiement des intérêts) sans risquer le défaut ni l'austérité destructrice.",
    interpretation: "Elle dépend de l'écart entre le taux d'intérêt de la dette et le taux de croissance du PIB (effet 'boule de neige' si le taux d'intérêt dépasse la croissance économique).",
    exemple: "Si le taux d'intérêt moyen de la dette est de 3 % et la croissance du PIB de 1 %, le ratio dette/PIB augmente automatiquement sauf excédent budgétaire primaire.",
    pointsCles: ["Service de la dette assuré", "Écart taux d'intérêt vs croissance (r - g)", "Effet boule de neige", "Solde budgétaire primaire requis"]
  },

  // ================================================================
  // EXTENSION PROGRAMME : ENTREPRISE, COÛTS & MARCHÉS (2nde / 1ère)
  // ================================================================
  {
    id: "rarete-relative",
    terme: "Rareté",
    categorie: "Science économique",
    discipline: "Science économique",
    niveau: ["Seconde"],
    definition: "Caractéristique fondamentale des ressources économiques existant en quantité limitée face à des besoins humains potentiellement illimités.",
    interpretation: "C'est la rareté qui fonde l'existence de la science économique, obligeant les individus et les sociétés à opérer des arbitrages et des choix d'allocation.",
    exemple: "Le temps, l'eau potable, les métaux rares ou les terres agricoles fertiles sont des ressources rares qui imposent une gestion économique raisonnée.",
    pointsCles: ["Fondement de l'économie", "Besoins illimités vs Ressources finies", "Nécessité de choix et d'arbitrage", "Opposé aux biens libres"]
  },
  {
    id: "arbitrage-economique",
    terme: "Arbitrage économique",
    categorie: "Science économique",
    discipline: "Science économique",
    niveau: ["Seconde"],
    definition: "Décision par laquelle un agent économique choisit d'allouer ses ressources limitées (temps, argent) à un usage particulier en renonçant à d'autres alternatives.",
    interpretation: "Tout choix économique implique un sacrifice implicite mesuré par le concept fondamental de coût d'opportunité.",
    exemple: "Un ménage arbitre entre consacrer 2 000 € à des vacances à l'étranger ou à des travaux d'isolation thermique de son logement.",
    pointsCles: ["Allocation des ressources rares", "Renoncement à d'autres options", "Base des décisions des agents", "Lié au coût d'opportunité"]
  },
  {
    id: "cout-opportunite",
    terme: "Coût d'opportunité",
    categorie: "Science économique",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Valeur de la meilleure alternative à laquelle un agent économique renonce lorsqu'il effectue un choix ou engage des ressources dans une activité.",
    interpretation: "Ce coût n'est pas forcément monétaire : il mesure la perte de gain ou d'utilité liée au rejet de la seconde meilleure option possible.",
    exemple: "Le coût d'opportunité de poursuivre des études supérieures comprend les frais de scolarité, mais surtout le salaire auquel l'étudiant renonce en ne travaillant pas immédiatement.",
    pointsCles: ["Valeur du renoncement", "Meilleure alternative sacrifiée", "Raisonnement économique fondamental", "Évaluation des décisions publiques"]
  },
  {
    id: "facteurs-de-production",
    terme: "Facteurs de production",
    categorie: "Production",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Ensemble des ressources durables combinées par l'entreprise pour produire des biens et services : le travail (main-d'œuvre) et le capital (machines, bâtiments).",
    interpretation: "L'entrepreneur cherche à combiner ces facteurs de manière optimale pour minimiser ses coûts tout en maximisant sa production.",
    exemple: "Une boulangerie associe le travail du boulanger (facteur travail) et le four à pain ainsi que le pétrin (facteur capital fixe).",
    pointsCles: ["Travail (L) et Capital (K)", "Ressources non détruites dans le processus", "Combinaison productive", "À distinguer des consommations intermédiaires"]
  },
  {
    id: "substitution-capital-travail",
    terme: "Substitution du capital au travail",
    categorie: "Production",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Remplacement de travailleurs par des machines ou des logiciels au sein du processus productif, généralement motivé par une baisse relative du coût du capital ou une hausse de la productivité.",
    interpretation: "Source historique de gains de productivité et de croissance, ce phénomène suscite des débats sur la destruction d'emplois non qualifiés ou leur polarisation.",
    exemple: "L'installation de caisses automatiques dans les supermarchés ou de robots de soudure dans l'industrie automobile.",
    pointsCles: ["Facteurs substituables", "Remplacement de la main-d'œuvre par des machines", "Coût relatif des facteurs", "Gains de productivité vs emploi"]
  },
  {
    id: "complementarite-facteurs",
    terme: "Complémentarité des facteurs",
    categorie: "Production",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Situation productive où le travail et le capital doivent obligatoirement être associés dans une proportion fixe pour obtenir un produit donné.",
    interpretation: "L'entreprise ne peut pas faire fonctionner une machine supplémentaire sans embaucher un conducteur supplémentaire (pas de substitution possible à court terme).",
    exemple: "Un chauffeur de taxi pour un véhicule automobile, ou un pilote de ligne pour un avion commercial.",
    pointsCles: ["Proportions fixes des facteurs", "Pas de substitution technique", "Rigidité productive à court terme", "Croissance conjointe K et L"]
  },
  {
    id: "productivite-globale-facteurs",
    terme: "Productivité globale des facteurs",
    sigle: "PGF",
    categorie: "Production",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Mesure de l'efficacité avec laquelle l'ensemble des facteurs de production (travail et capital) sont combinés pour générer la production.",
    interpretation: "Théorisée par Robert Solow comme le 'résidu' inexpliqué de la croissance, la PGF reflète le progrès technique, l'innovation organisationnelle et la formation de la main-d'œuvre.",
    exemple: "Grâce à une meilleure organisation logistique et à l'informatisation, une usine produit 20 % de pièces supplémentaires avec le même nombre d'ouvriers et de machines.",
    pointsCles: ["Résidu de Solow", "Indicateur du progrès technique", "Efficacité de la combinaison productive", "Moteur de la croissance intensive"]
  },
  {
    id: "economies-dechelle",
    terme: "Économies d'échelle",
    categorie: "Production",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Baisse du coût unitaire moyen de production d'un bien ou service au fur et à mesure que la quantité produite augmente.",
    interpretation: "Elles résultent principalement de l'étalement des coûts fixes (loyers, machines, R&D) sur un plus grand nombre d'unités vendues, favorisant la grande taille des entreprises.",
    exemple: "Concevoir un logiciel coûte 10 M€ : s'il est vendu à 10 000 exemplaires, le coût fixe par copie est de 1 000 € ; s'il est vendu à 1 000 000 d'exemplaires, il tombe à 10 €.",
    pointsCles: ["Baisse du coût moyen", "Amortissement des coûts fixes", "Concentration industrielle", "Barrière à l'entrée naturelle"]
  },
  {
    id: "deseconomies-echelle",
    terme: "Déséconomies d'échelle",
    categorie: "Production",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Hausse du coût moyen de production lorsque l'entreprise dépasse une taille critique, causée par des difficultés de gestion, de coordination ou de communication.",
    interpretation: "La bureaucratisation excessive, la lourdeur hiérarchique et la démotivation des salariés peuvent rendre les très grandes structures moins efficientes.",
    exemple: "Une entreprise devenue trop gigantesque multiplie les réunions et les niveaux hiérarchiques, ralentissant la prise de décision et augmentant les coûts administratifs.",
    pointsCles: ["Hausse du coût unitaire au-delà d'un seuil", "Lourdeur bureaucratique", "Perte d'efficacité managériale", "Limite à la taille optimale de l'entreprise"]
  },
  {
    id: "rendements-decroissants",
    terme: "Loi des rendements décroissants",
    categorie: "Production",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Loi économique selon laquelle, si l'on augmente la quantité d'un facteur variable (le travail) en maintenant les autres facteurs fixes (le capital), la production supplémentaire obtenue finit par diminuer.",
    interpretation: "Énoncée par Turgot et David Ricardo, elle explique la forme en U de la courbe des coûts marginaux et moyens de l'entreprise à court terme.",
    exemple: "Ajouter un 5e cuisinier dans une petite cuisine sans agrandir l'espace ni ajouter de fourneaux : les cuisiniers se gênent et chaque ouvrier produit moins de plats supplémentaires.",
    pointsCles: ["Productivité marginale décroissante", "Un facteur variable, un facteur fixe", "Turgot / David Ricardo", "Forme en U du coût moyen"]
  },
  {
    id: "cout-fixe",
    terme: "Coût fixe",
    categorie: "Entreprise",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Dépense supportée par l'entreprise qui ne varie pas avec le volume de production à court terme (loyer des locaux, assurance, amortissement des machines).",
    interpretation: "Même si la production est nulle, les coûts fixes doivent être intégralement payés, ce qui crée une contrainte financière majeure en cas d'effondrement de l'activité.",
    exemple: "L'abonnement téléphonique, le loyer de l'usine et les salaires de la direction générale restent identiques que l'entreprise produise 100 ou 10 000 articles.",
    pointsCles: ["Indépendant du volume produit", "Loyer, assurances, amortissements", "Doit être couvert par la marge", "À l'origine des économies d'échelle"]
  },
  {
    id: "cout-variable",
    terme: "Coût variable",
    categorie: "Entreprise",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Dépense de l'entreprise qui évolue directement en fonction du volume de biens ou de services produits (matières premières, énergie de production, emballages).",
    interpretation: "Si l'entreprise arrête temporairement ses machines, ses coûts variables tombent à zéro, limitant ainsi ses pertes opérationnelles.",
    exemple: "La farine, la levure et l'électricité du four pour un boulanger augmentent proportionnellement au nombre de baguettes cuites chaque matin.",
    pointsCles: ["Varie avec la production", "Matières premières et énergie", "Coût variable total et moyen", "S'annule à production nulle"]
  },
  {
    id: "cout-total",
    terme: "Coût total",
    categorie: "Entreprise",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Somme de tous les coûts fixes et de tous les coûts variables engagés par l'entreprise pour réaliser un niveau de production donné.",
    formule: "Coût total = Coûts fixes + Coûts variables",
    interpretation: "La comparaison entre la recette totale (chiffre d'affaires) et le coût total détermine le bénéfice ou la perte de l'entreprise sur la période.",
    exemple: "Des coûts fixes de 10 000 € et des coûts variables de 15 000 € donnent un coût total de 25 000 €.",
    pointsCles: ["CF + CV", "Ensemble des charges d'exploitation", "Détermine le seuil de rentabilité", "Condition de viabilité de l'entreprise"]
  },
  {
    id: "cout-moyen",
    terme: "Coût moyen (Coût unitaire)",
    categorie: "Entreprise",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Coût de fabrication d'une unité de bien ou service, calculé en divisant le coût total par le nombre d'unités produites.",
    formule: "Coût moyen = Coût total / Quantité produite",
    interpretation: "L'entreprise est rentable si le prix de vente fixé sur le marché est strictement supérieur à son coût moyen de production.",
    exemple: "Si fabriquer 500 paires de chaussures coûte 25 000 € au total, le coût moyen unitaire est de 50 € par paire.",
    pointsCles: ["Coût par unité produite", "CT / Q", "Seuil de rentabilité unitaire", "Baisse puis hausse (courbe en U)"]
  },
  {
    id: "cout-marginal",
    terme: "Coût marginal",
    sigle: "Cm",
    categorie: "Entreprise",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Coût supplémentaire engendré par la production d'une unité additionnelle de bien ou de service.",
    formule: "Cm = ΔCoût total / ΔQuantité",
    interpretation: "Règle néoclassique fondamentale : l'entreprise maximise son profit en augmentant sa production jusqu'au point exact où le prix de vente égale le coût marginal (P = Cm).",
    exemple: "Produire 100 chaises coûte 5 000 € et en produire 101 coûte 5 045 € : le coût marginal de la 101e chaise est de 45 €.",
    pointsCles: ["Coût de la dernière unité produite", "Condition de maximisation : P = Cm", "Dérivée du coût total", "Pente croissante à terme"]
  },
  {
    id: "preneur-de-prix",
    terme: "Preneur de prix (Price Taker)",
    categorie: "Concurrence",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Situation d'une entreprise ou d'un consommateur sur un marché hautement concurrentiel qui n'a aucun pouvoir d'influencer le prix de vente et doit l'accepter comme une donnée.",
    interpretation: "Caractéristique centrale de la concurrence pure et parfaite (atomicité du marché) : chaque acteur est trop petit pour peser sur l'équilibre général.",
    exemple: "Un producteur de blé français vend sa récolte au cours mondial fixé sur le marché boursier de Chicago : s'il vend plus cher, aucun acheteur ne viendra.",
    pointsCles: ["Concurrence pure et parfaite", "Atomicité de l'offre", "Aucun pouvoir de marché", "Le prix s'impose à l'entreprise"]
  },
  {
    id: "faiseur-de-prix",
    terme: "Faiseur de prix (Price Maker)",
    categorie: "Concurrence",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Situation d'une entreprise disposant d'un pouvoir de marché suffisant pour fixer elle-même son prix de vente au-dessus du coût marginal sans perdre tous ses clients.",
    interpretation: "Cette capacité découle d'une position de monopole, d'oligopole ou d'une différenciation de produit réussie (marque, qualité, brevets).",
    exemple: "Apple fixe le prix de son dernier iPhone à plus de 1 200 € grâce à son image de marque et à la fidélité de ses consommateurs.",
    pointsCles: ["Pouvoir de marché", "Monopole et oligopole", "Marge bénéficiaire élevée", "Différenciation de produit"]
  },
  {
    id: "pouvoir-de-marche",
    terme: "Pouvoir de marché",
    categorie: "Concurrence",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Capacité d'une entreprise à influencer à son avantage les conditions du marché, notamment en fixant un prix de vente supérieur au coût marginal de concurrence.",
    interpretation: "Mesuré par l'indice de Lerner, le pouvoir de marché réduit le surplus du consommateur au profit des producteurs et justifie la politique de la concurrence.",
    exemple: "Une entreprise pharmaceutique détenant le brevet exclusif sur un traitement anticancéreux dispose d'un fort pouvoir de marché pour négocier ses tarifs.",
    pointsCles: ["Capacité d'imposer ses prix", "Indice de Lerner", "Perte sèche pour le consommateur", "Régulation par les autorités antitrust"]
  },
  {
    id: "barrieres-a-entree",
    terme: "Barrières à l'entrée",
    categorie: "Concurrence",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Obstacles naturels, techniques, légaux ou stratégiques qui empêchent ou dissuadent de nouvelles entreprises de s'implanter sur un marché pour concurrencer les acteurs en place.",
    interpretation: "Elles protègent les profits des entreprises installées et empêchent le mécanisme de retour à l'équilibre concurrentiel.",
    exemple: "Le coût pharaonique de construction d'un réseau ferré ou d'un réseau télécoms constitue une barrière à l'entrée technique insurmontable pour un nouvel arrivant modeste.",
    pointsCles: ["Obstacles à la concurrence", "Structurelles / Légales / Stratégiques", "Protection des surprofits", "Source de monopole ou d'oligopole"]
  },
  {
    id: "monopole-naturel",
    terme: "Monopole naturel",
    categorie: "Concurrence",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Situation où une entreprise unique produit à un coût moyen inférieur à celui qu'obtiendraient plusieurs entreprises concurrentes, en raison de coûts fixes d'infrastructures gigantesques.",
    interpretation: "Dupliquer les réseaux (eau, électricité, rails) serait économiquement absurde ; l'État régule ou gère directement ces monopoles pour protéger les usagers.",
    exemple: "Le gestionnaire du réseau de transport d'électricité (RTE) ou le réseau de distribution d'eau potable d'une métropole.",
    pointsCles: ["Coûts fixes colossaux", "Économies d'échelle continues", "Réseaux physiques uniques", "Régulation des prix par la puissance publique"]
  },
  {
    id: "monopole-innovation",
    terme: "Monopole d'innovation",
    categorie: "Concurrence",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Position monopolistique temporaire acquise par une entreprise pionnière ayant développé un nouveau produit ou procédé grâce à la recherche et protégée par un brevet.",
    interpretation: "Théorisé par Joseph Schumpeter, ce surprofit temporaire est la récompense légitime qui incite les entrepreneurs à prendre le risque d'innover.",
    exemple: "Une société de biotechnologie qui invente un nouveau vaccin breveté bénéficie d'un monopole d'innovation pendant 20 ans.",
    pointsCles: ["Joseph Schumpeter", "Rente d'innovation", "Protection par brevet", "Incitation à la recherche et développement"]
  },
  {
    id: "cartel-entente",
    terme: "Entente illicite (Cartel)",
    categorie: "Concurrence",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Accord secret et illégal entre entreprises théoriquement concurrentes sur un marché visant à fixer les prix, limiter les quantités produites ou se partager les clients.",
    interpretation: "Les cartels éliminent la concurrence au détriment des consommateurs ; les autorités de la concurrence (DGCCRF, Commission européenne) les traquent et infligent de lourdes amendes.",
    exemple: "Le cartel de la téléphonie mobile en France condamné en 2005 pour s'être secrètement coordonné sur les parts de marché et les prix des forfaits.",
    pointsCles: ["Accord secret anti-concurrentiel", "Fixation concertée des prix", "Interdit par le droit européen", "Procédure de clémence pour les dénonciations"]
  },

  // ================================================================
  // EXTENSION PROGRAMME : SOCIOLOGIE, SOCIALISATION & ACTION COLLECTIVE (2nde / 1ère)
  // ================================================================
  {
    id: "socialisation-primaire",
    terme: "Socialisation primaire",
    categorie: "Sociologie",
    discipline: "Sociologie et science politique",
    niveau: ["Seconde", "Première"],
    definition: "Processus d'apprentissage et d'intériorisation des normes, des valeurs et des rôles sociaux qui se déroule durant l'enfance et l'adolescence.",
    interpretation: "Principalement assurée par la famille et l'école, elle façonne de manière durable l'identité sociale, la personnalité et l'habitus de l'individu.",
    exemple: "L'apprentissage du langage, de la politesse à table et des règles de vie en collectivité par les parents et les enseignants de maternelle.",
    pointsCles: ["Enfance et adolescence", "Famille et école comme instances clés", "Imprégnation durable", "Construction de l'identité de base"]
  },
  {
    id: "socialisation-secondaire",
    terme: "Socialisation secondaire",
    categorie: "Sociologie",
    discipline: "Sociologie et science politique",
    niveau: ["Seconde", "Première"],
    definition: "Poursuite du processus de socialisation tout au long de la vie adulte, permettant à l'individu de s'adapter à de nouveaux environnements sociaux et professionnels.",
    interpretation: "Elle peut soit renforcer la socialisation primaire, soit entrer en contradiction avec elle (choc de socialisation, conversion, rupture biographique).",
    exemple: "L'intégration dans un nouveau milieu professionnel, l'adhésion à un parti politique ou l'apprentissage de la vie de couple à l'âge adulte.",
    pointsCles: ["Âge adulte", "Milieu professionnel, pairs, conjoint", "Adaptation continue", "Renforcement ou rupture avec la socialisation primaire"]
  },
  {
    id: "socialisation-anticipatrice",
    terme: "Socialisation anticipatrice",
    categorie: "Sociologie",
    discipline: "Sociologie et science politique",
    niveau: ["Première"],
    definition: "Processus par lequel un individu adopte par avance les normes, les valeurs et les comportements d'un groupe auquel il souhaite appartenir (groupe de référence) mais dont il ne fait pas encore partie.",
    interpretation: "Concept forgé par Robert K. Merton, il favorise la mobilité sociale ascendante mais peut engendrer une marginalisation au sein de son groupe d'origine.",
    exemple: "Un étudiant boursier issu d'un milieu populaire qui adopte le vocabulaire, les codes vestimentaires et les loisirs des milieux d'affaires qu'il aspire à rejoindre.",
    pointsCles: ["Robert K. Merton", "Groupe d'appartenance vs Groupe de référence", "Mobilité sociale ascendante", "Assimilation volontaire de codes sociaux"]
  },
  {
    id: "socialisation-differentielle-genre",
    terme: "Socialisation différentielle selon le genre",
    categorie: "Sociologie",
    discipline: "Sociologie et science politique",
    niveau: ["Seconde", "Première"],
    definition: "Processus par lequel la société transmet des normes, des valeurs et des attentes distinctes aux individus en fonction de leur sexe biologique (garçons et filles).",
    interpretation: "Elle produit et reproduit la division sexuée des rôles sociaux, orientant différemment les choix d'études, les carrières professionnelles et la répartition des tâches domestiques.",
    exemple: "L'orientation préférentielle dès l'enfance des petites filles vers des jeux de soin ou de poupée et des garçons vers des jeux de construction ou de compétition.",
    pointsCles: ["Construction sociale du masculin/féminin", "Rôles stéréotypés", "Inégalités d'orientation scolaire", "Division sexuée du travail"]
  },
  {
    id: "socialisation-differentielle-classe",
    terme: "Socialisation différentielle selon le milieu social",
    categorie: "Sociologie",
    discipline: "Sociologie et science politique",
    niveau: ["Seconde", "Première"],
    definition: "Différence dans les pratiques éducatives, les valeurs valorisées et les goûts transmis aux enfants selon la classe sociale d'origine des parents.",
    interpretation: "Comme l'a démontré Pierre Bourdieu, cette socialisation produit des capitaux culturels inégaux qui favorisent la reproduction sociale à l'école.",
    exemple: "La fréquentation régulière des musées, de l'opéra et la pratique d'un vocabulaire soutenu dans les familles bourgeoises par rapport aux milieux populaires.",
    pointsCles: ["Pierre Bourdieu", "Inégalités de capital culturel", "Reproduction sociale", "Habitus de classe"]
  },
  {
    id: "norme-sociale",
    terme: "Norme sociale",
    categorie: "Sociologie",
    discipline: "Sociologie et science politique",
    niveau: ["Seconde", "Première"],
    definition: "Règle de conduite ou modèle de comportement partagé par les membres d'un groupe social, dont le non-respect entraîne une sanction sociale.",
    interpretation: "Les normes sont la traduction concrète des valeurs abstraites de la société : elles permettent la prévisibilité des comportements et la cohésion du groupe.",
    exemple: "Faire la queue dans un magasin ou céder sa place à une personne âgée dans les transports sont des normes sociales de politesse.",
    pointsCles: ["Règles de comportement", "Traduction pratique des valeurs", "Sanction en cas de déviance", "Maintien de l'ordre social"]
  },
  {
    id: "norme-juridique",
    terme: "Norme juridique",
    categorie: "Sociologie",
    discipline: "Sociologie et science politique",
    niveau: ["Seconde", "Première"],
    definition: "Règle de droit formellement codifiée, écrite et sanctionnée par une autorité publique légitime (l'État, les tribunaux, la police).",
    interpretation: "Contrairement aux normes sociales informelles, la norme juridique est impersonnelle, universelle sur un territoire donné et adossée au monopole de la violence légitime.",
    exemple: "Le Code de la route, l'obligation de scolarité jusqu'à 16 ans ou l'interdiction du vol sous peine de sanctions pénales.",
    pointsCles: ["Règle de droit écrite", "Sanction étatique formelle", "Codification légale", "Monopole de la contrainte légitime"]
  },
  {
    id: "valeur-sociale",
    terme: "Valeur sociale",
    categorie: "Sociologie",
    discipline: "Sociologie et science politique",
    niveau: ["Seconde", "Première"],
    definition: "Idéal, principe moral ou croyance collective partagée par une société définissant ce qui est estimable, désirable, juste ou convenable.",
    interpretation: "Les valeurs guident les jugements et fondent les normes : par exemple, la valeur d'égalité donne naissance à la norme juridique du suffrage universel.",
    exemple: "La liberté, la solidarité, l'égalité, le respect d'autrui ou la réussite individuelle sont des valeurs centrales des démocraties contemporaines.",
    pointsCles: ["Idéaux partagés", "Principes moraux collectifs", "Fondement des normes sociales", "Évolution historique des valeurs"]
  },
  {
    id: "role-social",
    terme: "Rôle social",
    categorie: "Sociologie",
    discipline: "Sociologie et science politique",
    niveau: ["Seconde", "Première"],
    definition: "Ensemble des comportements, attitudes et devoirs attendus par la société d'un individu occupant une position (statut) sociale déterminée.",
    interpretation: "Un même individu cumule plusieurs rôles sociaux (parent, salarié, ami, citoyen) qui peuvent parfois entrer en conflit (conflit de rôles).",
    exemple: "On attend d'un professeur qu'il fasse preuve de neutralité, de pédagogie et de ponctualité pendant ses cours.",
    pointsCles: ["Attentes de la société", "Associé à un statut social", "Modèles de conduite appris", "Possibles conflits de rôles"]
  },
  {
    id: "statut-social",
    terme: "Statut social",
    categorie: "Sociologie",
    discipline: "Sociologie et science politique",
    niveau: ["Seconde", "Première"],
    definition: "Position occupée par un individu au sein d'une structure sociale donnée, déterminée par sa profession, ses diplômes, son revenu, son âge ou son sexe.",
    interpretation: "Le statut confère des droits, des privilèges et du prestige, et prescrit en retour le rôle social que l'individu doit incarner.",
    exemple: "Le statut de médecin confère un prestige social élevé et une autorité morale reconnue dans la communauté.",
    pointsCles: ["Position dans la hiérarchie sociale", "Statut assigné vs Statut acquis", "Prestige et privilèges associés", "Générateur d'attentes de rôle"]
  },
  {
    id: "controle-social-formel",
    terme: "Contrôle social formel",
    categorie: "Sociologie",
    discipline: "Sociologie et science politique",
    niveau: ["Seconde", "Première"],
    definition: "Ensemble des mécanismes de régulation mis en œuvre par des institutions spécialisées (police, justice, administration) pour faire respecter les règles de droit écrites.",
    interpretation: "Il s'appuie sur des sanctions codifiées (amendes, peines de prison, blâmes) lorsque la persuasion et les normes informelles ne suffisent plus.",
    exemple: "Un automobiliste flashé pour excès de vitesse reçoit une amende et un retrait de points appliqués par l'administration policière.",
    pointsCles: ["Institutions spécialisées (justice, police)", "Sanctions officielles écrites", "Répression des infractions légales", "Régulation institutionnelle"]
  },
  {
    id: "controle-social-informel",
    terme: "Contrôle social informel",
    categorie: "Sociologie",
    discipline: "Sociologie et science politique",
    niveau: ["Seconde", "Première"],
    definition: "Régulation spontanée et continue des comportements exercée par l'entourage immédiat (famille, amis, collègues, passants) au cours des interactions quotidiennes.",
    interpretation: "Il fonctionne par des sanctions diffuses et non écrites (regard désapprobateur, moquerie, rumeur, exclusion du groupe) pour maintenir la conformité.",
    exemple: "Un regard réprobateur des autres passagers dans un train lorsqu'une personne parle trop fort au téléphone.",
    pointsCles: ["Interactions du quotidien", "Famille, pairs, voisins", "Sanctions diffuses (sourire, moquerie, rejet)", "Auto-régulation de proximité"]
  },
  {
    id: "anomie-durkheim",
    terme: "Anomie (Durkheim)",
    categorie: "Sociologie",
    discipline: "Sociologie et science politique",
    niveau: ["Première"],
    definition: "Situation de désorganisation sociale caractérisée par l'affaiblissement ou l'absence de règles collectives claires capables de modérer les désirs individuels.",
    interpretation: "Pour Émile Durkheim, les mutations économiques trop rapides plongent les individus dans un désarroi moral pouvant conduire à la déviance ou au suicide anomique.",
    exemple: "Les périodes de crise économique brutale ou d'enrichissement soudain où les repères moraux traditionnels s'effondrent.",
    pointsCles: ["Émile Durkheim", "Déficit de régulation sociale", "Perte de repères normatifs", "Suicide anomique"]
  },
  {
    id: "anomie-merton",
    terme: "Anomie (Merton)",
    categorie: "Sociologie",
    discipline: "Sociologie et science politique",
    niveau: ["Première"],
    definition: "Décalage structurel entre les buts culturels valorisés par la société (réussite financière) et les moyens institutionnels légitimes dont disposent les individus pour les atteindre.",
    interpretation: "Robert K. Merton montre que ce décalage pousse certains individus défavorisés à innover par la déviance (criminalité, vol) pour accéder malgré tout aux idéaux de réussite.",
    exemple: "Un jeune sans diplôme qui se tourne vers le trafic de stupéfiants pour accéder aux signes extérieurs de richesse valorisés par la société de consommation.",
    pointsCles: ["Robert K. Merton", "Buts culturels vs Moyens légitimes", "Typologie des adaptations (innovation, conformisme)", "Origine structurelle de la délinquance"]
  },
  {
    id: "etiquetage-becker",
    terme: "Théorie de l'étiquetage (Becker)",
    categorie: "Sociologie",
    discipline: "Sociologie et science politique",
    niveau: ["Première"],
    definition: "Approche sociologique montrant que la déviance n'est pas une qualité intrinsèque d'un acte, mais le produit d'un processus social d'assignation d'une étiquette par autrui.",
    interpretation: "Howard Becker montre que l'individu étiqueté comme 'délinquant' intériorise ce stigmate, ce qui l'enferme dans une 'carrière déviante' par rejet du reste de la société.",
    exemple: "Un adolescent surpris en train de voler qui, rejeté par son lycée et fiché, finit par s'associer exclusivement à d'autres jeunes marginalisés.",
    pointsCles: ["Howard Becker (Outsiders, 1963)", "Déviance comme construction sociale", "Processus d'assignation d'étiquette", "Carrière déviante"]
  },
  {
    id: "stigmate-goffman",
    terme: "Stigmate social (Goffman)",
    categorie: "Sociologie",
    discipline: "Sociologie et science politique",
    niveau: ["Première"],
    definition: "Attribut physique, moral ou d'appartenance sociale jugé dévalorisant par la collectivité, qui disqualifie l'individu et l'empêche d'être pleinement accepté.",
    interpretation: "Erving Goffman analyse comment les individus stigmatisés déploient des stratégies de dissimulation ou de gestion de leur identité dans les interactions face-à-face.",
    exemple: "Un ancien détenu qui cache son passé carcéral lors d'un entretien d'embauche pour éviter le rejet immédiat du recruteur.",
    pointsCles: ["Erving Goffman", "Identité discréditée ou discréditable", "Gestion du stigmate en interaction", "Disqualification sociale"]
  },
  {
    id: "action-collective",
    terme: "Action collective",
    categorie: "Science politique",
    discipline: "Sociologie et science politique",
    niveau: ["Première"],
    definition: "Action concertée et organisée de plusieurs individus ou groupes poursuivant un objectif commun de défense d'intérêts partagés ou de transformation sociale.",
    interpretation: "Elle prend des formes variées (manifestations, grèves, pétitions, boycotts) et constitue un moteur démocratique essentiel de l'évolution des droits sociaux.",
    exemple: "Les manifestations syndicales contre une réforme des retraites ou les marches des lycéens pour le climat.",
    pointsCles: ["Mobilisation concertée", "Défense d'un intérêt commun", "Formes variées d'expression publique", "Moteur du changement social"]
  },
  {
    id: "paradoxe-olson",
    terme: "Paradoxe de l'action collective (Olson)",
    categorie: "Science politique",
    discipline: "Sociologie et science politique",
    niveau: ["Première"],
    definition: "Constat rationnel (Mancur Olson, 1965) selon lequel un individu a intérêt à ne pas participer aux coûts d'une action collective tout en espérant profiter des bénéfices obtenus (passager clandestin).",
    interpretation: "Si tous les agents raisonnent de manière égoïste, l'action collective ne devrait jamais avoir lieu ; son émergence s'explique par les incitations sélectives et les rétributions symboliques.",
    exemple: "Un salarié qui ne fait pas grève (ne perd pas de salaire) mais bénéficiera de l'augmentation générale de paie obtenue par les grévistes.",
    pointsCles: ["Mancur Olson (1965)", "Comportement de passager clandestin (free rider)", "Coûts individuels vs Gains collectifs", "Nécessité d'incitations"]
  },
  {
    id: "incitations-selectives",
    terme: "Incitations sélectives",
    categorie: "Science politique",
    discipline: "Sociologie et science politique",
    niveau: ["Première"],
    definition: "Mécanismes de récompenses matérielles ou de pénalités réservés exclusivement aux membres participants d'une organisation pour les inciter à s'engager dans l'action collective.",
    interpretation: "Solution théorisée par Olson pour surmonter le comportement de passager clandestin en réservant certains avantages aux seuls syndiqués ou militants actifs.",
    exemple: "Une caisse de grève qui n'indemnise que les adhérents à jour de cotisation, ou une protection juridique exclusive pour les membres du syndicat.",
    pointsCles: ["Mancur Olson", "Réservées aux seuls membres", "Récompenses positives ou sanctions négatives", "Dépassement du dilemme du passager clandestin"]
  },
  {
    id: "retributions-symboliques",
    terme: "Rétributions symboliques",
    categorie: "Science politique",
    discipline: "Sociologie et science politique",
    niveau: ["Première"],
    definition: "Gains non matériels tirés de la participation à une action collective : estime de soi, reconnaissance sociale, amitié, sentiment de fierté ou d'accomplissement moral.",
    interpretation: "Forgé par Daniel Gaxie, ce concept explique pourquoi des individus s'engagent bénévolement et intensément sans contrepartie financière immédiate.",
    exemple: "Le sentiment de solidarité, de convivialité et d'utilité sociale ressenti par les bénévoles lors des maraudes associatives ou sur un piquet de grève.",
    pointsCles: ["Daniel Gaxie", "Gains immatériels", "Reconnaissance et valorisation de soi", "Moteur puissant de l'engagement militant"]
  },
  {
    id: "repertoire-action-collective",
    terme: "Répertoire d'action collective",
    categorie: "Science politique",
    discipline: "Sociologie et science politique",
    niveau: ["Première"],
    definition: "Ensemble limité de formes de protestation et de contestation connues, acceptées et maîtrisées par les acteurs sociaux à une époque historique donnée.",
    interpretation: "Théorisé par Charles Tilly, ce répertoire a évolué d'un modèle local et violent au XVIIIe siècle (émeutes de subsistance) vers un modèle national et pacifié (grèves, pétitions, cyber-militantisme).",
    exemple: "Le recours aux pétitions en ligne, aux 'happenings' médiatiques ou aux blocages de ronds-points illustre le renouvellement contemporain du répertoire.",
    pointsCles: ["Charles Tilly", "Formes de protestation historiquement situées", "Évolution du local au national/global", "Du recours à la violence vers la médiatisation"]
  },
  {
    id: "structure-opportunites-politiques",
    terme: "Structure des opportunités politiques",
    categorie: "Science politique",
    discipline: "Sociologie et science politique",
    niveau: ["Première"],
    definition: "Configuration de l'environnement institutionnel et politique qui rend plus ou moins accessible, coûteux et efficace le déclenchement d'une mobilisation collective.",
    interpretation: "L'ouverture des institutions, la présence d'alliés au pouvoir ou les divisions au sein des élites offrent des fenêtres d'opportunité favorables aux contestataires.",
    exemple: "La veille d'une élection présidentielle offre un contexte plus favorable pour obtenir des concessions du gouvernement par la grève qu'au lendemain d'un scrutin.",
    pointsCles: ["Contexte institutionnel et politique", "Ouverture ou fermeture du système", "Alliés influents au pouvoir", "Moments propices à la victoire des mouvements"]
  },

  // ================================================================
  // EXTENSION PROGRAMME : COMMERCE INTERNATIONAL, TRAVAIL & PROTECTION SOCIALE
  // ================================================================
  {
    id: "avantage-absolu",
    terme: "Avantage absolu (Smith)",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Théorie d'Adam Smith (1776) selon laquelle un pays a intérêt à se spécialiser dans la production des biens pour lesquels ses coûts de fabrication sont strictement inférieurs à ceux de ses partenaires étrangers.",
    interpretation: "Elle justifie le libre-échange par la division internationale du travail, mais ne parvient pas à expliquer pourquoi un pays moins efficace dans tous les domaines peut quand même échanger avec profit.",
    exemple: "Le Royaume-Uni produisant des draps avec moins d'heures de travail que le Portugal, et le Portugal produisant du vin plus efficacement que l'Angleterre.",
    pointsCles: ["Adam Smith (1776)", "Coûts de production minimaux", "Division internationale du travail", "Limite théorique résolue par Ricardo"]
  },
  {
    id: "avantage-comparatif",
    terme: "Avantage comparatif (Ricardo)",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Théorie de David Ricardo (1817) démontrant qu'un pays a toujours intérêt à se spécialiser dans le domaine où son avantage de productivité est le plus grand, ou son désavantage le plus faible.",
    interpretation: "Même si un pays est moins productif qu'un autre pour tous les biens, l'échange mutuel reste avantageux s'il se concentre sur sa production la moins coûteuse en termes relatifs (coût d'opportunité).",
    exemple: "L'Angleterre se spécialise dans le textile et le Portugal dans le vin : tous deux gagnent à échanger, même si le Portugal est plus productif dans les deux biens en valeur absolue.",
    pointsCles: ["David Ricardo (1817)", "Coûts relatifs et coût d'opportunité", "Gains à l'échange mutuels", "Fondement universel du libre-échange"]
  },
  {
    id: "dotations-factorielles-hos",
    terme: "Théorème HOS (Dotations factorielles)",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Modèle néoclassique (Heckscher-Ohlin-Samuelson) affirmant qu'un pays se spécialise et exporte les biens qui utilisent de façon intensive le facteur de production (travail ou capital) dont il est abondamment doté.",
    interpretation: "Les pays riches en capitaux et ingénieurs exportent des biens technologiques, tandis que les pays dotés d'une main-d'œuvre nombreuse et bon marché exportent des produits manufacturés d'assemblage.",
    exemple: "L'Allemagne exporte des machines-outils complexes (abondance de capital) et importe des vêtements confectionnés en Asie du Sud-Est (abondance de main-d'œuvre).",
    pointsCles: ["Heckscher, Ohlin, Samuelson", "Abondance relative des facteurs L et K", "Spécialisation selon les dotations", "Égalisation internationale du prix des facteurs"]
  },
  {
    id: "commerce-intra-branche",
    terme: "Commerce intra-branche",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Échange croisé de produits similaires appartenant à la même branche d'activité entre pays ayant des niveaux de développement comparables.",
    interpretation: "Théorisé par Paul Krugman, il s'explique par la différenciation des produits (horizontale ou verticale) et la recherche de variété par les consommateurs, contredisant le modèle HOS traditionnel.",
    exemple: "La France exporte des Peugeot et Renault vers l'Allemagne et importe en retour des Volkswagen et BMW.",
    pointsCles: ["Échange de biens similaires", "Différenciation de produit", "Paul Krugman", "Recherche de variété des consommateurs"]
  },
  {
    id: "chaine-de-valeur-mondiale",
    terme: "Chaîne de valeur mondiale",
    sigle: "CVM",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Fragmentation internationale du processus de production d'un bien en multiples étapes géographiquement dispersées afin d'exploiter les avantages comparatifs de chaque territoire.",
    interpretation: "Les étapes à forte valeur ajoutée (R&D, design, marketing) restent dans les pays développés, tandis que l'assemblage et la fabrication brute sont délocalisés vers les pays à bas coûts salariaux (courbe du sourire).",
    exemple: "Un smartphone conçu aux États-Unis, intégrant des puces coréennes, des capteurs japonais et assemblé en Chine avant d'être vendu en Europe.",
    pointsCles: ["Fragmentation internationale de la production (FIP)", "Courbe du sourire", "Spécialisation par tâche", "Rôle des firmes multinationales"]
  },
  {
    id: "competitivite-prix",
    terme: "Compétitivité-prix",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Capacité d'une entreprise ou d'un pays à vendre ses produits moins cher que ses concurrents à qualité équivalente.",
    interpretation: "Elle dépend directement des coûts salariaux unitaires, du coût du capital, de la fiscalité, de la productivité et de l'évolution du taux de change de la monnaie nationale.",
    exemple: "Une compagnie aérienne low-cost qui gagne des parts de marché en comprimant tous ses coûts opérationnels pour casser les prix des billets.",
    pointsCles: ["Concurrence par les prix", "Coût salarial unitaire", "Taux de change de la monnaie", "Sensible aux délocalisations"]
  },
  {
    id: "competitivite-hors-prix",
    terme: "Compétitivité hors-prix (Structurelle)",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Capacité d'une entreprise ou d'un pays à s'imposer sur les marchés indépendamment de ses prix, grâce à la qualité, l'innovation, la marque, le design ou le service après-vente.",
    interpretation: "Moins vulnérable à la concurrence des pays à bas salaires, elle repose sur l'investissement massif en R&D, la réputation et la qualification des salariés (modèle allemand).",
    exemple: "Le secteur du luxe français (LVMH, Hermès) ou l'industrie des machines industrielles allemandes vendus très cher grâce à leur prestige et fiabilité.",
    pointsCles: ["Qualité, innovation, marque", "Fidélité client", "Indépendance relative au prix", "Stratégie de montée en gamme"]
  },
  {
    id: "protectionnisme-educateur",
    terme: "Protectionnisme éducateur (List)",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Théorie de Friedrich List (1841) préconisant la mise en place temporaire de barrières douanières pour protéger les industries naissantes le temps qu'elles atteignent une taille critique et des économies d'échelle suffisantes pour affronter la concurrence mondiale.",
    interpretation: "Ce n'est pas un refus du libre-échange mais une étape d'apprentissage transitoire : 'le protectionnisme est notre voie, le libre-échange notre but'.",
    exemple: "La Corée du Sud dans les années 1960-1980 protégeant son industrie automobile et électronique naissante (Samsung, Hyundai) avant de s'ouvrir mondialement.",
    pointsCles: ["Friedrich List (1841)", "Industries dans l'enfance (infant industries)", "Droits de douane transitoires", "Rattrapage technologique"]
  },
  {
    id: "barriere-non-tarifaire",
    terme: "Barrière non tarifaire",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Mesure de protection commerciale ne passant pas par un droit de douane : quotas d'importation, normes techniques, règles sanitaires ou formalités administratives restrictives.",
    interpretation: "Souvent justifiées par la sécurité ou l'écologie, elles servent fréquemment de protectionnisme déguisé pour freiner les importations étrangères.",
    exemple: "L'interdiction d'importer du bœuf aux hormones américain dans l'Union européenne au nom du principe de précaution sanitaire.",
    pointsCles: ["Quotas d'importation", "Normes sanitaires et techniques", "Protectionnisme déguisé", "Régulation par l'OMC"]
  },
  {
    id: "population-active",
    terme: "Population active",
    categorie: "Emploi",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Ensemble des personnes en âge de travailler (15 ans ou plus) qui exercent une activité professionnelle rémunérée (actifs occupés) ou qui en recherchent une (chômeurs).",
    interpretation: "Elle mesure la main-d'œuvre disponible sur le marché du travail ; la population active exclut les inactifs (étudiants, retraités, personnes au foyer).",
    exemple: "En France, la population active s'élève à environ 30,5 millions de personnes en 2024.",
    pointsCles: ["Actifs occupés + Chômeurs", "Main-d'œuvre disponible", "Taux d'activité = Actifs / Âge de travailler", "S'oppose aux inactifs"]
  },
  {
    id: "taux-chomage-bit",
    terme: "Chômage au sens du BIT",
    sigle: "BIT",
    categorie: "Emploi",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Définition internationale harmonisée du chômage : est chômeur toute personne de 15 ans ou plus n'ayant pas travaillé ne serait-ce qu'une heure dans la semaine de référence, disponible sous deux semaines et cherchant activement un emploi.",
    interpretation: "Mesuré en France par l'enquête Emploi de l'INSEE, ce critère permet de comparer rigoureusement le chômage entre tous les pays de l'OCDE.",
    exemple: "Un taux de chômage BIT de 7,4 % signifie que 7,4 % des personnes actives sont sans travail et en recherche active.",
    pointsCles: ["3 critères : sans travail, disponible, recherche active", "Harmonisation internationale (BIT)", "Enquête Emploi de l'INSEE", "Rapporté à la population active"]
  },
  {
    id: "halo-du-chomage",
    terme: "Halo du chômage",
    categorie: "Emploi",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Zone grise et intermédiaire entre l'emploi, le chômage au sens strict et l'inactivité, regroupant les personnes sans emploi qui souhaitent travailler mais ne remplissent pas tous les critères du BIT.",
    interpretation: "Il comprend les chômeurs découragés qui ont cessé de chercher activement ou ceux qui ne sont pas immédiatement disponibles, représentant près de 2 millions de personnes en France.",
    exemple: "Un travailleur de 58 ans sans emploi qui aimerait travailler mais ne postule plus par découragement face aux refus répétés.",
    pointsCles: ["Zone floue entre chômage et inactivité", "Travailleurs découragés", "Sous-estimation du chômage officiel", "Concept mesuré par l'INSEE"]
  },
  {
    id: "sous-emploi",
    terme: "Sous-emploi",
    categorie: "Emploi",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Situation de personnes qui ont un emploi mais travaillent involontairement moins d'heures qu'elles ne le souhaiteraient (temps partiel subi ou chômage partiel).",
    interpretation: "Le sous-emploi touche particulièrement les femmes et les jeunes dans les services (grande distribution, restauration) et constitue une forme de précarité masquée.",
    exemple: "Une caissière en contrat de 20 heures par semaine qui cherche désespérément un temps plein de 35 heures pour boucler son budget.",
    pointsCles: ["Temps partiel subi", "Chômage technique/partiel", "Précarité de l'emploi", "Touche majoritairement les femmes"]
  },
  {
    id: "chomage-structurel",
    terme: "Chômage structurel",
    categorie: "Emploi",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Part du chômage indépendante de la conjoncture économique, liée au fonctionnement institutionnel du marché du travail, aux rigidités réglementaires et aux inadéquations de qualifications.",
    interpretation: "Il persiste même en période de forte croissance économique et se combat par des réformes de formation professionnelle, d'orientation et de flexibilité.",
    exemple: "Des milliers d'emplois de soudeurs ou d'ingénieurs en informatique non pourvus coexistant avec un chômage élevé faute de candidats qualifiés.",
    pointsCles: ["Inadéquation offre/demande de compétences (mismatch)", "Rigidités institutionnelles", "Indépendant du cycle économique", "Nécessite des politiques d'offre et de formation"]
  },
  {
    id: "chomage-conjoncturel",
    terme: "Chômage conjoncturel (Keynésien)",
    categorie: "Emploi",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Chômage causé par une insuffisance temporaire de la demande globale (consommation, investissement, exportations) par rapport aux capacités productives disponibles.",
    interpretation: "Dans l'analyse de Keynes, les entreprises anticipent une demande effective trop faible et réduisent leurs embauches : seul un plan de relance budgétaire peut résorber ce chômage.",
    exemple: "La chute brutale des commandes d'avions et de voitures lors d'une récession mondiale entraînant des licenciements économiques et des gels d'embauches.",
    pointsCles: ["J.M. Keynes", "Déficit de demande effective", "Lié aux fluctuations du cycle économique", "Se traite par la relance budgétaire et monétaire"]
  },
  {
    id: "salaire-efficience",
    terme: "Salaire d'efficience (Shapiro-Stiglitz)",
    categorie: "Emploi",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Théorie économique selon laquelle l'employeur fixe délibérément le salaire au-dessus du niveau d'équilibre du marché pour motiver ses salariés, réduire la rotation du personnel (turnover) et attirer les meilleurs profils.",
    interpretation: "Ce salaire incitatif génère du chômage involontaire car les entreprises embauchent moins de salariés à ce tarif plus élevé, empêchant le salaire de baisser pour équilibrer le marché.",
    exemple: "Henry Ford instaurant la journée à 5 dollars en 1914 pour fidéliser ses ouvriers à la chaîne et doubler leur productivité.",
    pointsCles: ["Joseph Stiglitz / Carl Shapiro", "Salaire incitatif > Salaire d'équilibre", "Motivation et fidélisation", "Cause de chômage d'équilibre"]
  },
  {
    id: "insiders-outsiders",
    terme: "Modèle Insiders / Outsiders (Lindbeck-Snower)",
    categorie: "Emploi",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Modèle expliquant le chômage par le pouvoir de négociation des salariés en poste protégés (insiders) qui empêchent la baisse des salaires au détriment des demandeurs d'emploi exclus (outsiders).",
    interpretation: "En raison des coûts de licenciement et de recrutement (coûts de rotation), les entreprises préfèrent concéder des hausses de salaires aux insiders plutôt que d'embaucher des chômeurs moins chers.",
    exemple: "Des salariés en CDI syndiqués négociant de fortes augmentations sans que l'entreprise n'embauche les jeunes diplômés en recherche d'emploi.",
    pointsCles: ["Assar Lindbeck / Dennis Snower", "Dualisme du marché du travail", "Coûts de rotation de la main-d'œuvre", "Protection des en-poste vs exclusion des chômeurs"]
  },
  {
    id: "modele-bismarckien",
    terme: "Protection sociale bismarckienne",
    categorie: "Justice sociale",
    discipline: "Regards croisés",
    niveau: ["Première"],
    definition: "Système d'assurance sociale fondé sur le travail (créé par Otto von Bismarck en Allemagne à la fin du XIXe siècle), où la couverture des risques dépend du versement préalable de cotisations sociales assises sur les salaires.",
    interpretation: "Il protège le statut social du travailleur en lui garantissant un revenu proportionnel à ses cotisations passées (logique d'assurance).",
    exemple: "Le système français originel de Sécurité sociale de 1945, financé par les cotisations des salariés et des employeurs.",
    pointsCles: ["Otto von Bismarck (1883)", "Logique assurantielle liée à l'emploi", "Financement par cotisations sociales", "Prestations proportionnelles aux cotisations"]
  },
  {
    id: "modele-beveridgien",
    terme: "Protection sociale beveridgienne",
    categorie: "Justice sociale",
    discipline: "Regards croisés",
    niveau: ["Première"],
    definition: "Système de protection sociale universel et assistanciel (rapport de William Beveridge en 1942 au Royaume-Uni) reposant sur les 3U : Universalité (pour tous), Unité (gestion unique) et Uniformité (prestations forfaitaires identiques financées par l'impôt).",
    interpretation: "Il vise à garantir un filet de sécurité minimal contre la pauvreté pour l'ensemble des citoyens sans condition d'activité professionnelle.",
    exemple: "Le National Health Service (NHS) britannique ou le système de santé universel français (PUMA) financé par la CSG.",
    pointsCles: ["William Beveridge (1942)", "Les 3 U : Universel, Uniforme, Unifié", "Financement par l'impôt généralisé", "Logique de solidarité et d'assistance"]
  },
  {
    id: "redistribution-verticale",
    terme: "Redistribution verticale",
    categorie: "Justice sociale",
    discipline: "Regards croisés",
    niveau: ["Seconde", "Première"],
    definition: "Transfert de revenus opéré par l'État des ménages les plus riches vers les ménages les plus modestes afin de réduire l'éventail des inégalités économiques.",
    interpretation: "Elle fonctionne principalement via l'impôt progressif sur le revenu et les prestations sociales sous condition de ressources (minima sociaux, prime d'activité).",
    exemple: "Prélever un impôt progressif sur les hauts patrimoines pour financer le Revenu de Solidarité Active (RSA) versé aux foyers sans ressources.",
    pointsCles: ["Riches vers pauvres", "Réduction des inégalités de niveau de vie", "Impôt progressif + Minima sociaux", "Logique de justice distributive"]
  },
  {
    id: "redistribution-horizontale",
    terme: "Redistribution horizontale",
    categorie: "Justice sociale",
    discipline: "Regards croisés",
    niveau: ["Seconde", "Première"],
    definition: "Transfert de revenus entre catégories de population pour couvrir un risque social sans visée de réduction des inégalités de classe : des bien-portants vers les malades, des actifs vers les retraités, des célibataires vers les familles.",
    interpretation: "C'est le principe de solidarité collective de l'assurance maladie et des allocations familiales, indépendamment du niveau de fortune de l'assuré.",
    exemple: "Un cadre bien-portant qui cotise pour soigner un autre cadre souffrant d'un cancer : solidarité face au risque de santé.",
    pointsCles: ["Mutualisation des risques", "Bien-portants -> Malades, Actifs -> Retraités", "Indépendante du niveau de revenu", "Cœur de la Sécurité sociale"]
  },
  {
    id: "indice-de-gini",
    terme: "Indice de Gini",
    categorie: "Justice sociale",
    discipline: "Regards croisés",
    niveau: ["Première"],
    definition: "Indicateur statistique synthétique mesurant le niveau d'inégalité des revenus ou du patrimoine au sein d'une population, compris entre 0 (égalité absolue) et 1 (inégalité totale).",
    interpretation: "Graphiquement calculé à partir de l'écart entre la courbe de Lorenz et la diagonale d'égalité parfaite, il permet de comparer l'efficacité redistributive des pays.",
    exemple: "En France, l'indice de Gini des revenus est d'environ 0,29 après redistribution (contre 0,39 aux États-Unis et 0,25 dans les pays scandinaves).",
    pointsCles: ["Compris entre 0 et 1", "Dérivé de la courbe de Lorenz", "Mesure synthétique des inégalités", "Baisse après transferts fiscaux et sociaux"]
  },
  {
    id: "courbe-de-lorenz",
    terme: "Courbe de Lorenz",
    categorie: "Justice sociale",
    discipline: "Regards croisés",
    niveau: ["Première"],
    definition: "Représentation graphique de la répartition cumulée des revenus ou du patrimoine associant le pourcentage cumulé de la population au pourcentage cumulé des richesses perçues.",
    interpretation: "Plus la courbe s'éloigne de la diagonale de parfaite égalité (bissectrice à 45°), plus la société est inégalitaire.",
    exemple: "Si 50 % de la population ne perçoit que 20 % du revenu national total, la courbe de Lorenz s'incurve fortement sous la bissectrice.",
    pointsCles: ["Pourcentages cumulés population vs revenu", "Diagonale d'égalité parfaite", "Aire de concentration de Gini", "Visualisation des disparités"]
  },
  {
    id: "seuil-de-pauvrete",
    terme: "Seuil de pauvreté monétaire",
    categorie: "Justice sociale",
    discipline: "Regards croisés",
    niveau: ["Seconde", "Première"],
    definition: "Niveau de revenu en dessous duquel un ménage est considéré comme pauvre, fixé en France et en Europe à 60 % (ou 50 %) du niveau de vie médian de la population.",
    interpretation: "La pauvreté est ici mesurée de manière relative et non absolue : être pauvre, c'est être exclu du train de vie moyen de la société à laquelle on appartient.",
    exemple: "En 2024 en France, le seuil de pauvreté à 60 % est d'environ 1 150 € par mois pour une personne seule.",
    pointsCles: ["Pauvreté relative", "60 % du niveau de vie médian", "Mesuré par l'INSEE", "Dépend du niveau de vie global du pays"]
  },
  {
    id: "taxe-carbone",
    terme: "Taxe carbone (Taxe pigouvienne)",
    categorie: "Défaillances de marché",
    discipline: "Regards croisés",
    niveau: ["Première"],
    definition: "Taxe environnementale (inspirée d'Arthur Cecil Pigou) frappant les énergies fossiles en proportion de leurs émissions de gaz à effet de serre (CO2).",
    interpretation: "Elle vise à internaliser l'externalité négative en envoyant un 'signal-prix' qui incite les consommateurs et industriels à réduire leurs consommations polluantes.",
    exemple: "La contribution climat énergie (CCE) intégrée au prix du carburant à la pompe en France pour inciter au covoiturage et aux véhicules électriques.",
    pointsCles: ["Arthur C. Pigou", "Internalisation des externalités négatives", "Signal-prix pour décarboner", "Principe pollueur-payeur"]
  },
  {
    id: "marche-quotas-emission",
    terme: "Marché des quotas d'émission (ETS)",
    categorie: "Défaillances de marché",
    discipline: "Regards croisés",
    niveau: ["Première"],
    definition: "Système de marché (inspiré de Ronald Coase) où l'autorité publique plafonne les émissions polluantes globales et alloue des permis d'émission échangeables entre entreprises.",
    interpretation: "Les entreprises les moins dépendantes au carbone vendent leurs quotas excédentaires aux entreprises les plus polluantes, ce qui incite à dépolluer là où c'est le moins coûteux.",
    exemple: "Le marché européen du carbone (EU ETS) qui couvre plus de 10 000 installations industrielles et centrales électriques dans l'UE.",
    pointsCles: ["Théorème de Coase", "Plafond global décroissant (Cap and Trade)", "Échange de droits à polluer", "Outil central du Pacte vert européen"]
  },

  // ================================================================
  // EXTENSION PROGRAMME : FINANCE D'ENTREPRISE, POLITIQUE ÉCONOMIQUE & STATISTIQUES
  // ================================================================
  {
    id: "capacite-autofinancement",
    terme: "Capacité d'autofinancement",
    sigle: "CAF",
    categorie: "Entreprise",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Ressource financière interne générée par l'activité de l'entreprise au cours de l'exercice, restant disponible après paiement des charges décaissables pour financer les investissements, rembourser les dettes et verser des dividendes.",
    interpretation: "Indicateur vital de santé financière : une CAF robuste permet à l'entreprise d'investir sans dépendre excessivement du crédit bancaire ou des marchés financiers.",
    exemple: "Une entreprise réalise 100 000 € de chiffre d'affaires et 70 000 € de charges courantes décaissées : sa CAF brute est de 30 000 €.",
    pointsCles: ["Flux de trésorerie interne", "Financement de l'investissement", "Indépendance financière", "Gage de solvabilité pour les banques"]
  },
  {
    id: "besoin-fonds-de-roulement",
    terme: "Besoin en fonds de roulement",
    sigle: "BFR",
    categorie: "Entreprise",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Montant financier qu'une entreprise doit financer pour couvrir le décalage temporel entre les décaissements (achats de stocks, salaires) et les encaissements (règlements des clients).",
    formule: "BFR = Stocks + Créances clients − Dettes fournisseurs",
    interpretation: "Un BFR mal maîtrisé ou en forte hausse lors d'une croissance trop rapide peut provoquer la faillite d'une entreprise pourtant rentable (crise de trésorerie).",
    exemple: "Une PME qui paie ses fournisseurs à 30 jours mais n'est payée par ses clients qu'à 90 jours doit financer 60 jours de décalage de trésorerie.",
    pointsCles: ["Décalage stocks + créances vs dettes", "Gestion du cycle d'exploitation", "BFR négatif (atout de la grande distribution)", "Risque d'asphyxie financière"]
  },
  {
    id: "fonds-de-roulement",
    terme: "Fonds de roulement net global",
    sigle: "FRNG",
    categorie: "Entreprise",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Excédent des ressources stables de l'entreprise (capitaux propres et dettes à long terme) sur ses emplois durables (actifs immobilisés), servant à financer le BFR.",
    formule: "FRNG = Capitaux permanents − Actifs immobilisés",
    interpretation: "Règle d'or financière : les investissements à long terme doivent être financés par des capitaux à long terme pour préserver la sécurité financière.",
    exemple: "Des capitaux propres et emprunts bancaires longs de 500 000 € finançant 400 000 € de machines dégagent un FRNG de 100 000 € de sécurité.",
    pointsCles: ["Ressources stables vs Emplois durables", "Matelas de sécurité financière", "Couverture du BFR", "Équilibre du bilan comptable"]
  },
  {
    id: "ratio-endettement-gearing",
    terme: "Ratio d'endettement (Gearing)",
    categorie: "Entreprise",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Rapport entre la dette financière nette d'une entreprise et ses capitaux propres, mesurant son degré de dépendance vis-à-vis des créanciers extérieurs.",
    formule: "Gearing = Dette financière nette / Capitaux propres",
    interpretation: "Les banques exigent généralement un ratio inférieur à 1 (100 %) pour continuer à prêter sans risque excessif de défaut.",
    exemple: "Une entreprise avec 2 M€ de dettes pour 4 M€ de fonds propres a un gearing de 0,5 (50 %), jugé très sain et solide.",
    pointsCles: ["Dette nette / Capitaux propres", "Mesure du risque financier", "Seuil prudentiel bancaire (~100 %)", "Levier d'action des actionnaires"]
  },
  {
    id: "rentabilite-financiere-roe",
    terme: "Rentabilité financière (ROE)",
    sigle: "ROE",
    categorie: "Entreprise",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Rapport entre le résultat net comptable et les capitaux propres apportés par les actionnaires, mesurant la capacité de l'entreprise à rémunérer son capital.",
    formule: "ROE = (Résultat net / Capitaux propres) × 100",
    interpretation: "Indicateur roi pour les marchés boursiers et les fonds de pension qui exigent souvent un ROE d'au moins 10 à 15 % par an.",
    exemple: "Une entreprise générant 15 M€ de bénéfice net pour 100 M€ de capitaux propres affiche un ROE de 15 %.",
    pointsCles: ["Return on Equity", "Rémunération des actionnaires", "Amplifié par l'effet de levier", "Critère clé des investisseurs boursiers"]
  },
  {
    id: "rentabilite-economique-roa",
    terme: "Rentabilité économique (ROA)",
    sigle: "ROA",
    categorie: "Entreprise",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Rapport entre le résultat d'exploitation (ou bénéfice avant intérêts et impôts) et l'ensemble des capitaux investis dans l'outil de production (actif économique total).",
    formule: "ROA = (Résultat d'exploitation / Actif total) × 100",
    interpretation: "Contrairement au ROE, elle mesure l'efficacité pure de l'outil industriel et commercial, indépendamment de la structure de financement (dette ou fonds propres).",
    exemple: "Une usine de 50 M€ d'actifs générant 5 M€ de résultat d'exploitation a une rentabilité économique intrinsèque de 10 %.",
    pointsCles: ["Return on Assets", "Performance de l'outil productif pur", "Indépendant du mode de financement", "Comparé au coût de la dette pour l'effet de levier"]
  },
  {
    id: "per-cours-benefice",
    terme: "Price Earning Ratio (PER)",
    sigle: "PER",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Multiple de valorisation boursière calculé en divisant le cours de l'action d'une entreprise par son bénéfice net par action (BNPA).",
    formule: "PER = Cours de l'action / Bénéfice net par action",
    interpretation: "Il indique combien de fois les bénéfices actuels les investisseurs sont prêts à payer pour acquérir l'entreprise : un PER élevé traduit une forte anticipation de croissance future.",
    exemple: "Une action cotée 60 € avec un bénéfice net par action de 3 € s'échange à un PER de 20 (20 années de bénéfices).",
    pointsCles: ["Multiple de capitalisation boursière", "Cherté relative d'une action", "Anticipation des profits futurs", "Moyenne historique des marchés (~15 à 20)"]
  },
  {
    id: "capitalisation-boursiere",
    terme: "Capitalisation boursière",
    categorie: "Finance",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Valeur totale d'une entreprise cotée en bourse à un instant donné, obtenue en multipliant le nombre total de ses actions en circulation par leur cours boursier.",
    formule: "Capitalisation = Nombre d'actions × Cours unitaire",
    interpretation: "Elle permet de classer les entreprises (grandes, moyennes, petites capitalisations) et de déterminer leur poids dans les indices comme le CAC 40.",
    exemple: "LVMH avec environ 500 millions d'actions cotées à 700 € pèse 350 milliards d'euros de capitalisation boursière.",
    pointsCles: ["Valeur de marché de l'entreprise", "Varie chaque seconde en bourse", "Critère d'entrée au CAC 40", "Représentation du capitalisme actionnarial"]
  },
  {
    id: "politique-budgetaire-expansionniste",
    terme: "Politique budgétaire de relance",
    categorie: "Macroéconomie",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Politique macroéconomique par laquelle le gouvernement augmente ses dépenses publiques ou réduit les impôts pour stimuler la demande globale, la production et l'emploi.",
    interpretation: "D'inspiration keynésienne, elle s'appuie sur le multiplicateur d'investissement mais creuse temporairement le déficit public et la dette de l'État.",
    exemple: "Le plan de relance de 100 milliards d'euros 'France Relance' adopté après la crise sanitaire pour soutenir l'activité économique.",
    pointsCles: ["J.M. Keynes", "Hausse des dépenses / Baisse d'impôts", "Multiplicateur budgétaire", "Creusement du déficit public"]
  },
  {
    id: "politique-austerite",
    terme: "Politique d'austérité (Rigueur)",
    categorie: "Macroéconomie",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Politique économique visant à assainir les finances publiques par une réduction drastique des dépenses publiques et/ou une augmentation des prélèvements obligatoires.",
    interpretation: "Elle vise à rassurer les créanciers et à réduire le ratio de dette/PIB, mais peut déprimer la croissance et aggraver le chômage à court terme (effet récessif).",
    exemple: "Les plans d'austérité budgétaire imposés à la Grèce, au Portugal et à l'Espagne après la crise des dettes souveraines en 2010-2012.",
    pointsCles: ["Réduction du déficit public", "Baisse des dépenses + Hausse des impôts", "Frein à la croissance à court terme", "Exigence des traités européens"]
  },
  {
    id: "pacte-stabilite-croissance",
    terme: "Pacte de stabilité et de croissance",
    sigle: "PSC",
    categorie: "Macroéconomie",
    discipline: "Regards croisés",
    niveau: ["Première"],
    definition: "Règle budgétaire commune adoptée par les pays de l'Union européenne en 1997 imposant de maintenir le déficit public sous 3 % du PIB et la dette publique sous 60 % du PIB.",
    interpretation: "Il vise à prévenir les déficits excessifs qui menaceraient la stabilité de la zone euro et de la monnaie unique, assorti d'une procédure de déficit excessif en cas d'infraction.",
    exemple: "L'ouverture par la Commission européenne d'une procédure pour déficit excessif contre la France en 2024 suite à un déficit à 5,5 % du PIB.",
    pointsCles: ["Critères de Maastricht (3 % déficit, 60 % dette)", "Coordination budgétaire européenne", "Procédure de déficit excessif (PDE)", "Discipline monétaire collective"]
  },
  {
    id: "triangle-incompatibilite-mundell",
    terme: "Triangle d'incompatibilité de Mundell",
    categorie: "Macroéconomie",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Théorème macroéconomique (Robert Mundell) démontrant qu'un pays ne peut pas poursuivre simultanément trois objectifs : changes fixes, liberté des capitaux et autonomie monétaire.",
    interpretation: "Un pays doit obligatoirement renoncer à l'un des trois pôles : les pays de la zone euro ont choisi des changes fixes (l'euro) et la libre circulation des capitaux, renonçant à leur politique monétaire nationale.",
    exemple: "La Banque de France ne peut pas fixer ses propres taux d'intérêt indépendamment de la BCE en raison de l'appartenance à la zone euro.",
    pointsCles: ["Robert Mundell", "3 pôles incompatibles", "Choix institutionnel des zones monétaires", "Abandon de la souveraineté monétaire nationale"]
  },
  {
    id: "zone-monetaire-optimale",
    terme: "Zone monétaire optimale (ZMO)",
    sigle: "ZMO",
    categorie: "Macroéconomie",
    discipline: "Regards croisés",
    niveau: ["Première"],
    definition: "Région géographique (Robert Mundell, 1961) où les bénéfices d'adopter une monnaie unique l'emportent sur les coûts de l'abandon de l'ajustement par le taux de change.",
    interpretation: "Pour être optimale, la zone doit disposer d'une forte mobilité de la main-d'œuvre, d'une flexibilité des salaires ou d'un budget fédéral redistributif puissant pour amortir les chocs asymétriques.",
    exemple: "La zone euro est souvent considérée comme une ZMO incomplète en raison de la faible mobilité linguistique des travailleurs et de la petitesse du budget de l'UE.",
    pointsCles: ["Robert Mundell (1961)", "Monnaie unique et chocs asymétriques", "Mobilité des facteurs de production", "Fédéralisme budgétaire nécessaire"]
  },
  {
    id: "devaluation-competitive",
    terme: "Dévaluation compétitive",
    categorie: "Commerce international",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Décision délibérée d'un État d'abaisser la valeur officielle de sa monnaie par rapport aux devises étrangères pour doper la compétitivité-prix de ses exportations.",
    interpretation: "En rendant ses produits moins chers à l'étranger et les importations plus chères chez lui, le pays stimule son solde commercial au détriment de ses partenaires (politique du 'chacun pour soi').",
    exemple: "Les dévaluations successives du franc français dans les années 1950 et 1980 pour rétablir la balance commerciale face au mark allemand.",
    pointsCles: ["Baisse de la valeur de la devise", "Gain immédiat de compétitivité-prix", "Inflation importée sur l'énergie", "Guerre des monnaies (beggar-thy-neighbour)"]
  },
  {
    id: "abstention-electorale",
    terme: "Abstention électorale",
    categorie: "Science politique",
    discipline: "Sociologie et science politique",
    niveau: ["Seconde", "Première"],
    definition: "Comportement d'un citoyen inscrit sur les listes électorales qui choisit de ne pas participer au vote lors d'un scrutin.",
    interpretation: "L'abstention peut traduire une exclusion sociale (cens caché selon Daniel Gaxie) ou un acte politique de protestation et de défiance envers l'offre politique (abstentionniste stratégique).",
    exemple: "Un taux d'abstention dépassant 50 % lors des élections législatives ou européennes en France.",
    pointsCles: ["Non-participation au vote", "Abstention sociologique vs politique", "Daniel Gaxie (cens caché)", "Indicateur de crise de la représentation"]
  },
  {
    id: "vote-de-classe",
    terme: "Vote de classe",
    categorie: "Science politique",
    discipline: "Sociologie et science politique",
    niveau: ["Première"],
    definition: "Corrélation forte entre l'appartenance à une classe sociale donnée (ouvriers, cadres, indépendants) et le choix du candidat ou du parti politique voté.",
    interpretation: "Historiquement mesuré par l'indice d'Alford (vote ouvrier pour la gauche), il s'est profondément transformé avec l'essor du vote populaire pour l'extrême droite et la progression de l'abstention.",
    exemple: "Le vote traditionnellement massif des ouvriers français pour le Parti communiste ou socialiste durant les Trente Glorieuses.",
    pointsCles: ["Indice d'Alford", "Déterminants sociologiques du vote", "Mutation du vote ouvrier", "Modèle de Columbia"]
  },
  {
    id: "clivage-gauche-droite",
    terme: "Clivage gauche-droite",
    categorie: "Science politique",
    discipline: "Sociologie et science politique",
    niveau: ["Seconde", "Première"],
    definition: "Axe structurant fondamental de la compétition politique en démocratie opposant schématiquement la volonté de justice sociale et de réduction des inégalités (gauche) à l'ordre, la liberté d'entreprendre et la tradition (droite).",
    interpretation: "Bien que contesté ou redéfini par l'émergence de nouveaux clivages (écologie, souverainisme vs mondialisme), il reste un repère cognitif central pour les électeurs.",
    exemple: "La gauche privilégiant la hausse du SMIC et des impôts sur les hauts patrimoines, la droite privilégiant la baisse des charges des entreprises et la rigueur budgétaire.",
    pointsCles: ["Axe structurant de la vie politique", "Égalité vs Liberté/Ordre", "Repère identitaire des électeurs", "Traversé par de nouveaux enjeux"]
  },
  {
    id: "cens-cache-gaxie",
    terme: "Cens caché (Daniel Gaxie)",
    categorie: "Science politique",
    discipline: "Sociologie et science politique",
    niveau: ["Première"],
    definition: "Théorie sociologique (Daniel Gaxie, 1978) montrant que, bien que le suffrage soit universel en droit, l'inégale détention du capital culturel exclut de fait les classes populaires de la participation politique réelle.",
    interpretation: "Se sentant 'incompétents' face à la complexité du jeu politique, les citoyens les moins diplômés s'auto-excluent par l'abstention, reproduisant une forme de suffrage censitaire déguisé.",
    exemple: "Des taux d'abstention nettement plus élevés chez les non-diplômés et ouvriers que chez les diplômés de l'enseignement supérieur.",
    pointsCles: ["Daniel Gaxie (1978)", "Incompétence politique perçue", "Lien diplôme / participation", "Illusion de l'égalité démocratique"]
  },
  {
    id: "mediane-statistique",
    terme: "Médiane",
    categorie: "Statistiques",
    discipline: "Méthodes",
    niveau: ["Seconde", "Première"],
    definition: "Valeur statistique qui partage une population ordonnée en deux groupes d'effectifs rigoureusement égaux : 50 % des individus se situent en dessous et 50 % au-dessus.",
    interpretation: "Contrairement à la moyenne, la médiane est insensible aux valeurs extrêmes, ce qui en fait un indicateur bien plus fidèle du niveau de vie réel des populations.",
    exemple: "Le salaire net médian en France est d'environ 2 100 € par mois : la moitié des salariés gagne moins, l'autre moitié gagne plus.",
    pointsCles: ["Sépare la population à 50/50", "Robuste aux valeurs extrêmes", "Préférée à la moyenne pour les revenus", "Notion fondamentale de SES"]
  },
  {
    id: "deciles-statistiques",
    terme: "Déciles (D1 à D9)",
    categorie: "Statistiques",
    discipline: "Méthodes",
    niveau: ["Seconde", "Première"],
    definition: "Valeurs statistiques qui partagent une distribution de données ordonnée en 10 tranches égales de 10 % de la population.",
    interpretation: "D1 représente le seuil au-dessous duquel se situent les 10 % les plus modestes, et D9 le seuil au-dessus duquel se situent les 10 % les plus aisés.",
    exemple: "En France, D1 pour les niveaux de vie est d'environ 1 000 €/mois et D9 d'environ 3 400 €/mois.",
    pointsCles: ["10 tranches de 10 %", "D1 = 1er décile, D9 = 9e décile", "Rapport interquintile (D9/D1)", "Analyse fine des inégalités"]
  },
  {
    id: "rapport-interdecile",
    terme: "Rapport interdécile",
    sigle: "D9/D1",
    categorie: "Statistiques",
    discipline: "Méthodes",
    niveau: ["Seconde", "Première"],
    definition: "Rapport entre le 9e décile (D9) et le 1er décile (D1) d'une distribution, mesurant l'écart relatif entre le haut et le bas de la hiérarchie des revenus.",
    formule: "Rapport interdécile = D9 / D1",
    interpretation: "Plus ce rapport est élevé, plus la société est inégalitaire ; il permet de suivre l'efficacité de la redistribution dans le temps.",
    exemple: "Un rapport D9/D1 de 3,4 signifie que le seuil des 10 % les plus riches est 3,4 fois plus élevé que le seuil des 10 % les plus modestes.",
    pointsCles: ["D9 / D1", "Mesure d'inégalité relative", "Insensible aux extrêmes des 1 %", "Indicateur standard de l'INSEE"]
  },
  {
    id: "elasticite-revenu",
    terme: "Élasticité-revenu de la demande",
    categorie: "Statistiques",
    discipline: "Science économique",
    niveau: ["Première"],
    definition: "Mesure de la sensibilité de la demande d'un bien aux variations du revenu des consommateurs, calculée comme le rapport entre la variation relative de la quantité et celle du revenu.",
    formule: "Er = (% variation de la demande) / (% variation du revenu)",
    interpretation: "Permet de classer les biens : biens inférieurs (Er < 0), biens normaux (0 < Er < 1) et biens supérieurs/de luxe (Er > 1, lois d'Engel).",
    exemple: "Si le revenu augmente de 10 % et la consommation de voyages en avion de 20 %, l'élasticité-revenu est de 2 (bien supérieur).",
    pointsCles: ["Sensibilité de la consommation au revenu", "Lois d'Engel", "Biens inférieurs / normaux / supérieurs", "Outil prévisionnel de marché"]
  },
  {
    id: "coefficient-budgetaire",
    terme: "Coefficient budgétaire",
    categorie: "Statistiques",
    discipline: "Science économique",
    niveau: ["Seconde", "Première"],
    definition: "Proportion des dépenses d'un ménage consacrée à une catégorie particulière de biens ou services par rapport au total de ses dépenses de consommation.",
    formule: "Coefficient budgétaire = (Dépense pour le poste X / Dépense totale) × 100",
    interpretation: "Loi d'Engel : plus le revenu d'un ménage s'élève, plus le coefficient budgétaire de l'alimentation baisse au profit de la santé, des loisirs et de la culture.",
    exemple: "Consacrer 600 € d'alimentation sur un budget mensuel total de 3 000 € correspond à un coefficient budgétaire de 20 %.",
    pointsCles: ["Part relative d'un poste de dépense", "Lois d'Ernst Engel", "Évolution avec le niveau de vie", "Structure de la consommation des ménages"]
  }
];

