import { Pagination } from '../../../components/common';
import { MovieList } from '../../../components/main';
import { searchMovies } from '../../../redux/actions';
// import { IRootState } from '@app/types/types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

const SearchMovieTab = () => {
  const dispatch = useDispatch();
  const { query } = useParams();
  const { movies, isLoading } = useSelector((state => ({
    movies: state.search.movies,
    isLoading: state.misc.isLoading
  })))
  const handlePageChange = (page) => {
    if (movies?.page !== page && !isLoading) {
      dispatch(searchMovies(query, page));
    }
  };

  return (movies && movies.results.length !== 0) ? (
    <>
      <MovieList movies={movies.results} />
      <Pagination
        activePage={movies.page}
        itemsCountPerPage={1}
        onChange={handlePageChange}
        pageRangeDisplayed={10}
        totalItemsCount={movies.total_pages}
        totalPage={movies.total_pages}
      />
    </>
  ) : (
    <div className="search__no-result">
      <h1>No movie found.</h1>
      <i className="fa fa-film" />
    </div>
  );
};

export default SearchMovieTab;
