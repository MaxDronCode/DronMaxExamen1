<script setup>
import { ref, provide } from 'vue'
import ResultatCmp from './ResultatCmp.vue'
const count = ref(0)
const addClick = () => {
  count.value++
}
const substractClick = () => {
  count.value--
}
provide('count', count)
</script>
<template>
  <button @click="addClick">+1</button>
  <button @click="substractClick">-1</button>
  <ResultatCmp />
</template>
<style scoped></style>
