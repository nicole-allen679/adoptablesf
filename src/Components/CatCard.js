import React from 'react'
import Card from 'react-bootstrap/Card'

function CatCard(props) {
  console.log(props)
  return (
    <Card className="catCards">
      {props.cat.adopted && <div className="adopted"></div>}
      <Card.Img className="img-thumbnail" variant="top" src={props.cat.img} />
      <Card.Body>
        <Card.Title>Name: {props.cat.name}</Card.Title>
        <Card.Subtitle>Age: {props.cat.age}</Card.Subtitle>
        <Card.Subtitle>Breed: {props.cat.breed}</Card.Subtitle>
        <Card.Subtitle>Rescue: {props.cat.rescue}</Card.Subtitle>
        <Card.Subtitle>Email: {props.cat.email}</Card.Subtitle>
        <Card.Text>{props.cat.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CatCard
