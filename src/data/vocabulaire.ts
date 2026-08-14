export type VocabTerm = {
  id: string;
  terme: string;
  sigle?: string;
  categorie: string;
  definition: string;
  exemple: string;
  liens: string[];
};

export const vocabulaire: VocabTerm[] = [
  {
    id: 'ca',
    terme: 'Chiffre d’affaires',
    sigle: 'CA',
    categorie: 'Entreprise',
    definition: 'Le chiffre d’affaires correspond au montant total des ventes réalisées par une entreprise sur une période donnée.',
    exemple: 'Une entreprise vend 120 000 € de produits en un trimestre : son chiffre d’affaires est de 120 000 €.',
    liens: ['ventes', 'marge', 'bénéfice']
  },
  {
    id: 'va',
    terme: 'Valeur ajoutée',
    sigle: 'VA',
    categorie: 'Entreprise',
    definition: 'La valeur ajoutée mesure la richesse créée par une entreprise en transformant des biens ou des services.',
    exemple: 'Si une entreprise achète des matières pour 80 000 € et vend pour 120 000 €, sa valeur ajoutée est de 40 000 €.',
    liens: ['production', 'EBE', 'richesse']
  },
  {
    id: 'ebe',
    terme: 'Excédent brut d’exploitation',
    sigle: 'EBE',
    categorie: 'Entreprise',
    definition: 'L’EBE est la ressource générée par l’activité avant prise en compte des charges financières, fiscales et de dépréciation.',
    exemple: 'Un EBE positif montre qu’une entreprise saigne peu de son activité courante et est rentable avant les coûts de financement.',
    liens: ['rentabilité', 'bénéfice', 'VA']
  },
  {
    id: 'benefice',
    terme: 'Bénéfice',
    categorie: 'Entreprise',
    definition: 'Le bénéfice est le solde positif restant après avoir payé l’ensemble des charges de l’entreprise.',
    exemple: 'Si le chiffre d’affaires est de 200 000 € et les charges de 170 000 €, le bénéfice est de 30 000 €.',
    liens: ['rentabilité', 'EBE', 'marge']
  },
  {
    id: 'chomage',
    terme: 'Chômage',
    categorie: 'Emploi',
    definition: 'Le chômage correspond à la situation des personnes sans emploi et qui en recherchent un activement.',
    exemple: 'Un taux de chômage élevé peut signaler un ralentissement économique ou une faible demande de travail.',
    liens: ['taux de chômage', 'emploi', 'population active']
  },
  {
    id: 'taux-chomage',
    terme: 'Taux de chômage',
    categorie: 'Emploi',
    definition: 'Le taux de chômage correspond au rapport entre le nombre de chômeurs et la population active.',
    exemple: 'Si 200 chômeurs sur 2 000 actifs, le taux de chômage est de 10 %.',
    liens: ['chômage', 'population active', 'emploi']
  },
  {
    id: 'pib',
    terme: 'Produit intérieur brut',
    sigle: 'PIB',
    categorie: 'Macroéconomie',
    definition: 'Le PIB mesure la valeur totale des biens et services produits sur un territoire pendant une période donnée.',
    exemple: 'Un PIB plus élevé montre souvent une économie plus productive, mais pas forcément plus juste ou plus équitable.',
    liens: ['croissance', 'richesse', 'production']
  },
  {
    id: 'croissance',
    terme: 'Croissance économique',
    categorie: 'Macroéconomie',
    definition: 'La croissance économique correspond à l’augmentation de la production et de la richesse sur une période donnée.',
    exemple: 'Une croissance de 2 % signifie que le PIB a augmenté de 2 % par rapport à l’année précédente.',
    liens: ['PIB', 'investissement', 'consommation']
  },
  {
    id: 'inflation',
    terme: 'Inflation',
    categorie: 'Macroéconomie',
    definition: 'L’inflation désigne la hausse générale et durable des prix dans une économie.',
    exemple: 'Quand les prix augmentent, le pouvoir d’achat des ménages baisse si leurs revenus ne suivent pas.',
    liens: ['prix', 'pouvoir d’achat', 'taux d’intérêt']
  },
  {
    id: 'deficit-public',
    terme: 'Déficit public',
    categorie: 'Finances publiques',
    definition: 'Le déficit public apparait quand les dépenses de l’État dépassent ses recettes sur une période donnée.',
    exemple: 'Un État qui dépense 120 milliards et collecte 110 milliards a un déficit public de 10 milliards.',
    liens: ['budget', 'dette publique', 'État']
  },
  {
    id: 'dette-publique',
    terme: 'Dette publique',
    categorie: 'Finances publiques',
    definition: 'La dette publique correspond à l’ensemble des emprunts contractés par l’État pour financer ses dépenses.',
    exemple: 'Une dette publique élevée peut accroître les intérêts à payer et réduire les marges de manœuvre budgétaires.',
    liens: ['déficit', 'budget', 'emprunt']
  },
  {
    id: 'investissement',
    terme: 'Investissement',
    categorie: 'Économie',
    definition: 'L’investissement désigne les dépenses visant à augmenter ou améliorer les capacités de production future.',
    exemple: 'L’achat de machines, de logiciels ou de bâtiments est un investissement productif.',
    liens: ['croissance', 'capital', 'productivité']
  },
  {
    id: 'population-active',
    terme: 'Population active',
    categorie: 'Emploi',
    definition: 'La population active regroupe les personnes en emploi et les chômeurs qui recherchent un emploi.',
    exemple: 'La population active augmente quand davantage de personnes cherchent un travail ou trouvent un emploi.',
    liens: ['emploi', 'chômage', 'salaire']
  },
  {
    id: 'pays-dev',
    terme: 'Pays en développement',
    categorie: 'Développement',
    definition: 'Un pays en développement est un pays dont les niveaux de revenu, d’infrastructure et de développement humain sont souvent plus faibles.',
    exemple: 'Les pays en développement peuvent avoir des besoins importants en santé, éducation et infrastructures.',
    liens: ['pays développé', 'croissance', 'développement']
  },
  {
    id: 'pays-dev-2',
    terme: 'Pays développé',
    categorie: 'Développement',
    definition: 'Un pays développé dispose généralement de revenus plus élevés, d’infrastructures avancées et de meilleurs indicateurs sociaux.',
    exemple: 'Les pays développés ont souvent des niveaux de vie plus élevés et des systèmes de protection sociale plus importants.',
    liens: ['pays en développement', 'PIB', 'niveau de vie']
  },
  {
    id: 'exportation',
    terme: 'Exportations',
    categorie: 'Commerce international',
    definition: 'Les exportations correspondent aux biens et services vendus à l’étranger.',
    exemple: 'Une entreprise exporte ses produits vers l’Allemagne : cela augmente les ventes hors du territoire national.',
    liens: ['importations', 'commerce', 'balance commerciale']
  },
  {
    id: 'importation',
    terme: 'Importations',
    categorie: 'Commerce international',
    definition: 'Les importations correspondent aux biens et services achetés à l’étranger.',
    exemple: 'Un pays importe du pétrole si sa production nationale est insuffisante.',
    liens: ['exportations', 'balance commerciale', 'commerce']
  },
  {
    id: 'pii',
    terme: 'Pouvoir d’achat',
    categorie: 'Consommation',
    definition: 'Le pouvoir d’achat mesure ce que les revenus permettent d’acheter en quantité de biens ou de services.',
    exemple: 'Si les prix augmentent fortement, le pouvoir d’achat du salarié peut diminuer même si son salaire reste stable.',
    liens: ['inflation', 'revenu', 'consommation']
  },
  {
    id: 'taux-interet',
    terme: 'Taux d’intérêt',
    categorie: 'Finance',
    definition: 'Le taux d’intérêt correspond au coût de l’emprunt ou au rendement de l’épargne.',
    exemple: 'Un taux d’intérêt élevé rend les crédits plus chers, ce qui peut freiner l’investissement.',
    liens: ['emprunt', 'épargne', 'banque']
  },
  {
    id: 'demande-globale',
    terme: 'Demande globale',
    categorie: 'Macroéconomie',
    definition: 'La demande globale désigne la demande totale de biens et services dans une économie.',
    exemple: 'Une forte demande globale soutient la production et l’emploi.',
    liens: ['consommation', 'investissement', 'PIB']
  },
  {
    id: 'salaire-reel',
    terme: 'Salaire réel',
    categorie: 'Travail',
    definition: 'Le salaire réel tient compte de l’inflation et mesure le pouvoir d’achat du salaire.',
    exemple: 'Un salaire nominal de 2 000 € peut voir son salaire réel baisser si l’inflation augmente fortement.',
    liens: ['inflation', 'pouvoir d’achat', 'salarié']
  },
  {
    id: 'productivite',
    terme: 'Productivité',
    categorie: 'Entreprise',
    definition: 'La productivité mesure la quantité produite par travailleur ou par heure de travail.',
    exemple: 'Une hausse de la productivité permet souvent d’augmenter les salaires et les profits sans augmenter le coût unitaire.',
    liens: ['investissement', 'VA', 'croissance']
  }
];
