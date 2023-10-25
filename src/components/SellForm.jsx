import React, { useState } from 'react'
import { Navbar, Container, Nav, Button, Form ,Col,Row,InputGroup,Modal} from 'react-bootstrap';

function SellForm() {
  const [show,setShow]=useState()
  const handleClose = () => setShow(false);

  const [display,setDisplay]=useState(false)
 
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
          <Form.Label>NAME</Form.Label>
          <Form.Control
           style={{borderRadius:'0',padding:'15px'}}
            required
            type="text"
         
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3' as={Col} md="6" controlId="validationCustom02">
          <Form.Label>EMAIL</Form.Label>
          <Form.Control
            required
            type="email"
            style={{borderRadius:'0',padding:'15px'}}

            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}  md="6" controlId="validationCustomUsername">
          <Form.Label>PHONE NO</Form.Label>
          <InputGroup hasValidation>
           
            <Form.Control
              type="number"
              style={{borderRadius:'0',padding:'15px'}}

              
             
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Your Number.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>PRICE</Form.Label>
          <Form.Control type="number"           
           style={{borderRadius:'0',padding:'15px'}}
          required />
          <Form.Control.Feedback type="invalid">
            Please Enter Price.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>CITY</Form.Label>
          <Form.Control type="text"           
           style={{borderRadius:'0',padding:'15px'}}
             required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" className='mb-3' controlId="validationCustom04">
          <Form.Label>STATE</Form.Label>
          <Form.Control type="text"         
             style={{borderRadius:'0',padding:'15px'}}

             required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>HOUSE NUMBER</Form.Label>
          <Form.Control type="text"            
          style={{borderRadius:'0',padding:'15px'}}

          required />
          <Form.Control.Feedback type="invalid">
            Please Enter House Nmuber.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>IMAGE LINK</Form.Label>
          <Form.Control type="text"           
           style={{borderRadius:'0',padding:'15px'}}
         required />
          <Form.Control.Feedback type="invalid">
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
  )
}

export default SellForm