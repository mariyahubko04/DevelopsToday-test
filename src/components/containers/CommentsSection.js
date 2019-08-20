import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

class PostItem extends React.Component {
  render() {
    const { post } = this.props;

    return (
      <div>
        <div>{post.title}</div>
        <div>{post.body}</div>
        <p>{post.creator || "Unknown"}</p>
        <p> {moment(post.date).format("MMM Do YYYY")}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.posts
});

export default connect(mapStateToProps)(PostItem);
