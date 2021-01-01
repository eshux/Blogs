import React, { FC } from 'react';
import style from './Image.module.scss';

type Props = {
  id: number;
  w: number;
  h: number;
};

export const Image: FC<Props> = ({ w, h, id }) => {
  return (
    <div className={style.imageWrapper}>
      <img
        src={`https://placebeard.it/400x400/${id}`}
        alt=""
        className={style.image}
      />
    </div>
  );
};
