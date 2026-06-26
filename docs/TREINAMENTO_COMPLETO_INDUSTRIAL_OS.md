# Treinamento: Fundamentos do Chão de Fábrica para o Industrial OS

## Objetivo

Criar um treinamento completo para usuários da plataforma Industrial OS, ensinando os fundamentos da Engenharia de Produção aplicados a uma fábrica de colchões.

O treinamento deve ser didático, progressivo e voltado para pessoas com pouca experiência em informática, sistemas ERP ou gestão industrial.

**Regra Fundamental:** Nunca iniciar explicando telas do sistema. O foco inicial deve ser mostrar o funcionamento da fábrica e somente depois relacionar esses processos ao Industrial OS.

O objetivo não é ensinar apenas a utilizar o sistema, mas fazer com que o usuário compreenda como uma fábrica funciona e como cada informação cadastrada influencia os processos produtivos, indicadores e análises realizadas pelo Copilot.

---

## Contexto do Sistema Industrial OS

O Industrial OS é um sistema web com **25 módulos organizados em 5 grupos**:

### Estrutura
- Empresa, Setores

### Recursos
- Funcionários, Equipamentos, Ferramentas

### Catálogo
- Matérias-Primas, Fornecedores, Produtos

### Engenharia
- Componentes, BOM, Processos, Cronometragem, Capacidade

### Operações
- Ordens de Produção, Lotes, Estoque, Movimentações, Apontamentos, Consumo de Materiais, Produção em Tempo Real, Qualidade, Rastreabilidade, MRP, PCP, Apresentações

### Interface Principal
- **Sidebar (Menu Lateral):** Colapsível, organizado por grupos com ícones coloridos
- **Dashboard:** Mostra progresso de implantação, estatísticas por grupo, pendências e próximas ações
- **Command Palette:** Busca rápida com Ctrl+K para encontrar qualquer módulo ou registro
- **Copilot:** Assistente IA integrado em cada módulo para ajudar com dúvidas

### Fluxo de Onboarding
O sistema possui um onboarding guiado em **8 etapas**:
1. Empresa → 2. Setores → 3. Funcionários → 4. Equipamentos → 5. Matérias-Primas → 6. Fornecedores → 7. Produtos → 8. Processos

---

# Estrutura do Treinamento

O treinamento deverá ser dividido em módulos, liberados em sequência.

Cada módulo deve conter:

* Objetivo
* Conceitos
* Explicações ilustradas
* Fluxogramas
* Exemplos práticos
* Aplicação dentro da plataforma
* Erros comuns
* Resumo
* Questionário
* Exercício prático

O conteúdo deve utilizar como referência uma fábrica de colchões.

---

# Módulo 1 — Conhecendo a Fábrica

## Objetivo

Apresentar a estrutura física de uma indústria.

## Conceitos

### Empresa
É a organização jurídica que detém a fábrica. Pode ter múltiplas unidades produtivas.

### Unidade
Cada local físico de produção. Uma empresa pode ter várias unidades em diferentes cidades ou estados.

### Galpões
Espaços físicos cobertos onde ocorre a produção. Podem ser divididos por processo (galpão de corte, galpão de montagem, etc.).

### Escritórios
Áreas administrativas onde ficam PCP, engenharia, qualidade, compras e gestão.

### Docas
Áreas de carregamento e descarregamento de caminhões. Conectam a fábrica com o transporte externo.

### Almoxarifados
Locais de armazenamento de matérias-primas e materiais auxiliares.

### Recebimento
Área onde chegam as matérias-primas fornecidas pelos fornecedores.

### Expedição
Área onde os produtos acabados são preparados para envio aos clientes.

## Explicações Ilustradas

![Implantação da Fábrica](screenshots/implantacao.png)

A imagem acima mostra uma planta baixa típica de uma fábrica de colchões, com a disposição física dos setores.

## Fluxograma

```
EMPRESA
    ↓
UNIDADE
    ↓
GALPÕES
    ↓
ÁREAS: Recebimento → Estoque → Produção → Expedição
```

## Exemplos Práticos

**Exemplo:** A "Colchoes Sonho Ltda" é uma empresa com uma única unidade em São Paulo. Esta unidade possui 3 galpões: Galpão A (corte e costura), Galpão B (montagem e acabamento), Galpão C (embalagem e expedição). O almoxarifado fica ao lado do recebimento, facilitando o fluxo de materiais.

## Aplicação dentro da Plataforma

No Industrial OS, você deve cadastrar:
1. Primeiro a Empresa
2. Depois a Unidade
3. Em seguida, os Galpões
4. Por fim, as áreas internas (docas, almoxarifados, etc.)

Essa estrutura é a base para todo o restante do cadastro.

## Erros Comuns

- **Cadastrar unidades antes da empresa:** Isso gera inconsistência nos dados.
- **Não definir galpões:** Sem galpões, não é possível localizar onde cada processo ocorre.
- **Confundir empresa com unidade:** Empresa é a pessoa jurídica; unidade é o local físico.

## Resumo

Tudo começa pela estrutura física. Empresa → Unidade → Galpões → Áreas. Essa hierarquia é fundamental para organizar a produção.

## Questionário

1. Qual é a diferença entre empresa e unidade?
2. Por que é importante cadastrar os galpões?
3. Onde ocorre o recebimento de matérias-primas?

## Exercício Prático

Desenhe o layout de uma fábrica de colchões hipotética, indicando onde ficariam: recebimento, almoxarifado, galpões de produção, escritórios e expedição.

---

# Módulo 2 — Layout Industrial

## Objetivo

Ensinar que uma fábrica possui um fluxo físico.

## Conceitos

Layout é a disposição física dos recursos produtivos. Um bom layout minimiza movimentação, reduz custos e aumenta produtividade.

## Fluxograma do Processo

```
RECEBIMENTO
    ↓
ESTOQUE
    ↓
CORTE
    ↓
MONTAGEM
    ↓
COSTURA
    ↓
ACABAMENTO
    ↓
INSPEÇÃO
    ↓
EMBALAGEM
    ↓
EXPEDIÇÃO
```

## Explicações Ilustradas

O layout influencia:

- **Movimentação:** Distâncias percorridas por materiais e pessoas
- **Produtividade:** Tempo gasto em transporte não agrega valor
- **Gargalos:** Pontos onde o fluxo é interrompido
- **Perdas:** Danos durante transporte excessivo
- **Rastreabilidade:** Capacidade de saber onde cada produto está

