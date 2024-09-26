import { connect } from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogData: state.dialogsPage.dialogData,
    messageData: state.dialogsPage.messageData,
  };
};
let mapDispatchToProps = (dispatch) => {
  return { dispatch };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
