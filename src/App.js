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
import PetDetail from './scenes/PetDetail'

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
