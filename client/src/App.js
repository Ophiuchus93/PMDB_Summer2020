import React from 'react';
import Genres from "./components/Genres";
import GenreView from "./components/GenreView";
import MovieView from "./components/MovieView";
import { Route, } from "react-router-dom";
import { Container, } from "react-bootstrap";

const App = () => (
  <>
  <Container>
    <Route exact path="/" component={Genres} />
    <Route exact path="/api/genres/:id" component={GenreView} />
    <Route exact path="/api/genres/:genre_id/movies/:id" component={MovieView} />
  </Container>
  </>
);

export default App;
