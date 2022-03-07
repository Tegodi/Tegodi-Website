<template>
  <div class="projektaufbauWrapper">
    <PseudoHeader />
    <Vision />
    <p>Für die margin</p>
  </div>
</template>

<script>
import PseudoHeader from './components/PseudoHeader.vue';
import Vision from './components/Vision.vue';

export default {
  name: 'Projektaufbau',
  components: { Vision, PseudoHeader },
};
</script>

<style scoped>
.projektaufbauWrapper {
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 10vh;
}
</style>
