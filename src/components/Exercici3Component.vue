<script setup>
import users from '/data/users.json'
import { ref, computed, watch } from 'vue'
const userInput = ref('')
// TODO falta que sigui case insensitive
const filteredUsers = computed(() => {
  return users.filter((user) => user.name.includes(userInput.value))
})
watch(userInput, (newValue, oldValue) => console.log(`Filtre canviat: ${userInput.value}`))
</script>
<template>
  <h1>Llistat d'Usuaris</h1>
  <input type="text" v-model="userInput" placeholder="Filtra usuaris..." />
  <ul>
    <li v-for="user in filteredUsers" :key="user.id">{{ user.name }}</li>
  </ul>
</template>
<style scoped></style>
