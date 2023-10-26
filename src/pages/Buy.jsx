import React, { useEffect, useState } from 'react'
import { Card ,Button, Row, Col,Form,Modal} from 'react-bootstrap'
import { deleteProperty, editProperty, getDetails, uploadDetails } from '../services/allAPI'
import './Buy.css'
import { Link } from 'react-router-dom'

function Buy() {
  const [allPropety,setAllProperty]=useState()
  const [deleteStatus,setDeleteStatus]=useState(false)


  const getAllProperty= async () =>{
      const {data} = await getDetails()
      setAllProperty(data)
  }
  useEffect(()=>{
    getAllProperty()
    setDeleteStatus(true)
  },[deleteStatus])

  const removeProperty = async (id) =>{
     await deleteProperty(id)
     setDeleteStatus(false)
  }


  const [show, setShow] = useState(false);

  
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [numb,setNumb]=useState()
  const [cost,setCost]=useState()
  const [cityName,setCityName]=useState()
  const [stateName,setStateName]=useState()
  const [house,setHouse]=useState()
  const [images,setImages]=useState()

  

  const [data, setData] = useState(null); // Initialize data as null or an empty object based on your use case
 
const updateDetails = async (id) => {
  handleShow()
    const editData = allPropety.filter((item) => item.id === id);
    setData(editData[0]);
    console.log(data); // This will log the correct data once the state has been updated
   
}



useEffect(() => {
    if (data) {
        const { pname, mail, city, state, image, num, price, houseno } = data;
        console.log(pname, mail, city, state, image, num, price, houseno);
        setName(pname);
        setEmail(mail);
        setNumb(num);
        setCost(price);
        setCityName(city);
        setStateName(state);
        setHouse(houseno);
        setImages(image);
    }
}, [data]); 


  

 

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

    // // api call
    // const response = await uploadDetails(property)
    // console.log(property);


    setValidated(true);
  };

  const dataToUpdate ={ 
     pname:name,
  mail:email,
  num:numb,
  price:cost,
  city:cityName,
  state:stateName,
  houseno:house,
  image:images
}
// console.log(dataToUpdate);
const handleUpdate = async(id)=>{
  const response= await editProperty(id,dataToUpdate)
   handleClose()
  console.log(response);
}
 
 
  return (
    <>
     <div className='gridCard'>
       {allPropety?.length>0?
       allPropety?.map(item=>(
        <div className='CardContent'>
        <Card style={{ width: '18rem' }} className='shadow rounded' >
        <Card.Img style={{ height: '180px' }}  className='w-100' variant="top"  src={item.image} />
        <Card.Body>
          <Card.Title>HOUSE NO:{item.houseno}</Card.Title>
          <Card.Text>
          <h6>PRICE ₹ : {item.price}</h6>
          <h6>PLACE:{item.city},{item.state}</h6>
          </Card.Text>
          <div className="d-flex justify-content-between">
          <Button onClick={()=>removeProperty(item.id)}  className='btn btn-light'>
          <i style={{color:'red'}} class="fa-solid fa-trash"></i>
        </Button>
        <Link to={`/buy`}>
          <Button onClick={()=>updateDetails(item.id)} style={{fontWeight:'bold'}} className='btn btn-light'>
           EDIT
          </Button>
        </Link>

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
            value={name ||" "}
            onChange={(e)=>setName(e.target.value)}
            // onChange={(e)=>setProperty({...property,pname:e.target.value})}
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
            value={email || ""}
            onChange={(e)=>setEmail(e.target.value)}

            // onChange={(e)=>setProperty({...property,mail:e.target.value})}
            
          />
          <Form.Control.Feedback style={{fontWeight:'bold'}}>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label style={{fontWeight:'bold'}}>PHONE NO</Form.Label>
          <Form.Control type="number"  name='num' value={numb || ""}  
                      onChange={(e)=>setNumb(e.target.value)}

          //  onChange={(e)=>setProperty({...property,num:e.target.value})}       
           style={{borderRadius:'0',padding:'15px'}}
          required />
          <Form.Control.Feedback type="invalid" style={{fontWeight:'bold'}}>
            Please Enter Price.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label style={{fontWeight:'bold'}}>PRICE</Form.Label>
          <Form.Control type="number"  name='price'  value={cost || ""} 
                      onChange={(e)=>setCost(e.target.value)}

          //  onChange={(e)=>setProperty({...property,price:e.target.value})}      
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
          <Form.Control type="text" name='city' value={cityName || ""}
                      onChange={(e)=>setCityName(e.target.value)}

          //  onChange={(e)=>setProperty({...property,city:e.target.value})}         
           style={{borderRadius:'0',padding:'15px'}}
             required />
          <Form.Control.Feedback type="invalid" style={{fontWeight:'bold'}}>
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" className='mb-3' controlId="validationCustom04">
          <Form.Label style={{fontWeight:'bold'}}>STATE</Form.Label>
          <Form.Control type="text"  name='state' value={stateName || ""}
                      onChange={(e)=>setStateName(e.target.value)}

          //  onChange={(e)=>setProperty({...property,state:e.target.value})}       
             style={{borderRadius:'0',padding:'15px'}}

             required />
          <Form.Control.Feedback type="invalid" style={{fontWeight:'bold'}}>
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label style={{fontWeight:'bold'}}>HOUSE NUMBER</Form.Label>
          <Form.Control type="text" name='houseno' value={house || ""} 
                      onChange={(e)=>setHouse(e.target.value)}

          //  onChange={(e)=>setProperty({...property,houseno:e.target.value})}         
          style={{borderRadius:'0',padding:'15px'}}

          required />
          <Form.Control.Feedback type="invalid" style={{fontWeight:'bold'}}>
            Please Enter House Nmuber.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label style={{fontWeight:'bold'}}>IMAGE LINK</Form.Label>
          <Form.Control type="text" value={images || ""}   name='image'
                      onChange={(e)=>setImages(e.target.value)}

          //  onChange={(e)=>setProperty({...property,image:e.target.value})}       
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
      <Button style={{fontWeight:'bold'}} type="submit"  onClick={()=>handleUpdate(item.id)}>UPDATE DETAIL</Button>
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
        </Card.Body>
      </Card>
      </div>
       )):<p>NOTHING TO DISPLAY</p>
           
            }

            

          
          
        
     </div>
    </>
  )
}

export default Buy