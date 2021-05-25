import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import CardColumns from 'react-bootstrap/CardColumns'
import CatCard from './CatCard'

function AllCats() {
  const [catList, setCatList] = useState()

  useEffect(() => {
    fetch('http://localhost:5000/pets')
      .then((response) => response.json())
      .then((data) => setCatList(data))
      .catch((err) => console.log(err.message))
  }, [])

  console.log(catList)

  return (
    <CardColumns>
      <Row>
        {!catList ? (<p>Loading...</p>
        ):(
            catList.map(cat => {
                return<CatCard cat={cat}/>
            })
        )}
      </Row>
    </CardColumns>
  )
}

export default AllCats
