import { calculsCatalog, FicheCalcul } from './calculsData';
import { allGlossaryTerms, EnrichedGlossaryTerm } from './glossaireHelper';
import { auteursSES, AuteurSES } from './auteursData';
import { mecanismesData, SchemaCausal } from './mecanismesData';
import { methodesBac, methodeAEI, guidesEpreuves, EpreuveGuide } from './methodeBacData';

export type DossierSelection = {
  niveaux: ('Seconde' | 'Première')[];
  calculIds: string[];
  termeIds: string[];
  auteurIds: string[];
  mecanismeIds: string[];
  inclureMethodeBac: boolean;
  inclureExemplesChiffres: boolean;
  inclurePieges: boolean;
};

export const defaultDossierSelection: DossierSelection = {
  niveaux: ['Seconde', 'Première'],
  calculIds: [
    'proportion',
    'taux-de-variation',
    'valeur-ajoutee',
    'pib-approche-production',
    'coefficient-multiplicateur',
    'elasticite-prix-demande',
    'taux-de-chomage-bit',
    'profit',
    'creation-monetaire-credit',
    'surplus-consommateur-producteur'
  ],
  termeIds: [
    'valeur-ajoutee',
    'pib',
    'ebe',
    'benefice',
    'marche',
    'concurrence-pure-parfaite',
    'prix-equilibre',
    'asymetrie-information',
    'creation-monetaire',
    'socialisation-primaire',
    'capital-culturel',
    'habitus',
    'mobilite-sociale',
    'paradoxe-olson'
  ],
  auteurIds: [
    'adam-smith',
    'john-maynard-keynes',
    'karl-marx',
    'pierre-bourdieu',
    'emile-durkheim',
    'max-weber',
    'mancur-olson'
  ],
  mecanismeIds: [
    'boucle-productivite',
    'creation-monetaire-credit',
    'paradoxe-olson-action-collective'
  ],
  inclureMethodeBac: true,
  inclureExemplesChiffres: true,
  inclurePieges: true,
};

