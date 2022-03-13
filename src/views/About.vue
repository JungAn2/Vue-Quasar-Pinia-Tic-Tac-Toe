<template>
<layout>
  <div class="container">
    <span>Font</span>
    <p>
      Angeles by Billy Argel<br />
      https://www.fontspace.com/angeles-font-f61653
    </p><br>
    <span>Image</span>
    <p>https://wallpaperaccess.com/cool-chess</p>
  </div>
  </layout>
</template>

<script setup lang="ts">
import layout from '../layout/default.vue'
</script>

<style scoped>
.container {
  border-style: solid;
  border-color: gray;
  backdrop-filter: blur(10px);
  width: 50vw;
  margin: 10px;
  padding: 5vw;
  align-items: center;
  overflow: auto;
  position: relative;
  left: 25vw;
}
p {
  color: black;
  font-size: 20px;
}
span {
  color: black;
  font-size: 40px;
}
</style>