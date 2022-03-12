<template>
  <VerticalField
    header="Mission Statement"
    background="var(--header-text-color)"
    :width="60"
    :margin="25">
    <div class="missionStatementContent">
      <p>AP1</p>
      <p>Mit System die Ziele erreichen und dabei die Qualität nicht aus den Augen verlieren:
        Das Projektmanagement gibt die organisatorischen Rahmen und unterstützt bei den iterativen
        Strukturen innerhalb des Projektrahmens. Die Dissemination und die kontinuierliche Kommunikation
        mit dem Fördergeber sind wichtige komplementäre Verantwortungen.
      </p>
    </div>
    <div class="missionStatementContent">
      <p>AP2</p>
      <p>Anforderungen ermitteln – Implementation stetig optimieren – Erfolge evaluieren!
        Die wissenschaftliche Begleitforschung generiert mithilfe eines Mixed-Methods-Ansatz wissenschaftliche
        und praxisrelevante Erkenntnisse, um eine bedarfsorientierte Gestaltung und Implementation der
        Unterstützungsangebote bestmöglich zu fördern. Auch die Akzeptanz, die Wirkung und das Nachnutzungspotenzial
        sollen so gesichert werden. Diese Aktivitäten ermöglichen einen gemeinsamen Lernprozess, zeigen
        Gelingensbedingungen und Herausforderungen auf und sprechen fundierte Handlungsempfehlungen für Transfer und Nachhaltigkeit aus.
      </p>
    </div>
    <div class="missionStatementContent">
      <p>AP3</p>
      <p>Das Kompetenzraster bietet Studierenden und Lehrenden einen umfangreichen Orientierungsrahmen in Bezug auf
        medienpädagogische, mediendidaktische und medienfachdidaktische Kompetenzen. Auf dieser Grundlage können
        sie sich sicher und verantwortungsvoll in einer von digitalen Medien geprägten Welt bewegen und sind in der
        Lage, im späteren Berufsleben digitale Medien systematisch zur Unterstützung schulischer (Lern-)Prozesse einzusetzen.
        Durch passgenaues Learning Analytics und automatisiertes Feedback können Lernende ihre aktuelle Kompetenzstufe ermitteln
        und ihre Kompetenzentwicklung verfolgen, sodass sie sich, aufbauend auf ihren vorhandenen Fertigkeiten, zielgerichtet weiterbilden können.
      </p>
    </div>
  </VerticalField>
</template>

<script>
import VerticalField from '../../../permanent/shared/VerticalField.vue';

export default {
  name: 'MissionStatement',
  components: { VerticalField },
};
</script>

<style scoped>
.missionStatementContent > p:first-child {
  font-weight: 400;
  font-family: "Volte", serif;
}
</style>
