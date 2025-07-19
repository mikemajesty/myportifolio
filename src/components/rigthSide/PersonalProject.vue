<template>
  <div class="projects">
    <div class="box">
    <h2 class="title">Projetos Pessoais</h2>
  </div>
  <a href="https://github.com/mikemajesty/nestjs-microservice-boilerplate-api" title="Click para mais informações" target="_blank" class="padding">NestJs Microservice Boilerplate</a>
  <h5>Este microserviço surgiu a partir da minha vivência em diferentes empresas, onde frequentemente enfrentei arquiteturas complexas e pouco manuteníveis. Motivado por esses desafios, aprofundei meus estudos em padrões arquiteturais e apliquei as melhores práticas aliadas à minha experiência prática. O resultado foi uma solução eficiente, que recebeu diversos feedbacks positivos e hoje está em uso por várias empresas, incluindo a organização em que atuo.</h5>
  <hr>
  <a href="https://github.com/mikemajesty/nestjs-monorepo" title="Click para mais informações"  target="_blank">NestJs Monorepo</a>
  <h5>Idealizei e desenvolvi um monorepo em NestJS com foco em simplicidade, manutenibilidade e escalabilidade, facilitando a criação de múltiplas APIs em um único repositório. O projeto foi desenvolvido ao longo de 8 meses, combinando construção prática e estudos aprofundados em arquitetura de software. O sucesso e reconhecimento obtidos no GitHub serviram como motivação para seguir aprimorando a solução continuamente.</h5>
  <hr>
  <a href="https://github.com/mikemajesty/legend_of_github" title="Click para mais informações" target="_blank" class="padding">Legend Of Github</a>
  <h5>Desenvolvi um jogo interativo utilizando Vue.js e Phaser, que transforma estatísticas do GitHub em atributos de um personagem de RPG personalizado. A aplicação permite que usuários criem seus avatares com base em seus dados públicos e disputem batalhas com amigos, oferecendo uma experiência divertida e inovadora de explorar perfis do GitHub por meio da gamificação.</h5>
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