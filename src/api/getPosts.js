export const getPosts = async() => {
  const url = 'https://simple-blog-api.crew.red/posts';

  const response = await fetch(url);
  const posts = await response.json();

  return posts;
};
