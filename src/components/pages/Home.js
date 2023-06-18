import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="portfolioHome">
        <img className="photoHome" src="https://media.licdn.com/dms/image/D4E03AQFTFOHQL86GQQ/profile-displayphoto-shrink_200_200/0/1667169949975?e=1692835200&v=beta&t=9N_hXlYc1yL_lR0Ek0WQDWZyxGHTjcL96hme-4nQpJM" alt="photoprofile" />
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
