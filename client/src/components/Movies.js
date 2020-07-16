import React, { useState, useEffect} from "react";
import Movie from "./Movie";
import MovieForm from "./MovieForm";
import axios from "axios";


const Movies = ({ genreId }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // debugger
    axios.get(`/api/genres/${genreId}/movies`)
      .then(res => {
        setMovies(res.data)
      })
  }, []);

  // const addMovie = (movie) = setMovies([...movies, movie])
  
  const renderMovies = () => {
    return movies.map(movie => (
    <Movie key={movie.id} movie={movie} />
    ))
  };

  return (
    <>
    <MovieForm />
    <br />
    {renderMovies()}
    </>
  )
};

export default Movies;