import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
  let PostsElement = props.profilePage.postsData.map((el) => (
    <Post key={el.id} message={el.message} likeCounts={el.likeCounts} />
  ));
  let addPostElem = React.createRef();
  let onChange = () => {
    let text = addPostElem.current.value;
    props.changePostTextArea(text);
  };
  return (
    <div>
      <h1>My posts</h1>
      <div className={classes.post}>
        <textarea
          cols="30"
          rows="10"
          ref={addPostElem}
          className={classes.textarea}
          onChange={onChange}
          value={props.profilePage.newPostText}
        />
        <div className={classes.buttons}>
          <button className={classes.btn} onClick={props.addPost}>
            Add post
          </button>
          <button className={classes.btn} onClick={props.removePost}>
            Post remove
          </button>
        </div>
      </div>
      {PostsElement}
    </div>
  );
};

export default MyPosts;
