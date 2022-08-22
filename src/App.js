
import React from 'react'
import Cart from './Cart'
import Connect from './Connect'
import Navbar  from './Navbar';
import About from './About'
// import { useState } from 'react'
import Help from './Help'
 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
   

return (
  <div>
    <Navbar /> 

  <BrowserRouter>
    
    <Routes>
    <Route path = '/help' element={<Help />}/>
    <Route path = '/about' element={<About />}/>
      <Route path="/" element={<Cart />} />
      <Route path="/Connect" element={<Connect />} />
      
    </Routes>

    
  </BrowserRouter>

  </div>

)
}


export default App;