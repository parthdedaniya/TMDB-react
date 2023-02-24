import { FETCH_PEOPLE, FETCH_PEOPLE_SUCCESS, FETCH_SELECTED_PERSON, FETCH_SELECTED_PERSON_SUCCESS } from '../../constants/actionType';
// import { ICast, IPeopleState, IResponse } from '@app/types/types';

export const fetchSelectedPerson = (id) => ({
  type: FETCH_SELECTED_PERSON,
  payload: id,
});

export const fetchPeople = (page = 1) => ({
  type: FETCH_PEOPLE,
  payload: { page },
});

export const fetchPeopleSuccess = (data) => ({
  type: FETCH_PEOPLE_SUCCESS,
  payload: data
});

export const fetchSelectedPersonSuccess = (data) => ({
  type: FETCH_SELECTED_PERSON_SUCCESS,
  payload: data
});

export const TPeopleActionType = [
  fetchSelectedPerson,
  fetchPeople,
  fetchPeopleSuccess,
  fetchSelectedPersonSuccess
]