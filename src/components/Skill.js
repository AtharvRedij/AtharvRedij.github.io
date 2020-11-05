import React from "react";
import { Card } from "react-bootstrap";

const Skill = ({ name, img }) => {
  return (
    <Card
      className="m-2 grow"
      style={{ minWidth: "8rem", maxWidth: "12rem", flexBasis: "25%" }}
    >
      <Card.Img variant="top" src={img} className="mx-auto w-fc mt-2" />
      <Card.Body className="mx-auto">
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Skill;