## Exemplos Práticos

**Layout Linear:** Os processos seguem em linha reta. Ideal para produção em massa.

**Layout em U:** O fluxo faz uma curva, permitindo que entrada e saída fiquem próximas.

**Layout Celular:** Máquinas agrupadas por família de produtos. Reduz setup.

## Aplicação dentro da Plataforma

No sistema, o layout é representado pela:
- Sequência de setores
- Distâncias entre centros de trabalho
- Rotas de movimentação interna

## Erros Comuns

- **Layout em zigue-zague:** Aumenta desnecessariamente a movimentação
- **Cruzamento de fluxos:** Cria conflitos e riscos de acidentes
- **Áreas mortas:** Espaços não utilizados que aumentam custos

## Resumo

O layout define o fluxo físico da fábrica. Um bom layout é aquele que minimiza movimentação e maximiza eficiência.

## Questionário

1. O que é layout industrial?
2. Quais são os impactos de um layout mal planejado?
3. Qual é a sequência típica de produção em uma fábrica de colchões?

## Exercício Prático

Analise o layout da sua fábrica (ou de uma fábrica hipotética) e identifique 3 pontos de melhoria para reduzir movimentação.

---

# Módulo 3 — Setores

## Objetivo

Explicar o que é um setor e a diferença entre os principais setores industriais.

## Conceitos

### O que é um Setor
É uma divisão organizacional da fábrica que agrupa atividades similares. Setores não produzem diretamente; eles organizam a produção.

## Diferença entre Setores

### Produção
Onde ocorre a transformação de matérias-primas em produtos. Ex: Corte, Costura, Montagem.

### PCP (Planejamento e Controle da Produção)
Cérebro da fábrica. Planeja o que, quando e quanto produzir.

### Qualidade
Garante que os produtos atendam aos padrões. Realiza inspeções e controle de qualidade.

### Compras
Adquire matérias-primas e materiais auxiliares dos fornecedores.

### Almoxarifado
Armazena e controla o estoque de materiais.

### Manutenção
Cuida das máquinas e equipamentos, garantindo disponibilidade.

### Expedição
Prepara e envia produtos acabados para os clientes.

## Explicações Ilustradas

![Setores da Fábrica](screenshots/setores.png)

A imagem mostra a organização dos setores dentro da plataforma Industrial OS.

## Fluxograma

```
PCP → Planeja
    ↓
Compras → Adquire materiais
    ↓
Almoxarifado → Armazena
    ↓
Produção → Transforma
    ↓
Qualidade → Verifica
    ↓
Expedição → Envia
    ↓
Manutenção → Suporta todos
```

## Exemplos Práticos

**Exemplo:** O setor de Costura não produz colchões sozinho. Ele coordena as máquinas de costura. A produção real acontece nos centros de trabalho (máquinas) dentro do setor.

## Aplicação dentro da Plataforma

No Industrial OS:
1. Cadastre os setores da sua fábrica
2. Associe cada centro de trabalho a um setor
3. Defina responsáveis por setor

## Erros Comuns

- **Confundir setor com centro de trabalho:** Setor é organizacional; centro de trabalho é produtivo
- **Criar setores demais:** Setores muito específicos dificultam gestão
- **Não definir responsáveis:** Sem responsáveis, não há accountability

## Resumo

Setores organizam a fábrica em áreas funcionais. Eles não produzem, mas coordenam a produção através dos centros de trabalho.

## Questionário

1. Qual é a função do PCP?
2. Setores produzem diretamente? Explique.
3. Qual é a diferença entre setor e centro de trabalho?

## Exercício Prático

Liste os setores da sua fábrica e descreva a principal função de cada um.

---

# Módulo 4 — Centros de Trabalho

## Objetivo

Explicar que o setor não produz. Quem produz são os Centros de Trabalho.

## Conceitos

### Centro de Trabalho
É a unidade produtiva básica. Pode ser uma máquina, uma bancada, ou um grupo de operadores. É onde a transformação realmente acontece.

### Relação Setor × Centro de Trabalho

```
Setor Costura
    ↓
    ├── Centro de Trabalho 1 (Máquina Reta 01)
    ├── Centro de Trabalho 2 (Máquina Reta 02)
    ├── Centro de Trabalho 3 (Máquina Overlock 01)
    └── Centro de Trabalho 4 (Máquina Quilting 01)
```

## Métricas dos Centros de Trabalho

### Capacidade
Quantidade máxima que pode produzir em um período.

### Fila
Quantidade de ordens aguardando processamento.

### Ocupação
Percentual de tempo em que o centro está produzindo.

### Disponibilidade
Percentual de tempo em que o centro está pronto para produzir (não está em manutenção ou quebra).

## Exemplos Práticos

**Exemplo:** O setor de Montagem tem 10 centros de trabalho (mesas de montagem). Cada mesa pode montar 20 colchões por dia. A capacidade do setor é 200 colchões/dia.

## Aplicação dentro da Plataforma

No Industrial OS:
1. Cadastre os centros de trabalho
2. Associe cada centro a um setor
3. Defina capacidade de cada centro
4. Monitore fila e ocupação em tempo real

## Erros Comuns

- **Não cadastrar todos os centros:** Subestima capacidade real
- **Capacidade incorreta:** Gera planejamento falho
- **Não associar ao setor:** Dificulta análise por área

## Resumo

Centros de trabalho são onde a produção acontece. Setores apenas organizam os centros.

## Questionário

1. O que é um centro de trabalho?
2. Qual é a diferença entre setor e centro de trabalho?
3. Quais métricas devem ser monitoradas nos centros de trabalho?

## Exercício Prático

Para o setor de Costura, liste todos os centros de trabalho e defina a capacidade de cada um.

---

# Módulo 5 — Máquinas

## Objetivo

Explicar a diferença entre setor e máquina, e apresentar máquinas típicas de uma fábrica de colchões.

## Conceitos

### Diferença entre Setor e Máquina
- **Setor:** Organização (ex: Setor Costura)
- **Máquina:** Equipamento produtivo (ex: Máquina Reta 01)
- Uma máquina pertence a um setor
- Um setor pode ter múltiplas máquinas

## Máquinas Típicas por Processo

### Corte
- **Serra Vertical:** Corta espumas em blocos
- **Serra Horizontal:** Corta espumas em lâminas
- **CNC:** Corte automatizado com precisão

