import classes from './SendMessage.module.css'
import React from "react";
const SendMessage = (props) => {
    let textareaElem = React.createRef()
    let sendClick = ()=>{alert(textareaElem.current.value)}
    return(
        <div className={classes.wrapper}>
            <textarea id="" cols="30" rows="10" className={classes.textarea} ref={textareaElem}></textarea>
            <button onClick={sendClick} className={classes.btn}>Отправить</button>
        </div>
)
}
export default  SendMessage