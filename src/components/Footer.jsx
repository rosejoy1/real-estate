import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column bg-dark footer-container mt-4' style={{width:'100%',height:'400px'}}>
      <div className='footer-content d-flex  justify-content-evenly w-100 flex-wrap'>
        <div className='website d-flex mb-5 flex-column'>
        <h4> <i class="fa-solid fa-house fa-bounce"></i>
             ASPIRE HOMES </h4>
<h6>
    Designed and built with all the love in the world by the Media team with the help of our contributors.</h6>
    <h6>Code licensed Media, docs CC BY 3.0.</h6>
<h6>Currently v1.0.0.</h6>
        </div>
        <div className='links d-flex  flex-column'>
            <h4>Links</h4>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>HOME</Link>
            <Link to={'/buy'} style={{textDecoration:'none',color:'white'}}>BUY</Link>
            <Link to={'/sell'} style={{textDecoration:'none',color:'white'}}>SELL</Link>
        </div>
        <div className='guides d-flex flex-column'>
        <h4>Guides</h4>
            <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
            <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
            <Link to={'https://reactrouter.com/en/main'} style={{textDecoration:'none',color:'white'}}>Routing</Link>
        </div>
        <div className='contact d-flex flex-column'>
            <h4>Contact Us</h4>
            <div>

            </div>
            <div>
            <Link to={'/'} className='mx-2' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin" style={{color: '#ffffff'}}></i></Link>
            <Link to={'/'} className='mx-3' style={{textDecoration:'none',color:'white'}}>
            <i class="fa-brands fa-twitter" style={{textDecoration:'none',color:'white'}}></i></Link>
            <Link to={'/'} className='mx-3' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook-f" style={{textDecoration:'none',color:'white'}}></i></Link>
            <Link to={'/'} className='mx-2' style={{textDecoration:'none',color:'white'}}><i class="fa-regular fa-envelope" style={{textDecoration:'none',color:'white'}}></i></Link>
            
            </div>
        </div>

      </div>
      <p className='mt-5 copyright-text'>Copyright © 2023 Aspire Home. Built with React.</p>
    </div>
  )
}

export default Footer
