<template>
<div class="pntTop">
  <div class="pntText">
    <h1>Projektaufbau und Teilprojekte</h1>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore
      magna aliquyam erat, sed diam voluptua. At vero eos et accusa
      et justo duo dolores et ea rebum. Stet clita kasd gubergren,
      no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
      ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      sed diam voluptua. At vero eos et accusam et justo duo dolores
      et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
      est Lorem ipsum dolor sit amet.</p>
  </div>
  <div class="pntImages">
    <AboutCard text="Teilprojekt1" :image="logo"/>
    <AboutCard text="Teilprojekt2" :image="logo"/>
  </div>
</div>
</template>

<script>
import AboutCard from '../AboutCard.vue';
import logo from '../../../assets/tegodilogo.png';

export default {
  name: 'ProjektaufbauTeilprojekte',
  components: {
    AboutCard,
  },
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
.pntTop {
  margin-top: 5vh;
  margin-bottom: 5vh;
  min-height: 72vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  grid-gap: 3vw;
}

.pntText {
  width: 60%;
  height: auto;
  padding-left: 5vh;
}

.pntImages {
  width: 40%;
  height: 100%;
  padding-right: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 7vh;
}

@media only screen and (max-width: 1000px) {
  .pntTop {
    flex-direction: column;
    align-items: center;
    grid-gap: 7vh;
  }

  .pntText {
    height: 100%;
    padding: 0;
    width: 80%;
  }

  .pntImages {
    width: 80%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 7vh;
  }
}
</style>
