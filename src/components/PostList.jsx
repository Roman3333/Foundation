import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

function PostList({ posts, remove }) {
  if (!posts.length) {
    return <h2 style={{ textAlign: "center" }}>Посты не найдены</h2>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Список постов</h1>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem post={post} remove={remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default PostList;
