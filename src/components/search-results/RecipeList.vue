<template>
  <div v-if="recipes">
    <RecipeItem v-for="recipe in recipes" :recipe="recipe" :key="recipe.id" />
  </div>
</template>

<script setup lang="ts">
import RecipeItem from './RecipeItem.vue'

defineProps({
  recipes: {
    type: Array,
    required: true
  }
})
</script>

<style scoped></style>
