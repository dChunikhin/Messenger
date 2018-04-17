import React, {Component} from 'react';
import MessagesList from "./MessagesList";
import MessageForm from "./MessageForm";


export default function DialogWindow(props) {
    return (
        <div className={props.className}>
            <h4 className={props.className + "_heading"}>{"Chat"}</h4>
            <MessagesList className={"MessageList"} messages={props.messages}/>
            <MessageForm onAdd={props.onAdd}/>
        </div>
    )
}