import { Container, ProgressLoader } from '../../components/common';
import { GenreCard } from '../../components/main';
import { useDocumentTitle } from '../../hooks';
import { fetchGenres } from '../../redux/actions';
// import { IRootState } from '../../types/types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Genres = () => {
  const { genres, isLoading } = useSelector((state) => ({
    genres: state.genre.genres,
    isLoading: state.misc.isLoading
  }));
  const dispatch = useDispatch();

  useDocumentTitle('Genres | MOVX');
  useEffect(() => {
    if (genres.length === 0) {
      dispatch(fetchGenres());
    }
  }, []);

  return (
    <Container>
      {isLoading && <ProgressLoader message="Loading Genres" />}
      {genres.length >= 1 && (
        <>
          <div className="header__title text-center">
            <br /><br />
            <h1>Genres</h1>
          </div>
          <div className="genre__wrapper">
            {genres.map((genre) => {
              return (
                <GenreCard
                  genre={genre}
                  key={genre.id}
                />
              );
            })}
          </div>
        </>
      )}
    </Container>
  );
};

export default Genres;
