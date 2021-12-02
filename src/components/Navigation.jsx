import React from "react";
import { Link, withRouter } from "react-router-dom";
import taplogo from './taplogo.png';


function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              className="img-fluid rounded mb-xs-0"
              width="50"
              src={taplogo}
              alt=""
            />
            The Afterschool Program
          </Link>
          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/about" ? "active" : ""
                  }`}
              >

                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/mentors" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/mentors">
                  Mentors
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/mentees" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/mentees">
                  Mentees
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);