import {
  addMessageActionCreator,
  changeMessageTextAreaActionCreator,
} from "../../../Redux/dialogsReducer";
import { connect } from "react-redux";
import SendMessage from "./SendMessage";

let mapStateToProps = (state) => {
  return {};
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onChange: (text) => {
      dispatch(changeMessageTextAreaActionCreator(text));
    },
  };
};
const SuperSendMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SendMessage);

export default SuperSendMessageContainer;
