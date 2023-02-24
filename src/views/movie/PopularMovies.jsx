import { Container, Pagination } from '../../components/common';
import { MovieList } from '../../components/main';
import { numberWithCommas } from '../../helpers';
import { useDocumentTitle, usePageSaver } from '../../hooks';
import { fetchPopularMovies } from '../../redux/actions';
// import { IRootState } from '../../types/types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PopularMovies = () => {
  const { popularMovies, isLoading } = useSelector((state) => ({
    popularMovies: state.movies.popular,
    isLoading: state.misc.isLoading,
  }));
  const { currentPage, setCurrentPage } = usePageSaver();
  const dispatch = useDispatch();
  const route = '/movie/popular';

  useDocumentTitle('Popular Movies | MOVX');
  useEffect(() => {
    if (!popularMovies) {
      console.log(currentPage)
      dispatch(fetchPopularMovies(currentPage));
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [popularMovies?.page]);

  const handlePageChange = (page) => {
    if (popularMovies?.page !== page && !isLoading) {
      dispatch(fetchPopularMovies(page));
      setCurrentPage(page)
    }
  };

  return (
    <Container>
      <div className="movie__header">
        <div className="movie__header-title">
          <h1>Popular Movies</h1>
          <h3>{numberWithCommas(popularMovies?.total_results || 0)} Movies</h3>
        </div>
      </div>
      <MovieList
        movies={popularMovies?.results || []}
        templateCount={10}
      />
      {popularMovies && (
        <Pagination
          activePage={popularMovies.page}
          itemsCountPerPage={1}
          onChange={handlePageChange}
          pageRangeDisplayed={10}
          totalItemsCount={popularMovies.total_pages}
          totalPage={popularMovies.total_pages}
        />
      )}
    </Container>
  );
};

export default PopularMovies;
