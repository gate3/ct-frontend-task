import React from 'react';
import {Header} from "semantic-ui-react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => (
    <Router>
        <Switch>
            <Route path="/" render={() => <Header as="h1"> Placeholder </Header>} />
        </Switch>
    </Router>
);

export default App;
