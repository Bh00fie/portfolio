import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import CV from './components/pages/CV';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="CV" element={<CV />} />
          <Route path="about" element={<About />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

