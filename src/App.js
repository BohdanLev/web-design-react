import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import Routs from './routs'
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <HeaderComponent/>
        <Routs/>
    </div>
  );
}

export default App;
