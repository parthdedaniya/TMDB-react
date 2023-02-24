import { Container, Filter, Pagination } from '../../components/common';
import { MovieList } from '../../components/main';
import { numberWithCommas } from '../../helpers';
import { useDidMount, useDocumentTitle, usePageSaver } from '../../hooks';
import { fetchDiscoverMovies } from '../../redux/actions';
// import { IRootState } from '../../types/types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DiscoverMovies = () => {
  const { discoverMovies, filter } = useSelector((state) => ({
    discoverMovies: state.movies.discover,
    filter: state.filters.discover,
  }));
  const dispatch = useDispatch();
  const didMount = useDidMount();
  const { currentPage, setCurrentPage } = usePageSaver();

  useDocumentTitle('Discover Movies | MOVX');
  useEffect(() => {
    if (!discoverMovies || didMount) {
      dispatch(fetchDiscoverMovies(currentPage));
    }

    window.scrollTo(0, 0);
  }, [filter, discoverMovies?.page]);

  const handlePageChange = (page) => {
    if (discoverMovies?.page !== page) {
      dispatch(fetchDiscoverMovies(page));
      setCurrentPage(page);
    }
  };

  return (
    <Container>
      <div className="movie__header">
        <div className="movie__header-title">
          <h1>Discover Movies</h1>
          <h3>{numberWithCommas(discoverMovies?.total_results || 0)} Movies</h3>
        </div>
        {discoverMovies && (
          <Filter filterCategory="discover" />
        )}
      </div>
      <MovieList
        movies={discoverMovies?.results || []}
        templateCount={10}
      />
      {discoverMovies && (
        <Pagination
          activePage={discoverMovies.page}
          itemsCountPerPage={1}
          onChange={handlePageChange}
          pageRangeDisplayed={10}
          totalItemsCount={discoverMovies.total_pages}
          totalPage={discoverMovies.total_pages}
        />
      )}
    </Container>
  );
};

export default DiscoverMovies;
