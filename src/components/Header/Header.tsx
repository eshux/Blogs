import React, { FC } from 'react';
import { Nav } from '../Nav/Nav';

export const Header: FC = () => {
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
          <div className="col-xs-3">Login</div>
        </div>
      </div>
    </header>
  );
};
