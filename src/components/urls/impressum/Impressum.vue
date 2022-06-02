<template>
  <div class="impressumWrapper">
    <BackButton back-u-r-l="/" chevron-background="var(--light-background)" chevron-color="var(--tegodi-green)" text-background="var(--header-text-color)" text-color="var(--tegodi-green)" :title="$t('footer.imprint')" />

    <h3>{{$t('imprint')}}</h3>
    <pre>Impressum
      Anbieter und somit verantwortlich für die kommerzielle und geschäftsmäßige Website im Sinne des § 5 des Telemediengesetz (TMG) in Funktion als Kerngesetz des Elektronischer-Geschäftsverkehr-Vereinheitlichungsgesetz ElGVG und des Gesetz zur Regelung der Rahmenbedingungen für Informations- und Kommunikationsdienste (IuKDG), ist die Pädagogische Hochschule Weingarten, vertreten durch die Rektorin Prof. Dr. Karin Schweizer.

      Diese Internetpräsenz ist ein Informationsangebot der

      Pädagogische Hochschule Weingarten
      Kirchplatz 2
      88250 Weingarten
      Deutschland

      E-Mail: info(at)ph-weingarten.de
      Web: www.ph-weingarten.de

      Telefon: +49 751 501 - 0
      Telefax: +49 751 501 - 8250

      Sitz der Pädagogische Hochschule Weingarten: 88250 Weingarten, Deutschland
      Zuständiges Amtsgericht: Amtsgericht Ravensburg
      Rechtsform: Körperschaft des öffentlichen Rechts (KdöR)

      Anwendbares Recht: Recht der Bundesrepublik Deutschland (BRD)

      Finanzamt Ravensburg
      Umsatzsteuer-Identifikationsnummer: DE 814 218 256

      Vertretungsberechtigte Rektorin: Prof. Dr. Karin Schweizer

      Inhaltlich verantwortlich für journalistisch redaktionelle Beiträge:
      Arne Geertz (Referent für Öffentlichkeitsarbeit und Marketing)
      Pädagogische Hochschule Weingarten
      Kirchplatz 2
      88250 Weingarten
      Deutschland
      Tel.: +49(0)751/501-8860
      E-Mail: geertz(at)vw.ph-weingarten.de

      Zuständige Zulassungs- und Aufsichtsbehörde:
      Ministerium für Wissenschaft, Forschung und Kunst Baden-Württemberg (MWK)
      Königstraße 46
      70173 Stuttgart
      Deutschland

      Externer Datenschutzbeauftragter gemäß Art. 37 EU-DSGVO:
      Maximilian Musch (Datenschutzbeauftragter)
      Deutsche Datenschutzkanzlei
      Richard-Wagner-Straße 2
      88094 Oberteuringen
      Deutschland
      Tel: +49(0)7542/949-2100
      E-Mail: anfragen(at)ddsk.de

      © Copyright
      Alle Rechte vorbehalten. Text, Bilder und Grafiken sowie deren Anordnung auf der Website unterliegen dem Schutz des Urheberrechts und anderer Schutzgesetze. Der Inhalt dieser Websites darf nicht zu kommerziellen Zwecken kopiert, verbreitet, verändert oder Dritten zugänglich gemacht werden.

    </pre>
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
  grid-gap: 10vh;
}
</style>
