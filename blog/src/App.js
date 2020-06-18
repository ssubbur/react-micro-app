import React from 'react';
import logo from './logo.svg';
import PostCreate from './PostCreate';
import PostList from './PostList';

import './App.css';

function App() {
  return (
    <div className="container">
      <PostCreate/>
      <hr/>
      <PostList/>

    </div>
  );
}

export default App;
