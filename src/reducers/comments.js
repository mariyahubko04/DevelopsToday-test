const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_COMMENTS":
      return action.comments;
    case "ADD_COMMENT":
      return state.map(comment => {
        return ([
          ...comment,
          action.comment,
        ]);
      });
    default:
      return state;
  }
}

export default commentsReducer;
