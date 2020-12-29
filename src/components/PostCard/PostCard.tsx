import React, { FC } from 'react';
import { Title, Body } from '../Typography/Typography';
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
        <span className={style.imageWrapper}>
          <Image w={1} h={1} id={id} />
        </span>
      </div>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </button>
  );
};
