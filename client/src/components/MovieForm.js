import React, {useState} from "react";
import {Form, Col } from "react-bootstrap";

const MovieForm = () => {
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

  return (
    <>
      <h4>Add a Movie:</h4>
      <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Label>Movie Title:</Form.Label>
              <Form.Control 
                placeholder="Movie Title"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDirector">
              <Form.Label>Movie Director:</Form.Label>
              <Form.Control 
                placeholder="Movie Director"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row as={Col} controlId="formGridLeads">
            <Form.Group>
              <Form.Label>Movie Leads: </Form.Label>
              <Form.Control 
                placeholder="Movie Leads"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formgridYear">
              <Form.Label>Year Released: </Form.Label>
              <Form.Control 
                placeholder="Year Released"
              />
            </Form.Group>
          </Form.Row>
      </Form>
    </>
  )
}; 

export default MovieForm