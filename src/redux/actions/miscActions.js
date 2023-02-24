import {
  IS_LOADING,
  SET_DARK_MODE
} from '../../constants/actionType';

export const setLoading = (bool = true) => ({
  type: IS_LOADING,
  payload: bool,
});

export const setDarkMode = (bool = true) => ({
  type: SET_DARK_MODE,
  payload: bool,
});

export const TMiscActionType = [
  setLoading,
  setDarkMode
]