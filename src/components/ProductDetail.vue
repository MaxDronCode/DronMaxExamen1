<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const { items } = defineProps({
  items: []
})
const product = computed(() => items.find(item => item.id === Number(route.params.productId)))
</script>
<template>
<h1>Detall del Producte</h1>
<p>ID: {{ product.id}}</p>
<p>Nom del producte: {{ product.name }}</p>
<p>Descripció: {{ product.description }}</p>
</template>
<style scoped>

</style>