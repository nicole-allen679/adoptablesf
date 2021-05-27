import 'react-bootstrap'
import { useState, createContext } from 'react'
import AllCats from './Components/AllCats'
import Header from './Components/Header'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import firebase from 'firebase'
import firebaseConfig from './config'

 firebase.initializeApp(firebaseConfig)
 const firebaseAuth = firebase.auth()

export const UserAuthContext = createContext(null)
export const CatContext = createContext(null)

function App() {
   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
  const [catList, setCatList] = useState(null)
  return (
    <CatContext.Provider value={{ catList, setCatList }}>
      <UserAuthContext.Provider value={{ user, setUser, firebaseAuth }}>
        <Header />
        <Container>
          <AllCats />
        </Container>
      </UserAuthContext.Provider>
    </CatContext.Provider>
  )
}

export default App
