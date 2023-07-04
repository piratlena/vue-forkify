import { defineStore } from 'pinia';
import axios from 'axios';
import { type State } from './types';

export const useSingleRecipeStore = defineStore('singleRecipeStore', {
  state: (): State => ({
    isLoading: false,
    searchQuery: '',
    ApiKey: import.meta.env.VITE_API_KEY,
    recipe: {},
    id: {},
  }),

  actions: {
    async getOnerecipe() {
      try {
        this.isLoading = true;
        this.recipe = {};
        const response = await axios.get(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${this.id}?key=${this.ApiKey}`,
        );
        this.isLoading = false;
        this.recipe = response.data.data.recipe;

        console.log(this.recipe);
      } catch (e) {
        console.log(e);
      }
    },
  },
});
