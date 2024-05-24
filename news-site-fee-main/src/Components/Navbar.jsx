import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setCategory }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span className="badge bg-light text-dark fs-4">NewsSite</span>
        </a>
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
        <div className="collapse navbar-collapse nav-underline " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("technology")}>
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("business")}>
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("health")}>
                Health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setCategory("sports")}>
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex">
        {isLoggedIn ? (
          <button
            className="navbar-brand bg-transparent border-0 btn-outline-secondary"
            onClick={() => {
              localStorage.removeItem("isLoggedIn")
              navigate('/login');
            }}
          >
            <span className="badge bg-light text-danger fs-5 font-weight-light">
              Log out
            </span>
          </button>
        ) : (
          <>
            <Link className="navbar-brand" to="/login">
              <span className="badge bg-light text-dark fs-5 font-weight-light">
                Login
              </span>
            </Link>
            <Link className="navbar-brand" to="/register">
              <span className="badge bg-light text-dark fs-5 font-weight-light">
                Register
              </span>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
