import React from 'react';
import Styles from './App.module.css';
import {Header,Footer} from "./components";

function App() {
  return (
    <div className={Styles.App}>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
