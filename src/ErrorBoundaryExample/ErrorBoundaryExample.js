import React from 'react'
import BrokenComponent from '../BrokenComponent/BrokenComponent'
import ErrorPage from '../ErrorPage/ErrorPage'


class ErrorBoundaryExample extends React.Component {
    render() {
        return (
            <div className="error-example-page">
              <ErrorPage>
                <h2>This page will brake when I click the button</h2>
                <BrokenComponent />
              </ErrorPage>
            </div>
        );
    }
}

export default ErrorBoundaryExample
