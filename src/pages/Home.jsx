import React, { useState } from 'react';
import './Home.css'; 
import { Button } from 'react-bootstrap';



function Home() {

  return (
    <>
      <div className="bg-video-container d-flex justify-content-center align-items-center">
        <video autoPlay loop muted className="background-video">
          <source src="https://player.vimeo.com/external/541362941.sd.mp4?s=516e4d91930c246e559d1ab6838e20db89e51eb2&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
        
        <div className="content d-flex flex-column justify-content-center align-items-center">
          <h5 style={{fontFamily:'yellowtail,cursive',fontWeight:'bold'}}>intentionally different</h5>
          <h1 style={{fontSize:'65px',fontWeight:'bold'}} className='heading'>PROPERTY EXPERTS</h1>
          {/* <div className="content w-100 d-flex  justify-content-center align-items-center">
            <input style={{width:'100%'}}  className='inputLabel p-3 bg-dark ' type="text " placeholder='Enter Location or Post Code'/>
            
            <Button   className='button1 w-75 p-3 bg-primary' variant="primary" style={{fontWeight:'bold',borderRadius:'0px'}}>SEARCH PROPERTY</Button>{' '}
           
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;






