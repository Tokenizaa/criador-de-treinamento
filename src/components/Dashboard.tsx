import React, { useState } from 'react';
import { Presentation, Category, Status, Slide } from '../types';
import { CATEGORIES } from '../mockData';
import { 
  Plus, Search, Presentation as PresIcon, Calendar, ArrowRight,
  TrendingUp, Layers, CheckCircle2, FileText, AlertCircle, Trash2, Copy, Play
} from 'lucide-react';

interface DashboardProps {
  presentations: Presentation[];
  onSelectPresentation: (id: string, selectForPresentMode?: boolean) => void;
  onDeletePresentation: (id: string) => void;
  onDuplicatePresentation: (id: string) => void;
  onAddPresentation: (newPres: Presentation) => void;
}

export default function Dashboard({
  presentations,
  onSelectPresentation,
  onDeletePresentation,
  onDuplicatePresentation,
  onAddPresentation
}: DashboardProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todos'>('Todos');
  const [isCreating, setIsCreating] = useState(false);

  // New Presentation Form States
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newCategory, setNewCategory] = useState<Category>('Visão Geral');
  const [newStatus, setNewStatus] = useState<Status>('Rascunho');
  const [preloadTemplate, setPreloadTemplate] = useState<boolean>(true);

  // Calculate high level KPI values
  const totalCount = presentations.length;
  const publishedCount = presentations.filter(p => p.status === 'Publicado').length;
  const draftCount = presentations.filter(p => p.status === 'Rascunho').length;
  const reviewCount = presentations.filter(p => p.status === 'Em Revisão').length;

  const lastUpdateDate = presentations.length > 0 
    ? new Date(Math.max(...presentations.map(p => new Date(p.updatedAt).getTime())))
    : null;

  // Filter logic
  const filteredPresentations = presentations.filter((pres) => {
    const matchesSearch = pres.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      pres.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || pres.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    let preloadedSlides: Slide[] = [];

    if (preloadTemplate) {
      preloadedSlides = [
        {
          id: 's-t1-' + Date.now(),
          title: `Treinamento: ${newTitle}`,
          subtitle: `Módulo básico de capacitação do Industrial OS`,
          freeText: `Este treinamento apresenta as diretrizes oficiais de uso operacional e cadastros de segurança para o módulo de ${newCategory}.`,
          layout: 'hero'
        },
        {
          id: 's-t2-' + Date.now(),
          title: 'Objetivos Educacionais',
          subtitle: 'Competências a serem adquiridas',
          freeText: 'Ao final deste treinamento presencial rápido, o operador deverá ser capaz de compreender as principais regras de fluxo e identificar os gargalos do sistema.',
          layout: 'bullets-only',
          listItems: [
            { id: 'b1-' + Date.now(), text: 'Entender a importância dos cadastros corretos e unificados' },
            { id: 'b2-' + Date.now(), text: 'Garantir preenchimento dos apontamentos logo na saída da máquina' },
            { id: 'b3-' + Date.now(), text: 'Ativar alertas de paradas de forma imediata na TV central' }
          ]
        },
        {
          id: 's-t3-' + Date.now(),
          title: 'Passo a Passo Operacional',
          subtitle: 'Sequência de Procedimentos Mandatórios',
          freeText: '1. Autenticar sua conta digitando sua senha do chão de fábrica.\n2. Clicar no botão correspondente da sua máquina ativa.\n3. Inicializar apontamento apontando leitor óptico para etiqueta da Ordem de Produção.',
          layout: 'text-only'
        },
        {
          id: 's-t4-' + Date.now(),
          title: 'Estação Piloto e Layout de Referência',
          subtitle: 'Visão da Fábrica Integrada com IoT',
          freeText: 'Abaixo encontra-se a imagem da estação em pleno funcionamento. Utilize esse mapeamento de fluxo dinâmico para treinar equipes e solucionar desvios operacionais.',
          imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
          layout: 'split-image'
        },
        {
          id: 's-t5-' + Date.now(),
          title: 'Checklist Final de Auditoria',
          subtitle: 'Aprovação para início das operações',
          freeText: 'Realize as seguintes validações antes de liberar o operador piloto.',
          layout: 'bullets-only',
          listItems: [
            { id: 'b4-' + Date.now(), text: 'Operador realizou teste prático de registro com sucesso?' },
            { id: 'b5-' + Date.now(), text: 'O supervisor de turno auditou e revisou os tempos padrão?' },
            { id: 'b6-' + Date.now(), text: 'O dispositivo coletor de dados está higienizado e energizado?' }
          ]
        }
      ];
    } else {
      // Just 1 blank slide (will trigger the soft 5-page warning, instructing the user)
      preloadedSlides = [
        {
          id: 's-t1-' + Date.now(),
          title: 'Título do Slide Inicial',
          subtitle: 'Insira o subtítulo aqui',
          freeText: 'Preencha este slide livre com conteúdo do seu treinamento Industrial OS.',
          layout: 'text-only'
        }
      ];
    }

    const newPres: Presentation = {
      id: 'pres-' + Date.now(),
      title: newTitle,
      description: newDesc,
      category: newCategory,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: newStatus,
      slides: preloadedSlides
    };

    onAddPresentation(newPres);
    setNewTitle('');
    setNewDesc('');
    setIsCreating(false);
  };

  const getStatusBadge = (status: Status) => {
    switch (status) {
      case 'Publicado':
        return <span className="bg-emerald-950/50 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-900/30 uppercase tracking-widest">🟢 Publicado</span>;
      case 'Em Revisão':
        return <span className="bg-sky-950/50 text-sky-450 text-[10px] font-bold px-2 py-0.5 rounded border border-sky-900/30 uppercase tracking-widest font-mono">🔵 Em Revisão</span>;
      default:
        return <span className="bg-amber-950/50 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-900/30 uppercase tracking-widest">🟡 Rascunho</span>;
    }
  };

  return (
    <div className="space-y-6" id="dashboard-core-view">
      
      {/* KEY STATS BAR */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 select-none" id="stats-dashboard-grid">
        <div className="bg-[#121214] p-5 rounded border border-[#262A35] flex items-center gap-4 shadow-md">
          <div className="w-12 h-12 bg-[#FAFF00]/10 border border-[#FAFF00]/20 rounded flex items-center justify-center text-[#FAFF00] shrink-0">
            <PresIcon className="w-5 h-5 text-[#FAFF00]" />
          </div>
          <div>
            <span className="text-[9px] font-bold text-slate-500 font-mono block uppercase tracking-wider">TOTAL MÓDULOS (CIRCUITOS)</span>
            <span className="text-2xl font-display italic font-black text-white leading-none">{totalCount}</span>
          </div>
        </div>

        <div className="bg-[#121214] p-5 rounded border border-[#262A35] flex items-center gap-4 shadow-md">
          <div className="w-12 h-12 bg-emerald-950/40 border border-emerald-900/30 rounded flex items-center justify-center text-emerald-400 shrink-0">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <span className="text-[9px] font-bold text-slate-500 font-mono block uppercase tracking-wider">PUBLICADOS</span>
            <span className="text-2xl font-display italic font-black text-emerald-400 leading-none">{publishedCount}</span>
          </div>
        </div>

        <div className="bg-[#121214] p-5 rounded border border-[#262A35] flex items-center gap-4 shadow-md">
          <div className="w-12 h-12 bg-amber-950/40 border border-[#FAFF00]/20 rounded flex items-center justify-center text-amber-400 shrink-0">
            <Layers className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <span className="text-[9px] font-bold text-slate-500 font-mono block uppercase tracking-wider">REVISANDO / RASCUNHOS</span>
            <span className="text-2xl font-display italic font-black text-amber-500 leading-none">{reviewCount + draftCount}</span>
          </div>
        </div>

        <div className="bg-[#121214] p-5 rounded border border-[#262A35] flex items-center gap-4 shadow-md">
          <div className="w-12 h-12 bg-[#1C1C22]/80 border border-[#262A35] rounded flex items-center justify-center text-[#FAFF00] shrink-0">
            <Calendar className="w-5 h-5 text-[#FAFF00]" />
          </div>
          <div>
            <span className="text-[9px] font-bold text-slate-500 font-mono block uppercase tracking-wider">ÚLTIMO AJUSTE</span>
            <span className="text-xs font-bold font-mono text-slate-350 leading-tight block mt-0.5">
              {lastUpdateDate ? lastUpdateDate.toLocaleDateString() + ' ' + lastUpdateDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Nenhum'}
            </span>
          </div>
        </div>
      </div>

      {/* DASHBOARD ACTIONS HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#121214] p-5 rounded border border-[#262A35] shadow-[0_0_30px_rgba(250,255,0,0.02)]">
        <div>
          <span className="text-[10px] font-bold font-mono text-[#FAFF00] uppercase tracking-widest block">PAINEL DE COMANDO TELEMÉTRICO</span>
          <h2 className="text-2xl font-display italic font-black text-white mt-1 uppercase tracking-tight">GERENCIAMENTO DE CIRCUITOS</h2>
        </div>
        <button
          onClick={() => setIsCreating(true)}
          className="relative overflow-hidden group flex items-center gap-1.5 px-5 py-2.5 bg-[#FAFF00] hover:bg-[#E6EB00] text-black font-black italic text-xs rounded transition shadow-lg cursor-pointer skew-x-[-12deg]"
          id="btn-trigger-new-presentation"
        >
          <span className="inline-block skew-x-[12deg] flex items-center gap-1.5 font-mono">
            <Plus className="w-4 h-4 stroke-[3]" />
            NOVO TREINAMENTO
          </span>
          <div className="absolute inset-0 w-1/3 h-full bg-white/20 -translate-x-full animate-shimmer pointer-events-none" />
        </button>
      </div>

      {/* FILTER BUTTONS & SEARCH BAR */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        {/* Categories Pills bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 lg:pb-0 scrollbar-none select-none">
          <button
            onClick={() => setSelectedCategory('Todos')}
            className={`px-3.5 py-1.5 rounded text-xs font-mono font-bold tracking-wide transition border cursor-pointer shrink-0 skew-x-[-12deg] ${
              selectedCategory === 'Todos'
                ? 'bg-[#FAFF00]/15 text-[#FAFF00] border-[#FAFF00]/30 shadow-sm'
                : 'bg-[#121214] hover:bg-[#1E1E22] text-slate-400 border-[#262A35]'
            }`}
          >
            <span className="inline-block skew-x-[12deg]">TODOS OS CIRCUITOS</span>
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded text-xs font-mono font-bold tracking-wide transition border cursor-pointer shrink-0 skew-x-[-12deg] ${
                selectedCategory === cat
                  ? 'bg-[#FAFF00]/15 text-[#FAFF00] border-[#FAFF00]/30 shadow-sm'
                  : 'bg-[#121214] hover:bg-[#1E1E22] text-slate-400 border-[#262A35]'
              }`}
            >
              <span className="inline-block skew-x-[12deg] uppercase">{cat}</span>
            </button>
          ))}
        </div>

        {/* Text Filter input */}
        <div className="relative w-full lg:max-w-xs shrink-0 bg-[#121214] border border-[#262A35] rounded select-none">
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3.5" />
          <input
            type="text"
            placeholder="Mapear por palavra-chave..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#FAFF00]/30"
            id="input-presentation-filter-search"
          />
        </div>
      </div>

      {/* DETAILED CONTENT PRESENTATIONS GRID VIEW */}
      {filteredPresentations.length === 0 ? (
        <div className="text-center py-16 bg-[#0F1217] rounded-xl border border-dashed border-[#1E293B]">
          <p className="text-slate-400 text-sm font-semibold">Nenhuma apresentação correspondente encontrada.</p>
          <p className="text-xs text-slate-550 mt-1">Crie um novo módulo de treinamento para iniciar suas operações.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="presentations-deck-grid">
          {filteredPresentations.map((pres) => {
            const slideCount = pres.slides.length;
            const isSlideCountInvalid = slideCount < 5 || slideCount > 8;

            return (
              <div
                key={pres.id}
                className="group bg-[#121214] rounded-lg border border-[#262A35] hover:border-[#FAFF00]/40 hover:ring-1 hover:ring-[#FAFF00]/20 hover:shadow-2xl hover:shadow-[#FAFF00]/5 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
                id={`card-pres-${pres.id}`}
              >
                {/* Visual Preview Deck simulation */}
                <div className="h-32 bg-[#1C1C22]/80 flex items-center justify-center border-b border-[#262A35] overflow-hidden relative">
                  <div className="absolute inset-0 bg-carbon-pattern opacity-10" />
                  <div className="scale-75 opacity-40 group-hover:opacity-100 group-hover:scale-95 transition-all duration-300 relative z-10">
                    <div className="w-40 h-24 bg-[#050505] border border-[#262A35] rounded shadow-2xl flex flex-col p-2.5">
                      <div className="w-12 h-2 bg-[#FAFF00]/40 rounded mb-2"></div>
                      <div className="flex gap-1.5 flex-1">
                        <div className="flex-1 bg-zinc-900/50 rounded p-1 flex flex-col justify-between">
                          <div className="w-full h-1 bg-zinc-800 rounded"></div>
                          <div className="w-2/3 h-1 bg-zinc-800 rounded"></div>
                        </div>
                        <div className="w-8 h-8 rounded bg-[#FAFF00]/10 border border-[#FAFF00]/20 flex items-center justify-center">
                          <PresIcon className="w-3.5 h-3.5 text-[#FAFF00]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-grow relative">
                  <div className="flex items-center justify-between gap-2 mb-2 select-none">
                    <span className="text-[10px] font-bold font-mono tracking-wider text-[#FAFF00] uppercase">
                      {pres.category}
                    </span>
                    {getStatusBadge(pres.status)}
                  </div>

                  <h3 className="font-display italic font-black text-white text-base group-hover:text-[#FAFF00] transition-colors cursor-pointer" onClick={() => onSelectPresentation(pres.id, false)}>
                    {pres.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-normal line-clamp-3 mt-1.5 leading-relaxed">
                    {pres.description}
                  </p>

                  <div className="h-px bg-[#262A35] my-4" />

                  {/* Slides Count Alert Gauge & KPI */}
                  <div className="flex items-center justify-between mb-1 select-none">
                    <span className="text-[10px] text-zinc-500 font-mono text-zinc-550">TAMANHO DO CIRCUITO</span>
                    <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded border ${
                      isSlideCountInvalid 
                        ? 'bg-amber-950/40 text-amber-400 border-amber-900/20' 
                        : 'bg-[#FAFF00]/10 text-[#FAFF00] border-[#FAFF00]/20'
                    }`}>
                      {slideCount} LAPS
                    </span>
                  </div>

                  {isSlideCountInvalid && (
                    <div className="flex items-start gap-1 p-1.5 bg-amber-950/20 border border-amber-900/30 rounded text-[10px] text-amber-400 mt-2 font-mono">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <p className="leading-snug">Sugestão: Circuito ideal possui entre 5 e 8 LAPS.</p>
                    </div>
                  )}
                </div>

                {/* Card Operations Bar Footer */}
                <div className="px-5 py-3 bg-[#0A0C10] border-t border-[#262A35] flex items-center justify-between">
                  <span className="text-[9px] font-mono text-zinc-500">
                    LAP TIME: {new Date(pres.updatedAt).toLocaleDateString()}
                  </span>

                  <div className="flex items-center gap-1 select-none">
                    <button
                      onClick={() => onSelectPresentation(pres.id, true)}
                      className="p-1.5 text-slate-400 hover:text-[#FAFF00] hover:bg-[#1C1C22] rounded transition cursor-pointer"
                      title="Projetar Treinamento (Apresentar)"
                    >
                      <Play className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onDuplicatePresentation(pres.id)}
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-[#1C1C22] rounded transition cursor-pointer"
                      title="Duplicar Módulo"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onDeletePresentation(pres.id)}
                      className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-950/20 rounded transition cursor-pointer"
                      title="Deletar Módulo"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onSelectPresentation(pres.id, false)}
                      className="flex items-center gap-1 pl-2.5 pr-2 py-1 bg-[#FAFF00] hover:bg-[#E6EB00] text-black font-black text-[10px] rounded cursor-pointer transition skew-x-[-12deg]"
                    >
                      <span className="inline-block skew-x-[12deg] flex items-center gap-1 font-mono">
                        EDITAR
                        <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* POPUP: ADD NEW PRESENTATION MODAL */}
      {isCreating && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#0A0C10]/80 backdrop-blur-xs select-none animate-fadeIn">
          <form 
            onSubmit={handleCreateSubmit} 
            className="bg-[#0F1217] w-full max-w-lg rounded-xl shadow-2xl border border-[#1E293B] overflow-hidden flex flex-col p-6"
            id="new-presentation-form-panel"
          >
            <div className="flex justify-between items-center border-b border-[#1E293B] pb-3 mb-4">
              <h3 className="font-bold text-white text-sm">Criar Módulo de Treinamento</h3>
              <button
                type="button"
                onClick={() => setIsCreating(false)}
                className="text-slate-400 hover:text-white font-bold transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase font-mono tracking-wider mb-1">Título do Treinamento</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Ex. Apontamentos Chão de Fábrica"
                  className="w-full px-3 py-2.5 border border-[#1E293B] bg-[#16191E] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase font-mono tracking-wider mb-1">Resumo Executivo (Sinopse)</label>
                <textarea
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Explique o que os operadores ou analistas aprenderão neste módulo de treinamento..."
                  rows={3}
                  className="w-full px-3 py-2.5 border border-[#1E293B] bg-[#16191E] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase font-mono tracking-wider mb-1">Categoria</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as Category)}
                    className="w-full px-2.5 py-2.5 border border-[#1E293B] bg-[#16191E] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat} className="bg-[#16191E] text-white">{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase font-mono tracking-wider mb-1">Status Inicial</label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value as Status)}
                    className="w-full px-2.5 py-2.5 border border-[#1E293B] bg-[#16191E] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                  >
                    <option value="Rascunho" className="bg-[#16191E] text-white">🟡 Rascunho</option>
                    <option value="Em Revisão" className="bg-[#16191E] text-white">🔵 Em Revisão</option>
                    <option value="Publicado" className="bg-[#16191E] text-white">🟢 Publicado</option>
                  </select>
                </div>
              </div>

              {/* Template generator checkbox */}
              <div className="p-3.5 bg-blue-950/20 border border-blue-900/30 rounded-lg space-y-1.5">
                <label className="flex items-start gap-2.5 font-bold text-slate-300 cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    checked={preloadTemplate}
                    onChange={(e) => setPreloadTemplate(e.target.checked)}
                    className="accent-blue-500 mt-0.5 cursor-pointer"
                  />
                  <span>Pré-carregar Estrutura Recomendada</span>
                </label>
                <p className="text-[10.5px] text-slate-450 leading-relaxed pl-5">
                  Recomendado. Cria automaticamente a apresentação pré-populada com **5 slides estruturados padrão** (Capa, Objetivos, Roteiro, Exemplo Mídia, Checklist) para estar imediatamente em conformidade com as exigências da fábrica.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-5 pt-4 border-t border-[#1E293B]">
              <button
                type="button"
                onClick={() => setIsCreating(false)}
                className="px-4 py-2 border border-[#1E293B] bg-[#16191E] text-slate-400 hover:text-white rounded-lg font-bold text-xs cursor-pointer transition"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-xs transition shadow-lg shadow-blue-950/30 cursor-pointer"
              >
                Criar Apresentação
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
