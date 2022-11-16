import React from "react";
import {
    AddMessageInDialogsActionCreator,
    /*UpdateMessageInDialogsActionCreator*/
} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AddStateType} from "../../Redux/reduxStore";
import {DispatchType} from "../../Redux/Types";
import {compose} from "redux";
import {withAuthNavigate} from "../hoc/witAuthNavigate";

let mapStateToProps = (state: AddStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        AddMessageInDialogs: (text: string) => {
            dispatch(AddMessageInDialogsActionCreator(text))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(Dialogs)