import React, { FC } from 'react';
import { H2, P2 } from '../Typography/Typography';
import style from './PostCard.module.scss';

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
          <img src={`https://picsum.photos/id/${id}/200/200`} alt="" />
        </span>
      </div>
      <H2>{title}</H2>
      <P2>{body}</P2>
    </button>
  );
};
