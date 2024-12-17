<script setup>
import products from '/data/products.json'
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <h1>Llistat de Productes</h1>
  <ul>
    <li v-for="product in products" :key="product.id">
      <RouterLink :to="{ name: 'productDetail', params: { productId: product.id } }">{{
        product.name
      }}</RouterLink>
    </li>
  </ul>
  <RouterView :items="products"/>
</template>
<style scoped></style>
