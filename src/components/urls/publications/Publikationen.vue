<template>
  <BackButton :back-u-r-l="null" chevron-background="#D1E040" chevron-color="var(--header-text-color)" text-background="var(--header-text-color)" text-color="var(--tegodi-green)" :title="$t('headers.publication')" />
  <div class="pubWrapper">
    <div v-if="hasLoaded" class="pubCards">
      <Card v-for="(info, i) in dataString" :info="info" :key="i" @click="moveTo(info.link)" style="cursor: pointer">
          <p>{{info.author}} ({{info.jahr}}). {{info.base}}
            <span style="font-style: italic; text-decoration: underline">{{info.title}}.</span>
            {{info.release}}
          </p>
          <p v-if="Object.hasOwn(info, 'linktext')" class="mt">{{info.linktext}}</p>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/permanent/shared/Card.vue';
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
    const f = await fetch('/data/pub/publications.json', {
      cache: 'no-cache',
    });
    this.dataString = await f.json();
    this.hasLoaded = true;
  },
  methods: {
    moveTo(url) {
      window.open(url, '_blank')
        .focus();
    },
  },
};
</script>

<style scoped>
.mt {
  margin-top: 3vh;
  font-size: 13px;
}

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
