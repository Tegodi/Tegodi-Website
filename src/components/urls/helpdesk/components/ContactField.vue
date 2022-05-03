<template>
  <div class="contactFieldWrapper">
    <div>
      <div class="innerText">
        <p>{{ $t('helpdesk.contact.contactFieldText') }}</p>
        <div>
          <p>Ansprechpartner: Max Mustermann</p>
          <p>Adresse: Musterweg 123</p>
          <p>Telefon: Musternummer</p>
          <p>Email: max.mustermann@muster.de</p>
        </div>
      </div>
    </div>
    <div class="contactWrapper">
      <p>{{ $t('helpdesk.contact.reference') }}</p>
      <input v-model="reference">
      <p>{{ $t('helpdesk.contact.message') }}</p>
      <textarea v-model="message" class="area"/>
      <div style="width: 100%; display: flex; justify-content: space-between">
        <button class="submitButton" @click="submitEmail">{{ $t('helpdesk.contact.submit') }}</button>
        <p>Oder eine Mail an tegodi@tegodi.tegodi</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactField',
  data() {
    return {
      reference: '',
      message: '',
    };
  },
  methods: {
    submitEmail() {
      document.location = `mailto:tegodi@tegodi.tegodi?subject=${this.reference}&body=${this.message}`;
    },
  },
};
</script>

<style scoped>
.contactFieldWrapper {
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: row;
  grid-gap: 5vw;
}

.contactFieldWrapper > div {
  width: 50%;
  height: 100%;
  font-family: "Opensans", serif;
}

.innerText {
  width: 90%;
  display: flex;
  flex-direction: column;
  grid-gap: 5vh;
}

.contactWrapper {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  grid-gap: 3ch;
}

.area {
  flex-grow: 1;
}

.submitButton {
  width: 50%;
}
</style>
