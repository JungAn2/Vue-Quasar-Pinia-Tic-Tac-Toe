<template>
<span>Score</span><br>
<span>{{X}}:{{O}}</span>
  <div class="TTTBoard">
      <!-- Creating 9 cells for the tic tak toe-->
      <Cell style="padding:5px" v-for="n in 9" :key="n" letter="X" @click="increase"/>
  </div>
  <q-btn color="primary">Reset</q-btn>
</template>

<script setup lang="ts">
import Cell from "../components/Cell.vue";
import { ref } from "vue";

const X = ref(0)
const O = ref(0)

const increate = ()=>{
    X++;
}
</script>

<style scoped>
.TTTBoard{
    width: 300px;
    height: 300px;
    backdrop-filter: blur(10px);
    position: relative;
    left:calc(50% - 150px);
    padding:0;
    margin:0;
}
</style>