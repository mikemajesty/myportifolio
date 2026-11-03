# Plano para evoluir o portfólio

## Objetivo

Fazer do portfólio uma apresentação clara, confiável e fácil de consultar por pessoas, buscadores e assistentes de IA. A prioridade é tornar explícito quem é Mike, que problemas resolve, quais resultados alcançou e como entrar em contato — sem inventar métricas nem encher o conteúdo de palavras-chave.

Este documento é uma proposta para discussão. As decisões sobre conteúdo, visual e tecnologia devem ser confirmadas antes de implementar mudanças.

## Diagnóstico inicial

### O que já existe

- Perfil profissional em português, com experiências na Accenture, Dasa, Seedz e OLX.
- Contato, formação, idiomas, hackathons, projetos pessoais e atividade open source.
- Repositórios do GitHub e um PDF do currículo disponíveis no próprio site.
- A aplicação é uma SPA em Vue 3 criada com Vue CLI 4.

### Oportunidades mais importantes

1. **Identidade e indexação:** `public/index.html` não declara o idioma da página, tem título baseado na configuração padrão do Vue CLI e não define descrição ou metadados para compartilhamento. O conteúdo principal é montado no cliente por JavaScript; vale avaliar quanto dele fica acessível a diferentes robôs e sistemas de IA.
2. **Hierarquia e leitura:** os títulos de seção são `h2`, mas não há `h1`. O nome aparece em `h2` em `src/components/leftSide/ImgBox.vue`. Os textos de experiência e projetos são blocos longos e não destacam resultados concretos.
3. **Experiência em telas pequenas:** o layout define largura mínima de `40rem` na coluna principal e não há regras responsivas identificadas. Isso pode provocar rolagem horizontal em celulares.
4. **Acessibilidade e semântica:** a foto não tem texto alternativo; há marcação de links aninhados em `src/components/leftSide/Contact.vue`; ícones e links podem ganhar nomes mais claros para leitores de tela.
5. **Precisão e confiança:** o resumo declara 10 anos de experiência, enquanto a linha do tempo visível começa em 2019. Os números de open source não têm data de referência, e algumas descrições não informam escala, contribuição individual ou resultado verificável.
6. **Acabamento técnico:** `src/components/rigthSide/RightSize.vue` inclui `<PersonalAbout/>`, mas não há importação nem componente correspondente na busca inicial. A compilação de produção conclui, mas isso pode gerar aviso em tempo de execução. O PDF do currículo tem 536 KiB e é o ativo que ultrapassa o limite de tamanho recomendado pelo build.

## Proposta de trabalho

### Etapa 1 — Alinhar posicionamento e conteúdo (prioridade máxima)

- Definir o público prioritário: recrutadores, lideranças técnicas, clientes ou uma combinação.
- Escolher o cargo/posicionamento que deve aparecer primeiro (por exemplo, Staff/Software Engineer, backend ou plataforma).
- Revisar resumo, título atual, idiomas, datas e a contagem de anos para que currículo, site e perfis públicos contem a mesma história.
- Para cada experiência, registrar contribuição individual, contexto, tecnologias relevantes e impacto. Buscar métricas apenas quando puderem ser confirmadas e divulgadas.
- Atualizar a seção open source com os números informados pelo titular: bibliotecas no GitHub com mais de 1.000 stars e 200+ forks, e bibliotecas no NPM com mais de 1.000 downloads semanais. A métrica semanal do NPM foi confirmada; registrar sua data de referência antes de fechar a versão final e revisar também os dados do NuGet.
- Selecionar poucos projetos representativos e informar problema, solução, papel, stack, resultado e links de demonstração/código quando existirem.

#### Experiência atual na OLX — texto aplicado, métricas e divulgação para validar

**Engenheiro de Software III — OLX Brasil | 2025–atual**

