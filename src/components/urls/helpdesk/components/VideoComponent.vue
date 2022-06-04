<template>
  <div class="videoComponentWrapper">
    <img :src="desk" class="image"/>
    <img :src="logo" />
  </div>
</template>

<script>
import logo from '../../../../assets/Moopaed_logo.jpg';
import desk from '../../../../assets/Helpdesk_Banner_mit_Schrift.jpg';

export default {
  name: 'VideoComponent',
  data() {
    return {
      logo,
      desk,
    };
  },
};
</script>

<style scoped>
.videoComponentWrapper {
  margin: 0 10vw 10vw 10vw;
  width: calc(100% - 20vw);
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  grid-gap: 7vh;
}

.image {
  height: auto;
  width: 80vw;
}

@media screen and (max-width: 1025px) {
  .videoComponentWrapper {
    width: 100%;
    margin: 0;
  }
}
</style>
