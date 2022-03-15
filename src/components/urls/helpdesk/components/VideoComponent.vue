<template>
  <div class="videoComponentWrapper">
    <video src="https://www.w3schools.com/html/mov_bbb.mp4" autoplay muted controls />
    <img src="https://www.moopaed.de/wp-content/uploads/2018/01/moopaed_logo.jpg" />
  </div>
</template>

<script>
export default {
  name: 'VideoComponent',
};
</script>

<style scoped>
.videoComponentWrapper {
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.videoComponentWrapper > video {
  height: 100%;
  width: auto;
}
</style>
