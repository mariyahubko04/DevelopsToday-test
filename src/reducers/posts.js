const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_POSTS":
      return action.posts;
    case "ADD_POST":
      return [...state, action.post];
    default:
      return state;
  }
};

export default postsReducer;