Desenvolvo e mantenho o backend de uma plataforma interna que permite aos times publicar aplicações em Kubernetes. Sou o único desenvolvedor backend da plataforma e trabalho em parceria com um desenvolvedor frontend, um Product Owner e um engenheiro de infraestrutura, além de apoiar os desenvolvedores que a utilizam.

Implementei uma biblioteca de integração com Crossplane para validar o estado e criar recursos de infraestrutura declarados pelos usuários em YAML. Também conduzi a refatoração do sistema de JavaScript para TypeScript, tornando sua evolução e manutenção cerca de 40% mais simples.

Eliminei a duplicidade de estado entre PostgreSQL e Kubernetes, reduzindo o armazenamento em 25% e os acessos ao banco em 30%. Essa otimização permitiu reduzir a instância do PostgreSQL para uma opção de menor custo.

**Tecnologias listadas no site:** TypeScript, Node.js, Go, Kubernetes, Crossplane, PostgreSQL e AWS. Não listar serviços AWS específicos até que sejam confirmados.

**Validar antes de publicar:** como foram estimados ou medidos os 40% de simplicidade, os 25% de armazenamento e os 30% de acessos; período de comparação; quais serviços AWS podem ser citados; e se a arquitetura, métricas e descrição da plataforma podem ser divulgadas.

**Saída:** conteúdo revisado e aprovado antes de mexer no layout.

### Etapa 2 — Melhorar leitura, acessibilidade e mobile

- Reorganizar a página em uma sequência fácil de escanear: apresentação e contato, resumo, competências, experiência, projetos, formação e extras.
- Usar um único `h1` descritivo e uma hierarquia consistente de subtítulos; trocar os nomes genéricos das seções por títulos objetivos.
- Transformar parágrafos extensos em descrições curtas e listas de contribuições/resultados, sem perder contexto.
- Ajustar o layout para celular e tablet, validar contraste, tamanho de fonte, foco visível, ordem de leitura e navegação por teclado.
- Corrigir a marcação de links e dar nomes acessíveis aos controles; decidir se a foto acrescenta informação ou é apenas decorativa.
- Remover a faixa fixa vermelha de download ou redesenhá-la como uma ação discreta e responsiva. Confirmar também se o botão deve oferecer PDF em português, inglês ou ambos.

**Saída:** uma página legível e utilizável em telas pequenas, teclado e leitor de tela.

### Etapa 3 — Tornar o conteúdo encontrável e compartilhável

- Escrever título e descrição únicos para a página, definir `lang="pt-BR"` e revisar metadados Open Graph/Twitter e imagem de compartilhamento.
- Garantir que o conteúdo mais importante exista como HTML renderizado e rastreável, não apenas após interação no navegador.
- Comparar duas opções antes de escolher: pré-renderização/geração estática compatível com o projeto atual ou migração para uma solução com renderização no servidor. Evitar migração de framework sem benefício demonstrável.
- Adicionar dados estruturados `Person` e `WebSite` somente com informações públicas, corretas e consistentes com o texto visível.
- Verificar domínio/canonical, sitemap, `robots.txt` e links para perfis. Definir explicitamente a política desejada para robôs de IA; diretivas de robôs não garantem inclusão em respostas de IA.
- Manter conteúdo factual, específico e bem organizado: isso ajuda sistemas de busca e IA a identificar nome, especialidade, experiência e fontes, sem prometer que qualquer sistema irá recomendar o perfil.

**Saída:** páginas e metadados consistentes, com estratégia validada para rastreamento e compartilhamento.

### Etapa 4 — Desempenho, currículo e qualidade técnica

