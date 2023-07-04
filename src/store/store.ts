import { defineStore } from 'pinia';
import axios from 'axios';
import { type State } from './types';

export const useRecipeStore = defineStore('recipeStore', {
  state: (): State => ({
    isLoading: false,
    searchQuery: '',
    ApiKey: import.meta.env.VITE_API_KEY,
    page: 1,
    limitPerPage: 10,
    totalPages: 0,
    start: 0,
    end: 0,
    shownRecipes: [],
    recipes: [],
    isBookmarked: false,
    pageNum: 1,
  }),
  getters: {},
  actions: {
    async getRecepies() {
      try {
        this.isLoading = true;

        const response = await axios.get(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${
            this.searchQuery ? `${this.searchQuery}` : 'pizza'
          }&key=${this.ApiKey}`,
          {
            params: {
              _page: this.page,
              _limit: this.limitPerPage,
            },
          },
        );

        this.recipes = response.data.data.recipes;
        console.log(this.recipes);

        this.totalPages = Math.ceil(this.recipes.length / this.limitPerPage);
        this.changePage(1);
        this.isLoading = false;
      } catch (e) {
        alert('Something went wrong');
      }
    },
    changePage(pageNum) {
      this.page = this.pageNum;
      this.start = this.limitPerPage * this.pageNum - this.limitPerPage;
      this.end = this.limitPerPage * this.pageNum;
      this.shownRecipes = [...this.shownRecipes, ...this.recipes.slice(this.start, this.end)];
    },

    async loadMoreRecipes() {
      try {
        this.isLoading = true;
        this.shownRecipes = [];
        this.pageNum = 1;
        const response = await axios.get(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${
            this.searchQuery ? `${this.searchQuery}` : 'pizza'
          }&key=${this.ApiKey}`,
          {
            params: {
              _limit: this.limitPerPage,
            },
          },
        );
        this.isLoading = false;
        this.recipes = response.data.data.recipes;

        console.log(this.recipes);

        this.totalPages = Math.ceil(this.recipes.length / this.limitPerPage);
        this.loadMore();
      } catch (e) {
        alert('Something went wrong');
      }
    },

    loadMore() {
      this.start = this.limitPerPage * this.pageNum - this.limitPerPage;
      this.end = this.limitPerPage * this.pageNum;
      this.shownRecipes = [...this.shownRecipes, ...this.recipes.slice(this.start, this.end)];
      console.log(this.shownRecipes);
    },

    clearSearchQuery() {
      this.searchQuery = '';
    },
  },
});
