<script setup>
import { inject } from 'vue'

const count = inject('count')
</script>
<template>
  <p>El valor del comptador es: {{ count }}</p>
</template>
<style scoped>

</style>