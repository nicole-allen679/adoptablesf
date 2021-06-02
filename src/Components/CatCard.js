import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function CatCard(props) {
  return (
    <Card className="catCards">
      {props.cat.adopted && <div className="adopted"></div>}
      <Card.Img className="img-thumbnail" variant="top" src={props.cat.img} />
      <Card.Body>
        <Card.Title>Name: {props.cat.name}</Card.Title>
        <Button>Details</Button>
      </Card.Body>
    </Card>
  )
}

export default CatCard
