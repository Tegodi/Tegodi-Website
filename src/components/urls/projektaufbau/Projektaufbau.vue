<template>
  <Dialog :open="isOpen" class="dialogWrapper" @close="closeModal">
    <div class="innerDialog">
      <DialogOverlay class="dialogOverlay" />
      <div class="dialogContent">
        <div style="position:absolute; right: 5vh; top: 5vh; width: 5vh; height: 5vh; cursor: pointer" @click="closeModal" >
          <XIcon style="color: var(--header-text-color)"/>
        </div>
        <div class="imageTextSeparator">
          <div class="chevron chevronLeft" @click="switchCurrent(-1)">
            <ChevronLeftIcon style="color: var(--header-text-color)"/>
          </div>
          <div class="imageDiv">
            <img :src="pt[nowActive - 1]"/>
          </div>
          <div class="textDiv">
            <p>AP{{nowActive}}</p>
            <p class="scrollableTextDiv">{{$t(`project.missionStatement.ap${nowActive}`)}}</p>
          </div>
          <div class="chevron chevronRight" @click="switchCurrent(1)">
            <ChevronRightIcon style="color: var(--header-text-color)"/>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
  <div style="position:absolute;">
    <BackButton back-u-r-l="/" chevron-background="#D1E040" chevron-color="var(--header-text-color)" text-background="var(--tegodi-green)" text-color="var(--header-text-color)" :title="$t('landing.project')" />
  </div>
  <div class="projektaufbauWrapper">
    <div class="svgWrapper">
      <svg :height="getWindowWidth()" :width="getWindowWidth()" fill="none" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect fill="white" height="1200" width="1200"/>
        <rect id="crop 1" fill="url(#pattern0)" height="1200" width="1200"/>
        <circle id="k1" class="svgcircles" cx="685" cy="257" fill="#000000" opacity="0" r="113" @click="openModalWithData(1)"/>
        <image class="svgimg" href="hoverstern.png" x="740" y="130" />
        <circle id="k2" class="svgcircles" cx="934" cy="440" fill="#000000" opacity="0" r="113" @click="openModalWithData(2)"/>
        <circle id="k3" class="svgcircles" cx="931" cy="756" fill="#000000" opacity="0" r="113" @click="openModalWithData(3)"/>
        <circle id="k4" class="svgcircles" cx="676" cy="959" fill="#000000" opacity="0" r="113" @click="openModalWithData(4)"/>
        <circle id="k5" class="svgcircles" cx="370" cy="885" fill="#000000" opacity="0" r="113" @click="openModalWithData(5)"/>
        <circle id="k6" class="svgcircles" cx="238" cy="600" fill="#000000" opacity="0" r="113" @click="openModalWithData(6)"/>
        <circle id="k7" class="svgcircles" cx="381" cy="318" fill="#000000" opacity="0" r="113" @click="openModalWithData(7)"/>
        <defs>
          <pattern id="pattern0" height="1" patternContentUnits="objectBoundingBox" width="1">
            <use transform="scale(0.000833333)" xlink:href="#image0_304_11"/>
          </pattern>
          <image id="image0_304_11" data-name="crop.png" height="1200" width="1200" xlink:href="/crop.png"/>
        </defs>
      </svg>
    </div>
    <div class="vertIframe">
      <VerticalField
        :header="$t('project.vision.header')"
        :margin="0"
        :width="40"
        :width-of-left-border="5"
        background="var(--tegodi-green)">
        <p>{{ $t('project.vision.first') }}</p>
        <p>{{ $t('project.vision.second') }}</p>
      </VerticalField>
      <iframe src="https://prezi.com/p/embed/6gra9zrhuhyh/"
              id="iframe_container"
              frameborder="0"
              webkitallowfullscreen=""
              mozallowfullscreen=""
              allowfullscreen=""
              allow="autoplay; fullscreen">
      </iframe>
    </div>
    <div class="spacer"></div>
  </div>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
} from '@headlessui/vue';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from '@heroicons/vue/solid';
import VerticalField from '../../permanent/shared/VerticalField.vue';
import BackButton from '../../permanent/shared/BackButton.vue';

import pt0 from '../../../assets/projektabschnitte/Projektmanagement.png';
import pt1 from '../../../assets/projektabschnitte/Wissenschaftlich.png';
import pt2 from '../../../assets/projektabschnitte/Kompenzen.png';
import pt3 from '../../../assets/projektabschnitte/Selbst.png';
import pt4 from '../../../assets/projektabschnitte/Lern.png';
import pt5 from '../../../assets/projektabschnitte/Lehrende.png';
import pt6 from '../../../assets/projektabschnitte/Labor.png';