### Costura
- **Reta:** Costura reta básica
- **Overlock:** Acabamento de bordas
- **Quilting:** Costura decorativa em espumas

### Montagem
- **Mesas:** Superfícies para montagem manual
- **Prensas:** Prensam componentes juntos

### Colagem
- **Cabines:** Áreas protegidas para aplicação de cola
- **Compressores:** Fornecem ar para pistolas de cola

### Embalagem
- **Seladora:** Sela embalagens plásticas
- **Roll Pack:** Embala colchões a vácuo
- **Prensa:** Comprime para embalagem compacta

### Movimentação
- **Empilhadeiras:** Movimentam paletes
- **Paleteiras:** Organizam materiais em paletes

## Métricas Importantes

### Vida Útil
Tempo estimado de operação da máquina antes de substituição.

### Manutenção
Preventiva (periódica), Corretiva (quebras), Preditiva (monitoramento).

### Capacidade
Produção máxima por hora.

### Produção/Hora
Métrica real de desempenho.

## Exemplos Práticos

**Exemplo:** Uma Serra Vertical corta 50 blocos de espuma por hora. Sua capacidade é 400 blocos em um turno de 8 horas. Se produziu apenas 300, a eficiência foi 75%.

## Aplicação dentro da Plataforma

No Industrial OS:
1. Cadastre todas as máquinas
2. Associe aos centros de trabalho
3. Defina capacidade nominal
4. Registre manutenções

## Erros Comuns

- **Não cadastrar máquinas antigas:** Subestima capacidade
- **Capacidade nominal vs real:** Usar capacidade teórica sem considerar eficiência
- **Ignorar manutenção:** Não registrar paradas para manutenção

## Resumo

Máquinas são os equipamentos que transformam materiais. Cada máquina deve ser cadastrada com suas características e capacidade.

## Questionário

1. Qual é a diferença entre setor e máquina?
2. Liste 3 máquinas típicas do processo de costura.
3. Por que é importante registrar a capacidade real das máquinas?

## Exercício Prático

Liste todas as máquinas da sua fábrica, classificando por processo (corte, costura, montagem, etc.).

---

# Módulo 6 — Equipamentos

## Objetivo

Explicar a diferença entre máquina e equipamento.

## Conceitos

### Diferença Máquina × Equipamento
- **Máquina:** Transforma diretamente o produto (ex: serra de corte)
- **Equipamento:** Apoia a produção mas não transforma o produto (ex: compressor de ar)

## Tipos de Equipamentos

### Compressores
Fornecem ar comprimido para ferramentas pneumáticas.

### Geradores
Fornecem energia elétrica em caso de queda de rede.

### Exaustores
Removem poeira, fumaça e partículas do ar.

### Balanças
Pesam matérias-primas e produtos.

### Computadores
Usados em escritórios, PCP e controle de qualidade.

### Coletores
Coletam dados de produção automaticamente.

### Impressoras
Imprimem etiquetas, relatórios e documentos.

## Exemplos Práticos

**Exemplo:** Um compressor de 50 HP alimenta 10 pistolas de cola no setor de montagem. Sem o compressor, as pistolas não funcionam, parando a produção.

## Aplicação dentro da Plataforma

No Industrial OS:
1. Cadastre equipamentos críticos
2. Associe aos setores que utilizam
3. Monitore disponibilidade
4. Programe manutenções preventivas

## Erros Comuns

- **Não cadastrar equipamentos:** Ignorar suporte crítico
- **Não monitorar disponibilidade:** Equipamentos quebrados param produção
- **Falta de manutenção preventiva:** Quebras inesperadas

## Resumo

Equipamentos apoiam a produção. Embora não transformem produtos, são essenciais para o funcionamento da fábrica.

## Questionário

1. Qual é a diferença entre máquina e equipamento?
2. Dê 3 exemplos de equipamentos.
3. Por que equipamentos também precisam de manutenção?

## Exercício Prático

Liste os equipamentos críticos da sua fábrica e indique quais setores dependem de cada um.

---

# Módulo 7 — Ferramentas

## Objetivo

Explicar ferramentas utilizadas pelos operadores.

## Conceitos

### O que são Ferramentas
Instrumentos manuais utilizados pelos operadores para realizar tarefas específicas. Diferem de máquinas porque são operadas manualmente.

## Ferramentas Típicas

### Tesouras
Cortam tecidos e linhas manualmente.

### Estiletes
Cortam espumas e materiais flexíveis.

### Trenas
Medem dimensões de materiais e produtos.

### Esquadros
Verificam ângulos retos em cortes.

### Pistolas
Aplicam cola (pistolas pneumáticas).

### Grampeadores
Fixam componentes juntos.

## Explicações Ilustradas

![Ferramentas](screenshots/ferramentas.png)

A imagem mostra ferramentas típicas utilizadas na produção de colchões.

## Exemplos Práticos

**Exemplo:** Um operador de montagem usa uma pistola de cola para fixar o tecido ao tampo de espuma. Sem a pistola, ele não consegue realizar a tarefa.

## Aplicação dentro da Plataforma

No Industrial OS:
1. Cadastre ferramentas críticas
2. Associe aos operadores/centros de trabalho
3. Controle empréstimos e devoluções
4. Monitore vida útil e substituição

## Erros Comuns

- **Não controlar ferramentas:** Perdas e roubos
- **Ferramentas inadequadas:** Reduzem produtividade
- **Falta de manutenção:** Ferramentas desgastadas afetam qualidade

## Resumo

Ferramentas são essenciais para o trabalho manual. Devem ser controladas e mantidas em bom estado.

## Questionário

1. O que diferencia ferramentas de máquinas?
2. Liste 4 ferramentas típicas na produção de colchões.
3. Por que é importante controlar ferramentas?

## Exercício Prático

Para cada setor da sua fábrica, liste as ferramentas essenciais utilizadas pelos operadores.

---

# Módulo 8 — Pessoas

## Objetivo

Mostrar a estrutura organizacional e explicar funções.

## Conceitos

### Estrutura Hierárquica

```
Operador
    ↓
Líder
    ↓
Supervisor
    ↓
Gerente
```

## Funções

### Operador
Executa as tarefas de produção diretamente. Opera máquinas, monta produtos, realiza inspeções.

### Líder
Coordena uma pequena equipe de operadores (geralmente 5-15). Resolve problemas do dia a dia.

### Supervisor
Coordena múltiplos líderes (geralmente 2-5). Responsável por um setor ou processo.

