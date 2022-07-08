<template>
  <div class="videoComponentWrapper">
    <img :src="desk" class="image"/>
    <img :src="logo" class="image"/>
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
  height: 30vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  grid-gap: 7vh;
}

.image {
  height: 50%;
  width: auto;
}

@media screen and (max-width: 1025px) {
  .videoComponentWrapper {
    width: 100%;
    height: 40vh;
    margin: 0;
    flex-direction: column;
  }
  .image {
    height: auto;
    width: 80%;
  }
}
</style>
