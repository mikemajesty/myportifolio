<template>
  <main class="right_side">
    <About/>
    <Expiriences/>
    <Projects/>
  </main>
</template>

<script>
import About from './About.vue';
import Expiriences from './Expiriences.vue';
import Projects from './PersonalProject.vue';

export default {
  name: 'RightSize',
  components: {
    About,
    Expiriences,
    Projects,
  }
}
</script>

<style scoped>
.right_side
{
  position: relative;
  min-width: 0;
  background: #fff;
  padding: 50px 52px;
}

@media (max-width: 800px) {
  .right_side {
    padding: 36px clamp(22px, 7vw, 48px);
  }
}

@media (max-width: 420px) {
  .right_side {
    padding: 28px 20px;
  }
}
</style>
