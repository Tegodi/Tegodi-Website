<template>
  <div class="cardWrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style scoped>
.cardWrapper {
  font-family: "Opensans", serif;
  background-color: var(--tegodi-green);
  width: calc(30% - 6vh);
  height: min-content;
  padding: 3vh;
  border-radius: 2vh;
  box-shadow: 0px 1px 18px 6px rgba(0,0,0,0.49);
}

@media screen and (max-width: 1025px) {
  .cardWrapper {
    width: 35%;
  }
}

@media screen and (max-width: 819px) {
.cardWrapper {
  width: 100%;
}
}
</style>
