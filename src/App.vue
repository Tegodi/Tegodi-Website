<template>
  <TerminDrawer v-if="$route.fullPath !== '/'"/>
  <router-view></router-view>
  <Footer/>
</template>

<script>
import Footer from './components/permanent/footer/Footer.vue';
import TerminDrawer from './components/permanent/terminDrawer/TerminDrawer.vue';

export default {
  name: 'App',
  components: {
    Footer,
    TerminDrawer,
  },
  methods: {
    async fetchData() {
      const f = await fetch('/termine.json');
      const j = await f.json();
      console.log(j);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>

:root {
  --tegodi-green: #c2d500;
  --header-text-color: #5b6670;
  --light-background: #a3a9af;
}

@font-face {
  font-family: "Volte";
  src: local("VolteRounded"),
  url("../public/fonts/volte/VolteRounded-Bold.otf") format("opentype");
  font-weight: 500;
}

@font-face {
  font-family: "Volte";
  src: local("VolteRounded"),
  url("../public/fonts/volte/VolteRounded-Light.otf") format("opentype");
  font-weight: 100;
}

@font-face {
  font-family: "Volte";
  src: local("VolteRounded"),
  url("../public/fonts/volte/VolteRounded-Medium.otf") format("opentype");
  font-weight: 300;
}

@font-face {
  font-family: "Volte";
  src: local("VolteRounded"),
  url("../public/fonts/volte/VolteRounded-Regular.otf") format("opentype");
  font-weight: 200;
}

@font-face {
  font-family: "Volte";
  src: local("VolteRounded"),
  url("../public/fonts/volte/VolteRounded-Semibold.otf") format("opentype");
  font-weight: 400;
}

@font-face {
  font-family: "Opensans";
  src: local("Opensans"),
  url("../public/fonts/opensans/OpenSans-Light.ttf") format("truetype");
  font-weight: 100;
}

@font-face {
  font-family: "Opensans";
  src: local("Opensans"),
  url("../public/fonts/opensans/OpenSans-Medium.ttf") format("truetype");
  font-weight: 200;
}

@font-face {
  font-family: "Volte";
  src: local("VolteRounded"),
  url("../public/fonts/volte/VolteRounded-Semibold.otf") format("opentype");
  font-weight: 400;
}

@font-face {
  font-family: "iconFont";
  src: url("../public/fonts/icons.woff2") format("woff2");
}

* {
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 0;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--tegodi-green);
}
</style>
