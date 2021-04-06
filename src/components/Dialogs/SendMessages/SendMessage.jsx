import classes from "./SendMessage.module.css";
import React from "react";
import {
  addMessageActionCreator,
  changeMessageTextAreaActionCreator,
} from "../../../Redux/dialogsReducer";
const SendMessage = (props) => {
  let textareaElem = React.createRef();
  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onChange = () => {
    let text = textareaElem.current.value;
    props.dispatch(changeMessageTextAreaActionCreator(text));
  };
  return (
    <div className={classes.wrapper}>
      <textarea
        id=""
        cols="30"
        rows="10"
        className={classes.textarea}
        ref={textareaElem}
        onChange={onChange}
        value={props.dialogsPageText}
      ></textarea>
      <button onClick={addMessage} className={classes.btn}>
        Отправить
      </button>
    </div>
  );
};
export default SendMessage;
