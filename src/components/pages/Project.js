import React from "react";
import Card from 'react-bootstrap/Card';
import './Project.css'; // Import CSS file for styling

function generateCards(num) {
  const cards = [];
  
  for (let i = 1; i <= num; i++) {
    cards.push(
      <div key={i} className={`card ${i % 2 === 0 ? 'left' : 'right'}`}>
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
      <div id="projectsCard" className="cardsContainer">
        {generateCards(4)} {/* Change the argument to the desired number of cards */}
      </div>
    </div>
  );
}

export default Project;
