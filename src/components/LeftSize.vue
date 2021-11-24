<template>
  <div class="left_side">
    <ProfileText/>
  </div>
</template>

<script>
import ProfileText from './ProfileText.vue';

export default {
  name: 'LeftSize',
  components: {
    ProfileText
  }
}
</script>

<style scoped>
.left_side
{
  position: relative;
  background: #35879A;
  padding: 40px;
}
</style>
