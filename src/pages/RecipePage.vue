<template>
  <div class="items-center bg-grey-light-1">
    <div>
      <h1>Это страница поста с ID: {{ $route.params.id }}</h1>
      <div v-for="index in [...new Array(recipeStore.limitPerPage)]" :key="index">
        <UISkeletonSearchItemVue />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UISkeletonSearchItemVue from '@/components/ui/UISkeletonSearchItem.vue';
import { useRecipeStore } from '@/store/store';
defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});

const recipeStore = useRecipeStore();
</script>

<style scoped></style>
