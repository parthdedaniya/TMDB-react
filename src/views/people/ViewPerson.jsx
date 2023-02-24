import { Casting, PersonBiography } from '../../components/main';
import { useDocumentTitle } from '../../hooks';
import { fetchSelectedPerson } from '../../redux/actions';
// import { IRootState } from '@app/types/types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { RouteComponentProps } from 'react-router';

const ViewPerson = ({ match }) => {
  const actor = useSelector((state) => state.people.current.actor);
  const dispatch = useDispatch();
  const actorId = match.params.id;

  useDocumentTitle(actor ? `${actor.name} Details` : 'View Person | MOVX');
  useEffect(() => {
    if (parseInt(actorId, 10) !== actor?.id) {
      dispatch(fetchSelectedPerson(actorId));
    }
  }, []);

  return actor ? (
    <>
      <PersonBiography />
      <Casting />
    </>
  ) : <PersonBiography />;
};

export default ViewPerson;
