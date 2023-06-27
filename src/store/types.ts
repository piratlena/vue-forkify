export type State = {
  isLoading: boolean;
  searchQuery: String;
  ApiKey: String;
  page: Number;
  limitPerPage: Number;
  totalPages: Number;
  start: Number;
  end: Number;
  shownRecipes: Object;
  recipes: Object;
};

export interface IRecipes {
  publisher: String;
  image_url: String;
  title: String;
  id: String;
}

export const state: State = {
  isLoading: false,
  searchQuery: '',
  ApiKey: import.meta.env.VITE_API_KEY,
  page: 1,
  limitPerPage: 10,
  totalPages: 0,
  start: 0,
  end: 0,
  shownRecipes: [] as IRecipes[],
  recipes: [] as IRecipes[],
};
