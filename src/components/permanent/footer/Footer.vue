<template>
  <div class="footerTop">
    <div class="footerThirds flexFooters" style="background-color: #d1e040">
      <p>Impressum</p>
      <p>Datenschutz</p>
    </div>
    <div class="footerThirds flexFooters" style="background-color: #848c94">
      <p>Deutsch</p>
      <p>Englisch</p>
    </div>
    <div class="footerThirds flexFooters" id="logosponsor" style="background-color: white">
      <img :src="bw">
    </div>
  </div>
</template>

<script>
import bw from '../../../assets/logo_bw_ministerium.png';

export default {
  name: 'Footer',
  data() {
    return {
      bw,
    };
  },
};
</script>

<style scoped>
.footerTop {
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
}

.footerThirds {
  width: calc(100% / 3);
  height: 100%;
}

.flexFooters {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Volte", serif;
  font-weight: 200;
  font-size: 1.0rem;
}

#logosponsor > img {
  width: auto;
  height: 100%;
}
</style>
