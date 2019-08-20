import React from 'react';
import { connect } from 'react-redux';

import { addNewComment } from '../../actions/comments';
import { FlexStart } from '../../styles';

class AddCommentForm extends React.Component {
  state = {
    comment: '',
    error: null
  };

  changeComment = event => {
    const { value } = event.target;

    this.setState({
      comment: value,
      error: null
    });
  };

  addComment = event => {
    const { comment } = this.state;
    const { addNewComment, id } = this.props;
    event.preventDefault();

    if (comment.length < 5 || comment.length > 50) {
      this.setState({
        error:
          'Enter a comment with a length of at least 5 characters and a maximum of 50!',
      });
    } else {
      addNewComment(id, comment);

      this.setState({
        comment: '',
      });
    }
  };

  render() {
    const { error, comment } = this.state;

    return (
      <form onSubmit={this.addComment}>
        <FlexStart>
          <textarea
            onChange={this.changeComment}
            type="text"
            value={comment}
            rows="3"
            placeholder="Enter your comment"
          />
          {error && <span>{error}</span>}
          <button type="submit">Add comment</button>
        </FlexStart>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNewComment: (id, comment) => dispatch(addNewComment(id, comment))
});

export default connect(
  null,
  mapDispatchToProps
)(AddCommentForm);
