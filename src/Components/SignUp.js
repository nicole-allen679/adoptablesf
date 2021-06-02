import React, { useState, useContext } from 'react'
import { UserAuthContext } from '../App'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import firebase from 'firebase'

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const { setUser } = useContext(UserAuthContext)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function createUser(uid) {
    const user = {
      firstName,
      lastName,
      email,
      uid,
    }
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err))
  }

  function signUpHandler(e) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        const json = JSON.stringify(res.user)
        localStorage.setItem('user', json)
        setUser(res.user)
        createUser(res.user.uid)
      })
      .catch((err) => console.log(err))
      handleClose()
  }
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up! </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => signUpHandler(e)}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <label htmlFor="exampleInputFirstName" className="form-label">
              First Name
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="firstName"
              className="form-control"
              id="exampleInputFirstName"
            />
            <label htmlFor="exampleInputLastName" className="form-label">
              Last Name
            </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="lastName"
              className="form-control"
              id="exampleInputLastName"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            variant="primary"
            onClick={() => signUpHandler()}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SignUp
