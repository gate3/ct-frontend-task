import { combineReducers } from '@reduxjs/toolkit'
import loginReducer from './components/auth/login/login-redux-slice';

export default combineReducers({
    login: loginReducer
})
