import React from 'react'
import './Connect.css'
import{useState} from 'react'

const Connect = () => {
  const [sms ,setSms] = useState(0)

  const SMS =()=>{
    setSms(sms+1)
  }


  return (
<div>
    {/* <nav class="nav">
      
      <a className='one' href="#">HELP</a>
      {/* <a className='one' href="#">Disabled</a> */}
      {/* <a className='one' href="#">ABOUT</a>
      <a className='one' href="/">HOME</a>
      
    </nav> */}


      <div className="send">
        <p className='top'>UserName-(online)</p>
         <h1>{sms}</h1>
      </div>
   
       <div>
        <textarea className="connect-one" placeholder="Type message.." name="msg" required></textarea>
      </div>

     <div>
          <button className="btn" onClick={SMS}>send</button>
      </div>
        
</div>
  )
}

export default Connect