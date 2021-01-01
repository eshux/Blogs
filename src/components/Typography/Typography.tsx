import React, { FC } from 'react';
import style from './Typography.module.scss';

export const H1: FC = ({ children }) => {
  return <h1 className={style.h1}>{children}</h1>;
};

export const H2: FC = ({ children }) => {
  return <h2 className={style.h2}>{children}</h2>;
};
export const H4: FC = ({ children }) => {
  return <h4 className={style.h4}>{children}</h4>;
};

export const H3: FC = ({ children }) => {
  return <h3 className={style.h3}>{children}</h3>;
};

export const P1: FC = ({ children }) => {
  return <p className={style.p1}>{children}</p>;
};

export const P2: FC = ({ children }) => {
  return <p className={style.p2}>{children}</p>;
};
export const P3: FC = ({ children }) => {
  return <p className={style.p3}>{children}</p>;
};
export const P4: FC = ({ children }) => {
  return <p className={style.p4}>{children}</p>;
};
