import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Nav } from '../Nav/Nav';
import Login from '../Login/Login';
import { RootState } from '../../store/rootReducer';
import { showLogin } from '../../store/login/action';

export const Header: FC = () => {
  const dispatch = useDispatch();
  const show = useSelector((state: RootState) => state.loginReducer);

  return (
    <header>
      <div className="container container-fluid">
        <div className="row middle-xs">
          <div className="col-xs-3">
            <span>Logo</span>
          </div>
          <div className="col-xs-6 center-xs">
            <Nav />
          </div>
          <div className="col-xs-3">
            <button type='button' onClick={() => dispatch(showLogin(!show))}>Login</button>
          </div>
          <Login />
        </div>
      </div>
    </header>
  );
};
