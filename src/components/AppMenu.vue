<template>
  <div>
    <div class="menu-btn" @click="visibility=!visibility">menu</div>
    <nav v-show="visibility" @click="visibility = !visibility">
      <router-link v-for="(page, key) in pages" :key="key" :to="page">{{ page }}</router-link>
    </nav>
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

.menu-btn {
  border: none;
  box-shadow: none;
  cursor: pointer;
  background-color: transparent;
}
</style>
