<template>
  <li
    class="flex flex-row py-[1.5rem] px-[3.25rem] items-center cursor-pointer border-r-1px border-r-solid border-r-white hover:bg-grey-light-2 hover:translate-y-[-2px] transition-all duration-300"
  >
    <div class="rounded-full h-[4.8rem] w-[4.8rem] overflow-hidden relative mr-[20px]">
      <img :src="recipe.image_url" alt="food" class="w-full h-full block object-cover" />
    </div>

    <div>
      <h4 class="text-xl font-semibold text-primary">{{ recipe.title }}</h4>
      <p class="text-lg text-uppercase">{{ recipe.publisher }}</p>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps({
  recipe: {
    type: Object,
    required: true
  }
})
</script>

<style scoped></style>
