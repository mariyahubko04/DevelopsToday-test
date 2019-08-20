import axios from 'axios';

const URL = `https://simple-blog-api.crew.red/posts`;

export const setPosts = posts => ({
  type: 'SET_POSTS',
  posts
});

export const setAllPosts = () => {
  return async dispatch => {
    try {
      const response = await axios.get(URL);
      dispatch(setPosts(response.data.filter(post =>
        post.comments && post.title.length > 0
      )));
    } catch (e) {
      throw new Error('Could not retrieve posts...');
    }
  };
};

export const addPost = post => ({
  type: "ADD_POST",
  post
});

export const addPosts = post => {
  return async dispatch => {
    try {
      const response = await axios({
        url: URL,
        method: "post",
        data: post
      });

      dispatch(addPost(response.data.post));
      alert('Post is added!')
    } catch (e) {
      throw new Error(e.response.data.error);
    }
  };
};
