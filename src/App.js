import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import ErrorBoundary from "./components/error-boundary";
import {FirebaseAuthConsumer} from "@react-firebase/auth";
import AppRoutes from './app-routes';
import AuthService from './services/auth/auth-service';

const InlineStyle = () => (
    <style>
        {`
            div.main-container {
              background-color: #f1f1f1;
            }
        `}
    </style>
);

const App = () => {
    const currentUserIsLoggedIn = AuthService.isUserLoggedIn();
    const [isUserLoggedIn, setUserLoggedIn] = useState(false);
    useEffect( () => {
        // The firebaseAuthObject provided by the HOC has a delay in checking if the user is logged in or not.
        // The function implemented in the AuthService can check immediately
        const result = AuthService.isUserLoggedIn();
        setUserLoggedIn(result);
    }, [currentUserIsLoggedIn]);

    return <Router>
        <InlineStyle/>
        <Switch>
            <ErrorBoundary>
                <div className="main-container">
                    {   isUserLoggedIn != null && isUserLoggedIn ?
                        <FirebaseAuthConsumer>
                            {(firebaseAuthObject) => (
                                // 🚀 - To keep the AppJs clean, the routes are declared elsewhere and called as a single function here
                                AppRoutes({isUserLoggedIn})
                            )}
                        </FirebaseAuthConsumer> : null
                    }
                </div>
            </ErrorBoundary>
        </Switch>
    </Router>
};

export default App;
