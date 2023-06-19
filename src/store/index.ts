import { createStore, Store } from 'vuex';
import { recipeModule } from '@/store/RecipeModule';

export default createStore({
  modules: {
    recipe: recipeModule,
  },
});
