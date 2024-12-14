<template>
  <div class="openSourceInfo">
    <h3 class="title">Projetos Open Source</h3>
    <ul>
      <li>
        <h5>NPM</h5>
        <h4 class="position">8 Bibliotecas</h4>
        <a href="https://www.npmjs.com/~mikemajesty"  target="_blank" class="project">> 600 Downloads mensais</a>
      </li>
      <li>
        <h5>Nuget</h5>
        <h4 class="position">4 Bibliotecas</h4>
        <a href="https://www.nuget.org/profiles/mikemajesty" target="_blank" class="project">> 15.000 Downloads</a>
      </li>
      <li>
        <h5>GitHub</h5>
        <h4 class="position">90 Repositórios</h4>
        <a href="https://github.com/mikemajesty" target="_blank" class="project">> 930 Stars</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OpenSource'
}
</script>

<style scoped>

.openSourceInfo {
  padding-top: 10px;
}

ul {
  padding-top: 7%;
}

.title {
  font-weight: 700;
  color: aliceblue;
}

li {
  margin-bottom: 15px;
  list-style: none;
}

h5 {
  font-weight: 500;
  color: aliceblue;
}

.position {
  color: #03a9f4;
  position: relative;
  width: 100%;
  font-weight: 300;
}

.project {
  color: aliceblue;
  font-weight: 200;
}

hr {
  margin-top: 5%;
  margin-bottom: 5%;
}

</style>