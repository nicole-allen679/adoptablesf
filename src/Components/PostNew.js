import React, { useState } from 'react'

function PostNew(){
    const [name, setName] = useState(null)
    const [age, setAge] = useState(null)
    const [breed, setBreed] = useState(null)
    const [rescue, setRescue] = useState(null)
    const [email, setEmail] = useState(null)

    return(
        <form>
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">
            Name
          </label>
          <input
            // value={email}
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
            // value={password}
            type="age"
            class="form-control"
            id="exampleInputAge"
          />
        </div>
        <label for="exampleInputBreed" class="form-label">
          Breed
        </label>
        <input
          //value={firstName}
          type="breed"
          class="form-control"
          id="exampleInputBreed"
        />
        <label for="exampleInputRescue" class="form-label">
          Rescue
        </label>
        <input
          //value={lastName}
          type="rescue"
          class="form-control"
          id="exampleInputRescue"
        />
        <label for="exampleInputEmail" class="form-label">
          Email
        </label>
        <input
          //value={lastName}
          type="email"
          class="form-control"
          id="exampleInputEmail"
        />
        <br />
        <input type="file" />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    )
}

export default PostNew
