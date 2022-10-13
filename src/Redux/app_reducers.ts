
import {authApi} from "../components/api/api";
import {Dispatch} from "react";
import {createSlice} from "@reduxjs/toolkit";
import {loginAuthThunkCreator} from "./auth_reducers";

const todosSlice = createSlice({
    name: 'app',
    initialState: {
        initialized: false
    },
    reducers: {
        InitializedSuccessAC(state, action){
            return {
                ...state,
                initialized: true
            }
        }
    }
    })

export  const {InitializedSuccessAC} = todosSlice.actions
export default todosSlice.reducer


export const InitializeAppTC = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(loginAuthThunkCreator());
    debugger
    Promise.all([promise]).then(() => {
        dispatch(InitializedSuccessAC())
    });

}



/*
export default authReducer*/
