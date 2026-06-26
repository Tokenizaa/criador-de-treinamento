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
        freeText: 'A primeira fase da implantação involves mapear as entidades físicas reais para as correspondentes lógicas dentro do Industrial OS. Isso garante que os cálculos de capacidade operem adequadamente.',
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
    themeStyle: 'industrial',
    slides: [
      {
        id: 'slide-4-1',
        title: 'Industrial OS: Gestão do Chão de Fábrica',
        subtitle: 'Treinamento Completo de Fundamentos Industriais',
        freeText: 'Seja bem-vindo ao cockpit de capacitação profissional. Este circuito prático de 22 módulos integra conceitos de Engenharia de Produção à realidade de uma fábrica de colchões, capacitando você a dominar o fluxo de informações, a inteligência industrial e o apoio do Copilot IA.\n\nFoco primeiro no processo físico, depois na ferramenta digital.',
        iconName: 'Award',
        layout: 'cover'
      },
      {
        id: 'slide-4-2',
        title: 'Módulo 1: Estrutura Física',
        subtitle: 'Empresa, Unidades, Galpões e Áreas',
        freeText: 'Todo processo industrial exige um local físico. Na nossa modelagem, a Empresa jurídica possui Unidades físicas (fábricas). Cada unidade contém Galpões dedicados a processos específicos, que se dividem em Áreas operacionais como as Docas, Almoxarifados, áreas de Recebimento e Expedição.',
        imageUrl: '/assets/implantacao.png',
        iconName: 'Building',
        layout: 'content',
        tipText: 'Exemplo Prático: A "Colchões Sonho Ltda" opera com 3 galpões: Galpão A (corte/costura), Galpão B (montagem) e Galpão C (expedição). O almoxarifado fica anexo ao recebimento.',
        alertText: 'Erro Comum: Cadastrar unidades antes da empresa ou omitir galpões físicos.',
        moduleDetails: {
          objetivo: 'Apresentar a estrutura física de uma indústria de colchões.',
          conceitos: 'Empresa jurídica que detém a fábrica; Unidades fabris físicas; Galpões dedicados a processos específicos (corte, costura, etc.); Áreas internas como Docas de carga/descarga e Almoxarifados de matéria-prima.',
          fluxoText: 'EMPRESA → UNIDADE → GALPÕES → ÁREAS (Recebimento → Estoque → Produção → Expedição)',
          exemploPratico: 'A "Colchões Sonho Ltda" opera com 3 galpões principais de fabricação, mantendo o almoxarifado estratégico do lado das docas de recebimento.',
          aplicacaoPlataforma: 'No Industrial OS, cadastre a Empresa, depois as Unidades físicas e os Galpões operacionais.',
          errosComuns: 'Cadastrar unidades sem empresa correspondente ou pular o mapeamento de galpões físicos de produção.',
          resumo: 'Tudo começa pelo desenho da estrutura física organizada em níveis hierárquicos Empresa → Unidade → Galpões → Áreas.',
          quiz: [
            {
              question: 'Qual é a diferença entre Empresa e Unidade?',
              options: ['Empresa é a pessoa jurídica; unidade é o local físico', 'Unidade é a jurídica; empresa é física', 'Não há diferença prática'],
              correctIndex: 0,
              explanation: 'A empresa representa o cadastro legal da organização, enquanto a unidade é a planta fabril física onde as operações acontecem.'
            },
            {
              question: 'Onde ocorre o recebimento de matérias-primas?',
              options: ['Na doca de expedição', 'No almoxarifado / recebimento de materiais', 'Diretamente nas máquinas de costura'],
              correctIndex: 1,
              explanation: 'Os insumos chegam pelo recebimento/doca de entrada e são armazenados e catalogados no almoxarifado.'
            }
          ],
          exercicioPratico: 'Desenhe o layout das áreas físicas da sua fábrica ideal e liste os galpões existentes nela.'
        }
      },
      {
        id: 'slide-4-3',
        title: 'Módulo 2: Layout Industrial',
        subtitle: 'O Fluxo de Valor Contínuo no Chão de Fábrica',
        freeText: 'O layout define a disposição física dos recursos. Um fluxo linear ou em U evita movimentação inútil, cruzamento de processos, danos ao material e gargalos no processo produtivo.',
        iconName: 'Milestone',
        layout: 'flow',
        flowNodes: [
          { id: 'fn-2-1', label: 'Estoque → Corte', description: 'Blocos de espuma são fatiados' },
          { id: 'fn-2-2', label: 'Montagem → Costura', description: 'Componentes são unidos e revestidos' },
          { id: 'fn-2-3', label: 'Inspeção → Expedição', description: 'Controle de qualidade e envio' }
        ],
        tipText: 'Exemplo Prático: O layout em U aproxima as docas de entrada e saída, otimizando movimentações logísticas.',
        alertText: 'Erro Comum: Layout em zigue-zague ou fluxos cruzados.',
        moduleDetails: {
          objetivo: 'Ensinar que uma fábrica possui um fluxo físico contínuo.',
          conceitos: 'Layout industrial define a disposição física. Influencia diretamente movimentação, produtividade, gargalos, perdas e rastreabilidade.',
          fluxoText: 'RECEBIMENTO → ESTOQUE → CORTE → MONTAGEM → COSTURA → ACABAMENTO → INSPEÇÃO → EMBALAGEM → EXPEDIÇÃO',
          exemploPratico: 'Layouts lineares, em U ou celulares são escolhidos para reduzir tráfego desnecessário de material.',
          aplicacaoPlataforma: 'Configure no sistema a sequência de setores operacionais e rotas logísticas internas.',
          errosComuns: 'Layout em zigue-zague ou cruzamento de fluxos, que geram gargalos e riscos de acidentes.',
          resumo: 'Um bom layout minimiza distâncias e elimina movimentações sem valor agregado.',
          quiz: [
            {
              question: 'Qual é o impacto de um layout industrial mal planejado?',
              options: ['Aumento desnecessário da movimentação física e perdas de tempo', 'Melhora na eficiência', 'Nenhum impacto'],
              correctIndex: 0,
              explanation: 'Disposições ineficientes obrigam materiais e operadores a percorrerem distâncias redundantes, destruindo a produtividade.'
            }
          ],
          exercicioPratico: 'Identifique 3 pontos de retrocesso (zigue-zague) na sua linha física de fabricação atual.'
        }
      },
      {
        id: 'slide-4-4',
        title: 'Módulo 3: Setores Funcionais',
        subtitle: 'Divisão Organizacional e de Coordenação',
        freeText: 'Setores não produzem peças diretamente; eles agrupam e organizam atividades similares. No Industrial OS, os setores coordenam as pessoas e as máquinas.',
        imageUrl: '/assets/setores.png',
        iconName: 'LayoutGrid',
        layout: 'two-columns',
        listItems: [
          { id: 'li-3-1', text: 'PCP: O cérebro que planeja o sequenciamento das ordens' },
          { id: 'li-3-2', text: 'Compras & Almoxarifado: Garante matéria-prima e estoque' },
          { id: 'li-3-3', text: 'Produção: Transforma matéria-prima em colchões reais' },
          { id: 'li-3-4', text: 'Qualidade & Manutenção: Apoiam a linha garantindo padrão e disponibilidade' }
        ],
        tipText: 'Exemplo Prático: O setor de Costura coordena máquinas retas e overlocks, organizando a fila de trabalho.',
        alertText: 'Erro Comum: Criar setores de menos (dificulta controle) ou setores demais (gera burocracia).',
        moduleDetails: {
          objetivo: 'Explicar o que é um setor e a diferença entre os principais setores industriais.',
          conceitos: 'Setor é uma divisão organizacional que agrupa atividades similares (Produção, PCP, Qualidade, Compras, Almoxarifado, Manutenção).',
          fluxoText: 'PCP → Compras → Almoxarifado → Produção → Qualidade → Expedição (com apoio de Manutenção)',
          exemploPratico: 'O setor de Costura coordena operadores e máquinas retas e overlocks, organizando a fila de trabalho.',
          aplicacaoPlataforma: 'Cadastre os setores organizacionais e associe responsáveis diretos no Industrial OS.',
          errosComuns: 'Confundir setor com centro de trabalho ou criar setores específicos demais dificultando a gestão.',
          resumo: 'Setores organizam a fábrica de forma administrativa e funcional, sem produzir peças diretamente.',
          quiz: [
            {
              question: 'Qual o setor responsável por planejar o que e quando produzir?',
              options: ['PCP (Planejamento e Controle da Produção)', 'Setor de Compras', 'Manutenção'],
              correctIndex: 0,
              explanation: 'O PCP é o cérebro que organiza a agenda de fabricação.'
            }
          ],
          exercicioPratico: 'Mapeie os setores administrativos e operacionais da sua fábrica e indique seus líderes.'
        }
      },
      {
        id: 'slide-4-5',
        title: 'Módulo 4: Centros de Trabalho',
        subtitle: 'Onde a Transformação Realmente Acontece',
        freeText: 'O setor organiza, mas o Centro de Trabalho (CT) produz. Um CT é a unidade produtiva básica: pode ser uma única máquina, uma bancada manual de montagem ou uma célula de operadores. Monitoramos quatro métricas críticas de cada CT:',
        iconName: 'Target',
        layout: 'step-by-step',
        listItems: [
          { id: 'li-4-1', text: 'Capacidade Nominal: O limite teórico de produção diária do centro' },
          { id: 'li-4-2', text: 'Fila de Trabalho: Ordens de fabricação aguardando execução naquele centro' },
          { id: 'li-4-3', text: 'Taxa de Ocupação: O percentual de tempo em atividade útil registrada' },
          { id: 'li-4-4', text: 'Taxa de Disponibilidade: Tempo pronto para uso vs tempo parado por falha' }
        ],
        tipText: 'Exemplo Prático: A mesa de montagem manual #02 é um Centro de Trabalho dentro do setor de Montagem.',
        alertText: 'Erro Comum: Cadastrar a capacidade nominal desconsiderando paradas normais (setup, limpeza).',
        moduleDetails: {
          objetivo: 'Explicar que quem produz são os Centros de Trabalho, não os setores.',
          conceitos: 'Centro de Trabalho (CT) é a unidade produtiva básica (máquina, bancada manual, ou célula). Monitora capacidade, fila, ocupação e disponibilidade.',
          fluxoText: 'Setor Costura → CT 01 (Máquina Reta 01) | CT 02 (Máquina Overlock 01)',
          exemploPratico: 'O setor de Montagem tem 10 mesas manuais (cada uma é um CT) com capacidade de 20 colchões por dia.',
          aplicacaoPlataforma: 'Cadastre cada CT associando-o ao seu setor correspondente e defina sua capacidade nominal.',
          errosComuns: 'Não cadastrar todos os CTs ou superestimar a capacidade teórica sem considerar paradas normais.',
          resumo: 'CTs são os pontos reais onde ocorre a agregação de valor física ao produto.',
          quiz: [
            {
              question: 'Qual a diferença entre Setor e Centro de Trabalho?',
              options: ['Setor é a área organizacional; CT é o ponto produtivo real', 'Setor produz e CT organiza'],
              correctIndex: 0,
              explanation: 'Setor é organizacional, enquanto o Centro de Trabalho é o local físico onde a produção ocorre.'
            }
          ],
          exercicioPratico: 'Identifique e descreva o centro de trabalho gargalo da sua linha de produção atual.'
        }
      },
      {
        id: 'slide-4-6',
        title: 'Módulo 5: Máquinas Produtivas',
        subtitle: 'Os Motores da Transformação Industrial',
        freeText: 'As máquinas executam a transformação física direta de materiais. Na fábrica de colchões, cada etapa possui tecnologias especializadas com vida útil, tempos de preparação (setup) e capacidades nominais específicas.',
        iconName: 'Cpu',
        layout: 'two-columns',
        listItems: [
          { id: 'li-5-1', text: 'Serra Vertical / CNC: Corta grandes blocos de espuma com precisão' },
          { id: 'li-5-2', text: 'Máquinas de Costura Reta & Overlock: Unem tampo, lateral e fitilho' },
          { id: 'li-5-3', text: 'Máquinas de Quilting: Criam relevos estéticos confortáveis nas espumas' },
          { id: 'li-5-4', text: 'Seladora / Roll Pack: Comprimem e embalam colchões para logística compacta' }
        ],
        tipText: 'Exemplo Prático: Uma Serra Vertical corta 50 blocos de espuma por hora. Sua eficiência real é monitorada contra esta meta.',
        alertText: 'Erro Comum: Ignorar o tempo de preparação (setup) ao trocar o tipo de produto.',
        moduleDetails: {
          objetivo: 'Apresentar as máquinas típicas de uma fábrica de colchões e sua gestão.',
          conceitos: 'Máquinas executam a transformação física direta. Tipos: Serra Vertical/CNC (corte), Reta/Quilting (costura), Prensas/Rollpack (embalagem). Monitora-se vida útil, setup e capacidade real.',
          fluxoText: 'Serra de Espuma → Mesa de Colagem → Máquina de Costura → Seladora Vácuo',
          exemploPratico: 'Uma serra vertical corta 50 blocos por hora. Se trabalhar 8h com setup de 1h, produz 350 blocos.',
          aplicacaoPlataforma: 'Vincule cada máquina cadastrada a um Centro de Trabalho e monitore sua capacidade nominal.',
          errosComuns: 'Ignorar o tempo de setup (preparação) na troca de produtos ou usar capacidade teórica inacessível.',
          resumo: 'Máquinas são os motores produtivos e exigem medição precisa de capacidade e tempo de setup.',
          quiz: [
            {
              question: 'Qual a função de uma máquina de Roll Pack?',
              options: ['Comprimir e embalar o colchão a vácuo em rolo para reduzir o volume', 'Fatiar a espuma', 'Limpar as agulhas da overlock'],
              correctIndex: 0,
              explanation: 'O Roll Pack comprime o colchão a vácuo para reduzir os custos logísticos de transporte.'
            }
          ],
          exercicioPratico: 'Liste os tempos médios de setup de 2 máquinas críticas da sua fábrica.'
        }
      },
      {
        id: 'slide-4-7',
        title: 'Módulo 6: Equipamentos de Suporte',
        subtitle: 'Garantindo a Infraestrutura Produtiva',
        freeText: 'Enquanto a máquina transforma o colchão diretamente, os Equipamentos fornecem a infraestrutura de suporte indispensável para que a fábrica continue funcionando de forma contínua e segura. Sem compressores, balanças ou coletores, as máquinas principais param de funcionar.',
        iconName: 'Settings',
        layout: 'content',
        tipText: 'Exemplo Prático: O compressor de ar de 50 HP alimenta as pistolas pneumáticas de aplicação de cola do setor de montagem.',
        alertText: 'Erro Comum: Deixar equipamentos críticos fora do plano de manutenção preventiva.',
        moduleDetails: {
          objetivo: 'Explicar a diferença de máquinas e equipamentos, focando na infraestrutura.',
          conceitos: 'Máquina transforma o produto; Equipamento dá suporte operacional (compressores de ar, geradores, exaustores, balanças, coletores).',
          fluxoText: 'Compressor de Ar → Rede de Pressão → Pistolas de Cola do Centro de Trabalho',
          exemploPratico: 'O compressor de ar alimenta 10 pistolas pneumáticas na colagem. Se ele quebrar, o setor inteiro para.',
          aplicacaoPlataforma: 'Cadastre equipamentos de infraestrutura associando-os aos setores atendidos e monitore disponibilidade.',
          errosComuns: 'Esquecer de programar manutenção preventiva para equipamentos críticos, gerando paradas em cadeia.',
          resumo: 'Equipamentos não transformam o colchão, mas sem eles a linha principal não opera.',
          quiz: [
            {
              question: 'Qual o papel de um compressor de ar na produção de colchões?',
              options: ['Fornecer ar comprimido para ferramentas como pistolas de cola e grampeadores', 'Cortar lâminas de espuma', 'Costurar o fitilho'],
              correctIndex: 0,
              explanation: 'O compressor é vital para alimentar as pistolas pneumáticas de aplicação de cola e grampeadores.'
            }
          ],
          exercicioPratico: 'Identifique 2 equipamentos críticos cuja falha pararia a produção inteira.'
        }
      },
      {
        id: 'slide-4-8',
        title: 'Módulo 7: Ferramentas Manuais',
        subtitle: 'Extensão da Capacidade do Operador',
        freeText: 'As ferramentas são dispositivos manuais utilizados pelos operadores para montagem, corte e ajustes. Elas exigem controle individual de inventário, calibração e substituição periódica devido ao desgaste natural no trabalho repetitivo diário.',
        imageUrl: '/assets/ferramentas.png',
        iconName: 'Wrench',
        layout: 'content',
        tipText: 'Exemplo Prático: Estiletes ergonômicos e pistolas manuais de cola quente são ferramentas essenciais para fixar as camadas confortáveis.',
        alertText: 'Erro Comum: Falta de controle de perdas de ferramentas no chão de fábrica, usando esquadros ou trenas descalibrados.',
        moduleDetails: {
          objetivo: 'Mapear e gerenciar ferramentas utilizadas pelos operadores.',
          conceitos: 'Instrumentos manuais operados diretamente (tesouras, estiletes, trenas, esquadros, pistolas manuais). Exigem calibração e substituição periódica.',
          fluxoText: 'Estilete/Esquadro (Corte) → Pistola Manual (Colagem) → Tesoura (Acabamento)',
          exemploPratico: 'O operador usa esquadro e trena para alinhar as espumas. Uma trena desgastada gera colchões fora da medida.',
          aplicacaoPlataforma: 'Cadastre ferramentas controlando empréstimos, devoluções e substituições por desgaste.',
          errosComuns: 'Falta de controle de inventário de ferramentas manuais ou uso de ferramentas desgastadas que afetam qualidade.',
          resumo: 'Ferramentas são extensões manuais da capacidade do operador que demandam controle rígido de calibração.',
          quiz: [
            {
              question: 'Por que trenas e esquadros exigem controle de calibração?',
              options: ['Para evitar variações e desvios de dimensão final no colchão', 'Para reduzir o tempo de costura', 'Para registrar o tempo de máquina parada'],
              correctIndex: 0,
              explanation: 'Variações em trenas geram cortes errados e perda de materiais ou retrabalho.'
            }
          ],
          exercicioPratico: 'Liste as ferramentas manuais mandatórias para o setor de Montagem e Colagem.'
        }
      },
      {
        id: 'slide-4-9',
        title: 'Módulo 8: Pessoas & Hierarquia',
        subtitle: 'A Estrutura de Liderança e Execução',
        freeText: 'As pessoas são o ativo mais valioso da fábrica. Para garantir eficiência e fluidez na comunicação e resolução de problemas, estabelecemos papéis hierárquicos com responsabilidades claras no Industrial OS.',
        iconName: 'Users',
        layout: 'step-by-step',
        listItems: [
          { id: 'li-8-1', text: 'Operador: Executa as tarefas diretamente nos centros de trabalho e realiza apontamentos' },
          { id: 'li-8-2', text: 'Líder: Coordena uma pequena equipe (5-15 pessoas), apoiando na disciplina e no ritmo' },
          { id: 'li-8-3', text: 'Supervisor: Gerencia líderes de múltiplos setores, focando na meta diária de produção' },
          { id: 'li-8-4', text: 'Gerente: Define metas estratégicas de fábrica e reporta diretamente à diretoria' }
        ],
        tipText: 'Exemplo Prático: Se a máquina reta quebra, o Operador aponta a parada, o Líder apoia o acionamento da Manutenção.',
        alertText: 'Erro Comum: Multivinculação informal, onde um operador responde a dois líderes diferentes.',
        moduleDetails: {
          objetivo: 'Apresentar a estrutura de papéis organizacionais da fábrica.',
          conceitos: 'Papéis bem delimitados garantem disciplina e fluidez na comunicação. Níveis: Operador, Líder, Supervisor e Gerente.',
          fluxoText: 'Operador (Executa/Aponta) → Líder (Suporta Equipe) → Supervisor (Múltiplos Setores) → Gerente (Fábrica)',
          exemploPratico: 'Ao quebrar uma máquina, o Operador aponta, o Líder aciona manutenção e o Supervisor altera o PCP.',
          aplicacaoPlataforma: 'Cadastre os operadores, configure a hierarquia de equipes e associe responsáveis aos setores.',
          errosComuns: 'Multivinculação onde o operador responde a múltiplos líderes, gerando confusão de prioridades.',
          resumo: 'A estrutura organizacional do Industrial OS define responsabilidades claras e fluxos de escala para problemas.',
          quiz: [
            {
              question: 'Qual a principal atribuição do Operador na plataforma?',
              options: ['Registrar apontamentos em tempo real de produção, paradas e refugo', 'Definir custos indiretos', 'Cadastrar a empresa'],
              correctIndex: 0,
              explanation: 'O operador abastece o sistema com dados reais de campo por meio de apontamentos.'
            }
          ],
          exercicioPratico: 'Desenhe o organograma real do seu turno e indique os papéis correspondentes.'
        }
      },
      {
        id: 'slide-4-10',
        title: 'Módulo 9: Matérias-Primas',
        subtitle: 'Os Insumos Básicos da Produção de Colchões',
        freeText: 'As matérias-primas são os insumos físicos brutos comprados de fornecedores externos. Eles entram no almoxarifado, passam pela qualidade e são consumidos na fabricação de cada colchão.',
        iconName: 'Boxes',
        layout: 'two-columns',
        listItems: [
          { id: 'li-10-1', text: 'Blocos de Espuma: Densidades (D28, D33, D45) e espessuras' },
          { id: 'li-10-2', text: 'Tecido de Revestimento: Jacquard, Malha, Matelassê' },
          { id: 'li-10-3', text: 'Molas Ensacadas (Pocket): Estruturas elásticas de suporte' },
          { id: 'li-10-4', text: 'Cola Industrial, Fitilhos, Etiquetas e Embalagem Plástica' }
        ],
        tipText: 'Exemplo Prático: Um colchão D33 consome exatamente 0.45m³ de espuma de poliuretano e 3.2m² de tecido jacquard.',
        alertText: 'Erro Comum: Cadastrar matérias-primas com unidades de medida confusas (ex: comprar em quilo e apontar em metros).',
        moduleDetails: {
          objetivo: 'Explicar o que é matéria-prima e os insumos típicos de colchões.',
          conceitos: 'Insumo físico bruto comprado externamente (espuma, tecido, mola, fitilho, cola, embalagem, etiquetas). Tem estoque mínimo.',
          fluxoText: 'Fornecedor → Recebimento → Inspeção Qualidade → Almoxarifado → Consumo Produção',
          exemploPratico: 'Para fabricar 100 colchões, consome-se 200m³ de espuma, 500m² de tecido e 50kg de cola.',
          aplicacaoPlataforma: 'Cadastre as MPs com unidades de medida precisas (kg, m², m³) e defina seus estoques de segurança.',
          errosComuns: 'Cadastrar materiais sem unidade clara ou comprar em uma unidade e apontar consumo em outra sem conversão.',
          resumo: 'Matérias-primas são a base do produto e demandam controle rígido de unidades e estoque de segurança.',
          quiz: [
            {
              question: 'Como deve ser medida a espuma em bloco no estoque?',
              options: ['Em metro cúbico (m³)', 'Em unidades simples', 'Em metros lineares'],
              correctIndex: 0,
              explanation: 'Espumas em bloco possuem volume e são tratadas tecnicamente em metros cúbicos para estoque preciso.'
            }
          ],
          exercicioPratico: 'Liste as 5 matérias-primas de maior valor financeiro estocadas na sua fábrica.'
        }
      },
      {
        id: 'slide-4-11',
        title: 'Módulo 10: Componentes Intermediários',
        subtitle: 'Otimizando a Linha de Montagem',
        freeText: 'Há uma diferença crucial na engenharia: Matéria-Prima é o que você compra bruto (tecido, espuma). Componente é o que você pré-fabrica na fábrica para ser usado depois na montagem final. Cadastrar componentes simplifica a estrutura de produtos e reduz a duplicidade na ficha técnica.',
        imageUrl: '/assets/componentes.png',
        iconName: 'Layers',
        layout: 'content',
        tipText: 'Exemplo Prático: Espuma em Bloco (MP) → Corte (Processo) → Tampo de Colchão (Componente). O Tampo fica estocado aguardando a colagem.',
        alertText: 'Erro Comum: Tratar um componente pré-fabricado como matéria-prima comum.',
        moduleDetails: {
          objetivo: 'Explicar a diferença entre matéria-prima e componente pré-fabricado.',
          conceitos: 'Matéria-prima é comprada bruta; Componente é fabricado internamente para uso posterior (tampos cortados, laterais costuradas, bloco de mola montado).',
          fluxoText: 'Matéria-Prima (Bloco Espuma) → Processamento (Corte) → Componente (Tampo) → Montagem (Colchão)',
          exemploPratico: 'O setor de corte pré-fabrica 50 tampos. Eles são estocados como componentes até o setor de montagem requisitá-los.',
          aplicacaoPlataforma: 'Cadastre componentes especificando sua receita própria e controle seu estoque intermediário (WIP).',
          errosComuns: 'Tratar um componente feito em casa como matéria-prima externa, ocultando o custo de transformação dele.',
          resumo: 'Mapear componentes simplifica as fichas técnicas e garante rastreabilidade em cada fase.',
          quiz: [
            {
              question: 'Qual a diferença entre Matéria-Prima e Componente?',
              options: ['MP é comprada bruta; Componente é pré-fabricado internamente', 'MP é produzida internamente; Componente é comprado'],
              correctIndex: 0,
              explanation: 'MPs são adquiridas de fornecedores; componentes são processados na fábrica e estocados para montagem final.'
            }
          ],
          exercicioPratico: 'Identifique 3 componentes pré-fabricados na sua linha que poderiam ser estocados para reduzir o lead time.'
        }
      },
      {
        id: 'slide-4-12',
        title: 'Módulo 11: Estrutura de Produtos',
        subtitle: 'Famílias, Linhas, Variantes e Margens',
        freeText: 'O Produto é o resultado final vendido ao cliente. Ele é estruturado em Famílias (Espuma, Molas) e Linhas (Premium, Standard). Cada produto possui variantes comerciais (Solteiro, Casal, Queen, King). Na ficha técnica centralizamos dimensões, custos acumulados e o preço de venda sugerido.',
        imageUrl: '/assets/produtos.png',
        iconName: 'Package',
        layout: 'content',
        tipText: 'Exemplo Prático: O colchão "Orto-Comfort Casal D33" pertence à Família Espuma, Linha Standard. Ele possui as variantes Casal (1.38x1.88) e Solteiro.',
        alertText: 'Erro Comum: Criar fichas de produtos individuais para cada variante de tamanho, inflando o cadastro.',
        moduleDetails: {
          objetivo: 'Apresentar a arquitetura comercial de produtos, famílias, linhas e variantes.',
          conceitos: 'Produto final é o que se vende. Organizado em Famílias (Espuma, Molas) e Linhas (Premium, Standard) com Variantes de tamanho (Casal, Solteiro).',
          fluxoText: 'Família (Molas) → Linha (Premium) → Produto (Pocket Confort) → Variante (King Size)',
          exemploPratico: 'O colchão Orto-Comfort possui variantes Casal (1.38x1.88) e Solteiro (0.88x1.88), compartilhando o mesmo roteiro básico.',
          aplicacaoPlataforma: 'Cadastre a estrutura hierárquica do portfólio no sistema usando variantes para economizar cadastros.',
          errosComuns: 'Duplicar cadastros criando um produto completo diferente para cada cor ou tamanho, inflando o banco de dados.',
          resumo: 'A correta organização por famílias e variantes otimiza as análises de margem e relatórios.',
          quiz: [
            {
              question: 'Para que servem as Variantes no cadastro de produtos?',
              options: ['Para agrupar dimensões e cores diferentes do mesmo produto sem duplicar fichas', 'Para alterar o tempo de manutenção das máquinas', 'Para excluir o MRP'],
              correctIndex: 0,
              explanation: 'As variantes evitam redundância mantendo a mesma estrutura básica com parâmetros variáveis.'
            }
          ],
          exercicioPratico: 'Crie a árvore de famílias e variantes do modelo de colchão mais vendido da sua fábrica.'
        }
      },
      {
        id: 'slide-4-13',
        title: 'Módulo 12: Engenharia de Produto',
        subtitle: 'A Lista Estruturada de Materiais (BOM)',
        freeText: 'A Bill of Materials (BOM) ou lista de materiais é a receita exata do colchão. Ela define com precisão milimétrica quais matérias-primas e componentes são consumidos para fabricar uma única unidade de produto acabado.',
        iconName: 'GitFork',
        layout: 'step-by-step',
        listItems: [
          { id: 'li-13-1', text: 'Estrutura Multinível: Produto acabado composto por componentes que consomem MPs' },
          { id: 'li-13-2', text: 'Taxa de Consumo: Quantidade exata requerida de cada insumo (com margem de perda)' },
          { id: 'li-13-3', text: 'Roteiro de Produção: Sequência de operações que as máquinas devem realizar' },
          { id: 'li-13-4', text: 'Tempos Padrão: Tempos nominais de ciclo cronometrados para cada operação' }
        ],
        tipText: 'Exemplo Prático: O colchão Premium Casal exige: 1 Estrutura de Molas, 2 Tampos acolchoados, 4.5m de lateral.',
        alertText: 'Erro Comum: Deixar de incluir a margem de perda de tecido na BOM.',
        moduleDetails: {
          objetivo: 'Explicar como funciona a Lista de Materiais (BOM) e a ficha técnica.',
          conceitos: 'BOM (recipe) define insumos, componentes e taxas exatas de consumo por unidade. Roteiro indica as etapas de fabricação.',
          fluxoText: 'BOM (Ingredientes) + Roteiro (Como Fazer) → Engenharia → Custo Standard',
          exemploPratico: 'O colchão Premium Casal consome: 1 Bloco Molas, 2 Tampos, 4.5m lateral jacquard e 0.15kg de cola hotmelt.',
          aplicacaoPlataforma: 'Desenhe a BOM multinível de cada produto, configurando as taxas de perda normais de cada insumo.',
          errosComuns: 'Omitir a taxa de desperdício do tecido na BOM, fazendo com que o estoque físico acabe antes do previsto.',
          resumo: 'A BOM é o coração do cálculo de custos e do planejamento de compras (MRP).',
          quiz: [
            {
              question: 'O que é a BOM (Bill of Materials)?',
              options: ['A lista estruturada de materiais e quantidades para fabricar um produto', 'O manual de manutenção preventiva', 'O relatório de lucros e perdas'],
              correctIndex: 0,
              explanation: 'BOM significa Bill of Materials, ou seja, a lista exata de materiais necessários para a fabricação.'
            }
          ],
          exercicioPratico: 'Escreva a lista estruturada (BOM) simplificada para o modelo padrão da sua linha de montagem.'
        }
      },
      {
        id: 'slide-4-14',
        title: 'Módulo 13: Processos e Cronometragem',
        subtitle: 'O Balanceamento da Linha de Produção',
        freeText: 'Para planejar a produção e calcular a capacidade real, a engenharia deve mapear o roteiro de processos e realizar a cronometragem científica dos tempos padrão de cada operação produtiva.',
        imageUrl: '/assets/cronometragem.png',
        iconName: 'Clock',
        layout: 'content',
        tipText: 'Exemplo Prático: A operação de Costura de Fechamento (Gargalo) leva exatamente 12 minutos padrão por colchão.',
        alertText: 'Erro Comum: Usar o menor tempo cronometrado como padrão, desconsiderando tolerâncias por fadiga humana.',
        moduleDetails: {
          objetivo: 'Mostrar o roteiro produtivo e o cálculo científico dos tempos padrão.',
          conceitos: 'Operação é a etapa física de transformação que agrega valor. Cronometragem estabelece tempos padrão de ciclo com tolerâncias.',
          fluxoText: 'Corte (15 min) → Colagem (20 min) → Costura (25 min) → Inspeção (10 min) → Embalagem (5 min)',
          exemploPratico: 'A costura de fechamento leva 12 min padrão por colchão. O CT fornece no máximo 5 unidades por hora.',
          aplicacaoPlataforma: 'Cadastre os roteiros de processos atrelando cada operação ao seu respectivo Centro de Trabalho.',
          errosComuns: 'Usar o menor tempo cronometrado sem adicionar as folgas humanas por fadiga, criando metas impossíveis.',
          resumo: 'Tempos padrão confiáveis são fundamentais para o balanceamento de linha e cálculo de capacidade.',
          quiz: [
            {
              question: 'O que deve ser adicionado ao tempo cronometrado para achar o tempo padrão?',
              options: ['Tolerâncias por fadiga humana e necessidades pessoais do operador', 'Tempo de almoço total do supervisor', 'O setup total diário'],
              correctIndex: 0,
              explanation: 'O tempo padrão contempla as folgas e fadigas normais para manter uma meta sustentável.'
            }
          ],
          exercicioPratico: 'Cronometre um processo simples de 3 repetições, calcule a média e adicione 15% de tolerância.'
        }
      },
      {
        id: 'slide-4-15',
        title: 'Módulo 14: Ordens de Produção',
        subtitle: 'A Jornada de Execução Industrial',
        freeText: 'A Ordem de Produção (OP) é o documento oficial que autoriza e guia o chão de fábrica a produzir uma quantidade específica de um colchão. Ela interliga o planejamento administrativo à execução física real.',
        imageUrl: '/assets/ordens-producao.png',
        iconName: 'FileText',
        layout: 'content',
        tipText: 'Exemplo Prático: OP #402 ordena a produção de 50 Colchões Premium Casal. Ela nasce no PCP e reserva materiais.',
        alertText: 'Erro Comum: Liberar OPs para a linha sem verificar a disponibilidade real de matérias-primas no estoque.',
        moduleDetails: {
          objetivo: 'Explicar o fluxo e o ciclo de vida de uma Ordem de Produção (OP).',
          conceitos: 'OP é o documento oficial que autoriza e guia a produção. Ciclo: Planejamento → Liberação → Execução → Finalização.',
          fluxoText: 'Criação (PCP) → Reserva de Insumos → Liberação Linha → Apontamentos → Fechamento Estoque',
          exemploPratico: 'A OP #402 ordena produzir 50 colchões Premium. Ela reserva molas e tecidos, entra em produção e atualiza estoques ao final.',
          aplicacaoPlataforma: 'Crie OPs vinculadas a demandas de pedidos, faça a liberação e monitore o status de progresso real.',
          errosComuns: 'Liberar ordens para a fábrica sem verificar estoque de matérias-primas, travando a linha por falta de cola.',
          resumo: 'A OP liga a estratégia de vendas à realidade física da linha de produção.',
          quiz: [
            {
              question: 'O que acontece ao finalizar uma OP no Industrial OS?',
              options: ['Baixa automática nos insumos e entrada dos colchões em Produto Acabado', 'Exclusão dos dados das máquinas', 'Aumento de custos fixos automáticos'],
              correctIndex: 0,
              explanation: 'A finalização realiza a baixa dos materiais consumidos da BOM e incrementa o estoque de produtos acabados.'
            }
          ],
          exercicioPratico: 'Esboce os dados essenciais que devem constar em uma folha de OP para o operador de costura.'
        }
      },
      {
        id: 'slide-4-16',
        title: 'Módulo 15: Apontamentos de Campo',
        subtitle: 'Garantindo Visibilidade em Tempo Real',
        freeText: 'Apontar é registrar. Os operadores informam ao sistema exatamente o que está acontecendo fisicamente: início de lote, fim de operação, quantidade produzida, motivos de paradas de máquinas e ocorrências de refugo.',
        imageUrl: '/assets/apontamentos.png',
        iconName: 'Edit3',
        layout: 'content',
        tipText: 'Exemplo Prático: O operador aponta às 14:00: "Início de setup". Às 14:15: "Fim de setup, início de operação". O sistema computa 15 min.',
        alertText: 'Erro Comum: Lançar apontamentos de forma acumulada apenas no fim do turno.',
        moduleDetails: {
          objetivo: 'Apresentar a importância do registro de dados e tipos de apontamentos.',
          conceitos: 'Apontar é registrar. Tipos: Início, Fim, Produção Boa, Refugo, Perda de Materiais, Setup e Paradas de máquinas.',
          fluxoText: 'Apontamento Início Setup → Fim Setup / Início OP → Registro de Refugos → Apontamento Fim OP',
          exemploPratico: 'O operador aponta início de setup às 14h. Às 14:15h aponta início de operação, registrando 15 min de setup.',
          aplicacaoPlataforma: 'Use os terminais coletores de campo para apontamento em tempo real por OP e Centro de Trabalho.',
          errosComuns: 'Acumular os apontamentos para lançar de uma vez só no fim do turno, distorcendo o acompanhamento online.',
          resumo: 'Apontamentos em tempo real fornecem visibilidade, evitam estoques fantasmas e alimentam custos.',
          quiz: [
            {
              question: 'Qual o prejuízo de lançar apontamentos acumulados apenas no fim do dia?',
              options: ['Impede a gerência e o Copilot de tomarem ações imediatas contra paradas', 'Não há prejuízo', 'Reduz o consumo de energia da máquina'],
              correctIndex: 0,
              explanation: 'Apontamentos tardios cegam o monitoramento em tempo real de gargalos e quebras.'
            }
          ],
          exercicioPratico: 'Preencha uma simulação de apontamento contendo: início de turno, parada por quebra de agulha e fim da tarefa.'
        }
      },
      {
        id: 'slide-4-17',
        title: 'Módulo 16: Controle de Estoques',
        subtitle: 'Evitando Paradas e Capital Parado',
        freeText: 'O estoque de uma fábrica se divide em diferentes categorias físicas e lógicas. No Industrial OS, as movimentações de consumo e entrada de mercadorias atualizam as quantidades e geram alertas automáticos de segurança.',
        iconName: 'Archive',
        layout: 'two-columns',
        listItems: [
          { id: 'li-17-1', text: 'Estoque de Matéria-Prima: Insumos brutos aguardando requisição da fábrica' },
          { id: 'li-17-2', text: 'Estoque em Processo (WIP): Componentes já iniciados mas não finalizados' },
          { id: 'li-17-3', text: 'Estoque de Produto Acabado: Colchões prontos e embalados na expedição' },
          { id: 'li-17-4', text: 'Quarentena: Lotes aguardando laudo de inspeção do controle de qualidade' }
        ],
        tipText: 'Exemplo Prático: Ao finalizar a OP de 50 colchões, as matérias-primas da BOM sofrem baixa automática no estoque.',
        alertText: 'Erro Comum: Não realizar inventários rotativos periódicos para ajustar divergências físicas.',
        moduleDetails: {
          objetivo: 'Explicar tipos de estoque, inventário periódico e movimentação.',
          conceitos: 'Categorias: Matéria-Prima, WIP (Processo), Produto Acabado, Quarentena. Movimentação e inventário garantem conformidade.',
          fluxoText: 'Almoxarifado (MP) → Requisition → Linha (WIP) → Conclusão OP → Estoque (PA) → Expedição',
          exemploPratico: 'Se 50 colchões entram em Produto Acabado, as matérias-primas correspondentes sofrem baixa imediata.',
          aplicacaoPlataforma: 'Monitore os estoques mínimos, crie requisições internas e organize inventários rotativos.',
          errosComuns: 'Ignorar o estoque em processo (WIP), fazendo com que materiais fiquem "desaparecidos" na linha.',
          resumo: 'Estoques precisam ser conferidos fisicamente de forma rotativa para manter a consistência com o Industrial OS.',
          quiz: [
            {
              question: 'O que é o estoque WIP (Work In Progress)?',
              options: ['Estoque de materiais em processo de fabricação', 'Produtos prontos para carregar no caminhão', 'Estoque de computadores'],
              correctIndex: 0,
              explanation: 'WIP representa o inventário que já saiu do almoxarifado mas ainda não é um produto finalizado.'
            }
          ],
          exercicioPratico: 'Calcule a necessidade líquida de espuma para 20 colchões com base na BOM padrão.'
        }
      },
      {
        id: 'slide-4-18',
        title: 'Módulo 17: Controle de Qualidade',
        subtitle: 'Inspeções, Checklists e Rastreabilidade',
        freeText: 'O controle de qualidade garante que o colchão atenda às expectativas do cliente. Definimos checklists obrigatórios nos pontos de transição e registramos não conformidades para rastrear lotes defeituosos até a sua origem.',
        iconName: 'ShieldCheck',
        layout: 'checklist',
        listItems: [
          { id: 'li-18-1', text: 'Verificar dimensões finais (comprimento, largura, espessura)' },
          { id: 'li-18-2', text: 'Inspecionar costura do fitilho (pontos soltos ou falhas)' },
          { id: 'li-18-3', text: 'Validar densidade da espuma e alinhamento do tampo' },
          { id: 'li-18-4', text: 'Rastrear o lote da matéria-prima de cola e tecido usada nesta OP' }
        ],
        tipText: 'Exemplo Prático: Um colchão com costura solta é detectado na inspeção final. Ele é marcado para Retrabalho.',
        alertText: 'Erro Comum: Negligenciar o preenchimento real do checklist de qualidade, aprovando sem medir.',
        moduleDetails: {
          objetivo: 'Ensinar a prática de inspeções, refugo, retrabalho, checklists e não conformidades.',
          conceitos: 'Inspeções garantem padrões. Checklists estruturados validam dimensões e costura. Retrabalho corrige; Refugo descarta.',
          fluxoText: 'Fim da Operação → Aplicação de Checklist → Aprovado (Expede) ou Reprovado (Retrabalho / Refugo)',
          exemploPratico: 'A inspeção final detecta costura solta. O colchão é reprovado e apontado como Retrabalho na costura.',
          aplicacaoPlataforma: 'Configure checklists de qualidade obrigatórios para encerramento de OPs no Industrial OS.',
          errosComuns: 'Preencher checklists de qualidade no automático sem realizar a aferição real do produto.',
          resumo: 'Qualidade de excelência nasce de processos auditáveis, rastreabilidade de lote e aplicação rígida de checklists.',
          quiz: [
            {
              question: 'Qual a diferença entre Refugo e Retrabalho?',
              options: ['Refugo é descartado; Retrabalho é corrigido e aproveitado', 'Refugo é o produto bom; Retrabalho é descartado', 'Não há diferença entre os dois'],
              correctIndex: 0,
              explanation: 'Refugo representa perda total de material irrecuperável. Retrabalho é corrigido para salvar o item.'
            }
          ],
          exercicioPratico: 'Crie um checklist com 5 pontos de checagem física para a embalagem e selagem de colchões.'
        }
      },
      {
        id: 'slide-4-19',
        title: 'Módulo 18: Manutenção de Ativos',
        subtitle: 'Garantindo Disponibilidade e Confiabilidade',
        freeText: 'Máquinas quebram, e máquina parada é prejuízo certo. O Industrial OS apoia a transição da manutenção puramente reativa para planos periódicos preventivos e preditivos inteligentes.',
        iconName: 'Hammer',
        layout: 'two-columns',
        listItems: [
          { id: 'li-19-1', text: 'Manutenção Corretiva: Atuação rápida após a quebra para retomar produção' },
          { id: 'li-19-2', text: 'Manutenção Preventiva: Lubrificação, limpeza e trocas de peças agendadas' },
          { id: 'li-19-3', text: 'MTBF (Tempo Médio Entre Falhas): Queremos que o MTBF seja o maior possível' },
          { id: 'li-19-4', text: 'MTTR (Tempo Médio Para Reparo): Queremos que o MTTR seja o menor possível' }
        ],
        tipText: 'Exemplo Prático: A serra de espuma possui um plano preventivo mensal de afiação de lâmina de aço.',
        alertText: 'Erro Comum: Deixar de registrar pequenas paradas rápidas de manutenção corretiva.',
        moduleDetails: {
          objetivo: 'Explicar a gestão de ativos usando manutenções preventivas, corretivas e preditivas.',
          conceitos: 'Preventiva evita paradas periódicas. Corretiva repara quebras. MTBF mede o tempo médio entre falhas (maior é melhor). MTTR é o tempo de reparo (menor é melhor).',
          fluxoText: 'Cronômetro Horas Máquina → Alerta Preventiva → Parada Programada → Inspeção e Lubrificação',
          exemploPratico: 'A serra de espuma tem preventivas mensais para afiação da fita de aço, evitando quebras inesperadas no turno.',
          aplicacaoPlataforma: 'Cadastre as ordens de manutenção preventiva e registre os tempos de indisponibilidade das máquinas.',
          errosComuns: 'Fazer apenas manutenções corretivas (quebra-repara), o que gera custos elevados e atrasos severos.',
          resumo: 'Manutenções planejadas maximizam a disponibilidade física e a vida útil das máquinas.',
          quiz: [
            {
              question: 'O que significa MTBF e qual a meta ideal para ele?',
              options: ['Tempo Médio Entre Falhas; Meta é ser o maior possível', 'Tempo Médio de Reparo; Meta é ser menor', 'Medição do tempo de setup'],
              correctIndex: 0,
              explanation: 'MTBF (Mean Time Between Failures) é o tempo médio que a máquina roda sem quebrar. Queremos o maior intervalo possível.'
            }
          ],
          exercicioPratico: 'Descreva uma tarefa de manutenção autônoma simples que o próprio operador pode fazer diariamente.'
        }
      },
      {
        id: 'slide-4-20',
        title: 'Módulo 19: Planejamento & PCP',
        subtitle: 'Calculando Necessidades e Otimizando Cargas',
        freeText: 'O Planejamento e Controle da Produção (PCP) usa o algoritmo MRP (Material Requirements Planning) para analisar as OPs planejadas, verificar o estoque disponível de molas, tecidos e espumas, calcular as faltas e planejar as ordens de compra e de fabricação de forma sincronizada.',
        imageUrl: '/assets/pcp.png',
        iconName: 'Sliders',
        layout: 'content',
        tipText: 'Exemplo Prático: O cliente pede 100 colchões. O MRP analisa que já existem 20 tampos e planeja produzir 80.',
        alertText: 'Erro Comum: Planejar a produção sem cruzar com a capacidade real de carga máquina dos centros.',
        moduleDetails: {
          objetivo: 'Apresentar as funções de planejamento, MRP, sequenciamento e carga máquina.',
          conceitos: 'PCP gerencia a carga máquina frente à capacidade. MRP calcula o que comprar e fabricar cruzando BOM com pedidos.',
          fluxoText: 'Pedido de Venda → MRP (Necessidades) → Carga Máquina (Capacidade) → Sequenciamento OPs',
          exemploPratico: 'Pedido de 100 colchões. O MRP calcula que há 20 em estoque e gera OPs e requisições de tecidos apenas para os 80 faltantes.',
          aplicacaoPlataforma: 'Rode o cálculo de MRP no Industrial OS para explodir as necessidades de compras e equilibrar as filas de CTs.',
          errosComuns: 'Sequenciar OPs na linha sem conferir as datas de entrega ou as cargas de trabalho dos centros gargalos.',
          resumo: 'PCP otimiza o fluxo de materiais e evita atrasos garantindo o balanceamento entre demanda e capacidade.',
          quiz: [
            {
              question: 'Qual a função do algoritmo MRP (Material Requirements Planning)?',
              options: ['Calcular as quantidades exatas de materiais a comprar e fabricar com base nas OPs', 'Gerenciar a folha de pagamento', 'Monitorar o MTTR das máquinas'],
              correctIndex: 0,
              explanation: 'O MRP realiza a explosão de necessidades de materiais com base na BOM e estoques.'
            }
          ],
          exercicioPratico: 'Dada uma capacidade de 40 colchões/dia e uma demanda de 120 colchões, organize o plano de turnos semanais.'
        }
      },
      {
        id: 'slide-4-21',
        title: 'Módulo 20: Custos Industriais',
        subtitle: 'A Composição Exata do Valor do Produto',
        freeText: 'Um gestor industrial precisa saber exatamente quanto custa cada minuto de operação e cada grama de material para garantir a lucratividade e competitividade da fábrica. No Industrial OS, os custos são divididos em várias categorias.',
        iconName: 'TrendingUp',
        layout: 'step-by-step',
        listItems: [
          { id: 'li-21-1', text: 'Matéria-Prima Direta: Custo de todos os insumos físicos consumidos na BOM' },
          { id: 'li-21-2', text: 'Mão de Obra Direta (MOD): Custo do tempo gasto pelos operadores na linha' },
          { id: 'li-21-3', text: 'Custos de Ativos: Depreciação das máquinas, energia elétrica consumida e manutenção' },
          { id: 'li-21-4', text: 'Custos Indiretos (CIF): Aluguel do galpão, supervisores, pcp e administração' }
        ],
        tipText: 'Exemplo Prático: Um colchão custa R$ 250 de MP, R$ 30 de MOD e R$ 40 de custos indiretos. Total: R$ 320. Margem: R$ 180.',
        alertText: 'Erro Comum: Ignorar as taxas de refugo e perdas invisíveis ao calcular os custos unitários.',
        moduleDetails: {
          objetivo: 'Explicar a composição de custos (Matéria-prima, MOD, Custos de ativos, CIF) e cálculo de margem.',
          conceitos: 'Custo total = MP + Mão de Obra Direta + Custos Diretos de Máquinas + Custos Indiretos de Fabricação (CIF).',
          fluxoText: 'MP Unitário + Tempo MOD (Minutos) + Taxa Máquina + Rateio CIF → Custo Total Colchão',
          exemploPratico: 'Um colchão consome R$ 250 de MP, R$ 30 de MOD e R$ 40 de custos indiretos. Custo: R$ 320. Preço: R$ 500. Margem: R$ 180.',
          aplicacaoPlataforma: 'Monitore a variação de custos de MP em tempo real e analise as margens de rentabilidade de cada linha.',
          errosComuns: 'Desconsiderar o custo do refugo e do tempo de setup inativo ao compor o custo de fabricação.',
          resumo: 'Saber o custo real de transformação é o único caminho seguro para definir preços e garantir rentabilidade.',
          quiz: [
            {
              question: 'Quais os componentes do custo industrial de transformação?',
              options: ['Matéria-Prima, Mão de Obra Direta (MOD) e Custos Indiretos (CIF)', 'Apenas o preço pago pelo tecido', 'Apenas as despesas de manutenção preventiva'],
              correctIndex: 0,
              explanation: 'O custo fabril engloba todos os insumos consumidos, a força de trabalho direta e as despesas operacionais da fábrica.'
            }
          ],
          exercicioPratico: 'Simule la composição de custos de um colchão padrão listando MP, MOD e estimativa de custos adicionais.'
        }
      },
      {
        id: 'slide-4-22',
        title: 'Módulo 21: Eficiência Global (OEE)',
        subtitle: 'A Métrica Suprema do Desempenho Industrial',
        freeText: 'O OEE (Overall Equipment Effectiveness) mede a eficiência global de um ativo. Ele responde a uma pergunta simples: De todo o tempo em que planejamos rodar, quanto realmente produzimos de forma útil e com qualidade? O OEE é calculado pelo produto de três fatores.',
        imageUrl: '/assets/dashboard.png',
        iconName: 'BarChart3',
        layout: 'content',
        tipText: 'Exemplo Prático: Disponibilidade (85%) x Performance (90%) x Qualidade (98%) = 75% OEE.',
        alertText: 'Erro Comum: Achar que a fábrica está eficiente só porque está cheia de ordens de produção.',
        moduleDetails: {
          objetivo: 'Ensinar a métrica de desempenho industrial suprema (OEE).',
          conceitos: 'OEE mede a eficiência global dos ativos: OEE = Disponibilidade × Performance × Qualidade. Padrão mundial é > 85%.',
          fluxoText: 'Tempo Programado (100%) → Paradas (Disponibilidade) → Lerdeza (Performance) → Refugo (Qualidade) = OEE',
          exemploPratico: 'Uma máquina roda 90% do tempo, a 90% da velocidade nominal, e gera 98% de peças aprovadas. OEE = 0.9 x 0.9 x 0.98 = 79.3%.',
          aplicacaoPlataforma: 'Monitore os dashboards de OEE em tempo real alimentados diretamente pelos apontamentos dos operadores.',
          errosComuns: 'Achar que a fábrica está eficiente só porque está movimentada, ocultando lentidão de máquinas ou alto refugo.',
          resumo: 'OEE expõe as três grandes perdas industriais: tempo parado, velocidade reduzida e falhas de qualidade.',
          quiz: [
            {
              question: 'Como é calculado o OEE?',
              options: ['Multiplicando os fatores de Disponibilidade, Performance e Qualidade', 'Somando as horas extras do turno', 'Dividindo a capacidade nominal pelas horas de manutenção'],
              correctIndex: 0,
              explanation: 'O OEE é o produto dos três índices percentuais, refletindo a eficiência real e total.'
            }
          ],
          exercicioPratico: 'Calcule o OEE de um turno: Disponibilidade de 90%, Performance de 85% e Qualidade de 95%.'
        }
      },
      {
        id: 'slide-4-23',
        title: 'Módulo 22: Inteligência Artificial Industrial',
        subtitle: 'O Copilot IA como Overlay de Decisão',
        freeText: 'A inteligência artificial industrial do Industrial OS não cria ou inventa informações. Ela atua como um "overlay" inteligente analisando os seus dados de BOM, tempos de cronometragem, histórico de qualidade, PCP e índices de manutenção para sugerir planos otimizados.',
        imageUrl: '/assets/dashboard-mature.png',
        iconName: 'Sparkles',
        layout: 'content',
        tipText: 'Exemplo Prático: O Copilot analisa os últimos 10 lotes e alerta: "Setor de Costura perde 15% de eficiência às sextas-feiras após as 15:00. Sugiro balanceamento."',
        alertText: 'Erro Comum: Esperar que o Copilot resolva gargalos se o chão de fábrica não realizar apontamentos diários corretos.',
        moduleDetails: {
          objetivo: 'Explicar como o Copilot IA interpreta dados para sugerir ações.',
          conceitos: 'A IA não inventa dados; ela interpreta BOM, tempos, apontamentos e qualidade para gerar previsões de atrasos e recomendações.',
          fluxoText: 'Bando de Dados Industrial OS → Análise Padrões IA → Geração de Recomendações → Decisão do Gestor',
          exemploPratico: 'O Copilot analisa paradas e alerta: "Setor de Costura perde 15% de eficiência às sextas à tarde. Recomendo balanceamento."',
          aplicacaoPlataforma: 'Acesse o chat integrado do Copilot em cada tela para pedir relatórios, diagnósticos e simulações.',
          errosComuns: 'Esperar que a IA traga soluções milagrosas se a fábrica não realiza os apontamentos diários corretos.',
          resumo: 'O Copilot Industrial é um copiloto de decisão estratégica alimentado pela precisão do seu chão de fábrica.',
          quiz: [
            {
              question: 'Qual a regra de ouro para a inteligência artificial industrial funcionar?',
              options: ['Depende 100% da precisão e disciplina dos apontamentos de campo', 'Ela funciona sozinha sem dados', 'Basta ligar o compressor de ar'],
              correctIndex: 0,
              explanation: 'Sem dados reais e confiáveis cadastrados e apontados, as análises da IA perdem o sentido (conceito de Garbage In, Garbage Out).'
            }
          ],
          exercicioPratico: 'Escreva uma pergunta simulada que você faria ao Copilot sobre gargalos no setor de corte.'
        }
      },
      {
        id: 'slide-4-24',
        title: 'Resumo Geral do Aprendizado',
        subtitle: 'A Jornada de Maturidade Industrial',
        freeText: 'Parabéns por concluir a trilha de capacitação! Agora você detém os conceitos teóricos de engenharia e compreende como o Industrial OS representa cada elemento físico e lógico da fábrica. Vamos verificar se tudo foi consolidado:',
        iconName: 'CheckSquare',
        layout: 'checklist',
        listItems: [
          { id: 'li-24-1', text: 'Entendo que a fábrica física (Unidades, Galpões, Setores, Máquinas) precede o sistema' },
          { id: 'li-24-2', text: 'Compreendo a diferença entre Matéria-Prima (comprada) e Componente (produzido)' },
          { id: 'li-24-3', text: 'Sei que a BOM (Lista de Materiais) e os Roteiros com Tempos Cronometrados guiam o PCP' },
          { id: 'li-24-4', text: 'Compreendo que apontar paradas, setup e refugo garante a precisão dos custos e do OEE' }
        ],
        tipText: 'Dica de Sucesso: Inicie a implantação gradualmente. Cadastre primeiro a estrutura, depois os recursos e insumos, e só então lance as ordens de produção.',
        alertText: 'Atenção: A precisão do Industrial OS depende da disciplina diária de cada operador no chão de fábrica.',
        highlightText: 'Avaliação Final: Realize o exercício de simulação completo no cockpit para obter sua certificação de Especialista em Industrial OS.'
      },
      {
        id: 'slide-4-25',
        title: 'Trilha Concluída com Sucesso!',
        subtitle: 'Pronto para Operar o Cockpit Industrial',
        freeText: 'Você cruzou a linha de chegada de forma espetacular. Agora, você domina as ferramentas necessárias para sincronizar o chão de fábrica, reduzir perdas, otimizar capacidades e liderar a transformação com o apoio da Inteligência Artificial do Industrial OS!\n\nSeu certificado foi emitido e registrado no seu perfil de usuário.',
        iconName: 'Award',
        layout: 'conclusion'
      }
    ]
  }
];
