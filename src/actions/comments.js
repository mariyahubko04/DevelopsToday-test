import axios from "axios";

const URL = `https://simple-blog-api.crew.red/comments`;

export const setComments = comments => ({
  type: "SET_COMMENTS",
  comments
});

export const setAllComments = () => {
  return async dispatch => {
    try {
      const response = await axios.get(URL);
      dispatch(setComments(response.data));
    } catch (e) {
      throw new Error("Could not retrieve comments...");
    }
  };
};

export const addComment = (id, comment) => ({
  type: "ADD_COMMENT",
  id,
  comment
});

export const addNewComment = (id, comment) => {
  return async dispatch => {
    try {
      const response = await axios({
        url: URL,
        method: "post",
        data: {body:comment, prevId:id}
      });
      console.log(response.data);

      dispatch(addComment(response.data));
    } catch (e) {
      throw new Error("Could not add comment...");
    }
  };
};

