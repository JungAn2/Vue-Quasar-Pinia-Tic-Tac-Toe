<template>
    <h1> hello</h1>
    {{tt.t1}}
</template>

<script setup>
import { ref } from 'vue'

const tt = {
    t1: ref(0)
}

</script>