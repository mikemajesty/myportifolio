<template>
  <div class="languageInfo">
    <h2 class="title">Idiomas</h2>
    <ul>
      <li>
        <span class="text">Português <span class="nivel">Nativo</span></span>
      </li>
      <li>
        <span class="text">Inglês <span class="nivel">Intermediário</span></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LanguageInfo'
}
</script>

<style scoped>

.languageInfo {
  margin-top: 24px;
}

.title {
  color: #fff;
  font-size: 1rem;
}

.nivel {
  font-size: 13px;
  font-weight: 500;
  color: #69c5d0;
  position: relative;
  width: 100%;
}

ul {
  margin-top: 8px;
  list-style: none;
}

.text {
  position: relative;
  width: 100%;
  color: #e0eaed;
  font-weight: 400;
}

</style>