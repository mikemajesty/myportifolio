<template>
  <div class="skills">
    <div class="box">
    <h2 class="title">Projetos Pessoais</h2>
    <div class="percent"></div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Skills'
}
</script>

<style scoped>

.skills {
  padding-top: 10px;
}

.box {
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
}

.title {
  color: #003147;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
</style>