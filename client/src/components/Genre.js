import React from "react";
import { Link, } from "react-router-dom"
import { Card, } from "react-bootstrap";

const Genre = (props) => {
  return (
    <>
      <div>
        <Card
          bg="info"
          border="dark"
          style={{ width: "5rem", color: "white" }}
          align="center"
          as={Link}
          to={{
            pathname: `/api/genres/${props.id}`,
            state: {delete: props.delete}
          }}
        >
          {props.name}
        </Card>
    </div>
    </>
  )
};

export default Genre;