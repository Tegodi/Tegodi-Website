<template>
  <div :class="getClasses()" class="terminDrawerWrapper">
    <div class="clickToExpand" @click="toggleDrawer()">
      <ChevronLeftIcon :class="drawerIsIn ? 'rotateIn' : 'rotateOut'" />
    </div>
    <div class="terminContent">
      <div class="innerTermin">
        <h2 style="margin-bottom: 3vh">{{$t('headers.termine')}}</h2>
        <div v-for="(termin, i) in termine" :key="i" class="terminFeld">
          <p class="terminTitle">{{ termin.termin }}</p>
          <p>{{ termin.am }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { ChevronLeftIcon } from '@heroicons/vue/solid';

export default {
  name: 'TerminDrawer',
  components: { ChevronLeftIcon },
  data() {
    return {
      drawerIsIn: false,
      firstClick: false,
      termine: [],
    };
  },
  async mounted() {
    const f = await fetch('/termine.json');
    this.termine = await f.json();
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
  z-index: 99;
  right: 0;
  top: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  transform: translateX(15.3vw);
}

.innerTermin {
  padding: 1vh;
  font-family: "Opensans", serif;
}

.drawIn {
  animation: animateDateIn 0.5s forwards;
}

.drawOut {
  animation: animateDateOut 0.5s forwards;
}

.rotateIn {
  animation: rotateIn 0.5s forwards;
}

.rotateOut {
  animation: rotateOut 0.5s forwards;
}

.terminFeld {
  margin-bottom: 2vh;
}

.terminTitle {
  text-decoration: #141414 underline;
  margin-bottom: 0.5vh;
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

@keyframes rotateIn {
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(180deg);
  }
}

@keyframes rotateOut {
  from {
    transform: rotateZ(180deg);
  }
  to {
    transform: rotateZ(0);
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
  display: flex;
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

@media screen and (max-width: 1025px) {
  .terminContent {
    width: 70vw;
  }

  .terminDrawerWrapper {
    transform: translateX(70.3vw);
  }

  @keyframes animateDateIn {
    from {
      transform: translateX(70.3vw);
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
      transform: translateX(70.3vw);
    }
  }
}
</style>
