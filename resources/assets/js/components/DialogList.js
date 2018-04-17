import React, {Component} from 'react';
import Message from "./Message"

// export default function DialogList(props) {
//         return (
//             <div>
//                 <ul className={props.className}>
//                     {props.dialogs.map((dialog) => {
//                         return (
//                             <DialogListItem className={props.className + "-Item"} data={dialog} key={(dialog.message.author + dialog.message.date).toString()}>{dialog.message.text}</DialogListItem>
//                         )
//                     })}
//                 </ul>
//             </div>
//         )
// }

export default function DialogList(props) {
    return (
            <div className={"Dialogs"}>
                <h4 className={props.className + "_heading"}>{"Dialogs"}</h4>
                <ul className={props.className}>
                    {props.dialogs.map((dialog) => {
                        return (
                            <li onClick={() => props.onSelection(dialog.id)} key={dialog.id}>
                                <Message className={"Message"} data={dialog.message}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
    )
}