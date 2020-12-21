import React from "react";
import {
    Route
} from "react-router-dom";
import Login from "./components/auth/login";
import OrdersList from "./components/orders-list";

const AppRoutes =  ({isUserLoggedIn}) => {
    if (!isUserLoggedIn) {
        return <Route path="/" render={() => (
            <Login/>
        )}/>
    }
    return (
        <>
            <Route path="/" render={() => <OrdersList /> }/>
        </>
    )
};

export default AppRoutes;
