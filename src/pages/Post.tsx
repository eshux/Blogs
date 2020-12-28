import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getComments } from '../store/comments/action';
import { Comments } from '../store/comments/types';
import PostHero from '../components/PostHero/PostHero';
import { RootState } from '../store/rootReducer';

const Post = () => {
  const dispatch = useDispatch();
  const newPosts = useSelector((state: RootState) => state.postReducer);
  const newComments = useSelector((state: RootState) => state.commentReducer);
  const { idPost } = useParams<{ idPost: string }>();

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        const filteredComments = response.data.filter(
          (item: Object, index: number) => {
            return index < 75;
          }
        );
        dispatch(getComments(filteredComments));
      });
  }, []);

  const singlePost = newPosts.find((item) => item.id === Number(idPost));

  if (!singlePost) {
    return <h1>Loading...</h1>;
  }

  if (!newComments[0]) {
    return <h1>Loading...</h1>;
  }
  const singlePostComments = newComments.filter((item) => {
    if (item.postId === singlePost.id) {
      return item;
    }
    return '';
  });
  console.log(singlePostComments);

  return (
    <section>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h1>This is Post Page</h1>
          </div>
          <div className="row">
            <PostHero
              id={singlePost.id}
              title={singlePost.title}
              body={singlePost.body}
            />
          </div>
          <div className="row">
            {singlePostComments.map(({ postId, id, name, email, body }) => {
              return (
                <div key={id} className="col-md-4 col-sm-6 col-xs-12">
                  {email}
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
