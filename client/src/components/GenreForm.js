import React, { useState, useEffect } from "react";
import { Button, Form, } from "react-bootstrap";
import axios from "axios";

const GenreForm = (props) => {
  const [name, setName] = useState("")

  const genre = { name: name }

  useEffect(() => {
    if (props.genre) {
      setName(props.genre.name)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.editGenre) {
      props.editGenre(props.genre.id, genre)
      props.toggleEdit()
    } else {
    axios.post("/api/genres", {name})
      .then(res => {
        props.add(res.data)
      })
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>{props.editGenre ? "Edit Genre" : "Add a Genre:" }</Form.Label>
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