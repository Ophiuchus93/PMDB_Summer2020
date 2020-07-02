import React, { useState, useEffect, } from "react";
import Genre from "./Genre";
import GenreForm from "./GenreForm";
import axios from "axios";
import { CardDeck, } from "react-bootstrap";

const Genres = () => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    axios.get("/api/genres")
      .then(res => {
        setGenres(res.data)
      })
  }, [])

  const addGenre = (genre) => setGenres([ ...genres, genre])

  const deleteGenre = (id) => {
    axios.delete(`/api/genres/${id}`)
      .then(res => {
        setGenres(genres.filter(genre => genre.id !== id))
      })
  }

  const renderGenres = () => {
    return genres.map(genre => (
      <Genre
        key={genre.id}
        {...genre}
        delete={deleteGenre}
      />
    ))
  };

  return (
    <>
      <h1 align="center" >Personal Movie DataBase</h1>
      <hr />
      <GenreForm add={addGenre} />
      <br />
      <CardDeck>
        {renderGenres()}
      </CardDeck>
    </>
  )
};

export default Genres;