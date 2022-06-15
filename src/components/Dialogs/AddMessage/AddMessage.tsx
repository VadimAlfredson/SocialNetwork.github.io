import React from "react";
import s from "../Dialogs.module.css";
import {AddMessageIDialogsActionCreator, UpdateMessageInDialogsActionCreator} from "../../../Redux/dialogs_reduser.ts";

export const AddMessage: React.FC = (props) => {
    let createMessage = React.createRef();

    let addMessageElement: React.FC = () => {
        let text: string = createMessage.current.value;
        props.dispatch(UpdateMessageInDialogsActionCreator(text))
    };

    let onMessageChange: React.FC = () => {
        props.dispatch(AddMessageIDialogsActionCreator());
    }

    return <div className={s.divAddMessage}>
        <div>
            <textarea
                placeholder={'Add message'}
                className={s.textareaAddMessage}
                ref={createMessage}
                onChange={onMessageChange}
                value={props.addNewMessage}
            />
        </div>
        <div>
            <button className={s.buttonAddMessage} onClick={addMessageElement}>Sent</button>
        </div>
    </div>
}