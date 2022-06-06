<template>
  <div class="contactFieldWrapper">
    <div>
      <div class="innerText">
        <p>{{ $t('helpdesk.contact.contactFieldText') }}</p>
        <div class="griddify">
          <p>Ansprechpartner</p>
          <p>Christian Schmidt</p>
          <p>Adresse</p>
          <p>Kirchplatz 2 (Raum F 3.08), 88250 Weingarten</p>
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
      document.location = `mailto:christian.schmidt@ph-weingarten.de?subject=${this.reference}&body=${this.message}`;
    },
  },
};
</script>

<style scoped>
.griddify {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 3ch 7ch 3ch 3ch;
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
  margin: 0;
  width: auto;
  display: flex;
  flex-direction: column;
  grid-gap: 5vh;
  line-height: 1.5;
}

.contactWrapper {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  grid-gap: 3ch;
}

.contactWrapper > p {
  font-family: "Volte", serif;
}

.area {
  flex-grow: 1;
}

.contactWrapper > input {
  height: 3ch;
}

.area, .contactWrapper > input {
  border: 2px solid var(--tegodi-green)
}

.submitButton {
  width: 50%;
  height: 5ch;
  font-family: "Volte", serif;
  background-color: white;
  border:2px solid var(--tegodi-green);
  transition: all ease 1s;
}

.submitButton:hover {
  border-radius: 5vh;
}

@media screen and (max-width: 1025px) {
  .contactFieldWrapper {
    height: auto;
    flex-direction: column;
    width: calc(100% - 6vh);
  }
  .griddify {
    grid-template-columns: auto auto;
    grid-template-rows: 3ch 7ch 3ch 3ch;
  }
  .contactFieldWrapper > div {
    width: 100%;
    padding: 3vh;
  }
  .area {
    height: 30vh;
  }
}
@media screen and (max-width: 900px) and (orientation: landscape) {
  .contactFieldWrapper {
    width: calc(100% - 20vh);
  }
  .contactFieldWrapper > div {
    padding: 10vh;
  }
}
</style>
