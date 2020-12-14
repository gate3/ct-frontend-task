import React from 'react';
import {Header} from "semantic-ui-react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ErrorBoundary from "./components/error-boundary";

const App = () => (
        <Router>
            <Switch>
                <ErrorBoundary>
                    <Route path="/" render={() =><Header as="h1"> Placeholder </Header>} />
                </ErrorBoundary>
            </Switch>
        </Router>
);

export default App;
