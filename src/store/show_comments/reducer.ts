import { AllActions, SHOW_COMMENTS } from './types';

const initialState: boolean = false;

export const showCommentsReducer = (
  state = initialState,
  action: AllActions
) => {
  switch (action.type) {
    case SHOW_COMMENTS: {
      return action.active;
    }
    default:
      return state;
  }
};