### Gerente
Coordena múltiplos supervisores. Responsável por uma área completa (ex: Gerente de Produção).

## Exemplos Práticos

**Exemplo:** O setor de Costura tem 30 operadores, 3 líderes, 1 supervisor. O supervisor reporta ao Gerente de Produção.

## Aplicação dentro da Plataforma

No Industrial OS:
1. Cadastre todos os colaboradores
2. Defina a hierarquia (operador → líder → supervisor → gerente)
3. Associe colaboradores aos setores e centros de trabalho
4. Registre treinamentos e certificações

## Erros Comuns

- **Hierarquia não definida:** Dificulta comunicação e responsabilidade
- **Multivinculação:** Um operador associado a muitos setores
- **Não registrar treinamentos:** Falta de controle de competências

## Resumo

A estrutura organizacional define responsabilidades e canais de comunicação. Cada nível tem funções específicas.

## Questionário

1. Qual é a função de um líder?
2. Qual é a diferença entre supervisor e gerente?
3. Por que é importante definir a hierarquia no sistema?

## Exercício Prático

Desenhe o organograma da sua fábrica, indicando quantas pessoas existem em cada nível hierárquico.

---

# Módulo 9 — Matérias-Primas

## Objetivo

Explicar o que é matéria-prima e mostrar exemplos reais de uma fábrica de colchões.

## Conceitos

### O que é Matéria-Prima
Material bruto que será transformado em produto. É o input inicial do processo produtivo.

## Matérias-Primas Típicas em Colchões

### Espuma
Base do colchão. Vem em diferentes densidades e espessuras.

### Tecido
Reveste o colchão. Pode ser algodão, poliéster, etc.

### Fitilho
Fio decorativo nas bordas do colchão.

### Feutro
Material acolchoado interno.

### Cola
Une componentes (espuma, tecido, etc.).

### Perfilado
Molduras de PVC ou madeira nas bordas.

### Antiderrapante
Tecido na base para evitar escorregamento.

### Molas
Usadas em colchões de molas.

### Plástico
Para embalagem.

### Papelão
Para proteção durante transporte.

### Etiquetas
Identificação do produto.

## Fluxo de Entrada

```
Fornecedor → Recebimento → Inspeção → Almoxarifado → Produção
```

## Exemplos Práticos

**Exemplo:** Para produzir 100 colchões, são necessários: 200m³ de espuma, 500m² de tecido, 1000m de fitilho, 50kg de cola.

## Aplicação dentro da Plataforma

No Industrial OS:
1. Cadastre todas as matérias-primas
2. Defina unidades de medida (m, m², m³, kg, un)
3. Associe fornecedores
4. Configure estoque mínimo e máximo

## Erros Comuns

- **Unidade de medida errada:** Ex: comprar espuma em kg quando deveria ser m³
- **Não definir estoque mínimo:** Falta de materiais para produção
- **Múltiplas unidades:** Usar diferentes unidades para o mesmo material

## Resumo

Matérias-primas são os insumos básicos da produção. Devem ser cadastradas com unidades de medida corretas e controle de estoque.

## Questionário

1. O que é matéria-prima?
2. Liste 5 matérias-primas típicas de colchões.
3. Qual é o fluxo de entrada de matérias-primas na fábrica?

## Exercício Prático

Para um colchão padrão, liste todas as matérias-primas necessárias e suas quantidades.

---

# Módulo 10 — Componentes

## Objetivo

Explicar a diferença entre matéria-prima e componente.

## Conceitos

### Diferença Matéria-Prima × Componente
- **Matéria-prima:** Material bruto (ex: espuma em bloco)
- **Componente:** Peça já processada que compõe o produto (ex: tampo de espuma cortado)

## Componentes Típicos

### Tampo
Camada superior do colchão, cortado nas dimensões finais.

### Lateral
Faixa que envolve as laterais do colchão.

### Bloco de Molas
Conjunto de molas montadas.

### Base
Camada inferior do colchão.

### Pillow
Camada adicional de conforto sobre o tampo.

## Montagem

```
Matérias-Primas → Processamento → Componentes → Montagem → Produto
```

**Exemplo:** Espuma em bloco (matéria-prima) → Corte → Tampo (componente) → Montagem → Colchão (produto)

## Explicações Ilustradas

![Componentes](screenshots/componentes.png)

A imagem mostra os componentes que formam um colchão.

## Exemplos Práticos

**Exemplo:** Um colchão é composto por: 1 tampo, 1 lateral, 1 base, 1 bloco de molas, 1 pillow. Cada componente é feito de matérias-primas específicas.

## Aplicação dentro da Plataforma

No Industrial OS:
1. Cadastre os componentes
2. Defina quais matérias-primas compõem cada componente
3. Associe componentes aos produtos
4. Controle estoque de componentes

## Erros Comuns

- **Confundir matéria-prima com componente:** Gera erros de BOM
- **Não cadastrar componentes intermediários:** Dificulta rastreabilidade
- **Componentes sem definição:** Não saber de que são feitos

## Resumo

Componentes são peças intermediárias que compõem o produto final. Eles são feitos de matérias-primas e depois montados.

## Questionário

1. Qual é a diferença entre matéria-prima e componente?
2. Liste 4 componentes de um colchão.
3. Por que é importante cadastrar componentes separadamente das matérias-primas?

## Exercício Prático

Para um colchão de sua escolha, desenhe a estrutura de componentes e indique quais matérias-primas compõem cada componente.

---

# Módulo 11 — Produtos

## Objetivo

Explicar ficha técnica, BOM, custos, preço, família, linha e variantes.

## Conceitos

### Ficha Técnica
Documento que descreve todas as características do produto: dimensões, materiais, processos, etc.

### BOM (Bill of Materials)
Lista de todos os materiais e componentes necessários para produzir um produto.

### Custos
Custo total para produzir um produto (matérias-primas + mão de obra + custos indiretos).

### Preço
Valor de venda do produto ao cliente.

### Família
Grupo de produtos similares (ex: Colchões de Espuma, Colchões de Molas).

### Linha
Subdivisão dentro de uma família (ex: Linha Premium, Linha Standard).

### Variantes
Diferentes versões de um produto (ex: Tamanho: Solteiro, Casal, Queen; Espessura: 20cm, 25cm, 30cm).

## Exemplos Práticos

**Exemplo:** 
- Família: Colchões de Espuma
- Linha: Premium
- Produto: Colchão Premium 25cm
- Variantes: Solteiro, Casal, Queen

