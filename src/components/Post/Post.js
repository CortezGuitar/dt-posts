import React from 'react';
import { Link } from 'react-router-dom';

import './Post.css';

const Post = ({ title, body, id }) => {
  return (
    <div className="Post">
      <Link className="Post-link" to={`/posts/${id}`}>
        <h3>{title}</h3>
        <p>{body}</p>
      </Link>
    </div>
  );
};

export default Post;
