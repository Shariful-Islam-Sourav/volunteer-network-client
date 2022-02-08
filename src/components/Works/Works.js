import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import Work from "../Work/Work";

const Works = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);
  return (
    <div className="text-center">
      {works.length === 0 ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Row xs={1} md={3} lg={4} className="g-4 my-5">
          {works.map((work) => (
            <Work works={work} key={work.name}></Work>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Works;
