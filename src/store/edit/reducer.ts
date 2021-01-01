import { AllActions, SHOW_EDIT } from './types';

const initialState: boolean = false;

export const editReducer = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case SHOW_EDIT: {
      return action.active;
    }
    default:
      return state;
  }
};
