import { Presentation, MediaAsset, Category } from './types';

export const CATEGORIES: Category[] = [
  'Visão Geral',
  'Implantação',
  'Cadastros',
  'Produção',
  'Estoque',
  'Qualidade',
  'Treinamentos'
];

export const INITIAL_MEDIA_LIBRARY: MediaAsset[] = [
  {
    id: '1',
    title: 'Painel Geral do Industrial OS',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    category: 'Dashboard'
  },
  {
    id: '2',
    title: 'Linha de Montagem IoT',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    category: 'Produção'
  },
  {
    id: '3',
    title: 'Estoque Avançado FIFO',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    category: 'Estoque'
  },
  {
    id: '4',
    title: 'Estação de Controle de Qualidade',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1581091225303-d2411e28228d?auto=format&fit=crop&w=800&q=80',
    category: 'Qualidade'
  },
  {
    id: '5',
    title: 'Maquinário de Fundição Secundária',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    category: 'Produção'
  },
  {
    id: '6',
    title: 'Vídeo Demonstrativo Operacional',
    type: 'video',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    category: 'Geral'
  },
  {
    id: '7',
    title: 'Vídeo Treinamento Avançado',
    type: 'video',
    url: 'https://www.w3schools.com/html/movie.mp4',
    category: 'Produção'
  },
  {
    id: '8',
    title: 'Dashboard Industrial OS',
    type: 'image',
    url: '/assets/dashboard.png',
    category: 'Industrial OS'
  },
  {
    id: '9',
    title: 'Dashboard Maduro Industrial OS',
    type: 'image',
    url: '/assets/dashboard-mature.png',
    category: 'Industrial OS'
  },
  {
    id: '10',
    title: 'Setores Industrial OS',
    type: 'image',
    url: '/assets/setores.png',
    category: 'Industrial OS'
  },
  {
    id: '11',
    title: 'Apontamentos Industrial OS',
    type: 'image',
    url: '/assets/apontamentos.png',
    category: 'Industrial OS'
  },
  {
    id: '12',
    title: 'Apresentações Industrial OS',
    type: 'image',
    url: '/assets/apresentacoes.png',
    category: 'Industrial OS'
  },
  {
    id: '13',
    title: 'Componentes Industrial OS',
    type: 'image',
    url: '/assets/componentes.png',
    category: 'Industrial OS'
  },
  {
    id: '14',
    title: 'Cronometragem Industrial OS',
    type: 'image',
    url: '/assets/cronometragem.png',
    category: 'Industrial OS'
  },
  {
    id: '15',
    title: 'Ferramentas Industrial OS',
    type: 'image',
    url: '/assets/ferramentas.png',
    category: 'Industrial OS'
  },
  {
    id: '16',
    title: 'Implantação Industrial OS',
    type: 'image',
    url: '/assets/implantacao.png',
    category: 'Industrial OS'
  },
  {
    id: '17',
    title: 'MRP Industrial OS',
    type: 'image',
    url: '/assets/mrp.png',
    category: 'Industrial OS'
  },
  {
    id: '18',
    title: 'Ordens de Produção Industrial OS',
    type: 'image',
    url: '/assets/ordens-producao.png',
    category: 'Industrial OS'
  },
  {
    id: '19',
    title: 'PCP Industrial OS',
    type: 'image',
    url: '/assets/pcp.png',
    category: 'Industrial OS'
  },
  {
    id: '20',
    title: 'Produção em Tempo Real Industrial OS',
    type: 'image',
    url: '/assets/producao-tempo-real.png',
    category: 'Industrial OS'
  },
  {
    id: '21',
    title: 'Produtos Industrial OS',
    type: 'image',
    url: '/assets/produtos.png',
    category: 'Industrial OS'
  }
];

