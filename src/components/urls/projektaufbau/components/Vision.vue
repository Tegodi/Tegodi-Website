<template>
  <div class="visionWrapper">
    <div class="visionMargin">
      <div class="leftTextVert">
        <p>Vision</p>
      </div>
      <div class="visionText">
        <p>Ziel des „Projektes Teacher Education goes Digital“ (TEgoDi) ist die Entwicklung und Implementierung eines Konzepts zur wissenschaftlich fundierte und forschungsbasierte Vermittlung digitalisierungsbezogener Kompetenzen für Lehramtsstudierende, Lehrkräfte und Hochschullehrer.</p>
        <p>Die spezifische Struktur der Pädagogischen Hochschule wird genutzt, um ein interdisziplinär ausgerichtetes Konzept zur Förderung der medienpädagogischen sowie mediendidaktischen und medienfachdidaktischen Kompetenzen von Lehrenden und Studierenden zu entwickeln und zu implementieren. Im Fokus stehen mediengestützte Lehr-Lernangebote im schulischen Unterricht. Studierende des Lehramts werden künftig während ihres Studiums verbindlich zwei fachdidaktisch und/oder bildungswissenschaftlich angebundene Projekte durchführen. Den fachlichen Kontext können die Studierenden frei wählen. Eines der Projekte wird auf die Nutzung von elektronischen Medien in selbst entwickelten Lehr-Lern-Settings abzielen, das andere auf die eigenständige Entwicklung digital unterstützter Lehr- oder Lernmaterialien. <br>
          Damit die studentischen Projekte erfolgreich durchgeführt werden können, sorgt die Pädagogische Hochschule zudem für die erforderlichen organisatorischen und technischen Infrastrukturen und schafft Unterstützungsangebote, wie etwa Selbstlernmaterialien, Tutorien oder Feedbackmechanismen für die selbstgesteuerte Weiterentwicklung der Studierenden.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vision',
};
</script>

<style scoped>
.visionWrapper {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.visionMargin {
  margin-left: 10vh;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 5vw;
}

.leftTextVert {
  width: 7vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--tegodi-green);
}

.leftTextVert > p {
  font-family: "Volte", serif;
  color: var(--header-text-color);
  font-size: 4rem;
  transform: rotateZ(-90deg);
}

.visionText {
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 4vh;

  font-family: "Volte", serif;
  font-weight: 200;

}

.visionText > p:first-child {
  font-weight: 300;
  font-size: 1.3rem;
}
</style>
