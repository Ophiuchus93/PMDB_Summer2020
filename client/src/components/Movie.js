import React from "react"
import { Link, } from "react-router-dom";
import { Card, } from "react-bootstrap";

const Movie = ({movie}) => {
  return (
    <>
      <Card
        style={{ width: "200px", color: "black" }}
        align="center"
        as={Link}
        to={{ pathname: `/api/genres/${movie.genre_id}/movies/${movie.id}`}}
      >
        {movie.title}
      </Card>
    </>
  )
}

export default Movie;