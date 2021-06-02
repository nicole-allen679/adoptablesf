import React, { useState, useContext } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { CatContext } from '../App'
import firebase from 'firebase'
import firebaseConfig from '../config'

function PostNew() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [breed, setBreed] = useState('')
  const [rescue, setRescue] = useState('')
  const [email, setEmail] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  const [description, setDescription] = useState('')
  const { setCatList } = useContext(CatContext)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function submitHandler(e) {
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
        setCatList(data)
        handleClose()
      })
      .catch((err) => console.error(err))
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
      <Button variant="dark" onClick={handleShow}>
        New
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post New Adoptable</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="mb-3">
              <input
                type="file"
                name="file"
                accept="image/*"
                onChange={(e) => handleUpload(e.target.files[0])}
              />
              <br />
              <label htmlFor="exampleInputName" className="form-label">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="name"
                className="form-control"
                id="exampleInputName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputAge" className="form-label">
                Age
              </label>
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                type="age"
                className="form-control"
                id="exampleInputAge"
              />
            </div>
            <label htmlFor="exampleInputBreed" className="form-label">
              Breed
            </label>
            <input
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              type="breed"
              className="form-control"
              id="exampleInputBreed"
            />
            <label htmlFor="exampleInputRescue" className="form-label">
              Rescue
            </label>
            <input
              value={rescue}
              onChange={(e) => setRescue(e.target.value)}
              type="rescue"
              className="form-control"
              id="exampleInputRescue"
            />
            <label htmlFor="exampleInputEmail" className="form-label">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail"
            />
            <label htmlFor="exampleInputDescription" className="form-label">
              Description
            </label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="description"
              className="form-control"
              id="exampleInputDescription"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            variant="primary"
            onClick={() => submitHandler()}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PostNew
