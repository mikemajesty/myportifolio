<template>
  <div class="left_side">
    <ProfileText/>
    <ContactInfo/>
    <Education/>
  </div>
</template>

<script>
import ProfileText from './ProfileText.vue';
import ContactInfo from './ContactInfo.vue';
import Education from './Education.vue';

export default {
  name: 'LeftSize',
  components: {
    ProfileText,
    ContactInfo,
    Education
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
