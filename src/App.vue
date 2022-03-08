<template>
  <router-view />
  <div class="fixed-bottom justify-center">
    
    <q-btn round size="md" class="q-ma-md"><q-tooltip class="text-body2 z-max">Home Page</q-tooltip><img src="/favicon.ico"></q-btn>
    <q-btn round size="xl" class="q-ma-md"><q-tooltip class="text-body1 z-max">Play</q-tooltip></q-btn>
    <q-btn round size="md" class="q-ma-md"><q-tooltip class="text-body2 z-maxs">Reset</q-tooltip></q-btn>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
