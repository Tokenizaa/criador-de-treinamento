import React, { useState } from 'react';
import { Presentation, Category, Status, Slide, ThemeStyle } from '../types';
import { CATEGORIES } from '../mockData';
import { MODULE_TEMPLATES, generateSlidesForModule } from '../lib/trainingTemplates';
import { 
  Plus, Search, Presentation as PresIcon, Calendar, ArrowRight,
  TrendingUp, Layers, CheckCircle2, FileText, AlertCircle, Trash2, Copy, Play, Cpu,
  Sparkles, ChevronDown, ChevronUp, Award, Activity, Info
} from 'lucide-react';

interface DashboardProps {
  presentations: Presentation[];
  onSelectPresentation: (id: string, selectForPresentMode?: boolean) => void;
  onDeletePresentation: (id: string) => void;
  onDuplicatePresentation: (id: string) => void;
  onAddPresentation: (newPres: Presentation) => void;
  currentThemeStyle: ThemeStyle;
  onThemeStyleChange: (style: ThemeStyle) => void;
  theme: any;
}

interface AuditedModule {
  id: string;
  name: string;
  phase: string;
  complexity: string;
  maturity: string;
  slidesCount: number;
  format: string;
  captures: string;
  businessValue: string;
  category: Category;
  sinopse: string;
}