- Atualizar o currículo em PDF para que seja moderno e profissional sem excesso visual: tipografia e hierarquia claras, bom espaçamento e uso moderado de cor, sem elementos decorativos que prejudiquem a leitura.
- Preparar o currículo para pessoas e sistemas de busca/recrutamento/IA: texto selecionável, seções com títulos explícitos, ordem de leitura lógica, datas e cargos claros, links clicáveis e informações importantes não dependentes de ícones, gráficos ou imagens.
- Priorizar um layout simples e robusto na extração de texto; evitar tabelas, colunas complexas, barras de proficiência e infográficos se atrapalharem a leitura automatizada.
- Revisar o PDF para confirmar que está atualizado, tem tamanho razoável, é acessível, corresponde ao conteúdo do site e mantém uma boa leitura em tela e impresso.
- Validar a extração de texto do PDF e fazer uma revisão visual antes de disponibilizá-lo no botão “Baixar currículo (PDF)”.
- Otimizar imagens e carregamento de fontes; avaliar a dependência externa de Font Awesome e Google Fonts.
- Resolver a referência a `PersonalAbout` (implementar, remover ou corrigir conforme a intenção).
- Registrar a versão Node 20.20.2 em `.nvmrc` para o `nvm` e configurar `serve`/`build` com `NODE_OPTIONS=--openssl-legacy-provider`, necessário para o Webpack legado do projeto no Node 20. Avaliar uma atualização futura do toolchain para remover essa compatibilidade legada.
- Executar validações de build, links, responsividade, acessibilidade e metadados após as mudanças.

**Saída:** publicação previsível, currículo utilizável e problemas técnicos conhecidos resolvidos.

## Critérios de aceite sugeridos

- A primeira tela explica em poucos segundos quem é Mike, sua especialidade e como contatá-lo.
- Há um único título principal, texto selecionável e conteúdo-chave disponível sem depender de interação.
- Nenhuma rolagem horizontal em larguras de celular comuns; navegação por teclado e contraste básico verificados.
- Datas, cargos, tecnologias, métricas e currículo são consistentes e aprovados pelo titular.
- Título, descrição, idioma e prévia de compartilhamento estão presentes; dados estruturados não contradizem o conteúdo.
- Build de produção e verificações de links terminam sem erros; avisos restantes são compreendidos.

## Decisões para nossa discussão

1. Quem deve ser o público prioritário e qual oportunidade profissional o site deve gerar?
2. O posicionamento principal será backend/plataforma, liderança/arquitetura ou uma combinação?
3. Podemos publicar resultados quantificados de cada experiência? Quais informações são confidenciais?
4. O site deve continuar somente em português ou também ter versão em inglês?
5. Queremos manter a aparência atual e modernizá-la, ou preferimos repensar o visual?
6. O PDF deve continuar disponível? Há uma versão atualizada e, idealmente, em formato acessível?
7. Preferimos primeiro testar pré-renderização no Vue atual ou estamos abertos a migrar a arquitetura?
8. Quais perfis e projetos devem receber destaque, e os números públicos estão atualizados?
9. Na experiência da OLX, como foram calculados os ganhos de 40%, 25% e 30%, e quais serviços AWS e detalhes da plataforma podem ser divulgados?
10. O currículo será publicado em português, inglês ou nos dois idiomas?

## Escopo recomendado para começar

Começar pelas Etapas 1 e 2: confirmar o posicionamento e os fatos antes de reescrever a apresentação, depois corrigir hierarquia, leitura e mobile. Em seguida, implementar metadados e escolher a abordagem de renderização com base no domínio e na hospedagem atuais. Assim evitamos investir em SEO técnico para uma mensagem que ainda possa mudar.

## Checklist de execução e aprovações

Avançaremos na ordem abaixo. Nas etapas marcadas como **aprovação**, compartilho o resultado para você revisar; só sigo para a etapa seguinte depois do seu OK. Marque `[x]` quando a etapa estiver concluída e aprovada.

### 1. Alinhar objetivo e informações

