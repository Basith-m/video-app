import React from 'react'
import { Modal,Button,Form } from 'react-bootstrap'
import { useState } from 'react';

function Category() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>
      <div className="d-grid ms-3">
          <button onClick={handleShow} className="btn btn-info">Add new category</button>
        </div>
  
      <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Upload A Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Please Fill the following details !!!</p>
            <Form className='border border-secondary rounded p-3'>
  
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Category ID" />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Category Name" />
              </Form.Group>
  
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Upload</Button>
          </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category