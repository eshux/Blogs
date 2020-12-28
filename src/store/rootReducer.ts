import { combineReducers } from 'redux';
import { postReducer } from './posts/reducer';
import { commentReducer } from './comments/reducer';
import { loginReducer } from './login/reducer';


const rootReducer = combineReducers({
  postReducer,
  commentReducer,
  loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
