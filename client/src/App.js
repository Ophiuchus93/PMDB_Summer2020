import React from 'react';
import Genres from "./components/Genres";
import { Route, } from "react-router-dom";
import { Container, } from "react-bootstrap";

const App = () => (
  <>
  <Container>
    <Route exact path="/" component={Genres} />
  </Container>
  </>
);

export default App;
