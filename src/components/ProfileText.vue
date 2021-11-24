<template>
  <div class="profileText">
    <ImgBox/>
  </div>
</template>

<script>
import ImgBox from './ImgBox.vue';
export default {
  name: 'ProfileText',
  components: {
    ImgBox
  }
}
</script>

<style scoped>
.profileText
{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}
</style>
