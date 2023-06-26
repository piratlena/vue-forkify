<template>
  <section class="flex flex-col py-[3rem]">
    <RecipeList :recipes="shownRecipes" v-if="!isLoading" />
    <UILoader v-else />

    <div class="flex m-auto w-[550px] justify-between" v-if="!isLoading">
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
    </div>
  </section>
</template>

<script lang="ts">
import { useRecipeStore } from '@/store/store';
import { storeToRefs } from 'pinia';
import RecipeList from './RecipeList.vue';
import UILoader from '@/components/ui/UILoader.vue';

export default {
  components: {
    RecipeList,
    UILoader,
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
    } = storeToRefs(recipeStore);

    recipeStore.getRecepies();

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
    };
  },
  data() {
    // return {
    //   isPostLoading: false,
    //   ApiKey: import.meta.env.VITE_API_KEY,
    //   page: 1,
    //   limitPerPage: 10,
    //   totalPages: 0,
    //   start: 0,
    //   end: 0,
    //   shownRecipes: [],
    //   recipes: [],
    // };
  },

  methods: {
    // async getRecepies() {
    //   try {
    //     this.isPostLoading = true;

    //     const response = await axios.get(
    //       `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=${this.ApiKey}`,
    //       {
    //         params: {
    //           _page: this.page,
    //           _limit: this.limitPerPage,
    //         },
    //       },
    //     );

    //     this.recipes = response.data.data.recipes;

    //     this.totalPages = Math.ceil(this.recipes.length / this.limitPerPage);
    //   } catch (e) {
    //     alert('Something went wrong');
    //   } finally {
    //     this.isPostLoading = false;
    //   }
    // },
    //   changePage(pageNum) {
    //     this.page = pageNum;
    //     this.start = this.limitPerPage * pageNum - this.limitPerPage;
    //     this.end = this.limitPerPage * pageNum;
    //     this.shownRecipes = this.recipes.slice(this.start, this.end);
    //   },
    // },
    mounted() {
      this.recipeStore.getRecepies();
      console.log(this.totalPages);
      setTimeout(() => {
        this.recipeStore.changePage(1);
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped></style>
