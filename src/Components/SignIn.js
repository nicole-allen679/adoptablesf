import React, { useState, useContext } from 'react'
import { UserAuthContext } from '../App'
import firebase from 'firebase'

function SignIn(e) {
  const { setUser } = useContext(UserAuthContext)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const formHandler = ({ email, password }) => {
    e.preventDefault()
    firebase
      .auth()
      .SignInWithEmailAndPassword(email, password)
      .then((res) => {
        const json = JSON.stringify(res.user)
        localStorage.setItem('user', json)
        setUser(res.user)
      })
  }
  return (
    <form onSubmit={(e) => formHandler(e)}>
      <div class="mb-3">
        <label for="exampleInputEmail2" class="form-label">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          class="form-control"
          id="exampleInputEmail2"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword2" class="form-label">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="age"
          class="form-control"
          id="exampleInputPassword2"
        />
      </div>
      <br />
      <button type="submit" class="btn btn-primary">
        Sign in
      </button>
    </form>
  )
}

export default SignIn
