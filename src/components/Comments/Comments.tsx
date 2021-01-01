import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Comments.module.scss';
import { RootState } from '../../store/rootReducer';
import { showComments } from '../../store/show_comments/action';
import { SingleComment } from '../SingleComment/SingleComment';
import {
  changeUserName,
  changeUserComment,
  changeUserEmail,
} from '../../store/input/action';
import { addComment } from '../../store/comments/action';

type Props = {
  idPost: string;
};

export const CommentField: FC<Props> = ({ idPost }) => {
  const dispatch = useDispatch();
  const showField = useSelector(
    (state: RootState) => state.showCommentsReducer
  );
  const newComments = useSelector((state: RootState) => state.commentReducer);

  const newUser = useSelector(
    (state: RootState) => state.inputReducer.commentUserName
  );
  const newEmail = useSelector(
    (state: RootState) => state.inputReducer.userEmail
  );
  const newComment = useSelector(
    (state: RootState) => state.inputReducer.userComment
  );

  const singlePostComments = newComments.filter((item) => {
    if (item.postId === Number(idPost)) {
      return item;
    }
    return '';
  });

  const clickHandler = () => {
    if (newUser !== '' && newEmail !== '' && newComment !== '') {
      dispatch(
        addComment({
          postId: Number(idPost),
          id: newComments.length,
          name: newUser,
          email: newEmail,
          body: newComment,
        })
      );
    }
    dispatch(showComments(true));
    dispatch(changeUserName(''));
    dispatch(changeUserEmail(''));
    dispatch(changeUserComment(''));
  };

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
      <div>
        <button type="button" className={style.button} onClick={clickHandler}>
          ADD COMMENT
        </button>
        <br />
        <input
          type="text"
          placeholder="Username"
          value={newUser}
          onChange={(event) => dispatch(changeUserName(event.target.value))}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={newEmail}
          onChange={(event) => dispatch(changeUserEmail(event.target.value))}
        />
        <br />
        <input
          type="text"
          placeholder="Comment"
          value={newComment}
          onChange={(event) => dispatch(changeUserComment(event.target.value))}
        />
      </div>
    </div>
  );
};
