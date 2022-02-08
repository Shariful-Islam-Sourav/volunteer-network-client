import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './work.css'

const Work = ({ works }) => {
  return (
    <Col>
      <Card style={{backgroundColor: `#${works.cardbg}`}} className="border-0 volunteer-card">
        <Card.Img variant="top" src={works.img}/>
        <Card.Body>
          <Card.Title className="text-white my-2">{works.name}</Card.Title>
          <Link to={`/registerEvent/${works.name}`}>
          <Button className="text-white border volunteer-btn" variant="white"><i class="fab fa-get-pocket"></i> Register</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Work;
