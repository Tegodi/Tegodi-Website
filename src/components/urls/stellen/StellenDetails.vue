<template>
  <BackButton back-u-r-l="/stellen" chevron-background="#D1E040" chevron-color="var(--header-text-color)" text-background="var(--header-text-color)" text-color="var(--tegodi-green)" :title="$t('headers.jobs')" />
  <div class="imageWrapper">
    <img :src="`/data/job/${$route.params.imageName.replace('[', '').replace(']', '')}`" />
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
.imageWrapper {
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
