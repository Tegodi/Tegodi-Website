<template>
  <div class="absTop">
    <Bar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Bar from './components/navbar/Bar.vue';
import Footer from './components/footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Bar,
  },
};
</script>

<style>
@font-face {
  font-family: "Volte";
  src: local("VolteRounded"), url("../public/fonts/VolteRounded-Bold.otf") format("opentype");
  font-weight: 500;
}

@font-face {
  font-family: "Volte";
  src: local("VolteRounded"), url("../public/fonts/VolteRounded-Light.otf") format("opentype");
  font-weight: 100;
}

@font-face {
  font-family: "Volte";
  src: local("VolteRounded"), url("../public/fonts/VolteRounded-Medium.otf") format("opentype");
  font-weight: 300;
}

@font-face {
  font-family: "Volte";
  src: local("VolteRounded"), url("../public/fonts/VolteRounded-Regular.otf") format("opentype");
  font-weight: 200;
}

@font-face {
  font-family: "Volte";
  src: local("VolteRounded"), url("../public/fonts/VolteRounded-Semibold.otf") format("opentype");
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

.overflowManager > div {
  padding-top: 5vh;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
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
  background: #c2d500;
}
</style>
