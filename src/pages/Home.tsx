import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { getPosts } from '../store/posts/action';
import { Posts } from '../store/posts/types';
import { PostCard } from '../components/PostCard/PostCard';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { RootState } from '../store/rootReducer';

const Home = () => {
  const dispatch = useDispatch();
  const newPosts = useSelector((state: RootState) => state.postReducer);
  const history = useHistory();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      const filteredPosts = response.data.filter(
        (item: Object, index: number) => {
          return index < 15;
        }
      );
      dispatch(getPosts(filteredPosts));
    });
  }, []);

  if (!newPosts[0]) {
    return <h1>Loading...</h1>;
  }
  return (
    <section>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h1>This is Home Page</h1>
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
