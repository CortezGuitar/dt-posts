const createCommentRequested = () => {
  return {
    type: 'CREATE_COMMENT_REQUEST'
  };
};

const createCommentLoaded = post => {
  return {
    type: 'CREATE_COMMENT_SUCCESS',
    payload: post
  };
};

const createCommentError = error => {
  return {
    type: 'CREATE_COMMENT_FAILURE',
    payload: error
  };
};

const createComment = postsService => body => dispatch => {
  dispatch(createCommentRequested());
  postsService
    .createComment(body)
    .then(data => dispatch(createCommentLoaded(data)))
    .catch(error => dispatch(createCommentError(error)));
};

export default createComment;
