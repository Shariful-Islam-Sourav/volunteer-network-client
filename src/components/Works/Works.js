import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Work from "../Work/Work";

const Works = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
      fetch("fakedata.json")
      .then(res => res.json())
      .then(data => setWorks(data))
  }, []);
  return (
  <Row xs={1} md={3} className="g-4 my-5">
      {works.map((work) => <Work works={work} key={work.name}></Work>)}
  </Row>
  );
};

export default Works;
