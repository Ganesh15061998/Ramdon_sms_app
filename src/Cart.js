
import React from "react";
import './Cart.css'


import {useState, useEffect} from 'react'

function Cart(){
  const [user, setUser]= useState([])

   const fetchData = () =>{
    fetch("https://randomuser.me/api/?nat=us&results=20&page=1")
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      let ganu = data.results
      console.log(ganu)
      setUser(ganu)
       
    })}

   useEffect(()=>{
    fetchData()
   },[])

  return(
   <div className="products">
      
        {user.map((data)=>(
          <div key={data.id.value}
          className='cart'>

             <div >
              <img className="product-image" src={data.picture.large}/>
             </div>

             <div >
              <span className='product-name'>{data.name.first +" "+ data.name.last}</span>
             </div>

             <div className="product-price">
              <span>{data.login.username}</span>
             </div>

             <div className='city'>
              <span >{data.location.country}</span>
             </div>
             
              
         </div>
   ))}
      
  </div>
  )
}

export default Cart;