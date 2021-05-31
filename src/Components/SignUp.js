import React, { useState, useContext } from 'react'
import { UserAuthContext } from '../App'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function SignUp() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const { setUser, firebaseAuth } = useContext(UserAuthContext)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function createUser() {
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
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
    e.preventDefault()
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        const json = JSON.stringify(res.user)
        localStorage.setItem('user', json)
        setUser(res.user)
        createUser()
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up! </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => signUpHandler(e)}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <label for="exampleInputFirstName" class="form-label">
              First Name
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="firstName"
              class="form-control"
              id="exampleInputFirstName"
            />
            <label for="exampleInputLastName" class="form-label">
              Last Name
            </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="lastName"
              class="form-control"
              id="exampleInputLastName"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SignUp
