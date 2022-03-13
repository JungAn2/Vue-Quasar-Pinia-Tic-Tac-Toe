<template>
    <q-btn
        color="black"
        class="z-max cellBtn"
        unelevated
        outline
        @click="useStore.move(row, col)"
    >
        <q-btn style="backdrop-filter: blur(10px);z-index:-1;width:100%; height:100%">
            <span style="font-size:10vh;">{{letter}}</span>
        </q-btn>
    </q-btn>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { boardStore } from '../stores/board'

const prop = defineProps<{ letter: string, row: number, col: number }>()
const useStore = boardStore()

</script>

<style scoped>
.cellBtn{
    width: 100px;
    height:100px;
    margin: 0px;
    padding: 1px;
}
</style>