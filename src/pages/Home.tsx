import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getPostData } from '../store/posts/action';
import { H1 } from '../components/Typography/Typography';
import { PostCard } from '../components/PostCard/PostCard';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { RootState } from '../store/rootReducer';
import { UserData } from '../data/userData';

const Home = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state: RootState) => state.inputReducer.searchInput
  );
  const newPosts = useSelector((state: RootState) => state.postReducer);
  const activeUser: UserData = useSelector(
    (state: RootState) => state.userReducer
  );
  const history = useHistory();

  useEffect(() => {
    dispatch(getPostData());
  }, []);

  const filtered = newPosts.filter((item) => item.title.includes(searchValue));

  if (!newPosts[0]) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <div className="container container-fluid">
        <div className="row center-xs">
          <div className="col-xs-12">
            <H1>
              Do you have a beard {activeUser.userName && activeUser.userName}?
            </H1>
            <SearchBar />
          </div>
        </div>

        <div className="row center-xs">
          {!searchValue
            ? newPosts.map(({ id, title, body }) => {
              return (
                <div
                  key={id}
                  className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
                >
                  <PostCard
                    id={id}
                    title={title}
                    body={body}
                    onClick={() => history.push(`/Post/${id}`)}
                  />
                </div>
              );
            })
            : filtered.map(({ id, title, body }) => {
              return (
                <div
                  key={id}
                  className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
                >
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
    </section>
  );
};
export default Home;
