import React from 'react';
import { PostsServiceConsumer } from '../service';

export default WrappedComponent => {
  const withPostsService = ({ ...props }) => {
    return (
      <PostsServiceConsumer>
        {postsService => {
          return <WrappedComponent {...props} postsService={postsService} />;
        }}
      </PostsServiceConsumer>
    );
  };

  return withPostsService;
};