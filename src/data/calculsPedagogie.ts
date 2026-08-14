export type CalculPedagogie = {
  definition: string;
  enClair: string;
};

export const pedagogieCalculs: Record<string, CalculPedagogie> = {
  proportion: {
    definition: "Une proportion mesure la part d'un sous-ensemble dans un ensemble total, le plus souvent en pourcentage.",
    enClair: "On cherche à savoir combien il y aurait d'éléments du groupe étudié si le total valait 100.",
  },
  'taux-de-variation': {
    definition: "Le taux de variation mesure l'évolution relative d'une grandeur entre une valeur de départ et une valeur d'arrivée.",
    enClair: "Il ne dit pas seulement combien on gagne ou perd, il rapporte cette variation à la valeur de départ.",
  },
  'taux-de-variation-cumule': {
    definition: "Le taux de variation cumulé mesure l'évolution totale après plusieurs variations successives.",
    enClair: "Chaque variation repart du nouveau niveau atteint : on multiplie les coefficients, on n'additionne pas simplement les taux.",
  },
  'coefficient-multiplicateur': {
    definition: "Le coefficient multiplicateur indique par combien une valeur initiale a été multipliée pour obtenir la valeur finale.",
    enClair: "Un coefficient supérieur à 1 signifie une hausse ; inférieur à 1, une baisse.",
  },
  'indice-base-100': {
    definition: "Un indice en base 100 compare une valeur à une valeur de référence que l'on fixe à 100.",
    enClair: "Si l'indice vaut 118, cela signifie que la grandeur est 18 % plus élevée que dans la situation de référence.",
  },
  'moyenne-arithmetique': {
    definition: "La moyenne arithmétique est la somme des valeurs divisée par le nombre de valeurs observées.",
    enClair: "Elle donne une valeur représentative si l'on répartissait le total de façon égale entre toutes les observations.",
  },
  'moyenne-ponderee': {
    definition: "La moyenne pondérée est une moyenne dans laquelle chaque valeur compte plus ou moins selon son poids ou son coefficient.",
    enClair: "Une valeur avec un gros coefficient pèse davantage dans le résultat final.",
  },
  mediane: {
    definition: "La médiane est la valeur qui partage une série ordonnée en deux groupes de même effectif.",
    enClair: "La moitié des observations est en dessous ou égale à la médiane, l'autre moitié au-dessus ou égale.",
  },
  'valeur-nominale-reelle': {
    definition: "Une valeur nominale est exprimée aux prix courants ; une valeur réelle corrige l'effet de l'inflation.",
    enClair: "La valeur réelle sert à raisonner en pouvoir d'achat plutôt qu'en euros affichés.",
  },
  'taux-interet-reel-nominal': {
    definition: "Le taux d'intérêt nominal est le taux affiché ; le taux réel retire l'effet de l'inflation.",
    enClair: "Il permet d'estimer ce que le placement rapporte vraiment en pouvoir d'achat.",
  },
  'contribution-a-la-variation': {
    definition: "La contribution à la variation mesure la part de la variation globale expliquée par un élément.",
    enClair: "Elle sert à dire quel poste a vraiment tiré la hausse ou la baisse d'un ensemble.",
  },
  'valeur-ajoutee': {
    definition: "La valeur ajoutée mesure la richesse créée par une production après retrait des consommations intermédiaires.",
    enClair: "On garde ce que l'entreprise a réellement ajouté, pas tout ce qu'elle a acheté pour produire.",
  },
  'pib-approche-production': {
    definition: "Le PIB par l'approche production mesure la richesse produite par les unités résidentes d'un territoire.",
    enClair: "On additionne les valeurs ajoutées, puis on tient compte des impôts et subventions sur les produits.",
  },
  'pib-par-habitant': {
    definition: "Le PIB par habitant rapporte le PIB total à la population afin d'obtenir une moyenne par personne.",
    enClair: "C'est une moyenne utile pour comparer, mais elle ne dit pas comment la richesse est répartie.",
  },
  'taux-croissance-pib': {
    definition: "Le taux de croissance du PIB mesure la variation du PIB en volume entre deux périodes.",
    enClair: "Le PIB en volume enlève l'effet des prix : on observe donc l'évolution réelle de la production.",
  },
  'prix-quantite-equilibre': {
    definition: "Le prix et la quantité d'équilibre correspondent au point où l'offre est égale à la demande.",
    enClair: "À ce prix, les quantités que les vendeurs veulent vendre et les acheteurs veulent acheter coïncident.",
  },
  'elasticite-prix-demande': {
    definition: "L'élasticité-prix de la demande mesure la réaction de la quantité demandée à une variation du prix.",
    enClair: "Plus la valeur absolue est grande, plus les acheteurs réagissent fortement au changement de prix.",
  },
  'taux-de-chomage-bit': {
    definition: "Le taux de chômage mesure la part des chômeurs dans la population active selon la définition du BIT.",
    enClair: "On divise par les actifs, c'est-à-dire les personnes en emploi ou qui cherchent un emploi.",
  },
  'taux-d-emploi': {
    definition: "Le taux d'emploi mesure la part des personnes en emploi dans la population en âge de travailler.",
    enClair: "Il répond à la question : quelle proportion des 15-64 ans occupe effectivement un emploi ?",
  },
  'taux-d-activite': {
    definition: "Le taux d'activité mesure la part de la population en âge de travailler qui est active.",
    enClair: "Les actifs regroupent les personnes en emploi et les personnes au chômage.",
  },
  'salaire-net-a-partir-du-brut': {
    definition: "Le salaire net est une estimation du salaire disponible après déduction des cotisations salariales du salaire brut.",
    enClair: "C'est un ordre de grandeur : le taux exact dépend du statut, du contrat et des règles de paie.",
  },
  'surplus-consommateur-producteur': {
    definition: "Le surplus mesure le gain tiré de l'échange par rapport au prix qu'un agent était prêt à accepter.",
    enClair: "Pour l'acheteur, c'est ce qu'il économise ; pour le vendeur, c'est ce qu'il gagne au-delà de son minimum.",
  },
  'cout-marginal': {
    definition: "Le coût marginal correspond au coût supplémentaire provoqué par la production d'une unité de plus.",
    enClair: "En concurrence, l'entreprise compare ce coût au prix pour décider s'il est rentable de produire davantage.",
  },
  profit: {
    definition: "Le profit est la différence entre les recettes de l'entreprise et l'ensemble de ses coûts.",
    enClair: "Il mesure ce qu'il reste après avoir payé les coûts nécessaires à la production.",
  },
  'capacite-besoin-financement': {
    definition: "La capacité ou le besoin de financement indique si un agent dispose d'un excédent ou doit emprunter.",
    enClair: "Si l'épargne dépasse l'investissement, il y a capacité ; sinon, il y a besoin de financement.",
  },
  'taux-d-epargne': {
    definition: "Le taux d'épargne mesure la part du revenu disponible qui n'est pas consommée.",
    enClair: "Il indique quelle proportion du revenu est mise de côté.",
  },
  'solde-budgetaire-etat': {
    definition: "Le solde budgétaire de l'État est la différence entre les recettes publiques et les dépenses publiques.",
    enClair: "S'il est négatif, on parle de déficit ; s'il est positif, d'excédent.",
  },
  'creation-monetaire-credit': {
    definition: "La création monétaire par le crédit désigne la monnaie créée lorsqu'une banque accorde un prêt.",
    enClair: "La banque inscrit en même temps une créance et un dépôt : la monnaie apparaît puis disparaît lors du remboursement.",
  },
  'taux-de-participation-abstention': {
    definition: "Le taux de participation mesure la part des inscrits qui votent ; le taux d'abstention mesure ceux qui ne votent pas.",
    enClair: "Les deux taux se complètent : participation + abstention = 100 %.",
  },
  'taux-d-inscription': {
    definition: "Le taux d'inscription mesure la part des personnes en âge de voter effectivement inscrites sur les listes électorales.",
    enClair: "Il ne mesure pas le vote lui-même, mais l'accès administratif au vote.",
  },
};
