<template>
  <router-view />
  <div class="fixed-bottom justify-center">
    <q-fab direction="up" class="q-ma-md">
      <q-fab-action to='/'><q-tooltip anchor="center end" self="center left">Home</q-tooltip></q-fab-action>
      <q-fab-action to='/play'><q-tooltip anchor="center end" self="center left">Play</q-tooltip></q-fab-action>
    </q-fab>
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