export default {
  name: 'Projektaufbau',
  components: {
    BackButton,
    VerticalField,
    ChevronLeftIcon,
    ChevronRightIcon,
    Dialog,
    DialogOverlay,
    XIcon,
  },
  data() {
    return {
      isOpen: false,
      nowActive: null,
      pt: [pt0, pt1, pt2, pt3, pt4, pt5, pt6],
    };
  },
  methods: {
    openModalWithData(e) {
      this.isOpen = true;
      this.nowActive = e;
    },
    closeModal() {
      this.isOpen = false;
    },
    switchCurrent(x) {
      if (this.nowActive + x > 7) {
        this.nowActive = 1;
      } else if (this.nowActive + x < 1) {
        this.nowActive = 7;
      } else {
        this.nowActive += x;
      }
    },
    getWindowWidth() {
      if (window.innerWidth > 1025) {
        return '550px';
      }
      return `${window.innerWidth * 0.8}px`;
    },
  },
};
</script>

<style scoped>
.svgimg {
  height: 75px;
  width: 75px;
  animation-duration: 2s;
  animation-name: pulse;
  animation-iteration-count: 5;
  transform-origin: 50% 50%;
  transform-box: fill-box;
}

@keyframes pulse {
  0% {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.2, 1.2, 1.2);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}

.svgWrapper {
  margin-top: 15vh;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.projektaufbauWrapper {
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 5vh;
}

.svgcircles {
  cursor: pointer;
}

.imageTextSeparator {
  padding: 5vh;
  display: grid;
  width: calc(100% - 10vh);
  height: calc(100% - 10vh);
  grid-template-rows: 100%;
  grid-template-columns: 10% 30% 50% 10%;
}

.dialogWrapper {
  position: fixed;
  inset: 0;
  overflow-y: auto;
}

.innerDialog {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
}

.dialogContent {
  position: absolute;
  width: 80vw;
  top: calc(50% - 35vh);
  height: 70vh;
  background-color: var(--tegodi-green);
  border-radius: 20px;
  z-index: 999999999;
}

.dialogOverlay {
  position: fixed;
  inset: 0;
  background-color: black;
  opacity: 30%;
  z-index: 999999998;
}

.chevron {
  display: flex;
  align-items: center;
}

.chevron > * {
  width: 50%;
  cursor: pointer;
}

.chevronLeft {
  justify-content: flex-start;
}

.chevronRight {
  justify-content: flex-end;
}

.imageDiv {
  width: 100%;
  height: 100%;
}

.imageDiv > img {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: auto;
}

.textDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 5vh;
  width: 100%;
}
.textDiv > p:nth-child(1) {
  font-family: "Volte", serif;
  font-weight: normal;
}
.scrollableTextDiv {
  width: 80%;
  font-family: "Opensans", serif;
  font-weight: normal;
  overflow-y: scroll;
  overflow-x: hidden;
}

.spacer {
  width: 10vh;
}

.vertIframe {
  width: 100vw;
  display: flex;
  flex-direction: row;
  grid-gap: 5vw;
  justify-content: space-evenly;
}

.vertIframe > iframe {
  width: 40vw;
}

@media screen and (max-width: 1025px) {
  .vertIframe {
    flex-direction: column;
    margin-bottom: 5vh;
    grid-gap: 0;
  }

  .vertIframe > iframe {
    width: calc(100vw - 6vh);
    height: 40vh;
    padding: 0 3vh;
  }

  .projektaufbauWrapper {
    grid-gap: 0;
  }

  .svgWrapper {
    margin-top: 10vh;
    width: 100%;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dialogContent {
    height: 90%;
    width: 90%;
    top: calc(50% - 45vh);
  }
  .imageTextSeparator {
    padding: 5vh;
    display: grid;
    width: calc(100% - 10vh);
    height: calc(100% - 10vh);
    grid-template-rows: 40% 60%;
    grid-template-columns: 10% 80% 10%;
  }
  .chevronLeft {
    grid-row: 1 /span 2;
    grid-column: 1;
  }
  .chevronRight {
    grid-row: 1 /span 2;
    grid-column: 3;
  }
  .imageDiv {
    grid-row: 1;
    grid-column: 2;
    display: flex;
    justify-content: center;
  }
  .imageDiv > img {
    position: relative;
    width: auto;
    height: 70%;
  }
  .textDiv {
    grid-row: 2;
    grid-column: 2;
    display: flex;
    flex-direction: column;
    grid-gap: 5%;
  }
  .textDiv > p:nth-child(1) {
    display: inline-flex;
    justify-content: center;
    height: 10%;
  }
  .scrollableTextDiv {
    display: inline-block;
    width: 100%;
    height: 85%;
  }
}
@media screen and (max-width: 900px) and (orientation: landscape) {
  .vertIframe > iframe {
    width: calc(100vw - 20vh);
    height: 80vh;
    padding: 0 10vh;
  }
}
</style>
