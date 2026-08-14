export type SesDefinition = {
  id: string;
  terme: string;
  sigle?: string;
  categorie: string;
  definition: string;
  formule?: string;
  interpretation: string;
  exemple: string;
  pointsCles: string[];
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
  }
];
