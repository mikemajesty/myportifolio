<template>
  <div class="languageInfo">
    <h3 class="title">Idiomas</h3>
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
  padding-top: 15px;
}

.title {
  font-weight: 700;
  color: aliceblue;
}

.nivel {
  font-size: 13px;
  font-weight: 500;
  color: #03a9f4;
  position: relative;
  width: 100%;
}

ul {
  padding-top: 7%;
  list-style: none;
}

.text {
  position: relative;
  width: 100%;
  color: aliceblue;
  font-weight: 300;
}

</style>