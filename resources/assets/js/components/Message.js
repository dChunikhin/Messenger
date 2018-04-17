import React from "react";
import MessageAuthor from './MessageAuthor';
import MessageText from './MessageText';
import MessageDate from './MessageDate';

export default function Message(props) {
    return (
        <div className={props.className}>
            <MessageAuthor className={props.className}>{props.data.author}</MessageAuthor>
            <MessageText className={props.className}>{props.data.text}</MessageText>
            <MessageDate className={props.className}>{props.data.date}</MessageDate>
        </div>
    )
}