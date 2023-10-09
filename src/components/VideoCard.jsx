import { Card,Modal } from 'react-bootstrap'
import { useState } from 'react';
import { deleteAVideos } from '../services/allAPI';

function VideoCard({displayData,setDeleteVideoStatus}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // deleting a video
  const removeVideo = async (id)=>{
    // make api call
    const response = await deleteAVideos(id)
    setDeleteVideoStatus(true)
  }
  
  return (
    <>
      <Card className='mb-3'>
      <Card.Img variant="top" height={'180px'} onClick={handleShow} src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6>{displayData?.caption}</h6>
          <button className='btn border-0' onClick={()=>removeVideo(displayData?.id)}><i className='fa-solid fa-trash text-danger'></i></button>
        </Card.Title>
      </Card.Body>
    </Card>

     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="360" src={`${displayData?.embedLink}?autoplay=1`} title={displayData.caption}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard