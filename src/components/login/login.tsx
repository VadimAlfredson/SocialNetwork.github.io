import React from 'react';
import LoginForm from "./formLogin";
import s from './login.module.css';

const Login = () => {
    return <div className={s.loginBlock}>
    <h3>Log in</h3>
    <LoginForm />
    </div>
};

export default Login