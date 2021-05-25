import React, { useContext, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { UserAuthContext } from '../App'
import PostNew from './PostNew'

function Header() {
    const { user } = useContext(UserAuthContext)
    const [showModal, setShowModal] = useState(false)
    return (
      <>
        <Navbar className="justify-content-between">
          <Navbar.Brand>Adoptable: South Florida</Navbar.Brand>
          <Nav>
            {user &&
              <button
                className="add-button"
                onClick={() => setShowModal(true)}>
                +
              </button>
            }&nbsp;
          </Nav>
        </Navbar>
        <PostNew />
      </>
    )
}

export default Header
