<template>
  <div class="helpdeskWrapper">
    <BackButton title="Helpdesk" back-u-r-l="/" chevron-background="var(--light-background)" chevron-color="var(--tegodi-green)" text-background="var(--header-text-color)" text-color="var(--tegodi-green)" />
    <div class="actualHelpdeskContent">
      <VerticalField header="" background="var(--header-text-color)" :margin="8" :width="60" :width-of-left-border="7">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.</p>
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
