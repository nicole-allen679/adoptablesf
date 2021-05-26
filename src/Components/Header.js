import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import PostNew from './PostNew'

function Header() {
  return (
    <>
      <Navbar className="justify-content-between">
        <img src="/adoptablesf.jpg" alt="" className="logo" />
      </Navbar>
      <PostNew />
    </>
  )
}

export default Header
