# AUDITORIA DE TREINAMENTOS — INDUSTRIAL OS

**Data:** 2025-01-21  
**Objetivo:** Análise completa de todos os módulos do sistema Industrial OS para identificar viabilidade de criação de treinamentos, complexidade de aprendizagem, prioridade de implantação e estratégia de documentação.

**Contexto do Usuário:**
- Baixo nível técnico
- Pouca familiaridade com sistemas ERP
- Acumulam múltiplas funções na fábrica
- Foco em aprendizado prático e imediato

---

# ANÁLISE POR MÓDULO

## 1. EMPRESA

### 1. Identificação
- **Nome do módulo:** Empresa
- **Objetivo principal:** Cadastro da identidade da fábrica (razão social, CNPJ, endereço, marca)
- **Perfil que utiliza:** Gestor, Administrador, RH
- **Frequência de uso:** Eventual (configuração inicial e raras atualizações)

### 2. Nível de Complexidade
**Classificação:** Muito Simples

**Justificativa:** Formulário básico com 4-5 campos (razão social, CNPJ, endereço, telefone, logotipo). Não há lógica complexa, regras de negócio ou cálculos. É um cadastro estático que raramente muda.

### 3. Dependências
- **Depende de:** Nenhuma
- **É dependência de:** Setores, Funcionários, todos os relatórios

### 4. Maturidade Necessária
**Classificação:** Primeiro Lote

**Justificativa:** Essencial para qualquer documento fiscal, nota fiscal ou relatório. Precisa ser configurado antes de qualquer operação comercial.

### 5. Potencial de Treinamento
**Classificação:** Treinamento obrigatório

**Justificativa:** Sem empresa configurada, o sistema não gera documentos válidos. É o primeiro passo do onboarding.

### 6. Dificuldade de Ensino
**Classificação:** Muito Fácil

**Justificativa:** Campos intuitivos, usuário já conhece essas informações de heart. Não requer conceitos técnicos ou industriais.

### 7. Quantidade Recomendada de Slides
**Classificação:** 5 Slides

**Justificativa:** 
- Slide 1: O que é e por que cadastrar
- Slide 2: Campos obrigatórios
- Slide 3: Exemplo de cadastro completo
- Slide 4: Dicas de preenchimento (CNPJ, endereço)
- Slide 5: Próximos passos

### 8. Formato Ideal
**Classificação:** Passo a Passo

**Justificativa:** Tutorial linear simples. Não precisa de vídeo ou simulação.

### 9. Necessidade de Capturas de Tela
**Classificação:** Baixa

**Justificativa:** Formulário simples, capturas básicas suficientes.

### 10. Valor para o Negócio
**Classificação:** Alto

**Justificativa:** Fundação para todos os documentos fiscais e comerciais. Sem isso, a fábrica não opera legalmente.

---

## 2. SETORES

### 1. Identificação
- **Nome do módulo:** Setores
- **Objetivo principal:** Estrutura física da fábrica (galpões, linhas, áreas administrativas)
- **Perfil que utiliza:** Gestor, Engenheiro de Produção
- **Frequência de uso:** Eventual (configuração inicial e raras alterações)

### 2. Nível de Complexidade
**Classificação:** Simples

**Justificativa:** Cadastro de áreas com nome, tipo (produção/estoque/administrativo) e responsável. Requer entendimento básico do layout físico da fábrica.

### 3. Dependências
- **Depende de:** Empresa
- **É dependência de:** Funcionários, Equipamentos, Ferramentas

### 4. Maturidade Necessária
**Classificação:** Operação Inicial

**Justificativa:** Necessário para alocar pessoas e máquinas, mas pode ser simplificado (apenas "Produção" e "Estoque") no primeiro lote.

### 5. Potencial de Treinamento
**Classificação:** Treinamento recomendado

**Justificativa:** Importante para organização, mas pode ser ensinado junto com outros cadastros básicos.

### 6. Dificuldade de Ensino
**Classificação:** Fácil

**Justificativa:** Conceito intuitivo - usuário conhece fisicamente a fábrica. Apenas precisa traduzir para sistema.

### 7. Quantidade Recomendada de Slides
**Classificação:** 6 Slides

**Justificativa:**
- Slide 1: O que são setores e por que estruturar
- Slide 2: Tipos de setor (produção, estoque, administrativo)
- Slide 3: Como criar um setor
- Slide 4: Exemplo prático (layout típico de colchonaria)
- Slide 5: Hierarquia e responsáveis
- Slide 6: Erros comuns a evitar

### 8. Formato Ideal
**Classificação:** Passo a Passo + Checklist

**Justificativa:** Tutorial linear com checklist de setores mínimos necessários.

### 9. Necessidade de Capturas de Tela
**Classificação:** Média

**Justificativa:** Capturas de formulário e exemplo de layout visual ajudam.

### 10. Valor para o Negócio
**Classificação:** Médio

**Justificativa:** Base para alocação de recursos e custos por área, mas não crítico para produção imediata.

---

## 3. FUNCIONÁRIOS

### 1. Identificação
- **Nome do módulo:** Funcionários
- **Objetivo principal:** Cadastro de equipe, funções, turnos e vínculos com setores
- **Perfil que utiliza:** RH, Gestor
- **Frequência de uso:** Semanal (novas contratações, alterações)

### 2. Nível de Complexidade
**Classificação:** Médio

**Justificativa:** Requer entender conceitos de turno, jornada, função e centro de custo. Usuário com baixa instrução pode confundir vínculos.

### 3. Dependências
- **Depende de:** Setores
- **É dependência de:** Apontamentos, Qualidade, Capacidade

### 4. Maturidade Necessária
**Classificação:** Operação Inicial

**Justificativa:** Necessário para apontar produção, mas pode começar com cadastro simplificado (nome, função, turno).

### 5. Potencial de Treinamento
**Classificação:** Treinamento recomendado

**Justificativa:** Crítico para rastreabilidade e custos, mas conceito de turno/jornada pode ser confuso.

### 6. Dificuldade de Ensino
**Classificação:** Média

**Justificativa:** Conceito de turno e jornada é familiar, mas vincular com setor e função requer explicação.

### 7. Quantidade Recomendada de Slides
**Classificação:** 7 Slides

**Justificativa:**
- Slide 1: Por que cadastrar funcionários
- Slide 2: Campos obrigatórios (nome, função, turno)
- Slide 3: O que é turno e jornada
- Slide 4: Vínculo com setor
- Slide 5: Exemplo de cadastro completo
- Slide 6: Turnos típicos em colchonaria
- Slide 7: Erros comuns (funcionário sem setor, turno indefinido)

### 8. Formato Ideal
**Classificação:** Passo a Passo + Vídeo Demonstrativo

**Justificativa:** Tutorial linear com vídeo mostrando cadastro prático.

### 9. Necessidade de Capturas de Tela
**Classificação:** Alta

**Justificativa:** Múltiplos campos e relações requerem capturas detalhadas.

### 10. Valor para o Negócio
**Classificação:** Alto

**Justificativa:** Base para apontamento de produção, cálculo de custos de mão-de-obra e rastreabilidade.

---

## 4. EQUIPAMENTOS

### 1. Identificação
- **Nome do módulo:** Equipamentos
- **Objetivo principal:** Cadastro de máquinas, linhas e estações de trabalho
- **Perfil que utiliza:** Gestor, Manutenção
- **Frequência de uso:** Eventual (novas aquisições, alterações)

### 2. Nível de Complexidade
**Classificação:** Médio

**Justificativa:** Multi-step form com capacidade nominal, setor, status. Requer entender conceitos técnicos de capacidade.

### 3. Dependências
- **Depende de:** Setores
- **É dependência de:** Apontamentos, Capacidade, Produção em Tempo Real

### 4. Maturidade Necessária
**Classificação:** Operação Inicial

**Justificativa:** Necessário para apontar produção, mas pode ser simplificado (nome, setor) no início.

### 5. Potencial de Treinamento
**Classificação:** Treinamento recomendado

**Justificativa:** Importante para capacidade e manutenção, mas conceito de capacidade pode ser confuso.

### 6. Dificuldade de Ensino
**Classificação:** Média

**Justificativa:** Usuário conhece as máquinas, mas "capacidade nominal" é conceito técnico.

### 7. Quantidade Recomendada de Slides
**Classificação:** 7 Slides

