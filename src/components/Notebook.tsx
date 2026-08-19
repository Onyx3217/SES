import React, { useState, useMemo, useEffect } from 'react';
import { calculsCatalog } from '../data/calculsData';
import { allGlossaryTerms } from '../data/glossaireHelper';
import { auteursSES } from '../data/auteursData';
import { mecanismesData } from '../data/mecanismesData';
import { generateFullNotebookLMDossier, DossierSelection, defaultDossierSelection } from '../data/dossierGenerator';
import { getStoredNotes, addNote, updateNote, deleteNote, NoteItem } from '../data/notebookHelper';

export default function Notebook({ onNavigateToCalcul }: { onNavigateToCalcul?: (id: string) => void }) {
  // Main view: 'dossier' (NotebookLM Builder) | 'notes' (Carnet de notes)
  const [activeTab, setActiveTab] = useState<'dossier' | 'notes'>('dossier');

  // Dossier selection state
  const [selection, setSelection] = useState<DossierSelection>(() => {
    try {
      const saved = localStorage.getItem('ses_dossier_selection_v2');
      return saved ? JSON.parse(saved) : defaultDossierSelection;
    } catch {
      return defaultDossierSelection;
    }
  });

  const [dossierTitle, setDossierTitle] = useState('Dossier Source SES — Révision Officielle');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Notes state
  const [notes, setNotes] = useState<NoteItem[]>(() => getStoredNotes());
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(notes[0]?.id || null);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [noteSearch, setNoteSearch] = useState('');
  const [editTitre, setEditTitre] = useState('');
  const [editChapitre, setEditChapitre] = useState('');
  const [editContenu, setEditContenu] = useState('');
  const [editTags, setEditTags] = useState('');

  // Save selection
  useEffect(() => {
    try {
      localStorage.setItem('ses_dossier_selection_v2', JSON.stringify(selection));
    } catch {}
  }, [selection]);

  // Reload notes on storage changes
  useEffect(() => {
    setNotes(getStoredNotes());
    const onStorage = () => setNotes(getStoredNotes());
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  // Preset pack selectors
  const applyPreset = (preset: 'tous' | 'premiere' | 'seconde' | 'calculs' | 'auteurs' | 'vide') => {
    if (preset === 'tous') {
      setSelection({
        niveaux: ['Seconde', 'Première'],
        calculIds: calculsCatalog.map((c) => c.id),
        termeIds: allGlossaryTerms.map((t) => t.id),
        auteurIds: auteursSES.map((a) => a.id),
        mecanismeIds: mecanismesData.map((m) => m.id),
        inclureMethodeBac: true,
        inclureExemplesChiffres: true,
        inclurePieges: true,
      });
      showToast('⚡ Pack COMPLET chargé (Tous les calculs, termes et auteurs) !');
    } else if (preset === 'premiere') {
      const premCalculs = calculsCatalog.filter((c) => c.niveau.includes('Première')).map((c) => c.id);
      const premTerms = allGlossaryTerms.filter((t) => t.niveaux.includes('Première')).map((t) => t.id);
      setSelection({
        niveaux: ['Première'],
        calculIds: premCalculs,
        termeIds: premTerms,
        auteurIds: auteursSES.map((a) => a.id),
        mecanismeIds: mecanismesData.map((m) => m.id),
        inclureMethodeBac: true,
        inclureExemplesChiffres: true,
        inclurePieges: true,
      });
      showToast('⚡ Pack SPÉCIALITÉ PREMIÈRE SES chargé !');
    } else if (preset === 'seconde') {
      const secCalculs = calculsCatalog.filter((c) => c.niveau.includes('Seconde')).map((c) => c.id);
      const secTerms = allGlossaryTerms.filter((t) => t.niveaux.includes('Seconde')).map((t) => t.id);
      setSelection({
        niveaux: ['Seconde'],
        calculIds: secCalculs,
        termeIds: secTerms,
        auteurIds: auteursSES.slice(0, 8).map((a) => a.id),
        mecanismeIds: mecanismesData.slice(0, 3).map((m) => m.id),
        inclureMethodeBac: false,
        inclureExemplesChiffres: true,
        inclurePieges: true,
      });
      showToast('⚡ Pack SECONDE SES chargé !');
    } else if (preset === 'calculs') {
      setSelection({
        niveaux: ['Seconde', 'Première'],
        calculIds: calculsCatalog.map((c) => c.id),
        termeIds: [],
        auteurIds: [],
        mecanismeIds: [],
        inclureMethodeBac: true,
        inclureExemplesChiffres: true,
        inclurePieges: true,
      });
      showToast('⚡ Pack 30 CALCULS & MÉTHODES QUANTITATIVES chargé !');
    } else if (preset === 'auteurs') {
      setSelection({
        niveaux: ['Seconde', 'Première'],
        calculIds: [],
        termeIds: [],
        auteurIds: auteursSES.map((a) => a.id),
        mecanismeIds: mecanismesData.map((m) => m.id),
        inclureMethodeBac: true,
        inclureExemplesChiffres: false,
        inclurePieges: false,
      });
      showToast('⚡ Pack GRANDS AUTEURS & SCHÉMAS CAUSAUX chargé !');
    } else if (preset === 'vide') {
      setSelection({
        niveaux: ['Seconde', 'Première'],
        calculIds: [],
        termeIds: [],
        auteurIds: [],
        mecanismeIds: [],
        inclureMethodeBac: false,
        inclureExemplesChiffres: true,
        inclurePieges: true,
      });
      showToast('Sélection réinitialisée.');
    }
  };

  // Generate full document
  const fullDocument = useMemo(() => {
    return generateFullNotebookLMDossier(selection, dossierTitle);
  }, [selection, dossierTitle]);

  // Word count and stats
  const docStats = useMemo(() => {
    const words = fullDocument.split(/\s+/).filter(Boolean).length;
    const pagesEstimees = Math.max(1, Math.round(words / 450));
    return {
      words,
      pagesEstimees,
      calculsCount: selection.calculIds.length,
      termesCount: selection.termeIds.length,
      auteursCount: selection.auteurIds.length,
      mecanismesCount: selection.mecanismeIds.length,
    };
  }, [fullDocument, selection]);

  // Actions
  const handleCopyDocument = async () => {
    try {
      await navigator.clipboard.writeText(fullDocument);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = fullDocument;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    showToast('📋 Dossier complet copié ! Prêt à coller dans NotebookLM ou Gemini.');
  };

  const handleOpenNotebookLM = async () => {
    await handleCopyDocument();
    window.open('https://notebooklm.google.com/', '_blank');
    showToast('🚀 NotebookLM ouvert ! Collez (Ctrl+V) le document dans « Ajouter une source ».');
  };

  const handleOpenGemini = async () => {
    await handleCopyDocument();
    window.open('https://gemini.google.com/', '_blank');
    showToast('🤖 Gemini ouvert ! Collez (Ctrl+V) le document avec votre question.');
  };

  const handleDownloadMarkdown = () => {
    const blob = new Blob([fullDocument], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${dossierTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.md`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('📥 Fichier Markdown téléchargé ! Glissez-le directement dans NotebookLM.');
  };

  const handlePrintDocument = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>${dossierTitle}</title>
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; padding: 40px; color: #111827; }
            h1 { color: #1e3a8a; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; }
            h2 { color: #1e40af; margin-top: 28px; border-bottom: 1px solid #e5e7eb; padding-bottom: 4px; }
            h3 { color: #1f2937; margin-top: 18px; }
            code { background: #f3f4f6; padding: 2px 6px; border-radius: 4px; font-family: monospace; }
            ul { margin-top: 4px; }
            li { margin-bottom: 4px; }
            hr { border: 0; border-top: 1px solid #e5e7eb; margin: 24px 0; }
          </style>
        </head>
        <body>
          <pre style="white-space: pre-wrap; font-family: inherit;">${fullDocument}</pre>
          <script>window.print();</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  // Toggle single item
  const toggleItem = (category: 'calculIds' | 'termeIds' | 'auteurIds' | 'mecanismeIds', id: string) => {
    setSelection((prev) => {
      const list = prev[category];
      const nextList = list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
      return { ...prev, [category]: nextList };
    });
  };

  // Note management
  const selectedNote = useMemo(() => {
    return notes.find((n) => n.id === selectedNoteId) || notes[0] || null;
  }, [notes, selectedNoteId]);

  const filteredNotes = useMemo(() => {
    const q = noteSearch.toLowerCase().trim();
    return notes.filter((n) => {
      if (q) {
        const text = `${n.titre} ${n.chapitre} ${n.contenu} ${n.tags.join(' ')}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });
  }, [notes, noteSearch]);

  const handleStartCreateNote = () => {
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
    setIsEditingNote(true);
  };

  const handleSaveEditNote = () => {
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
    setIsEditingNote(false);
    showToast('Note enregistrée !');
  };

  const handleDeleteNote = (id: string) => {
    if (confirm('Voulez-vous vraiment supprimer cette note ?')) {
      const updated = deleteNote(id);
      setNotes(updated);
      setSelectedNoteId(updated[0]?.id || null);
      setIsEditingNote(false);
      showToast('Note supprimée.');
    }
  };

  return (
    <div style={{ display: 'grid', gap: 28 }}>
      {/* FLOATING TOAST */}
      {toastMsg && (
        <div
          style={{
            position: 'fixed',
            top: 24,
            right: 24,
            background: '#0f172a',
            color: '#38bdf8',
            padding: '16px 24px',
            borderRadius: 18,
            boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
            fontWeight: 800,
            fontSize: '0.94rem',
            zIndex: 9999,
          }}
        >
          {toastMsg}
        </div>
      )}

      {/* TOP HEADER */}
      <div
        style={{
          padding: '28px 32px',
          borderRadius: 28,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0369a1 100%)',
          color: '#ffffff',
          boxShadow: '0 20px 45px rgba(15, 23, 42, 0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 20,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <span style={{ background: '#38bdf8', color: '#0f172a', borderRadius: 999, padding: '3px 10px', fontSize: '0.74rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Connecteur Google NotebookLM & Gemini
            </span>
            <span style={{ color: '#bae6fd', fontSize: '0.82rem', fontWeight: 700 }}>
              ~{docStats.words.toLocaleString()} mots • {docStats.pagesEstimees} page{docStats.pagesEstimees > 1 ? 's' : ''}
            </span>
          </div>
          <h2 style={{ margin: '0 0 8px', fontSize: 'clamp(1.7rem, 2.5vw, 2.4rem)', fontWeight: 900 }}>
            Générateur de Dossier <span style={{ color: '#38bdf8' }}>NotebookLM</span>
          </h2>
          <p style={{ margin: 0, color: '#e0f2fe', fontSize: '0.96rem', maxWidth: 740, lineHeight: 1.6 }}>
            Sélectionnez vos sujets, calculs, définitions et auteurs pour compiler instantanément un <strong>grand document structuré</strong>. Téléchargez-le en 1 clic ou collez-le directement dans Google NotebookLM ou Gemini pour vos révisions !
          </p>
        </div>

        {/* Top Tab switch */}
        <div style={{ display: 'flex', gap: 8, background: 'rgba(255, 255, 255, 0.12)', padding: 6, borderRadius: 20 }}>
          <button
            type="button"
            onClick={() => setActiveTab('dossier')}
            style={{
              border: 'none',
              background: activeTab === 'dossier' ? '#ffffff' : 'transparent',
              color: activeTab === 'dossier' ? '#0f172a' : '#ffffff',
              padding: '10px 20px',
              borderRadius: 14,
              fontWeight: 800,
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            📑 Dossier Source NotebookLM
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('notes')}
            style={{
              border: 'none',
              background: activeTab === 'notes' ? '#ffffff' : 'transparent',
              color: activeTab === 'notes' ? '#0f172a' : '#ffffff',
              padding: '10px 20px',
              borderRadius: 14,
              fontWeight: 800,
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            📝 Mes Notes ({notes.length})
          </button>
        </div>
      </div>

      {/* TAB 1: DOSSIER BUILDER & EXPORTER */}
      {activeTab === 'dossier' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 420px) minmax(0, 1fr)', gap: 28 }}>
          {/* LEFT: SELECTION CONTROLS */}
          <div style={{ display: 'grid', gap: 24, height: 'fit-content' }}>
            {/* QUICK PRESET PACKS */}
            <div style={{ padding: 24, borderRadius: 28, background: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)', display: 'grid', gap: 14 }}>
              <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.92rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                ⚡ Packs de sélection 1-clic :
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <button
                  type="button"
                  onClick={() => applyPreset('premiere')}
                  style={{ border: '1px solid #bfdbfe', background: '#eff6ff', color: '#1d4ed8', padding: '10px 12px', borderRadius: 14, fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer' }}
                >
                  🎓 Spé Première SES
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset('seconde')}
                  style={{ border: '1px solid #a5f3fc', background: '#ecfeff', color: '#0891b2', padding: '10px 12px', borderRadius: 14, fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer' }}
                >
                  🏛️ Seconde SES
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset('calculs')}
                  style={{ border: '1px solid #ddd6fe', background: '#f5f3ff', color: '#6d28d9', padding: '10px 12px', borderRadius: 14, fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer' }}
                >
                  🧮 30 Calculs & Formules
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset('auteurs')}
                  style={{ border: '1px solid #fed7aa', background: '#fff7ed', color: '#c2410c', padding: '10px 12px', borderRadius: 14, fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer' }}
                >
                  🏛️ Auteurs & Schémas
                </button>
              </div>

              <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                <button
                  type="button"
                  onClick={() => applyPreset('tous')}
                  style={{ flex: 1, border: '1px solid #86efac', background: '#f0fdf4', color: '#15803d', padding: '8px 12px', borderRadius: 12, fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}
                >
                  ✓ Tout cocher
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset('vide')}
                  style={{ border: '1px solid #cbd5e1', background: '#f8fafc', color: '#64748b', padding: '8px 12px', borderRadius: 12, fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer' }}
                >
                  Réinitialiser
                </button>
              </div>
            </div>

            {/* SELECTION ACCORDIONS */}
            <div style={{ padding: 24, borderRadius: 28, background: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.03)', display: 'grid', gap: 16 }}>
              <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.96rem' }}>
                Ajuster les éléments inclus :
              </div>

              {/* 1. CALCULS */}
              <details open style={{ border: '1px solid #e2e8f0', borderRadius: 16, padding: '12px 16px' }}>
                <summary style={{ fontWeight: 800, color: '#1d4ed8', cursor: 'pointer', fontSize: '0.88rem' }}>
                  🧮 Calculs & Formules ({selection.calculIds.length}/{calculsCatalog.length})
                </summary>
                <div style={{ display: 'grid', gap: 6, maxHeight: 200, overflowY: 'auto', marginTop: 10, paddingRight: 4 }}>
                  {calculsCatalog.map((c) => (
                    <label key={c.id} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: '#334155', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={selection.calculIds.includes(c.id)}
                        onChange={() => toggleItem('calculIds', c.id)}
                      />
                      <span>{c.nom}</span>
                    </label>
                  ))}
                </div>
              </details>

              {/* 2. DEFINITIONS */}
              <details style={{ border: '1px solid #e2e8f0', borderRadius: 16, padding: '12px 16px' }}>
                <summary style={{ fontWeight: 800, color: '#7c3aed', cursor: 'pointer', fontSize: '0.88rem' }}>
                  📖 Notions & Définitions ({selection.termeIds.length}/{allGlossaryTerms.length})
                </summary>
                <div style={{ display: 'grid', gap: 6, maxHeight: 200, overflowY: 'auto', marginTop: 10, paddingRight: 4 }}>
                  {allGlossaryTerms.map((t) => (
                    <label key={t.id} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: '#334155', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={selection.termeIds.includes(t.id)}
                        onChange={() => toggleItem('termeIds', t.id)}
                      />
                      <span>{t.terme} ({t.categorie})</span>
                    </label>
                  ))}
                </div>
              </details>

              {/* 3. AUTEURS */}
              <details style={{ border: '1px solid #e2e8f0', borderRadius: 16, padding: '12px 16px' }}>
                <summary style={{ fontWeight: 800, color: '#c2410c', cursor: 'pointer', fontSize: '0.88rem' }}>
                  🏛️ Grands Auteurs ({selection.auteurIds.length}/{auteursSES.length})
                </summary>
                <div style={{ display: 'grid', gap: 6, maxHeight: 180, overflowY: 'auto', marginTop: 10, paddingRight: 4 }}>
                  {auteursSES.map((a) => (
                    <label key={a.id} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: '#334155', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={selection.auteurIds.includes(a.id)}
                        onChange={() => toggleItem('auteurIds', a.id)}
                      />
                      <span>{a.nom} ({a.courant})</span>
                    </label>
                  ))}
                </div>
              </details>

              {/* 4. MECANISMES */}
              <details style={{ border: '1px solid #e2e8f0', borderRadius: 16, padding: '12px 16px' }}>
                <summary style={{ fontWeight: 800, color: '#0f766e', cursor: 'pointer', fontSize: '0.88rem' }}>
                  🔄 Schémas Causaux ({selection.mecanismeIds.length}/{mecanismesData.length})
                </summary>
                <div style={{ display: 'grid', gap: 6, maxHeight: 160, overflowY: 'auto', marginTop: 10, paddingRight: 4 }}>
                  {mecanismesData.map((m) => (
                    <label key={m.id} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: '#334155', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={selection.mecanismeIds.includes(m.id)}
                        onChange={() => toggleItem('mecanismeIds', m.id)}
                      />
                      <span>{m.titre}</span>
                    </label>
                  ))}
                </div>
              </details>

              {/* OPTIONS TOGGLES */}
              <div style={{ display: 'grid', gap: 8, borderTop: '1px solid #e2e8f0', paddingTop: 14 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.84rem', fontWeight: 700, color: '#334155', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={selection.inclureMethodeBac}
                    onChange={(e) => setSelection({ ...selection, inclureMethodeBac: e.target.checked })}
                  />
                  <span>🧭 Inclure la méthode Bac & Règle AEI</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.84rem', fontWeight: 700, color: '#334155', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={selection.inclureExemplesChiffres}
                    onChange={(e) => setSelection({ ...selection, inclureExemplesChiffres: e.target.checked })}
                  />
                  <span>📌 Inclure les exemples chiffrés & phrases types</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.84rem', fontWeight: 700, color: '#334155', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={selection.inclurePieges}
                    onChange={(e) => setSelection({ ...selection, inclurePieges: e.target.checked })}
                  />
                  <span>⚠️ Inclure les pièges fréquents à éviter</span>
                </label>
              </div>
            </div>
          </div>

          {/* RIGHT: LIVE DOCUMENT VIEWER & ACTIONS */}
          <div style={{ display: 'grid', gap: 20 }}>
            {/* ACTION TOOLBAR */}
            <div
              style={{
                padding: '20px 24px',
                borderRadius: 24,
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.03)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 12,
              }}
            >
              <div style={{ flex: '1 1 260px' }}>
                <input
                  type="text"
                  value={dossierTitle}
                  onChange={(e) => setDossierTitle(e.target.value)}
                  placeholder="Titre du dossier..."
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 14,
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.94rem',
                    fontWeight: 800,
                    color: '#0f172a',
                  }}
                />
              </div>

              {/* ACTION BUTTONS */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <button
                  type="button"
                  onClick={handleOpenNotebookLM}
                  title="Copie le texte et ouvre Google NotebookLM dans un nouvel onglet"
                  style={{
                    border: 'none',
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
                    color: '#ffffff',
                    padding: '10px 18px',
                    borderRadius: 14,
                    fontWeight: 900,
                    fontSize: '0.86rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
                  }}
                >
                  <span>🚀</span>
                  <span>Ouvrir NotebookLM</span>
                </button>

                <button
                  type="button"
                  onClick={handleOpenGemini}
                  title="Copie le texte et ouvre Google Gemini"
                  style={{
                    border: 'none',
                    background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 100%)',
                    color: '#ffffff',
                    padding: '10px 16px',
                    borderRadius: 14,
                    fontWeight: 900,
                    fontSize: '0.86rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span>🤖</span>
                  <span>Ouvrir Gemini</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyDocument}
                  style={{
                    border: '1px solid #cbd5e1',
                    background: '#f8fafc',
                    color: '#0f172a',
                    padding: '10px 14px',
                    borderRadius: 14,
                    fontWeight: 800,
                    fontSize: '0.84rem',
                    cursor: 'pointer',
                  }}
                >
                  📋 Copier tout
                </button>

                <button
                  type="button"
                  onClick={handleDownloadMarkdown}
                  style={{
                    border: '1px solid #cbd5e1',
                    background: '#f8fafc',
                    color: '#0f172a',
                    padding: '10px 14px',
                    borderRadius: 14,
                    fontWeight: 800,
                    fontSize: '0.84rem',
                    cursor: 'pointer',
                  }}
                >
                  📥 .md
                </button>

                <button
                  type="button"
                  onClick={handlePrintDocument}
                  style={{
                    border: '1px solid #cbd5e1',
                    background: '#f8fafc',
                    color: '#0f172a',
                    padding: '10px 14px',
                    borderRadius: 14,
                    fontWeight: 800,
                    fontSize: '0.84rem',
                    cursor: 'pointer',
                  }}
                >
                  🖨️ PDF
                </button>
              </div>
            </div>

            {/* DOCUMENT LIVE PREVIEW CONTAINER */}
            <div
              style={{
                padding: '32px 36px',
                borderRadius: 28,
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 12px 35px rgba(15, 23, 42, 0.04)',
                minHeight: 520,
                maxHeight: 700,
                overflowY: 'auto',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9', paddingBottom: 12, marginBottom: 20 }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Aperçu du document source formaté
                </span>
                <span style={{ fontSize: '0.78rem', background: '#eff6ff', color: '#1d4ed8', padding: '3px 10px', borderRadius: 999, fontWeight: 800 }}>
                  Format Markdown pur
                </span>
              </div>

              <pre
                style={{
                  margin: 0,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  fontFamily: 'inherit',
                  fontSize: '0.92rem',
                  lineHeight: 1.7,
                  color: '#334155',
                }}
              >
                {fullDocument}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MY PERSONAL NOTES */}
      {activeTab === 'notes' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 340px) minmax(0, 1fr)', gap: 28 }}>
          {/* LEFT: NOTES LIST */}
          <div style={{ padding: 22, borderRadius: 28, background: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 8px 24px rgba(15, 23, 42, 0.03)', display: 'grid', gap: 14, height: 'fit-content' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800 }}>Mes fiches & Notes</h3>
              <button
                type="button"
                onClick={handleStartCreateNote}
                style={{ border: 'none', background: '#2563eb', color: '#ffffff', borderRadius: 12, padding: '8px 14px', fontSize: '0.8rem', fontWeight: 800, cursor: 'pointer' }}
              >
                ➕ Nouvelle
              </button>
            </div>

            <input
              type="text"
              placeholder="Filtrer mes notes..."
              value={noteSearch}
              onChange={(e) => setNoteSearch(e.target.value)}
              style={{ width: '100%', padding: '10px 14px', borderRadius: 12, border: '1px solid #cbd5e1', fontSize: '0.88rem' }}
            />

            <div style={{ display: 'grid', gap: 8, maxHeight: 480, overflowY: 'auto' }}>
              {filteredNotes.map((n) => {
                const isSel = selectedNoteId === n.id;
                return (
                  <div
                    key={n.id}
                    onClick={() => {
                      setSelectedNoteId(n.id);
                      setIsEditingNote(false);
                    }}
                    style={{
                      padding: '12px 14px',
                      borderRadius: 16,
                      background: isSel ? '#eff6ff' : '#f8fafc',
                      border: `1.5px solid ${isSel ? '#3b82f6' : '#e2e8f0'}`,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div style={{ fontWeight: 800, color: isSel ? '#1d4ed8' : '#0f172a', fontSize: '0.92rem', marginBottom: 4 }}>
                      {n.titre}
                    </div>
                    <div style={{ fontSize: '0.76rem', color: '#64748b' }}>{n.chapitre}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: NOTE VIEWER / EDITOR */}
          <div style={{ padding: 28, borderRadius: 28, background: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 8px 24px rgba(15, 23, 42, 0.03)' }}>
            {selectedNote ? (
              isEditingNote ? (
                <div style={{ display: 'grid', gap: 14 }}>
                  <input
                    type="text"
                    value={editTitre}
                    onChange={(e) => setEditTitre(e.target.value)}
                    placeholder="Titre de la note..."
                    style={{ padding: '12px 16px', borderRadius: 14, border: '1.5px solid #cbd5e1', fontSize: '1.1rem', fontWeight: 800 }}
                  />
                  <input
                    type="text"
                    value={editChapitre}
                    onChange={(e) => setEditChapitre(e.target.value)}
                    placeholder="Chapitre associé..."
                    style={{ padding: '10px 14px', borderRadius: 12, border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                  />
                  <textarea
                    value={editContenu}
                    onChange={(e) => setEditContenu(e.target.value)}
                    rows={12}
                    placeholder="Contenu de la note..."
                    style={{ padding: '14px 16px', borderRadius: 14, border: '1.5px solid #cbd5e1', fontFamily: 'inherit', fontSize: '0.94rem', lineHeight: 1.6 }}
                  />
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      type="button"
                      onClick={handleSaveEditNote}
                      style={{ background: '#2563eb', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: 12, fontWeight: 800, cursor: 'pointer' }}
                    >
                      💾 Enregistrer
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditingNote(false)}
                      style={{ background: '#e2e8f0', color: '#475569', border: 'none', padding: '10px 16px', borderRadius: 12, fontWeight: 700, cursor: 'pointer' }}
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'grid', gap: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
                    <div>
                      <span style={{ fontSize: '0.78rem', color: '#2563eb', fontWeight: 800 }}>{selectedNote.chapitre}</span>
                      <h3 style={{ margin: '4px 0 0', fontSize: '1.5rem', fontWeight: 900, color: '#0f172a' }}>
                        {selectedNote.titre}
                      </h3>
                    </div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button
                        type="button"
                        onClick={() => {
                          setEditTitre(selectedNote.titre);
                          setEditChapitre(selectedNote.chapitre || '');
                          setEditContenu(selectedNote.contenu);
                          setEditTags(selectedNote.tags.join(', '));
                          setIsEditingNote(true);
                        }}
                        style={{ border: '1px solid #cbd5e1', background: '#f8fafc', padding: '6px 12px', borderRadius: 10, fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}
                      >
                        ✏️ Modifier
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteNote(selectedNote.id)}
                        style={{ border: 'none', background: '#fee2e2', color: '#dc2626', padding: '6px 12px', borderRadius: 10, fontSize: '0.8rem', fontWeight: 800, cursor: 'pointer' }}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>

                  <div style={{ whiteSpace: 'pre-line', color: '#334155', fontSize: '0.96rem', lineHeight: 1.7, borderTop: '1px solid #f1f5f9', paddingTop: 16 }}>
                    {selectedNote.contenu}
                  </div>
                </div>
              )
            ) : (
              <div style={{ textAlign: 'center', padding: 40, color: '#64748b' }}>
                Sélectionnez une note ou créez-en une nouvelle.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
