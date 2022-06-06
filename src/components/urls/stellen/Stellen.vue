<template>
  <BackButton back-u-r-l="/" chevron-background="#D1E040" chevron-color="var(--header-text-color)" text-background="var(--header-text-color)" text-color="var(--tegodi-green)" :title="$t('headers.jobs')" />
  <div class="stellenWrapper">
    <div v-if="hasLoaded" class="stellenCards">
      <Card v-for="(job, index) in jobs" :key="index">
        <h3>{{job.title}}</h3>
        <p style="margin-bottom: 3ch;">Im Bereich <span style="text-decoration: underline">{{job.bereich}}</span></p>
        <p v-if="Object.hasOwn(job, 'details')" class="inlineExternal" @click="$router.push(`/stellen/${job.details}`)">{{$t('stellen.more')}}<ExternalLinkIcon style="width: 2ch"/></p>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/permanent/shared/Card.vue';
import BackButton from '@/components/permanent/shared/BackButton.vue';
import { ExternalLinkIcon } from '@heroicons/vue/outline';

export default {
  name: 'Stellen',
  components: { Card, BackButton, ExternalLinkIcon },
  data() {
    return {
      hasLoaded: false,
      jobs: null,
    };
  },
  async beforeMount() {
    const f = await fetch('/data/job/jobs.json');
    this.jobs = await f.json();
    this.hasLoaded = true;
  },
};
</script>

<style scoped>
.stellenWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh
}

.stellenCards {
  width: calc(100% - 10vh);
  padding: 5vh;
  grid-gap: 5vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

.inlineExternal {
  height: auto;
  display: inline-flex;
  justify-content: center;
  grid-gap: 1ch;
}
</style>
