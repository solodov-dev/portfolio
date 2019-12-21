<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Cutive+Mono|Press+Start+2P&display=swap");
@import "./assets/reset.css";

// Global variables
$bg: #3d3d3d;
$text: #d6d6d6;

#app {
  font-family: "Press Start 2P", "Cutive Mono", "Avenir", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text;
  background-color: $bg;
  height: 100vh;
}
</style>
