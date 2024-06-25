import React from 'react';
import Styles from './App.module.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import {HomePage,SignInPage,Register,Detail} from './pages'

function App() {
  return (
    <div className={Styles.App}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signin" element={<SignInPage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/detail/:touristRouteId" element={<Detail/>}/>
            <Route path="*" element={<h1>404 not found</h1>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