// Generate complete structured document for Google NotebookLM / Gemini
export function generateFullNotebookLMDossier(selection: DossierSelection, titreCustom?: string): string {
  const dateStr = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  const selectedCalculs = calculsCatalog.filter(c => selection.calculIds.includes(c.id));
  const selectedTerms = allGlossaryTerms.filter(t => selection.termeIds.includes(t.id));
  const selectedAuteurs = auteursSES.filter(a => selection.auteurIds.includes(a.id));
  const selectedMecanismes = mecanismesData.filter(m => selection.mecanismeIds.includes(m.id));

  let doc = `# ${titreCustom || 'Dossier Source SES — Révision Officielle Seconde & Première'}\n`;
  doc += `*Document de synthèse généré le ${dateStr} pour importation directe dans Google NotebookLM / Gemini*\n\n`;
  doc += `---\n\n`;

  doc += `## 📋 SOMMAIRE DU DOSSIER\n`;
  doc += `1. **Notions et Définitions Clés** (${selectedTerms.length} termes retenus)\n`;
  doc += `2. **Calculs, Formules & Méthodes Quantitatives** (${selectedCalculs.length} calculs sélectionnés)\n`;
  doc += `3. **Grands Auteurs, Thèses & Citations Incontournables** (${selectedAuteurs.length} auteurs)\n`;
  doc += `4. **Schémas de Causalité & Mécanismes Économiques et Sociaux** (${selectedMecanismes.length} schémas)\n`;
  if (selection.inclureMethodeBac) {
    doc += `5. **Méthodologie Officielle du Baccalauréat (Règle AEI & Épreuves)**\n`;
  }
  doc += `\n---\n\n`;

  // SECTION 1: VOCABULAIRE & NOTIONS
  doc += `## 1. 📖 NOTIONS ET DÉFINITIONS CLÉS DU PROGRAMME\n\n`;
  if (selectedTerms.length === 0) {
    doc += `*Aucun terme sélectionné dans cette section.*\n\n`;
  } else {
    selectedTerms.forEach(t => {
      doc += `### ${t.terme} ${t.sigle ? `(${t.sigle})` : ''}\n`;
      doc += `- **Catégorie** : ${t.categorie} (Discipline : ${t.discipline})\n`;
      doc += `- **Niveau** : ${t.niveaux.join(', ')}\n`;
      doc += `- **Définition officielle** : ${t.definition}\n`;
      if (t.formule) {
        doc += `- **Formule associée** : \`${t.formule}\`\n`;
      }
      if (t.interpretation) {
        doc += `- **Interprétation sociologique / économique** : ${t.interpretation}\n`;
      }
      if (selection.inclureExemplesChiffres && t.exemple) {
        doc += `- **Exemple concret d'application** : ${t.exemple}\n`;
      }
      if (t.pointsCles && t.pointsCles.length > 0) {
        doc += `- **Points clés à retenir** : ${t.pointsCles.join(' ; ')}\n`;
      }
      doc += `\n`;
    });
  }

  doc += `---\n\n`;

  // SECTION 2: CALCULS & FORMULES
  doc += `## 2. 🧮 CALCULS, FORMULES ET ANALYSES STATISTIQUES\n\n`;
  if (selectedCalculs.length === 0) {
    doc += `*Aucun calcul sélectionné dans cette section.*\n\n`;
  } else {
    selectedCalculs.forEach(c => {
      doc += `### ${c.nom} (${c.categorie})\n`;
      doc += `- **Définition** : ${c.definitionCourte}\n`;
      doc += `- **Formule officielle** : \`${c.formule}\`\n`;
      doc += `- **Explication des termes** :\n`;
      c.termesFormule.forEach(tf => {
        doc += `  * \`${tf.symbole}\` : ${tf.signification} (Unité : ${tf.unite})\n`;
      });
      if (selection.inclureExemplesChiffres) {
        doc += `- **Exemple chiffré du cours** :\n`;
        doc += `  * *Données* : ${c.exempleCours.donnees}\n`;
        doc += `  * *Calcul posé* : \`${c.exempleCours.calculPose}\`\n`;
        doc += `  * *Résultat* : **${c.exempleCours.resultat}**\n`;
        doc += `  * *Phrase de lecture type BAC (aux 4 critères)* : « ${c.exempleCours.phraseLecture} »\n`;
      }
      if (selection.inclurePieges && c.pieges && c.pieges.length > 0) {
        doc += `- **Pièges fréquents à éviter aux devoirs** :\n`;
        c.pieges.forEach(p => {
          doc += `  * ⚠️ ${p}\n`;
        });
      }
      doc += `\n`;
    });
  }

  doc += `---\n\n`;

  // SECTION 3: GRANDS AUTEURS
  doc += `## 3. 🏛️ GRANDS AUTEURS, THÈSES & CITATIONS DE RÉFÉRENCE\n\n`;
  if (selectedAuteurs.length === 0) {
    doc += `*Aucun auteur sélectionné dans cette section.*\n\n`;
  } else {
    selectedAuteurs.forEach(a => {
      doc += `### ${a.nom} (${a.siecle}) — ${a.courant}\n`;
      doc += `- **Discipline** : ${a.discipline}\n`;
      doc += `- **Thèse centrale** : ${a.theseCentrale}\n`;
      doc += `- **Notions et concepts clés** : ${a.notionsCles.join(', ')}\n`;
      doc += `- **Citation incontournable pour le Bac** : « ${a.citationIncontournable} »\n`;
      doc += `- **Quand et comment le mobiliser dans une copie** : ${a.contexteUtilisationBac}\n\n`;
    });
  }

  doc += `---\n\n`;

  // SECTION 4: SCHÉMAS CAUSAUX
  doc += `## 4. 🔄 SCHÉMAS CAUSAUX ET CHAÎNES LOGIQUES D'ENCHAÎNEMENT\n\n`;
  if (selectedMecanismes.length === 0) {
    doc += `*Aucun schéma sélectionné dans cette section.*\n\n`;
  } else {
    selectedMecanismes.forEach(m => {
      doc += `### ${m.titre} (${m.discipline} — ${m.chapitre})\n`;
      doc += `- **Problématique posée** : ${m.problemePose}\n`;
      doc += `- **Chaîne causale étape par étape** :\n`;
      m.etapes.forEach(e => {
        doc += `  ${e.ordre}. **${e.titre}** : ${e.explication} *(Impact : ${e.impact})*\n`;
      });
      doc += `- **Conséquence finale** : ${m.consequenceFinale}\n`;
      if (m.piegeOuNuance) {
        doc += `- **Nuance / Piège** : ${m.piegeOuNuance}\n`;
      }
      doc += `\n`;
    });
  }

  // SECTION 5: METHODOLOGIE BAC
  if (selection.inclureMethodeBac) {
    doc += `---\n\n`;
    doc += `## 5. 🧭 MÉTHODOLOGIE OFFICIELLE DU BACCALAURÉAT SES\n\n`;
    doc += `### La règle d'or d'argumentation : La méthode AEI\n`;
    doc += `Dans chaque paragraphe de dissertation (EC3 ou Dissertation), développez un argument selon 3 étapes :\n`;
    doc += `1. **A (Affirmer)** : Énoncer clairement l'idée directrice ou la réponse au sujet.\n`;
    doc += `2. **E (Expliciter)** : Démontrer le mécanisme logique, définir les concepts et expliquer le lien de cause à effet.\n`;
    doc += `3. **I (Illustrer)** : Apporter une donnée statistique précise (avec phrase de lecture aux 4 critères) ou un exemple historique concret.\n\n`;

    doc += `### Les 4 critères obligatoires de lecture d'une donnée statistique :\n`;
    doc += `1. **Date** (année précise des données)\n`;
    doc += `2. **Lieu** (France, zone euro, OCDE...)\n`;
    doc += `3. **Champ** (population concernée : salariés, ensemble des ménages, actifs occupés...)\n`;
    doc += `4. **Unité et Source** (%, euros, points de pourcentage, source Insee/BCE/Eurostat)\n\n`;
  }

  return doc;
}
