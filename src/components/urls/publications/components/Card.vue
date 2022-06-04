<template>
  <div class="cardWrapper">
    <p>{{info.author}} ({{info.jahr}}). {{info.base}}
      <span style="font-style: italic">{{info.title}}.</span>
      {{info.release}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.cardWrapper {
  background-color: #5b6670;
  width: calc(30% - 6vh);
  height: min-content;
  padding: 3vh;
  border-radius: 2vh;
}
</style>
