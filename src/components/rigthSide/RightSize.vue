<template>
  <div class="right_side">
    <About/>
    <Expiriences/>
    <Projects/>
  </div>
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
  background: #FFFFFF;
  padding: 40px;
}
</style>
