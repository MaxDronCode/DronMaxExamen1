<script setup>
import users from '/data/users.json'
import { ref, computed, watch } from 'vue'
const userInput = ref('')
const normalizedInput = computed(() => userInput.value.toLocaleLowerCase())
const filteredUsers = computed(() => {
  return users.filter((user) => user.name.toLowerCase().includes(normalizedInput.value))
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
