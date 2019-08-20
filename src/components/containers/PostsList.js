import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

import { setAllPosts } from '../../actions/posts';
import { sortPostsByDate } from '../../selectors/posts';
import { PostBlock, Flex, H1, Border } from '../../styles';

export class PostsList extends React.Component {
  state = {
    error: null,
  };

  async componentDidMount() {
    try {
      if (this.props.posts.length === 0) {
        await this.props.setAllPosts();
      }
    } catch (e) {
      this.setState({ error: e.message });
    }
  }

  handleFetchStatus = () => {
    if (this.state.error) {
      return <div>{this.state.error}</div>;
    } else {
      return <div>Downloading data..</div>;
    }
  };

  handleDeletePost = async id => {
    try {
      await this.props.deletePosts(id);
    } catch (e) {
      this.setState({ error: e.message });
    }
  };

  render() {
    const { posts } = this.props;

    return (
      <div className="container">
        <H1>List of posts (total posts - {posts.length})</H1>
        {posts.length >= 1
          ? posts.map(post => {
            return (
              <PostBlock key={post.id}>
                <Link to={`/posts/${post.id}`}>
                  <h2>{post.title}</h2>
                </Link>
                <div>{post.body.substring(0, 200) + '...'}</div>
                <Flex>
                  <p>{post.creator || "Unknown"} </p>
                  <p> {moment(post.date).format('MMM Do YYYY')}</p>
                </Flex>
                <Border>
                  <Link to={`/posts/${post.id}`}>Read the whole post</Link>
                </Border>
              </PostBlock>
            );
          })
          : this.handleFetchStatus()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: sortPostsByDate(state.posts),
});

const mapDispatchToProps = dispatch => ({
  setAllPosts: () => dispatch(setAllPosts()),
});

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    creator: PropTypes.string,
    date: PropTypes.date,
  })).isRequired,
  setAllPosts: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
