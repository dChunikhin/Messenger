import React from 'react';

export default function MessageAuthor(props) {
    return (
        <h5 className={props.className + "_author"}>{props.children}</h5>
    )
}
