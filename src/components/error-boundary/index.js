import React, {Component} from 'react'
import ErrorBoundaryView from "./ErrorBoundaryView";

class ErrorBoundary extends Component {
    constructor () {
        super();
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        console.log({error});
        return { hasError: true };
    }

    render = () => this.state.hasError ? <ErrorBoundaryView /> : this.props.children;
}

export default ErrorBoundary
