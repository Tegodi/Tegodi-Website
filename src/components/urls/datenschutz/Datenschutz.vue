<template>
  <BackButton back-u-r-l="/" chevron-background="var(--light-background)" chevron-color="var(--tegodi-green)" text-background="var(--header-text-color)" text-color="var(--tegodi-green)" :title="$t('footer.imprint')" />
  <div class="iframeWrapper">
    <object height="100%" data="/tegodi_datenschutz.pdf" width="100%">
      <p class="noPdf">Dieser Browser unterstützt keine eingebetteten PDFs.<a href="/tegodi_datenschutz.pdf" download>Das Dokument steht Ihnen hier zur Verfügung</a></p>
    </object>
  </div>
</template>

<script>
import BackButton from '@/components/permanent/shared/BackButton.vue';

export default {
  name: 'Datenschutz',
  components: { BackButton },
};
</script>

<style scoped>
.noPdf {
  display: inline-flex;
  width: 100vw;
  height: 80vh;
  justify-content: center;
  align-items: center;
  font-family: "Volte", serif;
  grid-gap: 1ch;
}

.noPdf > a {
  color: var(--tegodi-green);
}

.iframeWrapper {
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
