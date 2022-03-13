<template>
  <layout>
    <h2 class="z-max text-weight-medium header">Tic Tak Toe Game</h2>
    <div class="col justify-center bg">
      <span class="text-h5 text-weight-bold">Today's Quote of the Day</span>
      <br />
      <span class="text-italic">{{ qod }}</span>
      <br />
      <span class="text-bold">-{{ author }}-</span>
    </div>
  </layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import layout from '../layout/default.vue'
import axios from 'axios'

const content: any = ref(null)
const qod: any = ref(null)
const author: any = ref(null)

axios.get("https://quotes.rest/qod")
  .then((res) => { content.value = res.data })
  //Gets the quote of the day and author from api
  .then(() => {
    content.value = content.value.contents.quotes[0];
    author.value = content.value.author;
    qod.value = content.value.quote;
  })


</script>


<style scoped>
.header {
  color: black;
  font-family: "Angeles";
}

.bg {
  border-style:style;
  border-color: black;
  padding: 10px;
  margin: 10px;
  width: 25vw;
  /*
  * Margin used for centering the div
   */
  margin-left: auto;
  margin-right: auto;
  backdrop-filter: blur(5px);
}
</style>