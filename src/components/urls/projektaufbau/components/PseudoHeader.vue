<template>
  <div class="pseudoHeader">
    <div class="pseudoTitle">
      <div class="placeTitleAndImg">
        <img :src="g">
        <p>Projektaufbau</p>
      </div>
    </div>
    <div class="actualContent">
      <img :src="ablaufgrafik">
    </div>
  </div>
</template>

<script>
import ablaufgrafik from '../../../../assets/ablauf.png';
import g from '../../../../assets/goswoosh.png';

export default {
  name: 'PseudoHeader',
  data() {
    return {
      ablaufgrafik,
      g,
    };
  },
};
</script>

<style scoped>
.pseudoHeader {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
}

.pseudoTitle {
  width: 30%;
  height: 100%;
  background-color: var(--tegodi-green);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Volte", serif;
  font-weight: 200;
  font-size: 3.5rem;
  color: var(--header-text-color);
}

.actualContent {
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.actualContent > img {
  width: auto;
  height: 100%;
}

.placeTitleAndImg {
  width: 80%;
  height: 1ch;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Volte", serif;
  grid-gap: 0.5ch;
}

.placeTitleAndImg > img {
  height: 100%;
  width: auto;
}

@media screen and (max-width: 800px) {
  .pseudoHeader {
    height: auto;
    flex-direction: column;
  }

  .pseudoTitle {
    width: 100%;
    height: 25vh;
  }

  .actualContent > img {
    width: 100%;
    height: auto;
  }
}
</style>
