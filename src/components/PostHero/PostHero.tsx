import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { H1, P1 } from '../Typography/Typography';
import style from './PostHero.module.scss';
import { Image } from '../Image/Image';
import { RootState } from '../../store/rootReducer';
import { UserData } from '../../data/userData';
import { showEdit } from '../../store/edit/action';
import { changeEditInput } from '../../store/input/action';

type Props = {
  id: number;
  title: string;
  body: string;
};

const PostHero: FC<Props> = ({ id, title, body }) => {
  const dispatch = useDispatch();
  const showEditInput = useSelector((state: RootState) => state.editReducer);
  const editInput = useSelector(
    (state: RootState) => state.inputReducer.editInput
  );
  // @ts-ignore
  const activeUser: UserData = useSelector(
    (state: RootState) => state.userReducer
  );

  const editHandler = () => {
    dispatch(showEdit(!showEditInput));
    dispatch(changeEditInput(`${title}${body}`));
  };

  return (
    <div className={style.postHero}>
      <div className={style.contents}>
        <div className={style.img}>
          <Image w={1} h={1} id={id} />
        </div>
        {showEditInput === true ? (
          <textarea
            className={style.editInput}
            value={editInput}
            onChange={(e) => dispatch(changeEditInput(e.target.value))}
          />
        ) : (
          <div className={style.text}>
            <H1>{title}</H1>
            <P1>{body}</P1>
          </div>
        )}
      </div>
      <div>
        {activeUser.isAdmin === true && (
          <button type="button" onClick={editHandler}>
            edit
          </button>
        )}
      </div>
    </div>
  );
};

export default PostHero;
