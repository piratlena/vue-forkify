<template>
  <li
    class="flex flex-row w-[70%] m-auto py-[1.5rem] px-[3.25rem] justify-between cursor-pointer border-r-1px border-r-solid border-r-white hover:bg-grey-light-2 hover:translate-y-[-2px] transition-all duration-300"
  >
    <div class="rounded-full h-[4.8rem] w-[4.8rem] overflow-hidden relative mr-[20px]">
      <img :src="recipe.image_url" alt="food" class="w-full h-full block object-cover" />
    </div>

    <div @click="$router.push(`recipe/${recipe.id}`)">
      <h4 class="text-xl font-semibold text-primary text-center">{{ recipe.title }}</h4>
      <p class="text-lg text-uppercase text-center">{{ recipe.publisher }}</p>
    </div>
    <div
      class="w-[100px] mt-0 ml-[40px] translate-y-[-8px] flex flex-cols justify-between items-center"
      @click="$store.commit('incrementLikes')"
    >
      <i class="fa-regular fa-heart fa-2x"></i>
      <span class="text-primary text-4xl">{{ $store.state.likes }}</span>
    </div>
  </li>
</template>

<script lang="ts">
export default {
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      likes: 0,
    };
  },
  methods: {
    addLike() {
      this.likes = this.likes + 1;
    },
  },
};
</script>

<style scoped>
.fa-heart {
  color: #fc575e;
}
</style>
