import React, { useState, useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { CatContext } from '../App'
import firebase from 'firebase'
import firebaseConfig from '../config'

function PostNew(props) {
  const [name, setName] = useState(null)
  const [age, setAge] = useState(null)
  const [breed, setBreed] = useState(null)
  const [rescue, setRescue] = useState(null)
  const [email, setEmail] = useState(null)
  const [photoUrl, setPhotoUrl] = useState(null)
  const [description, setDescription] = useState(null)
  const { setCatList } = useContext(CatContext)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function submitHandler(e) {
    e.preventDefault()
    const newPet = {
      name: name,
      age: age,
      breed: breed,
      rescue: rescue,
      email: email,
      img: photoUrl,
      description: description,
    }

    fetch('http://localhost:5000/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPet),
    })
      .then((response) => response.json())
      .then((data) => {
        // setNewPet(data)
        // props.onHide()
        setCatList(data)
      })
  }
  function handleUpload(file) {
    if (!firebase.app.length) {
      firebase.initializeApp(firebaseConfig)
    }
    const fileName = Date.now() + '.jpg' // TODO: make this dynamic
    const storageRef = firebase.storage()
    const uploadTask = storageRef
      .ref()
      .child('/catPics/' + fileName)
      .put(file)
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {},
      (error) => console.error(error),
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL)
          setPhotoUrl(downloadURL)
        })
      }
    )
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        New
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post New Adoptable</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => submitHandler(e)}>
            <div class="mb-3">
              <input
                type="file"
                name="file"
                accept="image/*"
                onChange={(e) => handleUpload(e.target.files[0])}
              />
              <br />
              <label for="exampleInputName" class="form-label">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="name"
                class="form-control"
                id="exampleInputName"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputAge" class="form-label">
                Age
              </label>
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                type="age"
                class="form-control"
                id="exampleInputAge"
              />
            </div>
            <label for="exampleInputBreed" class="form-label">
              Breed
            </label>
            <input
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              type="breed"
              class="form-control"
              id="exampleInputBreed"
            />
            <label for="exampleInputRescue" class="form-label">
              Rescue
            </label>
            <input
              value={rescue}
              onChange={(e) => setRescue(e.target.value)}
              type="rescue"
              class="form-control"
              id="exampleInputRescue"
            />
            <label for="exampleInputEmail" class="form-label">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              class="form-control"
              id="exampleInputEmail"
            />
            <label for="exampleInputDescription" class="form-label">
              Description
            </label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="description"
              class="form-control"
              id="exampleInputDescription"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PostNew
