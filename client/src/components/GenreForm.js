import React, { useState, } from "react";
import { Button, Form, } from "react-bootstrap";
import axios from "axios";

const GenreForm = (props) => {
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/genres", {name})
      .then(res => {
        props.add(res.data)
      })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Add a Genre: </Form.Label>
          <Form.Control 
            placholder="Genre Name"
            name="name"
            required
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  )
};

export default GenreForm;