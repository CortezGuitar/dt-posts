const postsRequested = () => {
  return {
    type: 'FETCH_POSTS_REQUEST'
  };
};

const postsLoaded = posts => {
  return {
    type: 'FETCH_POSTS_SUCCESS',
    payload: posts
  };
};

const postsError = error => {
  return {
    type: 'FETCH_POSTS_FAILURE',
    payload: error
  };
};

const fetchPosts = postsService => () => dispatch => {
  dispatch(postsRequested());
  postsService
    .getPosts()
    .then(data => dispatch(postsLoaded(data)))
    .catch(error => dispatch(postsError(error)));
};

export default fetchPosts;
