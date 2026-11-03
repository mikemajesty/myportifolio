<template>
  <div class="projects">
    <h2 class="title">Projetos em destaque</h2>
    <article class="project">
      <h3><a href="https://github.com/mikemajesty/nestjs-microservice-boilerplate-api" target="_blank" rel="noopener noreferrer">NestJS Microservice Boilerplate</a></h3>
      <p>Boilerplate para criação de microsserviços com foco em arquitetura, manutenibilidade e práticas aplicadas em projetos reais.</p>
    </article>
    <article class="project">
      <h3><a href="https://github.com/mikemajesty/nestjs-monorepo" target="_blank" rel="noopener noreferrer">NestJS Monorepo</a></h3>
      <p>Estrutura monorepo em NestJS para desenvolver e manter múltiplas APIs em um único repositório.</p>
    </article>
    <article class="project">
      <h3><a href="https://github.com/mikemajesty/legend_of_github" target="_blank" rel="noopener noreferrer">Legend of GitHub</a></h3>
      <p>Jogo desenvolvido com Vue.js e Phaser que transforma estatísticas públicas do GitHub em atributos de personagens de RPG.</p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style scoped>

.projects {
  margin-top: 42px;
}

.title {
  margin-bottom: 18px;
  color: #173b49;
  font-size: 1.45rem;
  letter-spacing: -0.02em;
}

.project {
  padding: 16px 0;
  border-top: 1px solid #e1eaed;
}

h3 {
  margin-bottom: 5px;
  font-size: 1.02rem;
}

.project p {
  color: #455760;
  font-size: 0.94rem;
}
</style>