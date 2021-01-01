import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Comments.module.scss';
import { RootState } from '../../store/rootReducer';
import { showComments } from '../../store/show_comments/action';
import { SingleComment } from '../SingleComment/SingleComment';

type Props = {
  idPost: string;
};

export const CommentField: FC<Props> = ({ idPost }) => {
  const dispatch = useDispatch();
  const showField = useSelector(
    (state: RootState) => state.showCommentsReducer
  );
  const newComments = useSelector((state: RootState) => state.commentReducer);

  const singlePostComments = newComments.filter((item) => {
    if (item.postId === Number(idPost)) {
      return item;
    }
    return '';
  });

  if (!newComments[0]) {
    return <h1>Loading...</h1>;
  }

  return (
    <div
      className={`${style.wrapper} 
      ${showField ? style.wrapperShow : ''}`}
    >
      <button
        type="button"
        className={style.button}
        onClick={() => dispatch(showComments(!showField))}
      >
        COMMENTS
      </button>

      {showField &&
        singlePostComments.map(({ id, name, email, body }) => {
          return (
            <div key={id} className="col-xs-12">
              <SingleComment name={name} email={email} body={body} />
            </div>
          );
        })}
    </div>
  );
};
