import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES
} from '../../constants/actionType';
// import { IMovieData } from '@app/types/types';
// import { TFavoriteActionType } from '../actions/favoriteActions';

export default function favoriteReducer(
  state = [],
  action
) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [action.payload, ...state];
    case REMOVE_FROM_FAVORITES:
      return state.filter((favorite) => favorite.id !== action.payload);
    default:
      return state;
  }
};