**Justificativa:**
- Slide 1: Por que cadastrar equipamentos
- Slide 2: O que é capacidade nominal
- Slide 3: Campos do cadastro (nome, tipo, capacidade)
- Slide 4: Vínculo com setor
- Slide 5: Status do equipamento (ativo, manutenção, inativo)
- Slide 6: Exemplo prático (máquina de corte, linha de montagem)
- Slide 7: Erros comuns (capacidade zero, sem setor)

### 8. Formato Ideal
**Classificação:** Passo a Passo + Vídeo Demonstrativo

**Justificativa:** Tutorial linear com vídeo mostrando cadastro multi-step.

### 9. Necessidade de Capturas de Tela
**Classificação:** Alta

**Justificativa:** Multi-step form requer capturas de cada etapa.

### 10. Valor para o Negócio
**Classificação:** Alto

**Justificativa:** Base para cálculo de capacidade, manutenção preventiva e custo hora-máquina.

---

## 5. FERRAMENTAS

### 1. Identificação
- **Nome do módulo:** Ferramentas
- **Objetivo principal:** Controle de moldes, gabaritos e ferramentas auxiliares
- **Perfil que utiliza:** Gestor, Manutenção, PCP
- **Frequência de uso:** Eventual (novas ferramentas, alterações)

### 2. Nível de Complexidade
**Classificação:** Simples

**Justificativa:** Cadastro básico similar a equipamentos, mas sem conceito de capacidade. Apenas nome, tipo, localização.

### 3. Dependências
- **Depende de:** Setores
- **É dependência de:** Nenhuma (auxiliar)

### 4. Maturidade Necessária
**Classificação:** Empresa Estruturada

**Justificativa:** Importante para evitar paradas por ferramenta indisponível, mas não crítico para primeiro lote.

### 5. Potencial de Treinamento
**Classificação:** Treinamento futuro

**Justificativa:** Útil mas não essencial. Pode ser adiado para fase de crescimento.

### 6. Dificuldade de Ensino
**Classificação:** Fácil

**Justificativa:** Conceito intuitivo - usuário manuseia ferramentas diariamente.

### 7. Quantidade Recomendada de Slides
**Classificação:** 5 Slides

**Justificativa:**
- Slide 1: O que são ferramentas no sistema
- Slide 2: Tipos de ferramentas (moldes, gabaritos, auxiliares)
- Slide 3: Como cadastrar
- Slide 4: Localização e status
- Slide 5: Benefícios do controle

### 8. Formato Ideal
**Classificação:** Passo a Passo

**Justificativa:** Tutorial simples, não requer vídeo.

### 9. Necessidade de Capturas de Tela
**Classificação:** Baixa

**Justificativa:** Formulário simples, capturas básicas suficientes.

### 10. Valor para o Negócio
**Classificação:** Médio

**Justificativa:** Evita paradas por ferramenta indisponível, mas não crítico para operação básica.

---

## 6. MATÉRIAS-PRIMAS

### 1. Identificação
- **Nome do módulo:** Matérias-Primas
- **Objetivo principal:** Catálogo de espumas, tecidos, molas, linhas e insumos
- **Perfil que utiliza:** Compras, PCP, Almoxarifado
- **Frequência de uso:** Semanal (novos insumos, atualizações)

### 2. Nível de Complexidade
**Classificação:** Médio

**Justificativa:** Requer entender unidade de medida, categoria, lead time e fornecedor. Usuário pode confundir unidades (m², kg, un).

### 3. Dependências
- **Depende de:** Fornecedores
- **É dependência de:** BOM, Consumo de Materiais, MRP, Estoque Industrial

### 4. Maturidade Necessária
**Classificação:** Primeiro Lote

**Justificativa:** Pré-requisito absoluto para BOM, custos e compras. Sem matérias-primas, não há produto.

### 5. Potencial de Treinamento
**Classificação:** Treinamento obrigatório

**Justificativa:** Base para toda a cadeia de suprimentos. Erros aqui afetam custos e produção.

### 6. Dificuldade de Ensino
**Classificação:** Média

**Justificativa:** Conceito de unidade de medida e lead time é técnico. Usuário precisa entender impacto.

### 7. Quantidade Recomendada de Slides
**Classificação:** 8 Slides

**Justificativa:**
- Slide 1: Por que cadastrar matérias-primas
- Slide 2: O que é unidade de medida (m², kg, un)
- Slide 3: Categorias de insumos (espumas, tecidos, molas)
- Slide 4: O que é lead time
- Slide 5: Vínculo com fornecedor
- Slide 6: Exemplo de cadastro (espuma 25cm, tecido algodão)
- Slide 7: Erros comuns (unidade errada, sem fornecedor)
- Slide 8: Impacto no BOM e custos

### 8. Formato Ideal
**Classificação:** Passo a Passo + Vídeo Demonstrativo

**Justificativa:** Tutorial linear com vídeo mostrando cadastro prático com exemplos reais.

### 9. Necessidade de Capturas de Tela
**Classificação:** Alta

**Justificativa:** Múltiplos campos e conceitos técnicos requerem capturas detalhadas.

### 10. Valor para o Negócio
**Classificação:** Muito Alto

**Justificativa:** Fundação para BOM, custos, MRP e compras. Erros aqui propagam por todo o sistema.

---

## 7. FORNECEDORES

### 1. Identificação
- **Nome do módulo:** Fornecedores
- **Objetivo principal:** Cadastro de fornecedores estratégicos, lead times e condições comerciais
- **Perfil que utiliza:** Compras
- **Frequência de uso:** Semanal (novos fornecedores, atualizações)

### 2. Nível de Complexidade
**Classificação:** Simples

**Justificativa:** Cadastro básico com dados fiscais, contato e lead time. Usuário já lida com fornecedores no dia a dia.

### 3. Dependências
- **Depende de:** Nenhuma
- **É dependência de:** Matérias-Primas, MRP

### 4. Maturidade Necessária
**Classificação:** Primeiro Lote

**Justificativa:** Necessário para vincular matérias-primas e calcular lead times de compras.

### 5. Potencial de Treinamento
**Classificação:** Treinamento obrigatório

**Justificativa:** Base para compras e MRP. Sem fornecedores, não há cadeia de suprimentos.

### 6. Dificuldade de Ensino
**Classificação:** Fácil

**Justificativa:** Usuário já cadastra fornecedores manualmente. Sistema apenas digitaliza processo existente.

### 7. Quantidade Recomendada de Slides
**Classificação:** 6 Slides

**Justificativa:**
- Slide 1: Por que cadastrar fornecedores
- Slide 2: Dados fiscais obrigatórios
- Slide 3: O que é lead time de fornecedor
- Slide 4: Contatos e condições comerciais
- Slide 5: Exemplo de cadastro completo
- Slide 6: Vínculo com matérias-primas

### 8. Formato Ideal
**Classificação:** Passo a Passo

**Justificativa:** Tutorial simples, não requer vídeo complexo.

### 9. Necessidade de Capturas de Tela
**Classificação:** Média

**Justificativa:** Capturas de formulário e exemplo de vínculo com matérias-primas.

### 10. Valor para o Negócio
**Classificação:** Alto

**Justificativa:** Base para compras, cálculo de ponto de pedido e MRP.

---

## 8. PRODUTOS

### 1. Identificação
- **Nome do módulo:** Produtos
- **Objetivo principal:** Catálogo de colchões (linhas, modelos, dimensões, SKU)
- **Perfil que utiliza:** Engenharia, PCP, Comercial
- **Frequência de uso:** Mensal (novos modelos, alterações)

### 2. Nível de Complexidade
**Classificação:** Complexo

**Justificativa:** Multi-step wizard com 4 passos (informações básicas, dimensões, componentes, processo). Requer entender SKU, linhas comerciais e estrutura de produto.

### 3. Dependências
- **Depende de:** Nenhuma
- **É dependência de:** BOM, Ordens de Produção, Lotes

### 4. Maturidade Necessária
**Classificação:** Primeiro Lote

**Justificativa:** Centro do negócio. Sem produtos, não há OPs, não há produção.

### 5. Potencial de Treinamento
**Classificação:** Treinamento obrigatório

**Justificativa:** Crítico para operação. Erros aqui afetam BOM, custos e produção.

