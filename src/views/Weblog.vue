<template>
  <ul>
    <li v-for="(log, index) in weblog" :key="index">{{ log.body }}</li>
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
    axios
      .get("http://localhost:8080/weblog.json")
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
}

li {
  border-top: 1px solid blueviolet;
  padding: 20px;
}

li:nth-child(odd) {
  text-align: left;
  border-left: 1px solid blueviolet;
}

li:nth-child(odd)::before {
  content: "=";
  display: inline-block;
  position: relative;
  left: -1.65em;
}

li:nth-child(even) {
  text-align: right;
  border-right: 1px solid blueviolet;
}
</style>
