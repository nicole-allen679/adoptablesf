import React, { useState, useContext } from 'react'
import { UserAuthContext } from '../App'
import firebase from 'firebase'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const { user, setUser } = useContext(UserAuthContext)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const formHandler = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        const json = JSON.stringify(res.user)
        localStorage.setItem('user', json)
        setUser(res.user)
        handleClose()
      })
      .catch((err) => console.log(err))
  }
  const logOut = () => {
    localStorage.clear()
    window.location.reload(false)
    firebase
      .auth()
      .signOut()
      .then((res) => {
        console.log(res)
        //res.send('Sign Out Successful')
      })
      .catch((error) => {
        console.error('error with log out')
      })
  }
  return (
    <>
      {!user ? (
        <Button variant="dark" onClick={handleShow}>
          Sign In
        </Button>
      ):(
        <Button variant="dark" onClick={logOut}>Sign Out</Button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login with Email and Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={() => formHandler()}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail2" className="form-label">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail2"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword2"
              />
            </div>
            <br />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={() => formHandler()}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SignIn
