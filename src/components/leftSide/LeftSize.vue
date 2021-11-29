<template>
  <div class="left_side">
    <ProfileText/>
    <ContactInfo/>
    <Education/>
    <LanguageInfo/>
    <Hackathons/>
    <OpenSource/>
    <Carousel/>
    <Slide/>
  </div>
</template>

<script>
import ProfileText from './ProfileText.vue';
import ContactInfo from './Contact.vue';
import Education from './Education.vue';
import LanguageInfo from './Language.vue';
import Hackathons from './Hackathons.vue';
import OpenSource from './OpenSource.vue';
import Slide from './Slide.vue';

export default {
  name: 'LeftSize',
  components: {
    ProfileText,
    ContactInfo,
    Education,
    LanguageInfo,
    Hackathons,
    OpenSource,
    Slide
  }
}
</script>

<style scoped>
.left_side
{
  position: relative;
  background: #003147;
  padding: 40px;
  max-width: 300px;
  box-shadow: 2px 10px 6px -4px black;
}
</style>
