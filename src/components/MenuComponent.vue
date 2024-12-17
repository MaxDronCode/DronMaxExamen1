<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav id="nav">
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/exercici1/:productId">Exercici 1: Productes</RouterLink> |
    <RouterLink to="/exercici2">Exercici 2: Comptador</RouterLink> |
    <RouterLink to="/exercici3">Exercici 3: Usuaris</RouterLink> 
  </nav>
</template>
<style scoped></style>