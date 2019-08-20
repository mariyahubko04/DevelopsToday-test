import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

import { setAllComments } from "../../actions/comments";
import AddCommentForm from "./AddCommentForm";
import { Flex, PostItemSection, Comment, CommentContainer } from "../../styles";

class PostItem extends React.Component {
  async componentDidMount() {
    try {
      if (this.props.comments.length === 0) {
        await this.props.setAllComments();
      }
    } catch (e) {
      this.setState({ error: e.message });
    }
  }

  render() {
    const { post, comments } = this.props;

    return (
      <PostItemSection>
        <h2>{post.title}</h2>
        <div>{post.body}</div>
        <Flex>
          <p>{post.creator || "Unknown"} </p>
          <p> {moment(post.date).format("MMM Do YYYY")}</p>
        </Flex>
        <span>Comments:</span>
        <AddCommentForm id={this.props.post.id} />

        <CommentContainer>
          {comments.length > 0 ? (
            comments.map(comment => {
              return <Comment>{comment.body}</Comment>;
            })
          ) : (
            <div>There are no comments for this post.</div>
          )}
        </CommentContainer>
        <Link to={`/`}>Back to home</Link>
      </PostItemSection>
    );
  }
}

const mapStateToProps = (state, props) => ({
  post: state.posts.find(post => post.id === +props.postId),
  comments: state.comments.filter(comment => +comment.prevId === +props.postId)
});

const mapDispatchToProps = dispatch => ({
  setAllComments: () => dispatch(setAllComments())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItem);
