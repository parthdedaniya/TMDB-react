import {
  IS_LOADING,
  SET_DARK_MODE,
} from '../../constants/actionType';

const defaultState = {
  isLoading: false,
  darkMode: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};
