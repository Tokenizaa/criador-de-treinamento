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
  const [activeTabFilter, setActiveTabFilter] = useState<'all' | 'active' | 'pending' | 'custom'>('all');
  const [phaseFilter, setPhaseFilter] = useState<string>('Todos');
  const [isCreating, setIsCreating] = useState(false);

  // New Presentation Form States
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newCategory, setNewCategory] = useState<Category>('Visão Geral');
  const [newStatus, setNewStatus] = useState<Status>('Rascunho');
  const [preloadTemplate, setPreloadTemplate] = useState<boolean>(true);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('generic');
  const [desiredSlideCount, setDesiredSlideCount] = useState<number>(8);

  // Training Audit Section States
  const [successToast, setSuccessToast] = useState<{ message: string; moduleName: string } | null>(null);
  const [generatingModule, setGeneratingModule] = useState<AuditedModule | null>(null);
  const [auditSlideCount, setAuditSlideCount] = useState<number>(8);

  // Calculate high level KPI values
  const totalCount = presentations.length;
  const publishedCount = presentations.filter(p => p.status === 'Publicado').length;
  const draftCount = presentations.filter(p => p.status === 'Rascunho').length;
  const reviewCount = presentations.filter(p => p.status === 'Em Revisão').length;

  const lastUpdateDate = presentations.length > 0 
    ? new Date(Math.max(...presentations.map(p => new Date(p.updatedAt).getTime())))
    : null;

  // 1. Find matching presentation for an audited module theme - robust, loose matching for perfect coordination
  const getPresentationForModule = (mod: AuditedModule) => {
    return presentations.find(p => {
      const pid = p.id.toLowerCase();
      const mid = mod.id.toLowerCase();
      const pTitle = p.title.toLowerCase().trim();
      const mName = mod.name.toLowerCase().trim();
      
      return pid.includes(`-audit-${mid}`) ||
             pid.includes(`_audit_${mid}`) ||
             pid === mid ||
             pTitle === mName ||
             pTitle === `treinamento: ${mName}` ||
             pTitle === `treinamento de ${mName}` ||
             pTitle.includes(mName) ||
             mName.includes(pTitle);
    });
  };

  // 2. Filter custom, user-created presentations that don't match any static audit theme
  const customPresentations = presentations.filter(p => {
    return !AUDITED_MODULES.some(m => {
      const matchedPres = getPresentationForModule(m);
      return matchedPres?.id === p.id;
    });
  });

  const activeModulesCount = AUDITED_MODULES.filter(m => {
    return !!getPresentationForModule(m);
  }).length;

  const coveragePercent = Math.round((activeModulesCount / 23) * 100);

  // Unified items list build
  interface UnifiedItem {
    id: string;
    tipo: 'oficial' | 'customizado';
    moduloAuditado?: AuditedModule;
    apresentacaoAtiva?: Presentation;
  }

  const unifiedItems: UnifiedItem[] = [];

  // Add the 23 Audit modules recommendations
  AUDITED_MODULES.forEach(mod => {
    const activePres = getPresentationForModule(mod);
    unifiedItems.push({
      id: `mod-audit-${mod.id}`,
      tipo: 'oficial',
      moduloAuditado: mod,
      apresentacaoAtiva: activePres
    });
  });

  // Add any custom presentations created under other titles
  customPresentations.forEach(pres => {
    unifiedItems.push({
      id: `pres-custom-${pres.id}`,
      tipo: 'customizado',
      apresentacaoAtiva: pres
    });
  });

  // Apply textual and categorical search filters
  const filteredUnifiedItems = unifiedItems.filter(item => {
    // 1. Text search mapping
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      if (item.tipo === 'oficial' && item.moduloAuditado) {
        const matchesName = item.moduloAuditado.name.toLowerCase().includes(term);
        const matchesSinopse = item.moduloAuditado.sinopse.toLowerCase().includes(term);
        const matchesCategory = item.moduloAuditado.category.toLowerCase().includes(term);
        if (!matchesName && !matchesSinopse && !matchesCategory) return false;
      } else if (item.tipo === 'customizado' && item.apresentacaoAtiva) {
        const matchesName = item.apresentacaoAtiva.title.toLowerCase().includes(term);
        const matchesDesc = item.apresentacaoAtiva.description.toLowerCase().includes(term);
        const matchesCategory = item.apresentacaoAtiva.category.toLowerCase().includes(term);
        if (!matchesName && !matchesDesc && !matchesCategory) return false;
      }
    }

    // 2. Department Category Filter (Pills)
    if (selectedCategory !== 'Todos') {
      if (item.tipo === 'oficial' && item.moduloAuditado?.category !== selectedCategory) return false;
      if (item.tipo === 'customizado' && item.apresentacaoAtiva?.category !== selectedCategory) return false;
    }

    // 3. Plant Phase Filter
    if (phaseFilter !== 'Todos') {
      if (item.tipo === 'oficial' && item.moduloAuditado?.phase !== phaseFilter) return false;
      if (item.tipo === 'customizado') return false;
    }

    // 4. Tab Status Filter (all, active, pending, custom)
    if (activeTabFilter === 'active') {
      return !!item.apresentacaoAtiva;
    }
    if (activeTabFilter === 'pending') {
      return item.tipo === 'oficial' && !item.apresentacaoAtiva;
    }
    if (activeTabFilter === 'custom') {
      return item.tipo === 'customizado';
    }

    return true;
  });

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    let preloadedSlides: Slide[] = [];

    if (preloadTemplate) {
      preloadedSlides = generateSlidesForModule(selectedTemplateId, newTitle, newDesc, newCategory, desiredSlideCount);
    } else {
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
    setDesiredSlideCount(8);
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

  const handleGenerateFromAudit = (mod: AuditedModule, count: number = 8) => {
    const existing = presentations.find(
      p => p.title.toLowerCase() === mod.name.toLowerCase() || 
           p.title.toLowerCase() === `treinamento: ${mod.name.toLowerCase()}`
    );
    if (existing) {
      if (!confirm(`Já existe um circuito de treinamento gerado para "${mod.name}". Deseja prosseguir e criar outro circuito idêntico no painel?`)) {
        return;
      }
    }

    const generatedSlides = generateSlidesForModule(mod.id, mod.name, mod.sinopse, mod.category, count);
    
    // Adjust slide items list to conform to types
    const formattedSlides = generatedSlides.map((slide, idx) => {
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
      status: 'Publicado',
      slides: formattedSlides
    };

    onAddPresentation(newPres);

    setSuccessToast({
      message: `⚡ Circuito de Treinamento Oficial para "${mod.name}" (${count} slides) gerado com sucesso!`,
      moduleName: mod.name
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      setSuccessToast(null);
    }, 5500);
  };

  const getStatusBadge = (status: Status) => {
    switch (status) {
      case 'Publicado':
        return <span className="bg-emerald-950/60 text-emerald-400 text-[9px] font-bold px-2 py-0.5 rounded border border-emerald-900/40 uppercase tracking-widest font-mono">🟢 Publicado</span>;
      case 'Em Revisão':
        return <span className="bg-sky-950/60 text-sky-400 text-[9px] font-bold px-2 py-0.5 rounded border border-sky-900/40 uppercase tracking-widest font-mono">🔵 Em Revisão</span>;
      default:
        return <span className="bg-amber-950/60 text-amber-400 text-[9px] font-bold px-2 py-0.5 rounded border border-amber-900/40 uppercase tracking-widest font-mono">🟡 Rascunho</span>;
    }
  };

  return (
    <div className={`space-y-6 ${theme.fontBody}`} id="dashboard-core-view">
      
      {/* BEAUTIFUL FLOATING TIMEOUT TOAST NOTIFICATION */}
      {successToast && (
        <div className="fixed top-6 right-6 z-50 max-w-sm w-full bg-[#12141a] border-l-4 border-[#FAFF00] p-4 rounded shadow-2xl skew-x-[-8deg] animate-slideIn">
          <div className="flex items-start gap-3 skew-x-[8deg]">
            <div className="bg-[#FAFF00]/10 p-1.5 rounded text-[#FAFF00]">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex-1 text-xs">
              <h4 className="font-bold text-white font-mono uppercase tracking-wider text-[11px]">COCKPIT INTELIGENTE</h4>
              <p className="text-slate-300 mt-1 leading-normal font-sans font-medium">{successToast.message}</p>
              <div className="mt-2 text-[10px] text-[#FAFF00] font-mono flex items-center gap-1">
                <span>Imediatamente disponível no grid unificado.</span>
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
      
      {/* COCKPIT KEY STATS BAR */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 select-none" id="stats-dashboard-grid">
        <div className="bg-[#121214] p-5 rounded border border-[#262A35] flex items-center gap-4 shadow-md">
          <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/20 rounded flex items-center justify-center text-[#FAFF00] shrink-0">
            <Award className="w-5 h-5 text-yellow-400" />
          </div>
          <div>
            <span className="text-[9px] font-bold text-slate-500 font-mono block uppercase tracking-wider">MATRIZ OPERACIONAL</span>
            <span className="text-2xl font-display italic font-black text-white leading-none">23 TEMAS</span>
          </div>
        </div>

        <div className="bg-[#121214] p-5 rounded border border-[#262A35] flex items-center gap-4 shadow-md">
          <div className="w-12 h-12 bg-emerald-950/40 border border-emerald-900/30 rounded flex items-center justify-center text-emerald-400 shrink-0">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 animate-pulse" />
          </div>
          <div>
            <span className="text-[9px] font-bold text-emerald-500 font-mono block uppercase tracking-wider">COBERTURA ATIVA</span>
            <span className="text-2xl font-display italic font-black text-emerald-400 leading-none">{activeModulesCount} / 23 ({coveragePercent}%)</span>
          </div>
        </div>

        <div className="bg-[#121214] p-5 rounded border border-[#262A35] flex items-center gap-4 shadow-md">
          <div className="w-12 h-12 bg-amber-950/40 border border-[#FAFF00]/20 rounded flex items-center justify-center text-[#FAFF00] shrink-0">
            <PresIcon className="w-5 h-5 text-[#FAFF00]" />
          </div>
          <div>
            <span className="text-[9px] font-bold text-slate-500 font-mono block uppercase tracking-wider">CIRCUITOS OPERACIONAIS</span>
            <span className="text-2xl font-display italic font-black text-amber-500 leading-none">{totalCount} ATIVOS</span>
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

      {/* NEW INTEGRATED DASHBOARD ACTIONS HEADER */}
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 ${theme.bgCard} p-5 ${theme.roundedCard} border ${theme.borderColor} ${theme.shadowGlow}`}>
        <div>
          <span className={`text-[10px] font-bold font-mono ${theme.textSubtitle} uppercase tracking-widest block`}>SISTEMA DE GERENCIAMENTO UNIFICADO</span>
          <h2 className={`text-2xl ${theme.fontDisplay} ${theme.textTitle} mt-1 uppercase tracking-tight`}>COCKPIT DE CAPACITAÇÃO E MATRIZ</h2>
        </div>
        <button
          onClick={() => setIsCreating(true)}
          className={`relative overflow-hidden group flex items-center gap-1.5 px-5 py-2.5 ${theme.btnPrimaryBg} ${theme.btnPrimaryHover} ${theme.btnPrimaryText} ${theme.fontMono} text-xs rounded transition shadow-lg cursor-pointer ${theme.skewAngle ? theme.skewAngle : ''}`}
          id="btn-trigger-new-presentation"
        >
          <span className={`inline-block ${theme.unskewAngle ? theme.unskewAngle : ''} flex items-center gap-1.5`}>
            <Plus className="w-4 h-4 stroke-[3]" />
            CRIAR CIRCUITO LIVRE
          </span>
          <div className="absolute inset-0 w-1/3 h-full bg-white/20 -translate-x-full animate-shimmer pointer-events-none" />
        </button>
      </div>

      {/* FILTER BUTTONS & SEARCH BAR */}
      <div className="space-y-4">
        {/* Row 1: Active Tab Filters (Status de Implantação e Customizados) */}
        <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between">
          <div className="flex flex-wrap items-center gap-1.5 select-none">
            {[
              { id: 'all', label: '🎯 Todos os Temas', count: unifiedItems.length },
              { id: 'active', label: '🟢 Implantados (Ativos)', count: presentations.length },
              { id: 'pending', label: '⚪ Pendentes', count: 23 - activeModulesCount },
              { id: 'custom', label: '🛠️ Customizados/Livres', count: customPresentations.length }
            ].map((tab) => {
              const active = activeTabFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTabFilter(tab.id as any);
                    // Reset phase filter on some tabs to make UX clean
                    if (tab.id === 'custom') setPhaseFilter('Todos');
                  }}
                  className={`px-4 py-2 rounded text-xs font-mono font-black border transition cursor-pointer flex items-center gap-2 skew-x-[-12deg] ${
                    active
                      ? 'bg-yellow-400 text-black border-yellow-400 font-black shadow-md shadow-yellow-950/20'
                      : 'bg-[#121214] hover:bg-[#1E1E22] text-slate-400 border-[#262A35]'
                  }`}
                >
                  <span className="inline-block skew-x-[12deg] flex items-center gap-1.5">
                    {tab.label.toUpperCase()}
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${active ? 'bg-black/20 text-black' : 'bg-slate-900 text-[#FAFF00] border border-[#262A35]'}`}>
                      {tab.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Unified search and phase tool in row 1 right side */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            {activeTabFilter !== 'custom' && (
              <select
                value={phaseFilter}
                onChange={(e) => setPhaseFilter(e.target.value)}
                className="px-3 py-1.5 border border-[#262A35] bg-[#121214] text-xs font-mono text-slate-350 rounded cursor-pointer skew-x-[-10deg] focus:outline-none focus:ring-1 focus:ring-yellow-400/30"
              >
                <option value="Todos" className="bg-[#121214]">TODAS AS FASES</option>
                <option value="Fase 1" className="bg-[#121214]">FASE 1: PRIMEIRO LOTE</option>
                <option value="Fase 2" className="bg-[#121214]">FASE 2: ESTABILIZAÇÃO</option>
                <option value="Fase 3" className="bg-[#121214]">FASE 3: CRESCIMENTO</option>
                <option value="Fase 4" className="bg-[#121214]">FASE 4: CONSOLIDADO</option>
              </select>
            )}

            <div className="relative w-full md:max-w-xs bg-[#121214] border border-[#262A35] rounded select-none">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Mapear por palavra-chave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-yellow-400/30"
                id="input-presentation-filter-search"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Secondary Pills by Department (Cada categoria de Matriz) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none select-none border-b border-white/5 pt-1">
          <button
            onClick={() => setSelectedCategory('Todos')}
            className={`px-3 py-1 text-[10.5px] font-mono font-bold tracking-wide transition border cursor-pointer shrink-0 skew-x-[-12deg] ${
              selectedCategory === 'Todos'
                ? 'bg-[#FAFF00]/15 text-[#FAFF00] border-[#FAFF00]/30 shadow-xs'
                : 'bg-transparent text-slate-400 border-[#1E293B] hover:bg-slate-900/30'
            }`}
          >
            <span className="inline-block skew-x-[12deg] uppercase">Todos os Setores</span>
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-[10.5px] font-mono font-bold tracking-wide transition border cursor-pointer shrink-0 skew-x-[-12deg] ${
                selectedCategory === cat
                  ? 'bg-[#FAFF00]/15 text-[#FAFF00] border-[#FAFF00]/30 shadow-xs'
                  : 'bg-transparent text-slate-400 border-[#1E293B] hover:bg-slate-900/30'
              }`}
            >
              <span className="inline-block skew-x-[12deg] uppercase">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* COCKPIT COMPREHENSIVE UNIFIED GRID VIEW */}
      {filteredUnifiedItems.length === 0 ? (
        <div className="text-center py-20 bg-[#0A0D14] rounded-lg border border-dashed border-[#1E293B] flex flex-col items-center justify-center">
          <Info className="w-8 h-8 text-slate-500 mb-3" />
          <p className="text-slate-400 text-sm font-semibold">Nenhum circuito ou recomendação correspondente encontrada.</p>
          <p className="text-xs text-slate-650 mt-1">Sua seleção ou termos de busca filtraram todos os módulos produtivos.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="presentations-deck-grid">
          {filteredUnifiedItems.map((item) => {
            // Check if card has active presentation or is just static audited schema
            const isCustom = item.tipo === 'customizado';
            const pres = item.apresentacaoAtiva;
            const hasActive = !!pres;
            const mod = item.moduloAuditado;

            // Compute details for layout representation
            const categoryLabel = isCustom ? (pres?.category || 'Customizado') : (mod?.category || 'Geral');
            const phaseLabel = isCustom ? 'Customizado' : (mod?.phase || 'Fase 1');
            const titleValue = isCustom ? (pres?.title || '') : (mod?.name || '');
            const descValue = isCustom ? (pres?.description || '') : (mod?.sinopse || '');
            const slideCount = pres?.slides.length || mod?.slidesCount || 6;
            const isSlideCountInvalid = hasActive && (slideCount < 5 || slideCount > 8);

            // Audit details
            const complexity = mod?.complexity || 'Médio';
            const format = mod?.format || 'Passo a Passo';
            const bVal = mod?.businessValue || 'Médio';

            const complexityColors = {
              'Muito Simples': 'bg-emerald-950/40 text-emerald-400 border-emerald-900/30',
              'Simples': 'bg-teal-950/40 text-teal-400 border-teal-900/40',
              'Médio': 'bg-blue-950/40 text-blue-400 border-blue-900/40',
              'Complexo': 'bg-amber-950/40 text-amber-500 border-amber-900/40',
              'Muito Complexo': 'bg-red-950/40 text-red-500 border-red-900/40'
            };

            return (
              <div
                key={item.id}
                className={`group rounded-lg border transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${
                  hasActive
                    ? 'bg-[#121214] border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.02)] hover:border-emerald-400/60 hover:ring-1 hover:ring-emerald-400/20'
                    : 'bg-[#0A0D14]/80 border-[#262A35] hover:bg-[#0E121C] hover:border-[#FAFF00]/40'
                }`}
                id={`card-unified-${item.id}`}
              >
                {/* Upper Deck simulation badge */}
                <div className={`h-28 flex items-center justify-center border-b border-[#262A35] overflow-hidden relative ${
                  hasActive ? 'bg-[#1C1C22]/80' : 'bg-slate-950/40'
                }`}>
                  <div className="absolute inset-0 bg-carbon-pattern opacity-10" />
                  
                  {/* Status label ribbons */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1 select-none z-20 shrink-0">
                    <span className="text-[8px] font-black font-mono tracking-wider text-slate-400 bg-slate-900/80 border border-slate-750 px-1.5 py-0.5 rounded uppercase">
                      {categoryLabel}
                    </span>
                    {!isCustom && (
                      <span className={`text-[8.5px] font-black font-mono px-1.5 py-0.5 rounded border ${
                        phaseLabel === 'Fase 1' 
                          ? 'bg-red-950/40 text-red-400 border-red-900/30' 
                          : phaseLabel === 'Fase 2' 
                            ? 'bg-amber-950/40 text-amber-400 border-amber-900/30' 
                            : phaseLabel === 'Fase 3'
                              ? 'bg-blue-950/40 text-blue-400 border-blue-900/30'
                              : 'bg-purple-950/40 text-purple-400 border-purple-900/30'
                      }`}>
                        {phaseLabel.toUpperCase()}
                      </span>
                    )}
                  </div>

                  {hasActive ? (
                    <div className="absolute top-3 right-3 flex items-center gap-1 text-[8.5px] font-bold font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/40 uppercase">
                      <CheckCircle2 className="w-2.5 h-2.5 stroke-[3]" /> CIRCUITADO
                    </div>
                  ) : (
                    <div className="absolute top-3 right-3 flex items-center gap-1 text-[8.5px] font-bold font-mono text-slate-500 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800 uppercase">
                      ⚪ AGUARDANDO
                    </div>
                  )}

                  {/* Aesthetic visual miniature screen */}
                  <div className="scale-75 opacity-40 group-hover:opacity-100 group-hover:scale-90 transition-all duration-300 relative z-10">
                    <div className={`w-36 h-20 border rounded shadow-2xl flex flex-col p-2 ${
                      hasActive ? 'bg-[#050505] border-emerald-500/20' : 'bg-[#020202] border-slate-800'
                    }`}>
                      <div className={`w-10 h-1.5 rounded mb-2 ${hasActive ? 'bg-emerald-400/30' : 'bg-slate-700/30'}`}></div>
                      <div className="flex gap-1.5 flex-1">
                        <div className="flex-1 bg-zinc-950 rounded p-1 flex flex-col justify-between">
                          <div className="w-full h-1 bg-zinc-900 rounded"></div>
                          <div className="w-2/3 h-1 bg-zinc-900 rounded"></div>
                        </div>
                        <div className={`w-6 h-6 rounded flex items-center justify-center ${
                          hasActive ? 'bg-emerald-950/45 border border-emerald-900/30 text-emerald-400' : 'bg-slate-950 border border-slate-850 text-slate-600'
                        }`}>
                          <PresIcon className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card core metadata body */}
                <div className="p-4 flex-grow relative space-y-3">
                  <div className="flex items-center justify-between pointer-events-none select-none shrink-0">
                    <span className="text-[8.5px] font-mono tracking-wider text-slate-500 font-bold uppercase">
                      ID: {isCustom ? 'LIVRE' : `RECOMENDADO (#${mod?.id})`}
                    </span>
                    {hasActive && getStatusBadge(pres.status)}
                  </div>

                  <div>
                    <h3 className="font-display italic font-black text-white text-base group-hover:text-[#FAFF00] transition-colors leading-tight uppercase">
                      {titleValue}
                    </h3>
                    <p className="text-[11.5px] text-slate-400 font-normal line-clamp-2 mt-1 leading-normal" title={descValue}>
                      {descValue}
                    </p>
                  </div>

                  {/* Telemetrical details for both (official audit and active) */}
                  <div className="grid grid-cols-2 gap-2 text-[9px] font-mono border-t border-[#1C1F26] pt-3 text-slate-500 leading-snug">
                    <div>
                      <span className="block text-slate-600">COMPLEXIDADE:</span>
                      <span className={`inline-block font-bold text-[8.5px] px-1 py-0.2 rounded border uppercase mt-0.5 ${complexityColors[complexity as keyof typeof complexityColors]}`}>
                        {complexity}
                      </span>
                    </div>
                    <div>
                      <span className="block text-slate-600">TAMANHO:</span>
                      <span className="font-bold text-slate-350">{slideCount} LAPS (SLIDES)</span>
                    </div>
                    <div>
                      <span className="block text-slate-600">VALOR OPERACIONAL:</span>
                      <span className={`font-bold ${bVal === 'Muito Alto' ? 'text-emerald-400' : 'text-slate-300'}`}>
                        {bVal.toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <span className="block text-slate-600">DIRECIONAMENTO:</span>
                      <span className="font-semibold text-slate-350 truncate block" title={format}>
                        {format}
                      </span>
                    </div>
                  </div>

                  {isSlideCountInvalid && (
                    <div className="flex items-start gap-1 p-1.5 bg-[#FAFF00]/5 border border-[#FAFF00]/10 rounded text-[9.5px] text-[#FAFF00] font-mono">
                      <AlertCircle className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
                      <p className="leading-snug">Sugestão: Circuito ideal possui entre 5 e 8 LAPS.</p>
                    </div>
                  )}
                </div>

                {/* Operations rodapé bar */}
                <div className="px-4 py-3 bg-[#0A0C10] border-t border-[#262A35]">
                  {hasActive ? (
                    // Controls if training is generated and live
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono text-slate-500">
                        LAP TIME: {new Date(pres.updatedAt).toLocaleDateString()}
                      </span>

                      <div className="flex items-center gap-1 select-none">
                        <button
                          onClick={() => onSelectPresentation(pres.id, true)}
                          className="p-1.5 text-slate-400 hover:text-emerald-400 hover:bg-emerald-950/20 rounded transition cursor-pointer"
                          title="Projetar Treinamento (Apresentar no Cockpit)"
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
                          onClick={(e) => {
                            e.stopPropagation();
                            onDeletePresentation(pres.id);
                          }}
                          className="p-1.5 text-red-500 hover:text-red-400 hover:bg-red-950/20 rounded transition cursor-pointer"
                          title="Deletar Módulo do Painel"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onSelectPresentation(pres.id, false)}
                          className="flex items-center gap-1 pl-2.5 pr-2 py-1 bg-yellow-400 hover:bg-yellow-350 text-black font-black text-[9.5px] rounded cursor-pointer transition skew-x-[-12deg]"
                        >
                          <span className="inline-block skew-x-[12deg] flex items-center gap-1 font-mono">
                            EDITAR
                            <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                          </span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    // Button to generate training instantly
                    <button
                      onClick={() => {
                        if (!isCustom && mod) {
                          setGeneratingModule(mod);
                          setAuditSlideCount(8);
                        }
                      }}
                      className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 text-[10px] font-black italic rounded transition cursor-pointer font-mono bg-yellow-400 hover:bg-yellow-350 text-black shadow-md skew-x-[-12deg]"
                    >
                      <span className="inline-block skew-x-[12deg] flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" />
                        ⚡ AUTO-GERAR TREINAMENTO AUDITADO
                      </span>
                    </button>
                  )}
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

              {/* Template generator checkbox & Slide Count Selector */}
              <div className="p-3.5 bg-yellow-950/20 border border-yellow-900/30 rounded-lg space-y-3">
                <label className="flex items-start gap-2.5 font-bold text-slate-300 cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    checked={preloadTemplate}
                    onChange={(e) => setPreloadTemplate(e.target.checked)}
                    className="accent-yellow-500 mt-0.5 cursor-pointer"
                  />
                  <span>Pré-carregar Estrutura Mestra Pronta</span>
                </label>
                
                {preloadTemplate && (
                  <div className="pl-5 space-y-2 border-l border-yellow-900/40 mt-1">
                    <label className="block text-[11px] font-semibold text-slate-300 uppercase font-mono tracking-wider">
                      Quantidade de Slides a Gerar:
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setDesiredSlideCount(prev => Math.max(1, prev - 1))}
                        className="w-8 h-8 flex items-center justify-center bg-[#16191E] border border-[#1E293B] text-white rounded-lg hover:bg-slate-800 transition cursor-pointer font-bold font-mono text-xs"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min={1}
                        value={desiredSlideCount}
                        onChange={(e) => {
                          const val = parseInt(e.target.value);
                          setDesiredSlideCount(isNaN(val) || val < 1 ? 1 : val);
                        }}
                        className="w-16 h-8 text-center bg-[#16191E] border border-[#1E293B] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-bold font-mono text-xs"
                      />
                      <button
                        type="button"
                        onClick={() => setDesiredSlideCount(prev => prev + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-[#16191E] border border-[#1E293B] text-white rounded-lg hover:bg-slate-800 transition cursor-pointer font-bold font-mono text-xs"
                      >
                        +
                      </button>
                      
                      {/* Presets */}
                      <div className="flex items-center gap-1 pl-2">
                        {[5, 8, 12, 16].map(num => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setDesiredSlideCount(num)}
                            className={`px-2 py-1 text-[10px] font-mono font-bold rounded transition cursor-pointer ${
                              desiredSlideCount === num
                                ? 'bg-yellow-500 text-black border border-yellow-500'
                                : 'bg-slate-900 text-slate-400 border border-[#1E293B] hover:text-white'
                            }`}
                          >
                            {num}P
                          </button>
                        ))}
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-400 font-mono leading-relaxed">
                      Defina qualquer quantidade de páginas para seu plano de treinamento. Caso exceda o padrão, slides estruturados adicionais de conformidade serão gerados dinamicamente.
                    </p>
                  </div>
                )}
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

      {/* POPUP: CUSTOM AI GENERATOR WITH ANY PAGE COUNT FOR AUDITED MODULES */}
      {generatingModule && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#0A0C10]/80 backdrop-blur-xs select-none animate-fadeIn">
          <div 
            className="bg-[#0F1217] w-full max-w-md rounded-xl shadow-2xl border border-[#1E293B] overflow-hidden flex flex-col p-6 relative"
          >
            {/* Top decorative amber line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-500" />

            <div className="flex justify-between items-center border-b border-[#1E293B] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-500" />
                <h3 className="font-bold text-white text-xs uppercase font-mono tracking-wider">
                  Configuração de Geração IA
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setGeneratingModule(null)}
                className="text-slate-400 hover:text-white font-bold transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-sans mb-3">
                  Você está prestes a gerar um circuito oficial de treinamento auditado para o processo real da colchoaria:
                </p>
                <div className="p-3 bg-[#16191E] border border-slate-800 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-1.5 py-0.5 text-[8px] font-mono font-bold uppercase rounded bg-yellow-950 text-yellow-400 border border-yellow-900/30">
                      {generatingModule.phase}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {generatingModule.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-sans">
                    {generatingModule.name}
                  </h4>
                  <p className="text-[10.5px] text-slate-400 mt-1.5 leading-relaxed italic">
                    "{generatingModule.sinopse}"
                  </p>
                </div>
              </div>

              {/* Dynamic slide count control */}
              <div className="p-3.5 bg-slate-900/40 border border-slate-800/80 rounded-lg space-y-2.5">
                <label className="block text-[11px] font-extrabold text-slate-300 uppercase font-mono tracking-widest">
                  Quantidade Desejada de Páginas (Sem restrições):
                </label>
                
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setAuditSlideCount(prev => Math.max(1, prev - 1))}
                    className="w-8 h-8 flex items-center justify-center bg-[#16191E] border border-[#1E293B] text-white rounded-lg hover:bg-slate-800 transition cursor-pointer font-bold font-mono text-xs"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min={1}
                    value={auditSlideCount}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      setAuditSlideCount(isNaN(val) || val < 1 ? 1 : val);
                    }}
                    className="w-16 h-8 text-center bg-[#16191E] border border-[#1E293B] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-bold font-mono text-xs"
                  />
                  <button
                    type="button"
                    onClick={() => setAuditSlideCount(prev => prev + 1)}
                    className="w-8 h-8 flex items-center justify-center bg-[#16191E] border border-[#1E293B] text-white rounded-lg hover:bg-slate-800 transition cursor-pointer font-bold font-mono text-xs"
                  >
                    +
                  </button>

                  {/* Quick Presets inside pop up */}
                  <div className="flex items-center gap-1 pl-2">
                    {[5, 8, 12, 16].map(num => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setAuditSlideCount(num)}
                        className={`px-2 py-1 text-[10px] font-mono font-bold rounded transition cursor-pointer ${
                          auditSlideCount === num
                            ? 'bg-yellow-500 text-black border border-yellow-500'
                            : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                        }`}
                      >
                        {num}P
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-[10px] text-slate-400 font-mono leading-relaxed mt-1">
                  💡 O gerador inteligente adaptará a ementa de conformidade do Industrial OS criando exatamente <span className="text-yellow-400 font-bold">{auditSlideCount} slides</span>, preenchendo-os com layouts adequados sem comprometer a instrução operacional.
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-5 pt-4 border-t border-[#1E293B]">
              <button
                type="button"
                onClick={() => setGeneratingModule(null)}
                className="px-4 py-2 border border-[#1E293B] bg-[#16191E] text-slate-400 hover:text-white rounded-lg font-bold text-xs cursor-pointer transition uppercase font-mono"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  handleGenerateFromAudit(generatingModule, auditSlideCount);
                  setGeneratingModule(null);
                }}
                className="px-5 py-2 bg-yellow-455 hover:bg-yellow-400 text-black font-black rounded-lg text-xs transition shadow-lg shadow-yellow-950/30 cursor-pointer uppercase font-mono flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Gerar {auditSlideCount} Slides
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
