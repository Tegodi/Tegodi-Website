<template>
  <div class="jobcardwrapper">
    <h1>{{this.title}}</h1>
    <p>{{this.text}}</p>
    <h3>{{this.hourly}}€</h3>
  </div>
</template>

<script>
export default {
  name: 'JobCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    hourly: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.jobcardwrapper {
  width: 10vw;
  height: auto;
  background-color: beige;
  border-radius: 2vh;
  margin: 2vh;
  padding: 2vh;
}

.jobcardwrapper > h3 {
  margin-top: 1vh;
}
</style>
