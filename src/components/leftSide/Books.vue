<template>
  <div class="booksInfo">
    <h3 class="title">Últimos Livros</h3>
    <ul>
      <li>
        <h5></h5>
        <a href="https://www.amazon.com.br/TDD-Desenvolvimento-Guiado-por-Testes/dp/857780724X"  target="_blank" class="project">TDD - Desenvolvimento Guiado Por Testes</a>
      </li>
      <hr>
      <li>
        <h5></h5>
        <a href="https://www.amazon.com/Implementando-Domain-Driven-Design-Portuguese-Brasil/dp/8576089521"  target="_blank" class="project">Implementando Domain driven design</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BooksInfo'
}
</script>

<style scoped>

.booksInfo {
  padding-top: 10px;
}

ul {
  padding-top: 7%;
}

.title {
  font-weight: 700;
  color: aliceblue;
}

a {
  text-decoration: none !important;
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