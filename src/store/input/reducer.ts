import {
  AllActions,
  CHANGE_INPUT_VALUE,
  InitialState,
  CHANGE_PASSWORD_VALUE,
} from './type';

const initialState: InitialState = {
  userName: '',
  password: '',
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
    default:
      return state;
  }
};
