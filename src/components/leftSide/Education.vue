<template>
  <div class="education">
    <h2 class="title">Formação</h2>
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
  color: #69c5d0;
  font-weight: 600;
}

h4 {
  color: #e0eaed;
  font-size: 0.9rem;
  font-weight: 400;
}

</style>