export const INITIAL_PRESENTATIONS: Presentation[] = [
  {
    id: 'pres-1',
    title: 'Conhecendo o Industrial OS',
    description: 'Uma introdução completa sobre o sistema operacional industrial unificado. Cobrindo módulos de manufatura, rastreabilidade e análise de gargalos em tempo real.',
    category: 'Visão Geral',
    createdAt: '2026-06-15T09:00:00Z',
    updatedAt: '2026-06-21T14:30:00Z',
    status: 'Publicado',
    themeColor: 'yellow',
    slides: [
      {
        id: 'slide-1-1',
        title: 'Bem-vindo ao Industrial OS',
        subtitle: 'A Revolução no Chão de Fábrica',
        freeText: 'O Industrial OS é a primeira plataforma de software integrada que centraliza e orquestra todas as camadas produtivas de sua fábrica em tempo real. Desde a matéria-prima até a expedição de produto acabado.',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        iconName: 'Presentation',
        layout: 'hero'
      },
      {
        id: 'slide-1-2',
        title: 'Principais Módulos do Sistema',
        subtitle: 'Operação de Ponta a Ponta',
        freeText: 'Nossa arquitetura modular permite habilitar recursos de forma autônoma de acordo com o ritmo e maturidade digital da sua indústria.',
        iconName: 'Layers',
        layout: 'bullets-only',
        listItems: [
          { id: '1-2-1', text: 'Engenharia & Cadastro: Árvores de produtos (BOM) e roteiros.' },
          { id: '1-2-2', text: 'Planejamento (PCP): Carga de ordens automática e sequenciamento finito.' },
          { id: '1-2-3', text: 'Chão de Fábrica: Apontamentos web e via coletores de código de barras.' },
          { id: '1-2-4', text: 'Estoque Dinâmico: Alocação automática por lote e FIFO.' },
          { id: '1-2-5', text: 'Garantia de Qualidade: Inspeções automáticas integradas às paradas de linha.' }
        ]
      },
      {
        id: 'slide-1-3',
        title: 'Gestão Baseada em Dados em Tempo Real',
        subtitle: 'Dashboard Operacional Consolidado',
        freeText: 'Monitore métricas como OEE (Eficiência Global do Equipamento), disponibilidade física, ritmo de produção e incidência de refugo direto no painel industrial unificado.',
        imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        iconName: 'Activity',
        layout: 'split-image'
      },
      {
        id: 'slide-1-4',
        title: 'Treinamento Prático Operacional',
        subtitle: 'Guia de Operação Básica de Apontamentos',
        freeText: 'Assista ao vídeo abaixo para compreender a jornada típica de um operador ao realizar a abertura e apontamento de produção usando o terminal de borda do Industrial OS.',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        iconName: 'Video',
        layout: 'split-video'
      },
      {
        id: 'slide-1-5',
        title: 'Checklist de Sucesso',
        subtitle: 'Pronto para começar',
        freeText: 'Siga estas etapas para testar sua implantação inicial com a equipe piloto no seu primeiro posto produtivo.',
        iconName: 'ShieldCheck',
        layout: 'bullets-only',
        listItems: [
          { id: '1-5-1', text: 'Verificar conexão estável dos terminais coletores de dados' },
          { id: '1-5-2', text: 'Realizar o login dos operadores com CPF e senha na interface web' },
          { id: '1-5-3', text: 'Fazer o primeiro apontamento teste de entrada e de parada programada' },
          { id: '1-5-4', text: 'Validar se os dados sincronizaram no painel central do gerente industrial' }
        ]
      }
    ]
  },
  {
    id: 'pres-2',
    title: 'Configuração Inicial da Fábrica',
    description: 'Passo a passo para modelar a estrutura organizacional da sua fábrica dentro do Industrial OS: postos de trabalho, centros de custo e roteiros produtivos.',
    category: 'Implantação',
    createdAt: '2026-06-18T14:15:00Z',
    updatedAt: '2026-06-21T10:00:00Z',
    status: 'Em Revisão',
    themeColor: 'green',
    slides: [
      {
        id: 'slide-2-1',
        title: 'Modelando sua Fábrica',
        subtitle: 'Gêmeo Digital de Produção',
        freeText: 'A primeira fase da implantação envolve mapear as entidades físicas reais para as correspondentes lógicas dentro do Industrial OS. Isso garante que os cálculos de capacidade operem adequadamente.',
        imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
        iconName: 'Database',
        layout: 'split-image'
      },
      {
        id: 'slide-2-2',
        title: 'Estruturação de Postos de Trabalho',
        subtitle: 'Postos de Trabalho e Recursos',
        freeText: 'Cadastre suas injetoras, prensas ou células de montagem manual. Certifique-se de associar cada posto a um Setor Produtivo e definir sua capacidade horária.',
        iconName: 'Cog',
        layout: 'bullets-only',
        listItems: [
          { id: '2-2-1', text: 'Navegar até Menu > Cadastros Básicos > Postos de Trabalho' },
          { id: '2-2-2', text: 'Preencher o código único, tag e descrição operacional do equipamento' },
          { id: '2-2-3', text: 'Adicionar a eficiência padrão estimada (ex: 85%) para o motor de sequenciamento' }
        ]
      },
      {
        id: 'slide-2-3',
        title: 'Roteiros de Fabricação',
        subtitle: 'Sequenciando as Etapas Físicas',
        freeText: 'O roteiro define o caminho obrigatório que a matéria-prima percorre para virar produto. Indique os tempos padrão de Configuração (Setup) e tempo de Ciclo Unitário de Processo.',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        iconName: 'Workflow',
        layout: 'hero'
      },
      {
        id: 'slide-2-4',
        title: 'Treinamento Prático de Setup',
        subtitle: 'Como ajustar tempos de troca de molde',
        freeText: 'Neste treinamento em vídeo, demonstramos a tela de engenharia de ciclo e como preencher matriz de setup cruzado.',
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
        iconName: 'Video',
        layout: 'split-video'
      },
      {
        id: 'slide-2-5',
        title: 'Padrão Homologado',
        subtitle: 'Verificação Final das Rotas',
        freeText: 'Antes de liberar os apontamentos em produção viva, certifique-se de que os cadastros foram validados pelos analistas de processos corporativos.',
        iconName: 'CheckCircle',
        layout: 'bullets-only',
        listItems: [
          { id: '2-5-1', text: 'Revisão da lista de peças de reposição críticas e setups na engenharia' },
          { id: '2-5-2', text: 'Aprovação formal do fluxo pelo engenheiro industrial corporativo' },
          { id: '2-5-3', text: 'Treinamento piloto entregue a todos os líderes de turno cadastrados' }
        ]
      }
    ]
  },
  {
    id: 'pres-3',
    title: 'Cadastro de Produtos e Insumos',
    description: 'Guia de preenchimento de cadastros de itens, lista de materiais (BOM) e parametrização de estoques mínimos e lote econômico no Industrial OS.',
    category: 'Cadastros',
    createdAt: '2026-06-19T10:30:00Z',
    updatedAt: '2026-06-19T11:45:00Z',
    status: 'Rascunho',
    themeColor: 'red',
    slides: [
      {
        id: 'slide-3-1',
        title: 'Cadastro Unificado de Produtos',
        subtitle: 'Integridade de Dados Industriais',
        freeText: 'Um cadastro de produto preciso evita erros graves em compras de insumos, gargalos de estoque e retrabalho na linha produtiva. O Industrial OS suporta variações por SKU e números de lote individuais.',
        imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        iconName: 'Package',
        layout: 'split-image'
      },
      {
        id: 'slide-3-2',
        title: 'Criando a Lista de Materiais (BOM)',
        subtitle: 'A Árvore de Engenharia',
        freeText: 'A Bill of Materials (BOM) estabelece as quantidades exatas de matérias-primas e subconjuntos requeridos para a fabricação de uma única unidade de produto final.',
        iconName: 'Layers',
        layout: 'bullets-only',
        listItems: [
          { id: '3-2-1', text: 'Adicionar componentes filhos especificando a quantidade exata com unidades (g, kg, m)' },
          { id: '3-2-2', text: 'Estipular a taxa de perda técnica tolerada (Ex: 2% em bobinas plásticas)' },
          { id: '3-2-3', text: 'Definir itens alternativos permitidos para compras ou substituição de emergência' }
        ]
      },
      {
        id: 'slide-3-3',
        title: 'Armazenamento e Endereçamento',
        subtitle: 'Onde estocar produtos?',
        freeText: 'Mapeie as prateleiras e estantes da sua fábrica usando nosso padrão de endereçamento alfanumérico para controle 100% à prova de falhas.',
        imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        iconName: 'Database',
        layout: 'hero'
      },
      {
        id: 'slide-3-4',
        title: 'Demonstração de Inventário',
        subtitle: 'Procedimento Prático no Industrial OS',
        freeText: 'O vídeo curto abaixo orienta sobre o processo mensal de contagem física de estoque rotativo direto no terminal de coletor.',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        iconName: 'Video',
        layout: 'split-video'
      },
      {
        id: 'slide-3-5',
        title: 'Checklist de Parametrização',
        subtitle: 'Parâmetros Mandatórios do Item',
        freeText: 'Revise estes campos cruciais antes de salvar o produto no cadastro central.',
        iconName: 'ShieldCheck',
        layout: 'bullets-only',
        listItems: [
          { id: '3-5-1', text: 'Unidade de medida de controle de estoque parametrizada' },
          { id: '3-5-2', text: 'Tipo de estoque por lote obrigatório habilitado para segurança alimentar' },
          { id: '3-5-3', text: 'Configuração do lead time de fabricação ou compra de fornecedor' },
          { id: '3-5-4', text: 'Ponto de reposição automática de compras preenchida' }
        ]
      }
    ]
  },
  {
    id: 'pres-4',
    title: 'Fundamentos do Chão de Fábrica para o Industrial OS',
    description: 'Treinamento completo de 22 módulos ensinando os fundamentos da Engenharia de Produção aplicados a uma fábrica de colchões e como o Industrial OS representa cada etapa.',
    category: 'Treinamentos',
    createdAt: '2026-06-26T10:00:00Z',
    updatedAt: '2026-06-26T10:00:00Z',
    status: 'Rascunho',
    themeColor: 'cyan',
    slides: [
      {
        id: 'slide-4-1',
        title: 'Fundamentos do Chão de Fábrica para o Industrial OS',
        subtitle: 'Treinamento completo em 22 módulos',
        freeText: 'Este treinamento ensina os fundamentos da Engenharia de Produção aplicados a uma fábrica de colchões. O objetivo é fazer você compreender como uma fábrica funciona e como cada informação cadastrada influencia os processos produtivos, indicadores e análises realizadas pelo Copilot.',
        iconName: 'Presentation',
        layout: 'hero'
      },
      {
        id: 'slide-4-2',
        title: 'Módulo 1: Conhecendo a Fábrica',
        subtitle: 'Estrutura física de uma indústria',
        freeText: 'Apresentar a estrutura física de uma indústria. Tudo começa pela estrutura física.',
        iconName: 'Building',
        layout: 'bullets-only',
        listItems: [
          { id: '4-2-1', text: 'Empresa - Organização que possui e opera a fábrica.' },
          { id: '4-2-2', text: 'Unidade - Local físico onde a produção acontece (matriz ou filial).' },
          { id: '4-2-3', text: 'Galpões - Áreas de produção e armazenamento.' },
          { id: '4-2-4', text: 'Escritórios - Áreas administrativas e gestão.' }
        ]
      },
      {
        id: 'slide-4-2b',
        title: 'Módulo 1: Conhecendo a Fábrica',
        subtitle: 'Áreas operacionais',
        freeText: 'As áreas operacionais definem os fluxos de materiais e produtos.',
        iconName: 'LayoutGrid',
        layout: 'bullets-only',
        listItems: [
          { id: '4-2-5', text: 'Docas - Áreas de recebimento e expedição.' },
          { id: '4-2-6', text: 'Almoxarifados - Armazenamento de materiais e ferramentas.' },
          { id: '4-2-7', text: 'Recebimento - Entrada de matérias-primas.' },
          { id: '4-2-8', text: 'Expedição - Saída de produtos acabados.' }
        ]
      },
      {
        id: 'slide-4-3',
        title: 'Módulo 2: Layout Industrial',
        subtitle: 'Fluxo físico da fábrica',
        freeText: 'Uma fábrica possui um fluxo físico que influencia movimentação, produtividade, gargalos, perdas e rastreabilidade.',
        iconName: 'ArrowRight',
        layout: 'bullets-only',
        listItems: [
          { id: '4-3-1', text: 'Recebimento - Matérias-primas chegam na fábrica.' },
          { id: '4-3-2', text: 'Estoque - Materiais são armazenados até serem usados.' },
          { id: '4-3-3', text: 'Corte - Materiais são cortados nas dimensões necessárias.' },
          { id: '4-3-4', text: 'Montagem - Componentes são unidos para formar o produto.' }
        ]
      },
      {
        id: 'slide-4-3b',
        title: 'Módulo 2: Layout Industrial',
        subtitle: 'Fluxo físico continuado',
        freeText: 'O fluxo continua pelas etapas de acabamento até a expedição.',
        iconName: 'ArrowRight',
        layout: 'bullets-only',
        listItems: [
          { id: '4-3-5', text: 'Costura - Costura de tecidos e acabamentos.' },
          { id: '4-3-6', text: 'Acabamento - Finalização e acabamento do produto.' },
          { id: '4-3-7', text: 'Inspeção - Verificação de qualidade do produto.' },
          { id: '4-3-8', text: 'Embalagem - Produto é protegido para transporte.' }
        ]
      },
      {
        id: 'slide-4-3c',
        title: 'Módulo 2: Layout Industrial',
        subtitle: 'Impacto do layout',
        freeText: 'O layout influencia diretamente a eficiência da operação.',
        iconName: 'Activity',
        layout: 'bullets-only',
        listItems: [
          { id: '4-3-9', text: 'Movimentação - Distâncias percorridas pelos materiais.' },
          { id: '4-3-10', text: 'Produtividade - Tempo de ciclo entre operações.' },
          { id: '4-3-11', text: 'Gargalos - Pontos de congestionamento no fluxo.' },
          { id: '4-3-12', text: 'Rastreabilidade - Capacidade de acompanhar o produto.' }
        ]
      },
      {
        id: 'slide-4-4',
        title: 'Módulo 3: Setores',
        subtitle: 'Áreas funcionais da fábrica',
        freeText: 'Setores são áreas divididas por função dentro da fábrica.',
        imageUrl: '/assets/setores.png',
        iconName: 'LayoutGrid',
        layout: 'hero'
      },
      {
        id: 'slide-4-4b',
        title: 'Módulo 3: Setores',
        subtitle: 'Tipos de setores',
        freeText: 'Cada setor tem uma função específica na operação.',
        iconName: 'Layers',
        layout: 'bullets-only',
        listItems: [
          { id: '4-4-1', text: 'Produção - Áreas onde a transformação acontece.' },
          { id: '4-4-2', text: 'PCP - Planejamento e Controle da Produção.' },
          { id: '4-4-3', text: 'Qualidade - Verificação e controle de qualidade.' },
          { id: '4-4-4', text: 'Compras - Aquisição de materiais e serviços.' }
        ]
      },
      {
        id: 'slide-4-4c',
        title: 'Módulo 3: Setores',
        subtitle: 'Setores de apoio',
        freeText: 'Setores de apoio são essenciais para a operação contínua.',
        iconName: 'Settings',
        layout: 'bullets-only',
        listItems: [
          { id: '4-4-5', text: 'Almoxarifado - Armazenamento de materiais e ferramentas.' },
          { id: '4-4-6', text: 'Manutenção - Conservação de máquinas e equipamentos.' },
          { id: '4-4-7', text: 'Expedição - Preparação e envio de produtos.' },
          { id: '4-4-8', text: 'Recebimento - Entrada e controle de matérias-primas.' }
        ]
      },
      {
        id: 'slide-4-5',
        title: 'Módulo 4: Centros de Trabalho',
        subtitle: 'Hierarquia de organização',
        freeText: 'O setor não produz. Quem produz são os Centros de Trabalho.',
        iconName: 'Layers',
        layout: 'bullets-only',
        listItems: [
          { id: '4-5-1', text: 'Setor - Área física organizada.' },
          { id: '4-5-2', text: 'Centro de Trabalho - Agrupamento lógico de recursos.' },
          { id: '4-5-3', text: 'Máquinas - Equipamentos que realizam operações.' },
          { id: '4-5-4', text: 'Capacidade - Produção possível por centro.' }
        ]
      },
      {
        id: 'slide-4-5b',
        title: 'Módulo 4: Centros de Trabalho',
        subtitle: 'Exemplo prático',
        freeText: 'Exemplo de organização dentro de um setor de costura.',
        iconName: 'Cog',
        layout: 'bullets-only',
        listItems: [
          { id: '4-5-5', text: 'Setor Costura - Área física de costura.' },
          { id: '4-5-6', text: 'Máquina 1 - Costura reta.' },
          { id: '4-5-7', text: 'Máquina 2 - Overlock.' },
          { id: '4-5-8', text: 'Máquina 3 - Quilting.' }
        ]
      },
      {
        id: 'slide-4-5c',
        title: 'Módulo 4: Centros de Trabalho',
        subtitle: 'Métricas de controle',
        freeText: 'Centros de trabalho são monitorados por métricas de desempenho.',
        iconName: 'Activity',
        layout: 'bullets-only',
        listItems: [
          { id: '4-5-9', text: 'Capacidade - Produção máxima possível.' },
          { id: '4-5-10', text: 'Fila - Ordens aguardando processamento.' },
          { id: '4-5-11', text: 'Ocupação - Percentual de utilização.' },
          { id: '4-5-12', text: 'Disponibilidade - Tempo disponível para produção.' }
        ]
      },
      {
        id: 'slide-4-6',
        title: 'Módulo 5: Máquinas',
        subtitle: 'Equipamentos de produção',
        freeText: 'Máquinas típicas de uma fábrica de colchões por tipo de operação.',
        iconName: 'Cog',
        layout: 'bullets-only',
        listItems: [
          { id: '4-6-1', text: 'Corte - Serra Vertical, Serra Horizontal, CNC.' },
          { id: '4-6-2', text: 'Costura - Reta, Overlock, Quilting.' },
          { id: '4-6-3', text: 'Montagem - Mesas, Prensas.' },
          { id: '4-6-4', text: 'Embalagem - Seladora, Roll Pack, Prensa.' }
        ]
      },
      {
        id: 'slide-4-6b',
        title: 'Módulo 5: Máquinas',
        subtitle: 'Equipamentos de apoio',
        freeText: 'Equipamentos auxiliares essenciais para a produção.',
        iconName: 'Settings',
        layout: 'bullets-only',
        listItems: [
          { id: '4-6-5', text: 'Colagem - Cabines, Compressores.' },
          { id: '4-6-6', text: 'Movimentação - Empilhadeiras, Paleteiras.' },
          { id: '4-6-7', text: 'Vida útil - Tempo de operação esperado.' },
          { id: '4-6-8', text: 'Produção/hora - Capacidade por máquina.' }
        ]
      },
      {
        id: 'slide-4-7',
        title: 'Módulo 6: Equipamentos',
        subtitle: 'Diferença entre máquina e equipamento',
        freeText: 'Equipamentos são recursos auxiliares que suportam a produção.',
        iconName: 'Settings',
        layout: 'bullets-only',
        listItems: [
          { id: '4-7-1', text: 'Compressores - Suprimento de ar comprimido.' },
          { id: '4-7-2', text: 'Geradores - Energia de emergência.' },
          { id: '4-7-3', text: 'Exaustores - Ventilação e extração.' },
          { id: '4-7-4', text: 'Balanças - Pesagem de materiais.' }
        ]
      },
      {
        id: 'slide-4-7b',
        title: 'Módulo 6: Equipamentos',
        subtitle: 'Equipamentos de tecnologia',
        freeText: 'Equipamentos tecnológicos para controle e registro.',
        iconName: 'Computer',
        layout: 'bullets-only',
        listItems: [
          { id: '4-7-5', text: 'Computadores - Controle e gestão.' },
          { id: '4-7-6', text: 'Coletores - Coleta de dados.' },
          { id: '4-7-7', text: 'Impressoras - Etiquetas e documentos.' },
          { id: '4-7-8', text: 'Sensores - Monitoramento automático.' }
        ]
      },
      {
        id: 'slide-4-8',
        title: 'Módulo 7: Ferramentas',
        subtitle: 'Ferramentas utilizadas pelos operadores',
        freeText: 'Ferramentas são instrumentos manuais usados na execução das operações.',
        imageUrl: '/assets/ferramentas.png',
        iconName: 'Wrench',
        layout: 'hero'
      },
      {
        id: 'slide-4-8b',
        title: 'Módulo 7: Ferramentas',
        subtitle: 'Tipos de ferramentas',
        freeText: 'Exemplos de ferramentas comuns em fábrica de colchões.',
        iconName: 'Scissors',
        layout: 'bullets-only',
        listItems: [
          { id: '4-8-1', text: 'Tesouras - Corte de tecidos e materiais.' },
          { id: '4-8-2', text: 'Estiletes - Corte preciso de espumas.' },
          { id: '4-8-3', text: 'Trenas - Medição e marcação.' },
          { id: '4-8-4', text: 'Esquadros - Alinhamento e medição.' }
        ]
      },
      {
        id: 'slide-4-8c',
        title: 'Módulo 7: Ferramentas',
        subtitle: 'Ferramentas de montagem',
        freeText: 'Ferramentas utilizadas na montagem e acabamento.',
        iconName: 'Hammer',
        layout: 'bullets-only',
        listItems: [
          { id: '4-8-5', text: 'Pistolas - Aplicação de cola e adesivos.' },
          { id: '4-8-6', text: 'Grampeadores - Fixação de componentes.' },
          { id: '4-8-7', text: 'Alicates - Corte e fixação de arames.' },
          { id: '4-8-8', text: 'Chaves - Ajuste de máquinas e equipamentos.' }
        ]
      },
      {
        id: 'slide-4-9',
        title: 'Módulo 8: Pessoas',
        subtitle: 'Estrutura organizacional',
        freeText: 'A estrutura organizacional define a hierarquia e funções na fábrica.',
        iconName: 'Users',
        layout: 'bullets-only',
        listItems: [
          { id: '4-9-1', text: 'Operador - Executa operações de produção.' },
          { id: '4-9-2', text: 'Líder - Coordena equipe de operadores.' },
          { id: '4-9-3', text: 'Supervisor - Gerencia múltiplas equipes.' },
          { id: '4-9-4', text: 'Gerente - Responsável pela unidade ou setor.' }
        ]
      },
      {
        id: 'slide-4-9b',
        title: 'Módulo 8: Pessoas',
        subtitle: 'Funções especializadas',
        freeText: 'Funções especializadas suportam a operação.',
        iconName: 'Briefcase',
        layout: 'bullets-only',
        listItems: [
          { id: '4-9-5', text: 'PCP - Planejamento e Controle da Produção.' },
          { id: '4-9-6', text: 'Qualidade - Inspeção e controle de qualidade.' },
          { id: '4-9-7', text: 'Manutenção - Conservação de equipamentos.' },
          { id: '4-9-8', text: 'Compras - Aquisição de materiais.' }
        ]
      },
      {
        id: 'slide-4-10',
        title: 'Módulo 9: Matérias-Primas',
        subtitle: 'Materiais básicos de produção',
        freeText: 'Matérias-primas são materiais básicos que entram na fabricação do produto.',
        imageUrl: '/assets/componentes.png',
        iconName: 'Package',
        layout: 'hero'
      },
      {
        id: 'slide-4-10b',
        title: 'Módulo 9: Matérias-Primas',
        subtitle: 'Exemplos de matérias-primas',
        freeText: 'Exemplos reais de matérias-primas em fábrica de colchões.',
        iconName: 'Layers',
        layout: 'bullets-only',
        listItems: [
          { id: '4-10-1', text: 'Espuma - Material principal para conforto.' },
          { id: '4-10-2', text: 'Tecido - Revestimento externo.' },
          { id: '4-10-3', text: 'Molas - Estrutura de suporte.' },
          { id: '4-10-4', text: 'Cola - Adesivos para montagem.' }
        ]
      },
      {
        id: 'slide-4-10c',
        title: 'Módulo 9: Matérias-Primas',
        subtitle: 'Materiais de acabamento',
        freeText: 'Materiais utilizados no acabamento e proteção do produto.',
        iconName: 'Shield',
        layout: 'bullets-only',
        listItems: [
          { id: '4-10-5', text: 'Fitilho - Acabamento de bordas.' },
          { id: '4-10-6', text: 'Feutro - Proteção e conforto.' },
          { id: '4-10-7', text: 'Plástico - Proteção e embalagem.' },
          { id: '4-10-8', text: 'Etiquetas - Identificação e rastreabilidade.' }
        ]
      },
      {
        id: 'slide-4-11',
        title: 'Módulo 10: Componentes',
        subtitle: 'Peças intermediárias',
        freeText: 'Componentes são peças intermediárias usadas em vários produtos, reduzindo duplicidade em BOM.',
        imageUrl: '/assets/produtos.png',
        iconName: 'Layers',
        layout: 'hero'
      },
      {
        id: 'slide-4-11b',
        title: 'Módulo 10: Componentes',
        subtitle: 'Exemplos de componentes',
        freeText: 'Componentes típicos em fábrica de colchões.',
        iconName: 'Box',
        layout: 'bullets-only',
        listItems: [
          { id: '4-11-1', text: 'Tampo - Parte superior do colchão.' },
          { id: '4-11-2', text: 'Lateral - Parte lateral do colchão.' },
          { id: '4-11-3', text: 'Bloco de Molas - Estrutura interna.' },
          { id: '4-11-4', text: 'Base - Parte inferior do colchão.' }
        ]
      },
      {
        id: 'slide-4-11c',
        title: 'Módulo 10: Componentes',
        subtitle: 'Componentes especiais',
        freeText: 'Componentes especiais para produtos diferenciados.',
        iconName: 'Star',
        layout: 'bullets-only',
        listItems: [
          { id: '4-11-5', text: 'Pillow - Travesseiros e almofadas.' },
          { id: '4-11-6', text: 'Encosto - Apoio para cabeça.' },
          { id: '4-11-7', text: 'Base Box - Base estruturada.' },
          { id: '4-11-8', text: 'Topper - Camada superior de conforto.' }
        ]
      },
      {
        id: 'slide-4-12',
        title: 'Módulo 11: Produtos',
        subtitle: 'Itens prontos para venda',
        freeText: 'Produtos finais são itens prontos para venda ao cliente.',
        imageUrl: '/assets/produtos.png',
        iconName: 'Package',
        layout: 'hero'
      },
      {
        id: 'slide-4-12b',
        title: 'Módulo 11: Produtos',
        subtitle: 'Características do produto',
        freeText: 'Cada produto tem características específicas definidas.',
        iconName: 'FileText',
        layout: 'bullets-only',
        listItems: [
          { id: '4-12-1', text: 'Ficha técnica - Especificações técnicas.' },
          { id: '4-12-2', text: 'BOM - Lista de materiais.' },
          { id: '4-12-3', text: 'Custos - Custo de produção.' },
          { id: '4-12-4', text: 'Preço - Preço de venda.' }
        ]
      },
      {
        id: 'slide-4-12c',
        title: 'Módulo 11: Produtos',
        subtitle: 'Classificação de produtos',
        freeText: 'Produtos são organizados em famílias e linhas.',
        iconName: 'FolderTree',
        layout: 'bullets-only',
        listItems: [
          { id: '4-12-5', text: 'Família - Grupo de produtos similares.' },
          { id: '4-12-6', text: 'Linha - Variação dentro da família.' },
          { id: '4-12-7', text: 'Variantes - Diferenças específicas.' },
          { id: '4-12-8', text: 'Dimensões - Tamanhos disponíveis.' }
        ]
      },
      {
        id: 'slide-4-13',
        title: 'Módulo 12: Engenharia do Produto',
        subtitle: 'Estrutura e definição',
        freeText: 'Engenharia do produto define como o produto é fabricado.',
        iconName: 'Settings',
        layout: 'bullets-only',
        listItems: [
          { id: '4-13-1', text: 'BOM - Lista de materiais e componentes.' },
          { id: '4-13-2', text: 'Estrutura - Organização do produto.' },
          { id: '4-13-3', text: 'Componentes - Peças que compõem o produto.' },
          { id: '4-13-4', text: 'Consumo - Quantidade de cada material.' }
        ]
      },
      {
        id: 'slide-4-13b',
        title: 'Módulo 12: Engenharia do Produto',
        subtitle: 'Roteiro e tempo',
        freeText: 'Roteiro define o caminho de fabricação.',
        iconName: 'Workflow',
        layout: 'bullets-only',
        listItems: [
          { id: '4-13-5', text: 'Roteiro - Sequência de operações.' },
          { id: '4-13-6', text: 'Tempo - Tempo padrão por operação.' },
          { id: '4-13-7', text: 'Centros de Trabalho - Onde cada operação ocorre.' },
          { id: '4-13-8', text: 'Capacidade - Produção possível por centro.' }
        ]
      },
      {
        id: 'slide-4-13c',
        title: 'Módulo 13: Processos',
        subtitle: 'Roteiro produtivo',
        freeText: 'O roteiro produtivo define todas as etapas de fabricação.',
        imageUrl: '/assets/cronometragem.png',
        iconName: 'Workflow',
        layout: 'hero'
      },
      {
        id: 'slide-4-13d',
        title: 'Módulo 13: Processos',
        subtitle: 'Etapas do roteiro',
        freeText: 'Cada etapa transforma o produto.',
        iconName: 'ArrowRight',
        layout: 'bullets-only',
        listItems: [
          { id: '4-13-9', text: 'Receber - Entrada de materiais.' },
          { id: '4-13-10', text: 'Separar - Separação por ordem.' },
          { id: '4-13-11', text: 'Cortar - Corte nas dimensões.' },
          { id: '4-13-12', text: 'Montar - União de componentes.' }
        ]
      },
      {
        id: 'slide-4-13e',
        title: 'Módulo 13: Processos',
        subtitle: 'Etapas finais',
        freeText: 'Etapas finais completam o produto.',
        iconName: 'CheckCircle',
        layout: 'bullets-only',
        listItems: [
          { id: '4-13-13', text: 'Costurar - Costura e acabamento.' },
          { id: '4-13-14', text: 'Fechar - Fechamento do produto.' },
          { id: '4-13-15', text: 'Inspecionar - Verificação de qualidade.' },
          { id: '4-13-16', text: 'Embalar - Proteção para transporte.' }
        ]
      },
      {
        id: 'slide-4-13f',
        title: 'Módulo 14: Ordens de Produção',
        subtitle: 'Transformando planejamento em execução',
        freeText: 'Ordens de Produção autorizam e controlam a fabricação.',
        imageUrl: '/assets/ordens-producao.png',
        iconName: 'FileText',
        layout: 'hero'
      },
      {
        id: 'slide-4-13g',
        title: 'Módulo 14: Ordens de Produção',
        subtitle: 'Ciclo da OP',
        freeText: 'Cada OP passa por um ciclo definido.',
        iconName: 'RefreshCw',
        layout: 'bullets-only',
        listItems: [
          { id: '4-13-17', text: 'Planejamento - Definição da produção.' },
          { id: '4-13-18', text: 'Liberação - Autorização para iniciar.' },
          { id: '4-13-19', text: 'Execução - Produção do produto.' },
          { id: '4-13-20', text: 'Finalização - Conclusão da OP.' }
        ]
      },
      {
        id: 'slide-4-14',
        title: 'Módulo 15: Apontamentos',
        subtitle: 'Registros de produção',
        freeText: 'Apontamentos registram tudo que acontece na produção.',
        imageUrl: '/assets/apontamentos.png',
        iconName: 'Activity',
        layout: 'hero'
      },
      {
        id: 'slide-4-14b',
        title: 'Módulo 15: Apontamentos',
        subtitle: 'Tipos de registros',
        freeText: 'Cada tipo de registro captura informações específicas.',
        iconName: 'FileText',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-1', text: 'Início - Início da operação.' },
          { id: '4-14-2', text: 'Fim - Término da operação.' },
          { id: '4-14-3', text: 'Produção - Quantidade produzida.' },
          { id: '4-14-4', text: 'Perdas - Perdas durante a operação.' }
        ]
      },
      {
        id: 'slide-4-14c',
        title: 'Módulo 15: Apontamentos',
        subtitle: 'Registros de qualidade',
        freeText: 'Registros que afetam a qualidade do produto.',
        iconName: 'Shield',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-5', text: 'Consumo - Materiais utilizados.' },
          { id: '4-14-6', text: 'Refugo - Produtos defeituosos.' },
          { id: '4-14-7', text: 'Retrabalho - Produtos refeitos.' },
          { id: '4-14-8', text: 'Setup - Tempo de preparação.' }
        ]
      },
      {
        id: 'slide-4-14d',
        title: 'Módulo 15: Apontamentos',
        subtitle: 'Registros de disponibilidade',
        freeText: 'Registros que afetam a disponibilidade de produção.',
        iconName: 'Clock',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-9', text: 'Parada - Interrupção da produção.' },
          { id: '4-14-10', text: 'Motivo - Causa da parada.' },
          { id: '4-14-11', text: 'Operador - Responsável pela operação.' },
          { id: '4-14-12', text: 'Equipamento - Máquina utilizada.' }
        ]
      },
      {
        id: 'slide-4-14e',
        title: 'Módulo 16: Estoques',
        subtitle: 'Controle de materiais',
        freeText: 'Estoques controlam todos os materiais e produtos.',
        iconName: 'Package',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-13', text: 'Matéria-prima - Materiais básicos.' },
          { id: '4-14-14', text: 'Semiacabado - Produtos em processo.' },
          { id: '4-14-15', text: 'Produto acabado - Produtos prontos.' },
          { id: '4-14-16', text: 'Quarentena - Produtos em análise.' }
        ]
      },
      {
        id: 'slide-4-14f',
        title: 'Módulo 16: Estoques',
        subtitle: 'Gestão de estoques',
        freeText: 'Gestão de estoques garante disponibilidade e controle.',
        iconName: 'Warehouse',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-17', text: 'Expedição - Produtos prontos para envio.' },
          { id: '4-14-18', text: 'Inventário - Contagem física.' },
          { id: '4-14-19', text: 'Movimentações - Entradas e saídas.' },
          { id: '4-14-20', text: 'Saldos - Quantidade disponível.' }
        ]
      },
      {
        id: 'slide-4-14g',
        title: 'Módulo 17: Qualidade',
        subtitle: 'Controle de qualidade',
        freeText: 'Qualidade garante que produtos atendam aos padrões.',
        iconName: 'Shield',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-21', text: 'Inspeções - Verificação de qualidade.' },
          { id: '4-14-22', text: 'Refugo - Produtos reprovados.' },
          { id: '4-14-23', text: 'Retrabalho - Produtos corrigidos.' },
          { id: '4-14-24', text: 'Não Conformidades - Desvios de padrão.' }
        ]
      },
      {
        id: 'slide-4-14h',
        title: 'Módulo 17: Qualidade',
        subtitle: 'Ferramentas de qualidade',
        freeText: 'Ferramentas para controle e rastreabilidade.',
        iconName: 'CheckCircle',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-25', text: 'Checklist - Lista de verificação.' },
          { id: '4-14-26', text: 'Rastreabilidade - Acompanhamento do lote.' },
          { id: '4-14-27', text: 'Amostras - Testes de qualidade.' },
          { id: '4-14-28', text: 'Certificados - Documentação de qualidade.' }
        ]
      },
      {
        id: 'slide-4-14i',
        title: 'Módulo 18: Manutenção',
        subtitle: 'Conservação de equipamentos',
        freeText: 'Manutenção garante disponibilidade de equipamentos.',
        iconName: 'Wrench',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-29', text: 'Preventiva - Manutenção programada.' },
          { id: '4-14-30', text: 'Corretiva - Reparo de falhas.' },
          { id: '4-14-31', text: 'Preditiva - Previsão de falhas.' },
          { id: '4-14-32', text: 'Lubrificação - Lubrificação programada.' }
        ]
      },
      {
        id: 'slide-4-14j',
        title: 'Módulo 18: Manutenção',
        subtitle: 'Indicadores de manutenção',
        freeText: 'Indicadores medem a eficiência da manutenção.',
        iconName: 'Activity',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-33', text: 'Paradas - Tempo de parada.' },
          { id: '4-14-34', text: 'MTBF - Tempo médio entre falhas.' },
          { id: '4-14-35', text: 'MTTR - Tempo médio de reparo.' },
          { id: '4-14-36', text: 'Disponibilidade - Tempo disponível.' }
        ]
      },
      {
        id: 'slide-4-14k',
        title: 'Módulo 19: PCP',
        subtitle: 'Planejamento e Controle da Produção',
        freeText: 'PCP planeja e controla toda a produção.',
        imageUrl: '/assets/pcp.png',
        iconName: 'Calendar',
        layout: 'hero'
      },
      {
        id: 'slide-4-14l',
        title: 'Módulo 19: PCP',
        subtitle: 'Funções do PCP',
        freeText: 'PCP executa múltiplas funções de planejamento.',
        iconName: 'Settings',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-37', text: 'Planejamento - Definição da produção.' },
          { id: '4-14-38', text: 'Sequenciamento - Ordem de execução.' },
          { id: '4-14-39', text: 'Carga Máquina - Alocação de recursos.' },
          { id: '4-14-40', text: 'Capacidade - Produção disponível.' }
        ]
      },
      {
        id: 'slide-4-14m',
        title: 'Módulo 19: PCP',
        subtitle: 'Controle e ajuste',
        freeText: 'PCP monitora e ajusta continuamente.',
        iconName: 'RefreshCw',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-41', text: 'Acompanhamento - Monitoramento em tempo real.' },
          { id: '4-14-42', text: 'Replanejamento - Ajustes conforme necessário.' },
          { id: '4-14-43', text: 'Priorização - Definição de prioridades.' },
          { id: '4-14-44', text: 'Otimização - Melhoria contínua.' }
        ]
      },
      {
        id: 'slide-4-14n',
        title: 'Módulo 20: Custos Industriais',
        subtitle: 'Cálculo de custos',
        freeText: 'Custos industriais compõem o custo do produto.',
        iconName: 'DollarSign',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-45', text: 'Matéria-prima - Custo de materiais.' },
          { id: '4-14-46', text: 'MOD - Mão de obra direta.' },
          { id: '4-14-47', text: 'Energia - Custo de energia.' },
          { id: '4-14-48', text: 'Máquinas - Custo de equipamentos.' }
        ]
      },
      {
        id: 'slide-4-14o',
        title: 'Módulo 20: Custos Industriais',
        subtitle: 'Custos adicionais',
        freeText: 'Custos adicionais completam o cálculo.',
        iconName: 'Calculator',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-49', text: 'Depreciação - Desgaste de equipamentos.' },
          { id: '4-14-50', text: 'Ferramentas - Custo de ferramentas.' },
          { id: '4-14-51', text: 'Custos indiretos - Custos gerais.' },
          { id: '4-14-52', text: 'Margem - Lucro desejado.' }
        ]
      },
      {
        id: 'slide-4-14p',
        title: 'Módulo 20: Custos Industriais',
        subtitle: 'Preço e rentabilidade',
        freeText: 'Custo define preço e rentabilidade.',
        iconName: 'TrendingUp',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-53', text: 'Preço - Preço de venda.' },
          { id: '4-14-54', text: 'Rentabilidade - Lucro sobre custo.' },
          { id: '4-14-55', text: 'Markup - Percentual sobre custo.' },
          { id: '4-14-56', text: 'Competitividade - Comparação com mercado.' }
        ]
      },
      {
        id: 'slide-4-14q',
        title: 'Módulo 21: Indicadores Industriais',
        subtitle: 'KPIs de produção',
        freeText: 'Indicadores medem o desempenho da fábrica.',
        iconName: 'Activity',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-57', text: 'OEE - Eficiência global.' },
          { id: '4-14-58', text: 'Lead Time - Tempo de entrega.' },
          { id: '4-14-59', text: 'Setup - Tempo de preparação.' },
          { id: '4-14-60', text: 'Scrap - Perda de material.' }
        ]
      },
      {
        id: 'slide-4-14r',
        title: 'Módulo 21: Indicadores Industriais',
        subtitle: 'KPIs de qualidade e eficiência',
        freeText: 'Indicadores de qualidade e eficiência.',
        iconName: 'Target',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-61', text: 'Refugo - Produtos defeituosos.' },
          { id: '4-14-62', text: 'Eficiência - Produtividade real.' },
          { id: '4-14-63', text: 'Capacidade - Produção máxima.' },
          { id: '4-14-64', text: 'Backlog - Pedidos pendentes.' }
        ]
      },
      {
        id: 'slide-4-14s',
        title: 'Módulo 21: Indicadores Industriais',
        subtitle: 'KPIs financeiros',
        freeText: 'Indicadores financeiros medem rentabilidade.',
        iconName: 'DollarSign',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-65', text: 'Rentabilidade - Lucro sobre vendas.' },
          { id: '4-14-66', text: 'Custo por unidade - Custo médio.' },
          { id: '4-14-67', text: 'Margem de contribuição - Lucro por margem.' },
          { id: '4-14-68', text: 'ROI - Retorno sobre investimento.' }
        ]
      },
      {
        id: 'slide-4-14t',
        title: 'Módulo 22: Inteligência Artificial Industrial',
        subtitle: 'Copilot Industrial',
        freeText: 'Copilot Industrial utiliza todos os dados da plataforma.',
        imageUrl: '/assets/dashboard-mature.png',
        iconName: 'Sparkles',
        layout: 'hero'
      },
      {
        id: 'slide-4-14u',
        title: 'Módulo 22: Inteligência Artificial Industrial',
        subtitle: 'O que o Copilot utiliza',
        freeText: 'Copilot interpreta dados cadastrados na plataforma.',
        iconName: 'Brain',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-69', text: 'Produtos - Informações de produtos.' },
          { id: '4-14-70', text: 'Processos - Roteiros de fabricação.' },
          { id: '4-14-71', text: 'Ordens - Ordens de produção.' },
          { id: '4-14-72', text: 'Custos - Informações de custos.' }
        ]
      },
      {
        id: 'slide-4-14v',
        title: 'Módulo 22: Inteligência Artificial Industrial',
        subtitle: 'Dados operacionais',
        freeText: 'Copilot utiliza dados operacionais em tempo real.',
        iconName: 'Database',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-73', text: 'Estoque - Saldos e movimentações.' },
          { id: '4-14-74', text: 'Qualidade - Inspeções e resultados.' },
          { id: '4-14-75', text: 'PCP - Planejamento e controle.' },
          { id: '4-14-76', text: 'Indicadores - KPIs em tempo real.' }
        ]
      },
      {
        id: 'slide-4-14w',
        title: 'Módulo 22: Inteligência Artificial Industrial',
        subtitle: 'Como a IA funciona',
        freeText: 'A IA não cria informações. Ela interpreta dados.',
        iconName: 'Lightbulb',
        layout: 'bullets-only',
        listItems: [
          { id: '4-14-77', text: 'Análises - Interpretação de dados.' },
          { id: '4-14-78', text: 'Recomendações - Sugestões baseadas em dados.' },
          { id: '4-14-79', text: 'Previsões - Projeções futuras.' },
          { id: '4-14-80', text: 'Tomada de decisão - Apoio à decisão.' }
        ]
      },
      {
        id: 'slide-4-15',
        title: 'Fluxo Geral do Conhecimento',
        subtitle: 'Cadeia completa de dados',
        freeText: 'Todos os elementos da fábrica estão interconectados em um fluxo contínuo.',
        iconName: 'Link',
        layout: 'bullets-only',
        listItems: [
          { id: '4-15-1', text: 'EMPRESA → UNIDADE → LAYOUT → SETORES' },
          { id: '4-15-2', text: 'CENTROS DE TRABALHO → MÁQUINAS → OPERADORES' },
          { id: '4-15-3', text: 'MATÉRIAS-PRIMAS → COMPONENTES → PRODUTOS' },
          { id: '4-15-4', text: 'BOM → PROCESSOS → ORDENS DE PRODUÇÃO' }
        ]
      },
      {
        id: 'slide-4-15b',
        title: 'Fluxo Geral do Conhecimento',
        subtitle: 'Cadeia de operações',
        freeText: 'Operações transformam dados em informações.',
        iconName: 'ArrowRight',
        layout: 'bullets-only',
        listItems: [
          { id: '4-15-5', text: 'APONTAMENTOS → ESTOQUE → QUALIDADE' },
          { id: '4-15-6', text: 'MANUTENÇÃO → PCP → CUSTOS' },
          { id: '4-15-7', text: 'KPIs → COPILOT INDUSTRIAL' },
          { id: '4-15-8', text: 'TOMADA DE DECISÃO → MELHORIA CONTÍNUA' }
        ]
      },
      {
        id: 'slide-4-16',
        title: 'Resumo do Treinamento',
        subtitle: 'Principais conceitos aprendidos',
        freeText: 'Agora você compreende como uma fábrica funciona e como o Industrial OS representa cada etapa.',
        iconName: 'CheckCircle',
        layout: 'bullets-only',
        listItems: [
          { id: '4-16-1', text: 'A fábrica existe antes do sistema.' },
          { id: '4-16-2', text: 'Cada área física tem um módulo correspondente.' },
          { id: '4-16-3', text: 'Os dados fluem em uma cadeia interconectada.' },
          { id: '4-16-4', text: 'O sistema automatiza cálculos e centraliza informações.' }
        ]
      },
      {
        id: 'slide-4-16b',
        title: 'Resumo do Treinamento',
        subtitle: 'Conceitos avançados',
        freeText: 'Conceitos avançados completam o entendimento.',
        iconName: 'GraduationCap',
        layout: 'bullets-only',
        listItems: [
          { id: '4-16-5', text: 'A inteligência industrial depende de dados corretos.' },
          { id: '4-16-6', text: 'O onboarding guiado facilita a implantação gradual.' },
          { id: '4-16-7', text: 'O Copilot IA apoia a tomada de decisão.' },
          { id: '4-16-8', text: 'A rastreabilidade garante qualidade e conformidade.' }
        ]
      },
      {
        id: 'slide-4-17',
        title: 'Próximos Passos',
        subtitle: 'Agora que você compreende como a fábrica funciona',
        freeText: 'Próximos Passos Práticos:\n1. Acesse o Dashboard para ver o progresso da implantação.\n2. Siga o onboarding guiado (Empresa → Setores → Funcionários → Equipamentos → Matérias-Primas → Fornecedores → Produtos → Processos).\n3. Use o Copilot (✨) em cada módulo para tirar dúvidas.\n4. Consulte o Centro de Implantação para acompanhar pendências e próximas ações.',
        imageUrl: '/assets/dashboard-mature.png',
        iconName: 'Sparkles',
        layout: 'hero'
      }
    ]
  }
];
