import React from "react";
import Card from 'react-bootstrap/Card';

function generateCards(num) {
  const cards = [];
  
  for (let i = 1; i <= num; i++) {
    cards.push(
      <div key={i} id={`card${i}`}>
        <Card>
          <Card.Img variant="top" src="https://placehold.co/400x300" />
          <Card.Body>
            <Card.Title>Project {i}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
  
  return cards;
}

function Project() {
  return (
    <div>
      <h1 className="sectionTitle">Projects</h1>
      <div id="projectsCard">
        {generateCards(2)} {/* Change the argument to the desired number of cards */}
      </div>
    </div>
  );
}

export default Project;