## Explicações Ilustradas

![Produtos](screenshots/produtos.png)

A imagem mostra o cadastro de produtos na plataforma Industrial OS.

## Aplicação dentro da Plataforma

No Industrial OS:
1. Cadastre famílias de produtos
2. Defina linhas dentro das famílias
3. Cadastre produtos com suas variantes
4. Associe BOM a cada produto
5. Defina custos e preços

## Erros Comuns

- **BOM incompleta:** Falta materiais, gerando erro de produção
- **Custos não atualizados:** Preço de venda pode não cobrir custos
- **Variantes como produtos separados:** Duplicação de cadastro

## Resumo

Produtos são organizados em hierarquia: Família → Linha → Produto → Variantes. Cada produto tem BOM, custos e preço.

## Questionário

1. O que é BOM?
2. Qual é a diferença entre família e linha?
3. Por que é importante manter custos atualizados?

## Exercício Prático

Crie a estrutura de produtos para uma linha de colchões, definindo família, linha, produtos e variantes.

---

# Módulo 12 — Engenharia do Produto

## Objetivo

Explicar BOM, estrutura, componentes, consumo, roteiro, tempo e centros de trabalho.

## Conceitos

### BOM (Bill of Materials)
Lista estruturada de todos os materiais e componentes necessários.

### Estrutura
Hierarquia do BOM (produto → subconjuntos → componentes → matérias-primas).

### Componentes
Peças que compõem o produto.

### Consumo
Quantidade de cada material necessária por unidade de produto.

### Roteiro
Sequência de operações para produzir o produto.

### Tempo
Tempo padrão para cada operação.

### Centros de Trabalho
Onde cada operação é realizada.

## Exemplo de BOM

```
Colchão Premium 25cm
├── Tampo (Espuma 25cm, 1.8m x 1.4m)
├── Lateral (Tecido, 5.2m)
├── Base (Espuma 10cm, 1.8m x 1.4m)
├── Bloco de Molas (Molas, 96 unidades)
└── Pillow (Espuma 5cm, 1.8m x 1.4m)
```

## Exemplo de Roteiro

```
1. Corte (Centro: Serra CNC, Tempo: 15 min)
2. Montagem (Centro: Mesa 01, Tempo: 20 min)
3. Costura (Centro: Reta 01, Tempo: 25 min)
4. Acabamento (Centro: Overlock 01, Tempo: 10 min)
5. Embalagem (Centro: Seladora 01, Tempo: 5 min)
```

## Explicações Ilustradas

![Cronometragem](screenshots/cronometragem.png)

A imagem mostra o processo de cronometragem para definir tempos padrão.

## Aplicação dentro da Plataforma

No Industrial OS:
1. Cadastre a BOM completa de cada produto
2. Defina o roteiro produtivo
3. Associe tempos padrão a cada operação
4. Vincule operações aos centros de trabalho

## Erros Comuns

- **BOM incorreta:** Falta ou excesso de materiais
- **Tempos irreais:** Tempos padrão não refletem a realidade
- **Roteiro incompleto:** Falta operações no processo

## Resumo

Engenharia do produto define BOM (o que usar) e roteiro (como fazer). Essas informações são base para planejamento e custos.

## Questionário

1. O que é BOM?
2. Qual é a diferença entre BOM e roteiro?
3. Por que tempos padrão devem ser realistas?

## Exercício Prático

Para um produto de sua escolha, crie a BOM e o roteiro produtivo completos.

---

# Módulo 13 — Processos

## Objetivo

Mostrar o roteiro produtivo e explicar operações.

## Conceitos

### Roteiro Produtivo
Sequência de operações necessárias para transformar matérias-primas em produto acabado.

### Operação
Cada etapa do processo produtivo que adiciona valor ao produto.

## Fluxograma do Processo

```
RECEBER
    ↓
SEPARAR
    ↓
CORTAR
    ↓
MONTAR
    ↓
COSTURAR
    ↓
FECHAR
    ↓
INSPECIONAR
    ↓
EMBALAR
    ↓
EXPEDIR
```

## Explicação das Operações

### Receber
Chegada de matérias-primas no almoxarifado.

### Separar
Seleção de materiais para produção.

### Cortar
Corte de espumas e tecidos nas dimensões corretas.

### Montar
Montagem dos componentes (tampo, base, molas).

### Costurar
Costura do tecido sobre o colchão.

### Fechar
Fechamento final do colchão.

### Inspecionar
Verificação de qualidade.

### Embalar
Embalagem para transporte.

### Expedir
Envio ao cliente.

## Exemplos Práticos

**Exemplo:** Um colchão passa por 8 operações, do recebimento das matérias-primas até a expedição. Cada operação adiciona valor e deve ser controlada.

## Aplicação dentro da Plataforma

No Industrial OS:
1. Cadastre todas as operações
2. Defina a sequência do roteiro
3. Associe operações aos centros de trabalho
4. Monitore tempo em cada operação

## Erros Comuns

- **Operações faltando:** Produto não completo
- **Sequência incorreta:** Gera retrabalho
- **Operações sem valor:** Etapas que não agregam

## Resumo

O roteiro produtivo define a sequência de operações. Cada operação deve agregar valor ao produto.

## Questionário

1. O que é uma operação?
2. Qual é a sequência típica de produção de um colchão?
3. Por que a sequência de operações é importante?

## Exercício Prático

Desenhe o fluxograma completo do processo produtivo da sua fábrica, indicando todas as operações.

---

# Módulo 14 — Ordens de Produção

## Objetivo

Explicar o que é uma OP e seu ciclo de vida.

## Conceitos

### O que é uma OP (Ordem de Produção)
Documento que autoriza e instrui a produção de uma quantidade específica de produto.

## Ciclo de Vida da OP

### Planejamento
PCP define o que, quanto e quando produzir com base em demanda e capacidade.

### Liberação
OP é liberada para produção após confirmação de materiais e capacidade.

### Execução
Apontamentos de produção são realizados conforme a OP é processada.

### Finalização
OP é concluída quando toda a quantidade é produzida e inspecionada.

## Exemplos Práticos

**Exemplo:** OP #1234 para produzir 100 colchões Premium 25cm. Planejada em 01/06, liberada em 02/06, executada de 03/06 a 10/06, finalizada em 11/06.

## Explicações Ilustradas

![Ordens de Produção](screenshots/ordens-producao.png)

A imagem mostra a lista de ordens de produção na plataforma.

