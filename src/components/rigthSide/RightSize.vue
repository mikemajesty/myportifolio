<template>
  <div class="right_side">
    <About/>
    <Expiriences/>
    <Skills/>
  </div>
</template>

<script>
import About from './About.vue';
import Expiriences from './Expiriences.vue';
import Skills from './Skills.vue';

export default {
  name: 'RightSize',
  components: {
    About,
    Expiriences,
    Skills
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
