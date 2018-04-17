import React from 'react';
import Message from "./Message";

export default function MessagesList(props) {
    return (
        <ul className={props.className}>
            {props.messages.map((message, index) =>
                (
                    <li key={index}>
                        <Message className={"Message"} data={message}/>
                    </li>
                )
            )}
        </ul>
    )
}