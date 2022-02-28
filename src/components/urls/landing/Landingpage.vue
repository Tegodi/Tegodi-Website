<template>
  <div class="landingTop">
    <img class="backgroundImage" :src="getCorrectImage()">
    <div @mouseenter="setActive(1)" ref="cont1">
      <h1>Te</h1>
      <div class="childContent">
        <p>Projektaufbau</p>
        <p>Teilaufbau</p>
      </div>
    </div>
    <div @mouseenter="setActive(2)" ref="cont2">
      <h1>go</h1>
      <div class="childContent">
        <p>Produkte</p>
        <p>Services</p>
      </div>
    </div>
    <div @mouseenter="setActive(3)" ref="cont3">
      <h1>DI</h1>
      <div class="childContent">
        <p>Irgendwas</p>
        <p>vergessen</p>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '../../../assets/bimg1.jpg';
import img2 from '../../../assets/bimg2.jpg';
import img3 from '../../../assets/bimg3.jpg';

export default {
  name: 'Landingpage',
  data() {
    return {
      img1,
      img2,
      img3,
      currentActive: 2,
    };
  },
  methods: {
    getCorrectImage() {
      if (this.currentActive === 1) {
        return this.img1;
      }
      if (this.currentActive === 2) {
        return this.img2;
      }
      return this.img3;
    },
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
  },
  mounted() {
    this.setActive(2);
  },
};
</script>

<style scoped>
.backgroundImage {
  position: absolute;
  z-index: -1;
}

.landingTop {
  font-family: "Volte", serif;
  font-weight: 300;
  color: white;
  width: 100%;
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

.childContent {
  font-weight: 100;
  font-size: 2rem;
}

.isActive {
  background-color: #c2d500;
}

.isActive > div {
  display: flex;
  flex-direction: column;
}

.isInactive {
  background-color: transparent;
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
