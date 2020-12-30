import {
  AllActions,
  CHANGE_INPUT_VALUE,
  InitialState,
  CHANGE_PASSWORD_VALUE,
  CHANGE_SEARCH_INPUT,
} from './type';

const initialState: InitialState = {
  userName: '',
  password: '',
  searchInput: '',
};

export const inputReducer = (state = initialState, actions: AllActions) => {
  switch (actions.type) {
    case CHANGE_INPUT_VALUE: {
      const newState = { ...state };
      newState.userName = actions.inputValue;
      return newState;
    }
    case CHANGE_PASSWORD_VALUE: {
      const newState = { ...state };
      newState.password = actions.inputValue;
      return newState;
    }
    case CHANGE_SEARCH_INPUT: {
      const newSearch = { ...state };
      newSearch.searchInput = actions.inputValue;
      return newSearch;
    }
    default:
      return state;
  }
};
