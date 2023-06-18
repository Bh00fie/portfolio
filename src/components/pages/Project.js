import React from "react";
import Card from 'react-bootstrap/Card';

function Project() {
  return (
    <div>
      <h1 className="sectionTitle">Projects</h1>
      <div id="projectsCard">
        <div id="cardOne">
          <Card>
            <Card.Img variant="top" src="https://placehold.co/400x300" />
            <Card.Body>
              <Card.Title> Project 1 </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Project;
