import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Login.module.scss';
import { RootState } from '../../store/rootReducer';
import { showLogin } from '../../store/login/action';

const Login: FC = () => {
  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.loginReducer);

  const loginHandler = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

  };

  return (
    <div
      className={`${style.wrapper} 
      ${show ? style.wrapperShow : ''}`}
    >
      <div className={style.content}>
        <h1>Login to your account</h1>
        <button type="button" className={style.closeBtn} onClick={() => dispatch(showLogin(!show))}>x</button>
        <form>
          <input type="text" placeholder="Username" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <button type="submit" onClick={loginHandler}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
