import PeopleList from '../../../components/main/People/PeopleList';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{navigate, params}}
      />
    );
  }
}

const MovieCast = () => {
  const history = useNavigate();
  const params = useParams();
  const casts = useSelector((state) => state.movies.current.casts);

  const onClickLink = () => {
    history.push(`/view/movie/${params.id}/casts`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="movie__casts">
      <div className="container__wrapper movie__casts-content">
        <div className="movie__casts-wrapper">
          <div className="movie__casts-header header__title">
            <h1>Top Billed Casts</h1>
          </div>
          <br />
          <PeopleList
            people={casts.slice(0, 12)}
            gridClass="movie__casts-grid"
          />
          <br />
          <br />
          {casts.length >= 1 ? (
            <button
              className="button--primary button--block m-auto"
              onClick={onClickLink}
            >
              View All Casts
            </button>
          ) : (
            <p style={{ opacity: '.7', fontStyle: 'italic' }}>
              No casts found for this movie.
            </p>
          )}
        </div>
        <MovieDetails />
      </div>
    </div>
  );
};

export default withRouter(MovieCast);
// export default MovieCast;