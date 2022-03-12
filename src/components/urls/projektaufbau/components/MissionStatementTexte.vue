<template>
  <div class="missionStatementTexteWrapper">
    <div class="texte">
      <div class="actualTexte">
        <p>AP4</p>
        <p>Bedarf an Material, um die Medienprojekte angehen zu können? Noch ein wenig unschlüssig,
          was das Thema Medienprojekte managen und thematisch aufarbeiten bedeutet?
          Die Selbstlernmaterialien bieten Studierenden Unterstützung hinsichtlich dem zielgerichteten
          Einsatz vieler verschiedener Medienformate und deckt Gestaltungsfragen bei der Entwicklung
          und Umsetzung auf. Mit Hilfe der breit gestreuten Materialsammlung soll Orientierung
          für die Recherche und Einordnung der Themen dargeboten werden.
        </p>
      </div>
      <div class="actualTexte">
        <p>AP5</p>
        <p>Keine Angst vor Medienprojekten! Getreu diesem Motto werden im Rahmen des Arbeitspakets „Lernbegleitung“
          verschiedene Maßnahmen entwickelt, um Studierende bei der Planung und Durchführung entsprechender Vorhaben
          zu unterstützen. Neben einer zentralen Informationsplattform bildet vor allem der Einsatz studentischer
          Lernbegleiter:innen eine tragende Säule des mehrteiligen Betreuungskonzepts. Sie stehen bei individuellen
          Fragen und Problemen mit Rat und Tat zur Seite und werden im Rahmen einer speziell dafür entwickelten
          Qualifizierungsmaßnahme auf diese anspruchsvolle Aufgabe vorbereitet.
        </p>
      </div>
      <div class="actualTexte">
        <p>AP6</p>
        <p>Kommunikation im Auftrag der Vernetzung: Die Brückenstellen vertreten als Change Agents das Projekt
          in den beiden Fakultäten der PH Weingarten und unterstützen die curriculare Anbindung. Dabei ist
          das oberste Ziel, den Aufbau einer Community of Practice im Hinblick auf eine zeitgemäße Lehre unter
          Einsatz digitaler Medien voranzutreiben. Dafür werden Ermöglichungsräume für die Kollaboration geschaffen
          und ein Beratungs- und Unterstützungssystem etabliert.
        </p>
      </div>
      <div class="actualTexte">
        <p>AP7</p>
        <p>Kompetent durch Anwendung! Um medienbezogene Kompetenzen zu entwickeln, sollte man sich auch aktiv
          mit Medien auseinandersetzen. Hierfür wird der Makerspace der Pädagogischen Hochschule Weingarten,
          das CoLiLab, in seiner Kapazität erweitert und um zusätzliche Säulen ergänzt. Studierende (& Lehrende)
          können sich dann beispielweise auch Medienproduktionsequipment ausleihen und zuhause am gewohnten Rechner
          schneiden oder einen Zeitslot im CoLiLab buchen und vor Ort loslegen.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MissionStatementTexte',
};
</script>

<style scoped>
.missionStatementTexteWrapper {
  width: 100%;
  height: auto;
}

.texte {
  width: 60%;
  display: flex;
  flex-direction: column;
  grid-gap: 5vh;
  font-family: "Opensans", serif;
  font-weight: 200;
}

.actualTexte > p:first-child {
  font-weight: 400;
  font-family: "Volte", serif;
}
</style>
