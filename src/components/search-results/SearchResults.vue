<template>
  <section class="flex flex-col py-[3rem]">
    <RecipeList :recipes="recipes" v-if="!isPostLoading" />

    <div class="flex m-auto w-[550px] justify-between">
      <div
        v-for="(pageNum, ind) in totalPages"
        :key="ind"
        class="w-[45px] h-[45px] p-[8px] text-center justify-center border-2 border-solid cursor-pointer border-primary rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-200"
        :class="{
          'bg-primary text-white': page === pageNum,
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

export default {
  components: {
    RecipeList,
  },
  data() {
    return {
      isPostLoading: false,

      ApiKey: import.meta.env.VITE_API_KEY,
      page: 1,
      limitPerPage: 10,
      totalPages: 0,
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
        console.log(response);

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
    },
  },
  mounted() {
    this.getRecepies();
  },
};
</script>

<style lang="scss" scoped></style>
