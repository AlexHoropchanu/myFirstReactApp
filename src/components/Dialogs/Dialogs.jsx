import classes from "./Dialogs.module.css";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import SendMessageContainer from "./SendMessages/SendMessageContainer";
import StoreContext from "../../storeContext";
const Dialogs = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let dialogElement = state.dialogsPage.dialogData.map((el) => (
          <DialogItem key={el.id} name={el.name} id={el.id} />
        ));
        let messageElement = state.dialogsPage.messageData.map((el) => (
          <Message key={el.id} message={el.message} id={el.id} />
        ));
        return (
          <div>
            <div className={classes.wrapper}>
              <div className={classes.dialogs}>{dialogElement}</div>
              <div className={classes.messages}>{messageElement}</div>
            </div>
            <SendMessageContainer store={props.store} />
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default Dialogs;
