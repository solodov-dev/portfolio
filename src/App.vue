<template>
  <div id="app">
    <app-menu />
    <router-view />
  </div>
</template>

<script>
import AppMenu from "./components/AppMenu";
export default {
  components: {
    appMenu: AppMenu
  }
};
</script>

<style lang="scss">
@import "./assets/reset.css";

// Global variables
$bg: #d6d6d6;
$text: #3d3d3d;

body {
  background-color: $bg;
}

#app {
  font-family: "Major Mono Display", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text;
  background-color: $bg;
}

a {
  text-decoration: none;
  color: #3d3d3d;
  position: relative;
}

a::before {
  content: "";
  position: absolute;
  top: 1em;
  width: 0;
  height: 1px;
  background-color: blueviolet;
  transition: width 0.4s ease-in;
}

a:hover::before {
  width: 100%;
}
@keyframes show {
  0% {
    color: transparent;
  }
  100% {
    color: $text;
  }
}
</style>
