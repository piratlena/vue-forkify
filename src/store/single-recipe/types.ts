export type State = {
  isLoading: boolean;
  searchQuery: String;
  ApiKey: String;
  recipe: IRecipe;
  id: Object;
};

export interface IRecipe {
  publisher?: String;
  image_url?: String;
  title?: String;
  id?: String;
}

export const initialState: State = {
  isLoading: false,
  searchQuery: '',
  ApiKey: import.meta.env.VITE_API_KEY,
  recipe: {},
  id: {},
};
