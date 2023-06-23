<template>
  <section class="flex flex-col py-[3rem]">
    <RecipeList :recipes="shownRecipes" v-if="!isPostLoading" />
    <UILoader v-else />

    <div class="flex m-auto w-[550px] justify-between" v-if="!isPostLoading">
      <div
        v-for="(pageNum, ind) in totalPages"
        :key="ind"
        class="w-[45px] h-[45px] p-[8px] text-center justify-center border-2 border-solid cursor-pointer border-[#f48982] rounded-full text-primary hover:bg-[#f48982] hover:text-white transition-all duration-200"
        :class="{
          'bg-[#f48982] text-white': page === pageNum,
        }"
        @click="changePage(pageNum)"
      >
        {{ pageNum }}
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import axios from 'axios';
import RecipeList from './RecipeList.vue';
import UILoader from '@/components/ui/UILoader.vue';

export default {
  components: {
    RecipeList,
    UILoader,
  },
  data() {
    return {
      isPostLoading: false,
      ApiKey: import.meta.env.VITE_API_KEY,
      page: 1,
      limitPerPage: 10,
      totalPages: 0,
      start: 0,
      end: 0,
      shownRecipes: [],
      recipes: [],
    };
  },

  methods: {
    async getRecepies() {
      try {
        this.isPostLoading = true;

        const response = await axios.get(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=${this.ApiKey}`,
          {
            params: {
              _page: this.page,
              _limit: this.limitPerPage,
            },
          },
        );

        this.recipes = response.data.data.recipes;

        this.totalPages = Math.ceil(this.recipes.length / this.limitPerPage);
      } catch (e) {
        alert('Something went wrong');
      } finally {
        this.isPostLoading = false;
      }
    },
    changePage(pageNum) {
      this.page = pageNum;
      this.start = this.limitPerPage * pageNum - this.limitPerPage;
      this.end = this.limitPerPage * pageNum;
      this.shownRecipes = this.recipes.slice(this.start, this.end);
    },
  },
  mounted() {
    this.getRecepies();
    setTimeout(() => {
      this.changePage(1);
    }, 1000);
  },
};
</script>

<style lang="scss" scoped></style>
