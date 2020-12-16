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


const App = () => (
        <Router>
            <InlineStyle />
            <Switch>
                <ErrorBoundary>
                    <div className="main-container">
                        <FirebaseAuthConsumer>
                            {(firebaseAuthObject) => (
                                // 🚀 - To keep the AppJs clean, the routes are declared elsewhere and called as a single function here
                                AppRoutes(firebaseAuthObject)
                            )}
                        </FirebaseAuthConsumer>
                    </div>
                </ErrorBoundary>
            </Switch>
        </Router>
);

export default App;
