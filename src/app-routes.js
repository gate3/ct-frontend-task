import React from "react";
import {
    Route
} from "react-router-dom";
import Login from "./components/auth/login";
import OrdersList from "./components/orders-list";
import OrderItemEdit from "./components/orders-list/OrderItemEdit";

const AppRoutes =  ({isUserLoggedIn}) => {
    if (!isUserLoggedIn) {
        return <Route path="/" render={() => (
            <Login/>
        )}/>
    }
    return (
        <>
            <Route exact path="/:orderId" render={({location}) => {
                console.log(location.state);
                return <OrderItemEdit order={location.state} />
            } }/>
            <Route exact path="/" render={() => <OrdersList /> }/>
        </>
    )
};

export default AppRoutes;
