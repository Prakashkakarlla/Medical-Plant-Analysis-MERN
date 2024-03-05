// App.js
import React from 'react';
import { BrowserRouter as Router,Route,  Routes } from 'react-router-dom';
import { createContext, useContext, forwardRef } from 'react';


import MultipleCards from './MultipleCards';
import CardDetails from './CardDetails';
import Bargraph  from './Bargraph';
import Barline from './Barline';

import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div >


      
      <Routes>

        <Route path="/muliti" element={<MultipleCards />} />
        <Route path="/cardDetails/:id" element={<CardDetails />} />
        <Route path="/bargraph/:id" element={<Bargraph />} />
        <Route path="/barline/:id" element={<Barline />} />
        <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />


      </Routes>
        </div>
   
  );
}

export default App;

