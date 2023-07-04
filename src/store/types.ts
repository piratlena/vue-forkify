export type State = {
  isLoading: boolean;
  searchQuery: String;
  ApiKey: String;
  page: Number;
  limitPerPage: number;
  totalPages: number;
  start: number;
  end: number;
  shownRecipes: IRecipes[];
  recipes: IRecipes[];
  isBookmarked: boolean;
  pageNum: number;
};

export interface IRecipes {
  publisher: String;
  image_url: String;
  title: String;
  id: String;
}

export const initialState: State = {
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
  isBookmarked: false,
  pageNum: 1,
};
