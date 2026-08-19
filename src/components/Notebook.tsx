import React, { useState, useEffect, useMemo, useRef } from 'react';
import { defaultNotebookSources, NotebookSource, generatePodcastBriefing, generateContextualAnswer, AudioHostLine } from '../data/notebookLMSources';
import { getStoredNotes, addNote, updateNote, deleteNote, NoteItem } from '../data/notebookHelper';
import { speakText, stopSpeaking } from '../utils/audioHelper';

export default function Notebook({ onNavigateToCalcul }: { onNavigateToCalcul?: (id: string) => void }) {
  // Sources state
  const [sources, setSources] = useState<NotebookSource[]>(() => {
    try {
      const saved = localStorage.getItem('ses_gemini_notebook_sources');
      return saved ? JSON.parse(saved) : defaultNotebookSources;
    } catch {
      return defaultNotebookSources;
    }
  });

  // Save sources
  useEffect(() => {
    try {
      localStorage.setItem('ses_gemini_notebook_sources', JSON.stringify(sources));
    } catch {}
  }, [sources]);

  // Active view inside Notebook: 'studio' | 'sources' | 'notes'
  const [activeTab, setActiveTab] = useState<'studio' | 'sources' | 'notes'>('studio');

  // Studio sub-tab: 'audio' | 'guide' | 'chat' | 'faq' | 'dissertation'
  const [studioTool, setStudioTool] = useState<'audio' | 'guide' | 'chat' | 'faq' | 'dissertation'>('audio');

  // Notes state
  const [notes, setNotes] = useState<NoteItem[]>(() => getStoredNotes());
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(notes[0]?.id || null);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [noteSearch, setNoteSearch] = useState('');
  const [editTitre, setEditTitre] = useState('');
  const [editChapitre, setEditChapitre] = useState('');
  const [editContenu, setEditContenu] = useState('');
  const [editTags, setEditTags] = useState('');

  // Audio Podcast state
  const [isPlayingPodcast, setIsPlayingPodcast] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [podcastSpeed, setPodcastSpeed] = useState<number>(1.0);

  // Chat state
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'gemini'; text: string; sources?: string[] }>>([
    {
      sender: 'gemini',
      text: "👋 Bonjour ! Je suis votre assistant **Gemini Notebook SES**. Posez-moi des questions sur vos sources sélectionnées, demandez une comparaison de notions, un plan de dissertation ou des explications pas-à-pas !",
      sources: []
    }
  ]);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Source selection & modal state
  const [readingSource, setReadingSource] = useState<NotebookSource | null>(null);
  const [isAddingSource, setIsAddingSource] = useState(false);
  const [newSourceTitle, setNewSourceTitle] = useState('');
  const [newSourceChapitre, setNewSourceChapitre] = useState('Général');
  const [newSourceContent, setNewSourceContent] = useState('');

  // Toast notification
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  // Reload notes when storage updates
  useEffect(() => {
    setNotes(getStoredNotes());
    const onStorage = () => setNotes(getStoredNotes());
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const activeSources = useMemo(() => sources.filter((s) => s.estActif), [sources]);

  const toggleSourceActive = (id: string) => {
    setSources((prev) =>
      prev.map((s) => (s.id === id ? { ...s, estActif: !s.estActif } : s))
    );
  };

  const selectAllSources = (active: boolean) => {
    setSources((prev) => prev.map((s) => ({ ...s, estActif: active })));
  };

  const handleAddCustomSource = () => {
    if (!newSourceTitle.trim() || !newSourceContent.trim()) return;
    const newSrc: NotebookSource = {
      id: `source-custom-${Date.now()}`,
      titre: newSourceTitle.trim(),
      chapitre: newSourceChapitre.trim() || 'Personnalisé',
      classe: 'Tous',
      discipline: 'Économie',
      resume: newSourceContent.slice(0, 160) + '...',
      contenuComplet: newSourceContent.trim(),
      notionsCles: ['Source personnelle'],
      estActif: true,
    };
    setSources([newSrc, ...sources]);
    setNewSourceTitle('');
    setNewSourceContent('');
    setIsAddingSource(false);
    showToast(`Source « ${newSrc.titre} » ajoutée avec succès !`);
  };

  // Podcast dialogue
  const podcastDialogue = useMemo(() => generatePodcastBriefing(activeSources), [activeSources]);

  // Play podcast line by line
  const handlePlayPodcast = () => {
    if (isPlayingPodcast) {
      stopSpeaking();
      setIsPlayingPodcast(false);
      return;
    }

    if (podcastDialogue.length === 0) return;

    setIsPlayingPodcast(true);
    let index = 0;
    setCurrentLineIndex(0);

    const playNext = (idx: number) => {
      if (idx >= podcastDialogue.length) {
        setIsPlayingPodcast(false);
        setCurrentLineIndex(0);
        return;
      }
      setCurrentLineIndex(idx);
      const line = podcastDialogue[idx];
      const speechText = `${line.speaker} : ${line.texte}`;
      speakText(speechText, () => {
        playNext(idx + 1);
      });
    };

    playNext(0);
  };

  // Chat send
  const handleSendChat = (promptText?: string) => {
    const text = promptText || chatInput;
    if (!text.trim()) return;

    const userMsg = { sender: 'user' as const, text: text.trim() };
    const { reponse, sourcesCitees } = generateContextualAnswer(text, activeSources);
    const geminiMsg = { sender: 'gemini' as const, text: reponse, sources: sourcesCitees };

    setChatMessages((prev) => [...prev, userMsg, geminiMsg]);
    if (!promptText) setChatInput('');

    setTimeout(() => {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Save chat message as note
  const handleSaveToNotes = (title: string, content: string, tag: string = 'Gemini') => {
    const newNote = addNote({
      titre: `📌 ${title}`,
      chapitre: activeSources[0]?.chapitre || 'Synthèse Gemini',
      contenu: content,
      tags: [tag, 'NotebookLM'],
      estEpingle: false,
    });
    setNotes(getStoredNotes());
    setSelectedNoteId(newNote.id);
    showToast('Enregistré dans vos Notes !');
  };

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
      chapitre: activeSources[0]?.chapitre || 'Général',
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

  const handleExportMarkdown = (note: NoteItem) => {
    const text = `# ${note.titre}\n*Chapitre : ${note.chapitre || 'Général'}*\n\n${note.contenu}`;
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${note.titre.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.md`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('Fichier Markdown exporté !');
  };

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      {/* FLOATING TOAST */}
      {toastMsg && (
        <div
          style={{
            position: 'fixed',
            top: 24,
            right: 24,
            background: '#0f172a',
            color: '#38bdf8',
            padding: '14px 22px',
            borderRadius: 16,
            boxShadow: '0 12px 35px rgba(0,0,0,0.3)',
            fontWeight: 800,
            fontSize: '0.92rem',
            zIndex: 9999,
          }}
        >
          ✨ {toastMsg}
        </div>
      )}

      {/* TOP GEMINI NOTEBOOK HEADER */}
      <div
        style={{
          padding: '28px 28px',
          borderRadius: 28,
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #1e3a8a 100%)',
          color: '#ffffff',
          boxShadow: '0 20px 45px rgba(30, 27, 75, 0.25)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <span style={{ background: '#38bdf8', color: '#0f172a', borderRadius: 999, padding: '3px 10px', fontSize: '0.74rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Gemini Studio
            </span>
            <span style={{ color: '#93c5fd', fontSize: '0.82rem', fontWeight: 700 }}>
              {activeSources.length} source{activeSources.length > 1 ? 's' : ''} active{activeSources.length > 1 ? 's' : ''} sur {sources.length}
            </span>
          </div>
          <h2 style={{ margin: '0 0 6px', fontSize: 'clamp(1.6rem, 2.5vw, 2.3rem)', fontWeight: 900, color: '#ffffff' }}>
            NotebookLM <span style={{ color: '#38bdf8' }}>SES Compagnon</span>
          </h2>
          <p style={{ margin: 0, color: '#c7d2fe', fontSize: '0.95rem', maxWidth: 680, lineHeight: 1.6 }}>
            Espace d'étude intelligent : chargez vos cours, générez des podcasts audio vivants, interrogez vos sources en temps réel et préparez vos dissertations du Bac.
          </p>
        </div>

        {/* Top Quick Tabs */}
        <div style={{ display: 'flex', gap: 8, background: 'rgba(255, 255, 255, 0.1)', padding: 6, borderRadius: 20 }}>
          {[
            { key: 'studio', label: '✨ Studio & Podcast', icon: '🎙️' },
            { key: 'sources', label: `📂 Sources (${sources.length})`, icon: '📚' },
            { key: 'notes', label: `📓 Carnet (${notes.length})`, icon: '📝' },
          ].map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key as any)}
                style={{
                  border: 'none',
                  background: isActive ? '#ffffff' : 'transparent',
                  color: isActive ? '#1e1b4b' : '#ffffff',
                  padding: '10px 18px',
                  borderRadius: 14,
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: STUDIO GEMINI & AUDIO BRIEFING */}
      {activeTab === 'studio' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {/* LEFT: STUDIO CONTROL & TOOLS */}
          <div style={{ display: 'grid', gap: 20, height: 'fit-content' }}>
            {/* TOOL SELECTOR CHIPS */}
            <div style={{ padding: 18, borderRadius: 24, background: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 8px 24px rgba(15, 23, 42, 0.03)', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {[
                { id: 'audio', label: '🎙️ Audio Overview', desc: 'Podcast interactif' },
                { id: 'guide', label: '📑 Guide d’Étude', desc: 'Synthèse du corpus' },
                { id: 'chat', label: '💬 Chat Source IA', desc: 'Q&A instantané' },
                { id: 'faq', label: '❓ FAQ du Bac', desc: 'Questions types' },
                { id: 'dissertation', label: '🧭 Plan AEI', desc: 'Argumentation' },
              ].map((tool) => {
                const isSel = studioTool === tool.id;
                return (
                  <button
                    key={tool.id}
                    type="button"
                    onClick={() => setStudioTool(tool.id as any)}
                    style={{
                      border: `1.5px solid ${isSel ? '#3b82f6' : '#e2e8f0'}`,
                      background: isSel ? '#eff6ff' : '#f8fafc',
                      color: isSel ? '#1d4ed8' : '#334155',
                      padding: '10px 16px',
                      borderRadius: 16,
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      flex: '1 1 auto',
                      textAlign: 'left',
                    }}
                  >
                    <div>{tool.label}</div>
                    <div style={{ fontSize: '0.72rem', color: isSel ? '#2563eb' : '#64748b', fontWeight: 600, marginTop: 2 }}>{tool.desc}</div>
                  </button>
                );
              })}
            </div>

            {/* ACTIVE SOURCES PILL WIDGET */}
            <div style={{ padding: 20, borderRadius: 24, background: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 8px 24px rgba(15, 23, 42, 0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  📂 Sources mobilisées ({activeSources.length})
                </span>
                <button
                  type="button"
                  onClick={() => setActiveTab('sources')}
                  style={{ border: 'none', background: 'none', color: '#2563eb', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer' }}
                >
                  Gérer les sources ➔
                </button>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {activeSources.map((s) => (
                  <span
                    key={s.id}
                    style={{
                      background: '#f1f5f9',
                      color: '#334155',
                      border: '1px solid #cbd5e1',
                      borderRadius: 999,
                      padding: '4px 12px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                    }}
                  >
                    📖 {s.titre}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: TOOL WORKSPACE */}
          <div style={{ flex: '1 1 500px' }}>
            {/* SUB-TOOL 1: AUDIO OVERVIEW PODCAST */}
            {studioTool === 'audio' && (
              <div style={{ padding: 28, borderRadius: 28, background: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 12px 35px rgba(15, 23, 42, 0.04)', display: 'grid', gap: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                  <div>
                    <span style={{ background: '#dbeafe', color: '#1d4ed8', padding: '4px 10px', borderRadius: 999, fontSize: '0.75rem', fontWeight: 800 }}>
                      🎙️ NotebookLM Audio Overview
                    </span>
                    <h3 style={{ margin: '8px 0 4px', fontSize: '1.4rem', color: '#0f172a', fontWeight: 800 }}>
                      Podcast de révision dynamique
                    </h3>
                    <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>
                      Écoutez deux experts IA synthétiser et débattre de vos sources actives.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handlePlayPodcast}
                    style={{
                      border: 'none',
                      background: isPlayingPodcast ? '#ef4444' : 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
                      color: '#ffffff',
                      padding: '14px 28px',
                      borderRadius: 999,
                      fontWeight: 900,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      boxShadow: '0 8px 24px rgba(37, 99, 235, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <span>{isPlayingPodcast ? '⏹️ Arrêter' : '▶️ Lancer le podcast'}</span>
                  </button>
                </div>

                {/* ANIMATED PODCAST DIALOGUE SCRIPT */}
                <div style={{ display: 'grid', gap: 14, maxHeight: 480, overflowY: 'auto', paddingRight: 6 }}>
                  {podcastDialogue.map((line, i) => {
                    const isCurrent = isPlayingPodcast && currentLineIndex === i;
                    const isAlex = line.speaker === 'Alex';
                    return (
                      <div
                        key={i}
                        style={{
                          padding: '16px 20px',
                          borderRadius: 20,
                          background: isCurrent ? (isAlex ? '#dbeafe' : '#fce7f3') : isAlex ? '#f8fafc' : '#fff1f2',
                          border: `1.5px solid ${isCurrent ? (isAlex ? '#3b82f6' : '#ec4899') : '#e2e8f0'}`,
                          transition: 'all 0.2s ease',
                          transform: isCurrent ? 'scale(1.01)' : 'scale(1)',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                          <span style={{ fontWeight: 900, fontSize: '0.86rem', color: isAlex ? '#1d4ed8' : '#be185d' }}>
                            {isAlex ? '🎙️ Alex (Économiste)' : '🎙️ Sarah (Sociologue)'}
                          </span>
                          {line.conceptCite && (
                            <span style={{ fontSize: '0.74rem', background: '#ffffff', border: '1px solid #cbd5e1', padding: '2px 8px', borderRadius: 999, color: '#475569', fontWeight: 700 }}>
                              📌 {line.conceptCite}
                            </span>
                          )}
                        </div>
                        <p style={{ margin: 0, color: '#1e293b', fontSize: '0.94rem', lineHeight: 1.6 }}>
                          {line.texte}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* SUB-TOOL 2: STUDY GUIDE */}
            {studioTool === 'guide' && (
              <div style={{ padding: 28, borderRadius: 28, background: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 12px 35px rgba(15, 23, 42, 0.04)', display: 'grid', gap: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                  <div>
                    <h3 style={{ margin: '0 0 4px', fontSize: '1.4rem', color: '#0f172a', fontWeight: 800 }}>
                      📑 Guide d'Étude & Synthèse Générée
                    </h3>
                    <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>
                      Vue d'ensemble structurée de vos documents pour les révisions.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const text = activeSources.map((s) => `### ${s.titre}\n${s.resume}\n\n**Notions clés :** ${s.notionsCles.join(', ')}\n`).join('\n---\n');
                      handleSaveToNotes('Guide de révision officiel', text, 'Guide');
                    }}
                    style={{
                      border: '1px solid #cbd5e1',
                      background: '#f8fafc',
                      color: '#0f172a',
                      padding: '8px 16px',
                      borderRadius: 12,
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      cursor: 'pointer',
                    }}
                  >
                    📥 Sauvegarder dans Notes
                  </button>
                </div>

                <div style={{ display: 'grid', gap: 16 }}>
                  {activeSources.map((s) => (
                    <div key={s.id} style={{ padding: 18, borderRadius: 20, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <h4 style={{ margin: 0, color: '#1e3a8a', fontSize: '1.1rem', fontWeight: 800 }}>{s.titre}</h4>
                        <span style={{ fontSize: '0.74rem', background: '#dbeafe', color: '#1e40af', padding: '3px 8px', borderRadius: 999, fontWeight: 800 }}>
                          {s.chapitre}
                        </span>
                      </div>
                      <p style={{ margin: '0 0 12px', color: '#334155', fontSize: '0.92rem', lineHeight: 1.6 }}>{s.resume}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {s.notionsCles.map((n, i) => (
                          <span key={i} style={{ background: '#ffffff', color: '#0f766e', border: '1px solid #ccfbf1', padding: '3px 8px', borderRadius: 999, fontSize: '0.76rem', fontWeight: 700 }}>
                            ✓ {n}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SUB-TOOL 3: CONTEXTUAL CHAT */}
            {studioTool === 'chat' && (
              <div style={{ padding: 24, borderRadius: 28, background: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 12px 35px rgba(15, 23, 42, 0.04)', display: 'grid', gap: 16 }}>
                <div>
                  <h3 style={{ margin: '0 0 4px', fontSize: '1.3rem', color: '#0f172a', fontWeight: 800 }}>
                    💬 Assistant Chat Sourcé (Gemini Grounding)
                  </h3>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '0.88rem' }}>
                    Toutes les réponses s'appuient strictement sur vos {activeSources.length} source(s) active(s).
                  </p>
                </div>

                {/* SUGGESTED PROMPTS */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {[
                    "Différence entre Valeur Ajoutée et Bénéfice ?",
                    "Comment fonctionne le paradoxe d'Olson ?",
                    "Pourquoi le surplus est-il maximisé en CPP ?",
                    "Comment les crédits font les dépôts ?",
                  ].map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSendChat(p)}
                      style={{
                        border: '1px solid #e2e8f0',
                        background: '#f8fafc',
                        color: '#334155',
                        borderRadius: 999,
                        padding: '6px 12px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      💡 {p}
                    </button>
                  ))}
                </div>

                {/* MESSAGES CONTAINER */}
                <div style={{ minHeight: 280, maxHeight: 420, overflowY: 'auto', display: 'grid', gap: 12, paddingRight: 6 }}>
                  {chatMessages.map((msg, i) => {
                    const isUser = msg.sender === 'user';
                    return (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          justifyContent: isUser ? 'flex-end' : 'flex-start',
                        }}
                      >
                        <div
                          style={{
                            maxWidth: '88%',
                            padding: '14px 18px',
                            borderRadius: 20,
                            background: isUser ? '#1e3a8a' : '#f1f5f9',
                            color: isUser ? '#ffffff' : '#0f172a',
                            fontSize: '0.92rem',
                            lineHeight: 1.6,
                            border: isUser ? 'none' : '1px solid #e2e8f0',
                          }}
                        >
                          <div style={{ whiteSpace: 'pre-line' }}>{msg.text}</div>

                          {!isUser && msg.sources && msg.sources.length > 0 && (
                            <div style={{ marginTop: 10, paddingTop: 8, borderTop: '1px solid #cbd5e1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
                              <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                                📌 Sources : {msg.sources.join(', ')}
                              </div>
                              <button
                                type="button"
                                onClick={() => handleSaveToNotes('Réponse Gemini', msg.text, 'Chat')}
                                style={{ border: 'none', background: '#dbeafe', color: '#1d4ed8', padding: '3px 8px', borderRadius: 8, fontSize: '0.72rem', fontWeight: 800, cursor: 'pointer' }}
                              >
                                📥 Enregistrer
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  <div ref={chatBottomRef} />
                </div>

                {/* INPUT BAR */}
                <div style={{ display: 'flex', gap: 8 }}>
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
                    placeholder="Posez une question sur votre corpus (ex: chaîne causale, calculs, définitions)..."
                    style={{
                      flex: 1,
                      padding: '13px 18px',
                      borderRadius: 16,
                      border: '1.5px solid #cbd5e1',
                      fontSize: '0.94rem',
                      outline: 'none',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => handleSendChat()}
                    style={{
                      border: 'none',
                      background: '#1e3a8a',
                      color: '#ffffff',
                      padding: '0 22px',
                      borderRadius: 16,
                      fontWeight: 800,
                      fontSize: '0.92rem',
                      cursor: 'pointer',
                    }}
                  >
                    Envoyer ➔
                  </button>
                </div>
              </div>
            )}

            {/* SUB-TOOL 4: FAQ DU BAC */}
            {studioTool === 'faq' && (
              <div style={{ padding: 28, borderRadius: 28, background: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 12px 35px rgba(15, 23, 42, 0.04)', display: 'grid', gap: 16 }}>
                <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#0f172a', fontWeight: 800 }}>
                  ❓ FAQ & Questions Types Baccalauréat
                </h3>
                <div style={{ display: 'grid', gap: 12 }}>
                  {[
                    { q: "Quelles sont les conditions de la Concurrence Pure et Parfaite (CPP) ?", a: "Les 5 conditions sont : l'atomicité, l'homogénéité du produit, la libre entrée et sortie du marché, la transparence de l'information et la parfaite mobilité des facteurs de production." },
                    { q: "Quelle est la différence entre chiffre d'affaires, valeur ajoutée et bénéfice ?", a: "Le chiffre d'affaires (CA) est le montant total des ventes. La valeur ajoutée (VA) est la création réelle de richesse (CA − Consommations intermédiaires). Le bénéfice est le résultat final (Produits − Charges)." },
                    { q: "Que signifie « Les crédits font les dépôts » ?", a: "Cela signifie que les banques commerciales créent la monnaie ex-nihilo lorsqu'elles accordent un prêt, sans avoir besoin d'attendre des dépôts préalables." },
                    { q: "Qu'est-ce que le paradoxe d'Olson ?", a: "C'est le fait qu'un individu rationnel a intérêt à être passager clandestin (ne pas s'engager) tout en profitant des retombées positives de l'action collective menée par les autres." }
                  ].map((item, i) => (
                    <details key={i} style={{ padding: '14px 18px', borderRadius: 16, background: '#f8fafc', border: '1px solid #e2e8f0', cursor: 'pointer' }}>
                      <summary style={{ fontWeight: 800, color: '#1e3a8a', fontSize: '0.94rem' }}>{item.q}</summary>
                      <p style={{ margin: '10px 0 0', color: '#334155', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* SUB-TOOL 5: DISSERTATION PLAN AEI */}
            {studioTool === 'dissertation' && (
              <div style={{ padding: 28, borderRadius: 28, background: '#ffffff', border: '1.5px solid #e2e8f0', boxShadow: '0 12px 35px rgba(15, 23, 42, 0.04)', display: 'grid', gap: 16 }}>
                <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#0f172a', fontWeight: 800 }}>
                  🧭 Générateur de Plan de Dissertation & Paragraphes AEI
                </h3>
                <div style={{ padding: 18, borderRadius: 20, background: '#eff6ff', border: '1.5px solid #bfdbfe' }}>
                  <div style={{ fontWeight: 800, color: '#1d4ed8', marginBottom: 6 }}>Règle d'or AEI au Baccalauréat :</div>
                  <div style={{ fontSize: '0.9rem', color: '#1e3a8a', lineHeight: 1.6 }}>
                    - **A (Affirmer)** : Énoncer clairement l'idée directrice du sous-paragraphe.<br />
                    - **E (Expliciter)** : Dérouler le mécanisme sociologique ou économique étape par étape.<br />
                    - **I (Illustrer)** : Citer une donnée chiffrée issue d'un document ou un exemple historique précis.
                  </div>
                </div>

                <div style={{ display: 'grid', gap: 12 }}>
                  <div style={{ padding: 16, borderRadius: 16, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ margin: '0 0 6px', color: '#0f172a' }}>I. Première partie : Thèse principale</h4>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569' }}>
                      A. Sous-partie 1 : Présentation des mécanismes primaires du corpus.<br />
                      B. Sous-partie 2 : Analyse des effets directs sur les agents économiques et sociaux.
                    </p>
                  </div>
                  <div style={{ padding: 16, borderRadius: 16, background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ margin: '0 0 6px', color: '#0f172a' }}>II. Seconde partie : Limites, nuances ou perspectives</h4>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: '#475569' }}>
                      A. Sous-partie 1 : Les défaillances, paradoxes ou limites institutionnelles.<br />
                      B. Sous-partie 2 : Les politiques publiques correctrices et régulations.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: SOURCES & DOCUMENTS */}
      {activeTab === 'sources' && (
        <div style={{ display: 'grid', gap: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                type="button"
                onClick={() => selectAllSources(true)}
                style={{ border: '1px solid #cbd5e1', background: '#ffffff', color: '#0f172a', borderRadius: 12, padding: '8px 14px', fontSize: '0.82rem', fontWeight: 800, cursor: 'pointer' }}
              >
                Tout cocher
              </button>
              <button
                type="button"
                onClick={() => selectAllSources(false)}
                style={{ border: '1px solid #cbd5e1', background: '#ffffff', color: '#64748b', borderRadius: 12, padding: '8px 14px', fontSize: '0.82rem', fontWeight: 800, cursor: 'pointer' }}
              >
                Tout décocher
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsAddingSource(true)}
              style={{ border: 'none', background: '#2563eb', color: '#ffffff', borderRadius: 14, padding: '10px 18px', fontSize: '0.86rem', fontWeight: 800, cursor: 'pointer' }}
            >
              ➕ Ajouter une source de cours
            </button>
          </div>

          {/* ADD SOURCE MODAL */}
          {isAddingSource && (
            <div style={{ padding: 24, borderRadius: 24, background: '#f8fafc', border: '2px dashed #93c5fd', display: 'grid', gap: 14 }}>
              <h4 style={{ margin: 0, color: '#1e3a8a' }}>Ajouter un texte de cours ou un sujet de Bac</h4>
              <input
                type="text"
                placeholder="Titre du document..."
                value={newSourceTitle}
                onChange={(e) => setNewSourceTitle(e.target.value)}
                style={{ padding: '12px 16px', borderRadius: 12, border: '1px solid #cbd5e1' }}
              />
              <textarea
                placeholder="Collez ici le contenu de votre cours ou document..."
                value={newSourceContent}
                onChange={(e) => setNewSourceContent(e.target.value)}
                rows={5}
                style={{ padding: '12px 16px', borderRadius: 12, border: '1px solid #cbd5e1', fontFamily: 'inherit' }}
              />
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  type="button"
                  onClick={handleAddCustomSource}
                  style={{ background: '#2563eb', color: '#ffffff', border: 'none', padding: '8px 18px', borderRadius: 10, fontWeight: 800, cursor: 'pointer' }}
                >
                  Confirmer
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddingSource(false)}
                  style={{ background: '#e2e8f0', color: '#475569', border: 'none', padding: '8px 14px', borderRadius: 10, fontWeight: 700, cursor: 'pointer' }}
                >
                  Annuler
                </button>
              </div>
            </div>
          )}

          {/* SOURCES GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18 }}>
            {sources.map((s) => (
              <div
                key={s.id}
                style={{
                  padding: 22,
                  borderRadius: 24,
                  background: '#ffffff',
                  border: `1.5px solid ${s.estActif ? '#3b82f6' : '#e2e8f0'}`,
                  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.03)',
                  display: 'grid',
                  gap: 12,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={s.estActif}
                      onChange={() => toggleSourceActive(s.id)}
                      style={{ width: 18, height: 18, cursor: 'pointer' }}
                    />
                    <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '1.05rem' }}>{s.titre}</span>
                  </label>
                  <span style={{ background: '#f1f5f9', color: '#475569', padding: '3px 8px', borderRadius: 999, fontSize: '0.72rem', fontWeight: 800 }}>
                    {s.classe}
                  </span>
                </div>

                <p style={{ margin: 0, color: '#475569', fontSize: '0.88rem', lineHeight: 1.6 }}>{s.resume}</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: 10 }}>
                  <span style={{ fontSize: '0.76rem', color: '#2563eb', fontWeight: 700 }}>{s.chapitre}</span>
                  <button
                    type="button"
                    onClick={() => setReadingSource(s)}
                    style={{ border: 'none', background: '#eff6ff', color: '#1d4ed8', padding: '6px 12px', borderRadius: 10, fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer' }}
                  >
                    Lire le document ➔
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* READ SOURCE MODAL */}
          {readingSource && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,
                zIndex: 9999,
              }}
            >
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: 28,
                  maxWidth: 720,
                  width: '100%',
                  maxHeight: '85vh',
                  overflowY: 'auto',
                  padding: 32,
                  display: 'grid',
                  gap: 18,
                  boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.4rem', fontWeight: 900 }}>
                    {readingSource.titre}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setReadingSource(null)}
                    style={{ border: 'none', background: '#f1f5f9', borderRadius: 999, width: 36, height: 36, cursor: 'pointer', fontWeight: 800 }}
                  >
                    ✕
                  </button>
                </div>

                <div style={{ whiteSpace: 'pre-line', color: '#334155', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {readingSource.contenuComplet}
                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: 14, display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={() => setReadingSource(null)}
                    style={{ background: '#0f172a', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: 14, fontWeight: 800, cursor: 'pointer' }}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: NOTES & CARNET DE REVISION */}
      {activeTab === 'notes' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 340px) minmax(0, 1fr)', gap: 24 }}>
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
                        onClick={() => handleExportMarkdown(selectedNote)}
                        style={{ border: '1px solid #cbd5e1', background: '#f8fafc', padding: '6px 12px', borderRadius: 10, fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}
                      >
                        📤 Exporter .md
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
