<template>
  <div class="barWrapper" @click="handleDrawerClicked()">
    <p>menu</p>
  </div>
  <div class="drawerWrapper" ref="animateDrawerTarget">
    <p>text</p>
    <p>text</p>
    <p>text</p>
    <p>text</p>
    <p style="font-family: iconFont, serif" @click="handleDrawerClicked()">arrow_forward</p>
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
  },
};
</script>

<style scoped>
.barWrapper {
  top: 5vh;
  right: 5vh;

  width: 10vh;
  height: 10vh;
  position: fixed;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: iconFont, serif;
  font-size: 3rem;
  cursor: pointer;
}

.drawerWrapper {
  display: block;
  position: fixed;
  height: 20vh;
  width: 100%;
  background-color: aqua;
  transform: translateY(-20vh);
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
    width: 5vh;
    height: 5vh;
    font-size: 2rem;
    top: 3vh;
    right: 3vh;
  }
}
</style>
