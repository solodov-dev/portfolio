<template>
  <article>
    <menu-btn></menu-btn>
    <img src alt="Andrey Solodov" />
    <p>My name is Andrey Solodov. I am a front-end developer</p>
  </article>
</template>

<script>
import menuBtn from "@/components/menu-button.vue";
export default {
  name: "home",
  components: {
    menuBtn: menuBtn
  }
};
</script>

<style lang="scss" scoped>
article {
  max-width: 30%;
  margin: 0 auto;
}
p {
  font-family: "Montserrat", sans-serif;
}
</style>
