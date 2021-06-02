import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { useParams } from 'react-router-dom'

function PetDetail() {
  const [pet, setPet] = useState('')
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:5000/pets/${id}`)
      .then((response) => response.json())
      .then((data) => setPet(data))
      .catch((err) => console.log(err))
  }, [id])
  return (
    <>
      {!pet ? (
        <p>Loading...</p>
      ) : (
        <Card>
          <Card.Img variant="top" src={pet.img} />
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
