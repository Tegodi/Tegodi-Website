<template>
  <div class="impressumWrapper">
    <BackButton back-u-r-l="/" chevron-background="var(--light-background)" chevron-color="var(--tegodi-green)" text-background="var(--header-text-color)" text-color="var(--tegodi-green)" :title="$t('footer.imprint')" />
    <div class="impressumTexts">
      <p class="mb">{{$t('actualImprint.pre')}}</p>
      <p>{{$t('actualImprint.presence')}}</p>
      <p>{{$t('actualImprint.address')}}</p>
      <p>{{$t('actualImprint.mail')}}</p>
      <p class="mb">{{$t('actualImprint.phone')}}</p>
      <p>{{$t('actualImprint.sitz')}}</p>
      <p class="mb">{{$t('actualImprint.law')}}</p>
      <p class="mb">{{$t('actualImprint.fin')}}</p>
      <p class="mb">{{$t('actualImprint.rektor')}}</p>
      <p class="mb">{{$t('actualImprint.content')}}</p>
      <p class="mb">{{$t('actualImprint.agency')}}</p>
      <p class="mb">{{$t('actualImprint.gdpr')}}</p>
      <p>{{$t('actualImprint.cp')}}</p>
      <p style="margin-bottom: 10vh">{{$t('actualImprint.cpImage')}}</p>
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

.impressumTexts > p {
  font-family: "Opensans", serif;
  font-weight: 100;
}

.mb {
  margin-bottom: 1ch;
}
</style>
