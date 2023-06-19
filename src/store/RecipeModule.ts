export const recipeModule = {
  state: () => ({
    isLoading: false,

    ApiKey: 'f0e421ec-42fb-4abe-9c4c-e580c39ccf5c',
    page: 1,
    limit: 10,
    totalPages: 0,
    recipes: [],
    searchQuery: '',
  }),
  getters: {},
  mutations: {
    setLoading(state) {
      state.isLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPage(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setRecipes(state, recipes) {
      state.recipes = recipes;
    },
  },
  actions: {
    async getRecepies() {
      try {
        commit('setLoading', true);

        const response = await axios.get(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=${this.ApiKey}`,
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          },
        );
        commit('setTotalPages', Math.ceil(state.recipes.length / state.limit));

        commit('setRecipes', response.data.data.recipes);
      } catch (e) {
        alert('Something went wrong');
      } finally {
        commit('setLoading', false);
      }
    },
  },
};
