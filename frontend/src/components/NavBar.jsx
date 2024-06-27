import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Store Application
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to='/'>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/courseAll'>
                  Cursos en venta
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/coursePurchased'>
                  Cursos comprados
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/community'>
                  Comunidad
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/createCourse'>
                  Create Course
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/user'>
                  Create User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-primary border-dark text-dark bg-white" to="/loginRegister">Login & Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
