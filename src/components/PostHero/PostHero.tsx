import React, { FC } from 'react';
import { H1, P1 } from '../Typography/Typography';
import style from './PostHero.module.scss';

type Props = {
  id: number;
  title: string;
  body: string;
};
const PostHero: FC<Props> = ({ id, title, body }) => {
  return (
    <div className={style.postHero}>
      <H1>{title}</H1>
      <P1>{body}</P1>
    </div>
  );
};

export default PostHero;
