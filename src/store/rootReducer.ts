import { combineReducers } from 'redux';
import { postReducer } from './posts/reducer';
import { commentReducer } from './comments/reducer';
import { loginReducer } from './login/reducer';
import { inputReducer } from './input/reducer';
import { userReducer } from './users/reducer';

const rootReducer = combineReducers({
  postReducer,
  commentReducer,
  loginReducer,
  inputReducer,
  userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