### 6. Dificuldade de Ensino
**Classificação:** Difícil

**Justificativa:** Multi-step wizard com conceitos de SKU, linhas e dimensões. Usuário com baixa instrução pode se perder nas etapas.

### 7. Quantidade Recomendada de Slides
**Classificação:** 8 Slides

**Justificativa:**
- Slide 1: Por que cadastrar produtos
- Slide 2: O que é SKU e importância
- Slide 3: Passo 1 - Informações básicas
- Slide 4: Passo 2 - Dimensões e medidas
- Slide 5: Passo 3 - Componentes (prévia BOM)
- Slide 6: Passo 4 - Processo de fabricação
- Slide 7: Exemplo completo (colchão Single Espuma)
- Slide 8: Erros comuns e dicas

### 8. Formato Ideal
**Classificação:** Vídeo Demonstrativo + Passo a Passo

**Justificativa:** Vídeo mostrando wizard completo é essencial. Tutorial linear como backup.

### 9. Necessidade de Capturas de Tela
**Classificação:** Crítica

**Justificativa:** Multi-step wizard requer capturas de cada etapa com destaque para campos importantes.

### 10. Valor para o Negócio
**Classificação:** Muito Alto

**Justificativa:** Conecta vendas, BOM, processos e capacidade. É o centro do negócio.

---

## 9. COMPONENTES

### 1. Identificação
- **Nome do módulo:** Componentes
- **Objetivo principal:** Cadastro de semi-acabados (capas, núcleos, conjuntos)
- **Perfil que utiliza:** Engenharia, PCP
- **Frequência de uso:** Mensal (novos componentes, alterações)

### 2. Nível de Complexidade
**Classificação:** Médio

**Justificativa:** Requer entender conceito de semi-acabado vs. matéria-prima vs. produto acabado. Usuário pode confundir categorias.

### 3. Dependências
- **Depende de:** Nenhuma
- **É dependência de:** BOM

### 4. Maturidade Necessária
**Classificação:** Empresa Estruturada

**Justificativa:** Útil para reduzir duplicidade em BOM e produção em estágios, mas não essencial para primeiro lote.

### 5. Potencial de Treinamento
**Classificação:** Treinamento futuro

**Justificativa:** Conceito avançado. Pode ser ensinado quando fábrica tiver produção estruturada em estágios.

### 6. Dificuldade de Ensino
**Classificação:** Média

**Justificativa:** Conceito de semi-acabado requer entendimento de fluxo de produção. Não é intuitivo.

### 7. Quantidade Recomendada de Slides
**Classificação:** 7 Slides

**Justificativa:**
- Slide 1: O que são componentes (semi-acabados)
- Slide 2: Diferença entre matéria-prima, componente e produto
- Slide 3: Quando usar componentes
- Slide 4: Como cadastrar
- Slide 5: Exemplos (capa montada, núcleo de molas)
- Slide 6: Integração com BOM
- Slide 7: Benefícios para produção em estágios

### 8. Formato Ideal
**Classificação:** Processo Operacional + Vídeo Demonstrativo

**Justificativa:** Explicação conceitual primeiro, depois vídeo prático.

### 9. Necessidade de Capturas de Tela
**Classificação:** Alta

**Justificativa:** Exemplos visuais de componentes e integração com BOM requerem capturas.

### 10. Valor para o Negócio
**Classificação:** Médio

**Justificativa:** Reduz duplicidade em BOM e prepara terreno para produção em estágios, mas não crítico.

---

## 10. BOM (BILL OF MATERIALS)

### 1. Identificação
- **Nome do módulo:** BOM
- **Objetivo principal:** Árvore de materiais de cada produto
- **Perfil que utiliza:** Engenharia, PCP
- **Frequência de uso:** Mensal (novos produtos, alterações)

### 2. Nível de Complexidade
**Classificação:** Muito Complexo

**Justificativa:** Editor visual de árvore com drag-and-drop, níveis hierárquicos, quantidades, unidades e custos. Requer entendimento profundo de estrutura de produto.

### 3. Dependências
- **Depende de:** Produtos, Componentes, Matérias-Primas
- **É dependência de:** MRP, Custos, Ordens de Produção

### 4. Maturidade Necessária
**Classificação:** Primeiro Lote

**Justificativa:** Fundação para custo padrão, MRP e OPs. Sem BOM, não há custos nem planejamento.

### 5. Potencial de Treinamento
**Classificação:** Treinamento obrigatório

**Justificativa:** Crítico para custos e MRP. Erros aqui afetam toda a cadeia de suprimentos.

### 6. Dificuldade de Ensino
**Classificação:** Muito Difícil

**Justificativa:** Interface complexa com árvore hierárquica, drag-and-drop, múltiplos níveis. Usuário com baixa instrução terá grande dificuldade.

### 7. Quantidade Recomendada de Slides
**Classificação:** 8 Slides

**Justificativa:**
- Slide 1: O que é BOM e por que é crítico
- Slide 2: Estrutura hierárquica (níveis da árvore)
- Slide 3: Como adicionar itens (matérias-primas, componentes)
- Slide 4: Quantidades, unidades e perdas
- Slide 5: Drag-and-drop e reorganização
- Slide 6: Cálculo automático de custos
- Slide 7: Exemplo completo (BOM de colchão)
- Slide 8: Erros comuns e validações

### 8. Formato Ideal
**Classificação:** Vídeo Demonstrativo + Simulação

**Justificativa:** Vídeo mostrando construção completa de BOM é essencial. Simulação interativa seria ideal.

### 9. Necessidade de Capturas de Tela
**Classificação:** Crítica

**Justificativa:** Interface complexa requer capturas detalhadas de cada ação (adicionar, arrastar, editar).

### 10. Valor para o Negócio
**Classificação:** Muito Alto

**Justificativa:** Fundação para custo padrão, MRP, PCP e ordens de produção. É a base da engenharia.

---

## 11. PROCESSOS

### 1. Identificação
- **Nome do módulo:** Processos
- **Objetivo principal:** Roteiro de fabricação (operções, sequência, recursos)
- **Perfil que utiliza:** Engenharia, PCP
- **Frequência de uso:** Mensal (novos produtos, otimizações)

### 2. Nível de Complexidade
**Classificação:** Muito Complexo

**Justificativa:** Step-by-step editor com operações, recursos, branching (linear, paralelo, condicional). Requer entender fluxo de produção.

### 3. Dependências
- **Depende de:** Nenhuma
- **É dependência de:** Cronometragem, Capacidade, Ordens de Produção

### 4. Maturidade Necessária
**Classificação:** Operação Inicial

**Justificativa:** Necessário para apontamento por operação e cálculo de capacidade, mas pode ser simplificado (processo genérico) no início.

### 5. Potencial de Treinamento
**Classificação:** Treinamento recomendado

**Justificativa:** Importante para capacidade e apontamento, mas pode ser ensinado com exemplos simples.

### 6. Dificuldade de Ensino
**Classificação:** Muito Difícil

**Justificativa:** Conceito de roteiro, sequência, branching é técnico. Interface complexa com drag-and-drop.

### 7. Quantidade Recomendada de Slides
**Classificação:** 8 Slides

**Justificativa:**
- Slide 1: O que é processo/roteiro de fabricação
- Slide 2: Por que mapear processos
- Slide 3: Operações e sequência
- Slide 4: Recursos por operação (máquinas, pessoas)
- Slide 5: Tipos de fluxo (linear, paralelo, condicional)
- Slide 6: Como criar processo step-by-step
- Slide 7: Exemplo completo (roteiro de colchão)
- Slide 8: Integração com apontamento e capacidade

### 8. Formato Ideal
**Classificação:** Vídeo Demonstrativo + Simulação

**Justificativa:** Vídeo mostrando construção de roteiro é essencial. Simulação interativa ideal.

### 9. Necessidade de Capturas de Tela
**Classificação:** Crítica

**Justificativa:** Interface complexa requer capturas detalhadas de cada step e ação.

### 10. Valor para o Negócio
**Classificação:** Alto

**Justificativa:** Base para cálculo de tempo padrão, capacidade real e apontamento por operação.

---

## 12. CRONOMETRAGEM

### 1. Identificação
- **Nome do módulo:** Cronometragem
- **Objetivo principal:** Estudo de tempos e geração de tempo padrão
- **Perfil que utiliza:** Engenharia, PCP
- **Frequência de uso:** Eventual (novos produtos, revisões)

