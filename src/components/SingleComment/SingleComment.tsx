import React, { FC } from 'react';
import { H4, P4 } from '../Typography/Typography';
import style from './SingleComment.module.scss';

type Props = {
  name: string;
  email: string;
  body: string;
};

export const SingleComment: FC<Props> = ({ name, email, body }) => {
  return (
    <div className={style.commentsList}>
      <H4>
        <b>{name}</b>
      </H4>
      <P4>
        <i>{email}</i>
      </P4>

      <P4>{body}</P4>
      <br />
    </div>
  );
};
