<template>
  <div class="projects">
    <div class="box">
    <h2 class="title">Projetos Pessoais</h2>
  </div>
  <a href="https://github.com/mikemajesty/nestjs-monorepo" title="Click para mais informações"  target="_blank">NestJs Monorepo</a>
  <h5>Monorepo em NestJs, onde foi usado as melhores praticas de monorepo do mercado. O Projeto foi desenvolvido para ter escalabilidade e provou sua efetividade em um grande projeto empresarial.</h5>
  <hr>
  <a href="https://github.com/mikemajesty/nestjs-boilerplate" title="Click para mais informações" target="_blank" class="padding">NestJs Multirepo</a>
  <h5>Multirepo em NestJs, onde foi usado as melhores praticas de multirepo do mercado. O Projeto foi desenvolvido para ser um microserviço.</h5>
  <hr>
  <a href="https://github.com/mikemajesty/legend_of_github" title="Click para mais informações" target="_blank" class="padding">Legend Of Github</a>
  <h5>Game desenvolvido em VueJs e Phaser, o jogo é baseado nas estatísticas de cada usuário do github para criar um personagem em RPG e batalhar contra seus amigos.</h5>
  <hr>
  <a href="https://github.com/mikemajesty/Vue-Dual-List" title="Click para mais informações" target="_blank" class="padding">Vue Dual List</a>
  <h5>Dual list em VueJs, o componente foi desenvolvido para solucionar uma carência desse tipo de componente no peróido.</h5>
  <hr>
  <a href="https://github.com/mikemajesty/Vue-Month-Calendar" title="Click para mais informações" target="_blank" class="padding">Vue Month Calendar</a>
  <h5>MOnth calendar em VueJs, o componente foi desenvolvido para ser usado em um projeto pessoal.</h5>
  <hr>
  <a href="https://github.com/mikemajesty/Chocobo-Date-Range-Picker" title="Click para mais informações" target="_blank" class="padding">Chocobo Data Range</a>
  <h5>Data Range em Angular, componetente desenvolvido pela necessidade de aprender main sobre manipulação de datas em JavaScript.</h5>
  <hr>
  <a href="https://github.com/mikemajesty/StormReport" title="Click para mais informações" target="_blank" class="padding">Storm Report</a>
  <h5>Biblioteca em C#, desenvolvida na faculdade para um trabalho de POO e usada por mais de 500 pessoas, segundo as métricas do Nuget.</h5>
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
  color: #003147;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

h5 {
  text-transform: uppercase;
  color: #848c90;
  font-weight: 500;
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