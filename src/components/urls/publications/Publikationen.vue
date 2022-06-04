<template>
  <BackButton back-u-r-l="/" chevron-background="#D1E040" chevron-color="var(--header-text-color)" text-background="var(--tegodi-green)" text-color="var(--header-text-color)" title="Publikationen" />
  <div class="pubWrapper">
    <div v-if="hasLoaded" class="pubCards">
      <Card v-for="(info, i) in dataString" :info="info" :key="i"/>
    </div>
  </div>
</template>

<script>
import Card from '@/components/urls/publications/components/Card.vue';
import BackButton from '@/components/permanent/shared/BackButton.vue';

export default {
  name: 'Publikationen',
  components: { BackButton, Card },
  data() {
    return {
      hasLoaded: false,
      dataString: null,
    };
  },
  async beforeMount() {
    const f = await fetch('/data/pub/publications.json');
    this.dataString = await f.json();
    this.hasLoaded = true;
  },
};
</script>

<style scoped>
.pubWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh
}

.pubCards {
  width: calc(100% - 10vh);
  padding: 5vh;
  grid-gap: 5vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
</style>
