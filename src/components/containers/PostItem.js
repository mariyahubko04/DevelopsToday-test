import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

import { setAllComments } from '../../actions/comments';
import AddCommentForm from './AddCommentForm';
import { Flex, PostItemSection, Comment, CommentContainer } from '../../styles';

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
    console.log(post);

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
          {post.comments &&
            post.comments.length > 0 ? (
              post.comments.map(comment => {
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
  comments: state.comments.filter(comment => +comment.prevId === +props.postId),
});

const mapDispatchToProps = dispatch => ({
  setAllComments: () => dispatch(setAllComments()),
});

PostItem.propTypes = {
  post: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    creator: PropTypes.string,
    date: PropTypes.date,
    comments: PropTypes.array,
  })).isRequired,
  setAllComments: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    prevId: PropTypes.string,
    body: PropTypes.string,
  })).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItem);
