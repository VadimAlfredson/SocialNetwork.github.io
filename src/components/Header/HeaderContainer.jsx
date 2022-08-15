import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {loginAuthThunkCreator, SetUserData} from "../../Redux/auth_reducers";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.loginAuthThunkCreator()
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect (mapStateToProps, {SetUserData, loginAuthThunkCreator}) (HeaderContainer)