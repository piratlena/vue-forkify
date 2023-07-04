<template>
  <div class="m-auto flex flex-row items-center bg-grey-light-1">
    <div>
      <h1>Это страница поста с ID: {{ $route.params.id }}</h1>

      <figure class="relative h-[32rem] origin-top">
        <img
          :src="`${recipe.image_url}`"
          :alt="`${recipe.title}`"
          class="w-full h-full block object-contain"
        />
        <h1 class="">
          <span class="recipe__title">{{ recipe.title }}</span>
        </h1>
      </figure>
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import { useSingleRecipeStore } from '@/store/single-recipe/singleRecipe';
export default {
  setup() {
    const recipeStore = useSingleRecipeStore();

    const { recipe } = storeToRefs(recipeStore);

    return { recipeStore, recipe };
  },
};
</script>

<style scoped>
.recipe__title {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 20%) skewY(-6deg);
  color: #fff;
  font-weight: 700;
  font-size: 3.25rem;
  text-transform: uppercase;
  width: 50%;
  line-height: 1.95;
  text-align: center;
}

span {
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 1.3rem 2rem;
  background-image: linear-gradient(to right bottom, #f48982 0%, #fbdb89 50%, #f38e82 100%);
}
</style>
