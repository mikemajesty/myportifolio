<template>
  <div class="about">
    <h2 class="title">Perfil Profissional</h2>
    <p>Possuo 10 anos de experiência em desenvolvimento de software, atuando em diversos setores como financeiro, varejo
      e saúde. Ao longo da minha trajetória, desenvolvi habilidades técnicas e práticas em múltiplas plataformas,
      incluindo <b>Node.js (NestJS, Express), Golang, C# e Java</b>, sempre assumindo papéis de liderança técnica e
      protagonismo nos projetos em que participei.
      <br>
      Sou bacharel em Sistemas de Informação e, ao longo da minha formação, desenvolvi resiliência, proatividade e
      capacidade de adaptação frente a diferentes desafios. Tenho facilidade em buscar soluções inovadoras e contribuir
      de forma significativa em todas as fases do desenvolvimento de sistemas, agregando valor aos projetos e superando
      as expectativas das equipes.
    </p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about:last-child {
  margin-bottom: 0;
}

.title {
  color: #003147;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

p {
  color: #000000;
  font-weight: 300;
}
</style>