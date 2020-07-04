import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <div>
         Endpoint URL : {process.env.REACT_APP_BACKEND_ENDPOINT}
       </div>
      </header>
    </div>
  );
}

export default App;
