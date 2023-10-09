import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-secondary">
        <Container>
          <Navbar.Brand className='border-0'>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}} className='fs-4'>
            <i className="fa-solid fa-cloud-arrow-up me-2"></i>{' '}
              Media Player
          </Link>
          </Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default Header