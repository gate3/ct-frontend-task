import React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import ErrorBoundary from "./components/error-boundary";
import {FirebaseAuthConsumer} from "@react-firebase/auth";
import AppRoutes from './app-routes';

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
    return <Router>
        <InlineStyle/>
        <Switch>
            <ErrorBoundary>
                <div className="main-container">
                        <FirebaseAuthConsumer>
                            {(firebaseAuthObject) => {
                                const {isSignedIn, user, providerId} = firebaseAuthObject;
                                const isUserLoggedIn = (isSignedIn && user != null);

                                // The providerId in this case is used to determine when the app is connected to firebase.
                                // Depending on the isUserLoggedIn property isn't good enough, because the state is false by default till the library can determine the users state.
                                if (providerId == null) return null;

                                // 🚀 - To keep the AppJs clean, the routes are declared elsewhere and called as a single function here
                                return AppRoutes({isUserLoggedIn})
                            }}
                        </FirebaseAuthConsumer>
                </div>
            </ErrorBoundary>
        </Switch>
    </Router>
};

export default App;
