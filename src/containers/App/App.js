import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import PostsList from '../PostsList';
import PostPage from '../../containers/PostPage';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={PostsList} exact />
        <Route path="/posts/:postId" component={PostPage} />
      </Switch>
    </div>
  );
}

export default App;
