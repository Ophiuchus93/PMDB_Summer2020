import React, { useState } from "react";
import { Button, Col, Form, } from "react-bootstrap";
import axios from "axios";

const MovieForm = (props) => {
  const [title, setTitle] = useState("")
  const [director, setDirector] = useState("")
  const [leads, setLeads] = useState("")
  const [year, setYear] = useState("")
  const [rated, setRated] = useState("")
  const [format, setFormat] = useState("")
  const [length, setLength] = useState("")

  const newMovie = {
    title: title,
    director: director,
    leads: leads,
    year: year,
    rated: rated,
    format: format,
    length: length
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/genres/${props.genreId}/movies`, newMovie)
      .then(res => {
        props.addMovie(res.data)
      })
  };

  return (
    <>
      <h4>Add a Movie:</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlid="formGridTitle">
            <Form.Label>Movie Title:</Form.Label>
            <Form.Control
              placeholder="Movie Title"
              name={title}
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlid="formGridDirector">
            <Form.Label>Movie Director:</Form.Label>
            <Form.Control
              placeholder="Movie Director"
              name={director}
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Label>Movie Leads: </Form.Label>
            <Form.Control
              placeholder="Movie Leads"
              name={leads}
              value={leads}
              onChange={(e) => setLeads(e.target.value)}
            />
        </Form.Row>
        <br />

        <Form.Row as={Col} controlid="formGridLeads">

          <Form.Group as={Col} controlid="formgridYear">
            <Form.Label>Year Released: </Form.Label>
            <Form.Control
              placeholder="Year Released"
              name={year}
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlid="formgridYear">
            <Form.Label>Rated: </Form.Label>
            <Form.Control
              placeholder="Rated e.g. PG, PG-13"
              name={rated}
              value={rated}
              required
              onChange={(e) => setRated(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlid="formgridYear">
            <Form.Label>Format: </Form.Label>
            <Form.Control
              placeholder="Bluray, DVD, etc."
              name={format}
              value={format}
              required
              onChange={(e) => setFormat(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlid="formgridYear">
            <Form.Label>Movie Length: </Form.Label>
            <Form.Control
              placeholder="Movie Length"
              name={length}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="outline-primary" type="submit" >Submit</Button>
      </Form>
    </>
  )
};

export default MovieForm