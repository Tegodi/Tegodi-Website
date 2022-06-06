<template>
  <div class="barWrapper" @click="handleDrawerClicked()">
    <p>menu</p>
  </div>
  <div class="drawerWrapper" ref="animateDrawerTarget">
    <p @click="pushTo('stellen')">{{$t('bar.stellen')}}</p>
    <p @click="pushTo('publikationen')">{{$t('bar.publikationen')}}</p>
  </div>
</template>

<script>
export default {
  name: 'Bar',
  data() {
    return {
      showDrawer: false,
    };
  },
  methods: {
    handleDrawerClicked() {
      this.showDrawer = !this.showDrawer;
      this.$refs.animateDrawerTarget.className = this.showDrawer ? 'drawerWrapper animateIn' : 'drawerWrapper animateOut';
    },
    pushTo(link) {
      this.$router.push(`/${link}`);
    },
  },
};
</script>

<style scoped>
.barWrapper {
  right: 5vh;

  z-index: 6;
  background-color: #c2d500;
  aspect-ratio: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: iconFont, serif;
  font-size: 3rem;
  cursor: pointer;
}

.drawerWrapper {
  top: 10vh;
  z-index: 4;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  height: 10vh;
  width: 100%;
  background-color: var(--light-background);
  transform: translateY(-10vh);
  font-family: "Volte", serif;
}

.drawerWrapper > p {
    cursor: pointer;
}

.animateIn {
  animation: animateDrawerIn 0.5s forwards;
}

.animateOut {
  animation: animateDrawerOut 0.5s forwards;
}

@keyframes animateDrawerIn {
  from {
    transform: translateY(-20vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes animateDrawerOut {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20vh);
  }
}

@media screen and (max-width: 800px) {
  .barWrapper {
    height: 100%;
    aspect-ratio: 1;
    font-size: 2rem;
    top: 3vh;
    right: 3vh;
  }
}
@media screen and (max-width: 900px) and (orientation: landscape) {
  .drawerWrapper {
    top: 15vh;
    height: 15vh;
    transform: translateY(-15vh);
  }
}
</style>