### 2. Nível de Complexidade
**Classificação:** Muito Complexo

**Justificativa:** Requer entender conceitos de estudo de tempos, fator de avaliação, tolerâncias e tempo padrão. Técnico e matemático.

### 3. Dependências
- **Depende de:** Processos
- **É dependência de:** Capacidade

### 4. Maturidade Necessária
**Classificação:** Operação Avançada

**Justificativa:** Técnica avançada de engenharia. Fábrica iniciante não tem maturidade para estudos de tempos formais.

### 5. Potencial de Treinamento
**Classificação:** Treinamento futuro

**Justificativa:** Conceito avançado. Deve ser ensinado apenas quando fábrica tiver engenharia estruturada.

### 6. Dificuldade de Ensino
**Classificação:** Muito Difícil

**Justificativa:** Conceitos técnicos (PF, tolerâncias, tempo padrão) são difíceis mesmo para engenheiros. Usuário com baixa instrução não conseguirá.

### 7. Quantidade Recomendada de Slides
**Classificação:** 8 Slides

**Justificativa:**
- Slide 1: O que é cronometragem
- Slide 2: Por que tempo padrão é crítico
- Slide 3: Fator de avaliação (performance)
- Slide 4: Tolerâncias (fadiga, necessidades pessoais)
- Slide 5: Cálculo de tempo padrão
- Slide 6: Como realizar estudo de tempos
- Slide 7: Exemplo prático (operação de corte)
- Slide 8: Integração com capacidade

### 8. Formato Ideal
**Classificação:** Processo Operacional + Vídeo Demonstrativo

**Justificativa:** Explicação teórica necessária antes de vídeo prático.

### 9. Necessidade de Capturas de Tela
**Classificação:** Alta

**Justificativa:** Fórmulas e cálculos requerem capturas com explicações.

### 10. Valor para o Negócio
**Classificação:** Alto

**Justificativa:** Sem tempo padrão não há PCP confiável. Mede a fábrica de verdade.

---

## 13. CAPACIDADE

### 1. Identificação
- **Nome do módulo:** Capacidade
- **Objetivo principal:** Cálculo de capacidade produtiva por recurso, turno e período
- **Perfil que utiliza:** PCP, Gestor
- **Frequência de uso:** Mensal (revisões, novos cenários)

### 2. Nível de Complexidade
**Classificação:** Muito Complexo

**Justificativa:** Requer entender capacidade nominal vs. real, eficiência, turnos, cenários. Conceitos técnicos de engenharia de produção.

### 3. Dependências
- **Depende de:** Equipamentos, Processos, Cronometragem
- **É dependência de:** PCP

### 4. Maturidade Necessária
**Classificação:** Operação Inicial

**Justificativa:** Necessário para planejamento, mas pode usar capacidade nominal simplificada no início.

### 5. Potencial de Treinamento
**Classificação:** Treinamento recomendado

**Justificativa:** Importante para PCP, mas conceito pode ser ensinado progressivamente.

### 6. Dificuldade de Ensino
**Classificação:** Muito Difícil

**Justificativa:** Conceitos de capacidade, eficiência, turnos são técnicos. Usuário com baixa instrução terá dificuldade.

### 7. Quantidade Recomendada de Slides
**Classificação:** 8 Slides

**Justificativa:**
- Slide 1: O que é capacidade produtiva
- Slide 2: Capacidade nominal vs. real
- Slide 3: Eficiência e fatores de redução
- Slide 4: Turnos e jornada
- Slide 5: Como calcular capacidade por recurso
- Slide 6: Simulação de cenários
- Slide 7: Identificação de gargalos
- Slide 8: Integração com PCP

### 8. Formato Ideal
**Classificação:** Processo Operacional + Vídeo Demonstrativo

**Justificativa:** Explicação conceitual necessária antes de vídeo prático.

### 9. Necessidade de Capturas de Tela
**Classificação:** Alta

**Justificativa:** Cálculos e cenários requerem capturas detalhadas.

### 10. Valor para o Negócio
**Classificação:** Alto

**Justificativa:** Revela gargalos, sustenta promessas comerciais e orienta investimentos.

---

## 14. ORDENS DE PRODUÇÃO (OPs)

### 1. Identificação
- **Nome do módulo:** Ordens de Produção
- **Objetivo principal:** Criar e gerenciar ordens de produção com status, prioridade, datas
- **Perfil que utiliza:** PCP, Produção
- **Frequência de uso:** Diário (criação, acompanhamento)

### 2. Nível de Complexidade
**Classificação:** Médio

**Justificativa:** Workflow com status (planejada, liberada, em produção, finalizada) e ações (release, start, complete). Requer entender fluxo de produção.

### 3. Dependências
- **Depende de:** Produtos, Processos, Capacidade
- **É dependência de:** Apontamentos, Lotes, Consumo de Materiais, MRP, PCP, Produção em Tempo Real

### 4. Maturidade Necessária
**Classificação:** Primeiro Lote

**Justificativa:** Centro de toda a produção. Sem OPs, não há produção organizada.

### 5. Potencial de Treinamento
**Classificação:** Treinamento obrigatório

**Justificativa:** Crítico para operação. É o módulo mais usado diariamente.

### 6. Dificuldade de Ensino
**Classificação:** Média

**Justificativa:** Workflow é intuitivo (criar → liberar → iniciar → completar), mas status e ações requerem explicação.

### 7. Quantidade Recomendada de Slides
**Classificação:** 8 Slides

**Justificativa:**
- Slide 1: O que é Ordem de Produção
- Slide 2: Por que usar OPs
- Slide 3: Como criar uma OP
- Slide 4: Workflow de status (planejada → liberada → em produção → finalizada)
- Slide 5: Ações: Release, Start, Complete
- Slide 6: Prioridade e datas
- Slide 7: Exemplo completo (criar e completar OP)
- Slide 8: Erros comuns e boas práticas

### 8. Formato Ideal
**Classificação:** Vídeo Demonstrativo + Passo a Passo

**Justificativa:** Vídeo mostrando workflow completo é essencial. Tutorial linear como backup.

### 9. Necessidade de Capturas de Tela
**Classificação:** Alta

**Justificativa:** Workflow e ações requerem capturas de cada etapa.

### 10. Valor para o Negócio
**Classificação:** Muito Alto

**Justificativa:** Centro de toda a produção — conecta planejamento, execução e rastreabilidade.

---

## 15. LOTES

### 1. Identificação
- **Nome do módulo:** Lotes
- **Objetivo principal:** Rastreabilidade de lotes de produção
- **Perfil que utiliza:** PCP, Qualidade
- **Frequência de uso:** Diário (criação, consulta)

### 2. Nível de Complexidade
**Classificação:** Médio

**Justificativa:** Cadastro com vínculo para OP, matérias-primas, operadores, equipamentos. Requer entender conceito de lote.

### 3. Dependências
- **Depende de:** Ordens de Produção
- **É dependência de:** Rastreabilidade, Qualidade

### 4. Maturidade Necessária
**Classificação:** Operação Inicial

**Justificativa:** Importante para rastreabilidade, mas pode ser simplificado (lote = OP) no início.

### 5. Potencial de Treinamento
**Classificação:** Treinamento recomendado

**Justificativa:** Importante para rastreabilidade e qualidade, mas conceito pode ser ensinado junto com OPs.

### 6. Dificuldade de Ensino
**Classificação:** Média

**Justificativa:** Conceito de lote é familiar na indústria, mas vínculos múltiplos podem confundir.

### 7. Quantidade Recomendada de Slides
**Classificação:** 7 Slides

**Justificativa:**
- Slide 1: O que é lote de produção
- Slide 2: Por que rastrear lotes
- Slide 3: Como criar lote
- Slide 4: Vínculo com OP
- Slide 5: Rastreabilidade de materiais e operadores
- Slide 6: Exemplo prático
- Slide 7: Integração com qualidade

### 8. Formato Ideal
**Classificação:** Passo a Passo + Vídeo Demonstrativo

**Justificativa:** Tutorial linear com vídeo mostrando cadastro prático.

### 9. Necessidade de Capturas de Tela
**Classificação:** Alta

**Justificativa:** Múltiplos vínculos requerem capturas detalhadas.

