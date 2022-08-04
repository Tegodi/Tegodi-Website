<template>
  <div class="landingTop">
    <img :src="img" class="backgroundImage">
    <div :style="styleForBackground"></div>
    <div ref="cont1" :style="styleForForeground(1)" @click="dummyClick" @mouseenter="setActive(1)">
      <svg :fill="svgFirst" height="296" width="332" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_2_00000173132432743301624340000012314298726338530199_" x="0px" y="0px" viewBox="0 0 114 99.2" style="enable-background:new 0 0 114 99.2;" xml:space="preserve">
        <g>
          <path id="Path_4" class="st0" d="M37.2,63.9c0.1,3.3-2.5,6.1-5.9,6.2c-0.1,0-0.3,0-0.4,0c-3.3,0.2-6.1-2.4-6.3-5.7   c0-0.2,0-0.3,0-0.5V17.3H11.4c-3.1,0.2-5.7-2.2-5.8-5.3c0-0.2,0-0.4,0-0.6c-0.1-3.1,2.2-5.7,5.3-5.8c0.2,0,0.3,0,0.5,0h39.1   c3.1-0.1,5.7,2.3,5.9,5.4c0,0.2,0,0.3,0,0.5c0.2,3.1-2.2,5.7-5.2,5.8c-0.2,0-0.4,0-0.6,0H37.2C37.2,17.3,37.2,63.9,37.2,63.9z"/>
          <path id="Path_5" class="st0" d="M73.6,5.6h30.6c3.1-0.2,5.8,2.2,5.9,5.4c0,0.2,0,0.4,0,0.6c0.2,3.1-2.2,5.7-5.3,5.8   c-0.2,0-0.4,0-0.7,0H80.3v14.2h19.8c3.1-0.1,5.8,2.2,5.9,5.4c0,0.2,0,0.4,0,0.6c0.2,3.1-2.2,5.8-5.3,5.9c-0.2,0-0.4,0-0.6,0H80.3   V58h23.8c3.3,0,5.9,2.7,5.9,5.9s-2.7,5.9-5.9,5.9H73.6c-3.1,0.1-5.7-2.3-5.8-5.5c0-0.2,0-0.3,0-0.4V11.5c-0.2-3.1,2.3-5.8,5.4-5.9   C73.3,5.6,73.4,5.6,73.6,5.6L73.6,5.6z"/>
        </g>
        <rect x="3.7" y="80.7" class="st1" width="108.2" height="23"/>
        <text transform="matrix(1 0 0 1 5.6871 89.0083)" class="st0 st2 st3">Teacher Education</text>
      </svg>
      <div :style="{color: svgFirst}" class="childContent">
        <div class="clickableLink" @click="$router.push('/projektaufbau')">
          <img :src="g"/>
          <p>{{ $t('landing.project') }}</p>
        </div>
      </div>
    </div>
    <div ref="cont2" :style="styleForForeground(2)" @click="dummyClick" @mouseenter="setActive(2)">
      <svg :fill="svgSecond" height="296" width="332" xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 108.22 103.74">
        <defs></defs>
        <g id="Layer_2-2">
          <g>
            <text class="cls-1" transform="translate(40.74 89.01)">
              <tspan x="0" y="0">go</tspan>
              <tspan class="cls-3" x="14.54" y="0">e</tspan>
              <tspan x="21.25" y="0">s</tspan>
            </text>
            <path id="Path_13" class="cls-2" d="M41.19,13.54c1.18,1.31,2.21,2.44,3.21,3.57,9.25,10.41,8.31,26.34-2.09,35.59-10.41,9.25-26.34,8.31-35.59-2.09-.8-.9-1.54-1.87-2.21-2.88C-3.14,36.28-.04,20.79,11.42,13.15c.71-.48,1.45-.91,2.21-1.31C21.49,7.74,29.69,4.36,37.82,.82c4.03-1.75,7.31-.64,9.02,2.57,1.71,3.21,.67,6.25-3.15,8.71-.72,.46-1.48,.85-2.49,1.43Zm-15.57,32.84c6.76-.13,12.23-5.52,12.46-12.28,.07-6.92-5.49-12.58-12.41-12.65-.04,0-.08,0-.12,0-6.82-.03-12.38,5.48-12.41,12.3,0,.14,0,.27,0,.41,.22,6.76,5.71,12.14,12.47,12.22Z"/><path id="Path_14" class="cls-2" d="M107.73,34.11c-.12,13.88-11.48,25.04-25.37,24.91-13.88-.12-25.04-11.48-24.91-25.37,.12-13.88,11.48-25.04,25.37-24.91,13.88,.12,25.04,11.48,24.92,25.37h0Zm-24.94-12.62c-6.89-.07-12.53,5.45-12.6,12.34-.07,6.89,5.45,12.53,12.34,12.6,6.89,.07,12.53-5.45,12.6-12.34,.03-3.27-1.22-6.42-3.49-8.78-2.32-2.41-5.51-3.79-8.86-3.82h0Z"/>
            <path id="Path_15" class="cls-2" d="M25.26,81.25c-9.34-.4-16.7-3.78-21.61-10.7-2.5-3.55-1.83-6.97,1.47-8.59,3.3-1.62,6.44-.63,9.19,2.7,6.34,7.69,15.91,7.71,22.23,0,2.95-3.54,6.34-4.44,9.64-2.54,2.95,1.7,3.55,4.99,1.16,8.34-4.97,7.12-12.49,10.54-22.1,10.8Z"/>
          </g>
        </g>
      </svg>
      <div :style="{color: svgSecond}" class="childContent">
        <div class="clickableLink" @click="$router.push('/helpdesk')">
          <img :src="gg"/>
          <p>{{ $t('landing.helpdesk') }}</p>
        </div>
        <div class="clickableLink" @click="openNewTab('https://colilab.ph-weingarten.de/')">
          <img :src="gg"/>
          <p>Colilab</p>
        </div>
      </div>
    </div>
    <div ref="cont3" :style="styleForForeground(3)" @click="dummyClick" @mouseenter="setActive(3)">
      <svg :fill="svgThird" height="296" width="332" xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 108.22 111.91">
        <defs></defs>
        <g id="Layer_2-2">
          <g>
            <text class="cls-1" transform="translate(36 97.18)">
              <tspan x="0" y="0">digi</tspan>
              <tspan class="cls-3" x="21.2" y="0">t</tspan>
              <tspan x="25.58" y="0">al</tspan>
            </text>
            <path id="Path_11" class="cls-2" d="M21.58,4.37h14.1c19.2,0,32.94,13.29,32.94,31.84s-13.56,31.75-32.48,31.75h-14.56c-1.45,.03-2.85-.58-3.81-1.67-1.01-1.15-1.54-2.65-1.46-4.18V10.23c-.08-1.53,.45-3.03,1.46-4.18,.96-1.09,2.35-1.71,3.81-1.67Zm6.37,51.89h7.73c12.56,0,20.84-7.94,20.84-20.04s-8.28-20.24-20.92-20.24h-7.68l.03,40.28Z"/>
            <path id="Path_12" class="cls-2" d="M87.75,7c.02,3.89-2.87,7.07-6.46,7.1s-6.52-3.11-6.55-7C74.72,3.2,77.61,.03,81.2,0c3.59-.01,6.51,3.12,6.55,7Zm-6.46,60.96c-1.52,.06-2.99-.55-4-1.68-1.07-1.19-1.63-2.75-1.55-4.34V26.14c.16-3.19,2.6-5.69,5.55-5.69s5.38,2.5,5.55,5.69V61.99c.07,1.59-.49,3.14-1.56,4.31-1.01,1.12-2.47,1.73-3.98,1.67Z"/>
          </g>
        </g>
      </svg>
      <div :style="{color: svgThird}" class="childContent">
        <div class="clickableLink" @click="openNewTab('https://www.moopaed.de/moodle/course/view.php?id=10386')">
          <img :src="g"/>
          <p>{{ $t('landing.moopaed') }}</p>
        </div>
        <div class="clickableLink" @click="openNewTab('https://www.moopaed.de/moodle/course/view.php?id=9122')">
          <img :src="g"/>
          <p>{{ $t('landing.moopaed_lehr') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from '../../../assets/homebackground.jpg';
import g from '../../../assets/goswoosh.png';
import gg from '../../../assets/goswoosh_green.png';

export default {
  name: 'Landingpage',
  data() {
    return {
      img,
      g,
      gg,
      currentActive: 2,
      colorGreenGo: '#C2D500',
      colorGreyTe: '#5B6670',
      colorWhiteDi: '#FFFFFF',
      svgFirst: '#FFFFFF',
      svgSecond: '#FFFFFF',
      svgThird: '#FFFFFF',
    };
  },
  methods: {
    setActive(nmbr) {
      this.currentActive = nmbr;
      // eslint-disable-next-line no-plusplus
      if (this.currentActive === 1) {
        this.$refs.cont1.className = 'isActive';
        this.$refs.cont2.className = 'isInactive';
        this.$refs.cont3.className = 'isInactive';
      } else if (this.currentActive === 2) {
        this.$refs.cont2.className = 'isActive';
        this.$refs.cont1.className = 'isInactive';
        this.$refs.cont3.className = 'isInactive';
      } else if (this.currentActive === 3) {
        this.$refs.cont3.className = 'isActive';
        this.$refs.cont2.className = 'isInactive';
        this.$refs.cont1.className = 'isInactive';
      }
      this.styleSVGs();
    },
    styleForForeground(i) {
      let color;
      if (i === 1) {
        color = this.colorGreenGo;
      } else if (i === 2) {
        color = this.colorGreyTe;
      } else {
        color = this.colorWhiteDi;
      }
      return {
        backgroundColor: i === this.currentActive ? color : 'transparent',
        transition: 'background-color 0.3s ease',
      };
    },
    styleSVGs() {
      if (this.currentActive === 1) {
        this.svgFirst = this.colorGreyTe;
        this.svgSecond = this.colorWhiteDi;
        this.svgThird = this.colorWhiteDi;
      } else if (this.currentActive === 2) {
        this.svgFirst = this.colorGreyTe;
        this.svgSecond = this.colorGreenGo;
        this.svgThird = this.colorWhiteDi;
      } else if (this.currentActive === 3) {
        this.svgFirst = this.colorGreyTe;
        this.svgSecond = this.colorGreenGo;
        this.svgThird = this.colorGreyTe;
      }
    },
    openNewTab(link) {
      window.open(link, '_blank')
        .focus();
    },
    dummyClick() {
      console.log('dummy');
    },
  },
  mounted() {
    this.setActive(2);
  },
  computed: {
    styleForBackground() {
      let color;
      if (this.currentActive === 1) {
        color = '#C2D500';
      } else if (this.currentActive === 2) {
        color = '#5B6670';
      } else {
        color = '#FFFFFF';
      }
      return {
        backgroundColor: color,
        position: 'absolute',
        zIndex: -1,
        width: '100vw',
        height: '100%',
        opacity: '50%',
        transition: 'background-color 0.3s ease',
      };
    },
  },
};
</script>

<style scoped>

.st1 {
  fill:none;
}
.st2 {
  font-family: "Volte", serif;
  font-weight: 300;
}
.st3 {
  font-size:12px;
}
.cls-1 {
  font-family: "Volte", serif;
  font-weight: 300;
  font-size:12px;
}
.cls-1, .cls-3 {
  letter-spacing:0em;
}

.clickableLink {
  width: auto;
  height: 3ch;
  display: flex;
  flex-direction: row;
  grid-gap: 1ch;
  align-items: center;
  cursor: pointer;
}

.clickableLink > img {
  height: 1.5ch;
  width: auto;
}

.backgroundImage {
  position: absolute;
  z-index: -2;
}

.landingTop {
  font-family: "Volte", serif;
  font-weight: 300;
  color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
}

.landingTop > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.landingTop > div {
  width: calc(100% / 3);
  height: 100%;
  display: flex;
  grid-gap: 4vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.landingTop > div > img {
  width: 30%;
  height: auto;
}

.childContent {
  font-weight: 300;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  grid-gap: 2ch;
}

.isActive > div {
  display: flex;
  flex-direction: column;
}

.isInactive > div {
  display: none;
}

@media screen and (max-width: 1025px) {
  .landingTop {
    flex-direction: column;
  }

  .landingTop > div {
    width: 100%;
    height: calc(100% / 3);
  }

  .isActive > svg {
    height: 20%;
  }

  .landingTop > div > svg {
    height: 50%;
  }

  .childContent {
    font-size: 1.4rem;
    grid-gap: 0;
  }
}
@media screen and (max-width: 900px) and (orientation: landscape) {
  .landingTop {
    flex-direction: row;
  }
  .landingTop > div {
    width: calc(100% / 3);
    height: 100%;
  }
  .landingTop > div > svg {
    height: 30%;
  }
}
</style>
