import { defineStore } from 'pinia';
import axios from 'axios';
import { type State } from './types';

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
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
      } catch (e) {
        alert('Something went wrong');
      } finally {
        this.isLoading = false;
      }
    },
    changePage(pageNum) {
      this.page = pageNum;
      this.start = this.limitPerPage * pageNum - this.limitPerPage;
      this.end = this.limitPerPage * pageNum;
      return (this.shownRecipes = this.recipes.slice(this.start, this.end));
    },
  },
});
