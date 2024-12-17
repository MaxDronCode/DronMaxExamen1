<script setup>
const {items, productId } = defineProps({
  items: [],
  productId: String
})
</script>
<template>
<h1>Detall del Producte</h1>
<p>ID: {{ items[productId - 1].id}}</p>
<p>Nom del producte: {{ items[productId - 1].name }}</p>
<p>Descripció: {{ items[productId - 1].description }}</p>
</template>
<style scoped>

</style>