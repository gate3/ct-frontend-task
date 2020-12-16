import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ErrorBoundary from "./components/error-boundary";
import Login from "./components/auth/login";

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
                        <Route path="/" render={() =>(
                            <Login />
                        )} />
                    </div>
                </ErrorBoundary>
            </Switch>
        </Router>
);

export default App;
