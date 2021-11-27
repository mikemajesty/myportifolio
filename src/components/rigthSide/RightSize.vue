<template>
  <div class="right_side">
    <About/>
    <Expiriences/>
    <Projects/>
    <PersonalAbout/>
  </div>
</template>

<script>
import About from './About.vue';
import Expiriences from './Expiriences.vue';
import Projects from './PersonalProject.vue';
import PersonalAbout from './PersonalAbout.vue';

export default {
  name: 'RightSize',
  components: {
    About,
    Expiriences,
    Projects,
    PersonalAbout,
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
