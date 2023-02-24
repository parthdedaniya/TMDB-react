import Container from '../../components/common/Container/Container';
import PaginationBar from '../../components/common/Pagination/Pagination';
import MovieList from '../../components/main/Movies/MovieList';
import { numberWithCommas } from '../../helpers/helperFunctions';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import usePageSaver from '../../hooks/usePageSaver';
import { fetchGenreCategory } from '../../redux/actions/genreActions';
// import { IRootState } from '../../types/types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { RouteComponentProps } from 'react-router';


const SelectedGenre = ({ match }) => {
  const { currentGenre, isLoading } = useSelector((state) => ({
    currentGenre: state.genre.current,
    isLoading: state.misc.isLoading,
  }));
  const { currentPage, setCurrentPage } = usePageSaver();
  const dispatch = useDispatch();

  useDocumentTitle('Genres | MOVX');
  useEffect(() => {
    dispatch(fetchGenreCategory(match.params.id, currentPage));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentGenre?.page]);

  const handlePageChange = (page) => {
    if (currentGenre?.page !== page && !isLoading) {
      dispatch(fetchGenreCategory(match.params.id, page));
      setCurrentPage(page)
    }
  };

  return (
    <Container>
      <div className="movie__header">
        <div className="movie__header-title">
          <h1>{match.params.genre.replace('-', ' ')}</h1>
          <h3>{numberWithCommas(currentGenre?.total_results || 0)} Movies</h3>
        </div>
      </div>
      <MovieList
        category="movie"
        movies={currentGenre?.results || []}
        templateCount={10}
      />
      {currentGenre && (
        <PaginationBar
          activePage={currentGenre.page}
          itemsCountPerPage={1}
          onChange={handlePageChange}
          pageRangeDisplayed={10}
          totalItemsCount={currentGenre.total_pages}
          totalPage={currentGenre.total_pages}
        />
      )}
    </Container>
  );
};

export default SelectedGenre;
