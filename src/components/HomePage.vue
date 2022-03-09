<template>
  <h1 class="z-max text-weight-medium header">Tic Tak Toe Game</h1>

</template>

<script setup lang="ts">
import { inject, ref } from 'vue'

const qotd = ()=>{
  const result = ref(null)
  const axios = inject('axios')

  axios.get('https://zenquotes.io/api/quotes')
.then((res)=>result.value = res)
}



</script>


<style scoped>
.header{
  color: black;
  font-family: "Angeles";
  font-size:15vh;
}
</style>