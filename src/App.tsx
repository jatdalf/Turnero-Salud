import React from 'react';
import logo from '../src/assets/heartline-and-heart.png';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from '../src/component/header/header'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
              <Route path="/" element={<Header />}></Route>
              <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Routes>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />    
        </div>
      </Router>
    </div>
  );
}

export default App;
