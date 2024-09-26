/* eslint-disable no-fallthrough */
const CHANGE_POST_TEXT_AREA = "CHANGE-POST-TEXT-AREA";
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";

let initialState = {
  postsData: [
    { message: "Hello", id: 0, likeCounts: 0 },
    { message: " How are you", id: 1, likeCounts: 0 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_POST:
      if (state.newPostText) {
        state.postsData.push({
          message: state.newPostText,
          id: Math.random(),
          likeCounts: 0,
        });
        state.newPostText = "";
      }
      return state;
    case REMOVE_POST:
      state.postsData.splice(-1, 1);
      return state;
    case CHANGE_POST_TEXT_AREA:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const removePostActionCreator = () => {
  return {
    type: REMOVE_POST,
  };
};
export const changePostTextAreaActionCreator = (text) => {
  return {
    type: CHANGE_POST_TEXT_AREA,
    newText: text,
  };
};

export default profileReducer;
