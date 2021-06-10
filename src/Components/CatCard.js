import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function CatCard(props) {
  return (
    <Card className="catCards">
      {props.cat.adopted && <div className="adopted"></div>}
      <Card.Img className="imgThumbnail" variant="top" src={props.cat.img} />
      <Card.Body>
        <Card.Title>Name: {props.cat.name}</Card.Title>
        <Link to={`/pets/${props.cat.id}`}>
          <Button variant="dark">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default CatCard
