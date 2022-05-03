<template>
  <div class="helpdeskWrapper">
    <BackButton back-u-r-l="/" chevron-background="var(--light-background)" chevron-color="var(--tegodi-green)" text-background="var(--header-text-color)" text-color="var(--tegodi-green)" title="Helpdesk" />
    <div class="actualHelpdeskContent">
      <VerticalField :margin="8" :width="60" :width-of-left-border="4" background="var(--header-text-color)" header="">
        <p>{{ $t('helpdesk.contact.firstText') }}</p>
        <div>
          <p>{{ $t('helpdesk.contact.partHeader') }}</p>
          <ul style="margin-left: 3vw">
            <li>{{$t('helpdesk.contact.parts[0]')}}</li>
            <li>{{$t('helpdesk.contact.parts[1]')}}</li>
            <li>{{$t('helpdesk.contact.parts[2]')}}</li>
            <li>{{$t('helpdesk.contact.parts[3]')}}</li>
          </ul>
          <p>{{ $t('helpdesk.contact.partBottom') }}</p>
        </div>
        <p>{{ $t('helpdesk.contact.partEnd') }}</p>
      </VerticalField>
      <VideoComponent />
      <ContactField />
    </div>
  </div>
</template>

<script>
import VerticalField from '../../permanent/shared/VerticalField.vue';
import BackButton from '../../permanent/shared/BackButton.vue';
import VideoComponent from './components/VideoComponent.vue';
import ContactField from './components/ContactField.vue';

export default {
  name: 'Helpdesk',
  components: {
    ContactField, VideoComponent, BackButton, VerticalField,
  },
};
</script>

<style scoped>
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
</style>
