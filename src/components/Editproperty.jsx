import React from 'react'

function Editproperty() {
  
  const [show, setShow] = useState(false);

  const [property,setProperty] = useState({
      pname:"",
      mail:"",
      num:"",
      price:"",
      city:"",
      state:"",
      houseno:"",
      image:""
  })

  const handleClose = () => setShow(false);

  const handleShow = () =>{
    setShow(true)
  }
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();

    }

    // api call
    const response = await uploadDetails(property)
    console.log(property);


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
        <Form noValidate validated={validated} onSubmit={(e)=>handleSubmit(e)}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label  style={{fontWeight:'bold'}}>NAME</Form.Label>
          <Form.Control
           style={{borderRadius:'0',padding:'15px'}}
            required
            type="text"
            name='pname'
            onChange={(e)=>setProperty({...property,pname:e.target.value})}
          />
          <Form.Control.Feedback style={{fontWeight:'bold'}}>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='mb-3' as={Col} md="6" controlId="validationCustom02">
          <Form.Label style={{fontWeight:'bold'}}>EMAIL</Form.Label>
          <Form.Control
            required
            type="email"
            style={{borderRadius:'0',padding:'15px'}}
            name='mail'
            onChange={(e)=>setProperty({...property,mail:e.target.value})}
            
          />
          <Form.Control.Feedback style={{fontWeight:'bold'}}>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label style={{fontWeight:'bold'}}>PHONE NO</Form.Label>
          <Form.Control type="number"  name='num'  
           onChange={(e)=>setProperty({...property,num:e.target.value})}       
           style={{borderRadius:'0',padding:'15px'}}
          required />
          <Form.Control.Feedback type="invalid" style={{fontWeight:'bold'}}>
            Please Enter Price.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label style={{fontWeight:'bold'}}>PRICE</Form.Label>
          <Form.Control type="number"  name='price'   
           onChange={(e)=>setProperty({...property,price:e.target.value})}      
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
          <Form.Control type="text" name='city' 
           onChange={(e)=>setProperty({...property,city:e.target.value})}         
           style={{borderRadius:'0',padding:'15px'}}
             required />
          <Form.Control.Feedback type="invalid" style={{fontWeight:'bold'}}>
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" className='mb-3' controlId="validationCustom04">
          <Form.Label style={{fontWeight:'bold'}}>STATE</Form.Label>
          <Form.Control type="text"  name='state'
           onChange={(e)=>setProperty({...property,state:e.target.value})}       
             style={{borderRadius:'0',padding:'15px'}}

             required />
          <Form.Control.Feedback type="invalid" style={{fontWeight:'bold'}}>
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label style={{fontWeight:'bold'}}>HOUSE NUMBER</Form.Label>
          <Form.Control type="text" name='houseno'  
           onChange={(e)=>setProperty({...property,houseno:e.target.value})}         
          style={{borderRadius:'0',padding:'15px'}}

          required />
          <Form.Control.Feedback type="invalid" style={{fontWeight:'bold'}}>
            Please Enter House Nmuber.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label style={{fontWeight:'bold'}}>IMAGE LINK</Form.Label>
          <Form.Control type="text"    name='image'
           onChange={(e)=>setProperty({...property,image:e.target.value})}       
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
      <Button style={{fontWeight:'bold'}} type="submit"  onClick={handleClose}>CANCEL</Button>
      <Button style={{fontWeight:'bold'}} type="submit"  onClick={handleClose}>UPDATE</Button>
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

export default Editproperty