import * as action from '../../constants/actionType';
// import { TMediaType } from '@app/types/types';

const fetchTrendingMovies = (page = 1) => ({
  type: action.FETCH_TRENDING_MOVIES,
  payload: { page },
});

const fetchDiscoverMovies = (page = 1) => ({
  type: action.FETCH_DISCOVER_MOVIES,
  payload: { page },
});

const fetchTvShows = (page = 1) => ({
  type: action.FETCH_TV_SHOWS,
  payload: { page },
});

const fetchPopularMovies = (page = 1) => ({
  type: action.FETCH_POPULAR_MOVIES,
  payload: { page },
});

const fetchTopRatedMovies = (page = 1) => ({
  type: action.FETCH_TOPRATED_MOVIES,
  payload: { page },
});

const fetchUpcomingMovies = (page = 1) => ({
  type: action.FETCH_UPCOMING_MOVIES,
  payload: { page },
});

const fetchMainMovies = () => ({
  type: action.FETCH_MAIN_MOVIES,
});

const fetchSelectedMovie = (mediaType, id) => ({
  type: action.FETCH_SELECTED_MOVIE,
  payload: {
    mediaType,
    id,
  },
});

const fetchTrendingMoviesSuccess = (data) => ({
  type: action.FETCH_TRENDING_MOVIES_SUCCESS,
  payload: data
});

const fetchDiscoverMoviesSuccess = (data) => ({
  type: action.FETCH_DISCOVER_MOVIES_SUCCESS,
  payload: data
});

const fetchTVShowSuccess = (data) => ({
  type: action.FETCH_TV_SHOWS_SUCCESS,
  payload: data
});

const fetchSelectedMoviesSuccess = (data) => ({
  type: action.FETCH_SELECTED_MOVIE_SUCCESS,
  payload: data
});

const fetchPopularMoviesSuccess = (data) => ({
  type: action.FETCH_POPULAR_MOVIES_SUCCESS,
  payload: data
});

const fetchTopRatedMoviesSuccess = (data) => ({
  type: action.FETCH_TOPRATED_MOVIES_SUCCESS,
  payload: data
});

const fetchUpcomingMoviesSuccess = (data) => ({
  type: action.FETCH_UPCOMING_MOVIES_SUCCESS,
  payload: data
});

const fetchMainMoviesSuccess = (data) => ({
  type: action.FETCH_MAIN_MOVIES_SUCCESS,
  payload: data
});

export {
  fetchTrendingMovies,
  fetchDiscoverMovies,
  fetchTvShows,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchMainMovies,
  fetchSelectedMovie,
  fetchTrendingMoviesSuccess,
  fetchDiscoverMoviesSuccess,
  fetchTVShowSuccess,
  fetchSelectedMoviesSuccess,
  fetchPopularMoviesSuccess,
  fetchTopRatedMoviesSuccess,
  fetchUpcomingMoviesSuccess,
  fetchMainMoviesSuccess,
};

export const TMovieActionType = [
  fetchTrendingMovies,
  fetchDiscoverMovies,
  fetchTvShows,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchMainMovies,
  fetchSelectedMovie,
  fetchTrendingMoviesSuccess,
  fetchDiscoverMoviesSuccess,
  fetchTVShowSuccess,
  fetchSelectedMoviesSuccess,
  fetchPopularMoviesSuccess,
  fetchTopRatedMoviesSuccess,
  fetchUpcomingMoviesSuccess,
  fetchMainMoviesSuccess
]