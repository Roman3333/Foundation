import React from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function Form({ create }) {
  const [post, setPost] = React.useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    if (!post.title || !post.body) {
      alert("Одно из полей не заполнено");
      return;
    }

    let newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  return (
    <form>
      <MyInput
        value={post.title}
        placeholder={"Название поста"}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        value={post.body}
        placeholder={"Описание поста"}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
}

export default Form;
