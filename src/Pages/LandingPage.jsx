import React from 'react'
import { Row,Col,Card, } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {

  const navigateByUrl = useNavigate()
  return (
    <>
      <Row className='mt-5 mb-5 align-items-center justify-content-between w-100'> 
        <Col></Col>
        <Col lg={5}>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, enim quam. Itaque quisquam voluptatibus vitae nisi animi mollitia laudantium quas officiis, corrupti, voluptatem adipisci aliquid harum perferendis at aliquam porro!</p>
          <button onClick={()=>navigateByUrl('/home')} className='mt-5 btn btn-info text-dark'>Get Started <i className='fa-solid fa-arrow-right fa-beat ms-2'></i></button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img className='img-fluid' src="https://i.pinimg.com/originals/58/02/b3/5802b3d1ef9db4ddee6f8ad3d88e85ce.gif" alt="landing" />
        </Col>
      </Row>
      
      <div className='container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column'>
        <h3>Features</h3>
        <div className='cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100'>

        <Card className='p-3' style={{ width: '22rem' }}>
          <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/c8/aa/ba/c8aaba17c72d3b373a7b31806696e091.gif" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
        </Card>

        <Card className='p-3' style={{ width: '22rem' }}>
          <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/d7/a9/95/d7a995f34f372832860215bbe65f2cc1.gif" />
            <Card.Body>
              <Card.Title>Categorize Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
        </Card>

        <Card className='p-3' style={{ width: '22rem' }}>
          <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.gifer.com/origin/91/9186eb0e475eeff5c6856e8ed43eb31e_w200.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
        </Card>

        </div>
        
      </div>

      <div className='container border rounded p-5 border-secondary mt-5 mb-5 d-flex align-items-center justify-content-between w-100'>
        <div className="content col-lg-5">
          <h1 className='mb-5 text-warning'>Simple, Fast and Powerful</h1>
          <h6 className='mb-3'><span className='fs-5 fw-bold'>Play Everything</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae animi similique laudantium? Assumenda aliquam enim dolorum</h6>
          <h6 className='mb-3'><span className='fs-5 fw-bold'>Categorize Videos</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae animi similique laudantium? Assumenda aliquam enim dolorum</h6>
          <h6><span className='fs-5 fw-bold'>Managing History</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae animi similique laudantium? Assumenda aliquam enim dolorum </h6>
        </div>
        <div className="video col-lg-6">
        <iframe width="100%" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default LandingPage