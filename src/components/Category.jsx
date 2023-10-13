import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal,Button,Form, Row, Col } from 'react-bootstrap'
import { useState } from 'react';
import { addCategory, deleteCategory, getAVideos, getAllCategory, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';

function Category() {
  const [allCategories,setAllCategories] = useState([])
  const [categoryName,setCategoryName] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async () => {
    if(categoryName){
      let body={
        categoryName,allVideos:[]
      }
      // make API call
      const response = await addCategory(body)
      // console.log(response);
      if(response.status>=200 && response.status<300)
      {
        // hide modal
        handleClose()
        // reset state
        setCategoryName("")
      }else{
        toast.error("Operation failed!!! Please try after some time...")
      }
    }else{
      toast.warning("Please provide category name!!!")
    }
  }

  const getCategories = async () => {
    // make API call 
    const {data} = await getAllCategory()
    setAllCategories(data);
  }

  // console.log(allCategories);

  useEffect(()=>{
    getCategories()
  })

  const handleDelete = async (id)=> {
    await deleteCategory(id)
    getCategories()
  }

  const dragOver = (e)=>{
    console.log("Video drap over category");
    e.preventDefault()
  }

  const videoDrop = async (e,categoryId)=>{
    console.log("Video dropped inside category Id : "+categoryId);
    const videoId = e.dataTransfer.getData("videoId")
    // console.log("Video Card Id :",videoId);

    const {data} = await getAVideos(videoId)
    // console.log(data);
    // get category details
    const selectedCategory = allCategories?.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);

    // make api call to update 
    await updateCategory(categoryId,selectedCategory)
    getCategories()
  }

  return (

    <>
      <div className="d-grid ms-3">
        <button onClick={handleShow} className="btn btn-info">Add new category</button>
      </div>

      {
        allCategories?.length>0?allCategories?.map(item=>(
          <div className="mt-4 mb-2 border rounded px-2 ms-3" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
            <div className='d-flex justify-content-between align-items-center'>
              <h6>{item?.categoryName}</h6>
              <button className='btn border-0' onClick={()=>handleDelete(item?.id)}><i className='fa-solid fa-trash text-danger'></i></button>
            </div>
            <Row>
              {
                item?.allVideos && 
                item?.allVideos.map(card=>(
                  <Col sm={12}>
                    <VideoCard displayData={card} insideCategory={true} />
                  </Col>
                ))
              }
            </Row>
          </div>
        )): <p className='fw-bold fs-5 mt-3 ms-3 p-2 text-bg-danger'>No categories are added!!!</p>
      }
  
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
            <Form className='border border-secondary rounded p-3'>
  
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Category Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
              </Form.Group>
  
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddCategory}>Add</Button>
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

export default Category