import React from 'react';

export default function MessageDate(props) {
    return (
        <time className={props.className + "_date"}>{props.children}</time>
    )
}
