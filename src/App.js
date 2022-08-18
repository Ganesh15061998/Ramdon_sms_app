
import React from 'react'
import Cart from './Cart'
import Connect from './Connect'
import Navbar  from './Navbar';
// import { useState } from 'react'
 
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
    {/* <Route path = '/navbar' element={<Navbar />}/> */}
      <Route path="/" element={<Cart />} />
      <Route path="/Connect" element={<Connect />} />
      
    </Routes>

    
  </BrowserRouter>

  </div>

)
}


export default App;