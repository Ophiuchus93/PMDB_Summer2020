import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import MovieForm from "./MovieForm";
import axios from "axios";
import { Button, } from "react-bootstrap";


const Movies = ({ genreId }) => {
  const [movies, setMovies] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);

  useEffect(() => {
    // debugger
    axios.get(`/api/genres/${genreId}/movies`)
      .then(res => {
        setMovies(res.data)
      })
  }, []);

  const addMovie = (movie) => setMovies([movie, ...movies])

  const renderMovies = () => {
    return movies.map(movie => (
      <Movie key={movie.id} movie={movie} />
    ))
  };

  return (
    <>
      {toggleForm && <MovieForm genreId={genreId} addMovie={addMovie} />}
      <Button variant= "outline-info" onClick={() => setToggleForm(!toggleForm)}>{toggleForm ? "Close Form" : "Add Movie"}</Button>
      <br />
      <br />
      {renderMovies()}
    </>
  )
};

export default Movies;