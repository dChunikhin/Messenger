import React from 'react';

export default function MessageText(props) {
    return (
        <p className={props.className + "_text"}>{props.children}</p>
    )
}