### 10. Valor para o Negócio
**Classificação:** Alto

**Justificativa:** Garante rastreabilidade completa — do insumo ao produto final.

---

## 16. ESTOQUE INDUSTRIAL

### 1. Identificação
- **Nome do módulo:** Estoque Industrial
- **Objetivo principal:** Gestão de inventário (matéria-prima, semi-acabado, produto acabado)
- **Perfil que utiliza:** PCP, Almoxarifado
- **Frequência de uso:** Diário (consultas, atualizações)

### 2. Nível de Complexidade
**Classificação:** Médio

**Justificativa:** Cadastro com categorias, saldos, saldos mínimos, classificação ABC. Requer entender gestão de estoque.

### 3. Dependências
- **Depende de:** Matérias-Primas, Componentes
- **É dependência de:** Movimentações, MRP

### 4. Maturidade Necessária
**Classificação:** Primeiro Lote

**Justificativa:** Crítico para evitar paradas por falta de material. Base para compras.

### 5. Potencial de Treinamento
**Classificação:** Treinamento obrigatório

**Justificativa:** Essencial para operação. Sem estoque controlado, produção para por falta de material.

### 6. Dificuldade de Ensino
**Classificação:** Média

**Justificativa:** Conceito de saldo mínimo e classificação ABC é técnico, mas intuitivo na prática.

### 7. Quantidade Recomendada de Slides
**Classificação:** 8 Slides

**Justificativa:**
- Slide 1: Por que controlar estoque
- Slide 2: Categorias de estoque (matéria-prima, semi-acabado, acabado)
- Slide 3: Saldo atual vs. saldo mínimo
- Slide 4: O que é classificação ABC
- Slide 5: Como cadastrar item
- Slide 6: Alertas de estoque baixo
- Slide 7: Exemplo prático
- Slide 8: Integração com movimentações

### 8. Formato Ideal
**Classificação:** Passo a Passo + Vídeo Demonstrativo

**Justificativa:** Tutorial linear com vídeo mostrando cadastro e classificação ABC.

### 9. Necessidade de Capturas de Tela
**Classificação:** Alta

**Justificativa:** Classificação ABC e alertas requerem capturas detalhadas.

### 10. Valor para o Negócio
**Classificação:** Muito Alto

**Justificativa:** Evita paradas por falta de material e otimiza capital de giro.

---

## 17. MOVIMENTAÇÕES

### 1. Identificação
- **Nome do módulo:** Movimentações
- **Objetivo principal:** Registro de entradas, saídas, consumos, produções e transferências
- **Perfil que utiliza:** Almoxarifado, PCP
- **Frequência de uso:** Diário (registro de movimentos)

### 2. Nível de Complexidade
**Classificação:** Médio

**Justificativa:** Múltiplos tipos de movimento (entrada, saída, consumo, produção, transferência, ajuste). Requer entender impacto no saldo.

### 3. Dependências
- **Depende de:** Estoque Industrial
- **É dependência de:** Rastreabilidade

### 4. Maturidade Necessária
**Classificação:** Operação Inicial

**Justificativa:** Necessário para controle de estoque, mas pode ser simplificado (apenas entrada/saída) no início.

### 5. Potencial de Treinamento
**Classificação:** Treinamento recomendado

**Justificativa:** Importante para integridade de saldos, mas conceito de tipos de movimento pode ser confuso.

### 6. Dificuldade de Ensino
**Classificação:** Média

**Justificativa:** Tipos de movimento e impacto no saldo requerem explicação. Usuário pode confundir consumo vs. saída.

### 7. Quantidade Recomendada de Slides
**Classificação:** 8 Slides

**Justificativa:**
- Slide 1: O que são movimentações
- Slide 2: Por que registrar movimentos
- Slide 3: Tipos de movimento (entrada, saída, consumo, produção)
- Slide 4: Como cada movimento afeta o saldo
- Slide 5: Como registrar movimentação
- Slide 6: Transferências e ajustes
- Slide 7: Exemplo prático (entrada de matéria-prima)
- Slide 8: Erros comuns (movimento sem documento)

### 8. Formato Ideal
**Classificação:** Passo a Passo + Vídeo Demonstrativo

**Justificativa:** Tutorial linear com vídeo mostrando cada tipo de movimento.

### 9. Necessidade de Capturas de Tela
**Classificação:** Alta

**Justificativa:** Múltiplos tipos requerem capturas de cada um.

### 10. Valor para o Negócio
**Classificação:** Alto

**Justificativa:** Histórico automático de todas as movimentações — nunca edite saldo diretamente.

---

## 18. APONTAMENTOS

### 1. Identificação
- **Nome do módulo:** Apontamentos
- **Objetivo principal:** Registro de produção por operação (OP, processo, equipamento, operador, horas, quantidade, refugo)
- **Perfil que utiliza:** Operador, PCP
- **Frequência de uso:** Diário (registro durante produção)

### 2. Nível de Complexidade
**Classificação:** Médio

**Justificativa:** Formulário com múltiplos campos (OP, processo, equipamento, operador, horários, quantidade, refugo). Requer entender fluxo.

### 3. Dependências
- **Depende de:** Ordens de Produção, Equipamentos, Funcionários
- **É dependência de:** Produção em Tempo Real, Rastreabilidade

### 4. Maturidade Necessária
**Classificação:** Primeiro Lote

**Justificativa:** Base para cálculo de eficiência, custos reais e rastreabilidade. Sem apontamentos, não há controle.

### 5. Potencial de Treinamento
**Classificação:** Treinamento obrigatório

**Justificativa:** Crítico para operação. É o módulo mais usado por operadores no chão de fábrica.

### 6. Dificuldade de Ensino
**Classificação:** Média

**Justificativa:** Operador conhece o processo, mas formulário com múltiplos campos pode confundir. Refugo e motivo de parada requerem explicação.

### 7. Quantidade Recomendada de Slides
**Classificação:** 8 Slides

**Justificativa:**
- Slide 1: O que é apontamento de produção
- Slide 2: Por que apontar (eficiência, custos, rastreabilidade)
- Slide 3: Campos do formulário (OP, processo, equipamento)
- Slide 4: Horários (início, fim, pausas)
- Slide 5: Quantidade produzida e refugo
- Slide 6: Motivo de parada
- Slide 7: Exemplo completo (apontar uma operação)
- Slide 8: Erros comuns (apontamento sem OP, horários inválidos)

### 8. Formato Ideal
**Classificação:** Vídeo Demonstrativo + Passo a Passo

**Justificativa:** Vídeo mostrando apontamento real é essencial. Tutorial linear como backup.

### 9. Necessidade de Capturas de Tela
**Classificação:** Alta

**Justificativa:** Formulário com múltiplos campos requer capturas detalhadas.

### 10. Valor para o Negócio
**Classificação:** Muito Alto

**Justificativa:** Base para cálculo de eficiência, custos reais e rastreabilidade completa da produção.

---

## 19. CONSUMO DE MATERIAIS

### 1. Identificação
- **Nome do módulo:** Consumo de Materiais
- **Objetivo principal:** Registro de consumo por OP e material (comparação com BOM)
- **Perfil que utiliza:** Operador, PCP
- **Frequência de uso:** Diário (durante produção)

### 2. Nível de Complexidade
**Classificação:** Médio

**Justificativa:** Requer entender BOM padrão, consumo real, desperdício e rendimento. Conceito técnico.

### 3. Dependências
- **Depende de:** Ordens de Produção, Matérias-Primas
- **É dependência de:** MRP, Rastreabilidade

### 4. Maturidade Necessária
**Classificação:** Operação Inicial

**Justificativa:** Importante para controle de custos, mas pode ser simplificado (consumo manual) no início.

### 5. Potencial de Treinamento
**Classificação:** Treinamento recomendado

**Justificativa:** Importante para custos e identificação de desperdícios, mas conceito de rendimento pode ser confuso.

### 6. Dificuldade de Ensino
**Classificação:** Média

**Justificativa:** Comparação com BOM e cálculo de rendimento é técnico. Usuário com baixa instrução pode ter dificuldade.

### 7. Quantidade Recomendada de Slides
**Classificação:** 7 Slides

