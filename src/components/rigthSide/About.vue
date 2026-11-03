<template>
  <div class="about">
    <p class="eyebrow">Backend · Plataformas · Cloud</p>
    <h2 class="title">Engenharia de software para produtos e plataformas</h2>
    <p>
      Engenheiro de software com experiência em desenvolvimento backend, arquitetura de sistemas e plataformas de infraestrutura.
      Trabalho com Node.js, TypeScript, Go, Kubernetes e serviços de cloud, buscando tornar sistemas mais simples de evoluir
      e infraestrutura mais acessível para os times de desenvolvimento.
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

.about {
  margin-bottom: 42px;
}

.eyebrow {
  margin-bottom: 8px;
  color: #137b8a;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.title {
  margin-bottom: 14px;
  color: #173b49;
  font-size: clamp(1.45rem, 3vw, 2rem);
  letter-spacing: -0.025em;
  line-height: 1.25;
}

p {
  color: #455760;
  font-size: 1rem;
}

</style>