import React, { FC, useState } from 'react';
import './App.css';
import 'flexboxgrid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Post">
          <Post />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
