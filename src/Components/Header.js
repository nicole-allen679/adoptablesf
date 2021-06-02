import React from 'react'
import SignUp from './SignUp'
import Navbar from 'react-bootstrap/Navbar'
import PostNew from './PostNew'
import SignIn from './SignIn'

function Header() {
  return (
    <>
      <Navbar className="navBar">
        <img src="/adoptablesf.jpg" alt="" className="logo" />
        <div className="buttons">
          <PostNew />
          <SignIn />
          <SignUp />
        </div>
      </Navbar>
    </>
  )
}

export default Header
