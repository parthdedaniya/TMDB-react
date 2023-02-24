import {
  FETCH_CURRENT_GENRE,
  FETCH_CURRENT_GENRE_SUCCESS, FETCH_GENRES,
  FETCH_GENRES_SUCCESS
} from '../../constants/actionType';
// import { IGenre, IMovieData } from '@app/types/types';

export const fetchGenres = () => ({
  type: FETCH_GENRES
});

export const fetchGenreCategory = (genreId, page = 1) => ({
  type: FETCH_CURRENT_GENRE,
  payload: {
    genreId,
    page,
  },
});

export const fetchGenresSuccess = (data) => ({
  type: FETCH_GENRES_SUCCESS,
  payload: data
});

export const fetchGenreCategorySuccess = (data) => ({
  type: FETCH_CURRENT_GENRE_SUCCESS,
  payload: data
});

export const TGenreActionType = [
  fetchGenres,
  fetchGenreCategory,
  fetchGenresSuccess,
  fetchGenreCategorySuccess
]