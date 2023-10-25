import React, { useState } from 'react'
import img from './images/img.jpeg'
import './Sell.css'
import { Button, Form ,Col,Row,InputGroup} from 'react-bootstrap'
import { Modal } from 'react-bootstrap';


function Sell() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () =>{
    setShow(true)
  }
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div>
      <div className="imageBackground" >
        <img className='img' src={img} alt="" />
      </div>
      
      <div  className="contentImage">
        <h1  style={{fontSize:'60px',fontWeight:'bold'}}>SELL YOUR PROPERTY</h1>
        <Button onClick={handleShow} className='button1 w-75 p-3 bg-primary' variant="primary" style={{fontWeight:'bold',borderRadius:'0px',marginLeft:'7%'}}>GET A FREE VALUATION</Button>{' '}
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='full-screen-modal modal-lg'
        

      >
        <Modal.Header closeButton>
          <Modal.Title style={{marginLeft:'20%',fontWeight:'bold',fontSize:'40px'}}>TO SELL YOUR PROPERTY</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label  style={{fontWeight:'bold'}}>NAME</Form.Label>
          <Form.Control
           style={{borderRadius:'0',padding:'15px'}}
            required
            type="text"
         
          />
          <Form.Control.Feedback style={{fontWeight:'bold'}}>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3' as={Col} md="6" controlId="validationCustom02">
          <Form.Label style={{fontWeight:'bold'}}>EMAIL</Form.Label>
          <Form.Control
            required
            type="email"
            style={{borderRadius:'0',padding:'15px'}}

            
          />
          <Form.Control.Feedback style={{fontWeight:'bold'}}>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label style={{fontWeight:'bold'}}>PHONE NO</Form.Label>
          <Form.Control type="number"           
           style={{borderRadius:'0',padding:'15px'}}
          required />
          <Form.Control.Feedback type="invalid" style={{fontWeight:'bold'}}>
            Please Enter Price.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label style={{fontWeight:'bold'}}>PRICE</Form.Label>
          <Form.Control type="number"           
           style={{borderRadius:'0',padding:'15px'}}
          required />
          <Form.Control.Feedback type="invalid" style={{fontWeight:'bold'}}>
            Please Enter Price.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label style={{fontWeight:'bold'}}>CITY</Form.Label>
          <Form.Control type="text"           
           style={{borderRadius:'0',padding:'15px'}}
             required />
          <Form.Control.Feedback type="invalid" style={{fontWeight:'bold'}}>
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" className='mb-3' controlId="validationCustom04">
          <Form.Label style={{fontWeight:'bold'}}>STATE</Form.Label>
          <Form.Control type="text"         
             style={{borderRadius:'0',padding:'15px'}}

             required />
          <Form.Control.Feedback type="invalid" style={{fontWeight:'bold'}}>
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label style={{fontWeight:'bold'}}>HOUSE NUMBER</Form.Label>
          <Form.Control type="text"            
          style={{borderRadius:'0',padding:'15px'}}

          required />
          <Form.Control.Feedback type="invalid" style={{fontWeight:'bold'}}>
            Please Enter House Nmuber.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label style={{fontWeight:'bold'}}>IMAGE LINK</Form.Label>
          <Form.Control type="text"           
           style={{borderRadius:'0',padding:'15px'}}
         required />
          <Form.Control.Feedback type="invalid" style={{fontWeight:'bold'}}>
            Please Enter Image Link.
          </Form.Control.Feedback>
        </Form.Group>
       
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button style={{fontWeight:'bold'}} type="submit">SELL YOUR PROPERTY</Button>
    </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
      </div>

    </div>
  )
}

export default Sell