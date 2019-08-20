import React from "react";
import { connect } from "react-redux";

import { addPosts } from "../../actions/posts";
import { AddForm } from "../../styles";

class AddNewPostForm extends React.Component {
  state = {
    posts: {
      id: "",
      title: "",
      date: Date.now(),
      body: "",
      creator: ""
    },
    errors: {
      title: "",
      body: "",
      creator: ""
    }
  };

  onChangeTitle = event => {
    this.setState({ title: event.target.value });
  };

  onChangeBody = event => {
    this.setState({ body: event.target.value });
  };

  onChangeCreator = event => {
    this.setState({ creator: event.target.value });
  };

  onChangePost = event => {
    event.preventDefault();

    const { title, body, creator } = this.state;
    if (title.length < 5) {
      this.setState({
        errors: {
          title: "Title should have at least 5 characters!"
        }
      });
    } else if (creator.length < 4) {
      this.setState({
        errors: {
          title: "Creator should have at least 4 characters!"
        }
      });
    } else if (body.length < 15) {
      this.setState({
        errors: {
          body: "Body should have at least 15 characters!"
        }
      });
    } else {
      const post = this.state;
      this.props.addPosts(post);
    }
  };

  render() {
    return (
      <AddForm onSubmit={this.onChangePost}>
        <label>
          Enter your name
          <input onChange={this.onChangeCreator} type="text" name="creator" />
        </label>
        <label>
          {" "}
          Enter tittle post
          <input onChange={this.onChangeTitle} type="text" name="tittle" />
        </label>
        <label>
          What you want to say?
          <textarea onChange={this.onChangeBody} name="body" rows="6" />
        </label>
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
