import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import PostsService from './service';
import { PostsServiceProvider } from './service';
import store from './store/store';

import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const postsService = new PostsService();

ReactDOM.render(
  <Provider store={store}>
    <PostsServiceProvider value={postsService}>
      <Router>
        <App />
      </Router>
    </PostsServiceProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
