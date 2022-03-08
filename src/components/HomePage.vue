<template>
  <br />
  <h1>Click on the bubble</h1>
  <div class="justify-center">
    <q-btn round size="xl" class="q-ma-md" @click="change(T1)"><span v-if="T1">T</span></q-btn>
    <q-btn round size="xl" class="q-ma-md" @click="change(T2)"><span v-if="T2">I</span></q-btn>
    <q-btn round size="xl" class="q-ma-md" @click="fff()"><span v-if="T3">C</span></q-btn>
    <q-btn round size="xl" class="q-ma-md"><span v-if="T4">-</span></q-btn>
    <q-btn round size="xl" class="q-ma-md"><span v-if="T5">T</span></q-btn>
    <q-btn round size="xl" class="q-ma-md"><span v-if="T6">A</span></q-btn>
    <q-btn round size="xl" class="q-ma-md"><span v-if="T7">C</span></q-btn>
    <q-btn round size="xl" class="q-ma-md"><span v-if="T8">-</span></q-btn>
    <q-btn round size="xl" class="q-ma-md"><span v-if="T9">T</span></q-btn>
    <q-btn round size="xl" class="q-ma-md"><span v-if="T10">O</span></q-btn>
    <q-btn round size="xl" class="q-ma-md"><span v-if="T11">E</span></q-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";

const T1 = ref(false);
const T2 = ref(false);
const T3 = ref(false);
const T4 = ref(false);
const T5 = ref(false);
const T6 = ref(false);
const T7 = ref(false);
const T8 = ref(false);
const T9 = ref(false);
const T10 = ref(false);
const T11 = ref(false);

const fff = ()=>{
  console.log("asdf")
}

const change = (bubble) => {
  console.log("Thsasdf")
  bubble = true
};
</script>


<style scoped>
</style>