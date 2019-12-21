<template>
  <div class="home">
    <p>{{ text }}</p>
    <menu-btn></menu-btn>
  </div>
</template>

<script>
// @ is an alias to /src
import menuBtn from "@/components/menu-button.vue";
export default {
  name: "home",
  components: {
    menuBtn: menuBtn
  },
  data() {
    return {
      text: "",
      phrase: "solving PROBLEMS with {code}".split("")
    };
  },
  methods: {
    outText() {
      if (this.phrase.length > 0) {
        this.text += this.phrase.shift();
        setTimeout(this.outText, 70);
      }
    }
  },
  mounted() {
    this.outText();
  }
};
</script>

<style lang="scss" scoped>
p {
  position: relative;
  top: 45vh;
  display: inline;
  font-size: 2em;
  margin: 0 auto;
}

p::after {
  content: "_";
  animation: blink 0.7s ease-in infinite;
}

@keyframes blink {
  0% {
    color: transparent;
  }
  100% {
    color: black;
  }
}
</style>