const AUDITED_MODULES: AuditedModule[] = [
  { id: 'empresa', name: 'Empresa', phase: 'Fase 1', complexity: 'Muito Simples', maturity: 'Primeiro Lote', slidesCount: 5, format: 'Passo a Passo', captures: 'Baixa', businessValue: 'Alto', category: 'Cadastros', sinopse: 'Cadastro da identidade da fábrica (razão social, CNPJ, endereço, marca) para validação fiscal e relatórios.' },
  { id: 'setores', name: 'Setores', phase: 'Fase 2', complexity: 'Simples', maturity: 'Operação Inicial', slidesCount: 6, format: 'Passo a Passo + Checklist', captures: 'Média', businessValue: 'Médio', category: 'Cadastros', sinopse: 'Estruturação física da fábrica (galpões, linhas, áreas administrativas) para alocação de recursos.' },
  { id: 'funcionarios', name: 'Funcionários', phase: 'Fase 2', complexity: 'Médio', maturity: 'Operação Inicial', slidesCount: 7, format: 'Passo a Passo + Vídeo', captures: 'Alta', businessValue: 'Alto', category: 'Cadastros', sinopse: 'Cadastro de equipe, funções, turnos e alocações de colaboradores por posto produtivo.' },
  { id: 'equipamentos', name: 'Equipamentos', phase: 'Fase 2', complexity: 'Médio', maturity: 'Operação Inicial', slidesCount: 7, format: 'Passo a Passo + Vídeo', captures: 'Alta', businessValue: 'Alto', category: 'Cadastros', sinopse: 'Estações de trabalho, prensas e maquinários físicos com métricas de capacidade e manutenção.' },
  { id: 'ferramentas', name: 'Ferramentas', phase: 'Fase 3', complexity: 'Simples', maturity: 'Empresa Estruturada', slidesCount: 5, format: 'Passo a Passo', captures: 'Baixa', businessValue: 'Médio', category: 'Cadastros', sinopse: 'Controle de moldes, gabaritos, facas de corte e estampos de precisão da colchoaria.' },
  { id: 'materia_prima', name: 'Matérias-Primas', phase: 'Fase 1', complexity: 'Médio', maturity: 'Primeiro Lote', slidesCount: 8, format: 'Passo a Passo + Vídeo', captures: 'Alta', businessValue: 'Muito Alto', category: 'Cadastros', sinopse: 'Cadastro de bobinas, blocos de espuma sob medida e insumos de colagem com controle de estoque.' },
  { id: 'fornecedores', name: 'Fornecedores', phase: 'Fase 1', complexity: 'Simples', maturity: 'Primeiro Lote', slidesCount: 6, format: 'Passo a Passo', captures: 'Média', businessValue: 'Alto', category: 'Cadastros', sinopse: 'Parceiros logísticos, distribuidores químicos de poliol e isocianato e fornecedores de embalagens.' },
  { id: 'produtos', name: 'Produtos', phase: 'Fase 1', complexity: 'Complexo', maturity: 'Primeiro Lote', slidesCount: 8, format: 'Vídeo + Passo a Passo', captures: 'Crítica', businessValue: 'Muito Alto', category: 'Cadastros', sinopse: 'Cadastro de colchoaria acabada, densidades de espuma (D28, D33, D45) e regras comerciais.' },
  { id: 'componentes', name: 'Componentes', phase: 'Fase 3', complexity: 'Médio', maturity: 'Empresa Estruturada', slidesCount: 7, format: 'Processo + Vídeo', captures: 'Alta', businessValue: 'Médio', category: 'Cadastros', sinopse: 'Cadastro de kits semi-acabados, capas de matelassê e subconjuntos de mola ensacada.' },
  { id: 'bom', name: 'BOM', phase: 'Fase 1', complexity: 'Muito Complexo', maturity: 'Primeiro Lote', slidesCount: 8, format: 'Vídeo + Simulação', captures: 'Crítica', businessValue: 'Muito Alto', category: 'Produção', sinopse: 'Lista de Materiais (Bill of Materials) detalhando as proporções de bloco, cola e embalagem de cada SKU.' },
  { id: 'processos', name: 'Processos', phase: 'Fase 2', complexity: 'Muito Complexo', maturity: 'Operação Inicial', slidesCount: 8, format: 'Vídeo + Simulação', captures: 'Crítica', businessValue: 'Alto', category: 'Produção', sinopse: 'Escalonamento operacional sequencial, tempos de setup e fluxo de balanceamento das linhas.' },
  { id: 'cronometragem', name: 'Cronometragem', phase: 'Fase 4', complexity: 'Muito Complexo', maturity: 'Operação Avançada', slidesCount: 8, format: 'Processo + Vídeo', captures: 'Alta', businessValue: 'Alto', category: 'Produção', sinopse: 'Tomada de tempos cronometrados, avaliação de ritmo, fator de tolerância e determinação de Tempo Padrão.' },
  { id: 'capacidade', name: 'Capacidade', phase: 'Fase 3', complexity: 'Muito Complexo', maturity: 'Operação Inicial', slidesCount: 8, format: 'Processo + Vídeo', captures: 'Alta', businessValue: 'Alto', category: 'Produção', sinopse: 'Carga de postos de trabalho e restrições físicas de produção para cálculo de lead-time exato.' },
  { id: 'ordem_producao', name: 'Ordens de Produção (OPs)', phase: 'Fase 1', complexity: 'Médio', maturity: 'Primeiro Lote', slidesCount: 8, format: 'Vídeo + Passo a Passo', captures: 'Alta', businessValue: 'Muito Alto', category: 'Produção', sinopse: 'Emissão, agendamento de sequenciamento e monitoramento de ordens em progresso no chão de fábrica.' },
  { id: 'lotes', name: 'Lotes', phase: 'Fase 2', complexity: 'Médio', maturity: 'Operação Inicial', slidesCount: 7, format: 'Passo a Passo + Vídeo', captures: 'Alta', businessValue: 'Alto', category: 'Qualidade', sinopse: 'Codificação, rastreamento físico de caixas e controle de validade legal de blocos espumados.' },
  { id: 'estoque_industrial', name: 'Estoque Industrial', phase: 'Fase 1', complexity: 'Médio', maturity: 'Primeiro Lote', slidesCount: 8, format: 'Passo a Passo + Vídeo', captures: 'Alta', businessValue: 'Muito Alto', category: 'Estoque', sinopse: 'Níveis de segurança mínimo, classificação de curva ABC e inventário rotativo integrado.' },
  { id: 'movimentacoes', name: 'Movimentações', phase: 'Fase 2', complexity: 'Médio', maturity: 'Operação Inicial', slidesCount: 8, format: 'Passo a Passo + Vídeo', captures: 'Alta', businessValue: 'Alto', category: 'Estoque', sinopse: 'Controle de fluxo de entradas, saídas internas, devoluções de material e perdas físicas.' },
  { id: 'apontamentos', name: 'Apontamentos', phase: 'Fase 1', complexity: 'Médio', maturity: 'Primeiro Lote', slidesCount: 8, format: 'Vídeo + Passo a Passo', captures: 'Alta', businessValue: 'Muito Alto', category: 'Produção', sinopse: 'Monitoramento contínuo de produtividade, registro de refugos da colchoaria e paradas de barreira.' },
  { id: 'consumo_materiais', name: 'Consumo de Materiais', phase: 'Fase 2', complexity: 'Médio', maturity: 'Operação Inicial', slidesCount: 7, format: 'Processo + Vídeo', captures: 'Alta', businessValue: 'Alto', category: 'Estoque', sinopse: 'Aferição de consumo de insumo real contra o planejado, perdas e rendimento de insumos industriais.' },
  { id: 'producao_tempo_real', name: 'Produção em Tempo Real', phase: 'Fase 4', complexity: 'Médio', maturity: 'Operação Avançada', slidesCount: 7, format: 'Vídeo', captures: 'Alta', businessValue: 'Alto', category: 'Produção', sinopse: 'Visores TV, painéis Andon eletrônicos, cronômetro de ciclos e alarmes de parada.' },
  { id: 'qualidade', name: 'Qualidade', phase: 'Fase 1', complexity: 'Médio', maturity: 'Primeiro Lote', slidesCount: 8, format: 'Vídeo + Passo a Passo', captures: 'Alta', businessValue: 'Alto', category: 'Qualidade', sinopse: 'Formulários rápidos de conformidade para laudos, aprovações, retenções de blocos e retrabalho.' },
  { id: 'rastreabilidade', name: 'Rastreabilidade', phase: 'Fase 3', complexity: 'Médio', maturity: 'Operação Inicial', slidesCount: 7, format: 'Vídeo', captures: 'Alta', businessValue: 'Alto', category: 'Qualidade', sinopse: 'Rastreamento completo do histórico da peça (quem produziu, qualidade dos insumos e testes).' },
  { id: 'apresentacoes', name: 'Apresentações', phase: 'Fase 4', complexity: 'Médio', maturity: 'Empresa Estruturada', slidesCount: 6, format: 'Vídeo + Simulação', captures: 'Alta', businessValue: 'Médio', category: 'Treinamentos', sinopse: 'Configuração de novos circuitos de engajamento utilizando layouts imersivos dinâmicos.' }
];

