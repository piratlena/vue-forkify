<template>
  <section class="flex flex-col py-[3rem]">
    <RecipeList :recipes="shownRecipes" v-if="!isLoading" />
    <div v-else>
      <div v-for="index in [...new Array(limitPerPage)]" :key="index">
        <UISkeletonSearchItem />
      </div>
    </div>

    <div v-show="pageNum <= totalPages" class="observer cursor-pointer" @click="pageNum += 1">
      Load more
    </div>

    <!-- <div class="flex m-auto w-[550px] justify-between" v-if="!isLoading">
      <div
        v-for="(pageNum, ind) in totalPages"
        :key="ind"
        class="w-[45px] h-[45px] p-[8px] text-center justify-center border-2 border-solid cursor-pointer border-pink rounded-full text-primary hover:bg-pink hover:text-white transition-all duration-200"
        :class="{
          'bg-pink text-white': page === pageNum,
        }"
        @click="recipeStore.changePage(pageNum)"
      >
        {{ pageNum }}
      </div>
    </div> -->
  </section>
</template>

<script lang="ts">
import { useRecipeStore } from '@/store/store';
import { storeToRefs } from 'pinia';
import RecipeList from './RecipeList.vue';
import UISkeletonSearchItem from '../ui/UISkeletonSearchItem.vue';

export default {
  components: {
    RecipeList,
    UISkeletonSearchItem,
  },

  setup() {
    const recipeStore = useRecipeStore();
    const {
      isLoading,
      searchQuery,
      page,
      shownRecipes,
      recipes,
      limitPerPage,
      totalPages,
      start,
      end,
      pageNum,
    } = storeToRefs(recipeStore);

    return {
      recipeStore,
      isLoading,
      searchQuery,
      page,
      shownRecipes,
      recipes,
      limitPerPage,
      totalPages,
      start,
      end,
      pageNum,
    };
  },
  data() {},

  mounted() {
    this.recipeStore.loadMoreRecipes();
  },

  watch: {
    pageNum(newNum, oldNum) {
      if (oldNum < newNum) {
        this.recipeStore.loadMore();
      }
    },
  },

  methods: {},
};
</script>

<style scoped>
.observer {
  margin: 0 auto;
  padding: 10px;
  background: palevioletred;
  color: white;
  border-radius: 8px;
}
</style>
