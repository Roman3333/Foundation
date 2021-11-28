import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById, getCommentsById } from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

function PostIdPage() {
  let params = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await getById(id);
    setPost(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await getCommentsById(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      <h1>Вы открыли страницу поста {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}
          {post.title}
        </div>
      )}
      <h2>Комментарии</h2>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((item) => {
            return (
              <div key={item.id} style={{ marginTop: "15px" }}>
                <div>{item.email}</div>
                <div>{item.body}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PostIdPage;
