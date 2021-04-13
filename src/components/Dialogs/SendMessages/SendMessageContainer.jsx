import React from "react";
import SendMessage from "./SendMessage";
import {
  addMessageActionCreator,
  changeMessageTextAreaActionCreator,
} from "../../../Redux/dialogsReducer";
import StoreContext from "../../../storeContext";
const SendMessageContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };
        let onChange = (text) => {
          store.dispatch(changeMessageTextAreaActionCreator(text));
        };
        return (
          <SendMessage
            addMessage={addMessage}
            onChange={onChange}
            newText={state.dialogsPage.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default SendMessageContainer;
