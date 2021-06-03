import React, { useContext, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import { CatContext } from '../App'
import CatCard from './CatCard'

function AllCats() {
  const { catList, setCatList } = useContext(CatContext)

  useEffect(() => {
    fetch('http://localhost:5000/pets')
      .then((response) => response.json())
      .then((data) => setCatList(data))
      .catch((err) => console.error(err.message))
  }, [setCatList])

  return (
    <>
      <Container className="mission">
        <h3>
          OUR MISSION: Bridge the gap between dogs and cats being adopted. We
          will do this by showing all of our cats from the rescues in South
          Florida in one place - here. All of the cats listed here are in need
          of their forever home. So, please take a look and find your new best
          friend!
        </h3>
      </Container>
      <CardColumns>
        <Row>
          {!catList ? (
            <p>Loading...</p>
          ) : (
            catList.map((cat) => {
              return <CatCard cat={cat} key={cat.id} adopted={cat.adopted} />
            })
          )}
        </Row>
      </CardColumns>
    </>
  )
}

export default AllCats
