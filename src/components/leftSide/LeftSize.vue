<template>
  <div class="left_side">
    <ProfileText/>
    <ContactInfo/>
    <Education/>
    <LanguageInfo/>
    <Hackathons/>
    <OpenSource/>
  </div>
</template>

<script>
import ProfileText from './ProfileText.vue';
import ContactInfo from './ContactInfo.vue';
import Education from './Education.vue';
import LanguageInfo from './LanguageInfo.vue';
import Hackathons from './HackathonsInfo.vue';
import OpenSource from './OpenSource.vue';

export default {
  name: 'LeftSize',
  components: {
    ProfileText,
    ContactInfo,
    Education,
    LanguageInfo,
    Hackathons,
    OpenSource
  }
}
</script>

<style scoped>
.left_side
{
  position: relative;
  background: #003147;
  padding: 40px;
}
</style>
