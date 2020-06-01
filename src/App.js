import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

const TestWrapper = styled.p`
  margin: 4em;
  background: black;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestWrapper>
            Edit src/App.js and save to reload.
        </TestWrapper>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
