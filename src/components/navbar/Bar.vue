<template>
  <div class="barTop">
    <div v-if="!isNowMobile">
      <div class="navbar">
        <div class="navbarItem">
          <div class="specialCuzFirst">
            <img :src="logo" alt="logo">
          </div>
        </div>
        <div class="navbarItem" @click="routeTo('/project1')">
          <div class="placeRoute" id="p1Id">
            <p>Projekt 1</p>
            <img :src="swoosh" alt="swoosh" id="swooshP1">
          </div>
        </div>
        <div class="navbarItem" @click="routeTo('/project2')">
          <div class="placeRoute" id="p2Id">
            <p>Projekt 2</p>
            <img :src="swoosh" alt="swoosh" id="swooshP2">
          </div>
        </div>
        <div class="navbarItem" @click="routeTo('/publication')">
          <div class="placeRoute" id="publication">
            <p>Publikationen 1</p>
            <img :src="swoosh" alt="swoosh" id="swooshPub">
          </div>
        </div>
        <div class="navbarItem" @click="routeTo('/jobs')">
          <div class="placeRoute" id="jobs">
            <p>Jobs</p>
            <img :src="swoosh" alt="swoosh" id="swooshJobs">
          </div>
        </div>
      </div>
    </div>
    <div v-else class="navbar">
      <div class="mobileTopDivs">
        <img :src="logo" alt="Logo">
      </div>
      <div class="mobileTopDivs" id="burgerMenu">
        <p style="font-family: iconFont,serif" @click="flipDrawer">menu</p>
      </div>
    </div>
    <div class="drawerDiv animateDrawerClassOut" ref="drawerDivToToggle" v-if="isNowMobile">
      <div id="closeDrawerArrow">
        <p
          @click="flipDrawer"
          style="font-family: iconFont,serif">
          arrow_forward
        </p>
      </div>
      <div class="menuPointsInDrawer">
        <p>Projekt 1</p>
        <p>Projekt 2</p>
        <p>Publikationen</p>
        <p>Jobs</p>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../../assets/tegodilogo.png';
import swoosh from '../../assets/swoosh.png';

export default {
  name: 'Bar',
  data() {
    return {
      logo,
      swoosh,
      isNowMobile: false,
      showDrawer: false,
    };
  },
  methods: {
    handleResize() {
      this.isNowMobile = window.innerWidth < 900;
    },
    routeTo(url) {
      this.$router.push(url);
    },
    flipDrawer() {
      this.$refs.drawerDivToToggle.className = this.showDrawer ? 'drawerDiv animateDrawerClassIn' : 'drawerDiv animateDrawerClassOut';
      this.showDrawer = !this.showDrawer;
    },
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>

.barTop {
  height: 13vh;
}

.navbar {
  font-family: "Volte", Arial, sans-serif;
  font-weight: 300;

  overflow: hidden;
  background-color: white;
  z-index: 2;
  position: fixed;
  width: 100%;
  height: 13vh;
  display: flex;
  flex-direction: row;
  box-shadow: 0 5px 5px #7a7a7a;
}

.navbarItem {
  width: 20%;
  height: 100%;
  cursor: pointer;
}

.placeRoute {
  margin: 2vh;
  height: calc(100% - 4vh);
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#swooshP1, #swooshP2, #swooshPub, #swooshJobs {
  position: absolute;
  width: auto;
  height: 2vh;
  opacity: 0;
  transition: all 0.5s ease;
  transform: translateY(3vh);
}

.specialCuzFirst {
  margin: 2vh;
  width: calc(100% - 4vh);
  height: calc(100% - 4vh);
  display: flex;
  align-items: center;
}

.specialCuzFirst > img {
  max-width: 100%;
  max-height: 100%;
}

#p1Id, #p2Id, #publication, #jobs {
  transition: all 0.5s ease;
}

#p1Id:hover, #p2Id:hover, #publication:hover, #jobs:hover {
  transform: translateY(-20%);
}

#p1Id:hover > #swooshP1, #p2Id:hover > #swooshP2,
#publication:hover > #swooshPub, #jobs:hover > #swooshJobs {
  opacity: 100%;
}

@media only screen and (max-width: 900px) and (orientation: portrait) {
  .navbar {
    justify-content: space-between;
    grid-gap: 20%;
  }

  .mobileTopDivs {
    width: calc(40% - 4vh);
    height: calc(100% - 4vh);
    display: flex;
    align-items: center;
    margin: 2vh;
  }

  .mobileTopDivs > img {
    max-width: 100%;
    max-height: 100%;
  }

  #burgerMenu {
    justify-content: flex-end;
    font-size: 3rem;
  }

  .drawerDiv {
    right: 0;
    z-index: 3;
    position: fixed;
    height: 100vh;
    width: 40vw;
    background-color: #c2d500;
    box-shadow: -5px 0 5px #7a7a7a;
  }

  .animateDrawerClassIn {
    animation: animateDrawerIn 0.5s forwards;
  }

  .animateDrawerClassOut {
    animation: animateDrawerOut 0.5s forwards;

  }

  @keyframes animateDrawerIn {
    from {
      transform: translateX(40vw);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes animateDrawerOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(40vw);
    }
  }

  .menuPointsInDrawer {
    margin: 2vh;
    font-family: "Volte", Arial, sans-serif;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    grid-gap: 3vh;
  }

  #closeDrawerArrow {
    display: flex;
    justify-content: flex-end;
    font-size: 3rem;
    margin: 4vh 2vh 5vh;
  }
}

</style>
