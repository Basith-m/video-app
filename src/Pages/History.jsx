import React from 'react'
import { Link } from 'react-router-dom'

function History() {
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Akhil</td>
            <td><a href="http://vbusdfgishgsihischsgcwhfhfh"></a>http://vbusdfgishgsihischsgcwhfhfh</td>
            <td>5/9/23</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default History