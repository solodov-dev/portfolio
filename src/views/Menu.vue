<template>
  <nav>
    <router-link to="/timeline">timeline</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/projects">projects</router-link>
  </nav>
</template>
<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;
  top: 45vh;
}
</style>