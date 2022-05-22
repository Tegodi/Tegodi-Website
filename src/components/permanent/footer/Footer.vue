<template>
  <div class="footerTop">
    <div class="footerThirds flexFooters" style="background-color: #d1e040">
      <p>{{ $t('footer.imprint') }}</p>
      <p style="cursor: pointer" @click="$router.push('/datenschutz')">{{ $t('footer.data') }}</p>
    </div>
    <div class="footerThirds" style="background-color: #848c94">
      <div id="language">
        <p :style="{textDecoration: checkLanguage('de') ? 'underline black' : 'none'}" style="cursor: pointer" @click="toggleLanguage('de')">{{ $t('footer.de') }}</p>
        <p>|</p>
        <p :style="{textDecoration: checkLanguage('en') ? 'underline black' : 'none'}" style="cursor: pointer" @click="toggleLanguage('en')">{{ $t('footer.en') }}</p>
      </div>
    </div>
    <div id="logosponsor" class="footerThirds flexFooters" style="background-color: white">
      <img :src="$root.$i18n.locale === 'de' ? bmbf : bmbfen">
      <img :src="coli">
      <img :src="ph">
    </div>
  </div>
</template>

<script>
import bmbfen from '../../../assets/foerderung/BMBF_gefoerdert_2017_en.jpg';
import bmbf from '../../../assets/foerderung/BMBF_gefördert vom_deutsch.jpg';
import coli from '../../../assets/foerderung/logo-colilab-white-ph.png';
import ph from '../../../assets/foerderung/PH-Signet-4c_mit_Rand.jpg';

export default {
  name: 'Footer',
  data() {
    return {
      bmbfen,
      bmbf,
      coli,
      ph,
    };
  },
  methods: {
    toggleLanguage(lang) {
      this.$root.$i18n.locale = lang;
    },
    checkLanguage(lang) {
      return this.$root.$i18n.locale === lang;
    },
  },
};
</script>

<style scoped>
#language {
  width: 30%;
  height: 100%;
  margin: auto;
  font-family: 'Volte', serif;
  font-weight: 300;
  display: flex;
  align-items: center;
  grid-gap: 2ch;
  justify-content: space-evenly;
}

.footerTop {
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
}

.footerThirds {
  width: calc(100% / 3);
  height: 100%;
}

.flexFooters {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Volte", serif;
  font-weight: 200;
  font-size: 1.0rem;
}

#logosponsor > img {
  width: auto;
  height: 100%;
}

@media screen and (max-width: 1025px) {
  .footerTop {
    flex-direction: column;
    height: 24vh;
    width: 100% !important;
    overflow: hidden;
  }

  .footerThirds {
    width: 100%;
    height: 8vh;
  }

  .logosponsor > img {
    width: auto;
    height: 90%;
  }

}
</style>
