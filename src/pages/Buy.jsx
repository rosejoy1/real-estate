import React from 'react'
import { Card ,Button, Row, Col} from 'react-bootstrap'

function Buy() {
  return (
    <>
      <Row className='p-5'>
        <Col  className='mb-5'>
          <Card style={{ width: '18rem' }} className='shadow rounded' >
          <Card.Img height={'200px'} variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
             
            </Card.Text>
            <div className="d-flex justify-content-between">
            <Button  className='btn btn-light'>
            <i style={{color:'#f5cc00'}} class="fa-solid fa-star"></i>
          </Button>
          <Button style={{fontWeight:'bold'}} className='btn btn-light'>
           VIEW
          </Button>

          </div>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      
    </>
  )
}

export default Buy