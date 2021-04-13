import MyPosts from "./MyPosts";
import React from "react";
import {
  addPostActionCreator,
  removePostActionCreator,
  changePostTextAreaActionCreator,
} from "../../../Redux/profileReducer";
import StoreContext from "../../../storeContext";
const MyPostsContainer = (props) => {
  // let state = props.store.getState();

  return (
    <StoreContext.Consumer>
      {(store) => {
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        let removePost = () => {
          store.dispatch(removePostActionCreator());
        };
        let onChange = (text) => {
          store.dispatch.bind(store)(changePostTextAreaActionCreator(text));
        };
        let state = store.getState();
        return (
          <MyPosts
            profilePage={state.profilePage}
            postsData={state.profilePage.postsData}
            addPost={addPost}
            removePost={removePost}
            onChange={onChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
