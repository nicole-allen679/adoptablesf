import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'
import '../App.css'

function PetDetail() {
  const [pet, setPet] = useState()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://adoptablesf-na.web.app/pets/${id}`)
      .then((response) => response.json())
      .then((data) => setPet(data))
      .catch((err) => console.error(err))
  }, [id])

  return (
    <>
      {!pet ? (
        <p>Loading...</p>
      ) : (
        <Card>
          <Card.Header><h1>{pet.name}</h1>
          {pet.adopted && <div className="adopted"></div>}
          </Card.Header>
          <Card.Img className="imgDetail" variant="top" src={pet.img} />
          {pet.adopted && <div className="adopted"></div>}
          <Card.Body>
            <Card.Text>
              <Card.Subtitle>Age: {pet.age}</Card.Subtitle>
              <Card.Subtitle>Breed: {pet.breed}</Card.Subtitle>
              <Card.Subtitle>Rescue: {pet.rescue}</Card.Subtitle>
              <Card.Subtitle>Email: {pet.email}</Card.Subtitle>
              <Card.Text>{pet.description}</Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  )
}

export default PetDetail
