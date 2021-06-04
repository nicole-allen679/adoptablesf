import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'
import PostNew from './PostNew'
import SignIn from './SignIn'

function Header() {
  return (
    <>
      <Navbar className="navBar">
      <Link to={`/`}>
        <img src="/adoptablesf.png" alt="" className="logo" />    
          </Link>
        <div className="buttons">
          <Link to={`/`}>
            <Button variant="dark">Home</Button>
          </Link>
          <PostNew />
          <SignIn />
          <SignUp />
        </div>
      </Navbar>
    </>
  )
}

export default Header
