<template>
  <div class="helpdeskWrapper">
    <div class="backButton">
      <div class="backChevron">
        <p>c</p>
      </div>
      <div class="locationTag">
        <h2>Helpdesk</h2>
      </div>
    </div>
    <VerticalField header="Help" background="#141414" margin="5vh" :width="80">
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </VerticalField>
  </div>
</template>

<script>
import VerticalField from '../../permanent/shared/VerticalField.vue';

export default {
  name: 'Helpdesk',
  components: { VerticalField },
};
</script>

<style scoped>
.helpdeskWrapper {
  width: 100%;
  min-height: 90vh;
}

.backButton {
  width: 20vw;
  height: 7vh;
  display: flex;
  flex-direction: row;
}

.backChevron {
  height: 100%;
  aspect-ratio: 1;
  background-color: #c2d500;
}

.locationTag {
  flex-grow: 1;
  height: 100%;
  background-color: #888888;
}
</style>
