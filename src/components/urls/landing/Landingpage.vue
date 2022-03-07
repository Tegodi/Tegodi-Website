<template>
  <div class="landingTop">
    <img class="backgroundImage" :src="img">
    <div :style="styleForBackground"></div>
    <div :style="styleForForeground(1)" @mouseenter="setActive(1)" ref="cont1">
      <svg xmlns="http://www.w3.org/2000/svg" width="313" height="297.149" viewBox="0 0 313 297.149" class="svgs">
        <g id="Ebene_2" data-name="Ebene 2" transform="translate(101.691 118.812)">
          <g id="Ebene_1" data-name="Ebene 1">
            <text id="Teacher_Education" data-name="Teacher Education" transform="translate(-101.691 169.337)" fill="#5b6670" font-size="36" font-family="SegoeUI, Segoe UI" letter-spacing="-0.03em"><tspan x="0" y="0">T</tspan><tspan y="0" letter-spacing="0.05em">eacher Edu</tspan><tspan y="0" letter-spacing="0.03em">c</tspan><tspan y="0" letter-spacing="0.05em">ation</tspan></text>
            <path id="Pfad_4" data-name="Pfad 4" d="M94.349,178.541a17.975,17.975,0,0,1-18.731,18.507,17.947,17.947,0,0,1-18.787-18.507V39.724H17.325A16.519,16.519,0,0,1,.022,22.169,16.6,16.6,0,0,1,17.325,4.81H133.743a16.8,16.8,0,0,1,17.471,17.611,16.463,16.463,0,0,1-17.331,17.3H94.349Z" transform="translate(-101.679 -123.601)" fill="#5b6670"/>
            <path id="Pfad_5" data-name="Pfad 5" d="M83.526,4.813h91.051a16.8,16.8,0,0,1,17.611,17.611,16.519,16.519,0,0,1-17.611,17.3h-71.06v42.39h59.105a16.8,16.8,0,0,1,17.611,17.611,16.8,16.8,0,0,1-17.611,17.639H103.517v43.566h71.06a17.611,17.611,0,1,1,0,35.222H83.526a16.8,16.8,0,0,1-17.3-17.611V22.424a16.8,16.8,0,0,1,17.3-17.611Z" transform="translate(17.498 -123.605)" fill="#5b6670"/>
          </g>
        </g>
      </svg>
      <div class="childContent">
        <p>Projektaufbau</p>
        <p>Teilaufbau</p>
      </div>
    </div>
    <div :style="styleForForeground(2)" @mouseenter="setActive(2)" ref="cont2">
      <svg xmlns="http://www.w3.org/2000/svg" width="281.252" height="261.304" viewBox="0 0 281.252 261.304" class="svgs">
        <g id="Ebene_2" data-name="Ebene 2" transform="translate(-106.886 -115.269)">
          <g id="Ebene_1" data-name="Ebene 1" transform="translate(73 205)">
            <text id="goes" transform="translate(150.012 162.573)" fill="#c2d500" font-size="36" font-family="SegoeUI, Segoe UI" letter-spacing="0.05em"><tspan x="0" y="0">go</tspan><tspan y="0" letter-spacing="0.04em">e</tspan><tspan y="0">s</tspan></text>
            <path id="Pfad_13" data-name="Pfad 13" d="M226.836,40.73c3.086,3.42,5.786,6.377,8.408,9.36a66.008,66.008,0,1,1-104.45,80.176,65.313,65.313,0,0,1,23.888-94.01c20.571-10.723,42.042-19.568,63.333-28.825,10.543-4.577,19.131-1.671,23.605,6.737s1.749,16.354-8.254,22.808C231.49,38.184,229.484,39.212,226.836,40.73Zm-40.757,85.987A33.274,33.274,0,0,0,218.71,94.575,32.811,32.811,0,0,0,185.9,61.455a32.348,32.348,0,0,0-32.477,33.274A33.042,33.042,0,0,0,186.079,126.717Z" transform="translate(-85.937 -95.001)" fill="#c2d500"/>
            <path id="Pfad_14" data-name="Pfad 14" d="M309.657,80.591a65.83,65.83,0,1,1-65.236-66.419,65.83,65.83,0,0,1,65.236,66.419ZM244.344,47.548A32.657,32.657,0,1,0,267.53,57.555a32.631,32.631,0,0,0-23.187-10.006Z" transform="translate(5.479 -81.018)" fill="#c2d500"/>
            <path id="Pfad_15" data-name="Pfad 15" d="M182.214,120.177c-24.454-1.054-43.714-9.9-56.571-28.028-6.557-9.308-4.783-18.257,3.857-22.5S146.368,68,153.568,76.721c16.611,20.134,41.657,20.185,58.216,0,7.714-9.257,16.611-11.623,25.251-6.66,7.714,4.449,9.283,13.063,3.034,21.831C227.059,110.535,207.362,119.483,182.214,120.177Z" transform="translate(-83.023 2.823)" fill="#c2d500"/>
          </g>
        </g>
      </svg>
      <div class="childContent">
        <p>Produkte</p>
        <p>Services</p>
      </div>
    </div>
    <div :style="styleForForeground(3)" @mouseenter="setActive(3)" ref="cont3">
      <svg xmlns="http://www.w3.org/2000/svg" width="228.051" height="323.482" viewBox="0 0 228.051 323.482" class="svgs">
        <g id="Ebene_1" data-name="Ebene 1" transform="translate(-134.993 143.541)">
          <text id="Digital" transform="translate(200.53 170.941)" fill="#5b6670" font-size="36" font-family="SegoeUI, Segoe UI" letter-spacing="0.05em"><tspan x="0" y="0">Digi</tspan><tspan y="0" letter-spacing="0.02em">t</tspan><tspan y="0">al</tspan></text>
          <path id="Pfad_11" data-name="Pfad 11" d="M256.82,4.805h45c61.291,0,105.147,42.417,105.147,101.647S363.683,207.8,303.291,207.8H256.82a15.667,15.667,0,0,1-12.15-5.334,18.751,18.751,0,0,1-4.657-13.35V23.489a18.751,18.751,0,0,1,4.657-13.35,15.667,15.667,0,0,1,12.15-5.334Zm20.321,165.629h24.68c40.1,0,66.521-25.337,66.521-63.982s-26.423-64.606-66.793-64.606H277.032Z" transform="translate(-105 -134.387)" fill="#5b6670"/>
          <path id="Pfad_12" data-name="Pfad 12" d="M355.424,22.356c.075,12.428-9.157,22.569-20.62,22.65s-20.817-9.927-20.893-22.355S323.067.082,334.531,0c11.445-.033,20.773,9.948,20.893,22.356ZM334.8,216.943a16.252,16.252,0,0,1-12.772-5.371,19.242,19.242,0,0,1-4.934-13.855V83.428c.522-10.188,8.294-18.16,17.706-18.16s17.184,7.972,17.706,18.16V197.865a19.226,19.226,0,0,1-4.986,13.757A16.247,16.247,0,0,1,334.8,216.943Z" transform="translate(7.62 -143.541)" fill="#5b6670"/>
        </g>
      </svg>

      <div class="childContent">
        <p>Irgendwas</p>
        <p>vergessen</p>
      </div>
    </div>
  </div>
</template>

<script>
import img from '../../../assets/homebackground.jpg';

export default {
  name: 'Landingpage',
  data() {
    return {
      img,
      currentActive: 2,
      colorGreenGo: '#C2D500',
      colorGreyTe: '#5B6670',
      colorWhiteDi: '#FFFFFF',
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
  font-weight: 100;
  font-size: 2rem;
}

.isActive > div {
  display: flex;
  flex-direction: column;
}

.isInactive > div {
  display: none;
}

@media screen and (max-width: 800px) {
  .landingTop {
    flex-direction: column;
  }

  .landingTop > div {
    width: 100%;
    height: calc(100% / 3);
  }
}
</style>
