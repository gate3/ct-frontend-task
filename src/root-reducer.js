import { combineReducers } from '@reduxjs/toolkit'
import loginReducer from './components/auth/login/login-redux-slice';
import ordersReducer from './components/orders-list/order-list-redux-slice';

export default combineReducers({
    login: loginReducer,
    orders: ordersReducer,
})
