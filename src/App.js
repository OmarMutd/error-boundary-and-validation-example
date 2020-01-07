import React from 'react';
import './App.css';
import ErrorBoundaryExample from './ErrorBoundaryExample/ErrorBoundaryExample'
import RegistrationForm from './RegistrationForm/RegistrationForm'

function App() {
  return (
    <div className="App">
      {/* <ErrorBoundaryExample /> */}
      <RegistrationForm />
    </div>
  );
}

export default App;
