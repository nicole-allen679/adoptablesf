import React, { useState, useContext } from 'react'
import { UserAuthContext } from '../App'

function SignUp() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const { setUser, firebaseAuth } = useContext(UserAuthContext)

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
      <br />
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default SignUp
