import { Slide, Category, Status, SlideLayout } from '../types';

export interface ModuleTemplate {
  id: string;
  name: string;
  category: Category;
  sinopse: string;
  slides: {
    title: string;
    subtitle: string;
    freeText: string;
    layout: SlideLayout;
    iconName: string;
    imageUrl?: string;
    listItems?: string[];
  }[];
}

export const MODULE_TEMPLATES: ModuleTemplate[] = [
  {
    id: 'empresa',
    name: 'Cadastro de Identidade da Empresa',
    category: 'Cadastros',
    sinopse: 'Aprenda a cadastrar os dados oficiais da fábrica (Razão Social, CNPJ e logo) para validação fiscal e relatórios.',
    slides: [
      {
        title: 'BEM-VINDO: IDENTIDADE DA FABRICA',
        subtitle: 'CONTEXTO OPERACIONAL DO NEGÓCIO',
        freeText: 'Antes de iniciar qualquer atividade produtiva ou emitir documentos, a empresa precisa cadastrar sua identidade oficial e logotipo no sistema. Todas as ordens de produção, etiquetas de embalagem e relatórios comerciais utilizarão esses mesmos dados centrais.',
        layout: 'hero',
        iconName: 'BookOpen'
      },
      {
        title: 'O PROBLEMA QUE RESOLVEMOS',
        subtitle: 'O que o descontrole de dados cadastrais gera?',
        freeText: 'Manter a fábrica funcionando com os dados desatualizados ou sem cadastro inicial gera prejuízos graves no dia a dia físico do pavilhão comercial.',
        layout: 'bullets-only',
        iconName: 'AlertCircle',
        listItems: [
          'Relatórios gerenciais e comprovantes de carga saem sem marcas ou CNPJ oficiais',
          'Etiquetas de identificação de caixas e pilhas saem sem identificação da empresa',
          'Dificuldade extrema de faturamento físico de cargas por divergências fiscais na barreira'
        ]
      },
      {
        title: 'COMO O INDUSTRIAL OS AJUDA',
        subtitle: 'Centralização de dados fiscais e gerenciais',
        freeText: 'A tela de cadastro unificado do Industrial OS consolida as informações da sua matriz e filiais, servindo como uma fonte única de verdade para que todos os documentos se mantenham profissionais e perfeitamente ajustados à legislação.',
        layout: 'text-only',
        iconName: 'Cpu'
      },
      {
        title: 'ONDE ENCONTRAR NO SISTEMA',
        subtitle: 'Caminho simplificado e tela indicada',
        freeText: 'Menu Principal Superior > Painel de Configurações > Identidade da Empresa\n\nNavegue utilizando uma conta com permissão administrativa (Gestor, RH ou Dono) para visualizar os campos de alteração de dados cadastrais.',
        layout: 'split-image',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        iconName: 'LayoutGrid'
      },
      {
        title: 'PASSO A PASSO DO CADASTRO',
        subtitle: 'Roteiro prático para quem opera',
        freeText: '1. Acesse a tela de Configurações da Empresa.\n2. Preencha a Razão Social completa e Inscrição Estadual.\n3. Digite o CNPJ sem pontos de formatação (o sistema organiza automático).\n4. Insira a foto do Logotipo oficial da fábrica.\n5. Clique no botão de salvamento no rodapé.',
        layout: 'step-by-step',
        iconName: 'Settings2',
        listItems: [
          'Acessar tela de Configurações',
          'Digitar Razão Social e CNPJ',
          'Carregar logotipo padrão da matriz',
          'Gravar alterações no banco central'
        ]
      },
      {
        title: 'EXEMPLO PRÁTICO NA FÁBRICA',
        subtitle: 'Simulação real do nosso chão de fábrica',
        freeText: 'Imagine que acabamos de receber o novo logotipo da nossa matriz: "Colchões Sonho Azul LTDA" (CNPJ 12.345.678/0001-99). Vamos abrir o formulário, substituir o CNPJ anterior, arrastar o logotipo em extensão JPG para o campo de upload e clicar em salvar para aplicar a toda a colchoaria.',
        layout: 'text-only',
        iconName: 'Play'
      },
      {
        title: 'COMO COMPROVAR QUE DEU CERTO',
        subtitle: 'Verificação visual pelo usuário',
        freeText: 'Acesse imediatamente a tela de listagem de Ordens de Produção ou emita um cabeçalho de boletim de pesagem de espuma. A marca "Colchões Sonho Azul" e o novo CNPJ corrigido devem aparecer estampados no canto superior de forma nítida.',
        layout: 'text-only',
        iconName: 'CheckCircle2'
      },
      {
        title: 'VERIFICAÇÃO FINAL BÁSICA',
        subtitle: 'Checklist rápido de encerramento de tarefa',
        freeText: 'O operador administrativo deve certificar-se de preencher e revisar os quatro pontos-chave a seguir antes de fechar o painel de Configurações:',
        layout: 'checklist',
        iconName: 'CheckCircle2',
        listItems: [
          'Dados básicos fiscais preenchidos em concordância com o Sintegra',
          'Logotipo padrão atualizado sem distorções visuais',
          'Endereço físico atualizado para faturamento e logística',
          'Registro gravado com status salvo em banco de dados'
        ]
      }
    ]
  },
  {
    id: 'setores',
    name: 'Cadastro de Setores Físicos',
    category: 'Cadastros',
    sinopse: 'Como desenhar e mapear o pavilhão produtivo de forma visual para organizar a movimentação de materiais e pessoas.',
    slides: [
      {
        title: 'MAPEAMENTO FISICO: SETORES DA FABRICA',
        subtitle: 'CONTEXTO OPERACIONAL DO CHÃO DE FÁBRICA',
        freeText: 'Uma fábrica eficiente precisa dividir seu espaço em setores reconhecíveis (Corte, Costura, Colagem, Almoxarifado). Isso serve para organizarmos o fluxo produtivo, sabendo de onde um material veio, qual operador está encarregado e em qual pavilhão o produto está parado.',
        layout: 'hero',
        iconName: 'BookOpen'
      },
      {
        title: 'O PROBLEMA QUE RESOLVEMOS',
        subtitle: 'O que o desleixo com divisões de setores gera?',
        freeText: 'Tentar coordenar uma indústria no improviso, sem categorizar as divisões do espaço físico de forma lógica no sistema, gera caos e dúvidas constantes.',
        layout: 'bullets-only',
        iconName: 'AlertCircle',
        listItems: [
          'Dificuldade crítica de rastrear em qual setor físico uma falha de colagem ou costura aconteceu',
          'Impossibilidade de medir o tempo de permanência de um colchão em cada fase da linha',
          'Terminais coletores e máquinas ficam desassociados das suas áreas corretas do pavilhão'
        ]
      },
      {
        title: 'COMO O INDUSTRIAL OS AJUDA',
        subtitle: 'O mapa lógico da colchoaria',
        freeText: 'O Industrial OS divide o gêmeo digital do seu pavilhão de produção em setores de maneira rápida e descomplicada. Isso organiza as responsabilidades fiscais, o direcionamento de tarefas automáticas e a segurança física das equipes de cada turno.',
        layout: 'text-only',
        iconName: 'Cpu'
      },
      {
        title: 'ONDE ENCONTRAR NO SISTEMA',
        subtitle: 'Menu, atalhos e telas indicados',
        freeText: 'Menu Principal > Implantação e Modelagem > Setores Produtivos\n\nAbra a listagem usando o menu lateral esquerdo na barrinha de atalhos e selecione a opção com ícone de pirâmide/divisões para ver os setores cadastrados.',
        layout: 'split-image',
        imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        iconName: 'LayoutGrid'
      },
      {
        title: 'PASSO A PASSO DO CADASTRO',
        subtitle: 'Roteiro objetivo para líderes e analistas',
        freeText: '1. Navegue até a tela de Setores Produtivos.\n2. Clique no atalho amarelo "CRIAR NOVO SETOR".\n3. Digite um Nome Simples e bem conhecido pelas equipes (ex. Almoxarifado).\n4. Indique a tipagem correta da área (Escolha Produção, Estoque ou Escritório).\n5. Clique em "Concluir" para salvar.',
        layout: 'step-by-step',
        iconName: 'Settings2',
        listItems: [
          'Acessar tela de Setores no painel de Implantação',
          'Informar o Nome Comum do pavilhão fabril',
          'Escolher tipo de fluxo (Produção/Estoque/Escritório)',
          'Salvar alterações para ativar as permissões'
        ]
      },
      {
        title: 'EXEMPLO PRÁTICO SIMULADO',
        subtitle: 'Aplicação do mundo real',
        freeText: 'Vamos mapear o novo galpão de "Preparação de Molejos de Aço". Acessamos a tela, clicamos em novo setor, preenchemos o nome como "Preparação Molejos", escolhemos a tipagem "Produção" e definimos o Engenheiro de Processo como responsável pelo setor.',
        layout: 'text-only',
        iconName: 'Play'
      },
      {
        title: 'COMO COMPROVAR QUE DEU CERTO',
        subtitle: 'Confirmando o resultado sem complicação',
        freeText: 'Ao cadastrar uma nova Sopradora ou cadastrar uma Ordem de Produção, localize o campo "Setor de Destino". O setor "Preparação Molejos" recém-cadastrado aparecerá na lista de opções pendentes para receber trabalho.',
        layout: 'text-only',
        iconName: 'CheckCircle2'
      },
      {
        title: 'CHECKLIST DE MODELAGEM FÍSICA',
        subtitle: 'Lista de validação final do setor',
        freeText: 'Revise os dados informados antes de consolidar o setor na estrutura geral da fábrica:',
        layout: 'checklist',
        iconName: 'CheckCircle2',
        listItems: [
          'Nome do Setor cadastrado sem abreviações confusas',
          'Finalidade principal (Produção, Estoque) marcada sem erros',
          'Supervisor responsável indicado na ficha de setor',
          'Registro salvo e ativo visível na listagem principal'
        ]
      }
    ]
  },
  {
    id: 'fornecedores',
    name: 'Cadastro de Fornecedores de Insumos',
    category: 'Cadastros',
    sinopse: 'Como registrar os parceiros comerciais da fábrica e registrar prazos de entrega para evitar furos no estoque de espumas.',
    slides: [
      {
        title: 'COMPRAS SEGURAS: CADASTRO DE FORNECEDORES',
        subtitle: 'CONTEXTO OPERACIONAL E LOGÍSTICO',
        freeText: 'Antes de costurar ou espumar qualquer peça, a fábrica precisa comprar os blocos de espuma, tecidos e molas de parceiros de confiança. Cadastrar esses fornecedores e seu tempo de entrega é crucial para o setor de compras negociar prazos com segurança.',
        layout: 'hero',
        iconName: 'BookOpen'
      },
      {
        title: 'O PROBLEMA QUE RESOLVEMOS',
        subtitle: 'O que o descontrole de compras provoca?',
        freeText: 'Trabalhar sem fornecedores organizados no sistema sabota o fluxo diário e causa gargalos dramáticos no pavilhão de produção de colchões.',
        layout: 'bullets-only',
        iconName: 'AlertCircle',
        listItems: [
          'Falta repentina de tecidos de revestimento por atraso de entrega não monitorado',
          'Compras feitas na pressa por valores abusivos com parceiros ruins',
          'Paradas graves da esteira de montagem por escassez de matéria-prima crítica'
        ]
      },
      {
        title: 'COMO O INDUSTRIAL OS AJUDA',
        subtitle: 'Conexão segura com fornecedores de confiança',
        freeText: 'O Industrial OS consolida o catálogo de empresas parceiras que vendem insumos à sua indústria. O sistema monitora o tempo de entrega de cada um deles e calcula o ponto de pedido certo para automatizar as solicitações de reposição.',
        layout: 'text-only',
        iconName: 'Cpu'
      },
      {
        title: 'ONDE ENCONTRAR NO SISTEMA',
        subtitle: 'Prazos e cadastros bem indicados',
        freeText: 'Menu Principal Superior > Cadastros Básicos > Painel de Fornecedores\n\nSelecione o atalho com o ícone de caminhão para abrir a listagem completa. Qualquer membro da gerência ou equipe de suprimentos pode efetuar pesquisas rápidas por nome comercial.',
        layout: 'split-image',
        imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        iconName: 'LayoutGrid'
      },
      {
        title: 'PASSO A PASSO DOS ADICIONAIS',
        subtitle: 'Roteiro linear de campos fundamentais',
        freeText: '1. Clique em "CRIAR REGISTRO" no canto do painel de fornecedores.\n2. Digite o Nome da Empresa Fornecedora sem usar termos confusos complexos.\n3. Preencha o CNPJ oficial do fabricante.\n4. Informe o Tempo Médio que eles gastam para carregar e entregar o material (lead time).\n5. Clique no botão amarelo "Gravar".',
        layout: 'step-by-step',
        iconName: 'Settings2',
        listItems: [
          'Abrir formulário de novo registro de fornecedor',
          'Digitar Nome Comercial e CNPJ fiscal oficial',
          'Registrar data e tempo médio de entrega em dias',
          'Salvar ficha de fornecedores homologados'
        ]
      },
      {
        title: 'EXEMPLO REAL DA NOSSA FABRICA',
        subtitle: 'Aplicação prática para testar conhecimento',
        freeText: 'Vamos simular o cadastro da empresa parceira "Espumas Vale do Aço" (CNPJ 11.222.333/0001-44). Eles nos fornecem tecidos e blocos de espuma D33 e informaram que gastam exatos 5 dias corridos para entregar as cargas no nosso almoxarifado após formalização do pedido.',
        layout: 'text-only',
        iconName: 'Play'
      },
      {
        title: 'COMO COMPROVAR QUE DEU CERTO',
        subtitle: 'Sinalizações de sucesso do sistema',
        freeText: 'O fornecedor "Espumas Vale do Aço" passará a figurar na listagem de parceiros aptos. Quando formos cadastrar a espuma D33 no catálogo de insumos, o sistema já permitirá vincular o item a este fornecedor correspondente de forma direta.',
        layout: 'text-only',
        iconName: 'CheckCircle2'
      },
      {
        title: 'CHECKLIST PARA COMPRAS DE SUCESSO',
        subtitle: 'Rápida verificação dos dados preenchidos',
        freeText: 'Confirme todas as informações fiscais e operacionais na ficha de cadastro antes de fechar a tela:',
        layout: 'checklist',
        iconName: 'CheckCircle2',
        listItems: [
          'Razão Social ou Nome do Fornecedor digitados sem erros',
          'CNPJ fiscal digitado corretamente para link com impostos',
          'Tempo médio de transporte/entrega parametrizado em dias',
          'Ficha salva com status homologado para compras'
        ]
      }
    ]
  },
  {
    id: 'materia_prima',
    name: 'Cadastro de Materias-Primas',
    category: 'Cadastros',
    sinopse: 'Como organizar seu catálogo de tecidos, espumas, molas e zíperes indicando as unidades corretas de medidas de consumo físico.',
    slides: [
      {
        title: 'INSUMOS DO PAVILHÃO: MATÉRIAS-PRIMAS',
        subtitle: 'CONTEXTO OPERACIONAL DE PRODUÇÃO',
        freeText: 'Qualquer item montado na fábrica requer matérias-primas básicas. Na colchoaria, o rolo de tecido de poliéster, blocos de espumas de diversas densidades (D28, D33), molas bonnel e adesivos precisam estar perfeitamente organizados para evitar erros em compras ou no estoque.',
        layout: 'hero',
        iconName: 'BookOpen'
      },
      {
        title: 'O PROBLEMA QUE RESOLVEMOS',
        subtitle: 'O que o desleixo com insumos provoca?',
        freeText: 'Controlar o estoque apenas na papelada ou contar de cabeça os insumos gera atrasos severos e furos gigantescos de inventário na fábrica.',
        layout: 'bullets-only',
        iconName: 'AlertCircle',
        listItems: [
          'Operador inicia a colagem de colchão e descobre no meio do dia que a espuma acabou',
          'Desperdício crítico comprando tecido que já estava mofando nas prateleiras dos fundos',
          'Fichas técnicas saem erradas por confusão em quilo versus metros na saída da máquina'
        ]
      },
      {
        title: 'COMO O INDUSTRIAL OS AJUDA',
        subtitle: 'O manual catálogo técnico de insumos',
        freeText: 'O Industrial OS monta de forma inteligente o mapa de matérias-primas e insumos da fábrica. Ele padroniza as formas de contagem (Metros, Quilogramas, Peças) e mantém o controle de estoque 100% atualizado a cada apontamento dos operadores.',
        layout: 'text-only',
        iconName: 'Cpu'
      },
      {
        title: 'ONDE ENCONTRAR NO SISTEMA',
        subtitle: 'Localizando a base de insumos',
        freeText: 'Menu Lateral Principal > Almoxarifado > Matérias-Primas\n\nAbra a visualização usando o menu esquerdo para conferir quais materiais constam na base, seus saldos em depósito e códigos de identificação interna.',
        layout: 'split-image',
        imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        iconName: 'LayoutGrid'
      },
      {
        title: 'PASSO A PASSO DO CADASTRO',
        subtitle: 'Sua folha de roteiro de cliques',
        freeText: '1. Acesse o menu de Matérias-Primas e clique no botão amarelo "NOVO".\n2. Dê um Nome Claro ao material que o operador usa fisicamente (ex. Espuma D33 13cm).\n3. Escolha a Unidade de Contagem que reflete a realidade (Metros, Quilogramas ou Peças).\n4. Indique o Fornecedor desse material pesquisando na listagem.\n5. Salve o cadastro.',
        layout: 'step-by-step',
        iconName: 'Settings2',
        listItems: [
          'Acessar tela de Matérias-Primas',
          'Definir Descrição Simples do insumo comercial',
          'Marcar se controla em Metros, Kg ou Peças',
          'Gravar dados clicando no botão de salvamento'
        ]
      },
      {
        title: 'EXEMPLO PRÁTICO NA FÁBRICA',
        subtitle: 'Visualizando a simulação real',
        freeText: 'Vamos registrar a "Mola Tipo Bonnel de Aço Carbono". Trata-se de uma peça usada no recheio de colchões de casal e deve ser medida em "Unidades" (peças). Acesse o cadastro, indique a descrição como "Mola Bonnel Casal 15cm", escolha "Unidades" (UN) e associe ao fornecedor homologado correspondente.',
        layout: 'text-only',
        iconName: 'Play'
      },
      {
        title: 'COMO COMPROVAR QUE DEU CERTO',
        subtitle: 'Validação visual imediata do sucesso',
        freeText: 'A mola de aço aparecerá listada no painel principal contendo saldo inicial zerado e o código único correspondente. Quando formos configurar a receita do Colchão de Casal, a mola estará liberada para compor a lista de materiais consumidos.',
        layout: 'text-only',
        iconName: 'CheckCircle2'
      },
      {
        title: 'VERIFICAÇÃO DE INVENTARIO BÁSICO',
        subtitle: 'Checklist para evitar retrabalho cadastral',
        freeText: 'Conclua a verificação dos campos de cadastro com este checklist de quatro itens recomendados:',
        layout: 'checklist',
        iconName: 'CheckCircle2',
        listItems: [
          'Nome comercial do item preenchido de forma simples',
          'Unidade de contagem escolhida corretamente',
          'Cadastro salvo no banco de dados do sistema',
          'Disponível para montagem na engenharia de colchões'
        ]
      }
    ]
  },
  {
    id: 'equipamentos',
    name: 'Cadastro de Equipamentos e Maquinas',
    category: 'Cadastros',
    sinopse: 'Como criar o gêmeo digital dos seus equipamentos (prensas, sopradores e esteiras) para monitorar capacidade e paradas.',
    slides: [
      {
        title: 'RECURSOS ATIVOS: CATALOGO DE EQUIPAMENTOS',
        subtitle: 'CONTEXTO OPERACIONAL DE LINHA',
        freeText: 'As máquinas e equipamentos são os grandes braços de ferro da nossa colchoaria. A sopradora automática, as esteiras rolantes e as prensas térmicas de embalagem precisam estar cadastradas e georreferenciadas na fábrica física para acompanhamento de quebras e eficiência de cada turno.',
        layout: 'hero',
        iconName: 'BookOpen'
      },
      {
        title: 'O PROBLEMA QUE RESOLVEMOS',
        subtitle: 'O que o desnível de monitoramento causa?',
        freeText: 'Rodar uma fábrica inteira torcendo para as máquinas aguentarem o tranco sem registrar seu desempenho acarreta problemas terríveis diariamente.',
        layout: 'bullets-only',
        iconName: 'AlertCircle',
        listItems: [
          'Gerente industrial presume uma velocidade de montagem impossível de fazer no físico',
          'Falta total de histórico sobre qual prensa está parada ou quebrada precisando de técnicos',
          'Máquinas trabalham sobrecarregadas, estourando engrenagens por falta de manutenção preventiva'
        ]
      },
      {
        title: 'COMO O INDUSTRIAL OS AJUDA',
        subtitle: 'Monitoramento dinâmico de recursos físicos',
        freeText: 'O Industrial OS monta a ficha de saúde e capacidade das suas máquinas em tempo real. Ele exibe alarmes na cor amarela quando há paradas de produção ativas e mede a eficiência global dos equipamentos para direcionar melhor os investimentos.',
        layout: 'text-only',
        iconName: 'Cpu'
      },
      {
        title: 'ONDE ENCONTRAR NO SISTEMA',
        subtitle: 'Encontrando o painel das máquinas',
        freeText: 'Menu Superior Lateral > Chão de Fábrica > Recursos e Equipamentos\n\nAbra o visor clicando no atalho do menu lateral que exibe chaves e engrenagens para ver a saúde das prensas e esteiras que operam hoje na colchoaria.',
        layout: 'split-image',
        imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
        iconName: 'LayoutGrid'
      },
      {
        title: 'PASSO A PASSO DO CADASTRO',
        subtitle: 'Roteiro linear rápido',
        freeText: '1. Acesse a tela de Equipamentos do sistema.\n2. Escolha o atalho amarelo de cadastro do formulário.\n3. Dê um Nome Simples e bem reconhecido na fábrica (ex. Sopradora S-50).\n4. Associe a máquina ao Setor físico do pavilhão (Corte, Preparo ou Embalagem).\n5. Clique em "Concluir" para salvar o painel.',
        layout: 'step-by-step',
        iconName: 'Settings2',
        listItems: [
          'Acessar menu de Equipamentos da fábrica',
          'Informar Descrição Prática do recurso produtivo',
          'Fazer o vínculo com o Setor físico correto',
          'Gravar os parâmetros na cor amarela de conclusão'
        ]
      },
      {
        title: 'EXEMPLO REAL DA NOSSA LINHA',
        subtitle: 'Testando os conhecimentos de recursos',
        freeText: 'Vamos simular o cadastro da "Injetora Térmica de Espumas T-800" recém-instalada no pavilhão físico de "Preparo de Linhas". Acessamos a tela de cadastro, preenchemos o modelo correspondente, vinculamos ao setor físico cadastrado e indicamos que ela consome até 120 peças por hora nominal.',
        layout: 'text-only',
        iconName: 'Play'
      },
      {
        title: 'COMO COMPROVAR QUE DEU CERTO',
        subtitle: 'Confirmações visuais na equipe',
        freeText: 'Ao abrir o painel de apontamentos rápido do operador em telas industriais, o recurso "Injetora T-800" estará ativo e disponível. Os líderes do turno já poderão apontar entrada, saída ou paradas preventivas de máquina.',
        layout: 'text-only',
        iconName: 'CheckCircle2'
      },
      {
        title: 'VALUABLE CHECKLIST DE MAQUINAS',
        subtitle: 'Revisão das especificações de fábrica',
        freeText: 'Evite erros técnicos de faturamento com essa rápida verificação final de cadastro:',
        layout: 'checklist',
        iconName: 'CheckCircle2',
        listItems: [
          'Nome simples do maquinário cadastrado',
          'Setor físico de instalação associado',
          'Status operacional inicial marcado como ativo',
          'Salvo e disponível no painel de apontamentos'
        ]
      }
    ]
  },
  {
    id: 'ordem_producao',
    name: 'Geracao de Ordens de Producao',
    category: 'Produção',
    sinopse: 'Como criar Ordens de Produção (OPs) e organizar a fila de prioridades para os operadores do chão de fábrica.',
    slides: [
      {
        title: 'PLANEJAMENTO EM AÇÃO: ORDENS DE PRODUÇÃO',
        subtitle: 'CONTEXTO OPERACIONAL DE FLUXO',
        freeText: 'Quando o setor de vendas confirma um colchão vendido, a fábrica precisa fabricá-lo. Para que o operador do pavilhão corra e monte o item de forma segura e na ordem certa, criamos uma "Ordem de Produção" (OP). Esse documento oficial é a fita que dita qual tarefa deve ser executada.',
        layout: 'hero',
        iconName: 'BookOpen'
      },
      {
        title: 'O PROBLEMA QUE RESOLVEMOS',
        subtitle: 'O que o descontrole de fila produtiva gera?',
        freeText: 'Rodar uma indústria no improvisation ou repassar as vendas aos berros no corredor traz prejuízos operacionais críticos.',
        layout: 'bullets-only',
        iconName: 'AlertCircle',
        listItems: [
          'Operador gasta tempo e cola colchões errados por falta de uma receita escrita nítida',
          'Equipe de faturamento perde prazos com os clientes finais pela falta de controle de entregas',
          'Ninguém no escritório consegue saber se a carga já está embalada ou se ainda está no corte'
        ]
      },
      {
        title: 'COMO O INDUSTRIAL OS AJUDA',
        subtitle: 'Roteiro inteligente de ordens eletrônicas',
        freeText: 'O Industrial OS traduz os pedidos do comercial em Ordens de Produção organizadas e sequenciais. Ele mostra aos líderes do turno o andamento de cada modelo de colchão e monta a receita física correta do que usar de mola e tecido a cada segundo.',
        layout: 'text-only',
        iconName: 'Cpu'
      },
      {
        title: 'ONDE ENCONTRAR NO SISTEMA',
        subtitle: 'Painel geral de atalhos e ordens',
        freeText: 'Menu Superior Central > Linha de Montagem > Ordens de Produção (OP)\n\nClique no atalho vermelho "PAINEL DE ORDENS" para ver as prioridades ativas e acompanhar as listagens planejadas para cada dia de trabalho.',
        layout: 'split-image',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        iconName: 'LayoutGrid'
      },
      {
        title: 'PASSO A PASSO DA CRIAÇÃO',
        subtitle: 'Passos simples e objetivos para analistas',
        freeText: '1. Abra o painel de Ordens de Produção e clique em "NOVA OP".\n2. Escolha qual Modelo de Colchão da lista de produtos o cliente comprou.\n3. Digite a Quantidade de peças necessárias.\n4. Indique a Data Limite obrigatória para que a carga de faturamento ocorra.\n5. Salve de forma instantânea para enviar a tarefa direto à TV dos operadores.',
        layout: 'step-by-step',
        iconName: 'Settings2',
        listItems: [
          'Acessar painel de Ordens de Produção no PCP',
          'Selecionar o Modelo exato a ser fabricado',
          'Digitar a Quantidade e prazos limites de faturamento',
          'Salvar ficha de OP planejada para a colchoaria'
        ]
      },
      {
        title: 'EXEMPLO REAL DA NOSSA ESTEIRA',
        subtitle: 'Simulação prática do roteiro de prioridade',
        freeText: 'Imagine que temos um lote pendente de 50 unidades do "Colchão Casal de Espuma D33" para o cliente da próxima sexta-feira. Abrimos o de criação, selecionamos o modelo casal D33 na base, indicamos o número 50 e definimos o prazo até quinta-feira para folga logística, gravando o processo.',
        layout: 'text-only',
        iconName: 'Play'
      },
      {
        title: 'COMO COMPROVAR QUE DEU CERTO',
        subtitle: 'Sinalizações de sucesso do PCP',
        freeText: 'O Industrial OS listará a nova Ordem com status "Planejada" e emitirá o documento padrão contendo código de barras para o supervisor do pavimento. Os operadores já podem acessar seus coletores portáteis de dados e puxar a carga para trabalhar.',
        layout: 'text-only',
        iconName: 'CheckCircle2'
      },
      {
        title: 'VERIFICAÇÃO DA INTENSIDADE DE OP',
        subtitle: 'Checklist para validar frentes de trabalho',
        freeText: 'Controle o roteiro das atividades no chão de fábrica marcando as seguintes caixas antes de rodar o turno:',
        layout: 'checklist',
        iconName: 'CheckCircle2',
        listItems: [
          'Modelo de colchão selecionado corretamente',
          'Quantidade a fabricar digitada sem erros',
          'Prazo limite de entrega acordado preenchido',
          'Ordem gerada e visível na esteira da fábrica'
        ]
      }
    ]
  },
  {
    id: 'apontamentos',
    name: 'Apontamento Geral de Produção',
    category: 'Produção',
    sinopse: 'Descubra como os operadores realizam o apontamento de peças prontas e registram refugos no terminal do chão de fábrica.',
    slides: [
      {
        title: 'CHÃO DE FÁBRICA ATIVO: APONTAMENTOS',
        subtitle: 'CONTEXTO OPERACIONAL DE REGISTRO',
        freeText: 'Quando os operadores terminam uma colagem ou finalizam uma costura física, eles precisam contar quantas peças boas concluíram e quantas saíram com defeito. Isso serve para acompanharmos o ritmo da esteira e atualizar o estoque automaticamente.',
        layout: 'hero',
        iconName: 'BookOpen'
      },
      {
        title: 'O PROBLEMA QUE RESOLVEMOS',
        subtitle: 'O que a falta de apontamentos provoca?',
        freeText: 'Produzir sem registrar as etapas e os refugos no Industrial OS sabota toda a produtividade e gera perdas que ninguém consegue enxergar.',
        layout: 'bullets-only',
        iconName: 'AlertCircle',
        listItems: [
          'O gerente planeja o carregamento de cargas sem saber o que já está pronto',
          'Matérias-primas somem das prateleiras pois não houve baixa de consumo no sistema',
          'A equipe comercial dá informações falsas de prazos para os clientes'
        ]
      },
      {
        title: 'COMO O INDUSTRIAL OS AJUDA',
        subtitle: 'Digitalização simples para o operador',
        freeText: 'O Industrial OS traz uma interface amigável e limpa para as TVs e coletores do pavilhão físico. Em poucos toques na tela, o operador seleciona seu nome, aponta as peças corretas feitas e o supervisor enxerga a eficiência em tempo real.',
        layout: 'text-only',
        iconName: 'Cpu'
      },
      {
        title: 'ONDE ENCONTRAR NO SISTEMA',
        subtitle: 'Acessando o terminal industrial',
        freeText: 'Menu Principal > Chão de Fábrica > Painel de Apontamentos\n\nQualquer operador ou líder de equipe pode acessar o terminal direto nos computadores de borda espalhados pela linha de colagem.',
        layout: 'split-image',
        imageUrl: 'https://images.unsplash.com/photo-1581091225303-d2411e28228d?auto=format&fit=crop&w=800&q=80',
        iconName: 'LayoutGrid'
      },
      {
        title: 'PASSO A PASSO DA APURAÇÃO',
        subtitle: 'Sendo prático no pavimento de trabalho',
        freeText: '1. Localize a Ordem de Produção (OP) em andamento no seu painel.\n2. Escolha sua máquina operacional ativa (ex: prensa de ensaque).\n3. Selecione seu CPF/Nome na ficha de Operador.\n4. Digite a quantidade de Peças Boas prontas e os tecidos com Defeito (Refugo).\n5. Clique em concluir e finalize o registro.',
        layout: 'step-by-step',
        iconName: 'Settings2',
        listItems: [
          'Escolher a OP correspondente com o leitor óptico',
          'Confirmar o recurso físico que está operando',
          'Digitar peças conformes feitas e refugo gerado',
          'Registrar apontamento finalizando o ciclo de máquina'
        ]
      },
      {
        title: 'EXEMPLO PRÁTICO SIMULADO',
        subtitle: 'Exercitando a rotina diária',
        freeText: 'Imagine que Ronaldo Silva está operando a prensa térmica. No final do lote, ele produziu 20 capas conformes e teve 1 tecido descartado (rasgado). Ele abre o painel, digita "20" no campo de peças boas, indica "1" no campo de refugos por motivo "costura torta" e clica em registrar.',
        layout: 'text-only',
        iconName: 'Play'
      },
      {
        title: 'COMO COMPROVAR QUE DEU CERTO',
        subtitle: 'Indicadores automatizados na indústria',
        freeText: 'A barra de progresso da OP correspondente sumirá da fila de tarefas pendentes e a TV central registrará novos dados de eficiência. O estoque de tecidos deduzirá instantaneamente as matérias-primas consumidas.',
        layout: 'text-only',
        iconName: 'CheckCircle2'
      },
      {
        title: 'VERIFICAÇÃO DE FINAL DE TURNO',
        subtitle: 'Checklist para operadores do chão de fábrica',
        freeText: 'Preencha os apontamentos respeitando as seguintes confirmações diárias:',
        layout: 'checklist',
        iconName: 'CheckCircle2',
        listItems: [
          'Ordem de Produção selecionada',
          'Identidade do Operador selecionada',
          'Quantidade de peças boas e refugos digitada',
          'Apontamento registrado e salvo'
        ]
      }
    ]
  },
  {
    id: 'estoque_industrial',
    name: 'Estoque Industrial e Alertas',
    category: 'Estoque',
    sinopse: 'Como definir metas de estoque mínimo e receber avisos visuais automáticos quando os insumos estiverem acabando.',
    slides: [
      {
        title: 'ALMOXARIFADO PROTEGIDO: NÍVEIS DE ESTOQUE',
        subtitle: 'CONTEXTO OPERACIONAL DE SUPRIMENTOS',
        freeText: 'Saber a quantidade exata de zíperes, linhas de costura ou molas em depósito é vital. A fábrica precisa manter um saldo mínimo de segurança de insumos para que as compras sejam realizadas de forma antecipada, garantindo que nada falte na linha.',
        layout: 'hero',
        iconName: 'BookOpen'
      },
      {
        title: 'O PROBLEMA QUE RESOLVEMOS',
        subtitle: 'O que o desleixo com faltas de insumos provoca?',
        freeText: 'Trabalhar sem traçar metas de quantidades mínimas e sem alarmes adequados sabota as finanças e causa furos gigantes de inventário.',
        layout: 'bullets-only',
        iconName: 'AlertCircle',
        listItems: [
          'A fábrica é forçada a paralisar esteiras inteiras de montagem porque as molas acabaram no meio da noite',
          'Compras feitas em caráter de emergência na correria por altos valores abusivos com frotistas locais',
          'Espaço valioso no depósito ocupado por materiais em excesso que acabam mofando nos fundos'
        ]
      },
      {
        title: 'COMO O INDUSTRIAL OS AJUDA',
        subtitle: 'Sinalizações e alarmes de segurança do almoxarifado',
        freeText: 'O Industrial OS monitora de forma incansável todos os códigos de barras de materiais guardados. Quando o saldo físico de molas ou TNT cai abaixo do mínimo de segurança pré-estabelecido, ele aciona avisos visuais na cor vermelha sugerindo ressuprimento.',
        layout: 'text-only',
        iconName: 'Cpu'
      },
      {
        title: 'ONDE ENCONTRAR NO SISTEMA',
        subtitle: 'Visores e alertas na fábrica',
        freeText: 'Menu Lateral Principal > Módulos de Estoque > Alertas de Níveis Críticos\n\nAbra o visor clicando no ícone de estante/depósito para gerenciar os saldos e alterar as configurações de avisos automáticos.',
        layout: 'split-image',
        imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        iconName: 'LayoutGrid'
      },
      {
        title: 'PASSO A PASSO DA DEFINIÇÃO',
        subtitle: 'Mapeando alarmes na equipe',
        freeText: '1. Selecione o material desejado digitando o nome comercial.\n2. Visualize as colunas de saldos atuais em depósito.\n3. Vá até a caixa "Estoque Mínimo" e digite a meta de segurança.\n4. Defina se o aviso de compras enviará alertas automáticos por email.\n5. Salve as novas regras de níveis.',
        layout: 'step-by-step',
        iconName: 'Settings2',
        listItems: [
          'Buscar o insumo no módulo de Estoque Industrial',
          'Definir a quantidade física mínima de segurança',
          'Ativar o aviso automático de compras e PCP',
          'Confirmar no botão de salvamento no painel'
        ]
      },
      {
        title: 'EXEMPLO DE ROTINA LOGÍSTICA',
        subtitle: 'Testando os conhecimentos de materiais',
        freeText: 'Vamos simular o controle das molas de casal: determinamos que precisamos ter pelo menos 20 caixas guardadas para rodar a semana sem paradas. Preenchemos o campo Estoque Mínimo com "20". Se no apontamento de OPs as retiradas fizerem o saldo cair para 19, o aviso é disparado.',
        layout: 'text-only',
        iconName: 'Play'
      },
      {
        title: 'COMO COMPROVAR QUE DEU CERTO',
        subtitle: 'Resultados visuais imediatos',
        freeText: 'O painel principal exibirá a linha das molas em destaque na cor vermelha contendo um símbolo de atenção. A equipe administrativa de compras verá que este item foi direcionado para a fila de solicitação de cotações automáticas.',
        layout: 'text-only',
        iconName: 'CheckCircle2'
      },
      {
        title: 'CHECKLIST DE ENGENHARIA DE MATERIAIS',
        subtitle: 'Rápido monitoramento final de processos',
        freeText: 'Mantenha os almoxarifados abastecidos conferindo e preenchendo os seguintes dados cadastrais:',
        layout: 'checklist',
        iconName: 'CheckCircle2',
        listItems: [
          'Material selecionado na listagem',
          'Estoque Mínimo de segurança indicado',
          'Opção de alerta visual ativa',
          'Níveis gravados com sucesso'
        ]
      }
    ]
  },
  {
    id: 'qualidade',
    name: 'Gestão Básica de Qualidade',
    category: 'Qualidade',
    sinopse: 'Como realizar laudos de inspeção visual objetivos no fim da esteira para garantir a entrega de colchões perfeitos.',
    slides: [
      {
        title: 'CLIENTE SATISFEITO: GARANTIA DE QUALIDADE',
        subtitle: 'CONTEXTO OPERACIONAL DE EXPEDIÇÃO',
        freeText: 'Antes de colocar o colchão no caminhão de frete, precisamos realizar uma checagem rigorosa: o tecido está perfeitamente limpo? A costura está firme e nas medidas certas? O molejo está firme? Controlar a qualidade de cada lote evita devoluções e protege o nome da fábrica.',
        layout: 'hero',
        iconName: 'BookOpen'
      },
      {
        title: 'O PROBLEMA QUE RESOLVEMOS',
        subtitle: 'O que o desleixo com qualidade acarreta?',
        freeText: 'Despachar mercadorias baseando-se apenas na sorte que tudo esteja correto traz perdas severas de reputação e finanças.',
        layout: 'bullets-only',
        iconName: 'AlertCircle',
        listItems: [
          'Colchões rasgados, manchados de óleo ou com costura torta chegam às lojas e casas',
          'Foguetes de devoluções destruindo a margem de lucro por reinversão de frete de volta à fábrica',
          'Inspeções feitas de qualquer jeito no pavilhão sem deixar anotações ou registros de quem aprovou'
        ]
      },
      {
        title: 'COMO O INDUSTRIAL OS AJUDA',
        subtitle: 'Fichas limpas e testes práticos objetivos',
        freeText: 'O Industrial OS traz fichas de auditoria de qualidade que podem ser preenchidas rapidamente de qualquer tablet ou visor na esteira. O controle de qualidade passa a registrar quem auditou, quais foram os critérios testados e emite carimbos de liberação automáticos.',
        layout: 'text-only',
        iconName: 'Cpu'
      },
      {
        title: 'ONDE ENCONTRAR NO SISTEMA',
        subtitle: 'Encontrando o painel de laudos',
        freeText: 'Menu Principal > Monitoramento > Laudos de Qualidade e Inspeção\n\nQualquer supervisor de turno, inspetor ou líder de qualidade pode abrir o painel contendo as fichas pendentes de aprovação e liberar os lotes prontos para faturamento.',
        layout: 'split-image',
        imageUrl: 'https://images.unsplash.com/photo-1581091225303-d2411e28228d?auto=format&fit=crop&w=800&q=80',
        iconName: 'LayoutGrid'
      },
      {
        title: 'PASSO A PASSO DA INSPECAO',
        subtitle: 'Procedimento correto rápido de auditoria',
        freeText: '1. Abra a tela de Inspeções e clique em "EFETUAR LAUDO".\n2. Busque pelo número da OP ou arraste o código de barras do lote.\n3. Analise a peça física e marque "OK" ou "REJEITADO" para os critérios básicos.\n4. Caso rejeitado, descreva o defeito simplificado.\n5. Clique em "CONCLUIR LAUDO".',
        layout: 'step-by-step',
        iconName: 'Settings2',
        listItems: [
          'Localizar e abrir a ficha de vistoria do lote',
          'Executar a checagem dos testes visuais no rolo/peça',
          'Marcar as opções de aprovação do controle',
          'Gravar o laudo no botão amarelo no rodapé'
        ]
      },
      {
        title: 'EXEMPLO REAL DA NOSSA LINHA',
        subtitle: 'Testando os conhecimentos de laudos',
        freeText: 'Vamos auditar o lote 103 de colchões solteiro: checamos a costura do tecido (OK), conferimos se o selo está costurado reto (OK), mas o tecido lateral possui uma pequena mancha de sujeira de cola do bico de colagem. Marcamos Rejeitado por motivo "Sujeira" e enviamos de volta para o Setor de Retrabalho.',
        layout: 'text-only',
        iconName: 'Play'
      },
      {
        title: 'COMO COMPROVAR QUE DEU CERTO',
        subtitle: 'Liberação expressa para expedição',
        freeText: 'A etiqueta correspondente à Ordem de Produção ou código de barras do produto receberá o carimbo verde de "APROVADO" de forma digital. O setor de carregamento e expedição verá que a carga está liberada de forma 100% segura para faturamento.',
        layout: 'text-only',
        iconName: 'CheckCircle2'
      },
      {
        title: 'COMPREHENSIVE CHECKLIST CRITERIOS',
        subtitle: 'Validação final de testes na colchoaria',
        freeText: 'Finalize a vistoria da peça confirmando e preenchendo os seguintes requisitos cruciais:',
        layout: 'checklist',
        iconName: 'CheckCircle2',
        listItems: [
          'Número do lote da colchoaria selecionado',
          'Testes visuais executados na peça física',
          'Motivo do refugo preenchido se reprovado',
          'Laudo de Inspeção gerado e transmitido'
        ]
      }
    ]
  }
];

