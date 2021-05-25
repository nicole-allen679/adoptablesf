import 'react-bootstrap'
import { useState, createContext } from 'react'
import AllCats from './Components/AllCats'
import Header from './Components/Header'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export const UserAuthContext = createContext(null)
export const CatContext = createContext(null)

function App() {
  const [user, setUser] = useState(null)
  const [catList, setCatList] = useState(null)
  return (
    <CatContext.Provider value={{ catList, setCatList }}>
      <UserAuthContext.Provider value={{ user, setUser }}>
        <Header />
        <Container>
          <AllCats />
        </Container>
      </UserAuthContext.Provider>
    </CatContext.Provider>
  )
}

export default App
