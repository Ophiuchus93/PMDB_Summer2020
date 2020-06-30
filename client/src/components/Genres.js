import React, { useState, useEffect, } from "react";
import Genre from "./Genre";
import axios from "axios";
import { Card, } from "react-bootstrap";

const Genres = () => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    axios.get("/api/genres")
      .then(res => {
        setGenres(res.data)
      })
  }, [])

  const renderGenres = () => {
    return genres.map(genre => (
      <Genre 
      key={genre.id}
      {...genre}
      />
    ))
  };

  return (
    <>
      <h1 align="center" >Personal Movie DataBase</h1>
      <hr />
      {renderGenres()}
    </>
  )
};

export default Genres;