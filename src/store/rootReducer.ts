import { combineReducers } from 'redux';
import { postReducer } from './posts/reducer';
import { commentReducer } from './comments/reducer';
import { loginReducer } from './login/reducer';
import { inputReducer } from './input/reducer';
import { userReducer } from './users/reducer';
import { showCommentsReducer } from './show_comments/reducer';

const rootReducer = combineReducers({
  postReducer,
  commentReducer,
  loginReducer,
  inputReducer,
  userReducer,
  showCommentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
