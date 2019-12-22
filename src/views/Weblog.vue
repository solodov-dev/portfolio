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
ul {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
}

li {
  text-align: left;
  padding: 20px;
}
</style>
