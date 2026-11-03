<template>
  <div class="imgBox">
    <img src="../../assets/img.jpeg" alt="Foto de perfil de Mike Lima">
  </div>
  <h1>Mike Lima</h1>
  <p class="role">Engenheiro de Software</p>

  <section class="expertises" aria-labelledby="expertises-title">
    <h2 id="expertises-title">Principais competências</h2>
    <ul>
      <li>Node.js (NestJS, Express)</li>
      <li>TypeScript e Go</li>
      <li>Arquitetura de software</li>
      <li>Kubernetes e Crossplane</li>
      <li>Observabilidade</li>
      <li>PostgreSQL e MongoDB</li>
      <li>AWS</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ImgBox'
}
</script>

<style scoped>
.imgBox
{
  position: relative;
  width: 176px;
  height: 176px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.18);
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  margin-top: 20px;
  color: #fff;
  font-size: 1.85rem;
  line-height: 1.2;
  text-align: center;
}

.role {
  margin-top: 8px;
  color: #c9d9df;
  font-size: 0.98rem;
  text-align: center;
}

.expertises {
  margin-top: 26px;
}

.expertises h2 {
  margin-bottom: 10px;
  color: #fff;
  font-size: 1rem;
}

li {
  margin: 6px 0 6px 18px;
  color: #e0eaed;
  font-size: 0.91rem;
}
</style>