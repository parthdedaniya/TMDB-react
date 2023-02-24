import moviesReducer from './moviesReducer';
import filtersReducer from './filtersReducer';
import genreReducer from './genreReducer';
import miscReducer from './miscReducer';
import peopleReducer from './peopleReducer';
import searchReducer from './searchReducer';
import favoritesReducer from './favoritesReducer';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  favorites: favoritesReducer,
  genre: genreReducer,
  movies: moviesReducer,
  filters: filtersReducer,
  misc: miscReducer,
  people: peopleReducer,
  search: searchReducer
};