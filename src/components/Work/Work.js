import React from "react";
import { Card, Col } from "react-bootstrap";
import './work.css'

const Work = ({ works }) => {
  return (
    <Col>
      <Card style={{backgroundColor: `#${works.cardbg}`}} className="border-0 volunteer-card">
        <Card.Img variant="top" src={works.img}/>
        <Card.Body>
          <Card.Title className="text-white my-2">{works.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Work;
