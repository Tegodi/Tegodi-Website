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
  margin: 0 10vw;
  width: calc(100% - 20vw);
  height: 40vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.image {
  height: 80%;
  width: auto;
}
</style>
