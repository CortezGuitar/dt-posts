import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { postsReducer } from './reducers';

const store = createStore(
  postsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
