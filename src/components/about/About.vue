<template>
  <div class="projekte">
    <AboutCard
      text="Projektaufbau und Teilaufbau"
      :image="logo"
      @click="pushTo('/about/projektaufbau')"/>
    <AboutCard
      text="Produkte und Services"
      :image="logo"
      @click="pushTo('/about/produkteservices')"/>
    <AboutCard text="Verbindung mit anderen Projekten" :image="logo"/>
    <AboutCard text="Tipps zu aktuellen Themen" :image="logo"/>
    <AboutCard text="TEgoDI in english" :image="logo"/>
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
  methods: {
    pushTo(url) {
      this.$router.push(url);
    },
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
