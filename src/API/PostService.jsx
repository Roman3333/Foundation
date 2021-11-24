import axios from "axios";

export default async function PostService(limit, page) {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts", {
    params: {
      _limit: limit,
      _page: page,
    },
  });
  return posts;
}
