import { PersonProfiles } from '../../components/main';
import { useDocumentTitle } from '../../hooks';
// import { IRootState } from '@app/types/types';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { RouteComponentProps } from 'react-router';

const Pictures = ({ history }) => {
  const actor = useSelector((state) => state.people.current.actor);

  useDocumentTitle('Profile Pictures');
  useEffect(() => {
    if (!actor) {
      history.goBack();
    }
  }, []);

  return !actor ? null : (
    <>
      <div className="posters__banner">
        <img src="/background.jpg" alt="" />
        <div className="posters__banner-content">
          <h1>{actor.name}</h1>
          <button
            className="button--back"
            onClick={history.goBack}>
            Back
          </button>
        </div>
      </div>
      <div className="container__wrapper">
        <PersonProfiles />
      </div>
    </>
  );
};

export default Pictures;