## Aplicação dentro da Plataforma

No Industrial OS:
1. PCP cria OPs com base em demanda
2. Sistema verifica disponibilidade de materiais
3. OP é liberada quando recursos estão disponíveis
4. Operadores apontam produção contra a OP
5. OP é finalizada automaticamente ao completar quantidade

## Erros Comuns

- **OP sem materiais:** Produção parada por falta de insumos
- **Quantidade incorreta:** Produzir mais ou menos que o demandado
- **OPs não finalizadas:** Acúmulo de ordens em aberto

## Resumo

OPs são a autorização formal para produção. Seu ciclo de vida vai do planejamento à finalização.

## Questionário

1. O que é uma OP?
2. Quais são as fases do ciclo de vida de uma OP?
3. Quem é responsável por criar OPs?

## Exercício Prático

Crie uma OP hipotética para produzir 50 colchões, definindo todas as informações necessárias.

---

# Módulo 15 — Apontamentos

## Objetivo

Mostrar registros de produção.

## Conceitos

### O que são Apontamentos
Registros do que foi produzido, quanto tempo levou, quais materiais foram consumidos, etc.

## Tipos de Apontamentos

### Início
Registro do início de uma operação.

### Fim
Registro do término de uma operação.

### Produção
Quantidade produzida (boa + refugo).

### Perdas
Materiais desperdiçados no processo.

### Consumo
Materiais efetivamente consumidos.

### Refugo
Produtos defeituosos que não podem ser vendidos.

### Retrabalho
Produtos que precisam ser corrigidos.

### Setup
Tempo de preparação da máquina antes da produção.

### Parada
Interrupção não planejada (quebra, falta de material, etc.).

## Exemplos Práticos

**Exemplo:** Operador inicia produção às 8:00, faz setup de 15 minutos, produz 10 colchões até 10:00, para 30 minutos por falta de cola, retoma e produz mais 15 colchões até 12:00. Total: 25 colchões, 15 min setup, 30 min parada.

## Explicações Ilustradas

![Apontamentos](screenshots/apontamentos.png)

A imagem mostra a tela de apontamentos de produção.

![Produção em Tempo Real](screenshots/producao-tempo-real.png)

A imagem mostra o monitoramento de produção em tempo real.

## Aplicação dentro da Plataforma

No Industrial OS:
1. Operadores registram início/fim de operações
2. Sistema calcula tempo real vs padrão
3. Produção é registrada contra a OP
4. Perdas e refugo são quantificados
5. Paradas são categorizadas

## Erros Comuns

- **Não apontar paradas:** Tempo não explicado
- **Esquecer setup:** Tempo subestimado
- **Não registrar refugo:** Custo real não conhecido

## Resumo

Apontamentos são a base do controle de produção. Sem apontamentos, não há visibilidade do que está acontecendo.

## Questionário

1. O que é um apontamento?
2. Quais tipos de apontamentos devem ser registrados?
3. Por que é importante registrar paradas?

## Exercício Prático

Simule o apontamento de produção de um dia, registrando início, fim, produção, setup e paradas.

---

# Módulo 16 — Estoques

## Objetivo

Explicar tipos de estoque, inventário e movimentações.

## Conceitos

### Tipos de Estoque

#### Matéria-Prima
Materiais aguardando uso na produção.

#### Semiacabado
Produtos em processo (WIP - Work In Progress).

#### Produto Acabado
Produtos prontos para venda.

#### Quarentena
Produtos aguardando liberação de qualidade.

#### Expedição
Produtos prontos para envio.

### Inventário
Contagem física do estoque para conferir com o sistema.

### Movimentações
Entradas e saídas de materiais do estoque.

## Fluxo de Estoque

```
Recebimento → Matéria-Prima → Matéria-Prima → Semiacabado → Produto Acabado → Expedição → Cliente
```

## Exemplos Práticos

**Exemplo:** Estoque de espuma: 500m³ (matéria-prima). Após corte, vira 300m³ de tampos (semiacabado). Após montagem, vira 100 colchões (produto acabado). Após expedição, vai para cliente.

## Aplicação dentro da Plataforma

No Industrial OS:
1. Sistema atualiza estoque automaticamente com apontamentos
2. Movimentações manuais podem ser registradas
3. Inventário periódico ajusta divergências
4. Alertas de estoque mínimo

## Erros Comuns

- **Não fazer inventário:** Estoque real ≠ sistema
- **Movimentações não registradas:** Divergências
- **Estoque mínimo não definido:** Falta de materiais

## Resumo

Estoque deve ser controlado rigorosamente. Inventários periódicos garantem conformidade entre realidade e sistema.

## Questionário

1. Quais são os tipos de estoque?
2. O que é inventário?
3. Por que estoques divergem do sistema?

## Exercício Prático

Calcule o estoque de matérias-primas necessário para produzir 100 colchões, considerando o BOM.

---

# Módulo 17 — Qualidade

## Objetivo

Explicar inspeções, refugo, retrabalho, não conformidades, checklist e rastreabilidade.

## Conceitos

### Inspeções
Verificações para garantir que produtos atendam aos padrões.

### Refugo
Produtos defeituosos que não podem ser recuperados.

### Retrabalho
Produtos defeituosos que podem ser corrigidos.

### Não Conformidades
Desvios dos padrões de qualidade.

### Checklist
Lista de verificação padrão para inspeções.

### Rastreabilidade
Capacidade de rastrear a história de um produto (materiais, operações, operadores).

## Exemplos Práticos

**Exemplo:** Inspeção final descobre 3 colchões com costura defeituosa. 1 é refugo (não recuperável), 2 são retrabalho (costura pode ser corrigida). Não conformidade registrada: "Costura irregular".

## Aplicação dentro da Plataforma

No Industrial OS:
1. Checklists definidos para cada ponto de inspeção
2. Resultados registrados digitalmente
3. Refugo e retrabalho quantificados
4. Não conformidades documentadas
5. Rastreabilidade completa por lote/OP

## Erros Comuns

- **Inspeções não padronizadas:** Resultados inconsistentes
- **Não registrar refugo:** Custo real subestimado
- **Falta de rastreabilidade:** Não identificar causa raiz

## Resumo

Qualidade garante que produtos atendam aos padrões. Inspeções, checklists e rastreabilidade são essenciais.

## Questionário

1. Qual é a diferença entre refugo e retrabalho?
2. O que é rastreabilidade?
3. Por que checklists são importantes?

