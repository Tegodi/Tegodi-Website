<template>
  <BackButton back-u-r-l="/stellen" chevron-background="#D1E040" chevron-color="var(--header-text-color)" text-background="var(--header-text-color)" text-color="var(--tegodi-green)" :title="$t('headers.jobs')" />
  <div class="imageWrapper">
    <object :data="`/data/job/${$route.params.imageName.replace('[', '').replace(']', '')}`" width="100%" height="100%">
      <div class="center">
        <p class="noPdf">Dieser Browser unterstützt keine eingebetteten PDFs.<a :href="`/data/job/${$route.params.imageName.replace('[', '').replace(']', '')}`" download>Das Dokument steht Ihnen hier zur Verfügung</a></p>
      </div>
    </object>
  </div>
</template>

<script>
import BackButton from '@/components/permanent/shared/BackButton.vue';

export default {
  name: 'StellenDetails',
  components: { BackButton },
};
</script>

<style scoped>
.center {
  width: 100%;
  height: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imageWrapper {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.noPdf {
  display: inline-flex;
  flex-direction: column;
  width: 80vw;
  height: 80vh;
  justify-content: center;
  align-items: center;
  font-family: "Volte", serif;
  grid-gap: 1ch;
}

.noPdf > a {
  color: var(--tegodi-green);
}
</style>
