import { combineReducers } from 'redux';
import { postReducer } from './posts/reducer';
import { commentReducer } from './comments/reducer';

const rootReducer = combineReducers({
  postReducer,
  commentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
