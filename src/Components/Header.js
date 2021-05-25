import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import PostNew from './PostNew'

function Header() {
    return (
      <>
        <Navbar className="justify-content-between">
          <Navbar.Brand>Adoptable: South Florida</Navbar.Brand>
        </Navbar>
        <PostNew />
      </>
    )
}

export default Header
