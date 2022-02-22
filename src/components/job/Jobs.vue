<template>
  <div v-if="json !== null">
    <JobCard v-for="(item, i) in this.json" :key="i"
             :title="item.title"
             :hourly="item.hourly"
             :text="item.text"/>
  </div>
  <div v-else>
    loading...
  </div>
</template>

<script>
import JobCard from './JobCard.vue';

export default {
  name: 'Jobs',
  components: { JobCard },
  data() {
    return {
      json: null,
    };
  },
  methods: {
    async callJSON() {
      const f = await fetch('http://localhost:8081/demo.json');
      this.json = await f.json();
    },
  },
  created() {
    this.callJSON();
  },
};
</script>

<style scoped>

</style>
