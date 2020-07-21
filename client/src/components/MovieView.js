import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, } from "react-bootstrap";

const MovieView = (props) => {
  const [movie, setMovie] = useState({})

  useEffect(() => {

    axios.get(`/api/genres/${props.match.params.genre_id}/movies/${props.match.params.id}`)
      .then(res => {
        setMovie(res.data)
      })
  }, []);

  const deleteMovie = () => {
    axios.delete(`/api/genres/${movie.genre_id}/movies/${movie.id}`)
      .then(
        setTimeout(() => props.history.push(`/api/genres/${movie.genre_id}`), 1500)
      )
  }

  return (
    <>
      <h1 align="center">{movie.title}</h1>
      <Card align="center" >
        <Card.Body>
          Leads: {movie.leads}
          <br />
          Year Released: {movie.year}
          <br />
          Rated: {movie.rated}
          <br />
          Format: {movie.format}
          <br />
          Length: {movie.length} minutes
        </Card.Body>
        <Button
          align="center"
          variant="outline-danger"
          style={{ width: "100px" }}
          onClick={() => deleteMovie(movie.genre_id, movie.id)}
        >
          Delete
          </Button>
      </Card>
    </>
  )
};

export default MovieView;