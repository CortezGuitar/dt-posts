const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_POSTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'FETCH_POST_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_POST_SUCCESS':
      return {
        ...state,
        activePost: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_POST_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'CREATE_POST_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'CREATE_POST_SUCCESS':
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false,
        error: null
      };
    case 'CREATE_POST_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'CREATE_COMMENT_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'CREATE_COMMENT_SUCCESS':
      return {
        ...state,
        activePost: {
          ...state.activePost,
          comments: [...state.activePost.comments, action.payload]
        },
        loading: false,
        error: null
      };
    case 'CREATE_COMMENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default postsReducer;
