<template>
  <div class="projektaufbauWrapper">
    <PseudoHeader />
    <Vision />
    <MissionStatement />
    <MissionStatementTexte />
  </div>
</template>

<script>
import PseudoHeader from './components/PseudoHeader.vue';
import Vision from './components/Vision.vue';
import MissionStatement from './components/MissionStatement.vue';
import MissionStatementTexte from './components/MissionStatementTexte.vue';

export default {
  name: 'Projektaufbau',
  components: {
    MissionStatementTexte,
    MissionStatement,
    Vision,
    PseudoHeader,
  },
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
