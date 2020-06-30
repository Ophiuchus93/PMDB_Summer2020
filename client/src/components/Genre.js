import React from "react";
import { Card, } from "react-bootstrap";

const Genre = (props) => {
  return (
    <>
      <div>
        <Card bg="info" border="dark" style={{ width: "5rem" }} align="center" >
          {props.name}
        </Card>
      </div>
    </>
  )
};

export default Genre;