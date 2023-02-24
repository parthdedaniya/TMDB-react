import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from '../../constants/actionType';
// import { IMovieData } from '@app/types/types';

export const addToFavorites = (movie) => ({
  type: ADD_TO_FAVORITES,
  payload: movie,
});

export const removeFromFavorites = (id) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: id,
});

export const TFavoriteActionType = [
  addToFavorites().type,
  removeFromFavorites().type,
];