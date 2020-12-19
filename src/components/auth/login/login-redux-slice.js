import { createSlice } from '@reduxjs/toolkit'
import {ReduxActions} from "./login-constants";
import AuthService from "../../../services/auth/auth-service";

export const initialState = {
    loading: false,
    hasErrors: false,
    responsePayload: null,
};

const loginSlice = createSlice({
   name: ReduxActions.LOGIN,
   initialState,
   reducers: {
       initiateUserLogin: state => {
           state.loading = true;
       },
       userLoginSuccess: (state, {payload}) => {
           state.loading = false;
           state.hasErrors = false;
           state.responsePayload = payload;
       },
       userLoginError: (state, {payload}) => {
           state.loading = false;
           state.hasErrors = true;
           state.responsePayload = payload;
       },
       initiateUserLogout: (state) => {
           state.loading = true;
       },
       userLogoutSuccess: (state, {payload}) => {
           state.loading = false;
           state.responsePayload = payload;
       },
       userLogoutError: (state, {payload}) => {
           state.loading = false;
           state.hasErrors = true;
           state.responsePayload = payload;
       }
   }
});

export const {
    initiateUserLogin, userLoginSuccess, userLoginError,
    initiateUserLogout, userLogoutSuccess, userLogoutError
} = loginSlice.actions;

export default loginSlice.reducer;

export function userLogin ({ email, password }) {
    return async dispatch => {
        dispatch(initiateUserLogin());

        try{
            const loggedInUser = await AuthService.loginUserWithCredentials(email, password);
            dispatch(userLoginSuccess(loggedInUser))
        }catch (e) {
            dispatch(userLoginError(e.message))
        }
    }
}

export function userLogout () {
    return async dispatch => {
        dispatch(initiateUserLogout());

        try{
            const logoutResponse = await AuthService.logoutUser();
            dispatch(userLogoutSuccess(logoutResponse))
        }catch (e) {
            dispatch(userLogoutError(e.message))
        }
    }
}
