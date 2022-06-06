<template>
  <div class="backButton">
    <div :style="{backgroundColor: chevronBackground, color: chevronColor}" class="backChevron" @click="back()">
      <ChevronLeftIcon class="actualChevron"/>
    </div>
    <div :style="{backgroundColor: textBackground, color: textColor}" class="locationTag">
      <p>{{ title }}</p>
    </div>
    <Bar />
  </div>
</template>

<script>
import Bar from '@/components/permanent/navbar/Bar.vue';
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
  components: { ChevronLeftIcon, Bar },
  methods: {
    back() {
      if (this.backURL !== null) {
        this.$router.push(this.backURL);
      } else {
        this.$router.go(-1);
      }
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
  z-index: 6;
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
}

.backChevron {
  z-index: 6;
  height: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.locationTag {
  z-index: 6;
  flex-grow: 1;
  height: 100%;
  background-color: #888888;
  font-family: "Volte", serif;
  font-size: 3rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1vh;
  padding-right: 1vh;
}

@media screen and (max-width: 1025px) {
  .locationTag {
    font-size: 2rem;
    flex-grow: 1;
  }
  .backButton {
    z-index: 4;
    width: 100vw !important;
  }
}
@media screen and (max-width: 900px) and (orientation: landscape) {
  .backButton {
    height: 15vh;
  }
}
</style>
