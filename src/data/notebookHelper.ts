export type NoteItem = {
  id: string;
  titre: string;
  chapitre?: string;
  contenu: string;
  dateCreation: string;
  dateModification: string;
  tags: string[];
  estEpingle?: boolean;
};

const STORAGE_KEY = 'ses_user_notebook_v1';

const defaultNotes: NoteItem[] = [
  {
    id: 'welcome-note',
    titre: '🚀 Bienvenue dans votre Notebook SES',
    chapitre: 'Méthodologie & Conseils',
    contenu: `### Comment tirer le meilleur de votre Notebook SES :
- **Prise de notes rapide** : Notez ici les définitions clés, vos erreurs récurrentes aux devoirs et les citations importantes.
- **Ajout en 1 clic** : Cliquez sur le bouton **« 📥 Ajouter au Notebook »** sur n'importe quelle fiche (calcul, lexique, auteur) pour l'insérer directement ici !
- **Fiches de révision pour le bac** : Créez vos plans de dissertation (I.A, I.B, II.A, II.B) et vos fiches de synthèse.

> *Astuce : Vous pouvez formater vos notes en Markdown (titres ###, **gras**, listes à puces).*`,
    dateCreation: new Date().toISOString(),
    dateModification: new Date().toISOString(),
    tags: ['Méthode', 'Conseils', 'BAC'],
    estEpingle: true,
  },
];

export function getStoredNotes(): NoteItem[] {
  if (typeof window === 'undefined') return defaultNotes;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultNotes));
      return defaultNotes;
    }
    return JSON.parse(raw);
  } catch {
    return defaultNotes;
  }
}

export function saveStoredNotes(notes: NoteItem[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (e) {
    console.error('Failed to save notes to localStorage', e);
  }
}

export function addNote(note: Omit<NoteItem, 'id' | 'dateCreation' | 'dateModification'>): NoteItem {
  const notes = getStoredNotes();
  const newNote: NoteItem = {
    ...note,
    id: `note-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    dateCreation: new Date().toISOString(),
    dateModification: new Date().toISOString(),
  };
  const updated = [newNote, ...notes];
  saveStoredNotes(updated);
  return newNote;
}

export function updateNote(id: string, partial: Partial<Omit<NoteItem, 'id' | 'dateCreation'>>): NoteItem[] {
  const notes = getStoredNotes();
  const updated = notes.map((n) => {
    if (n.id === id) {
      return {
        ...n,
        ...partial,
        dateModification: new Date().toISOString(),
      };
    }
    return n;
  });
  saveStoredNotes(updated);
  return updated;
}

export function deleteNote(id: string): NoteItem[] {
  const notes = getStoredNotes();
  const updated = notes.filter((n) => n.id !== id);
  saveStoredNotes(updated);
  return updated;
}

export function insertSnippetIntoNotebook(titre: string, contenu: string, chapitre?: string, tag?: string) {
  const note = addNote({
    titre: `📌 ${titre}`,
    chapitre: chapitre || 'Fiches importées',
    contenu,
    tags: tag ? [tag] : ['Importé'],
    estEpingle: false,
  });
  return note;
}
