<template>
  <div class="backButton">
    <div class="backChevron" @click="back()" :style="{backgroundColor: chevronBackground, color: chevronColor}">
      <ChevronLeftIcon class="actualChevron"/>
    </div>
    <div class="locationTag" :style="{backgroundColor: textBackground, color: textColor}">
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon } from '@heroicons/vue/solid';

export default {
  name: 'BackButton',
  props: {
    title: {
      type: String,
      required: true,
    },
    backURL: {
      type: String,
      required: true,
    },
    chevronBackground: {
      type: String,
      required: true,
    },
    chevronColor: {
      type: String,
      required: true,
    },
    textBackground: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: true,
    },
  },
  components: { ChevronLeftIcon },
  methods: {
    back() {
      this.$router.push(this.backURL);
    },
  },
};
</script>

<style scoped>
.actualChevron {
  width: 70%;
  height: auto;
}

.backButton {
  width: 25vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
}

.backChevron {
  height: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.locationTag {
  flex-grow: 1;
  height: 100%;
  background-color: #888888;
  font-family: "Volte", serif;
  font-size: 3rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
