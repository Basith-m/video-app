import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from "../components/Add"
import View from "../components/View"
import Category from "../components/Category"

function Home() {

  const [uploadVideoServerResponse, setUploadVideoServerResponse] = useState({})

  return (
    <>
      <div className="container  mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div className="add-videos">
          <Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
        </div>
        <Link to={'/History'}  style={{textDecoration:'none', color:'white'}}>Watch History</Link>
      </div>

      <div className="container-fluid px-4 w-100  mt-5 mb-5 d-flex justify-content-between">
        <div className="all-videos col-lg-9">
         <h3 className='mb-3'>All Videos</h3>
         <View uploadVideoServerResponse={uploadVideoServerResponse} />
        </div>
        <div className="category col-lg-3">
          <Category />
        </div>
      </div>
    </>
  )
}

export default Home