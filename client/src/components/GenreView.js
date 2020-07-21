import React, { useState, useEffect } from "react";
import GenreForm from "./GenreForm";
import Movies from "./Movies";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, } from "react-bootstrap"

const GenreView = (props) => {
  const [genre, setGenre] = useState({})
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    axios.get(`/api/genres/${props.match.params.id}`)
      .then(res => {
        setGenre(res.data)
      })
  }, []);

  const deleteGenre = () => {
    axios.delete(`/api/genres/${props.match.params.id}`)
      .then(
        setTimeout(() => props.history.push("/"), 100)
      )
  }

  const editGenre = (id, genre) => {
    // debugger
    axios.put(`/api/genres/${id}`, genre)
      .then(res => {
        setGenre(res.data)
      })
  }

  return (
    <>
      {editing ? <GenreForm toggleEdit={setEditing} editGenre={editGenre} genre={genre}/> : 
      <h1 align="center">{genre.name}</h1>}
      <hr />
      <Button
        variant="outline-danger"
        type="button"
        onClick={() => deleteGenre(props.match.params.id)}
      >
        Delete
      </Button>

      <Button
        variant="outline-warning"
        type="button"
        onClick={() => setEditing(!editing)}
      >
        Edit
      </Button>
      <Button 
        variant="outline-dark"
        onClick={() => props.history.goBack()}
      >
        Back
      </Button>
      <br />
      <br />
      <Movies genreId={props.match.params.id}/>
    </>
  )
};

export default GenreView;