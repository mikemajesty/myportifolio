<template>
  <div class="education">
    <h3 class="title">Formação</h3>
    <ul>
      <li>
        <h5>2014 - 2017</h5>
        <h4>Sistemas de Informação</h4>
        <h4>Universidade de São Roque</h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Education'
}
</script>

<style scoped>

.education {
  padding-top: 15px;
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
  color: #03a9f4;
  position: relative;
  width: 100%;
  font-weight: 500;
}

h4 {
  color: aliceblue;
  position: relative;
  width: 100%;
  font-weight: 300;
}

</style>