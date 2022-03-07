<template>
  <div class="footerTop">
    <div class="footerThirds">

    </div>
    <div class="footerThirds" id="impDat">
      <p>Impressum</p>
      <p>Datenschutz</p>
    </div>
    <div class="footerThirds" id="logosponsor">
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
  background-color: var(--tegodi-green);
  display: flex;
  flex-direction: row;
}

.footerThirds {
  width: calc(100% / 3);
  height: 100%;
}

#impDat {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Volte", serif;
  font-weight: 200;
  font-size: 1.0rem;
}

#logosponsor {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

#logosponsor > img {
  width: auto;
  height: 100%;
}
</style>
