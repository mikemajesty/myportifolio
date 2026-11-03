<template>
  <div class="openSourceInfo">
    <h2 class="title">Open source</h2>
    <ul>
      <li>
        <h5>NPM</h5>
        <h4 class="position">8 Bibliotecas</h4>
        <a href="https://www.npmjs.com/~mikemajesty" target="_blank" rel="noopener noreferrer" class="project">Mais de 1.000 downloads semanais</a>
      </li>
      <li>
        <h5>Nuget</h5>
        <h4 class="position">4 Bibliotecas</h4>
        <a href="https://www.nuget.org/profiles/mikemajesty" target="_blank" rel="noopener noreferrer" class="project">Mais de 20.000 downloads</a>
      </li>
      <li>
        <h5>GitHub</h5>
        <h4 class="position">Bibliotecas open source</h4>
        <a href="https://github.com/mikemajesty" target="_blank" rel="noopener noreferrer" class="project">Mais de 1.000 stars e 200+ forks</a>
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
  margin-top: 24px;
}

ul {
  margin-top: 9px;
  list-style: none;
}

.title {
  color: #fff;
  font-size: 1rem;
}

li {
  margin-bottom: 12px;
}

h5 {
  color: #e0eaed;
  font-weight: 600;
}

.position {
  color: #69c5d0;
  font-weight: 500;
}

.project {
  color: #e0eaed;
  font-size: 0.9rem;
}

</style>