**Justificativa:**
- Slide 1: O que é consumo de materiais
- Slide 2: Por que registrar consumo (custos, desperdício)
- Slide 3: Comparação com BOM padrão
- Slide 4: Cálculo de desperdício
- Slide 5: Cálculo de rendimento
- Slide 6: Como registrar consumo
- Slide 7: Exemplo prático

### 8. Formato Ideal
**Classificação:** Processo Operacional + Vídeo Demonstrativo

**Justificativa:** Explicação de conceitos (BOM, rendimento) antes de vídeo prático.

### 9. Necessidade de Capturas de Tela
**Classificação:** Alta

**Justificativa:** Comparação com BOM e cálculos requerem capturas detalhadas.

### 10. Valor para o Negócio
**Classificação:** Alto

**Justificativa:** Controle preciso de custos, identificação de desperdícios e cálculo de rendimento.

---

## 20. PRODUÇÃO EM TEMPO REAL

### 1. Identificação
- **Nome do módulo:** Produção em Tempo Real
- **Objetivo principal:** Monitoramento em tempo real de OPs e máquinas
- **Perfil que utiliza:** PCP, Gestor
- **Frequência de uso:** Diário (monitoramento contínuo)

### 2. Nível de Complexidade
**Classificação:** Médio

**Justificativa:** Dashboard com KPIs, OPs em andamento, status de máquinas. Requer entender indicadores.

### 3. Dependências
- **Depende de:** Ordens de Produção, Apontamentos, Equipamentos
- **É dependência de:** Nenhuma (monitoramento)

### 4. Maturidade Necessária
**Classificação:** Operação Avançada

**Justificativa:** Requer apontamentos em tempo real e infraestrutura de coleta de dados. Fábrica iniciante não tem maturidade.

### 5. Potencial de Treinamento
**Classificação:** Treinamento futuro

**Justificativa:** Funcionalidade avançada. Deve ser ensinada quando operação estiver estabilizada.

### 6. Dificuldade de Ensino
**Classificação:** Média

**Justificativa:** Dashboard é intuitivo, mas KPIs (eficiência, OEE) requerem explicação.

### 7. Quantidade Recomendada de Slides
**Classificação:** 7 Slides

**Justificativa:**
- Slide 1: O que é Produção em Tempo Real
- Slide 2: Por que monitorar em tempo real
- Slide 3: KPIs do dashboard (produção, refugo, eficiência)
- Slide 4: OPs em andamento
- Slide 5: Status de máquinas (produzindo, parada, setup)
- Slide 6: Como usar o dashboard
- Slide 7: Ações baseadas em tempo real

### 8. Formato Ideal
**Classificação:** Vídeo Demonstrativo

**Justificativa:** Dashboard visual é melhor explicado com vídeo mostrando navegação.

### 9. Necessidade de Capturas de Tela
**Classificação:** Alta

**Justificativa:** Dashboard requer capturas de cada seção e KPI.

### 10. Valor para o Negócio
**Classificação:** Alto

**Justificativa:** Visibilidade instantânea da fábrica para tomada de decisões ágeis e correção de desvios.

---

## 21. QUALIDADE

### 1. Identificação
- **Nome do módulo:** Qualidade
- **Objetivo principal:** Registro de inspeções, não conformidades, retrabalho e aprovações
- **Perfil que utiliza:** Qualidade, Produção
- **Frequência de uso:** Diário (inspeções durante produção)

### 2. Nível de Complexidade
**Classificação:** Médio

**Justificativa:** Múltiplos tipos de registro (inspeção, não conformidade, retrabalho, aprovação). Requer entender fluxo de qualidade.

### 3. Dependências
- **Depende de:** Ordens de Produção, Lotes
- **É dependência de:** Rastreabilidade

### 4. Maturidade Necessária
**Classificação:** Primeiro Lote

**Justificativa:** Garante qualidade do produto final. Mesmo fábrica iniciante precisa controle básico.

### 5. Potencial de Treinamento
**Classificação:** Treinamento obrigatório

**Justificativa:** Crítico para qualidade e conformidade. Sem qualidade, produto não pode ser entregue.

### 6. Dificuldade de Ensino
**Classificação:** Média

**Justificativa:** Tipos de registro e fluxo (inspeção → não conformidade → ação corretiva) requerem explicação.

### 7. Quantidade Recomendada de Slides
**Classificação:** 8 Slides

**Justificativa:**
- Slide 1: O que é controle de qualidade
- Slide 2: Por que registrar qualidade
- Slide 3: Tipos de registro (inspeção, não conformidade, retrabalho)
- Slide 4: Como registrar inspeção
- Slide 5: Como registrar não conformidade
- Slide 6: Ação corretiva e retrabalho
- Slide 7: Aprovação final
- Slide 8: Exemplo completo (fluxo de qualidade)

### 8. Formato Ideal
**Classificação:** Vídeo Demonstrativo + Passo a Passo

**Justificativa:** Vídeo mostrando fluxo completo é essencial. Tutorial linear como backup.

### 9. Necessidade de Capturas de Tela
**Classificação:** Alta

**Justificativa:** Múltiplos tipos de registro requerem capturas detalhadas.

### 10. Valor para o Negócio
**Classificação:** Alto

**Justificativa:** Garante qualidade do produto final, reduz retrabalho e mantém histórico de problemas.

---

## 22. RASTREABILIDADE

### 1. Identificação
- **Nome do módulo:** Rastreabilidade
- **Objetivo principal:** Consulta da cadeia completa (lote → OP → matérias-primas → fornecedores → equipamentos → operadores)
- **Perfil que utiliza:** Qualidade, PCP
- **Frequência de uso:** Eventual (consultas em problemas, recalls)

### 2. Nível de Complexidade
**Classificação:** Médio

**Justificativa:** Interface de consulta com cadeia completa. Requer entender conceito de rastreabilidade.

### 3. Dependências
- **Depende de:** Lotes, Ordens de Produção, Movimentações, Apontamentos, Qualidade
- **É dependência de:** Nenhuma (consulta)

### 4. Maturidade Necessária
**Classificação:** Operação Inicial

**Justificativa:** Importante para recalls e auditorias, mas pode ser simplificado (rastreabilidade manual) no início.

### 5. Potencial de Treinamento
**Classificação:** Treinamento recomendado

**Justificativa:** Importante para conformidade, mas conceito pode ser ensinado quando necessário.

### 6. Dificuldade de Ensino
**Classificação:** Média

**Justificativa:** Conceito de cadeia completa é intuitivo, mas navegação pela interface requer explicação.

### 7. Quantidade Recomendada de Slides
**Classificação:** 7 Slides

**Justificativa:**
- Slide 1: O que é rastreabilidade
- Slide 2: Por que rastrear (recalls, auditorias, problemas)
- Slide 3: Cadeia completa (lote → OP → materiais → fornecedores)
- Slide 4: Como consultar por lote
- Slide 5: Navegação pela cadeia
- Slide 6: Exemplo prático (rastrear problema)
- Slide 7: Integração com qualidade

### 8. Formato Ideal
**Classificação:** Vídeo Demonstrativo

**Justificativa:** Consulta visual é melhor explicada com vídeo mostrando navegação.

### 9. Necessidade de Capturas de Tela
**Classificação:** Alta

**Justificativa:** Cadeia completa requer capturas de cada nível.

### 10. Valor para o Negócio
**Classificação:** Alto

**Justificativa:** Rastreabilidade total para recalls, auditorias e análise de problemas.

---

## 23. APRESENTAÇÕES

### 1. Identificação
- **Nome do módulo:** Apresentações
- **Objetivo principal:** Criar e gerenciar apresentações de treinamento com editor visual
- **Perfil que utiliza:** Gestor, RH
- **Frequência de uso:** Mensal (criação de novos treinamentos)

### 2. Nível de Complexidade
**Classificação:** Médio

**Justificativa:** Editor visual drag-and-drop para criar slides. Requer entender conceito de apresentação.

### 3. Dependências
- **Depende de:** Nenhuma
- **É dependência de:** Nenhuma (ferramenta de autoria)

### 4. Maturidade Necessária
**Classificação:** Empresa Estruturada

**Justificativa:** Ferramenta para criar treinamentos. Fábrica iniciante foca em usar, não criar.

### 5. Potencial de Treinamento
**Classificação:** Treinamento futuro

**Justificativa:** Ferramenta avançada de autoria. Deve ser ensinada quando houver necessidade de criar treinamentos customizados.

