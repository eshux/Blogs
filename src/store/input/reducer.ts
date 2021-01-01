import {
  AllActions,
  InitialState,
  CHANGE_USERNAME_VALUE,
  CHANGE_PASSWORD_VALUE,
  CHANGE_SEARCH_INPUT,
  CHANGE_USER_NAME,
  CHANGE_USER_EMAIL,
  CHANGE_USER_COMMENT,
} from './type';

const initialState: InitialState = {
  userName: '',
  password: '',
  searchInput: '',
  commentUserName: '',
  userEmail: '',
  userComment: '',
};

export const inputReducer = (state = initialState, actions: AllActions) => {
  switch (actions.type) {
    case CHANGE_USERNAME_VALUE: {
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
    case CHANGE_USER_NAME: {
      const newState = { ...state };
      newState.commentUserName = actions.inputValue;
      return newState;
    }
    case CHANGE_USER_EMAIL: {
      const newState = { ...state };
      newState.userEmail = actions.inputValue;
      return newState;
    }
    case CHANGE_USER_COMMENT: {
      const newState = { ...state };
      newState.userComment = actions.inputValue;
      return newState;
    }

    default:
      return state;
  }
};
