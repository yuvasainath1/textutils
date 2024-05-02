import React from "react";
import propTypes from "prop-types";
import { useState } from "react";

export default function Navbar(prop) {
  
  return (
    
    <>
      <nav className={`navbar navbar-expand-lg ${prop.bgcolor}`} id="navv">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className= {`navbar-nav`}>
              <li className="nav-item">
                <a className={`nav-link ${prop.textcolor}`} aria-current="page" href="#">
                  {prop.title}
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${prop.textcolor}`} href="#">
                  {prop.home}
                </a>
              </li>
              <li className={`nav-item `}>
                <a className={`nav-link ${prop.textcolor}`} href="#">
                  {prop.features}
                </a>
              </li>

              <div className="container-fluid">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2 "
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  ></input>
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </ul>
          </div>
          <div className="form-check form-switch">
          <input className={`form-check-input`} type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={prop.togglefun}/>
          <label className={`form-check-label ${prop.textcolor}`} htmlFor="flexSwitchCheckDefault" onClick={prop.togglefun}>{prop.mode}</label>
        </div> 
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: propTypes.string.isRequired,
  home: propTypes.string.isRequired,
};
// Navbar.defaultProps = {
//   title: "title petra pumka",
//   home: "nee address pettu",
//   bgcolor:"bg-light"
// };
