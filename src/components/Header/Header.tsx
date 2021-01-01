import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from '../Login/Login';
import { RootState } from '../../store/rootReducer';
import { showLogin } from '../../store/login/action';
import logo from '../../assets/logo.svg';
import login from '../../assets/user.svg';
import style from './Header.module.scss';

export const Header: FC = () => {
  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.loginReducer);

  return (
    <header>
      <div className="container container-fluid">
        <div className="row middle-xs">
          <div className="col-xs-3">
            <Link to="/">
              <img className={style.logo} src={logo} alt="logo" />
            </Link>
          </div>
          <div className="col-xs-9">
            <button
              className={style.loginBtn}
              type="button"
              onClick={() => dispatch(showLogin(!show))}
            >
              Login
              <img src={login} alt="" />
            </button>

            <Login />
          </div>
        </div>
      </div>
    </header>
  );
};
