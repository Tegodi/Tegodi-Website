<template>
  <div class="impressumWrapper">
    <BackButton back-u-r-l="/" chevron-background="var(--light-background)" chevron-color="var(--tegodi-green)" text-background="var(--header-text-color)" text-color="var(--tegodi-green)" :title="$t('footer.imprint')" />
    <div class="impressumTexts">
      <p>{{$t('actualImprint.pre')}}</p>
      <p>{{$t('actualImprint.presence')}}</p>
      <p v-html="$t('actualImprint.address')"/>
      <p v-html="$t('actualImprint.mail')"/>
      <p v-html="$t('actualImprint.phone')"/>
      <p v-html="$t('actualImprint.sitz')"/>
      <p v-html="$t('actualImprint.law')"/>
      <p v-html="$t('actualImprint.fin')"/>
      <p>{{$t('actualImprint.rektor')}}</p>
      <p v-html="$t('actualImprint.content')"/>
      <p v-html="$t('actualImprint.agency')"/>
      <p v-html="$t('actualImprint.gdpr')"/>
      <p v-html="$t('actualImprint.cp')"/>
      <p v-html="$t('actualImprint.cpImage')"/>

    </div>
  </div>
</template>

<script>
import BackButton from '../../permanent/shared/BackButton.vue';

export default {
  name: 'Impressum',
  components: { BackButton },
};
</script>

<style scoped>
.impressumWrapper {
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 10vh;
}

.impressumTexts {
  width: 50%;
  height: auto;
}
</style>
