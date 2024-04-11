import React from 'react';
import logo from './logo.svg';
import Styles from './App.module.css';

function App() {
  return (
    <div className={Styles.App}>
      <header className={Styles['App-header']}>
        <img src={logo} className={Styles['App-logo']} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={Styles['App-link']}
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
