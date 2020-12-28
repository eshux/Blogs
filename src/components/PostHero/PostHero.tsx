import React, { FC } from 'react';
import { Title, Body } from '../Typography/Typography';
import style from './PostHero.module.scss';

type Props = {
  id: number;
  title: string;
  body: string;
};
const PostHero: FC<Props> = ({ id, title, body }) => {
  return (
    <div className={style.postHero}>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </div>
  );
};

export default PostHero;
