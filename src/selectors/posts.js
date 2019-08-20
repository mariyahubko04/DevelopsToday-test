import moment from 'moment';

export const sortPostsByDate = postsArray => {
  const newPostsArray = [].concat(postsArray);
  return newPostsArray.sort((a, b) => {
    if (moment(a.date) > moment(b.date)) {
      return -1;
    }
    if (moment(a.date) < moment(b.date)) {
      return 1;
    }
  });
};
