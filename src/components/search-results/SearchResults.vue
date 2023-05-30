<template>
  <section class="flex flex-col py-[3rem]">
    <RecipeList :recipes="recipes" v-if="!isPostLoading" />
  </section>
</template>

<script lang="ts">
import axios from 'axios'
import RecipeList from './RecipeList.vue'

export default {
  components: {
    RecipeList
  },
  data() {
    return {
      isPostLoading: false,

      ApiKey: 'f0e421ec-42fb-4abe-9c4c-e580c39ccf5c',
      page: 1,
      limit: 10,
      totalPages: 0,
      recipes: []
    }
  },

  methods: {
    async getRecepies() {
      try {
        this.isPostLoading = true

        const response = await axios.get(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=${this.ApiKey}`,
          {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          }
        )
        console.log(response)

        this.totalPages = Math.ceil(this.recipes.length / this.limit)

        this.recipes = response.data.data.recipes
      } catch (e) {
        alert('Something went wrong')
      } finally {
        this.isPostLoading = false
      }
    }
  },
  mounted() {
    this.getRecepies()
  }
}
</script>

<style lang="scss" scoped></style>
