<template>
  <div class="contactFieldWrapper">
    <div>
      <div class="innerText">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
          duo dolores et.</p>
        <div>
          <p>Ansprechpartner: Max Mustermann</p>
          <p>Adresse: Musterweg 123</p>
          <p>Telefon: Musternummer</p>
          <p>Email: max.mustermann@muster.de</p>
        </div>
      </div>
    </div>
    <div class="iframeWrapper">
      <p>2</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactField',
};
</script>

<style scoped>
.contactFieldWrapper {
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: row;
  grid-gap: 5vw;
}

.contactFieldWrapper > div {
  width: 50%;
  height: 100%;
  font-family: "Opensans", serif;
}

.innerText {
  width: 90%;
  display: flex;
  flex-direction: column;
  grid-gap: 5vh;
}

.iframeWrapper {
  width: 100%;
  height: 100%;
  background: #888888;
}
</style>
