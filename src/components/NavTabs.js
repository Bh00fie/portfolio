import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Abhinandan Thour
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="project"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="CV"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          CV
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="about"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          About Me
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact Me
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
