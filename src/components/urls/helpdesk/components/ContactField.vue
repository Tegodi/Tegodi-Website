<template>
  <div class="contactFieldWrapper">
    <div>
      <div class="innerText">
        <p>{{ $t('helpdesk.contact.contactFieldText') }}</p>
        <div class="griddify">
          <p>Ansprechpartner</p>
          <p>Christian Schmidt</p>
          <p>Adresse</p>
          <p>Kirchplatz 2 (Raum F 3.08) | 88250 Weingarten</p>
          <p>Telefon</p>
          <p>+49 751 501-8209</p>
          <p>E-Mail</p>
          <a href="mailto:christian.schmidt@ph-weingarten.de">christian.schmidt@ph-weingarten.de</a>
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
.griddify {
  display: grid;
  grid-template-columns: 30ch auto;
  grid-template-rows: repeat(4, 3ch);
  grid-gap: 1ch;
}

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
