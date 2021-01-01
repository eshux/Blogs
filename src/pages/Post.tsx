import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getCommentsData } from '../store/comments/action';
import { getPostData } from '../store/posts/action';
import PostHero from '../components/PostHero/PostHero';
import { RootState } from '../store/rootReducer';
import { PostCard } from '../components/PostCard/PostCard';
import { CommentField } from '../components/Comments/Comments';

const Post = () => {
  const dispatch = useDispatch();
  const newPosts = useSelector((state: RootState) => state.postReducer);

  const { idPost } = useParams<{ idPost: string }>();
  const history = useHistory();
  useEffect(() => {
    dispatch(getPostData());
    dispatch(getCommentsData());
  }, []);

  const singlePost = newPosts.find((item) => item.id === Number(idPost));

  if (!singlePost) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <div className="container container-fluid">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h1>This is Post Page</h1>
          </div>
          <div className="row center-xs">
            <div className="col-xs-12 center-xs">
              <PostHero
                id={singlePost.id}
                title={singlePost.title}
                body={singlePost.body}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 center-xs">
              <CommentField idPost={idPost} />
            </div>
          </div>

          <div className="row center-xs">
            {newPosts.slice(1, 4).map(({ id, title, body }) => {
              return (
                <div key={id} className="col-md-4 col-sm-6 col-xs-12">
                  <PostCard
                    id={id}
                    title={title}
                    body={body}
                    onClick={() => history.push(`/Post/${id}`)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Post;
