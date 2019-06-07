const postRequested = () => {
  return {
    type: 'FETCH_POST_REQUEST'
  };
};

const postLoaded = post => {
  return {
    type: 'FETCH_POST_SUCCESS',
    payload: post
  };
};

const postError = error => {
  return {
    type: 'FETCH_POST_FAILURE',
    payload: error
  };
};

const fetchPost = postsService => id => dispatch => {
  dispatch(postRequested());
  postsService
    .getPost(id)
    .then(data => dispatch(postLoaded(data)))
    .catch(error => dispatch(postError(error)));
};

export default fetchPost;
