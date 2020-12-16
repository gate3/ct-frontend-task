import {
    Route
} from "react-router-dom";
import Login from "./components/auth/login";
import React from "react";

const AppRoutes =  ({ isSignedIn }) => {
    if (!isSignedIn) {
        return <Route path="/" render={() => (
            <Login/>
        )}/>
    }
    return (
        <>
            <Route path="/" render={() => null }/>
            <Route path="/test" render={() => <h1>dhhdd</h1> }/>
        </>
    )
};

export default AppRoutes;
