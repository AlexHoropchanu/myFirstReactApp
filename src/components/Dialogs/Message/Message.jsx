import React from 'react';
import classes from "./Message.module.css"
const Message = (props)=>{
    return(
        <div className={classes.mesagge}>{props.message}</div>
    );
}
export default Message;