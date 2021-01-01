import React, { FC } from 'react';
import { H2, P2, P3 } from '../Typography/Typography';
import style from './PostCard.module.scss';
import { Image } from '../Image/Image';

type Props = {
  userId: number;
  id: number;
  title: string;
  body: string;

  onClick: () => void;
};

export const PostCard: FC<Props> = ({ userId, id, title, body, onClick }) => {
  return (
    <button type="button" className={style.postCard} onClick={onClick}>
      <div>
        <Image w={1} h={1} id={id} />
      </div>
      <H2>{title}</H2>
      <P2>{body}</P2>
      <P3>Beard more</P3>
    </button>
  );
};
