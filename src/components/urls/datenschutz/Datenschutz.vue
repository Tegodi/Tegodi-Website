<template>
  <div class="iframeWrapper">
    <iframe src="http://localhost:8080/tegodi_datenschutz.pdf#toolbar=0" width="100%" height="100%"/>
  </div>
</template>

<script>
export default {
  name: 'Datenschutz',
};
</script>

<style scoped>
.iframeWrapper {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
