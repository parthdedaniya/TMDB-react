import {
  FETCH_PEOPLE_SUCCESS,
  FETCH_SELECTED_PERSON_SUCCESS
} from '../../constants/actionType';
// import { IPeopleState } from '@app/types/types';
// import { TPeopleActionType } from '../actions/peopleActions';

const defaultState = {
  people: null,
  current: {
    actor: null,
    casting: [],
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        people: action.payload,
      };
      break;
    case FETCH_SELECTED_PERSON_SUCCESS:
      return {
        ...state,
        current: {
          actor: action.payload.actor,
          casting: action.payload.casting,
        },
      };
      break;
    default:
      return state;
  }
};
