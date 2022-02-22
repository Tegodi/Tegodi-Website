<template>
  <div class="projekte">
    <AboutCard text="Logo" :image="logo" />
    <AboutCard text="Logo" :image="logo" />
    <AboutCard text="Logo" :image="logo" />
    <AboutCard text="Logo" :image="logo" />
    <AboutCard text="Logo" :image="logo" />
  </div>
</template>

<script>
import logo from '../../assets/tegodilogo.png';
import AboutCard from './AboutCard.vue';

export default {
  name: 'About',
  components: { AboutCard },
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
.projekte {
  min-height: 72vh;
  margin-top: 5vh;
  margin-bottom: 5vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}

@media only screen and (max-width: 1000px) {

}
</style>
