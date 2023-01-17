import './App.css'

import { Route, Routes } from 'react-router-dom'

import PORTFOLIO from './PORTFOLIO/PORTFOLIO'

// import React, {Component} from 'react';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<PORTFOLIO />} />
        {/* <PORTFOLIO /> */}

        {/* <Routes>
            <Route path="/home" element={<home />} />
            <Route path="/about" element={<about />} />
        </Routes> */}
      </Routes>
    
  )
}

export default App
