import React, { FC } from 'react';
import { H2, P2 } from '../Typography/Typography';
import style from './PostCard.module.scss';
import { Image } from '../Image/Image';

type Props = {
  id: number;
  title: string;
  body: string;
  onClick: () => void;
};

const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str;
  }
  return `${str.slice(0, num)}...`;
};

export const PostCard: FC<Props> = ({ id, title, body, onClick }) => {
  return (
    <button type="button" className={style.postCard} onClick={onClick}>
      <div className={style.content}>
        <Image w={1} h={1} id={id} />
        <H2>{title}</H2>
        <P2>{truncateString(body, 100)}</P2>
      </div>
      <span className={style.anchor}>Beard more</span>
    </button>
  );
};
