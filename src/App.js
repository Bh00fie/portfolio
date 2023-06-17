import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import CV from './components/pages/CV';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import '../src/components/style.css'

function App() {
  return (
      <Router>
        <div className='App'>
          <Home/>
          {/* <NavTabs /> */}
          {/* <Routes> */}
              {/* Define routes using the Route component to render different page components at different paths */}
              {/* Define a default route that will render the Home component */}
              {/* <Route path="/" element={<Home />} />
              <Route path="project" element={<Project />} />
              <Route path="CV" element={<CV />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} /> */}
          {/* </Routes>  */}
          <Project/>
          <CV />
          <CV />
          <CV />
          <Footer />
        </div>
      </Router>
  );
}

export default App;

