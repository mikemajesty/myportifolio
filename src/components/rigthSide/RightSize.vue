<template>
  <div class="right_side">
    <About/>
    <Expiriences/>
  </div>
</template>

<script>
import About from './About.vue';
import Expiriences from './Expiriences.vue';
export default {
  name: 'RightSize',
  components: {
    About,
    Expiriences
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
