<template>
  <div class="helpdeskWrapper">
    <BackButton back-u-r-l="/" chevron-background="var(--light-background)" chevron-color="var(--tegodi-green)" text-background="var(--header-text-color)" text-color="var(--tegodi-green)" :title="$t('landing.helpdesk')" />
    <div class="actualHelpdeskContent">
      <div class="imageDiv p6t">
        <img :src="desk" class="image"/>
      </div>
      <VerticalField :margin="8" :width="60" :width-of-left-border="4" background="var(--header-text-color)" header="">
        <p>{{ $t('helpdesk.contact.firstText') }}</p>
        <div>
          <p>{{ $t('helpdesk.contact.partHeader') }}</p>
          <div style="margin-left: 2vw; margin-bottom: 2vw">
            <div class="listItem">
              <img :src="swoosh">
              <p>{{$t('helpdesk.contact.parts[0]')}}</p>
            </div>
            <div class="listItem">
              <img :src="swoosh">
              <p>{{$t('helpdesk.contact.parts[1]')}}</p>
            </div>
            <div class="listItem">
              <img :src="swoosh">
              <p>{{$t('helpdesk.contact.parts[2]')}}</p>
            </div>
            <div class="listItem">
              <img :src="swoosh">
              <p>{{$t('helpdesk.contact.parts[3]')}}</p>
            </div>
        </div>
          <p>{{ $t('helpdesk.contact.partBottom') }}</p>
        </div>
        <p>{{ $t('helpdesk.contact.partEnd') }}</p>
      </VerticalField>
        <div class="imageDiv p6b">
          <img :src="logo" class="image"/>
        </div>
      <ContactField />
    </div>
  </div>
</template>

<script>
import VerticalField from '../../permanent/shared/VerticalField.vue';
import BackButton from '../../permanent/shared/BackButton.vue';
import ContactField from './components/ContactField.vue';

import swoosh from '../../../assets/goswoosh_green.png';
import desk from '../../../assets/Helpdesk_Banner_mit_Schrift.jpg';
import logo from '../../../assets/Moopaed_logo.jpg';

export default {
  name: 'Helpdesk',
  components: {
    ContactField, BackButton, VerticalField,
  },
  data() {
    return {
      swoosh,
      desk,
      logo,
    };
  },
};
</script>

<style scoped>
.listItem {
  display: flex;
  align-items: center;
  grid-gap: 1ch;
  height: 3ch;
}

.listItem > img {
  height: 1.5ch;
  aspect-ratio: auto;
}

.helpdeskWrapper {
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  grid-gap: 10vh;
  margin-bottom: 5vh;
}

.actualHelpdeskContent {
  width: calc(100% - 30vh);
  padding: 0 15vh;
  display: flex;
  flex-direction: column;
  grid-gap: 10vh;
}

.imageDiv {
  width: 100%;
  display: flex;
  justify-content: center;
}

.image {
  height: auto;
  width: 60%;
}

.p6b {
  padding-bottom: 0;
}
.p6t {
  padding-top: 0;
}

@media screen and (max-width: 1025px) {
  .actualHelpdeskContent {
    width: 100%;
    padding: 0;
    grid-gap: 0;
  }
  .helpdeskWrapper {
    grid-gap: 0;
  }
  .p6b {
    padding-bottom: 6vh;
  }
  .p6t {
    padding-top: 6vh;
  }

  .image {
    width: 80%;
  }
}
</style>
