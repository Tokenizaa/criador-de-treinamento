import React, { useState, useEffect } from 'react';
import { Slide, SlideLayout, ListItem } from '../types';
import { 
  Sparkles, ShieldAlert, BadgeInfo, CheckCircle, 
  Layers, Hammer, CheckSquare, ListOrdered, FileText, Check, Heart, Play
} from 'lucide-react';

interface LayoutLibraryProps {
  activeSlideId: string;
  onApplyTemplate: (updatedFields: Partial<Slide>) => void;
  themeStyle?: string;
  themeColor?: string;
}

type TemplateType = 'cover' | 'content' | 'step-by-step' | 'checklist';

interface Preset {
  name: string;
  category: string;
  cover: { title: string; subtitle: string; freeText: string; alertText?: string };
  content: { title: string; subtitle: string; freeText: string; tipText?: string };
  stepByStep: { title: string; subtitle: string; freeText: string; listItems: string[]; highlightText?: string };
  checklist: { title: string; subtitle: string; freeText: string; listItems: string[]; alertText?: string };
}

// Proactive industrial presets using "Process First, Tool Second"
const INDUSTRIAL_PRESETS: Preset[] = [
  {
    name: 'Linha de Solda Robotizada',
    category: 'Produção / Automação',
    cover: {
      title: 'Segurança e Setup de Solda MIG/MAG',
      subtitle: 'Posto de Trabalho Solda-42',
      freeText: 'Módulo de condução mecânica e travamento de giga de soldagem robotizada. Foco no posicionamento correto das blindagens.',
      alertText: 'ATENÇÃO: Óculos de contra-radiação e exaustor de gases locais são obrigatórios antes de alimentar a bancada.'
    },
    content: {
      title: 'Cinemática do Braço de Soldagem',
      subtitle: 'Operação Assistida e Ajustes de Parâmetro',
      freeText: 'PROCESSO: A alimentação de arame deve fluir livremente através do conduite regulado.\nFERRAMENTAS: Maçarico refrigerado a água e calibrador de vazão de gás de proteção (Mistura Argônio/CO2).\n\nDiferente de soldas manuais, o robô monitora a impedância sob arco elétrico. Qualquer atrito no carretel alterará o cordão, gerando porosidade e reprovação imediata na triagem de ultrassom.',
      tipText: 'DICA: Verifique se o bico de contato de cobre está limpo a cada 50 ciclos de soldadura.'
    },
    stepByStep: {
      title: 'Instrução do Ciclo de Soldagem',
      subtitle: 'Sequenciamento Dinâmico de Campo',
      freeText: 'PROCESSO EM 4 ETAPAS:\nSiga rigidamente as ações físicas para evitar colisão do bico e perda do arame.',
      listItems: [
        'Inspeção da mesa: Limpar escória anterior e acoplar a chapa de aço-carbono no gabarito.',
        'Fechamento mecânico: Travar as três grampas manuais de fixação lateral.',
        'Sinalização de barreira: Recuar atrás da faixa de segurança amarela.',
        'Acionamento assistido: Confirmar reset na botoeira física de comando de barreira.'
      ],
      highlightText: 'ALERTA DE SEGURANÇA: Nunca sabote o sensor óptico de barreira para agilizar o ciclo!'
    },
    checklist: {
      title: 'Checklist de Setup de Segurança e Solda',
      subtitle: 'Conformidade de Pré-Partida Física',
      freeText: 'VERIFICAÇÕES ANTES DA LIBERAÇÃO DE ENERGIA:\nO processo de fusão requer estrita obediência de blindagem.',
      listItems: [
        'O exaustor principal está ligado e gerando fluxo de ar estável (~1.2 m/s)?',
        'As cortinas vermelhas anti-UV circundam 100% da cabine de solda?',
        'O bico difusor está sem impregnação de respingo de metal líquido?',
        'O nível da mistura protetora nos cilindros aponta mais de 50 bar?'
      ],
      alertText: 'CRÍTICO: Parar produção se o fluxo do exaustor acusar falha visual no painel.'
    }
  },
  {
    name: 'Setup de Prensa Hidráulica (SMED)',
    category: 'Manutenção Preditiva',
    cover: {
      title: 'Troca Rápida de Estamparia de Prensa',
      subtitle: 'Metodologia Setup SMED Interno',
      freeText: 'Instruções para redução de parada mecânica na prensa de 400 toneladas. Foco na organização de ferramentas auxiliares.',
      alertText: 'RISCO CRÍTICO: Bloqueio LOTO (Cadeados/Etiquetas) é pré-requisito antes de adentrar a gaveta.'
    },
    content: {
      title: 'Sincronização de Bloqueio Mecânico',
      subtitle: 'Mecanismo de Retenção Dinâmica da Chapa',
      freeText: 'PROCESSO: Calibração e prensagem concêntrica sob compressão progressiva.\nFERRAMENTAS: Chave dinamométrica calibrada, parafuso classe 10.9 e calços de paralelismo temperados.\n\nA centralização exata reduz a fadiga de cisalhamento nas guias prismáticas. O operador deve sempre aproximar os calços traseiros para estabelecer o nivelamento exato antes de descer o martelo.',
      tipText: 'O posicionamento correto das ferramentas manuais fora do perímetro da prensa economiza 12 minutos por troca!'
    },
    stepByStep: {
      title: 'Operação de Desmontagem do Estampo',
      subtitle: 'Passos Sequenciais Padronizados',
      freeText: 'PROCESSO DE DESMONTAGEM:\nAção humana coordenada para liberação segura do lote de metal.',
      listItems: [
        'Despressurizar: Retrair o colchão pneumático e descer o martelo de prensagem totalmente.',
        'Ativação de Trava: Passar as duas travas físicas amarelas de retenção de martelo.',
        'Desparafusar: Soltar os parafusos de ancoragem traseiros utilizando a chave pneumática.',
        'Bancada Externa: Sacar o ferramental antigo apoiado sobre os roletes hidráulicos.'
      ],
      highlightText: 'FATOR DE IMPACTO: O aperto irregular dos parafusos de estampa quebra a espiga interna do martelo.'
    },
    checklist: {
      title: 'Inspeção Pró-Ativa de Setup Estampo',
      subtitle: 'Checklist de Integridade Operacional',
      freeText: 'MENSURAÇÕES FINAIS DE SEGURANÇA E ALINHAMENTO:',
      listItems: [
        'As travas mecânicas pneumáticas de segurança acoplaram com sucesso no gabarito?',
        'O torque final de aperto aponta 240 Nm nas conexões em estrela?',
        'A mangueira reguladora de óleo hidráulico apresenta vazamento visível?',
        'A cortina de segurança fotoelétrica desliga a prensa de forma imediata ao ser interrompida?'
      ],
      alertText: 'NUNCA ligue a bomba hidráulica com ferramentas soltas sobre a mesa.'
    }
  },
  {
    name: 'Logística de Armazenamento e FIFO',
    category: 'Estoque / Fluxo de Linha',
    cover: {
      title: 'Rastreabilidade de Peças e Gestão FIFO',
      subtitle: 'Posto de Separação de Matéria-Prima',
      freeText: 'Instruções de conduta para recebimento físico, segregação de paletes e armazenamento ordenado para evitar vencimento de componentes.',
    },
    content: {
      title: 'Dinâmica de Fluxo de Prateleira Dinâmica',
      subtitle: 'Alimentação Direta do Chassi de Montagem',
      freeText: 'PROCESSO: Abastecimento de paletes em calhas rolantes gravitacionais.\nFERRAMENTAS: Coletor WMS de radiofrequência e Etiquetas Inteligentes de Cor Color-Coded.\n\nO sistema físico opera por gravidade: você alimenta por trás e a linha puxa pela frente. É proibido atravessar material novo pela parte frontal, pois isso viola o fluxo First-In First-Out (FIFO), gerando obsolescência.',
      tipText: 'A etiqueta vermelha identifica lotes com vencimento menor que 7 dias.'
    },
    stepByStep: {
      title: 'Processo de Entrada e Triagem Kanban',
      subtitle: 'Fluxograma de Abastecimento Produtivo',
      freeText: 'PROCESSO DE COLETA E VALIDAÇÃO:',
      listItems: [
        'Leitura Óptica: Escanear o código QR do lote para carregar no sistema WMS.',
        'Validação Visual: Confrontar o código da etiqueta com a gravação no chassi físico.',
        'Movimentação: Deslocar o material até a pista gravitacional utilizando o carrinho rebocador.',
        'Ordenação FIFO: Depositar na calha pelo lado traseiro de alimentação de estantes.'
      ],
      highlightText: 'MÉTRICA CRÍTICA: Manter o tempo de descarregamento abaixo de 8 minutos por palete de alumínio.'
    },
    checklist: {
      title: 'Checklist de Posto de Estoque e Calha',
      subtitle: 'Verificações Gerais Pré-Operação',
      freeText: 'VERIFICAÇÕES FÍSICAS DE ESTOQUE:',
      listItems: [
        'As pistas gravitacionais correm livres sem emperramento físico dos roletes?',
        'Todos os lotes possuem a etiqueta de cor de controle mensal visível?',
        'O leitor de coletor WMS está conectado ao wi-fi da fábrica?',
        'O corredor de tráfego de empilhadeiras possui 100% de desobstrução física?'
      ],
      alertText: 'IMPORTANTE: Proibido depositar paletes diretamente no chão do corredor de circulação.'
    }
  }
];

