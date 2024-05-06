import React from 'react';
import Styles from './App.module.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { HomePage } from './pages';

function App() {
  return (
    <div className={Styles.App}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
