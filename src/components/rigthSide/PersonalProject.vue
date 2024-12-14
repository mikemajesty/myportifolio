<template>
  <div class="projects">
    <div class="box">
    <h2 class="title">Projetos Pessoais</h2>
  </div>
  <a href="https://github.com/mikemajesty/nestjs-microservice-boilerplate-api" title="Click para mais informações" target="_blank" class="padding">NestJs Microservice Boilerplate</a>
  <h5>Este microserviço foi desenvolvido após minha experiência em diversas empresas, onde sempre me deparei com arquiteturas complicadas e de difícil manutenção. Motivado por esse desafio, decidi estudar as principais arquiteturas e combinar o melhor de cada uma com as experiências adquiridas ao longo da minha carreira. O resultado foi extraordinário, e recebi inúmeros feedbacks positivos. Atualmente, o projeto está sendo utilizado em várias empresas, incluindo a organização em que trabalho.</h5>
  <hr>
  <a href="https://github.com/mikemajesty/nestjs-monorepo" title="Click para mais informações"  target="_blank">NestJs Monorepo</a>
  <h5>A ideia por trás deste Monorepo em NestJS foi criar uma arquitetura simples e manutenível, facilitando a criação de novas APIs em um único repositório. O desenvolvimento do projeto levou 8 meses, incluindo a fase de construção e estudos aprofundados. O sucesso do projeto no Github foi uma grande motivação, e isso me inspirou a continuar aprimorando e evoluindo ainda mais a solução..</h5>
  <hr>
  <a href="https://github.com/mikemajesty/legend_of_github" title="Click para mais informações" target="_blank" class="padding">Legend Of Github</a>
  <h5>Desenvolvi um jogo utilizando Vue.js e Phaser, baseado nas estatísticas de cada usuário do GitHub. O jogo permite criar um personagem de RPG personalizado, com base nos dados do usuário, e batalhar contra seus amigos. Essa experiência oferece uma maneira divertida e interativa de explorar o perfil do GitHub enquanto se envolve em batalhas de RPG.</h5>
  </div>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<style scoped>

.projects {
  padding-top: 5px;
}

.box {
  display: flex;
  flex-direction: row;
  margin: 13px 0px;
}

.title {
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

h5 {
  text-transform: uppercase;
  color: #000000;
  font-weight: 400;
  padding-left: 10%;
}

a {
  text-transform: uppercase;
  color: #2a7da2;
  font-size: 16px;
  font-weight: 600;
}

.padding {
  padding-top: 10%;
}

hr {
  margin-top: 5%;
}
</style>