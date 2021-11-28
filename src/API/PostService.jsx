import axios from "axios";

export async function PostService(limit, page) {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts", {
    params: {
      _limit: limit,
      _page: page,
    },
  });
  return posts;
}

export async function getById(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return response;
}

export async function getCommentsById(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return response;
}
