<template>
  <div v-if="recipes.length > 0">
    <RecipeItem v-for="recipe in recipes" :recipe="recipe" :key="recipe.id" />
  </div>
</template>

<script setup lang="ts">
import RecipeItem from './RecipeItem.vue'
import axios from 'axios'
import { IRecipeItem } from './types'

defineProps({
  recipies: {
    type: Array,
    required: true
  }
})
let isPostLoading: boolean = false

const ApiKey: string = 'f0e421ec-42fb-4abe-9c4c-e580c39ccf5c'
let page: number = 1
const limit: number = 10
let totalPages: number = 0
let recipes = <IRecipeItem[]>[]

const getRecepies = async () => {
  try {
    isPostLoading = true

    const response = await axios.get(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=${ApiKey}`,
      {
        params: {
          _page: page,
          _limit: limit
        }
      }
    )
    console.log(response)
    totalPages = Math.ceil(response.headers['x-total-count'] / limit)
    recipes = response.data.data.recipes
    return recipes
  } catch (e) {
    alert('Something went wrong')
  } finally {
    isPostLoading = false
  }
}
getRecepies()
</script>

<style lang="scss" scoped></style>
