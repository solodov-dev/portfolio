<template>
  <ul>
    <li v-for="(log, date) in weblog" :key="date">
      <a :href="log.link" :title="`View at ${log.site}`" target="_blank">{{ log.title }}</a>
      <p>{{ date }}</p>
      <img src="@/assets/polygon.svg" alt="polygon" />
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "weblog",
  data() {
    return {
      weblog: ""
    };
  },
  mounted() {
    let url =
      document.location.protocol +
      "//" +
      document.location.host +
      "/" +
      "weblog.json";
    axios
      .get(url)
      .then(res => {
        this.weblog = res.data;
      })
      .catch(err => {
        this.weblog = err;
      });
  }
};
</script>

<style lang="scss" scoped>
$bg: #d6d6d6;

ul {
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 10px;
  line-height: 1em;
}

li {
  border-top: 1px solid blueviolet;
  padding: 20px;
  padding-bottom: 0;
}

li:nth-child(odd) {
  text-align: left;
  border-left: 1px solid blueviolet;
}

li:nth-child(odd) > img {
  position: relative;
  left: -1.85em;
  top: -2.9em;
}

li:nth-child(even) {
  text-align: right;
  border-right: 1px solid blueviolet;
}

li:nth-child(even) > img {
  position: relative;
  left: 1.85em;
  top: -2.9em;
}

a:hover ~ img {
  animation: rotate 2s infinite ease-in-out;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

p {
  color: gray;
  font-size: 0.8em;
  padding-top: 1em;
}
</style>
