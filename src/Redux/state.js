let renderEntireTree = () => {};
let state = {
  profilePage: {
    postsData: [
      { message: "Hello", id: 0, likeCounts: 0 },
      { message: " How are you", id: 1, likeCounts: 0 },
    ],
    newPostText: "",
  },
  dialogsPage: {
    dialogData: [
      { name: "Dima", id: 1 },
      { name: "Alex", id: 2 },
      { name: "Maks", id: 3 },
      { name: "Andrey", id: 4 },
      { name: "Valera", id: 5 },
    ],

    messageData: [
      { message: "Dima", id: 1 },
      { message: "Alex", id: 2 },
      { message: "Maks", id: 3 },
      { message: "Andrey", id: 4 },
      { message: "Valera", id: 5 },
    ],
  },
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
};

export const addPost = () => {
  if (state.profilePage.newPostText) {
    state.profilePage.postsData.push({
      message: state.profilePage.newPostText,
      id: 0,
      likeCounts: 0,
    });
    state.profilePage.newPostText = "";
    renderEntireTree(state);
  }
};
export const removePost = () => {
  state.profilePage.postsData.splice(-1, 1);
  renderEntireTree(state);
};

export const changePostTextArea = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export default state;
