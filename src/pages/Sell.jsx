import React, { useState } from 'react'
import img from './images/img.jpeg'
import './Sell.css'
import { Button } from 'react-bootstrap'
import SellForm from '../components/SellForm';


function Sell() {
  const [display,setDisplay]=useState(false)
  const handleShow = () =>{
    setDisplay(true)
  }
  return (
    <div>
      <div className="imageBackground" >
        <img className='img' src={img} alt="" />
      </div>
      {display&& 
      <SellForm/>

      }
      <div  className="contentImage">
        <h1  style={{fontSize:'60px',fontWeight:'bold'}}>SELL YOUR PROPERTY</h1>
        <Button onClick={handleShow} className='button1 w-75 p-3 bg-primary' variant="primary" style={{fontWeight:'bold',borderRadius:'0px',marginLeft:'7%'}}>GET A FREE VALUATION</Button>{' '}
       
      </div>

    </div>
  )
}

export default Sell