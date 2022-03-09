<template>
    <q-btn color="black" class="z-max" unelevated outline @click="$emit('cellClick', letter)" style="width:100px; height:100px; margin:0px; padding:1px">
        <q-btn style="backdrop-filter: blur(10px);z-index:-1;width:100%; height:100%">
        <span style="font-size:10vh;">{{letter}}</span>
        </q-btn>
    </q-btn>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{letter: String}>()
</script>

<style scoped>

</style>