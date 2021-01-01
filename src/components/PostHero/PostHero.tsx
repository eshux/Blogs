import React, { FC } from 'react';
import { H1, P1 } from '../Typography/Typography';
import style from './PostHero.module.scss';
import { Image } from '../Image/Image';

type Props = {
  id: number;
  title: string;
  body: string;
};

const PostHero: FC<Props> = ({ id, title, body }) => {
  return (
    <div className={style.postHero}>
      <div className={style.img}>
        <Image w={1} h={1} id={id} />
      </div>
      <H1>{title}</H1>
      <P1>{body}</P1>
    </div>
  );
};

export default PostHero;
