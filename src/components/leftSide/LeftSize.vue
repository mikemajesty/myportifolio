<template>
  <aside class="left_side" aria-label="Informações complementares">
    <ProfileText/>
    <ContactInfo/>
    <Education/>
    <LanguageInfo/>
    <Hackathons/>
    <OpenSource/>
  </aside>
</template>

<script>
import ProfileText from './ProfileText.vue';
import ContactInfo from './Contact.vue';
import Education from './Education.vue';
import LanguageInfo from './Language.vue';
import Hackathons from './Hackathons.vue';
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
  min-width: 0;
  background: #123746;
  padding: 38px 30px;
}

@media (max-width: 800px) {
  .left_side {
    padding: 32px clamp(22px, 7vw, 48px);
  }
}
</style>
