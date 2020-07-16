import React, {useState, useEffect} from "react";
import axios from "axios";
import { Card, } from "react-bootstrap";

const MovieView = (props) => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
   
    axios.get(`/api/genres/${props.match.params.genre_id}/movies/${props.match.params.id}`)
      .then(res => {
        setMovie(res.data)
      })
  }, []);

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
      </Card>
    </>
  )
};

export default MovieView;