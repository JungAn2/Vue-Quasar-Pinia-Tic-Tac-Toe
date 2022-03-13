  <template>
  <img src="/Img/chess.jpeg" class="fixed-center" />
  <q-layout view="hHh lpR fFf">
    <q-header class="row justify-center" style="background-color: transparent">
      <div class="col">
        <h2 style="color: black; font-family: 'Angeles'">Front End Project</h2>
        <div class="row justify-center">
          <q-btn class="q-ma-sm" color="secondary" to="/">Home</q-btn>
          <q-btn class="q-ma-sm" color="secondary" size="lg" to="/game" @click="useboardStore.reset()">Play</q-btn>
          <q-btn class="q-ma-sm" color="secondary" to="/about">About</q-btn>
        </div>
      </div>
    </q-header>
    <q-page-container>
        <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { boardStore } from '../stores/board';

const useboardStore = boardStore()

</script>