import React, { FC } from 'react';
import style from './Typography.module.scss';

type Props = {
  className?: string;
};

export const Title: FC<Props> = ({ children, className }) => {
  return <h3 className={`title ${className}`}>{children}</h3>;
};

export const Body: FC<Props> = ({ children, className }) => {
  return <p className={`body ${className}`}>{children}</p>;
};