### 6. Dificuldade de Ensino
**Classificação:** Média

**Justificativa:** Editor drag-and-drop é intuitivo, mas criar apresentações efetivas requer skill.

### 7. Quantidade Recomendada de Slides
**Classificação:** 6 Slides

**Justificativa:**
- Slide 1: O que é módulo de Apresentações
- Slide 2: Por que criar treinamentos customizados
- Slide 3: Interface do editor
- Slide 4: Como criar slides
- Slide 5: Mídia e organização
- Slide 6: Publicar e compartilhar

### 8. Formato Ideal
**Classificação:** Vídeo Demonstrativo + Simulação

**Justificativa:** Editor visual é melhor explicado com vídeo e simulação interativa.

### 9. Necessidade de Capturas de Tela
**Classificação:** Alta

**Justificativa:** Editor visual requer capturas detalhadas de cada ferramenta.

### 10. Valor para o Negócio
**Classificação:** Médio

**Justificativa:** Centraliza material de treinamento, facilitando onboarding e capacitação. Não é crítico para operação.

---

# ANÁLISE FINAL

## RANKING DOS MÓDULOS MAIS IMPORTANTES (TOP 20)

Ordenado por: Impacto operacional + Frequência de uso + Facilidade de adoção

1. **Produtos** - Centro do negócio, conecta tudo
2. **Matérias-Primas** - Base para BOM, custos, MRP
3. **BOM** - Fundação para custos e planejamento
4. **Ordens de Produção** - Centro das operações diárias
5. **Apontamentos** - Registro de produção, usado diariamente
6. **Estoque Industrial** - Evita paradas por falta de material
7. **Empresa** - Fundação para documentos fiscais
8. **Fornecedores** - Base para compras e MRP
9. **Qualidade** - Garante conformidade do produto
10. **Funcionários** - Base para apontamento e custos
11. **Setores** - Estrutura física para alocação
12. **Equipamentos** - Base para capacidade e apontamento
13. **Processos** - Roteiros para apontamento e capacidade
14. **Lotes** - Rastreabilidade de produção
15. **Consumo de Materiais** - Controle de custos e desperdício
16. **Movimentações** - Integridade de saldos de estoque
17. **Capacidade** - Base para planejamento
18. **Rastreabilidade** - Consulta para recalls e auditorias
19. **Ferramentas** - Controle de moldes e gabaritos
20. **Componentes** - Reduz duplicidade em BOM

---

## RANKING DOS MÓDULOS MAIS DIFÍCEIS

Ordenado por: Complexidade de conceitos + Complexidade de interface + Dificuldade de ensino

1. **BOM** - Árvore hierárquica com drag-and-drop, múltiplos níveis, conceitos técnicos
2. **Processos** - Roteiros com branching, sequência, recursos
3. **Cronometragem** - Conceitos técnicos (PF, tolerâncias, tempo padrão), matemático
4. **Capacidade** - Capacidade nominal vs. real, eficiência, cenários
5. **Produtos** - Multi-step wizard com SKU, linhas, dimensões
6. **Componentes** - Conceito de semi-acabado vs. matéria-prima
7. **Consumo de Materiais** - Comparação com BOM, rendimento, desperdício
8. **Apontamentos** - Múltiplos campos, refugo, motivo de parada
9. **Funcionários** - Turnos, jornada, vínculos
10. **Equipamentos** - Multi-step form, capacidade nominal
11. **Estoque Industrial** - Classificação ABC, saldos mínimos
12. **Movimentações** - Múltiplos tipos, impacto no saldo
13. **Qualidade** - Múltiplos tipos de registro, fluxo
14. **Ordens de Produção** - Workflow com status e ações
15. **Rastreabilidade** - Cadeia completa, navegação
16. **Lotes** - Múltiplos vínculos
17. **Apresentações** - Editor visual drag-and-drop
18. **Produção em Tempo Real** - Dashboard com KPIs
19. **Setores** - Tipos, hierarquia
20. **Ferramentas** - Cadastro básico
21. **Fornecedores** - Cadastro básico
22. **Matérias-Primas** - Unidade de medida, lead time
23. **Empresa** - Formulário simples

---

## RANKING DOS MÓDULOS MAIS FÁCEIS

Ordenado por: Simplicidade de conceitos + Intuitividade + Facilidade de ensino

1. **Empresa** - Formulário básico, campos familiares
2. **Fornecedores** - Cadastro simples, usuário já conhece processo
3. **Ferramentas** - Cadastro básico, conceito intuitivo
4. **Setores** - Conceito intuitivo, usuário conhece fábrica
5. **Matérias-Primas** - Conceito familiar, apenas unidade de medida é técnica
6. **Lotes** - Conceito familiar na indústria
7. **Rastreabilidade** - Consulta visual, intuitiva
8. **Qualidade** - Conceito familiar, fluxo lógico
9. **Apontamentos** - Operador conhece processo, apenas formulário
10. **Movimentações** - Conceito intuitivo (entrada/saída)
11. **Estoque Industrial** - Conceito familiar, classificação ABC é técnica
12. **Ordens de Produção** - Workflow intuitivo (criar → liberar → completar)
13. **Funcionários** - Conceito familiar, turnos podem confundir
14. **Equipamentos** - Usuário conhece máquinas, capacidade é técnica
15. **Consumo de Materiais** - Conceito técnico mas intuitivo na prática
16. **Produção em Tempo Real** - Dashboard visual, KPIs técnicos
17. **Apresentações** - Editor visual intuitivo
18. **Componentes** - Conceito técnico, não intuitivo
19. **Capacidade** - Conceitos técnicos, difícil
20. **Processos** - Muito complexo, branching
21. **Produtos** - Multi-step wizard, SKU técnico
22. **Cronometragem** - Conceitos muito técnicos, matemático
23. **BOM** - Muito complexo, árvore hierárquica

---

# ROADMAP DE TREINAMENTOS

## FASE 1 — IMPLANTAÇÃO INICIAL (Primeiro Lote)

**Objetivo:** Treinamentos obrigatórios para produzir o primeiro lote.

**Módulos:**
1. **Empresa** (5 slides, Passo a Passo)
2. **Fornecedores** (6 slides, Passo a Passo)
3. **Matérias-Primas** (8 slides, Passo a Passo + Vídeo)
4. **Produtos** (8 slides, Vídeo + Passo a Passo)
5. **BOM** (8 slides, Vídeo + Simulação)
6. **Ordens de Produção** (8 slides, Vídeo + Passo a Passo)
7. **Apontamentos** (8 slides, Vídeo + Passo a Passo)
8. **Estoque Industrial** (8 slides, Passo a Passo + Vídeo)
9. **Qualidade** (8 slides, Vídeo + Passo a Passo)

**Total de Slides:** 67 slides
**Formatos:** 4 Passo a Passo, 5 Vídeo + Passo a Passo, 1 Vídeo + Simulação
**Capturas de Tela:** 3 Baixa, 2 Média, 4 Alta, 3 Crítica

**Justificativa:** Esses 9 módulos são o mínimo necessário para cadastrar, planejar, produzir e controlar qualidade do primeiro lote. Todos têm classificação "Primeiro Lote" ou "Operação Inicial" e "Treinamento Obrigatório".

---

## FASE 2 — OPERAÇÃO INICIAL (Estabilização)

**Objetivo:** Treinamentos recomendados após estabilização da operação (3-6 meses).

**Módulos:**
1. **Setores** (6 slides, Passo a Passo + Checklist)
2. **Funcionários** (7 slides, Passo a Passo + Vídeo)
3. **Equipamentos** (7 slides, Passo a Passo + Vídeo)
4. **Processos** (8 slides, Vídeo + Simulação)
5. **Lotes** (7 slides, Passo a Passo + Vídeo)
6. **Consumo de Materiais** (7 slides, Processo + Vídeo)
7. **Movimentações** (8 slides, Passo a Passo + Vídeo)

**Total de Slides:** 50 slides
**Formatos:** 3 Passo a Passo, 1 Passo a Passo + Checklist, 3 Passo a Passo + Vídeo, 1 Processo + Vídeo, 1 Vídeo + Simulação
**Capturas de Tela:** 1 Baixa, 3 Média, 4 Alta