export function generateSlidesForModule(
  moduleId: string,
  customTitle?: string,
  customDesc?: string,
  category?: Category,
  desiredSlideCount: number = 8
): Slide[] {
  const template = MODULE_TEMPLATES.find(t => t.id === moduleId);
  let baseSlides: Slide[] = [];

  if (!template) {
    const title = customTitle || 'Módulo Industrial OS';
    const cat = category || 'Cadastros';

    baseSlides = [
      {
        id: 's-g1-' + Date.now(),
        title: `TREINAMENTO: ${title.toUpperCase()}`,
        subtitle: '1. CONTEXTO OPERACIONAL NA FÁBRICA',
        freeText: 'Cada atividade na nossa fábrica segue um processo do mundo real que precisamos compreender de forma humana e simples antes de mexer em qualquer tela do sistema.',
        layout: 'hero',
        iconName: 'BookOpen'
      },
      {
        id: 's-g2-' + Date.now(),
        title: 'O PROBLEMA QUE RESOLVEMOS',
        subtitle: '2. O que acontece se este processo não existir?',
        freeText: 'Executar atividades sem um fluxo claro de organização física e sem controle digital gera perdas operacionais invisíveis a cada segundo trabalhados.',
        layout: 'bullets-only',
        iconName: 'AlertCircle',
        listItems: [
          { id: 'b1-' + Date.now(), text: 'Desorganização de tarefas com operadores perdidos no pavilhão' },
          { id: 'b2-' + Date.now(), text: 'Falta crítica de controle de insumos e matérias-primas na colagem' },
          { id: 'b3-' + Date.now(), text: 'Dados em branco que impedem faturamento e causam atrasos ao cliente' }
        ]
      },
      {
        id: 's-g3-' + Date.now(),
        title: 'COMO O INDUSTRIAL OS NOS AJUDA',
        subtitle: '3. A ferramenta aliada da nossa colchoaria',
        freeText: 'O Industrial OS atua como um repositório central que organiza e rastreia o andamento de cada peça produzida, conectando o escritório comercial ao operador de máquina.',
        layout: 'text-only',
        iconName: 'Cpu'
      },
      {
        id: 's-g4-' + Date.now(),
        title: 'ONDE REALIZAR NO SISTEMA',
        subtitle: '4. Menu, atalho e campos de preenchimento',
        freeText: `Menu Superior Lateral > ${cat} > Painel de Controle\n\nNavegue utilizando os botões de atalhos identificados nas barra lateral cinza-escura para exibir o visor da funcionalidade.`,
        layout: 'split-image',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        iconName: 'LayoutGrid'
      },
      {
        id: 's-g5-' + Date.now(),
        title: 'PASSO A PASSO DA ATIVIDADE',
        subtitle: '5. Roteiro sequencial simples de cliques',
        freeText: '1. Abra a tela correspondente no menu de controle.\n2. Clique no atalho destacado em cor amarela "Novo Registro".\n3. Preencha os campos básicos utilizando termos práticos comuns (descrição e prazos).\n4. Clique em "Concluir" ou "Salvar" para confirmar no banco.',
        layout: 'step-by-step',
        iconName: 'Settings2',
        listItems: [
          { id: 'sb1-' + Date.now(), text: 'Acessar a tela correta indicada pelo supervisor' },
          { id: 'sb2-' + Date.now(), text: 'Preencher campos essenciais sem jargões complexos' },
          { id: 'sb3-' + Date.now(), text: 'Ativar alertas ou prazos necessários na ficha' },
          { id: 'sb4-' + Date.now(), text: 'Gravar informações salvando o formulário no sistema' }
        ]
      },
      {
        id: 's-g6-' + Date.now(),
        title: 'EXEMPLO PRÁTICO SIMULADO',
        subtitle: '6. Aplicação direta no mundo real',
        freeText: `Imagine que precisamos simular a primeira atividade teórica de ${title} para um novo lote. Abrimos o formulário com o supervisor de turno, digitamos a descrição prática, indicamos as metas ou quantidades normativas da fábrica e salvamos para registrar no Industrial OS.`,
        layout: 'text-only',
        iconName: 'Play'
      },
      {
        id: 's-g7-' + Date.now(),
        title: 'COMO COMPROVAR QUE DEU CERTO',
        subtitle: '7. Confirmando e validando os resultados',
        freeText: 'Os dados recém-cadastrados ou registrados aparecerão imediatamente listados no grid principal de busca do Industrial OS com o carimbo de confirmação visual ativo e cor correspondente.',
        layout: 'text-only',
        iconName: 'CheckCircle2'
      },
      {
        id: 's-g8-' + Date.now(),
        title: 'CHECKLIST RAPIDO DE AUDITORIA',
        subtitle: '8. Perguntas chaves de encerramento de circuito',
        freeText: 'Responda se as quatro tarefas cruciais da atividade foram compreendidas antes de fechar o sistema e seguir para a montagem:',
        layout: 'checklist',
        iconName: 'CheckCircle2',
        listItems: [
          { id: 'ck1-' + Date.now(), text: 'Atividade real compreendida no chão de fábrica' },
          { id: 'ck2-' + Date.now(), text: 'Informações chaves devidamente selecionadas' },
          { id: 'ck3-' + Date.now(), text: 'Clique inicial de salvamento efetuado' },
          { id: 'ck4-' + Date.now(), text: 'Sucesso confirmado na listagem geral' }
        ]
      }
    ];
  } else {
    baseSlides = template.slides.map((s, idx) => {
      const listItems = s.listItems?.map((text, lIdx) => ({
        id: `list-${idx}-${lIdx}-${Date.now()}`,
        text,
        checked: false
      })) || undefined;

      return {
        id: `slide-${template.id}-${idx}-${Date.now()}`,
        title: s.title,
        subtitle: s.subtitle,
        freeText: s.freeText,
        layout: s.layout,
        imageUrl: s.imageUrl,
        iconName: s.iconName,
        listItems
      };
    });
  }

  // Handle desired slide count
  const L = baseSlides.length;
  if (desiredSlideCount <= 0) desiredSlideCount = 1;

  if (desiredSlideCount === L) {
    return baseSlides;
  }

  if (desiredSlideCount < L) {
    // Slice base slides, keeping introduction and conclusion (first & last)
    if (desiredSlideCount === 1) {
      return [baseSlides[0]];
    }
    const result: Slide[] = [];
    result.push(baseSlides[0]); // Intro
    
    const numMiddleNeeded = desiredSlideCount - 2;
    const middleSlidesPool = baseSlides.slice(1, L - 1);
    
    if (numMiddleNeeded > 0 && middleSlidesPool.length > 0) {
      for (let i = 0; i < numMiddleNeeded; i++) {
        const indexToPick = Math.floor((i * middleSlidesPool.length) / numMiddleNeeded);
        result.push(middleSlidesPool[indexToPick]);
      }
    }
    
    result.push(baseSlides[L - 1]); // Outro
    return result;
  }

  // desiredSlideCount > L: we need to expand slides!
  const extraPool = [
    {
      title: 'ANÁLISE DE GARGALOS E PERDAS',
      subtitle: 'Identificação rápida de desperdícios',
      freeText: 'Todo desvio físico ou atraso no preenchimento do sistema gera perdas invisíveis na cadeia de produção. É crucial que a equipe saiba reportar gargalos para que a gestão possa atuar corretivamente com agilidade.',
      layout: 'two-columns' as const,
      iconName: 'TrendingUp',
      listItems: [
        { id: 'ex-b1-' + Date.now(), text: 'Paradas não programadas por falta de matéria-prima' },
        { id: 'ex-b2-' + Date.now(), text: 'Descompasso de ritmo entre costura e embalagem' },
        { id: 'ex-b3-' + Date.now(), text: 'Acúmulo excessivo de material semiacabado em corredor' }
      ]
    },
    {
      title: 'REGRAS DE OURO DE SEGURANÇA (EPI)',
      subtitle: 'Preservando a integridade física na colchoaria',
      freeText: 'A segurança do operador precede qualquer meta de produtividade. Antes de dar o primeiro clique em qualquer interface ou acionar qualquer esteira física, verifique as condições mínimas de trabalho.',
      layout: 'checklist' as const,
      iconName: 'AlertCircle',
      listItems: [
        { id: 'ex-ck1-' + Date.now(), text: 'Uso obrigatório de protetor auricular e óculos de proteção' },
        { id: 'ex-ck2-' + Date.now(), text: 'Bloqueio de energia elétrica ativo para manutenção direta' },
        { id: 'ex-ck3-' + Date.now(), text: 'Organização e limpeza de detritos no chão ao redor do posto' }
      ]
    },
    {
      title: 'FLUXO DE VALOR OPERACIONAL (VSM)',
      subtitle: 'Sincronização entre material e dados digitais',
      freeText: 'A precisão do sistema depende da pontualidade. Um registro feito duas horas atrasado é um dado inútil para a logística e gera atraso no fluxo final de expedição.',
      layout: 'flow' as const,
      iconName: 'Cpu',
      flowNodes: [
        { id: 'fn1-' + Date.now(), label: '1. Ordem Iniciada', description: 'O operador inicia a tarefa física no pavilhão' },
        { id: 'fn2-' + Date.now(), label: '2. Apontamento Digital', description: 'Registro de consumo de matéria-prima em tempo real' },
        { id: 'fn3-' + Date.now(), label: '3. Inspeção de Qualidade', description: 'Liberação final com registro do lote' }
      ]
    },
    {
      title: 'ORGANIZAÇÃO 5S NO POSTO DE TRABALHO',
      subtitle: 'Ambiente limpo, seguro e produtivo',
      freeText: 'A desorganização de ferramentas físicas induz a erros operacionais e acidentes. Mantenha os dispositivos de medição e insumos sempre em suas respectivas posições demarcadas.',
      layout: 'step-by-step' as const,
      iconName: 'Settings2',
      listItems: [
        { id: 'ex-s1-' + Date.now(), text: 'Seiri: Descarte o que não for mais útil para esta OP' },
        { id: 'ex-s2-' + Date.now(), text: 'Seiton: Ordene as ferramentas em seus devidos ganchos' },
        { id: 'ex-s3-' + Date.now(), text: 'Seiso: Limpe qualquer resíduo de espuma ou cola da bancada' },
        { id: 'ex-s4-' + Date.now(), text: 'Seiketsu: Padronize as boas práticas entre os turnos' }
      ]
    },
    {
      title: 'ANÁLISE DE CAUSA RAIZ (5 PORQUÊS)',
      subtitle: 'Buscando a origem dos desvios operacionais',
      freeText: 'Sempre que houver uma falha ou refugo de material, pergunte o motivo de forma sucessiva. O objetivo do Industrial OS não é apontar culpados, mas ajustar o processo para eliminar vulnerabilidades de forma consistente.',
      layout: 'text-only' as const,
      iconName: 'HelpCircle'
    },
    {
      title: 'INDICADORES CHAVE DE DESEMPENHO (KPIS)',
      subtitle: 'O que o supervisor acompanha no visor central',
      freeText: 'Suas atividades no pavilhão de produção refletem nos painéis de controle da diretoria em tempo real. Os principais pilares de medição são a Disponibilidade das máquinas, o Desempenho do ritmo e a Qualidade de aprovação.',
      layout: 'two-columns' as const,
      iconName: 'TrendingUp',
      listItems: [
        { id: 'ex-kpi1-' + Date.now(), text: 'Disponibilidade de equipamentos e tempo de parada' },
        { id: 'ex-kpi2-' + Date.now(), text: 'Rendimento operacional versus ritmo teórico' },
        { id: 'ex-kpi3-' + Date.now(), text: 'Taxa de aprovação de primeira (First Time Quality)' }
      ]
    },
    {
      title: 'RECOMENDAÇÕES PREDITIVAS DO COPILOT',
      subtitle: 'Inteligência Industrial a favor do operador',
      freeText: 'O Copilot analisa o histórico de produção e sugere ajustes automáticos nos estoques e tempos de setup. No entanto, lembre-se: a IA depende 100% da precisão dos seus registros para gerar previsões de atrasos e recomendações corretivas válidas.',
      layout: 'text-only' as const,
      iconName: 'Cpu'
    },
    {
      title: 'PLANO DE CONTINGÊNCIA DA ÁREA',
      subtitle: 'Manutenção do fluxo em caso de indisponibilidade',
      freeText: 'Se o visor apresentar alguma falha ou a rede de dados estiver temporariamente indisponível, registre os tempos e consumos no boleto físico auxiliar. Assim que normalizar, atualize o sistema retroativamente.',
      layout: 'text-only' as const,
      iconName: 'AlertCircle'
    }
  ];

  const result = [...baseSlides];
  const lastSlide = result.pop()!; // Temporarily remove conclusion to insert extras before it

  const numExtrasNeeded = desiredSlideCount - L;
  for (let i = 0; i < numExtrasNeeded; i++) {
    const poolIndex = i % extraPool.length;
    const poolSlide = extraPool[poolIndex];
    
    // Generate a fresh instance with unique IDs
    const listItems = poolSlide.listItems?.map((li, lIdx) => ({
      id: `ext-li-${i}-${lIdx}-${Date.now()}`,
      text: li.text,
      checked: false
    }));

    const flowNodes = poolSlide.flowNodes?.map((fn, fIdx) => ({
      id: `ext-fn-${i}-${fIdx}-${Date.now()}`,
      label: fn.label,
      description: fn.description
    }));

    result.push({
      id: `ext-slide-${i}-${Date.now()}`,
      title: poolSlide.title,
      subtitle: `${poolSlide.subtitle} (Parte ${Math.floor(i / extraPool.length) + 1})`,
      freeText: poolSlide.freeText,
      layout: poolSlide.layout,
      iconName: poolSlide.iconName,
      listItems,
      flowNodes
    });
  }

  result.push(lastSlide); // Put conclusion back
  return result;
}
