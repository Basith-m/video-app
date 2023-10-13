import React, { useState,useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPI'


function View({uploadVideoServerResponse}) {
  // state for variable scope 
  const [allVideos,setAllVideos] = useState([])
  const getAllUploadedVideos = async ()=> {
    // make API call getAllVideos
    const {data} = await getAllVideos()
    setAllVideos(data)
  }

  // state for delete video - state lifting
  const [deleteVideoStatus,setDeleteVideoStatus] = useState(false)

  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoServerResponse,deleteVideoStatus])
  console.log(allVideos);

  return (
    <>
      <Row>
        {
          allVideos.length>0 ?
          allVideos?.map(video=>(
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard  displayData={video}  setDeleteVideoStatus={setDeleteVideoStatus} />
            </Col>
          )) :
          <p className='fw-bold fs-5 text-bg-danger'>Nothing to display!!!</p>
        }
      </Row>
    </>
  )
}

export default View