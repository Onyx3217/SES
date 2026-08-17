import React, { useState, useEffect, useMemo } from 'react';
import { getStoredNotes, saveStoredNotes, addNote, updateNote, deleteNote, NoteItem } from '../data/notebookHelper';
import { speakText, stopSpeaking, isSpeaking } from '../utils/audioHelper';

export default function Notebook({ onNavigateToCalcul }: { onNavigateToCalcul?: (id: string) => void }) {
  const [notes, setNotes] = useState<NoteItem[]>(() => getStoredNotes());
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(notes[0]?.id || null);
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('Tous');
  const [isEditing, setIsEditing] = useState(false);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  // Edit draft state
  const [editTitre, setEditTitre] = useState('');
  const [editChapitre, setEditChapitre] = useState('');
  const [editContenu, setEditContenu] = useState('');
  const [editTags, setEditTags] = useState('');

  // Reload notes when storage updates
  useEffect(() => {
    setNotes(getStoredNotes());
  }, []);

  const selectedNote = useMemo(() => {
    return notes.find((n) => n.id === selectedNoteId) || notes[0] || null;
  }, [notes, selectedNoteId]);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    notes.forEach((n) => n.tags.forEach((t) => set.add(t)));
    return ['Tous', ...Array.from(set)];
  }, [notes]);

  const filteredNotes = useMemo(() => {
    const q = search.toLowerCase().trim();
    return notes.filter((n) => {
      if (selectedTag !== 'Tous' && !n.tags.includes(selectedTag)) return false;
      if (q) {
        const text = `${n.titre} ${n.chapitre} ${n.contenu} ${n.tags.join(' ')}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });
  }, [notes, selectedTag, search]);

  const handleStartCreate = () => {
    const newNote = addNote({
      titre: 'Nouvelle note de révision',
      chapitre: 'Général',
      contenu: 'Écrivez vos idées, formules et plans de devoirs ici...',
      tags: ['Révision'],
      estEpingle: false,
    });
    setNotes(getStoredNotes());
    setSelectedNoteId(newNote.id);
    setEditTitre(newNote.titre);
    setEditChapitre(newNote.chapitre || '');
    setEditContenu(newNote.contenu);
    setEditTags(newNote.tags.join(', '));
    setIsEditing(true);
  };

  const handleStartEdit = (note: NoteItem) => {
    setEditTitre(note.titre);
    setEditChapitre(note.chapitre || '');
    setEditContenu(note.contenu);
    setEditTags(note.tags.join(', '));
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (!selectedNote) return;
    const tagsArray = editTags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
    const updated = updateNote(selectedNote.id, {
      titre: editTitre || 'Note sans titre',
      chapitre: editChapitre || 'Général',
      contenu: editContenu,
      tags: tagsArray.length > 0 ? tagsArray : ['Général'],
    });
    setNotes(updated);
    setIsEditing(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Voulez-vous vraiment supprimer cette note ?')) {
      const updated = deleteNote(id);
      setNotes(updated);
      setSelectedNoteId(updated[0]?.id || null);
      setIsEditing(false);
    }
  };

  const handleTogglePin = (note: NoteItem) => {
    const updated = updateNote(note.id, {
      estEpingle: !note.estEpingle,
    });
    setNotes(updated);
  };

  const handleCopyMarkdown = (note: NoteItem) => {
    const text = `# ${note.titre}\n*Chapitre : ${note.chapitre || 'Général'}*\n\n${note.contenu}`;
    navigator.clipboard.writeText(text);
    alert('Note copiée dans le presse-papier au format Markdown !');
  };

  const handleExportAll = () => {
    const fullText = notes
      .map((n) => `# ${n.titre}\n*Chapitre : ${n.chapitre} | Tags : ${n.tags.join(', ')}*\n\n${n.contenu}\n\n---\n`)
      .join('\n');
    const blob = new Blob([fullText], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ses_notebook_export_${new Date().toISOString().slice(0, 10)}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleSpeak = (text: string, id: string) => {
    if (speakingId === id) {
      stopSpeaking();
      setSpeakingId(null);
    } else {
      speakText(text, () => setSpeakingId(null));
      setSpeakingId(id);
    }
  };

  return (
    <div style={{ display: 'grid', gap: 20 }}>
      {/* HEADER BANNER */}
      <div
        style={{
          padding: '24px 22px',
          borderRadius: 24,
          background: 'linear-gradient(135deg, #4338ca 0%, #6366f1 50%, #818cf8 100%)',
          color: '#ffffff',
          boxShadow: '0 16px 40px rgba(99, 102, 241, 0.22)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ color: '#e0e7ff', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 800 }}>
              Espace de Travail Personnel
            </div>
            <h2 style={{ margin: '6px 0', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800 }}>
              Mon Notebook SES
            </h2>
            <p style={{ margin: 0, color: '#e0e7ff', fontSize: '0.95rem', maxWidth: 650, lineHeight: 1.5 }}>
              Votre carnet de révision tout-en-un. Prenez des notes, insérez les fiches en 1 clic et préparez vos plans de devoirs.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={handleStartCreate}
              style={{
                border: 'none',
                background: '#ffffff',
                color: '#4338ca',
                borderRadius: 999,
                padding: '10px 18px',
                fontWeight: 800,
                fontSize: '0.88rem',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <span>➕</span> Nouvelle note
            </button>
            <button
              type="button"
              onClick={handleExportAll}
              style={{
                border: '1px solid rgba(255, 255, 255, 0.4)',
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                borderRadius: 999,
                padding: '10px 16px',
                fontWeight: 700,
                fontSize: '0.86rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <span>💾</span> Exporter tout (.md)
            </button>
          </div>
        </div>
      </div>

      {/* 2-COLUMN LAYOUT: NOTES LIST & EDITOR */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 360px) minmax(0, 1fr)', gap: 20 }} className="calculs-layout">
        {/* LEFT COLUMN: LIST & SEARCH */}
        <aside style={{ display: 'grid', gap: 14 }}>
          <div style={{ padding: 18, borderRadius: 22, background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 8px 24px rgba(15, 23, 42, 0.03)', display: 'grid', gap: 12 }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher dans mes notes..."
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 38px',
                  borderRadius: 14,
                  border: '1.5px solid #e2e8f0',
                  background: '#f8fafc',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
              <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#6366f1' }}>
                🔍
              </span>
            </div>

            {/* Tag Filter Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, maxHeight: 80, overflowY: 'auto' }}>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  style={{
                    border: `1px solid ${selectedTag === tag ? '#6366f1' : '#e2e8f0'}`,
                    background: selectedTag === tag ? '#eef2ff' : '#ffffff',
                    color: selectedTag === tag ? '#4338ca' : '#475569',
                    borderRadius: 999,
                    padding: '4px 10px',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Notes List */}
            <div style={{ display: 'grid', gap: 8, maxHeight: 480, overflowY: 'auto' }}>
              {filteredNotes.length === 0 ? (
                <div style={{ padding: 20, textAlign: 'center', color: '#94a3b8', fontSize: '0.88rem' }}>
                  Aucune note trouvée.
                </div>
              ) : null}

              {filteredNotes.map((n) => {
                const isSel = selectedNote?.id === n.id;
                return (
                  <div
                    key={n.id}
                    onClick={() => {
                      setSelectedNoteId(n.id);
                      setIsEditing(false);
                    }}
                    style={{
                      padding: '12px 14px',
                      borderRadius: 16,
                      border: `1.5px solid ${isSel ? '#6366f1' : '#e2e8f0'}`,
                      background: isSel ? '#f5f3ff' : '#ffffff',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      display: 'grid',
                      gap: 4,
                      boxShadow: isSel ? '0 4px 14px rgba(99, 102, 241, 0.12)' : 'none',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 800, color: isSel ? '#4338ca' : '#0f172a', fontSize: '0.92rem' }}>
                        {n.estEpingle ? '📌 ' : ''}{n.titre}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.76rem', color: '#64748b' }}>
                      {n.chapitre}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 4 }}>
                      {n.tags.map((t) => (
                        <span key={t} style={{ background: '#e2e8f0', color: '#334155', borderRadius: 999, padding: '2px 6px', fontSize: '0.68rem', fontWeight: 700 }}>
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        {/* RIGHT COLUMN: NOTE VIEW / EDITOR */}
        <section>
          {selectedNote ? (
            <div style={{ padding: 24, borderRadius: 24, background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)', display: 'grid', gap: 18 }}>
              {isEditing ? (
                /* EDIT MODE */
                <div style={{ display: 'grid', gap: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: 10 }}>
                    <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#4338ca', fontWeight: 800 }}>
                      ✏️ Modification de la note
                    </h3>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        style={{
                          border: '1px solid #cbd5e1',
                          background: '#ffffff',
                          color: '#475569',
                          borderRadius: 10,
                          padding: '8px 14px',
                          fontWeight: 700,
                          fontSize: '0.84rem',
                          cursor: 'pointer',
                        }}
                      >
                        Annuler
                      </button>
                      <button
                        type="button"
                        onClick={handleSaveEdit}
                        style={{
                          border: 'none',
                          background: '#4338ca',
                          color: '#ffffff',
                          borderRadius: 10,
                          padding: '8px 16px',
                          fontWeight: 800,
                          fontSize: '0.84rem',
                          cursor: 'pointer',
                        }}
                      >
                        💾 Enregistrer
                      </button>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b' }}>Titre de la note :</label>
                    <input
                      type="text"
                      value={editTitre}
                      onChange={(e) => setEditTitre(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 12, border: '1.5px solid #cbd5e1', fontSize: '1rem', fontWeight: 700, marginTop: 4 }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b' }}>Chapitre / Thème :</label>
                      <input
                        type="text"
                        value={editChapitre}
                        onChange={(e) => setEditChapitre(e.target.value)}
                        style={{ width: '100%', padding: '8px 12px', borderRadius: 10, border: '1px solid #cbd5e1', fontSize: '0.9rem', marginTop: 4 }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b' }}>Tags (séparés par des virgules) :</label>
                      <input
                        type="text"
                        value={editTags}
                        onChange={(e) => setEditTags(e.target.value)}
                        style={{ width: '100%', padding: '8px 12px', borderRadius: 10, border: '1px solid #cbd5e1', fontSize: '0.9rem', marginTop: 4 }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b' }}>Contenu (Supporte Markdown & puces) :</label>
                    <textarea
                      rows={14}
                      value={editContenu}
                      onChange={(e) => setEditContenu(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 14,
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        fontFamily: 'inherit',
                        marginTop: 4,
                      }}
                    />
                  </div>
                </div>
              ) : (
                /* VIEW MODE */
                <div style={{ display: 'grid', gap: 14 }}>
                  {/* Action Bar */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, borderBottom: '1px solid #f1f5f9', paddingBottom: 12 }}>
                    <div>
                      <span style={{ background: '#e0e7ff', color: '#4338ca', padding: '4px 10px', borderRadius: 999, fontSize: '0.76rem', fontWeight: 800 }}>
                        {selectedNote.chapitre || 'Général'}
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        onClick={() => handleSpeak(`${selectedNote.titre}. ${selectedNote.contenu}`, selectedNote.id)}
                        style={{
                          border: '1px solid #c7d2fe',
                          background: speakingId === selectedNote.id ? '#4338ca' : '#eef2ff',
                          color: speakingId === selectedNote.id ? '#ffffff' : '#4338ca',
                          borderRadius: 10,
                          padding: '6px 12px',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        🔊 {speakingId === selectedNote.id ? 'Arrêter' : 'Écouter'}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleTogglePin(selectedNote)}
                        style={{
                          border: '1px solid #e2e8f0',
                          background: selectedNote.estEpingle ? '#fef3c7' : '#ffffff',
                          color: selectedNote.estEpingle ? '#b45309' : '#475569',
                          borderRadius: 10,
                          padding: '6px 12px',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        📌 {selectedNote.estEpingle ? 'Épinglée' : 'Épingler'}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopyMarkdown(selectedNote)}
                        style={{
                          border: '1px solid #e2e8f0',
                          background: '#ffffff',
                          color: '#475569',
                          borderRadius: 10,
                          padding: '6px 12px',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        📋 Copier
                      </button>

                      <button
                        type="button"
                        onClick={() => handleStartEdit(selectedNote)}
                        style={{
                          border: 'none',
                          background: '#4338ca',
                          color: '#ffffff',
                          borderRadius: 10,
                          padding: '6px 14px',
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                        }}
                      >
                        ✏️ Modifier
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(selectedNote.id)}
                        style={{
                          border: '1px solid #fecaca',
                          background: '#fef2f2',
                          color: '#b91c1c',
                          borderRadius: 10,
                          padding: '6px 10px',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>

                  {/* Note Title */}
                  <h2 style={{ margin: '4px 0', fontSize: '1.6rem', color: '#0f172a', fontWeight: 800 }}>
                    {selectedNote.titre}
                  </h2>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {selectedNote.tags.map((t) => (
                      <span key={t} style={{ background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0', padding: '3px 8px', borderRadius: 999, fontSize: '0.74rem', fontWeight: 700 }}>
                        #{t}
                      </span>
                    ))}
                    <span style={{ fontSize: '0.74rem', color: '#94a3b8', marginLeft: 'auto' }}>
                      Mis à jour le {new Date(selectedNote.dateModification).toLocaleDateString('fr-FR')}
                    </span>
                  </div>

                  {/* Note Content Display */}
                  <div
                    style={{
                      padding: 18,
                      borderRadius: 16,
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      color: '#1e293b',
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {selectedNote.contenu}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div style={{ padding: 40, borderRadius: 24, background: '#ffffff', border: '1px dashed #cbd5e1', textAlign: 'center', color: '#64748b' }}>
              <h3>Sélectionnez une note ou créez-en une nouvelle</h3>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
