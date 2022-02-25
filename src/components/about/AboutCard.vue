<template>
  <div class="abtCard">
    <img class="imgInGrid" :src="image">
    <p class="pInGrid">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutCard',
  props: {
    image: {
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.abtCard {
  width: 500px;
  height: 300px;
  border: 2px solid #c2d500;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.imgInGrid {
  max-width: 100%;
  max-height: 100%;
}

.pInGrid {
  font-family: "Volte", Arial, sans-serif;
  font-weight: 200;
  font-size: 1.5rem;
  width: 100%;
  height: auto;
  padding-top: 1vh;
  background-color: #c2d500;
}
</style>