export default function LayoutLibrary({
  activeSlideId,
  onApplyTemplate,
  themeStyle,
  themeColor
}: LayoutLibraryProps) {
  const [activeTab, setActiveTab] = useState<TemplateType>('cover');
  const [selectedPresetIndex, setSelectedPresetIndex] = useState<number>(0);
  
  // States representing the pre-structured forms
  const [processTitle, setProcessTitle] = useState('');
  const [processSubtitle, setProcessSubtitle] = useState('');
  const [processDescription, setProcessDescription] = useState('');
  
  // Custom inputs according to TemplateType and "Process first, Tool second"
  const [toolName, setToolName] = useState('');
  const [conceptBody, setConceptBody] = useState('');
  
  const [steps, setSteps] = useState<string[]>([]);
  const [stepDraft, setStepDraft] = useState('');
  
  const [checklistItems, setChecklistItems] = useState<string[]>([]);
  const [checkDraft, setCheckDraft] = useState('');
  
  // Standard context decorations
  const [alertText, setAlertText] = useState('');
  const [tipText, setTipText] = useState('');
  const [highlightText, setHighlightText] = useState('');

  // Load selected preset data into the state forms when activeTab or activePreset changes
  useEffect(() => {
    const preset = INDUSTRIAL_PRESETS[selectedPresetIndex];
    if (!preset) return;

    if (activeTab === 'cover') {
      setProcessTitle(preset.cover.title);
      setProcessSubtitle(preset.cover.subtitle);
      setProcessDescription(preset.cover.freeText);
      setAlertText(preset.cover.alertText || '');
      setTipText('');
      setHighlightText('');
    } else if (activeTab === 'content') {
      setProcessTitle(preset.content.title);
      setProcessSubtitle(preset.content.subtitle);
      // Content body contains specialized Process / Tool structure
      setProcessDescription(preset.content.freeText);
      setToolName('Válvula de Barreira Pneumática / Paquímetro de Ajuste');
      setConceptBody('Siga as calibrações padrão conforme os testes hidrostáticos de barreira.');
      setAlertText('');
      setTipText(preset.content.tipText || '');
      setHighlightText('');
    } else if (activeTab === 'step-by-step') {
      setProcessTitle(preset.stepByStep.title);
      setProcessSubtitle(preset.stepByStep.subtitle);
      setProcessDescription(preset.stepByStep.freeText);
      setSteps(preset.stepByStep.listItems);
      setAlertText('');
      setTipText('');
      setHighlightText(preset.stepByStep.highlightText || '');
    } else if (activeTab === 'checklist') {
      setProcessTitle(preset.checklist.title);
      setProcessSubtitle(preset.checklist.subtitle);
      setProcessDescription(preset.checklist.freeText);
      setChecklistItems(preset.checklist.listItems);
      setAlertText(preset.checklist.alertText || '');
      setTipText('');
      setHighlightText('');
    }
  }, [activeTab, selectedPresetIndex]);

  // Handle manual steps addition
  const handleAddStep = () => {
    if (!stepDraft.trim()) return;
    setSteps([...steps, stepDraft.trim()]);
    setStepDraft('');
  };

  const handleRemoveStep = (idx: number) => {
    setSteps(steps.filter((_, i) => i !== idx));
  };

  // Handle manual checklists addition
  const handleAddCheck = () => {
    if (!checkDraft.trim()) return;
    setChecklistItems([...checklistItems, checkDraft.trim()]);
    setCheckDraft('');
  };

  const handleRemoveCheck = (idx: number) => {
    setChecklistItems(checklistItems.filter((_, i) => i !== idx));
  };

  // Inject current configuration dynamically into the parent active slide
  const handleInject = () => {
    if (!activeSlideId) return;

    let slidePayload: Partial<Slide> = {
      layout: activeTab,
      title: processTitle.trim() || 'Sem Título',
      subtitle: processSubtitle.trim() || 'Rótulo industrial',
      freeText: processDescription.trim(),
      alertText: alertText.trim() || undefined,
      tipText: tipText.trim() || undefined,
      highlightText: highlightText.trim() || undefined,
    };

    if (activeTab === 'step-by-step') {
      slidePayload.listItems = steps.map((st, i) => ({
        id: `step-${Date.now()}-${i}`,
        text: st
      }));
    } else if (activeTab === 'checklist') {
      slidePayload.listItems = checklistItems.map((ch, i) => ({
        id: `chk-${Date.now()}-${i}`,
        text: ch,
        checked: false
      }));
    } else {
      slidePayload.listItems = [];
    }

    onApplyTemplate(slidePayload);
  };

  return (
    <div className="bg-[#111318] border border-[#1E293B] rounded-xl overflow-hidden p-4 space-y-4">
      {/* Header with high contrast and icon */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#1E293B]/80 pb-3 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
          </div>
          <div>
            <h4 className="text-xs font-black font-mono uppercase tracking-wider text-white">
              BIBLIOTECA DE LAYOUTS INDUSTRIAL OS
            </h4>
            <p className="text-[10px] text-slate-400">
              Método Pragmático: Processo Físico Primeiro ➔ Equipamentos Depois
            </p>
          </div>
        </div>
        
        {/* Presets dropdown to quickly fill standard templates */}
        <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto">
          <span className="text-[9px] font-mono uppercase text-slate-500 font-bold">PRESETS DE PROCESSO:</span>
          <select
            value={selectedPresetIndex}
            onChange={(e) => setSelectedPresetIndex(Number(e.target.value))}
            className="px-2 py-1 bg-[#161922] border border-[#1E293B] text-slate-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 font-semibold cursor-pointer"
          >
            {INDUSTRIAL_PRESETS.map((p, idx) => (
              <option key={p.name} value={idx}>{p.name} ({p.category})</option>
            ))}
          </select>
        </div>
      </div>

      {/* Philosophy guide alert box */}
      <div className="bg-slate-900/60 border border-[#1E293B]/60 p-2.5 rounded-lg flex items-start gap-2 text-[10px] text-slate-350 select-none">
        <BadgeInfo className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
        <div className="leading-normal">
          <strong className="text-blue-400 font-mono text-[9px] uppercase block mb-0.5">FILOSOFIA INDUSTRIAL OS: PROCESS OVER TOOL</strong>
          No ambiente laboroso de chão de fábrica, operadores não querem larping de software. Eles precisam entender a **ação física exata** para obter o resultado operacional, e somente então saber com qual ferramenta fazê-lo. Nossos templates já vêm estruturados desse modo.
        </div>
      </div>

      {/* Tabs list for selection (Capa, Conteúdo, Passo a Passo, Checklist) */}
      <div className="grid grid-cols-4 gap-1.5 p-1 bg-[#0A0D14] rounded-lg border border-[#1E293B]/40 select-none">
        {(['cover', 'content', 'step-by-step', 'checklist'] as TemplateType[]).map((tab) => {
          const isActive = activeTab === tab;
          let label = '';
          let Icon = FileText;
          if (tab === 'cover') { label = '📌 Capa'; Icon = ChaptersIcon; }
          else if (tab === 'content') { label = '📝 Conteúdo'; Icon = FileText; }
          else if (tab === 'step-by-step') { label = '🪜 Passo a Passo'; Icon = ListOrdered; }
          else if (tab === 'checklist') { label = '✅ Checklist'; Icon = CheckSquare; }

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`py-2 text-[10px] font-bold font-mono uppercase rounded-md transition flex flex-col sm:flex-row items-center justify-center gap-1 cursor-pointer truncate ${
                isActive 
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40 shadow-sm' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40 border border-transparent'
              }`}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Form Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Column 1: Core Fields (Process Title, Subtitle, Supporting description) */}
        <div className="space-y-3 bg-[#0A0D14]/50 p-3 rounded-lg border border-[#1E293B]/40">
          <span className="text-[9px] font-bold font-mono tracking-wider text-slate-500 uppercase block mb-1">
            CAMPO DINÂMICO ➔ PROCESSO PRIMÁRIO
          </span>

          <div>
            <label className="block text-[9px] font-mono text-slate-400 uppercase mb-0.5">Título do Posto / Missão</label>
            <input
              type="text"
              value={processTitle}
              onChange={(e) => setProcessTitle(e.target.value)}
              className="w-full px-2.5 py-1.5 border border-[#1E293B] rounded bg-[#161922] text-white text-xs font-semibold focus:ring-1 focus:ring-blue-500"
              placeholder="Ex. Setup de Prensa de Repuxo"
            />
          </div>

          <div>
            <label className="block text-[9px] font-mono text-slate-400 uppercase mb-0.5">Subtítulo / Área de Trabalho / Equipamento</label>
            <input
              type="text"
              value={processSubtitle}
              onChange={(e) => setProcessSubtitle(e.target.value)}
              className="w-full px-2.5 py-1.5 border border-[#1E293B] rounded bg-[#161922] text-white text-xs font-semibold focus:ring-1 focus:ring-blue-500"
              placeholder="Ex. Posto de Operação 03 - Estamparia"
            />
          </div>

          <div>
            <label className="block text-[9px] font-mono text-slate-400 uppercase mb-0.5">
              {activeTab === 'cover' ? 'Descritivo Completo de Instrução' : 'Ação Física do Processo (O que Fazer)'}
            </label>
            <textarea
              value={processDescription}
              onChange={(e) => setProcessDescription(e.target.value)}
              rows={4}
              className="w-full px-2.5 py-1.5 border border-[#1E293B] rounded bg-[#161922] text-slate-200 text-xs font-medium focus:ring-1 focus:ring-blue-550 leading-relaxed font-sans"
              placeholder="Descreva minuciosamente o processo do operador, focando nos movimentos corporais e decisões de chão de fábrica."
            />
          </div>
        </div>

        {/* Column 2: Secondary Content (Tools description & bullet/checklist points injection) */}
        <div className="space-y-3 bg-[#0A0D14]/50 p-3 rounded-lg border border-[#1E293B]/40 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-[9px] font-bold font-mono tracking-wider text-slate-500 uppercase block mb-1">
              {activeTab === 'step-by-step' ? 'SEQUÊNCIA DE PASSOS DO PROCESSO' : 
               activeTab === 'checklist' ? 'ITENS OPERACIONAIS DE CONFORMIDADE' : 
               'EQUIPAMENTOS, SEGURANÇA E ACESSÓRIOS'}
            </span>

            {/* Template-dependent Fields Rendering */}
            {activeTab === 'cover' && (
              <div className="space-y-2.5">
                <div className="p-2 border border-red-950/40 bg-red-950/10 rounded-lg">
                  <label className="block text-[9px] font-mono text-red-400 uppercase mb-0.5">Alerta Crítico Associado (Se houver)</label>
                  <input
                    type="text"
                    value={alertText}
                    onChange={(e) => setAlertText(e.target.value)}
                    className="w-full px-2 py-1.5 border border-red-900/40 rounded bg-[#161922] text-red-200 text-[11px]"
                    placeholder="Ex. RISCO: Mantenha as mãos afastadas da prensa em movimento."
                  />
                </div>
                <p className="text-[10px] text-slate-400 italic">
                  O slide de Capa introduz de maneira limpa o operador do treinamento ao circuito, expondo metas e riscos críticos antes de iniciar.
                </p>
              </div>
            )}

            {activeTab === 'content' && (
              <div className="space-y-2">
                <div>
                  <label className="block text-[9px] font-mono text-slate-400 uppercase mb-0.5">Dica Prática de Fixação do Chão de Fábrica</label>
                  <input
                    type="text"
                    value={tipText}
                    onChange={(e) => setTipText(e.target.value)}
                    className="w-full px-2.5 py-1.5 border border-[#1E293B] rounded bg-[#161922] text-slate-200 text-xs"
                    placeholder="Ex. DICA: A leitura do sensor ótico estabiliza em 3 segundos."
                  />
                </div>
                <p className="text-[10px] text-slate-400 leading-normal">
                  No layout de conteúdo, os procedimentos, ferramentas manuais e conceitos técnicos são explicitados e acoplados a imagens/vídeos de suporte físico.
                </p>
              </div>
            )}

            {activeTab === 'step-by-step' && (
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={stepDraft}
                    onChange={(e) => setStepDraft(e.target.value)}
                    className="flex-1 px-2.5 py-1.5 border border-[#1E293B] rounded bg-[#161922] text-slate-200 text-xs"
                    placeholder="Adicionar passo operacional..."
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddStep(); }}}
                  />
                  <button
                    type="button"
                    onClick={handleAddStep}
                    className="px-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs px-2 cursor-pointer font-mono font-bold"
                  >
                    + ADD
                  </button>
                </div>

                <div className="space-y-1 max-h-[120px] overflow-y-auto pr-1">
                  {steps.map((st, idx) => (
                    <div key={idx} className="flex items-center justify-between p-1.5 bg-[#161922] rounded border border-[#1E293B]/50 text-xs">
                      <span className="truncate max-w-[170px] text-slate-300">
                        {idx + 1}. {st}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveStep(idx)}
                        className="text-red-400 hover:text-red-300 font-bold px-1"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  {steps.length === 0 && (
                    <p className="text-[10px] text-slate-500 italic">Cadastre ao menos 3 passos focados no processo.</p>
                  )}
                </div>

                <div>
                  <label className="block text-[9px] font-mono text-purple-400 uppercase mb-0.5">Destaque de Métrica de Impacto</label>
                  <input
                    type="text"
                    value={highlightText}
                    onChange={(e) => setHighlightText(e.target.value)}
                    className="w-full px-2 py-1 border border-[#1E293B] rounded bg-[#161922] text-slate-200 text-xs"
                    placeholder="Ex. META DE CICLO: O resfriamento leva no máx 120 seg."
                  />
                </div>
              </div>
            )}

            {activeTab === 'checklist' && (
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={checkDraft}
                    onChange={(e) => setCheckDraft(e.target.value)}
                    className="flex-1 px-2.5 py-1.5 border border-[#1E293B] rounded bg-[#161922] text-slate-200 text-xs"
                    placeholder="Item de validação de conformidade..."
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddCheck(); }}}
                  />
                  <button
                    type="button"
                    onClick={handleAddCheck}
                    className="px-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs px-2 cursor-pointer font-mono font-bold"
                  >
                    + ADD
                  </button>
                </div>

                <div className="space-y-1 max-h-[120px] overflow-y-auto pr-1">
                  {checklistItems.map((ch, idx) => (
                    <div key={idx} className="flex items-center justify-between p-1.5 bg-[#161922] rounded border border-[#1E293B]/50 text-xs">
                      <span className="truncate max-w-[170px] text-slate-300">
                        ✓ {ch}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveCheck(idx)}
                        className="text-red-400 hover:text-red-300 font-bold px-1"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  {checklistItems.length === 0 && (
                    <p className="text-[10px] text-slate-500 italic">Cadastre ao menos 3 tarefas de verificação.</p>
                  )}
                </div>

                <div>
                  <label className="block text-[9px] font-mono text-red-400 uppercase mb-0.5">Alerta Crítico de Violação</label>
                  <input
                    type="text"
                    value={alertText}
                    onChange={(e) => setAlertText(e.target.value)}
                    className="w-full px-2 py-1 border border-red-950/60 rounded bg-[#161922] text-red-200 text-xs"
                    placeholder="Ex. BLOQUEIO: Parar linha imediatamente se houver fumaça."
                  />
                </div>
              </div>
            )}
          </div>

          {/* Action Trigger Row */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleInject}
              className="w-full py-2 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-extrabold italic rounded-lg text-xs tracking-wider uppercase transition-all shadow-[0_4px_12px_rgba(37,99,235,0.15)] flex items-center justify-center gap-1.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Check className="w-4 h-4 stroke-[3]" /> INJETAR TEMPLATE OPERACIONAL NO SLIDE
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// Simple Helper Icons because Chapters is not built-in usually in lucide-react or differs
function ChaptersIcon(props: any) {
  return (
    <svg 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2.5} 
      stroke="currentColor" 
      className={props.className}
      width="1em"
      height="1em"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  );
}
