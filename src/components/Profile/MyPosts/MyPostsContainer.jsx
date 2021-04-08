import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  removePostActionCreator,
  changePostTextAreaActionCreator,
} from "../../../Redux/profileReducer";
import { connect } from "react-redux";
let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    postsData: state.profilePage.postsData,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    removePost: () => {
      dispatch(removePostActionCreator());
    },
    onChange: (text) => {
      dispatch(changePostTextAreaActionCreator(text));
    },
  };
};
const SuperMyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
export default SuperMyPostsContainer;
