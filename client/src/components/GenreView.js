import React, {useState, useEffect} from "react";
import axios from "axios";
import { Button, } from "react-bootstrap"

const GenreView = (props) => {
  const [genre, setGenre] = useState({})

  useEffect(() => {
    axios.get(`/api/genres/${props.match.params.id}`)
      .then(res => {
        setGenre(res.data)
      })
  }, []);

  

  return (
    <>
      <h1 align="center">{genre.name}</h1>
      <hr />
      <Button 
      variant="outline-danger" 
      type="button"
      onClick={() => props.delete(props.match.params.id)}
      >
        Delete
      </Button>
    </>
  )
};

export default GenreView;