import classes from './Dialogs.module.css'
import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import SendMessage from './SendMessages/SendMessage'
const Dialogs = (props) => {
    let dialogElement = props.dialogsPage.dialogData.map((el)=><DialogItem name ={el.name} id={el.id}/>)
    let messageElement = props.dialogsPage.messageData.map(el=><Message message={el.message} id={el.id}/>)
    return (
        <div>
        <div className={classes.wrapper}>
           <div className={classes.dialogs}>
                   {dialogElement}
           </div>
           <div className={classes.messages}>
              {messageElement}
           </div>
        </div>
            <SendMessage/>
        </div>
    );
}

export default Dialogs;