**Justificativa:** Após estabilizar produção básica, fábrica precisa estruturar recursos (setores, funcionários, equipamentos), refinar processos, e implementar controle completo de estoque e consumo. Todos têm classificação "Operação Inicial" e "Treinamento Recomendado".

---

## FASE 3 — CRESCIMENTO (Estruturação)

**Objetivo:** Treinamentos para aumentar controle e produtividade (6-12 meses).

**Módulos:**
1. **Capacidade** (8 slides, Processo + Vídeo)
2. **Rastreabilidade** (7 slides, Vídeo)
3. **Ferramentas** (5 slides, Passo a Passo)
4. **Componentes** (7 slides, Processo + Vídeo)

**Total de Slides:** 27 slides
**Formatos:** 1 Passo a Passo, 2 Processo + Vídeo, 1 Vídeo
**Capturas de Tela:** 1 Baixa, 3 Alta

**Justificativa:** Com operação estruturada, fábrica pode implementar planejamento de capacidade, rastreabilidade completa, controle de ferramentas e produção em estágios com componentes. Todos têm classificação "Operação Inicial" ou "Empresa Estruturada" e "Treinamento Recomendado" ou "Treinamento Futuro".

---

## FASE 4 — MATURIDADE (Operação Avançada)

**Objetivo:** Treinamentos avançados para fábrica madura (12+ meses).

**Módulos:**
1. **Cronometragem** (8 slides, Processo + Vídeo)
2. **Produção em Tempo Real** (7 slides, Vídeo)
3. **Apresentações** (6 slides, Vídeo + Simulação)

**Total de Slides:** 21 slides
**Formatos:** 1 Processo + Vídeo, 2 Vídeo, 1 Vídeo + Simulação
**Capturas de Tela:** 3 Alta

**Justificativa:** Fábrica madura com engenharia estruturada pode implementar estudos de tempos formais, monitoramento em tempo real e criação de treinamentos customizados. Todos têm classificação "Operação Avançada" ou "Empresa Estruturada" e "Treinamento Futuro".

---

# RESUMO EXECUTIVO

## Matriz Completa de Treinamentos

| Módulo | Prioridade | Complexidade | Maturidade | Slides | Formato | Capturas | Valor Negócio |
|--------|-----------|-------------|------------|--------|---------|----------|---------------|
| Empresa | Fase 1 | Muito Simples | Primeiro Lote | 5 | Passo a Passo | Baixa | Alto |
| Setores | Fase 2 | Simples | Operação Inicial | 6 | Passo a Passo + Checklist | Média | Médio |
| Funcionários | Fase 2 | Médio | Operação Inicial | 7 | Passo a Passo + Vídeo | Alta | Alto |
| Equipamentos | Fase 2 | Médio | Operação Inicial | 7 | Passo a Passo + Vídeo | Alta | Alto |
| Ferramentas | Fase 3 | Simples | Empresa Estruturada | 5 | Passo a Passo | Baixa | Médio |
| Matérias-Primas | Fase 1 | Médio | Primeiro Lote | 8 | Passo a Passo + Vídeo | Alta | Muito Alto |
| Fornecedores | Fase 1 | Simples | Primeiro Lote | 6 | Passo a Passo | Média | Alto |
| Produtos | Fase 1 | Complexo | Primeiro Lote | 8 | Vídeo + Passo a Passo | Crítica | Muito Alto |
| Componentes | Fase 3 | Médio | Empresa Estruturada | 7 | Processo + Vídeo | Alta | Médio |
| BOM | Fase 1 | Muito Complexo | Primeiro Lote | 8 | Vídeo + Simulação | Crítica | Muito Alto |
| Processos | Fase 2 | Muito Complexo | Operação Inicial | 8 | Vídeo + Simulação | Crítica | Alto |
| Cronometragem | Fase 4 | Muito Complexo | Operação Avançada | 8 | Processo + Vídeo | Alta | Alto |
| Capacidade | Fase 3 | Muito Complexo | Operação Inicial | 8 | Processo + Vídeo | Alta | Alto |
| Ordens de Produção | Fase 1 | Médio | Primeiro Lote | 8 | Vídeo + Passo a Passo | Alta | Muito Alto |
| Lotes | Fase 2 | Médio | Operação Inicial | 7 | Passo a Passo + Vídeo | Alta | Alto |
| Estoque Industrial | Fase 1 | Médio | Primeiro Lote | 8 | Passo a Passo + Vídeo | Alta | Muito Alto |
| Movimentações | Fase 2 | Médio | Operação Inicial | 8 | Passo a Passo + Vídeo | Alta | Alto |
| Apontamentos | Fase 1 | Médio | Primeiro Lote | 8 | Vídeo + Passo a Passo | Alta | Muito Alto |
| Consumo de Materiais | Fase 2 | Médio | Operação Inicial | 7 | Processo + Vídeo | Alta | Alto |
| Produção em Tempo Real | Fase 4 | Médio | Operação Avançada | 7 | Vídeo | Alta | Alto |
| Qualidade | Fase 1 | Médio | Primeiro Lote | 8 | Vídeo + Passo a Passo | Alta | Alto |
| Rastreabilidade | Fase 3 | Médio | Operação Inicial | 7 | Vídeo | Alta | Alto |
| Apresentações | Fase 4 | Médio | Empresa Estruturada | 6 | Vídeo + Simulação | Alta | Médio |

## Estatísticas Gerais

- **Total de Módulos:** 23
- **Total de Slides:** 165 slides (média: 7.2 slides por módulo)
- **Distribuição por Fase:**
  - Fase 1: 9 módulos, 67 slides (40.6%)
  - Fase 2: 7 módulos, 50 slides (30.3%)
  - Fase 3: 4 módulos, 27 slides (16.4%)
  - Fase 4: 3 módulos, 21 slides (12.7%)
- **Distribuição por Complexidade:**
  - Muito Simples: 2 módulos
  - Simples: 3 módulos
  - Médio: 12 módulos
  - Complexo: 1 módulo
  - Muito Complexo: 5 módulos
- **Distribuição por Valor de Negócio:**
  - Muito Alto: 7 módulos
  - Alto: 10 módulos
  - Médio: 6 módulos
  - Baixo: 0 módulos
- **Formatos Mais Comuns:**
  - Vídeo + Passo a Passo: 8 módulos
  - Passo a Passo: 5 módulos
  - Processo + Vídeo: 4 módulos
  - Vídeo + Simulação: 3 módulos
  - Passo a Passo + Checklist: 1 módulo
  - Vídeo: 2 módulos
- **Necessidade de Capturas de Tela:**
  - Crítica: 3 módulos (BOM, Produtos, Processos)
  - Alta: 14 módulos
  - Média: 4 módulos
  - Baixa: 2 módulos

## Recomendações Estratégicas

### 1. Priorização de Produção de Conteúdo
Começar imediatamente com Fase 1 (9 módulos, 67 slides). Esses são os treinamentos obrigatórios para qualquer fábrica iniciar operação.

### 2. Formato de Conteúdo
Investir pesadamente em vídeos demonstrativos. 8 dos 23 módulos requerem vídeo + passo a passo, e 3 requerem simulação interativa. Vídeos são essenciais para módulos complexos (BOM, Processos, Produtos).

### 3. Capturas de Tela
Priorizar capturas de tela para 17 módulos (Alta ou Crítica). BOM, Produtos e Processos requerem capturas críticas devido à complexidade das interfaces.

### 4. Adaptação para Baixa Instrução
- Usar linguagem simples e evitar jargão técnico
- Focar em exemplos práticos do dia a dia da colchonaria
- Incluir checklists visuais e dicas de "o que não fazer"
- Vídeos devem ser curtos (2-3 minutos por conceito)
- Slides devem ter pouco texto e muitos exemplos visuais

### 5. Estratégia de Liberação Progressiva
Não sobrecarregar o usuário com todos os 23 módulos de uma vez. Seguir o roadmap de 4 fases alinhado com a maturidade da fábrica.

### 6. Módulos Críticos para Sucesso
Focar esforço inicial em 7 módulos de "Muito Alto" valor de negócio na Fase 1:
- Produtos
- Matérias-Primas
- BOM
- Ordens de Produção
- Apontamentos
- Estoque Industrial
- Qualidade

Esses 7 módulos representam o core da operação e devem ter treinamentos de altíssima qualidade.

---

**Documento gerado em 2025-01-21**
