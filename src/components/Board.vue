<template>
    <br />
    <span class="text-weight-bold text-h4">Score</span>
    <br />
    <span>{{ useScoreStore.Xscore }} : X | O : {{ useScoreStore.Oscore }}</span>
    <br />
    <span>Turn: {{ useboardStore.turn }}</span>
    <br />
    <span>Winner: {{ useboardStore.winner }}</span>
    <div class="TTTBoard" id="boardSize">
        <div v-for="i in 3" class="row">
            <div v-for="j in 3">
                <cell
                    :row="i - 1"
                    :col="j - 1"
                    :letter="useboardStore.getCell(i - 1, j - 1)"
                    style="padding:5px"
                />
            </div>
        </div>
    </div>
    <q-btn color="primary" @click="useboardStore.reset(); ">Reset</q-btn>
</template>

<script setup lang="ts">
import { boardStore } from '../stores/board';
import { scoreStore } from '../stores/score';
import Cell from "./Cell.vue";

const useboardStore = boardStore()
const useScoreStore = scoreStore()

</script>

<style scoped>
.TTTBoard {
    width: 300px;
    height: 300px;
    backdrop-filter: blur(10px);
    position: relative;
    left: calc(50% - 150px);
    padding: 0;
    margin: 0;
}

</style>