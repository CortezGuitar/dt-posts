import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import withPostsService from '../../hoc';
import { fetchPosts, createPost } from '../../store/actions';
import Post from '../../components/Post';
import './PostList.css';

class PostsList extends Component {
  state = { title: '', body: '' };

  componentDidMount() {
    this.props.fetchPosts();
  }

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.createPost(this.state);
    this.setState({ title: '', body: '' });
  };

  onChangeHandler = e => {
    const name = e.target.name;
    this.setState({
      ...this.state,
      [name]: e.target.value
    });
  };

  render() {
    const { posts } = this.props;
    const { title, body } = this.state;
    return (
      <div className="PostsList">
        <form onSubmit={this.onSubmitHandler} className="PostsList-form">
          <div className="PostsList-formgroup">
            <label htmlFor="title">
              <h4>Title:</h4>
            </label>
            <input
              type="text"
              className="PostsList-forminput"
              name="title"
              id="title"
              value={title}
              onChange={this.onChangeHandler}
              required
            />
          </div>
          <div className="PostsList-formgroup">
            <label htmlFor="body">
              <h4>Content:</h4>
            </label>
            <textarea
              className="PostsList-forminput"
              name="body"
              id="body"
              value={body}
              onChange={this.onChangeHandler}
              required
            />
          </div>
          <div className="text-right">
            <button type="submit" className="btn PostsList-btn">
              Submit
            </button>
          </div>
        </form>
        <div className="PostsList-list">
          {posts &&
            posts.map(({ title, body, id }) => (
              <Post key={id} title={title} body={body} id={id} />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts
  };
};

const mapDispatchToProps = (dispatch, { postsService }) => {
  return bindActionCreators(
    {
      fetchPosts: fetchPosts(postsService),
      createPost: createPost(postsService)
    },
    dispatch
  );
};

export default withPostsService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostsList)
);
