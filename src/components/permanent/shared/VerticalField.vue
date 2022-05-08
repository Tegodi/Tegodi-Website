<template>
  <div :style="{width: width + 'vw', marginLeft: margin + '%'}" class="griddify">
    <div class="vertCardWrapper">
      <div class="rotateVertCardHeader">
        <div :style="{backgroundColor: background, width: `${widthOfLeftBorder}vw`}" class="rotateFill">
          <p>{{ header }}</p>
        </div>
      </div>
      <div class="vertTexts">
        <slot/>
      </div>
    </div>
    <div class="bottomCorner corners">
      <div :style="{backgroundColor: background}" class="actualBottomCorner"></div>
    </div>
    <div class="rightCorner corners">
      <div :style="{backgroundColor: background}" class="actualRightCorner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerticalField',
  props: {
    header: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    margin: {
      type: Number,
      required: true,
    },
    widthOfLeftBorder: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.griddify {
  display: grid;
  grid-template-columns: 100% 6vh;
  grid-template-rows: auto 6vh;
  grid-gap: 3vh;
}

.bottomCorner {
  justify-content: end;
  grid-row: 2;
  grid-column: 1 /span 2;
}

.rightCorner {
  align-items: end;
  grid-column: 2;
  grid-row: 1 /span 2;
}

.corners {
  height: 100%;
  width: 100%;
  display: flex;
}

.actualBottomCorner {
  height: 100%;
  width: 6vw;
}

.actualRightCorner {
  height: 9vw;
  width: 100%;
}

.vertCardWrapper {
  height: auto;
  display: flex;
  flex-direction: row;
  grid-gap: 5vh;
}

.vertTexts {
  display: flex;
  flex-direction: column;
  grid-gap: 5vh;
  font-family: "Opensans", serif;
  font-weight: 200;
}

.rotateVertCardHeader {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  white-space: nowrap;
  display: inline-block;
  overflow: visible;
  font-family: "Volte", serif;
  font-size: 2.5rem;
  color: white;
}

.rotateFill {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.missionStatementContent > p:first-child {
  font-weight: 400;
  font-family: "Volte", serif;
}

@media screen and (max-width: 1025px) {
  .griddify {
    width: 100% !important;
    margin: 0 !important;
  }
  .actualBottomCorner, .actualRightCorner {
    display: none;
  }
}

</style>
