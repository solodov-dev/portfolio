<template>
  <carousel-3d :controls-visible="true" :border="0" :height="480" :width="400">
    <slide :index="0">
      <a href="https://parus-nalchik.ru" target="_blank">
        <img src="@/assets/projects/parus.png" alt="Parus Nalchik" />
      </a>
      <h1>Parus Nalchik</h1>
      <p>Shopping center</p>
    </slide>
    <slide :index="1">
      <a href="https://solodov-dev.github.io/rad-io/" target="_blank">
        <img src="@/assets/projects/radio.png" alt="Parus Nalchik" />
      </a>
      <h1>RAD-IO</h1>
      <p>Online radio player.</p>
    </slide>
    <slide :index="2">
      <a href="https://solodov-dev.github.io/russia/" target="_blank">
        <img src="@/assets/projects/russia.png" alt="Parus Nalchik" />
      </a>
      <h1>Russia</h1>
      <p>Interactive map.</p>
    </slide>
  </carousel-3d>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  name: "home",
  components: {
    Carousel3d,
    Slide
  }
};
</script>

<style lang="scss" scoped>
img {
  margin-bottom: -2em;
}
a::before {
  width: 0px;
}
</style>
