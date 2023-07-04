<template>
  <li
    class="flex flex-row w-[70%] m-auto py-[1.5rem] px-[3.25rem] justify-between cursor-pointer border-r-1px border-r-solid border-r-white hover:bg-grey-light-2 hover:translate-y-[-2px] transition-all duration-300"
  >
    <div class="rounded-full h-[4.8rem] w-[4.8rem] overflow-hidden relative mr-[20px]">
      <img :src="recipe.image_url" alt="food" class="w-full h-full block object-cover" />
    </div>

    <div @click="onClick()">
      <h4 class="text-xl font-semibold text-primary text-center">{{ recipe.title }}</h4>
      <p class="text-lg text-uppercase text-center">{{ recipe.publisher }}</p>
    </div>
    <div
      class="w-[100px] mt-0 ml-[40px] translate-y-[-8px] flex flex-cols justify-between items-center"
    >
      <i class="material-icons"> bookmark </i>
    </div>
  </li>
</template>

<script lang="ts">
import { useSingleRecipeStore } from '@/store/single-recipe/singleRecipe';
import { storeToRefs } from 'pinia';
export default {
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },

  setup() {
    const recipeStore = useSingleRecipeStore();

    const { id } = storeToRefs(recipeStore);

    return { id, recipeStore };
  },
  data() {},
  methods: {
    onClick() {
      this.id = this.recipe.id;
      this.$router.push(`/recipe/${this.recipe.id}`);
    },
  },

  watch: {
    id(newId, oldId) {
      if (oldId !== newId) {
        this.recipeStore.getOnerecipe();
        console.log(oldId);
        console.log(newId);
      }
    },
  },
};
</script>

<style scoped>
.fa-heart {
  color: #fc575e;
}

i.material-icons {
  color: #d3c7c3;
}
.active {
  color: #fc575e;
}
</style>
