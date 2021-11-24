import React from "react";

function PostItem(props) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.post.title}</strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <button onClick={() => props.remove(props.post)}>Delete</button>
      </div>
    </div>
  );
}

export default PostItem;
