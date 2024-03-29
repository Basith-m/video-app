import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import {Button,Modal,Form} from 'react-bootstrap'; 
import { uploadVideo } from '../services/allAPI';

function Add({setUploadVideoServerResponse}) {

  const [video,setVideo] = useState({
    id:"",caption:"",url:"",embedLink:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedLink = (e)=>{
    const {value} = e.target

    if(value)
    {
      const link = `http://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedLink:link})
    }
    else{
      setVideo({...video,embedLink:""})
    }
  }

  const handleUpload = async () =>{
    const {id,caption,url,embedLink} = video
    if(!id || !caption || !url || !embedLink)
    {
      toast.warning("Please fill the form completely!!!")
    }
    else{
      // make API call uploadVideo
      const response = await uploadVideo(video)
      // console.log(response);
      if(response.status>200 && response.status<300){

        // success message
        toast.success(`'${response.data.caption}' video uploaded successfully!!!`)

        // set  server response
        setUploadVideoServerResponse(response.data)

        // reset video after successful
        setVideo({
          id:"",caption:"",url:"",embedLink:""
        })

        // hide modal
        handleClose()
      }
      else{
        console.log(response);
        toast.error("Cannot perform the operation now...Please try after some time...")
      }
    }
  }

  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn border-0'><i class="fa-solid fa-circle-plus fs-5"></i></button>
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
              <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e)=>setVideo({...video,url:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={getEmbedLink} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position='top-center'
        theme='colored'
        autoClose={2000}
      />
    </>
  )
}

export default Add