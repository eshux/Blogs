import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Login.module.scss';
import { RootState } from '../../store/rootReducer';
import { showLogin } from '../../store/login/action';
import {
  changeUsernameValue,
  changePasswordValue,
} from '../../store/input/action';
import { setActiveUser } from '../../store/users/action';
import closeIcon from '../../assets/CloseIcon.svg';
import { UserData } from '../../data/userData';

const Login: FC = () => {
  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.loginReducer);
  const inputValue = useSelector(
    (state: RootState) => state.inputReducer.userName
  );
  const passwordValue = useSelector(
    (state: RootState) => state.inputReducer.password
  );

  const users: UserData[] = JSON.parse(localStorage.users);
  const allUserNames: string[] = users.map((item) => item.userName);


  const loginHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (allUserNames.includes(inputValue)) {
      const activeUser = users.find((item) => item.userName === inputValue);
      if (activeUser!.password === passwordValue) {
        dispatch(setActiveUser(activeUser!));
        dispatch(showLogin(!show));
      }
    }
    dispatch(changeUsernameValue(''));
    dispatch(changePasswordValue(''));
  };

  return (
    <div
      className={`${style.wrapper} 
      ${show ? style.wrapperShow : ''}`}
    >
      <div className={style.content}>
        <span className={style.text}>
          <b>Welcome back,</b>
          sign in to continue
        </span>

        <button
          type="button"
          className={style.closeBtn}
          onClick={() => dispatch(showLogin(!show))}
        >
          <img src={closeIcon} alt='' />
        </button>
        <form className={style.form}>
          <input
            className={style.input}
            type="text"
            placeholder="Username"
            value={inputValue}
            onChange={(e) => dispatch(changeUsernameValue(e.target.value))}
          />
          <input
            className={style.input}
            type="password"
            placeholder="Password"
            value={passwordValue}
            onChange={(e) => dispatch(changePasswordValue(e.target.value))}
          />
          <button type="submit" className={style.button} onClick={loginHandler}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
