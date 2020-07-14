import React, { useState, useEffect} from "react";
import axios from "axios";

const Movies = ({ genreId }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // debugger
    axios.get(`/api/genres/${genreId}/movies`)
      .then(res => {
        setMovies(res.data)
      })
  }, [])
  
  return (
    <>
    </>
  )
}

export default Movies;