export default function Dashboard({
  presentations,
  onSelectPresentation,
  onDeletePresentation,
  onDuplicatePresentation,
  onAddPresentation,
  currentThemeStyle,
  onThemeStyleChange,
  theme
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
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('generic');

  // Training Audit Section States
  const [isAuditExpanded, setIsAuditExpanded] = useState<boolean>(true);
  const [auditFilterPhase, setAuditFilterPhase] = useState<string>('Todos');
  const [auditSearchTerm, setAuditSearchTerm] = useState<string>('');
  const [successToast, setSuccessToast] = useState<{ message: string; moduleName: string } | null>(null);

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

  // Audit filtering and calculations
  const activeAuditedModules = AUDITED_MODULES.filter((mod) => {
    const matchesPhase = auditFilterPhase === 'Todos' || mod.phase === auditFilterPhase;
    const matchesSearch = mod.name.toLowerCase().includes(auditSearchTerm.toLowerCase()) || 
                          mod.sinopse.toLowerCase().includes(auditSearchTerm.toLowerCase()) ||
                          mod.category.toLowerCase().includes(auditSearchTerm.toLowerCase());
    return matchesPhase && matchesSearch;
  });

  const activeModulesCount = AUDITED_MODULES.filter(m => 
    presentations.some(p => 
      p.title.toLowerCase() === m.name.toLowerCase() || 
      p.title.toLowerCase() === `treinamento: ${m.name.toLowerCase()}`
    )
  ).length;

  const coveragePercent = Math.round((activeModulesCount / 23) * 100);

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    let preloadedSlides: Slide[] = [];

    if (preloadTemplate) {
      preloadedSlides = generateSlidesForModule(selectedTemplateId, newTitle, newDesc, newCategory);
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
    setSelectedTemplateId('generic');
    setIsCreating(false);
  };

  const handleTemplateChange = (templateId: string) => {
    setSelectedTemplateId(templateId);
    if (templateId === 'generic') {
      setNewTitle('');
      setNewDesc('');
      setNewCategory('Visão Geral');
    } else {
      const template = MODULE_TEMPLATES.find(t => t.id === templateId);
      if (template) {
        setNewTitle(template.name);
        setNewDesc(template.sinopse);
        setNewCategory(template.category);
      }
    }
  };

  const handleGenerateFromAudit = (mod: AuditedModule) => {
    const existing = presentations.find(
      p => p.title.toLowerCase() === mod.name.toLowerCase() || 
           p.title.toLowerCase() === `treinamento: ${mod.name.toLowerCase()}`
    );
    if (existing) {
      if (!confirm(`Já existe um circuito de treinamento gerado para "${mod.name}". Deseja prosseguir e criar outro circuito idêntico no painel?`)) {
        return;
      }
    }

    const generatedSlides = generateSlidesForModule(mod.id, mod.name, mod.sinopse, mod.category);
    
    // Adjust slide items list to conform to types (each list item needs an id)
    const formattedSlides = generatedSlides.map((slide, idx) => {
      // Ensure each list item is properly typed with id if it's currently a string or has been transformed
      const listItems = slide.listItems?.map((item, lIdx) => ({
        id: item.id || `audit-item-${mod.id}-${idx}-${lIdx}-${Date.now()}`,
        text: item.text,
        checked: item.checked || false
      }));

      return {
        ...slide,
        listItems
      };
    });

    const newPres: Presentation = {
      id: 'pres-audit-' + mod.id + '-' + Date.now(),
      title: mod.name,
      description: mod.sinopse,
      category: mod.category,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: 'Publicado', // Instantly published as it meets official audit parameters!
      slides: formattedSlides
    };

    onAddPresentation(newPres);

    setSuccessToast({
      message: `⚡ Circuito de Treinamento Oficial para "${mod.name}" gerado com sucesso!`,
      moduleName: mod.name
    });

    // Auto-scroll to top to see it
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      setSuccessToast(null);
    }, 5000);
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
    <div className={`space-y-6 ${theme.fontBody}`} id="dashboard-core-view">
      
      {/* BEAUTIFUL FLOATING TIMEOUT TOAST NOTIFICATION */}
      {successToast && (
        <div className="fixed top-6 right-6 z-50 max-w-sm w-full bg-[#12141a] border-l-4 border-yellow-400 p-4 rounded shadow-2xl skew-x-[-8deg] animate-slideIn">
          <div className="flex items-start gap-3 skew-x-[8deg]">
            <div className="bg-[#FAFF00]/10 p-1.5 rounded text-[#FAFF00]">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex-1 text-xs">
              <h4 className="font-bold text-white font-mono uppercase tracking-wider">MÓDULO DE TREINAMENTO ATIVO</h4>
              <p className="text-slate-350 mt-1 leading-normal font-sans">{successToast.message}</p>
              <div className="mt-2 text-[10px] text-[#FAFF00] font-mono flex items-center gap-1">
                <span>Clique em "EDITAR" para customizar os slides do treinamento.</span>
              </div>
            </div>
            <button 
              type="button" 
              onClick={() => setSuccessToast(null)}
              className="text-slate-400 hover:text-white font-bold transition mr-1 font-mono hover:scale-110"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      
      {/* THEME SELECTION CONTROL WIDGET */}
      <div className={`p-4 ${theme.bgCard} ${theme.roundedCard} border ${theme.borderColor} flex flex-col md:flex-row items-center justify-between gap-4 ${theme.shadowGlow}`} id="theme-governess-selection">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg ${theme.bgAccent} border ${theme.borderColor} flex items-center justify-center ${theme.textPrimaryAccent}`}>
            <Cpu className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className={`text-sm ${theme.fontDisplay} ${theme.textTitle} tracking-wide`}>Mecanismo de Temas do Cockpit</h3>
            <p className={`text-[10px] ${theme.textMuted} font-mono uppercase mt-0.5`}>Tokens ativos de Design: Cores, Tipografias e Bordas no LocalStorage</p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'racing', label: '🏁 Racing F1', desc: 'Amarelo & Carbono' },
            { id: 'industrial', label: '🏗️ Industrial Amber', desc: 'Laranja & Listras' },
            { id: 'minimalist', label: '🔲 Minimalista', desc: 'Monocromático Limpo' }
          ].map((opt) => {
            const active = currentThemeStyle === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => onThemeStyleChange(opt.id as any)}
                className={`relative overflow-hidden px-4 py-1.5 ${theme.fontMono} text-xs font-bold transition-all duration-200 cursor-pointer ${theme.skewAngle ? theme.skewAngle : ''} ${
                  active 
                    ? `${theme.btnPrimaryBg} ${theme.btnPrimaryText} ${theme.shadowGlow} border ${theme.borderColor}`
                    : `bg-slate-900/40 hover:bg-slate-800 text-slate-400 border ${theme.borderColor}`
                }`}
                style={{ borderRadius: active ? '4px' : '6px' }}
              >
                <span className={`inline-block ${theme.unskewAngle ? theme.unskewAngle : ''} text-center`}>
                  {opt.label.toUpperCase()}
                  <span className="block text-[8px] opacity-75 font-mono font-normal normal-case">{opt.desc}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
      
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
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 ${theme.bgCard} p-5 ${theme.roundedCard} border ${theme.borderColor} ${theme.shadowGlow}`}>
        <div>
          <span className={`text-[10px] font-bold font-mono ${theme.textSubtitle} uppercase tracking-widest block`}>PAINEL DE COMANDO TELEMÉTRICO</span>
          <h2 className={`text-2xl ${theme.fontDisplay} ${theme.textTitle} mt-1 uppercase tracking-tight`}>GERENCIAMENTO DE CIRCUITOS</h2>
        </div>
        <button
          onClick={() => setIsCreating(true)}
          className={`relative overflow-hidden group flex items-center gap-1.5 px-5 py-2.5 ${theme.btnPrimaryBg} ${theme.btnPrimaryHover} ${theme.btnPrimaryText} ${theme.fontMono} text-xs rounded transition shadow-lg cursor-pointer ${theme.skewAngle ? theme.skewAngle : ''}`}
          id="btn-trigger-new-presentation"
        >
          <span className={`inline-block ${theme.unskewAngle ? theme.unskewAngle : ''} flex items-center gap-1.5`}>
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

      {/* INDUSTRIAL OS COMPREHENSIVE TRAINING AUDIT & SEED PANEL */}
      <div className={`mt-10 ${theme.bgCard} ${theme.roundedCard} border ${theme.borderColor} overflow-hidden ${theme.shadowGlow}`} id="training-audit-comprehensive-panel">
        
        {/* Panel Collapsible Header */}
        <div 
          onClick={() => setIsAuditExpanded(!isAuditExpanded)}
          className={`p-5 flex items-center justify-between cursor-pointer border-b ${theme.borderColor} hover:bg-slate-900/25 transition-colors select-none`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded ${theme.bgAccent} border ${theme.borderAccent || theme.borderColor} flex items-center justify-center ${theme.textPrimaryAccent}`}>
              <Award className="w-4 h-4 text-yellow-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold font-mono ${theme.textSubtitle} uppercase tracking-widest block`}>MATRIZ DE CAPACITAÇÃO INDUSTRIAL OS (CONFORME AUDITORIA)</span>
                <span className="bg-[#FAFF00]/10 text-[#FAFF00] border border-[#FAFF00]/25 text-[8.5px] px-1.5 py-0.5 rounded font-mono font-bold animate-pulse">23 TEMAS RECOMENDADOS</span>
              </div>
              <h2 className={`text-xl ${theme.fontDisplay} ${theme.textTitle} font-bold mt-1 uppercase tracking-tight`}>
                Diagnóstico e Geração Instantânea de Circuitos
              </h2>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end text-right font-mono">
              <span className="text-[10px] text-slate-500">COBERTURA DA PLANTA</span>
              <span className={`text-xs font-bold ${coveragePercent > 50 ? 'text-emerald-400' : 'text-yellow-500'}`}>
                {activeModulesCount} / 23 ({coveragePercent}%) ATIVOS
              </span>
            </div>
            <button className="p-1.5 hover:bg-slate-800/40 rounded transition">
              {isAuditExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
            </button>
          </div>
        </div>

        {/* Panel Core Content */}
        {isAuditExpanded && (
          <div className="p-6 space-y-6 animate-fadeIn select-none">
            
            {/* AUDIT COGNITIVE INTRO & ACCORDION KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#0A0D14] p-4 rounded-lg border border-[#1E293B] space-y-1">
                <span className="text-[9px] font-bold font-mono text-slate-500 uppercase tracking-wide block">Taxa de Implantação</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-display font-black text-white">{activeModulesCount}</span>
                  <span className="text-xs text-slate-500 font-mono">módulos gerados</span>
                </div>
                {/* Micro slider rating */}
                <div className="w-full bg-slate-850 h-1.5 rounded-full overflow-hidden mt-2">
                  <div className="bg-gradient-to-r from-yellow-500 to-emerald-400 h-full transition-all" style={{ width: `${coveragePercent}%` }} />
                </div>
              </div>

              <div className="bg-[#0A0D14] p-4 rounded-lg border border-[#1E293B] space-y-1">
                <span className="text-[9px] font-bold font-mono text-slate-500 uppercase tracking-wide block">Fase Atual Recomendada</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-display font-black text-yellow-400">FASE 1</span>
                  <span className="text-xs text-slate-500 font-mono font-sans">Alta Prioridade</span>
                </div>
                <p className="text-[9px] text-slate-500 font-sans mt-1.5 leading-snug">
                  Módulos fundamentais comerciais e cadastros iniciais de chão.
                </p>
              </div>

              <div className="bg-[#0A0D14] p-4 rounded-lg border border-[#1E293B] space-y-1 block">
                <span className="text-[9px] font-bold font-mono text-slate-500 uppercase tracking-wide block">Média de Laps Auditados</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-display font-black text-white">7.2</span>
                  <span className="text-xs text-slate-500 font-mono">slides/módulo</span>
                </div>
                <p className="text-[9px] text-slate-500 font-sans mt-1.5 leading-snug">
                  Estruturação otimizada para evitar exaustão cognitiva no operador.
                </p>
              </div>

              <div className="bg-[#0A0D14] p-4 rounded-lg border border-[#1E293B] space-y-1">
                <span className="text-[9px] font-bold font-mono text-slate-500 uppercase tracking-wide block">Maturidade do Sistema</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-display font-black text-emerald-400">Excelente</span>
                  <span className="text-xs text-slate-500 font-mono font-sans">23 módulos</span>
                </div>
                <p className="text-[9px] text-slate-500 font-sans mt-1.5 leading-snug">
                  Matriz completa cobrando engenharia, produção e qualidade.
                </p>
              </div>
            </div>

            {/* AUDIT FILTER BAR & RESEARCH */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-t border-[#1E293B] pt-5">
              
              {/* Phases selectors */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 lg:pb-0 scrollbar-none">
                {[
                  { id: 'Todos', label: 'Todos os Módulos' },
                  { id: 'Fase 1', label: 'Fase 1: Primeiro Lote' },
                  { id: 'Fase 2', label: 'Fase 2: Estabilização' },
                  { id: 'Fase 3', label: 'Fase 3: Crescimento' },
                  { id: 'Fase 4', label: 'Fase 4: Consolidado' }
                ].map((ph) => {
                  const active = auditFilterPhase === ph.id;
                  return (
                    <button
                      key={ph.id}
                      onClick={() => setAuditFilterPhase(ph.id)}
                      className={`px-3 py-1 text-[10.5px] font-mono font-bold tracking-wide transition border cursor-pointer shrink-0 skew-x-[-12deg] ${
                        active 
                          ? 'bg-yellow-400/15 text-yellow-400 border-yellow-400/30 shadow-sm'
                          : 'bg-transparent text-slate-400 border-[#1E293B] hover:bg-slate-900/30'
                      }`}
                    >
                      <span className="inline-block skew-x-[12deg] uppercase">{ph.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Research Input */}
              <div className="relative w-full lg:max-w-xs shrink-0 bg-[#0A0D14] border border-[#1E293B] rounded">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Pesquisar na auditoria..."
                  value={auditSearchTerm}
                  onChange={(e) => setAuditSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-yellow-400/30"
                />
              </div>
            </div>

            {/* AUDITED MODULES DYNAMIC LIST / CARDS GRID */}
            {activeAuditedModules.length === 0 ? (
              <div className="text-center py-10 bg-[#0A0D14] rounded-lg border border-dashed border-[#1E293B]">
                <p className="text-slate-400 text-xs">Nenhum tema encontrado na auditoria de treinamentos para esta seleção.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeAuditedModules.map((mod) => {
                  const hasMatchingPresentation = presentations.some(p => 
                    p.title.toLowerCase() === mod.name.toLowerCase() || 
                    p.title.toLowerCase() === `treinamento: ${mod.name.toLowerCase()}`
                  );
                  
                  // Color indicators for complexity badges
                  const complexityColors = {
                    'Muito Simples': 'bg-emerald-950/40 text-emerald-400 border-emerald-900/30',
                    'Simples': 'bg-teal-950/40 text-teal-400 border-teal-900/30',
                    'Médio': 'bg-blue-950/40 text-blue-400 border-blue-900/30',
                    'Complexo': 'bg-amber-950/40 text-amber-500 border-amber-900/30',
                    'Muito Complexo': 'bg-red-950/40 text-red-500 border-red-900/30'
                  };

                  return (
                    <div 
                      key={mod.id} 
                      className={`relative bg-[#0A0D14]/80 p-5 rounded-lg border transition-all duration-300 flex flex-col justify-between hover:bg-[#0E121C] group ${
                        hasMatchingPresentation 
                          ? 'border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.02)]' 
                          : 'border-[#1E293B] hover:border-yellow-500/30'
                      }`}
                    >
                      {/* Status indicator ribbon top-right */}
                      {hasMatchingPresentation && (
                        <div className="absolute top-3 right-4 flex items-center gap-1 text-[8.5px] font-bold font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-900/30 uppercase">
                          <CheckCircle2 className="w-2.5 h-2.5 stroke-[3]" /> GERADO
                        </div>
                      )}

                      <div className="space-y-3">
                        {/* Categorization headers */}
                        <div className="flex flex-wrap items-center gap-1.5 select-none shrink-0">
                          <span className="text-[8px] font-bold font-mono tracking-wider text-slate-500 uppercase">
                            {mod.category}
                          </span>
                          <span className={`text-[8px] font-bold font-mono px-1.5 py-0.5 rounded border ${
                            mod.phase === 'Fase 1' 
                              ? 'bg-red-950/30 text-red-400 border-red-900/20' 
                              : mod.phase === 'Fase 2' 
                                ? 'bg-amber-950/30 text-amber-400 border-amber-900/20' 
                                : mod.phase === 'Fase 3'
                                  ? 'bg-blue-950/30 text-blue-400 border-blue-900/20'
                                  : 'bg-purple-950/30 text-purple-400 border-purple-900/20'
                          }`}>
                            {mod.phase.toUpperCase()}
                          </span>
                        </div>

                        <div>
                          <h3 className="font-display italic font-black text-sm text-white group-hover:text-yellow-400 transition-colors uppercase">
                            {mod.name}
                          </h3>
                          <p className="text-[11px] text-slate-400 mt-1 lines-clamp-3 leading-relaxed">
                            {mod.sinopse}
                          </p>
                        </div>

                        {/* Audit Details Grid */}
                        <div className="grid grid-cols-2 gap-2 text-[9px] font-mono border-t border-[#1C1F26] pt-3 text-slate-500">
                          <div>
                            <span className="block text-slate-600">COMPLEXIDADE:</span>
                            <span className={`inline-block font-bold text-[8.5px] px-1 py-0.2 rounded border uppercase mt-0.5 ${complexityColors[mod.complexity as keyof typeof complexityColors]}`}>
                              {mod.complexity}
                            </span>
                          </div>
                          <div>
                            <span className="block text-slate-600">TAMANHO IDEAL:</span>
                            <span className="font-bold text-slate-350">{mod.slidesCount} LAPS (SLIDES)</span>
                          </div>
                          <div>
                            <span className="block text-slate-600">FORMATO DIRECIONADO:</span>
                            <span className="font-semibold text-slate-350 truncate block" title={mod.format}>{mod.format}</span>
                          </div>
                          <div>
                            <span className="block text-slate-600">VALOR OPERACIONAL:</span>
                            <span className={`font-bold ${mod.businessValue === 'Muito Alto' ? 'text-emerald-400' : 'text-slate-300'}`}>{mod.businessValue.toUpperCase()}</span>
                          </div>
                        </div>
                      </div>

                      {/* Instant seed button trigger */}
                      <div className="mt-5 select-none pt-3 border-t border-[#1C1F26]">
                        <button
                          onClick={() => handleGenerateFromAudit(mod)}
                          className={`w-full flex items-center justify-center gap-1.5 py-2 px-3 text-[10px] font-black italic rounded transition cursor-pointer font-mono skew-x-[-12deg] ${
                            hasMatchingPresentation 
                              ? 'bg-[#1C1F26] hover:bg-emerald-950/30 text-slate-350 hover:text-emerald-400 hover:border hover:border-emerald-500/20'
                              : 'bg-yellow-400 hover:bg-yellow-350 text-black shadow-md shadow-yellow-950/10'
                          }`}
                        >
                          <span className="inline-block skew-x-[12deg] flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
                            {hasMatchingPresentation ? 'RE-GERAR CIRCUITO' : '⚡ AUTO-GERAR CIRCUITO'}
                          </span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            
            <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5 select-none border-t border-[#1E293B] pt-4">
              <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>
                Cada circuito gerado automaticamente já contém um roteiro de 5 a 8 slides estruturados em estrita conformidade com os dados reais de auditoria do Industrial OS.
              </span>
            </div>
          </div>
        )}
      </div>

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
                <label className="block text-xs font-semibold text-slate-400 uppercase font-mono tracking-wider mb-1">PROCESSO DA FÁBRICA (OPCIONAL TEMPLATE)</label>
                <select
                  value={selectedTemplateId}
                  onChange={(e) => handleTemplateChange(e.target.value)}
                  className="w-full px-2.5 py-2.5 border border-[#1E293B] bg-[#16191E] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer font-sans"
                >
                  <option value="generic" className="bg-[#16191E] text-white">✍️ Criar Treinamento Personalizado (Sem módulo pré-definido)</option>
                  {MODULE_TEMPLATES.map((tmpl) => (
                    <option key={tmpl.id} value={tmpl.id} className="bg-[#16191E] text-white">
                      ⚙️ {tmpl.name} ({tmpl.category})
                    </option>
                  ))}
                </select>
                <p className="text-[10px] text-slate-400 mt-1 font-mono">
                  Selecione um processo operacional para que a IA crie instantaneamente um plano oficial auditável de 8 slides focado na fábrica real.
                </p>
              </div>

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
              <div className="p-3.5 bg-yellow-950/20 border border-yellow-900/30 rounded-lg space-y-1.5">
                <label className="flex items-start gap-2.5 font-bold text-slate-300 cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    checked={preloadTemplate}
                    onChange={(e) => setPreloadTemplate(e.target.checked)}
                    className="accent-yellow-500 mt-0.5 cursor-pointer"
                  />
                  <span>Pré-carregar Estrutura Mestra Pronta</span>
                </label>
                <p className="text-[10.5px] text-slate-450 leading-relaxed pl-5 font-mono">
                  Altamente Recomendado. Estrutura de **8 slides em total conformidade** com os critérios da fábrica, ensinando primeiro a operação física real, o problema resolvido, como o Industrial OS ajuda, onde acessar, o passo a passo de cliques, simulações e o checklist de sucesso.
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