- [ ] **Confirmar o objetivo do portfólio:** público prioritário, tipo de oportunidade e posicionamento profissional.
- [ ] **Confirmar fatos e conteúdo:** revisar datas, cargos, resumo, idiomas, projetos, métricas e informações que podem ser divulgadas — incluindo os detalhes da experiência na OLX.
- [x] **Atualizar a seção open source no site:** registrar mais de 1.000 stars e 200+ forks no GitHub e mais de 1.000 downloads semanais no NPM; a quantidade semanal foi confirmada pelo titular.
- [x] **Aplicar o rascunho da experiência atual na OLX** em `src/components/rigthSide/Expiriences.vue`; o texto aguarda revisão do titular e validação das métricas antes de ser considerado final.
- [ ] **Aprovar o conteúdo revisado:** revisar a proposta dos textos antes de alterar o site.
- [ ] **Confirmar métricas e divulgação da OLX:** validar como foram medidos os percentuais, quais serviços AWS podem ser citados e se os detalhes podem ser divulgados.

**OK do Mike para avançar:** objetivo definido e conteúdo factual aprovado.

### 2. Definir direção visual e currículo

- [x] **Preparar uma primeira direção visual para a página:** modernizar o visual existente com tipografia, cores e espaçamento mais contidos; a proposta ainda aguarda sua revisão.
- [ ] **Definir formato e idioma do currículo:** confirmar conteúdo atualizado, versão em português/inglês e informações de contato.
- [ ] **Apresentar a proposta visual:** compartilhar a estrutura da página e a direção visual do currículo para aprovação.

**OK do Mike para avançar:** estrutura, visual e formato do currículo aprovados.

### 3. Implementar a página

- [x] **Atualizar apresentação e conteúdo:** hierarquia semântica, resumo, experiência da OLX, projetos, competências e contato; textos ainda aguardam revisão factual do titular.
- [x] **Implementar layout responsivo e acessível:** estrutura para telas pequenas, imagem com texto alternativo, foco visível e marcação válida de links; testes manuais em dispositivos ainda pendentes.
- [x] **Adicionar o botão de currículo:** “Baixar currículo (PDF)”, integrado à apresentação e responsivo.
- [x] **Remover a seção “Leituras”** da coluna esquerda, conforme solicitado.

**OK do Mike para avançar:** revisar a página implementada antes da etapa de descoberta/indexação.

### 4. Preparar descoberta e compartilhamento

- [x] **Configurar metadados:** idioma, título, descrição, prévia de compartilhamento e dados estruturados básicos de pessoa.
- [ ] **Validar rastreamento e conteúdo:** revisar HTML disponível a robôs, dados estruturados, links e estratégia de renderização.
- [ ] **Confirmar política de robôs de IA:** decidir quais rastreadores permitir ou bloquear, considerando que isso não garante inclusão em respostas de IA.

**OK do Mike para avançar:** revisar os metadados e a estratégia de indexação.

### 5. Finalizar o currículo e validar a entrega

- [x] **Criar HTML do currículo e comando de conversão:** `npm run cv:pdf` gera `public/portifolio.pdf` usando Playwright/Chromium; também aceita caminhos de entrada e saída.
- [x] **Gerar o PDF e validar a extração de texto:** o arquivo gerado tem duas páginas e texto selecionável.
- [x] **Corrigir a paginação de formação e idiomas:** manter o título, a formação e os dois idiomas juntos na segunda página, sem deixar conteúdo da seção órfão entre páginas.
- [x] **Facilitar extração por sistemas:** exibir os endereços de GitHub e LinkedIn no texto e agrupar as competências técnicas por categoria na segunda página.
- [ ] **Revisar visualmente o PDF:** conferir conteúdo, paginação, links e leitura em tela e impressão antes de considerar o currículo final.
- [x] **Executar verificações de código:** lint dos componentes alterados, build de produção e inicialização do servidor local concluídos; o build ainda reporta avisos de tamanho do PDF e Browserslist desatualizado.
- [ ] **Executar verificações finais:** validar links, visual em dispositivos, acessibilidade básica e consistência entre site e currículo.
- [ ] **Apresentar a versão final:** listar o que foi feito, validações executadas e pendências conhecidas.

**OK do Mike para concluir:** aprovar a versão final do site e do currículo.
