<template>
  <div class="terminDrawerWrapper" :class="getClasses()">
    <div class="clickToExpand" @click="toggleDrawer()"></div>
    <div class="terminContent">
      <div class="innerTermin">
        <h2>Termine</h2>
        <div v-for="(termin, i) in termine" :key="i" class="terminFeld">
          <p>{{ termin.date }}</p>
          <span v-html="termin.text"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'TerminDrawer',
  data() {
    return {
      drawerIsIn: false,
      firstClick: false,
      termine: [
        {
          date: 'Präsentation, 13.01.2022',
          text: '<p>Hallo, ich bin ein toller viel zu langer text, <br/> der definitiv overflowen wird</p>',
        },
        {
          date: 'Präsentation, 13.01.2022',
          text: '<p>Hallo, ich bin ein toller viel zu langer text, <br/> der definitiv overflowen wird</p>',
        },
        {
          date: 'Präsentation, 13.01.2022',
          text: '<p>Hallo, ich bin ein toller viel zu langer text, <br/> der definitiv overflowen wird</p>',
        },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      if (this.firstClick === false) {
        this.firstClick = true;
      }

      this.drawerIsIn = !this.drawerIsIn;
    },
    getClasses() {
      if (this.firstClick === false) {
        return '';
      }

      return this.drawerIsIn ? 'drawIn' : 'drawOut';
    },
  },
};
</script>

<style scoped>
.terminDrawerWrapper {
  position: fixed;
  z-index: 5;
  right: 0;
  top: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  transform: translateX(15.3vw);
}

.innerTermin {
  padding: 1vh;
}

.drawIn {
  animation: animateDateIn 0.5s forwards;
}

.drawOut {
  animation: animateDateOut 0.5s forwards;
}

@keyframes animateDateIn {
  from {
    transform: translateX(15.3vw);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes animateDateOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(15.3vw);
  }
}
.clickToExpand {
  width: 5vh;
  height: 7vh;
  background: white;
  border-radius: 1vh 0 0 1vh;
  border-left: 3px solid #141414;
  border-bottom: 3px solid #141414;
  border-top: 3px solid #141414;
}

.terminContent {
  width: 15vw;
  min-height: 20vh;
  background: white;
  border-radius: 1vh 0 0 1vh;
  border-left: 3px solid #141414;
  border-bottom: 3px solid #141414;
  border-top: 3px solid #141414;
}
</style>
