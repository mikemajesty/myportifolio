<template>
  <div class="projects">
    <div class="box">
    <h2 class="title">Projetos Pessoais</h2>
  </div>
  <a href="https://github.com/mikemajesty/nestjs-monorepo" title="Click para mais informações"  target="_blank">NestJs Monorepo</a>
  <h5>A ideia desse Monorepo em Nestjs foi construir uma arquitetura simples e manutenível, com isso facilitando a criação de novas APIs em um único repositório. O desenvolvimento demorou 8 meses entre construção e estudo. O projeto é um sucesso no Github e isso animou-me ainda mais para melhorar e evoluir o mesmo.</h5>
  <hr>
  <a href="https://github.com/mikemajesty/nestjs-microservice-boilerplate-api" title="Click para mais informações" target="_blank" class="padding">NestJs Microservice Boilerplate</a>
  <h5>Esse Microserviço foi criado após ter passado  por inúmeras empresas e sempre me deparar com uma arquitetura complicada e de difícil manutenção. Com isso eu revolvi estudar as principais arquiteturas e extrair o melhor de cada uma, juntamente com as experiências que eu tive na minha carreira, o resultado foi incrível e tive inúmeros feedbacks positivos. O projeto esta sendo usado em vaias empresas, inclusive a empresa que eu trabalho atualmente.</h5>
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