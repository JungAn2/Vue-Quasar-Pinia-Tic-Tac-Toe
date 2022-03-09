<template>
<img src='/Img/NGNL.jpg' class="fixed-center"/>
  <q-layout view="hHh lpR fFf">
    <q-header class="row justify-center" style="background-color: transparent">
      <div class="col">
        <h1 style="color:black; font-family:'Angeles';">Front End Project</h1>
        <div class="row justify-center">
          <q-btn color="secondary" to="/">Home</q-btn>
          <q-btn color="secondary" size="lg" to="/play">Play</q-btn>
          <q-btn color="secondary" to="/about">About</q-btn>
        </div>
      </div>
    </q-header>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
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

@font-face {
  font-family: "Angeles";
  src: url(/Fonts/Angeles.ttf);
}
</style>
