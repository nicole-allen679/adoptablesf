import SignUp from './SignUp'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import PostNew from './PostNew'
import SignIn from './SignIn'

function Header() {
  return (
    <>
      <Navbar className="navBar">
        <img src="/adoptablesf.jpg" alt="" className="logo" />
        <PostNew />
        <SignIn />
        <SignUp />
      </Navbar>
    </>
  )
}

export default Header
