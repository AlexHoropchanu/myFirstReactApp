let store = {
  _state: {
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
  },
  getstate() {
    return this._state;
  },
  _callSubsriber() {},
  subscribe(observer) {
    this._callSubsriber = observer;
  },
  addPost() {
    if (this._state.profilePage.newPostText) {
      this._state.profilePage.postsData.push({
        message: this._state.profilePage.newPostText,
        id: Math.random(),
        likeCounts: 0,
      });
      this._state.profilePage.newPostText = "";
      this._callSubsriber(this._state);
    }
  },
  removePost() {
    this._state.profilePage.postsData.splice(-1, 1);
    this._callSubsriber(this._state);
  },
  changePostTextArea(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubsriber(this._state);
  },
};
// let state = {
// profilePage: {
//   postsData: [
//     { message: "Hello", id: 0, likeCounts: 0 },
//     { message: " How are you", id: 1, likeCounts: 0 },
//   ],
//   newPostText: "",
// },
//   dialogsPage: {
//     dialogData: [
//       { name: "Dima", id: 1 },
//       { name: "Alex", id: 2 },
//       { name: "Maks", id: 3 },
//       { name: "Andrey", id: 4 },
//       { name: "Valera", id: 5 },
//     ],

//     messageData: [
//       { message: "Dima", id: 1 },
//       { message: "Alex", id: 2 },
//       { message: "Maks", id: 3 },
//       { message: "Andrey", id: 4 },
//       { message: "Valera", id: 5 },
//     ],
//   },
// };

// export const addPost = () => {
//   if (store.state.profilePage.newPostText) {
//     store.state.profilePage.postsData.push({
//       message: store.state.profilePage.newPostText,
//       id: Math.random(),
//       likeCounts: 0,
//     });
//     store.state.profilePage.newPostText = "";
//     renderEntireTree(store);
//   }
// };
// export const removePost = () => {
//   store.state.profilePage.postsData.splice(-1, 1);
//   renderEntireTree(store);
// };

// export const changePostTextArea = (newText) => {
//   store.state.profilePage.newPostText = newText;
//   renderEntireTree(store);
// };

export default store;
window.store = store;
