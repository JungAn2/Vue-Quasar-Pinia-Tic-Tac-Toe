<template>
  <br />
  <h1>Hover over the buttons</h1>
  <div class="justify-center" ref="bubble">
    <q-btn round size="xl" class="q-ma-md" @mouseover="change('T1')"><span v-if="T1" ref="T11">T</span></q-btn>
    <q-btn round size="xl" class="q-ma-md" @mouseover="()=>{T2=true}"><span v-if="T2">I</span></q-btn>
    <q-btn round size="xl" class="q-ma-md" @mouseover="()=>{T3=true}"><span v-if="T3">C</span></q-btn>
    <q-btn round size="xl" class="q-ma-md" @mouseover="()=>{T4=true}"><span v-if="T4">-</span></q-btn>
    <q-btn round size="xl" class="q-ma-md" @mouseover="()=>{T5=true}"><span v-if="T5">T</span></q-btn>
    <q-btn round size="xl" class="q-ma-md" @mouseover="()=>{T6=true}"><span v-if="T6">A</span></q-btn>
    <q-btn round size="xl" class="q-ma-md" @mouseover="()=>{T7=true}"><span v-if="T7">C</span></q-btn>
    <q-btn round size="xl" class="q-ma-md" @mouseover="()=>{T8=true}"><span v-if="T8">-</span></q-btn>
    <q-btn round size="xl" class="q-ma-md" @mouseover="()=>{T9=true}"><span v-if="T9">T</span></q-btn>
    <q-btn round size="xl" class="q-ma-md" @mouseover="()=>{T10=true}"><span v-if="T10">O</span></q-btn>
    <q-btn round size="xl" class="q-ma-md" @mouseover="()=>{T11=true}"><span v-if="T11">E</span></q-btn>
  </div>
    {{$refs.bubble}}
</template>

<script setup>
import { ref } from "vue";

//Learn how to refer ref as an array
i = "1"
const tt = {
  $i: ref(0)
}
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

const change = (id) => {
  this.$refs.id = true
};

</script>


<style scoped>
</style>