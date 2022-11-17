import React from 'react';
import { Link } from "react-router-dom";
export default function Nav(props) {

  return (

    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{ position: "sticky", top: '0px',zIndex:"9999" }}>
        <div className="container-fluid">
      
          <Link className="navbar-brand text-center" to="/"><strong>{props.logo}</strong></Link>
      
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">Contact</Link>
              </li> */}
              {/* <li className="nav-item dropdown">
                <span  className="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  My Project
                </span>
                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/textutils">Textutils</Link></li>
                  <li><Link className="dropdown-item" to="/news">News</Link></li>
                  
                </ul> 

              </li> */}
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.mode === 'light' ? 'Dark' : 'Light'} Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>

  )
 
}
