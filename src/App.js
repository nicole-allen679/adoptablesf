import React, { useState, createContext } from 'react'
import 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AllCats from './Components/AllCats'
import Header from './Components/Header'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import firebase from 'firebase'
import firebaseConfig from './config'
import PetDetail from './Components/PetDetail'

firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebase.auth()

export const UserAuthContext = createContext(null)
export const CatContext = createContext(null)

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )
  const [catList, setCatList] = useState(null)
  return (
    <Router>
      <CatContext.Provider value={{ catList, setCatList }}>
        <UserAuthContext.Provider
          value={{ user, setUser, firebaseAuth, firebase }}
        >
          <Header />
          <Container className="mission">
            <h3>
              OUR MISSION: Bridge the gap between dogs and cats being adopted.
              We will do this by showing all of our cats from the rescues in
              South Florida in one place - here. All of the cats listed here are
              in need of their forever home. So, please take a look and find
              your new best friend!
            </h3>
          </Container>
          <Container className="body">
            <Switch>
              <Route path='/pets/:id' component={PetDetail} />
              <Route path="/" component={AllCats} />
            </Switch>
          </Container>
        </UserAuthContext.Provider>
      </CatContext.Provider>
    </Router>
  )
}

export default App