## Exercício Prático

Crie um checklist de inspeção para o acabamento de colchões, listando pelo menos 10 itens a verificar.

---

# Módulo 18 — Manutenção

## Objetivo

Explicar manutenção preventiva, corretiva, preditiva, lubrificação, paradas, MTBF e MTTR.

## Conceitos

### Tipos de Manutenção

#### Preventiva
Manutenção periódica programada (ex: troca de óleo a cada 3 meses).

#### Corretiva
Manutenção após quebra (ex: reparar motor queimado).

#### Preditiva
Manutenção baseada em monitoramento (ex: vibrômetro detectando desgaste).

### Lubrificação
Aplicação de lubrificantes para reduzir desgaste.

### Paradas
Interrupções de produção por manutenção.

### MTBF (Mean Time Between Failures)
Tempo médio entre falhas. Quanto maior, melhor.

### MTTR (Mean Time To Repair)
Tempo médio para reparar. Quanto menor, melhor.

## Exemplos Práticos

**Exemplo:** Máquina de corte tem MTBF de 200 horas (falha a cada 200 horas em média) e MTTR de 4 horas (leva 4 horas para reparar em média).

## Aplicação dentro da Plataforma

No Industrial OS:
1. Calendário de manutenções preventivas
2. Registro de manutenções corretivas
3. Monitoramento de MTBF e MTTR
4. Alertas de manutenções vencidas

## Erros Comuns

- **Só fazer corretiva:** Custo alto, produção parada
- **Não registrar MTBF/MTTR:** Sem métricas de desempenho
- **Manutenção preventiva inadequada:** Frequência errada

## Resumo

Manutenção preventiva reduz paradas não planejadas. MTBF e MTTR são métricas chave de desempenho.

## Questionário

1. Qual é a diferença entre manutenção preventiva e corretiva?
2. O que é MTBF?
3. Por que MTTR deve ser minimizado?

## Exercício Prático

Para uma máquina crítica da sua fábrica, defina o plano de manutenção preventiva (frequência, tarefas).

---

# Módulo 19 — PCP

## Objetivo

Explicar planejamento, sequenciamento, carga máquina, capacidade, acompanhamento e replanejamento.

## Conceitos

### Planejamento
Definir o que, quanto e quando produzir com base em demanda.

### Sequenciamento
Definir a ordem de execução das OPs.

### Carga Máquina
Quantidade de trabalho atribuída a cada centro de trabalho.

### Capacidade
Quantidade máxima que um centro pode produzir.

### Acompanhamento
Monitorar execução do planejamento em tempo real.

### Replanejamento
Ajustar planejamento quando ocorrem imprevistos.

## Exemplos Práticos

**Exemplo:** Demanda de 500 colchões na semana. Capacidade total: 600 colchões. Carga máquina: 83%. Sequenciamento: OPs prioritárias primeiro.

## Explicações Ilustradas

![PCP](screenshots/pcp.png)

A imagem mostra o painel de PCP com planejamento e carga máquina.

![MRP](screenshots/mrp.png)

A imagem mostra o cálculo de necessidades de materiais (MRP).

## Aplicação dentro da Plataforma

No Industrial OS:
1. Sistema calcula necessidades de materiais (MRP)
2. Carga máquina é calculada automaticamente
3. Gargalos são identificados
4. Replanejamento é facilitado com simulações

## Erros Comuns

- **Capacidade superestimada:** Planejamento inviável
- **Não considerar gargalos:** Produção atrasada
- **Não replanejar:** Plano obsoleto

## Resumo

PCP é o cérebro da produção. Planeja, sequencia, monitora e ajusta continuamente.

## Questionário

1. Qual é a função do PCP?
2. O que é carga máquina?
3. Quando é necessário replanejar?

## Exercício Prático

Dada uma demanda de 200 colchões para a próxima semana e capacidade de 50 colchões/dia, crie um plano de produção.

---

# Módulo 20 — Custos Industriais

## Objetivo

Explicar composição de custos e como calcular o custo do colchão.

## Conceitos

### Composição de Custos

#### Matéria-Prima
Custo dos materiais diretos.

#### MOD (Mão de Obra Direta)
Custo dos operadores que produzem diretamente.

#### Energia
Custo de eletricidade, gás, etc.

#### Máquinas
Depreciação e manutenção.

#### Ferramentas
Custo de ferramentas consumíveis.

#### Custos Indiretos
Supervisão, aluguel, impostos, etc.

### Margem
Diferença entre preço e custo.

### Preço
Valor de venda.

### Rentabilidade
Margem como percentual do preço.

## Exemplo de Cálculo

```
Custo do Colchão Premium 25cm:

Matéria-Prima: R$ 150,00
MOD: R$ 30,00
Energia: R$ 10,00
Máquinas: R$ 15,00
Ferramentas: R$ 5,00
Custos Indiretos: R$ 40,00
---
Custo Total: R$ 250,00
Margem (20%): R$ 50,00
Preço de Venda: R$ 300,00
Rentabilidade: 16,7%
```

## Aplicação dentro da Plataforma

No Industrial OS:
1. Custos de matérias-primas atualizados automaticamente
2. MOD calculada por apontamentos
3. Custos indiretos rateados por centro de trabalho
4. Custo total calculado por produto

## Erros Comuns

- **Custos desatualizados:** Decisões baseadas em dados errados
- **Não considerar custos indiretos:** Custo subestimado
- **Margem insuficiente:** Prejuízo

## Resumo

Custo é a soma de todos os recursos consumidos. Preço deve cobrir custo + margem.

## Questionário

1. Quais são os componentes do custo industrial?
2. Qual é a diferença entre margem e rentabilidade?
3. Por que custos indiretos são importantes?

## Exercício Prático

Calcule o custo de um colchão, considerando todos os componentes (matéria-prima, MOD, energia, etc.).

---

# Módulo 21 — Indicadores Industriais

## Objetivo

Explicar principais KPIs industriais e como são calculados.

## Conceitos

### OEE (Overall Equipment Effectiveness)
Eficiência global dos equipamentos.

```
OEE = Disponibilidade × Performance × Qualidade

Disponibilidade = Tempo Operacional / Tempo Programado
Performance = Produção Real / Capacidade Produção
Qualidade = Produção Boa / Produção Total
```

### Lead Time
Tempo do início ao fim do processo.

### Setup
Tempo de preparação entre lotes.

### Scrap
Percentual de material desperdiçado.

