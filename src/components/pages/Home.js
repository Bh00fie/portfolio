import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="portfolioHome">
        <img className="photoHome" src="../images/photoprofile.png" alt="photoprofile" />
        <div className="descriptionHome shadow p-3 bg-white rounded">
          <h3>Abhinandan Thour</h3>
          <p>Front End Software Developer</p>
          <div className="homeLinks">
            <a href="https://github.com/Bh00fie" target="_blank" rel="noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/abhinandan-thour-42359b193/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
