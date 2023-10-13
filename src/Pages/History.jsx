import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'

function History() {
  const [history,setHistory] = useState([])
  const handleHistory = async ()=>{
    // make API call
    const {data} = await getAllHistory()
    setHistory(data)
  }
  // console.log(history);
  useEffect(()=>{
    handleHistory()
  },[])

  const handleDeleteHistory = async (id) =>{
      // make api call
      await deleteHistory(id)
      // get remaining history
      handleHistory()
  }

  return (
    <>
      <div className='container d-flex mt-5 mb-5 justify-content-between align-items-center'>
        <h3>Watch History</h3>
        <Link to={'/home'} style={{textDecoration:'none',fontSize:'20',color:'white'}} className='d-flex align-items-center'><i class="fa-solid fa-arrow-left me-2"></i>Back to Home</Link>
      </div>

      <table className='table container mt-5 mb-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            history?.length>0?history?.map((item,index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item?.caption}</td>
                <td><a href={item?.embedLink} target='_blank'>{item?.embedLink}</a></td>
                <td>{item?.timeStamp}</td>
                <td><button className='btn border-0' onClick={()=>handleDeleteHistory(item?.id)}><i className='fa-solid fa-trash text-danger'></i></button></td>
              </tr>
            )):<p className='fw-bold fs-5 text-bg-danger'>Nothing to display!!!</p>
          }
        </tbody>
      </table>
    </>
  )
}

export default History