### Refugo
Percentual de produtos defeituosos.

### Eficiência
Produção real / capacidade.

### Produtividade
Produção / recurso (ex: colchões/hora/operador).

### Capacidade
Produção máxima possível.

### Backlog
Quantidade de OPs pendentes.

### Rentabilidade
Lucro / custo.

## Exemplos Práticos

**Exemplo OEE:**
- Tempo programado: 480 min
- Tempo operacional: 420 min (60 min paradas)
- Capacidade: 100 colchões
- Produção real: 80 colchões
- Produção boa: 76 colchões (4 refugo)

Disponibilidade = 420/480 = 87,5%
Performance = 80/100 = 80%
Qualidade = 76/80 = 95%
OEE = 87,5% × 80% × 95% = 66,5%

## Explicações Ilustradas

![Dashboard](screenshots/dashboard.png)

A imagem mostra o dashboard com indicadores industriais.

![Dashboard Mature](screenshots/dashboard-mature.png)

A imagem mostra um dashboard mais completo com múltiplos KPIs.

## Aplicação dentro da Plataforma

No Industrial OS:
1. KPIs calculados automaticamente em tempo real
2. Dashboard visual com todos os indicadores
3. Alertas quando KPIs saem da meta
4. Histórico para análise de tendência

## Erros Comuns

- **Focar em um KPI apenas:** Visão limitada
- **Metas irreais:** Desmotivação
- **Não agir nos dados:** KPIs sem ação

## Resumo

KPIs medem desempenho. OEE é o indicador mais completo, combinando disponibilidade, performance e qualidade.

## Questionário

1. O que é OEE?
2. Como é calculado o OEE?
3. Quais são os 3 componentes do OEE?

## Exercício Prático

Calcule o OEE de uma máquina com os seguintes dados:
- Tempo programado: 8 horas
- Paradas: 1 hora
- Capacidade: 50 unidades
- Produção real: 40 unidades
- Refugo: 2 unidades

---

# Módulo 22 — Inteligência Artificial Industrial

## Objetivo

Explicar como o Copilot utiliza os dados da plataforma para gerar análises e recomendações.

## Conceitos

### O que o Copilot Faz

O Copilot Industrial é uma IA que utiliza todos os dados cadastrados na plataforma para:

#### Produtos
Analisa fichas técnicas, BOMs e custos para identificar oportunidades de otimização.

#### Processos
Estuda roteiros produtivos para sugerir melhorias de eficiência.

#### Ordens
Monitora OPs em tempo real para prever atrasos e gargalos.

#### Custos
Rastreia custos por produto, centro de trabalho e operador para identificar desperdícios.

#### Estoque
Prevê necessidades de materiais com base em demanda histórica.

#### Qualidade
Analisa padrões de refugo para identificar causas raiz.

#### PCP
Sugere sequenciamento ótimo de OPs para maximizar throughput.

#### Indicadores
Correlaciona múltiplos KPIs para identificar relações de causa e efeito.

## Princípio Fundamental

**A IA não cria informações. Ela interpreta dados cadastrados na plataforma para gerar análises, recomendações, previsões e apoio à tomada de decisão.**

Se os dados estiverem incorretos ou incompletos, as análises da IA também serão.

## Exemplos Práticos

**Exemplo 1:** Copilot analisa histórico de apontamentos e identifica que a máquina de costura tem menor eficiência às segundas-feiras. Recomenda revisar manutenção preventiva para antes do fim de semana.

**Exemplo 2:** Copilot correlaciona aumento de refugo com troca de fornecedor de tecido. Recomenda retornar ao fornecedor anterior ou qualificar o novo.

**Exemplo 3:** Copilot prevê que estoque de espuma acabará em 5 dias com base na demanda atual. Recomenda antecipar compra.

## Aplicação dentro da Plataforma

No Industrial OS:
1. Copilot acessa todos os dados da plataforma
2. Análises são geradas em tempo real
3. Recomendações são apresentadas com contexto
4. Usuário pode aceitar ou rejeitar sugestões
5. Aprendizado contínuo com feedback do usuário

## Erros Comuns

- **Dados incorretos:** IA gera análises baseadas em dados errados
- **Ignorar recomendações:** Perder oportunidades de melhoria
- **Depender cegamente:** IA é suporte, não substituto do julgamento humano

## Resumo

O Copilot Industrial é uma ferramenta de apoio à decisão que interpreta dados da plataforma. A qualidade das análises depende da qualidade dos dados.

## Questionário

1. O Copilot cria informações ou interpreta dados?
2. Quais tipos de dados o Copilot utiliza?
3. Por que é importante manter dados atualizados?

## Exercício Prático

Liste 3 decisões que você poderia tomar com apoio do Copilot Industrial na sua fábrica.

---

# Fluxo Geral do Conhecimento

O treinamento demonstra continuamente a relação entre todos os elementos da fábrica.

```
EMPRESA
    ↓
UNIDADE
    ↓
LAYOUT
    ↓
SETORES
    ↓
CENTROS DE TRABALHO
    ↓
MÁQUINAS
    ↓
OPERADORES
    ↓
MATÉRIAS-PRIMAS
    ↓
COMPONENTES
    ↓
PRODUTOS
    ↓
BOM
    ↓
PROCESSOS
    ↓
ORDENS DE PRODUÇÃO
    ↓
APONTAMENTOS
    ↓
ESTOQUE
    ↓
QUALIDADE
    ↓
MANUTENÇÃO
    ↓
PCP
    ↓
CUSTOS
    ↓
KPIs
    ↓
COPILOT INDUSTRIAL
```

Cada cadastral influencia o próximo. O Copilot Industrial utiliza todos esses dados para gerar inteligência.

---

# Requisitos Pedagógicos

O treinamento deve:

* utilizar linguagem simples e progressiva;
* incluir exemplos práticos de uma fábrica de colchões;
* utilizar diagramas, fluxogramas e ilustrações quando possível;
* apresentar exercícios ao final de cada módulo;
* incluir questionários para validação do aprendizado;
* permitir acompanhamento do progresso do usuário;
* registrar percentual de conclusão por módulo;
* emitir certificado interno ao concluir todos os módulos.

O foco do treinamento é capacitar gestores, supervisores, operadores, analistas e administradores da plataforma a compreender não apenas o funcionamento do software, mas também os conceitos fundamentais da Engenharia de Produção, permitindo utilizar o Industrial OS como uma representação fiel dos processos reais de uma fábrica de colchões.
