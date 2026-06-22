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
  }
];
