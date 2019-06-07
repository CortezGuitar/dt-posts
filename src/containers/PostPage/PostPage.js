import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import withPostsService from '../../hoc';
import { fetchPost, createComment } from '../../store/actions';
import './PostPage.css';

class PostPage extends Component {
  state = { formBody: '' };

  componentDidMount() {
    const { postId } = this.props.match.params;
    this.props.fetchPost(postId);
  }

  onSubmitHandler = e => {
    e.preventDefault();
    const { postId } = this.props.match.params;
    const { formBody } = this.state;
    this.props.createComment({ body: formBody, postId });
    this.setState({ formBody: '' });
  };

  onChangeHandler = e => {
    const name = e.target.name;
    this.setState({
      ...this.state,
      [name]: e.target.value
    });
  };

  render() {
    const { post } = this.props;
    const { formBody } = this.state;
    if (post) {
      const { title, body, comments } = post;
      return (
        <div className="PostPage">
          <div className="PostPage-container">
            <button
              type="button"
              className="btn PostsPage-btnback"
              onClick={() => this.props.history.push('/')}
            >
              Back
            </button>
            <h3>{title}</h3>
            <p className="PostPage-body">{body}</p>
            <div>
              <div className="PostPage-comments">
                <h4>Comments</h4>
                {comments &&
                  comments.map(({ id, body }) => <p key={id}>{body}</p>)}
              </div>
              <form onSubmit={this.onSubmitHandler} className="PostsPage-form">
                <div className="PostsPage-formgroup">
                  <label htmlFor="formBody">
                    <h5>Add Comment:</h5>
                  </label>
                  <textarea
                    className="PostsPage-forminput"
                    name="formBody"
                    id="formBody"
                    value={formBody}
                    onChange={this.onChangeHandler}
                    required
                  />
                </div>
                <div className="text-right">
                  <div className="btn-group">
                    <button type="submit" className="btn PostsPage-btnsubmit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
    return 'Loading...';
  }
}

const mapStateToProps = ({ activePost }) => {
  return {
    post: activePost
  };
};

const mapDispatchToProps = (dispatch, { postsService }) => {
  return bindActionCreators(
    {
      fetchPost: fetchPost(postsService),
      createComment: createComment(postsService)
    },
    dispatch
  );
};

export default withPostsService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostPage)
);
