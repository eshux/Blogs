import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { getPosts, getPostData } from '../store/posts/action';
import { H2 } from '../components/Typography/Typography';
import { PostCard } from '../components/PostCard/PostCard';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { RootState } from '../store/rootReducer';
import { UserData } from '../data/userData';

const Home = () => {
  const dispatch = useDispatch();
  const newPosts = useSelector((state: RootState) => state.postReducer);
  // @ts-ignore
  const activeUser: UserData = useSelector(
    (state: RootState) => state.userReducer
  );
  const history = useHistory();

  useEffect(() => {
    dispatch(getPostData());
  }, []);

  if (!newPosts[0]) {
    return <h1>Loading...</h1>;
  }
  return (
    <section>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <H2>Hello {activeUser && activeUser?.userName}</H2>
            <SearchBar />
          </div>
        </div>

        <div className="row">
          {newPosts.map(({ userId, id, title, body }) => {
            return (
              <div key={id} className="col-md-4 col-sm-6 col-xs-12">
                <PostCard
                  userId={userId}
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
    </section>
  );
};
export default Home;
