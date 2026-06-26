import React, { useState } from 'react';
import { Presentation, Slide, Category, Status, MediaAsset, ListItem, ThemeStyle } from '../types';
import { CATEGORIES } from '../mockData';
import LayoutLibrary from './LayoutLibrary';
import { 
  Save, Eye, ArrowLeft, Trash2, Plus, MoveUp, MoveDown, Layout, 
  Image as ImageIcon, Video, AlignLeft, ListPlus, AlertCircle, 
  FileDown, Check, Settings, Copy, HelpCircle, AlertTriangle, Lightbulb, Focus, Layers, GitCommit, Play, Sparkles
} from 'lucide-react';

interface PresentationEditorProps {
  presentation: Presentation;
  onSave: (updated: Presentation) => void;
  onBack: () => void;
  onPresent: () => void;
  onExport: () => void;
  mediaList: MediaAsset[];
  onOpenMediaLibrary: () => void;
}

export default function PresentationEditor({
  presentation,
  onSave,
  onBack,
  onPresent,
  onExport,
  mediaList,
  onOpenMediaLibrary
}: PresentationEditorProps) {
  // Global States
  const [editedTitle, setEditedTitle] = useState(presentation.title);
  const [editedDesc, setEditedDesc] = useState(presentation.description);
  const [editedCategory, setEditedCategory] = useState<Category>(presentation.category);
  const [editedStatus, setEditedStatus] = useState<Status>(presentation.status);
  const [editedThemeColor, setEditedThemeColor] = useState<'yellow' | 'green' | 'red' | 'cyan' | 'purple'>(
    presentation.themeColor || 'yellow'
  );
  const [editedThemeStyle, setEditedThemeStyle] = useState<ThemeStyle>(
    presentation.themeStyle || 'racing'
  );
  
  const [slides, setSlides] = useState<Slide[]>(presentation.slides);
  const [activeSlideId, setActiveSlideId] = useState<string>(presentation.slides[0]?.id || '');

  // Slide reordering state
  const [draggedSlideIndex, setDraggedSlideIndex] = useState<number | null>(null);

  // Auto-saved tracking indicator
  const [saveIndicator, setSaveIndicator] = useState<'saved' | 'saving' | 'dirty'>('saved');

  // Media picker modal helpers
  const [mediaPickerTarget, setMediaPickerTarget] = useState<'image' | 'video' | null>(null);
  const [showMediaPicker, setShowMediaPicker] = useState<boolean>(false);

  // Bullets lists state drafts
  const [bulletDraft, setBulletDraft] = useState('');

  // Flow flowchart nodes draft
  const [flowNodeLabelDraft, setFlowNodeLabelDraft] = useState('');
  const [flowNodeDescDraft, setFlowNodeDescDraft] = useState('');

  const activeSlideIndex = slides.findIndex(s => s.id === activeSlideId);
  const activeSlide = activeSlideIndex >= 0 ? slides[activeSlideIndex] : null;

  // Handle saving payload
  const handleSaveAll = () => {
    setSaveIndicator('saving');

    const updatedPresentation: Presentation = {
      ...presentation,
      title: editedTitle.trim() || 'Sem Título',
      description: editedDesc.trim(),
      category: editedCategory,
      status: editedStatus,
      slides: slides,
      themeColor: editedThemeColor,
      themeStyle: editedThemeStyle,
      updatedAt: new Date().toISOString()
    };

    onSave(updatedPresentation);
    
    setTimeout(() => {
      setSaveIndicator('saved');
    }, 400);
  };

  // Helper: edit individual slide field
  const updateSlideField = (slideId: string, field: keyof Slide, value: any) => {
    const updated = slides.map(sl => {
      if (sl.id === slideId) {
        return { ...sl, [field]: value };
      }
      return sl;
    });
    setSlides(updated);
    setSaveIndicator('dirty');
  };

  // CRUD slides
  const handleAddSlide = () => {
    const fresh: Slide = {
      id: 'slide-' + Date.now(),
      title: `Novo Slide ${slides.length + 1}`,
      subtitle: 'Etiqueta de suporte ou procedimento técnico',
      layout: 'content',
      listItems: [],
      flowNodes: []
    };
    const nextList = [...slides, fresh];
    setSlides(nextList);
    setActiveSlideId(fresh.id);
    setSaveIndicator('dirty');
  };

  const handleDeleteSlide = (slideId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (slides.length <= 1) {
      alert('Sua apresentação de treinamento necessita de no mínimo 1 slide operacional.');
      return;
    }
    if (confirm('Deseja excluir permanentemente este slide do circuito?')) {
      const nextList = slides.filter(s => s.id !== slideId);
      setSlides(nextList);
      
      if (activeSlideId === slideId) {
        setActiveSlideId(nextList[0]?.id || '');
      }
      setSaveIndicator('dirty');
    }
  };

  const handleDuplicateSlide = (slideId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const target = slides.find(s => s.id === slideId);
    if (!target) return;

    const copy: Slide = {
      ...target,
      id: 'slide-dup-' + Date.now(),
      title: `${target.title} (Cópia)`
    };

    const nextList = [...slides, copy];
    setSlides(nextList);
    setActiveSlideId(copy.id);
    setSaveIndicator('dirty');
  };

  // Move slide index sorting
  const moveSlide = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === slides.length - 1) return;

    const swapWith = direction === 'up' ? index - 1 : index + 1;
    const nextList = [...slides];
    const temp = nextList[index];
    nextList[index] = nextList[swapWith];
    nextList[swapWith] = temp;

    setSlides(nextList);
    setSaveIndicator('dirty');
  };

  // Drag & drop sorting
  const handleDragStart = (index: number) => {
    setDraggedSlideIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedSlideIndex === null || draggedSlideIndex === index) return;

    const nextList = [...slides];
    const draggedItem = nextList[draggedSlideIndex];
    nextList.splice(draggedSlideIndex, 1);
    nextList.splice(index, 0, draggedItem);

    setSlides(nextList);
    setDraggedSlideIndex(index);
    setSaveIndicator('dirty');
  };

  const handleDragEnd = () => {
    setDraggedSlideIndex(null);
  };

  // Bullet Point editing routines
  const addBulletPoint = () => {
    if (!activeSlide) return;
    if (!bulletDraft.trim()) return;

    const bulletList = activeSlide.listItems || [];
    const freshBullet: ListItem = {
      id: 'bullet-' + Date.now(),
      text: bulletDraft.trim()
    };

    const updatedList = [...bulletList, freshBullet];
    updateSlideField(activeSlide.id, 'listItems', updatedList);
    setBulletDraft('');
  };

  const deleteBulletPoint = (bulletId: string) => {
    if (!activeSlide) return;
    const bulletList = activeSlide.listItems || [];
    const updated = bulletList.filter(item => item.id !== bulletId);
    updateSlideField(activeSlide.id, 'listItems', updated);
  };

  // Flow flowchart nodes editing routines
  const addFlowNode = () => {
    if (!activeSlide) return;
    if (!flowNodeLabelDraft.trim()) return;

    const listNodes = activeSlide.flowNodes || [];
    const freshNode = {
      id: 'node-' + Date.now(),
      label: flowNodeLabelDraft.trim(),
      description: flowNodeDescDraft.trim() || undefined
    };

    const updatedNodes = [...listNodes, freshNode];
    updateSlideField(activeSlide.id, 'flowNodes', updatedNodes);
    setFlowNodeLabelDraft('');
    setFlowNodeDescDraft('');
  };

  const deleteFlowNode = (nodeId: string) => {
    if (!activeSlide) return;
    const listNodes = activeSlide.flowNodes || [];
    const updated = listNodes.filter(node => node.id !== nodeId);
    updateSlideField(activeSlide.id, 'flowNodes', updated);
  };

  // Reusable Media picker selection callback
  const selectMediaAsset = (asset: MediaAsset) => {
    if (!activeSlide || !mediaPickerTarget) return;

    if (mediaPickerTarget === 'image') {
      updateSlideField(activeSlide.id, 'imageUrl', asset.url);
    } else if (mediaPickerTarget === 'video') {
      updateSlideField(activeSlide.id, 'videoUrl', asset.url);
    }

    setShowMediaPicker(false);
    setMediaPickerTarget(null);
    setSaveIndicator('dirty');
  };

  return (
    <div className="space-y-6">
      
      {/* Upper Navigation Command Row */}
      <div className="bg-[#16191E] p-4 rounded-xl border border-[#1E293B] flex flex-col sm:flex-row justify-between items-center gap-4 select-none">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-[#0F1217] border border-[#1E293B] hover:bg-[#1E293B] rounded-lg transition"
          >
            <ArrowLeft className="w-4 h-4" /> Painel Geral
          </button>
          
          <div className="h-5 w-px bg-[#1E293B]" />

          <div className="space-y-0.5">
            <span className="text-[9px] uppercase font-mono font-bold tracking-wider text-blue-400">Ambiente de Operação</span>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold text-white max-w-[150px] sm:max-w-xs truncate">{editedTitle || 'Módulo sem Título'}</h1>
              <span className={`px-2 py-0.5 text-[8.5px] font-mono rounded font-bold uppercase ${
                editedStatus === 'Publicado' ? 'bg-emerald-950 text-emerald-400 border border-emerald-900' :
                editedStatus === 'Em Revisão' ? 'bg-blue-950 text-blue-400 border border-blue-900' :
                'bg-amber-950 text-amber-400 border border-amber-900'
              }`}>
                {editedStatus}
              </span>
            </div>
          </div>
        </div>

        {/* State synchronization controls */}
        <div className="flex items-center gap-2.5">
          <span className="text-xs font-mono text-slate-500 mr-1.5 flex items-center gap-1.5 select-none">
            {saveIndicator === 'saved' && <span className="text-emerald-400">✓ Pronto</span>}
            {saveIndicator === 'saving' && <span className="text-blue-400 animate-pulse">⚙ Salvando...</span>}
            {saveIndicator === 'dirty' && <span className="text-amber-400 animate-pulse">● Alterações Pendentes</span>}
          </span>

          <button
            onClick={handleSaveAll}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition shrink-0 cursor-pointer ${
              saveIndicator === 'dirty' 
                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg' 
                : 'bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-400 border border-emerald-500/30'
            }`}
          >
            <Save className="w-3.5 h-3.5" /> Gravar Alterações
          </button>

          <button
            onClick={onPresent}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FAFF00] hover:bg-[#E1E500] text-black font-extrabold italic uppercase rounded-lg text-xs tracking-wider transition shrink-0 cursor-pointer shadow-[0_0_12px_rgba(250,255,0,0.15)]"
          >
            <Eye className="w-3.5 h-3.5 stroke-[3]" /> Apresentar
          </button>

          <button
            onClick={onExport}
            className="p-2 text-slate-300 hover:text-white bg-[#0F1217] border border-[#1E293B] hover:bg-[#1E293B] rounded-lg transition"
            title="Exportar Ativo PDF/JSON"
          >
            <FileDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Safety limit warning helper */}
      {slides.length < 5 && (
        <div className="bg-amber-950/25 border border-amber-900/50 rounded-xl p-3 flex gap-3 select-none text-amber-300">
          <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="text-xs">
            <p className="font-bold font-mono">Aviso de Regulação Pedagógica</p>
            <p className="mt-0.5 text-slate-400 leading-normal font-sans">
              Esta apresentação possui atualmente <strong className="text-amber-400 font-bold">{slides.length} slides</strong>.
              O padrão de qualidade estipula um **mínimo de 5 páginas e um máximo de 8 páginas** por módulo para garantir boa fixação operacional.
            </p>
          </div>
        </div>
      )}

      {/* Main workspace layout split panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* SIDE BAR: List of Slides and presentation properties */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Section: Design System Themes selection settings */}
          <div className="bg-[#16191E] p-4 rounded-xl border border-[#1E293B] space-y-4">
            <h3 className="text-xs font-bold font-mono text-blue-400 uppercase tracking-widest flex items-center gap-1.5 select-none">
              <Settings className="w-4 h-4" /> Atributos Globais
            </h3>

            <div>
              <label className="block text-[9px] font-semibold text-slate-450 uppercase font-mono tracking-wider mb-1">Título do Treinamento</label>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => { setEditedTitle(e.target.value); setSaveIndicator('dirty'); }}
                className="w-full px-2.5 py-1.5 border border-[#1E293B] rounded-lg text-xs bg-[#0F1217] text-white focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[9px] font-semibold text-slate-450 uppercase font-mono tracking-wider mb-1">Categoria</label>
                <select
                  value={editedCategory}
                  onChange={(e) => { setEditedCategory(e.target.value as Category); setSaveIndicator('dirty'); }}
                  className="w-full px-2 py-1.5 border border-[#1E293B] rounded-lg text-xs bg-[#0F1217] text-white focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium cursor-pointer"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat} className="bg-[#16191E] text-white">{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[9px] font-semibold text-slate-450 uppercase font-mono tracking-wider mb-1">Status</label>
                <select
                  value={editedStatus}
                  onChange={(e) => { setEditedStatus(e.target.value as Status); setSaveIndicator('dirty'); }}
                  className="w-full px-2 py-1.5 border border-[#1E293B] rounded-lg text-xs bg-[#0F1217] text-white focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium cursor-pointer"
                >
                  <option value="Rascunho" className="bg-[#16191E] text-white">🟡 Rascunho</option>
                  <option value="Em Revisão" className="bg-[#16191E] text-white">🔵 Em Revisão</option>
                  <option value="Publicado" className="bg-[#16191E] text-white">🟢 Publicado</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[9px] font-slate-450 uppercase font-mono tracking-wider mb-1">Descrição</label>
              <textarea
                value={editedDesc}
                onChange={(e) => { setEditedDesc(e.target.value); setSaveIndicator('dirty'); }}
                rows={2}
                className="w-full px-2.5 py-1.5 border border-[#1E293B] rounded-lg text-xs bg-[#0F1217] text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Explicativo do treinamento..."
              />
            </div>

            {/* Premium Theme selector widget */}
            <div>
              <label className="block text-[9px] font-bold text-slate-400 uppercase font-mono tracking-wider mb-1.5">TEMA VISUAL DE DESIGN SYSTEM</label>
              <select
                value={editedThemeStyle}
                onChange={(e) => { setEditedThemeStyle(e.target.value as ThemeStyle); setSaveIndicator('dirty'); }}
                className="w-full px-2 py-1.5 border border-[#1E293B] rounded-lg text-xs bg-[#0F1217] text-white focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium cursor-pointer font-sans"
              >
                <option value="racing" className="bg-[#16191E]">🏁 F1 Cockpit Racer</option>
                <option value="industrial" className="bg-[#16191E]">🚧 Industrial Hazard Warning</option>
                <option value="corporate" className="bg-[#16191E]">💼 Corporativo Executivo</option>
                <option value="modern" className="bg-[#16191E]">🧬 Cyber Punk Moderno</option>
                <option value="dark" className="bg-[#16191E]">🌑 Dark Carbon Minimal</option>
                <option value="light" className="bg-[#16191E]">☀️ Estúdio Claro Moderno</option>
              </select>
            </div>

            {/* Theme override color selection */}
            <div>
              <label className="block text-[9px] font-semibold text-slate-400 uppercase font-mono tracking-wider mb-1.5">COR DE ACENTO DO TEMA</label>
              <div className="flex gap-2 items-center flex-wrap pt-0.5">
                {[
                  { id: 'yellow', label: 'Amarelo Ácido', bg: 'bg-[#FAFF00]' },
                  { id: 'green', label: 'Nitro Green', bg: 'bg-[#00FF94]' },
                  { id: 'red', label: 'Brake Red', bg: 'bg-[#FF2E2E]' },
                  { id: 'cyan', label: 'Telemetria', bg: 'bg-[#00F0FF]' },
                  { id: 'purple', label: 'Power Purple', bg: 'bg-[#D000FF]' },
                ].map((preset) => {
                  const isSelected = editedThemeColor === preset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => { setEditedThemeColor(preset.id as any); setSaveIndicator('dirty'); }}
                      className={`w-5.5 h-5.5 rounded-full ${preset.bg} border-2 transition-all cursor-pointer flex items-center justify-center relative ${
                        isSelected ? 'border-white scale-110 shadow-lg' : 'border-transparent hover:scale-105 opacity-80'
                      }`}
                      title={preset.label}
                    >
                      {isSelected && (
                        <Check className="w-3 h-3 text-black stroke-[4]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section: Slides Pipe Grid controller */}
          <div className="bg-[#16191E] p-4 rounded-xl border border-[#1E293B]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold font-mono text-blue-400 uppercase tracking-widest select-none">
                Grade de Slides ({slides.length})
              </h3>
              <button
                onClick={handleAddSlide}
                className="p-1 bg-blue-600 hover:bg-blue-500 text-white rounded transition cursor-pointer"
                title="Inserir Novo Slide"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-[9px] text-slate-500 mb-2 font-mono select-none leading-relaxed">
              💡 Arraste para reordenar os slides ou use as setas.
            </div>

            <div className="space-y-2 select-none" id="slide-sortable-container">
              {slides.map((slide, index) => {
                const isActive = slide.id === activeSlideId;
                return (
                  <div
                    key={slide.id}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragEnd={handleDragEnd}
                    onClick={() => setActiveSlideId(slide.id)}
                    className={`p-2.5 rounded-lg border transition-all cursor-grab flex items-center justify-between gap-1 select-none ${
                      isActive 
                        ? 'border-blue-500 bg-blue-950/20 text-white' 
                        : 'border-[#1E293B] hover:border-slate-800 bg-[#0F1217] text-slate-400 hover:text-slate-350'
                    }`}
                  >
                    <div className="min-w-0 flex-1 flex items-center gap-2">
                      <span className="font-mono text-[9px] text-slate-600">0{index + 1}</span>
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-xs truncate leading-normal">{slide.title || 'Sem título'}</p>
                        <p className="text-[8.5px] uppercase font-mono tracking-widest text-slate-500 mt-0.5 truncate">{slide.layout || 'content'}</p>
                      </div>
                    </div>

                    {/* Arrow selectors & duplicate actions */}
                    <div className="flex items-center gap-0.5 shrink-0 no-screen-click" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => moveSlide(index, 'up')}
                        disabled={index === 0}
                        className="p-1 text-slate-500 hover:text-white hover:bg-black/30 rounded disabled:opacity-20 transition"
                        title="Mover para Cima"
                      >
                        <MoveUp className="w-3 h-3" />
                      </button>
                      
                      <button
                        onClick={() => moveSlide(index, 'down')}
                        disabled={index === slides.length - 1}
                        className="p-1 text-slate-500 hover:text-white hover:bg-black/30 rounded disabled:opacity-20 transition"
                        title="Mover para Baixo"
                      >
                        <MoveDown className="w-3 h-3" />
                      </button>

                      <button
                        onClick={(e) => handleDuplicateSlide(slide.id, e)}
                        className="p-1 text-slate-500 hover:text-white hover:bg-black/30 rounded transition"
                        title="Duplicar Slide"
                      >
                        <Copy className="w-3 h-3" />
                      </button>

                      <button
                        onClick={(e) => handleDeleteSlide(slide.id, e)}
                        className="p-1 text-red-500 hover:text-red-400 hover:bg-red-950/20 rounded transition"
                        title="Deletar Slide"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* WORKSPACE MIDDLE COLUMN: Active slide components configuration editors */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[#16191E] p-4 md:p-6 rounded-xl border border-[#1E293B]">
            <h2 className="text-sm font-extrabold text-white flex items-center gap-2 mb-4 font-mono select-none border-b border-[#1E293B] pb-3">
              <Layers className="w-4.5 h-4.5 text-blue-400 font-bold" /> REQUISITOS DE COMPONENTE DO SLIDE
            </h2>

            {activeSlide ? (
              <div className="space-y-4">
                
                {/* BIBLIOTECA DE TEMPLATES DE LAYOUT REUTILIZÁVEIS */}
                <LayoutLibrary 
                  activeSlideId={activeSlide.id}
                  onApplyTemplate={(updatedFields) => {
                    Object.entries(updatedFields).forEach(([field, val]) => {
                      updateSlideField(activeSlide.id, field as keyof Slide, val);
                    });
                    setSaveIndicator('dirty');
                  }}
                  themeStyle={editedThemeStyle}
                  themeColor={editedThemeColor}
                />

                {/* 1. LAYOUT CLASSIFICATION GRID SELECTOR */}
                <div>
                  <label className="block text-[10.5px] font-bold text-slate-400 uppercase font-mono tracking-wider mb-2">Selecione o Layout Universal</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'cover', label: 'Capa / Agenda' },
                      { id: 'content', label: 'Conteúdo Livre' },
                      { id: 'step-by-step', label: 'Passo a Passo' },
                      { id: 'two-columns', label: 'Bento Colunas' },
                      { id: 'checklist', label: 'Checklist Op' },
                      { id: 'video', label: 'Mídia Vídeo' },
                      { id: 'flow', label: 'Fluxo Processo' },
                      { id: 'conclusion', label: 'Encerramento' },
                    ].map((lay) => (
                      <button
                        key={lay.id}
                        type="button"
                        onClick={() => updateSlideField(activeSlide.id, 'layout', lay.id)}
                        className={`p-2 border rounded-lg text-left transition font-medium cursor-pointer flex flex-col justify-between h-15 ${
                          activeSlide.layout === lay.id
                            ? 'border-blue-500 bg-blue-950/45 text-blue-400 font-black shadow-md'
                            : 'border-[#1E293B] hover:border-slate-705 text-slate-400 bg-[#0F1217] hover:text-white'
                        }`}
                      >
                        <Layout className="w-3.5 h-3.5 text-slate-500" />
                        <span className="block text-[9.5px] mt-1 truncate">{lay.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. CORE FIELDS (TITLE & SUBTITLE) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9.5px] font-bold text-slate-400 uppercase font-mono tracking-wider mb-1">Título do Slide</label>
                    <input
                      type="text"
                      value={activeSlide.title || ''}
                      onChange={(e) => updateSlideField(activeSlide.id, 'title', e.target.value)}
                      className="w-full px-3 py-1.5 text-xs border border-[#1E293B] bg-[#0F1217] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
                      placeholder="Ex. 1. Sequência FIFO"
                    />
                  </div>

                  <div>
                    <label className="block text-[9.5px] font-bold text-slate-400 uppercase font-mono tracking-wider mb-1">Subtítulo ou Etiqueta de Chão</label>
                    <input
                      type="text"
                      value={activeSlide.subtitle || ''}
                      onChange={(e) => updateSlideField(activeSlide.id, 'subtitle', e.target.value)}
                      className="w-full px-3 py-1.5 text-xs border border-[#1E293B] bg-[#0F1217] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
                      placeholder="Ex. Registro de lote operador"
                    />
                  </div>
                </div>

                {/* 3. FREE FORMAT DESC DESCRIPTION TEXTFIELD */}
                <div>
                  <label className="block text-[9.5px] font-bold text-slate-400 uppercase font-mono tracking-wider mb-1">Texto Descritivo / Parágrafo</label>
                  <textarea
                    value={activeSlide.freeText || ''}
                    onChange={(e) => updateSlideField(activeSlide.id, 'freeText', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-[#1E293B] bg-[#0F1217] text-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs text-sans font-medium leading-relaxed"
                    placeholder="Instruções de segurança ou o texto de contexto do slide..."
                  />
                </div>

                {/* 4. CONDITIONAL COMPONENT: BULLETS OR CHECKLIST BUILDERS */}
                {['bullets-only', 'bullets', 'checklist', 'two-columns', 'step-by-step', 'flow'].includes(activeSlide.layout || '') && (
                  <div className="bg-[#0F1217] p-3 rounded-lg border border-[#1E293B] space-y-3 shadow-inner">
                    <span className="font-bold text-slate-400 tracking-wider uppercase text-[9px] block font-mono">
                      Pontos de Procedimento Operacional (Bullets / Checklist)
                    </span>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={bulletDraft}
                        onChange={(e) => setBulletDraft(e.target.value)}
                        placeholder="Ex. Conferir temperatura na válvula de entrada"
                        className="flex-1 px-3 py-1.5 text-xs border border-[#1E293B] rounded-lg bg-[#16191E] text-white focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                        onKeyDown={(e) => { if (e.key === 'Enter') addBulletPoint(); }}
                      />
                      <button
                        type="button"
                        onClick={addBulletPoint}
                        className="px-3 bg-blue-600 hover:bg-blue-500 text-white font-extrabold rounded-lg cursor-pointer transition text-[10.5px] uppercase tracking-wider"
                      >
                        Incluir
                      </button>
                    </div>

                    <div className="space-y-1 max-h-[140px] overflow-y-auto pr-1">
                      {activeSlide.listItems?.map((item, idindex) => (
                        <div key={item.id} className="flex items-center justify-between p-2 bg-[#16191E] border border-[#1E293B]/60 rounded-lg">
                          <span className="font-bold text-[10.5px] text-slate-350 line-clamp-1 flex-1 font-sans">
                            {idindex + 1}. {item.text}
                          </span>
                          <button
                            type="button"
                            onClick={() => deleteBulletPoint(item.id)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-950/20 p-1.5 rounded cursor-pointer transition shrink-0"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                      {(!activeSlide.listItems || activeSlide.listItems.length === 0) && (
                        <p className="text-[10px] text-slate-500 italic">Nenhum bullet ponto cadastrado. Inclua procedimentos acima.</p>
                      )}
                    </div>
                  </div>
                )}

                {/* 5. FLOW CHART / PROCESS NODES FLOW MANAGER BLOCK */}
                {['flow'].includes(activeSlide.layout || '') && (
                  <div className="bg-[#0F1217] p-3 rounded-lg border border-[#1E293B] space-y-3 shadow-inner">
                    <span className="font-bold text-slate-400 tracking-wider uppercase text-[9px] block font-mono flex items-center gap-1.5">
                      <GitCommit className="w-3.5 h-3.5 text-blue-400" /> Fluxograma / Timeline Estágios Editor
                    </span>
                    
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={flowNodeLabelDraft}
                        onChange={(e) => setFlowNodeLabelDraft(e.target.value)}
                        placeholder="Rótulo ex: Triagem de Forno"
                        className="w-full px-3 py-1.5 text-xs border border-[#1E293B] rounded-lg bg-[#16191E] text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={flowNodeDescDraft}
                          onChange={(e) => setFlowNodeDescDraft(e.target.value)}
                          placeholder="Fórmula de fixação (descrição rápida...)"
                          className="flex-1 px-3 py-1.5 text-xs border border-[#1E293B] rounded-lg bg-[#16191E] text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                          onKeyDown={(e) => { if (e.key === 'Enter') addFlowNode(); }}
                        />
                        <button
                          type="button"
                          onClick={addFlowNode}
                          className="px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-lg cursor-pointer transition text-[10.5px] uppercase tracking-wider"
                        >
                          Anexar Etapa
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1.5 max-h-[140px] overflow-y-auto pr-1">
                      {activeSlide.flowNodes?.map((node, nodeIdx) => (
                        <div key={node.id} className="flex items-start justify-between p-2 bg-[#16191E] border border-[#1E293B]/60 rounded-lg">
                          <div className="min-w-0 flex-1">
                            <p className="font-bold text-slate-200 text-xs">{nodeIdx + 1}. {node.label}</p>
                            {node.description && <p className="text-[10px] text-slate-500">{node.description}</p>}
                          </div>
                          <button
                            type="button"
                            onClick={() => deleteFlowNode(node.id)}
                            className="text-red-400 hover:text-red-300 hover:bg-red-950/20 p-1.5 rounded cursor-pointer transition shrink-0"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                      {(!activeSlide.flowNodes || activeSlide.flowNodes.length === 0) && (
                        <p className="text-[10px] text-slate-500 italic">Nenhum estágio do fluxograma cadastrado.</p>
                      )}
                    </div>
                  </div>
                )}

                {/* 6. COMPONENT OVERRIDES: ALERTA DE SEGURANÇA */}
                <div className="bg-[#121214]/60 p-3 rounded-xl border border-red-950/40 space-y-1">
                  <span className="font-bold text-red-400/80 tracking-wider uppercase text-[8.5px] block font-mono flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 text-red-500" /> Componente: Procedimento de Alerta / Atenção (Vem com ícone)
                  </span>
                  <input
                    type="text"
                    value={activeSlide.alertText || ''}
                    onChange={(e) => updateSlideField(activeSlide.id, 'alertText', e.target.value)}
                    placeholder="Ex. PERIGO: Desligar disjuntor de segurança antes de abrir a tampa"
                    className="w-full px-3 py-1.5 border border-red-950/60 bg-[#0F1217] text-slate-200 rounded-lg text-xs"
                  />
                </div>

                {/* 7. COMPONENT OVERRIDES: DICA OPERACIONAL */}
                <div className="bg-[#121214]/60 p-3 rounded-xl border border-amber-950/40 space-y-1">
                  <span className="font-bold text-amber-400/80 tracking-wider uppercase text-[8.5px] block font-mono flex items-center gap-1">
                    <Lightbulb className="w-3 h-3 text-amber-500" /> Componente: Dica Operacional Prática
                  </span>
                  <input
                    type="text"
                    value={activeSlide.tipText || ''}
                    onChange={(e) => updateSlideField(activeSlide.id, 'tipText', e.target.value)}
                    placeholder="Ex. DICA: A leitura do código de barras funciona melhor a uma distância de 15cm"
                    className="w-full px-3 py-1.5 border border-amber-950/60 bg-[#0F1217] text-slate-200 rounded-lg text-xs"
                  />
                </div>

                {/* 8. COMPONENT OVERRIDES: DESTAQUE DE IMPACTO */}
                <div className="bg-[#121214]/60 p-3 rounded-xl border border-purple-950/40 space-y-1">
                  <span className="font-bold text-purple-400/80 tracking-wider uppercase text-[8.5px] block font-mono flex items-center gap-1">
                    <Focus className="w-3 h-3 text-purple-500" /> Componente: Destaque de Métrica ou Meta Crítica
                  </span>
                  <input
                    type="text"
                    value={activeSlide.highlightText || ''}
                    onChange={(e) => updateSlideField(activeSlide.id, 'highlightText', e.target.value)}
                    placeholder="Ex. META DE CICLO: O resfriamento deve ocorrer em até 120 segundos"
                    className="w-full px-3 py-1.5 border border-purple-950/60 bg-[#0F1217] text-slate-200 rounded-lg text-xs"
                  />
                </div>

                {/* 9. MEDIA CUSTOM OVERRIDES IMAGES & VIDEOS LINKERS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1.5">
                  <div className="bg-[#0F1217] p-3 rounded-lg border border-[#1E293B] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-400 uppercase block text-[9px] font-mono tracking-wider">Acoplar Imagem de Apoio</span>
                      <button
                        type="button"
                        onClick={() => { setMediaPickerTarget('image'); setShowMediaPicker(true); }}
                        className="text-[9px] text-blue-400 hover:text-blue-300 cursor-pointer font-bold"
                      >
                        Biblioteca
                      </button>
                    </div>
                    <input
                      type="url"
                      value={activeSlide.imageUrl || ''}
                      onChange={(e) => updateSlideField(activeSlide.id, 'imageUrl', e.target.value)}
                      className="w-full px-20 px-2 py-1 border border-[#1E293B] bg-[#16191E] text-slate-300 rounded text-[11px] font-mono"
                      placeholder="https://images.unsplash.com/photo-xxx"
                    />
                  </div>

                  <div className="bg-[#0F1217] p-3 rounded-lg border border-[#1E293B] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-400 uppercase block text-[9px] font-mono tracking-wider">Acoplar Vídeo (Loop MP4)</span>
                      <button
                        type="button"
                        onClick={() => { setMediaPickerTarget('video'); setShowMediaPicker(true); }}
                        className="text-[9px] text-blue-400 hover:text-blue-300 cursor-pointer font-bold"
                      >
                        Biblioteca
                      </button>
                    </div>
                    <input
                      type="url"
                      value={activeSlide.videoUrl || ''}
                      onChange={(e) => updateSlideField(activeSlide.id, 'videoUrl', e.target.value)}
                      className="w-full px-2 py-1 border border-[#1E293B] bg-[#16191E] text-slate-300 rounded text-[11px] font-mono"
                      placeholder="Link para MP4 ou Youtube"
                    />
                  </div>
                </div>

              </div>
            ) : (
              <p className="text-slate-500 italic text-center py-6 select-none font-sans">Selecione ou crie um slide na grade lateral para começar a formular procedimentos.</p>
            )}
          </div>
        </div>

        {/* WORKSPACE RIGHT COLUMN: Miniature telemetry interactive live mockup view */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-[#16191E] p-4 rounded-xl border border-[#1E293B] flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-[#1E293B]/60 pb-2 select-none">
                <span className="text-[9px] text-[#FAFF00] font-black font-mono tracking-wider uppercase">VIRTUAL SCREEN PROTOTYPE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {activeSlide ? (
                <div className="space-y-3">
                  <span className="text-[10px] text-slate-500 font-mono block">Rótulo: {activeSlide.subtitle || 'Chão de fábrica'}</span>
                  <h3 className="text-xs font-black text-white italic uppercase truncate">
                    {activeSlide.title || 'Sem título'}
                  </h3>

                  {/* Supports split assets images/videos */}
                  {activeSlide.imageUrl && (
                    <div className="aspect-video w-full rounded overflow-hidden border border-[#1E293B]">
                      <img src={activeSlide.imageUrl} referrerPolicy="no-referrer" alt="Slide visual" className="w-full h-full object-cover" />
                    </div>
                  )}

                  {activeSlide.videoUrl && (
                    <div className="aspect-video w-full bg-[#0A0C10] rounded border border-[#1E293B] flex flex-col items-center justify-center text-[10px] text-slate-400 font-mono">
                      <Video className="w-5 h-5 text-blue-400 mb-1" />
                      <span>Vídeo Acoplado</span>
                    </div>
                  )}

                  {activeSlide.freeText && (
                    <p className="text-[10.5px] text-slate-300 leading-normal line-clamp-4">
                      {activeSlide.freeText}
                    </p>
                  )}

                  {/* Bullet previews inside preview wrapper */}
                  {activeSlide.listItems && activeSlide.listItems.length > 0 && (
                    <div className="space-y-1 mt-2">
                      {activeSlide.listItems.slice(0, 3).map((item, idx) => (
                        <div key={item.id} className="flex items-start gap-1 p-1 bg-[#0F1217] border border-[#1E293B]/60 rounded text-[9px] text-slate-400">
                          <span className="font-mono text-blue-400">#0{idx + 1}</span>
                          <span className="truncate flex-1">{item.text}</span>
                        </div>
                      ))}
                      {activeSlide.listItems.length > 3 && (
                        <p className="text-[8.5px] text-slate-500 font-mono">+ {activeSlide.listItems.length - 3} itens no rodapé.</p>
                      )}
                    </div>
                  )}

                  {/* Flow chart nodes previews */}
                  {activeSlide.flowNodes && activeSlide.flowNodes.length > 0 && (
                    <div className="space-y-1 mt-2">
                      {activeSlide.flowNodes.slice(0, 3).map((node, idx) => (
                        <div key={node.id} className="flex items-center gap-1.5 p-1 bg-[#0F1217] border border-[#1E293B]/60 rounded text-[9px] text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          <span className="font-bold truncate">{node.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic font-mono">Monte slides no painel esquerdo para guiar a telemetria.</p>
              )}
            </div>

            <div className="flex justify-between items-center text-[8px] font-mono text-slate-500 mt-6 pt-3 border-t border-[#1E293B]/40">
              <span>Industrial OS Configurator View v3.0</span>
              <span>Pág {slides.findIndex(s => s.id === activeSlideId) + 1} / {slides.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP REUSABLE MEDIA PICKER MODAL */}
      {showMediaPicker && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#0A0C10]/80 backdrop-blur-xs select-none">
          <div className="relative bg-[#0F1217] w-full max-w-3xl rounded-xl shadow-2xl border border-[#1E293B] overflow-hidden flex flex-col p-5">
            <div className="flex justify-between items-center border-b border-[#1E293B] pb-3 mb-4">
              <h3 className="font-bold text-white text-sm">Vincular Recurso de Mídia do Chão de Fábrica</h3>
              <button
                type="button"
                onClick={() => { setShowMediaPicker(false); setMediaPickerTarget(null); }}
                className="text-slate-400 hover:text-white font-bold transition cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Dê duplo clique ou selecione um ativo da biblioteca de mídias pré-aprovadas para integrá-lo ao Slide de Layout.
            </p>

            <div className="max-h-[350px] overflow-y-auto space-y-4 pr-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {mediaList.map((asset) => (
                  <div
                    key={asset.id}
                    onClick={() => selectMediaAsset(asset)}
                    className="p-2 border border-[#1E293B] bg-[#16191E] hover:border-blue-500/40 hover:bg-[#1E293B]/50 rounded-lg cursor-pointer transition text-center"
                  >
                    {asset.type === 'image' ? (
                      <div className="aspect-video bg-[#0F1217] mb-1.5 overflow-hidden rounded relative border border-[#1E293B]">
                        <img src={asset.url} alt="asset visual" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="aspect-video bg-[#0A0C10] mb-1.5 rounded flex items-center justify-center border border-[#1E293B]">
                        <Video className="w-6 h-6 text-blue-400" />
                      </div>
                    )}
                    <span className="block text-[10.5px] font-bold text-slate-200 truncate">{asset.title}</span>
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest block mt-0.5">{asset.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
