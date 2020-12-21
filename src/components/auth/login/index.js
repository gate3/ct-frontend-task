import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginView from "./LoginView";
import {userLogin} from "./login-redux-slice";

const Login = () => {
    const dispatch = useDispatch();

    const {
        loading,
        hasErrors,
        responsePayload
    } = useSelector(state => state.login);

    const onLoginFormsubmit = (data) => {
        dispatch(userLogin({
            ...data,
            email: data.username,
        }))
    };

    return <LoginView
        onSubmit={onLoginFormsubmit}
        loading={loading}
        loginError={hasErrors}
    />
};

export {
    LoginView
};

export default Login;
