import { AllActions, SHOW_LOGIN } from './types';

const initialState: boolean = false;

export const loginReducer = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case SHOW_LOGIN: {
      return action.active;
    }
    default:
      return state;
  }
};
