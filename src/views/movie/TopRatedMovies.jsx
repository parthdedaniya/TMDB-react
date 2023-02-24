import { Container, Pagination } from '../../components/common';
import { MovieList } from '../../components/main';
import { numberWithCommas } from '../../helpers/helperFunctions';
import { useDocumentTitle, usePageSaver } from '../../hooks';
import { fetchTopRatedMovies } from '../../redux/actions';
// import { IRootState } from '../../types/types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TopRatedMovies = () => {
  const { topRatedMovies, isLoading } = useSelector((state) => ({
    topRatedMovies: state.movies.topRated,
    isLoading: state.misc.isLoading,
  }));
  const { currentPage, setCurrentPage } = usePageSaver();
  const dispatch = useDispatch();

  useDocumentTitle('Top Rated Movies | MOVX');
  useEffect(() => {
    if (!topRatedMovies) {
      dispatch(fetchTopRatedMovies(currentPage));
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topRatedMovies?.page]);

  const handlePageChange = (page) => {
    if (topRatedMovies?.page !== page && !isLoading) {
      dispatch(fetchTopRatedMovies(page));
      setCurrentPage(page)
    }
  };

  return (
    <Container>
      <div className="movie__header">
        <div className="movie__header-title">
          <h1>Top Rated Movies</h1>
          <h3>{numberWithCommas(topRatedMovies?.total_results || 0)} Movies</h3>
        </div>
      </div>
      <MovieList
        movies={topRatedMovies?.results || []}
        templateCount={10}
      />
      {topRatedMovies && (
        <Pagination
          activePage={topRatedMovies.page}
          itemsCountPerPage={1}
          onChange={handlePageChange}
          pageRangeDisplayed={10}
          totalItemsCount={topRatedMovies.total_pages}
          totalPage={topRatedMovies.total_pages}
        />
      )}
    </Container>
  );
};

export default TopRatedMovies;
