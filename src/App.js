import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import Routs from './routs'
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <HeaderComponent/>
        <Routs/>
        </BrowserRouter>
    </div>
  );
}

export default App;
