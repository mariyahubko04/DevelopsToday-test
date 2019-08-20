import React from 'react';
import { connect } from 'react-redux';

import { addPosts } from '../../actions/posts';
import { AddForm } from '../../styles';

class AddNewPostForm extends React.Component {
  state = {
    posts: {
      title: '',
      date: Date.now(),
      body: '',
      creator: '',
      comments: [],
    },
    errors: {
      title: null,
      body: null,
      creator: null,
    },
  };

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
      errors: {
        title: null,
        body: null,
        creator: null,
      },
    });
  };

  onChangeBody = event => {
    this.setState({
      body: event.target.value,
      errors: {
        title: null,
        body: null,
        creator: null,
      },
    });
  };

  onChangeCreator = event => {
    this.setState({
      creator: event.target.value,
      errors: {
        title: null,
        body: null,
        creator: null,
      },
    });
  };

  onChangePost = event => {

    const { title, body, creator, data, comments } = this.state;
    if (title.length < 5) {
      this.setState({
        errors: {
          title: 'Title should have at least 5 characters!',
        },
      });
    } else if (creator.length < 4) {
      this.setState({
        errors: {
          creator: 'Creator should have at least 4 characters!',
        },
      });
    } else if (body.length < 15) {
      this.setState({
        errors: {
          body: 'Body should have at least 15 characters!',
        },
      });
    } else {
      const post = this.state.posts;
      console.log(post);
      this.props.addPosts({title, body, data, creator, comments:[]});
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <AddForm onSubmit={this.onChangePost}>
        <label>
          Enter your name
          <input
            onChange={this.onChangeCreator}
            type="text"
            name="creator"
          />
        </label>
        {errors.creator && <span>{errors.creator}</span>}
        <label>
          Enter title post
          <input
            onChange={this.onChangeTitle}
            type="text"
            name="title"
          />
        </label>
        {errors.title && <span>{errors.title}</span>}
        <label>
          What you want to say?
          <textarea
            onChange={this.onChangeBody}
            name="body"
            rows="6"
          />
        </label>
        {errors.body && <span>{errors.body}</span>}
        <button type="submit">Add Post</button>
      </AddForm>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addPosts: post => dispatch(addPosts(post))
});

export default connect(
  null,
  mapDispatchToProps
)(AddNewPostForm);
