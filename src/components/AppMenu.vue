<template>
  <div>
    <a href="javascript:void(null);" @click="visibility=!visibility">menu</a>
    <transition name="fade">
      <nav v-show="visibility" @click="visibility = !visibility">
        <router-link v-for="(page, key) in pages" :key="key" :to="page">{{ page }}</router-link>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visibility: false,
      pages: ["weblog", "about", "projects"]
    };
  },
  methods: {
    toggleMenu() {
      document.querySelector("nav").classList.toggle("visible");
    }
  }
};
</script>

<style lang="scss" scoped>
$text: #3d3d3d;
$bg: #d6d6d6;

div {
  margin: 10px auto;
}

p {
  position: relative;
  text-align: center;
  bottom: 1em;
  margin: auto;
}

nav {
  display: flex;
  flex-direction: row;
  background-color: $bg;
  justify-content: space-evenly;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
}

// Animation
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity .8s;
}

.fade-leave-active {
  transition: opacity .8s;
  opacity: 0;
}
</style>
