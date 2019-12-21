<template>
  <div class="home">
    <textarea maxlenght="40" id="intro" :value="textInput" :cols="textInput.length" rows="1" autofocus></textarea>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      textInput: "H"
    }
  }
};
</script>

<style lang="scss" scoped>
$primary: #5f97ff;
$text: #d6d6d6;
textarea {
  resize: none;
  font-size: 6em;
  caret-color: $primary;
  border: none;
  background-color: transparent;
  color: $text;
  font-family: "Press Start 2p";
}
</style>
