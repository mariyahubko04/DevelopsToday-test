const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return action.posts;
    case 'ADD_POST':
      return [...state, action.post];
    case 'ADD_COMMENT':
      return state.map(post => {
        if (post.id === action.id) {
          return {
            ...post,
            comments: [...post.comments, action.comment],
          };
        } else {
          return post;
        }
      });
    default:
      return state;
  }
};

export default postsReducer;
