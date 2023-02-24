import {
  FETCH_CURRENT_GENRE_SUCCESS, FETCH_GENRES_SUCCESS
} from '../../constants/actionType';
// import { TGenreActionType } from '../actions/genreActions';

const defaultState = {
  genres: [],
  current: null,
};

export default function genreReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload.genres,
      };
    case FETCH_CURRENT_GENRE_SUCCESS:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
}
